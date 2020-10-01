// delete operator
const Employee = {
    firstname: 'John',
    lastname: 'Doe'
}

delete Employee.firstname; //removes a property from an object  // delete also returns a boolean;

console.log(Employee.firstname);
// expected output: undefined