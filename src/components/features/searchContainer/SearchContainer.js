import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CTA from '../../utilities/cta/CTA';
import SearchInput from '../../utilities/searchInput';
import { getBooks } from '../../../config/bookSlice'
import debounce from '../../../helpers';

/**
 * Renders search component with input and cta
*/
const SearchContainer = props => {
    const dispatch = useDispatch()
    const searchStatus = useSelector(state => state.books.status)
    const [queryString, setQueryString] = useState("")

    const handleSearchChange = (e) => {
        setQueryString(e.target.value)
    }

    const debouncedGetBooks = useCallback(
        debounce((query) => {
            dispatch(getBooks(query))
        }, 500),
        []
    )

    const handleSubmit = () => {
        setQueryString(queryString.trim())
        debouncedGetBooks(queryString)
    }

    return (
        <div className="flex flex-wrap justify-center items-center p-4 bg-gray-400">
            <SearchInput
                name="book-search"
                ariaLabel="Search for books"
                value={queryString}
                onSubmit={handleSubmit}
                onChange={handleSearchChange}
            />
            <CTA
                text="Search for books"
                name="search-cta"
                disabled={searchStatus === 'loading'}
                onClick={handleSubmit}
            />
        </div>
    )
}

export default SearchContainer