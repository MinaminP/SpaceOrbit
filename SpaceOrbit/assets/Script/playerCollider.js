cc.Class({
    extends: cc.Component,

    properties: {
        //score:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        window.Scoring = {
            score:0,
        };
        
    },

    onCollisionEnter(other, self){
        if(other.tag == 1){
            this.node.destroy();
            cc.director.loadScene('gameOver');
        } else if (other.tag == 2){
            Scoring.score++;
            cc.log(Scoring.score);
        }
    },

    start () {
        
    },

    update (dt) {
        
    },
});