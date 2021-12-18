import React from 'react'

/**
 * Renders an input of type search
 * @param {{name:string, ariaLabel: string, handleChange: function, className:string}} props 
 * @param name - Name for input
 * @param ariaLabel - Arial label 
 * @param onChange - function for onChange handler
 * @param onSubmit - function to be called on submission
 * @param className - optional className to be added to default 'input'
*/
const SearchInput = props => {
    const { value = "", name, ariaLabel, onChange, onSubmit, className = "" } = { ...props }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && typeof (onSubmit) === 'function') {
            onSubmit()
        }
    }

    return (
        <input
            onChange={onChange}
            onKeyPress={handleKeyPress}
            value={value}
            type="search"
            name={name}
            role="search"
            aria-label={ariaLabel}
            className={`input ${className}`}
        />
    )
}

export default SearchInput