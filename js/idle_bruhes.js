const idle_bruh_shop = null;
const timeouts = [];
onmessage = function(e) {
    idle_bruh_shop = e.data;
    timeout_id = timeouts.pop();
    while(typeof timeout_id !== "undefined") {
        clearInterval(timeout_id);
    }
    for(obj in idle_bruh_shop) {
        if(obj.owned > 0) {
            timeouts.push(setInterval(function() {
                postMessage();
            }, 1000/(obj.bps * obj.owned)));    
        }
    }
}
