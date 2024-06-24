/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TalentWhereUniqueInput } from "../../talent/base/TalentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TalentUpdateManyWithoutEmployeesInput {
  @Field(() => [TalentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TalentWhereUniqueInput],
  })
  connect?: Array<TalentWhereUniqueInput>;

  @Field(() => [TalentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TalentWhereUniqueInput],
  })
  disconnect?: Array<TalentWhereUniqueInput>;

  @Field(() => [TalentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TalentWhereUniqueInput],
  })
  set?: Array<TalentWhereUniqueInput>;
}

export { TalentUpdateManyWithoutEmployeesInput as TalentUpdateManyWithoutEmployeesInput };
