# Agent Instructions

You are working inside a reusable React + Vite + TypeScript frontend template.

Read this file before editing the project.

## Core Rules

- Keep the template clean, simple, and reusable.
- Do not add production-specific business logic to shared template files.
- Do not add new packages unless the task explicitly requires them.
- Do not commit secrets or environment files.
- Do not use inline styles.
- Use TypeScript types for API data, component props, and form data.
- Run lint and build before considering the task complete.

## UI Rules

- Use DaisyUI through Tailwind class names.
- Do not install another UI library.
- Prefer shared components from src/components.
- Pages should compose shared components instead of redefining repeated UI patterns.
- Use DaisyUI theme classes such as bg-base-100, bg-base-200, text-base-content, btn, card, table, badge, alert, input, select, and textarea.

## API Rules

- Use src/api/client.ts for HTTP requests.
- Put feature API functions in src/api/{feature}.ts.
- Export feature API modules from src/api/index.ts.
- API functions should return response.data, not full Axios responses.

API example:

export const getItems = () =>
  client.get<Item[]>('/items').then((response) => response.data)

## Hook Rules

- Use useApi() for simple data loading.
- useApi() accepts one stable function only.
- If the API function needs parameters, wrap it with useCallback.

Hook example:

const loadItem = useCallback(() => getItem(id), [id])
const { data, loading, error } = useApi(loadItem)

## Feature Structure

For a new feature named products, prefer:

src/
  api/
    products.ts
  pages/
    products/
      ProductsPage.tsx
      ProductDetailsPage.tsx
      ProductFormPage.tsx
  types/
    products.ts

## Adding a New Feature

1. Create types in src/types/{feature}.ts.
2. Create API functions in src/api/{feature}.ts.
3. Export the API file from src/api/index.ts.
4. Create pages in src/pages/{feature}/.
5. Register routes in src/App.tsx.
6. Add navigation items in src/layouts/Sidebar.tsx.
7. Run lint and build.

## Validation Checklist

- [ ] Types are defined before use.
- [ ] API functions return typed data.
- [ ] Loading state is handled.
- [ ] Error state is handled.
- [ ] Empty state is handled where needed.
- [ ] Routes are registered.
- [ ] Sidebar navigation is updated when needed.
- [ ] No inline styles.
- [ ] No unused imports.
- [ ] npm run lint passes.
- [ ] npm run build passes.
