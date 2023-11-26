// AboutUs.js
import React from 'react';
import { Container, Card, CardContent, Typography, Grid, Paper, styled } from '@mui/material';
import Footer from './Footer';
import cardBg1 from './images/blob-scene-haikei.svg';
import cardBg2 from './images/blob-scene-haikei-1.svg';
import cardBg3 from './images/wave-haikei-3.svg';
import './Home.css';

const aboutUsData = [
  {
    title: 'GET A TASTE OF THAI HAWKER FOOD IN MELBOURNE',
    content: 'If you’re searching for delicious Thai hawker food in Melbourne, BangPop is the place to go. Delighting Melbournians with amazing taste sensations, we offer a huge variety of succulent Thai dishes, all made with seasonal ingredients sourced locally or straight from Thailand.',
  },
  {
    title: 'THE HEART OF THAILAND IN THE MIDDLE OF MELBOURNE',
    content: 'If you’ve ever been to Thailand, you’ll be familiar with the energy and excitement that sizzles through your veins as you wander through Bangkok’s hawker stands. If you’ve yet to make the trip, let BangPop give you a preview! Sit back, relax, and let us tantalise your taste buds as you enjoy great food and company.',
  },
  {
    title: 'HOW DID WE GET OUR NAME?',
    content: '‘Bang’ is the Thai word for a village situated on a stream, and ‘Pop’ refers to the bold flavours, vibrant colours and larger-than-life personality found in our Yarra-side restaurant. When you combine the two, it only makes sense that our guests can enjoy a truly immersive Thai experience in our colourful restaurant, conveniently situated along the South Wharf Promenade.',
  },
];

const CenteredText = styled('div')({
  display: 'flex',
  alignItems: 'flex-end', // Change this to 'flex-start' or 'center' as needed
  justifyContent: 'center',
  height: '30vh', // Adjust as needed
});


const About = () => {
  return (
<div className='about-bg'>
    <Container maxWidth="xl">
     <CenteredText>
        <Typography variant="h1" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center' }}>
          <span className='highlight2'>ABOUT US</span>
        </Typography>
     </CenteredText>

    <Grid container spacing={4} style={{ marginTop: '1rem' }}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '2rem', backgroundImage: `url(${cardBg1})`, backgroundSize: 'cover', position: 'relative' }}>
          <Typography variant="h2" align="center" style={{ color: '#fff', textAlign: 'center' }} gutterBottom>
          <span className='highlight6'>BANGPOP FRESH, FRAGRANT & FUN!</span>
          </Typography>
          <Typography paragraph>
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}>BangPop is more than just a name, it’s the essence of Melbourne’s most vibrant Thai dining experience.</p>

            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}>Infused with a cheerful “no worries” vibe and splashed with vivid hues, BangPop welcomes everyone with open arms, embracing the lively spirit of Thai street food. Our meticulously crafted menu is a delightful mix of classic Thai salads, rich curries and hawker-inspired creations. The highlight? The fusion of authentic Thai flavours with the finest Australian produce. Pair that with our signature cocktails, and your palate is in for a treat.</p>
          
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}>Nestled by the Yarra River, BangPop offers an unmatched ambience. Enjoy a picturesque view of the Melbourne city skyline as you sip on our artisanal cocktails and savour the burst of fresh spices. At BangPop we’re serious about food, not formality. So sit back, relish the atmosphere and let the flavours transport you to the bustling streets of Thailand.</p>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>
    <Container maxWidth="xl" style={{ marginTop: '2rem' }}>
  <Grid container spacing={3}>
    {aboutUsData.map((item, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundImage: `url(${cardBg3})`, backgroundSize: 'cover', position: 'relative' }}>
          <CardContent style={{ flex: 1 }}>
            <Typography variant="h3" component="div" style={{ color: '#fff', textAlign: 'center' }} gutterBottom>
              <span className='highlight7'>{item.title}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '18px', color: 'black', fontFamily: 'handwritten, sans-serif' }}>{item.content}</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>
    <Container maxWidth="xl" style={{ marginTop: '2rem' }}>
    <Grid container spacing={4} style={{ marginTop: '1rem' }}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '2rem', backgroundImage: `url(${cardBg2})`, backgroundSize: 'cover', position: 'relative' }}>
          <Typography variant="h2" align="center" gutterBottom>
          <span className='highlight8'> NOT JUST GREAT FOOD!</span>
          </Typography>
          <Typography paragraph>
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}> At BangPop, it’s not just about the food, we are also a great spot for a casual drink whilst taking in the city view. We take pride in our diverse selection of beverages, carefully curated to compliment your dining journey. Whether you’re a wine guy, cocktail connoisseur or simply just for a refreshing brew you may not have seen elsewhere, we’ve got something to please every palate.</p>

            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}><b>Wines:</b> Our wine list features the best of Australian and international vineyards, offering a rich tapestry of reds, whites, and sparkling wines.</p>
          
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}><b>Cocktails:</b> Dive into a world of mixology with our expertly crafted cocktails. From timeless classics like Espresso Martinis, Margaritas, Mojitos or Pina Coladas to our super colourful and tasty signature Thai-inspired creations, each drink is designed to surprise and delight, adding an extra layer of enjoyment to your visit.</p>

            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}><b>Beer:</b> Choose from our cold tap beers or explore our selection of canned and bottled options, spanning both local and international brews. It’s an invitation to savour the moment with friends and family.</p>

            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}><b>Non-Alcoholic Options:</b> We believe that everyone deserves a great beverage, which is why we offer an array of no and low-alcohol options. Experience the same level of quality and flavour in our non-alcoholic wines and beers, thoughtfully chosen to enhance everyone’s dining experience.</p>

            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}><b>Thai-Inspired Mocktails:</b> Transport your taste buds to the vibrant streets of Thailand with our Thai-inspired mocktails. These delightful concoctions capture the essence of Thai culture and street food, ensuring a burst of flavour in every sip.</p>

            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}>So, whether you’re celebrating or simply looking to unwind, our extensive beverage selection at BangPop is here to elevate your experience. </p>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <div class="custom-shape-divider-bottom-1701006208">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
    </div>
    <br></br>
</div>
  );
};

const AboutPage = () => {
  return (
    <>
    <About />
    <Footer />
  </>
  );
}

export default AboutPage;