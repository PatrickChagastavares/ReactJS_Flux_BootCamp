import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { AddToCartSucess } from './actions';

function* AddToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(AddToCartSucess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', AddToCart)]);
