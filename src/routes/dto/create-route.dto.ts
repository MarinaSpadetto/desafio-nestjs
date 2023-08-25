import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  source_id: string;
  destination_id: string;
}
