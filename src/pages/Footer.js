import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent, TextField, CardMedia, Grid, styled } from '@mui/material';
import image1 from './images/bangpop-bar-03.jpg';
import image2 from './images/bangpop-bar-05.jpg';
import image3 from './images/bangpop-cocktails-08.jpg';
import image4 from './images/bangpop-cocktails-07.jpg';
import image5 from './images/bangpop-food-03.jpg';
import image6 from './images/bangpop-food-07.jpg';
import image7 from './images/bangpop-riverside-dining-06.jpg';
import diningimg1 from './images/dining/bangpop-restaurant-07.jpg';
import diningimg2 from './images/dining/bangpop-restaurant-12.jpg';
import diningimg3 from './images/dining/bangpop-riverside-dining-01.jpg';
import diningimg4 from './images/dining/bangpop-thai-resturant-melbourne-south-wharf-1.jpg';
import diningimg5 from './images/dining/bangpop-thai-resturant-melbourne-south-wharf-2.jpg';
import diningimg6 from './images/dining/bangpop-thai-resturant-melbourne-south-wharf-3.jpg';
import diningimg7 from './images/dining/bangpop-thai-resturant-melbourne-south-wharf-4.jpg';
import diningimg8 from './images/dining/bangpop-thai-resturant-melbourne-south-wharf-6.jpg';
import diningimg9 from './images/dining/bangpop-thai-resturant-melbourne-south-wharf-7.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.css';
import logo from './images/bangpop-thai-restaurant-logo-full-1.webp';
import IconButton from '@mui/material/IconButton';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const CenteredText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh', // Adjust as needed
});

const StyledButton = styled(Button)({
  fontSize: '1.2rem',
  marginTop: 2,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: '5px',
  border: '3px solid #fff', // Set a transparent border
  borderImage: 'url("path/to/doodle-pattern.png") 20 round', // Use a doodle pattern image
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  transition: 'background 0.5s ease-in-out, border 0.5s ease-in-out', // Adjust the duration and easing for a smoother transition

  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 0%, #FFB06B 30%, #FE6B8B 60%, #FF8E53 90%)', // Add more colors during hover transition
    border: '3px solid #000', // Change the border color on hover
    transition: 'background 0.5s ease-in-out, border 0.5s ease-in-out', // Make the color change effect smoother on hover
  },
});


const images = [image1, image2, image3, image4, image5, image6, image7];
const images1 = [diningimg1, diningimg2, diningimg3, diningimg4, diningimg5, diningimg6, diningimg7, diningimg8, diningimg9];
const imageTitles = ['Restaurant', 'Restaurant', 'Riverside Terrace', 'Bar Front', 'Restaurant', 'TukTuk Nook', 'TukTuk Nook'];

const StyledContainer = styled(Container)({
  paddingTop: '40px',
  paddingBottom: '40px',
});


const FooterPage = () => {
  return (
    <div>
      <Footer/>
      <SubscribeForm/>
      <SchedulePage/>
    </div>
  );
}

