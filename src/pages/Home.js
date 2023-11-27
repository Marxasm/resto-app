import React, { useState, useEffect, useRef  } from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia, Grid, styled, Paper } from '@mui/material';
import Link from '@mui/material/Link';
import image1 from './images/best-thai-resturant-melbourne-south-wharf-bangpop-10.jpg';
import image2 from './images/bangpop-bar-05.jpg';
import image3 from './images/bangpop-cocktails-08.jpg';
import image4 from './images/bangpop-cocktails-07.jpg';
import image5 from './images/bangpop-food-03.jpg';
import image6 from './images/bangpop-food-07.jpg';
import image7 from './images/bangpop-riverside-dining-06.jpg';
import image11 from './images/bangpop-bar-03.jpg';
import image12 from './images/more/best-thai-resturant-melbourne-south-wharf-bangpop-8.jpg';
import image13 from './images/more/thai-restaurant-melbourne-1.jpg';
import image14 from './images/more/thai-restaurant-melbourne-3.jpg';
import image15 from './images/more/thai-restaurant-melbourne-4.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from './images/bangpop-thai-restaurant-logo-full-1.webp';
import './Home.css';
import svgBg from './images/wave-haikei.svg';
import svgBg1 from './images/wave-haikei-1.svg';
import svgBg2 from './images/wave-haikei-2.svg';
import cardimg1 from './images/thai-together-.jpg';
import cardimg2 from './images/bangpop-christmas-web-image-2.webp';
import cardimg3 from './images/BangPop-NYE23-Web-Banner-2.webp';
import otherimg1 from './images/more/about-bang-pop-thai-resturant-melbourne-.jpg';
import otherimg2 from './images/more/bangpop-foodini-melbourne-south-wharf.webp';
import Footer from './Footer';

const CenteredText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh', // Adjust as needed
});

const StyledContainer = styled(Container)({
  paddingTop: '40px',
  paddingBottom: '40px',
});

const StyledCard = styled(Card)({
  borderRadius: '16px', // Add border-radius for a more modern look
  overflow: 'hidden', // Hide any overflowing content
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  objectFit: 'cover',
  height: '200px', // Adjusted height for responsiveness
});

const StyledTypography = styled(Typography)({
  marginBottom: '1.5rem',
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

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const buttonStyle = {
  flex: 1,
  textAlign: 'center',
  margin: '5px',
};


const images = [image1, image2, image3, image4, image5, image6, image7];
const images1 = [image11, image12, image13, image14, image15];
const moreimg = [otherimg1, otherimg2];

const HomePage = () => {
  return (
    <>
    <Home />
    <CarouselPage />
    <CardPage />
    <OtherPage />
    <Footer />
  </>
  );
}

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
  
    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);
  return (
  <div className='hero-background-headline'>
    {/* Carousel */}
    <Grid container className='hero-overlay' style={{ position: 'relative', height: '800px', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <div key={image} style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              zIndex: 1,
            }} />

            <CardMedia
              key={image}
              component="img"
              alt={`carousel image ${index + 1}`}
              height="500"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                transition: 'transform 0.5s ease, opacity 0.5s ease',
                opacity: index === activeIndex ? 1 : 0,
                transform: `translateY(${(index - activeIndex) * 50}px)`, // Adjust the value as needed
                objectFit: 'cover',
              }}
              src={image}
            />
          </div>
      ))}
   <Grid container className="stylish-section">

      <Grid item xs={12} sm={6} md={6} lg={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div className="content-container">
          <div className="logo-container">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
          </div>

          <Typography variant="h2" component="div" color="textPrimary" gutterBottom className="animated-text">
            <span className="highlight1">Fresh, Fragrant & Fun</span>
          </Typography>

          <Typography variant="body1" paragraph className="description">
          <span className="highlight5">Bold flavors, vibrant colors, and larger-than-life personality found in Melbourne’s funkiest riverside Thai Restaurant BangPop!</span>
          </Typography>
          <Link href="https://bangpop.com.au/book-now/" target="_blank" style={{ textDecoration: 'none' }}>
            <Button 
            component={StyledButton}
            variant="contained" 
            color="primary">
              Book Now!
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
</Grid>
  </div>
  );
};

