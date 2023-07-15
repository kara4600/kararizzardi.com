import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';

const PROJECT_EXPERIENCE = [
  {
    subheader: 'Scheme Interpreter',
    tech: 'Python',
    description:
      "Built a Scheme interpreter using Python's REPL (read, evaluate, print, loop) method to parse user input. \
      Lexical analysis and syntactical analysis functions parse Scheme tokens into the interpreter's internal Python representation of Scheme expressions. \
      The expression is then evaluated with a mutually recursive eval-apply loop. \
      The __str__ representation of the obtained value is then printed.",
  },
  {
    subheader: 'Keep Our Library Open Campaign',
    tech: 'HTML, CSS, JavaScript',
    description:
      'Built a static website to support the community-led movement fighting against the closure of our lcoal library.',
  },
  {
    subheader: 'Gradehub',
    tech: 'Swift, SwiftUI, Xcode',
    description:
      'A Swift project which allows UC Berkeley students to plan their course schedules and calculate their GPA. \
      Firebase is used for user authentication and data management.',
  },
];

export default function Projects() {
  return (
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
          flexDirection={'column'}
          rowSpacing={2}
          marginX={'auto'}
          marginY={{ xs: '50px', sm: '100px' }}
          width={{ xs: '100%', sm: '55%' }}
        >
          <Typography fontWeight={'600'} variant="h4" mb={'2vh'}>
            Projects
          </Typography>

          {PROJECT_EXPERIENCE.map(
            ({ subheader, tech, description }, key) => (
              <div>
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
                    <CardContent>
                      <List
                        disablePadding
                        sx={{
                          ml: 0,
                          listStyleType: 'disc',
                          listStylePosition: 'inside',
                        }}
                      >
                        <Typography component="div" variant="h5">
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
                    </CardContent>
                  </Box>
                </Card>
              </div>
            )
          )}
        </Grid>
      </Fade>
    </Grid>
  );
}
