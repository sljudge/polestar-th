import React from 'react'

/**
 * Renders custom Header
 * @param {{value: string, name:string, type:string,onClick: function,disabled:boolean className:string}} props 
 * @param value - Text value for cta
 * @param name - Name for cta
 * @param type - button type (default = button)
 * @param onClick - function for onCLick event
 * @param disabled - boolean for disabling button
 * @param className - optional className to be added to default 'header'
*/
const CTA = props => {
    const { text, value, type, onClick, name, disabled, className = "" } = { ...props }
    return (
        <button
            value={value}
            name={name}
            type={type || "button"}
            onClick={onClick}
            disabled={disabled}
            className={`cta ${className}`}
            style={{
                opacity: disabled ? 0.5 : 1
            }}
        >
            {text}
        </button>
    )
}

export default CTA