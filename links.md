- [Vitest Docs](https://vitest.dev/)
- [antfu.me](https://antfu.me/)
- [Vitest Docs: Adding Vitest to your Project](https://vitest.dev/guide/#adding-vitest-to-your-project)
- [Vue.js Docs: Create a Vue Application](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
- []()
- []()
- []()
- []()
- []()

---

**_ Заметки _**

`npm init vue@3` - создание нового Vue3 проекта
`npm run test:unit` - начала тестирования с Vitest

/ Создание проекта с поддержкой Vitest на другом фреймворке, отличном от Vue3 /

`npm init -y` - создание минимального package.json
`npm i vitest -D` - установка Vitest

После чего в package.json добавим следующие строки:

<script>
	"scripts": {
		"test": "vitest"
	}
</script>

---

В Vitest есть общепринятые правила, что файлы для тестов должны заканчиваться на ".test.js", либо на ".spec.js". Такие файлы будут распознаны Vitest как файлы тестов и могут быть им запущены.
