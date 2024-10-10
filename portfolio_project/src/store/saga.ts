import { all } from "redux-saga/effects";
import { watchFetchSkills } from "../pages/home/components/skills/store/saga";
import { watchFetchProjects } from "../pages/home/components/projects/store/saga";
import { watchFetchExperience } from "../pages/home/components/experience/store/saga";
import { watchFetchCertificates } from "../pages/about/components/education/store/saga";

export default function* rootSaga() {
  yield all([
    watchFetchSkills(),
    watchFetchProjects(),
    watchFetchExperience(),
    watchFetchCertificates(),
  ]);
}
