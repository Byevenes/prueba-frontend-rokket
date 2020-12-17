import React, { useEffect, useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import { useDispatch } from 'react-redux';
import { getAllPost, getByTag } from '../../actions/postAction';

export const Search = () => {
  const dispatch = useDispatch();
  const [inputVale, setInputVale] = useState('');

  useEffect(() => {
    if (inputVale.trim().length === 0) {
      dispatch(getAllPost());
    }
  }, [dispatch, inputVale]);

  const handelInputChange = (e) => {
    setInputVale(e);
  };

  const handleSubmit = (e) => {
    if (inputVale.trim().length > 2) {
      dispatch(getByTag(e));
      setInputVale('');
    }
  };

  return (
    <div>
      <SearchBar
        onChange={handelInputChange}
        onRequestSearch={handleSubmit}
        style={{
          margin: '0 auto',
          maxWidth: '75%',
          marginTop: 20,
        }}
        placeholder="Search by tag"
      />
    </div>
  );
};
