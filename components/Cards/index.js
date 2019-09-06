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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {

    if (response.data) {
//turn object into array
        let articles = Object.values(response.data.articles);

        articles.forEach(function (topic) {
            topic.forEach(function (article) {
                createCard(article);

            });
        });
    }
 })
  .catch((error) => {
console.log(error);
});



  function createCard (article) {
    const cards = document.querySelector('.cards-container');

    //   console.log(article);
    const card = document.createElement ('div')
    const headline = document.createElement ('div')
    const author = document.createElement ('div')
    const cardImg = document.createElement ('div')
    const cardImgurl = document.createElement ('img')
    const authorName = document.createElement ('span')

    
    
    card.classList.add('card');
    author.classList.add('author');
    headline.classList.add('headline');
    cardImg.classList.add('img-container');
    
    
    cardImgurl.src = article.authorPhoto;;
    headline.textContent = article.headline;    
    authorName.textContent = `By: ${article.authorName}`;


    cardImg.appendChild(cardImgurl);


    author.append(cardImg);

    author.append(authorName);

    card.append(headline);

    card.append(author);
 
    cards.appendChild(card);

    // console.log(card);
    }      
   