import { createReducer, ActionType } from "typesafe-actions";
import * as action from "./actions";

export interface IProject {
  id: string;
  title: string;
  image: string;
  bg: string;
  link: string;
  description: string;
}

export interface IProjectsState {
  projects: IProject[];
  loading: boolean;
  error: string | null;
}

const initialState: IProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

type projectAction = ActionType<typeof action>;

export const projectsReducer = createReducer<IProjectsState, projectAction>(
  initialState
)
  .handleAction(action.fetchProjectsAsync.request, (state) => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(action.fetchProjectsAsync.success, (state, action) => ({
    ...state,
    loading: false,
    projects: action.payload,
  }))
  .handleAction(action.fetchProjectsAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
