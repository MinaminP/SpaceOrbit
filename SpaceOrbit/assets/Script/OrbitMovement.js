const { cos, sin, PI } = Math;
const rad = deg => deg * PI / 180;
const cosd = deg => cos(rad(deg));
const sind = deg => sin(rad(deg));
const clamp = (val, min, max) => val < min ? min : val > max ? max : val;

cc.Class({
    extends: cc.Component,

    properties: {
     // target: cc.Node,
    planetSprite: {
        default: null,
        type: cc.SpriteFrame,
    },
    planeSprite: {
        default: null,
        type: cc.SpriteFrame,
    },
      angle: 0,
      baseAngleSpeed: 0,
      angleSpeed: 0,
      leftMaxAngle: 0,
      rightMaxAngle: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    const planeNode = this.planeNode = new cc.Node();
    const planeSprite = planeNode.addComponent(cc.Sprite);
    planeSprite.spriteFrame = this.planeSprite;
    planeNode.setAnchorPoint(0.5, 0);
    this.node.addChild(planeNode);

    const planetNode = this.planetNode = new cc.Node();
    const planetSprite = planetNode.addComponent(cc.Sprite);
    planetSprite.spriteFrame = this.planetSprite;
    this.node.addChild(planetNode);

    this.planePosition = planetNode.height * 1;

    // Position barrel
    planeNode.setPosition(0, this.planePosition);


    //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
    //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    },

    start () {

    },

    update (dt) {
        /*const { angleSpeed } = this;
        if (angleSpeed !== 0) {
            const angle = this.angle = clamp(this.angle + angleSpeed * dt, -1 * this.leftMaxAngle, this.rightMaxAngle);
            const r = this.planePosition;
    
            this.planeNode.angle = angle;
            this.planeNode.setPosition(r * sind(angle), r * cosd(angle));
        }*/
        var rotatePoint = new cc.RotateBy(5, 360); // <- Rotate the node by 360 degrees in 5 seconds.
        var rotateForever = new cc.RepeatForever(rotatePoint); // <- Keeps the node rotating forever.
        this.node.runAction(rotateForever); // <- Run the action with your rotationPoint node, not with your moon.

    },
    /*onKeyPressed(event){
        const plane = this;
        let key_code = event.keyCode;
        switch(key_code){
            case cc.macro.KEY.left:
                plane.angleSpeed = -1 * plane.baseAngleSpeed;
            break;
            case cc.macro.KEY.right:
                plane.angleSpeed = plane.baseAngleSpeed;
            break;
        }
    },

    onKeyReleased(event){
        const plane = this;
       let key_code = event.keyCode;
        switch(key_code){
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                plane.angleSpeed = 0;
            break;    
        }
    },
    
    rotate: function () {
        var diff = {
            'x' : this.target.position.x - this.node.position.x,
            'y':this.target.position.y - this.node.position.y 
            };            
        var angle = Math.atan2(diff.x, diff.y);
        this.node.rotation = cc.radiansToDegrees();
    },*/
    
});
