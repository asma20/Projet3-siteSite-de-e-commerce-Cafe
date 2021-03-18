$(function () {
    section()
    let itemsMainDiv = ('.MultiCarousel');
    let itemsDiv = ('.MultiCarousel-inner');
    let itemWidth = "";
   
    $('.leftLst, .rightLst').click(function () {
        let condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });
   

    ResCarouselSize();
   
 
    $(window).resize(function () {
        ResCarouselSize();
        
    });
    


    //this function define the size of the items
    function ResCarouselSize() {
        let incno = 0;
        let dataItems = ("data-items");
        let itemClass = ('.item');
        let id = 0;
        let btnParentSb = '';
        let itemsSplit = '';
        let sampwidth = $(itemsMainDiv).width();
        let bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            let itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            console.log(btnParentSb)
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        let leftBtn = ('.leftLst');
        let rightBtn = ('.rightLst');
        let translateXval = '';
        let divStyle = $(el + ' ' + itemsDiv).css('transform');
        let values = divStyle.match(/-?[\d\.]+/g);
        let xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            let itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }
    
    //It is used to get some elements from btn
    function click(ell, ee) {
        let Parent = "#" + $(ee).parent().attr("id");
        let slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }
    
    function section( ){
        let the = [
            { title: "Thé Noir Pomme Amande Cannelle", prix: "4,90 € – 6,70 € TTC", Description: "", image: "images/pomme-amande-cannelle-300x300.jpg" },
            { title: "Thé Noir English Breakfast Broken", prix: "88", Description: "", image: "images/pomme-amande-cannelle-300x300.jpg" },
            { title: "Thé Noir English", prix: "", Description: "fhdfdh", image: "images/pomme-amande-cannelle-300x300.jpg" },
            { title: "Thé Noir", prix: "", Description: "fdhdh", image: "images/pomme-amande-cannelle-300x300.jpg" },
        ]
     
        $('<div class="container">').appendTo('body') 
        $('<div class="row">').appendTo('body')
        $('<div class="col-lg-4">').appendTo('body')
        
        for (items = 0; items <= the.length - 1; items++) {
        $('<div class="item">').appendTo('body')
            $('<div class="col">').appendTo('body')
            $('<div class="card h-100">').appendTo('body')
            $('<img src="images/the-noir-bio-cour-de-recre-600x600.jpg" class="card-img-top" alt="...">').appendTo('body')
            $('<div class="card-body">').appendTo('body')
            $('<h5 id="title">').html(the[items].title).appendTo('body')
            $('<p class="card-text" id="description"></p>').appendTo('body')
            $('</div>').appendTo('body')
            $('<div class="card-footer">').appendTo('body')
            $('<span>').html(5,70).appendTo('body')
            $('</span>').appendTo('body')
            $('<button type="button" class="btn shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal">').appendTo('body')
            $('<i class="fas fa-shopping-bag">').appendTo('body')
            $('</i>').appendTo('body')
            $('<span class="d-none d-md-inline">').html("Ajouter au panier").appendTo('body') 
            $(' </span>').appendTo('body')
            $('</button>').appendTo('body')
            $(' </div>').appendTo('body')
            $('</div>').appendTo('body')
            $(' </div>').appendTo('body')
            $(' </div>').appendTo('body')

        }
                    
            $(' </div>').appendTo('body')
            $('</div>').appendTo('body')
            $('</div>').appendTo('body')
        
        
        }
});
//fonctions du panier
let basketTotal = 0
//ajouter un élément au panier : récupérer le nom du produit et son prix dans les attributs du bouton
function addItem(element) {
    let itemName = $(element).attr("data-name")
    let itemPrice = $(element).attr("data-price")
    localStorage.setItem(itemName, itemPrice)
    doShowAll()
    total()
}

function ClearAll() {
    localStorage.clear()
    doShowAll()
}

//afficher les informations dans le panier, dans un tableau
function doShowAll() {
    let key = ""
    let list = "<tr><th>Item</th><th>Value</th></tr>\n"
    let items = 0
    for (items = 0; items <= localStorage.length - 1; items++) {
        key = localStorage.key(items)
        list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n"
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
        list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n"
    }
    //Bind the data to HTML table.
    $("#list").html(list)
}
function SaveItem() {
    let name = $("#name").val()
    let data = $("#quantity").val()
    localStorage.setItem(name, data)
    doShowAll()
    total()
}
function total(){
    if(localStorage.length > 0){
        let sum = 0;
        for (let index=0, len=localStorage.length; index<len; index++){
            let key = localStorage.key(index) 
            let val = parseFloat(localStorage.getItem(key))
            sum += val
            $("#basketTotalTarget").html(sum + " €uros")
            localStorage.setItem("basketSum", sum)
        }
    }
}
function validate(){
    let sum = localStorage.getItem("basketSum")
    alert ("La commande a été passée pour un montant de " + sum + " euros. Merci pour votre achat !")
}
