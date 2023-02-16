import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChessboardServiceBase } from "./base/chessboard.service.base";

@Injectable()
export class ChessboardService extends ChessboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
