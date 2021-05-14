import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityController } from './controller/CityController';
import { DepartmentController } from './controller/DepartmentController';
import { SQLDepartmentRepository } from './repository/SQLDepartmentRepository';
import { SQLCityRepository } from './repository/SQLCityRepository';
import { SQLSchoolRepository } from './repository/SQLSchoolRepository';
import { CityService } from './service/CityService';
import { SchoolController } from './controller/SchoolController';
import { DepartmentService } from './service/DeparmentService';
import { SchoolService } from './service/SchoolService';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [
    AppController,
    DepartmentController,
    CityController,
    SchoolController,
  ],
  providers: [
    { provide: 'DepartmentRepository', useClass: SQLDepartmentRepository },
    { provide: 'CityRepository', useClass: SQLCityRepository },
    { provide: 'SchoolRepository', useClass: SQLSchoolRepository },
    AppService,
    DepartmentService,
    CityService,
    SchoolService,
  ],
  exports: [],
})
export class AppModule {}
