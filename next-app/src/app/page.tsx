import * as React from 'react';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';

const PAYPAL_EXPERIENCE = [
  {
    subheader: 'Backend Developer',
    points: [
      'Developing payment processing solutions utilizing Java EE technologies (Java, application servers, servlet containers, JMS, JPA, Spring MVC, Hibernate)',
    ],
  },
];

const BERKELEYTIME_EXPERIENCE = [
  {
    subheader: 'Frontend Developer',
    points: [
      'Berkeleytime helps over 40,000 UC Berkeley students plan for course enrollment & check grade distributions',
      'Redesigned berkeleytime.com homepage (viewed by 20k+ users per month) using React.js, CSS, and HTML',
    ],
  },
];

const KEYSIGHT_EXPERIENCE = [
  {
    subheader: 'ServiceNow Developer',
    points: [
      'Developed an IT service chatbot using conversational AI and natural language understanding',
      'Implemented functionality for users to conversationally submit IT tickets, improving the user experience for thousands of end-users and supporting 14k+ tickets per month (custom process built using JavaScript)',
      'Acted as a Technical Architect & functional lead, providing direction to development team & assisting product owner in planning work to strategize & build out the product vision',
      'Worked with product management & cross functional teams to define architectural visions that align business and IT strategies with software implementations',
    ],
  },
];

const KEYSIGHT_INTERN_EXPERIENCE = [
  {
    subheader:
      'Fullstack developer on Agile software development team (order management system)',
    points: [
      'Worked closely with stakeholders and project owner to design UI/UX using Figma',
      'Built out responsive frontend using React and Material UI',
      'Reduced Webpack bundle size by 48%',
      'Optimized Rest API resulting in a 54% speed increase',
      'Designed authentication & authorization system flow',
      'Setup SSO authentication using Microsoft Azure',
    ],
  },
  {
    subheader:
      'Backend developer on Agile software development team (automated server provisioning)',
    points: [
      'Developed automation tooling to improve deployment processes',
      'Wrote and maintained unit tests',
      'Wrote Chef Inspec scripts to audit & test infrastructure',
      'Exposure to computer networking, cloud platforms, and virtualization technologies',
    ],
  },
];

const GWC_EXPERIENCE = [
  {
    subheader: 'Frontend developer on a team with 12 other girls',
    points: [
      'Built website to support the community-led "Keep Our Library Open" campaign to fight against the closure of our local library',
      'Designed UI using Figma',
      'Advocated for the importance of women in technology',
    ],
  },
];

