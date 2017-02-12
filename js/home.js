class People {
  constructor(name, age) {
    this.name=name;
    this.age=age;
  }
}
function person()
{
  var p=new People("Son","15");
  document.write(stringFormat("Name: {0} age: {1}",p.name,p.age));
}
