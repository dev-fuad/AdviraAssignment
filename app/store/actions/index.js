import { FETCH_DATA, FETCH_MORE, SET_LOADING } from '../types';

import { fetchRequest } from '../../providers/apis';
import store from '../index';

const loadData = data => ({
  type: FETCH_DATA,
  ...data,
});

const loadMore = data => ({
  type: FETCH_MORE,
  ...data,
});

const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading,
});

const _fetchData = async (reset = false) => {
  try {
    // TODO: dispatch isLoading
    store.dispatch(setLoading(true));
    const feedsResponse = await fetchRequest({
      user_id: store.getState().user.id,
      page: (reset ? 1 : store.getState().feeds.page.index + 1),
    });
    return feedsResponse;
  } catch (error) {
    console.log('Errorred: ', error);
    return null;
  }
};

export const fetchAPI = () => async (dispatch) => {
  let result = await _fetchData(true);
  dispatch(loadData(result));
};

export const fetchMoreAPI = () => async (dispatch) => {
  let result = await _fetchData();
  dispatch(loadMore(result));
};
