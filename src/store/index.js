import { applyMiddleware, combineReducers, createStore } from "redux";
import { blogsReducer } from "./reducers/blogsReducer";
import { userReducer } from "./reducers/userReducer";
import { searchReducer } from "./reducers/searchReducer";
import savedReducer from "./reducers/savedReducer";
import thunk from "redux-thunk"; 
import { commentReducer } from "./reducers/commentsReducer";



const rootReducer = combineReducers({
  user: userReducer,
  blogsReducer,
  searchReducer,
  saved: savedReducer,
  comments: commentReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

