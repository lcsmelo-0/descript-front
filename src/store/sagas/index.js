import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../ducks/user'
import { Types as ImageTypes } from '../ducks/image'
import { Types as WorkflowTypes } from '../ducks/workflow'

import {
  signIn
} from './user'


import {
  getImage,
  getImages,
  setImage
} from './image'

import {
  getWorkflowStatus
} from './workflow'

export default function* rootSaga() {
  yield all([
    
    //AUTHENTICATION
    takeLatest(UserTypes.SIGN_IN_REQUEST, signIn),
    

    //IMAGE
    takeLatest(ImageTypes.GET_IMAGE_REQUEST, getImage),
    takeLatest(ImageTypes.GET_IMAGES_REQUEST, getImages),
    takeLatest(ImageTypes.SET_IMAGE_REQUEST, setImage),
    
    //Workflow
    takeLatest(WorkflowTypes.GET_WORKFLOW_STATUS_REQUEST, getWorkflowStatus),
  
  ])
}
