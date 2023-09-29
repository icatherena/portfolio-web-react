import { Grid } from '@mui/material';

import {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Resume from './components/Resume';

import About from './components/About';
import Nav from './components/Nav';
import { ThemeProvider, useTheme } from '@emotion/react';

/* interface Tech {
  id: number,
  lenguaje: boolean,
  framework: boolean,
  libreria: boolean,
  backEnd: boolean,
  nombre: string,
  nivel: number,
}[] */

function App() {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [career, setCareer] = useState("")
  const [summary, setSummary] = useState("")

  const [linkedIn, setLinkedIn] = useState("")
  const [github, setGithub] = useState("")

  const [tech, setTech] = useState([])

  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  
  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        setName(data.datosPersonales.nombre);
        setLastName(data.datosPersonales.apellido);
        setCareer(data.datosPersonales.profesion);
        setSummary(data.datosPersonales.descripcion);
        setLinkedIn(data.datosPersonales.linkedIn);
        setGithub(data.datosPersonales.gitHub);
        setTech(data.tecnologia.map((item: any)=>item));
        setExperience(data.experiencia.map((item: any)=>item));
        setEducation(data.educacion.map((item: any)=>item))
      })
      .catch((error) => console.error(error))    
  }, [])

  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item container xs={12}
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid item xs={8}>
            <Nav/>
          </Grid>
        </Grid>
        <Grid item container xs={12}
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}        
        >
          <Grid item xs={8}>
            <About
              name={name} 
              lastName={lastName}
              career={career}
              summary={summary}
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

{/* <Grid container>
      <Grid item container
        sx={{
          w: '100vw',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Grid item lg={10}
          sx={{
            pl: '2em'
          }}
        >
          <NavBar
            linkedIn={linkedIn}
            github={github}
          />
        </Grid>
        <Grid item lg={9}
        >
          <AboutMe 
            name={name} 
            lastName={lastName}
            career={career}
            summary={summary}
          />
        </Grid>
        <Grid item lg={9}>
          <Skills tech={tech}/>
        </Grid>
        <Grid item lg={9}>
          <Resume 
            education={education}
            experience={experience}
          />
        </Grid>
      </Grid>
    </Grid> */}