import React from 'react'
import { videoEmbedURI } from 'config/main'

import IframeLoader from 'common/components/HOC/IframeLoader/IframeLoader'

const Lounch = ({ data }) => {
  return (
    <div>
      <h3>Mission name: { data.mission_name }</h3>
        <img src={data.links.mission_patch_small} width={100} />
        <div>Flight Number: { data.flight_number }</div>
        <div>Lounch Date: { data.launch_date_utc.slice(0, 10) }</div>
        <div>Lounch Time: { data.launch_date_utc.slice(11, 16) }</div>
        <div>Rocket: { data.rocket.rocket_name }</div>
        { data.links.video_link && (
          <IframeLoader src={videoEmbedURI(data.links.video_link.slice(-11))} />
        ) }
      <div>
        <div>Details: { data.details || 'no details' }</div>
      </div>
      <br />
    </div>
  )
}

export default Lounch