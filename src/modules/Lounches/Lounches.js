import React, { Component } from 'react'

import Lounch from './components/Lounch/Lounch'

const dummyData = [
  {
    'flight_numnber': 1,
    'mission_name': 'FalconSat',
    'lounch_year': 2006
  },
  {
    'flight_numnber': 2,
    'mission_name': 'DemoSat',
    'lounch_year': 2007 
  },
  {
    'flight_numnber': 3,
    'mission_name': 'Trailblazer',
    'lounch_year': 2008
  }
]

export default class Lounches extends Component {
  componentWillMount() {
    const { requestLounchesSuccess } = this.props
    requestLounchesSuccess(dummyData)
  }
  render() {
    const { lounches } = this.props
    if (!lounches.length) return <div>loading lounches...</div>
    return (
      <div>
        {
          lounches.map((lounch, index) => (
            <Lounch
              key={index}
              data={lounch}
            />
          ))
        }
      </div>
    )
  }
}