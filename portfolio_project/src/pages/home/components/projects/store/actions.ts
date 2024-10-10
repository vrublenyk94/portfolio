import { createAsyncAction } from "typesafe-actions";
import { IProject } from "./reducer";

export const fetchProjectsAsync = createAsyncAction(
  "projects/FETCH_REQUEST",
  "projects/FETCH_SUCCESS",
  "projects/FETCH_FAILURE"
)<void, IProject[], string>();
