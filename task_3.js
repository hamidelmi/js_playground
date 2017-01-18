/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);

var boundry = [0,0,W,H]

// game loop
while (true) {
    var bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    
    switch (bombDir) {
        case "U":
            boundry[0] = boundry[2] = X0;
            boundry[3] = Y0 - 1;
            break;
        case "D":
            boundry[0] = boundry[2] = X0;
            boundry[1] = Y0 + 1;
            break;
        case "L":
            boundry[1] = boundry[3] = Y0;
            boundry[2] = X0 - 1;
            break;
        case "R":
            boundry[1] = boundry[3] = Y0;
            boundry[0] = X0 + 1;
            break;
        case "UR":
            boundry[0] = X0 + 1
            boundry[3] = Y0 - 1
            break;    
        case "UL":
            boundry[2] = X0 - 1
            boundry[3] = Y0 - 1
            break;    
        case "DR":
            boundry[0] = X0 + 1
            boundry[1] = Y0 + 1
            break;    
        case "DL":
            boundry[2] = X0 - 1
            boundry[1] = Y0 + 1
            break;    
    }
    
    X0 = Math.floor((boundry[0] + boundry[2]) / 2)
    Y0 = Math.floor((boundry[1] + boundry[3]) / 2)

    // the location of the next window Batman should jump to.
    print(X0 + ' ' + Y0);
}
