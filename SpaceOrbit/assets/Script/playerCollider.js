cc.Class({
    extends: cc.Component,

    properties: {
        score:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        
    },

    onCollisionEnter(other, self){
        if(other.tag == 1){
            this.node.destroy();
            cc.director.loadScene('gameOver');
        } else if (other.tag == 2){
            this.score++;
            //debug.log(this.score);
        }
    },

    start () {
        
    },

    update (dt) {
        if(this.score == 24){
            cc.director.loadScene('game');
        }
    },
});
