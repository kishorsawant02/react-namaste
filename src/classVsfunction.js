function Student(name, id) {
  this.name = name;
  this.id = id;
  this.showData = function () {
    console.log(this.name);
    console.log(this.id);
  };
  this.print = function () {
    console.log("print student ");
  };
}
function CompStudent(name, id, subject, sid) {
  super(name, id);
  this.subject = subject;
  this.sid = sid;
  this.showData = function () {
    console.log(this.subject);
    console.log(this.sid);
  };
}
CompStudent.prototype = new Student();
const comp = new CompStudent("dsfsad", "dsf", "DAA", 22);
comp.showData();
comp.print();
typeof comp;

class Teacher {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  printData() {
    console.log(this.name);
    console.log(this.city);
  }
}
