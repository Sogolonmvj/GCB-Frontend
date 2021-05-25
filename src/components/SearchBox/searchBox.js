import React from 'react';

const SearchBox = (props) => {
    return (
        <input type="search"
        id="searchbox"
        className="search d-flex flex-horizontal offset-1 px-3 mt-5"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        />
    )
}

export default SearchBox;