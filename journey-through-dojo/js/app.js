//dojo.require("dojox.image.SlideShow");

dojo.ready(function () {
    prettyPrint();
    
    dojo.query("#showMe").onclick(function(e){
        var node = this,
            anim = dojo.anim(node, {
                backgroundColor: "#363636",
                color: "#f7f7f7"
            }, 1000)
        ;

        dojo.connect(anim, "onEnd", function(){
            dojo.anim(node, { color: "#363636" }, null, null, function(){
                node.innerHTML = "wow, that was easy!";
                dojo.anim(node, { color: "white" });
            });
        });
    });
    
});