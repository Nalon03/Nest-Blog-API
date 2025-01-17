import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Content should not be empty' })
  @IsString({ message: 'Content must be a string' })
  content: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
