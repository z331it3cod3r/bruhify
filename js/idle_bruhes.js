let idle_bruh_shop = null;
let timeouts = [];
onmessage = function(e) {
    postMessage('received');
    idle_bruh_shop = e.data;
    let timeout_id = timeouts.pop();
    while(typeof timeout_id !== "undefined") {
        clearInterval(timeout_id);
        timeout_id = timeouts.pop();
    }
    for(let obj in idle_bruh_shop) {
        if(obj.owned > 0) {
            timeouts.push(setInterval(function() {
                postMessage(true);
            }, 1000/(obj.bps * obj.owned).toFixed(3)));    
        }
    }
};
