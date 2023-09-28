import {
  ChangeTypeName,
  Disciplines,
} from '../mocks/release-advisory-mock-generator/constants';

export type ChangeTitle =
  | 'Change'
  | 'Discipline'
  | 'Product'
  | 'Calver'
  | 'Journey'
  | 'Component'
  | 'Version'
  | 'Change Type'
  | 'View';

export interface ChangeType {
  name: ChangeTypeName;
  color: string;
  isChecked: boolean;
}

export interface Discipline {
  name: Disciplines;
  isSelected: boolean;
}

export interface ProductComponent {
  name: string;
  isSelected: boolean;
}

export interface ReleaseChanges {
  change: string;
  discipline: Discipline;
  calver: string;
  product: ProductComponent;
  journey: ProductComponent;
  component: ProductComponent;
  version: string;
  changeType: ChangeType;
}

export type Calver = string;
export type Semver = string;

interface Product {
  id: string;
  name: string;
  calver: Calver;
  journey: Journey;
  discipline: Disciplines;
}

interface Journey {
  id: string;
  name: string;
  calver: Calver;
  component: Component;
}

interface Component {
  id: string;
  name: string;
  semver: Semver;
  changeType: ChangeType;
  description: string;
}

export interface AdvisoryDetails {
  calver: Calver;
  product: Product;
}
