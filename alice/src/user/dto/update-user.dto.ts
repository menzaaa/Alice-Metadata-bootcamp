import { ApiModelProperty } from "@nestjs/swagger";
import { IsInt, IsString } from 'class-validator';

export class UpdateUserDto {
    @ApiModelProperty()
    @IsInt()
    readonly id: number;

    @ApiModelProperty()
    @IsString()
    readonly name: string;
}