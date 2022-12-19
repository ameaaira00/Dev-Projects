//The following are snippets from ../../Javascript_Notes.md


// Basic printing
// console.log('hello world');

// Creating Objects
// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// }

// circle.draw();

// Factories nad COnstructors
// Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

// Constructor Function
// function Circle(radius){
//     console.log('this',this) 
//     this.radius= radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// A. This will create an empty project and the 'this' above will 
// const another = new Circle(1); 

// B. removing 'new' operator will only create a Window object
// const circle  = new Circle(1); 



// function Circle(radius){
//     this.radius= radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle){
//     if (typeof circle[key]!=='function')
//     console.log(key,circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(key);

// if ('radius' in circle) {
//     console.log('CIrcle has a radius');
// }



//44:00
// function Circle(radius){
//     this.radius= radius;
//     this.defaultLocation = {x:0, y:0};


//     Object.defineProperty(this,'defaultLocation',{
//         get: function() {
//             return defaultLocation
//         },
//         set: function(value){
//             //we cana lso write a logic inside
//             if (!value.x||!value.y) {
//                 throw new Error('Invalid location.');
//             }
//             defaultLocation=value;
//         }
//     });

//     this.draw = function(){
//         this.computeOptimumLocation();
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);
// //circle.defaultLocation = 1;
// circle.defaultLocation = {x:1,y:2};
// console.log(circle.defaultLocation)


//Exercise: Stopwatch object


// function Stopwatch(){
//     console.log('sw');
//     let duration = 0;
//     let isRunning = false;
//     let startTime = 0;
//     let endTime = 0;

//     Object.defineProperty(this,'duration',{
//         get: function(){
//             if (isRunning){
//                 throw new Error('Stopwatch is still running.');
//             }
//             return duration
//         }
//     });

//     this.start = function(){
//         if (isRunning){
//             throw new Error('Stopwatch has already started');
//         }
//         startTime = Date.now();
//         isRunning=true;
//     }

//     this.stop = function(){
//         if (!isRunning){
//             throw new Error('Stopwatch is not started');
//         }
//         endTime = Date.now();
//         duration = (endTime-startTime)/1000
//         isRunning=false;
//     }

//     this.reset = function(){
//         duration = 0;
//         isRunning = false;
//         startTime = 0;
//         endTime = 0;
//     }
// }