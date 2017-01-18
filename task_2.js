/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis

pendings = []

var l1 = "";
var l2 = "";
for (var i = 0; i < height; i++) {
    var line = readline(); // width characters, each either 0 or .
    
    if (i > 0)
        for (c = pendings.length - 1; c >=0; c--) {
            item = pendings[c];
            if (line[item[0]] == "0") {
                print(item.concat([item[0], i]).join(' '));
                pendings.splice(c, 1);
            }
        }
    
    for (var x = 0; x < width; x++)
        if (line[x] == "0") {
            r_n = [-1, -1];
            idx = line.indexOf("0", x + 1)
            if (idx != -1)
                r_n = [idx, i];
            
            pendings.push([x, i].concat(r_n));
        }
}

for (item of pendings)
    print(item.concat([-1, -1]).join(' '));


