const students = [
    { name: 'A', age: 20 },
    { name: 'B', age: 21 },
    { name: 'C', age: 22 },
    { name: 'D', age: 23 },
    { name: 'E', age: 24 },
    { name: 'F', age: 25 },
    { name: 'G', age: 26 },
    { name: 'H', age: 27 },
    { name: 'I', age: 22 },
    { name: 'J', age: 21 },
]

//find students with age below or equal to 24
// const newStudents = []
// for (let i = 0; i < students.length; i++) {
//     if (students[i].age <= 24) {
//         newStudents.push(students[i])
//     }
// }

const newStudents = students.filter(student => student.age <= 24)

console.log(newStudents);