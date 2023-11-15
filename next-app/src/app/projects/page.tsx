import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import Image from 'next/image';

const PROJECT_EXPERIENCE = [
  {
    subheader: 'Berkeleytime',
    tech: 'TypeScript, Vite, React, Redux, CSS',
    description:
      'From course planning to checking out grade distributions and viewing enrollement trends, \
       Berkeleytime.com is a popular student-run academic planning website used by thousands of UC Berkeley students each semester. \
       The project is maintained by student volunteers who want to help keep Berkeleytime alive.',
    image: '/bt.png',
  },
  {
    subheader: 'Project SIXT33N',
    tech: 'NumPy, Jupyter Notebook, Arduino, Machine Learning',
    description:
      'SIXT33N is a voice-controlled robot car that can recognize 4 different voice commands. \
      It can move forward, left or right based on those commands.\
      It uses a microphone front end circuit integrated with processing integration and PCA classification through an Arduino. \
      Controls were implemented by gathering open loop parameters and deriving a method to set desired eigenvalues that allow the car to automatically correct itself to drive straight and turn. \
      This project taught me more about machine learning and hardware (I spent a lot of time debugging circuits).',
    image: '/SIXT33N.jpg',
  },
  {
    subheader: 'Scheme Interpreter',
    tech: 'Python',
    description:
      "Built a Scheme interpreter using Python's REPL (read, evaluate, print, loop) method to parse user input. \
      Lexical analysis and syntactical analysis functions parse Scheme tokens into the interpreter's internal Python representation of Scheme expressions. \
      The expression is then evaluated with a mutually recursive eval-apply loop. \
      The __str__ representation of the obtained value is then printed.",
    image: '/scheme.png',
  },
  {
    subheader: 'Keep Our Library Open Campaign',
    tech: 'HTML, CSS, JavaScript',
    description:
      'Built a static website to support & spread awareness for the community-led movement fighting against the closure of our local library.',
    image: '/gwc.jpeg',
  },
  {
    subheader: 'Gradehub',
    tech: 'Swift, SwiftUI, Xcode',
    description:
      'A Swift project which allows UC Berkeley students to plan their course schedules and calculate their GPA. \
      Firebase is used for user authentication and data management.',
    image: '/swift-og.png',
  },
  {
    subheader: 'Kararizzardi.com',
    tech: 'Typescript, Next.js, MUI, Docker, Nginx',
    description:
      "This is site you're on right now! My personal website uses Typescript with Next.js 13 and MUI. \
      Docker is used to run the Next.js app and Nginx in separate containers with Docker Compose. \
      Nginx serves as a reverse-proxy in front of the Next.js app and is also used to cache all the static assets; it passes all requests to the Next.js app's container. \
      As of now, this project is deployed using an Ubuntu server on a DigitalOcean droplet (though I'm considering other options).",
    image: '',
  },
];

export default function Projects() {
  return (
    <Grid
      container
      direction={'column'}
      width={{ xs: '85%', sm: '70%' }}
      marginX={'auto'}
    >
      <Fade in timeout={1750}>
        <Grid
          container
          item
          justifyContent={'center'}
          flexDirection={'column'}
          rowSpacing={2}
          marginX={'auto'}
          marginY={{ xs: '50px', sm: '100px' }}
          width={{ xs: '100%', sm: '70%' }}
        >
          <Typography fontWeight={'600'} variant="h4" mb={'2vh'}>
            Projects
          </Typography>

          {PROJECT_EXPERIENCE.map(
            ({ subheader, tech, description, image }, key) => (
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
                    {image && (
                      <Image
                        src={image}
                        width={150}
                        height={150}
                        alt="Project logo"
                      />
                    )}
                  </CardContent>
                  <CardContent>
                    <List
                      disablePadding
                      sx={{
                        ml: 0,
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                      }}
                    >
                      <Typography component="div" fontWeight={600} variant="h5">
                        {subheader}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {tech}
                      </Typography>
                      <Typography>{description}</Typography>
                    </List>
                    <CardContent
                      sx={{
                        display: { sm: 'none' },
                        width: 'fit-content',
                        mx: 'auto',
                      }}
                    >
                      {image && (
                        <Image
                          src={image}
                          width={200}
                          height={200}
                          alt="Project logo"
                        />
                      )}
                    </CardContent>
                  </CardContent>
                </Box>
              </Card>
            )
          )}
        </Grid>
      </Fade>
    </Grid>
  );
}
