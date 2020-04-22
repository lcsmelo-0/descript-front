import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../ducks/user'
import { Types as ImageTypes } from '../ducks/image'

import {
  signIn
} from './user'


import {
  getImage,
  getImages
} from './image'

export default function* rootSaga() {
  yield all([
    
    //AUTHENTICATION
    takeLatest(UserTypes.SIGN_IN_REQUEST, signIn),
    

    //IMAGE
    takeLatest(ImageTypes.GET_IMAGE_REQUEST, getImage),
    takeLatest(ImageTypes.GET_IMAGES_REQUEST, getImages),
    
  ])
}
