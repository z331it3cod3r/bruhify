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
    for(let key, obj in idle_bruh_shop) {
        if(idle_bruh_shop.hasOwnProperty(key)) {
            if(obj.owned > 0) {
                let interval = 1000/(obj.bps * obj.owned).toFixed(3);
                postMessage(interval.toString());
                timeouts.push(setInterval(function() {
                    postMessage(true);
                }, interval));    
            }
        }
    }
};
