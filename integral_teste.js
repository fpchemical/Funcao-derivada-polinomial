function numerical_int(dx, y_array) {
    var maxy = Math.max.apply(null, y_array);
    var dy_array = y_array.map(function(num) {
        return Math.abs(maxy - num);
    });
    var profile_integral = 0;
    var n = dy_array.length;
    for (i = 1; i < n; i++) {
        var dy_init = dy_array[i - 1];
        var dy_end = dy_array[i];
        var darea = dx * (dy_init + dy_end) / 2.;
        profile_integral = profile_integral + darea;
    }
    return profile_integral;
}

console.log(numerical_int(null, [2, 3, 4]))