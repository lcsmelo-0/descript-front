import { retry, put } from 'redux-saga/effects'

import { Creators as ImageActions } from '../ducks/image'

import { descriptApi } from '../../services/api'

export function* getImages() {
  try {
    const response = yield retry(6, 1000, descriptApi.get, '/get-image-list')
    yield put(ImageActions.getImagesSuccess(response.data))
  } catch (err) {
    yield put(ImageActions.getImagesError(err.message))
  }
}

export function* getImage(action) {
  try {
    const response = yield retry(6, 1000, descriptApi.get, `/get-image/${action.id}`)
    yield put(ImageActions.getImageSuccess(response.data))
  } catch (err) {
    yield put(ImageActions.getImageError(err.message))
  }
}