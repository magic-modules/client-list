const ClientList = () =>
  GitList({
    id: 'magic-client',
    org: 'magic-client',
    prefix: 'client',
    header: '@magic-client libraries',
    desc: [
      'below is a collection of the available @magic client libraries.',
    ],
    items: [
      {
        name: 'json',
        description: [
          'the @magic-client/json module parses and stringifies json.',
          ' it will also return errors instead of throwing them.',
        ],
      },
      {
        name: 'is',
        description: 'the @magic-client/is module unifies the javascript type testing apis.',
      },
    ],
  })

ClientList.dependencies = {
  GitList: require('@magic-modules/git-list'),
}

module.exports = ClientList
