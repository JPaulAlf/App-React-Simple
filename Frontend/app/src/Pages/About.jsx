import React from 'react';
import Crear from '../Components/CRUD/Crear/Crear';
import Editar from '../Components/CRUD/Editar/Editar';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function About() {
    return (
        <div className='about'>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="left"
                style={{
                    minHeight: '100vh', maxWidth: '80vh', margin: 'auto',
                    padding: '10px'
                }}
            >
                <Typography variant="h4" color="black">DIFERENTES ACCIONES PARA EL CRUD</Typography>
                <br></br>
                <Grid item xs={12}>
                    <Crear></Crear>
                </Grid>
                <br></br>
                <br></br>
                <Grid item xs={12}>
                    <Editar></Editar>
                </Grid>

            </Grid>

        </div>
    );
}

export default About;