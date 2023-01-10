//- Use the class in index file to create few employees and use the functions in class on them"
class Index {
    constructor (name, age, city, married) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.married = married;
        console.log(this.name, this.age, this.city, this.married);
    };
    obj (name, age, city, married) {
        let empNew= {"name" : name,
        "age" : age,
        "city" : city,
        "married" : married}
        console.log(empNew); 
       };
};
let a = new Index("Radhu", 25, "Indore", false);
a.obj("Ram", 25, "Indore", true);
a.obj("sita", 22, "Dhar", true);
a.obj("shyam", 21, "Bhopal", false);
a.obj("mohan", 24, "Ujjain", true);
