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
  name: string;
  color: string;
  isChecked: boolean;
}

export interface Discipline {
  name: string;
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
