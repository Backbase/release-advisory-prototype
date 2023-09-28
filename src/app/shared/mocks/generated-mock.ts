import { AdvisoryChanges } from '../models/generated.model';
import { generateChangesData } from './release-advisory-mock-generator/generator';

export function getChanges(): AdvisoryChanges {
  return generateChangesData(
    'Business Banking USA',
    'v2022.08',
    'v2023.08',
    'Web'
  );
}
