# Command: init (Orchestrator)

## Action
Послідовно виконати повний цикл розгортання:
1. Викликати `git-init.prompt.md`.
2. Викликати `create-project.prompt.md`.
3. Викликати `create-build.prompt.md`.
4. Викликати `create-actions.prompt.md`.
5. Викликати `check.prompt.md`.

Якщо на будь-якому кроці виникає помилка, зупинити виконання та вивести повідомлення про помилку.