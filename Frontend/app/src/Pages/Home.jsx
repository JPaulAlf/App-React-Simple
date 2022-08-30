import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';


function Home() {
    return (
        <div className='home'>
            <Typography variant='h3' color='black'>Bienvenidos, esto es una aplicacion CRUD MySQL</Typography>
            <Typography variant='body1' paragraph>Feel free to browse around and learn more about me.</Typography>
            <Button variant="contained" color="primary" startIcon={<Delete />}>Este es un boton</Button>
            <Button variant="contained" color="secondary" startIcon={<Delete />}>Este es un boton</Button>

        </div>
    );
}

export default Home;