import { createReducer, ActionType } from "typesafe-actions";
import * as action from "./actions";
type ExperienceAction = ActionType<typeof action>;

export interface IExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface IExperienceState {
  experience: IExperience[];
  loading: boolean;
  error: string | null;
}

const initialState: IExperienceState = {
  experience: [],
  loading: false,
  error: null,
};

export const experienceReducer = createReducer<
  IExperienceState,
  ExperienceAction
>(initialState)
  .handleAction(action.fetchExperienceAsync.request, (state) => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(action.fetchExperienceAsync.success, (state, action) => ({
    ...state,
    loading: false,
    experience: action.payload,
  }))
  .handleAction(action.fetchExperienceAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
