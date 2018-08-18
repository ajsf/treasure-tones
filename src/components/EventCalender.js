import ScriptTag from 'react-script-tag'

import React from 'react'

const EventCalendar = () => {
  return (
    <div style={{ width: 600, margin: 20 }}>
      <h2 style={{ textAlign: 'center' }}>See Us Live</h2>
      <ScriptTag
        charSet="utf-8"
        src="https://widget.bandsintown.com/main.min.js"
      />
      <a
        className="bit-widget-initializer"
        data-artist-name="TheTreasureTones"
        data-display-local-dates="false"
        data-auto-style="false"
        data-text-color="#000000"
        data-link-color="#7a0515"
        data-popup-background-color="#FFFFFF"
        data-background-color="lightgrey"
        data-display-limit="15"
        data-link-text-color="#FFFFFF"
      />
    </div>
  )
}

export default EventCalendar
