import React, { useState } from 'react';
import { Container, List, ListItem, Paper, Typography, styled, Grid, Button, Card, CardContent } from '@mui/material';
import Link from '@mui/material/Link';
import logo from './images/bangpop-thai-restaurant-logo-full-1.webp';
import spice1 from './images/spice/bp-icons-4.png';
import spice2 from './images/spice/bp-icons-5.png';
import spice3 from './images/spice/bp-icons-6.png';
import spice4 from './images/spice/bp-icons-7.png';
import vegan1 from './images/vegan/bp-icons-2.png';
import vegan2 from './images/vegan/bp-icons-3.png';
import vegan3 from './images/vegan/vegan-icon.webp';
import vegan4 from './images/vegan/vegitarian-icon.webp';
import svgBg from './images/layered-peaks-haikei.svg';
import Footer from './Footer';
import './Home.css';

const CenteredText = styled('div')({
  display: 'flex',
  alignItems: 'flex-end', // Change this to 'flex-start' or 'center' as needed
  justifyContent: 'center',
  height: '30vh', // Adjust as needed
});

const legendItems1 = [
  { label: 'No Spice', image: spice1 },
  { label: 'Little Spice', image: spice2 },
  { label: 'Spicy', image: spice3 },
  { label: 'Extra Spicy', image: spice4 },
];

const legendItems2 = [
  { label: 'Vegetarian', image: vegan1 },
  { label: 'Vegan', image: vegan2 },
  { label: 'Vegan Option', image: vegan3 },
  { label: 'Gluten Free', image: vegan4 },
];

const StyledContainer = styled(Container)({
  paddingTop: '40px',
  paddingBottom: '40px',
});

