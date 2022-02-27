import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice'
import authReducer from '../features/auth/auth-slice'
export default configureStore({
    reducer: {
      counter: counterReducer,
      auth : authReducer,
    },
  })

