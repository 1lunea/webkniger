import { Routes, Route, Navigate } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import { AuthProvider } from './context/AuthContext'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Assignments from './pages/Assignments'
import Discussions from './pages/Discussions'
import Calendar from './pages/Calendar'
import Grades from './pages/Grades'
import Profile from './pages/Profile'

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: '64px', // Height of the header
            ml: '240px', // Width of the sidebar
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Box>
    </AuthProvider>
  )
}

export default App 