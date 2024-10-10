import { createAsyncAction } from "typesafe-actions";
import { ISkill } from "./reducer";
export const fetchSkillsAsync = createAsyncAction(
  "skills/FETCH_REQUEST",
  "skills/FETCH_SUCCESS",
  "skills/FETCH_FAILURE"
)<void, ISkill[], string>();