const menuItems = [
  {
    id: 1,
    category: 'SNACKS & COCKTAIL NIBBLES',
    items: [
      { id: 11, name: 'RICE CRACKERS', 
      info: 'Deep fried seasame seed rice crackers served w/ nam phrik ta-krai jam. VG, GF', 
      price: '$6.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 12, name: 'SMOKED TROUT BETEL LEAF', 
      info: 'Smoked trout, papaya, coriander, shallots, chilli & caramelised coconut. GF', 
      price: '$5.9ea',
      spice: {
      image: spice2 
      }
      },
      { id: 13, name: 'VEGAN POMELO BETEL LEAF', 
      info: 'Pomelo, caramelised coconut, mint, cucumber, coriander, shallots & lemongrass VG, GF', 
      price: '$5.9ea',
      spice: {
      image: spice1
      }
      },
      { id: 14, name: 'RED CURRY FISH CAKES', 
      info: 'Flathead, red curry & snake bean fish cakes (5) w/ nam phrik ta-karai jam & nam jim ajaad dipping sauce GF', 
      price: '$15.9', 
      spice: {
      image: spice3 
      }
      },
      { id: 15, name: 'TOD MAN KHAO POD', 
      info: 'Thai style corn fritters (4) w/ nam jim gai dipping sauce GF, VG', 
      price: '$16.9', 
      spice: {
      image: spice1
      }
      },
      { id: 16, name: 'CAB MOO', 
      info: 'Crispy Thai pork crackle w/ chilli & lime sea salt GF', 
      price: '$5.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 17, name: 'RED CURRY CASHEWS', 
      info: 'Roasted yellow curry cashew nuts GF, VG', 
      price: '$7.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 18, name: 'PORK BELLY BAO BUN', 
      info: 'w/ green papaya, cucumber & Thai BBQ sauce', 
      price: '$6.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 19, name: 'YELLOW CURRY JACKFRUIT BAO BUN', 
      info: 'w/ pineapple, cucumber, coriander & mint VG', 
      price: '$6.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 20, name: 'GAI PING', 
      info: 'Char-grilled free-range chicken skewers (3) w/ tamarind dipping sauce & micro cress GF', 
      price: '$14.9', 
      spice: {
      image: spice1
      }
      },
    ],
  },
  {
    id: 2,
    category: 'SMALL PLATES',
    items: [
      { id: 21, name: 'FLASH FRIED SQUID', 
      info: 'w/ nam jim talay & nam jim gai dipping sauces GF', 
      price: 'sml $14.9 | lge $24.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 22, name: 'BANGKOK CHICKEN RIBS', 
      info: 'Lightly battered free-range chicken ribs, Thai black pepper caramel, toasted rice, cucumber & lime GF', 
      price: '$16.9', 
      spice: {
      image: spice1
      }
      },
      { id: 23, name: 'CHIANG MAI SAUSAGE', 
      info: 'Northern Thai, house made pickles, iceberg lettuce, chilli, coriander, cab moo and nam jim gai GF', 
      price: '$19.9', 
      spice: {
      image: spice3
      }
      },
      { id: 24, name: 'MOO GROB', 
      info: 'Crispy pork belly, peanuts, lime, red onion, Thai basil, cucumber, mustard greens & tamarind dipping sauce GF', 
      price: '$21.9', 
      spice: {
      image: spice2 
      }
      },
    ],
  },
  {
    id: 3,
    category: 'SOUPS & CURRIES',
    items: [
      { id: 31, name: 'TOM YUM SOUP', 
      info: 'Clear spicy & sour w/ lemongrass, lime leaf, baby corn, young bamboo, king brown mushrooms, cherry tomatoes, chilli, coriander & galangal.', 
      price: '$21.9', 
      spice: {
      image: spice3
      }
      },
      { id: 32, name: 'CHIANG MAI NOODLE SOUP', 
      info: 'Chiang Mai style rich curry soup w/ egg noodles, cherry tomato, young bamboo, snake beans, chilli, king brown mushrooms & free range chicken', 
      price: '$24.9', 
      spice: {
      image: spice2 
      }
      },
      { id: 33, name: 'SOFT SHELLED CRAB PAD PONG KAREE', 
      info: 'Fried soft-shelled crab, country style yellow curry sauce, celery, baby corn, ginger & snow peas', 
      price: '$34.9', 
      spice: {
      image: spice3
      }
      },
    ],
  },
  {
    id: 4,
    category: 'SEASONAL SPECIALS',
    items: [
      { id: 41, name: 'TWICE COOKED MASTER STOCK “AYLESBURY” DUCK', 
      price: 'hlf $43.9 | whl $88.9', 
      info: 'w/ sticky star anise, soy & lime sauce & stir fried Asian greens - great to share! GF',
      spice: {
      image: spice2 
      }
      },
      
      { id: 42, name: 'CARAMELISED \'BERKSHIRE\' PORK HOCK', 
      price: '$49.9', 
      info: 'w/ peanut caramel, pickled cucumbers & fresh Thai herbs - great to share!',
      spice: {
      image: spice2 
      }
      },
      { id: 43, name: 'BEEF SHORT RIBS', 
      price: '$34.9', 
      info: 'Twice cooked beef short rib w/ chilli caramel, cucumber, mint, coriander, red pepper, house pickled vegetables, bean shoots, lime & nam jim talay dipping sauce GF',
      spice: {
      image: spice2 
      }
      },
      { id: 44, name: 'BARRAMUNDI PLA SAM ROD', 
      price: '$59.9', 
      info: 'Crispy whole baby barramundi w/ Thai style chili caramel sauce, lychee, pineapple, cherry tomato, red onion & spring onion',
      spice: {
      image: spice3 
      } 
      },
      { id: 45, name: 'TAMARIND PORK RIBS', 
      price: '$24.9', 
      info: 'Twice cooked pork ribs, sticky tamarind sauce, house pickled vegetables & pineapple GF',
      spice: {
      image: spice2 
      }
      },
      { id: 46, name: 'SWIMMER CRAB FRIED RICE', 
      price: '$35.9', 
      info: 'Stir fried blue swimmer crab meat, jasmine rice, chilli jam, baby corn, cherry tomatoes, spring onion, cucumber, egg, lime & nam jim talay GF',
      spice: {
      image: spice2 
      }
    },
    ],
  },
  {
    id: 5,
    category: 'THAI TOGETHER SHARING BANQUET',
    description: '$35.9pp | Min 4 people |  Available 12:00pm – 3:00pm Monday to Friday.',
    items: [
      { id: 51, name: 'FLASH FRIED SQUID', 
      info: 'w/ nam jim talay & nam jim gai dipping sauces GF',
      spice: {
      image: spice2 
      }
      },
      { id: 52, name: 'CRISPY DUCK SPRING ROLLS', 
      info: 'Premium free-range duck mince, lemongrass and Thai basil spring rolls w/ nam jim gai dipping sauce',
      spice: {
      image: spice1 
      }
       },
      { id: 53, name: 'TOD MAN KHAO POD', 
      info: 'Thai style corn fritters w/ nam jim gai dipping sauce VG, GF', 
      spice: {
      image: spice1
      }},
      { id: 54, name: 'PAD THAI', 
      info: 'Stir fried rice noodles, tofu, egg, garlic chives, dried shrimp, pickled turnips, bean sprouts, dried chilli flakes & peanuts GF',
      spice: {
      image: spice2 
      } 
      },
      { id: 57, name: 'CURRIES', 
      info: 'Choose two curries for the table, one of each or double down on your favourite.', 
      subname2: 'GREEN CHICKEN CURRY',
      info2: 'Traditional creamy green curry w/ free range chicken, young bamboo, kaffir leaf, snake beans, baby corn, chilli & Thai basil GF',
      spice2: {
      image: spice3
      },
      subname3: 'VEGAN RED CURRY',
      info3: 'Aromatic central Thailand style curry w/ plant based chicken, lychee, pineapple, cherry tomato, snake beans, Thai basil, chilli, lime & roasted coconut VG, GF Vegan, vegetarian and gluten free items are available. This menu is halal.',
      spice3: {
      image: spice3
      }
    },
    ],
  },
];

