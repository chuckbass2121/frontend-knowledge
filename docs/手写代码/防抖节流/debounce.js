function debounce(func, wait) {
    let timeout = null;
    return function () {
        let context = this;
        let args = arguments;

        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            func.apply(context, args);
        })
    }
}