(window["webpackJsonpno-pc-qr"]=window["webpackJsonpno-pc-qr"]||[]).push([[0],{149:function(e,t,r){e.exports=r(246)},245:function(e,t,r){},246:function(e,t,r){"use strict";r.r(t);r(150),r(176),r(178),r(179),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218);var a=r(0),n=r.n(a),o=r(27),c=r.n(o),s=r(31),i=r.n(s),l=r(82),p=r(43),m=r(38),u=r(88),g=r(83),d=r(89),h=r(58),f=r(18),v=r(84),S=r.n(v),y=r(59),I=r.n(y),E=(r(243),r(85)),C=r.n(E),P=r(86),w=r.n(P),b=r(87),k=r.n(b);r(244),r(245);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(u.a)(this,Object(g.a)(t).call(this,e))).changeSelectedPhoto=function(e){var t=e.target;if(r.removeStopScrollWindow(),r.setQrResult(""),t&&t.files&&t.files[0]){var a=new FileReader;a.onload=function(e){r.setImage(e.target.result)},a.onerror=function(){console.error("\u0424\u0430\u0439\u043b \u043d\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d!")},a.readAsDataURL(t.files[0])}},r.move=function(e,t,a){var n=r.state.currentPosCroppedX+e.shiftX,o=r.state.currentPosCroppedY+e.shiftY;n<0&&(n=0),o<0&&(o=0);var c=document.getElementById("opacity-image");c&&o+r.state.currentHeightCropper>c.offsetHeight&&(o=c.offsetHeight-r.state.currentHeightCropper),c&&n+r.state.currentWidthCropper>c.offsetWidth&&(n=c.offsetWidth-r.state.currentWidthCropper),r.currentPosCroppedX=n,r.currentPosCroppedY=o,r.setState({croppedImageStyles:W({},r.state.croppedImageStyles,{transform:"translateX(".concat(n,"px) translateY(").concat(o,"px)")}),croppedImageOverflowSyles:W({},r.state.croppedImageOverflowSyles,{transform:"translateX(".concat(-n+r.state.currentPosImageX,"px) translateY(").concat(-o+r.state.currentPosImageY,"px)")})})},r.stopScrollWindow=function(){console.log("Stopping scroll.."),document.body.classList.add("no-overflow")},r.removeStopScrollWindow=function(){document.body.classList.remove("no-overflow")},r.onEndCrop=function(){r.setState({currentPosCroppedX:r.currentPosCroppedX,currentPosCroppedY:r.currentPosCroppedY}),r.removeStopScrollWindow()},r.moveImage=function(e){var t=r.state.currentPosImageX+e.shiftX,a=r.state.currentPosImageY+e.shiftY;r.currentPosImageX=t,r.currentPosImageY=a,r.setState({imageStyles:W({},r.state.imageStyles,{transform:"translateX(".concat(t,"px) translateY(").concat(a,"px)")}),croppedImageOverflowSyles:W({},r.state.croppedImageOverflowSyles,{transform:"translateX(".concat(t-r.state.currentPosCroppedX,"px) translateY(").concat(a-r.state.currentPosCroppedY,"px)")})})},r.onEndImageMove=function(){r.setState({currentPosImageX:r.currentPosImageX,currentPosImageY:r.currentPosImageY})},r.scaleImagesMove=function(e){var t=e.originalEvent.target,a=!!t.classList.value.match("right"),n=(t.classList.value.match("left"),r.state.currentWidthCropper+(a?e.shiftX:-e.shiftX)),o=r.state.currentHeightCropper+(a?e.shiftY:-e.shiftY);n<o?o=n:n=o,r.currentWidthCropper=n,r.currentHeightCropper=o,r.setState({cropperImageStyles:W({},r.state.cropperStyles,{width:n,height:o}),croppedImageStyles:W({},r.state.croppedImageStyles,{width:n,height:o})})},r.onEndScaleImagesMove=function(e){r.setState({currentWidthCropper:r.currentWidthCropper,currentHeightCropper:r.currentHeightCropper}),r.removeStopScrollWindow()},r.getQrFromCrop=function(){var e=document.getElementById("opacity-image"),t=(document.getElementById("crop").getBoundingClientRect(),r.state.currentPosCroppedX),a=r.state.currentPosCroppedY,n=Math.floor(t*r.state.imageWidth/e.offsetWidth),o=Math.floor(a*r.state.imageHeight/e.offsetHeight),c=Math.floor(r.state.currentHeightCropper*r.state.imageHeight/e.offsetHeight),s=Math.floor(r.state.currentWidthCropper*r.state.imageWidth/e.offsetWidth),i=document.createElement("canvas");i.width=r.state.imageWidth,i.height=r.state.imageHeight;var l=i.getContext("2d"),p=new Image;p.onload=function(){l.drawImage(p,0,0);var e=l.getImageData(n,o,s,c);i.height=c,i.width=s,l.clearRect(0,0,i.width,i.height),l.putImageData(e,0,0),(p=new Image).onload=function(){r.getQRFromImage(p)},p.src=i.toDataURL()},p.src=r.state.image},r.setQrResult=function(e){r.setState({qrResult:e})},r.state={image:"",cropperStyles:{},croppedImageStyles:{},cropperImageStyles:{},croppedImageOverflowSyles:{},currentPosCroppedX:0,currentPosCroppedY:0,currentPosImageX:0,currentPosImageY:0,currentHeightCropper:100,currentWidthCropper:100,qrResult:"",aciveSnack:null},r.currentCroppedX=r.state.currentPosCroppedX,r.currentCroppedY=r.state.currentCroppedY,r.currentPosImageX=r.state.currentPosImageX,r.currentPosImageY=r.state.currentPosImageY,r.currentHeightCropper=r.state.currentHeightCropper,r.currentWidthCropper=r.state.currentWidthCropper,r.snacks={qrDecodedSuccessfull:r.qrDecodedSnack(),qrDecodedError:r.qrDecodedSnack(!1)},h.a.WORKER_PATH="libs/qr-scanner/qr-scanner-worker.min.js",r}return Object(d.a)(t,e),Object(m.a)(t,[{key:"setImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=(!(arguments.length>1&&void 0!==arguments[1])||arguments[1],new Image);r.src=t,r.onload=function(){e.setState({image:t,imageWidth:r.width,imageHeight:r.height})}}},{key:"seActiveSnack",value:function(e){this.setState({aciveSnack:e})}},{key:"qrDecodedSnack",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return n.a.createElement(f.g,{onClose:function(){return e.seActiveSnack(null)},before:t?n.a.createElement(w.a,{fill:"#16C60C"}):n.a.createElement(k.a,{fill:"#F44336"})},t?"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b":"QR \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}},{key:"componentDidUpdate",value:function(){if(this.state.image){var e=document.getElementById("opacity-image");e&&this.state.cropperStyles.height!==e.offsetHeight&&this.setState({cropperStyles:W({},this.state.cropperStyles,{height:e.height})})}}},{key:"getQRFromImage",value:function(e){var t=this;h.a.scanImage(e).then((function(e){t.setQrResult(e),t.seActiveSnack(t.snacks.qrDecodedSuccessfull)})).catch((function(e){t.setQrResult(""),t.seActiveSnack(t.snacks.qrDecodedError)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(f.i,{activePanel:"main"},n.a.createElement(f.e,{id:"main",className:"centering-panel"},n.a.createElement(f.f,null,"QR \u0431\u0435\u0437 \u043a\u0430\u043c\u0435\u0440\u044b"),this.state.image&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrap-cropper"},n.a.createElement("div",{className:"cropper",style:this.state.cropperStyles},n.a.createElement("div",{className:"crop",id:"crop",style:this.state.croppedImageStyles},["bottom-right"].map((function(t){return n.a.createElement(f.h,{onStart:e.stopScrollWindow,onMove:e.scaleImagesMove,onEnd:e.onEndScaleImagesMove},n.a.createElement("div",{className:"crop-controller "+t}))})),n.a.createElement(f.h,{onStart:this.stopScrollWindow,onMove:this.move,onEnd:this.onEndCrop},n.a.createElement("div",{className:"cropped-image",style:this.state.cropperImageStyles,onTouchStart:this.startTouch},n.a.createElement("img",{style:this.state.croppedImageOverflowSyles,src:this.state.image})))),n.a.createElement("div",{className:"opacity-image"},n.a.createElement("img",{id:"opacity-image",style:this.state.imageStyles,src:this.state.image}))),n.a.createElement(f.b,null,this.state.qrResult&&n.a.createElement("div",{style:{wordBreak:"break-all",marginTop:8,marginBottom:24}},n.a.createElement(S.a,{componentDecorator:function(e,t,r){return n.a.createElement(f.d,{href:e,key:r,target:"_blank",rel:"noopener noreferrer"},t)}},this.state.qrResult.split("\n").map((function(t){return n.a.createElement("span",null,n.a.createElement("span",null,e.state.qrResult),n.a.createElement("br",null))})))),n.a.createElement(f.a,{onClick:this.getQrFromCrop,before:n.a.createElement(C.a,null),size:"xl",style:{marginBottom:8}},"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.a.createElement(f.c,{onChange:this.changeSelectedPhoto,before:n.a.createElement(I.a,null),size:"xl",level:"secondary"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"))),n.a.createElement("div",{className:"wrapped-image",style:{backgroundImage:'url("'.concat(this.state.image,'")')}})),!this.state.image&&n.a.createElement(f.b,null,n.a.createElement(f.c,{onChange:this.changeSelectedPhoto,before:n.a.createElement(I.a,null),size:"l"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442")),this.state.aciveSnack))}}]),t}(n.a.Component);i.a.send("VKWebAppInit"),c.a.render(n.a.createElement(X,null),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.312cb1d2.chunk.js.map