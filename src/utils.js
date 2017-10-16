export function shortestRoute(grid, start, end) {
  // returns path format =  [{ row: 0, col: 1 }, { row: 1, col: 8 }];
  // Reset visited state for each loop
  grid.map(row => row
    .map(col => {
      col.visited = false
    }))

  const distanceFromTop = start.row;
  const distanceFromLeft = start.col;

  // Store each entry with coords and the shortest path required
  const location = {
    distanceFromTop,
    distanceFromLeft,
    path: [],
    status: 'start'
  };

  // Initialize the queue with start
  const queue = [location];

  while (queue.length > 0) {
    let currentLocation = queue.shift();

    // Start exploring
    let newLocation = exploreDirection(currentLocation, 'north', grid);
    if (newLocation.status === 'end') {
      return newLocation.path;
    } else if (newLocation.status === 'valid') {
      queue.push(newLocation);
    }

    //Explore east
    newLocation = exploreDirection(currentLocation, 'east', grid);
    if (newLocation.status === 'end') {
      return newLocation.path;
    } else if (newLocation.status === 'valid') {
      queue.push(newLocation);
    }

    // Explore south
    newLocation = exploreDirection(currentLocation, 'south', grid);
    if (newLocation.status === 'end') {
      return newLocation.path;
    } else if (newLocation.status === 'valid') {
      queue.push(newLocation);
    }

    // Explore west
    newLocation = exploreDirection(currentLocation, 'west', grid);
    if (newLocation.status === 'end') {
      return newLocation.path;
    } else if (newLocation.status === 'valid') {
      queue.push(newLocation);
    }
  }
  return false;
};

// This function will check a location's status
// Location is valid if it is on the grid, is active and has not yet been visited
function locationStatus(location, grid) {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  const dft = location.distanceFromTop;
  const dfl = location.distanceFromLeft;

  if (dfl < 0 || dfl >= gridWidth || dft < 0 || dft >= gridHeight) {
    return 'invalid';
  } else if (grid[dft][dfl].end === true) {
    return 'end';
  } else if (grid[dft][dfl].active === false) {
    return 'blocked';
  } else if (grid[dft][dfl].visited === true) {
    return 'visited';
  } else {
    return 'valid';
  }
};

// Explores the grid in a given direction
function exploreDirection (currentLocation, direction, grid) {
  const newPath = currentLocation.path.slice();

  let dft = currentLocation.distanceFromTop;
  let dfl = currentLocation.distanceFromLeft;

  // Push shortest possible path
  newPath.push({row: dft, col: dfl});

  if (direction === 'north') {
    dft -= 1;
  } else if (direction === 'east') {
    dfl += 1;
  } else if (direction === 'south') {
    dft += 1;
  } else if (direction === 'west') {
    dfl -= 1;
  }

  const newLocation = {
    distanceFromTop: dft,
    distanceFromLeft: dfl,
    path: newPath,
    status: 'unknown'
  };

  newLocation.status = locationStatus(newLocation, grid);

  // Mark square as visited to avoid infinite exploring
  if (newLocation.status === 'valid') {
    grid[newLocation.distanceFromTop][newLocation.distanceFromLeft].visited = true;
  }

  return newLocation;
};
