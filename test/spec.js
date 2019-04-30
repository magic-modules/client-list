const { is } = require('@magic/test')
const ModuleList = require('../src')

module.exports = [
  { fn: () => ModuleList, expect: is.function, info: 'expect LanguageSwitch to be a function' },
]
