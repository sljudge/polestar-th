import React from 'react'

/**
 * Renders an input of type search
 * @param {{name:string, ariaLabel: string, handleChange: function, className:string}} props 
 * @param name - Name for input
 * @param ariaLabel - Arial label 
 * @param onChange - function for onChange handler
 * @param className - optional className to be added to default 'input'
*/
const SearchInput = props => {
    const { name, ariaLabel, onChange, className = "" } = { ...props }
    return (
        <input
            onChange={onChange}
            type="search"
            name={name}
            role="search"
            aria-label={ariaLabel}
            className={`input ${className}`}
        />
    )
}

export default SearchInput