import { Character, Info } from "utils/Types";
import { AlertMessage, Loader } from "components";

type ErrorHandlerType = {
  error: string | null;
  loading: boolean;
  data: Info<Character[]> | Character | undefined;
};

export const ErrorHandler = ({ error, loading, data }: ErrorHandlerType) => {
  if (loading === true) {
    return <Loader />;
  }
  if (!error && data?.error) {
    return <AlertMessage severity={"info"} type={"emptyData"} />;
  }
  if (error) {
    return <AlertMessage severity={"error"} />;
  }
  return null;
};
