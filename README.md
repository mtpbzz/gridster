# Gridster

Created using React, Redux, webpack, ES6 and Sass.

## Environment setup

```sh
  $ yarn install
```

## Development

Start the Webpack server (includes live reloading when you change files):

```sh
  $ npm start
```

## Usage

By default the all squares are blocked. Simply click them to create available paths.

## Notes

* An A* algorithm would actually be a faster approach, although BFS is potential more thorough.
* I decided to implement a basic Breadth-first search from scratch rather than use a library to help improve my knowledge around this type of algorithm.
* Testing is currently non existent. I'd add these with using mocha / jest.


Open [http://localhost:3001](http://localhost:3001) in a browser. `./src/main.js` is the entry point.
