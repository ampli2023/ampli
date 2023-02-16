import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ChessboardWhereInput = {
  id?: StringFilter;
  level?: StringNullableFilter;
  size?: IntNullableFilter;
};
