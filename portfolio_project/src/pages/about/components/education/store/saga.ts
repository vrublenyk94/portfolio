import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCertificatesAsync } from "./action";
import { db } from "../../../../../../firebase";
import { ICertificates } from "./reducer";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

function* fetchCertificatesSaga() {
  try {
    const certificatesCollection = collection(db, "certificates");
    const certificatesSnapshot: QuerySnapshot<DocumentData> = yield call(
      getDocs,
      certificatesCollection
    );
    const certificatesList: ICertificates[] = certificatesSnapshot.docs.map(
      (doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          image: data.image || "",
          title: data.title || "",
        } as ICertificates;
      }
    );
    yield put(fetchCertificatesAsync.success(certificatesList));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchCertificatesAsync.failure(error.message));
    } else {
      yield put(fetchCertificatesAsync.failure("An unknown error occurred"));
    }
  }
}

export function* watchFetchCertificates() {
  yield takeLatest(fetchCertificatesAsync.request, fetchCertificatesSaga);
}
