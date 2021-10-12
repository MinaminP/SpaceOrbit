cc.Class({
    extends: cc.Component,

    properties: {
        planet : 
        {
            type:cc.Node,
            default:null
        },
        speed:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {

    },

    update (dt) {
        this.planet.angle -= (dt * this.speed)
    },
    
});
