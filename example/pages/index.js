module.exports = () => [
  h1('@magic-modules/client-list'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' ClientList component. It shows a list of all @magic-modules.',
  ]),

  GitBadges({
    project: 'magic-modules/client-list',
    appveyor: 'jaeh/client-list',
  }),

  h2({ id: 'installation' }, 'installation'),
  Pre(`
npm install magic-modules/client-list
`),

  h2({ id: 'require' }, 'require'),
  p('first add the component to the assets'),
  Pre(`
// assets/index.js
module.exports = {
  //...other exports
  ClientList: require('@magic-modules/client-list'),
}`),

  h2({ id: 'usage' }, 'usage'),
  p('in a page or component'),
  Pre('module.exports = {\n  View: () => ClientList,\n}'),

  h2({ id: 'demo' }, 'demo'),
  p('this is what it looks like'),
  ClientList,

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/client-list/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