const StyledButton = styled(Button)({
  fontSize: '1.2rem',
  marginTop: 2,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: '5px',
  border: '3px solid #fff', 
  borderImage: 'url("path/to/doodle-pattern.png") 20 round',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  transition: 'background 0.5s ease-in-out, border 0.5s ease-in-out', 

  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 0%, #FFB06B 30%, #FE6B8B 60%, #FF8E53 90%)', 
    border: '3px solid #000',
    transition: 'background 0.5s ease-in-out, border 0.5s ease-in-out', 
  },
});


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === category ? null : category
    );
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === item ? null : item
    );
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const normalText = (
    <Typography variant="body1" style={{ fontSize: '24px', fontFamily: 'handwritten, sans-serif', color: 'black', textAlign: 'center' }}>
      Click here to tailor our menu to you!
    </Typography>
  );

  const hoverText = (
    <Typography variant="body1" style={{ fontSize: '24px', fontFamily: 'handwritten, sans-serif', color: '#E30B5C', textAlign: 'center' }}>
      Click here to tailor our menu to you!
    </Typography>
  );

  const normalText1 = (
    <Typography variant="body1" style={{ fontSize: '18px', fontFamily: 'handwritten, sans-serif', color: 'black', textAlign: 'center' }}>
      Click here to see our visual menu.
    </Typography>
  );

  const hoverText1 = (
    <Typography variant="body1" style={{ fontSize: '18px', fontFamily: 'handwritten, sans-serif', color: '#E30B5C', textAlign: 'center' }}>
      Click here to see our visual menu.
    </Typography>
  );

  return (
<div className='menu-bg'>
    <StyledContainer maxWidth="lg">
      <Typography variant="h1" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center' }}>
      <CenteredText>
                  <span className='highlight1'>FOOD MENU</span>
      </CenteredText>
            </Typography>
            <Typography variant="body1" sx={{fontSize: '18px', color: 'black', textAlign:'center', fontFamily:'Georgia, serif' }}>
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}>At BangPop Melbourne our menu bursts with authentic hawker-style Thai dishes, traditional curries and street stall inspired smaller plates capturing the essence of Thailand’s flavours. </p>
            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '20px', color: 'black', fontFamily:'handwritten, sans-serif' }}>Our delicious menu is also available for takeaway and delivery.</p>
            <Link
                href="https://www.mryum.com/bangpop/menu"
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                {isHovered ? hoverText1 : normalText1}
            </Link>
    <br></br>
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', marginBottom: '30px' }}>
        <Link href="https://www.ubereats.com/au/store/bangpop/7Qhvb9_WSM6SsfDHJAfezA" target="_blank" style={{ textDecoration: 'none' }}>
          <StyledButton variant="contained" color="primary" style={{ width: '200px', fontFamily:'handwritten, sans serif' }}>
            TAKEAWAY +
          </StyledButton>
        </Link>
        <Link href="https://www.ubereats.com/au/store/bangpop/7Qhvb9_WSM6SsfDHJAfezA" target="_blank" style={{ textDecoration: 'none' }}>
          <StyledButton variant="contained" color="primary" style={{ width: '200px', fontFamily:'handwritten, sans serif' }}>
            DELIVER +
          </StyledButton>
        </Link>
        </div>
        <Paper elevation={3} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '20px', maxWidth: '800px', margin: 'auto', backgroundImage: `url(${svgBg})`, backgroundSize: 'cover', position: 'relative', borderRadius: '5px', border: '3px solid #000' }}>
      <List style={{ flex: '0 0 200px', marginRight: '20px', marginBottom: '20px' }}>
        {menuItems.map((category) => (
          <ListItem
            key={category.id}
            button
            onClick={() => handleCategoryClick(category)}
            selected={selectedCategory === category}
          >
            <Typography variant="h6" style={{ fontWeight: 'bold', fontFamily: 'buttercookie, sans-serif' }}>{category.category}</Typography>
          </ListItem>
        ))}
      </List>
      <div style={{ flex: '1' }}>
        {selectedCategory && (
          <>
             <Typography
                variant="h4"
                style={{
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  fontFamily: 'buttercookie, sans-serif',
                  color: '#FFBF00',
                  textShadow: '2px 2px 2px black', // Add a black outline
                }}
            >
              {selectedCategory.category}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '20px', fontFamily: 'handwritten, sans-serif' }}>
              {selectedCategory.description}
            </Typography>
            <List>
              {selectedCategory.items.map((item) => (
                <ListItem
                  key={item.id}
                  button
                  onClick={() => handleItemClick(item)}
                  selected={selectedItem === item}
                >
                  <Typography variant="h6" style={{fontFamily: 'honey, sans-serif' }}>{item.name}</Typography>
                </ListItem>
              ))}
            </List>
          </>
        )}
        {selectedItem && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h5" style={{ fontFamily: 'honey, sans-serif', color:'#0096FF' }}>
              {selectedItem.name}
            </Typography>
            <Typography variant="h6" style={{ color: '#8e8e8e', fontFamily: 'handwritten, sans-serif' }}>
              {selectedItem.price}
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px', fontFamily: 'handwritten, sans-serif'  }}>
              {selectedItem.info}
            </Typography>
            <div style={{ textAlign: 'center' }}>
                {selectedItem.spice && selectedItem.spice.image ? (
                  <img
                    src={selectedItem.spice.image}
                    alt="spice-logo"
                    style={{ width: '100%', maxWidth: '30px', height: 'auto', borderRadius: '50%', marginTop: '20px' }}
                  />
                ) : (
                  <div>
                  </div>
                )}
            </div>
            <Typography variant="body1" style={{ marginTop: '20px', fontFamily: 'shouter, sans-serif'  }}>
              <span style={{ fontWeight: 'bold' }}>{selectedItem.subname2}</span> 
            </Typography>
            <Typography variant="body1" style={{ marginTop: '20px', fontFamily: 'handwritten, sans-serif'  }}>
              <span>{selectedItem.info2}</span>
            </Typography>
            <div style={{ textAlign: 'center' }}>
                {selectedItem.spice2 && selectedItem.spice2.image ? (
                  <img
                    src={selectedItem.spice2.image}
                    alt="spice-logo"
                    style={{ width: '100%', maxWidth: '30px', height: 'auto', borderRadius: '50%', marginTop: '20px' }}
                  />
                ) : (
                  <div>
                  </div>
                )}
            </div>
            <Typography variant="body1" style={{ marginTop: '20px', fontFamily: 'shouter, sans-serif' }}>
            <span style={{ fontWeight: 'bold' }}>{selectedItem.subname3}</span> 
            </Typography>
            <Typography variant="body1" style={{ marginTop: '20px', fontFamily: 'handwritten, sans-serif'  }}>
              <span>{selectedItem.info3}</span>
            </Typography>
            <div style={{ textAlign: 'center' }}>
                {selectedItem.spice3 && selectedItem.spice3.image ? (
                  <img
                    src={selectedItem.spice3.image}
                    alt="spice-logo"
                    style={{ width: '100%', maxWidth: '30px', height: 'auto', borderRadius: '50%', marginTop: '20px' }}
                  />
                ) : (
                  <div>
                  </div>
                )}
            </div>
          </div>
        )}
        {!selectedCategory && !selectedItem && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '50%' }}
            />
          </div>
        )}
      </div>
    </Paper>
    <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center', marginTop:'50px' }}>
                  <span className='highlight3'>DIETARIES & SPICE</span>
    </Typography>
    <Typography variant="body1" component="div" color="textPrimary" style={{ color: 'black', textAlign: 'center' }}>
                  <p style={{ fontFamily:'handwritten, sans serif', fontSize: '24px'}}>Do you have an intolerance or an allergy?</p>
    </Typography>
    <Link
      href="https://webapp.getfoodini.com/qr/1845?i=direct"
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      {isHovered ? hoverText : normalText}
    </Link>
    <div>
    <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center', marginTop:'50px' }}>
    <span className='highlight6'>The Spice Boys</span>
      </Typography>
      <Grid container spacing={2}>
        {legendItems1.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Paper style={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '5px', border: '3px solid #000' }}>
              <img src={item.image} alt={item.label} style={{ width: 50, height: 50, marginBottom: 5 }} />
              <Typography variant="body1"><p style={{ fontFamily:'handwritten, sans serif'}}>{item.label}</p></Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
    <div>
    <Typography variant="h3" component="div" color="textPrimary" style={{ color: '#fff', textAlign: 'center', marginTop:'50px' }}>
    <span className='highlight9'>Dietary Tags</span>
      </Typography>
      <Grid container spacing={2}>
        {legendItems2.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Paper style={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '5px', border: '3px solid #000' }}>
              <img src={item.image} alt={item.label} style={{ width: 50, height: 50, marginBottom: 5 }} />
              <Typography variant="body1"><p style={{ fontFamily:'handwritten, sans serif'}}>{item.label}</p></Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
      <Typography paragraph>
        <br></br>
        <p style={{ fontFamily:'handwritten, sans serif', textAlign: 'center', fontSize: '24px'}}>15% surcharge applies on public holidays</p><br></br>
        <p style={{ fontFamily:'handwritten, sans serif', textAlign: 'center',  fontSize: '24px'}}>A surcharge of 1.1% applies to all Master Card and Visa transactions and a surcharge</p><br></br>
        <p style={{ fontFamily:'handwritten, sans serif', textAlign: 'center',  fontSize: '24px'}}>of 1.5% applies to all AMEX transactions.</p>
        <br></br><br></br><br></br><br></br><br></br>
      </Typography>
  </StyledContainer> 
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

const MenuPage = () => {
  return (
    <>
    <Menu/>
    <Footer/>
    </>
  );
}


export default MenuPage;