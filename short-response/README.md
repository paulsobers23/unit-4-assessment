# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**
Answer: `this` is the current execution contextof a function. `this` is determined when the function is invoked.


**2. What will the following code produce? Why?** 

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```
Answer: The following code produce `NaN` and `0`. `NaN` because when function `add` was invoked `a` became a property on the global object and no value was paired with that property. So under the hood line 22 is basically saying `window.a` + `10` and that result is `NaN`. This code log `0` because when we invoked the method `add` on the object `c` that has a property `a` with a value of `-10` it look like this `10` + `-10` which is `0`;

**3. What is a closure? How does it allow us to create private data?**
Closure is embedded functions where the inner function has access to the enclosed scope. This allows us to create private data because nothing outside that function has access inside. The variables that are initialized are private and cannot be access from outside the function.  


**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben") )
  ```
  Answer: The following code log anonymous function with the parameter name and `Buona sera, Reuben!`. On line 45 because we only passed in one 

**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**
Encapsulation is separation of interface from implementation. Constructors and prototypes in JavaScript help us write encapsulated programs because we can  create our constructors for user's to use and just pass down the methods or such things we want our instances to inherit. Instead of always restating these methods we want other objects to use we can let them inherit it so it is still able to use it.


**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**
The difference between an object's prototype and the prototype property of a function is the object's property is `prototype` and the prototype property of a function is `__proto__`. `__proto` is how we access the prototype property of the instances we create with `new` using our constructor function.


**7. What is polymorphism? Illustrate using code.**
Answer: Polymorphism is basically to design objects to share behaviors and to be able to override shared behaviors with same name method.

```javascript
function Person(age,weight){
 this.age = age;
 this.weight = weight;
}
Person.prototype.getInfo = function(){
 return `I am this ${this.age} old and ${this.weight}`
};

function Employee(age,weight,salary){
 this.age = age;
 this.weight = weight;
 this.salary = salary;
}
Employee.prototype = new Person();

Employee.prototype.getInfo = function(){
return `${Person.prototype.getInfo.call(this)} and earns ${this.salary}`

}
```