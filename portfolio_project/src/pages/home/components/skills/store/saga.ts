import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSkillsAsync } from "./actions";
import { db } from "../../../../../../firebase";
import { ISkill } from "./reducer";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

function* fetchSkillsSaga() {
  try {
    const skillsCollection = collection(db, "skills");
    const skillsSnapshot: QuerySnapshot<DocumentData> = yield call(
      getDocs,
      skillsCollection
    );

    const skillsList: ISkill[] = skillsSnapshot.docs.map((doc) => ({
      name: doc.data().name,
    }));
    yield put(fetchSkillsAsync.success(skillsList));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchSkillsAsync.failure(error.message));
    } else {
      yield put(fetchSkillsAsync.failure("An unknown error occurred"));
    }
  }
}

export function* watchFetchSkills() {
  yield takeLatest(fetchSkillsAsync.request, fetchSkillsSaga);
}
