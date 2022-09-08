const url =`https://db.ygoprodeck.com/api/v7/cardinfo.php`


fetch(url)
.then((res) =>res.json())
.then((resJson) => console.log(resJson))
.catch((err) => console.log(err));