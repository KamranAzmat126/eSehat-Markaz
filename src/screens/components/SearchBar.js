import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style= {{marginLeft: 15,marginRight:15, marginBottom: 10, borderRadius:25, marginTop: 10}}
    />
  );
};

export default SearchBar;