'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_OFFSET = 10;
var OUTER_GAP = 20;
var STRING_HEIGHT = 20;
var INNER_X_GAP = 50;
var INNER_Y_GAP = 10;
var BAR_WIDTH = 40;

var messageX = CLOUD_X + OUTER_GAP;
var messageY = CLOUD_Y + OUTER_GAP;
var graphAreaX = CLOUD_X + 2 * OUTER_GAP;
var graphAreaY = CLOUD_Y + OUTER_GAP + 2 * STRING_HEIGHT;
var barHeight = 150;
var YOU_RECT_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', messageX, messageY);
  ctx.fillText('Список результатов:', messageX, messageY + STRING_HEIGHT);

  function renderGraphElement(playerNumber, rectColor) {
    var rectXOffset = i * (BAR_WIDTH + INNER_X_GAP);
    var rectX = graphAreaX + rectXOffset;
    var rectHeight = barHeight * times[i] / maxTime;
    var rectHeightDiff = barHeight - rectHeight;
    var timeY = graphAreaY + rectHeightDiff;

    ctx.fillText(Math.round(times[i]), rectX, timeY);

    var rectY = timeY + STRING_HEIGHT;

    ctx.fillStyle = rectColor;
    ctx.fillRect(rectX, rectY, BAR_WIDTH, rectHeight);

    ctx.fillStyle = '#000000';
    var playerY = rectY + rectHeight + INNER_Y_GAP;

    ctx.fillText(players[i], rectX, playerY);
  }

  var maxTime = getMaxElement(times);

  var i = 0;

  var otherRectColor;

  function handleAndGoNext() {
    otherRectColor = 'hsl(240, 50, ' + Math.trunc(Math.random() * 100).toString() + ')';
    renderGraphElement(i, otherRectColor);
    i++;
  }

  while (players[i] !== 'Вы' && i < players.length) {
    handleAndGoNext();
  }

  if (players[i] === 'Вы') {
    renderGraphElement(i, YOU_RECT_COLOR);
    i++;
  }

  while (i < players.length) {
    handleAndGoNext();
  }
};
