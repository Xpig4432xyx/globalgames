window.GM={},GM.hasLoadImg={},GM.hasLoadSound={},GM.hasLoadCsv={},GM.hasEffect={},GM.touchScreen=!1,cc.macro.ENABLE_WEBGL_ANTIALIAS=!0,cc.Node.prototype.to=function(t,e,i){return e=e||0,null!=i?t.addChild(this,e,i):t.addChild(this,e),this},cc.Node.prototype.p=function(t){var e=t;return null==y&&(y=t.y,e=t.x),this.setPosition(e,y),this},cc.Node.prototype.pp=function(t,e){var i=t;null==i?(i=.5,e=.5):null==e&&(e=t.y,i=t.x);var o=cc.director.getWinSize(),c=o.width,n=o.height;if(null!=this.getParent()){var s=this.getParent().getContentSize();c=s.width,n=s.height}return this.setPosition(c*i,n*e),this},cc.Node.prototype.unbindTouch=function(){return this.off(cc.Node.EventType.TOUCH_START),this.off(cc.Node.EventType.TOUCH_MOVE),this.off(cc.Node.EventType.TOUCH_END),this.off(cc.Node.EventType.TOUCH_CANCEL),this.off(cc.Node.EventType.MOUSE_ENTER),this.off(cc.Node.EventType.MOUSE_LEAVE),this},GM.pAdd=function(t,e){return cc.v2(t.x+e.x,t.y+e.y)},GM.pSub=function(t,e){return cc.v2(t.x-e.x,t.y-e.y)},cc.Node.prototype.bindTouchLocate=function(){return this.on(cc.Node.EventType.TOUCH_START,function(t){this.lBeganPos_=this.getPosition(),this.lBeganPoint_=cc.v2(t.touch._point.x,t.touch._point.y)},this),this.on(cc.Node.EventType.TOUCH_MOVE,function(t){this.setPosition(GM.pAdd(this.lBeganPos_,GM.pSub(t.touch._point,this.lBeganPoint_)))},this),this.on(cc.Node.EventType.TOUCH_END,function(){var t=cc.winSize.width,e=cc.winSize.height;if(null!=this.getParent()){var i=this.getParent().getContentSize();t=i.width,e=i.height}console.log("Node Location: ",this.x,this.y,"Percentage:",this.x/t,this.y/e)},this),this},cc.Node.prototype.quickBt=function(t,e,i,o){return this.unbindTouch(),this.lastClickTime=0,this.clickCdTime=300,this.canTouch=!0,this.iHasTouchBegan=!1,this.getComponent(cc.BlockInputEvents)||this.addComponent(cc.BlockInputEvents),this.on(cc.Node.EventType.TOUCH_START,function(){GM.touchScreen=!0,0!=this.canTouch&&(this.iHasTouchBegan=!0,this.BeganScale_=this.scale,this.BeganOpacity_=this.opacity,e||(this.setScale(.95*this.BeganScale_),this.opacity=.95*this.BeganOpacity_))},this),this.on(cc.Node.EventType.TOUCH_CANCEL,function(){0!=this.canTouch&&0!=this.iHasTouchBegan&&(this.iHasTouchBegan=!1,e||(this.setScale(this.BeganScale_),this.opacity=this.BeganOpacity_))},this),this.on(cc.Node.EventType.TOUCH_END,function(c){if(0!=this.canTouch&&0!=this.iHasTouchBegan){if(this.iHasTouchBegan=!1,audioData&&!o?audioData.playSoundByID(2):audioData&&1==o&&audioData.playSoundByID(30),console.log("1111111111111111111111111111111111111"),e||(this.setScale(this.BeganScale_),this.opacity=this.BeganOpacity_),!i){var n=(new Date).getTime();if(n-this.lastClickTime<this.clickCdTime)return void console.log("---\u5c4f\u853d\u8fc7\u5feb\u70b9\u51fb---",n,this.lastClickTime,this.clickCdTime);this.lastClickTime=n}t&&t(c)}},this),this.autoClick=function(){t()},this},cc.Node.prototype.quickTouch=function(t,e,i){return this.unbindTouch(),this.lastClickTime=0,this.clickCdTime=300,this.canTouch=!0,this.iHasTouchBegan=!1,this.getComponent(cc.BlockInputEvents)||this.addComponent(cc.BlockInputEvents),this.on(cc.Node.EventType.TOUCH_START,function(){GM.touchScreen=!0,0!=this.canTouch&&(this.iHasTouchBegan=!0,e||this.setScale(.9),audioData&&!i&&audioData.playSoundByID(2),console.log("222222222222222222222222222222222"))},this),this.on(cc.Node.EventType.TOUCH_CANCEL,function(i){0!=this.canTouch&&0!=this.iHasTouchBegan&&(this.iHasTouchBegan=!1,e||this.setScale(1),t&&t(i))},this),this.on(cc.Node.EventType.TOUCH_END,function(i){0!=this.canTouch&&0!=this.iHasTouchBegan&&(this.iHasTouchBegan=!1,e||this.setScale(1),t&&t(i))},this),this},cc.Node.prototype.onTouch=function(t){this.getComponent(cc.BlockInputEvents)||this.addComponent(cc.BlockInputEvents),this.off(cc.Node.EventType.TOUCH_START),this.on(cc.Node.EventType.TOUCH_START,function(){t&&t()},this)},cc.Node.prototype.onClick=function(t,e,i){null==this.getComponent(cc.Button)&&(this.addComponent(cc.Button).transition=cc.Button.Transition.SCALE);let o=this.getComponent(cc.Button);i&&(o.transition=cc.Button.Transition.NONE),this.getComponent(cc.BlockInputEvents)||this.addComponent(cc.BlockInputEvents);let c=0;this.off("click"),this.on("click",function(){let i=(new Date).getTime();i-c<300?console.log("---\u5c4f\u853d\u8fc7\u5feb\u70b9\u51fb---"):(c=i,t.call(e))},e)},cc.Node.prototype.loadUrlImage=function(t,e){if(t&&""!==t){var i=e?t+e:t;if(GM.hasLoadImg[i])this.getComponent(cc.Sprite).spriteFrame=GM.hasLoadImg[i];else{let o=e?{url:t,type:e}:t;cc.resources.load(o,(t,e)=>{if(t&&console.error(t),!cc.isValid(this))return;let o=this.getComponent(cc.Sprite);if(o){var c=new cc.SpriteFrame(e);o.spriteFrame=c,GM.hasLoadImg[i]=c}})}}},cc.Node.prototype.setLabel=function(t){this._lwLabel=this._lwLabel||this.getComponent(cc.Label)||this.getComponent(cc.RichText),(t||0===t)&&this._lwLabel&&(this._lwLabel.string=t)},String.prototype.format=function(t){var e=this;if(arguments.length>0)if(1==arguments.length&&"object"==typeof t){for(var i in t)if(null!=t[i]){var o=new RegExp("({"+i+"})","g");e=e.replace(o,t[i])}}else for(var c=0;c<arguments.length;c++)null!=arguments[c]&&(o=new RegExp("({)"+c+"(})","g"),e=e.replace(o,arguments[c]));return e},String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},String.prototype.ltrim=function(){return this.replace(/(^\s*)/g,"")},String.prototype.rtrim=function(){return this.replace(/(\s*$)/g,"")},Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t},Number.prototype.toBitString=function(){let t=["K","M","B","T","KK","KM","KB","KT","MK","MM","MB","MT"],e=0,i=this;for(;i>999;)i/=1e3,e++;let o=(i=i.toString()).indexOf("."),c=0;if(-1==o?c=i.length:o>=1&&o<=2?c=4:o>=3&&(c=3),i=i.substr(0,c),e>0){let o=t[e-1];o||(console.error("\u6570\u5b57\u8d85\u8fc7\u6700\u5927\u957f\u5ea6"),o="?"),i+=o}return i},Number.prototype.toIntString=function(){let t=["k","m","b","t","a","b","k","m","b","t","a","b"],e=0,i=this;for(;i>1e3;)i/=1e3,e++;if(e>0&&(i*=1e3,e-=1),i=Math.round(i),e>0){let o=t[e-1];o||(console.error("\u6570\u5b57\u8d85\u8fc7\u6700\u5927\u957f\u5ea6"),o="?"),i=i.toString(),i+=o}return i},cc.Label.prototype.setNum=function(t){t=Number(t),this.string=t.toIntString()},cc.Node.maxTouchNum=1,cc.Node.touchNum=0;var __dispatchEvent__=cc.Node.prototype.dispatchEvent;cc.Node.prototype.dispatchEvent=function(t){if(this._canMultiTouch)return __dispatchEvent__.call(this,t);switch(t.type){case cc.Node.EventType.TOUCH_START:cc.Node.touchNum<cc.Node.maxTouchNum&&(cc.Node.touchNum++,this._canTouch=!0,__dispatchEvent__.call(this,t));break;case cc.Node.EventType.TOUCH_MOVE:!this._canTouch&&cc.Node.touchNum<cc.Node.maxTouchNum&&(this._canTouch=!0,cc.Node.touchNum++),this._canTouch&&__dispatchEvent__.call(this,t);break;case cc.Node.EventType.TOUCH_END:case cc.Node.EventType.TOUCH_CANCEL:this._canTouch&&(this._canTouch=!1,cc.Node.touchNum--,__dispatchEvent__.call(this,t));break;default:__dispatchEvent__.call(this,t)}};var onPostActivated=cc.Node.prototype._onPostActivated;cc.Node.prototype._onPostActivated=function(t){!t&&this._canTouch&&(this._canTouch=!1,cc.Node.touchNum--),onPostActivated.call(this,t),this.emit("active",t)};var onPreDestroy=cc.Node.prototype._onPreDestroy;cc.Node.prototype._onPreDestroy=function(){this._canTouch&&(this._canTouch=!1,cc.Node.touchNum--),this.emit("destory"),onPreDestroy.call(this)};var CHILD_ADDED="child-added",CHILD_REMOVED="child-removed",getChildByName=cc.Node.prototype.getChildByName;cc.Node.prototype.getChildByName=function(t){if(!this._childByName){this._childByName={};for(var e=this._children,i=0,o=e.length;i<o;i++){var c=e[i]._name;c&&(this._childByName[c]=e[i])}this.on(CHILD_ADDED,t=>{t._name&&(this._childByName[t._name]=t)}),this.on(CHILD_REMOVED,t=>{t._name&&this._childByName[t._name]==t&&(this._childByName[t._name]=void 0)})}return this._childByName[t]};var setName=cc._BaseNode.prototype.setName;cc.js.set(cc._BaseNode.prototype,"name",function(t){if(this._parent&&this._parent._childByName){var e=this._name;e&&this._parent._childByName[e]===this&&(this._parent._childByName[e]=void 0),t&&(this._parent._childByName[t]=this)}setName.call(this,t)},!1,!0);let oldmarkForUpdateRenderData=cc.Sprite.prototype.markForUpdateRenderData;cc.Sprite.prototype.markForUpdateRenderData=function(t){this.node&&oldmarkForUpdateRenderData.call(this,t)};let oldmarkForRender=cc.Sprite.prototype.markForRender;cc.Sprite.prototype.markForRender=function(t){this.node&&oldmarkForRender.call(this,t)},cc.RotateBy3D=cc.Class({name:"cc.RotateBy3D",extends:cc.RotateBy,update:function(t){if(t=this._computeEaseTime(t),this.target){let e=this._startAngle+this._deltaAngle*t;if(this.target.eulerAngles.y!=e){let t=cc.quat(),i=this.target.eulerAngles;i.y=e,t.fromEuler(i),this.target.setRotation(t.x,t.y,t.z,t.w)}}}}),cc.rotateBy3D=function(t,e){return new cc.RotateBy3D(t,e)},cc.RotateByZ3D=cc.Class({name:"cc.RotateByZ3D",extends:cc.RotateBy,update:function(t){if(t=this._computeEaseTime(t),this.target){let e=this._startAngle+this._deltaAngle*t;this.target.angle=e}}}),cc.rotateByZ3D=function(t,e){return new cc.RotateByZ3D(t,e)},cc.MoveBy3D=cc.Class({name:"cc.MoveBy3D",extends:cc.MoveBy,update:function(t){if(t=this._computeEaseTime(t),this.target){var e=this._positionDelta.x*t,i=this._positionDelta.y*t,o=this.target.z,c=this._startPosition;if(cc.macro.ENABLE_STACKABLE_ACTIONS){var n=this.target.x,s=this.target.y,h=this._previousPosition;c.x=c.x+n-h.x,c.y=c.y+s-h.y,e+=c.x,i+=c.y,h.x=e,h.y=i,this.target.setPosition(e,i)}else this.target.setPosition(c.x+e,c.y+i);this.target.z=o}}}),cc.moveBy3D=function(t,e,i){return new cc.MoveBy3D(t,e,i)};var Shake=cc.ActionInterval.extend({nodeInitialPos:null,nodeShakeStrengthX:0,nodeShakeStrengthY:0,duration:0,ctor:function(t,e,i){this.duration=t,this.initWithDuration(t,e,i)},getRandomStrength:function(t,e){return Math.random()*(e-t+1)+t},update:function(t){var e=this.getRandomStrength(-this.nodeShakeStrengthX,this.nodeShakeStrengthX)*t,i=this.getRandomStrength(-this.nodeShakeStrengthY,this.nodeShakeStrengthY)*t,o=this.nodeInitialPos.add(cc.v2(e,i));this.target.setPosition(o)},initWithDuration:function(t,e,i){return!!cc.ActionInterval.prototype.initWithDuration.call(this,t)&&(this.nodeShakeStrengthX=e,this.nodeShakeStrengthY="undefined"==i?e:i,!0)},startWithTarget:function(t){cc.ActionInterval.prototype.startWithTarget.call(this,t),this.nodeInitialPos=t.getPosition()},stop:function(){this.target.setPosition(this.nodeInitialPos)}});cc.shake=function(t,e,i){return new Shake(t,e,i)},cc.NodePool&&(cc.NodePool.prototype.putNotRemoveParent=function(t){if(t&&-1===this._pool.indexOf(t)){var e=this.poolHandlerComp?t.getComponent(this.poolHandlerComp):null;e&&e.unuse&&e.unuse(),this._pool.push(t)}}),cc.Node.prototype.longpressTouch=function(t,e,i,o){this.unbindTouch(),this.lastClickTime=0,this.clickCdTime=300,this.canTouch=!0,this.iHasTouchBegan=!1,this.getComponent(cc.BlockInputEvents)||this.addComponent(cc.BlockInputEvents);let c=new cc.Sprite;return this.on(cc.Node.EventType.TOUCH_START,function(i){GM.touchScreen=!0,0!=this.canTouch&&(this.iHasTouchBegan=!0,this.BeganScale_=this.scale,this.BeganOpacity_=this.opacity,e||(this.setScale(.9*this.BeganScale_),this.opacity=.9*this.BeganOpacity_),c.schedule(()=>{t&&t(i)},.2))},this),this.on(cc.Node.EventType.TOUCH_CANCEL,function(){0!=this.canTouch&&0!=this.iHasTouchBegan&&(this.iHasTouchBegan=!1,e||(this.setScale(this.BeganScale_),this.opacity=this.BeganOpacity_),c.unscheduleAllCallbacks())},this),this.on(cc.Node.EventType.TOUCH_END,function(i){0!=this.canTouch&&0!=this.iHasTouchBegan&&(this.iHasTouchBegan=!1,audioData&&!o&&audioData.playSoundByID(2),console.log("3333333333333333333333333333"),e||(this.setScale(this.BeganScale_),this.opacity=this.BeganOpacity_),c.unscheduleAllCallbacks(),t&&t(i))},this),this.autoClick=function(){t()},this},cc.loadResNow=function(t){return new Promise(function(e){cc.resources.load(t,function(t,i){e({e:t,v:i})})})};