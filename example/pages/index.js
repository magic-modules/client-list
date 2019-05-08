module.exports = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' LibraryList component. ',
    state.description,
  ]),

  GitBadges('magic-modules/library-list'),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install magic-modules/library-list'),

  h2({ id: 'usage' }, 'usage'),
  p('in a page or module View'),
  Pre('module.exports = () => [LibraryList]'),

  h2({ id: 'demo' }, 'demo'),
  p('this is what it looks like'),
  LibraryList,

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/library-list/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
