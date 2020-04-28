export const Types = {
  GET_IMAGES_REQUEST: "image/GET_IMAGES_REQUEST",
  GET_IMAGES_SUCCESS: "image/GET_IMAGES_SUCCESS",
  GET_IMAGES_ERROR: "image/GET_IMAGES_ERROR",
  GET_IMAGE_REQUEST: "image/GET_IMAGE_REQUEST",
  GET_IMAGE_SUCCESS: "image/GET_IMAGE_SUCCESS",
  GET_IMAGE_ERROR: "image/GET_IMAGE_ERROR",
  SET_IMAGE_REQUEST: "image/SET_IMAGE_REQUEST",
  SET_IMAGE_SUCCESS: "image/SET_IMAGE_SUCCESS",
  SET_IMAGE_ERROR: "image/SET_IMAGE_ERROR"
};

const INITIAL_STATE = {
  loading: false,
  images: [],
  image: {}
};

export default function image(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_IMAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.GET_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.data
      };
    case Types.GET_IMAGES_ERROR:
      return {
        ...state,
        loading: false
      };
    case Types.GET_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        id: action.id
      };

    case Types.GET_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.data
      };
    case Types.GET_IMAGE_ERROR:
      return {
        ...state,
        loading: false
      };
    case Types.SET_IMAGE_REQUEST: {
      return {
        ...state,
        loading: false,
        image: {
          name: action.image.name,
          file: action.image.file,
          description: action.image.description
        }
      };
    }
    case Types.SET_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case Types.SET_IMAGE_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
export const Creators = {
  getImagesRequest: () => ({
    type: Types.GET_IMAGES_REQUEST
  }),
  getImagesSuccess: data => ({
    type: Types.GET_IMAGES_SUCCESS,
    data
  }),
  getImagesError: response => ({
    type: Types.GET_IMAGES_ERROR,
    payload: { response }
  }),
  getImageRequest: id => ({
    type: Types.GET_IMAGE_REQUEST,
    id
  }),
  getImageSuccess: data => ({
    type: Types.GET_IMAGE_SUCCESS,
    data
  }),
  getImageError: response => ({
    type: Types.GET_IMAGE_ERROR,
    payload: { response }
  }),
  setImageRequest: image => ({
    type: Types.SET_IMAGE_REQUEST,
    image
  }),
  setImageSuccess: response => ({
    type: Types.SET_IMAGE_SUCCESS,
    payload: { response }
  }),
  setImageError: response => ({
    type: Types.SET_IMAGE_ERROR,
    payload: { response }
  })
};
