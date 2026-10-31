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

export const setSort = (sort) => ({
  type: "SET_SORT",
  payload: sort,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const fetchProducts =
  (categoryId, filter, sort, total, limit = 25, offset = 0) =>
  async (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    try {
      const queryParams = {};
      if (categoryId) queryParams.category = categoryId;
      if (filter) queryParams.filter = filter;
      if (sort) queryParams.sort = sort;
      if (limit) queryParams.limit = limit;
      if (offset !== undefined) queryParams.offset = offset;

      const response = await axiosInstance.get("/products", {
        params: queryParams,
      });

      dispatch(setProductList(response.data.products || response.data));

      dispatch(setTotal(response.data.total || response.data.length));

      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching products:", error);

      dispatch(setFetchState("FAILED"));
    }
  };

export const fetchCategories = () => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const response = await axiosInstance.get("/categories");

    dispatch(setCategories(response.data.categories || response.data));

    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching categories:", error);

    dispatch(setFetchState("FAILED"));
  }
};
