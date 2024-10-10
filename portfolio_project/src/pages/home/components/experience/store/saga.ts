import { call, put, takeLatest } from "redux-saga/effects";
import { fetchExperienceAsync } from "./actions";
import { db } from "../../../../../../firebase";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { IExperience } from "./reducer";

function* fetchExperienceSaga() {
  try {
    const experienceCollection = collection(db, "experiences");

    const experienceSnapshot: QuerySnapshot<DocumentData> = yield call(
      getDocs,
      experienceCollection
    );

    const experienceList: IExperience[] = experienceSnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        company: data.company || "",
        role: data.role || "",
        duration: data.duration || "",
        description: data.description || [],
      } as IExperience;
    });

    yield put(fetchExperienceAsync.success(experienceList));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchExperienceAsync.failure(error.message));
    } else {
      yield put(fetchExperienceAsync.failure("An unknown error occurred"));
    }
  }
}

export function* watchFetchExperience() {
  yield takeLatest(fetchExperienceAsync.request, fetchExperienceSaga);
}
