import React from 'react'

interface IButton {
    children : any
    onClick: () => void
    classNames? : string
    disabled? : boolean
    customStyle?:any
}

const Button = ({ children, classNames, onClick, disabled,customStyle } : IButton) => {
  return (
    <button style={customStyle} className={classNames} onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button