$(function () {
    //(2, '2A', '')
    //var entry = { N: 10, S: '10D 10G', T: '1A 1C 1D 1E 2A 2B 2C 2D 3A 3B 3C 3D 3E 4A 4B 4C 4D 4E 5A 5B 5C 5D 5E 10F' };
    var entry = { N: 2, S: '', T: '1B' };

    var html = '';
    for (let i = 0; i < entry.N; i++) {
        html += '<tr>';
        for (let y = 0; y < entry.N; y++) {
            html += '<td></td>';
        }
        html += '</tr>';
    }
    $('#raft').html(html);
    var barrels = entry.S.length > 0 ? entry.S.split(' ') : [];
    var occupiedSeats = entry.T.length > 0 ? entry.T.split(' ') : [];
    var barrel = true;
    var markOccupied = function (seat) {
        let row = seat.substring(0, seat.length - 1);
        let column = seat.substring(seat.length - 1).charCodeAt(0) - 64;

        $('#raft').find('tr:nth-child(' + row + ')').find('td:nth-child(' + column + ')').addClass(barrel ? 'barrel' : 'dwarf');
    };
    barrels.forEach(markOccupied);
    barrel = false;
    occupiedSeats.forEach(markOccupied);


    $('#solution').text(solution(entry.N, entry.S, entry.T));
})


function solution(N, S, T) {
    // write your code in JavaScript (Node.js 6.4.0)
    var barrels = S.length > 0 ? S.split(' ') : [];
    var occupiedSeats = T.length > 0 ? T.split(' ') : [];

    var raft = [];
    var raftOccupation = [[0, 0], [0, 0]];
    var raftWeight = [[0, 0], [0, 0]];
    var barrelsSort = true;

    var markOccupied = function (seat) {
        let row = seat.substring(0, seat.length - 1) - 1;
        let column = seat.charCodeAt(seat.length - 1) - 65;

        raftOccupation[(row < N / 2 ? 0 : 1)][(column < N / 2 ? 0 : 1)] += 1;
        if (!barrelsSort)
            raftWeight[(row < N / 2 ? 0 : 1)][(column < N / 2 ? 0 : 1)] += 1;

        if (!raft[row]) {
            raft[row] = [];
        }

        raft[row][column] = 1;
    };

    barrels.forEach(markOccupied);
    barrelsSort = false;
    occupiedSeats.forEach(markOccupied);

    var evaluate = function (array, execute) {
        array.forEach(function (element, index) {
            element.forEach(function (subElement, subIndex) {
                execute(subElement, index, subIndex);
            });
        });
    };
    
    var minRaftWeight = 0;
    evaluate(raftWeight, function (element, x, y) {
        if (minRaftWeight < element) {
            minRaftWeight = element;
        }
    });

    var maxSeats = Math.pow(N / 2, 2);
    var maxAvailableSeats = maxSeats;
    evaluate(raftOccupation, function (element, x, y) {
        let maxDwarves = (maxSeats - element + raftWeight[x][y]);
        if (maxAvailableSeats > maxDwarves) {
            maxAvailableSeats = maxDwarves;
        }
    });

    if (maxAvailableSeats < minRaftWeight)
        return -1;

    var solution = 0;
    var maxFirst = maxSeats - raftOccupation[0][0] + raftWeight[0][0];
    if (maxFirst > maxSeats - raftOccupation[1][1] + raftWeight[1][1])
        maxFirst = maxSeats - raftOccupation[1][1] + raftWeight[1][1];
    solution += (maxFirst * 2) - raftWeight[0][0] - raftWeight[1][1];

    maxFirst = maxSeats - raftOccupation[1][0] + raftWeight[1][0];
    if (maxFirst > maxSeats - raftOccupation[0][1] + raftWeight[0][1])
        maxFirst = maxSeats - raftOccupation[0][1] + raftWeight[0][1];
    solution += (maxFirst * 2) - raftWeight[0][1] - raftWeight[1][0];
    
    return solution;
}