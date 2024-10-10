import { all, call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchCategoriesApi,
  fetchOrganizationsApi,
  fetchPartnersApi,
  fetchVolunteersApi
} from "src/pages/members/store/api";
import { selectCategories } from "src/pages/members/store/selectors";
import { EMembersPageType, IMemberResponse, TCategoriesResponse } from "src/types/members";

import { clearMemberData, fetchCategoriesAsync, fetchMembersAsync } from "./actions";

function* fetchMembers(action: ReturnType<typeof fetchMembersAsync.request>) {
  yield put(clearMemberData());
  const { page, name, searchHeader, pageSize, memberPage, selectedCategoryId } = action.payload;

  try {
    let membersData: IMemberResponse;
    switch (memberPage) {
      case EMembersPageType.VOLUNTEERS:
        membersData = yield call(fetchVolunteersApi, {
          page,
          name,
          searchHeader,
          pageSize,
          selectedCategoryId
        });
        break;
      case EMembersPageType.PARTNERS:
        membersData = yield call(fetchPartnersApi, {
          page,
          name,
          searchHeader,
          pageSize
        });
        break;
      case EMembersPageType.ORGANIZATIONS:
        membersData = yield call(fetchOrganizationsApi, {
          page,
          name,
          searchHeader,
          pageSize
        });
        break;
      default:
        membersData = yield call(fetchVolunteersApi, {
          page,
          name,
          searchHeader,
          pageSize,
          selectedCategoryId
        });
    }

    yield put(fetchMembersAsync.success(membersData));

    if (memberPage === EMembersPageType.VOLUNTEERS) {
      const categories = yield select(selectCategories);

      if (categories.length === 0) {
        yield put(fetchCategoriesAsync.request());
        const categoriesResponse: TCategoriesResponse = yield call(fetchCategoriesApi);
        yield put(fetchCategoriesAsync.success(categoriesResponse));
      }
    }
  } catch (error) {
    yield put(fetchMembersAsync.failure(error as Error));
    if (memberPage === EMembersPageType.VOLUNTEERS) {
      yield put(fetchCategoriesAsync.failure(error as Error));
    }
  }
}

function* watchFetchMembers() {
  yield takeLatest(fetchMembersAsync.request, fetchMembers);
}

export default function* membersSaga() {
  yield all([call(watchFetchMembers)]);
}
