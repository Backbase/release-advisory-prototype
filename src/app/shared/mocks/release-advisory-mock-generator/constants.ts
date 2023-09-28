export enum ChangeTypeName {
  feature = 'New Feature',
  bugFix = 'Bug Fix',
  breakingChange = 'Breaking Change',
  deprecated = 'Deprecation',
  securityFix = 'Security Fix',
  enhancement = 'Enhancement',
}

export enum Disciplines {
  web = 'Web',
  android = 'Android',
  ios = 'iOS',
  backend = 'Backend',
}

export const changeTypesOptions: ChangeTypeName[] = [
  ChangeTypeName.breakingChange,
  ChangeTypeName.deprecated,
  ChangeTypeName.bugFix,
  ChangeTypeName.securityFix,
  ChangeTypeName.feature,
  ChangeTypeName.enhancement,
];

export enum ProductComponents {
  retailBankingUSA = 'Retail Banking USA',
  retailBankingUniversal = 'Retail Banking Universal',
  businessBankingUSA = 'Business Banking USA',
  businessBankingUniversal = 'Business Banking Universal',
  wealthManagement = 'Wealth Management',
  digitalAssist = 'Digital Assist',
  digitalEngage = 'Digital Engage',
}

export const products: ProductComponents[] = [
  ProductComponents.businessBankingUSA,
  ProductComponents.businessBankingUniversal,
  ProductComponents.digitalAssist,
  ProductComponents.digitalEngage,
  ProductComponents.retailBankingUSA,
  ProductComponents.retailBankingUniversal,
  ProductComponents.wealthManagement,
];

export const disciplines: Disciplines[] = [
  Disciplines.web,
  Disciplines.android,
  Disciplines.ios,
  Disciplines.backend,
];

export const softwareComponentSuffixes = {
  Web: '.journey-ang',
  iOS: '.journey-ios',
  Android: '.journey-android',
  Backend: '.service',
};

