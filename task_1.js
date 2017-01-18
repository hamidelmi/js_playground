/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var inputs = readline().split(' ');

var int_array = inputs.map(function ( current ) {
    return parseInt(current);
})

best_max = 0;
best_min = 0;

current_max = int_array[0];
current_min = int_array[0];
for (i = 0; i < int_array.length; i++) {
    v = int_array[i];
    if (v > current_max) {
        current_max = v;
        current_min = v;
    }
    if (v < current_min) current_min = v;
    
    if ((current_max - current_min) > (best_max - best_min)) {
        best_max = current_max;
        best_min = current_min;
        
        current_min = v;
    }
}

print(best_min-best_max)
