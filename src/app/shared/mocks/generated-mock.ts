import { AdvisoryChanges } from '../models/generated.model';
import { ProductComponents } from './release-advisory-mock-generator/constants';
import { generateChangesData } from './release-advisory-mock-generator/generator';

export function getChanges(productName: ProductComponents): AdvisoryChanges {
  return generateChangesData(productName, 'v2022.08', 'v2023.08', 'Web');
}
