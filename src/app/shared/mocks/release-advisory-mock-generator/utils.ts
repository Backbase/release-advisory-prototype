import { ChangeType } from '../../models/static.model';
import { ChangeTypeName, getPrefixesTitleByChangeType } from './constants';

export function getParseableCalVer(versionCalVer) {
  return versionCalVer.replace(/^v/, '');
}

export function getPartsCalVer(versionCalVer) {
  const parseableCalver = getParseableCalVer(versionCalVer);
  const ltsParts = parseableCalver.split('-LTS');
  const isLTS = ltsParts.length > 1;
  const versionParts = ltsParts[0].split('.');
  return {
    isLTS,
    year: versionParts[0],
    month: versionParts[1],
    patch: versionParts[2] || '',
  };
}

export function zeroLeading(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number + '';
  }
}

export function getRandomVersionByChangeType(changeType: ChangeType) {
  const minorOrPatch = ['minor', 'patch'];

  switch (changeType.name) {
    case ChangeTypeName.breakingChange:
      return generateRandomSemver('major');
    case ChangeTypeName.deprecated:
    case ChangeTypeName.enhancement:
      return generateRandomSemver(
        minorOrPatch[Math.floor(Math.random() * minorOrPatch.length)]
      );
    case ChangeTypeName.bugFix:
    case ChangeTypeName.securityFix:
      return generateRandomSemver('patch');
    case ChangeTypeName.feature:
      return generateRandomSemver('minor');
  }
}

function generateRandomSemver(type) {
  switch (type) {
    case 'major':
      return randomIntFromInterval(1, 9) + '.0.0';
    case 'minor':
      return (
        randomIntFromInterval(1, 0) + '.' + randomIntFromInterval(1, 40) + '.0'
      );
    case 'patch':
      return (
        randomIntFromInterval(1, 0) +
        '.' +
        randomIntFromInterval(1, 40) +
        '.' +
        randomIntFromInterval(1, 40)
      );
  }
}

export function getAmountOfCalversBetweenRange(startCalver, endCalVer) {
  let amount = 0;

  let calVer = incrementCalVer(startCalver);
  const lastTargetVersion = incrementCalVer(endCalVer);

  while (calVer !== lastTargetVersion) {
    amount++;
    calVer = incrementCalVer(calVer);
  }

  return amount;
}

export function incrementCalVer(calVer) {
  const versionParts = getPartsCalVer(calVer);
  let year = parseInt(versionParts.year, 10);
  const month = parseInt(versionParts.month, 10);
  let nextMonth = zeroLeading(month + 1);

  let incrementedCalVer = '';

  if (nextMonth === '02' || nextMonth === '09') {
    incrementedCalVer = [year, nextMonth].join('.') + '-LTS';
  } else {
    if (nextMonth === '13') {
      year = year + 1;
      nextMonth = '01';
    }
    incrementedCalVer = [year, nextMonth].join('.');
  }
  return incrementedCalVer;
}

export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getEntryInArray(array, message = '') {
  try {
    return array[Math.floor(Math.random() * array?.length)];
  } catch (error) {
    console.log('error:', error);
    return '';
  }
}
export function getDiscipline(disciplines) {
  return getEntryInArray(disciplines);
}
export function getChangeType(changeTypes): ChangeType {
  const type = getEntryInArray(changeTypes);
  return {
    color: generateChangeColor(type),
    isChecked: true,
    name: type,
  };
}

function generateChangeColor(changeType: ChangeTypeName) {
  switch (changeType) {
    case ChangeTypeName.breakingChange:
      return 'warn';
    case ChangeTypeName.deprecated:
      return 'accent';
    case ChangeTypeName.bugFix:
      return 'bugfix';
    case ChangeTypeName.securityFix:
      return 'primary';
    default:
      return 'primary';
  }
}

export function getTitle(
  discipline: string,
  component,
  componentSuffix: string,
  version: string,
  calver: string,
  changeType: ChangeType
) {
  let bugNames = '';
  if (changeType.name === ChangeTypeName.bugFix || ChangeTypeName.securityFix) {
    // bugNames = getEntryInArray(bugNames[changeType][discipline], 'bugNames');
  }

  const titlePrefixes = getPrefixesTitleByChangeType(
    calver,
    component,
    componentSuffix,
    version,
    bugNames
  );

  return (
    getEntryInArray(titlePrefixes[changeType.name]) + ' ' + component.product
  );
}
