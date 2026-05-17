# Healthcare Booking Frontend – Hospitals Only

## Goal
Generate the Hospital pages for a React + Vite + TypeScript + Tailwind + DaisyUI app.

## Backend API
http://localhost:8000

## Backend Response (Hospital)
{
  "id": "abc123",
  "name": "City General Hospital",
  "address": "123 Health St",
  "phone": "+1234567890",
  "emergency_available": true,
  "working_hours": [
    {"day_of_week": "monday", "is_open": true, "open_time": "08:00", "close_time": "17:00"}
  ]
}

## Feature: Hospitals
Generate these files using the page templates:

- **src/types/hospitals.ts** — Hospital, HospitalCreate interfaces
- **src/api/hospitals.ts** — getHospitals, getHospital, createHospital
- **src/pages/hospitals/HospitalListPage.tsx** — use ListPage.template.tsx
- **src/pages/hospitals/HospitalCreatePage.tsx** — use CreatePage.template.tsx
- **src/pages/hospitals/HospitalDetailPage.tsx** — use DetailPage.template.tsx
- **src/App.tsx** — add routes for /hospitals, /hospitals/new, /hospitals/:id
- **src/layouts/Sidebar.tsx** — add Hospitals nav item

## Template Rules (CRITICAL)
Pages MUST copy from src/templates/ and replace placeholders.
NEVER write pages from scratch.
ListPage: {{FEATURE_NAME}}=Hospitals, {{API_GET_FN}}=getHospitals
CreatePage: {{API_CREATE_FN}}=createHospital, {{REDIRECT_PATH}}='/hospitals'
DetailPage: {{API_GET_FN}}=getHospital

## UI Rules
- DaisyUI classes on every element: btn, card, badge, input, table
- Use ready components: DataTable, FormField, StatusBadge, PageHeader
- Layout: container mx-auto px-4 py-8
- Design: professional medical, blue/white/gray palette

## Planning Rules
- Do not create setup phases
- All phases produce application code
- Good phases: Types + API, Hospital Pages, Routes & Nav

## Test Rules
- Validate: npx tsc --noEmit
- No test files
