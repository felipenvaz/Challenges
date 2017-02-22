$(function () {
    $main = $('#brackets-solution');

    for (let i = 0; i < 10; i++) {
        var sample = generateSample();
        $main.append(sample);

        var solution = resolveBracketsProblem(sample);
        let text = '';
        text += Helper.addLine('Solution: ' + solution.solution);
        text += Helper.addLine(solution.leftToRight);
        text += Helper.addLine(solution.rightToLeft);
        text += Helper.addLine('Part1: ' + sample.substring(0, solution.solution));
        text += Helper.addLine('Part2: ' + sample.substring(solution.solution));
        text += Helper.addLine('- - - - - - - - - -');
        $main.append(text);
    }
})

function resolveBracketsProblem(S) {
    var leftToRight = [];
    for (var i = 0; i < S.length; i++) {
        var match = (S[i] == '(' ? 1 : 0);
        leftToRight[i] = i == 0 ? match : match + leftToRight[i - 1];
    }

    var rightToLeft = [];
    for (var i = (S.length - 1); i >= 0; i--) {
        var match = (S[i] == ')' ? 1 : 0);
        rightToLeft[i] = i == (S.length - 1) ? match : match + rightToLeft[i + 1];

    }

    var solution = 0;
    for (var i = 0; i < S.length; i++) {
        if ((i < (S.length - 1))
            && (leftToRight[i] == rightToLeft[i + 1])) {
            solution = i + 1;
            break;
        }
    }

    return { solution: solution, leftToRight: leftToRight, rightToLeft: rightToLeft };
}

function generateSample() {
    var size = Math.round((Math.random() * 38)) + 2;
    var bracketsSample = '';
    for (let i = 0; i < size; i++) {
        if (Math.round(Math.random()) === 0) {
            bracketsSample += '(';
        } else {
            bracketsSample += ')';
        }
    }

    return bracketsSample;
}