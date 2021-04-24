import { CONSTANTS } from "../actions";

const initialState = {
  "card-0": {
    id: `card-0`,
    list: "list-0",
  }
};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_CARD: {
            const { text, listID, id } = action.payload;

            const newCard = {
                text,
                id: `card-${id}`,
                list: listID
            };

            return { ...state, [`card-${id}`]: newCard };
        }


        case CONSTANTS.DELETE_CARD: {
            return {
              ...state,
              productoeliminar: action.payload,
              cards: state.productoeliminar.filter( card => card.id !== state.productoeliminar )
            }
          }

          default:
            return state;
        }
};

export default cardsReducer;