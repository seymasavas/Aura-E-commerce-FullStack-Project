import axiosInstance from "../../api/axiosInstance";

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  payload: productList,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit,
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const response = await axiosInstance.get("/products");

    dispatch(setProductList(response.data.products || response.data));

    dispatch(setTotal(response.data.total || response.data.length));

    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching products:", error);

    dispatch(setFetchState("FAILED"));
  }
};
