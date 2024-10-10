import { createSelector } from "reselect";
import { RootState } from "../../../../../types/types";

const selectExperienceState = (state: RootState) => state.experience;

export const selectExperience = createSelector(
  selectExperienceState,
  (store) => store.experience || []
);
