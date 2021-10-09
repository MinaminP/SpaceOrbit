cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
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
            this.node.scale.x = -1;
            this.planet.angle += (dt * this.speed)
        } else if(this.isFlipped == false){
            this.node.scale.x = 1;
            this.planet.angle -= (dt * this.speed);
        }
    },
});
