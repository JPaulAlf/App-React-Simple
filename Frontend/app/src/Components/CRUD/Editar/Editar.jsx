import React, { useState, useEffect } from "react";
import "./Editar.css";
import Button from "@material-ui/core/Button";
import Edit from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Listar from "../Listar/Listar";
import Axios from "axios";

function Editar() {

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [newReview, setNewReview] = useState("")

  const newReviewPelicula = (e) => {
    setNewReview(e.target.value); //extrae valor del campo de texto
  };
  const updateMovie = (id) => {
    Axios.put(`http://localhost:3001/api/update`, {
      id: id,
      review: newReview
    });
    setNewReview('')
  }

  return (
    <div className="editar">
      <Typography variant="h5" color="black">
        Aca se edita una pelicula
      </Typography>
      <br></br>
      <Box component="form" sx={{ flexGrow: 1 }} noValidate autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={12} container>
            <Listar setId={setId} setName={setName} setReview={setReview}></Listar>
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" disabled  label="Nombre" variant="outlined" fullWidth value={name}/>
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Resenia" variant="outlined" fullWidth onChange={newReviewPelicula}/>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="secondary" startIcon={<Edit />} onClick={() => {updateMovie(id)}}> Sobreescribir </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Editar;
