cc.Class({
    extends: cc.Component,

    properties: {
        newPlace:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onCollisionEnter(other, self){
        if(other.tag == 0){
            //this.node.scaleX = 0;
            //this.node.scaleY = 0;
            //this.node.x = this.newPlace;
            this.node.active = false;
        }
    },

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    start () {

    },

    update (dt) {
        if(Scoring.score == 24){
            Scoring.score = 0;
            //this.node.scaleX = 1;
            //this.node.scaleY = 1;
        }
    },
});