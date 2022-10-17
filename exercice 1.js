let Tab = [1, 23, 10, 7];
let n = Tab.length;

function smallest_pair(a, n) {
    let min = Number.MAX_VALUE,
        secondMin = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        if (a[i] < min) {
            secondMin = min;
            min = a[i];
        }
        else {
            if ((a[i] < secondMin) && (a[i] != min)) {
                secondMin = a[i];
            }
        }
    }
    return (secondMin + min);
}

alert('La somme des deux nombres min est : ' + smallest_pair(Tab, n));
