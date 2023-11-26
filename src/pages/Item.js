import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography } from '@mui/material';

function ItemCarousel (){
    return (
    <Container maxWidth="md">
        <Typography variant="h2" component="div" color="textPrimary" gutterBottom className="animated-text" style={{ color: 'black' }}>
          <span>MELBOURNES FUNKIEST THAI RESTAURANT</span>
        </Typography>
    </Container>
    );
}

export default ItemCarousel;