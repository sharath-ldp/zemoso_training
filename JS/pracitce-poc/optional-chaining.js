person = {
    name: {
      first: 'John',
      last: 'Doe'
    },
    age: 42
  }

  console.log(person?.name?.first)
  console.log(person?.name?.last)
  console.log(person?.name?.middle) //undefined is outputted instead of giving undefined error when we use person.name.middle