$(function () {
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


   

    // function section( ){
     
           
    //     var the = [
    //         { title: "Thé Noir Pomme Amande Cannelle", prix: "4,90 € – 6,70 € TTC", Description: "", image: "images/pomme-amande-cannelle-300x300.jpg" },
    //         { title: "Thé Noir English Breakfast Broken", prix: "88", Description: "", image: "images/pomme-amande-cannelle-300x300.jpg" },
    //         { title: "Thé Noir English", prix: "", Description: "fhdfdh", image: "images/pomme-amande-cannelle-300x300.jpg" },
    //         { title: "Thé Noir", prix: "", Description: "fdhdh", image: "images/pomme-amande-cannelle-300x300.jpg" },
        
    //       ]
     
    //     $('<div class="container">').appendTo('body') 
    //           $('<div class="row">').appendTo('body')
    //            $('<div class="MultiCarousel" data-items="1,2,4,4" data-slide="1" id="MultiCarousel" data-interval="1000">').appendTo('body')
    //               $('<div class="MultiCarousel-inner">').appendTo('body')
        
    //               for (items = 0; items <= the.length - 1; items++) {
    //                 $('<div class="item">').appendTo('body')
    //                   $('<div class="col">').appendTo('body')
    //                     $('<div class="card h-100">').appendTo('body')
    //                     $('<img src="images/the-noir-bio-cour-de-recre-600x600.jpg" class="card-img-top" alt="...">').appendTo('body')
    //                     $('<div class="card-body">').appendTo('body')
    //                     $('<h5 id="title">').html(the[items].title).appendTo('body')
    //                     $('<p class="card-text" id="description"></p>').appendTo('body')
    //                     $('</div>').appendTo('body')
    //                     $('<div class="card-footer">').appendTo('body')
    //                     $('<span>').html(5,70).appendTo('body')
    //                     $('</span>').appendTo('body')
    //                     $('<button type="button" class="btn shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal">').appendTo('body')
    //                     $('<i class="fas fa-shopping-bag">').appendTo('body')
    //                     $('</i>').appendTo('body')
    //                     $('<span class="d-none d-md-inline">').html("Ajouter au panier").appendTo('body') 
    //                     $(' </span>').appendTo('body')
    //                     $('</button>').appendTo('body')
    //                     $(' </div>').appendTo('body')
    //                             $('</div>').appendTo('body')
    //                             $(' </div>').appendTo('body')
    //                             $(' </div>').appendTo('body')
        
    //               }
    //                             $(' </div>').appendTo('body')
    //                             $(' </div>').appendTo('body')
    //                             $(' </div>').appendTo('body')
    //                             $('</div>').appendTo('body')
        
        
    //     }
});

