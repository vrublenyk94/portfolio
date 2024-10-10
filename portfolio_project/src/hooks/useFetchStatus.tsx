import { useSelector } from "react-redux";
import { RootState } from "../types/types";

const useFetchStatus = () => {
  const loading = useSelector((state: RootState) => state.skills.loading);
  const error = useSelector((state: RootState) => state.skills.error);

  return { loading, error };
};

export default useFetchStatus;
