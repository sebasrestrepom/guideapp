import { MigrationInterface, QueryRunner } from 'typeorm';

export class QuestionData1621103762554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO question (id, categoryId, vocationId, name) VALUES
              (1,1127,1127, ' 1 ¿Prepararías un estudio acerca de la globalización de la economía?'),
              (2,1128,1127, '2 ¿Te entusiasma la idea de organizar fiestas y eventos?'),
              (3,1127,1129, '3 ¿Te sientes atraído por la posibilidad de realizar trabajos de urbanización?'),
              (4,1128,1130, '4 ¿Prevalecen en ti los pensamientos positivos sobre los negativos?'),
              (5,1127,1132, '5 ¿Estarías dispuesto a confortar (ayudar, apoyar) víctimas de cualquier índole?'),
              (6,1127,1131, '6 ¿Sientes curiosidad de saber cómo y porqué funciona una máquina?'),
              (7,1128,1133, '7 ¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?'),
              (8,1127,1130, '8 ¿Te interesa escuchar a un amigo cuando te cuenta un problema?'),
              (9,1127,1128, '9 ¿Encuentras  interesante explicar un determinado tema a una o varias personas?'),
              (10,1128,1131, '10 ¿Te sientes insatisfecho si un trabajo en equipo no está cien por ciento (100%) logrado?'),
              (11,1127,1129, '11 ¿Te gustan los juegos de ingenio?'),
              (12,1127,1127, '12 ¿Te agrada estudiar o investigar estadísticas?'),
              (13,1128,1132, '13 ¿Usar uniforme te hace sentir importante?'),
              (14,1127,1132, '14 ¿Participarías como profesional en un espectáculo de acrobacia aérea?'),
              (15,1128,1127, '15 ¿Puedes decir que eres un buen administrador de tu dinero?'),
              (16,1127,1130, '16 ¿Te resulta sencillo imponer tus puntos de vista a los demás?'),
              (17,1127,1133, '17 Si alguien te habla del genoma humano, ¿sabes a qué se refiere?'),
              (18,1128,1132, '18 Eres testigo de un accidente grave, ¿acudes inmediatamente a socorrer a las víctimas?'),
              (19,1127,1131, '19 ¿Eres paciente en la resolución de un problema matemático?'),
              (20,1127,1127, '20 ¿Te ves organizando, dirigiendo y proponiendo ideas a integrantes de una entidad?'),
              (21,1127,1129, '21 ¿Sientes que a menudo eres el centro de atención de las reuniones?'),
              (22,1128,1129, '22 ¿Crees que a la hora de realizar algo eres perfeccionista?'),
              (23,1127,1130, '23 ¿Te consideras capaz de atender y consolar a personas enfermas todos los días?'),
              (24,1127,1132, '24 ¿Te presentarías voluntariamente para ayudar ante una emergencia social?'),
              (25,1127,1128, '25 ¿Eres capaz de apagar el televisor para dedicarte a leer un libro que te atrae?'),
              (26,1128,1131, '26 ¿Planificas detalladamente tus trabajos antes de empezar?'),
              (27,1127,1131, '27 ¿Te sientes contraìdo (Incómodo, molesto) si tienes que pasar días sin tu celular o computador?'),
              (28,1127,1129, '28 Ante una escultura, ¿piensas que te hubiese gustado que tus manos la moldearan?'),
              (29,1128,1130, '29 ¿Te molesta que en algunas calles no haya rampas para discapacitados?'),
              (30,1128,1128, '30 ¿Consideras importante que desde la escuela se fomente la actitud crítica y la participación activa?'),
              (31,1127,1132, '31 ¿Crees que el entrenamiento militar debe ser tan severo tanto para chicos como para chicas?'),
              (32,1127,1133, '32 ¿te sentirías interesado en crear métodos para conocer la frecuencia de sueño de roedores?'),
              (33,1127,1130, '33 ¿Te unirías a un grupo en una campaña de vacunación de niños pobres?'),
              (34,1127,1128, '34 ¿Sientes curiosidad si te hablan de la edad media?'),
              (35,1127,1133, '35 ¿Te interesa saber cómo se componen las distintas capas de la superficie terrestre?'),
              (36,1127,1129, '36 ¿Te ocupas de tu cuerpo porque sientes que te hace muy bien física y espiritualmente?'),
              (37,1127,1132, '37 ¿Formas parte de los que no pueden dejar de subirse a una montaña rusa?'),
              (38,1127,1131, '38 ¿Sueñas con conocer Cabo cañaveral (Estación Espacial de la NASA)?'),
              (39,1128,1129, '39 ¿Prefieres crear un objeto en lugar de pensar acerca de determinados temas?'),
              (40,1128,1130, '40 ¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?'),
              (41,1127,1128, '41 ¿Te anima la idea de investigar datos respecto a hechos de la vida cotidiana?'),
              (42,1127,1133, '42 ¿Trabajarías con un químico para costearte los estudios?'),
              (43,1128,1132, '43 ¿Pondrías en juego tu vida para salvar la de un desconocido?'),
              (44,1127,1130, '44 ¿Te gustaría estar preparado para asistir a alguien en un accidente?'),
              (45,1127,1129, '45 ¿Consideras que eres perseverante en pos de tus deseos?'),
              (46,1128,1127, '46 ¿Distribuyes tus horarios adecuadamente para poder hacer todo lo planeado?'),
              (47,1127,1131, '47 ¿Te atraen los mecanismos que hacen posible el funcionamiento de una máquina?'),
              (48,1127,1132, '48 ¿Elegirías un trabajo que te llevara lejos de tu casa?'),
              (49,1127,1133, '49 ¿Te gustaría vivir y trabajar en el campo?'),
              (50,1127,1129, '50 ¿Te atrae la participación activa en un grupo generando proyectos?'),
              (51,1128,1127, '51 ¿Te sientes bien imponiendo orden y métodos de trabajo?'),
              (52,1127,1130, '52 ¿Leerías material acerca de la morfología de los seres vivos?'),
              (53,1127,1127, '53 ¿Te sientes a gusto negociando productos para su venta?'),
              (54,1127,1131, '54 ¿Te atraen los grandes proyectos nacionales?'),
              (55,1128,1133, '55 ¿Te interesa saber porqué se produce un tsunami, aunque vivas muy lejos del mar?'),
              (56,1127,1128, '56 ¿La lectura de algún libro ya te ha hecho decir: Esto es exactamente lo que yo pienso?'),
              (57,1127,1129, '57 ¿Sería una buena idea que alguien te regalara una guitarra o algún otro instrumento musical?'),
              (58,1127,1132, '58 ¿Te interesa colaborar en el mantenimiento del orden público?'),
              (59,1128,1131, '59 ¿Generas ideas en las que confías y por las cuales estás dispuesto a luchar?'),
              (60,1127,1131, '60 ¿Te gusta reparar artefactos?'),
              (61,1127,1133, '61 ¿sientes que deberías hacer algo cuando escuchas informes sobre la matanza de las ballenas?'),
              (62,1127,1130, '62 ¿Estás al tanto de cuáles son los últimos descubrimientos acerca de la cirugía cardiovascular?'),
              (63,1128,1128, '63 ¿te agrada que varios edificios de Colombia han sido declarados históricos, y así, preservados?'),
              (64,1127,1127, '64 ¿Te ocuparías de temas relacionados con una mejor distribución de los recursos económicos?'),
              (65,1127,1132, '65 ¿Es de tu interés la navegación marítima y las múltiples actividades relacionadas con ella?'),
              (66,1128,1132, '66 ¿Estás en contra del desarme (Entregar las armas)?'),
              (67,1127,1128, '67 ¿Sientes que es difícil luchar por determinados valores?'),
              (68,1127,1133, '68 ¿Te gustaría saber cómo se produce la cadena de conservación de los alimentos?'),
              (69,1128,1130, '69 ¿Hay aspectos de la salud pública que desearías que mejoraran?'),
              (70,1127,1130, '70 ¿Te interesaría investigar acerca de una nueva vacuna?'),
              (71,1127,1127, '71 En un equipo de trabajo, ¿prefieres el rol de coordinador?'),
              (72,1128,1128, '72 En medio de una discusión, ¿intentas que las partes lleguen a un acuerdo?'),
              (73,1127,1132, '73 ¿Consideras valida la creación de un grupo de soldados profesionales?'),
              (74,1127,1128, '74 ¿Defenderías siempre lo que consideras justo, a pesar de las posibles consecuencias?'),
              (75,1127,1131, '75 ¿Los estudios que realizan los ingenieros agrónomos, te despiertan algún tipo de interés?'),
              (76,1128,1129, '76 ¿Diseñarías tu propio vestuario?'),
              (77,1127,1133, '77 ¿Te gustaría conocer cómo funciona un telescopio?'),
              (78,1127,1127, '78 ¿Te sentirías cómodo trabajando en la comercialización de productos al exterior?'),
              (79,1128,1133, '79 ¿Te produce timidez conocer gente nueva?'),
              (80,1127,1128, '80 ¿Imaginas un trabajo relacionado con niños?'),
              (81,1127,1129, '81 ¿Estarías interesado en la creación de mensajes que alerten a la sociedad acerca de un delito?'),
              (82,1128,1129, '82 ¿Te gusta la actuación?'),
              (83,1127,1131, '83 ¿Trabajarías en aéreas relacionadas con la fabricación de automóviles?'),
              (84,1127,1132, '84 ¿Colaborarías en la defensa de otras naciones?'),
              (85,1127,1127, '85 ¿Te gustaría adquirir experiencia en un estudio contable?'),
              (86,1128,1128, '86 ¿Te consideras un idealista (soñador)?'),
              (87,1127,1130, '87 ¿Te presentarías voluntariamente para ayudar a las víctimas de catástrofes naturales ?'),
              (88,1127,1133, '88 ¿Haz sentido curiosidad por el estudio de la herencia genética?'),
              (89,1127,1128, '89 ¿Preferirías utilizar en tu trabajo otro idioma que no fuera el tuyo de origen?'),
              (90,1128,1131, '90 ¿Trabajar con objetos te resulta más gratificante que trabajar con personas?'),
              (91,1127,1127, '91 ¿Te gusta trabajar con números y cifras?'),
              (92,1127,1130, '92 ¿Te desconsuela el sufrimiento de los demás?'),
              (93,1127,1133, '93 ¿Sientes atracción por conocer en detalle qué es una estrella?'),
              (94,1128,1133, '94 ¿Consideras que tienes que hacerte cargo de las cosas, porque sino los otros no las hacen?'),
              (95,1127,1128, '95 ¿Colaborarías con trabajos en una ciudad en emergencia?'),
              (96,1127,1129, '96 ¿Cuidas que tu ropa combine adecuadamente?'),
              (97,1127,1131, '97 ¿Te interesa todo lo relacionado con las fuentes de generación de energía?'),
              (98,1127,1127, '98 ¿Podrías explicar que significa la sigla PYME?');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE question`);
  }
}
