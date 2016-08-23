//Anchor Beautifier v0.0.1

var AnchorBeautifier = {

    config: {
        attribute: 'href',
        anchorPrefix: '#'
    },

    initConfig: function (initVars) {
        this.config.attribute = initVars.attribute;
        this.config.anchorPrefix = initVars.anchorPrefix;

        this.start();
    },

    start: function () {

        x = document.getElementsByClassName("cool-anchor");

        x = document.querySelector(".cool-anchor");
        x.addEventListener("click", doSomething, false);

        function doSomething(e) {
            var clickedItem = e.target;
            console.log("Hello " + clickedItem.getAttribute("href"));
        }

    }

}


//window.history.pushState(page, document.title, '/'+page);
