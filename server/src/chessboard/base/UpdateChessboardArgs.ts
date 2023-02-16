/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ChessboardWhereUniqueInput } from "./ChessboardWhereUniqueInput";
import { ChessboardUpdateInput } from "./ChessboardUpdateInput";

@ArgsType()
class UpdateChessboardArgs {
  @Field(() => ChessboardWhereUniqueInput, { nullable: false })
  where!: ChessboardWhereUniqueInput;
  @Field(() => ChessboardUpdateInput, { nullable: false })
  data!: ChessboardUpdateInput;
}

export { UpdateChessboardArgs };
