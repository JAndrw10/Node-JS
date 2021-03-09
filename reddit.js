// walkthrough part 2 # 3
const rp = require("request-promise");



//part 2 #4
const options = {
    uri: "https://reddit.com/r/popular.json",
    json: true
};

//part 2 #4
rp(options)
    .then(data => {
        let extractedArticleArr = [];

        data.data.children.forEach(article =>{
            extractedArticleArr.push({
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            })
        })

        fs.writeFile("popular-articles.json", JSON.stringify(chirpTrends),  (err) => {
            if (err) throw err;
            console.log('Saved!'); // could also put chirps instead of Saved! to meet lab requirements
        });
    })  
    .catch(err => console.log(err));
//end part 2 #4

    

let path = require ('path');
let fs = require ('fs');

let request = require('request');

let dataPath = path.join(__dirname, './popular.json');




 // fix line 23 
request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);
    // console.log(res);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath, item.data.title + '\n' + item.data.url + '\n' + item.data.author);
    });

   
});

// rp("https://reddit.com/r/popular.json")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//#3 on part 2 