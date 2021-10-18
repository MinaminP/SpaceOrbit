cc.Class({
    extends: cc.Component,

    properties: {
        trash1 : {
            type:cc.Node,
            default:null
        },
        trash2 : {
            type:cc.Node,
            default:null
        },
        trash3 : {
            type:cc.Node,
            default:null
        },
        trash4 : {
            type:cc.Node,
            default:null
        },
        trash5 : {
            type:cc.Node,
            default:null
        },
        trash6 : {
            type:cc.Node,
            default:null
        },
        trash7 : {
            type:cc.Node,
            default:null
        },
        trash8 : {
            type:cc.Node,
            default:null
        },
        trash9 : {
            type:cc.Node,
            default:null
        },
        trash10 : {
            type:cc.Node,
            default:null
        },
        trash11 : {
            type:cc.Node,
            default:null
        },
        trash12 : {
            type:cc.Node,
            default:null
        },
        trash13 : {
            type:cc.Node,
            default:null
        },
        trash14 : {
            type:cc.Node,
            default:null
        },
        trash15 : {
            type:cc.Node,
            default:null
        },
        trash16 : {
            type:cc.Node,
            default:null
        },
        trash17 : {
            type:cc.Node,
            default:null
        },
        trash18 : {
            type:cc.Node,
            default:null
        },
        trash19 : {
            type:cc.Node,
            default:null
        },
        trash20 : {
            type:cc.Node,
            default:null
        },
        trash21 : {
            type:cc.Node,
            default:null
        },
        trash22 : {
            type:cc.Node,
            default:null
        },
        trash23 : {
            type:cc.Node,
            default:null
        },
        trash24 : {
            type:cc.Node,
            default:null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter(other, self){
        if (other.tag == 0){
            this.respawn();
        }
    },
     
     respawn:function(){
        this.trash1.active = true;
        this.trash2.active = true;
        this.trash3.active = true;
        this.trash4.active = true;
        this.trash5.active = true;
        this.trash6.active = true;
        this.trash7.active = true;
        this.trash8.active = true;
        this.trash9.active = true;
        this.trash10.active = true;
        this.trash11.active = true;
        this.trash12.active = true;
        this.trash13.active = true;
        this.trash14.active = true;
        this.trash15.active = true;
        this.trash16.active = true;
        this.trash17.active = true;
        this.trash18.active = true;
        this.trash19.active = true;
        this.trash20.active = true;
        this.trash21.active = true;
        this.trash22.active = true;
        this.trash23.active = true;
        this.trash24.active = true;
        //Scoring.score = 0;
     },

    start () {

    },

    update () {
       
    },
});
