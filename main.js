var elem = document.querySelector('.summer-2022-anime-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    groupCells: '70%',
    contain: true,
    pageDots: false,
    wrapAround: true,
    freeScroll: true
});

var elem2 = document.querySelector('.new-episode-arrivals-carousel');
var flkty2 = new Flickity(elem2, {
    cellAlign: 'left',
    groupCells: '60%',
    contain: true,
    pageDots: false,
    wrapAround: true,
    freeScroll: true
});

var elem3 = document.querySelector('.popular-anime-trailers-carousel');
var flkty3 = new Flickity(elem3, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    lazyLoad: 4
});