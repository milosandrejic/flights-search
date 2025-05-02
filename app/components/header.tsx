'use client';

import Image from 'next/image';
import { Container, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <Container maxWidth="lg">
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
                <Image src="/logo.svg" alt="Flying Plane" width={100} height={100} />
                <Typography variant="h5" sx={{ mt: 1, fontWeight: 500 }}>
                    Search Flights
                </Typography>
            </Toolbar>
        </Container>
    );
};

export default Header;
