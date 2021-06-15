import {  SCHOOLDATA} from '../constants/actions';
 
export const schooldata = payload => {
    return {
        type: SCHOOLDATA, payload
    };
}

export const average = notes => {
    const nbNotes = Array.isArray(notes) && notes.length;
 
    if (nbNotes === 0) return;
 
    const sum = notes.reduce((acc, curr) => acc + curr);
 
    return Math.floor((sum / nbNotes) * 100) / 100;
}