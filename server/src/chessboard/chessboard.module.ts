import { Module } from "@nestjs/common";
import { ChessboardModuleBase } from "./base/chessboard.module.base";
import { ChessboardService } from "./chessboard.service";
import { ChessboardController } from "./chessboard.controller";
import { ChessboardResolver } from "./chessboard.resolver";

@Module({
  imports: [ChessboardModuleBase],
  controllers: [ChessboardController],
  providers: [ChessboardService, ChessboardResolver],
  exports: [ChessboardService],
})
export class ChessboardModule {}
