import { expect, test } from 'vitest';
import { deepMerge } from '../src';

// 3.3 Чтобы произвести TDD мы сперва определим что мы ожидаем от функции deepMerge. Для начала рассмотрим простой случай, где мы произведём слияние двух объектов поверхностным образом.
// Go to [deep-merge\src\index.ts]
test('shallow merge', () => {
  const merged = deepMerge(
    {
      name: 'Al',
    },
    {
      github: 'alienat3d',
    }
  );

  expect(merged).toEqual({
    name: 'Al',
    github: 'alienat3d',
  });
});

// 3.5 Отлично, тест прошёл, но теперь рассмотрим ещё случай, где свойства нахлёстываются друг на друга. И мы ожидаем, что значение свойства "github" второго объекта попадёт в итоговый объект.
test('shallow merge with props overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Al',
      github: 'al-zap',
    },
    {
      github: 'alienat3d',
      twitter: 'alienat3d',
    }
  );

  expect(merged).toEqual({
    name: 'Al',
    github: 'alienat3d',
    twitter: 'alienat3d',
  });
});

// 3.6 Создадим ещё один тест уже с массивами. Получаем ошибку, т.к. второй массив перезаписал первый, вместо того, чтобы произвести слияние содержимого обоих массивов.
// Go to [deep-merge\src\index.ts]
test('shallow merge with arrays', () => {
  const merged = deepMerge(['vue', 'svelte'], ['react', 'angular', 'solid']);

  expect(merged).toEqual(['vue', 'svelte', 'react', 'angular', 'solid']);
});
