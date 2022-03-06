const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res) {
    var q = req.body.query;
    var no_articles = req.body.articles;
    // var country = req.body.countryname;  

    const options = {
        "method": "GET",
        "hostname": "free-news.p.rapidapi.com",
        "port": null,
        "path": "/v1/search?&lang=en&q="+q+"&page_size="+no_articles,
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "908a5a8504mshdfd62c2cdeec86ap15fdb2jsn78689dd4555f",
            "useQueryString": true
        }
    };
    
    
    https.get(options, function (response) {
        
        response.on("data", function(data) {
            const NewsData = JSON.parse(data);
            // const cards = document.querySelectorAll(".newscard");
            // for (i=0; i<no_articles; i++) {
            //     var the_data=[];
            //     var head_article = NewsData.articles[i].title;
            //     var link_article = NewsData.articles[i].link;
            //     var content = NewsData.articles[i].summary;
            //     // the_data.push([head_article, content, link_article]);
            //     // console.log("saving data "+(i+1));
                
            //     if(cards[i].classList.contains("hidden")) {
            //         //nothing
            //     } else {
            //         cards[i].getElementsByClassName("heading").innerHTML = head_article;
            //         cards[i].getElementsByClassName("card-text").innerHTML = content;
            //         cards[i].getElementsByClassName("news-url").setAttribute("href", link_article);
            //         console.log("saved "+(i+1));
            //     }

            // };

            console.log("API status: "+NewsData.status);
        })

    })
})

app.listen(3000, function() {
    console.log("Server running on port 3000");
})


// API Key
// zlXeq8Z62nLEUJNYYQ5sHuRjcdxYMlBeZPbWm2-d0SA

