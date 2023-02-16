import { SortOrder } from "../../util/SortOrder";

export type ChessboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
