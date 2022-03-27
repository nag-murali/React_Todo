import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/todo.css";
import { useState , useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_todo, remove_todo , update_todo} from "../redux/action.js";

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Todo() {
    const [value, setValue] = useState(new Date('2022-03-18T21:11:54'));
    const handleChange = (newValue) => {
      setValue(newValue);
    };
 console.log(value)
 const date = useRef("");
 const time = useRef("");
 console.log(date);
 console.log(time)
  const [text, setText] = useState("");
  const todo = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div className="contain_outer">
    
      <div className="in_btn_todo">
        <Stack spacing={2} direction="row">
          <TextField
          className="white"
            id="outlined-basic"
            label="Add Todo "
            variant="outlined"
            size="small"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDateTimePicker
         label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => {console.log(params); 
            //   let [a, t_date] = params.inputProps["aria-label"].split("is")
            //   date.current = t_date;
            
            let  a = params.inputProps.value.split(" ");
     
            let objDate = new Date( a[0] );
            var strDate = objDate.toLocaleString("en", { day: "numeric" }) + ' ' +
            objDate.toLocaleString("en", { month: "short"  }) + ' ' +
            objDate.toLocaleString("en", { year: "numeric"});
          
            date.current = strDate;
               time.current = a[1] + " " + a[2];
            return <TextField className="white" size="small" {...params} />}}
        />
         </LocalizationProvider>

         <Button
            variant="contained"
            size="small"
            onClick={() => {
       
              let temp = {
                des: text,
                status: false,
                date: date.current,
                time: time.current
            }
              dispatch(add_todo(temp));
            }}
          >
            Add Todo
          </Button>
        </Stack>
      </div>

      <Container maxWidth="sm"  className="list_todo">
        <Grid
          container
          direction="column"
          spacing={2}
          justifyContent="flex-start"
        >
          {todo.map((each_todo, index) => {
            return (
              <Grid item alignItems="center" key={index}>
                <Paper>
                  <Grid
                    container
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item xs={6} md={8}  sx={{textDecoration: each_todo.status ? "line-through" : "none"}}  >
                      {each_todo.des}
                    </Grid>
                    
                    <Grid >
                      <Checkbox {...label}  color="success" checked = {each_todo.status ? true : false}  onChange={ (e) => {
                          if(e.target.checked){
                    
                                dispatch(update_todo({status: true}, index))
                          }else{
                            dispatch(update_todo({status: false}, index))
                          }
                      }} />
                    </Grid>
                    <Grid >
                      <IconButton aria-label="delete" color="primary" onClick={() => {
                          dispatch(remove_todo(index))
                      }}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                    <Grid item md="auto" xs="auto" >
                     Duedate : {each_todo.date}
                    </Grid>
                    <Grid >
                      Time : {each_todo.time}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
