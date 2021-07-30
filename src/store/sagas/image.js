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

export function* setImage(action) {
  const requestBody = {
    name: action.image.name,
    fileSource: action.image.file,
    description: action.image.description,
  }
  try {
    const response = yield retry(6, 100, descriptApi.post, '/image-submit', requestBody)
    yield put(ImageActions.setImageSuccess(response.data))
  } catch (err) {
    yield put(ImageActions.setImageError(err.message))
  }
}
