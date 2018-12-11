import React from 'react'

const Lounch = ({ data }) => (
  <div>
    <div>Mission name: { data.mission_name }</div>
    <div>Flight Number: { data.flight_numnber }</div>
    <div>Lounch Year: { data.lounch_year }</div>
    <br />
  </div>
)

export default Lounch