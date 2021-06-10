import {SCHOOLDATA} from "../../constants/actions";
 
export const initialState = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
    behaviours :  [],
    order: false
};
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
 
      case SCHOOLDATA:
        
        return {
          ...state,
          students
          
        };
  
      case 'RESET':
  
        return initialState;
  
      default:
        return state;
    }
  }
 
  export default reducer;