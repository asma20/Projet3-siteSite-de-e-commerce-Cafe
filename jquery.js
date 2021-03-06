$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
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
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
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
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
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
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


$(function () { 

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
}); 
//fonctions du panier
let basketTotal = 0
//ajouter un ??l??ment au panier : r??cup??rer le nom du produit et son prix dans les attributs du bouton
function addItem(element) {
    let itemName = $(element).attr("data-name")
    let itemPrice = $(element).attr("data-price")
    localStorage.setItem(itemName, itemPrice)
    doShowAll()
    total()
}

function ClearAll() {
    localStorage.clear()
    sessionStorage.clear()
    doShowAll()
}

//afficher les informations dans le panier, dans un tableau
function doShowAll() {
    let key = ""
    let list = "<tr><th>Produit</th><th>Prix</th></tr>\n"
    let items = 0
    for (items = 0; items <= localStorage.length - 1; items++) {
        key = localStorage.key(items)
        list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n"
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Produit</th><th>Prix</th></tr>\n") {
        list += "<tr><td><i></i></td>\n<td><i></i></td></tr>\n"
    }
    //Bind the data to HTML table.
    $("#list").html(list)
    total()
}
function SaveItem() {
    let name = $("#name").val()
    let data = $("#quantity").val()
    localStorage.setItem(name, data)
    doShowAll()
}
function total(){
    if(localStorage.length > 0){
        let sum = 0;
        for (let index=0, len=localStorage.length; index<len; index++){
            let key = localStorage.key(index) 
            let val = parseFloat(localStorage.getItem(key))
            sum += val
            $("#basketTotalTarget").html(sum.toFixed(2) + " ???uros")
            sessionStorage.setItem("basketSum", sum)
        }
    }
    else if (localStorage.length == 0){
        sessionStorage.setItem("basketSum",0)
        $("#basketTotalTarget").html(0 + "???")
    }
}
function validate(){
    let sum = localStorage.getItem("basketSum")
    alert ("La commande a ??t?? pass??e pour un montant de " + sum + " euros. Merci pour votre achat !")
}