import React from 'react'
import QuotesContainer from './QuotesContainer'

const App = (props) => {
  return (
    <div className="container">
      <h1 className="display-2 mb-3">Quote Book</h1>
      <QuotesContainer />
    </div>
  )
}

export default App