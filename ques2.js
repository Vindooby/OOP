//functions//
var vinnie= new Teacher ("male", 28, "Vinnie")
var jeff= new Student ("male", 12, "Jeff")
var kate= new Student ("female",14, "Kate")
var judy= new Student ("female", 12. "Judy")
var school = new School()

function Person(gender,age,name){
this.gender= gender
this.age= age
this.name= name
}

function Teacher(gender,age,name){
  Person.call(this, gender, age, name)
}

function Student(gender, age, name){
  Person.call(this, gender, age, name)
}

function School(){
  this.persons= []
}


//prototype objects//
School.prototype.addPerson = function(person){
  this.persons.push(person)
}

Person.prototype.displayAllInfo = function(){
  return this.gender + "," + this.age + "," + this.name
}
Teacher.prototype = Object.create(Person.prototype)
Student.prototype = Object.create(Person.prototype)

school.addPerson(judy)
school.addPerson(kate)
school.addPerson(vinnie)
school.addPerson(jeff)

console.log(vinnie.displayAllInfo)
console.log(judy.displayAllInfo)
