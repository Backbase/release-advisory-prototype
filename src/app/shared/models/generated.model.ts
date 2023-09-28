import { ChangeType, Discipline } from './static.model';

export interface Changes {
  calVer: string;
  component: string;
  product: string;
  // discipline: Discipline;
  discipline: string;
  // changeType: ChangeType;
  changeType: string;
  mitigationLink: string;
  description: string;
  version: string;
  title: string;
}

export interface AdvisoryChanges {
  changes: Changes[];
}
