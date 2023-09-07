import React from 'react'
import './Star.less'

interface Props {}

function Star(props: Props) {
  const {} = props

  return (
    <>
      <iframe className='star' src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fyeyu98%2FBadAppleChar&amp;title=&amp;aria-label=Star%20yeyu98%2FBadAppleChar%20on%20GitHub&amp;data-text=Star&amp;data-size=large" allowtransparency="true" scrolling="no" frameborder="0" style={{width: '63px', height: '28px', border: 'none'}} name="href=https%3A%2F%2Fgithub.com%2Fyeyu98%2FBadAppleChar&amp;title=&amp;aria-label=Star%20yeyu98%2FBadAppleChar%20on%20GitHub&amp;data-text=Star&amp;data-size=large"></iframe>
    </>
  )
}

export default Star
