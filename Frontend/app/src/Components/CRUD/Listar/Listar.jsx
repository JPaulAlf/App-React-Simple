import React, { useState, useEffect } from "react";
import "./Listar.css";
import Axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import Settings from "@material-ui/icons/Settings";



export default function Listar({setId, setName, setReview}) {
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      //console.log(response.data);
      setmovieReviewList(response.data);
    });
  });
  const [movieReviewList, setmovieReviewList] = useState();

  const deleteMovie= (id)=>{
    Axios.delete(`http://localhost:3001/api/delete/${id}`)
  }
  const movieParams = (id, name, review) =>{
    setId(id);
    setName(name);
    setReview(review);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Review</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieReviewList?.map((val) => (
            <TableRow key={val.id} >
              <TableCell align="left">{val.id}</TableCell>
              <TableCell align="right">{val.Name}</TableCell>
              <TableCell align="right">{val.Review}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => {deleteMovie(val.id)}}>  </Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="warning" startIcon={<Settings />} onClick={() => movieParams(val.id, val.Name, val.Review)}>  </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}











// function Listar() {
//   useEffect(() => {
//     Axios.get("http://localhost:3001/api/get").then((response) => {
//      // console.log(response.data);
//       setmovieReviewList(response.data);
//     });
//   });
//   const [movieReviewList, setmovieReviewList] = useState();

//   return (
//     <div>
//       {movieReviewList?.map((val) => {
//         return (
//           <p>
//             ID: {val.id} | Name: {val.Name} | Review: {val.Review}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// export default Listar;
