import { createAsyncAction } from "typesafe-actions";
import { ICertificates } from "./reducer";

export const fetchCertificatesAsync = createAsyncAction(
  "certificates/FETCH_REQUEST",
  "certificates/FETCH_SUCCESS",
  "certificates/FETCH_FAILURE"
)<void, ICertificates[], string>();
