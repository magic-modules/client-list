export const View = () =>
  GitList({
    org: 'magic-libraries',
    header: [Link({ to: 'https://magic-libraries.github.io' }, '@magic-libraries')],
    desc: ['below is a collection of the available @magic client libraries.'],
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
        name: 'uri',
        description: [
          'the @magic-libraries/uri module',
          ' encodes objects to uri strings and decodes uri strings to objects.',
        ],
      },
    ],
  })
