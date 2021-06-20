import { Answer } from "../answer";
import { Question } from "../question";

export const questionsDb: Array<Question> = new Array(
  new Question('question1',
    new Array(new Answer('answer1_1', false),
              new Answer('answer1_2', false),
              new Answer('answer1_3', true),
              new Answer('answer1_4', false)
    )
  ),
  new Question('question2',
    new Array(new Answer('answer2_1', false),
              new Answer('answer2_2', true),
              new Answer('answer2_3', false),
              new Answer('answer2_4', false)
    )
  )
);

export const questionCostsList: Array<number> = new Array(
  5, 10, 20, 30, 50, 100, 150, 250, 500, 1000, 2000, 4000, 8000, 15000, 30000
);

