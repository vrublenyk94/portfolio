import {
  GET_MEMBERS_CATEGORIES,
  GET_ORGANIZATIONS,
  GET_PARTNERS,
  GET_VOLUNTEERS
} from "src/constants/api";
import { get } from "src/services/http/api";
import { IFetchMembersParams, IMemberResponse, TCategoriesResponse } from "src/types/members";

export const fetchVolunteersApi = async (params: IFetchMembersParams) => {
  const { page, pageSize, name, searchHeader } = params;
  const response = await get(`${GET_VOLUNTEERS}?categoryId=${params.selectedCategoryId}`, {
    params: {
      [searchHeader]: name,
      page: page - 1,
      size: pageSize
    }
  });
  return response as IMemberResponse;
};
export const fetchOrganizationsApi = async (params: IFetchMembersParams) => {
  const { page, pageSize, name, searchHeader } = params;
  const response = await get(GET_ORGANIZATIONS, {
    params: {
      [searchHeader]: name,
      page: page - 1,
      size: pageSize
    }
  });
  return response as IMemberResponse;
};

export const fetchPartnersApi = async (params: IFetchMembersParams) => {
  const { page, pageSize, name, searchHeader } = params;
  const response = await get(GET_PARTNERS, {
    params: {
      [searchHeader]: name,
      page: page - 1,
      size: pageSize
    }
  });
  return response as IMemberResponse;
};

export const fetchCategoriesApi = async () => {
  const response = await get(GET_MEMBERS_CATEGORIES);
  return response as TCategoriesResponse;
};
