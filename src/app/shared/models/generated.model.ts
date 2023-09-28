import { ChangeType, Discipline } from './static.model';

export interface Changes {
  calVer: string;
  component: string;
  product: string;
  discipline: Discipline;
  changeType: ChangeType;
  mitigationLink: string;
  description: string;
  version: string;
  title: string;
}

export interface AdvisoryChanges {
  changes: Changes[];
}
