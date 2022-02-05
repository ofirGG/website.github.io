var board = [];
var lose;
var interval;
var intervalRender;
var current; // current moving shape
var currentX, currentY; // position of current shape
var freezed; // is current shape settled on the board?
@@ -72, 6 + 73, 7 @@function tick() {
    valid(0, 1);
    clearLines();
    if (lose) {
        clearAllIntervals();
        return false;
    }
    newShape();
    @@ -192, 10 + 194, 15 @@function playButtonClicked() {
    }

    function newGame() {
        clearInterval(interval);
        setInterval(render, 30);
        clearAllIntervals();
        intervalRender = setInterval(render, 30);
        init();
        newShape();
        lose = false;
        interval = setInterval(tick, 400);
    }

    function clearAllIntervals() {
        clearInterval(interval);
        clearInterval(intervalRender);
    }