if (!navigator.serviceWorker) {
    console.log('ServiceWorker is not supported in this browser.');
} else {
    navigator.serviceWorker.register('/js/sw.js')
    .then(function(reg){
        console.log('ServiceWorker Registration worked!', reg.scope);
    }).catch(function(err){
        console.log('ServiceWorker Registration failed!', err);
    });
}