export const softwareComponentsByProduct = {
  'Retail Banking USA': [
    { software: 'account-statements', product: 'Accounts & Statements' },
    { software: 'accounts-transactions', product: 'Accounts & Transactions' },
    { software: 'app-foundation', product: 'App Foundation' },
    { software: 'authentication', product: 'Authentication' },
    { software: 'bill-pay', product: 'Bill Pay' },
    { software: 'card-management', product: 'Card Management' },
    { software: 'contacts', product: 'Contacts' },
    { software: 'credit-score', product: 'Credit Score' },
    { software: 'dashboard', product: 'Dashboard' },
    { software: 'external-account', product: 'External Account' },
    { software: 'financial-insights', product: 'Financial Insights' },
    { software: 'loan-servicing', product: 'Loan Servicing' },
    { software: 'messages', product: 'Messages' },
    { software: 'notifications', product: 'Notifications' },
    { software: 'payments', product: 'Payments' },
    { software: 'places', product: 'Places' },
    { software: 'pockets', product: 'Pockets' },
    {
      software: 'real-time-communication',
      product: 'Real Time Communication (RTC)',
    },
    { software: 'remote-deposit-capture', product: 'Remote Deposit Capture' },
    { software: 'stop-checks', product: 'Stop Checks' },
    { software: 'user-self-enrollment', product: 'User Self Enrollment' },
    { software: 'user-self-service', product: 'User Self Service' },
  ],
  'Retail Banking Universal': [
    { software: 'account-statements', product: 'Accounts & Statements' },
    { software: 'accounts-transactions', product: 'Accounts & Transactions' },
    { software: 'app-foundation', product: 'App Foundation' },
    { software: 'authentication', product: 'Authentication' },
    { software: 'bill-pay', product: 'Bill Pay' },
    { software: 'card-management', product: 'Card Management' },
    { software: 'contacts', product: 'Contacts' },
    { software: 'credit-score', product: 'Credit Score' },
    { software: 'dashboard', product: 'Dashboard' },
    { software: 'external-account', product: 'External Account' },
    { software: 'financial-insights', product: 'Financial Insights' },
    { software: 'loan-servicing', product: 'Loan Servicing' },
    { software: 'messages', product: 'Messages' },
    { software: 'notifications', product: 'Notifications' },
    { software: 'payments', product: 'Payments' },
    { software: 'places', product: 'Places' },
    { software: 'pockets', product: 'Pockets' },
    {
      software: 'real-time-communication',
      product: 'Real Time Communication (RTC)',
    },
    { software: 'remote-deposit-capture', product: 'Remote Deposit Capture' },
    { software: 'stop-checks', product: 'Stop Checks' },
    { software: 'user-self-enrollment', product: 'User Self Enrollment' },
    { software: 'user-self-service', product: 'User Self Service' },
  ],
  'Business Banking USA': [
    { software: 'account-statements', product: 'Accounts & Statements' },
    { software: 'accounts-transactions', product: 'Accounts & Transactions' },
    { software: 'app-foundation', product: 'App Foundation' },
    { software: 'authentication', product: 'Authentication' },
    { software: 'batches', product: 'Batches' },
    { software: 'card-management', product: 'Card Management' },
    { software: 'cash-flow-forecasting', product: 'Cash Flow Forecasting' },
    { software: 'contacts', product: 'Contacts' },
    { software: 'context-selection', product: 'Context Selection' },
    { software: 'dashboard', product: 'Dashboard' },
    { software: 'entitlements', product: 'Entitlements' },
    { software: 'forex', product: 'Forex' },
    { software: 'loan-servicing', product: 'Loan Servicing' },
    { software: 'messages', product: 'Messages' },
    { software: 'notifications', product: 'Notifications' },
    { software: 'payments', product: 'Payments' },
    { software: 'places', product: 'Places' },
    { software: 'remote-deposit-capture', product: 'Remote Deposit Capture' },
    { software: 'stop-checks', product: 'Stop Checks' },
    { software: 'sweeping', product: 'Sweeping' },
    { software: 'user-self-enrollment', product: 'User Self Enrollment' },
    { software: 'user-self-service', product: 'User Self Service' },
  ],
  'Business Banking Universal': [
    { software: 'account-statements', product: 'Accounts & Statements' },
    { software: 'accounts-transactions', product: 'Accounts & Transactions' },
    { software: 'app-foundation', product: 'App Foundation' },
    { software: 'authentication', product: 'Authentication' },
    { software: 'batches', product: 'Batches' },
    { software: 'card-management', product: 'Card Management' },
    { software: 'cash-flow-forecasting', product: 'Cash Flow Forecasting' },
    { software: 'contacts', product: 'Contacts' },
    { software: 'context-selection', product: 'Context Selection' },
    { software: 'dashboard', product: 'Dashboard' },
    { software: 'entitlements', product: 'Entitlements' },
    { software: 'forex', product: 'Forex' },
    { software: 'loan-servicing', product: 'Loan Servicing' },
    { software: 'messages', product: 'Messages' },
    { software: 'notifications', product: 'Notifications' },
    { software: 'payments', product: 'Payments' },
    { software: 'places', product: 'Places' },
    { software: 'remote-deposit-capture', product: 'Remote Deposit Capture' },
    { software: 'stop-checks', product: 'Stop Checks' },
    { software: 'sweeping', product: 'Sweeping' },
    { software: 'user-self-enrollment', product: 'User Self Enrollment' },
    { software: 'user-self-service', product: 'User Self Service' },
  ],
  'Wealth Management': [
    { software: 'authentication', product: 'Authentication' },
    { software: 'messages', product: 'Messages' },
    { software: 'notifications', product: 'Notifications' },
    { software: 'payments', product: 'Payments' },
    { software: 'portfolio-overview', product: 'Portfolio Overview' },
    { software: 'profile', product: 'Profile' },
    { software: 'statements', product: 'Statements' },
    { software: 'trading', product: 'Trading' },
  ],
  'Digital Assist': [
    { software: 'activity-log', product: 'Activity Log' },
    { software: 'assist-messaging', product: 'Assist Messaging' },
    {
      software: 'assisted-card-management',
      product: 'Assisted Card Management',
    },
    { software: 'audit', product: 'Audit' },
    { software: 'chat-history', product: 'Chat History' },
    { software: 'chat-inbox', product: 'Chat Inbox' },
    { software: 'chat-management', product: 'Chat Management' },
    { software: 'collapsable-panels', product: 'Collapsable Panels' },
    { software: 'comments', product: 'Comments' },
    { software: 'conversation-category', product: 'Conversation Category' },
    { software: 'conversation-summary', product: 'Conversation Summary' },
    { software: 'conversation-trends', product: 'Conversation Trends' },
    { software: 'create-user', product: 'Create User' },
    { software: 'customer-account', product: 'Customer Account' },
    { software: 'customer-information', product: 'Customer Information' },
    { software: 'customer-overview', product: 'Customer Overview' },
    { software: 'emulation', product: 'Emulation' },
    { software: 'entitlements', product: 'Entitlements' },
    { software: 'language-selector', product: 'Language Selector' },
    { software: 'live-chat', product: 'Live Chat' },
    { software: 'manage-devices', product: 'Manage Devices' },
    { software: 'manage-security', product: 'Manage Security' },
    { software: 'messaging-management', product: 'Messaging Management' },
    { software: 'notifications', product: 'Notifications' },
    { software: 'payment-orders', product: 'Payment Orders' },
    { software: 'products', product: 'Products' },
    { software: 'quick-assist', product: 'Quick Assist' },
    { software: 'user-account', product: 'User Account' },
    { software: 'user-enrollment', product: 'User Enrollment' },
    { software: 'user-profile', product: 'User Profile' },
    { software: 'user-search-essentials', product: 'User Search Essentials' },
    { software: 'user-search-premium', product: 'User Search Premium' },
    { software: 'user-sessions', product: 'User Sessions' },
    { software: 'voice-call', product: 'Voice Call' },
  ],
  'Digital Engage': [
    { software: 'analyze-engagements', product: 'Analyze Engagements' },
    { software: 'approvals', product: 'Approvals' },
    { software: 'create-audience', product: 'Create Audience' },
    { software: 'create-engagement', product: 'Create Engagement' },
    { software: 'manage-audiences', product: 'Manage Audiences' },
    {
      software: 'manage-general-notifications',
      product: 'Manage General Notifications',
    },
    { software: 'publish-a-banner', product: 'Publish a Banner' },
    {
      software: 'send-message-to-message-center',
      product: 'Send message to Message Center',
    },
  ],
};

