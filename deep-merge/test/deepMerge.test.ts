import { expect, test } from 'vitest';
import { deepMerge } from '../src';

// * 4.0 Теперь можно поработать и с более сложным глубоким слиянием объектов. Просто скопируем код из [deep-merge\test\shallowMerge.test.ts] и чуть изменим его. Мы поместим свойства "github" & "twitter" на уровень ниже в другое свойство с объектом. И ожидать в "expect" мы будем, что не смотря на это они оба попадут в итоговый объект в свойство "accounts".
// Go to [deep-merge\src\index.ts]
// ? 4.2 Мы можем добавить "skip" после "test", чтобы пока пропустить выполнение этого теста, чтобы убедиться, что наша работа по рефакторингу в [deep-merge\src\index.ts] не нарушила предыдущие тесты.
// 4.3 Итак, мы убедились, что наше присвоение значений "вручную" при помощи цикла "for of" работает также, как было с использованием метода "for of". И теперь в наших руках больше контроля над тем как мы можем производить слияние двух вложенных свойств.
// Go to [deep-merge\src\index.ts]
test('deep merge with props overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Al',
      accounts: {
        github: 'alienat3d',
      },
    },
    {
      accounts: {
        twitter: 'alienat3d',
      },
    }
  );

  expect(merged).toEqual({
    name: 'Al',
    accounts: {
      github: 'alienat3d',
      twitter: 'alienat3d',
    },
  });
});
