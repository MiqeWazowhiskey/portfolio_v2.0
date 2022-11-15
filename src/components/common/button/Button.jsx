import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, backgroundColor, size="md",handleClick,className,cursor, ...props}) => {
  let scale= 1;
  if (size==="sm") {scale= 0.7}
  else if (size==="lg") {scale=1.5}
  const style = {
      backgroundColor,
      padding: `${scale*0.5}rem ${scale*1}rem`,
      border: "none",
      cursor
  }
    
    
  return (
    <button 
        onClick={handleClick} 
        style={style}
        type="button"
        className={className}
        >
            {label}
    </button>
  )
}

Button.propTypes = {
    size: PropTypes.oneOf(["sm","md","lg"]),
    label: PropTypes.string,
    handleClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    cursor: PropTypes.string
}

export default Button