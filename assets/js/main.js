
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

let elements = document.querySelectorAll("div");
console.log(`This portrait contains ${elements.length} HTML div elements`);

var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}
setInterval(pointerCheck, 1000);
function pointerCheck() {
	console.log('Cursor at: '+pointerX+', '+pointerY);
}

var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;

function getXYPosition(e) {
    myMouseX = (e || event).clientX;
    myMouseY = (e || event).clientY;
    if (document.documentElement.scrollTop > 0) {
        myMouseY = myMouseY + document.documentElement.scrollTop;
    }
    if (xyOn) {
        alert("X is " + myMouseX + "\nY is " + myMouseY);
    }
}
function toggleXY() {
    xyOn = !xyOn;
    document.getElementById('xyLink').blur();
    return false;
}

document.onmouseup = getXYPosition;
