/**
 * Created by ZhouYinian on 2017/9/5.
 */
//渐显 fadeIn(xx)
export function fadeIn(el) {
    el.style.opacity = 0;
    var t_last = +new Date();

    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - t_last) / 400;
        t_last = +new Date()
    };
    if (el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
    tick()
}

export const _isArray = Array.isArray || function (obj) {
        return Object.prototype.call(obj) === '[object Array]';
    };


export function _throttle(fn, delay, mustDelay) {
    var timer = null;
    var star_time;
    return function () {
        var context = this, args = arguments, curr_time = +new Date();

        clearTimeout(timer);
        if (!star_time) {
            star_time = curr_time
        }
        if (curr_time - star_time >= mustDelay) {
            fn.apply(context, args);
            star_time = curr_time
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
};