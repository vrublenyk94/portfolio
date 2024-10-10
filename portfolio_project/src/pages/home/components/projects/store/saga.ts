import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProjectsAsync } from "./actions";
import { db } from "../../../../../../firebase";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { IProject } from "./reducer";

function* fetchProjectsSaga() {
  try {
    const projectsCollection = collection(db, "projects");
    const projectsSnapshot: QuerySnapshot<DocumentData> = yield call(
      getDocs,
      projectsCollection
    );

    const projectsList: IProject[] = projectsSnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title || "",
        image: data.image || "",
        bg: data.bg || "",
        link: data.link || "",
        description: data.description || "",
      };
    });

    yield put(fetchProjectsAsync.success(projectsList));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchProjectsAsync.failure(error.message));
    } else {
      yield put(fetchProjectsAsync.failure("An unknown error occurred"));
    }
  }
}

export function* watchFetchProjects() {
  yield takeLatest(fetchProjectsAsync.request, fetchProjectsSaga);
}
