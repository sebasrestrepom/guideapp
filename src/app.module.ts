import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityController } from './controller/CityController';
import { DepartmentController } from './controller/DepartmentController';
import { InMemoryCityRepository } from './repository/InMemoryCityRepository';
import { SQLDepartmentRepository } from './repository/SQLDepartmentRepository';
import { CityService } from './service/CityService';
import { SchoolController } from './controller/SchoolController';
import { InMemorySchoolRepository } from './repository/InMemorySchoolRepository';
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
    { provide: 'CityRepository', useClass: InMemoryCityRepository },
    { provide: 'SchoolRepository', useClass: InMemorySchoolRepository },
    AppService,
    DepartmentService,
    CityService,
    SchoolService,
  ],
  exports: [],
})
export class AppModule {}
