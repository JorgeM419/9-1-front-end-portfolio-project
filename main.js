const url =`https://db.ygoprodeck.com/api/v7/cardinfo.php`
const element = document.querySelector('*');

form.addEventListener("Check Price", (event) => {
    event.preventDefault();

    const { card } = event.target;
  console.log(card);
  getNewCardSearch(card.value);
});

let searchInfo = {};

function getNewCardSearch (card) {
    fetch(`${url}${card}?format=j1`)
    .then((response) => response.json())
    .then((json)=> {
        console.log(`${json}`);

        searchInfo["Card-name"] = json.data[0].name[0].value;
        searchInfo["Card-set"] = json.data[1].setName[0].value;
        getObjectData(searchInfo);
    })
    .catch((error) => {
        console.log(error)
    })

}



fetch(url)
.then((res) =>res.json())
.then((resJson) => console.log(resJson))
.catch((err) => console.log(err));