$(function () {
    let x = solve([6,3,1,8,4,2,1,5,7,19]);
})

function solve(A) {
    if (A.length > 1) {
        let i = Math.ceil(A.length / 2);
        return merge(solve(A.slice(0, i)), solve(A.slice(i, A.length)));
    } else {
        return A;
    }
}

function merge(A, B) {
    let solution = [];
    while (A.length > 0 || B.length > 0) {
        if (A.length > 0 && B.length > 0) {
            if (A[0] < B[0]) {
                solution.push(A.shift());
            } else {
                solution.push(B.shift());
            }
        } else if (A.length == 0) {
            solution.push(B.shift());
        } else {
            solution.push(A.shift());
        }
    }
    return solution;
}