import React from 'react'

/**
 * Renders custom Header
 * @param {{value: string, name:string, type:string, className:string}} props 
 * @param value - Text value for cta
 * @param name - Name for cta
 * @param type - button type (default = button)
 * @param className - optional className to be added to default 'header'
*/
const CTA = props => {
    const { text, value, type, name, className } = { ...props }
    return (
        <button
            value={value}
            name={name}
            type={type || "button"}
            className={`cta ${className}`}
        >
            {text}
        </button>
    )
}

export default CTA