import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import GamePage from './pages/GamePage'
import OverviewPage from './pages/OverviewPage'
import TheoryPage from './pages/TheoryPage'
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="ly-thuyet" element={<TheoryPage />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="game" element={<GamePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
