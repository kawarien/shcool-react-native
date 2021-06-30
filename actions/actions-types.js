import {  SCHOOLDATA, REORDER, INCREMENT, DECREMENT} from '../constants/actions';
 
export const schooldata = payload => {
    return {
        type: SCHOOLDATA, payload
    };
}

export const reOrder = () => {
    return {
        type: REORDER
    };
}

export const decrement_abscence = id => {
    return {
        type: DECREMENT
    };
}

export const increment_abscence = id => {
    return {
        type: INCREMENT
    };
}

export const average = notes => {
    const nbNotes = Array.isArray(notes) && notes.length;
 
    if (nbNotes === 0) return;
 
    const sum = notes.reduce((acc, curr) => acc + curr);
 
    return Math.floor((sum / nbNotes) * 100) / 100;
}



// export const increment_abscence = id => {


//     student = { ...state.students.find(s => s.id === action.id) };
//     student.attendance++;

        
// }


// export const decrement_abscence = id => {

//     return dispatch => {

//         dispatch(set_loading(true));
//         // transaction pour éviter la concurrence entre les requêtes sur la bd
//         database.ref(`students/${id}`).transaction(student => {
//             if (student) {

//                 if (student.attendance === 0) {

//                     // Reducer
//                     dispatch(decrement_attendance({ id: id, ...student }));
//                     dispatch(set_loading(false));

//                     dispatch(set_message(`decrement impossible ...`))
//                 } else {

//                     student.attendance--;

//                     // Reducer
//                     dispatch(decrement_attendance({ id: id, ...student }));
//                     dispatch(set_loading(false));
//                 }
//             }

//             return student;
//         }).catch(err => {
//             console.error("Axios incrementAttendance :", err);
//             dispatch(set_error({ err: "API Firebase incrementAttendance", date: "Now" }));
//         })
//     }
// }