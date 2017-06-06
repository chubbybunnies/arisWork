function answerQuestions(){

  var answerA = document.getElementById("answerA"),
      answerB = document.getElementById("answerB"),
      answerC = document.getElementById("answerC"),
      answerD = document.getElementById("answerD"),
      exit = document.getElementById("exit"),
      response = document.createElement("div");

  var tableStuff = document.getElementById("tableStuff");

  //function subtractStars(subtractStar){


    //subtractStar = document.getElementById("starPoints").innerHTML -=1;


    //return subtractStar;

  //};

  function incorrectAnswer(){

    alert("Incorrect. Try Again.");

  };

  answerA.onclick = function(){

    window.location = "https://www.arisgames.org";
    //ARIS.exitToPlaque(133070);

  };

  answerB.onclick = function(){

    tableStuff.deleteRow(1);
    tableStuff.insertRow(1);
    incorrectAnswer();
    //subtractStars();

    response.innerHTML = "<p>Your answer was terrible</p>";
    document.body.appendChild(response);

  };

  answerC.onclick = function(){

    tableStuff.deleteRow(2);
    tableStuff.insertRow(2);
    incorrectAnswer();
    //subtractStars();

    response.innerHTML = "<p>Your answer was horrible. Try again</p>";

    document.body.appendChild(response);
  };

  answerD.onclick = function(){

    tableStuff.deleteRow(3);
    tableStuff.insertRow(3);
    incorrectAnswer();
    //subtractStars();

    document.body.appendChild(response);
    response.innerHTML = "<p>Your answer was meh. Try again</p>";
  };

  exit.onclick = function(){

    window.location = "file:///home/srivera1/Desktop/questionsTable/table.html";

  };
}
answerQuestions();