export const getPrefixesTitleByChangeType = (
  calver,
  component,
  componentSuffix,
  version,
  bugName
) => {
  return {
    [ChangeTypeName.breakingChange]: [
      'Major Version Upgrade: Breaking Changes Ahead',
      'Important API Modifications in Version ' + version,
      'Critical Updates and Breaking Changes',
      'Upgrade Alert: Breaking Changes in the Pipeline',
      'Breaking Changes Notice: Version ' + version,
      'Upgrade Required: Breaking Changes in Version ' + calver,
      'Important Updates: Breaking Changes to Be Aware Of',
      'Transitioning to the New API: Breaking Changes Abound',
      'Crucial Updates: Navigating Breaking Changes',
      'Breaking Changes Roadmap: Version ' + version,
      'Upgrade Essentials: Navigating Breaking Changes',
      'Adapting to Change: Breaking Changes Announcement',
    ],
    [ChangeTypeName.deprecated]: [
      'Deprecation Notice: Phasing Out ' + component.product + '',
      'Upcoming Change: Deprecating ' + component.product + '',
      'Transition Alert: ' + component.product + ' Deprecation',
      'Sunsetting ' + component.product + ': Deprecation Announcement',
      'Retirement Plan: Deprecating ' + component.product + '',
      'Deprecated ' + component.product + ': What You Need to Know',
      'End of Life: Deprecating ' + component.product + '',
      'Farewell to ' + component.product + ': Deprecation Update',
      'Legacy Phase-Out: Deprecating ' + component.product + '',
      'Deprecation Roadmap: ' + component.product + '',
      'Preparing for Change: ' + component.product + ' Deprecation',
      'Say Goodbye to ' + component.product + ': Deprecation Timeline',
      'Upgrade Reminder: ' + component.product + ' Deprecation',
      'Important Notice: ' + component.product + ' Deprecation',
      'Moving Forward: ' + component.product + ' Deprecation Plans',
      'Deprecated ' + component.product + ' Announcement',
      'Last Call for ' + component.product + ': Deprecation Alert',
      'Retiring ' + component.product + ': Deprecation Details',
      'Time to Migrate: ' + component.product + ' Deprecation',
      'Deprecated and Proud: ' + component.product + ' Update',
    ],
    [ChangeTypeName.bugFix]: [
      'Bug Squashed: ' +
        bugName +
        ' Fix in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Smooth Sailing Ahead: ' + bugName + ' Resolved',
      'Patch Release: ' + bugName + ' Fix Now Available',
      'Resolved Issue: ' +
        bugName +
        ' in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Defect Corrected: ' + bugName + ' Update',
      'Bug-Free Zone: ' + bugName + ' Fixed',
      'Issue Resolution: ' +
        bugName +
        ' Addressed in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Critical Bug Fix: ' + bugName + ' Update',
      'Enhanced Stability: ' + bugName + ' Solved',
      'Glitch No More: ' + bugName + ' Fix Released',
      'Bug Be Gone: ' + bugName + ' Update',
      'Fixing the Flaw: ' + bugName + ' Resolved',
      'Quality Improvement: ' +
        bugName +
        ' Fix in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Bugs Banished: ' + bugName + ' Update',
      'Restoring Order: ' + bugName + ' Resolved',
      'Smooth Operator: ' + bugName + ' Fix Now Live',
      'Issue Eradicated: ' + bugName + ' Solved',
      'Bug Bounty Achieved: ' + bugName + ' Fix Released',
      'Steady as She Goes: ' + bugName + ' Resolved',
      'Trouble Eliminated: ' +
        bugName +
        ' Fix in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
    ],
    [ChangeTypeName.securityFix]: [
      'Security Patch Released: Critical Bug Fix',
      'Urgent Security Update: Protect Your Data',
      'Security Vulnerability Resolved in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Critical Security Fix: Immediate Action Required',
      'Protect Your Software: Security Bug Fix Released',
      'Secure Your System: Bug Fix for Vulnerability',
      'Important Security Update: Patching a Vulnerability',
      'Security Issue Addressed: Update Required',
      'Critical Bug Squashed: Protecting Your Software',
      'Secure Your ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': Vulnerability Patched',
      'Emergency Security Release: Protecting Your Application',
      'Defending Against Threats: Security Bug Fix',
      'Stay Safe Online: Security Vulnerability Patched',
      'Urgent Protection: Security Issue Resolved',
      'Securing Your ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': Bug Fix Released',
      'Critical Security Announcement: Immediate Update Needed',
      'Protect Your Data: Security Vulnerability Fixed',
      'Priority Update: Securing Your ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Guarding Against Exploits: Security Bug Fix',
      'Your Security Matters: Vulnerability Patch Released',
    ],
    [ChangeTypeName.feature]: [
      'Introducing Exciting New Features in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version,
      'Enhance Your Experience: New Features Now Available',
      'What is New in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': Exciting Features Added',
      'Stay Ahead with ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': New Features Unveiled',
      'Experience Innovation: Discover the Latest Features',
      'Upgrade Your Workflow: New Features for You',
      'Elevate Your Experience: Explore Our New Features',
      'Next-Level Functionality: New Features Added',
      'Innovate with Us: New Features in ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Empower Your' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': New Features Released',
      'Breaking Ground: New Features for ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Get Ready for ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': New Features Revealed',
      'Unlock Possibilities: New Features Unleashed',
      'Stay Competitive: New Features for Your Advantage',
      'Welcome to the Future: New Features Now Live',
      'Boost Productivity: New Features at Your Fingertips',
      'Discover More: New Features to Explore',
      'Your Feedback, Our Innovation: New Features Added',
      'Experience the Difference: New Features Introduced',
      'Revolutionize Your ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': New Features Await',
    ],
    [ChangeTypeName.enhancement]: [
      'Elevating Your Experience: New Enhancements Unveiled',
      'Empowering Your Workflow: Exciting Enhancements Released',
      'Enhancing ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': Frontend and Backend Updates',
      'Next-Level Innovation: Discover the Latest Enhancements',
      'Upgrade Your ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': New Features Await',
      'Experience the Future: UI and Backend Enhancements',
      'Breaking Ground: Enhancements for ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        '',
      'Unlocking New Possibilities: Frontend and Backend Upgrades',
      'Enhanced Performance: UI and Backend Innovations',
      'Your Feedback, Our Enhancements: Frontend and Backend Updates',
      'Revolutionizing ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ': UI and Backend Improvements',
      'Transforming Your Experience: Frontend and Backend Enhancements',
      'Simplify, Optimize, Thrive: UI and Backend Improvements',
      'Seamless Integration: Frontend and Backend Enhancements',
      'Stay Competitive: UI and Backend Enhancements for Your Advantage',
      'Innovate with Us: Frontend and Backend Enhancements',
      'Experience the Difference: UI and Backend Updates Revealed',
      'Enhancing User-Centricity: Frontend and Backend Updates',
      'Framework for the Future: UI and Backend Enhancements',
      'Your ' +
        component.product +
        ' - ' +
        component.software +
        componentSuffix +
        ' ' +
        version +
        ' Journey: UI and Backend Upgrades',
    ],
  };
};

