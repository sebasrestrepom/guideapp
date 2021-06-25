import { Question } from 'src/core/domain/question/Question';
import { QuestionRepository } from 'src/core/domain/question/QuestionRepository';
import { InMemoryQuestionRepository } from 'src/core/infrastructure/question/InMemoryQuestionRepository';
import { GetAllQuestion } from 'src/core/use_cases/question/GetAllQuestion';

/* 
1 Given -- tienes que poner el sistem en el estado
2 When -- ejecuta la accion
3 Then -- valida los side-effects, es decir los cambios


GetAllQuestion --> lista de preguntas.accion

GIVEN
    1) crear un pregunta
   
when
    ejcutar accion para traer lista de preguntas

then
    verificamos que hayan preguntas

*/

describe('GetAllQuestion should', () => {
  let getAllQuestion: GetAllQuestion;
  let questionRepository: QuestionRepository;
  let question: Question;

  test('save a new question', async () => {
    given_a_save_a_new_question_use_case();

    await when_get_the_question_with_this_data();

    then_list_the_question_with_this_information();
  });

  function given_a_save_a_new_question_use_case() {
    questionRepository = new InMemoryQuestionRepository();
    getAllQuestion = new GetAllQuestion(questionRepository);
  }

  async function when_get_the_question_with_this_data() {
    await getAllQuestion.execute();
  }

  async function then_list_the_question_with_this_information() {
    await getAllQuestion.execute();
    expect(question).not.toBeNull();
    expect(question).not.toBeUndefined();
  }
});
