import { expect, test } from 'vitest';
import { deepMerge } from '../src';

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

test('shallow merge with arrays', () => {
  const merged = deepMerge(['vue', 'svelte'], ['react', 'angular', 'solid']);

  expect(merged).toEqual(['vue', 'svelte', 'react', 'angular', 'solid']);
});
