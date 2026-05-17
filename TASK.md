# Healthcare Booking Frontend

## Goal
React + Vite + TypeScript + Tailwind + DaisyUI frontend for the Healthcare Booking API.

## Backend API URL
http://localhost:8000

## Backend Response Reference
Doctors endpoint returns:
{
  "full_name": "Dr. John Doe",
  "specialization": "Cardiology",
  "working_hours": [{"day_of_week": "monday", "is_available": true, "start_time": "10:00", "end_time": "14:00"}],
  "consultation_fee": 150.0,
  "rating": 4.5,
  "languages": ["English", "Spanish"],
  "gender": "Male",
  "hospital_id": "...",
  "department_id": "..."
}
Hospitals endpoint returns:
{
  "name": "City General Hospital",
  "address": "123 Health St",
  "phone": "+1234567890",
  "emergency_available": true,
  "working_hours": [{"day_of_week": "monday", "is_open": true, "open_time": "8:00", "close_time": "17:00"}]
}
Frontend types MUST match these field names exactly. Do NOT use different names like available_days, specialty, or available_from.

## Pages to Build

### Hospitals
- /hospitals — card grid of all hospitals with name, address, phone, emergency badge
- /hospitals/new — form to create hospital
- /hospitals/:id — hospital detail showing working hours and departments

### Departments
- /departments — table of all departments
- /departments/new — form to create department (select hospital from dropdown)
- /departments/:id — department detail

### Doctors
- /doctors — filterable list by hospital and department
- /doctors/new — form to create doctor
- /doctors/:id — doctor profile with working hours, available days, and appointments

### Appointments
- /appointments — table with status filter (pending/confirmed/cancelled)
- /appointments/new — booking form (select doctor, date, time, patient info)
- /appointments/:id — detail with status update button

## Data Fetching Rules
- Use useApi(fn, deps) for GET requests that load data on mount
- Use useMutation(fn) for POST/PATCH/DELETE form submissions
- NEVER use useApi for form submissions — use useMutation or direct API call with useState
- Form pattern:
  const { loading, error, mutate } = useMutation(createHospital)
  mutate(formData, () => navigate('/hospitals'))

## Component Rules
- Use DataTable for lists: <DataTable data={data ?? []} columns={columns} onRowClick={handleClick} />
- Use FormField for inputs: <FormField label="Name" error={errors.name}><input className="input input-bordered w-full" /></FormField>
- Use StatusBadge for status: <StatusBadge status="confirmed" />
- Use PageHeader for headings: <PageHeader title="Hospitals" subtitle="Manage hospitals" />

## UI Rules
- DaisyUI classes required: btn btn-primary, card bg-base-100 shadow-xl, badge badge-success, input input-bordered, table table-zebra
- Use ready CSS classes from templates.css: card-clean, table-clean, form-card, form-grid, badge-pending, badge-confirmed, badge-cancelled
- Layout: container mx-auto px-4 py-8
- Page title: text-2xl font-bold mb-6
- No inline styles — DaisyUI + Tailwind + templates.css only

## Array Handling
- NEVER call .join() on an array of objects
- Extract values first: working_hours?.filter(wh => wh.is_available).map(wh => wh.day_of_week).join(', ')
- Always handle undefined: (items || []).map(item => ...)

## Import Rules
- Types use type-only import: import type { Hospital } from '../../types/hospitals'
- API: import { getHospitals } from '../../api/hospitals'
- Components: import DataTable from '../../components/DataTable'
- Hooks: import { useApi } from '../../hooks/useApi'
- Every file imports everything it uses

## Planning Rules
- Do not create setup phases
- Template already exists with DaisyUI, ready CSS classes, and reusable components
- Every phase must produce application code
- Good phases: Types, API functions, Hospital pages, Department pages, Doctor pages, Appointment pages, Routes and nav
- Bad phases: Install dependencies, Configure environment

## Test Rules
- Do not create test files
- Validate with: npx tsc --noEmit && npm run build

## Output Rules
- No markdown fences around code output
- Return ONLY the raw file content
- No explanations, no conversation

## Phase 0 Rule (CRITICAL)
Phase 0 MUST create ALL type and API files with placeholder exports BEFORE any other phase.
This ensures imports always resolve when later phases create pages.

Phase 0 tasks should create:
- src/types/hospitals.ts with placeholder: export interface Hospital { id: string }
- src/types/departments.ts with placeholder
- src/types/doctors.ts with placeholder
- src/types/appointments.ts with placeholder
- src/api/hospitals.ts with placeholder: export const getHospitals = () => Promise.resolve([])
- src/api/departments.ts with placeholder
- src/api/doctors.ts with placeholder
- src/api/appointments.ts with placeholder

Later phases will REPLACE the placeholder content with real implementations.
This way pages never fail because of missing imports.
