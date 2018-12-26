var f = function () {
    
    var eventHandler = function (event) {
        var divElement = document.getElementsByTagName('div')[0];
        divElement.textContent = 'X=' + window.scrollX + 'Y=' + window.scrollY;
    };
    
    window.addEventListener('scroll', eventHandler, false);
    
};

document.addEventListener('DOMContentLoaded', f, false);