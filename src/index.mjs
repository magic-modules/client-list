export const View = () =>
  GitList({
    org: 'magic-libraries',
    header: [Link({ to: 'https://magic-libraries.github.io' }, '@magic-libraries')],
    desc: [
      '@magic libraries are pieces of client side functionality.',
      ' they are not intended to be used in markdown,',
      ' instead, a developer will use them when creating @magic-modules,',
      ' which can then be used from markdown pages.',
    ],
    items: [
      {
        name: 'db',
        description: 'key => value store using localstorage',
      },
      {
        name: 'gql',
        description: [
          'the @magic-libraries/gql module',
          ' encodes template strings to graphql queries ready to be sent to a server.',
        ],
      },
      {
        name: 'is',
        description: 'the @magic-libraries/is module unifies the javascript type testing apis.',
      },
      {
        name: 'json',
        description: [
          'the @magic-libraries/json module parses and stringifies json.',
          ' it also returns errors instead of throwing them.',
        ],
      },
      {
        name: 'prevent-default',
        description: [
          'the @magic-libraries/prevent-default module',
          ' invokes event.preventDefault as a hyperapp effect.',
        ],
      },
      {
        name: 'uri',
        description: [
          'the @magic-libraries/uri module',
          ' encodes objects to uri strings and decodes uri strings to objects.',
        ],
      },
    ],
  })
