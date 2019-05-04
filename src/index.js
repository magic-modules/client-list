const ClientList = props =>
  CHECK_PROPS(props, ClientList.props, 'ModuleList') &&
  GitList({
    id: 'magic-client',
    org: 'magic-client',
    header: [Link({ to: 'https://magic-client.github.io' }, '@magic-client libraries')],
    desc: ['below is a collection of the available @magic client libraries.'],
    items: [
      {
        name: 'json',
        description: [
          'the @magic-client/json module parses and stringifies json.',
          ' it also returns errors instead of throwing them.',
        ],
      },
      {
        name: 'is',
        description: 'the @magic-client/is module unifies the javascript type testing apis.',
      },
      {
        name: 'uri',
        description: [
          'the @magic-client/uri module ',
          ' encodes objects to uri strings and decodes uri strings to objects.',
        ],
      },
    ],
    ...props,
  })

ClientList.dependencies = {
  GitList: require('@magic-modules/git-list'),
}

ClientList.props = [
  { key: 'id', type: 'string' },
  { key: 'org', type: 'string' },
  { key: 'header', type: 'string' },
  { key: 'desc', type: ['string', 'array'] },
  { key: 'items', type: 'array' },
]

module.exports = ClientList
