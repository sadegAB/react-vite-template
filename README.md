# React Vite Template

Clean frontend starter template using React, Vite, TypeScript, React Router, Axios, Tailwind CSS, DaisyUI, and ESLint.

This template is designed to be easy for humans and AI coding agents to extend.

## Purpose

Use this repository as a clean starting point for frontend applications that connect to a backend API.

The template provides:

- app layout
- navbar
- sidebar
- router setup
- Axios client
- reusable data hooks
- shared UI components
- DaisyUI-ready styling
- clear agent instructions

## Getting Started

Install dependencies:

npm install

Start the dev server:

npm run dev

Run lint:

npm run lint

Build for production:

npm run build

Preview production build:

npm run preview

## Environment Variables

Create a local .env file based on .env.example.

VITE_API_URL=http://localhost:8000

Do not commit .env.

## Project Structure

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

## UI Rules

Use DaisyUI classes through Tailwind class names.

Preferred examples:

button className="btn btn-primary"
div className="card bg-base-100 shadow-sm"
table className="table"
span className="badge badge-success"

Do not add another UI framework unless the task explicitly requires it.

## API Pattern

Create feature API files under src/api.

Example:

import client from './client'
import type { Product, ProductCreate } from '../types/products'

export const getProducts = () =>
  client.get<Product[]>('/products').then((response) => response.data)

export const createProduct = (data: ProductCreate) =>
  client.post<Product>('/products', data).then((response) => response.data)

## Data Loading Pattern

Use useApi() for simple data loading.

const { data, loading, error } = useApi(getProducts)

For parameterized requests, use useCallback.

const loadProduct = useCallback(() => getProduct(id), [id])
const { data, loading, error } = useApi(loadProduct)

## Template Rules

Before finishing any change:

npm run lint
npm run build
