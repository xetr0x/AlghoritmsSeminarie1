
exports.index = (req, res) =>{          //exporterar modulen router samt bildar en funktion med namnet index
    res.readfile('../public/Index.html');            //indexcontroller respondar med att läsa in home.html filen.
    console.log('html site is live!');         //berättar om att html sidan är live

}

exports =  function alg1() {
    console.log("U JUST USED THE BUTTON")
}
