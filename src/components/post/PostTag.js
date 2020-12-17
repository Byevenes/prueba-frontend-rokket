import React, { useEffect } from 'react';
import { Search } from '../ui/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../actions/postAction';

import PostEntries from './PostEntries';
import CircularProgress from '@material-ui/core/CircularProgress';

export const PostTag = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <div className=" post-screen">
      <Search />
      <hr />
      <div style={{ paddingTop: 50 }}>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              paddingTop: '15%',
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <PostEntries />
        )}
      </div>
    </div>
  );
};
