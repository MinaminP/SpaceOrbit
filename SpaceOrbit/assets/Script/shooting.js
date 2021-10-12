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
       timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    shoot:function(event){
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.node.position.x, this.node.position.y);
        this.node.addChild(newBullet);

       var actionBy = cc.moveTo(0.1, cc.v2(this.target.x,this.target.y));
        var destruction = cc.callFunc(function(){
            newBullet.destroy();
        }, this);
        var seq = cc.sequence(actionBy, destruction);
        newBullet.runAction(seq)
     },
    update (dt) {
        this.shoot();
    },
});
