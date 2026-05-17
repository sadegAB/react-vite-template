# Raw Planner Output – High-Level Phases

{
  "phases": [
    {
      "id": "phase_0",
      "title": "Placeholder Types and API Files",
      "scope": "Create placeholder types and API files for hospitals, departments, doctors, and appointments"
    },
    {
      "id": "phase_1",
      "title": "Types for Hospitals, Departments, Doctors, Appointments",
      "scope": "Define detailed types for hospitals, departments, doctors, and appointments"
    },
    {
      "id": "phase_2",
      "title": "API Functions for Hospitals, Departments, Doctors, Appointments",
      "scope": "Implement API functions for hospitals, departments, doctors, and appointments"
    },
    {
      "id": "phase_3",
      "title": "Hospital Pages - List, Create, Detail",
      "scope": "Create pages for listing, creating, and viewing details of hospitals"
    },
    {
      "id": "phase_4",
      "title": "Department Pages - List, Create, Detail",
      "scope": "Create pages for listing, creating, and viewing details of departments"
    },
    {
      "id": "phase_5",
      "title": "Doctor Pages - List, Create, Detail",
      "scope": "Create pages for listing, creating, and viewing details of doctors"
    },
    {
      "id": "phase_6",
      "title": "Appointment Pages - List, Create, Detail",
      "scope": "Create pages for listing, creating, and viewing details of appointments"
    },
    {
      "id": "phase_7",
      "title": "Routes and Navigation Registration",
      "scope": "Register routes and navigation items for all features"
    }
  ]
}


# Raw Planner Output – Tasks for phase_0

{
  "tasks": [
    {
      "id": "phase_0_task_0",
      "title": "Create Hospital types",
      "type": "code",
      "target_file": "src/types/hospitals.ts",
      "instructions": "Create placeholder Hospital interface with id field."
    },
    {
      "id": "phase_0_task_1",
      "title": "Create Department types",
      "type": "code",
      "target_file": "src/types/departments.ts",
      "instructions": "Create placeholder Department interface with id field."
    },
    {
      "id": "phase_0_task_2",
      "title": "Create Doctor types",
      "type": "code",
      "target_file": "src/types/doctors.ts",
      "instructions": "Create placeholder Doctor interface with id field."
    },
    {
      "id": "phase_0_task_3",
      "title": "Create Appointment types",
      "type": "code",
      "target_file": "src/types/appointments.ts",
      "instructions": "Create placeholder Appointment interface with id field."
    },
    {
      "id": "phase_0_task_4",
      "title": "Create Hospital API functions",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Create placeholder getHospitals function returning Promise.resolve([])."
    },
    {
      "id": "phase_0_task_5",
      "title": "Create Department API functions",
      "type": "code",
      "target_file": "src/api/departments.ts",
      "instructions": "Create placeholder getDepartments function returning Promise.resolve([])."
    },
    {
      "id": "phase_0_task_6",
      "title": "Create Doctor API functions",
      "type": "code",
      "target_file": "src/api/doctors.ts",
      "instructions": "Create placeholder getDoctors function returning Promise.resolve([])."
    },
    {
      "id": "phase_0_task_7",
      "title": "Create Appointment API functions",
      "type": "code",
      "target_file": "src/api/appointments.ts",
      "instructions": "Create placeholder getAppointments function returning Promise.resolve([])."
    }
  ]
}


# Raw Planner Output – Tasks for phase_1

{
  "tasks": [
    {
      "id": "phase_1_task_0",
      "title": "Define Hospital types",
      "type": "code",
      "target_file": "src/types/hospitals.ts",
      "instructions": "Create Hospital and HospitalCreate interfaces according to TASK.md."
    },
    {
      "id": "phase_1_task_1",
      "title": "Define Department types",
      "type": "code",
      "target_file": "src/types/departments.ts",
      "instructions": "Create Department and DepartmentCreate interfaces according to TASK.md."
    },
    {
      "id": "phase_1_task_2",
      "title": "Define Doctor types",
      "type": "code",
      "target_file": "src/types/doctors.ts",
      "instructions": "Create Doctor and DoctorCreate interfaces according to TASK.md."
    },
    {
      "id": "phase_1_task_3",
      "title": "Define Appointment types",
      "type": "code",
      "target_file": "src/types/appointments.ts",
      "instructions": "Create Appointment and AppointmentCreate interfaces according to TASK.md."
    }
  ]
}


# Raw Planner Output – Tasks for phase_2

