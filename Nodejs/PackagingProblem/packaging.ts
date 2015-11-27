'use strict';

const packs: number[] = [8, 6, 3];

export function computePackaging(t: number): string {
    let msg: string;
    let r = compute(t, 0, packs.map(i => 0));
    if (r) {
        msg = 'Packaging:\n';
        r.forEach((v, i) => {
            if (v > 0) {
                msg += `${v} boxes of ${packs[i]} units: ${v * packs[i]}\n`;
            }
        });
        msg += `Total ${t} units`;
    } else {
        msg = 'No solution';
    }
    return msg;
}

function compute(t: number, n: number, p: number[]): number[] {
    let r = null;
    if (n === t) {
        r = p;
    } else if (n < t) {
        for (let i = 0; i < packs.length && r === null; i++) {
            let next: Array<number> = [].concat(p);
            next[i]++;
            r = compute(t, n + packs[i], next);
        }
    }
    return r;
}
