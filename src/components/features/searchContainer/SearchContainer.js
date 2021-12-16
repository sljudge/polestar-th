import React from 'react'
import CTA from '../../utilities/cta/CTA';
import SearchInput from '../../utilities/searchInput';

/**
 * Renders custom Header
 * @param {{value: string, name:string, type:string, className:string}} props 

*/
const SearchContainer = props => {
    return (
        <div className="flex flex-wrap justify-center items-center p-4 bg-gray-400">
            <SearchInput name="book-search" ariaLabel="Search for books" />
            <CTA text="Search for books" name="search-cta" />
        </div>
    )
}

export default SearchContainer