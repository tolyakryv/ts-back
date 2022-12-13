import { IsDefined, IsString } from 'class-validator';
export class BodyPost {
    @IsDefined()
    city: string;
    
    @IsDefined()@IsString()
        god: string;
    
}