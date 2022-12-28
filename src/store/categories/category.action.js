import { CATEGORIES_ACTION_TYPES } from "./category.types";
// import { getCategoriesAndDocuments } from "../../utils/firebase";

// export const setCategories = (categories) => {
//   return {
//     type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
//     payload: categories,
//   };
// };

export const fetchCategoriesStart = () => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  };
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     console.log("error:", error.message);
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
