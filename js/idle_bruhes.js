const idle_bruh_shop = null;
onmessage = function(e) {
    idle_bruh_shop = e.data;
}
for(obj in idle_bruh_shop) {
    setInterval(function() {
        postMessage();
    }, 1/obj.bps);
}
