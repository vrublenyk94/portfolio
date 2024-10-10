export interface ISort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}
export interface IAvatarData {
  id: number;
  fileType: string;
  fileName: string;
  uuid: string;
}
export interface ILogoData {
  id: number;
  fileType: string;
  fileName: string;
  uuid: string;
}
export interface IMemberData {
  about: string;
  avatar: IAvatarData;
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  categories: string[];
  createdDate: string;
  siteUrl: string;
  official: boolean;
  type: string;
  logo: ILogoData;
  shownOnHomePage: string;
}
export interface ICategoryData {
  id: number;
  name: string;
}
export interface IMemberResponse {
  content: IMemberData[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: ISort;
  totalElements: number;
  totalPages: number;
}
export type TCategoriesResponse = ICategoryData[];

export interface IMemberPageProps {
  memberPage: EMembersPageType;
}

export enum EMembersPageType {
  VOLUNTEERS = "volunteers",
  PARTNERS = "partners",
  ORGANIZATIONS = "organizations"
}

export interface IMembersState {
  totalPages: number;
  totalElements: number;
  last: boolean;
  data: IMemberData[];
  categories: ICategoryData[];
  loading: boolean;
  error: string | null;
  selectedCategoryId: number[];
  selectedCategoryName: string;
  currentPage: number;
  pageSize: number | null;
  searchHeader: string;
  memberName: string;
  categoriesMenuAnchor: null | HTMLElement;
  memberPage: string;
}

export enum EItemSizes {
  SMALL = 295,
  LARGE = 350
}

export interface IFetchMembersParams {
  page: number;
  name: string;
  searchHeader: string;
  pageSize: number;
  selectedCategoryId?: number[];
}
