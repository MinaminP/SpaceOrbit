cc.Class({
    extends: cc.Component,

    properties: {
        planet : 
        {
            type:cc.Node,
            default:null
        },
        speed:0,
        isFlipped: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.parent.on('mousedown', this.change_rotation, this);
        //var action = cc.repeatForever(cc.rotateBy(5,360));
       // this.node.runAction(action);
    },

    change_rotation:function(event){
       if(this.isFlipped == true){
           this.isFlipped = false;
       } else if (this.isFlipped == false){
           this.isFlipped = true;
       }
    },
    start () {

    },

    update (dt) {
        if(this.isFlipped == true){
            this.node.scaleX = -1;
            this.planet.angle += (dt * this.speed)
        } else if(this.isFlipped == false){
            this.node.scaleX = 1;
            this.planet.angle -= (dt * this.speed);
        }
    },
});
