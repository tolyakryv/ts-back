import { IsDefined, IsString } from 'class-validator';
export class BodyPost {
    @IsDefined()
    city: string | undefined;
    
    @IsDefined()
    checked: boolean | undefined;
    
}