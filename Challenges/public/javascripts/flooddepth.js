$(function () {
    var A = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2];
    var result = solution(A);
})


function solution(A) {
    var deepestFlood = 0;
    var left = 0;
    var pit = -1;
    A.forEach(function (element, index) {
        //first interaction
        if (left == 0) {
            left = element;
        } else {
            if (pit == -1) {
                if (element < left) {
                    pit = element;
                } else {
                    left = element;
                }
            } else {
                if (element > pit) {
                    deepestFlood = Math.max(deepestFlood, Math.min(element - pit, left - pit));
                    if (element >= left) {
                        left = element;
                        pit = -1;
                    }
                } else {
                    pit = element;
                }
            }
        }
    });

    return deepestFlood;
}