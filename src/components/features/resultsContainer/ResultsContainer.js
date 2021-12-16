import React from 'react'
import Card from '../../utilities/card'

/**
 * Renders custom Header
 * @param {{className:string}} props 
 * @param className - optional className to be added to default
*/
const ResultsContainer = props => {
    const { className = "" } = { ...props }

    const data = [
        {
            imgSrc: '',
            title: 'Title One',
            author: 'Steffan Roi',
            year: 1989
        },
        {
            imgSrc: '',
            title: 'Title Two',
            author: 'Eli Black',
            year: 1989
        },
        {
            imgSrc: '',
            title: 'Title Three',
            author: 'Jon Blue',
            year: 1989
        },
    ]

    return (
        <div className={`flex flex-wrap justify-center items-start p-4 bg-gray-200 ${className}`}>
            {
                data.map((item, i) => (
                    <Card
                        key={i}
                        title={item.title}
                        author={item.author}
                        year={item.year}
                    />
                ))
            }
        </div>
    )
}

export default ResultsContainer