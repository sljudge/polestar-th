import React from 'react'

/**
 * Renders custom Page component
 * @param {{className:string}} props 
*/
const Page = props => {
    const { className = "" } = { ...props }
    return (
        <div className={`page ${className}`}>
            {props.children}
        </div>
    )
}

export default Page