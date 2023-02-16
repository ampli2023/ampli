import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChessboardService } from "./chessboard.service";
import { ChessboardControllerBase } from "./base/chessboard.controller.base";

@swagger.ApiTags("chessboards")
@common.Controller("chessboards")
export class ChessboardController extends ChessboardControllerBase {
  constructor(
    protected readonly service: ChessboardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