export default function HomePage() {
  return (
    <div>
      <Grid
        container
        direction={'column'}
        width={{ xs: '85vw', sm: '70%' }}
        marginX={'auto'}
      >
        <Fade in timeout={1750}>
          <Grid
            container
            item
            justifyContent={'center'}
            marginX={'auto'}
            marginY={{ xs: '50px', sm: '100px' }}
            width={{ xs: '100%', sm: '75%', xl: '60%' }}
          >
            <Grid item>
              <Typography fontWeight={'600'} variant="h3">
                Hi there, my name is Kara Rizzardi! <br /> I'm a software
                engineer based in the SF Bay Area.{' '}
                {/* <Link
                  href={'https://youtu.be/mfebpLfAt8g?t=2'}
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    fontWeight={'600'}
                    variant="h6"
                    sx={{
                      color: '#2196f3',
                      '&:hover': {
                        color: '#3B7EA1',
                        textDecoration: 'underline',
                      },
                      display: 'inline-block',
                    }}
                  >
                    <sup>(go bears!)</sup>
                  </Typography>
                </Link> */}
              </Typography>
            </Grid>

            <Grid container item mt={'10vh'} mr={'auto'}>
              <Typography fontWeight={'600'} variant="h4" gutterBottom>
                More about me
              </Typography>

              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent>
                    <Typography fontWeight={600} gutterBottom>
                      I'm a graduate from UC Berkeley{' '}
                      <Link
                        href={'https://youtu.be/mfebpLfAt8g?t=2'}
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        sx={{
                          color: '#2196f3',
                          '&:hover': {
                            color: '#0c7cd5',
                            textDecoration: 'underline',
                          },
                          display: 'inline-block',
                        }}
                      >
                        (go bears!)
                      </Link>{' '}
                      who studied Electrical Engineering & Computer Science. I
                      enjoy learning about + using new technologies and have an
                      interest in fullstack development. I'm extra passionate
                      about frontend development and creating good UI/UX
                      experiences along with building scalable, secure, and
                      high-performance backend systems.
                    </Typography>
                    <Typography fontWeight={600}>
                      Most of my free time is spent doing yoga (vinyasa, not
                      bikram) and making music. I played the clarinet for 6
                      years, but nowadays I like to focus on guitar & piano. I
                      have a youtube channel where I like to post covers and
                      original compositions for fun.
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>

            <Grid container item mt={'10vh'} mr={'auto'}>
              <Typography fontWeight={'600'} variant="h4" gutterBottom>
                My experience
              </Typography>

              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                  mb: '4vh',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    <Image
                      src="/paypal.png"
                      width={100}
                      height={100}
                      alt="Company logo"
                    />
                  </CardContent>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight={600}>
                      PayPal
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Software Engineer I
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: 'disc',
                      }}
                    >
                      {PAYPAL_EXPERIENCE.map(({ subheader, points }, key) => (
                        <div>
                          <ListSubheader
                            disableGutters
                            sx={{
                              lineHeight: '24px',
                              fontWeight: 600,
                              fontSize: '16px',
                              color: 'black',
                              py: 1,
                            }}
                          >
                            {subheader}
                          </ListSubheader>
                          {points.map((point) => (
                            <ListItem
                              disableGutters
                              disablePadding
                              sx={{
                                display: 'list-item',
                                mb: '0.5vh',
                                ml: '1em',
                              }}
                            >
                              {point}
                            </ListItem>
                          ))}
                        </div>
                      ))}
                    </List>
                    <CardContent
                      sx={{
                        display: { sm: 'none' },
                        width: 'fit-content',
                        mx: 'auto',
                      }}
                    >
                      {
                        <Image
                          src={'/keysight.png'}
                          width={200}
                          height={200}
                          alt="Company logo"
                        />
                      }
                    </CardContent>
                  </CardContent>
                </Box>
              </Card>

              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                  mb: '4vh',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    <Image
                      src="/keysight.png"
                      width={100}
                      height={100}
                      alt="Company logo"
                    />
                  </CardContent>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight={600}>
                      Keysight Technologies
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      IT Software Engineer
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: 'disc',
                      }}
                    >
                      {KEYSIGHT_EXPERIENCE.map(({ subheader, points }, key) => (
                        <div>
                          <ListSubheader
                            disableGutters
                            sx={{
                              lineHeight: '24px',
                              fontWeight: 600,
                              fontSize: '16px',
                              color: 'black',
                              py: 1,
                            }}
                          >
                            {subheader}
                          </ListSubheader>
                          {points.map((point) => (
                            <ListItem
                              disableGutters
                              disablePadding
                              sx={{
                                display: 'list-item',
                                mb: '0.5vh',
                                ml: '1em',
                              }}
                            >
                              {point}
                            </ListItem>
                          ))}
                        </div>
                      ))}
                    </List>
                    <CardContent
                      sx={{
                        display: { sm: 'none' },
                        width: 'fit-content',
                        mx: 'auto',
                      }}
                    >
                      {
                        <Image
                          src={'/keysight.png'}
                          width={200}
                          height={200}
                          alt="Company logo"
                        />
                      }
                    </CardContent>
                  </CardContent>
                </Box>
              </Card>

              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                  mb: '4vh',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    <Image
                      src="/bt.png"
                      width={100}
                      height={100}
                      alt="Company logo"
                    />
                  </CardContent>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight={600}>
                      Berkeleytime
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Software Engineer
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: 'disc',
                      }}
                    >
                      {BERKELEYTIME_EXPERIENCE.map(({ subheader, points }, key) => (
                        <div>
                          <ListSubheader
                            disableGutters
                            sx={{
                              lineHeight: '24px',
                              fontWeight: 600,
                              fontSize: '16px',
                              color: 'black',
                              py: 1,
                            }}
                          >
                            {subheader}
                          </ListSubheader>
                          {points.map((point) => (
                            <ListItem
                              disableGutters
                              disablePadding
                              sx={{
                                display: 'list-item',
                                mb: '0.5vh',
                                ml: '1em',
                              }}
                            >
                              {point}
                            </ListItem>
                          ))}
                        </div>
                      ))}
                    </List>
                    <CardContent
                      sx={{
                        display: { sm: 'none' },
                        width: 'fit-content',
                        mx: 'auto',
                      }}
                    >
                      {
                        <Image
                          src={'/keysight.png'}
                          width={200}
                          height={200}
                          alt="Company logo"
                        />
                      }
                    </CardContent>
                  </CardContent>
                </Box>
              </Card>

              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                  mb: '4vh',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    <Image
                      src="/keysight.png"
                      width={100}
                      height={100}
                      alt="Company logo"
                    />
                  </CardContent>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight={600}>
                      Keysight Technologies
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Software Engineer Intern
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: 'disc',
                      }}
                    >
                      {KEYSIGHT_INTERN_EXPERIENCE.map(
                        ({ subheader, points }, key) => (
                          <div>
                            <ListSubheader
                              disableGutters
                              sx={{
                                lineHeight: '24px',
                                fontWeight: 600,
                                fontSize: '16px',
                                color: 'black',
                                py: 1,
                              }}
                            >
                              {subheader}
                            </ListSubheader>
                            {points.map((point) => (
                              <ListItem
                                disableGutters
                                disablePadding
                                sx={{
                                  display: 'list-item',
                                  mb: '0.5vh',
                                  ml: '1em',
                                }}
                              >
                                {point}
                              </ListItem>
                            ))}
                          </div>
                        )
                      )}
                    </List>
                    <CardContent
                      sx={{
                        display: { sm: 'none' },
                        width: 'fit-content',
                        mx: 'auto',
                      }}
                    >
                      {
                        <Image
                          src={'/keysight.png'}
                          width={200}
                          height={200}
                          alt="Company logo"
                        />
                      }
                    </CardContent>
                  </CardContent>
                </Box>
              </Card>

              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardContent sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    <Image
                      src="/gwc.jpeg"
                      width={100}
                      height={100}
                      alt="Company logo"
                    />
                  </CardContent>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight={600}>
                      Girls Who Code
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Club Member
                    </Typography>
                    <List
                      disablePadding
                      sx={{
                        listStyleType: 'disc',
                      }}
                    >
                      {GWC_EXPERIENCE.map(({ subheader, points }, key) => (
                        <div>
                          <ListSubheader
                            disableGutters
                            sx={{
                              lineHeight: '24px',
                              fontWeight: 600,
                              fontSize: '16px',
                              color: 'black',
                              py: 1,
                            }}
                          >
                            {subheader}
                          </ListSubheader>
                          {points.map((point) => (
                            <ListItem
                              disableGutters
                              disablePadding
                              sx={{
                                display: 'list-item',
                                mb: '0.5vh',
                                ml: '1em',
                              }}
                            >
                              {point}
                            </ListItem>
                          ))}
                        </div>
                      ))}
                    </List>
                    <CardContent
                      sx={{
                        display: { sm: 'none' },
                        width: 'fit-content',
                        mx: 'auto',
                      }}
                    >
                      {
                        <Image
                          src={'/gwc.jpeg'}
                          width={200}
                          height={200}
                          alt="Company logo"
                        />
                      }
                    </CardContent>
                  </CardContent>
                </Box>
              </Card>

              <Typography fontWeight={'600'} variant="h4" mt={'4vh'}>
                Resume
              </Typography>
              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ width: '100%' }}>
                    <List
                      disablePadding
                      sx={{
                        ml: 0,
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                      }}
                    >
                      <Typography variant="h6" fontWeight={600} mb={'2vh'}>
                        To read more about my experience & skills, check out my
                        resume below!
                      </Typography>
                    </List>
                    <Box sx={{ width: 'fit-content', mx: 'auto' }}>
                      <Link href="/Kara_Rizzardi_Resume.pdf" target="_blank">
                        <Button
                          variant="contained"
                          size="large"
                          sx={{ bgcolor: '#2196f3' }}
                        >
                          Resume
                        </Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Box>
              </Card>

              <Typography
                fontWeight={'600'}
                variant="h4"
                mt={'4vh'}
                gutterBottom
              >
                Projects
              </Typography>
              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  padding: '2vh',
                  borderRadius: 2,
                  width: '100%',
                  mb: '4vh',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ width: '100%' }}>
                    <List
                      disablePadding
                      sx={{
                        ml: 0,
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                      }}
                    >
                      <Typography variant="h6" fontWeight={600} mb={'2vh'}>
                        Check out some of the projects I've worked on below!
                      </Typography>
                    </List>
                    <Box sx={{ width: 'fit-content', mx: 'auto' }}>
                      <Link href="/projects">
                        <Button
                          variant="contained"
                          size="large"
                          sx={{ bgcolor: '#2196f3' }}
                        >
                          Projects
                        </Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
}
