import axios from 'axios';
import Swal from 'sweetalert2';
import { APP_ID_API, BASE_URL } from '../helpers/config';
import { types } from '../types/types';

import { finishLoading, startLoading } from './uiAction';

export const getAllPost = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const resp = await axios.get(`${BASE_URL}/post`, {
        headers: { 'app-id': APP_ID_API },
      });
      const { data } = resp.data;
      dispatch(setPosts(data));
      dispatch(finishLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

export const setPosts = (posts) => ({
  type: types.postGetAll,
  payload: posts,
});

export const getByTag = (tag) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const resp = await axios.get(`${BASE_URL}/tag/${tag}/post?limit=10`, {
        headers: { 'app-id': APP_ID_API },
      });
      const { data } = resp.data;
      if (data.length === 0) {
        Swal.fire(
          'Error ',
          `No se encontro ningun tag con ese nombre ${tag}`,
          'error'
        );
        dispatch(setTagPostFailed());
      } else {
        dispatch(setTagPost(data));
        dispatch(setTagPostSucces());
        dispatch(finishLoading());
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const setTagPost = (tags) => ({
  type: types.postByTag,
  payload: tags,
});

export const setTagPostSucces = () => ({
  type: types.postByTagSucces,
});
export const setTagPostFailed = () => ({
  type: types.postByTagFailed,
});
