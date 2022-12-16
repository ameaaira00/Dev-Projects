```
// MOSH Exercise: Stopwatch object: https://www.youtube.com/watch?v=PFmuCDHHpwk&t=1552s

Details: Stopwatch object has few memqbers
Propety: duration
Methods: reset, start and stop
Inherited from base object: constructor, hasOwnProperty,isProtorypeOf, etc

1. Initially, duaration is 0,
2. We cannot call start, and stop twice in row.
3. Duration counts the moment between start and stop.
4. Calling reset will set the stopwatch in the initial state 

```

function Stopwatch(){
    console.log('sw');
    let duration = 0;
    let isRunning = false;
    let startTime = 0;
    let endTime = 0;

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
        isRunning=true;
    }

    this.stop = function(){
        if (!isRunning){
            throw new Error('Stopwatch is not started');
        }
        endTime = Date.now();
        duration = (endTime-startTime)/1000
        isRunning=false;
    }

    this.reset = function(){
        duration = 0;
        isRunning = false;
        startTime = 0;
        endTime = 0;
    }
}