const Footer = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
  <div className='hero-background-dining'>
    <StyledContainer maxWidth="xl">
    <Container>
    <CenteredText>
    <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center' }}>
          <span className='highlight4'>EXPLORE OUR DINING AREAS</span>
    </Typography>
    </CenteredText>
    </Container>
  
    <Container>
      {/* Carousel */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card
          sx={{
            maxWidth: '100%',
            margin: 'auto',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardMedia
            key={images1[activeIndex]}
            component="img"
            alt="carousel image"
            height="500"
            image={images1[activeIndex]}
            sx={{
              opacity: 1,
              borderRadius: '15px 15px 0 0',
              objectFit: 'cover',
              width: '100%',
              minHeight: '200px',
              maxHeight: '500px', 
            }}
          />
          <Typography
            variant="h5"
            component="div"
            color="textPrimary"
            sx={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'buttercookie, sans-serif',
              minHeight: '50px',
              maxHeight: '50px',
              backgroundColor: '#36454F',
              textShadow: '1px 1px 12px rgba(0, 0, 0, 0.2), -3px -3px 12px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {imageTitles[activeIndex]}
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{
              position: 'absolute',
              top: '50%',
              width: '100%',
              transform: 'translateY(-50%)', // Center the buttons vertically
            }}
          >
            <Button
              sx={{ color: 'white', borderRadius: '50%', padding: '8px', '&:hover': { backgroundColor: '#555' } }}
              onClick={handlePrev}
            >
              <ArrowBackIcon />
            </Button>
            <Button
              sx={{ color: 'white', borderRadius: '50%', padding: '8px', '&:hover': { backgroundColor: '#555' } }}
              onClick={handleNext}
            >
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Container>
  </StyledContainer>
  </div>
    );
  };

  const SubscribeForm = () => {
    return (
<div className='subscribe-bg'>
<Container maxWidth="xl">
      <CenteredText>
        <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#FFD700', textAlign: 'center', fontFamily: 'ThaiFont'}}>
          <span className='highlight2'>SUBSCRIBE TO OUR MAILING LIST</span>
        </Typography>
      </CenteredText>
  <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '50vh' }}>
    <Grid item xs={12} sm={10} md={8} lg={6} style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '50px' }}>
      <form style={{ width: '100%' }}> 
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: 2, fontSize: '1.2rem' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          sx={{ marginBottom: 2, fontSize: '1.2rem' }}
        />
        <Button
          component={StyledButton}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ fontSize: '1.2rem', marginTop: 2, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', borderRadius: '5px', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' , fontFamily:'handwritten, sans serif' }}
        >
          Subscribe
        </Button>
      </form>
    </Grid>
  </Grid>
</Container>
<div class="custom-shape-divider-top-1701006373">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
<br></br>
</div>
);
  };

const SchedulePage= () => {
    return (
<div className='hero-background-blk'>
      <StyledContainer>
      <br></br><br></br>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '200px',
                filter: 'brightness(1.2) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                borderRadius: '10px', // Add a border-radius for a modern look
              }}
            />
            <Typography variant="h4" sx={{ marginTop: '20px', textAlign: 'center', fontSize: '24px', color: '#ff6f00', fontFamily: 'brownpaper, sans-serif', fontWeight: 'bold' }}>
              Authentic Thai Cuisine
            </Typography>
          </div>
          <Typography variant="h6" sx={{ marginTop: '20px', textAlign: 'center', fontSize: '18px', color: '#fff', fontFamily: 'handwritten, sans-serif' }}>
            WE'RE OPEN 364 DAYS A YEAR!
          </Typography>
          {/* Add your operating hours and closing note styling here */}
          <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'center', fontSize: '18px', color: '#fff', fontFamily: 'handwritten, sans-serif' }}>
            Monday: 12:00PM – 09:00PM <br />
            Tuesday: 12:00PM – 09:00PM <br />
            Wednesday: 12:00PM – 09:00PM <br />
            Thursday: 12:00PM – 10:00PM <br />
            Friday: 12:00PM – 10:30PM <br />
            Saturday: 11:30AM – 10:30PM <br />
            Sunday: 11:30AM – 09:00PM <br />
            <br />
            Please note, we will be closed on Wednesday the 10th of January 2024
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '20px', textAlign: 'center', fontSize: '18px', color: '#fff', fontFamily: 'shouter, sans-serif' }}>
            35 S Wharf Promenade, South Wharf | Melbourne | info@bangpop.com.au | (03) 9245 9800
          </Typography>
          <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <Typography variant="body2" align="center" color="textSecondary" sx={{ marginBottom: '10px', fontFamily: 'handwritten, sans-serif' }}>
              Connect with Us:
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Stylish social media icons */}
              <IconButton color="primary" href="https://www.instagram.com/bangpopmelb" target="_blank">
                <FaInstagram style={{ fontSize: '24px', marginRight: '10px', color: '#e4405f' }} />
              </IconButton>
              <IconButton color="primary" href="https://www.tiktok.com/@bangpopmelb" target="_blank">
                <FaTiktok style={{ fontSize: '24px', marginRight: '10px', color: '#69c9d0' }} />
              </IconButton>
              <IconButton color="primary" href="https://www.facebook.com/BangPopMelbourne/" target="_blank">
                <FaFacebook style={{ fontSize: '24px', color: '#1877f2' }} />
              </IconButton>
            </div>
          </footer>
        </Grid>
      </Grid>
    </StyledContainer>
    <div class="custom-shape-divider-top-1701006493">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
    </div>
    </div>
    );
  };
  


  export default FooterPage;