import { EMembersPageType, IMemberResponse, TCategoriesResponse } from "src/types/members";
import { createAction, createAsyncAction } from "typesafe-actions";

export const fetchMembersAsync = createAsyncAction(
  "members/FETCH_REQUEST",
  "members/FETCH_SUCCESS",
  "members/FETCH_FAILURE"
)<
  {
    page: number;
    name: string;
    searchHeader: string;
    pageSize: number;
    memberPage: EMembersPageType;
    selectedCategoryId: number[];
  },
  IMemberResponse,
  Error
>();

export const fetchCategoriesAsync = createAsyncAction(
  "FETCH_CATEGORIES_REQUEST",
  "FETCH_CATEGORIES_SUCCESS",
  "FETCH_CATEGORIES_FAILURE"
)<void, TCategoriesResponse, Error>();

export const setCurrentPage = createAction("members/SET_CURRENT_PAGE")<number>();
export const setPageSize = createAction("members/SET_PAGE_SIZE")<number>();
export const setSearchHeader = createAction("members/SET_SEARCH_HEADER")<string>();
export const setSelectedCategory = createAction("members/SET_SELECTED_CATEGORY")<{
  categoryId: number[];
  categoryName: string;
}>();
export const setMemberName = createAction("members/SET_MEMBER_NAME")<string>();
export const setLoading = createAction("members/SET_MEMBERS_LOADING")<boolean>();
export const clearMemberData = createAction("members/CLEAR_MEMBER_DATA")<void>();
export const selectCategoryAndResetPage = createAction("members/HANDLE_SELECT_CATEGORY_AND_NAME")<{
  categoryId: number;
  categoryName: string;
}>();
export const openCategoriesMenu = createAction("members/OPEN_CATEGORIES_MENU")<{
  elementRef: HTMLDivElement | HTMLButtonElement | null;
}>();
export const closeCategoriesMenu = createAction("members/CLOSE_CATEGORIES_MENU")<void>();
export const setMemberPage = createAction("members/SET_MEMBER_PAGE")<string>();
