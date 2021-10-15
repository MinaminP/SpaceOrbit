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
       canvasNode : 
        {
           type:cc.Node,
           default:null,
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

        var parentNode = this.target.parent;
        var pos = parentNode.convertToWorldSpaceAR(this.target.position);
        pos = this.canvasNode.convertToNodeSpaceAR(pos);

      cc.tween(newBullet).to(this.bulletSpd,{position: pos}, {easing: 'linear'}).call(()=>{
        newBullet.destroy();
        }).start();
      cc.tween(newBullet).delay(1).to()
     },

    update (dt) {
        
    },
});
