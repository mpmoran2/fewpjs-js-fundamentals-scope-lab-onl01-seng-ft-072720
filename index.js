let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  let animal = "cat"
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
  
}