import {
  ChangeTitle,
  ChangeType,
  Discipline,
  ProductComponent,
  ReleaseChanges,
} from '../models/static.model';

export const calVerOptions: string[] = [
  '2022.01',
  '2022.02',
  '2022.03',
  '2022.04',
  '2022.05',
  '2022.06',
  '2022.07',
  '2022.08',
  '2022.09',
  '2022.10',
  '2022.11',
  '2022.12',
  '2023.01',
];

export const disciplines: Discipline[] = [
  { name: 'Web', isSelected: true },
  { name: 'Backend', isSelected: true },
  { name: 'iOS', isSelected: true },
  { name: 'Android', isSelected: true },
];

export const changeType: ChangeType[] = [
  { name: 'New feature', color: 'primary', isChecked: true },
  { name: 'Enhancements', color: 'primary', isChecked: false },
  { name: 'Bug fix', color: 'bugfix', isChecked: true },
  { name: 'Deprecations', color: 'accent', isChecked: true },
  { name: 'Breaking change', color: 'warn', isChecked: true },
];

export const components: ProductComponent[] = [
  {
    name: 'Software component A',
    isSelected: false,
  },
  {
    name: 'Software component B',
    isSelected: false,
  },
  {
    name: 'Software component C',
    isSelected: false,
  },
  {
    name: 'Software component D',
    isSelected: false,
  },
  {
    name: 'Software component E',
    isSelected: false,
  },
];

export const journeys: ProductComponent[] = [
  {
    name: 'Accounts & Transactions',
    isSelected: false,
  },
  {
    name: 'Audit service',
    isSelected: false,
  },
  {
    name: 'Engagement',
    isSelected: false,
  },
  {
    name: 'Contacts',
    isSelected: false,
  },
  {
    name: 'Notifications',
    isSelected: false,
  },
];

export const changeTypeHeadings: ChangeTitle[] = [
  'Change',
  'Discipline',
  'Product',
  'Calver',
  'Journey',
  'Component',
  'Version',
  'Change Type',
  'View',
];

export const productList: ProductComponent[] = [
  {
    name: 'Retail Banking',
    isSelected: false,
  },
  {
    name: 'Business Banking',
    isSelected: false,
  },
  {
    name: 'Wealth Management',
    isSelected: false,
  },
  {
    name: 'Digital Onboarding',
    isSelected: false,
  },
  {
    name: 'Digital Lending',
    isSelected: false,
  },
  {
    name: 'Digital Assist',
    isSelected: false,
  },
  {
    name: 'Digital Engage',
    isSelected: false,
  }
];

export const dataSource: ReleaseChanges[] = [
  {
    change: 'Change Title A v Description A',
    discipline: disciplines[0],
    calver: calVerOptions[1],
    product: productList[0],
    journey: journeys[0],
    component: components[0],
    version: '3.3.1',
    changeType: changeType[0],
  },
  {
    change: 'Change Title B v Description B',
    discipline: disciplines[2],
    calver: calVerOptions[2],
    journey: journeys[2],
    product: productList[2],
    component: components[2],
    version: '3.1.0',
    changeType: changeType[2],
  },
  {
    change: 'Change Title C v Description C',
    discipline: disciplines[1],
    calver: calVerOptions[2],
    journey: journeys[1],
    product: productList[3],
    component: components[3],
    version: '2.1.0',
    changeType: changeType[4],
  },
  {
    change: 'Change Title D v Description D',
    discipline: disciplines[3],
    calver: calVerOptions[3],
    journey: journeys[3],
    product: productList[0],
    component: components[3],
    version: '4.1.3',
    changeType: changeType[3],
  },
  {
    change: 'Change Title E v Description E',
    discipline: disciplines[1],
    calver: calVerOptions[2],
    journey: journeys[2],
    product: productList[4],
    component: components[2],
    version: '2.1.3',
    changeType: changeType[2],
  },
  {
    change: 'Change Title F v Description F',
    discipline: disciplines[0],
    calver: calVerOptions[0],
    journey: journeys[1],
    product: productList[2],
    component: components[0],
    version: '0.1.3',
    changeType: changeType[0],
  },
  {
    change: 'Change Title G v Description G',
    discipline: disciplines[1],
    calver: calVerOptions[1],
    journey: journeys[0],
    product: productList[1],
    component: components[1],
    version: '1.1.1',
    changeType: changeType[1],
  },
  {
    change: 'Change Title H v Description H',
    discipline: disciplines[2],
    calver: calVerOptions[2],
    journey: journeys[2],
    product: productList[3],
    component: components[2],
    version: '2.1.2',
    changeType: changeType[2],
  },
  {
    change: 'Change Title I v Description I',
    discipline: disciplines[3],
    calver: calVerOptions[3],
    journey: journeys[3],
    product: productList[1],
    component: components[3],
    version: '2.3.3',
    changeType: changeType[3],
  },
];
