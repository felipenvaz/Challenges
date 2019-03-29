$(function () {

})

function generateSample() {
    return {
        A: Math.round(Math.random() * 9) + 1,
        B: Math.round(Math.random() * 9) + 1
    }
}

function resolveChessProblem(A, B) {
    var chessTable = []; chessTable[0] = []; chessTable[0][0] = 0;
    var solution = -1;

    var checkBestNextJump = function (jumpX, jumpY) {
        var bestJumps = [];

        if (jumpX < A) {
            for (let i = 2; i >= -2; i--) {
                if (i == 0)
                    continue;
                bestJumps.push({ nextX = jumpX + i });
                bestJumps.push({ nextX = jumpX + i });
            }
        } else {
            for (let i = -2; i <= 2; i++) {
                if (i == 0)
                    continue;
                bestJumps.push({ nextX = jumpX + i });
                bestJumps.push({ nextX = jumpX + i });
            }
        }

        if (jumpY < B) {
            for (let i = 0; i < bestJumps.length; i++) {

                bestJumps.push({ nextY = jumpY + i });
                bestJumps.push({ nextY = jumpY + i });
            }
        } else {
            for (let i = -2; i <= 2; i++) {
                bestJumps.push({ nextX = jumpX + i });
                bestJumps.push({ nextX = jumpX + i });
            }
        }
    };

    var nextJump = function (jumpX, jumpY) {
        if (jumpX == A && jumpY == B) {
            let currentSteps = chessTable[jumpX][jumpY];
            if (solution > currentSteps) {
                solution = currentSteps;
            }
        } else {

        }
    };
}