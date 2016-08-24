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

            //iterating over cool-anchor elements
            [].forEach.call(document.getElementsByClassName("cool-anchor"), function(item,i,arr) {

                //replace href by data-link and set href to javascript:;
                item.setAttribute("data-link",item.getAttribute(self.config.attribute));
                item.setAttribute(self.config.attribute,"javascript:;");

                //adding click listener
                item.addEventListener("click", function(eventObject) {

                    var clickedItem = eventObject.target;

                    //tweaking page name
                    pageName = clickedItem.
                                getAttribute("data-link").
                                replace(self.config.anchorPrefix,"");

                    //tweaking title
                    pageTitle = self.startVars.baseTitle+" - "+pageName.replaceAll("-"," ").toProperCase();

                    //set document title
                    document.title = pageTitle;

                    //set window url
                    //TODO: if href ends in / that's cool, otherwise we have to add it.
                    //se href termina em / cool, senão adiciona
                    window.history.pushState(pageName, pageTitle, self.startVars.basePath+pageName)

                    //go to destination item
                    document.getElementById(pageName).scrollIntoView();

                }, false);
            });

        }

    }

})();
