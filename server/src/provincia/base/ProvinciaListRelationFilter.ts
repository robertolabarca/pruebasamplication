/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProvinciaWhereInput } from "./ProvinciaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProvinciaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProvinciaWhereInput,
  })
  @ValidateNested()
  @Type(() => ProvinciaWhereInput)
  @IsOptional()
  @Field(() => ProvinciaWhereInput, {
    nullable: true,
  })
  every?: ProvinciaWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProvinciaWhereInput,
  })
  @ValidateNested()
  @Type(() => ProvinciaWhereInput)
  @IsOptional()
  @Field(() => ProvinciaWhereInput, {
    nullable: true,
  })
  some?: ProvinciaWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProvinciaWhereInput,
  })
  @ValidateNested()
  @Type(() => ProvinciaWhereInput)
  @IsOptional()
  @Field(() => ProvinciaWhereInput, {
    nullable: true,
  })
  none?: ProvinciaWhereInput;
}
export { ProvinciaListRelationFilter };
