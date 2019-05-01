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
      GitBadges({
        project: 'magic-client/json',
        appveyor: 'jaeh/json',
      }),
      Link({ to: 'https://magic-client.github.io/json' }, 'docs / demo'),
    ]),
    li([
      h3(
        { id: 'client-libs-is' },
        Link({ to: 'https://github.com/magic-client/is/' }, '@magic-client/is'),
      ),
      div('the @magic-client/is module unifies the javascript type testing apis.'),
      GitBadges({
        project: 'magic-client/is',
        appveyor: 'jaeh/is',
      }),
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

ClientList.dependencies = {
  GitBadges: require('@magic-modules/gitbadges'),
}

module.exports = ClientList
