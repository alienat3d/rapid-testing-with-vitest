import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});

// * 3.0 Теперь займёмся написание более практически полезных тестов, таких, как функция объединяющая два объекта рекурсией. В основном такие функции используют для библиотек, где мы хотим дать возможность пользователю кастомизировать некоторые опции, давая ему разные наборы опций и чтобы пользователю не надо было проходить через все опции, чтобы заставить приложение работать как ему надо.
// 3.1 Вот пример (см. [./screenshots/lesson-5-objects-to-merge.jpg]) как мы хотим, чтобы эта функция работала.
// ? 3.2 На схеме [./screenshots/lesson-5-tdd-scheme.jpg] изображен порядок выполнения TDD (Test-Driven Development)
// Go to [deep-merge\test\merge.test.ts]
