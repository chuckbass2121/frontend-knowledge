function throttle(func, wait) {
    let timeout = null
    return function() {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait)
        }

    }
}
