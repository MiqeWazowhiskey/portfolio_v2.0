import React from 'react'
import Typical from 'react-typical'

function Duvar() {
  return (
    <Typical 
        steps = {['Coming Soon...',1000]}
        loop= {Infinity}
        wrapper = "p"
    />
  )
}

export default Duvar