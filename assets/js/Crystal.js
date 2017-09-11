$(document).ready(function() {
  function randNum() {
    return Math.floor(Math.random() * 10) + 1;
  }

  var redVal = randNum();
  var greenVal = randNum();
  var yellowVal = randNum();
  var orangeVal = randNum();
  var numToWin = randNum() + 29;
  var yourScore = 0;
  var wins = 0;
  var losses = 0;

  $('#numToWin').html(numToWin);

  function reset() {
    [redVal, greenVal, yellowVal, orangeVal].forEach(
      crystal => (crystal = Math.floor(Math.random() * 10) + 1)
    );

    numToWin = randNum() + 29;
    yourScore = 0;
    $('#numToWin').html(numToWin);
    $('#yourScore').html(yourScore);
  }

  $('#redCryst').on('click', function() {
    yourScore += redVal;
    $('#yourScore').html(yourScore);
  });

  $('#greenCryst').on('click', function() {
    yourScore += greenVal;
    $('#yourScore').html(yourScore);
  });

  $('#yellowCryst').on('click', function() {
    yourScore += yellowVal;
    $('#yourScore').html(yourScore);
  });

  $('#orangeCryst').on('click', function() {
    yourScore += orangeVal;
    $('#yourScore').html(yourScore);
  });

  $('.cryst').on('click', function() {
    if (yourScore === numToWin) {
      alert('YOU WIN!!!');
      wins++;
      $('#wins').html(wins);
      reset();
    } else if (yourScore > numToWin) {
      alert('YOU LOSE!!!');
      losses++;
      $('#losses').html(losses);
      reset();
    }
  });
});
