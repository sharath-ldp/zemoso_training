const employee = {
    name: 'Sharath',
    id: 1098,
    designation:'intern',
    experience: (4).toFixed(2),
    skills:['cpp','java','python']
}

const employee2 = {
    ...employee,
    name: 'Chandra'
}

console.log(employee2)