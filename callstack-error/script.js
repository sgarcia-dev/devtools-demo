function first() {
  throw new Error("Whoops! An error ocurred!");
}

function second() {
    first();
}

function third() {
    second();
}

first();
