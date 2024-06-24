/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PerformanceWhereInput } from "./PerformanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PerformanceOrderByInput } from "./PerformanceOrderByInput";

@ArgsType()
class PerformanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PerformanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PerformanceWhereInput, { nullable: true })
  @Type(() => PerformanceWhereInput)
  where?: PerformanceWhereInput;

  @ApiProperty({
    required: false,
    type: [PerformanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PerformanceOrderByInput], { nullable: true })
  @Type(() => PerformanceOrderByInput)
  orderBy?: Array<PerformanceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PerformanceFindManyArgs as PerformanceFindManyArgs };
