import { Chessboard as TChessboard } from "../api/chessboard/Chessboard";

export const CHESSBOARD_TITLE_FIELD = "level";

export const ChessboardTitle = (record: TChessboard): string => {
  return record.level || String(record.id);
};
