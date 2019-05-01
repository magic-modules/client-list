const ClientList = () =>
  ul({ class: 'ClientList' }, [
    li([
      h3(
        { id: 'client-libs-json' },
        Link({ to: 'https://github.com/magic-client/json' }, '@magic-client/json'),
      ),
      div([
        'the @magic-client/json module parses and stringifies json.',
        ' it will also return errors instead of throwing them.',
      ]),
      Link({ to: 'https://magic-client.github.io/json' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'client-libs-is' },
        Link({ to: 'https://github.com/magic-client/is/' }, '@magic-client/is'),
      ),
      div('the @magic-client/is module unifies the javascript type testing apis.'),
      Link({ to: 'https://magic-client.github.io/is/' }, 'docs / demo'),
    ]),
  ])

ClientList.style = {
  '.ClientList': {
    a: {
      display: 'block',
      lineHeight: 1.8,
    },
  },
}

module.exports = ClientList
