import { ApiModelProperty } from "@nestjs/swagger";
import { IsInt, IsString } from 'class-validator';

export class CreateTasksDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly description: string;
}