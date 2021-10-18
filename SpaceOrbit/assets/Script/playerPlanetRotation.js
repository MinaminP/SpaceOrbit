
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
        window.GlobalData = {
            level: 1,
            levelCleared: false,
        };
        this.schedule(function(){
            this.proggression();
        }, 10)
        this.node.parent.on('mousedown', this.change_rotation, this);
    },

    change_rotation:function(event){
       if(this.isFlipped == true){
           this.isFlipped = false;
       } else if (this.isFlipped == false){
           this.isFlipped = true;
       }
    },

    proggression:function(){
        GlobalData.level++;
    },

    start () {

    },

    update (dt) {
        var levelling = this.speed + (GlobalData.level * 3);
        if(this.isFlipped == true){
            this.node.scaleX = -1;
            this.planet.angle += (dt * levelling)
        } else if(this.isFlipped == false){
            this.node.scaleX = 1;
            this.planet.angle -= (dt * levelling);
        }
    },
});
