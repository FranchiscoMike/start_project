import { IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({message : 'cannot be empty'})
    name :string;
}
