import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import HospitalListPage from './pages/hospitals/HospitalListPage'
import HospitalCreatePage from './pages/hospitals/HospitalCreatePage'
import HospitalDetailPage from './pages/hospitals/HospitalDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="hospitals" element={<HospitalListPage />} />
          <Route path="hospitals/new" element={<HospitalCreatePage />} />
          <Route path="hospitals/:id" element={<HospitalDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App