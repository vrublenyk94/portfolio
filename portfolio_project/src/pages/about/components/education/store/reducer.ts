import { createReducer, ActionType } from "typesafe-actions";
import * as action from "./action";

export interface ICertificates {
  id: string;
  image: string;
  title: string;
}

export interface ICertificatesState {
  certificates: ICertificates[];
  loading: boolean;
  error: string | null;
}

const initialState: ICertificatesState = {
  certificates: [],
  loading: false,
  error: null,
};

type certificatesAction = ActionType<typeof action>;

export const certificatesReducer = createReducer<
  ICertificatesState,
  certificatesAction
>(initialState)
  .handleAction(action.fetchCertificatesAsync.request, (state) => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(action.fetchCertificatesAsync.success, (state, action) => ({
    ...state,
    loading: false,
    certificates: action.payload,
  }))
  .handleAction(action.fetchCertificatesAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
