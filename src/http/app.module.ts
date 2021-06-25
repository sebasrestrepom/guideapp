import { Module } from '@nestjs/common';
import { GetCityByDepartmentController } from 'src/http/controller/city/get-city-by-department/GetCityByDepartmentController';
import { SaveANewCityController } from 'src/http/controller/city/save-a-new-city/SaveANewCityController';
import { GetAllDepartmentController } from 'src/http/controller/department/get-all-department/GetAllDepartmentController';
import { GetAllQuestionController } from 'src/http/controller/question/get-all-question/GetAllQuestionController';
import { SaveANewStudentController } from 'src/http/controller/student/save-a-new-student/SaveANewStudentController';
import { DeleteSchoolController } from 'src/http/controller/school/delete-school/DeleteSchoolController';
import { GetSchoolByCityController } from 'src/http/controller/school/get-school-by-city/GetSchoolByCityController';
import { SaveANewSchoolController } from 'src/http/controller/school/save-a-new-school/SaveANewSchoolController';
import { UpdateDataSchoolController } from 'src/http/controller/school/update-data-school/UpdateDataSchoolController';
import { SaveANewResultController } from './controller/result/save-a-new-result/SaveANewResultController';
import { SQLDepartmentRepository } from 'src/core/infrastructure/department/SQLDepartmentRepository';
import { SQLCityRepository } from 'src/core/infrastructure/city/SQLCityRepository';
import { SQLSchoolRepository } from 'src/core/infrastructure/school/SQLSchoolRepository';
import { SQLQuestionRepository } from 'src/core/infrastructure/question/SQLQuestionRepository';
import { SQLStudentRepository } from 'src/core/infrastructure/student/SQLStudentRepository';
import { SQLResultRepository } from 'src/core/infrastructure/result/SQLResultRepository';
import { GetCityByDepartment } from 'src/core/use_cases/city/GetCityByDepartment';
import { SaveANewCity } from 'src/core/use_cases/city/SaveANewCity';
import { GetAllDepartment } from 'src/core/use_cases/department/GetAllDepartment';
import { GetAllQuestion } from 'src/core/use_cases/question/GetAllQuestion';
import { SaveANewStudent } from 'src/core/use_cases/student/SaveANewStudent';
import { DeleteSchool } from 'src/core/use_cases/school/DeleteSchool';
import { GetSchoolByCity } from 'src/core/use_cases/school/GetSchoolByCity';
import { SaveANewSchool } from 'src/core/use_cases/school/SaveANewSchool';
import { UpdateDataSchool } from 'src/core/use_cases/school/UpdateDataSchool';
import { SaveANewResult } from 'src/core/use_cases/result/SaveANewResult';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
    }),
  ],
  controllers: [
    GetCityByDepartmentController,
    SaveANewCityController,
    GetAllDepartmentController,
    GetAllQuestionController,
    SaveANewStudentController,
    DeleteSchoolController,
    GetSchoolByCityController,
    SaveANewSchoolController,
    UpdateDataSchoolController,
    SaveANewResultController,
  ],
  providers: [
    { provide: 'DepartmentRepository', useClass: SQLDepartmentRepository },
    { provide: 'CityRepository', useClass: SQLCityRepository },
    { provide: 'SchoolRepository', useClass: SQLSchoolRepository },
    { provide: 'QuestionRepository', useClass: SQLQuestionRepository },
    { provide: 'StudentRepository', useClass: SQLStudentRepository },
    { provide: 'ResultRepository', useClass: SQLResultRepository },
    { provide: 'ResultDetailRepository', useClass: SQLResultRepository },
    GetCityByDepartment,
    SaveANewCity,
    GetAllDepartment,
    GetAllQuestion,
    SaveANewStudent,
    DeleteSchool,
    GetSchoolByCity,
    SaveANewSchool,
    UpdateDataSchool,
    SaveANewResult,
  ],
  exports: [],
})
export class AppModule {}
