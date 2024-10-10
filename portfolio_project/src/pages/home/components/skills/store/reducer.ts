import { createReducer, ActionType } from "typesafe-actions";
import * as action from "./actions";
type SkillsAction = ActionType<typeof action>;
export interface ISkill {
  name: string;
}
export interface ISkillsState {
  skills: ISkill[];
  loading: boolean;
  error: string | null;
}
const initialState: ISkillsState = {
  skills: [],
  loading: false,
  error: null,
};

export const skillsReducer = createReducer<ISkillsState, SkillsAction>(
  initialState
)
  .handleAction(action.fetchSkillsAsync.request, (state) => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(action.fetchSkillsAsync.success, (state, action) => ({
    ...state,
    loading: false,
    skills: action.payload,
  }))
  .handleAction(action.fetchSkillsAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
