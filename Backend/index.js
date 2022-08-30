const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


/////////////////////////////////////////////////////////////////////////////////////////////////
/// CONEXION CON LA BASE DE DATOS LLAMADA "crudreact"
/// La misma posee unicamente la tabla "movie" con los campos "id, Name, Review"
const db = mysql.createPool({
    host: 'localhost', user: 'root', password: '123456', database: 'crudreact'
})




/////////////////////////////////////////////////////////////////////////////////////////////////
/// INDICA EL PUERTO EN EL CUAL EL SERVIDOR SE EJECUTARA, UTILIZANDO EXPRESS
app.listen(3001, () => {
    console.log("running on port 3001")
})




/////////////////////////////////////////////////////////////////////////////////////////////////
/// ACA SE HACEN LOS MOVIMIENTOS CON LA BASE DE DATOS
app.post("/api/insert", (req,res)=>{
    const movieName= req.body.movieName;
    const movieReview= req.body.movieReview;

    const sqlInsert = "INSERT INTO movie (Name, Review) VALUES ( ? ,  ?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        //console.log(err); 
        res.send("se guardo la pelicula en la BD")
    });
})

app.get("/api/get", (req,res)=>{
    const sqlSelect = "SELECT * FROM movie";
    db.query(sqlSelect, (err, result) => {
        //console.log(err); 
        res.send(result)
        //console.log(result); 
    });
})

app.delete("/api/delete/:id", (req,res)=>{
    const movieID= req.params.id;
    const sqlDelete = "DELETE FROM movie WHERE id = ?";
    db.query(sqlDelete, [movieID], (err, result) => {
        //console.log(err); 
        if(err)console.log("se borro la pelicula en la BD")
    });
})

app.put("/api/update", (req,res)=>{
    const id= req.body.id;
    const movieReview= req.body.review;
    const sqlDelete = "UPDATE  movie SET Review = ? WHERE id = ?";
    db.query(sqlDelete, [movieReview, id], (err, result) => {
        //console.log(err); 
        if(err)console.log("se actualizo la pelicula en la BD")
    });
})













/*app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO movie (Name, Review) VALUES ( 'HarryPotter' ,'Buena saga')";
    db.query(sqlInsert, (err, result) => {
        console.log(err); 
        res.send("se guardo")
    });
}); */