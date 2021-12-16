import React from 'react'

/**
 * Renders an input of type search
 * @param {{name:string, ariaLabel: string, className:string}} props 
 * @param name - Name for input
 * @param ariaLabel - Arial label 
 * @param className - optional className to be added to default 'input'
*/
const SearchInput = props => {
    const { name, ariaLabel, className } = { ...props }
    return (
        <input type="search" name={name} role="search" aria-label={ariaLabel} className={`input ${className}`} />
    )
}

export default SearchInput