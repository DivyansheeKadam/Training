//- Use the class in index file to create few employees and use the functions in class on them"
class Index {
    constructor (name,age,city,married) {
        console.log(name,age,city,married);
    };
    obj (name,age,city,married) {
        console.log(name,age,city,married);
    };
}
let a = new Index("Radhu", 25, "Indore", false);
a.obj("Ram", 25, "Indore", true);
a.obj("sita", 22, "Dhar", true);
a.obj("shyam", 21, "Bhopal", false);
a.obj("mohan", 24, "Ujjain", true);
