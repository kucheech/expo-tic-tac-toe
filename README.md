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

### Inspecting the starter code

TouchableOpacity is used instead of Button as the Button in React Native could not be easily customised (cannot set height and
width for instance)

### Passing Data Through Props

a prop value is added to Square
