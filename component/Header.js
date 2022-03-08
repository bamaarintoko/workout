import { Container, Grid, Input } from '@mui/material'
import Box from '@mui/material/Box';

export default function Header({ children }) {
    return (
        <Box style={style.navbar}>
            <Container maxWidth="xs" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Grid container >
                    {children}
                </Grid>
            </Container>
        </Box>
    )
}
const style = {
    navbar: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '1px -12px 36px -8px rgba(0,0,0,0.76)'
    }
}

