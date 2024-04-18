let student = {
    name: 'Ann',
    age: 18,
    country: 'CZ',
    isProfessor: false,
    courses: [
        'web','mathematics','programming'
    ]
}

let studentJson = JSON.stringify(student);
console.log(studentJson);
console.log(typeof(studentJson));
console.log(typeof(student));