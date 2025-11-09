# yakovvasiliev.com

Сайт-портфолио Якова Васильева: стратегия, AI-системы, консультации для C-level.

## Технологии

React + TypeScript, Vite для сборки. Статический сайт без бэкенда.

## Локальная разработка

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:5173`

## Сборка

```bash
npm run build
```

Результат в папке `dist/`

## Деплой на GitHub Pages

1. Запушьте код в репозиторий на GitHub
2. В настройках репозитория: Settings → Pages
3. Включите GitHub Pages, выберите источник: GitHub Actions
4. При пуше в `main` автоматически запустится деплой через workflow

Альтернативы: Vercel или Netlify (конфиги уже есть в репозитории)

