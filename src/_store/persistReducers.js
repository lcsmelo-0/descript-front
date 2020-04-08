import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'descript-redux',
      storage,
      whitelist: ['performer', 'group', 'work']
    },
    reducers
  )

  return persistedReducer
}