{
  "tasks": [
    {
      "id": "phase_2_task_0",
      "title": "Create Hospital types",
      "type": "code",
      "target_file": "src/types/hospitals.ts",
      "instructions": "Define Hospital and HospitalCreate interfaces according to the backend response reference."
    },
    {
      "id": "phase_2_task_1",
      "title": "Create Department types",
      "type": "code",
      "target_file": "src/types/departments.ts",
      "instructions": "Define Department and DepartmentCreate interfaces according to the backend response reference."
    },
    {
      "id": "phase_2_task_2",
      "title": "Create Doctor types",
      "type": "code",
      "target_file": "src/types/doctors.ts",
      "instructions": "Define Doctor and DoctorCreate interfaces according to the backend response reference."
    },
    {
      "id": "phase_2_task_3",
      "title": "Create Appointment types",
      "type": "code",
      "target_file": "src/types/appointments.ts",
      "instructions": "Define Appointment and AppointmentCreate interfaces according to the backend response reference."
    },
    {
      "id": "phase_2_task_4",
      "title": "Implement Hospital API functions",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Implement getHospitals, getHospital, createHospital, updateHospital, and deleteHospital functions using the client and Hospital types."
    },
    {
      "id": "phase_2_task_5",
      "title": "Implement Department API functions",
      "type": "code",
      "target_file": "src/api/departments.ts",
      "instructions": "Implement getDepartments, getDepartment, createDepartment, updateDepartment, and deleteDepartment functions using the client and Department types."
    },
    {
      "id": "phase_2_task_6",
      "title": "Implement Doctor API functions",
      "type": "code",
      "target_file": "src/api/doctors.ts",
      "instructions": "Implement getDoctors, getDoctor, createDoctor, updateDoctor, and deleteDoctor functions using the client and Doctor types."
    },
    {
      "id": "phase_2_task_7",
      "title": "Implement Appointment API functions",
      "type": "code",
      "target_file": "src/api/appointments.ts",
      "instructions": "Implement getAppointments, getAppointment, createAppointment, updateAppointment, and deleteAppointment functions using the client and Appointment types."
    }
  ]
}


# Raw Planner Output – Tasks for phase_3

{
  "tasks": [
    {
      "id": "phase_3_task_0",
      "title": "Create Hospital types",
      "type": "code",
      "target_file": "src/types/hospitals.ts",
      "instructions": "Define HospitalCreate and Hospital interfaces according to TASK.md."
    },
    {
      "id": "phase_3_task_1",
      "title": "Create Hospital API functions",
      "type": "code",
      "target_file": "src/api/hospitals.ts",
      "instructions": "Implement getHospitals, getHospital, createHospital, updateHospital, and deleteHospital functions."
    },
    {
      "id": "phase_3_task_2",
      "title": "Export Hospital API functions",
      "type": "code",
      "target_file": "src/api/index.ts",
      "instructions": "Add export * from './hospitals'."
    },
    {
      "id": "phase_3_task_3",
      "title": "Create Hospital List page",
      "type": "code",
      "target_file": "src/pages/hospitals/HospitalsListPage.tsx",
      "instructions": "Create HospitalsListPage component using useApi to fetch and display hospitals."
    },
    {
      "id": "phase_3_task_4",
      "title": "Create Hospital Create page",
      "type": "code",
      "target_file": "src/pages/hospitals/HospitalCreatePage.tsx",
      "instructions": "Create HospitalCreatePage component with a form to create a new hospital."
    },
    {
      "id": "phase_3_task_5",
      "title": "Create Hospital Detail page",
      "type": "code",
      "target_file": "src/pages/hospitals/HospitalDetailPage.tsx",
      "instructions": "Create HospitalDetailPage component to display details of a selected hospital."
    }
  ]
}


# Raw Planner Output – Tasks for phase_4

{
  "tasks": [
    {
      "id": "phase_4_task_0",
      "title": "Create Department types",
      "type": "code",
      "target_file": "src/types/departments.ts",
      "instructions": "Define DepartmentCreate and Department interfaces according to TASK.md."
    },
    {
      "id": "phase_4_task_1",
      "title": "Create Department API functions",
      "type": "code",
      "target_file": "src/api/departments.ts",
      "instructions": "Implement getDepartments, getDepartment, createDepartment, updateDepartment, and deleteDepartment functions."
    },
    {
      "id": "phase_4_task_2",
      "title": "Create DepartmentListPage",
      "type": "code",
      "target_file": "src/pages/departments/DepartmentListPage.tsx",
      "instructions": "Create a page to list departments using DataTable component."
    },
    {
      "id": "phase_4_task_3",
      "title": "Create DepartmentCreatePage",
      "type": "code",
      "target_file": "src/pages/departments/DepartmentCreatePage.tsx",
      "instructions": "Create a page with a form to create a new department."
    },
    {
      "id": "phase_4_task_4",
      "title": "Create DepartmentDetailPage",
      "type": "code",
      "target_file": "src/pages/departments/DepartmentDetailPage.tsx",
      "instructions": "Create a page to view details of a selected department."
    }
  ]
}


# Raw Planner Output – Tasks for phase_5

