import { createSelector } from "reselect";
import { RootState } from "../../../../../types/types";

const selectCertificatesState = (state: RootState) => state.certificates;

export const selectCertificates = createSelector(
  selectCertificatesState,
  (store) => store.certificates || []
);
