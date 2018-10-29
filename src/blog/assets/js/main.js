$(document).ready(function(){
    init()
});

const init = () => {
    // set fix navbar
    setSidebarFixed()

    // back article in mobile
    backArticle()

    // article click in mobile
    articleClick()
}

const setSidebarFixed = () => {
    if (!isMobile())
        $(".wrapper-inside-side-bar").sticky({topSpacing:30});
}

const getWidth = () => {
    const w = window.innerWidth
    return w
}

const isMobile = () => {
    const w = getWidth()
    return w < 600 ? true : false;
}

const backArticle = () => {
    if (isMobile()) {
        $(".back-article").click(function() {
            addClassGeser()
        })
    }
}

const addClassGeser = () => {
    $(".content-blog").addClass('geser')
    $(".wrapper-content-article").fadeOut('250')
}

const removeClassGeser = () => {
    $(".content-blog").removeClass('geser')
    $(".wrapper-content-article").fadeIn('250')
}

const articleClick = () => {
    $(".list-article > li").click(function() {
        console.log('wow')
        if (isMobile()) {
            removeClassGeser()
        }
    })
}