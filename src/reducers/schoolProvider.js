import { SCHOOLDATA, REORDER, INCREMENT, DECREMENT } from "../../constants/actions";

import { average } from "../../actions/actions-types"

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
  behaviours: [],
  order: false
};

const deepCopieStudents = students => {

  return  students.map(student=>({...student}));

  

}

const reducer = (state = initialState, action) => {
  let students;
  switch (action.type) {

    case SCHOOLDATA:

      return {
        ...state,
        students

      }

    case REORDER:
      students = deepCopieStudents(state.students);
      students.sort((a, b) => (state.sens ? 1 : -1) * (average(a.notes) - average(b.notes)));

      return {
        ...state,
        students,
        sens: !state.sens
      }

    case INCREMENT:
      students = deepCopieStudents(state.students);
      student = { ...students.find(s => s.id ) };
      student.attendance++;
      console.log("student.attendance", student)

      students = students.map( s => {
        if ( s.id != student.id ) return s;
        return student;
     });

      return {
        ...state,
        students: students
        
      }

    case DECREMENT:
      students = deepCopieStudents(state.students);

      student = { ...students.find(s => s.id ) };
      if(students.attendance > 0 ) {
        student.attendance--;

      } else {
        alert("Vous ne pouvez pas drecrementer en dessous de zero(0)")
      }
      
      console.log("student.attendance", student)

      students = students.map( s => {
        if ( s.id != student.id ) return s;
        return student;
     });

      return {
        ...state,
        students: students
        
      }


    case 'RESET':

      return initialState;

    default:
      return state;
  }
}

export default reducer;