import React from 'react'
import Card from '../../utilities/card'

/**
 * Renders custom Header
 * @param {{value: string, name:string, type:string, className:string}} props 

*/
const ResultsContainer = props => {

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
        <div className="flex flex-wrap justify-center items-center p-4 bg-gray-200">
            {
                data.map(item => (
                    <Card
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