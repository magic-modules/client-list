import { is } from '@magic/test'
import * as LibraryList from '../src/index.mjs'

export default [
  {
    fn: () => LibraryList.View,
    expect: is.function,
    info: 'expect LibraryList.View to be a function',
  },
]
