import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title: "Tasks",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text:"hola esto son pruebas"
            },
            {
                id: `card-${1}`,
                text: "hola esta es la prueba dos para las cards"
            },
        ]
    },
    {
        title: "Doing",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text:"Creamos nuestro primer redux"
            },
            {
                id: `card-${3}`,
                text: "Y renderizamos varias tarjetas en nuestra lista con static data"
            },
            {
                id: `card-${4}`,
                text:"Tambien podemos cambiar titulos"
            },
            {
                id: `card-${5}`,
                text:"Tambien podemos cambiar titulos por otros titulos"
            }
        ]
    },
];

//Indicate take state or take initialState and return
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        //Create the newList
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1
            return [...state, newList];
        //Create the newCard
            case CONSTANTS.ADD_CARD: {
                const newCard = {
                    text: action.payload.text,
                    id: `card-${cardID}`
                };
                cardID +=1;

                const newState = state.map(list => {
                    if(list.id === action.payload.listID) {
                        return {
                            ...list,
                            cards: [...list.cards, newCard]
                        };
                    } else {
                        return list;
                    }
                });

                return newState;
            }

                //Create a copy of our state
                case CONSTANTS.DRAG_HAPPENED:
                    const {
                        droppableIdStart,
                        droppableIdEnd,
                        droppableIndexStart,
                        droppableIndexEnd,
                        draggableId
                    } = action.payload;
                        const newState = [...state];
                        //In the same list
                        if(droppableIdStart === droppableIdEnd) {
                            const list = state.find(list => droppableIdStart === list.id)
                            const card = list.cards.splice(droppableIndexStart, 1)
                            list.cards.splice(droppableIndexEnd, 0, ...card)
                        }
                        return newState;

        default:
            return state;
    };
};

export default listsReducer;