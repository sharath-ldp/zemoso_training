let Name = "kittens";
if (Name === "puppies") {
  Name += " woof";
} else if (Name === "kittens") {
  Name += " meow";
} else {
  Name += "!";
}

console.log(Name === "kittens meow");