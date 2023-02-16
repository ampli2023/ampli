import { ChessboardWhereInput } from "./ChessboardWhereInput";
import { ChessboardOrderByInput } from "./ChessboardOrderByInput";

export type ChessboardFindManyArgs = {
  where?: ChessboardWhereInput;
  orderBy?: Array<ChessboardOrderByInput>;
  skip?: number;
  take?: number;
};
