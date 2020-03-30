var startButton = document.getElementById('start')
var stopButton = document.getElementById('stop')
var td = document.getElementsByTagName('td')
var pointsBoardParent = document.getElementsByClassName('points-board')[0]
var i, prevRandNumber, randomColor, clear = 0, randomNumber = 0, point = 0;

var colorArray1 = ['#2b34cf', '#57cf23', '#f5372a', '#1d8ec2', '#d2db25', '#db8325', '#2b34cf', '#13ba5e', '#575757']
var colorArray = ['purple', 'blue', 'grey',  'orange', 'crimson', 'yellow', 'green', 'black', 'violet']

function clearBoard() {
  for (i = 0; i < td.length; i++) {
    td[i].style.backgroundColor = "white";
  }
}

function getRandomNumber(prevRandNumber) {
  var number = Math.floor((Math.random() * 10))

  if (number == 0) {
    if (prevRandNumber != 1) {
      number = 1
    }
    else {
      number = 2
    }
  }

  else if (number == prevRandNumber) {
    if ((number + 1) > 9) {
      number -= 1
    }
    else {
      number += 1
    }
  }

  return number
}

function checkEvent(id) {
  if (td[id - 1].style.backgroundColor != "white") {
    point += 1;

    var editPointsBoard = pointsBoardParent.children[0]
    editPointsBoard.innerText = ("POINTS : " + point);

  }
}

function createPointsBoard() {
  var pointsBoard = document.createElement('span')

  pointsBoard.className = "point-board"
  pointsBoard.innerText = ("POINTS : " + point);

  pointsBoardParent.appendChild(pointsBoard)
}

function startGame() {
  if (clear == 0) {
    if (pointsBoardParent.children.length == 0) {
      createPointsBoard()
    }
    
    clear = setInterval(function() {
      prevRandNumber = randomNumber
      randomNumber = getRandomNumber(prevRandNumber)
      randomColor = colorArray[randomNumber - 1]
      clearBoard()

      var getBlock = document.getElementById(randomNumber)
      getBlock.style.backgroundColor = randomColor;

    }, 700)
  }
}

function stopGame() {
  clearInterval(clear)
  clearBoard()

  clear = 0;
}

startButton.addEventListener('click', startGame)
stopButton.addEventListener('click', stopGame)

// for (i = 0; i < td.length; i++) {
//   td[i].addEventListener('mouseDown', checkEvent(i))
// }