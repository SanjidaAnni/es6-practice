class Student{
    constructor(sId, sName, sClass){
        this.id = sId;
        this.name = sName;
        this.class = sClass;
        this.school = "High school";
    }
}
const student1 = new Student(12, "something", "ten");
const student2 = new Student(13, "anything");
console.log(student1, student2); 