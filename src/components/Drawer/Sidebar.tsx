import { Link } from 'react-router-dom';
import { Box, Drawer, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// Icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const navbarElements = [
    {
        id: 1,
        label: "Home",
        path: "/"
    },
    {
        id: 2,
        label: "Expense",
        path: "/expense"
    }
]
const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {navbarElements.map((item, index) => (
                        <Link key={item.id} to={item.path} style={{ textDecoration: "none",color:"black" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
}


export default Sidebar