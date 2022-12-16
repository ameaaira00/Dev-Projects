# Intermediate Javascript 
<em>Markdown guide: https://www.markdownguide.org/basic-syntax/</em>

> Note: Terms and definitions are enclosed in a blockquote


## Basics
### Creating Objects
> **Properties** are used to call values
>
> **Method** defines a logic

This is called **Object Literal Syntax**
* Use `const` to define constant
* Here, `draw` is a **method**, while `radius` and `location` are **properties**.

```
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw');
    }
}

circle.draw();
```


### Factories and Constructors
> The **Object literal notation** is basically an **array of key:value pairs**, with a colon separating the keys and values, and a comma after every key:value pair, except for the last, just like a regular array.

Object Literal Syntax is not a good way if duplication of object is needed if it has atleast 1 method which we can think of as a behavior of an object.
```
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw');
    }
}



// Duplicate object
const circle = {
    radius: 2,
    location: {
        x:2,
        y:2
    },
    draw: function(){
        console.log('draw');
    }
}

circle.draw();
```
A solution is using **Factories and Constructors** function.
They are two other ways to construct object.
#### **Factory Function:**
> A factory function is a function that returns a new object

Example: 

`const personFactory = (name, age) => { const sayHello = () => console.`


If you *return an object*, we refer to that as Factory function.

```
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();
```

#### **Constructor Function:**
>A **constructor** is a special function that **creates and initializes an object instance of a class**. In JavaScript, a constructor **gets called** when an object is **created using the `new` keyword**. The purpose of a constructor is to create a new object and set values for any existing object properties

If you *use `this` and `new` operator*, we refer to it as **Constructor Function**.
```
function Circle(radius){
    console.log() 
    this.radius= radius;
    this.draw = function(){
        console.log('draw);
    }
}

// A. This will create an empty project and the 'this' above will 
const another = new Circle(1); 

// B. removing 'new' will only create a Window object
//const another = new Circle(1); 

```
`const another = new Circle(1); ` will create an empty object and the `this` inside the constructor function will point to that said object, the global one

#### **Constructor property**
Every object in Javascript has property called **constructor**.
> **Constructor** property references to the function that was used to construct or create an object.

```
function Circle(radius){
    console.log() 
    this.radius= radius;
    this.draw = function(){
        console.log('draw);
    }
}

const circle = new Circle(1); 
```
Note that `ƒ` tells us that it is a function

When you type type the following `circle.constructor` in console.log. the function used to create it will be returned:

```
>circle.constructor
>ƒ Circle(radius){
    console.log('this',this) 
    this.radius= radius;
    this.draw = function(){
        console.log('draw');
    }
 }
```
Other built in constructors
```
new String(); // '',"",``
new Boolean(); // true, false
new Number(); // 1,2,3
```


#### **Functions are Objects**
> In JavaScript, an **object** is a standalone entity, with properties and type.

>In JavaScript, **functions** are first-class objects, because **they can have properties and methods** just like any other object

Below, Circle is an Object which has multiple functions: methods and properties.
```
function Circle(radius){
    console.log() 
    this.radius= radius;
    this.draw = function(){
        console.log('draw);
    }
}

const circle = new Circle(1); 
```

