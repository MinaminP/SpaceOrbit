cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onCollisionEnter(other, self){
        if(other.tag == 0){
            this.node.destroy();
        }
    },

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    start () {

    },

    // update (dt) {},
});
