import React from 'react'
import CTA from '../../utilities/cta/CTA';
import SearchInput from '../../utilities/searchInput';

/**
 * Renders custom Header
 * @param {{className:string}} props 
*/
const Page = props => {
    const { className } = { ...props }
    return (
        <div className={`page ${className}`}>
            {props.children}
        </div>
    )
}

export default Page