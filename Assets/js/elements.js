// function BasicElement(divIn){
//   this.div = divIn;


//   maincanvas.appendChild(this.div);
//   $(this.div).draggable({cursor: "crosshair"})

//   this.getPosition=function(){
//     return $(this.div).position();
//   }

  // this.getJSON=function(){
  //   // myString = ''


  //   return {"position": this.getPosition(),"array":[]};
  // }


// }


/* 
{
 id: "sdofijdfogij",
 top: 123,
 left: 2234,
 headingText: "dfgdf",
 otherText: "gdfgdf"
}
*/



// function Element(dataElement) {
//   console.log(dataElement)
//   this.id=dataElement._id;

//   this.pos={"x":dataElement.xPos, "y":dataElement.yPos};
//   // this.content=dataElement.content;
  
//   // this.type=dataElement.type;

//   // this.thisDiv=document.createElement('div')
//   // var maincanvas= document.getElementById("maincanvas")
//   // this.className = type
//   // maincanvas.appendChild(type);


//   // this.display =function(){

//   // }
//   // this.getJSONInfo=function(){
//   // }
//   // this.addDragability=function(){

//   //   $(this.thisDiv).draggable({
//   //     drag: function(){
//   //           var offset = $(this).offset();
//   //           var xPos = offset.left;
//   //           var yPos = offset.top;
//   //       }})
//   // }
// }


// function addText() {
// }
// addText.prototype= new Element();
// addText.prototype.innerHTML='<textarea id=text rows="1" cols="50" placeholder="Type Here..."></textarea>'
// var textButton = document.getElementById('textbutton');
// textButton.addEventListener('click', addText);

  // Create a new div 
  // var maincanvas= document.getElementById("maincanvas")
  // var textbox = document.createElement('div')
  // textbox.className = 'textbox';
  // Add it to the main canvas
  // maincanvas.appendChild(textbox);
  // $(textbox).draggable({
  //     drag: function(){
  //           var offset = $(this).offset();
  //           var xPos = offset.left;
  //           var yPos = offset.top;
  //           $('#posX').text('x: ' + xPos);
  //           $('#posY').text('y: ' + yPos);
  //       }})
// }



// Code to add textboxes
// ---------------------------------------------

function addText() {
  // Create a new div 
  var maincanvas= document.getElementById("maincanvas")
  var textbox = document.createElement('div')
  textbox.className = 'textbox';
  textbox.innerHTML = '<textarea id=text rows="1" cols="50" placeholder="Type Here..."></textarea>'
  // Add it to the main canvas
  maincanvas.appendChild(textbox);
  $(textbox).draggable({
      drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
        }})
}

var textButton = document.getElementById('textbutton');
textButton.addEventListener('click', addText);

// Code to add questions
// ---------------------------------------------

function addQuestion(top,left,question,answer) {
  // Create a new div 
  // var answer= "test answer"
  var maincanvas= document.getElementById("maincanvas")

  var questbox = document.createElement('div')
  questbox.className = 'questbox';
  questbox.innerHTML = '<textarea id=question rows="1" cols="50" placeholder="QUESTION"></textarea><br><textarea id=answer rows="6" cols="50" placeholder="Type Here..."></textarea>'
    maincanvas.appendChild(questbox);

  $(questbox).offset({ top: top, left: left });
  $('#question').val(question);
  $('#answer').val(answer);

  $(questbox).draggable({ drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
        }})



}

var questButton = document.getElementById('quest');
questButton.addEventListener('click', addQuestion);

// Code to add Arduino
// ---------------------------------------------

function addArduino() {
  // Create a new div 
  var maincanvas= document.getElementById("maincanvas")
  var arduino = document.createElement('div')
  arduino.className = 'arduinos';
  arduino.innerHTML = '<img src="assets/images/arduino.png" width=400px/>'
  // Add it to the main canvas
  maincanvas.appendChild(arduino);
  $(arduino).draggable({cursor: "crosshair"})

}

var arduinobutton = document.getElementById('arduino');
arduinobutton.addEventListener('click', addArduino);








var maincanvas;

///make elements draggable
$(document).ready(function(){
  //result is working
    maincanvas= document.getElementById("maincanvas")
    $(".frame").draggable();
  //not working  
    $("#codeeditor").draggable();
    $(".p5editor").draggable();


});