import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import PostForm from './pages/PostForm'
import TeamForm from './pages/TeamForm'
import './admin.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/post/new" element={<PostForm />} />
        <Route path="/post/:postId/edit" element={<PostForm />} />
        <Route path="/team/new" element={<TeamForm />} />
        <Route path="/team/:memberId/edit" element={<TeamForm />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App