{
  "tasks": [
    {
      "id": "phase_5_task_0",
      "title": "Create Doctor types",
      "type": "code",
      "target_file": "src/types/doctors.ts",
      "instructions": "Define DoctorCreate and Doctor interfaces according to TASK.md."
    },
    {
      "id": "phase_5_task_1",
      "title": "Create Doctor API functions",
      "type": "code",
      "target_file": "src/api/doctors.ts",
      "instructions": "Implement getDoctors, getDoctor, createDoctor, updateDoctor, and deleteDoctor functions."
    },
    {
      "id": "phase_5_task_2",
      "title": "Create DoctorsListPage",
      "type": "code",
      "target_file": "src/pages/doctors/DoctorsListPage.tsx",
      "instructions": "Create a page to list doctors using DataTable component."
    },
    {
      "id": "phase_5_task_3",
      "title": "Create DoctorDetailPage",
      "type": "code",
      "target_file": "src/pages/doctors/DoctorDetailPage.tsx",
      "instructions": "Create a page to view doctor details."
    },
    {
      "id": "phase_5_task_4",
      "title": "Create DoctorCreatePage",
      "type": "code",
      "target_file": "src/pages/doctors/DoctorCreatePage.tsx",
      "instructions": "Create a page to add a new doctor using FormField components."
    }
  ]
}


# Raw Planner Output – Tasks for phase_6

{
  "tasks": [
    {
      "id": "phase_6_task_0",
      "title": "Create Appointment types",
      "type": "code",
      "target_file": "src/types/appointments.ts",
      "instructions": "Define AppointmentCreate and Appointment interfaces according to TASK.md."
    },
    {
      "id": "phase_6_task_1",
      "title": "Create Appointment API functions",
      "type": "code",
      "target_file": "src/api/appointments.ts",
      "instructions": "Implement getAppointments, getAppointment, createAppointment, updateAppointment, and deleteAppointment functions."
    },
    {
      "id": "phase_6_task_2",
      "title": "Create AppointmentsList page",
      "type": "code",
      "target_file": "src/pages/appointments/AppointmentsListPage.tsx",
      "instructions": "Create a page to list appointments with a DataTable component and status filter."
    },
    {
      "id": "phase_6_task_3",
      "title": "Create AppointmentsCreate page",
      "type": "code",
      "target_file": "src/pages/appointments/AppointmentsCreatePage.tsx",
      "instructions": "Create a page with a form to create a new appointment using FormField components."
    },
    {
      "id": "phase_6_task_4",
      "title": "Create AppointmentsDetail page",
      "type": "code",
      "target_file": "src/pages/appointments/AppointmentsDetailPage.tsx",
      "instructions": "Create a page to view details of a selected appointment and include a status update button."
    }
  ]
}


# Raw Planner Output – Tasks for phase_7

{
  "tasks": [
    {
      "id": "phase_7_task_0",
      "title": "Register hospital routes",
      "type": "code",
      "target_file": "App.tsx",
      "instructions": "Import HospitalListPage, HospitalCreatePage, and HospitalDetailPage from src/pages/hospitals/. Add routes for /hospitals, /hospitals/new, and /hospitals/:id."
    },
    {
      "id": "phase_7_task_1",
      "title": "Register department routes",
      "type": "code",
      "target_file": "App.tsx",
      "instructions": "Import DepartmentListPage, DepartmentCreatePage, and DepartmentDetailPage from src/pages/departments/. Add routes for /departments, /departments/new, and /departments/:id."
    },
    {
      "id": "phase_7_task_2",
      "title": "Register doctor routes",
      "type": "code",
      "target_file": "App.tsx",
      "instructions": "Import DoctorListPage, DoctorCreatePage, and DoctorDetailPage from src/pages/doctors/. Add routes for /doctors, /doctors/new, and /doctors/:id."
    },
    {
      "id": "phase_7_task_3",
      "title": "Register appointment routes",
      "type": "code",
      "target_file": "App.tsx",
      "instructions": "Import AppointmentListPage, AppointmentCreatePage, and AppointmentDetailPage from src/pages/appointments/. Add routes for /appointments, /appointments/new, and /appointments/:id."
    },
    {
      "id": "phase_7_task_4",
      "title": "Add hospital nav items",
      "type": "code",
      "target_file": "src/layouts/Sidebar.tsx",
      "instructions": "Add nav items for Hospitals: { label: 'Hospitals', path: '/hospitals', icon: '🏠' }, { label: 'New Hospital', path: '/hospitals/new', icon: '➕' }."
    },
    {
      "id": "phase_7_task_5",
      "title": "Add department nav items",
      "type": "code",
      "target_file": "src/layouts/Sidebar.tsx",
      "instructions": "Add nav items for Departments: { label: 'Departments', path: '/departments', icon: '🏢' }, { label: 'New Department', path: '/departments/new', icon: '➕' }."
    },
    {
      "id": "phase_7_task_6",
      "title": "Add doctor nav items",
      "type": "code",
      "target_file": "src/layouts/Sidebar.tsx",
      "instructions": "Add nav items for Doctors: { label: 'Doctors', path: '/doctors', icon: '👨‍⚕️' }, { label: 'New Doctor', path: '/doctors/new', icon: '➕' }."
    },
    {
      "id": "phase_7_task_7",
      "title": "Add appointment nav items",
      "type": "code",
      "target_file": "src/layouts/Sidebar.tsx",
      "instructions": "Add nav items for Appointments: { label: 'Appointments', path: '/appointments', icon: '📅' }, { label: 'New Appointment', path: '/appointments/new', icon: '➕' }."
    }
  ]
}
