//- Use the class in index file to create few employees and use the functions in class on them"
class index {
    constructor(name,age,city,married){
        console.log(name,age,city,married);
    };
    obj1 (name,age,city,married) {
            console.log(name,age,city,married);
    };
    obj2 (name,age,city,married) {
        console.log(name,age,city,married);
    };
    obj3 (name,age,city,married) {
        console.log(name,age,city,married);
    };
    obj4 (name,age,city,married) {
        console.log(name,age,city,married);
    };
}
let a = new index("Radhu", 25, "Indore", false);
a.obj1("Ram", 25, "Indore", true);
a.obj2("sita", 22, "Dhar", true);
a.obj3("shyam", 21, "Bhopal", false);
a.obj4("mohan", 24, "Ujjain", true);