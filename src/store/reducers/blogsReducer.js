import {
  FETCH_BLOGS_ERROR,
  FETCH_BLOGS_LOADING,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOG_ERROR,
  FETCH_BLOG_LOADING,
  FETCH_BLOG_SUCCESS,
} from "../consts";

const initialState = {
  loading: false,
  error: null,
  blogs: [],
  blog: {
    isLoading: false,
    error: null,
    data: {},
  },
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_LOADING:
      return { ...state, loading: true };

    case FETCH_BLOGS_SUCCESS:
      return { ...state, loading: false, blogs: action.payload, error: null };

    case FETCH_BLOGS_ERROR:
      return { ...state, loading: false, blogs: [], error: action.payload };

    case FETCH_BLOG_LOADING:
      return { ...state, blog: { ...state.blog, isLoading: true }};

    case FETCH_BLOG_SUCCESS: 
      return { ...state, blog: { isLoading: false, data: action.payload, error: null }};

    case FETCH_BLOG_ERROR:
      return { ...state, blog: { isLoading: false, data: {}, error: action.payload }};

    default:
      return state;
  }
};

export const setBlogsLoading = () => ({ type: FETCH_BLOGS_LOADING });

export const setBlogsSuccess = (payload) => ({ type: FETCH_BLOGS_SUCCESS, payload });

export const setBlogsError = (msg) => ({ type: FETCH_BLOGS_ERROR, payload: msg });

export const setBlogLoading = () => ({ type: FETCH_BLOG_LOADING });

export const setBlogSuccess = (payload) => ({ type: FETCH_BLOG_SUCCESS, payload });

export const setBlogError = (msg) => ({ type: FETCH_BLOG_ERROR, payload: msg });
