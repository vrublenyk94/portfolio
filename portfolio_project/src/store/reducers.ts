import { combineReducers } from "@reduxjs/toolkit";
import { skillsReducer } from "../pages/home/components/skills/store/reducer";
import { projectsReducer } from "../pages/home/components/projects/store/reducer";
import { experienceReducer } from "../pages/home/components/experience/store/reducer";
import { certificatesReducer } from "../pages/about/components/education/store/reducer";

const rootReducer = combineReducers({
  skills: skillsReducer,
  projects: projectsReducer,
  experience: experienceReducer,
  certificates: certificatesReducer,
});

export default rootReducer;
