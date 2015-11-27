'use strict';
var packs = [8, 6, 3];
function computePackaging(t) {
    var msg;
    var r = compute(t, 0, packs.map(function (i) { return 0; }));
    if (r) {
        msg = 'Packaging:\n';
        r.forEach(function (v, i) {
            if (v > 0) {
                msg += v + " boxes of " + packs[i] + " units: " + v * packs[i] + "\n";
            }
        });
        msg += "Total " + t + " units";
    }
    else {
        msg = 'No solution';
    }
    return msg;
}
exports.computePackaging = computePackaging;
function compute(t, n, p) {
    var r = null;
    if (n === t) {
        r = p;
    }
    else if (n < t) {
        for (var i = 0; i < packs.length && r === null; i++) {
            var next = [].concat(p);
            next[i]++;
            r = compute(t, n + packs[i], next);
        }
    }
    return r;
}
