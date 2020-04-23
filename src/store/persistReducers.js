import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'front-descript',
      storage,
      whitelist: ['user']
    },
    reducers
  )

  return persistedReducer
}
