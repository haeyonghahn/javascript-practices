var o = {
    name: '마이콜',
    age: 20,
    hasProperty: function(property) {
        return property in this;
    }
}

console.log(o.hasProperty("name"));
console.log(o.hasProperty("age"));
console.log(o.hasProperty("email"));

console.log("=====================");
console.log(o.hasOwnProperty("name"));
console.log(o.hasOwnProperty("age"));
console.log(o.hasOwnProperty("email"));

// with라는 block 안에서는 o.name 이렇게 사용안하고 name 이렇게만 적어도 사용가능하다.
console.log("=======with()==========");
with(o) {
    console.log(name + ":" + age);
}

console.log("=======for ~ in========");
var data = "";
for(var property in o) {
    if(typeof(o[property]) != 'function') {
        data += (o[property] + ":");
    }
    
}
console.log(data);