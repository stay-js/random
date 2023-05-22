export const items = [
  {
    title: 'CUID',
    shortTitle: 'CUID',
    path: '/cuid',
    description:
      'A CUID (Collision Resistant Unique Identifier) is a method of creating a unique identifier that was developed by Eric Elliott. The purpose is to create unique IDs for use in web applications to better support horizontal scaling and sequential lookup performance.',
  },
  {
    title: 'GUID',
    shortTitle: 'GUID',
    path: '/guid',
    description: `A GUID (Globally Unique Identifier) is a 128-bit text string that represents an identification (ID). Organizations generate GUIDs when a unique reference number is needed to identify information on a computer or network. A GUID can be used to ID hardware, software, accounts, documents and other items. The term is also often used in software created by Microsoft.`,
  },
  {
    title: 'UUID',
    shortTitle: 'UUID',
    path: '/uuid',
    description:
      'A UUID (Universally Unique Identifier) is a 128-bit label used for information in computer systems. The term globally unique identifier (GUID) is also used. When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes.',
  },
  {
    title: 'Random Number Generator',
    shortTitle: 'Number',
    path: '/number',
    description: 'Generates a random number between a specified min and max value.',
  },
  {
    title: 'Random Thing Picker',
    shortTitle: 'Thing',
    path: '/thing',
    description: 'Randomly picks a value from a list of specified values.',
  },
  {
    title: 'Random Color Generator',
    shortTitle: 'Color',
    path: '/color',
    description: 'Generates a random color and outputs HEX and RGB value.',
  },
  {
    title: 'Password Generator',
    shortTitle: 'Password',
    path: '/password',
    description: 'Generates a random secure password.',
  },
  {
    title: 'Random Countdown Timer',
    shortTitle: 'Countdown',
    path: '/countdown',
    description: 'Generates a random interval and starts a countdown timer.',
  },
] as const;
