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
    const header = document.createElement ('div');
    header.classList.add("header");

    const headerDate = document.createElement ('span')

    headerDate.classList.add('date');
    headerDate.textContent = 'SMARCH 28, 2019';


    const headerH1 = document.createElement ('h1')
    headerH1.textContent = 'Lambda Times';

    const headerTemp = document.createElement ('span')

    headerTemp.classList.add('temp');
    headerTemp.textContent = '98°';

    header.appendChild(headerDate);
    header.appendChild(headerH1);
    header.appendChild(headerTemp);

//select header container
    const headerContainer = document.querySelector('.header-container');
    //append
    headerContainer.appendChild(header);

}

Header();