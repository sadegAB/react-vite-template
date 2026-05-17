# Raw Planner Output – High-Level Phases

{
  "phases": [
    {
      "id": "phase_0",
      "title": "Types and API Functions",
      "scope": "Define Hospital and HospitalCreate types, and create API functions for hospitals"
    },
    {
      "id": "phase_1",
      "title": "Hospital Pages",
      "scope": "Generate HospitalListPage, HospitalCreatePage, and HospitalDetailPage using templates"
    },
    {
      "id": "phase_2",
      "title": "Routes and Navigation",
      "scope": "Register hospital routes and add navigation item in Sidebar"
    }
  ]
}


# Raw Planner Output – Tasks for phase_0

{
  "tasks": [
    {
      "id": "phase_0_task_0",
      "title": "Define Hospital and HospitalCreate types",
      "type": "code",
      "target_file": "src/types/hospitals.ts",
      "instructions": "Create Hospital and HospitalCreate interfaces according to TASK.md."
    },
    {
      "id": "phase_0_task_1",
      "title": "Create getHospitals API function",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Create getHospitals function using client from ./client and Hospital type from ../types/hospitals."
    },
    {
      "id": "phase_0_task_2",
      "title": "Create getHospital API function",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Create getHospital function using client from ./client and Hospital type from ../types/hospitals."
    },
    {
      "id": "phase_0_task_3",
      "title": "Create createHospital API function",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Create createHospital function using client from ./client and HospitalCreate type from ../types/hospitals."
    }
  ]
}


# Raw Planner Output – Tasks for phase_1

{
  "tasks": [
    {
      "id": "phase_1_task_0",
      "title": "Create Hospital types",
      "type": "code",
      "target_file": "src/types/hospitals.ts",
      "instructions": "Define Hospital and HospitalCreate interfaces according to the backend response."
    },
    {
      "id": "phase_1_task_1",
      "title": "Create Hospital API functions",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Create getHospitals, getHospital, and createHospital functions using the client from src/api/client.ts and types from src/types/hospitals.ts."
    },
    {
      "id": "phase_1_task_2",
      "title": "Export Hospital API functions",
      "type": "code",
      "target_file": "src/api/index.ts",
      "instructions": "Add export * from './hospitals' to index.ts."
    },
    {
      "id": "phase_1_task_3",
      "title": "Create HospitalListPage",
      "type": "code",
      "target_file": "src/pages/hospitals/HospitalListPage.tsx",
      "instructions": "Copy ListPage.template.tsx and replace placeholders: {{FEATURE_NAME}}=Hospitals, {{API_GET_FN}}=getHospitals, {{COLUMNS}}=[{ header: 'Name', accessor: 'name' }, { header: 'Address', accessor: 'address' }, { header: 'Phone', accessor: 'phone' }], {{SEARCH_PLACEHOLDER}}='Search hospitals...'"
    },
    {
      "id": "phase_1_task_4",
      "title": "Create HospitalCreatePage",
      "type": "code",
      "target_file": "src/pages/hospitals/HospitalCreatePage.tsx",
      "instructions": "Copy CreatePage.template.tsx and replace placeholders: {{API_CREATE_FN}}=createHospital, {{FORM_FIELDS_INITIAL}}={ name: '', address: '', phone: '', emergency_available: false, working_hours: [{ day_of_week: '', is_open: false, open_time: '', close_time: '' }] }, {{FORM_FIELDS}}=<FormField label='Name'><input className='input input-bordered w-full' /></FormField><FormField label='Address'><input className='input input-bordered w-full' /></FormField><FormField label='Phone'><input className='input input-bordered w-full' /></FormField><FormField label='Emergency Available'><input type='checkbox' className='toggle toggle-primary' /></FormField>, {{REDIRECT_PATH}}='/hospitals'"
    },
    {
      "id": "phase_1_task_5",
      "title": "Create HospitalDetailPage",
      "type": "code",
      "target_file": "src/pages/hospitals/HospitalDetailPage.tsx",
      "instructions": "Copy DetailPage.template.tsx and replace placeholders: {{API_GET_FN}}=getHospital, {{DETAIL_FIELDS}}=<div><p className='font-bold'>Name:</p><p>{hospital.name}</p></div><div><p className='font-bold'>Address:</p><p>{hospital.address}</p></div><div><p className='font-bold'>Phone:</p><p>{hospital.phone}</p></div><div><p className='font-bold'>Emergency Available:</p><p>{hospital.emergency_available ? 'Yes' : 'No'}</p></div>, {{STATUS_FIELD}}=<StatusBadge status={hospital.status} /> (if applicable)"
    },
    {
      "id": "phase_1_task_6",
      "title": "Register Hospital routes",
      "type": "code",
      "target_file": "src/App.tsx",
      "instructions": "Import HospitalListPage, HospitalCreatePage, and HospitalDetailPage. Add routes for /hospitals, /hospitals/new, and /hospitals/:id."
    },
    {
      "id": "phase_1_task_7",
      "title": "Add Hospitals nav item",
      "type": "code",
      "target_file": "src/layouts/Sidebar.tsx",
      "instructions": "Add nav item to navItems array: { label: 'Hospitals', path: '/hospitals', icon: '🏠' }"
    }
  ]
}


# Raw Planner Output – Tasks for phase_2

{
  "tasks": [
    {
      "id": "phase_2_task_0",
      "title": "Add hospital routes in App.tsx",
      "type": "code",
      "target_file": "src/App.tsx",
      "instructions": "Import HospitalListPage, HospitalCreatePage, and HospitalDetailPage. Add routes for /hospitals, /hospitals/new, and /hospitals/:id."
    },
    {
      "id": "phase_2_task_1",
      "title": "Add Hospitals nav item in Sidebar.tsx",
      "type": "code",
      "target_file": "src/layouts/Sidebar.tsx",
      "instructions": "Add a nav item to the navItems array with label 'Hospitals', path '/hospitals', and icon '🏥'."
    }
  ]
}
