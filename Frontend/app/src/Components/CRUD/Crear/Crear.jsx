import React, { useState, useEffect } from "react";
import "./Crear.css";
import Button from "@material-ui/core/Button";
import Create from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

function Crear() {
  const [movieName, setName] = useState("");
  const [movieReview, setReviewName] = useState("");

  const nombrePelicula = (e) => {
    setName(e.target.value); //extrae valor del campo de texto
  };
  const reviewPelicula = (e) => {
    setReviewName(e.target.value); //extrae valor del campo de texto
  };
  const submitReview = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        movieName: movieName,
        movieReview: movieReview,
      })
      .then(() => {
       // alert("success!");
      });
  };

  return (
    
    <div className="crear">
      <Typography variant="h5" color="black">
        Aca se crea una pelicula
      </Typography>
      <br></br>
      <Box component="form" sx={{ flexGrow: 1 }} noValidate autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Nombre" variant="outlined" fullWidth onChange={nombrePelicula}/>
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Resenia" variant="outlined" fullWidth onChange={reviewPelicula}/>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" startIcon={<Create />} onClick={submitReview}> Crear </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Crear;
