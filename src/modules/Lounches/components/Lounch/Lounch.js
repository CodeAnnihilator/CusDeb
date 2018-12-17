import React from 'react'
import { videoEmbedURI } from 'config/main'

import IframeLoader from 'common/components/IframeLoader/IframeLoader'

const Lounch = ({ data }) => {
  const missionName = data.get('mission_name')
  const flightNumber = data.get('flight_number')
  const launchDataUTC = data.get('launch_date_utc')
  const linkMissionPatchSmall= data.getIn(['links', 'mission_patch_small'])
  const rocketName = data.getIn(['rocket', 'rocket_name'])
  const videoLink = videoEmbedURI(data.getIn(['links', 'video_link']).slice(-11))
  return (
    <div>
      <h3>Mission name: { missionName }</h3>
        <img src={linkMissionPatchSmall} width={100} />
        <div>Flight Number: { flightNumber }</div>
        <div>Lounch Date: { launchDataUTC.slice(0, 10) }</div>
        <div>Lounch Time: { launchDataUTC.slice(11, 16) }</div>
        <div>Rocket: { rocketName }</div>
        { videoLink && <IframeLoader src={videoLink} /> }
        <div>Details: { data.details || 'no details' }</div>
    </div>
  )
}

export default Lounch