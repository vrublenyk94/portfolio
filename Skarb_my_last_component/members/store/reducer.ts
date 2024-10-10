import { IMembersState } from "src/types/members";
import { createReducer } from "typesafe-actions";

import {
  clearMemberData,
  closeCategoriesMenu,
  fetchCategoriesAsync,
  fetchMembersAsync,
  openCategoriesMenu,
  selectCategoryAndResetPage,
  setCurrentPage,
  setLoading,
  setMemberName,
  setMemberPage,
  setPageSize,
  setSearchHeader,
  setSelectedCategory
} from "./actions";

const initialState: IMembersState = {
  totalPages: 0,
  totalElements: 0,
  last: false,
  data: [],
  categories: [],
  loading: true,
  error: null,
  selectedCategoryId: [],
  selectedCategoryName: "",
  currentPage: 1,
  pageSize: null,
  searchHeader: "",
  memberName: "",
  categoriesMenuAnchor: null,
  memberPage: ""
};

export const membersReducer = createReducer(initialState)
  .handleAction(fetchMembersAsync.request, (state) => ({
    ...state,
    loading: true,
    error: null
  }))
  .handleAction(fetchMembersAsync.success, (state, action) => ({
    ...state,
    loading: false,
    data: action.payload.content,
    categories: action.payload.categories || state.categories,
    totalPages: action.payload.totalPages,
    totalElements: action.payload.totalElements,
    last: action.payload.last
  }))
  .handleAction(fetchMembersAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }))
  .handleAction(fetchCategoriesAsync.success, (state, action) => ({
    ...state,
    loading: false,
    categories: action.payload
  }))
  .handleAction(fetchCategoriesAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }))
  .handleAction(setSelectedCategory, (state, action) => ({
    ...state,
    selectedCategoryId: action.payload.categoryId,
    selectedCategoryName: action.payload.categoryName
  }))
  .handleAction(setCurrentPage, (state, action) => ({
    ...state,
    currentPage: action.payload
  }))
  .handleAction(setPageSize, (state, action) => ({
    ...state,
    pageSize: action.payload
  }))
  .handleAction(setMemberName, (state, action) => ({
    ...state,
    memberName: action.payload,
    currentPage: 1
  }))
  .handleAction(setLoading, (state, action) => ({
    ...state,
    loading: action.payload
  }))
  .handleAction(clearMemberData, (state) => ({
    ...state,
    data: []
  }))
  .handleAction(setSearchHeader, (state, action) => ({
    ...state,
    searchHeader: action.payload
  }))
  .handleAction(selectCategoryAndResetPage, (state, action) => ({
    ...state,
    selectedCategoryId: action.payload.categoryId,
    selectedCategoryName: action.payload.categoryName,
    currentPage: 1,
    categoriesMenuAnchor: null
  }))
  .handleAction(openCategoriesMenu, (state, action) => ({
    ...state,
    categoriesMenuAnchor: action.payload
  }))
  .handleAction(closeCategoriesMenu, (state) => ({
    ...state,
    categoriesMenuAnchor: null
  }))
  .handleAction(setMemberPage, (state, action) => ({
    ...state,
    memberPage: action.payload
  }));
