# Skill: GitHub Actions Workflow

## Description
Створення конфігурації CI/CD пайплайну для кросплатформного тестування.

## Inputs
- Працюючий проєкт з тестами Vitest.

## Expected Outputs
- Файл `.github/workflows/ci.yml`.
- Налаштована матриця операційних систем: `ubuntu-latest`, `windows-latest`, `macos-latest`.

## Verification Steps
- Перевірити коректність синтаксису `.github/workflows/ci.yml`.
- Переконатися, що у workflow викликаються команди збірки та тестування.