import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

import { FilterLabel, FilterInput } from './Filter.styled';

const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={handleFilter}
        id={filterInputId}
      />
    </FilterLabel>
  );
};
export default Filter;
