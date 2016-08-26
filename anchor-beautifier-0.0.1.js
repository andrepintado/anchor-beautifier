//aux functions
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function urlHasHash(url) { return (url.indexOf("#") > 0); }
function urlHasDot(url) { return (url.indexOf(".") > 0); }
function urlEndsWithBar(url) { return (url.charAt(url.length-1) == "/"); }

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
            baseTitle: document.title,
            baseHash: window.location.hash
        },

        //init function
        init: function (initVars) {
            if (undefined !== initVars) {
                //iterate over vars
                for (var prop in initVars) {
                    this.config[prop] = initVars[prop];
                }
            }
            this.preStart();
        },

        //pre-treatment of some vars
        preStart: function() {

            if (!urlHasHash(window.location.href) &&
                !urlHasDot(window.location.pathname) &&
                !urlEndsWithBar(window.location.pathname)) this.startVars.basePath = this.startVars.basePath+"/";
            else if (urlHasDot(window.location.pathname)) this.startVars.basePath = this.startVars.basePath+"/";
            else this.startVars.basePath = this.startVars.basePath;

            this.start();
        },

        //main method
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

                    //set window url and history
                    window.history.pushState(pageName, pageTitle, self.startVars.basePath+pageName)

                    //go to destination item
                    document.getElementById(pageName).scrollIntoView();

                }, false);
            });

            //checking if page has been called with an anchor. If so, click it.
            if (self.startVars.baseHash !== "") {
                document.querySelector(".cool-anchor[data-link='"+self.startVars.baseHash+"']").click();
            }

        }

    }

})();
