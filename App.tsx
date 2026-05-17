import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HospitalListPage from './pages/hospitals/HospitalListPage'
import HospitalCreatePage from './pages/hospitals/HospitalCreatePage'
import HospitalDetailPage from './pages/hospitals/HospitalDetailPage'
import DepartmentListPage from './pages/departments/DepartmentListPage'
import DepartmentCreatePage from './pages/departments/DepartmentCreatePage'
import DepartmentDetailPage from './pages/departments/DepartmentDetailPage'
import DoctorListPage from './pages/doctors/DoctorListPage'
import DoctorCreatePage from './pages/doctors/DoctorCreatePage'
import DoctorDetailPage from './pages/doctors/DoctorDetailPage'
import AppointmentListPage from './pages/appointments/AppointmentListPage'
import AppointmentCreatePage from './pages/appointments/AppointmentCreatePage'
import AppointmentDetailPage from './pages/appointments/AppointmentDetailPage'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/hospitals" element={<HospitalListPage />} />
          <Route path="/hospitals/new" element={<HospitalCreatePage />} />
          <Route path="/hospitals/:id" element={<HospitalDetailPage />} />
          <Route path="/departments" element={<DepartmentListPage />} />
          <Route path="/departments/new" element={<DepartmentCreatePage />} />
          <Route path="/departments/:id" element={<DepartmentDetailPage />} />
          <Route path="/doctors" element={<DoctorListPage />} />
          <Route path="/doctors/new" element={<DoctorCreatePage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
          <Route path="/appointments" element={<AppointmentListPage />} />
          <Route path="/appointments/new" element={<AppointmentCreatePage />} />
          <Route path="/appointments/:id" element={<AppointmentDetailPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App