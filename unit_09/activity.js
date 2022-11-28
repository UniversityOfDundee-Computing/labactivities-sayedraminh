

function createNode(element){
    return document.createdElement(element);

}

function append(parent, el){
    return parent.appendChild(el);
}


const mvContainer = document.getElementById('input');
var url = 'http://www.omdbapi.com/?i=tt1201607&apikey=APIKEY'
fetch(url)
.then((resp)=> resp.json())
.then (function(data){

    var inputt = data.search;
    return inputt.map(function(inputt){

        var img = createNode ('img');
        var h5 = createNode ('h5');
        var p = createNode ('p');
        var column = createNode ('div');
        var cardBody = createNode ('div');
        var card  = createNode ('div');

        cardBody.classlist.add('card');
        cardBody.classlist.add('card-body');
        cardBody.classlist.add('col-4');

        img.src = inputt.Poster;
        h5.classlist.add('card-img-top');
        h5.innnerHTML = inputt.Title;
        h5.classlist.add('card-title');
        p.innnerHTML = inputt.Year;
        p.classlist.add('card-text');

        append(card,img);
        append(cardBody,h5);
        append(card,p);
        append(cardBody,card);
        append(column,card);
        append(mvContainer,column);

        console.log(data)

    })
})

.catch(function(error){

    
})
