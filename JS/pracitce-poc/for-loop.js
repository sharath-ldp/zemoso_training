for (let i = 0; i < 5; i++)  {
    console.log("zemoso")
  }


//----------------------------------------------------

items = ['books', 'car', 'fruits', 'bikes']

  for (const value of items) {
    console.log(value)
  }

 //----------------------------------------------------
 
 student= {
    name:"Sharath",
    jobTitle : "intern",
    mentor : "SriVyshnavi"
 }
 for (const property in student) {
    console.log(property + " -> " + student[property])
  } 