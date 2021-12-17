import React from 'react'
import placeholder from '../../../assets/images/placeholder_portrait.png'

/**
 * Renders custom Header
 * @param {{imgSrc:string, title:string, author:string,year:string, className:string}} props 
 * @param imgSrc - src for card image
 * @param title - title for card
 * @param author - author of card reference
 * @param year - year of release
 * @param className - optional className to be added to default 'header'
*/
const Card = props => {
    const { imgSrc = placeholder, title, author, publisher, year, className = "" } = { ...props }
    return (
        <div className={`sm:w-56 bg-gray-50 shadow-lg m-8 ${className}`}>
            <img src={imgSrc} alt="" />
            <div className="p-2 h-24 sm:h-36 flex flex-col justify-between">
                <h3 className="text-lg font-semibold line-clamp-3">{title}</h3>
                <div className="flex justify-between">
                    <div className="pr-2">
                        <div className="leading-tight">{author}</div>
                        <div className="text-xs">{publisher}</div>
                    </div>
                    <div>{year}</div>
                </div>
            </div>
        </div>
    )
}

export default Card