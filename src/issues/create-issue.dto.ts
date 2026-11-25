import { IsString, Matches, MaxLength } from 'class-validator';

export class CreateIssueDto {
  @IsString()
  @Matches(/\S/, { message: 'Title must contain a non-whitespace character.' })
  @MaxLength(120)
  title!: string;
}

// Requires a title with at least one non-whitespace character and at most 120 characters.