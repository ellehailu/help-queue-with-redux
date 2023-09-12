import * as c from './../actions/ActionTypes';

//store our constants in the c variable
const reducer = (state = false, action) => {
    switch (action.type) {
        case c.TOGGLE_FORM:
            return !state;
          default:
            return state;
          }
        };
  
  export default reducer;