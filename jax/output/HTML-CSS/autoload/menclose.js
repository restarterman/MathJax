/*
 *  /MathJax/jax/output/HTML-CSS/autoload/menclose.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var d="1.1.2";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];var c="http://www.w3.org/2000/svg";var f="urn:schemas-microsoft-com:vml";var e="mjxvml";a.menclose.Augment({toHTML:function(ab){var j=this.getValues("notation","thickness","padding","mathcolor","color");if(j.color&&!this.mathcolor){j.mathcolor=j.color}if(j.thickness==null){j.thickness=".075em"}if(j.padding==null){j.padding=".2em"}var U=this.HTMLgetMu(ab),ad=this.HTMLgetScale();var V=b.length2em(j.padding,U)*ad;var M=b.length2em(j.thickness,U)*ad;var C=b.Em(M)+" solid";ab=this.HTMLcreateSpan(ab);var v=b.createStack(ab);var s=b.createBox(v);this.HTMLmeasureChild(0,s);var J=s.bbox.h+V+M,O=s.bbox.d+V+M,k=s.bbox.w+2*(V+M);var N=b.createFrame(v,J+O,0,k,M,"none");N.id="MathJax-frame-"+this.spanID;b.addBox(v,N);v.insertBefore(N,s);var n=j.notation.split(/ /);var o=0,S=0,q=0,z=0,K=0,I=0;var Q,g;var G,ac,P;if(!j.mathcolor){j.mathcolor="black"}else{ab.style.color=j.mathcolor}for(var aa=0,Y=n.length;aa<Y;aa++){switch(n[aa]){case a.NOTATION.BOX:N.style.border=C;if(!b.msieBorderWidthBug){o=S=z=q=M}break;case a.NOTATION.ROUNDEDBOX:if(b.useVML){if(!g){g=this.HTMLvml(v,J,O,k,M,j.mathcolor)}P=Math.floor(1000*Math.min(k,J+O)-2*M);G=Math.floor(4000*(k-2*M)),ac=Math.floor(4000*(J+O-2*M));this.HTMLvmlElement(g,"shape",{style:{width:this.HTMLpx(k-2*M),height:this.HTMLpx(J+O-2*M),left:this.HTMLpx(M,0.5),top:this.HTMLpx(M,0.5)},path:"m "+P+",0 qx 0,"+P+" l 0,"+(ac-P)+" qy "+P+","+ac+" l "+(G-P)+","+ac+" qx "+G+","+(ac-P)+" l "+G+","+P+" qy "+(G-P)+",0 x e",coordsize:G+","+ac})}else{if(!Q){Q=this.HTMLsvg(v,J,O,k,M,j.mathcolor)}this.HTMLsvgElement(Q.firstChild,"rect",{x:1,y:1,width:this.HTMLpx(k-M)-1,height:this.HTMLpx(J+O-M)-1,rx:this.HTMLpx(Math.min(J+O,k)/4)})}break;case a.NOTATION.CIRCLE:if(b.useVML){if(!g){g=this.HTMLvml(v,J,O,k,M,j.mathcolor)}this.HTMLvmlElement(g,"oval",{style:{width:this.HTMLpx(k-2*M),height:this.HTMLpx(J+O-2*M),left:this.HTMLpx(M,0.5),top:this.HTMLpx(M,0.5)}})}else{if(!Q){Q=this.HTMLsvg(v,J,O,k,M,j.mathcolor)}this.HTMLsvgElement(Q.firstChild,"ellipse",{rx:this.HTMLpx(k/2-M),ry:this.HTMLpx((J+O)/2-M),cx:this.HTMLpx(k/2),cy:this.HTMLpx((J+O)/2)})}break;case a.NOTATION.LEFT:N.style.borderLeft=C;if(!b.msieBorderWidthBug){z=M}break;case a.NOTATION.ACTUARIAL:N.style.borderTop=C;if(!b.msieBorderWidthBug){o=M;N.bbox.w+=V-M}case a.NOTATION.RIGHT:N.style.borderRight=C;if(!b.msieBorderWidthBug){q=M}break;case a.NOTATION.VERTICALSTRIKE:var u=b.createRule(v,J+O-M/2,0,M);b.addBox(v,u);b.placeBox(u,V+M+s.bbox.w/2,-O,true);break;case a.NOTATION.TOP:N.style.borderTop=C;if(!b.msieBorderWidthBug){o=M}break;case a.NOTATION.BOTTOM:N.style.borderBottom=C;if(!b.msieBorderWidthBug){S=M}break;case a.NOTATION.HORIZONTALSTRIKE:var X=b.createRule(v,M,0,k-M/2);b.addBox(v,X);b.placeBox(X,0,(J+O)/2-O,true);break;case a.NOTATION.UPDIAGONALSTRIKE:if(b.useVML){if(!g){g=this.HTMLvml(v,J,O,k,M,j.mathcolor)}var F=this.HTMLvmlElement(g,"line",{from:"0,"+this.HTMLpx(J+O-M),to:this.HTMLpx(k)+",0"});if(this.arrow){this.HTMLvmlElement(F,"stroke",{endarrow:"classic"});F.to=this.HTMLpx(k)+","+this.HTMLpx(M)}}else{if(!Q){Q=this.HTMLsvg(v,J,O,k,M,j.mathcolor)}if(this.arrow){var Z=Math.sqrt(k*k+(J+O)*(J+O));G=k/Z*10*ad/b.em,ac=(J+O)/Z*10*ad/b.em;var E=k-M/2,A=M/2;if(A+ac-0.4*G<0){A=0.4*G-ac}this.HTMLsvgElement(Q.firstChild,"line",{x1:1,y1:this.HTMLpx(J+O-M),x2:this.HTMLpx(E-0.7*G),y2:this.HTMLpx(A+0.7*ac)});this.HTMLsvgElement(Q.firstChild,"polygon",{points:this.HTMLpx(E)+","+this.HTMLpx(A)+" "+this.HTMLpx(E-G-0.4*ac)+","+this.HTMLpx(A+ac-0.4*G)+" "+this.HTMLpx(E-0.7*G)+","+this.HTMLpx(A+0.7*ac)+" "+this.HTMLpx(E-G+0.4*ac)+","+this.HTMLpx(A+ac+0.4*G)+" "+this.HTMLpx(E)+","+this.HTMLpx(A),fill:j.mathcolor,stroke:"none"})}else{this.HTMLsvgElement(Q.firstChild,"line",{x1:1,y1:this.HTMLpx(J+O-M),x2:this.HTMLpx(k-M),y2:this.HTMLpx(M)})}}break;case a.NOTATION.DOWNDIAGONALSTRIKE:if(b.useVML){if(!g){g=this.HTMLvml(v,J,O,k,M,j.mathcolor)}this.HTMLvmlElement(g,"line",{from:"0,0",to:this.HTMLpx(k)+","+this.HTMLpx(J+O-M)})}else{if(!Q){Q=this.HTMLsvg(v,J,O,k,M,j.mathcolor)}this.HTMLsvgElement(Q.firstChild,"line",{x1:1,y1:this.HTMLpx(M),x2:this.HTMLpx(k-M),y2:this.HTMLpx(J+O-M)})}break;case a.NOTATION.MADRUWB:N.style.borderBottom=C;N.style.borderRight=C;if(!b.msieBorderWidthBug){S=q=M}break;case a.NOTATION.RADICAL:if(b.useVML){if(!g){g=this.HTMLvml(v,J,O,k,M,j.mathcolor)}this.HTMLvmlElement(g,"shape",{style:{width:this.HTMLpx(k),height:this.HTMLpx(J+O)},path:"m "+this.HTMLpt(M/2,0.6*(J+O))+" l "+this.HTMLpt(V,J+O-M)+" "+this.HTMLpt(2*V,M/2)+" "+this.HTMLpt(k,M/2)+" e",coordsize:this.HTMLpt(k,J+O)});K=V}else{if(!Q){Q=this.HTMLsvg(v,J,O,k,M,j.mathcolor)}this.HTMLsvgElement(Q.firstChild,"path",{d:"M 1,"+this.HTMLpx(0.6*(J+O))+" L "+this.HTMLpx(V)+","+this.HTMLpx(J+O)+" L "+this.HTMLpx(2*V)+",1 L "+this.HTMLpx(k)+",1"});b.placeBox(Q.parentNode,0,V/2-O,true);K=V;I=M}break;case a.NOTATION.LONGDIV:if(b.useVML){if(!g){g=this.HTMLvml(v,J,O,k,M,j.mathcolor)}this.HTMLvmlElement(g,"line",{from:"0,"+this.HTMLpx(M/2),to:this.HTMLpx(k-M)+","+this.HTMLpx(M/2)});this.HTMLvmlElement(g,"arc",{style:{width:this.HTMLpx(2*V),height:this.HTMLpx(J+O-2*M),left:this.HTMLpx(-V),top:this.HTMLpx(M)},startangle:"10",endangle:"170"});K=V}else{if(!Q){Q=this.HTMLsvg(v,J,O,k,M,j.mathcolor)}this.HTMLsvgElement(Q.firstChild,"path",{d:"M "+this.HTMLpx(k)+",1 L 1,1 a"+this.HTMLpx(V)+","+this.HTMLpx((J+O)/2-M)+" 0 0,1 1,"+this.HTMLpx(J+O-2*M)});b.placeBox(Q.parentNode,0,M-O,true);K=V;I=M}break}}N.style.width=b.Em(k-z-q);N.style.height=b.Em(J+O-o-S);b.placeBox(N,0,I-O,true);b.placeBox(s,K+V+M,0);this.HTMLhandleSpace(ab);this.HTMLhandleColor(ab);return ab},HTMLpx:function(g){return(g*b.em)},HTMLpt:function(g,h){return Math.floor(1000*g)+","+Math.floor(1000*h)},HTMLhandleColor:function(h){var i=document.getElementById("MathJax-frame-"+this.spanID);if(i){var g=this.getValues("mathbackground","background");if(this.style&&h.style.backgroundColor){g.mathbackground=h.style.backgroundColor;h.style.backgroundColor=""}if(g.background&&!this.mathbackground){g.mathbackground=g.background}if(g.mathbackground&&g.mathbackground!==a.COLOR.TRANSPARENT){i.style.backgroundColor=g.mathbackground}}else{this.SUPER(arguments).HTMLhandleColor.call(this,h)}},HTMLsvg:function(h,l,m,g,k,j){var i=document.createElementNS(c,"svg");if(i.style){i.style.width=b.Em(g);i.style.height=b.Em(l+m)}var n=b.createBox(h);n.appendChild(i);b.placeBox(n,0,-m,true);this.HTMLsvgElement(i,"g",{fill:"none",stroke:j,"stroke-width":k*b.em});return i},HTMLsvgElement:function(g,h,i){var j=document.createElementNS(c,h);j.isMathJax=true;if(i){for(var k in i){if(i.hasOwnProperty(k)){j.setAttributeNS(null,k,i[k].toString())}}}g.appendChild(j);return j},HTMLvml:function(i,l,m,h,k,j){var g=b.createFrame(i,l+m,0,h,0,"none");b.addBox(i,g);b.placeBox(g,0,-m,true);this.constructor.VMLcolor=j;this.constructor.VMLthickness=this.HTMLpx(k);return g},HTMLvmlElement:function(g,h,i){var j=b.addElement(g,e+":"+h,{isMathJax:true});j.style.position="absolute";j.style.left=j.style.top=0;MathJax.Hub.Insert(j,i);if(!i.fillcolor){j.fillcolor="none"}if(!i.strokecolor){j.strokecolor=this.constructor.VMLcolor}if(!i.strokeweight){j.strokeweight=this.constructor.VMLthickness}return j}});MathJax.Hub.Browser.Select({MSIE:function(g){a.menclose.Augment({HTMLpx:function(i,h){return(i*b.em+(h||0))+"px"}});b.useVML=true;if(!document.namespaces[e]){if(document.documentMode&&document.documentMode>=8){document.namespaces.add(e,f,"#default#VML")}else{document.namespaces.add(e,f);document.createStyleSheet().addRule(e+"\\: *","{behavior: url(#default#VML)}")}}}});MathJax.Hub.Startup.signal.Post("HTML-CSS menclose Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/menclose.js")});

