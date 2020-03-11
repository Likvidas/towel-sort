// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) return [];

    const resultMatrix = matrix.reduce((accum, current, index) => {
        if (index % 2) {
            current.reverse();
        }

        return [...accum, ...current];
    }, []);

    return resultMatrix;
}
