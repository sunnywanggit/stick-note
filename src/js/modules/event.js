const EventCenter = (function(){

    let events = {};

    function on(event, handler){
        events[event] = events[event] || [];
        events[event].push({ handler: handler });
    }

    function fire(event, args){
        if(!events[event]){ return; }
        for(let i=0; i<events[event].length; i++){ events[event][i].handler(args); }
    }

    return { on, fire } })();

module.exports = EventCenter;





// EventCenter.on('text-change', function(data){
//  console.log(data);
// });

// EventCenter.on('text-change', function(data){
//  alert(1);
// });


// EventCenter.fire('text-change', 100);
