# Task Template

## Project Title

Write the project or feature name.

## Goal

Briefly describe what should be built.

## Backend API URL

http://localhost:8000

## Pages to Build

List every page needed.

Example:

- /feature
- /feature/new
- /feature/:id
- /feature/:id/edit

## Data Types

Define every type and field.

Example:

TypeName:
- id: string
- name: string
- status: string
- created_at: string
- optional_field?: string

CreateType:
- name: string
- status: string

## API Endpoints Used

List every endpoint the frontend will call.

Example:

- GET /feature
- POST /feature
- GET /feature/:id
- PATCH /feature/:id
- DELETE /feature/:id

## Navigation

List sidebar items needed.

Example:

- label: Products
- path: /products

## UI Requirements

List special UI needs.

Example:

- table
- create form
- edit form
- detail page
- search input
- filters
- modal
- status badges
- empty state

## Technical Constraints

- Use the existing React + Vite + TypeScript template.
- Use Tailwind CSS and DaisyUI classes.
- Use shared components from src/components.
- Use client from src/api/client.ts for API calls.
- Use useApi() for simple data loading.
- No inline styles.
- No new packages unless explicitly required.

## Planning Rules

## Planning Rules

Good phases:

- types
- API functions
- list page
- detail page
- create/edit form
- route registration
- sidebar registration

Bad phases:

- setup project
- configure Vite
- replace template structure
- add unrelated packages
- rewrite shared files without need

## Import Rules

- Import API client from ./client inside src/api files.
- Import useApi from ../../hooks/useApi inside pages.
- Import shared components from ../../components.
- Import feature types from ../../types/{feature}.

## Completion Rules

Before finishing:

- npm run lint must pass.
- npm run build must pass.
- No unused imports.
- No broken routes.
- No committed .env files.

