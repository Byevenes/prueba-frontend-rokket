import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PostEntry from './PostEntry';

const PostEntries = () => {
  const { postLoad, postByTagSucces, postByTag } = useSelector(
    (state) => state.post
  );
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 20,
        paddingBottom: 20,
      }}
    >
      {postByTagSucces &&
        postByTag.map((tags) => {
          return <PostEntry key={tags.id} {...tags} />;
        })}

      {!postByTagSucces &&
        postLoad.map((post) => {
          return <PostEntry key={post.id} {...post} />;
        })}
    </div>
  );
};

PostEntries.propTypes = {
  postLoad: PropTypes.array,
};

export default PostEntries;
