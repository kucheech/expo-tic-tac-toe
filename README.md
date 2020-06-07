# Walkthrough of Tutorial: Intro to React, Expo/React Native edition

This is a walkthrough of the tutorial at https://reactjs.org/tutorial/tutorial.html with the following differences

- used [Expo](https://expo.io/) to create project
- functional components and hooks are used instead of class components and state

## Creating the project

```
expo init --npm --template "blank" --name "Tic Tac Toe"
```

## Resolve npm audit warnings

Reference: https://itnext.io/fixing-security-vulnerabilities-in-npm-dependencies-in-less-than-3-mins-a53af735261d

## Running the app locally

```
expo start
```

## Publishing the app

```
expo publish
```

## [Inspecting the starter code](https://reactjs.org/tutorial/tutorial.html#inspecting-the-starter-code)

TouchableOpacity is used instead of Button as the Button in React Native could not be easily customised (cannot set height and
width for instance)

## [Passing Data Through Props](https://reactjs.org/tutorial/tutorial.html#passing-data-through-props)

a prop value is added to Square

## [Making an Interactive Component](https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component)

- a state value is added to Square
- the prop value is replaced with the state value
- set Square to display X on press

## [Lifting State Up](https://reactjs.org/tutorial/tutorial.html#lifting-state-up)

- remove state from Square
- add prop value to Square
- add state squares to Board
- add OnClick handler to Board
