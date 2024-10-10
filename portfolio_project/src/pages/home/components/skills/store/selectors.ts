import { createSelector } from "reselect";
import { RootState } from "../../../../../types/types";

const selectSkillsState = (state: RootState) => state.skills;

export const selectSkills = createSelector(
  selectSkillsState,
  (store) => store.skills || []
);
