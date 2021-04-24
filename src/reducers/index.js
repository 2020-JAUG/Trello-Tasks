import { combineReducers } from 'redux';
import listsReducer from './listsReducer.js';
import cardsReducer from './cardsReducer.js';



export default combineReducers({
    lists: listsReducer,
    cards: cardsReducer
});