This can also be written as follows
```
function Circle(radius){
    console.log() 
    this.radius= radius;
    this.draw = function(){
        console.log('draw);
    }
}

const circle1 = new Function(`radius`,
`
this.radius= radius;
this.draw = function(){
    console.log('draw);
}
`
); 
```

Type the following in the console log

```
// returns "Circle"
Circle.name

// returns "1" - number of argument
Circle.length

// returns function to create and object
Circle.constructor

```

> `.call` method will allow us to create empty object
```
function Circle(radius){
    console.log() 
    this.radius= radius;
    this.draw = function(){
        console.log('draw);
    }
}
Circle.call({},1);
```

Note that `const circle = new Circle(1)` 
can be written as  
```
Circle.call({},1)
```
where {} is the created empty object and the next arguments are the context of the Function called.

> `.apply` is a method used on Functions that can let us pass on arguments as an array
```
Circle.call({},[1,2,3,4,5])
```

### Primitives and Reference Types
>There are 2 categories of types:
**Value Types** and **Reference Types**
 
#### **Value Types**

>In JavaScript, a primitive (primitive value, primitive data type) is **data that is not an object and has no methods or properties**.

The most basic types of data are 
* Strings, 
* Numbers, 
* Booleans, 
* undefined, and 
* null.
* Symbol (new in ES6)

Here, `x` and `y` are two independent variables. When we work with primitives, values are stored in different variables.
```
let x=10
let y=x
x=20
```

#### **Reference Types**
> Reference data types, unlike primitive data types, are **dynamic in nature**. That is, they **do not have a fixed size**. Most of them are **considered as objects**, and therefore **have methods**.

In Reference Types, we have
* Object
* Function
* Array

Here, `x` and `y` will return same value since the value is stored in a storage and the two variables will point to that position.
```
let x= {value:10}
let y=x
x.value=20
```

> **Primitives** are copied by their **value**
>
> **Objects** are copied by their **reference**

Values can be local to a function that uses it.
```
let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number); //still returns 10
```
Above the `number` in the `increase` function is local to it hence it will not affect the first `number` variable


```
let obj = {value:10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj); //will return 11 
```

Above, since `obj` is an object, it points to the same storage address when passed to the function.

### Working with Properties
#### **Adding/Removing Properties**
> Object is dynamic, we can add or delete properties. We can add them whenever we need them since we don't have classes where we define it.

```
function Circle(radius){
    this.radius= radius;
    this.draw = function(){
        console.log('draw);
    }
}

const circle = new Circle(10);

//Way 1
circle.location = { x:1 };

//Way 2
circle['location'] = { x:1 };

// Helpful if using existing variable
const propertyName = 'location'
circle[propertyName] = { x:1 };
```

When deleting property, use `delete` operator and then reference property name.
```
//Way 1
delete circle[`location`];

//Way 2
delete circle.location;
```

#### **Enumerating Property** 
* `for in` loop -We can iterate over properties of objects
* `typeof` - get only the properties and not the method

```
function Circle(radius){
    this.radius= radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle){
    if (typeof circle[key]!=='function')
    console.log(key,circle[key]);
}


const keys = Object.keys(circle); // returns ["radius","draw"]
console.log(key);

```

* `in` - checks if an object has the given property

```
if ('radius' in circle) {
    console.log('Circle has a radius');
} 
// returns 'Circle has a radius'
```

#### **Abstraction**

Notice the problem in the implementtation of `this.computeOptimumLocation` and `this.draw` below. Sometimes, we don't want to let call a member of the object in certain location.
```
function Circle(radius){
    this.radius= radius;
    this.defaultLocation = {x:0, y:0};
    this.computeOptimumLocation = function() {
        //...
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10);
```
In object oriented program, we have the concept of **Abstraction**

> **Abstraction** means **we hide the details and complexity** and **expose only the essentials**

An example of this is a remote wher only the buttons which serves as **public interface** are exposed, instead of showing the the logic ports inside which serves as the **implementation detail**, as well. 

One issue of making everything public is the constant need to modify the code when needed to change the implementation. By adding simply an argument would make you go back to previous function calls and add parameters to it.



### Private Properties & Methods
>Declaring a **local variable** inside a function using `let` operator would NOT make it part of that object. It will be hidden outside the object.

In object-oriented programming point of view, they are called **Private members of the object**.

Below, `color` is not a property of the `Circle` object. It is simply considered a local variable inside of the function. This is helpful in hiding properties from the outside since it will **go out of scope**.
```
function Circle(radius){
    let color ='red';

    this.radius= radius;
    ...
```

We can better write the previous section's code as follows
```
function Circle(radius){
    this.radius= radius;
    
    let defaultLocation = {x:0, y:0};
    let computeOptimumLocation = function() {
        //...
    }
    this.draw = function(){
        let x,y;

        computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10);
```

> An inner function can access all the local variables declared inside it as well as its parent function's local variables.

**Scope** - is temporary. Variable will be  recreated and reinitialized and after the function it will die.

**Closure** - stays there. These are variables that will preserve their state .Above, `defaultLocation` and `computeOprimumLocation`are part of `this.draw` function.

>Only methods and properties with `this` operator are accessible outside the object.


### Getters and Setters
We can use **getters** if we want to display local variable somewhere outside the object but not modify but just read it. Check `this.getDefaultLocation` below

```
function Circle(radius){
    this.radius= radius;
    
    let defaultLocation = {x:0, y:0};

    Object.defineProperty(this,'defaultLocation',{
        get: function() {
            return defaultLocation
        }
    });

    this.draw = function(){
        computeOptimumLocation();

        console.log('draw');
    }
}

const circle = new Circle(10);
circle.defaultLocation;
```

An object has `defineProperties` method which has three arguments
`Object.defineProperties(<1. object we want to add new property to>,<2. string name of property>,{<3. key value pair: get which has value of function>})`

> Getter is a function that is used to read a property.

>If you want to define an objects property from the inside, we define a **setter** using `set: function(){}` inside the `Object.defineProperty`.


```
function Circle(radius){
    this.radius= radius;
    this.defaultLocation = {x:0, y:0};
    this.computeOptimumLocation = function() {
        //...
    }

    Object.defineProperty(this,'defaultLocation',{
        get: function() {
            return defaultLocation
        },
        set: function(value){
            //we can also write a logic inside
            if (!value.x||!value.y) {
                throw new Error('Invalid location.');
            }
            defaultLocation=value;
        }
    });

    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10);
// circle.defaultLocation = 1;//will throw Error since not two values
circle.defaultLocation = {x:1,y:2};
```

## Exercise: Design a stopwatch object.
Details: Stopwatch object has few memqbers
Propety: duration
Methods: reset, start and stop
Inherited from base object: constructor, hasOwnProperty,isProtorypeOf, etc

1. Initially, duaration is 0,
2. We cannot call start, and stop twice in row.
3. Duration counts the moment between start and stop.
4. Calling reset will set the stopwatch in the initial state 

My version:
```
function Stopwatch(){
    console.log('sw');
    let duration = 0;
    let isRunning = false;
    let startTime = 0;
    let endTime = 0;
    //this can also be defined as followes
    //let duration, isRunning, startTime, endTime = 0;

    Object.defineProperty(this,'duration',{
        get: function(){
            if (isRunning){
                throw new Error('Stopwatch is still running.');
            }
            return duration
        }
    });

    this.start = function(){
        if (isRunning){
            throw new Error('Stopwatch has already started');
        }
        startTime = Date.now();
        // startTime = new Date() // can also declared like this
        isRunning=true;
    }

    this.stop = function(){
        if (!isRunning){
            throw new Error('Stopwatch is not started');
        }
        endTime = Date.now();
        // endTime = new Date() // can also declared like this

        duration = (endTime-startTime)/1000
        // duration = (endTime.getTime()-startTime.getTime())/1000 // can also declared like this
        isRunning=false;
    }

    this.reset = function(){
        duration = 0;
        isRunning = false;
        startTime = 0; //can also have the value null
        endTime = 0; //can also have the value null
    }

}
```

# References
1. [Object-oriented Programming in JavaScript: Made Super Simple | Mosh](https://www.youtube.com/watch?v=PFmuCDHHpwk&t=1552s)