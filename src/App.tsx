import { Box, CssBaseline, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Folders
import Navbar from './components/Drawer/Navbar';
import Sidebar from './components/Drawer/Sidebar';
import Home from './pages/Home';
import Expense from './pages/ExpenseInformation';
import Information from './pages/Information';


const App = () => {
  return (
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
  )
}

export default App