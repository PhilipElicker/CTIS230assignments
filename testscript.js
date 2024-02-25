myitem = document.getElementById("firsttest");      // Defines a variable used to get the element containing the identifier "firsttest"

    myitem.addEventListener("click", onClick);      // Adds an event listener to the "firsttest" element that listens for mouse clicks

    function onClick() {                            // Defines what the program will do when the "firsttest" element is clicked
        myitem.style.color = "Blue";                // Changes the color of the text within the element to Blue
        myitem.style.borderStyle = "Dotted";
        myitem.style.borderWidth = "1px";
    }
    myitem.addEventListener("mouseout", onLeave);    // Adds an event listener to the "firsttest" element that listens for when the mouse leaves

    function onLeave() {                             // Defines what the program will do when the mouse leaves the "firsttest" element
        myitem.style.color = "";                     // Resets the style to default values
        myitem.style.borderStyle = "";                // Resets the style to default values
        myitem.style.borderWidth = "";                // Resets the style to default values
    }