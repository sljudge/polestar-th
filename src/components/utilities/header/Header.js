import React from 'react'

/**
 * Renders custom Header
 * @param {{logo:string, alt: string, className:string}} props 
 * @param logo - Image src for logo
 * @param alt - Text for logo alt tag
 * @param className - optional className to be added to default 'header'
*/
const Header = props => {
    const { logo, alt, className } = { ...props }
    return (
        <header className={`header ${className}`}>
            <img src={logo} alt={alt} className="mx-auto" />
        </header>
    )
}

export default Header