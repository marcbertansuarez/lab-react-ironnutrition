import React from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search({handleSearchValue}) {

    const handleSearch = (e) => {
        handleSearchValue(e.target.value);
    }
  return (
    <>
      <Divider>Search</Divider>
      <Input className="input" name="search" type="text" onChange={handleSearch} placeholder="Which nutrition information are you looking for?"/>
    </>
  );
}

export default Search;