// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const 
        headee = document.createElement('div'),
            datee = document.createElement('span'),
            titlee = document.createElement('h1'),
            tempee = document.createElement('span');

        headee.classList.add("header");
         datee.classList.add("date");
         tempee.classList.add("temp");
        

        datee.textContent = "SMARCH 28, 2019";
        titlee.textContent = "Lambda Times";
        tempee.textContent = "98°";

        headee.appendChild(datee);
        headee.appendChild(titlee);
        headee.appendChild(tempee);

    return headee

}


//put in .header-container

const headSpace = document.querySelector(".header-container");

headSpace.appendChild(Header());