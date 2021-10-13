// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       bullet : {
            type:cc.Prefab,
            default:null
       },
       target : 
       {
           type:cc.Node,
           default:null
       },
       bulletSpd:0,
       timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(function(){
            this.shoot()
        }, this.timer)
    },

    start () {

    },

    shoot:function(event){
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.node.position.x, this.node.position.y);
        this.node.addChild(newBullet);

      cc.tween(newBullet).to(this.bulletSpd,{position: this.target.position}, {easing: 'linear'}).start();
     },
    update (dt) {
        
    },
});
