# Trello App

#### Modules
[[General](#general)] [[Conditionals](#conditionals)] [[Functions](#functions)]


### Introduction


- We started a new challenge to put the knowledge into practice in React.

- This time we ventured to create an App to manage tasks, taking Trello as an example.

- You will find JavaScript code and the use of redux with store, action, passing information through ¡props!

# JSX - React

## General

- [We export the store](src/store/index.js)
- [We export the components, we pass the values ​​through props and make the context draggable.](src/App.js)
- [We import frameworks and put the favico.](public/index.html)
- [We create the navbar and link all the links](src/components/NavBar.jsx)
- [We document the cases of our App](src/actions/index.jsx)
- [Destructuring with values ​​in the trello list component](src/components/TrelloList.jsx)
- [We provide drag event and give component typography](src/components/TrelloCard.jsx)
- [We use styles through a constant in the same file, for the buttons.](src/components/TrelloButton.jsx)
- [We create the initial state, and document the cases using Switch](src/reducers/listsReducer.js)

## Conditionals

- [Use of ternaries to give different styles to the buttons](src/components/TrelloButton.jsx)
- [Conditional for placeholders, line 84](src/components/TrelloButton.jsx)
- [Conditions when dragging lists, line 89](src/reducers/listsReducer.js)


## Functions
- [We document the actions](src/actions/index.jsx)
- [We pass the data through payload to be read](src/actions/ListsActions.jsx)
- [We use ref to tell the DOM element](src/App.js)
- [We read the function with your data and the state changes](src/reducers/listsReducer.js)
- [We make use of combineReducers](src/reducers/index.js)
- [Event to read the values ​​of the inputs, line 28](src/components/TrelloButton.jsx)
- [Functions to add lists and cards, and we pass data through props](src/components/TrelloButton.jsx)

## Proyects
- <a href="https://github.com/2020-JAUG">This is a link to my repositories</a>
- [[Modules](#modules)]


    ![GitHub Logo](img/faviconYellow.png)