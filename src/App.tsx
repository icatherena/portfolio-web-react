import { Grid } from '@mui/material';

import {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

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

  const [tech, setTech] = useState([])
  
  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        setName(data.datosPersonales.nombre);
        setLastName(data.datosPersonales.apellido);
        setCareer(data.datosPersonales.profesion);
        setSummary(data.datosPersonales.descripcion);
        setTech(data.tecnologia.map((item: any)=>item))
      })
      .catch((error) => console.error(error))    
  }, [])

  return (
    <Grid container>
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
          <NavBar/>
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
      </Grid>
    </Grid>
  );
}

export default App;
