// duration
// start
// stop
// reset

function StopWatch(){
    let isStarted = false;
    let isStopped = false;
    let startTime;
    let stopTime;
    this.duration = 0;
    this.start = function(){
        if(isStarted){
            throw new Error("Function is already started");
        }
        startTime = Date.now();
        isStopped = false;
        isStarted = true;        
    };
    this.stop = function(){
        if(isStopped){
            throw new Error("Function is already stopped");
        }
        stopTime = Date.now();
        this.duration = (stopTime - startTime)/1000;
        isStarted = false;
        isStopped = true;

    };
    this.reset = function(){
        this.duration = 0;

    };
    
}
const sw = new StopWatch();


