import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ChessboardResolverBase } from "./base/chessboard.resolver.base";
import { Chessboard } from "./base/Chessboard";
import { ChessboardService } from "./chessboard.service";

@graphql.Resolver(() => Chessboard)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ChessboardResolver extends ChessboardResolverBase {
  constructor(
    protected readonly service: ChessboardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
