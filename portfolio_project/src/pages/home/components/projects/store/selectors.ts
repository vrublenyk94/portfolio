import { createSelector } from "reselect";
import { RootState } from "../../../../../types/types";

const selectProjectsState = (state: RootState) => state.projects;

export const selectProjects = createSelector(
  selectProjectsState,
  (store) => store.projects || []
);
