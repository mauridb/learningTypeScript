function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Mr.", lastName: "Robot" };
document.body.innerHTML = greeter(user);
