import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
import semver from 'semver';

import {
  incrementCalVer,
  getPartsCalVer,
  getDiscipline,
  getChangeType,
  getRandomVersionByChangeType,
  getTitle,
  getParseableCalVer,
  getAmountOfCalversBetweenRange,
  randomIntFromInterval,
  getEntryInArray,
} from './utils';

import {
  ChangeTypeName,
  changeTypesOptions,
  softwareComponentSuffixes,
  softwareComponentsByProduct,
} from './constants';
import { AdvisoryChanges } from '../../models/generated.model';

export function generateChangesData(
  product,
  calVerSourceVersion,
  calVerTargetVersion,
  frontend
): AdvisoryChanges {
  const data = {
    changes: [],
  };
  const versionsByComponent = {};
  const disciplines = ['Backend'];
  if (!Array.isArray(frontend)) {
    disciplines.push(frontend);
  } else {
    disciplines.push(...frontend);
  }
  const parseableTargetVersion = getParseableCalVer(calVerTargetVersion);
  const parseableSourceVersion = getParseableCalVer(calVerSourceVersion);

  const lastTargetVersion = incrementCalVer(parseableTargetVersion);

  let calVer = incrementCalVer(calVerSourceVersion);

  getAmountOfCalversBetweenRange(
    parseableSourceVersion,
    parseableTargetVersion
  );

  while (calVer !== lastTargetVersion) {
    const calverParts = getPartsCalVer(calVer);
    let changeTypes = [...changeTypesOptions];
    const monthNumber = parseInt(calverParts.month, 10);
    if (monthNumber !== 3 && monthNumber !== 10) {
      changeTypes.shift();
    }
    const change = {
      calVer,
      component: '',
      product,
      discipline: getDiscipline(disciplines),
      changeType: getChangeType(changeTypes),
      mitigationLink: '',
    };

    if (
      change.changeType.name === ChangeTypeName.breakingChange ||
      change.changeType.name === ChangeTypeName.deprecated
    ) {
      let urlPortion = change.discipline + '-devkit';
      if (change.discipline === 'iOS' || change.discipline === 'Android') {
        urlPortion = 'mobile-devkit';
      }
      change.mitigationLink =
        'https://backbase.io/developers/' + urlPortion.toLowerCase();
    }
    change['description'] = lorem.generateParagraphs(
      randomIntFromInterval(2, 4)
    );

    const componentSuffix = softwareComponentSuffixes[change.discipline];
    const component = getEntryInArray(
      softwareComponentsByProduct[product],
      'componentsByProduct'
    );
    change.component = component.software + componentSuffix;
    const storedVersion =
      versionsByComponent[component.software + componentSuffix];

    if (storedVersion) {
      const minorOrPatch = ['minor', 'patch'];
      switch (change.changeType.name) {
        case ChangeTypeName.breakingChange:
          change['version'] = semver.inc(storedVersion, 'major');
          break;
        case ChangeTypeName.deprecated:
        case ChangeTypeName.enhancement:
          change['version'] = semver.inc(
            storedVersion,
            minorOrPatch[Math.floor(Math.random() * minorOrPatch.length)]
          );
          break;
        case ChangeTypeName.bugFix:
        case ChangeTypeName.securityFix:
          change['version'] = semver.inc(storedVersion, 'patch');
          break;
        case ChangeTypeName.feature:
          change['version'] = semver.inc(storedVersion, 'minor');
          break;
      }
    } else {
      change['version'] = getRandomVersionByChangeType(change.changeType);
    }
    versionsByComponent[component.software + componentSuffix] =
      change['version'];

    change['title'] = getTitle(
      change.discipline,
      component,
      componentSuffix,
      change['version'],
      calVer,
      change.changeType
    );

    data.changes.push(change);
    if (
      data.changes.length &&
      data.changes.length % randomIntFromInterval(2, 5) === 0
    ) {
      calVer = incrementCalVer(calVer);
    }
  }
  return data;
}
