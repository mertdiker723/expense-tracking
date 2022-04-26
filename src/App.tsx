import { Box, CssBaseline, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Folders
import Navbar from './components/Drawer/Navbar';
import Sidebar from './components/Drawer/Sidebar';
import Home from './pages/Home/Home';
import Expense from './pages/Expense/Expense';
import Information from './pages/Information/Information';
import { StoreProvider } from './store/Store';


const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/information" element={<Information />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </StoreProvider>
  )
}

export default App