# Skill: Build and Test

## Description
Налаштування інструментів збірки TypeScript та тестового середовища Vitest.

## Inputs
- Згенерований TypeScript проєкт.

## Expected Outputs
- Встановлені dev-залежності `typescript` та `vitest` у `package.json`.
- Скрипти `"test": "vitest run"` та `"build": "tsc"` у `package.json`.
- Файл тесту `tests/math.test.ts`.

## Verification Steps
- Запустити `npm run build` для перевірки компіляції.
- Запустити `npm test` для перевірки виконання юніт-тестів.