import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'blindless-redux',
      storage,
      whitelist: ['team', 'client', 'reviser', 'editor']
    },
    reducers
  )

  return persistedReducer
}
