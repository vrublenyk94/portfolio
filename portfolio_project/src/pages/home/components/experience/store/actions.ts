import { createAsyncAction } from "typesafe-actions";
import { IExperience } from "./reducer";

export const fetchExperienceAsync = createAsyncAction(
  "experience/FETCH_REQUEST",
  "experience/FETCH_SUCCESS",
  "experience/FETCH_FAILURE"
)<void, IExperience[], string>();
