const LibraryList = props =>
  CHECK_PROPS(props, LibraryList.props, 'ModuleList') &&
  GitList({
    org: 'magic-libraries',
    header: [Link({ to: 'https://magic-libraries.github.io' }, '@magic-libraries')],
    desc: ['below is a collection of the available @magic client libraries.'],
    items: [
      {
        name: 'json',
        description: [
          'the @magic-libraries/json module parses and stringifies json.',
          ' it also returns errors instead of throwing them.',
        ],
      },
      {
        name: 'is',
        description: 'the @magic-libraries/is module unifies the javascript type testing apis.',
      },
      {
        name: 'uri',
        description: [
          'the @magic-libraries/uri module ',
          ' encodes objects to uri strings and decodes uri strings to objects.',
        ],
      },
    ],
    ...props,
  })

LibraryList.dependencies = {
  GitList: require('@magic-modules/git-list'),
}

LibraryList.props = [
  { key: 'id', type: 'string' },
  { key: 'org', type: 'string' },
  { key: 'header', type: 'string' },
  { key: 'desc', type: ['string', 'array'] },
  { key: 'items', type: 'array' },
]

module.exports = LibraryList
