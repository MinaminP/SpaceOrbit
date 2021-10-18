cc.Class({
    extends: cc.Component,

    properties: {
        trashPrefab: {
            type:cc.Node,
            default:null
       },
        pivotNode: {
            type:cc.Node,
            default:null
       },
       nodeTransparent: {
        type:cc.Node,
        default:null
        },
        canvasNode: {
            type:cc.Node,
            default:null
        },
       spawnedTrash: {
           type:cc.Node,
           default:[],
        },
        nInstance : 
        {
        type:cc.Node,
        default:null
        },
       trashToBeSpawned: 24,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    SpawnTrash:function()
    {
        this.spawnedTrash.size = 0;
        for(let i = 0 ; i < 24 ; i++)
        {
            this.pivotNode.angle = 0;
            this.nInstance = cc.instantiate(this.trashPrefab);
            var angle_ = 0 + (15 * i);
            this.pivotNode.angle = angle_;
           var parentNode = this.nodeTransparent.parent;
           var pos = parentNode.convertToWorldSpaceAR(this.nodeTransparent.position);
           pos = this.canvasNode.convertToNodeSpaceAR(pos);
           cc.log('node : ' + this.nInstance.id);
           console.log(pos);
           this.nInstance.node.setPosition(pos);
           this.node.addChild(this.nInstance);
           this.spawnedTrash.push(this.nInstance);
        }
    },

    start () {
        
    },

    //update (dt) {},
});
