import { ICertificatesState } from "../pages/about/components/education/store/reducer";
import { IExperienceState } from "../pages/home/components/experience/store/reducer";
import { IProjectsState } from "../pages/home/components/projects/store/reducer";
import { ISkillsState } from "../pages/home/components/skills/store/reducer";

export interface RootState {
  skills: ISkillsState;
  projects: IProjectsState;
  experience: IExperienceState;
  certificates: ICertificatesState;
}