const CarouselPage = ({ }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (

    <div className='hero-background-or'>
    <Container maxWidth="md">
      <CenteredText>
        <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center' }}>
          <span className='highlight2'>MELBOURNES FUNKIEST THAI RESTAURANT</span>
        </Typography>
      </CenteredText>
    </Container>

    <Container>
      <Grid container spacing={2} sx={{ overflow: 'hidden' }}>
        {/* Carousel */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card
            sx={{
              maxWidth: '800px',
              margin: 'auto',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid #DB443A',
              borderRadius: '15px',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Added box shadow for depth
            }}
          >
            <CardMedia
              key={images1[activeIndex]}
              component="img"
              alt="carousel image"
              height="500"
              image={images1[activeIndex]}
              sx={{
                transition: 'transform 0.5s ease, opacity 0.5s ease', // Custom transition
                opacity: 1, // Initial opacity
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            <Grid container justifyContent="space-between" alignItems="center" sx={{ position: 'absolute', top: '50%', width: '100%' }}>
              <Button sx={{ color: 'white' }} onClick={handlePrev}>
                <ArrowBackIcon />
              </Button>
              <Button sx={{ color: 'white' }} onClick={handleNext}>
                <ArrowForwardIcon />
              </Button>
            </Grid>
          </Card>

          <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
            {images1.map((image, index) => (
              <Grid item key={index}>
                <img
                  src={image}
                  alt={`thumbnail-${index}`}
                  style={{
                    width: '60px',
                    height: '40px',
                    margin: '0 5px',
                    cursor: 'pointer',
                    border: index === activeIndex ? '2px solid #DB443A' : 'none', // Match the card border color
                    borderRadius: '4px',
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Typography */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Typography variant="body1" sx={{
          marginTop: '20px',
          textAlign: 'left',
          fontSize: '18px',
          color: '#fff',
          fontFamily: 'handwritten, sans-serif',
          textShadow: '1px 1px 1px #000' // This line adds a black outline
        }}>
          Adopting a ‘no worries’ attitude and full of colour, BangPop is welcoming to all and provides an exceptional standard of refined salads, curries and hawker-influenced Thai dishes using exceptional Australian produce complimented by an awesome wine list and great cocktails and mocktails inspired by the flavours of Thailand!
        </Typography>
        <Typography variant="body1" sx={{
          marginTop: '20px',
          textAlign: 'left',
          fontSize: '18px',
          color: '#fff',
          fontFamily: 'handwritten, sans-serif',
          textShadow: '1px 1px 1px #000' // This line adds a black outline
        }}>
          BangPop is where amazing food meets a seriously fun time. We take our food seriously, but not ourselves, so get ready for a casual, lively atmosphere and awesome music that’s all about enjoying great company and even better drinks! Choose your vibe by dining riverside overlooking the Yarra River, on our communal tables enjoying the lively buzz or at the bar watching the crew sling cocktails.
        </Typography>
        <Typography variant="body1" sx={{
          marginTop: '20px',
          textAlign: 'left',
          fontSize: '18px',
          color: '#fff',
          fontFamily: 'handwritten, sans-serif',
          textShadow: '1px 1px 1px #000' // This line adds a black outline
        }}>
          We aren’t just about amazing food – we’re also your go-to spot for functions, events and groups!
        </Typography>
        <Typography variant="body1" sx={{
          marginTop: '20px',
          textAlign: 'left',
          fontSize: '18px',
          color: '#fff',
          fontFamily: 'handwritten, sans-serif',
          textShadow: '1px 1px 1px #000' // This line adds a black outline
        }}>
          Whether it’s a party, get-together, or office lunch, our vibrant venue (just a skip from the Melbourne Convention and Exhibition Centre) is the place you can “Thai Together!”
        </Typography>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', marginBottom: '30px' }}>
        <Link href="https://www.ubereats.com/au/store/bangpop/7Qhvb9_WSM6SsfDHJAfezA" target="_blank" style={{ textDecoration: 'none' }}>
          <StyledButton variant="contained" color="primary" style={{ width: '200px', fontFamily:'handwritten, sans serif' }}>
            MENU + 
          </StyledButton>
        </Link>
        <Link href="https://www.ubereats.com/au/store/bangpop/7Qhvb9_WSM6SsfDHJAfezA" target="_blank" style={{ textDecoration: 'none' }}>
          <StyledButton variant="contained" color="primary" style={{ width: '200px', fontFamily:'handwritten, sans serif' }}>
            DRINKS +
          </StyledButton>
        </Link>
        </div>
        </Grid>
      </Grid>
    </Container>
    <br></br><br></br>
    <div class="custom-shape-divider-bottom-1701007419">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
  </div>
  );
}

const CardPage = () => {
  return (
  <div className='hero-background-wt'>
    <StyledContainer maxWidth="xl">
    <CenteredText>
      <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center' }}>
        <span className='highlight1'>WHAT'S ON AT BANGPOP</span>
      </Typography>
    </CenteredText>
    <Grid container spacing={3}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <StyledCard style={{ height: '100%', backgroundImage: `url(${svgBg})`, backgroundSize: 'cover', position: 'relative'}}>
          <StyledCardMedia component="img" image={cardimg1} alt="Card 1" style={{ height: '200px' }} />
          <CardContent>
            <StyledTypography variant="h4" component="div" sx={{ textAlign: 'center' }}>
              <span className='highlight22'>CHRISTMAS DAY LUNCH</span>
            </StyledTypography>
            <Typography color="text.secondary" sx={{ fontFamily:'handwritten, sans-serif', fontSize: '25px', textAlign: 'center' }}>
              Embark on a Thai Brunch Journey to Thailand This Christmas Day!
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '87px' }}>
            <Link href="https://bangpop.com.au/christmas-lunch-2023/" target="_blank" style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary" style={{ width: '150px', fontFamily:'handwritten, sans serif' }}>
                MORE+
              </StyledButton>
            </Link>
            </div>
          </CardContent>
        </StyledCard>
      </Grid>
  
      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <StyledCard style={{ height: '100%', backgroundImage: `url(${svgBg1})`, backgroundSize: 'cover', position: 'relative' }}>
          <StyledCardMedia component="img" image={cardimg2} alt="Card 2" style={{ height: '200px' }} />
          <CardContent>
            <StyledTypography variant="h4" component="div" sx={{ textAlign: 'center' }}>
              <span className='highlight22'>THAI TOGETHER</span>
            </StyledTypography>
            <Typography color="text.secondary" sx={{ fontFamily:'handwritten, sans-serif', fontSize: '25px', textAlign: 'center' }}>
              Thai Culinary Togetherness at BangPop: A Sharing Lunch w/ Delectable Dishes, $35.9pp [M-F]
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <Link href="https://bangpop.com.au/thai-together/" target="_blank" style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary" style={{ width: '150px', fontFamily:'handwritten, sans serif' }}>
                MORE+
              </StyledButton>
            </Link>
            </div>
          </CardContent>
        </StyledCard>
      </Grid>
  
      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <StyledCard style={{ height: '100%', backgroundImage: `url(${svgBg2})`, backgroundSize: 'cover', position: 'relative' }}>
          <StyledCardMedia component="img" image={cardimg3} alt="Card 3" style={{ height: '200px' }} />
          <CardContent>
            <StyledTypography variant="h4" component="div" sx={{ textAlign: 'center' }}>
              <span className='highlight22'>NYE THAI STYLE!</span>
            </StyledTypography>
            <Typography color="text.secondary" sx={{ fontFamily:'handwritten, sans-serif', fontSize: '25px', textAlign: 'center' }}>
              Welcome in 2024 and enjoy our fantastic outlook on the Melbourne CBD and fireworks.
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <Link href="https://bangpop.com.au/new-years-eve-2023/" target="_blank" style={{ textDecoration: 'none' }}>
              <StyledButton variant="contained" color="primary" style={{ width: '150px', fontFamily:'handwritten, sans serif' }}>
                MORE+
              </StyledButton>
            </Link>
            </div>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  </StyledContainer>
  </div>
  );
};

const OtherPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [sectionPositions, setSectionPositions] = useState([]);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const containerRef = useRef(null);

 const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // Scrolling down
  if (scrollPosition > lastScrollPosition && currentSection < moreimg.length - 1) {
    // Check if scrolled to the next section
    if (scrollPosition >= sectionPositions[currentSection + 1]) {
      setIsImageTransitioning(true);
      setCurrentSection(currentSection + 1);
    }
  }

  // Scrolling up
  if (scrollPosition < lastScrollPosition && currentSection > 0) {
    // Check if scrolled to the previous section
    if (scrollPosition <= sectionPositions[currentSection - 1]) {
      setIsImageTransitioning(true);
      setCurrentSection(currentSection - 1);
    }
  }

  setLastScrollPosition(scrollPosition);
};

  const calculateSectionPositions = () => {
    // Check if containerRef.current is not null before using it
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('.section');
      const positions = Array.from(sections).map((section) => section.offsetTop);

      setSectionPositions(positions);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateSectionPositions);

    calculateSectionPositions();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateSectionPositions);
    };
  }, [currentSection, lastScrollPosition, sectionPositions]);

  const handleImageTransitionEnd = () => {
    setIsImageTransitioning(false);
  };

  return (
  <div className='hero-background-dark'>
    <div class="custom-shape-divider-top-1701007588">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <StyledContainer style={{ padding: '20px' }}>
      <Grid container spacing={4}>
         {/* First Column - Image */}
         <Grid item xs={12} md={6} style={{ position: 'relative' }}>
          <div
            style={{
              position: 'sticky',
              top: '20px',
              transition: 'top 0.3s ease',
            }}
          >
            {/* Check if containerRef.current is not null before using it */}
            {containerRef.current && (
              <img
                src={moreimg[currentSection]}
                alt="Scrolling Image"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '600px',
                  maxHeight: '450px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  opacity: isImageTransitioning ? 0 : 1,
                  transition: 'opacity 0.5s ease',
                }}
                onLoad={handleImageTransitionEnd}
              />
            )}
          </div>
        </Grid>

        {/* Second Column - Text */}
        <Grid item xs={12} md={6} ref={containerRef}>
          <div className="section" style={{ marginBottom: '20px' }}>
            <Paper style={{ padding: '50px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '50px', borderRadius: '5px', border: '3px solid #000' }}>
              <Typography variant="h3" style={{textAlign:'center'}} gutterBottom>
                <span className="highlight3">MORE ABOUT US</span>
              </Typography>
              <Typography variant='body1' style={{ fontSize:'20px', marginBottom:'20px' }}>
                  <p style={{ fontFamily:'handwritten, sans serif'}}>We’re all about great dining experiences, delicious Thai food, good wine, creative cocktails and a lively atmosphere.</p>

                  <p style={{ fontFamily:'handwritten, sans serif' }}>Our menu bursts with authentic hawker-style Thai dishes, capturing the essence of Thailand’s flavours. Parking is available at the nearby DFO South Wharf shopping center (ask us for a 50% discount card!), and we’re conveniently located a short walk away from Crown Casino tram stops and Southern Cross Station.</p>

                  <p style={{ fontFamily:'handwritten, sans serif' }}>Your taste buds’ journey awaits at BangPop!</p>
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '50px'}}>
              <Link href="https://bangpop.com.au/about/" target="_blank" style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained" color="primary" style={{ width: '150px', fontFamily:'handwritten, sans serif' }}>
                  MORE+
                </StyledButton>
              </Link>
            </div>
            </Paper>
          </div>

          <div className="section" style={{ marginBottom: '40px' }}>
            <Paper style={{ padding: '50px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px', border: '3px solid #000' }}>
            <Typography variant="h3" style={{textAlign:'center'}} gutterBottom>
                <span className="highlight2">INCLUSIVE DINING</span>
              </Typography>
            <Typography variant='body1' style={{ fontSize:'20px' }}>
                <p style={{ fontFamily:'handwritten, sans serif' }}>At BangPop we understand that dining with dietary requirements or allergies can be tricky and we take every step to provide the safest and simplest experience to all.</p>

                <p style={{ fontFamily:'handwritten, sans serif' }}>That’s why we have partnered with Foodini, who’s dieticians have reviewed our menu and can provide you with a personalised list of which of our menu items suit your dietary profile!</p>

                <p style={{ fontFamily:'handwritten, sans serif' }}>Diets such as vegan, keto, vegetarian and allergens such as coeliac, gluten-free, dairy-free and many more are available and searchable on the Foodini app.</p>

                <p style={{ fontFamily:'handwritten, sans serif' }}>Learn which of our incredible Thai dishes suit your profile by clicking the below.</p>
            </Typography>
            <div style={{ textAlign: 'center', marginTop: '50px'}}>
              <Link href="https://webapp.getfoodini.com/qr/1845?i=direct" target="_blank" style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained" color="primary" style={{ width: '150px', fontFamily:'handwritten, sans serif' }}>
                  FOODINI+
                </StyledButton>
              </Link>
            </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </StyledContainer>
    <br></br><br></br><br></br>
    <div class="custom-shape-divider-bottom-1701006208">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
    </div>
    </div>
  );
};
 

export default HomePage;