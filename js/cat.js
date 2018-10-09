/*
    developed by yanghaoyu at 2018/10/9
 */

//拖动
//记录元素的相关信息
var params = {
    imgCount: 0,
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false //移动与否的标志
}

var cat;
var catPicture;
var catContainer;
var catController;

//图片预加载数组
var imgs = [];
/*
 init cat object
 */
function createCat(){

    imgLoad();
    catContainer = $("<div id='catContainer' class='catContainer'></div>");
    catContainer.appendTo('body');

    cat = $('<div id="cat"></div>');
    catPicture = $(imgs[params.imgCount]);
    catPicture.appendTo(cat);
    cat.appendTo(catContainer);

    catController = $("<div id='catController'></div>")
    params.left = catController.css("left");
    params.top = catController.css("top");
    catController.click(function () {
        params.imgCount = params.imgCount > 19 ? 0 : params.imgCount + 1;
        var lastImg = catPicture.replaceWith(imgs[params.imgCount]);
        catPicture = $(imgs[params.imgCount]);
        imgs.push(lastImg);
    })
    catController.appendTo(catContainer);

}

function imgLoad() {
    for (let i = 1; i < 20; i++){
        let imgObj = new Image();
        imgObj.src = "catPicture/cat" + i + ".png";
        imgs.push(imgObj);
    }
}