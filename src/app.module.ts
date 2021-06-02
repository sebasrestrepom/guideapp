import { Module } from '@nestjs/common';
import { CityController } from './city/controller/CityController';
import { DepartmentController } from './department/controller/DepartmentController';
import { SchoolController } from './school/controller/SchoolController';
import { QuestionController } from './question/controller/QuestionController';
import { StudentController } from './student/controller/StudentController';
import { ResultDetailController } from './resultDetail/controller/ResultDetailController';
import { ResultController } from './result/controller/ResultController';
import { SQLDepartmentRepository } from './department/repository/SQLDepartmentRepository';
import { SQLCityRepository } from './city/repository/SQLCityRepository';
import { SQLSchoolRepository } from './school/repository/SQLSchoolRepository';
import { SQLQuestionRepository } from './question/repository/SQLQuestionRepository';
import { SQLStudentRepository } from './student/repository/SQLStudentRepository';
import { SQLResultDetailRepository } from './resultDetail/repository/SQLResultDetailRepository';
import { SQLResultRepository } from './result/repository/SQLResultRepository';
import { CityService } from './city/service/CityService';
import { DepartmentService } from './department/service/DeparmentService';
import { SchoolService } from './school/service/SchoolService';
import { QuestionService } from './question/service/QuestionService';
import { StudentService } from './student/service/StudentService';
import { ResultDetailService } from './resultDetail/service/ResultDetailService';
import { ResultService } from './result/service/ResultService';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [
    DepartmentController,
    CityController,
    SchoolController,
    QuestionController,
    StudentController,
    ResultDetailController,
    ResultController,
  ],
  providers: [
    { provide: 'DepartmentRepository', useClass: SQLDepartmentRepository },
    { provide: 'CityRepository', useClass: SQLCityRepository },
    { provide: 'SchoolRepository', useClass: SQLSchoolRepository },
    { provide: 'QuestionRepository', useClass: SQLQuestionRepository },
    { provide: 'StudentRepository', useClass: SQLStudentRepository },
    { provide: 'ResultDetailRepository', useClass: SQLResultDetailRepository },
    { provide: 'ResultRepository', useClass: SQLResultRepository },
    DepartmentService,
    CityService,
    SchoolService,
    QuestionService,
    StudentService,
    ResultDetailService,
    ResultService,
  ],
  exports: [],
})
export class AppModule {}
