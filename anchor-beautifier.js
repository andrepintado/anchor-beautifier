//Anchor Beautifier v0.0.1

var AnchorBeautifier = {

    config: {
        attribute: 'href',
        anchorPrefix: '#'
    },

    startVars: {
        basePath: window.location.pathname
    },

    initConfig: function (initVars) {
        this.config.attribute = initVars.attribute;
        this.config.anchorPrefix = initVars.anchorPrefix;

        this.start();
    },

    start: function () {

        var self = this;

        links = document.getElementsByClassName("cool-anchor");

        [].forEach.call(document.getElementsByClassName("cool-anchor"), function(item,i,arr) {
            item.addEventListener("click", function(eventObject) {
                var clickedItem = eventObject.target;
                pageName = clickedItem.
                            getAttribute(self.config.attribute).
                            replace(self.config.anchorPrefix,"");
                pageTitle = document.title+" - "+pageName;

                //change title
                //TODO: title format with some string tweaks
                document.title = pageTitle;

                //change url
                //TODO: if href ends in / that's cool, otherwise we have to add it.
                //se href termina em / cool, senão adiciona
                setTimeout(function() {
                    window.history.pushState(pageName, pageTitle, self.startVars.basePath+pageName) },
                0);

            }, false);
        });

    }

}


//window.history.pushState(page, document.title, '/'+page);
