const person= new Object();
person.firstname="jack";
person.lastname="Doe";
person.age=14;

document.getElementById("demo").innerHTML=person.firstname+person.lastname+person.age;

function empolyee(id,name,salary){
this.id=id;
this.name=name;
this.salary=salary;
}
e=new empolyee(90,"jack",3000);
