import React from 'react'
import { hot } from 'react-hot-loader'

import Header from './common/components/Header/Header'

const App = () => (
  <div>
    <Header totalLounches={21} />
    <div>Hello world from React</div>
  </div>
)

export default hot(module)(App)