let Tab = [-7, 5, -10, -7, -2, 1, 39];
var sumPositives = (Tab = []) => {
    var isPositive = num => (typeof num === 'number') && (num > 0);
    var res = Tab.reduce((acc, val) => {
        if (isPositive(val)) {
            acc += val;
        };
        return acc;
    }, 0);
    return res;
};
alert('La somme de tous les entiers positifs est : ' + sumPositives(Tab));
