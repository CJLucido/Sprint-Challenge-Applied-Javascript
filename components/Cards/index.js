// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardCase = document.querySelector('.cards-container');

axios 
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
       // console.log(response);

       console.log(response.data.articles.javascript)
       let bootVals =[];
        response.data.articles.bootstrap.forEach(object => {
                  bootVals.push(Object.values(object));
        });
        let bootVals2 = [];
       bootVals2 = bootVals.slice(0, 1);
       let bootVals3 = [];
       bootVals3 = bootVals.slice(1, 2);
       let bootVals4 = [];
       bootVals4 = bootVals.slice(2, 3);

               cardCase.appendChild(createCard(bootVals2));
               cardCase.appendChild(createCard(bootVals3));
               cardCase.appendChild(createCard(bootVals4));

    let jsVals =[];
    response.data.articles.javascript.forEach(object => {
                  jsVals.push(Object.values(object));
        });
        let jsVals2 = [];
       jsVals2 = jsVals.slice(0, 1);
       let jsVals3 = [];
       jsVals3 = jsVals.slice(1, 2);
       let jsVals4 = [];
       jsVals4 = jsVals.slice(2, 3);
       let jsVals5 = [];
       jsVals5 = jsVals.slice(3, 4);

            cardCase.appendChild(createCard(jsVals2));
            cardCase.appendChild(createCard(jsVals3));
            cardCase.appendChild(createCard(jsVals4));
            cardCase.appendChild(createCard(jsVals5));

        //     response.data.articles.javascript.forEach(object => {
        //         let newArray =[];
        //         newArray = Array.from(object);
        
        //         cardCase.appendChild(createCard(newArray));
        // });
        //     response.data.articles.jquery.forEach(object => {
        //         let newArray =[];
        //         newArray = Array.from(object);
        
        //         cardCase.appendChild(createCard(newArray));
        // });
        //     response.data.articles.node.forEach(object => {
        //         let newArray =[];
        //         newArray = Array.from(object);
        
        //         cardCase.appendChild(createCard(newArray));
        // });
        //     response.data.articles.technology.forEach(object => {
        //         let newArray =[];
        //         newArray = Array.from(object);
        
        //         cardCase.appendChild(createCard(newArray));
        // });
    })
    .catch(error => {
        console.log("Whoops! <- There it is.", error)
    })

//articles(object).values(that are arrays of objects)

// articles.bootstrap/javascript/jquery/node/technology.forEach(object => {
//         let newArray =[];
//         newArray = Array.from(object);

//         cardCase.appendChild(createCard(newArray));
//  })


  function createCard(item){
        const
            cardee = document.createElement('div'),
                headlinee = document.createElement('div'),
                authee = document.createElement('div'),
                    imgee = document.createElement('div'),
                        imgSrcee = document.createElement('img'),
                creditee = document.createElement('span');

        cardee.classList.add('card');
        headlinee.classList.add('headline');
        authee.classList.add('author');
        imgee.classList.add('img-container');

        ///give them their content
        item.forEach(element=>{
        headlinee.textContent = element[0];
        imgSrcee.src = element[1];
        creditee.textContent = `By ${element[2]}`;
        });

        //structure
        cardee.appendChild(headlinee);
        cardee.appendChild(authee);
        authee.appendChild(imgee);
        imgee.appendChild(imgSrcee);
        cardee.appendChild(creditee);


        return cardee //this is fine, dont change!


  }