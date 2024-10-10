import { createSelector } from "reselect";

const selectMembersState = (state) => state.members;

export const selectData = createSelector(selectMembersState, (store) => store.data || []);
export const selectCategories = createSelector(selectMembersState, (store) => store.categories);
export const selectCurrentPage = createSelector(selectMembersState, (store) => store.currentPage);
export const selectPageSize = createSelector(selectMembersState, (store) => store.pageSize);
export const selectMemberName = createSelector(selectMembersState, (store) => store.memberName);
export const selectSearchHeader = createSelector(selectMembersState, (store) => store.searchHeader);
export const selectSelectedCategoryName = createSelector(
  selectMembersState,
  (store) => store.selectedCategoryName
);
export const selectTotalElements = createSelector(
  selectMembersState,
  (store) => store.totalElements
);
export const selectTotalPages = createSelector(selectMembersState, (store) => store.totalPages);
export const selectLast = createSelector(selectMembersState, (store) => store.last);
export const selectCategoriesMenuAnchor = createSelector(
  selectMembersState,
  (store) => store.categoriesMenuAnchor
);
export const selectSelectedCategoryId = createSelector(
  selectMembersState,
  (store) => store.selectedCategoryId
);
