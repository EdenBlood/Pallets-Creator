import { createRoot } from 'react-dom/client'
import './index.css'
import GlobalLayout from './Layout/GlobalLayout'
import DashBoardLayout from './Layout/DashBoardLayout'
import DashBoard from './views/DashBoard'

createRoot(document.getElementById('root')!).render(
  <GlobalLayout>
    <DashBoardLayout>
      <DashBoard />
    </DashBoardLayout>
  </GlobalLayout>
)
