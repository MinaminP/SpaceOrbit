cc.Class({
    extends: cc.Component,

    properties: {
        
        bulletSpd:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bulletMove();
        this.scheduleOnce(function () {
            this.destroy();
        }, 0.5);
        
    },
    
    bulletMove:function(){
      cc.tween(this).to(this.bulletSpd,{position: this.node.parent.getChildByName('player').position, rotation: this.target.rotation}, {easing: 'linear'}).start();
     },

    start () {

    },

    // update (dt) {},
});
