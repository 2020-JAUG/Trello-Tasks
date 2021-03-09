import { CONSTANTS } from "../actions";

//Return one object with property text
export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID }
    };
};