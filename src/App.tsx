import { Grid } from '@mui/material';

import { useEffect, useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Heroe from './components/Heroe';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

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

  const [country, setCountry] = useState("")
  const [province, setProvince] = useState("")

  const [email, setEmail] = useState("")

  const [linkedIn, setLinkedIn] = useState("")
  const [github, setGithub] = useState("")

  const [resume, setResume] = useState('')

  const [tech, setTech] = useState([])

  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])

  const [projects, setProjects] = useState([])

  const [hasShadow, setHasShadow] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true)
    } else {
      setHasShadow(false)
    }
  }

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
        setTech(data.tecnologia.map((item: any) => item));
        setExperience(data.experiencia.map((item: any) => item));
        setEducation(data.educacion.map((item: any) => item));
        setCountry(data.datosPersonales.pais);
        setProvince(data.datosPersonales.provincia);
        setEmail(data.datosPersonales.email);
        setResume(data.datosPersonales.resume);
        setProjects(data.proyecto)
      })
      .catch((error) => console.error(error))
    window.addEventListener('scroll', handleScroll)
  }, [])

  const location: String[] = []
  location.push(country, province)

  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {hasShadow ? (
          <Grid item container xs={12}
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 10,
            backgroundColor: '#fff',
            boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.5s ease-in-out',
          }}
        >
          <Grid item xs={8}>
            <Nav/>
          </Grid>
        </Grid>
        ) : (
        <Grid item container xs={12}
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 10,
            backgroundColor: '#fff',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.5s ease-in-out',
          }}
        >
          <Grid item xs={8}>
            <Nav />
          </Grid>
        </Grid>
        )}
        <Grid item container xs={12}
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '6em'
          }}
        >
          <Grid item xs={8}>
            <Heroe
              name={name}
              lastName={lastName}
              career={career}
              summary={summary}
              resume={resume}
            />
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
            <About />
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
            <Skills
              tech={tech}
            />
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
            <Resume
              education={education}
              experience={experience}
            />
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
            <Projects
              projects={projects}
            />
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
            <Contact
              location={location}
              email={email}
              github={github}
              linkedIn={linkedIn}
            />
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
          <Grid item xs={12}>
            <Footer
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;