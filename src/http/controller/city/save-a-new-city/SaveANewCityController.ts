import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SaveANewCity } from 'src/core/use_cases/city/SaveANewCity';
import { SaveANewCityRequest } from './SaveANewCityRequest';
import { SaveANewCityResponse } from './SaveANewCityResponse';

@ApiTags('City')
@Controller()
export class SaveANewCityController {
  constructor(private saveANewCity: SaveANewCity) {}

  @Post('city/save-city')
  @ApiOperation({ summary: 'Creation of a new city' })
  async handle(
    @Body() request: SaveANewCityRequest,
  ): Promise<SaveANewCityResponse> {
    const city = await this.saveANewCity.execute(
      request.departmentId,
      request.code,
      request.name,
    );

    return {
      id: city.id,
      departmentId: city.departmentId,
      code: city.code,
      name: city.name,
    };
  }
}