export const bugNames = {
  [ChangeTypeName.bugFix]: {
    [Disciplines.web]: [
      'UI Rendering Issues',
      'Data Synchronization Bugs',
      'Error Handling Flaws',
      'Performance Bottlenecks',
      'Compatibility Issues',
    ],
    [Disciplines.ios]: [
      'UI/UX Glitches',
      'Crashes and Freezing',
      'Performance Degradation',
      'Compatibility Issues',
      'Data Display Problems',
    ],
    [Disciplines.android]: [
      'Crashes and App Freezing',
      'Memory Leaks',
      'UI/UX Issues',
      'Network Connectivity Problems',
      'Background Processing Bugs',
    ],
    [Disciplines.backend]: [
      'NullPointerExceptions',
      'Concurrency Issues',
      'Resource Leaks',
      'Data Parsing Errors',
      'Inefficient Algorithms',
    ],
  },
  [ChangeTypeName.securityFix]: {
    [Disciplines.web]: [
      'Cross-Site Scripting (XSS)',
      'Cross-Site Request Forgery (CSRF)',
      'Insecure Direct Object References (IDOR)',
      'Injection Attacks',
      'Broken Authentication and Session Management',
    ],
    [Disciplines.ios]: [
      'Inadequate Data Protection',
      'URL Scheme Vulnerabilities',
      'Insecure Dependencies',
      'Insufficient Permissions Handling',
      'Authentication Bypass',
    ],
    [Disciplines.android]: [
      'Insecure Data Storage',
      'Insecure Communication',
      'Insecure Authorization',
      'Data Leakage',
      'Improperly Handled Intents',
    ],
    [Disciplines.backend]: [
      'SQL Injection',
      'Insecure Authentication and Authorization',
      'Data Leakage',
      'Improper Input Validation',
      'Weak Session Management',
    ],
  },
};
