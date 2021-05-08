export interface Model {
  title: string;
  description: string;

  Question1: string;
  customRadio: boolean;

  Question2: string;
  Q2option1: string;
  Q2option2: string;
  Q2option3: string;
  Q2option4: string;

  Question3: string;
  Q3option1: string;
  Q3optionA: boolean;
  Q3option2: string;
  Q3optionB: boolean;
  Q3option3: string;
  Q3optionC: boolean;
  Q3option4: string;
  Q3optionD: boolean;

  Question4: string;
  _id?: string;
}
