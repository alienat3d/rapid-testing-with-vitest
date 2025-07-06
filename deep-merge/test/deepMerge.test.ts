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

  expect(merged).toMatchSnapshot();
});
