import {  SCHOOLDATA} from '../constants/actions';
 
export const schooldata = payload => {
    return {
        type: SCHOOLDATA, payload
    };
}