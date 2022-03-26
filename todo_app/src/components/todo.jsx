import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import "../styles/todo.css";
import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {add_todo} from "../redux/action.js";

export function Todo(){
  const [text, setText] = useState("");
  const todo = useSelector( (store) => store );
  const dispatch = useDispatch();
   return (
       <div>
           <div className='in_btn_todo'>
           <Stack spacing={2} direction="row">
           <TextField id="outlined-basic" label="Add Todo " variant="outlined" onChange={ (e) =>{
               setText(e.target.value);
           }}/>
           <Button variant="contained" onClick={ () => {
               console.log(text);
               dispatch(add_todo(text))
           }} >Add Todo</Button>
           </Stack>
           </div>
     <Container  maxWidth="sm" sx={{border: "1px solid blue"}}>
           <Grid container direction="column" spacing={2}>

           <Grid item >
                   <Paper>
                       <Grid container justifyContent="space-around">
                           <Grid item xs={6} md={8}>
                             todo
                           </Grid>

                           <Grid md={1}>
                            delete
                           </Grid>
                           <Grid md={1}>
                            delete
                           </Grid>
                           <Grid md={1}>
                            delete
                           </Grid>
                       </Grid>
                       something
                   </Paper>
               </Grid>
                
               <Grid  item>
                   <Paper>
                       something
                   </Paper>
               </Grid>
               
    
      </Grid>
              {/* {todo.map( (each_todo) => {
                
              })} */}
        </Container>
       </div>
   );
}