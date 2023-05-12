export const getDescriptionPrompt = (about: string) => {
  return `Напиши короткое описание для обучающего курса по теме '${about}'. В одно предложение`;
};

export const getCourseTopicsPrompt = (about: string, count: number) => {
  return `Нужно создать курс по теме "${about}". Для начала сгенерируй подтемы  в количестве ${count} из которых я соберу содержание и верни все темы в виде одной длинной строки. В качестве сепаратора используй знак процента (%).  Без предисловий и всяких нумераций, просто верни одну длинную строку`;
};

export const getTopicPrompt = (topicTitle: string) => {
  return `Напиши статью на тему '${topicTitle}'. Ответ верни в markdown (.md) файле, чтобы я мог использовать. То есть например для заголовков добавь в начало ## или что-то такое`;
};

export const getQuizPrompt = (about: string) => {
  return `Напиши 3 теста (вопрос и несколько вариантов ответа) в формате JSON на тему "${about}". Без лишних слов, просто JSON
Интерфейсы:
export interface Test {
  question: string;
  options: Options;
  answer: string;
}

interface Options {
  a: string;
  b: string;
  c: string;
}
 и верни в формате JSON. Без лишних слов, просто JSON. Без заголовка и нумерации. Все верни в массиве;`;
};
