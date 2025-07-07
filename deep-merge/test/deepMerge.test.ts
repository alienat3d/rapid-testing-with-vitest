import { expect, test } from 'vitest';
import { deepMerge } from '../src';

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

test('throws errors on merging two different types', () => {
  expect(() =>
    deepMerge(['foo', 'bar'], { foo: 'bar' }).toThrowError(
      'Error: Can not merge two different types.'
    )
  );
});

// * 7.0 На прошлом уроке мы научились работать со снэпшотами, с помощью которых удобно следить, что после внесения изменений в функцию результат её работы останется неизменным. Но порой мы хотим, чтобы этот результат после изменения функции изменился. Или мы можем изменить вводные данные для охвата разных сценариев и тогда нам нужно будет обновить также снэпшот соответственно. Рассмотрим два способа сделать это.
// 7.1 Добавим в первый объект свойство "languages", а во второй "typescript". Теперь результат функции отличается от того, который ожидался вначале. В консоли, во время работы теста, можно увидеть тот результат, на который нам нужно обновить
// 7.2 Первый способ обновить снэпшот это горячие клавиши. И сам Vitest подсказывает нам в консоли, что по нажатию на "u" можно обновить снэпшот. Но Vitest сделает это обновление единожды, а если мы изменим тест снова, то он снова провалится.
// 7.3 Другая опция обновить снэпшот это использовать CLI флаг. Мы можем написать в консоли "npx vitest -u" это запустит автоматическое обновление снэпшота, как только Vitest заметит несоответствие. Это полезно, если мы хотим переходить к следующему тесту быстро и получать быстрый ответ. Но, перед тем как использовать эту функцию, рекомендуется сохранить файл снэпшота куда-нибудь в другое место или сохранить состояние в Git.
test('deep merge with props overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Al',
      accounts: {
        github: 'alienat3d',
      },
      languages: ['javascript'],
    },
    {
      accounts: {
        twitter: 'alienat3d',
      },
      languages: ['typescript', 'vue'],
    }
  );

  expect(merged).toMatchSnapshot();
});

// * 8.0 На прошлых уроках мы рассмотрели работу со снэпшотами, которые сохраняются в отдельную папку "__snapshots__", но в некоторых случаях такой подход не слишком удобен, потому, что приходится часто переключаться между разными файлами. Поэтому в Vitest есть альтернативный вариант снэпшота "инлайновый" ("inline snapshot"). Для этого мы используем метод "toMatchInlineSnapshot", и если Vitest в режиме слежения, то мы сразу же увидим снэпшот внутри "()" метода "toMatchInlineSnapshot". А если совмещать этот подход с авто-обновлением при помощи команды "npx vitest -u", то мы может заметно ускорить процесс.
// 8.1 Также можно удобно использовать инлайновые снэпшоты для "console.log" в тестах. Например, узнаем квадратный корень из 2. Или, чтобы быстро узнать число Pi.
test('deep merge with props overlaps (inline snapshot)', () => {
  const merged = deepMerge(
    {
      name: 'Al',
      accounts: {
        github: 'alienat3d',
      },
      languages: ['javascript', 'react'],
    },
    {
      accounts: {
        twitter: 'alienat3d',
      },
      languages: ['typescript', 'vue', 'svelte'],
    }
  );

  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "alienat3d",
        "twitter": "alienat3d",
      },
      "languages": [
        "javascript",
        "react",
        "typescript",
        "vue",
        "svelte",
      ],
      "name": "Al",
    }
  `);

  expect(Math.sqrt(2)).toMatchInlineSnapshot(`1.4142135623730951`);
  expect(Math.PI).toMatchInlineSnapshot(`3.141592653589793`);
});
