import { Container, Grid, Input } from '@mui/material'
export default function Contain({ children, style }) {
    return (
        <Container maxWidth="xs" style={{
            paddingLeft: 0, paddingRight: 0,
            minHeight: ' 100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'red',
            ...style
        }}>
            {children}
        </Container>
    )
}

