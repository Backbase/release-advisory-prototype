import { ChangeType, Discipline, ProductComponent } from './static.model';

export interface Changes {
  calVer: string;
  component: string;
  product: ProductComponent | string;
  discipline: Discipline | string;
  changeType: ChangeType;
  mitigationLink: string;
  description: string;
  version: string;
  title: string;
}

export interface AdvisoryChanges {
  changes: Changes[];
}
