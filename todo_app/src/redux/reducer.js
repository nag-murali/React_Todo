import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionTypes";

const init_todo = [{
    des: "Finalize the presentation ",
    status: false,
    date: " 20 Mar 2022",
    time: "4:00 pm"
},{
    des: "Book flight  ",
    status: true,
    date: " 22 Mar 2022",
    time: "9:00 am"
},{
    des: "Finish design for new website ",
    status: false,
    date: " 29 Mar 2022",
    time: "4:00 pm"
}
];

export const reducer_todo = (store = init_todo, action) => {

    switch (action.type){

        case ADD_TODO : 
         return  [...store, action.payload];
        
         case REMOVE_TODO :
          
             let temp = store.filter( (item, indx) => {
                if(indx !== action.payload){
                    return item;
                }
             })
             return  [...temp];
         case UPDATE_TODO :
              
             let temp2 = store.filter( (item, indx) => {
                  if(indx == action.index){
                      item.status = action.payload.status
                  }
                  return item;
              });
              return  [...temp2];
         default : 
         return store;
    }
}