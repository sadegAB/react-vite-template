# React Vite Template Handoff

## Overview

This is a clean reusable frontend template using:

- React
- Vite
- TypeScript
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- ESLint

The template connects to a backend API through Axios.

## Current Status

The template is clean when these commands pass:

npm run lint
npm run build

## File Structure

src/
  api/
    client.ts
    index.ts
  components/
    DataTable.tsx
    ErrorMessage.tsx
    FormField.tsx
    LoadingSpinner.tsx
    PageHeader.tsx
    StatusBadge.tsx
  hooks/
    useApi.ts
    useMutation.ts
  layouts/
    MainLayout.tsx
    Navbar.tsx
    Sidebar.tsx
  pages/
    Home.tsx
  types/
    index.ts
  App.tsx
  index.css
  main.tsx

docs/
  templates/
    CreatePage.template.txt
    DetailPage.template.txt
    ListPage.template.txt

## Important Rules

- Do not commit .env files.
- Use .env.example for environment variable examples.
- Use Tailwind CSS and DaisyUI classes.
- Do not use inline styles.
- Do not install another UI framework unless explicitly required.
- Use shared components from src/components.
- Keep src/ for real compilable app code only.
- Keep placeholder templates in docs/templates, not src/.

## API Convention

API base URL comes from:

VITE_API_URL

Default fallback:

http://localhost:8000

All API calls should use:

src/api/client.ts

Feature API files should be placed in:

src/api/{feature}.ts

API functions should return response.data.

Example:

import client from './client'
import type { Doctor, DoctorCreate } from '../types/doctors'

export const getDoctors = () =>
  client.get<Doctor[]>('/doctors').then((response) => response.data)

export const getDoctor = (id: string) =>
  client.get<Doctor>(`/doctors/${id}`).then((response) => response.data)

export const createDoctor = (data: DoctorCreate) =>
  client.post<Doctor>('/doctors', data).then((response) => response.data)

export const updateDoctor = (id: string, data: DoctorCreate) =>
  client.patch<Doctor>(`/doctors/${id}`, data).then((response) => response.data)

export const deleteDoctor = (id: string) =>
  client.delete(`/doctors/${id}`).then((response) => response.data)

## Hook Convention

Use useApi() for simple data loading.

Correct:

const { data, loading, error } = useApi(getDoctors)

For parameterized API calls, use useCallback.

Correct:

const loadDoctor = useCallback(() => getDoctor(id), [id])
const { data, loading, error } = useApi(loadDoctor)

Do not use the old pattern:

useApi(getDoctors, [])

## Example Feature Flow

For a feature named doctors:

1. Create src/types/doctors.ts.
2. Create src/api/doctors.ts.
3. Export from src/api/index.ts.
4. Create pages under src/pages/doctors/.
5. Register routes in src/App.tsx.
6. Add sidebar item in src/layouts/Sidebar.tsx.
7. Run npm run lint.
8. Run npm run build.

## Sidebar Pattern

Current sidebar nav items use:

label
path

Example:

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Doctors', path: '/doctors' },
]

Do not add icon fields unless the Sidebar component is intentionally updated.

## Page Pattern

A basic list page should:

- use PageHeader
- use PageHeader
- use LoadingSpinner
- use ErrorMessage
- use DataTable or DaisyUI table classes
- handle empty states
- avoid inline styles

## Completion Checklist

Before handoff:

- npm run lint passes
- npm run build passes
- git status is clean
- no .env file is tracked
- no placeholder files are inside src/
- no unused imports
- README and AGENT_INSTRUCTIONS match the current template behavior

