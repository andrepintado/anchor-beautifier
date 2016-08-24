//Anchor Beautifier vxxx

//aux functions
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

//main stuff
(function() {

    AnchorBeautifier = {

        //default config
        config: {
            attribute: 'href',
            anchorPrefix: '#'
        },

        //start vars
        startVars: {
            basePath: window.location.pathname,
            baseTitle: document.title
        },

        //init function
        init: function (initVars = null) {
            if (null !== initVars) {
                this.config.attribute = initVars.attribute;
                this.config.anchorPrefix = initVars.anchorPrefix;
            }
            this.start();
        },

        start: function () {

            var self = this;

            links = document.getElementsByClassName("cool-anchor");

            //adding click listeners for each cool-anchor element
            [].forEach.call(document.getElementsByClassName("cool-anchor"), function(item,i,arr) {
                item.addEventListener("click", function(eventObject) {
                    var clickedItem = eventObject.target;

                    //tweaking page name
                    pageName = clickedItem.
                                getAttribute(self.config.attribute).
                                replace(self.config.anchorPrefix,"");

                    //tweaking title
                    pageTitle = self.startVars.baseTitle+" - "+pageName.replaceAll("-"," ").toProperCase();

                    //set document title
                    document.title = pageTitle;

                    //set window url
                    //TODO: if href ends in / that's cool, otherwise we have to add it.
                    //se href termina em / cool, senão adiciona
                    setTimeout(function() {
                        window.history.pushState(pageName, pageTitle, self.startVars.basePath+pageName)
                        },
                    0);

                }, false);
            });

        }

    }

})();
