cc.Class({
    extends: cc.Component,

    properties: {
        pointNodes: {
            default: [],
            type: cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    update (dt) {
        if(Scoring.score == 24){
                this.pointNodes[0].node.active = true;
        }
    },
});
