import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../utilities/card'
import Loader from '../../utilities/loader'
import ErrorMessage from '../../utilities/errorMessage'

/**
 * Renders custom Header
 * @param {{className:string}} props 
 * @param className - optional className to be added to default
*/
const ResultsContainer = props => {
    const { className = "" } = { ...props }
    const booksData = useSelector(state => state.books.booksData) || []
    const status = useSelector(state => state.books.status) || 'idle'

    return (
        <div className={`flex flex-wrap justify-center md:justify-start items-start p-4 bg-gray-200 ${className}`}>
            {
                status === 'loading' ?
                    <Loader />
                    : status === 'rejected' ?
                        <ErrorMessage message="There has been an error please try again." />
                        :
                        booksData.map((item, i) => (
                            <Card
                                key={i}
                                title={item.title}
                                author={item.author_name}
                                publisher={item.publisher === undefined ? '' : typeof (item.publisher) === 'string' ? item.publisher : item.publisher[0]}
                                year={item.publish_year === undefined ? '' : typeof (item.publish_year) === 'string' ? item.publish_year : Math.min(...Object.values(item.publish_year))}
                            />
                        ))
            }
        </div>
    )
}

export default ResultsContainer