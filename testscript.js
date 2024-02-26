myitem = document.getElementById("firsttest");      // Defines a variable used to get the element containing the identifier "firsttest"
button1 = document.getElementById("increaseFontButton");  
button2 = document.getElementById("decreaseFontButton");
button3 = document.getElementById("increaseFontButton2");  
button4 = document.getElementById("decreaseFontButton2");
heading1 = document.getElementById("FontChange1");
heading2 = document.getElementById("FontChange2");
heading3 = document.getElementById("FontChange3");
heading4 = document.getElementById("FontChange4");
body1 = document.getElementById("firsttest");
body2 = document.getElementById("paragraph2");
body3 = document.getElementById("paragraph3");
textentry = document.getElementById("myinput");  
changedText = document.getElementById("TextChange");

    myitem.addEventListener("click", onClick);      // Adds an event listener to the "firsttest" element that listens for mouse clicks
    button1.addEventListener("click", onClickI);
    button2.addEventListener("click", onClickD);
    button3.addEventListener("click", onClickI2);
    button4.addEventListener("click", onClickD2);
    textentry.addEventListener("change", onEnter);

    function onClick() {                            // Defines what the program will do when the "firsttest" element is clicked
        myitem.style.color = "Blue";                // Changes the color of the text within the element to Blue
        myitem.style.borderStyle = "Dotted";
        myitem.style.borderWidth = "1px";
    }
    function onClickI() {
        heading1.style.fontSize = "24px";
        heading2.style.fontSize = "24px";
        heading3.style.fontSize = "24px";
        heading4.style.fontSize = "24px";
    }
    function onClickD() {
        heading1.style.fontSize = "1em"
        heading2.style.fontSize = "1em"
        heading3.style.fontSize = "1em"
        heading4.style.fontSize = "1em"
    }
    function onClickI2() {
        body1.style.fontSize = "20px";
        body2.style.fontSize = "20px";
        body3.style.fontSize = "20px";
    }
    function onClickD2() {
        body1.style.fontSize = "16px"
        body2.style.fontSize = "16px"
        body3.style.fontSize = "16px"
    }
    myitem.addEventListener("mouseout", onLeave);    // Adds an event listener to the "firsttest" element that listens for when the mouse leaves

    function onLeave() {                             // Defines what the program will do when the mouse leaves the "firsttest" element
        myitem.style.color = "";                     // Resets the style to default values
        myitem.style.borderStyle = "";                // Resets the style to default values
        myitem.style.borderWidth = "";                // Resets the style to default values
    }
    function onEnter() {  
        newtext = myinput.value;
        changedText.innerHTML = newtext;  
    }