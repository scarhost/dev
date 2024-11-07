import{c as zs,a as _e,S as _d,P as lt,e as qh}from"./build.4pngAmH-.20241028.js";var mo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */mo.exports;(function(s,e){(function(){var t,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",m=1,_=2,M=4,A=1,R=2,v=1,g=2,U=4,w=8,N=16,W=32,F=64,O=128,Q=256,C=512,b=30,K="...",se=800,H=16,te=1,ae=2,ue=3,xe=1/0,Z=9007199254740991,pe=17976931348623157e292,he=NaN,Ae=4294967295,ct=Ae-1,Et=Ae>>>1,ee=[["ary",O],["bind",v],["bindKey",g],["curry",w],["curryRight",N],["flip",C],["partial",W],["partialRight",F],["rearg",Q]],fe="[object Arguments]",we="[object Array]",Ee="[object AsyncFunction]",$e="[object Boolean]",Ke="[object Date]",dt="[object DOMException]",G="[object Error]",tt="[object Function]",Ve="[object GeneratorFunction]",_t="[object Map]",Ge="[object Number]",St="[object Null]",P="[object Object]",y="[object Promise]",J="[object Proxy]",re="[object RegExp]",le="[object Set]",ce="[object String]",Fe="[object Symbol]",de="[object Undefined]",Le="[object WeakMap]",We="[object WeakSet]",me="[object ArrayBuffer]",be="[object DataView]",qe="[object Float32Array]",Re="[object Float64Array]",Ce="[object Int8Array]",ot="[object Int16Array]",ut="[object Int32Array]",gt="[object Uint8Array]",mt="[object Uint8ClampedArray]",bt="[object Uint16Array]",Ie="[object Uint32Array]",I=/\b__p \+= '';/g,ve=/\b(__p \+=) '' \+/g,ge=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ue=/&(?:amp|lt|gt|quot|#39);/g,Ne=/[&<>"']/g,Tt=RegExp(Ue.source),Pt=RegExp(Ne.source),Dt=/<%-([\s\S]+?)%>/g,Jt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Un=/^\w*$/,pi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wr=/[\\^$.*+?()[\]{}|]/g,ea=RegExp(wr.source),vs=/^\s+/,Rr=/\s/,ta=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Cr=/\{\n\/\* \[wrapped with (.+)\] \*/,na=/,? & /,ia=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ao=/[()=,{}\[\]\/\s]/,wo=/\\(\\)?/g,Ro=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,T=/\w*$/,k=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,q=/^\[object .+?Constructor\]$/,V=/^0o[0-7]+$/i,ye=/^(?:0|[1-9]\d*)$/,De=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Oe=/($^)/,Xe=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",Ze="\\u0300-\\u036f",Qe="\\ufe20-\\ufe2f",zt="\\u20d0-\\u20ff",sn=Ze+Qe+zt,Gt="\\u2700-\\u27bf",Nn="a-z\\xdf-\\xf6\\xf8-\\xff",Ut="\\xac\\xb1\\xd7\\xf7",et="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xs="\\u2000-\\u206f",Lt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ni="A-Z\\xc0-\\xd6\\xd8-\\xde",Ms="\\ufe0e\\ufe0f",Di=Ut+et+xs+Lt,ir="['’]",Qt="["+Ye+"]",qn="["+Di+"]",Ui="["+sn+"]",un="\\d+",Ss="["+Gt+"]",ra="["+Nn+"]",ys="[^"+Ye+Di+un+Gt+Nn+ni+"]",Co="\\ud83c[\\udffb-\\udfff]",Qd="(?:"+Ui+"|"+Co+")",Ic="[^"+Ye+"]",Po="(?:\\ud83c[\\udde6-\\uddff]){2}",Lo="[\\ud800-\\udbff][\\udc00-\\udfff]",Pr="["+ni+"]",Dc="\\u200d",Uc="(?:"+ra+"|"+ys+")",jd="(?:"+Pr+"|"+ys+")",Nc="(?:"+ir+"(?:d|ll|m|re|s|t|ve))?",Oc="(?:"+ir+"(?:D|LL|M|RE|S|T|VE))?",Fc=Qd+"?",zc="["+Ms+"]?",ep="(?:"+Dc+"(?:"+[Ic,Po,Lo].join("|")+")"+zc+Fc+")*",tp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",np="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bc=zc+Fc+ep,ip="(?:"+[Ss,Po,Lo].join("|")+")"+Bc,rp="(?:"+[Ic+Ui+"?",Ui,Po,Lo,Qt].join("|")+")",sp=RegExp(ir,"g"),ap=RegExp(Ui,"g"),Io=RegExp(Co+"(?="+Co+")|"+rp+Bc,"g"),op=RegExp([Pr+"?"+ra+"+"+Nc+"(?="+[qn,Pr,"$"].join("|")+")",jd+"+"+Oc+"(?="+[qn,Pr+Uc,"$"].join("|")+")",Pr+"?"+Uc+"+"+Nc,Pr+"+"+Oc,np,tp,un,ip].join("|"),"g"),lp=RegExp("["+Dc+Ye+sn+Ms+"]"),cp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,up=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hp=-1,Nt={};Nt[qe]=Nt[Re]=Nt[Ce]=Nt[ot]=Nt[ut]=Nt[gt]=Nt[mt]=Nt[bt]=Nt[Ie]=!0,Nt[fe]=Nt[we]=Nt[me]=Nt[$e]=Nt[be]=Nt[Ke]=Nt[G]=Nt[tt]=Nt[_t]=Nt[Ge]=Nt[P]=Nt[re]=Nt[le]=Nt[ce]=Nt[Le]=!1;var It={};It[fe]=It[we]=It[me]=It[be]=It[$e]=It[Ke]=It[qe]=It[Re]=It[Ce]=It[ot]=It[ut]=It[_t]=It[Ge]=It[P]=It[re]=It[le]=It[ce]=It[Fe]=It[gt]=It[mt]=It[bt]=It[Ie]=!0,It[G]=It[tt]=It[Le]=!1;var fp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},mp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},gp=parseFloat,_p=parseInt,Hc=typeof zs=="object"&&zs&&zs.Object===Object&&zs,vp=typeof self=="object"&&self&&self.Object===Object&&self,tn=Hc||vp||Function("return this")(),Do=e&&!e.nodeType&&e,rr=Do&&!0&&s&&!s.nodeType&&s,kc=rr&&rr.exports===Do,Uo=kc&&Hc.process,On=function(){try{var z=rr&&rr.require&&rr.require("util").types;return z||Uo&&Uo.binding&&Uo.binding("util")}catch{}}(),Gc=On&&On.isArrayBuffer,Vc=On&&On.isDate,Wc=On&&On.isMap,Xc=On&&On.isRegExp,$c=On&&On.isSet,qc=On&&On.isTypedArray;function En(z,j,X){switch(X.length){case 0:return z.call(j);case 1:return z.call(j,X[0]);case 2:return z.call(j,X[0],X[1]);case 3:return z.call(j,X[0],X[1],X[2])}return z.apply(j,X)}function xp(z,j,X,Te){for(var Je=-1,vt=z==null?0:z.length;++Je<vt;){var $t=z[Je];j(Te,$t,X($t),z)}return Te}function Fn(z,j){for(var X=-1,Te=z==null?0:z.length;++X<Te&&j(z[X],X,z)!==!1;);return z}function Mp(z,j){for(var X=z==null?0:z.length;X--&&j(z[X],X,z)!==!1;);return z}function Yc(z,j){for(var X=-1,Te=z==null?0:z.length;++X<Te;)if(!j(z[X],X,z))return!1;return!0}function Ni(z,j){for(var X=-1,Te=z==null?0:z.length,Je=0,vt=[];++X<Te;){var $t=z[X];j($t,X,z)&&(vt[Je++]=$t)}return vt}function sa(z,j){var X=z==null?0:z.length;return!!X&&Lr(z,j,0)>-1}function No(z,j,X){for(var Te=-1,Je=z==null?0:z.length;++Te<Je;)if(X(j,z[Te]))return!0;return!1}function Ft(z,j){for(var X=-1,Te=z==null?0:z.length,Je=Array(Te);++X<Te;)Je[X]=j(z[X],X,z);return Je}function Oi(z,j){for(var X=-1,Te=j.length,Je=z.length;++X<Te;)z[Je+X]=j[X];return z}function Oo(z,j,X,Te){var Je=-1,vt=z==null?0:z.length;for(Te&&vt&&(X=z[++Je]);++Je<vt;)X=j(X,z[Je],Je,z);return X}function Sp(z,j,X,Te){var Je=z==null?0:z.length;for(Te&&Je&&(X=z[--Je]);Je--;)X=j(X,z[Je],Je,z);return X}function Fo(z,j){for(var X=-1,Te=z==null?0:z.length;++X<Te;)if(j(z[X],X,z))return!0;return!1}var yp=zo("length");function Ep(z){return z.split("")}function bp(z){return z.match(ia)||[]}function Kc(z,j,X){var Te;return X(z,function(Je,vt,$t){if(j(Je,vt,$t))return Te=vt,!1}),Te}function aa(z,j,X,Te){for(var Je=z.length,vt=X+(Te?1:-1);Te?vt--:++vt<Je;)if(j(z[vt],vt,z))return vt;return-1}function Lr(z,j,X){return j===j?Op(z,j,X):aa(z,Zc,X)}function Tp(z,j,X,Te){for(var Je=X-1,vt=z.length;++Je<vt;)if(Te(z[Je],j))return Je;return-1}function Zc(z){return z!==z}function Jc(z,j){var X=z==null?0:z.length;return X?Ho(z,j)/X:he}function zo(z){return function(j){return j==null?t:j[z]}}function Bo(z){return function(j){return z==null?t:z[j]}}function Qc(z,j,X,Te,Je){return Je(z,function(vt,$t,Ct){X=Te?(Te=!1,vt):j(X,vt,$t,Ct)}),X}function Ap(z,j){var X=z.length;for(z.sort(j);X--;)z[X]=z[X].value;return z}function Ho(z,j){for(var X,Te=-1,Je=z.length;++Te<Je;){var vt=j(z[Te]);vt!==t&&(X=X===t?vt:X+vt)}return X}function ko(z,j){for(var X=-1,Te=Array(z);++X<z;)Te[X]=j(X);return Te}function wp(z,j){return Ft(j,function(X){return[X,z[X]]})}function jc(z){return z&&z.slice(0,iu(z)+1).replace(vs,"")}function bn(z){return function(j){return z(j)}}function Go(z,j){return Ft(j,function(X){return z[X]})}function Es(z,j){return z.has(j)}function eu(z,j){for(var X=-1,Te=z.length;++X<Te&&Lr(j,z[X],0)>-1;);return X}function tu(z,j){for(var X=z.length;X--&&Lr(j,z[X],0)>-1;);return X}function Rp(z,j){for(var X=z.length,Te=0;X--;)z[X]===j&&++Te;return Te}var Cp=Bo(fp),Pp=Bo(dp);function Lp(z){return"\\"+mp[z]}function Ip(z,j){return z==null?t:z[j]}function Ir(z){return lp.test(z)}function Dp(z){return cp.test(z)}function Up(z){for(var j,X=[];!(j=z.next()).done;)X.push(j.value);return X}function Vo(z){var j=-1,X=Array(z.size);return z.forEach(function(Te,Je){X[++j]=[Je,Te]}),X}function nu(z,j){return function(X){return z(j(X))}}function Fi(z,j){for(var X=-1,Te=z.length,Je=0,vt=[];++X<Te;){var $t=z[X];($t===j||$t===p)&&(z[X]=p,vt[Je++]=X)}return vt}function oa(z){var j=-1,X=Array(z.size);return z.forEach(function(Te){X[++j]=Te}),X}function Np(z){var j=-1,X=Array(z.size);return z.forEach(function(Te){X[++j]=[Te,Te]}),X}function Op(z,j,X){for(var Te=X-1,Je=z.length;++Te<Je;)if(z[Te]===j)return Te;return-1}function Fp(z,j,X){for(var Te=X+1;Te--;)if(z[Te]===j)return Te;return Te}function Dr(z){return Ir(z)?Bp(z):yp(z)}function Yn(z){return Ir(z)?Hp(z):Ep(z)}function iu(z){for(var j=z.length;j--&&Rr.test(z.charAt(j)););return j}var zp=Bo(pp);function Bp(z){for(var j=Io.lastIndex=0;Io.test(z);)++j;return j}function Hp(z){return z.match(Io)||[]}function kp(z){return z.match(op)||[]}var Gp=function z(j){j=j==null?tn:Ur.defaults(tn.Object(),j,Ur.pick(tn,up));var X=j.Array,Te=j.Date,Je=j.Error,vt=j.Function,$t=j.Math,Ct=j.Object,Wo=j.RegExp,Vp=j.String,zn=j.TypeError,la=X.prototype,Wp=vt.prototype,Nr=Ct.prototype,ca=j["__core-js_shared__"],ua=Wp.toString,yt=Nr.hasOwnProperty,Xp=0,ru=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ha=Nr.toString,$p=ua.call(Ct),qp=tn._,Yp=Wo("^"+ua.call(yt).replace(wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fa=kc?j.Buffer:t,zi=j.Symbol,da=j.Uint8Array,su=fa?fa.allocUnsafe:t,pa=nu(Ct.getPrototypeOf,Ct),au=Ct.create,ou=Nr.propertyIsEnumerable,ma=la.splice,lu=zi?zi.isConcatSpreadable:t,bs=zi?zi.iterator:t,sr=zi?zi.toStringTag:t,ga=function(){try{var n=ur(Ct,"defineProperty");return n({},"",{}),n}catch{}}(),Kp=j.clearTimeout!==tn.clearTimeout&&j.clearTimeout,Zp=Te&&Te.now!==tn.Date.now&&Te.now,Jp=j.setTimeout!==tn.setTimeout&&j.setTimeout,_a=$t.ceil,va=$t.floor,Xo=Ct.getOwnPropertySymbols,Qp=fa?fa.isBuffer:t,cu=j.isFinite,jp=la.join,em=nu(Ct.keys,Ct),qt=$t.max,an=$t.min,tm=Te.now,nm=j.parseInt,uu=$t.random,im=la.reverse,$o=ur(j,"DataView"),Ts=ur(j,"Map"),qo=ur(j,"Promise"),Or=ur(j,"Set"),As=ur(j,"WeakMap"),ws=ur(Ct,"create"),xa=As&&new As,Fr={},rm=hr($o),sm=hr(Ts),am=hr(qo),om=hr(Or),lm=hr(As),Ma=zi?zi.prototype:t,Rs=Ma?Ma.valueOf:t,hu=Ma?Ma.toString:t;function S(n){if(kt(n)&&!je(n)&&!(n instanceof ft)){if(n instanceof Bn)return n;if(yt.call(n,"__wrapped__"))return fh(n)}return new Bn(n)}var zr=function(){function n(){}return function(r){if(!Bt(r))return{};if(au)return au(r);n.prototype=r;var l=new n;return n.prototype=t,l}}();function Sa(){}function Bn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}S.templateSettings={escape:Dt,evaluate:Jt,interpolate:At,variable:"",imports:{_:S}},S.prototype=Sa.prototype,S.prototype.constructor=S,Bn.prototype=zr(Sa.prototype),Bn.prototype.constructor=Bn;function ft(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ae,this.__views__=[]}function cm(){var n=new ft(this.__wrapped__);return n.__actions__=gn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=gn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=gn(this.__views__),n}function um(){if(this.__filtered__){var n=new ft(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function hm(){var n=this.__wrapped__.value(),r=this.__dir__,l=je(n),h=r<0,x=l?n.length:0,E=Eg(0,x,this.__views__),L=E.start,D=E.end,B=D-L,ne=h?D:L-1,ie=this.__iteratees__,oe=ie.length,Me=0,Pe=an(B,this.__takeCount__);if(!l||!h&&x==B&&Pe==B)return Nu(n,this.__actions__);var He=[];e:for(;B--&&Me<Pe;){ne+=r;for(var it=-1,ke=n[ne];++it<oe;){var ht=ie[it],pt=ht.iteratee,wn=ht.type,dn=pt(ke);if(wn==ae)ke=dn;else if(!dn){if(wn==te)continue e;break e}}He[Me++]=ke}return He}ft.prototype=zr(Sa.prototype),ft.prototype.constructor=ft;function ar(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function fm(){this.__data__=ws?ws(null):{},this.size=0}function dm(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function pm(n){var r=this.__data__;if(ws){var l=r[n];return l===f?t:l}return yt.call(r,n)?r[n]:t}function mm(n){var r=this.__data__;return ws?r[n]!==t:yt.call(r,n)}function gm(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=ws&&r===t?f:r,this}ar.prototype.clear=fm,ar.prototype.delete=dm,ar.prototype.get=pm,ar.prototype.has=mm,ar.prototype.set=gm;function mi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function _m(){this.__data__=[],this.size=0}function vm(n){var r=this.__data__,l=ya(r,n);if(l<0)return!1;var h=r.length-1;return l==h?r.pop():ma.call(r,l,1),--this.size,!0}function xm(n){var r=this.__data__,l=ya(r,n);return l<0?t:r[l][1]}function Mm(n){return ya(this.__data__,n)>-1}function Sm(n,r){var l=this.__data__,h=ya(l,n);return h<0?(++this.size,l.push([n,r])):l[h][1]=r,this}mi.prototype.clear=_m,mi.prototype.delete=vm,mi.prototype.get=xm,mi.prototype.has=Mm,mi.prototype.set=Sm;function gi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function ym(){this.size=0,this.__data__={hash:new ar,map:new(Ts||mi),string:new ar}}function Em(n){var r=Ua(this,n).delete(n);return this.size-=r?1:0,r}function bm(n){return Ua(this,n).get(n)}function Tm(n){return Ua(this,n).has(n)}function Am(n,r){var l=Ua(this,n),h=l.size;return l.set(n,r),this.size+=l.size==h?0:1,this}gi.prototype.clear=ym,gi.prototype.delete=Em,gi.prototype.get=bm,gi.prototype.has=Tm,gi.prototype.set=Am;function or(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new gi;++r<l;)this.add(n[r])}function wm(n){return this.__data__.set(n,f),this}function Rm(n){return this.__data__.has(n)}or.prototype.add=or.prototype.push=wm,or.prototype.has=Rm;function Kn(n){var r=this.__data__=new mi(n);this.size=r.size}function Cm(){this.__data__=new mi,this.size=0}function Pm(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function Lm(n){return this.__data__.get(n)}function Im(n){return this.__data__.has(n)}function Dm(n,r){var l=this.__data__;if(l instanceof mi){var h=l.__data__;if(!Ts||h.length<a-1)return h.push([n,r]),this.size=++l.size,this;l=this.__data__=new gi(h)}return l.set(n,r),this.size=l.size,this}Kn.prototype.clear=Cm,Kn.prototype.delete=Pm,Kn.prototype.get=Lm,Kn.prototype.has=Im,Kn.prototype.set=Dm;function fu(n,r){var l=je(n),h=!l&&fr(n),x=!l&&!h&&Vi(n),E=!l&&!h&&!x&&Gr(n),L=l||h||x||E,D=L?ko(n.length,Vp):[],B=D.length;for(var ne in n)(r||yt.call(n,ne))&&!(L&&(ne=="length"||x&&(ne=="offset"||ne=="parent")||E&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||Mi(ne,B)))&&D.push(ne);return D}function du(n){var r=n.length;return r?n[rl(0,r-1)]:t}function Um(n,r){return Na(gn(n),lr(r,0,n.length))}function Nm(n){return Na(gn(n))}function Yo(n,r,l){(l!==t&&!Zn(n[r],l)||l===t&&!(r in n))&&_i(n,r,l)}function Cs(n,r,l){var h=n[r];(!(yt.call(n,r)&&Zn(h,l))||l===t&&!(r in n))&&_i(n,r,l)}function ya(n,r){for(var l=n.length;l--;)if(Zn(n[l][0],r))return l;return-1}function Om(n,r,l,h){return Bi(n,function(x,E,L){r(h,x,l(x),L)}),h}function pu(n,r){return n&&ri(r,jt(r),n)}function Fm(n,r){return n&&ri(r,vn(r),n)}function _i(n,r,l){r=="__proto__"&&ga?ga(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function Ko(n,r){for(var l=-1,h=r.length,x=X(h),E=n==null;++l<h;)x[l]=E?t:Cl(n,r[l]);return x}function lr(n,r,l){return n===n&&(l!==t&&(n=n<=l?n:l),r!==t&&(n=n>=r?n:r)),n}function Hn(n,r,l,h,x,E){var L,D=r&m,B=r&_,ne=r&M;if(l&&(L=x?l(n,h,x,E):l(n)),L!==t)return L;if(!Bt(n))return n;var ie=je(n);if(ie){if(L=Tg(n),!D)return gn(n,L)}else{var oe=on(n),Me=oe==tt||oe==Ve;if(Vi(n))return zu(n,D);if(oe==P||oe==fe||Me&&!x){if(L=B||Me?{}:ih(n),!D)return B?pg(n,Fm(L,n)):dg(n,pu(L,n))}else{if(!It[oe])return x?n:{};L=Ag(n,oe,D)}}E||(E=new Kn);var Pe=E.get(n);if(Pe)return Pe;E.set(n,L),Ih(n)?n.forEach(function(ke){L.add(Hn(ke,r,l,ke,n,E))}):Ph(n)&&n.forEach(function(ke,ht){L.set(ht,Hn(ke,r,l,ht,n,E))});var He=ne?B?ml:pl:B?vn:jt,it=ie?t:He(n);return Fn(it||n,function(ke,ht){it&&(ht=ke,ke=n[ht]),Cs(L,ht,Hn(ke,r,l,ht,n,E))}),L}function zm(n){var r=jt(n);return function(l){return mu(l,n,r)}}function mu(n,r,l){var h=l.length;if(n==null)return!h;for(n=Ct(n);h--;){var x=l[h],E=r[x],L=n[x];if(L===t&&!(x in n)||!E(L))return!1}return!0}function gu(n,r,l){if(typeof n!="function")throw new zn(c);return Os(function(){n.apply(t,l)},r)}function Ps(n,r,l,h){var x=-1,E=sa,L=!0,D=n.length,B=[],ne=r.length;if(!D)return B;l&&(r=Ft(r,bn(l))),h?(E=No,L=!1):r.length>=a&&(E=Es,L=!1,r=new or(r));e:for(;++x<D;){var ie=n[x],oe=l==null?ie:l(ie);if(ie=h||ie!==0?ie:0,L&&oe===oe){for(var Me=ne;Me--;)if(r[Me]===oe)continue e;B.push(ie)}else E(r,oe,h)||B.push(ie)}return B}var Bi=Vu(ii),_u=Vu(Jo,!0);function Bm(n,r){var l=!0;return Bi(n,function(h,x,E){return l=!!r(h,x,E),l}),l}function Ea(n,r,l){for(var h=-1,x=n.length;++h<x;){var E=n[h],L=r(E);if(L!=null&&(D===t?L===L&&!An(L):l(L,D)))var D=L,B=E}return B}function Hm(n,r,l,h){var x=n.length;for(l=nt(l),l<0&&(l=-l>x?0:x+l),h=h===t||h>x?x:nt(h),h<0&&(h+=x),h=l>h?0:Uh(h);l<h;)n[l++]=r;return n}function vu(n,r){var l=[];return Bi(n,function(h,x,E){r(h,x,E)&&l.push(h)}),l}function nn(n,r,l,h,x){var E=-1,L=n.length;for(l||(l=Rg),x||(x=[]);++E<L;){var D=n[E];r>0&&l(D)?r>1?nn(D,r-1,l,h,x):Oi(x,D):h||(x[x.length]=D)}return x}var Zo=Wu(),xu=Wu(!0);function ii(n,r){return n&&Zo(n,r,jt)}function Jo(n,r){return n&&xu(n,r,jt)}function ba(n,r){return Ni(r,function(l){return Si(n[l])})}function cr(n,r){r=ki(r,n);for(var l=0,h=r.length;n!=null&&l<h;)n=n[si(r[l++])];return l&&l==h?n:t}function Mu(n,r,l){var h=r(n);return je(n)?h:Oi(h,l(n))}function hn(n){return n==null?n===t?de:St:sr&&sr in Ct(n)?yg(n):Ng(n)}function Qo(n,r){return n>r}function km(n,r){return n!=null&&yt.call(n,r)}function Gm(n,r){return n!=null&&r in Ct(n)}function Vm(n,r,l){return n>=an(r,l)&&n<qt(r,l)}function jo(n,r,l){for(var h=l?No:sa,x=n[0].length,E=n.length,L=E,D=X(E),B=1/0,ne=[];L--;){var ie=n[L];L&&r&&(ie=Ft(ie,bn(r))),B=an(ie.length,B),D[L]=!l&&(r||x>=120&&ie.length>=120)?new or(L&&ie):t}ie=n[0];var oe=-1,Me=D[0];e:for(;++oe<x&&ne.length<B;){var Pe=ie[oe],He=r?r(Pe):Pe;if(Pe=l||Pe!==0?Pe:0,!(Me?Es(Me,He):h(ne,He,l))){for(L=E;--L;){var it=D[L];if(!(it?Es(it,He):h(n[L],He,l)))continue e}Me&&Me.push(He),ne.push(Pe)}}return ne}function Wm(n,r,l,h){return ii(n,function(x,E,L){r(h,l(x),E,L)}),h}function Ls(n,r,l){r=ki(r,n),n=oh(n,r);var h=n==null?n:n[si(Gn(r))];return h==null?t:En(h,n,l)}function Su(n){return kt(n)&&hn(n)==fe}function Xm(n){return kt(n)&&hn(n)==me}function $m(n){return kt(n)&&hn(n)==Ke}function Is(n,r,l,h,x){return n===r?!0:n==null||r==null||!kt(n)&&!kt(r)?n!==n&&r!==r:qm(n,r,l,h,Is,x)}function qm(n,r,l,h,x,E){var L=je(n),D=je(r),B=L?we:on(n),ne=D?we:on(r);B=B==fe?P:B,ne=ne==fe?P:ne;var ie=B==P,oe=ne==P,Me=B==ne;if(Me&&Vi(n)){if(!Vi(r))return!1;L=!0,ie=!1}if(Me&&!ie)return E||(E=new Kn),L||Gr(n)?eh(n,r,l,h,x,E):Mg(n,r,B,l,h,x,E);if(!(l&A)){var Pe=ie&&yt.call(n,"__wrapped__"),He=oe&&yt.call(r,"__wrapped__");if(Pe||He){var it=Pe?n.value():n,ke=He?r.value():r;return E||(E=new Kn),x(it,ke,l,h,E)}}return Me?(E||(E=new Kn),Sg(n,r,l,h,x,E)):!1}function Ym(n){return kt(n)&&on(n)==_t}function el(n,r,l,h){var x=l.length,E=x,L=!h;if(n==null)return!E;for(n=Ct(n);x--;){var D=l[x];if(L&&D[2]?D[1]!==n[D[0]]:!(D[0]in n))return!1}for(;++x<E;){D=l[x];var B=D[0],ne=n[B],ie=D[1];if(L&&D[2]){if(ne===t&&!(B in n))return!1}else{var oe=new Kn;if(h)var Me=h(ne,ie,B,n,r,oe);if(!(Me===t?Is(ie,ne,A|R,h,oe):Me))return!1}}return!0}function yu(n){if(!Bt(n)||Pg(n))return!1;var r=Si(n)?Yp:q;return r.test(hr(n))}function Km(n){return kt(n)&&hn(n)==re}function Zm(n){return kt(n)&&on(n)==le}function Jm(n){return kt(n)&&ka(n.length)&&!!Nt[hn(n)]}function Eu(n){return typeof n=="function"?n:n==null?xn:typeof n=="object"?je(n)?Au(n[0],n[1]):Tu(n):Xh(n)}function tl(n){if(!Ns(n))return em(n);var r=[];for(var l in Ct(n))yt.call(n,l)&&l!="constructor"&&r.push(l);return r}function Qm(n){if(!Bt(n))return Ug(n);var r=Ns(n),l=[];for(var h in n)h=="constructor"&&(r||!yt.call(n,h))||l.push(h);return l}function nl(n,r){return n<r}function bu(n,r){var l=-1,h=_n(n)?X(n.length):[];return Bi(n,function(x,E,L){h[++l]=r(x,E,L)}),h}function Tu(n){var r=_l(n);return r.length==1&&r[0][2]?sh(r[0][0],r[0][1]):function(l){return l===n||el(l,n,r)}}function Au(n,r){return xl(n)&&rh(r)?sh(si(n),r):function(l){var h=Cl(l,n);return h===t&&h===r?Pl(l,n):Is(r,h,A|R)}}function Ta(n,r,l,h,x){n!==r&&Zo(r,function(E,L){if(x||(x=new Kn),Bt(E))jm(n,r,L,l,Ta,h,x);else{var D=h?h(Sl(n,L),E,L+"",n,r,x):t;D===t&&(D=E),Yo(n,L,D)}},vn)}function jm(n,r,l,h,x,E,L){var D=Sl(n,l),B=Sl(r,l),ne=L.get(B);if(ne){Yo(n,l,ne);return}var ie=E?E(D,B,l+"",n,r,L):t,oe=ie===t;if(oe){var Me=je(B),Pe=!Me&&Vi(B),He=!Me&&!Pe&&Gr(B);ie=B,Me||Pe||He?je(D)?ie=D:Vt(D)?ie=gn(D):Pe?(oe=!1,ie=zu(B,!0)):He?(oe=!1,ie=Bu(B,!0)):ie=[]:Fs(B)||fr(B)?(ie=D,fr(D)?ie=Nh(D):(!Bt(D)||Si(D))&&(ie=ih(B))):oe=!1}oe&&(L.set(B,ie),x(ie,B,h,E,L),L.delete(B)),Yo(n,l,ie)}function wu(n,r){var l=n.length;if(l)return r+=r<0?l:0,Mi(r,l)?n[r]:t}function Ru(n,r,l){r.length?r=Ft(r,function(E){return je(E)?function(L){return cr(L,E.length===1?E[0]:E)}:E}):r=[xn];var h=-1;r=Ft(r,bn(ze()));var x=bu(n,function(E,L,D){var B=Ft(r,function(ne){return ne(E)});return{criteria:B,index:++h,value:E}});return Ap(x,function(E,L){return fg(E,L,l)})}function eg(n,r){return Cu(n,r,function(l,h){return Pl(n,h)})}function Cu(n,r,l){for(var h=-1,x=r.length,E={};++h<x;){var L=r[h],D=cr(n,L);l(D,L)&&Ds(E,ki(L,n),D)}return E}function tg(n){return function(r){return cr(r,n)}}function il(n,r,l,h){var x=h?Tp:Lr,E=-1,L=r.length,D=n;for(n===r&&(r=gn(r)),l&&(D=Ft(n,bn(l)));++E<L;)for(var B=0,ne=r[E],ie=l?l(ne):ne;(B=x(D,ie,B,h))>-1;)D!==n&&ma.call(D,B,1),ma.call(n,B,1);return n}function Pu(n,r){for(var l=n?r.length:0,h=l-1;l--;){var x=r[l];if(l==h||x!==E){var E=x;Mi(x)?ma.call(n,x,1):ol(n,x)}}return n}function rl(n,r){return n+va(uu()*(r-n+1))}function ng(n,r,l,h){for(var x=-1,E=qt(_a((r-n)/(l||1)),0),L=X(E);E--;)L[h?E:++x]=n,n+=l;return L}function sl(n,r){var l="";if(!n||r<1||r>Z)return l;do r%2&&(l+=n),r=va(r/2),r&&(n+=n);while(r);return l}function at(n,r){return yl(ah(n,r,xn),n+"")}function ig(n){return du(Vr(n))}function rg(n,r){var l=Vr(n);return Na(l,lr(r,0,l.length))}function Ds(n,r,l,h){if(!Bt(n))return n;r=ki(r,n);for(var x=-1,E=r.length,L=E-1,D=n;D!=null&&++x<E;){var B=si(r[x]),ne=l;if(B==="__proto__"||B==="constructor"||B==="prototype")return n;if(x!=L){var ie=D[B];ne=h?h(ie,B,D):t,ne===t&&(ne=Bt(ie)?ie:Mi(r[x+1])?[]:{})}Cs(D,B,ne),D=D[B]}return n}var Lu=xa?function(n,r){return xa.set(n,r),n}:xn,sg=ga?function(n,r){return ga(n,"toString",{configurable:!0,enumerable:!1,value:Il(r),writable:!0})}:xn;function ag(n){return Na(Vr(n))}function kn(n,r,l){var h=-1,x=n.length;r<0&&(r=-r>x?0:x+r),l=l>x?x:l,l<0&&(l+=x),x=r>l?0:l-r>>>0,r>>>=0;for(var E=X(x);++h<x;)E[h]=n[h+r];return E}function og(n,r){var l;return Bi(n,function(h,x,E){return l=r(h,x,E),!l}),!!l}function Aa(n,r,l){var h=0,x=n==null?h:n.length;if(typeof r=="number"&&r===r&&x<=Et){for(;h<x;){var E=h+x>>>1,L=n[E];L!==null&&!An(L)&&(l?L<=r:L<r)?h=E+1:x=E}return x}return al(n,r,xn,l)}function al(n,r,l,h){var x=0,E=n==null?0:n.length;if(E===0)return 0;r=l(r);for(var L=r!==r,D=r===null,B=An(r),ne=r===t;x<E;){var ie=va((x+E)/2),oe=l(n[ie]),Me=oe!==t,Pe=oe===null,He=oe===oe,it=An(oe);if(L)var ke=h||He;else ne?ke=He&&(h||Me):D?ke=He&&Me&&(h||!Pe):B?ke=He&&Me&&!Pe&&(h||!it):Pe||it?ke=!1:ke=h?oe<=r:oe<r;ke?x=ie+1:E=ie}return an(E,ct)}function Iu(n,r){for(var l=-1,h=n.length,x=0,E=[];++l<h;){var L=n[l],D=r?r(L):L;if(!l||!Zn(D,B)){var B=D;E[x++]=L===0?0:L}}return E}function Du(n){return typeof n=="number"?n:An(n)?he:+n}function Tn(n){if(typeof n=="string")return n;if(je(n))return Ft(n,Tn)+"";if(An(n))return hu?hu.call(n):"";var r=n+"";return r=="0"&&1/n==-xe?"-0":r}function Hi(n,r,l){var h=-1,x=sa,E=n.length,L=!0,D=[],B=D;if(l)L=!1,x=No;else if(E>=a){var ne=r?null:vg(n);if(ne)return oa(ne);L=!1,x=Es,B=new or}else B=r?[]:D;e:for(;++h<E;){var ie=n[h],oe=r?r(ie):ie;if(ie=l||ie!==0?ie:0,L&&oe===oe){for(var Me=B.length;Me--;)if(B[Me]===oe)continue e;r&&B.push(oe),D.push(ie)}else x(B,oe,l)||(B!==D&&B.push(oe),D.push(ie))}return D}function ol(n,r){return r=ki(r,n),n=oh(n,r),n==null||delete n[si(Gn(r))]}function Uu(n,r,l,h){return Ds(n,r,l(cr(n,r)),h)}function wa(n,r,l,h){for(var x=n.length,E=h?x:-1;(h?E--:++E<x)&&r(n[E],E,n););return l?kn(n,h?0:E,h?E+1:x):kn(n,h?E+1:0,h?x:E)}function Nu(n,r){var l=n;return l instanceof ft&&(l=l.value()),Oo(r,function(h,x){return x.func.apply(x.thisArg,Oi([h],x.args))},l)}function ll(n,r,l){var h=n.length;if(h<2)return h?Hi(n[0]):[];for(var x=-1,E=X(h);++x<h;)for(var L=n[x],D=-1;++D<h;)D!=x&&(E[x]=Ps(E[x]||L,n[D],r,l));return Hi(nn(E,1),r,l)}function Ou(n,r,l){for(var h=-1,x=n.length,E=r.length,L={};++h<x;){var D=h<E?r[h]:t;l(L,n[h],D)}return L}function cl(n){return Vt(n)?n:[]}function ul(n){return typeof n=="function"?n:xn}function ki(n,r){return je(n)?n:xl(n,r)?[n]:hh(Mt(n))}var lg=at;function Gi(n,r,l){var h=n.length;return l=l===t?h:l,!r&&l>=h?n:kn(n,r,l)}var Fu=Kp||function(n){return tn.clearTimeout(n)};function zu(n,r){if(r)return n.slice();var l=n.length,h=su?su(l):new n.constructor(l);return n.copy(h),h}function hl(n){var r=new n.constructor(n.byteLength);return new da(r).set(new da(n)),r}function cg(n,r){var l=r?hl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function ug(n){var r=new n.constructor(n.source,T.exec(n));return r.lastIndex=n.lastIndex,r}function hg(n){return Rs?Ct(Rs.call(n)):{}}function Bu(n,r){var l=r?hl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Hu(n,r){if(n!==r){var l=n!==t,h=n===null,x=n===n,E=An(n),L=r!==t,D=r===null,B=r===r,ne=An(r);if(!D&&!ne&&!E&&n>r||E&&L&&B&&!D&&!ne||h&&L&&B||!l&&B||!x)return 1;if(!h&&!E&&!ne&&n<r||ne&&l&&x&&!h&&!E||D&&l&&x||!L&&x||!B)return-1}return 0}function fg(n,r,l){for(var h=-1,x=n.criteria,E=r.criteria,L=x.length,D=l.length;++h<L;){var B=Hu(x[h],E[h]);if(B){if(h>=D)return B;var ne=l[h];return B*(ne=="desc"?-1:1)}}return n.index-r.index}function ku(n,r,l,h){for(var x=-1,E=n.length,L=l.length,D=-1,B=r.length,ne=qt(E-L,0),ie=X(B+ne),oe=!h;++D<B;)ie[D]=r[D];for(;++x<L;)(oe||x<E)&&(ie[l[x]]=n[x]);for(;ne--;)ie[D++]=n[x++];return ie}function Gu(n,r,l,h){for(var x=-1,E=n.length,L=-1,D=l.length,B=-1,ne=r.length,ie=qt(E-D,0),oe=X(ie+ne),Me=!h;++x<ie;)oe[x]=n[x];for(var Pe=x;++B<ne;)oe[Pe+B]=r[B];for(;++L<D;)(Me||x<E)&&(oe[Pe+l[L]]=n[x++]);return oe}function gn(n,r){var l=-1,h=n.length;for(r||(r=X(h));++l<h;)r[l]=n[l];return r}function ri(n,r,l,h){var x=!l;l||(l={});for(var E=-1,L=r.length;++E<L;){var D=r[E],B=h?h(l[D],n[D],D,l,n):t;B===t&&(B=n[D]),x?_i(l,D,B):Cs(l,D,B)}return l}function dg(n,r){return ri(n,vl(n),r)}function pg(n,r){return ri(n,th(n),r)}function Ra(n,r){return function(l,h){var x=je(l)?xp:Om,E=r?r():{};return x(l,n,ze(h,2),E)}}function Br(n){return at(function(r,l){var h=-1,x=l.length,E=x>1?l[x-1]:t,L=x>2?l[2]:t;for(E=n.length>3&&typeof E=="function"?(x--,E):t,L&&fn(l[0],l[1],L)&&(E=x<3?t:E,x=1),r=Ct(r);++h<x;){var D=l[h];D&&n(r,D,h,E)}return r})}function Vu(n,r){return function(l,h){if(l==null)return l;if(!_n(l))return n(l,h);for(var x=l.length,E=r?x:-1,L=Ct(l);(r?E--:++E<x)&&h(L[E],E,L)!==!1;);return l}}function Wu(n){return function(r,l,h){for(var x=-1,E=Ct(r),L=h(r),D=L.length;D--;){var B=L[n?D:++x];if(l(E[B],B,E)===!1)break}return r}}function mg(n,r,l){var h=r&v,x=Us(n);function E(){var L=this&&this!==tn&&this instanceof E?x:n;return L.apply(h?l:this,arguments)}return E}function Xu(n){return function(r){r=Mt(r);var l=Ir(r)?Yn(r):t,h=l?l[0]:r.charAt(0),x=l?Gi(l,1).join(""):r.slice(1);return h[n]()+x}}function Hr(n){return function(r){return Oo(Vh(Gh(r).replace(sp,"")),n,"")}}function Us(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=zr(n.prototype),h=n.apply(l,r);return Bt(h)?h:l}}function gg(n,r,l){var h=Us(n);function x(){for(var E=arguments.length,L=X(E),D=E,B=kr(x);D--;)L[D]=arguments[D];var ne=E<3&&L[0]!==B&&L[E-1]!==B?[]:Fi(L,B);if(E-=ne.length,E<l)return Zu(n,r,Ca,x.placeholder,t,L,ne,t,t,l-E);var ie=this&&this!==tn&&this instanceof x?h:n;return En(ie,this,L)}return x}function $u(n){return function(r,l,h){var x=Ct(r);if(!_n(r)){var E=ze(l,3);r=jt(r),l=function(D){return E(x[D],D,x)}}var L=n(r,l,h);return L>-1?x[E?r[L]:L]:t}}function qu(n){return xi(function(r){var l=r.length,h=l,x=Bn.prototype.thru;for(n&&r.reverse();h--;){var E=r[h];if(typeof E!="function")throw new zn(c);if(x&&!L&&Da(E)=="wrapper")var L=new Bn([],!0)}for(h=L?h:l;++h<l;){E=r[h];var D=Da(E),B=D=="wrapper"?gl(E):t;B&&Ml(B[0])&&B[1]==(O|w|W|Q)&&!B[4].length&&B[9]==1?L=L[Da(B[0])].apply(L,B[3]):L=E.length==1&&Ml(E)?L[D]():L.thru(E)}return function(){var ne=arguments,ie=ne[0];if(L&&ne.length==1&&je(ie))return L.plant(ie).value();for(var oe=0,Me=l?r[oe].apply(this,ne):ie;++oe<l;)Me=r[oe].call(this,Me);return Me}})}function Ca(n,r,l,h,x,E,L,D,B,ne){var ie=r&O,oe=r&v,Me=r&g,Pe=r&(w|N),He=r&C,it=Me?t:Us(n);function ke(){for(var ht=arguments.length,pt=X(ht),wn=ht;wn--;)pt[wn]=arguments[wn];if(Pe)var dn=kr(ke),Rn=Rp(pt,dn);if(h&&(pt=ku(pt,h,x,Pe)),E&&(pt=Gu(pt,E,L,Pe)),ht-=Rn,Pe&&ht<ne){var Wt=Fi(pt,dn);return Zu(n,r,Ca,ke.placeholder,l,pt,Wt,D,B,ne-ht)}var Jn=oe?l:this,Ei=Me?Jn[n]:n;return ht=pt.length,D?pt=Og(pt,D):He&&ht>1&&pt.reverse(),ie&&B<ht&&(pt.length=B),this&&this!==tn&&this instanceof ke&&(Ei=it||Us(Ei)),Ei.apply(Jn,pt)}return ke}function Yu(n,r){return function(l,h){return Wm(l,n,r(h),{})}}function Pa(n,r){return function(l,h){var x;if(l===t&&h===t)return r;if(l!==t&&(x=l),h!==t){if(x===t)return h;typeof l=="string"||typeof h=="string"?(l=Tn(l),h=Tn(h)):(l=Du(l),h=Du(h)),x=n(l,h)}return x}}function fl(n){return xi(function(r){return r=Ft(r,bn(ze())),at(function(l){var h=this;return n(r,function(x){return En(x,h,l)})})})}function La(n,r){r=r===t?" ":Tn(r);var l=r.length;if(l<2)return l?sl(r,n):r;var h=sl(r,_a(n/Dr(r)));return Ir(r)?Gi(Yn(h),0,n).join(""):h.slice(0,n)}function _g(n,r,l,h){var x=r&v,E=Us(n);function L(){for(var D=-1,B=arguments.length,ne=-1,ie=h.length,oe=X(ie+B),Me=this&&this!==tn&&this instanceof L?E:n;++ne<ie;)oe[ne]=h[ne];for(;B--;)oe[ne++]=arguments[++D];return En(Me,x?l:this,oe)}return L}function Ku(n){return function(r,l,h){return h&&typeof h!="number"&&fn(r,l,h)&&(l=h=t),r=yi(r),l===t?(l=r,r=0):l=yi(l),h=h===t?r<l?1:-1:yi(h),ng(r,l,h,n)}}function Ia(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=Vn(r),l=Vn(l)),n(r,l)}}function Zu(n,r,l,h,x,E,L,D,B,ne){var ie=r&w,oe=ie?L:t,Me=ie?t:L,Pe=ie?E:t,He=ie?t:E;r|=ie?W:F,r&=~(ie?F:W),r&U||(r&=~(v|g));var it=[n,r,x,Pe,oe,He,Me,D,B,ne],ke=l.apply(t,it);return Ml(n)&&lh(ke,it),ke.placeholder=h,ch(ke,n,r)}function dl(n){var r=$t[n];return function(l,h){if(l=Vn(l),h=h==null?0:an(nt(h),292),h&&cu(l)){var x=(Mt(l)+"e").split("e"),E=r(x[0]+"e"+(+x[1]+h));return x=(Mt(E)+"e").split("e"),+(x[0]+"e"+(+x[1]-h))}return r(l)}}var vg=Or&&1/oa(new Or([,-0]))[1]==xe?function(n){return new Or(n)}:Nl;function Ju(n){return function(r){var l=on(r);return l==_t?Vo(r):l==le?Np(r):wp(r,n(r))}}function vi(n,r,l,h,x,E,L,D){var B=r&g;if(!B&&typeof n!="function")throw new zn(c);var ne=h?h.length:0;if(ne||(r&=~(W|F),h=x=t),L=L===t?L:qt(nt(L),0),D=D===t?D:nt(D),ne-=x?x.length:0,r&F){var ie=h,oe=x;h=x=t}var Me=B?t:gl(n),Pe=[n,r,l,h,x,ie,oe,E,L,D];if(Me&&Dg(Pe,Me),n=Pe[0],r=Pe[1],l=Pe[2],h=Pe[3],x=Pe[4],D=Pe[9]=Pe[9]===t?B?0:n.length:qt(Pe[9]-ne,0),!D&&r&(w|N)&&(r&=~(w|N)),!r||r==v)var He=mg(n,r,l);else r==w||r==N?He=gg(n,r,D):(r==W||r==(v|W))&&!x.length?He=_g(n,r,l,h):He=Ca.apply(t,Pe);var it=Me?Lu:lh;return ch(it(He,Pe),n,r)}function Qu(n,r,l,h){return n===t||Zn(n,Nr[l])&&!yt.call(h,l)?r:n}function ju(n,r,l,h,x,E){return Bt(n)&&Bt(r)&&(E.set(r,n),Ta(n,r,t,ju,E),E.delete(r)),n}function xg(n){return Fs(n)?t:n}function eh(n,r,l,h,x,E){var L=l&A,D=n.length,B=r.length;if(D!=B&&!(L&&B>D))return!1;var ne=E.get(n),ie=E.get(r);if(ne&&ie)return ne==r&&ie==n;var oe=-1,Me=!0,Pe=l&R?new or:t;for(E.set(n,r),E.set(r,n);++oe<D;){var He=n[oe],it=r[oe];if(h)var ke=L?h(it,He,oe,r,n,E):h(He,it,oe,n,r,E);if(ke!==t){if(ke)continue;Me=!1;break}if(Pe){if(!Fo(r,function(ht,pt){if(!Es(Pe,pt)&&(He===ht||x(He,ht,l,h,E)))return Pe.push(pt)})){Me=!1;break}}else if(!(He===it||x(He,it,l,h,E))){Me=!1;break}}return E.delete(n),E.delete(r),Me}function Mg(n,r,l,h,x,E,L){switch(l){case be:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case me:return!(n.byteLength!=r.byteLength||!E(new da(n),new da(r)));case $e:case Ke:case Ge:return Zn(+n,+r);case G:return n.name==r.name&&n.message==r.message;case re:case ce:return n==r+"";case _t:var D=Vo;case le:var B=h&A;if(D||(D=oa),n.size!=r.size&&!B)return!1;var ne=L.get(n);if(ne)return ne==r;h|=R,L.set(n,r);var ie=eh(D(n),D(r),h,x,E,L);return L.delete(n),ie;case Fe:if(Rs)return Rs.call(n)==Rs.call(r)}return!1}function Sg(n,r,l,h,x,E){var L=l&A,D=pl(n),B=D.length,ne=pl(r),ie=ne.length;if(B!=ie&&!L)return!1;for(var oe=B;oe--;){var Me=D[oe];if(!(L?Me in r:yt.call(r,Me)))return!1}var Pe=E.get(n),He=E.get(r);if(Pe&&He)return Pe==r&&He==n;var it=!0;E.set(n,r),E.set(r,n);for(var ke=L;++oe<B;){Me=D[oe];var ht=n[Me],pt=r[Me];if(h)var wn=L?h(pt,ht,Me,r,n,E):h(ht,pt,Me,n,r,E);if(!(wn===t?ht===pt||x(ht,pt,l,h,E):wn)){it=!1;break}ke||(ke=Me=="constructor")}if(it&&!ke){var dn=n.constructor,Rn=r.constructor;dn!=Rn&&"constructor"in n&&"constructor"in r&&!(typeof dn=="function"&&dn instanceof dn&&typeof Rn=="function"&&Rn instanceof Rn)&&(it=!1)}return E.delete(n),E.delete(r),it}function xi(n){return yl(ah(n,t,mh),n+"")}function pl(n){return Mu(n,jt,vl)}function ml(n){return Mu(n,vn,th)}var gl=xa?function(n){return xa.get(n)}:Nl;function Da(n){for(var r=n.name+"",l=Fr[r],h=yt.call(Fr,r)?l.length:0;h--;){var x=l[h],E=x.func;if(E==null||E==n)return x.name}return r}function kr(n){var r=yt.call(S,"placeholder")?S:n;return r.placeholder}function ze(){var n=S.iteratee||Dl;return n=n===Dl?Eu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ua(n,r){var l=n.__data__;return Cg(r)?l[typeof r=="string"?"string":"hash"]:l.map}function _l(n){for(var r=jt(n),l=r.length;l--;){var h=r[l],x=n[h];r[l]=[h,x,rh(x)]}return r}function ur(n,r){var l=Ip(n,r);return yu(l)?l:t}function yg(n){var r=yt.call(n,sr),l=n[sr];try{n[sr]=t;var h=!0}catch{}var x=ha.call(n);return h&&(r?n[sr]=l:delete n[sr]),x}var vl=Xo?function(n){return n==null?[]:(n=Ct(n),Ni(Xo(n),function(r){return ou.call(n,r)}))}:Ol,th=Xo?function(n){for(var r=[];n;)Oi(r,vl(n)),n=pa(n);return r}:Ol,on=hn;($o&&on(new $o(new ArrayBuffer(1)))!=be||Ts&&on(new Ts)!=_t||qo&&on(qo.resolve())!=y||Or&&on(new Or)!=le||As&&on(new As)!=Le)&&(on=function(n){var r=hn(n),l=r==P?n.constructor:t,h=l?hr(l):"";if(h)switch(h){case rm:return be;case sm:return _t;case am:return y;case om:return le;case lm:return Le}return r});function Eg(n,r,l){for(var h=-1,x=l.length;++h<x;){var E=l[h],L=E.size;switch(E.type){case"drop":n+=L;break;case"dropRight":r-=L;break;case"take":r=an(r,n+L);break;case"takeRight":n=qt(n,r-L);break}}return{start:n,end:r}}function bg(n){var r=n.match(Cr);return r?r[1].split(na):[]}function nh(n,r,l){r=ki(r,n);for(var h=-1,x=r.length,E=!1;++h<x;){var L=si(r[h]);if(!(E=n!=null&&l(n,L)))break;n=n[L]}return E||++h!=x?E:(x=n==null?0:n.length,!!x&&ka(x)&&Mi(L,x)&&(je(n)||fr(n)))}function Tg(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&yt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function ih(n){return typeof n.constructor=="function"&&!Ns(n)?zr(pa(n)):{}}function Ag(n,r,l){var h=n.constructor;switch(r){case me:return hl(n);case $e:case Ke:return new h(+n);case be:return cg(n,l);case qe:case Re:case Ce:case ot:case ut:case gt:case mt:case bt:case Ie:return Bu(n,l);case _t:return new h;case Ge:case ce:return new h(n);case re:return ug(n);case le:return new h;case Fe:return hg(n)}}function wg(n,r){var l=r.length;if(!l)return n;var h=l-1;return r[h]=(l>1?"& ":"")+r[h],r=r.join(l>2?", ":" "),n.replace(ta,`{
/* [wrapped with `+r+`] */
`)}function Rg(n){return je(n)||fr(n)||!!(lu&&n&&n[lu])}function Mi(n,r){var l=typeof n;return r=r??Z,!!r&&(l=="number"||l!="symbol"&&ye.test(n))&&n>-1&&n%1==0&&n<r}function fn(n,r,l){if(!Bt(l))return!1;var h=typeof r;return(h=="number"?_n(l)&&Mi(r,l.length):h=="string"&&r in l)?Zn(l[r],n):!1}function xl(n,r){if(je(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||An(n)?!0:Un.test(n)||!Dn.test(n)||r!=null&&n in Ct(r)}function Cg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Ml(n){var r=Da(n),l=S[r];if(typeof l!="function"||!(r in ft.prototype))return!1;if(n===l)return!0;var h=gl(l);return!!h&&n===h[0]}function Pg(n){return!!ru&&ru in n}var Lg=ca?Si:Fl;function Ns(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||Nr;return n===l}function rh(n){return n===n&&!Bt(n)}function sh(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==t||n in Ct(l))}}function Ig(n){var r=Ba(n,function(h){return l.size===d&&l.clear(),h}),l=r.cache;return r}function Dg(n,r){var l=n[1],h=r[1],x=l|h,E=x<(v|g|O),L=h==O&&l==w||h==O&&l==Q&&n[7].length<=r[8]||h==(O|Q)&&r[7].length<=r[8]&&l==w;if(!(E||L))return n;h&v&&(n[2]=r[2],x|=l&v?0:U);var D=r[3];if(D){var B=n[3];n[3]=B?ku(B,D,r[4]):D,n[4]=B?Fi(n[3],p):r[4]}return D=r[5],D&&(B=n[5],n[5]=B?Gu(B,D,r[6]):D,n[6]=B?Fi(n[5],p):r[6]),D=r[7],D&&(n[7]=D),h&O&&(n[8]=n[8]==null?r[8]:an(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=x,n}function Ug(n){var r=[];if(n!=null)for(var l in Ct(n))r.push(l);return r}function Ng(n){return ha.call(n)}function ah(n,r,l){return r=qt(r===t?n.length-1:r,0),function(){for(var h=arguments,x=-1,E=qt(h.length-r,0),L=X(E);++x<E;)L[x]=h[r+x];x=-1;for(var D=X(r+1);++x<r;)D[x]=h[x];return D[r]=l(L),En(n,this,D)}}function oh(n,r){return r.length<2?n:cr(n,kn(r,0,-1))}function Og(n,r){for(var l=n.length,h=an(r.length,l),x=gn(n);h--;){var E=r[h];n[h]=Mi(E,l)?x[E]:t}return n}function Sl(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var lh=uh(Lu),Os=Jp||function(n,r){return tn.setTimeout(n,r)},yl=uh(sg);function ch(n,r,l){var h=r+"";return yl(n,wg(h,Fg(bg(h),l)))}function uh(n){var r=0,l=0;return function(){var h=tm(),x=H-(h-l);if(l=h,x>0){if(++r>=se)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Na(n,r){var l=-1,h=n.length,x=h-1;for(r=r===t?h:r;++l<r;){var E=rl(l,x),L=n[E];n[E]=n[l],n[l]=L}return n.length=r,n}var hh=Ig(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(pi,function(l,h,x,E){r.push(x?E.replace(wo,"$1"):h||l)}),r});function si(n){if(typeof n=="string"||An(n))return n;var r=n+"";return r=="0"&&1/n==-xe?"-0":r}function hr(n){if(n!=null){try{return ua.call(n)}catch{}try{return n+""}catch{}}return""}function Fg(n,r){return Fn(ee,function(l){var h="_."+l[0];r&l[1]&&!sa(n,h)&&n.push(h)}),n.sort()}function fh(n){if(n instanceof ft)return n.clone();var r=new Bn(n.__wrapped__,n.__chain__);return r.__actions__=gn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function zg(n,r,l){(l?fn(n,r,l):r===t)?r=1:r=qt(nt(r),0);var h=n==null?0:n.length;if(!h||r<1)return[];for(var x=0,E=0,L=X(_a(h/r));x<h;)L[E++]=kn(n,x,x+=r);return L}function Bg(n){for(var r=-1,l=n==null?0:n.length,h=0,x=[];++r<l;){var E=n[r];E&&(x[h++]=E)}return x}function Hg(){var n=arguments.length;if(!n)return[];for(var r=X(n-1),l=arguments[0],h=n;h--;)r[h-1]=arguments[h];return Oi(je(l)?gn(l):[l],nn(r,1))}var kg=at(function(n,r){return Vt(n)?Ps(n,nn(r,1,Vt,!0)):[]}),Gg=at(function(n,r){var l=Gn(r);return Vt(l)&&(l=t),Vt(n)?Ps(n,nn(r,1,Vt,!0),ze(l,2)):[]}),Vg=at(function(n,r){var l=Gn(r);return Vt(l)&&(l=t),Vt(n)?Ps(n,nn(r,1,Vt,!0),t,l):[]});function Wg(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===t?1:nt(r),kn(n,r<0?0:r,h)):[]}function Xg(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===t?1:nt(r),r=h-r,kn(n,0,r<0?0:r)):[]}function $g(n,r){return n&&n.length?wa(n,ze(r,3),!0,!0):[]}function qg(n,r){return n&&n.length?wa(n,ze(r,3),!0):[]}function Yg(n,r,l,h){var x=n==null?0:n.length;return x?(l&&typeof l!="number"&&fn(n,r,l)&&(l=0,h=x),Hm(n,r,l,h)):[]}function dh(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var x=l==null?0:nt(l);return x<0&&(x=qt(h+x,0)),aa(n,ze(r,3),x)}function ph(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var x=h-1;return l!==t&&(x=nt(l),x=l<0?qt(h+x,0):an(x,h-1)),aa(n,ze(r,3),x,!0)}function mh(n){var r=n==null?0:n.length;return r?nn(n,1):[]}function Kg(n){var r=n==null?0:n.length;return r?nn(n,xe):[]}function Zg(n,r){var l=n==null?0:n.length;return l?(r=r===t?1:nt(r),nn(n,r)):[]}function Jg(n){for(var r=-1,l=n==null?0:n.length,h={};++r<l;){var x=n[r];h[x[0]]=x[1]}return h}function gh(n){return n&&n.length?n[0]:t}function Qg(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var x=l==null?0:nt(l);return x<0&&(x=qt(h+x,0)),Lr(n,r,x)}function jg(n){var r=n==null?0:n.length;return r?kn(n,0,-1):[]}var e_=at(function(n){var r=Ft(n,cl);return r.length&&r[0]===n[0]?jo(r):[]}),t_=at(function(n){var r=Gn(n),l=Ft(n,cl);return r===Gn(l)?r=t:l.pop(),l.length&&l[0]===n[0]?jo(l,ze(r,2)):[]}),n_=at(function(n){var r=Gn(n),l=Ft(n,cl);return r=typeof r=="function"?r:t,r&&l.pop(),l.length&&l[0]===n[0]?jo(l,t,r):[]});function i_(n,r){return n==null?"":jp.call(n,r)}function Gn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function r_(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var x=h;return l!==t&&(x=nt(l),x=x<0?qt(h+x,0):an(x,h-1)),r===r?Fp(n,r,x):aa(n,Zc,x,!0)}function s_(n,r){return n&&n.length?wu(n,nt(r)):t}var a_=at(_h);function _h(n,r){return n&&n.length&&r&&r.length?il(n,r):n}function o_(n,r,l){return n&&n.length&&r&&r.length?il(n,r,ze(l,2)):n}function l_(n,r,l){return n&&n.length&&r&&r.length?il(n,r,t,l):n}var c_=xi(function(n,r){var l=n==null?0:n.length,h=Ko(n,r);return Pu(n,Ft(r,function(x){return Mi(x,l)?+x:x}).sort(Hu)),h});function u_(n,r){var l=[];if(!(n&&n.length))return l;var h=-1,x=[],E=n.length;for(r=ze(r,3);++h<E;){var L=n[h];r(L,h,n)&&(l.push(L),x.push(h))}return Pu(n,x),l}function El(n){return n==null?n:im.call(n)}function h_(n,r,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&fn(n,r,l)?(r=0,l=h):(r=r==null?0:nt(r),l=l===t?h:nt(l)),kn(n,r,l)):[]}function f_(n,r){return Aa(n,r)}function d_(n,r,l){return al(n,r,ze(l,2))}function p_(n,r){var l=n==null?0:n.length;if(l){var h=Aa(n,r);if(h<l&&Zn(n[h],r))return h}return-1}function m_(n,r){return Aa(n,r,!0)}function g_(n,r,l){return al(n,r,ze(l,2),!0)}function __(n,r){var l=n==null?0:n.length;if(l){var h=Aa(n,r,!0)-1;if(Zn(n[h],r))return h}return-1}function v_(n){return n&&n.length?Iu(n):[]}function x_(n,r){return n&&n.length?Iu(n,ze(r,2)):[]}function M_(n){var r=n==null?0:n.length;return r?kn(n,1,r):[]}function S_(n,r,l){return n&&n.length?(r=l||r===t?1:nt(r),kn(n,0,r<0?0:r)):[]}function y_(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===t?1:nt(r),r=h-r,kn(n,r<0?0:r,h)):[]}function E_(n,r){return n&&n.length?wa(n,ze(r,3),!1,!0):[]}function b_(n,r){return n&&n.length?wa(n,ze(r,3)):[]}var T_=at(function(n){return Hi(nn(n,1,Vt,!0))}),A_=at(function(n){var r=Gn(n);return Vt(r)&&(r=t),Hi(nn(n,1,Vt,!0),ze(r,2))}),w_=at(function(n){var r=Gn(n);return r=typeof r=="function"?r:t,Hi(nn(n,1,Vt,!0),t,r)});function R_(n){return n&&n.length?Hi(n):[]}function C_(n,r){return n&&n.length?Hi(n,ze(r,2)):[]}function P_(n,r){return r=typeof r=="function"?r:t,n&&n.length?Hi(n,t,r):[]}function bl(n){if(!(n&&n.length))return[];var r=0;return n=Ni(n,function(l){if(Vt(l))return r=qt(l.length,r),!0}),ko(r,function(l){return Ft(n,zo(l))})}function vh(n,r){if(!(n&&n.length))return[];var l=bl(n);return r==null?l:Ft(l,function(h){return En(r,t,h)})}var L_=at(function(n,r){return Vt(n)?Ps(n,r):[]}),I_=at(function(n){return ll(Ni(n,Vt))}),D_=at(function(n){var r=Gn(n);return Vt(r)&&(r=t),ll(Ni(n,Vt),ze(r,2))}),U_=at(function(n){var r=Gn(n);return r=typeof r=="function"?r:t,ll(Ni(n,Vt),t,r)}),N_=at(bl);function O_(n,r){return Ou(n||[],r||[],Cs)}function F_(n,r){return Ou(n||[],r||[],Ds)}var z_=at(function(n){var r=n.length,l=r>1?n[r-1]:t;return l=typeof l=="function"?(n.pop(),l):t,vh(n,l)});function xh(n){var r=S(n);return r.__chain__=!0,r}function B_(n,r){return r(n),n}function Oa(n,r){return r(n)}var H_=xi(function(n){var r=n.length,l=r?n[0]:0,h=this.__wrapped__,x=function(E){return Ko(E,n)};return r>1||this.__actions__.length||!(h instanceof ft)||!Mi(l)?this.thru(x):(h=h.slice(l,+l+(r?1:0)),h.__actions__.push({func:Oa,args:[x],thisArg:t}),new Bn(h,this.__chain__).thru(function(E){return r&&!E.length&&E.push(t),E}))});function k_(){return xh(this)}function G_(){return new Bn(this.value(),this.__chain__)}function V_(){this.__values__===t&&(this.__values__=Dh(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function W_(){return this}function X_(n){for(var r,l=this;l instanceof Sa;){var h=fh(l);h.__index__=0,h.__values__=t,r?x.__wrapped__=h:r=h;var x=h;l=l.__wrapped__}return x.__wrapped__=n,r}function $_(){var n=this.__wrapped__;if(n instanceof ft){var r=n;return this.__actions__.length&&(r=new ft(this)),r=r.reverse(),r.__actions__.push({func:Oa,args:[El],thisArg:t}),new Bn(r,this.__chain__)}return this.thru(El)}function q_(){return Nu(this.__wrapped__,this.__actions__)}var Y_=Ra(function(n,r,l){yt.call(n,l)?++n[l]:_i(n,l,1)});function K_(n,r,l){var h=je(n)?Yc:Bm;return l&&fn(n,r,l)&&(r=t),h(n,ze(r,3))}function Z_(n,r){var l=je(n)?Ni:vu;return l(n,ze(r,3))}var J_=$u(dh),Q_=$u(ph);function j_(n,r){return nn(Fa(n,r),1)}function e0(n,r){return nn(Fa(n,r),xe)}function t0(n,r,l){return l=l===t?1:nt(l),nn(Fa(n,r),l)}function Mh(n,r){var l=je(n)?Fn:Bi;return l(n,ze(r,3))}function Sh(n,r){var l=je(n)?Mp:_u;return l(n,ze(r,3))}var n0=Ra(function(n,r,l){yt.call(n,l)?n[l].push(r):_i(n,l,[r])});function i0(n,r,l,h){n=_n(n)?n:Vr(n),l=l&&!h?nt(l):0;var x=n.length;return l<0&&(l=qt(x+l,0)),Ga(n)?l<=x&&n.indexOf(r,l)>-1:!!x&&Lr(n,r,l)>-1}var r0=at(function(n,r,l){var h=-1,x=typeof r=="function",E=_n(n)?X(n.length):[];return Bi(n,function(L){E[++h]=x?En(r,L,l):Ls(L,r,l)}),E}),s0=Ra(function(n,r,l){_i(n,l,r)});function Fa(n,r){var l=je(n)?Ft:bu;return l(n,ze(r,3))}function a0(n,r,l,h){return n==null?[]:(je(r)||(r=r==null?[]:[r]),l=h?t:l,je(l)||(l=l==null?[]:[l]),Ru(n,r,l))}var o0=Ra(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function l0(n,r,l){var h=je(n)?Oo:Qc,x=arguments.length<3;return h(n,ze(r,4),l,x,Bi)}function c0(n,r,l){var h=je(n)?Sp:Qc,x=arguments.length<3;return h(n,ze(r,4),l,x,_u)}function u0(n,r){var l=je(n)?Ni:vu;return l(n,Ha(ze(r,3)))}function h0(n){var r=je(n)?du:ig;return r(n)}function f0(n,r,l){(l?fn(n,r,l):r===t)?r=1:r=nt(r);var h=je(n)?Um:rg;return h(n,r)}function d0(n){var r=je(n)?Nm:ag;return r(n)}function p0(n){if(n==null)return 0;if(_n(n))return Ga(n)?Dr(n):n.length;var r=on(n);return r==_t||r==le?n.size:tl(n).length}function m0(n,r,l){var h=je(n)?Fo:og;return l&&fn(n,r,l)&&(r=t),h(n,ze(r,3))}var g0=at(function(n,r){if(n==null)return[];var l=r.length;return l>1&&fn(n,r[0],r[1])?r=[]:l>2&&fn(r[0],r[1],r[2])&&(r=[r[0]]),Ru(n,nn(r,1),[])}),za=Zp||function(){return tn.Date.now()};function _0(n,r){if(typeof r!="function")throw new zn(c);return n=nt(n),function(){if(--n<1)return r.apply(this,arguments)}}function yh(n,r,l){return r=l?t:r,r=n&&r==null?n.length:r,vi(n,O,t,t,t,t,r)}function Eh(n,r){var l;if(typeof r!="function")throw new zn(c);return n=nt(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=t),l}}var Tl=at(function(n,r,l){var h=v;if(l.length){var x=Fi(l,kr(Tl));h|=W}return vi(n,h,r,l,x)}),bh=at(function(n,r,l){var h=v|g;if(l.length){var x=Fi(l,kr(bh));h|=W}return vi(r,h,n,l,x)});function Th(n,r,l){r=l?t:r;var h=vi(n,w,t,t,t,t,t,r);return h.placeholder=Th.placeholder,h}function Ah(n,r,l){r=l?t:r;var h=vi(n,N,t,t,t,t,t,r);return h.placeholder=Ah.placeholder,h}function wh(n,r,l){var h,x,E,L,D,B,ne=0,ie=!1,oe=!1,Me=!0;if(typeof n!="function")throw new zn(c);r=Vn(r)||0,Bt(l)&&(ie=!!l.leading,oe="maxWait"in l,E=oe?qt(Vn(l.maxWait)||0,r):E,Me="trailing"in l?!!l.trailing:Me);function Pe(Wt){var Jn=h,Ei=x;return h=x=t,ne=Wt,L=n.apply(Ei,Jn),L}function He(Wt){return ne=Wt,D=Os(ht,r),ie?Pe(Wt):L}function it(Wt){var Jn=Wt-B,Ei=Wt-ne,$h=r-Jn;return oe?an($h,E-Ei):$h}function ke(Wt){var Jn=Wt-B,Ei=Wt-ne;return B===t||Jn>=r||Jn<0||oe&&Ei>=E}function ht(){var Wt=za();if(ke(Wt))return pt(Wt);D=Os(ht,it(Wt))}function pt(Wt){return D=t,Me&&h?Pe(Wt):(h=x=t,L)}function wn(){D!==t&&Fu(D),ne=0,h=B=x=D=t}function dn(){return D===t?L:pt(za())}function Rn(){var Wt=za(),Jn=ke(Wt);if(h=arguments,x=this,B=Wt,Jn){if(D===t)return He(B);if(oe)return Fu(D),D=Os(ht,r),Pe(B)}return D===t&&(D=Os(ht,r)),L}return Rn.cancel=wn,Rn.flush=dn,Rn}var v0=at(function(n,r){return gu(n,1,r)}),x0=at(function(n,r,l){return gu(n,Vn(r)||0,l)});function M0(n){return vi(n,C)}function Ba(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new zn(c);var l=function(){var h=arguments,x=r?r.apply(this,h):h[0],E=l.cache;if(E.has(x))return E.get(x);var L=n.apply(this,h);return l.cache=E.set(x,L)||E,L};return l.cache=new(Ba.Cache||gi),l}Ba.Cache=gi;function Ha(n){if(typeof n!="function")throw new zn(c);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function S0(n){return Eh(2,n)}var y0=lg(function(n,r){r=r.length==1&&je(r[0])?Ft(r[0],bn(ze())):Ft(nn(r,1),bn(ze()));var l=r.length;return at(function(h){for(var x=-1,E=an(h.length,l);++x<E;)h[x]=r[x].call(this,h[x]);return En(n,this,h)})}),Al=at(function(n,r){var l=Fi(r,kr(Al));return vi(n,W,t,r,l)}),Rh=at(function(n,r){var l=Fi(r,kr(Rh));return vi(n,F,t,r,l)}),E0=xi(function(n,r){return vi(n,Q,t,t,t,r)});function b0(n,r){if(typeof n!="function")throw new zn(c);return r=r===t?r:nt(r),at(n,r)}function T0(n,r){if(typeof n!="function")throw new zn(c);return r=r==null?0:qt(nt(r),0),at(function(l){var h=l[r],x=Gi(l,0,r);return h&&Oi(x,h),En(n,this,x)})}function A0(n,r,l){var h=!0,x=!0;if(typeof n!="function")throw new zn(c);return Bt(l)&&(h="leading"in l?!!l.leading:h,x="trailing"in l?!!l.trailing:x),wh(n,r,{leading:h,maxWait:r,trailing:x})}function w0(n){return yh(n,1)}function R0(n,r){return Al(ul(r),n)}function C0(){if(!arguments.length)return[];var n=arguments[0];return je(n)?n:[n]}function P0(n){return Hn(n,M)}function L0(n,r){return r=typeof r=="function"?r:t,Hn(n,M,r)}function I0(n){return Hn(n,m|M)}function D0(n,r){return r=typeof r=="function"?r:t,Hn(n,m|M,r)}function U0(n,r){return r==null||mu(n,r,jt(r))}function Zn(n,r){return n===r||n!==n&&r!==r}var N0=Ia(Qo),O0=Ia(function(n,r){return n>=r}),fr=Su(function(){return arguments}())?Su:function(n){return kt(n)&&yt.call(n,"callee")&&!ou.call(n,"callee")},je=X.isArray,F0=Gc?bn(Gc):Xm;function _n(n){return n!=null&&ka(n.length)&&!Si(n)}function Vt(n){return kt(n)&&_n(n)}function z0(n){return n===!0||n===!1||kt(n)&&hn(n)==$e}var Vi=Qp||Fl,B0=Vc?bn(Vc):$m;function H0(n){return kt(n)&&n.nodeType===1&&!Fs(n)}function k0(n){if(n==null)return!0;if(_n(n)&&(je(n)||typeof n=="string"||typeof n.splice=="function"||Vi(n)||Gr(n)||fr(n)))return!n.length;var r=on(n);if(r==_t||r==le)return!n.size;if(Ns(n))return!tl(n).length;for(var l in n)if(yt.call(n,l))return!1;return!0}function G0(n,r){return Is(n,r)}function V0(n,r,l){l=typeof l=="function"?l:t;var h=l?l(n,r):t;return h===t?Is(n,r,t,l):!!h}function wl(n){if(!kt(n))return!1;var r=hn(n);return r==G||r==dt||typeof n.message=="string"&&typeof n.name=="string"&&!Fs(n)}function W0(n){return typeof n=="number"&&cu(n)}function Si(n){if(!Bt(n))return!1;var r=hn(n);return r==tt||r==Ve||r==Ee||r==J}function Ch(n){return typeof n=="number"&&n==nt(n)}function ka(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Z}function Bt(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function kt(n){return n!=null&&typeof n=="object"}var Ph=Wc?bn(Wc):Ym;function X0(n,r){return n===r||el(n,r,_l(r))}function $0(n,r,l){return l=typeof l=="function"?l:t,el(n,r,_l(r),l)}function q0(n){return Lh(n)&&n!=+n}function Y0(n){if(Lg(n))throw new Je(o);return yu(n)}function K0(n){return n===null}function Z0(n){return n==null}function Lh(n){return typeof n=="number"||kt(n)&&hn(n)==Ge}function Fs(n){if(!kt(n)||hn(n)!=P)return!1;var r=pa(n);if(r===null)return!0;var l=yt.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&ua.call(l)==$p}var Rl=Xc?bn(Xc):Km;function J0(n){return Ch(n)&&n>=-Z&&n<=Z}var Ih=$c?bn($c):Zm;function Ga(n){return typeof n=="string"||!je(n)&&kt(n)&&hn(n)==ce}function An(n){return typeof n=="symbol"||kt(n)&&hn(n)==Fe}var Gr=qc?bn(qc):Jm;function Q0(n){return n===t}function j0(n){return kt(n)&&on(n)==Le}function ev(n){return kt(n)&&hn(n)==We}var tv=Ia(nl),nv=Ia(function(n,r){return n<=r});function Dh(n){if(!n)return[];if(_n(n))return Ga(n)?Yn(n):gn(n);if(bs&&n[bs])return Up(n[bs]());var r=on(n),l=r==_t?Vo:r==le?oa:Vr;return l(n)}function yi(n){if(!n)return n===0?n:0;if(n=Vn(n),n===xe||n===-xe){var r=n<0?-1:1;return r*pe}return n===n?n:0}function nt(n){var r=yi(n),l=r%1;return r===r?l?r-l:r:0}function Uh(n){return n?lr(nt(n),0,Ae):0}function Vn(n){if(typeof n=="number")return n;if(An(n))return he;if(Bt(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Bt(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=jc(n);var l=$.test(n);return l||V.test(n)?_p(n.slice(2),l?2:8):k.test(n)?he:+n}function Nh(n){return ri(n,vn(n))}function iv(n){return n?lr(nt(n),-Z,Z):n===0?n:0}function Mt(n){return n==null?"":Tn(n)}var rv=Br(function(n,r){if(Ns(r)||_n(r)){ri(r,jt(r),n);return}for(var l in r)yt.call(r,l)&&Cs(n,l,r[l])}),Oh=Br(function(n,r){ri(r,vn(r),n)}),Va=Br(function(n,r,l,h){ri(r,vn(r),n,h)}),sv=Br(function(n,r,l,h){ri(r,jt(r),n,h)}),av=xi(Ko);function ov(n,r){var l=zr(n);return r==null?l:pu(l,r)}var lv=at(function(n,r){n=Ct(n);var l=-1,h=r.length,x=h>2?r[2]:t;for(x&&fn(r[0],r[1],x)&&(h=1);++l<h;)for(var E=r[l],L=vn(E),D=-1,B=L.length;++D<B;){var ne=L[D],ie=n[ne];(ie===t||Zn(ie,Nr[ne])&&!yt.call(n,ne))&&(n[ne]=E[ne])}return n}),cv=at(function(n){return n.push(t,ju),En(Fh,t,n)});function uv(n,r){return Kc(n,ze(r,3),ii)}function hv(n,r){return Kc(n,ze(r,3),Jo)}function fv(n,r){return n==null?n:Zo(n,ze(r,3),vn)}function dv(n,r){return n==null?n:xu(n,ze(r,3),vn)}function pv(n,r){return n&&ii(n,ze(r,3))}function mv(n,r){return n&&Jo(n,ze(r,3))}function gv(n){return n==null?[]:ba(n,jt(n))}function _v(n){return n==null?[]:ba(n,vn(n))}function Cl(n,r,l){var h=n==null?t:cr(n,r);return h===t?l:h}function vv(n,r){return n!=null&&nh(n,r,km)}function Pl(n,r){return n!=null&&nh(n,r,Gm)}var xv=Yu(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=ha.call(r)),n[r]=l},Il(xn)),Mv=Yu(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=ha.call(r)),yt.call(n,r)?n[r].push(l):n[r]=[l]},ze),Sv=at(Ls);function jt(n){return _n(n)?fu(n):tl(n)}function vn(n){return _n(n)?fu(n,!0):Qm(n)}function yv(n,r){var l={};return r=ze(r,3),ii(n,function(h,x,E){_i(l,r(h,x,E),h)}),l}function Ev(n,r){var l={};return r=ze(r,3),ii(n,function(h,x,E){_i(l,x,r(h,x,E))}),l}var bv=Br(function(n,r,l){Ta(n,r,l)}),Fh=Br(function(n,r,l,h){Ta(n,r,l,h)}),Tv=xi(function(n,r){var l={};if(n==null)return l;var h=!1;r=Ft(r,function(E){return E=ki(E,n),h||(h=E.length>1),E}),ri(n,ml(n),l),h&&(l=Hn(l,m|_|M,xg));for(var x=r.length;x--;)ol(l,r[x]);return l});function Av(n,r){return zh(n,Ha(ze(r)))}var wv=xi(function(n,r){return n==null?{}:eg(n,r)});function zh(n,r){if(n==null)return{};var l=Ft(ml(n),function(h){return[h]});return r=ze(r),Cu(n,l,function(h,x){return r(h,x[0])})}function Rv(n,r,l){r=ki(r,n);var h=-1,x=r.length;for(x||(x=1,n=t);++h<x;){var E=n==null?t:n[si(r[h])];E===t&&(h=x,E=l),n=Si(E)?E.call(n):E}return n}function Cv(n,r,l){return n==null?n:Ds(n,r,l)}function Pv(n,r,l,h){return h=typeof h=="function"?h:t,n==null?n:Ds(n,r,l,h)}var Bh=Ju(jt),Hh=Ju(vn);function Lv(n,r,l){var h=je(n),x=h||Vi(n)||Gr(n);if(r=ze(r,4),l==null){var E=n&&n.constructor;x?l=h?new E:[]:Bt(n)?l=Si(E)?zr(pa(n)):{}:l={}}return(x?Fn:ii)(n,function(L,D,B){return r(l,L,D,B)}),l}function Iv(n,r){return n==null?!0:ol(n,r)}function Dv(n,r,l){return n==null?n:Uu(n,r,ul(l))}function Uv(n,r,l,h){return h=typeof h=="function"?h:t,n==null?n:Uu(n,r,ul(l),h)}function Vr(n){return n==null?[]:Go(n,jt(n))}function Nv(n){return n==null?[]:Go(n,vn(n))}function Ov(n,r,l){return l===t&&(l=r,r=t),l!==t&&(l=Vn(l),l=l===l?l:0),r!==t&&(r=Vn(r),r=r===r?r:0),lr(Vn(n),r,l)}function Fv(n,r,l){return r=yi(r),l===t?(l=r,r=0):l=yi(l),n=Vn(n),Vm(n,r,l)}function zv(n,r,l){if(l&&typeof l!="boolean"&&fn(n,r,l)&&(r=l=t),l===t&&(typeof r=="boolean"?(l=r,r=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&r===t?(n=0,r=1):(n=yi(n),r===t?(r=n,n=0):r=yi(r)),n>r){var h=n;n=r,r=h}if(l||n%1||r%1){var x=uu();return an(n+x*(r-n+gp("1e-"+((x+"").length-1))),r)}return rl(n,r)}var Bv=Hr(function(n,r,l){return r=r.toLowerCase(),n+(l?kh(r):r)});function kh(n){return Ll(Mt(n).toLowerCase())}function Gh(n){return n=Mt(n),n&&n.replace(De,Cp).replace(ap,"")}function Hv(n,r,l){n=Mt(n),r=Tn(r);var h=n.length;l=l===t?h:lr(nt(l),0,h);var x=l;return l-=r.length,l>=0&&n.slice(l,x)==r}function kv(n){return n=Mt(n),n&&Pt.test(n)?n.replace(Ne,Pp):n}function Gv(n){return n=Mt(n),n&&ea.test(n)?n.replace(wr,"\\$&"):n}var Vv=Hr(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),Wv=Hr(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),Xv=Xu("toLowerCase");function $v(n,r,l){n=Mt(n),r=nt(r);var h=r?Dr(n):0;if(!r||h>=r)return n;var x=(r-h)/2;return La(va(x),l)+n+La(_a(x),l)}function qv(n,r,l){n=Mt(n),r=nt(r);var h=r?Dr(n):0;return r&&h<r?n+La(r-h,l):n}function Yv(n,r,l){n=Mt(n),r=nt(r);var h=r?Dr(n):0;return r&&h<r?La(r-h,l)+n:n}function Kv(n,r,l){return l||r==null?r=0:r&&(r=+r),nm(Mt(n).replace(vs,""),r||0)}function Zv(n,r,l){return(l?fn(n,r,l):r===t)?r=1:r=nt(r),sl(Mt(n),r)}function Jv(){var n=arguments,r=Mt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Qv=Hr(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function jv(n,r,l){return l&&typeof l!="number"&&fn(n,r,l)&&(r=l=t),l=l===t?Ae:l>>>0,l?(n=Mt(n),n&&(typeof r=="string"||r!=null&&!Rl(r))&&(r=Tn(r),!r&&Ir(n))?Gi(Yn(n),0,l):n.split(r,l)):[]}var ex=Hr(function(n,r,l){return n+(l?" ":"")+Ll(r)});function tx(n,r,l){return n=Mt(n),l=l==null?0:lr(nt(l),0,n.length),r=Tn(r),n.slice(l,l+r.length)==r}function nx(n,r,l){var h=S.templateSettings;l&&fn(n,r,l)&&(r=t),n=Mt(n),r=Va({},r,h,Qu);var x=Va({},r.imports,h.imports,Qu),E=jt(x),L=Go(x,E),D,B,ne=0,ie=r.interpolate||Oe,oe="__p += '",Me=Wo((r.escape||Oe).source+"|"+ie.source+"|"+(ie===At?Ro:Oe).source+"|"+(r.evaluate||Oe).source+"|$","g"),Pe="//# sourceURL="+(yt.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hp+"]")+`
`;n.replace(Me,function(ke,ht,pt,wn,dn,Rn){return pt||(pt=wn),oe+=n.slice(ne,Rn).replace(Xe,Lp),ht&&(D=!0,oe+=`' +
__e(`+ht+`) +
'`),dn&&(B=!0,oe+=`';
`+dn+`;
__p += '`),pt&&(oe+=`' +
((__t = (`+pt+`)) == null ? '' : __t) +
'`),ne=Rn+ke.length,ke}),oe+=`';
`;var He=yt.call(r,"variable")&&r.variable;if(!He)oe=`with (obj) {
`+oe+`
}
`;else if(Ao.test(He))throw new Je(u);oe=(B?oe.replace(I,""):oe).replace(ve,"$1").replace(ge,"$1;"),oe="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(D?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+oe+`return __p
}`;var it=Wh(function(){return vt(E,Pe+"return "+oe).apply(t,L)});if(it.source=oe,wl(it))throw it;return it}function ix(n){return Mt(n).toLowerCase()}function rx(n){return Mt(n).toUpperCase()}function sx(n,r,l){if(n=Mt(n),n&&(l||r===t))return jc(n);if(!n||!(r=Tn(r)))return n;var h=Yn(n),x=Yn(r),E=eu(h,x),L=tu(h,x)+1;return Gi(h,E,L).join("")}function ax(n,r,l){if(n=Mt(n),n&&(l||r===t))return n.slice(0,iu(n)+1);if(!n||!(r=Tn(r)))return n;var h=Yn(n),x=tu(h,Yn(r))+1;return Gi(h,0,x).join("")}function ox(n,r,l){if(n=Mt(n),n&&(l||r===t))return n.replace(vs,"");if(!n||!(r=Tn(r)))return n;var h=Yn(n),x=eu(h,Yn(r));return Gi(h,x).join("")}function lx(n,r){var l=b,h=K;if(Bt(r)){var x="separator"in r?r.separator:x;l="length"in r?nt(r.length):l,h="omission"in r?Tn(r.omission):h}n=Mt(n);var E=n.length;if(Ir(n)){var L=Yn(n);E=L.length}if(l>=E)return n;var D=l-Dr(h);if(D<1)return h;var B=L?Gi(L,0,D).join(""):n.slice(0,D);if(x===t)return B+h;if(L&&(D+=B.length-D),Rl(x)){if(n.slice(D).search(x)){var ne,ie=B;for(x.global||(x=Wo(x.source,Mt(T.exec(x))+"g")),x.lastIndex=0;ne=x.exec(ie);)var oe=ne.index;B=B.slice(0,oe===t?D:oe)}}else if(n.indexOf(Tn(x),D)!=D){var Me=B.lastIndexOf(x);Me>-1&&(B=B.slice(0,Me))}return B+h}function cx(n){return n=Mt(n),n&&Tt.test(n)?n.replace(Ue,zp):n}var ux=Hr(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),Ll=Xu("toUpperCase");function Vh(n,r,l){return n=Mt(n),r=l?t:r,r===t?Dp(n)?kp(n):bp(n):n.match(r)||[]}var Wh=at(function(n,r){try{return En(n,t,r)}catch(l){return wl(l)?l:new Je(l)}}),hx=xi(function(n,r){return Fn(r,function(l){l=si(l),_i(n,l,Tl(n[l],n))}),n});function fx(n){var r=n==null?0:n.length,l=ze();return n=r?Ft(n,function(h){if(typeof h[1]!="function")throw new zn(c);return[l(h[0]),h[1]]}):[],at(function(h){for(var x=-1;++x<r;){var E=n[x];if(En(E[0],this,h))return En(E[1],this,h)}})}function dx(n){return zm(Hn(n,m))}function Il(n){return function(){return n}}function px(n,r){return n==null||n!==n?r:n}var mx=qu(),gx=qu(!0);function xn(n){return n}function Dl(n){return Eu(typeof n=="function"?n:Hn(n,m))}function _x(n){return Tu(Hn(n,m))}function vx(n,r){return Au(n,Hn(r,m))}var xx=at(function(n,r){return function(l){return Ls(l,n,r)}}),Mx=at(function(n,r){return function(l){return Ls(n,l,r)}});function Ul(n,r,l){var h=jt(r),x=ba(r,h);l==null&&!(Bt(r)&&(x.length||!h.length))&&(l=r,r=n,n=this,x=ba(r,jt(r)));var E=!(Bt(l)&&"chain"in l)||!!l.chain,L=Si(n);return Fn(x,function(D){var B=r[D];n[D]=B,L&&(n.prototype[D]=function(){var ne=this.__chain__;if(E||ne){var ie=n(this.__wrapped__),oe=ie.__actions__=gn(this.__actions__);return oe.push({func:B,args:arguments,thisArg:n}),ie.__chain__=ne,ie}return B.apply(n,Oi([this.value()],arguments))})}),n}function Sx(){return tn._===this&&(tn._=qp),this}function Nl(){}function yx(n){return n=nt(n),at(function(r){return wu(r,n)})}var Ex=fl(Ft),bx=fl(Yc),Tx=fl(Fo);function Xh(n){return xl(n)?zo(si(n)):tg(n)}function Ax(n){return function(r){return n==null?t:cr(n,r)}}var wx=Ku(),Rx=Ku(!0);function Ol(){return[]}function Fl(){return!1}function Cx(){return{}}function Px(){return""}function Lx(){return!0}function Ix(n,r){if(n=nt(n),n<1||n>Z)return[];var l=Ae,h=an(n,Ae);r=ze(r),n-=Ae;for(var x=ko(h,r);++l<n;)r(l);return x}function Dx(n){return je(n)?Ft(n,si):An(n)?[n]:gn(hh(Mt(n)))}function Ux(n){var r=++Xp;return Mt(n)+r}var Nx=Pa(function(n,r){return n+r},0),Ox=dl("ceil"),Fx=Pa(function(n,r){return n/r},1),zx=dl("floor");function Bx(n){return n&&n.length?Ea(n,xn,Qo):t}function Hx(n,r){return n&&n.length?Ea(n,ze(r,2),Qo):t}function kx(n){return Jc(n,xn)}function Gx(n,r){return Jc(n,ze(r,2))}function Vx(n){return n&&n.length?Ea(n,xn,nl):t}function Wx(n,r){return n&&n.length?Ea(n,ze(r,2),nl):t}var Xx=Pa(function(n,r){return n*r},1),$x=dl("round"),qx=Pa(function(n,r){return n-r},0);function Yx(n){return n&&n.length?Ho(n,xn):0}function Kx(n,r){return n&&n.length?Ho(n,ze(r,2)):0}return S.after=_0,S.ary=yh,S.assign=rv,S.assignIn=Oh,S.assignInWith=Va,S.assignWith=sv,S.at=av,S.before=Eh,S.bind=Tl,S.bindAll=hx,S.bindKey=bh,S.castArray=C0,S.chain=xh,S.chunk=zg,S.compact=Bg,S.concat=Hg,S.cond=fx,S.conforms=dx,S.constant=Il,S.countBy=Y_,S.create=ov,S.curry=Th,S.curryRight=Ah,S.debounce=wh,S.defaults=lv,S.defaultsDeep=cv,S.defer=v0,S.delay=x0,S.difference=kg,S.differenceBy=Gg,S.differenceWith=Vg,S.drop=Wg,S.dropRight=Xg,S.dropRightWhile=$g,S.dropWhile=qg,S.fill=Yg,S.filter=Z_,S.flatMap=j_,S.flatMapDeep=e0,S.flatMapDepth=t0,S.flatten=mh,S.flattenDeep=Kg,S.flattenDepth=Zg,S.flip=M0,S.flow=mx,S.flowRight=gx,S.fromPairs=Jg,S.functions=gv,S.functionsIn=_v,S.groupBy=n0,S.initial=jg,S.intersection=e_,S.intersectionBy=t_,S.intersectionWith=n_,S.invert=xv,S.invertBy=Mv,S.invokeMap=r0,S.iteratee=Dl,S.keyBy=s0,S.keys=jt,S.keysIn=vn,S.map=Fa,S.mapKeys=yv,S.mapValues=Ev,S.matches=_x,S.matchesProperty=vx,S.memoize=Ba,S.merge=bv,S.mergeWith=Fh,S.method=xx,S.methodOf=Mx,S.mixin=Ul,S.negate=Ha,S.nthArg=yx,S.omit=Tv,S.omitBy=Av,S.once=S0,S.orderBy=a0,S.over=Ex,S.overArgs=y0,S.overEvery=bx,S.overSome=Tx,S.partial=Al,S.partialRight=Rh,S.partition=o0,S.pick=wv,S.pickBy=zh,S.property=Xh,S.propertyOf=Ax,S.pull=a_,S.pullAll=_h,S.pullAllBy=o_,S.pullAllWith=l_,S.pullAt=c_,S.range=wx,S.rangeRight=Rx,S.rearg=E0,S.reject=u0,S.remove=u_,S.rest=b0,S.reverse=El,S.sampleSize=f0,S.set=Cv,S.setWith=Pv,S.shuffle=d0,S.slice=h_,S.sortBy=g0,S.sortedUniq=v_,S.sortedUniqBy=x_,S.split=jv,S.spread=T0,S.tail=M_,S.take=S_,S.takeRight=y_,S.takeRightWhile=E_,S.takeWhile=b_,S.tap=B_,S.throttle=A0,S.thru=Oa,S.toArray=Dh,S.toPairs=Bh,S.toPairsIn=Hh,S.toPath=Dx,S.toPlainObject=Nh,S.transform=Lv,S.unary=w0,S.union=T_,S.unionBy=A_,S.unionWith=w_,S.uniq=R_,S.uniqBy=C_,S.uniqWith=P_,S.unset=Iv,S.unzip=bl,S.unzipWith=vh,S.update=Dv,S.updateWith=Uv,S.values=Vr,S.valuesIn=Nv,S.without=L_,S.words=Vh,S.wrap=R0,S.xor=I_,S.xorBy=D_,S.xorWith=U_,S.zip=N_,S.zipObject=O_,S.zipObjectDeep=F_,S.zipWith=z_,S.entries=Bh,S.entriesIn=Hh,S.extend=Oh,S.extendWith=Va,Ul(S,S),S.add=Nx,S.attempt=Wh,S.camelCase=Bv,S.capitalize=kh,S.ceil=Ox,S.clamp=Ov,S.clone=P0,S.cloneDeep=I0,S.cloneDeepWith=D0,S.cloneWith=L0,S.conformsTo=U0,S.deburr=Gh,S.defaultTo=px,S.divide=Fx,S.endsWith=Hv,S.eq=Zn,S.escape=kv,S.escapeRegExp=Gv,S.every=K_,S.find=J_,S.findIndex=dh,S.findKey=uv,S.findLast=Q_,S.findLastIndex=ph,S.findLastKey=hv,S.floor=zx,S.forEach=Mh,S.forEachRight=Sh,S.forIn=fv,S.forInRight=dv,S.forOwn=pv,S.forOwnRight=mv,S.get=Cl,S.gt=N0,S.gte=O0,S.has=vv,S.hasIn=Pl,S.head=gh,S.identity=xn,S.includes=i0,S.indexOf=Qg,S.inRange=Fv,S.invoke=Sv,S.isArguments=fr,S.isArray=je,S.isArrayBuffer=F0,S.isArrayLike=_n,S.isArrayLikeObject=Vt,S.isBoolean=z0,S.isBuffer=Vi,S.isDate=B0,S.isElement=H0,S.isEmpty=k0,S.isEqual=G0,S.isEqualWith=V0,S.isError=wl,S.isFinite=W0,S.isFunction=Si,S.isInteger=Ch,S.isLength=ka,S.isMap=Ph,S.isMatch=X0,S.isMatchWith=$0,S.isNaN=q0,S.isNative=Y0,S.isNil=Z0,S.isNull=K0,S.isNumber=Lh,S.isObject=Bt,S.isObjectLike=kt,S.isPlainObject=Fs,S.isRegExp=Rl,S.isSafeInteger=J0,S.isSet=Ih,S.isString=Ga,S.isSymbol=An,S.isTypedArray=Gr,S.isUndefined=Q0,S.isWeakMap=j0,S.isWeakSet=ev,S.join=i_,S.kebabCase=Vv,S.last=Gn,S.lastIndexOf=r_,S.lowerCase=Wv,S.lowerFirst=Xv,S.lt=tv,S.lte=nv,S.max=Bx,S.maxBy=Hx,S.mean=kx,S.meanBy=Gx,S.min=Vx,S.minBy=Wx,S.stubArray=Ol,S.stubFalse=Fl,S.stubObject=Cx,S.stubString=Px,S.stubTrue=Lx,S.multiply=Xx,S.nth=s_,S.noConflict=Sx,S.noop=Nl,S.now=za,S.pad=$v,S.padEnd=qv,S.padStart=Yv,S.parseInt=Kv,S.random=zv,S.reduce=l0,S.reduceRight=c0,S.repeat=Zv,S.replace=Jv,S.result=Rv,S.round=$x,S.runInContext=z,S.sample=h0,S.size=p0,S.snakeCase=Qv,S.some=m0,S.sortedIndex=f_,S.sortedIndexBy=d_,S.sortedIndexOf=p_,S.sortedLastIndex=m_,S.sortedLastIndexBy=g_,S.sortedLastIndexOf=__,S.startCase=ex,S.startsWith=tx,S.subtract=qx,S.sum=Yx,S.sumBy=Kx,S.template=nx,S.times=Ix,S.toFinite=yi,S.toInteger=nt,S.toLength=Uh,S.toLower=ix,S.toNumber=Vn,S.toSafeInteger=iv,S.toString=Mt,S.toUpper=rx,S.trim=sx,S.trimEnd=ax,S.trimStart=ox,S.truncate=lx,S.unescape=cx,S.uniqueId=Ux,S.upperCase=ux,S.upperFirst=Ll,S.each=Mh,S.eachRight=Sh,S.first=gh,Ul(S,function(){var n={};return ii(S,function(r,l){yt.call(S.prototype,l)||(n[l]=r)}),n}(),{chain:!1}),S.VERSION=i,Fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){S[n].placeholder=S}),Fn(["drop","take"],function(n,r){ft.prototype[n]=function(l){l=l===t?1:qt(nt(l),0);var h=this.__filtered__&&!r?new ft(this):this.clone();return h.__filtered__?h.__takeCount__=an(l,h.__takeCount__):h.__views__.push({size:an(l,Ae),type:n+(h.__dir__<0?"Right":"")}),h},ft.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Fn(["filter","map","takeWhile"],function(n,r){var l=r+1,h=l==te||l==ue;ft.prototype[n]=function(x){var E=this.clone();return E.__iteratees__.push({iteratee:ze(x,3),type:l}),E.__filtered__=E.__filtered__||h,E}}),Fn(["head","last"],function(n,r){var l="take"+(r?"Right":"");ft.prototype[n]=function(){return this[l](1).value()[0]}}),Fn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");ft.prototype[n]=function(){return this.__filtered__?new ft(this):this[l](1)}}),ft.prototype.compact=function(){return this.filter(xn)},ft.prototype.find=function(n){return this.filter(n).head()},ft.prototype.findLast=function(n){return this.reverse().find(n)},ft.prototype.invokeMap=at(function(n,r){return typeof n=="function"?new ft(this):this.map(function(l){return Ls(l,n,r)})}),ft.prototype.reject=function(n){return this.filter(Ha(ze(n)))},ft.prototype.slice=function(n,r){n=nt(n);var l=this;return l.__filtered__&&(n>0||r<0)?new ft(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==t&&(r=nt(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},ft.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ft.prototype.toArray=function(){return this.take(Ae)},ii(ft.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),h=/^(?:head|last)$/.test(r),x=S[h?"take"+(r=="last"?"Right":""):r],E=h||/^find/.test(r);x&&(S.prototype[r]=function(){var L=this.__wrapped__,D=h?[1]:arguments,B=L instanceof ft,ne=D[0],ie=B||je(L),oe=function(ht){var pt=x.apply(S,Oi([ht],D));return h&&Me?pt[0]:pt};ie&&l&&typeof ne=="function"&&ne.length!=1&&(B=ie=!1);var Me=this.__chain__,Pe=!!this.__actions__.length,He=E&&!Me,it=B&&!Pe;if(!E&&ie){L=it?L:new ft(this);var ke=n.apply(L,D);return ke.__actions__.push({func:Oa,args:[oe],thisArg:t}),new Bn(ke,Me)}return He&&it?n.apply(this,D):(ke=this.thru(oe),He?h?ke.value()[0]:ke.value():ke)})}),Fn(["pop","push","shift","sort","splice","unshift"],function(n){var r=la[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);S.prototype[n]=function(){var x=arguments;if(h&&!this.__chain__){var E=this.value();return r.apply(je(E)?E:[],x)}return this[l](function(L){return r.apply(je(L)?L:[],x)})}}),ii(ft.prototype,function(n,r){var l=S[r];if(l){var h=l.name+"";yt.call(Fr,h)||(Fr[h]=[]),Fr[h].push({name:r,func:l})}}),Fr[Ca(t,g).name]=[{name:"wrapper",func:t}],ft.prototype.clone=cm,ft.prototype.reverse=um,ft.prototype.value=hm,S.prototype.at=H_,S.prototype.chain=k_,S.prototype.commit=G_,S.prototype.next=V_,S.prototype.plant=X_,S.prototype.reverse=$_,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=q_,S.prototype.first=S.prototype.head,bs&&(S.prototype[bs]=W_),S},Ur=Gp();rr?((rr.exports=Ur)._=Ur,Do._=Ur):tn._=Ur}).call(zs)})(mo,mo.exports);var Ht=mo.exports;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="163",Zx=0,Yh=1,Jx=2,vd=1,Qx=2,Ci=3,tr=0,yn=1,ci=2,Qi=0,cs=1,Kh=2,Zh=3,Jh=4,jx=5,Sr=100,eM=101,tM=102,nM=103,iM=104,rM=200,sM=201,aM=202,oM=203,vc=204,xc=205,lM=206,cM=207,uM=208,hM=209,fM=210,dM=211,pM=212,mM=213,gM=214,_M=0,vM=1,xM=2,go=3,MM=4,SM=5,yM=6,EM=7,xd=0,bM=1,TM=2,ji=0,AM=1,wM=2,RM=3,CM=4,PM=5,LM=6,IM=7,Md=300,fs=301,ds=302,Mc=303,Sc=304,yo=306,yc=1e3,yr=1001,Ec=1002,$n=1003,DM=1004,Wa=1005,ti=1006,zl=1007,Er=1008,er=1009,UM=1010,NM=1011,Sd=1012,yd=1013,ps=1014,Ji=1015,_o=1016,Ed=1017,bd=1018,Ys=1020,OM=35902,FM=1021,zM=1022,hi=1023,BM=1024,HM=1025,us=1026,Xs=1027,kM=1028,Td=1029,GM=1030,Ad=1031,wd=1033,Bl=33776,Hl=33777,kl=33778,Gl=33779,Qh=35840,jh=35841,ef=35842,tf=35843,Rd=36196,nf=37492,rf=37496,sf=37808,af=37809,of=37810,lf=37811,cf=37812,uf=37813,hf=37814,ff=37815,df=37816,pf=37817,mf=37818,gf=37819,_f=37820,vf=37821,Vl=36492,xf=36494,Mf=36495,VM=36283,Sf=36284,yf=36285,Ef=36286,WM=3200,XM=3201,$M=0,qM=1,Zi="",ai="srgb",nr="srgb-linear",wc="display-p3",Eo="display-p3-linear",vo="linear",Ot="srgb",xo="rec709",Mo="p3",Wr=7680,bf=519,YM=512,KM=513,ZM=514,Cd=515,JM=516,QM=517,jM=518,eS=519,Tf=35044,Af="300 es",Pi=2e3,So=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=Math.PI/180,bc=180/Math.PI;function Ks(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Sn(s,e,t){return Math.max(e,Math.min(t,s))}function tS(s,e){return(s%e+e)%e}function Xl(s,e,t){return(1-t)*s+t*e}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,a,o,c,u,f,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,f,d)}set(e,t,i,a,o,c,u,f,d){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=o,p[5]=f,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],p=i[4],m=i[7],_=i[2],M=i[5],A=i[8],R=a[0],v=a[3],g=a[6],U=a[1],w=a[4],N=a[7],W=a[2],F=a[5],O=a[8];return o[0]=c*R+u*U+f*W,o[3]=c*v+u*w+f*F,o[6]=c*g+u*N+f*O,o[1]=d*R+p*U+m*W,o[4]=d*v+p*w+m*F,o[7]=d*g+p*N+m*O,o[2]=_*R+M*U+A*W,o[5]=_*v+M*w+A*F,o[8]=_*g+M*N+A*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*o*p+i*u*f+a*o*d-a*c*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8],m=p*c-u*d,_=u*f-p*o,M=d*o-c*f,A=t*m+i*_+a*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(a*d-p*i)*R,e[2]=(u*i-a*c)*R,e[3]=_*R,e[4]=(p*t-a*f)*R,e[5]=(a*o-u*t)*R,e[6]=M*R,e[7]=(i*f-d*t)*R,e[8]=(c*t-i*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*c+d*u)+c+e,-a*d,a*f,-a*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new st;function Pd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $s(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nS(){const s=$s("canvas");return s.style.display="block",s}const wf={};function iS(s){s in wf||(wf[s]=!0)}const Rf=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cf=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[nr]:{transfer:vo,primaries:xo,toReference:s=>s,fromReference:s=>s},[ai]:{transfer:Ot,primaries:xo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Eo]:{transfer:vo,primaries:Mo,toReference:s=>s.applyMatrix3(Cf),fromReference:s=>s.applyMatrix3(Rf)},[wc]:{transfer:Ot,primaries:Mo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Cf),fromReference:s=>s.applyMatrix3(Rf).convertLinearToSRGB()}},rS=new Set([nr,Eo]),wt={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!rS.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Xa[e].toReference,a=Xa[t].fromReference;return a(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Xa[s].primaries},getTransfer:function(s){return s===Zi?vo:Xa[s].transfer}};function hs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ql(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xr;class sS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xr===void 0&&(Xr=$s("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=hs(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return e}}let aS=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Yl(a[c].image)):o.push(Yl(a[c]))}else o=Yl(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Yl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:{}}let oS=0;class mn extends gs{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=yr,a=yr,o=ti,c=Er,u=hi,f=er,d=mn.DEFAULT_ANISOTROPY,p=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Ks(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Md;mn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,i=0,a=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const f=e.elements,d=f[0],p=f[4],m=f[8],_=f[1],M=f[5],A=f[9],R=f[2],v=f[6],g=f[10];if(Math.abs(p-_)<.01&&Math.abs(m-R)<.01&&Math.abs(A-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+R)<.1&&Math.abs(A+v)<.1&&Math.abs(d+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(d+1)/2,N=(M+1)/2,W=(g+1)/2,F=(p+_)/4,O=(m+R)/4,Q=(A+v)/4;return w>N&&w>W?w<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(w),a=F/i,o=O/i):N>W?N<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(N),i=F/a,o=Q/a):W<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(W),i=O/o,a=Q/o),this.set(i,a,o,t),this}let U=Math.sqrt((v-A)*(v-A)+(m-R)*(m-R)+(_-p)*(_-p));return Math.abs(U)<.001&&(U=1),this.x=(v-A)/U,this.y=(m-R)/U,this.z=(_-p)/U,this.w=Math.acos((d+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lS extends gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new mn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends lS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Id extends mn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cS extends mn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let f=i[a+0],d=i[a+1],p=i[a+2],m=i[a+3];const _=o[c+0],M=o[c+1],A=o[c+2],R=o[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=_,e[t+1]=M,e[t+2]=A,e[t+3]=R;return}if(m!==R||f!==_||d!==M||p!==A){let v=1-u;const g=f*_+d*M+p*A+m*R,U=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const W=Math.sqrt(w),F=Math.atan2(W,g*U);v=Math.sin(v*F)/W,u=Math.sin(u*F)/W}const N=u*U;if(f=f*v+_*N,d=d*v+M*N,p=p*v+A*N,m=m*v+R*N,v===1-u){const W=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=W,d*=W,p*=W,m*=W}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],f=i[a+1],d=i[a+2],p=i[a+3],m=o[c],_=o[c+1],M=o[c+2],A=o[c+3];return e[t]=u*A+p*m+f*M-d*_,e[t+1]=f*A+p*_+d*m-u*M,e[t+2]=d*A+p*M+u*_-f*m,e[t+3]=p*A-u*m-f*_-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(a/2),m=u(o/2),_=f(i/2),M=f(a/2),A=f(o/2);switch(c){case"XYZ":this._x=_*p*m+d*M*A,this._y=d*M*m-_*p*A,this._z=d*p*A+_*M*m,this._w=d*p*m-_*M*A;break;case"YXZ":this._x=_*p*m+d*M*A,this._y=d*M*m-_*p*A,this._z=d*p*A-_*M*m,this._w=d*p*m+_*M*A;break;case"ZXY":this._x=_*p*m-d*M*A,this._y=d*M*m+_*p*A,this._z=d*p*A+_*M*m,this._w=d*p*m-_*M*A;break;case"ZYX":this._x=_*p*m-d*M*A,this._y=d*M*m+_*p*A,this._z=d*p*A-_*M*m,this._w=d*p*m+_*M*A;break;case"YZX":this._x=_*p*m+d*M*A,this._y=d*M*m+_*p*A,this._z=d*p*A-_*M*m,this._w=d*p*m-_*M*A;break;case"XZY":this._x=_*p*m-d*M*A,this._y=d*M*m-_*p*A,this._z=d*p*A+_*M*m,this._w=d*p*m+_*M*A;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],f=t[9],d=t[2],p=t[6],m=t[10],_=i+u+m;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(p-f)*M,this._y=(o-d)*M,this._z=(c-a)*M}else if(i>u&&i>m){const M=2*Math.sqrt(1+i-u-m);this._w=(p-f)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(o+d)/M}else if(u>m){const M=2*Math.sqrt(1+u-i-m);this._w=(o-d)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(f+p)/M}else{const M=2*Math.sqrt(1+m-i-u);this._w=(c-a)/M,this._x=(o+d)/M,this._y=(f+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+a*d-o*f,this._y=a*p+c*f+o*u-i*d,this._z=o*p+c*d+i*f-a*u,this._w=c*p-i*u-a*f-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const M=1-t;return this._w=M*c+t*this._w,this._x=M*i+t*this._x,this._y=M*a+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),m=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=c*m+this._w*_,this._x=i*m+this._x*_,this._y=a*m+this._y*_,this._z=o*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*a-u*i),p=2*(u*t-o*a),m=2*(o*i-c*t);return this.x=t+f*d+c*m-u*p,this.y=i+f*p+u*d-o*m,this.z=a+f*m+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,f=t.z;return this.x=a*f-o*u,this.y=o*c-i*f,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new Y,Pf=new Zs;class Js{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Qn):Qn.fromBufferAttribute(o,c),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),qa.subVectors(this.max,Hs),$r.subVectors(e.a,Hs),qr.subVectors(e.b,Hs),Yr.subVectors(e.c,Hs),Wi.subVectors(qr,$r),Xi.subVectors(Yr,qr),dr.subVectors($r,Yr);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-dr.z,dr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,dr.z,0,-dr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-dr.y,dr.x,0];return!Zl(t,$r,qr,Yr,qa)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,$r,qr,Yr,qa))?!1:(Ya.crossVectors(Wi,Xi),t=[Ya.x,Ya.y,Ya.z],Zl(t,$r,qr,Yr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qn=new Y,$a=new Js,$r=new Y,qr=new Y,Yr=new Y,Wi=new Y,Xi=new Y,dr=new Y,Hs=new Y,qa=new Y,Ya=new Y,pr=new Y;function Zl(s,e,t,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){pr.fromArray(s,o);const u=a.x*Math.abs(pr.x)+a.y*Math.abs(pr.y)+a.z*Math.abs(pr.z),f=e.dot(pr),d=t.dot(pr),p=i.dot(pr);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const uS=new Js,ks=new Y,Jl=new Y;class Rc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uS.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ks,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Jl)),this.expandByPoint(ks.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new Y,Ql=new Y,Ka=new Y,$i=new Y,jl=new Y,Za=new Y,ec=new Y;class hS{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ql.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Ql);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Ka),u=$i.dot(this.direction),f=-$i.dot(Ka),d=$i.lengthSq(),p=Math.abs(1-c*c);let m,_,M,A;if(p>0)if(m=c*f-u,_=c*u-f,A=o*p,m>=0)if(_>=-A)if(_<=A){const R=1/p;m*=R,_*=R,M=m*(m+c*_+2*u)+_*(c*m+_+2*f)+d}else _=o,m=Math.max(0,-(c*_+u)),M=-m*m+_*(_+2*f)+d;else _=-o,m=Math.max(0,-(c*_+u)),M=-m*m+_*(_+2*f)+d;else _<=-A?(m=Math.max(0,-(-c*o+u)),_=m>0?-o:Math.min(Math.max(-o,-f),o),M=-m*m+_*(_+2*f)+d):_<=A?(m=0,_=Math.min(Math.max(-o,-f),o),M=_*(_+2*f)+d):(m=Math.max(0,-(c*o+u)),_=m>0?o:Math.min(Math.max(-o,-f),o),M=-m*m+_*(_+2*f)+d);else _=c>0?-o:o,m=Math.max(0,-(c*_+u)),M=-m*m+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Ql).addScaledVector(Ka,_),M}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),a=Ti.dot(Ti)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,f;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,a=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,a=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),m>=0?(u=(e.min.z-_.z)*m,f=(e.max.z-_.z)*m):(u=(e.max.z-_.z)*m,f=(e.min.z-_.z)*m),i>f||u>a)||((u>i||i!==i)&&(i=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,a,o){jl.subVectors(t,e),Za.subVectors(i,e),ec.crossVectors(jl,Za);let c=this.direction.dot(ec),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;$i.subVectors(this.origin,e);const f=u*this.direction.dot(Za.crossVectors($i,Za));if(f<0)return null;const d=u*this.direction.dot(jl.cross($i));if(d<0||f+d>c)return null;const p=-u*$i.dot(ec);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,a,o,c,u,f,d,p,m,_,M,A,R,v){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,f,d,p,m,_,M,A,R,v)}set(e,t,i,a,o,c,u,f,d,p,m,_,M,A,R,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=o,g[5]=c,g[9]=u,g[13]=f,g[2]=d,g[6]=p,g[10]=m,g[14]=_,g[3]=M,g[7]=A,g[11]=R,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Kr.setFromMatrixColumn(e,0).length(),o=1/Kr.setFromMatrixColumn(e,1).length(),c=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(a),d=Math.sin(a),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const _=c*p,M=c*m,A=u*p,R=u*m;t[0]=f*p,t[4]=-f*m,t[8]=d,t[1]=M+A*d,t[5]=_-R*d,t[9]=-u*f,t[2]=R-_*d,t[6]=A+M*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*p,M=f*m,A=d*p,R=d*m;t[0]=_+R*u,t[4]=A*u-M,t[8]=c*d,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=M*u-A,t[6]=R+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*p,M=f*m,A=d*p,R=d*m;t[0]=_-R*u,t[4]=-c*m,t[8]=A+M*u,t[1]=M+A*u,t[5]=c*p,t[9]=R-_*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*p,M=c*m,A=u*p,R=u*m;t[0]=f*p,t[4]=A*d-M,t[8]=_*d+R,t[1]=f*m,t[5]=R*d+_,t[9]=M*d-A,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,M=c*d,A=u*f,R=u*d;t[0]=f*p,t[4]=R-_*m,t[8]=A*m+M,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=M*m+A,t[10]=_-R*m}else if(e.order==="XZY"){const _=c*f,M=c*d,A=u*f,R=u*d;t[0]=f*p,t[4]=-m,t[8]=d*p,t[1]=_*m+R,t[5]=c*p,t[9]=M*m-A,t[2]=A*m-M,t[6]=u*p,t[10]=R*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,dS)}lookAt(e,t,i){const a=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),qi.crossVectors(i,Cn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),qi.crossVectors(i,Cn)),qi.normalize(),Ja.crossVectors(Cn,qi),a[0]=qi.x,a[4]=Ja.x,a[8]=Cn.x,a[1]=qi.y,a[5]=Ja.y,a[9]=Cn.y,a[2]=qi.z,a[6]=Ja.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],p=i[1],m=i[5],_=i[9],M=i[13],A=i[2],R=i[6],v=i[10],g=i[14],U=i[3],w=i[7],N=i[11],W=i[15],F=a[0],O=a[4],Q=a[8],C=a[12],b=a[1],K=a[5],se=a[9],H=a[13],te=a[2],ae=a[6],ue=a[10],xe=a[14],Z=a[3],pe=a[7],he=a[11],Ae=a[15];return o[0]=c*F+u*b+f*te+d*Z,o[4]=c*O+u*K+f*ae+d*pe,o[8]=c*Q+u*se+f*ue+d*he,o[12]=c*C+u*H+f*xe+d*Ae,o[1]=p*F+m*b+_*te+M*Z,o[5]=p*O+m*K+_*ae+M*pe,o[9]=p*Q+m*se+_*ue+M*he,o[13]=p*C+m*H+_*xe+M*Ae,o[2]=A*F+R*b+v*te+g*Z,o[6]=A*O+R*K+v*ae+g*pe,o[10]=A*Q+R*se+v*ue+g*he,o[14]=A*C+R*H+v*xe+g*Ae,o[3]=U*F+w*b+N*te+W*Z,o[7]=U*O+w*K+N*ae+W*pe,o[11]=U*Q+w*se+N*ue+W*he,o[15]=U*C+w*H+N*xe+W*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],f=e[9],d=e[13],p=e[2],m=e[6],_=e[10],M=e[14],A=e[3],R=e[7],v=e[11],g=e[15];return A*(+o*f*m-a*d*m-o*u*_+i*d*_+a*u*M-i*f*M)+R*(+t*f*M-t*d*_+o*c*_-a*c*M+a*d*p-o*f*p)+v*(+t*d*m-t*u*M-o*c*m+i*c*M+o*u*p-i*d*p)+g*(-a*u*p-t*f*m+t*u*_+a*c*m-i*c*_+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8],m=e[9],_=e[10],M=e[11],A=e[12],R=e[13],v=e[14],g=e[15],U=m*v*d-R*_*d+R*f*M-u*v*M-m*f*g+u*_*g,w=A*_*d-p*v*d-A*f*M+c*v*M+p*f*g-c*_*g,N=p*R*d-A*m*d+A*u*M-c*R*M-p*u*g+c*m*g,W=A*m*f-p*R*f-A*u*_+c*R*_+p*u*v-c*m*v,F=t*U+i*w+a*N+o*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=U*O,e[1]=(R*_*o-m*v*o-R*a*M+i*v*M+m*a*g-i*_*g)*O,e[2]=(u*v*o-R*f*o+R*a*d-i*v*d-u*a*g+i*f*g)*O,e[3]=(m*f*o-u*_*o-m*a*d+i*_*d+u*a*M-i*f*M)*O,e[4]=w*O,e[5]=(p*v*o-A*_*o+A*a*M-t*v*M-p*a*g+t*_*g)*O,e[6]=(A*f*o-c*v*o-A*a*d+t*v*d+c*a*g-t*f*g)*O,e[7]=(c*_*o-p*f*o+p*a*d-t*_*d-c*a*M+t*f*M)*O,e[8]=N*O,e[9]=(A*m*o-p*R*o-A*i*M+t*R*M+p*i*g-t*m*g)*O,e[10]=(c*R*o-A*u*o+A*i*d-t*R*d-c*i*g+t*u*g)*O,e[11]=(p*u*o-c*m*o-p*i*d+t*m*d+c*i*M-t*u*M)*O,e[12]=W*O,e[13]=(p*R*a-A*m*a+A*i*_-t*R*_-p*i*v+t*m*v)*O,e[14]=(A*u*a-c*R*a-A*i*f+t*R*f+c*i*v-t*u*v)*O,e[15]=(c*m*a-p*u*a+p*i*f-t*m*f-c*i*_+t*u*_)*O,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,f=e.z,d=o*c,p=o*u;return this.set(d*c+i,d*u-a*f,d*f+a*u,0,d*u+a*f,p*u+i,p*f-a*c,0,d*f-a*u,p*f+a*c,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,f=t._w,d=o+o,p=c+c,m=u+u,_=o*d,M=o*p,A=o*m,R=c*p,v=c*m,g=u*m,U=f*d,w=f*p,N=f*m,W=i.x,F=i.y,O=i.z;return a[0]=(1-(R+g))*W,a[1]=(M+N)*W,a[2]=(A-w)*W,a[3]=0,a[4]=(M-N)*F,a[5]=(1-(_+g))*F,a[6]=(v+U)*F,a[7]=0,a[8]=(A+w)*O,a[9]=(v-U)*O,a[10]=(1-(_+R))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=Kr.set(a[0],a[1],a[2]).length();const c=Kr.set(a[4],a[5],a[6]).length(),u=Kr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],jn.copy(this);const d=1/o,p=1/c,m=1/u;return jn.elements[0]*=d,jn.elements[1]*=d,jn.elements[2]*=d,jn.elements[4]*=p,jn.elements[5]*=p,jn.elements[6]*=p,jn.elements[8]*=m,jn.elements[9]*=m,jn.elements[10]*=m,t.setFromRotationMatrix(jn),i.x=o,i.y=c,i.z=u,this}makePerspective(e,t,i,a,o,c,u=Pi){const f=this.elements,d=2*o/(t-e),p=2*o/(i-a),m=(t+e)/(t-e),_=(i+a)/(i-a);let M,A;if(u===Pi)M=-(c+o)/(c-o),A=-2*c*o/(c-o);else if(u===So)M=-c/(c-o),A=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=Pi){const f=this.elements,d=1/(t-e),p=1/(i-a),m=1/(c-o),_=(t+e)*d,M=(i+a)*p;let A,R;if(u===Pi)A=(c+o)*m,R=-2*m;else if(u===So)A=o*m,R=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=R,f[14]=-A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Kr=new Y,jn=new Yt,fS=new Y(0,0,0),dS=new Y(1,1,1),qi=new Y,Ja=new Y,Cn=new Y,Lf=new Yt,If=new Zs;class Li{constructor(e=0,t=0,i=0,a=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],f=a[1],d=a[5],p=a[9],m=a[2],_=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Sn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pS=0;const Df=new Y,Zr=new Zs,Ai=new Yt,Qa=new Y,Gs=new Y,mS=new Y,gS=new Zs,Uf=new Y(1,0,0),Nf=new Y(0,1,0),Of=new Y(0,0,1),Ff={type:"added"},_S={type:"removed"},Jr={type:"childadded",child:null},tc={type:"childremoved",child:null};class In extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Y,t=new Li,i=new Zs,a=new Y(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new st}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Gs,Qa,this.up):Ai.lookAt(Qa,Gs,this.up),this.quaternion.setFromRotationMatrix(Ai),a&&(Ai.extractRotation(a.matrixWorld),Zr.setFromRotationMatrix(Ai),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_S),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,mS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,gS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++){const u=a[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const m=f[d];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(e.materials,this.material[f]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(o(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),M=c(e.animations),A=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),M.length>0&&(i.animations=M),A.length>0&&(i.nodes=A)}return i.object=a,i;function c(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}In.DEFAULT_UP=new Y(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new Y,wi=new Y,nc=new Y,Ri=new Y,Qr=new Y,jr=new Y,zf=new Y,ic=new Y,rc=new Y,sc=new Y;class ui{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ei.subVectors(e,t),a.cross(ei);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){ei.subVectors(a,t),wi.subVectors(i,t),nc.subVectors(e,t);const c=ei.dot(ei),u=ei.dot(wi),f=ei.dot(nc),d=wi.dot(wi),p=wi.dot(nc),m=c*d-u*u;if(m===0)return o.set(0,0,0),null;const _=1/m,M=(d*f-u*p)*_,A=(c*p-u*f)*_;return o.set(1-M-A,A,M)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,a,o,c,u,f){return this.getBarycoord(e,t,i,a,Ri)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Ri.x),f.addScaledVector(c,Ri.y),f.addScaledVector(u,Ri.z),f)}static isFrontFacing(e,t,i,a){return ei.subVectors(i,t),wi.subVectors(e,t),ei.cross(wi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ei.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;Qr.subVectors(a,i),jr.subVectors(o,i),ic.subVectors(e,i);const f=Qr.dot(ic),d=jr.dot(ic);if(f<=0&&d<=0)return t.copy(i);rc.subVectors(e,a);const p=Qr.dot(rc),m=jr.dot(rc);if(p>=0&&m<=p)return t.copy(a);const _=f*m-p*d;if(_<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(Qr,c);sc.subVectors(e,o);const M=Qr.dot(sc),A=jr.dot(sc);if(A>=0&&M<=A)return t.copy(o);const R=M*d-f*A;if(R<=0&&d>=0&&A<=0)return u=d/(d-A),t.copy(i).addScaledVector(jr,u);const v=p*A-M*m;if(v<=0&&m-p>=0&&M-A>=0)return zf.subVectors(o,a),u=(m-p)/(m-p+(M-A)),t.copy(a).addScaledVector(zf,u);const g=1/(v+R+_);return c=R*g,u=_*g,t.copy(i).addScaledVector(Qr,c).addScaledVector(jr,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function ac(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=wt.workingColorSpace){if(e=tS(e,1),t=Sn(t,0,1),i=Sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=ac(c,o,e+1/3),this.g=ac(c,o,e),this.b=ac(c,o,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=ai){function i(o){o!==void 0&&parseFloat(o)<1}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const i=Ud[e.toLowerCase()];return i!==void 0&&this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=ql(e.r),this.g=ql(e.g),this.b=ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return wt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Sn(cn.r*255,0,255))*65536+Math.round(Sn(cn.g*255,0,255))*256+Math.round(Sn(cn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,a=cn.g,o=cn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let f,d;const p=(u+c)/2;if(u===c)f=0,d=0;else{const m=c-u;switch(d=p<=.5?m/(c+u):m/(2-c-u),c){case i:f=(a-o)/m+(a<o?6:0);break;case a:f=(o-i)/m+2;break;case o:f=(i-a)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=ai){wt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,a=cn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ja);const i=Xl(Yi.h,ja.h,t),a=Xl(Yi.s,ja.s,t),o=Xl(Yi.l,ja.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Rt;Rt.NAMES=Ud;let vS=0;class bo extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=cs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0)continue;const a=this[t];a!==void 0&&(a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nd extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Y,eo=new xt;class di{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return iS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),a=Mn(a,this.array),o=Mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}}class Od extends di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fd extends di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class br extends di{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xS=0;const Wn=new Yt,oc=new In,es=new Y,Pn=new Js,Vs=new Js,en=new Y;class Ar extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Fd:Od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new st().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new br(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Pn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Vs.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(Pn.min,Vs.min),Pn.expandByPoint(en),en.addVectors(Pn.max,Vs.max),Pn.expandByPoint(en)):(Pn.expandByPoint(Vs.min),Pn.expandByPoint(Vs.max))}Pn.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)en.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(en));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)en.fromBufferAttribute(u,d),f&&(es.fromBufferAttribute(e,d),en.add(es)),a=Math.max(a,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let Q=0;Q<i.count;Q++)u[Q]=new Y,f[Q]=new Y;const d=new Y,p=new Y,m=new Y,_=new xt,M=new xt,A=new xt,R=new Y,v=new Y;function g(Q,C,b){d.fromBufferAttribute(i,Q),p.fromBufferAttribute(i,C),m.fromBufferAttribute(i,b),_.fromBufferAttribute(o,Q),M.fromBufferAttribute(o,C),A.fromBufferAttribute(o,b),p.sub(d),m.sub(d),M.sub(_),A.sub(_);const K=1/(M.x*A.y-A.x*M.y);isFinite(K)&&(R.copy(p).multiplyScalar(A.y).addScaledVector(m,-M.y).multiplyScalar(K),v.copy(m).multiplyScalar(M.x).addScaledVector(p,-A.x).multiplyScalar(K),u[Q].add(R),u[C].add(R),u[b].add(R),f[Q].add(v),f[C].add(v),f[b].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Q=0,C=U.length;Q<C;++Q){const b=U[Q],K=b.start,se=b.count;for(let H=K,te=K+se;H<te;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new Y,N=new Y,W=new Y,F=new Y;function O(Q){W.fromBufferAttribute(a,Q),F.copy(W);const C=u[Q];w.copy(C),w.sub(W.multiplyScalar(W.dot(C))).normalize(),N.crossVectors(F,C);const K=N.dot(f[Q])<0?-1:1;c.setXYZW(Q,w.x,w.y,w.z,K)}for(let Q=0,C=U.length;Q<C;++Q){const b=U[Q],K=b.start,se=b.count;for(let H=K,te=K+se;H<te;H+=3)O(e.getX(H+0)),O(e.getX(H+1)),O(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,M=i.count;_<M;_++)i.setXYZ(_,0,0,0);const a=new Y,o=new Y,c=new Y,u=new Y,f=new Y,d=new Y,p=new Y,m=new Y;if(e)for(let _=0,M=e.count;_<M;_+=3){const A=e.getX(_+0),R=e.getX(_+1),v=e.getX(_+2);a.fromBufferAttribute(t,A),o.fromBufferAttribute(t,R),c.fromBufferAttribute(t,v),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),u.add(p),f.add(p),d.add(p),i.setXYZ(A,u.x,u.y,u.z),i.setXYZ(R,f.x,f.y,f.z),i.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,M=t.count;_<M;_+=3)a.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,m=u.normalized,_=new d.constructor(f.length*p);let M=0,A=0;for(let R=0,v=f.length;R<v;R++){u.isInterleavedBufferAttribute?M=f[R]*u.data.stride+u.offset:M=f[R]*p;for(let g=0;g<p;g++)_[A++]=d[M++]}return new di(_,p,m)}if(this.index===null)return this;const t=new Ar,i=this.index.array,a=this.attributes;for(const u in a){const f=a[u],d=e(f,i);t.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let p=0,m=d.length;p<m;p++){const _=d[p],M=e(_,i);f.push(M)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const a={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let m=0,_=d.length;m<_;m++){const M=d[m];p.push(M.toJSON(e.data))}p.length>0&&(a[f]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],m=o[d];for(let _=0,M=m.length;_<M;_++)p.push(m[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new Yt,mr=new hS,to=new Rc,Hf=new Y,ts=new Y,ns=new Y,is=new Y,lc=new Y,no=new Y,io=new xt,ro=new xt,so=new xt,kf=new Y,Gf=new Y,Vf=new Y,ao=new Y,oo=new Y;class fi extends In{constructor(e=new Ar,t=new Nd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){no.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=u[f],m=o[f];p!==0&&(lc.fromBufferAttribute(m,e),c?no.addScaledVector(lc,p):no.addScaledVector(lc.sub(t),p))}t.add(no)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(o),mr.copy(e.ray).recast(e.near),!(to.containsPoint(mr.origin)===!1&&(mr.intersectSphere(to,Hf)===null||mr.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(Bf.copy(o).invert(),mr.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,_=o.groups,M=o.drawRange;if(u!==null)if(Array.isArray(c))for(let A=0,R=_.length;A<R;A++){const v=_[A],g=c[v.materialIndex],U=Math.max(v.start,M.start),w=Math.min(u.count,Math.min(v.start+v.count,M.start+M.count));for(let N=U,W=w;N<W;N+=3){const F=u.getX(N),O=u.getX(N+1),Q=u.getX(N+2);a=lo(this,g,e,i,d,p,m,F,O,Q),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const A=Math.max(0,M.start),R=Math.min(u.count,M.start+M.count);for(let v=A,g=R;v<g;v+=3){const U=u.getX(v),w=u.getX(v+1),N=u.getX(v+2);a=lo(this,c,e,i,d,p,m,U,w,N),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let A=0,R=_.length;A<R;A++){const v=_[A],g=c[v.materialIndex],U=Math.max(v.start,M.start),w=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let N=U,W=w;N<W;N+=3){const F=N,O=N+1,Q=N+2;a=lo(this,g,e,i,d,p,m,F,O,Q),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const A=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let v=A,g=R;v<g;v+=3){const U=v,w=v+1,N=v+2;a=lo(this,c,e,i,d,p,m,U,w,N),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function MS(s,e,t,i,a,o,c,u){let f;if(e.side===yn?f=i.intersectTriangle(c,o,a,!0,u):f=i.intersectTriangle(a,o,c,e.side===tr,u),f===null)return null;oo.copy(u),oo.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(oo);return d<t.near||d>t.far?null:{distance:d,point:oo.clone(),object:s}}function lo(s,e,t,i,a,o,c,u,f,d){s.getVertexPosition(u,ts),s.getVertexPosition(f,ns),s.getVertexPosition(d,is);const p=MS(s,e,t,i,ts,ns,is,ao);if(p){a&&(io.fromBufferAttribute(a,u),ro.fromBufferAttribute(a,f),so.fromBufferAttribute(a,d),p.uv=ui.getInterpolation(ao,ts,ns,is,io,ro,so,new xt)),o&&(io.fromBufferAttribute(o,u),ro.fromBufferAttribute(o,f),so.fromBufferAttribute(o,d),p.uv1=ui.getInterpolation(ao,ts,ns,is,io,ro,so,new xt)),c&&(kf.fromBufferAttribute(c,u),Gf.fromBufferAttribute(c,f),Vf.fromBufferAttribute(c,d),p.normal=ui.getInterpolation(ao,ts,ns,is,kf,Gf,Vf,new Y),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:f,c:d,normal:new Y,materialIndex:0};ui.getNormal(ts,ns,is,m.normal),p.face=m}return p}class Qs extends Ar{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const f=[],d=[],p=[],m=[];let _=0,M=0;A("z","y","x",-1,-1,i,t,e,c,o,0),A("z","y","x",1,-1,i,t,-e,c,o,1),A("x","z","y",1,1,e,i,t,a,c,2),A("x","z","y",1,-1,e,i,-t,a,c,3),A("x","y","z",1,-1,e,t,i,a,o,4),A("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(f),this.setAttribute("position",new br(d,3)),this.setAttribute("normal",new br(p,3)),this.setAttribute("uv",new br(m,2));function A(R,v,g,U,w,N,W,F,O,Q,C){const b=N/O,K=W/Q,se=N/2,H=W/2,te=F/2,ae=O+1,ue=Q+1;let xe=0,Z=0;const pe=new Y;for(let he=0;he<ue;he++){const Ae=he*K-H;for(let ct=0;ct<ae;ct++){const Et=ct*b-se;pe[R]=Et*U,pe[v]=Ae*w,pe[g]=te,d.push(pe.x,pe.y,pe.z),pe[R]=0,pe[v]=0,pe[g]=F>0?1:-1,p.push(pe.x,pe.y,pe.z),m.push(ct/O),m.push(1-he/Q),xe+=1}}for(let he=0;he<Q;he++)for(let Ae=0;Ae<O;Ae++){const ct=_+Ae+ae*he,Et=_+Ae+ae*(he+1),ee=_+(Ae+1)+ae*(he+1),fe=_+(Ae+1)+ae*he;f.push(ct,Et,fe),f.push(Et,ee,fe),Z+=6}u.addGroup(M,Z,C),M+=Z,_+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?e[t][i]=null:e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const i=ms(s[t]);for(const a in i)e[a]=i[a]}return e}function SS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const yS={clone:ms,merge:pn};var ES=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ES,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=SS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bd extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new Y,Wf=new xt,Xf=new xt;class Xn extends Bd{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;o+=c.offsetX*a/f,t-=c.offsetY*i/d,a*=c.width/f,i*=c.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,ss=1;class TS extends In{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(rs,ss,e,t);a.layers=this.layers,this.add(a);const o=new Xn(rs,ss,e,t);o.layers=this.layers,this.add(o);const c=new Xn(rs,ss,e,t);c.layers=this.layers,this.add(c);const u=new Xn(rs,ss,e,t);u.layers=this.layers,this.add(u);const f=new Xn(rs,ss,e,t);f.layers=this.layers,this.add(f);const d=new Xn(rs,ss,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,f]=t;for(const d of t)this.remove(d);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,f,d,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,f),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=R,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(m,_,M),e.xr.enabled=A,i.texture.needsPMREMUpdate=!0}}class Hd extends mn{constructor(e,t,i,a,o,c,u,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,i,a,o,c,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AS extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Hd(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Qs(5,5,5),o=new Ii({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Qi});o.uniforms.tEquirect.value=t;const c=new fi(a,o),u=t.minFilter;return t.minFilter===Er&&(t.minFilter=ti),new TS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}const cc=new Y,wS=new Y,RS=new st;class xr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=cc.subVectors(i,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RS.getNormalMatrix(e),a=this.coplanarPoint(cc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Rc,co=new Y;class kd{constructor(e=new xr,t=new xr,i=new xr,a=new xr,o=new xr,c=new xr){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,a=e.elements,o=a[0],c=a[1],u=a[2],f=a[3],d=a[4],p=a[5],m=a[6],_=a[7],M=a[8],A=a[9],R=a[10],v=a[11],g=a[12],U=a[13],w=a[14],N=a[15];if(i[0].setComponents(f-o,_-d,v-M,N-g).normalize(),i[1].setComponents(f+o,_+d,v+M,N+g).normalize(),i[2].setComponents(f+c,_+p,v+A,N+U).normalize(),i[3].setComponents(f-c,_-p,v-A,N-U).normalize(),i[4].setComponents(f-u,_-m,v-R,N-w).normalize(),t===Pi)i[5].setComponents(f+u,_+m,v+R,N+w).normalize();else if(t===So)i[5].setComponents(u,m,R,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(co.x=a.normal.x>0?e.max.x:e.min.x,co.y=a.normal.y>0?e.max.y:e.min.y,co.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let s=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function CS(s){const e=new WeakMap;function t(u,f){const d=u.array,p=u.usage,m=d.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,d,p),u.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,d){const p=f.array,m=f._updateRange,_=f.updateRanges;if(s.bindBuffer(d,u),m.count===-1&&_.length===0&&s.bufferSubData(d,0,p),_.length!==0){for(let M=0,A=_.length;M<A;M++){const R=_[M];s.bufferSubData(d,R.start*p.BYTES_PER_ELEMENT,p,R.start,R.count)}f.clearUpdateRanges()}m.count!==-1&&(s.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count),m.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(s.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:a,remove:o,update:c}}class js extends Ar{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),f=Math.floor(a),d=u+1,p=f+1,m=e/u,_=t/f,M=[],A=[],R=[],v=[];for(let g=0;g<p;g++){const U=g*_-c;for(let w=0;w<d;w++){const N=w*m-o;A.push(N,-U,0),R.push(0,0,1),v.push(w/u),v.push(1-g/f)}}for(let g=0;g<f;g++)for(let U=0;U<u;U++){const w=U+d*g,N=U+d*(g+1),W=U+1+d*(g+1),F=U+1+d*g;M.push(w,N,F),M.push(N,W,F)}this.setIndex(M),this.setAttribute("position",new br(A,3)),this.setAttribute("normal",new br(R,3)),this.setAttribute("uv",new br(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var PS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ty=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ey=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Py=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:PS,alphahash_pars_fragment:LS,alphamap_fragment:IS,alphamap_pars_fragment:DS,alphatest_fragment:US,alphatest_pars_fragment:NS,aomap_fragment:OS,aomap_pars_fragment:FS,batching_pars_vertex:zS,batching_vertex:BS,begin_vertex:HS,beginnormal_vertex:kS,bsdfs:GS,iridescence_fragment:VS,bumpmap_pars_fragment:WS,clipping_planes_fragment:XS,clipping_planes_pars_fragment:$S,clipping_planes_pars_vertex:qS,clipping_planes_vertex:YS,color_fragment:KS,color_pars_fragment:ZS,color_pars_vertex:JS,color_vertex:QS,common:jS,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ry,emissivemap_pars_fragment:sy,colorspace_fragment:ay,colorspace_pars_fragment:oy,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:uy,envmap_pars_vertex:hy,envmap_physical_pars_fragment:Ey,envmap_vertex:fy,fog_vertex:dy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:_y,lightmap_fragment:vy,lightmap_pars_fragment:xy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Sy,lights_pars_begin:yy,lights_toon_fragment:by,lights_toon_pars_fragment:Ty,lights_phong_fragment:Ay,lights_phong_pars_fragment:wy,lights_physical_fragment:Ry,lights_physical_pars_fragment:Cy,lights_fragment_begin:Py,lights_fragment_maps:Ly,lights_fragment_end:Iy,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Uy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Oy,map_fragment:Fy,map_pars_fragment:zy,map_particle_fragment:By,map_particle_pars_fragment:Hy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Vy,morphcolor_vertex:Wy,morphnormal_vertex:Xy,morphtarget_pars_vertex:$y,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:Ky,normal_pars_fragment:Zy,normal_pars_vertex:Jy,normal_vertex:Qy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:aE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:dE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:_E,skinning_vertex:vE,skinnormal_vertex:xE,specularmap_fragment:ME,specularmap_pars_fragment:SE,tonemapping_fragment:yE,tonemapping_pars_fragment:EE,transmission_fragment:bE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:wE,uv_vertex:RE,worldpos_vertex:CE,background_vert:PE,background_frag:LE,backgroundCube_vert:IE,backgroundCube_frag:DE,cube_vert:UE,cube_frag:NE,depth_vert:OE,depth_frag:FE,distanceRGBA_vert:zE,distanceRGBA_frag:BE,equirect_vert:HE,equirect_frag:kE,linedashed_vert:GE,linedashed_frag:VE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:$E,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:jE,meshphysical_vert:eb,meshphysical_frag:tb,meshtoon_vert:nb,meshtoon_frag:ib,points_vert:rb,points_frag:sb,shadow_vert:ab,shadow_frag:ob,sprite_vert:lb,sprite_frag:cb},Se={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},oi={basic:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Rt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Rt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:pn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:pn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:pn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:pn([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:pn([Se.lights,Se.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};oi.physical={uniforms:pn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const uo={r:0,b:0,g:0},_r=new Li,ub=new Yt;function hb(s,e,t,i,a,o,c){const u=new Rt(0);let f=o===!0?0:1,d,p,m=null,_=0,M=null;function A(v,g){let U=!1,w=g.isScene===!0?g.background:null;w&&w.isTexture&&(w=(g.backgroundBlurriness>0?t:e).get(w)),w===null?R(u,f):w&&w.isColor&&(R(w,1),U=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===yo)?(p===void 0&&(p=new fi(new Qs(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ms(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(W,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),_r.copy(g.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ub.makeRotationFromEuler(_r)),p.material.toneMapped=wt.getTransfer(w.colorSpace)!==Ot,(m!==w||_!==w.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,m=w,_=w.version,M=s.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new fi(new js(2,2),new Ii({name:"BackgroundMaterial",uniforms:ms(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=wt.getTransfer(w.colorSpace)!==Ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||_!==w.version||M!==s.toneMapping)&&(d.material.needsUpdate=!0,m=w,_=w.version,M=s.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function R(v,g){v.getRGB(uo,zd(s)),i.buffers.color.setClear(uo.r,uo.g,uo.b,g,c)}return{getClearColor:function(){return u},setClearColor:function(v,g=1){u.set(v),f=g,R(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(v){f=v,R(u,f)},render:A}}function fb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=_(null);let o=a,c=!1;function u(b,K,se,H,te){let ae=!1;const ue=m(H,se,K);o!==ue&&(o=ue,d(o.object)),ae=M(b,H,se,te),ae&&A(b,H,se,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,N(b,K,se,H),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function f(){return s.createVertexArray()}function d(b){return s.bindVertexArray(b)}function p(b){return s.deleteVertexArray(b)}function m(b,K,se){const H=se.wireframe===!0;let te=i[b.id];te===void 0&&(te={},i[b.id]=te);let ae=te[K.id];ae===void 0&&(ae={},te[K.id]=ae);let ue=ae[H];return ue===void 0&&(ue=_(f()),ae[H]=ue),ue}function _(b){const K=[],se=[],H=[];for(let te=0;te<t;te++)K[te]=0,se[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:se,attributeDivisors:H,object:b,attributes:{},index:null}}function M(b,K,se,H){const te=o.attributes,ae=K.attributes;let ue=0;const xe=se.getAttributes();for(const Z in xe)if(xe[Z].location>=0){const he=te[Z];let Ae=ae[Z];if(Ae===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor)),he===void 0||he.attribute!==Ae||Ae&&he.data!==Ae.data)return!0;ue++}return o.attributesNum!==ue||o.index!==H}function A(b,K,se,H){const te={},ae=K.attributes;let ue=0;const xe=se.getAttributes();for(const Z in xe)if(xe[Z].location>=0){let he=ae[Z];he===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));const Ae={};Ae.attribute=he,he&&he.data&&(Ae.data=he.data),te[Z]=Ae,ue++}o.attributes=te,o.attributesNum=ue,o.index=H}function R(){const b=o.newAttributes;for(let K=0,se=b.length;K<se;K++)b[K]=0}function v(b){g(b,0)}function g(b,K){const se=o.newAttributes,H=o.enabledAttributes,te=o.attributeDivisors;se[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),te[b]!==K&&(s.vertexAttribDivisor(b,K),te[b]=K)}function U(){const b=o.newAttributes,K=o.enabledAttributes;for(let se=0,H=K.length;se<H;se++)K[se]!==b[se]&&(s.disableVertexAttribArray(se),K[se]=0)}function w(b,K,se,H,te,ae,ue){ue===!0?s.vertexAttribIPointer(b,K,se,te,ae):s.vertexAttribPointer(b,K,se,H,te,ae)}function N(b,K,se,H){R();const te=H.attributes,ae=se.getAttributes(),ue=K.defaultAttributeValues;for(const xe in ae){const Z=ae[xe];if(Z.location>=0){let pe=te[xe];if(pe===void 0&&(xe==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),xe==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){const he=pe.normalized,Ae=pe.itemSize,ct=e.get(pe);if(ct===void 0)continue;const Et=ct.buffer,ee=ct.type,fe=ct.bytesPerElement,we=ee===s.INT||ee===s.UNSIGNED_INT||pe.gpuType===yd;if(pe.isInterleavedBufferAttribute){const Ee=pe.data,$e=Ee.stride,Ke=pe.offset;if(Ee.isInstancedInterleavedBuffer){for(let dt=0;dt<Z.locationSize;dt++)g(Z.location+dt,Ee.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let dt=0;dt<Z.locationSize;dt++)v(Z.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let dt=0;dt<Z.locationSize;dt++)w(Z.location+dt,Ae/Z.locationSize,ee,he,$e*fe,(Ke+Ae/Z.locationSize*dt)*fe,we)}else{if(pe.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)g(Z.location+Ee,pe.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)v(Z.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Ee=0;Ee<Z.locationSize;Ee++)w(Z.location+Ee,Ae/Z.locationSize,ee,he,Ae*fe,Ae/Z.locationSize*Ee*fe,we)}}else if(ue!==void 0){const he=ue[xe];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Z.location,he);break;case 3:s.vertexAttrib3fv(Z.location,he);break;case 4:s.vertexAttrib4fv(Z.location,he);break;default:s.vertexAttrib1fv(Z.location,he)}}}}U()}function W(){Q();for(const b in i){const K=i[b];for(const se in K){const H=K[se];for(const te in H)p(H[te].object),delete H[te];delete K[se]}delete i[b]}}function F(b){if(i[b.id]===void 0)return;const K=i[b.id];for(const se in K){const H=K[se];for(const te in H)p(H[te].object),delete H[te];delete K[se]}delete i[b.id]}function O(b){for(const K in i){const se=i[K];if(se[b.id]===void 0)continue;const H=se[b.id];for(const te in H)p(H[te].object),delete H[te];delete se[b.id]}}function Q(){C(),c=!0,o!==a&&(o=a,d(o.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:v,disableUnusedAttributes:U}}function db(s,e,t){let i;function a(f){i=f}function o(f,d){s.drawArrays(i,f,d),t.update(d,i,1)}function c(f,d,p){p!==0&&(s.drawArraysInstanced(i,f,d,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(i,f,0,d,0,p);let _=0;for(let M=0;M<p;M++)_+=d[M];t.update(_,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function pb(s,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=o(c);u!==c&&(c=u);const f=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:v,vertexTextures:g,maxSamples:U}}function mb(s){const e=this;let t=null,i=0,a=!1,o=!1;const c=new xr,u=new st,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const M=m.length!==0||_||i!==0||a;return a=_,i=m.length,M},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,M){const A=m.clippingPlanes,R=m.clipIntersection,v=m.clipShadows,g=s.get(m);if(!a||A===null||A.length===0||o&&!v)o?p(null):d();else{const U=o?0:i,w=U*4;let N=g.clippingState||null;f.value=N,N=p(A,_,w,M);for(let W=0;W!==w;++W)N[W]=t[W];g.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,_,M,A){const R=m!==null?m.length:0;let v=null;if(R!==0){if(v=f.value,A!==!0||v===null){const g=M+R*4,U=_.matrixWorldInverse;u.getNormalMatrix(U),(v===null||v.length<g)&&(v=new Float32Array(g));for(let w=0,N=M;w!==R;++w,N+=4)c.copy(m[w]).applyMatrix4(U,u),c.normal.toArray(v,N),v[N+3]=c.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function gb(s){let e=new WeakMap;function t(c,u){return u===Mc?c.mapping=fs:u===Sc&&(c.mapping=ds),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Mc||u===Sc)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new AS(f.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class _b extends Bd{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,$f=[.125,.215,.35,.446,.526,.582],ls=20,uc=new _b,qf=new Rt;let hc=null,fc=0,dc=0,pc=!1;const Mr=(1+Math.sqrt(5))/2,as=1/Mr,Yf=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Mr,as),new Y(0,Mr,-as),new Y(as,0,Mr),new Y(-as,0,Mr),new Y(Mr,as,0),new Y(-Mr,as,0)];class Kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){hc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,fc,dc),this._renderer.xr.enabled=pc,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:_o,format:hi,colorSpace:nr,depthBuffer:!1},a=Zf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vb(o)),this._blurMaterial=xb(o,e,t)}return a}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,i,a){const u=new Xn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(qf),p.toneMapping=ji,p.autoClear=!1;const M=new Nd({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),A=new fi(new Qs,M);let R=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,R=!0):(M.color.copy(qf),R=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(u.up.set(0,f[g],0),u.lookAt(d[g],0,0)):U===1?(u.up.set(0,0,f[g]),u.lookAt(0,d[g],0)):(u.up.set(0,f[g],0),u.lookAt(0,0,d[g]));const w=this._cubeSize;ho(a,U*w,g>2?w:0,w,w),p.setRenderTarget(a),R&&p.render(A,u),p.render(e,u)}A.geometry.dispose(),A.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===fs||e.mapping===ds;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new fi(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;ho(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Yf[(a-1)%Yf.length];this._blur(e,a-1,a,o,c)}t.autoClear=i}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,u){const f=this._renderer,d=this._blurMaterial,p=3,m=new fi(this._lodPlanes[a],d),_=d.uniforms,M=this._sizeLods[i]-1,A=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*ls-1),R=o/A,v=isFinite(o)?1+Math.floor(p*R):ls;v>ls;const g=[];let U=0;for(let O=0;O<ls;++O){const Q=O/R,C=Math.exp(-Q*Q/2);g.push(C),O===0?U+=C:O<v&&(U+=2*C)}for(let O=0;O<g.length;O++)g[O]=g[O]/U;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=g,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:w}=this;_.dTheta.value=A,_.mipInt.value=w-i;const N=this._sizeLods[a],W=3*N*(a>w-os?a-w+os:0),F=4*(this._cubeSize-N);ho(t,W,F,3*N,2*N),f.setRenderTarget(t),f.render(m,uc)}}function vb(s){const e=[],t=[],i=[];let a=s;const o=s-os+1+$f.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);let f=1/u;c>s-os?f=$f[c-s+os-1]:c===0&&(f=0),i.push(f);const d=1/(u-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],M=6,A=6,R=3,v=2,g=1,U=new Float32Array(R*A*M),w=new Float32Array(v*A*M),N=new Float32Array(g*A*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,Q=F>2?0:-1,C=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];U.set(C,R*A*F),w.set(_,v*A*F);const b=[F,F,F,F,F,F];N.set(b,g*A*F)}const W=new Ar;W.setAttribute("position",new di(U,R)),W.setAttribute("uv",new di(w,v)),W.setAttribute("faceIndex",new di(N,g)),e.push(W),a>os&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zf(s,e,t){const i=new Tr(s,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function xb(s,e,t){const i=new Float32Array(ls),a=new Y(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Jf(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Qf(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mb(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===Mc||f===Sc,p=f===fs||f===ds;if(d||p){let m=e.get(u);const _=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Kf(s)),m=d?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return d&&M&&M.height>0||p&&M&&a(M)?(t===null&&(t=new Kf(s)),m=d?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function a(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Sb(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a}}}function yb(s,e,t,i){const a={},o=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const A in _.attributes)e.remove(_.attributes[A]);for(const A in _.morphAttributes){const R=_.morphAttributes[A];for(let v=0,g=R.length;v<g;v++)e.remove(R[v])}_.removeEventListener("dispose",c),delete a[_.id];const M=o.get(_);M&&(e.remove(M),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(m,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function f(m){const _=m.attributes;for(const A in _)e.update(_[A],s.ARRAY_BUFFER);const M=m.morphAttributes;for(const A in M){const R=M[A];for(let v=0,g=R.length;v<g;v++)e.update(R[v],s.ARRAY_BUFFER)}}function d(m){const _=[],M=m.index,A=m.attributes.position;let R=0;if(M!==null){const U=M.array;R=M.version;for(let w=0,N=U.length;w<N;w+=3){const W=U[w+0],F=U[w+1],O=U[w+2];_.push(W,F,F,O,O,W)}}else if(A!==void 0){const U=A.array;R=A.version;for(let w=0,N=U.length/3-1;w<N;w+=3){const W=w+0,F=w+1,O=w+2;_.push(W,F,F,O,O,W)}}else return;const v=new(Pd(_)?Fd:Od)(_,1);v.version=R;const g=o.get(m);g&&e.remove(g),o.set(m,v)}function p(m){const _=o.get(m);if(_){const M=m.index;M!==null&&_.version<M.version&&d(m)}else d(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function Eb(s,e,t){let i;function a(m){i=m}let o,c;function u(m){o=m.type,c=m.bytesPerElement}function f(m,_){s.drawElements(i,_,o,m*c),t.update(_,i,1)}function d(m,_,M){M!==0&&(s.drawElementsInstanced(i,_,o,m*c,M),t.update(_,i,M))}function p(m,_,M){if(M===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let R=0;R<M;R++)this.render(m[R]/c,_[R]);else{A.multiDrawElementsWEBGL(i,_,0,o,m,0,M);let R=0;for(let v=0;v<M;v++)R+=_[v];t.update(R,i,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=p}function bb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(o/3);break;case s.LINES:t.lines+=u*(o/2);break;case s.LINE_STRIP:t.lines+=u*(o-1);break;case s.LINE_LOOP:t.lines+=u*o;break;case s.POINTS:t.points+=u*o;break;default:break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Tb(s,e,t){const i=new WeakMap,a=new rn;function o(c,u,f){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=i.get(u);if(_===void 0||_.count!==m){let C=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),A===!0&&(w=2),R===!0&&(w=3);let N=u.attributes.position.count*w,W=1;N>e.maxTextureSize&&(W=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*W*4*m),O=new Id(F,N,W,m);O.type=Ji,O.needsUpdate=!0;const Q=w*4;for(let b=0;b<m;b++){const K=v[b],se=g[b],H=U[b],te=N*W*4*b;for(let ae=0;ae<K.count;ae++){const ue=ae*Q;M===!0&&(a.fromBufferAttribute(K,ae),F[te+ue+0]=a.x,F[te+ue+1]=a.y,F[te+ue+2]=a.z,F[te+ue+3]=0),A===!0&&(a.fromBufferAttribute(se,ae),F[te+ue+4]=a.x,F[te+ue+5]=a.y,F[te+ue+6]=a.z,F[te+ue+7]=0),R===!0&&(a.fromBufferAttribute(H,ae),F[te+ue+8]=a.x,F[te+ue+9]=a.y,F[te+ue+10]=a.z,F[te+ue+11]=H.itemSize===4?a.w:1)}}_={count:m,texture:O,size:new xt(N,W)},i.set(u,_),u.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let R=0;R<d.length;R++)M+=d[R];const A=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",A),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:o}}function Ab(s,e,t,i){let a=new WeakMap;function o(f){const d=i.render.frame,p=f.geometry,m=e.get(f,p);if(a.get(m)!==d&&(e.update(m),a.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==d&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;a.get(_)!==d&&(_.update(),a.set(_,d))}return m}function c(){a=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}class Vd extends mn{constructor(e,t,i,a,o,c,u,f,d,p){if(p=p!==void 0?p:us,p!==us&&p!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===us&&(i=ps),i===void 0&&p===Xs&&(i=Ys),super(null,a,o,c,u,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:$n,this.minFilter=f!==void 0?f:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wd=new mn,Xd=new Vd(1,1);Xd.compareFunction=Cd;const $d=new Id,qd=new cS,Yd=new Hd,jf=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function _s(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=jf[a];if(o===void 0&&(o=new Float32Array(a),jf[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(o,u)}return o}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function To(s,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function wb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function Lb(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;id.set(i),s.uniformMatrix2fv(this.addr,!1,id),Zt(t,i)}}function Ib(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;nd.set(i),s.uniformMatrix3fv(this.addr,!1,nd),Zt(t,i)}}function Db(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;td.set(i),s.uniformMatrix4fv(this.addr,!1,td),Zt(t,i)}}function Ub(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function Ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function Fb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function zb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function Hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function kb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function Gb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);const o=this.type===s.SAMPLER_2D_SHADOW?Xd:Wd;t.setTexture2D(e||o,a)}function Vb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||qd,a)}function Wb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Yd,a)}function Xb(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||$d,a)}function $b(s){switch(s){case 5126:return wb;case 35664:return Rb;case 35665:return Cb;case 35666:return Pb;case 35674:return Lb;case 35675:return Ib;case 35676:return Db;case 5124:case 35670:return Ub;case 35667:case 35671:return Nb;case 35668:case 35672:return Ob;case 35669:case 35673:return Fb;case 5125:return zb;case 36294:return Bb;case 36295:return Hb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Xb}}function qb(s,e){s.uniform1fv(this.addr,e)}function Yb(s,e){const t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function Kb(s,e){const t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function Zb(s,e){const t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function Jb(s,e){const t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qb(s,e){const t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jb(s,e){const t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eT(s,e){s.uniform1iv(this.addr,e)}function tT(s,e){s.uniform2iv(this.addr,e)}function nT(s,e){s.uniform3iv(this.addr,e)}function iT(s,e){s.uniform4iv(this.addr,e)}function rT(s,e){s.uniform1uiv(this.addr,e)}function sT(s,e){s.uniform2uiv(this.addr,e)}function aT(s,e){s.uniform3uiv(this.addr,e)}function oT(s,e){s.uniform4uiv(this.addr,e)}function lT(s,e,t){const i=this.cache,a=e.length,o=To(t,a);Kt(i,o)||(s.uniform1iv(this.addr,o),Zt(i,o));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Wd,o[c])}function cT(s,e,t){const i=this.cache,a=e.length,o=To(t,a);Kt(i,o)||(s.uniform1iv(this.addr,o),Zt(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||qd,o[c])}function uT(s,e,t){const i=this.cache,a=e.length,o=To(t,a);Kt(i,o)||(s.uniform1iv(this.addr,o),Zt(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Yd,o[c])}function hT(s,e,t){const i=this.cache,a=e.length,o=To(t,a);Kt(i,o)||(s.uniform1iv(this.addr,o),Zt(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||$d,o[c])}function fT(s){switch(s){case 5126:return qb;case 35664:return Yb;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return jb;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return aT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return hT}}class dT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$b(t.type)}}class pT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fT(t.type)}}class mT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function rd(s,e){s.seq.push(e),s.map[e.id]=e}function gT(s,e,t){const i=s.name,a=i.length;for(mc.lastIndex=0;;){const o=mc.exec(i),c=mc.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===a){rd(t,d===void 0?new dT(u,s,e):new pT(u,s,e));break}else{let m=t.map[u];m===void 0&&(m=new mT(u),rd(t,m)),t=m}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);gT(o,c,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function sd(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const _T=37297;let vT=0;function xT(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function MT(s){const e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(s);let i;switch(e===t?i="":e===Mo&&t===xo?i="LinearDisplayP3ToLinearSRGB":e===xo&&t===Mo&&(i="LinearSRGBToLinearDisplayP3"),s){case nr:case Eo:return[i,"LinearTransferOETF"];case ai:case wc:return[i,"sRGBTransferOETF"];default:return[i,"LinearTransferOETF"]}}function ad(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+xT(s.getShaderSource(e),c)}else return a}function ST(s,e){const t=MT(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yT(s,e){let t;switch(e){case AM:t="Linear";break;case wM:t="Reinhard";break;case RM:t="OptimizedCineon";break;case CM:t="ACESFilmic";break;case LM:t="AgX";break;case IM:t="Neutral";break;case PM:t="Custom";break;default:t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ET(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function bT(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TT(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),c=o.name;let u=1;o.type===s.FLOAT_MAT2&&(u=2),o.type===s.FLOAT_MAT3&&(u=3),o.type===s.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function Ws(s){return s!==""}function od(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(s){return s.replace(AT,RT)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RT(s,e){let t=rt[e];if(t===void 0){const i=wT.get(e);if(i!==void 0)t=rt[i];else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(s){return s.replace(CT,PT)}function PT(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function ud(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function IT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function UT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xd:e="ENVMAP_BLENDING_MULTIPLY";break;case bM:e="ENVMAP_BLENDING_MIX";break;case TM:e="ENVMAP_BLENDING_ADD";break}return e}function NT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OT(s,e,t,i){const a=s.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=LT(t),d=IT(t),p=DT(t),m=UT(t),_=NT(t),M=ET(t),A=bT(o),R=a.createProgram();let v,g,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ws).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ws).join(`
`),g.length>0&&(g+=`
`)):(v=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?rt.tonemapping_pars_fragment:"",t.toneMapping!==ji?yT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,ST("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),c=Tc(c),c=od(c,t),c=ld(c,t),u=Tc(u),u=od(u,t),u=ld(u,t),c=cd(c),u=cd(u),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=U+v+c,N=U+g+u,W=sd(a,a.VERTEX_SHADER,w),F=sd(a,a.FRAGMENT_SHADER,N);a.attachShader(R,W),a.attachShader(R,F),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function O(K){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(R).trim(),H=a.getShaderInfoLog(W).trim(),te=a.getShaderInfoLog(F).trim();let ae=!0,ue=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,W,F);else{const xe=ad(a,W,"vertex"),Z=ad(a,F,"fragment")}else se!==""||(H===""||te==="")&&(ue=!1);ue&&(K.diagnostics={runnable:ae,programLog:se,vertexShader:{log:H,prefix:v},fragmentShader:{log:te,prefix:g}})}a.deleteShader(W),a.deleteShader(F),Q=new po(a,R),C=TT(a,R)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(R,_T)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=W,this.fragmentShader=F,this}let FT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BT(e),t.set(e,i)),i}}class BT{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}}function HT(s,e,t,i,a,o,c){const u=new Dd,f=new zT,d=new Set,p=[],m=a.logarithmicDepthBuffer,_=a.vertexTextures;let M=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return d.add(C),C===0?"uv":`uv${C}`}function v(C,b,K,se,H){const te=se.fog,ae=H.geometry,ue=C.isMeshStandardMaterial?se.environment:null,xe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ue),Z=xe&&xe.mapping===yo?xe.image.height:null,pe=A[C.type];C.precision!==null&&(M=a.getMaxPrecision(C.precision),C.precision);const he=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ae=he!==void 0?he.length:0;let ct=0;ae.morphAttributes.position!==void 0&&(ct=1),ae.morphAttributes.normal!==void 0&&(ct=2),ae.morphAttributes.color!==void 0&&(ct=3);let Et,ee,fe,we;if(pe){const Jt=oi[pe];Et=Jt.vertexShader,ee=Jt.fragmentShader}else Et=C.vertexShader,ee=C.fragmentShader,f.update(C),fe=f.getVertexShaderID(C),we=f.getFragmentShaderID(C);const Ee=s.getRenderTarget(),$e=H.isInstancedMesh===!0,Ke=H.isBatchedMesh===!0,dt=!!C.map,G=!!C.matcap,tt=!!xe,Ve=!!C.aoMap,_t=!!C.lightMap,Ge=!!C.bumpMap,St=!!C.normalMap,P=!!C.displacementMap,y=!!C.emissiveMap,J=!!C.metalnessMap,re=!!C.roughnessMap,le=C.anisotropy>0,ce=C.clearcoat>0,Fe=C.iridescence>0,de=C.sheen>0,Le=C.transmission>0,We=le&&!!C.anisotropyMap,me=ce&&!!C.clearcoatMap,be=ce&&!!C.clearcoatNormalMap,qe=ce&&!!C.clearcoatRoughnessMap,Re=Fe&&!!C.iridescenceMap,Ce=Fe&&!!C.iridescenceThicknessMap,ot=de&&!!C.sheenColorMap,ut=de&&!!C.sheenRoughnessMap,gt=!!C.specularMap,mt=!!C.specularColorMap,bt=!!C.specularIntensityMap,Ie=Le&&!!C.transmissionMap,I=Le&&!!C.thicknessMap,ve=!!C.gradientMap,ge=!!C.alphaMap,Ue=C.alphaTest>0,Ne=!!C.alphaHash,Tt=!!C.extensions;let Pt=ji;C.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Pt=s.toneMapping);const Dt={shaderID:pe,shaderType:C.type,shaderName:C.name,vertexShader:Et,fragmentShader:ee,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:we,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ke,instancing:$e,instancingColor:$e&&H.instanceColor!==null,instancingMorph:$e&&H.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:nr,alphaToCoverage:!!C.alphaToCoverage,map:dt,matcap:G,envMap:tt,envMapMode:tt&&xe.mapping,envMapCubeUVHeight:Z,aoMap:Ve,lightMap:_t,bumpMap:Ge,normalMap:St,displacementMap:_&&P,emissiveMap:y,normalMapObjectSpace:St&&C.normalMapType===qM,normalMapTangentSpace:St&&C.normalMapType===$M,metalnessMap:J,roughnessMap:re,anisotropy:le,anisotropyMap:We,clearcoat:ce,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:qe,iridescence:Fe,iridescenceMap:Re,iridescenceThicknessMap:Ce,sheen:de,sheenColorMap:ot,sheenRoughnessMap:ut,specularMap:gt,specularColorMap:mt,specularIntensityMap:bt,transmission:Le,transmissionMap:Ie,thicknessMap:I,gradientMap:ve,opaque:C.transparent===!1&&C.blending===cs&&C.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ue,alphaHash:Ne,combine:C.combine,mapUv:dt&&R(C.map.channel),aoMapUv:Ve&&R(C.aoMap.channel),lightMapUv:_t&&R(C.lightMap.channel),bumpMapUv:Ge&&R(C.bumpMap.channel),normalMapUv:St&&R(C.normalMap.channel),displacementMapUv:P&&R(C.displacementMap.channel),emissiveMapUv:y&&R(C.emissiveMap.channel),metalnessMapUv:J&&R(C.metalnessMap.channel),roughnessMapUv:re&&R(C.roughnessMap.channel),anisotropyMapUv:We&&R(C.anisotropyMap.channel),clearcoatMapUv:me&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:be&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:ut&&R(C.sheenRoughnessMap.channel),specularMapUv:gt&&R(C.specularMap.channel),specularColorMapUv:mt&&R(C.specularColorMap.channel),specularIntensityMapUv:bt&&R(C.specularIntensityMap.channel),transmissionMapUv:Ie&&R(C.transmissionMap.channel),thicknessMapUv:I&&R(C.thicknessMap.channel),alphaMapUv:ge&&R(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(St||le),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(dt||ge),fog:!!te,useFog:C.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:dt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Ot,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ci,flipSided:C.side===yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Tt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Tt&&C.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function g(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const K in C.defines)b.push(K),b.push(C.defines[K]);return C.isRawShaderMaterial===!1&&(U(b,C),w(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function U(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function w(C,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),C.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.skinning&&u.enable(4),b.morphTargets&&u.enable(5),b.morphNormals&&u.enable(6),b.morphColors&&u.enable(7),b.premultipliedAlpha&&u.enable(8),b.shadowMapEnabled&&u.enable(9),b.useLegacyLights&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.alphaToCoverage&&u.enable(20),C.push(u.mask)}function N(C){const b=A[C.type];let K;if(b){const se=oi[b];K=yS.clone(se.uniforms)}else K=C.uniforms;return K}function W(C,b){let K;for(let se=0,H=p.length;se<H;se++){const te=p[se];if(te.cacheKey===b){K=te,++K.usedTimes;break}}return K===void 0&&(K=new OT(s,b,C,o),p.push(K)),K}function F(C){if(--C.usedTimes===0){const b=p.indexOf(C);p[b]=p[p.length-1],p.pop(),C.destroy()}}function O(C){f.remove(C)}function Q(){f.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:N,acquireProgram:W,releaseProgram:F,releaseShaderCache:O,programs:p,dispose:Q}}function kT(){let s=new WeakMap;function e(o){let c=s.get(o);return c===void 0&&(c={},s.set(o,c)),c}function t(o){s.delete(o)}function i(o,c,u){s.get(o)[c]=u}function a(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function GT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fd(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(m,_,M,A,R,v){let g=s[e];return g===void 0?(g={id:m.id,object:m,geometry:_,material:M,groupOrder:A,renderOrder:m.renderOrder,z:R,group:v},s[e]=g):(g.id=m.id,g.object=m,g.geometry=_,g.material=M,g.groupOrder=A,g.renderOrder=m.renderOrder,g.z=R,g.group=v),e++,g}function u(m,_,M,A,R,v){const g=c(m,_,M,A,R,v);M.transmission>0?i.push(g):M.transparent===!0?a.push(g):t.push(g)}function f(m,_,M,A,R,v){const g=c(m,_,M,A,R,v);M.transmission>0?i.unshift(g):M.transparent===!0?a.unshift(g):t.unshift(g)}function d(m,_){t.length>1&&t.sort(m||GT),i.length>1&&i.sort(_||hd),a.length>1&&a.sort(_||hd)}function p(){for(let m=e,_=s.length;m<_;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:u,unshift:f,finish:p,sort:d}}function VT(){let s=new WeakMap;function e(i,a){const o=s.get(i);let c;return o===void 0?(c=new fd,s.set(i,[c])):a>=o.length?(c=new fd,o.push(c)):c=o[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function WT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Rt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function XT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $T=0;function qT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YT(s){const e=new WT,t=XT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Y);const a=new Y,o=new Yt,c=new Yt;function u(d,p){let m=0,_=0,M=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let A=0,R=0,v=0,g=0,U=0,w=0,N=0,W=0,F=0,O=0,Q=0;d.sort(qT);const C=p===!0?Math.PI:1;for(let K=0,se=d.length;K<se;K++){const H=d[K],te=H.color,ae=H.intensity,ue=H.distance,xe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=te.r*ae*C,_+=te.g*ae*C,M+=te.b*ae*C;else if(H.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(H.sh.coefficients[Z],ae);Q++}else if(H.isDirectionalLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*C),H.castShadow){const pe=H.shadow,he=t.get(H);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,i.directionalShadow[A]=he,i.directionalShadowMap[A]=xe,i.directionalShadowMatrix[A]=H.shadow.matrix,w++}i.directional[A]=Z,A++}else if(H.isSpotLight){const Z=e.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(te).multiplyScalar(ae*C),Z.distance=ue,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,i.spot[v]=Z;const pe=H.shadow;if(H.map&&(i.spotLightMap[F]=H.map,F++,pe.updateMatrices(H),H.castShadow&&O++),i.spotLightMatrix[v]=pe.matrix,H.castShadow){const he=t.get(H);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,i.spotShadow[v]=he,i.spotShadowMap[v]=xe,W++}v++}else if(H.isRectAreaLight){const Z=e.get(H);Z.color.copy(te).multiplyScalar(ae),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),i.rectArea[g]=Z,g++}else if(H.isPointLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*C),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const pe=H.shadow,he=t.get(H);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,he.shadowCameraNear=pe.camera.near,he.shadowCameraFar=pe.camera.far,i.pointShadow[R]=he,i.pointShadowMap[R]=xe,i.pointShadowMatrix[R]=H.shadow.matrix,N++}i.point[R]=Z,R++}else if(H.isHemisphereLight){const Z=e.get(H);Z.skyColor.copy(H.color).multiplyScalar(ae*C),Z.groundColor.copy(H.groundColor).multiplyScalar(ae*C),i.hemi[U]=Z,U++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=M;const b=i.hash;(b.directionalLength!==A||b.pointLength!==R||b.spotLength!==v||b.rectAreaLength!==g||b.hemiLength!==U||b.numDirectionalShadows!==w||b.numPointShadows!==N||b.numSpotShadows!==W||b.numSpotMaps!==F||b.numLightProbes!==Q)&&(i.directional.length=A,i.spot.length=v,i.rectArea.length=g,i.point.length=R,i.hemi.length=U,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=W,i.spotShadowMap.length=W,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=W+F-O,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=Q,b.directionalLength=A,b.pointLength=R,b.spotLength=v,b.rectAreaLength=g,b.hemiLength=U,b.numDirectionalShadows=w,b.numPointShadows=N,b.numSpotShadows=W,b.numSpotMaps=F,b.numLightProbes=Q,i.version=$T++)}function f(d,p){let m=0,_=0,M=0,A=0,R=0;const v=p.matrixWorldInverse;for(let g=0,U=d.length;g<U;g++){const w=d[g];if(w.isDirectionalLight){const N=i.directional[m];N.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(v),m++}else if(w.isSpotLight){const N=i.spot[M];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(v),M++}else if(w.isRectAreaLight){const N=i.rectArea[A];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(v),c.identity(),o.copy(w.matrixWorld),o.premultiply(v),c.extractRotation(o),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),A++}else if(w.isPointLight){const N=i.point[_];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(v),_++}else if(w.isHemisphereLight){const N=i.hemi[R];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(v),R++}}}return{setup:u,setupView:f,state:i}}function dd(s){const e=new YT(s),t=[],i=[];function a(){t.length=0,i.length=0}function o(p){t.push(p)}function c(p){i.push(p)}function u(p){e.setup(t,p)}function f(p){e.setupView(t,p)}return{init:a,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:u,setupLightsView:f,pushLight:o,pushShadow:c}}function KT(s){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new dd(s),e.set(a,[u])):o>=c.length?(u=new dd(s),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class ZT extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JT extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eA(s,e,t){let i=new kd;const a=new xt,o=new xt,c=new rn,u=new ZT({depthPacking:XM}),f=new JT,d={},p=t.maxTextureSize,m={[tr]:yn,[yn]:tr,[ci]:ci},_=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:QT,fragmentShader:jT}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ar;A.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fi(A,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let g=this.type;this.render=function(F,O,Q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Qi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const H=g!==Ci&&this.type===Ci,te=g===Ci&&this.type!==Ci;for(let ae=0,ue=F.length;ae<ue;ae++){const xe=F[ae],Z=xe.shadow;if(Z===void 0||Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;a.copy(Z.mapSize);const pe=Z.getFrameExtents();if(a.multiply(pe),o.copy(Z.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/pe.x),a.x=o.x*pe.x,Z.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/pe.y),a.y=o.y*pe.y,Z.mapSize.y=o.y)),Z.map===null||H===!0||te===!0){const Ae=this.type!==Ci?{minFilter:$n,magFilter:$n}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Tr(a.x,a.y,Ae),Z.map.texture.name=xe.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const he=Z.getViewportCount();for(let Ae=0;Ae<he;Ae++){const ct=Z.getViewport(Ae);c.set(o.x*ct.x,o.y*ct.y,o.x*ct.z,o.y*ct.w),se.viewport(c),Z.updateMatrices(xe,Ae),i=Z.getFrustum(),N(O,Q,Z.camera,xe,this.type)}Z.isPointLightShadow!==!0&&this.type===Ci&&U(Z,Q),Z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(C,b,K)};function U(F,O){const Q=e.update(R);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Tr(a.x,a.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,Q,_,R,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,Q,M,R,null)}function w(F,O,Q,C){let b=null;const K=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(K!==void 0)b=K;else if(b=Q.isPointLight===!0?f:u,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const se=b.uuid,H=O.uuid;let te=d[se];te===void 0&&(te={},d[se]=te);let ae=te[H];ae===void 0&&(ae=b.clone(),te[H]=ae,O.addEventListener("dispose",W)),b=ae}if(b.visible=O.visible,b.wireframe=O.wireframe,C===Ci?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:m[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,Q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const se=s.properties.get(b);se.light=Q}return b}function N(F,O,Q,C,b){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===Ci)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);const H=e.update(F),te=F.material;if(Array.isArray(te)){const ae=H.groups;for(let ue=0,xe=ae.length;ue<xe;ue++){const Z=ae[ue],pe=te[Z.materialIndex];if(pe&&pe.visible){const he=w(F,pe,C,b);F.onBeforeShadow(s,F,O,Q,H,he,Z),s.renderBufferDirect(Q,null,H,he,F,Z),F.onAfterShadow(s,F,O,Q,H,he,Z)}}}else if(te.visible){const ae=w(F,te,C,b);F.onBeforeShadow(s,F,O,Q,H,ae,null),s.renderBufferDirect(Q,null,H,ae,F,null),F.onAfterShadow(s,F,O,Q,H,ae,null)}}const se=F.children;for(let H=0,te=se.length;H<te;H++)N(se[H],O,Q,C,b)}function W(F){F.target.removeEventListener("dispose",W);for(const Q in d){const C=d[Q],b=F.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function tA(s){function e(){let I=!1;const ve=new rn;let ge=null;const Ue=new rn(0,0,0,0);return{setMask:function(Ne){ge!==Ne&&!I&&(s.colorMask(Ne,Ne,Ne,Ne),ge=Ne)},setLocked:function(Ne){I=Ne},setClear:function(Ne,Tt,Pt,Dt,Jt){Jt===!0&&(Ne*=Dt,Tt*=Dt,Pt*=Dt),ve.set(Ne,Tt,Pt,Dt),Ue.equals(ve)===!1&&(s.clearColor(Ne,Tt,Pt,Dt),Ue.copy(ve))},reset:function(){I=!1,ge=null,Ue.set(-1,0,0,0)}}}function t(){let I=!1,ve=null,ge=null,Ue=null;return{setTest:function(Ne){Ne?we(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Ne){ve!==Ne&&!I&&(s.depthMask(Ne),ve=Ne)},setFunc:function(Ne){if(ge!==Ne){switch(Ne){case _M:s.depthFunc(s.NEVER);break;case vM:s.depthFunc(s.ALWAYS);break;case xM:s.depthFunc(s.LESS);break;case go:s.depthFunc(s.LEQUAL);break;case MM:s.depthFunc(s.EQUAL);break;case SM:s.depthFunc(s.GEQUAL);break;case yM:s.depthFunc(s.GREATER);break;case EM:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ne}},setLocked:function(Ne){I=Ne},setClear:function(Ne){Ue!==Ne&&(s.clearDepth(Ne),Ue=Ne)},reset:function(){I=!1,ve=null,ge=null,Ue=null}}}function i(){let I=!1,ve=null,ge=null,Ue=null,Ne=null,Tt=null,Pt=null,Dt=null,Jt=null;return{setTest:function(At){I||(At?we(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(At){ve!==At&&!I&&(s.stencilMask(At),ve=At)},setFunc:function(At,Dn,Un){(ge!==At||Ue!==Dn||Ne!==Un)&&(s.stencilFunc(At,Dn,Un),ge=At,Ue=Dn,Ne=Un)},setOp:function(At,Dn,Un){(Tt!==At||Pt!==Dn||Dt!==Un)&&(s.stencilOp(At,Dn,Un),Tt=At,Pt=Dn,Dt=Un)},setLocked:function(At){I=At},setClear:function(At){Jt!==At&&(s.clearStencil(At),Jt=At)},reset:function(){I=!1,ve=null,ge=null,Ue=null,Ne=null,Tt=null,Pt=null,Dt=null,Jt=null}}}const a=new e,o=new t,c=new i,u=new WeakMap,f=new WeakMap;let d={},p={},m=new WeakMap,_=[],M=null,A=!1,R=null,v=null,g=null,U=null,w=null,N=null,W=null,F=new Rt(0,0,0),O=0,Q=!1,C=null,b=null,K=null,se=null,H=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ue=0;const xe=s.getParameter(s.VERSION);xe.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(xe)[1]),ae=ue>=1):xe.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),ae=ue>=2);let Z=null,pe={};const he=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),ct=new rn().fromArray(he),Et=new rn().fromArray(Ae);function ee(I,ve,ge,Ue){const Ne=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(I,Tt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<ge;Pt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(ve+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Tt}const fe={};fe[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),we(s.DEPTH_TEST),o.setFunc(go),Ge(!1),St(Yh),we(s.CULL_FACE),Ve(Qi);function we(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Ee(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function $e(I,ve){return p[I]!==ve?(s.bindFramebuffer(I,ve),p[I]=ve,I===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ve),I===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ke(I,ve){let ge=_,Ue=!1;if(I){ge=m.get(ve),ge===void 0&&(ge=[],m.set(ve,ge));const Ne=I.textures;if(ge.length!==Ne.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,Pt=Ne.length;Tt<Pt;Tt++)ge[Tt]=s.COLOR_ATTACHMENT0+Tt;ge.length=Ne.length,Ue=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ge)}function dt(I){return M!==I?(s.useProgram(I),M=I,!0):!1}const G={[Sr]:s.FUNC_ADD,[eM]:s.FUNC_SUBTRACT,[tM]:s.FUNC_REVERSE_SUBTRACT};G[nM]=s.MIN,G[iM]=s.MAX;const tt={[rM]:s.ZERO,[sM]:s.ONE,[aM]:s.SRC_COLOR,[vc]:s.SRC_ALPHA,[fM]:s.SRC_ALPHA_SATURATE,[uM]:s.DST_COLOR,[lM]:s.DST_ALPHA,[oM]:s.ONE_MINUS_SRC_COLOR,[xc]:s.ONE_MINUS_SRC_ALPHA,[hM]:s.ONE_MINUS_DST_COLOR,[cM]:s.ONE_MINUS_DST_ALPHA,[dM]:s.CONSTANT_COLOR,[pM]:s.ONE_MINUS_CONSTANT_COLOR,[mM]:s.CONSTANT_ALPHA,[gM]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(I,ve,ge,Ue,Ne,Tt,Pt,Dt,Jt,At){if(I===Qi){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(we(s.BLEND),A=!0),I!==jx){if(I!==R||At!==Q){if((v!==Sr||w!==Sr)&&(s.blendEquation(s.FUNC_ADD),v=Sr,w=Sr),At)switch(I){case cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kh:s.blendFunc(s.ONE,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:break}else switch(I){case cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:break}g=null,U=null,N=null,W=null,F.set(0,0,0),O=0,R=I,Q=At}return}Ne=Ne||ve,Tt=Tt||ge,Pt=Pt||Ue,(ve!==v||Ne!==w)&&(s.blendEquationSeparate(G[ve],G[Ne]),v=ve,w=Ne),(ge!==g||Ue!==U||Tt!==N||Pt!==W)&&(s.blendFuncSeparate(tt[ge],tt[Ue],tt[Tt],tt[Pt]),g=ge,U=Ue,N=Tt,W=Pt),(Dt.equals(F)===!1||Jt!==O)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Jt),F.copy(Dt),O=Jt),R=I,Q=!1}function _t(I,ve){I.side===ci?Ee(s.CULL_FACE):we(s.CULL_FACE);let ge=I.side===yn;ve&&(ge=!ge),Ge(ge),I.blending===cs&&I.transparent===!1?Ve(Qi):Ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ue=I.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),y(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){C!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),C=I)}function St(I){I!==Zx?(we(s.CULL_FACE),I!==b&&(I===Yh?s.cullFace(s.BACK):I===Jx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),b=I}function P(I){I!==K&&(ae&&s.lineWidth(I),K=I)}function y(I,ve,ge){I?(we(s.POLYGON_OFFSET_FILL),(se!==ve||H!==ge)&&(s.polygonOffset(ve,ge),se=ve,H=ge)):Ee(s.POLYGON_OFFSET_FILL)}function J(I){I?we(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function re(I){I===void 0&&(I=s.TEXTURE0+te-1),Z!==I&&(s.activeTexture(I),Z=I)}function le(I,ve,ge){ge===void 0&&(Z===null?ge=s.TEXTURE0+te-1:ge=Z);let Ue=pe[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},pe[ge]=Ue),(Ue.type!==I||Ue.texture!==ve)&&(Z!==ge&&(s.activeTexture(ge),Z=ge),s.bindTexture(I,ve||fe[I]),Ue.type=I,Ue.texture=ve)}function ce(){const I=pe[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch{}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch{}}function Le(){try{s.texSubImage2D.apply(s,arguments)}catch{}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch{}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch{}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch{}}function qe(){try{s.texStorage2D.apply(s,arguments)}catch{}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch{}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch{}}function ot(){try{s.texImage3D.apply(s,arguments)}catch{}}function ut(I){ct.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function gt(I){Et.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Et.copy(I))}function mt(I,ve){let ge=f.get(ve);ge===void 0&&(ge=new WeakMap,f.set(ve,ge));let Ue=ge.get(I);Ue===void 0&&(Ue=s.getUniformBlockIndex(ve,I.name),ge.set(I,Ue))}function bt(I,ve){const Ue=f.get(ve).get(I);u.get(ve)!==Ue&&(s.uniformBlockBinding(ve,Ue,I.__bindingPointIndex),u.set(ve,Ue))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,pe={},p={},m=new WeakMap,_=[],M=null,A=!1,R=null,v=null,g=null,U=null,w=null,N=null,W=null,F=new Rt(0,0,0),O=0,Q=!1,C=null,b=null,K=null,se=null,H=null,ct.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:we,disable:Ee,bindFramebuffer:$e,drawBuffers:Ke,useProgram:dt,setBlending:Ve,setMaterial:_t,setFlipSided:Ge,setCullFace:St,setLineWidth:P,setPolygonOffset:y,setScissorTest:J,activeTexture:re,bindTexture:le,unbindTexture:ce,compressedTexImage2D:Fe,compressedTexImage3D:de,texImage2D:Ce,texImage3D:ot,updateUBOMapping:mt,uniformBlockBinding:bt,texStorage2D:qe,texStorage3D:Re,texSubImage2D:Le,texSubImage3D:We,compressedTexSubImage2D:me,compressedTexSubImage3D:be,scissor:ut,viewport:gt,reset:Ie}}function nA(s,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new xt,p=new WeakMap;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,y){return M?new OffscreenCanvas(P,y):$s("canvas")}function R(P,y,J){let re=1;const le=St(P);if((le.width>J||le.height>J)&&(re=J/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(re*le.width),Fe=Math.floor(re*le.height);m===void 0&&(m=A(ce,Fe));const de=y?A(ce,Fe):m;return de.width=ce,de.height=Fe,de.getContext("2d").drawImage(P,0,0,ce,Fe),de}else return"data"in P,P;return P}function v(P){return P.generateMipmaps&&P.minFilter!==$n&&P.minFilter!==ti}function g(P){s.generateMipmap(P)}function U(P,y,J,re,le=!1){if(P!==null&&s[P]!==void 0)return s[P];let ce=y;if(y===s.RED&&(J===s.FLOAT&&(ce=s.R32F),J===s.HALF_FLOAT&&(ce=s.R16F),J===s.UNSIGNED_BYTE&&(ce=s.R8)),y===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.R8UI),J===s.UNSIGNED_SHORT&&(ce=s.R16UI),J===s.UNSIGNED_INT&&(ce=s.R32UI),J===s.BYTE&&(ce=s.R8I),J===s.SHORT&&(ce=s.R16I),J===s.INT&&(ce=s.R32I)),y===s.RG&&(J===s.FLOAT&&(ce=s.RG32F),J===s.HALF_FLOAT&&(ce=s.RG16F),J===s.UNSIGNED_BYTE&&(ce=s.RG8)),y===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RG8UI),J===s.UNSIGNED_SHORT&&(ce=s.RG16UI),J===s.UNSIGNED_INT&&(ce=s.RG32UI),J===s.BYTE&&(ce=s.RG8I),J===s.SHORT&&(ce=s.RG16I),J===s.INT&&(ce=s.RG32I)),y===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),y===s.RGBA){const Fe=le?vo:wt.getTransfer(re);J===s.FLOAT&&(ce=s.RGBA32F),J===s.HALF_FLOAT&&(ce=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ce=Fe===Ot?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(P,y){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==$n&&P.minFilter!==ti?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function N(P){const y=P.target;y.removeEventListener("dispose",N),F(y),y.isVideoTexture&&p.delete(y)}function W(P){const y=P.target;y.removeEventListener("dispose",W),Q(y)}function F(P){const y=i.get(P);if(y.__webglInit===void 0)return;const J=P.source,re=_.get(J);if(re){const le=re[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&O(P),Object.keys(re).length===0&&_.delete(J)}i.remove(P)}function O(P){const y=i.get(P);s.deleteTexture(y.__webglTexture);const J=P.source,re=_.get(J);delete re[y.__cacheKey],c.memory.textures--}function Q(P){const y=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let le=0;le<y.__webglFramebuffer[re].length;le++)s.deleteFramebuffer(y.__webglFramebuffer[re][le]);else s.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)s.deleteFramebuffer(y.__webglFramebuffer[re]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const J=P.textures;for(let re=0,le=J.length;re<le;re++){const ce=i.get(J[re]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),i.remove(J[re])}i.remove(P)}let C=0;function b(){C=0}function K(){const P=C;return P>=a.maxTextures,C+=1,P}function se(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function H(P,y){const J=i.get(P);if(P.isVideoTexture&&_t(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const re=P.image;if(re!==null){if(re.complete!==!1){ct(J,P,y);return}}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+y)}function te(P,y){const J=i.get(P);if(P.version>0&&J.__version!==P.version){ct(J,P,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+y)}function ae(P,y){const J=i.get(P);if(P.version>0&&J.__version!==P.version){ct(J,P,y);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+y)}function ue(P,y){const J=i.get(P);if(P.version>0&&J.__version!==P.version){Et(J,P,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+y)}const xe={[yc]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[Ec]:s.MIRRORED_REPEAT},Z={[$n]:s.NEAREST,[DM]:s.NEAREST_MIPMAP_NEAREST,[Wa]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[zl]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},pe={[YM]:s.NEVER,[eS]:s.ALWAYS,[KM]:s.LESS,[Cd]:s.LEQUAL,[ZM]:s.EQUAL,[jM]:s.GEQUAL,[JM]:s.GREATER,[QM]:s.NOTEQUAL};function he(P,y){if(y.type===Ji&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ti||y.magFilter===zl||y.magFilter===Wa||y.magFilter===Er||y.minFilter===ti||y.minFilter===zl||y.minFilter===Wa||y.minFilter),s.texParameteri(P,s.TEXTURE_WRAP_S,xe[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,xe[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,xe[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Z[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Z[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$n||y.minFilter!==Wa&&y.minFilter!==Er||y.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ae(P,y){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",N));const re=y.source;let le=_.get(re);le===void 0&&(le={},_.set(re,le));const ce=se(y);if(ce!==P.__cacheKey){le[ce]===void 0&&(le[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),le[ce].usedTimes++;const Fe=le[P.__cacheKey];Fe!==void 0&&(le[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&O(y)),P.__cacheKey=ce,P.__webglTexture=le[ce].texture}return J}function ct(P,y,J){let re=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=s.TEXTURE_3D);const le=Ae(P,y),ce=y.source;t.bindTexture(re,P.__webglTexture,s.TEXTURE0+J);const Fe=i.get(ce);if(ce.version!==Fe.__version||le===!0){t.activeTexture(s.TEXTURE0+J);const de=wt.getPrimaries(wt.workingColorSpace),Le=y.colorSpace===Zi?null:wt.getPrimaries(y.colorSpace),We=y.colorSpace===Zi||de===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let me=R(y.image,!1,a.maxTextureSize);me=Ge(y,me);const be=o.convert(y.format,y.colorSpace),qe=o.convert(y.type);let Re=U(y.internalFormat,be,qe,y.colorSpace,y.isVideoTexture);he(re,y);let Ce;const ot=y.mipmaps,ut=y.isVideoTexture!==!0&&Re!==Rd,gt=Fe.__version===void 0||le===!0,mt=ce.dataReady,bt=w(y,me);if(y.isDepthTexture)Re=s.DEPTH_COMPONENT16,y.type===Ji?Re=s.DEPTH_COMPONENT32F:y.type===ps?Re=s.DEPTH_COMPONENT24:y.type===Ys&&(Re=s.DEPTH24_STENCIL8),gt&&(ut?t.texStorage2D(s.TEXTURE_2D,1,Re,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Re,me.width,me.height,0,be,qe,null));else if(y.isDataTexture)if(ot.length>0){ut&&gt&&t.texStorage2D(s.TEXTURE_2D,bt,Re,ot[0].width,ot[0].height);for(let Ie=0,I=ot.length;Ie<I;Ie++)Ce=ot[Ie],ut?mt&&t.texSubImage2D(s.TEXTURE_2D,Ie,0,0,Ce.width,Ce.height,be,qe,Ce.data):t.texImage2D(s.TEXTURE_2D,Ie,Re,Ce.width,Ce.height,0,be,qe,Ce.data);y.generateMipmaps=!1}else ut?(gt&&t.texStorage2D(s.TEXTURE_2D,bt,Re,me.width,me.height),mt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,be,qe,me.data)):t.texImage2D(s.TEXTURE_2D,0,Re,me.width,me.height,0,be,qe,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ut&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Re,ot[0].width,ot[0].height,me.depth);for(let Ie=0,I=ot.length;Ie<I;Ie++)Ce=ot[Ie],y.format!==hi?be!==null&&(ut?mt&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ie,0,0,0,Ce.width,Ce.height,me.depth,be,Ce.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ie,Re,Ce.width,Ce.height,me.depth,0,Ce.data,0,0)):ut?mt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ie,0,0,0,Ce.width,Ce.height,me.depth,be,qe,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ie,Re,Ce.width,Ce.height,me.depth,0,be,qe,Ce.data)}else{ut&&gt&&t.texStorage2D(s.TEXTURE_2D,bt,Re,ot[0].width,ot[0].height);for(let Ie=0,I=ot.length;Ie<I;Ie++)Ce=ot[Ie],y.format!==hi?be!==null&&(ut?mt&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ie,0,0,Ce.width,Ce.height,be,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,Ie,Re,Ce.width,Ce.height,0,Ce.data)):ut?mt&&t.texSubImage2D(s.TEXTURE_2D,Ie,0,0,Ce.width,Ce.height,be,qe,Ce.data):t.texImage2D(s.TEXTURE_2D,Ie,Re,Ce.width,Ce.height,0,be,qe,Ce.data)}else if(y.isDataArrayTexture)ut?(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Re,me.width,me.height,me.depth),mt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,be,qe,me.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,me.width,me.height,me.depth,0,be,qe,me.data);else if(y.isData3DTexture)ut?(gt&&t.texStorage3D(s.TEXTURE_3D,bt,Re,me.width,me.height,me.depth),mt&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,be,qe,me.data)):t.texImage3D(s.TEXTURE_3D,0,Re,me.width,me.height,me.depth,0,be,qe,me.data);else if(y.isFramebufferTexture){if(gt)if(ut)t.texStorage2D(s.TEXTURE_2D,bt,Re,me.width,me.height);else{let Ie=me.width,I=me.height;for(let ve=0;ve<bt;ve++)t.texImage2D(s.TEXTURE_2D,ve,Re,Ie,I,0,be,qe,null),Ie>>=1,I>>=1}}else if(ot.length>0){if(ut&&gt){const Ie=St(ot[0]);t.texStorage2D(s.TEXTURE_2D,bt,Re,Ie.width,Ie.height)}for(let Ie=0,I=ot.length;Ie<I;Ie++)Ce=ot[Ie],ut?mt&&t.texSubImage2D(s.TEXTURE_2D,Ie,0,0,be,qe,Ce):t.texImage2D(s.TEXTURE_2D,Ie,Re,be,qe,Ce);y.generateMipmaps=!1}else if(ut){if(gt){const Ie=St(me);t.texStorage2D(s.TEXTURE_2D,bt,Re,Ie.width,Ie.height)}mt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,qe,me)}else t.texImage2D(s.TEXTURE_2D,0,Re,be,qe,me);v(y)&&g(re),Fe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Et(P,y,J){if(y.image.length!==6)return;const re=Ae(P,y),le=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const ce=i.get(le);if(le.version!==ce.__version||re===!0){t.activeTexture(s.TEXTURE0+J);const Fe=wt.getPrimaries(wt.workingColorSpace),de=y.colorSpace===Zi?null:wt.getPrimaries(y.colorSpace),Le=y.colorSpace===Zi||Fe===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,be=[];for(let I=0;I<6;I++)!We&&!me?be[I]=R(y.image[I],!0,a.maxCubemapSize):be[I]=me?y.image[I].image:y.image[I],be[I]=Ge(y,be[I]);const qe=be[0],Re=o.convert(y.format,y.colorSpace),Ce=o.convert(y.type),ot=U(y.internalFormat,Re,Ce,y.colorSpace),ut=y.isVideoTexture!==!0,gt=ce.__version===void 0||re===!0,mt=le.dataReady;let bt=w(y,qe);he(s.TEXTURE_CUBE_MAP,y);let Ie;if(We){ut&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,bt,ot,qe.width,qe.height);for(let I=0;I<6;I++){Ie=be[I].mipmaps;for(let ve=0;ve<Ie.length;ve++){const ge=Ie[ve];y.format!==hi?Re!==null&&(ut?mt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve,ot,ge.width,ge.height,0,ge.data)):ut?mt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve,0,0,ge.width,ge.height,Re,Ce,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve,ot,ge.width,ge.height,0,Re,Ce,ge.data)}}}else{if(Ie=y.mipmaps,ut&&gt){Ie.length>0&&bt++;const I=St(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,bt,ot,I.width,I.height)}for(let I=0;I<6;I++)if(me){ut?mt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,be[I].width,be[I].height,Re,Ce,be[I].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,ot,be[I].width,be[I].height,0,Re,Ce,be[I].data);for(let ve=0;ve<Ie.length;ve++){const Ue=Ie[ve].image[I].image;ut?mt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve+1,0,0,Ue.width,Ue.height,Re,Ce,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve+1,ot,Ue.width,Ue.height,0,Re,Ce,Ue.data)}}else{ut?mt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Re,Ce,be[I]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,ot,Re,Ce,be[I]);for(let ve=0;ve<Ie.length;ve++){const ge=Ie[ve];ut?mt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve+1,0,0,Re,Ce,ge.image[I]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve+1,ot,Re,Ce,ge.image[I])}}}v(y)&&g(s.TEXTURE_CUBE_MAP),ce.__version=le.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ee(P,y,J,re,le,ce){const Fe=o.convert(J.format,J.colorSpace),de=o.convert(J.type),Le=U(J.internalFormat,Fe,de,J.colorSpace);if(!i.get(y).__hasExternalTextures){const me=Math.max(1,y.width>>ce),be=Math.max(1,y.height>>ce);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,ce,Le,me,be,y.depth,0,Fe,de,null):t.texImage2D(le,ce,Le,me,be,0,Fe,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ve(y)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,le,i.get(J).__webglTexture,0,tt(y)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,le,i.get(J).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,y,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer&&!y.stencilBuffer){let re=s.DEPTH_COMPONENT24;if(J||Ve(y)){const le=y.depthTexture;le&&le.isDepthTexture&&(le.type===Ji?re=s.DEPTH_COMPONENT32F:le.type===ps&&(re=s.DEPTH_COMPONENT24));const ce=tt(y);Ve(y)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,re,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,re,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(y.depthBuffer&&y.stencilBuffer){const re=tt(y);J&&Ve(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,y.width,y.height):Ve(y)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const re=y.textures;for(let le=0;le<re.length;le++){const ce=re[le],Fe=o.convert(ce.format,ce.colorSpace),de=o.convert(ce.type),Le=U(ce.internalFormat,Fe,de,ce.colorSpace),We=tt(y);J&&Ve(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Le,y.width,y.height):Ve(y)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Le,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Le,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const re=i.get(y.depthTexture).__webglTexture,le=tt(y);if(y.depthTexture.format===us)Ve(y)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(y.depthTexture.format===Xs)Ve(y)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const y=i.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(y.__webglFramebuffer,P)}else if(J){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]=s.createRenderbuffer(),fe(y.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),fe(y.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(P,y,J){const re=i.get(P);y!==void 0&&ee(re.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ee(P)}function Ke(P){const y=P.texture,J=i.get(P),re=i.get(y);P.addEventListener("dispose",W);const le=P.textures,ce=P.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=y.version,c.memory.textures++),ce){J.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[de]=[];for(let Le=0;Le<y.mipmaps.length;Le++)J.__webglFramebuffer[de][Le]=s.createFramebuffer()}else J.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)J.__webglFramebuffer[de]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let de=0,Le=le.length;de<Le;de++){const We=i.get(le[de]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&Ve(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Le=le[de];J.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[de]);const We=o.convert(Le.format,Le.colorSpace),me=o.convert(Le.type),be=U(Le.internalFormat,We,me,Le.colorSpace,P.isXRRenderTarget===!0),qe=tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,be,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,J.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),he(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)ee(J.__webglFramebuffer[de][Le],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le);else ee(J.__webglFramebuffer[de],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(y)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let de=0,Le=le.length;de<Le;de++){const We=le[de],me=i.get(We);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),he(s.TEXTURE_2D,We),ee(J.__webglFramebuffer,P,We,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),v(We)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),he(de,y),y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)ee(J.__webglFramebuffer[Le],P,y,s.COLOR_ATTACHMENT0,de,Le);else ee(J.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,de,0);v(y)&&g(de),t.unbindTexture()}P.depthBuffer&&Ee(P)}function dt(P){const y=P.textures;for(let J=0,re=y.length;J<re;J++){const le=y[J];if(v(le)){const ce=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Fe=i.get(le).__webglTexture;t.bindTexture(ce,Fe),g(ce),t.unbindTexture()}}}function G(P){if(P.samples>0&&Ve(P)===!1){const y=P.textures,J=P.width,re=P.height;let le=s.COLOR_BUFFER_BIT;const ce=[],Fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=i.get(P),Le=y.length>1;if(Le)for(let We=0;We<y.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let We=0;We<y.length;We++){ce.push(s.COLOR_ATTACHMENT0+We),P.depthBuffer&&ce.push(Fe);const me=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(me===!1&&(P.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&de.__isTransmissionRenderTarget!==!0&&(le|=s.STENCIL_BUFFER_BIT)),Le&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[We]),me===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Fe])),Le){const be=i.get(y[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,J,re,0,0,J,re,le,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let We=0;We<y.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,de.__webglColorRenderbuffer[We]);const me=i.get(y[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function tt(P){return Math.min(a.maxSamples,P.samples)}function Ve(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(P){const y=c.render.frame;p.get(P)!==y&&(p.set(P,y),P.update())}function Ge(P,y){const J=P.colorSpace,re=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==nr&&J!==Zi&&wt.getTransfer(J),y}function St(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=te,this.setTexture3D=ae,this.setTextureCube=ue,this.rebindTextures=$e,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ve}function iA(s,e){function t(i,a=Zi){let o;const c=wt.getTransfer(a);if(i===er)return s.UNSIGNED_BYTE;if(i===Ed)return s.UNSIGNED_SHORT_4_4_4_4;if(i===bd)return s.UNSIGNED_SHORT_5_5_5_1;if(i===OM)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===UM)return s.BYTE;if(i===NM)return s.SHORT;if(i===Sd)return s.UNSIGNED_SHORT;if(i===yd)return s.INT;if(i===ps)return s.UNSIGNED_INT;if(i===Ji)return s.FLOAT;if(i===_o)return s.HALF_FLOAT;if(i===FM)return s.ALPHA;if(i===zM)return s.RGB;if(i===hi)return s.RGBA;if(i===BM)return s.LUMINANCE;if(i===HM)return s.LUMINANCE_ALPHA;if(i===us)return s.DEPTH_COMPONENT;if(i===Xs)return s.DEPTH_STENCIL;if(i===kM)return s.RED;if(i===Td)return s.RED_INTEGER;if(i===GM)return s.RG;if(i===Ad)return s.RG_INTEGER;if(i===wd)return s.RGBA_INTEGER;if(i===Bl||i===Hl||i===kl||i===Gl)if(c===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Bl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Bl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===jh||i===ef||i===tf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Qh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ef)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===nf||i===rf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===nf)return c===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===rf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===vf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===sf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===af)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===of)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ff)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===df)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_f)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===xf||i===Mf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Vl)return c===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===VM||i===Sf||i===yf||i===Ef)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Vl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Sf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ef)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class rA extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fo extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,i),g=this._getHandJoint(d,R);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),M=.02,A=.005;d.inputState.pinching&&_>M+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=M-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new mn,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,a=new Ii({vertexShader:aA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new js(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cA extends gs{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",f=1,d=null,p=null,m=null,_=null,M=null,A=null;const R=new lA,v=t.getContextAttributes();let g=null,U=null;const w=[],N=[],W=new xt;let F=null;const O=new Xn;O.layers.enable(1),O.viewport=new rn;const Q=new Xn;Q.layers.enable(2),Q.viewport=new rn;const C=[O,Q],b=new rA;b.layers.enable(1),b.layers.enable(2);let K=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=w[ee];return fe===void 0&&(fe=new gc,w[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=w[ee];return fe===void 0&&(fe=new gc,w[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=w[ee];return fe===void 0&&(fe=new gc,w[ee]=fe),fe.getHandSpace()};function H(ee){const fe=N.indexOf(ee.inputSource);if(fe===-1)return;const we=w[fe];we!==void 0&&(we.update(ee.inputSource,ee.frame,d||c),we.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",ae);for(let ee=0;ee<w.length;ee++){const fe=N[ee];fe!==null&&(N[ee]=null,w[ee].disconnect(fe))}K=null,se=null,R.reset(),e.setRenderTarget(g),M=null,_=null,m=null,a=null,U=null,Et.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(W.width,W.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting},this.setReferenceSpaceType=function(ee){u=ee,i.isPresenting},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return m},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",te),a.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0){const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Tr(M.framebufferWidth,M.framebufferHeight,{format:hi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,we=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?Xs:us,we=v.stencil?Ys:ps);const $e={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:o};m=new XRWebGLBinding(a,t),_=m.createProjectionLayer($e),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new Tr(_.textureWidth,_.textureHeight,{format:hi,type:er,depthTexture:new Vd(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ke=e.properties.get(U);Ke.__ignoreDepthValues=_.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await a.requestReferenceSpace(u),Et.setContext(a),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ae(ee){for(let fe=0;fe<ee.removed.length;fe++){const we=ee.removed[fe],Ee=N.indexOf(we);Ee>=0&&(N[Ee]=null,w[Ee].disconnect(we))}for(let fe=0;fe<ee.added.length;fe++){const we=ee.added[fe];let Ee=N.indexOf(we);if(Ee===-1){for(let Ke=0;Ke<w.length;Ke++)if(Ke>=N.length){N.push(we),Ee=Ke;break}else if(N[Ke]===null){N[Ke]=we,Ee=Ke;break}if(Ee===-1)break}const $e=w[Ee];$e&&$e.connect(we)}}const ue=new Y,xe=new Y;function Z(ee,fe,we){ue.setFromMatrixPosition(fe.matrixWorld),xe.setFromMatrixPosition(we.matrixWorld);const Ee=ue.distanceTo(xe),$e=fe.projectionMatrix.elements,Ke=we.projectionMatrix.elements,dt=$e[14]/($e[10]-1),G=$e[14]/($e[10]+1),tt=($e[9]+1)/$e[5],Ve=($e[9]-1)/$e[5],_t=($e[8]-1)/$e[0],Ge=(Ke[8]+1)/Ke[0],St=dt*_t,P=dt*Ge,y=Ee/(-_t+Ge),J=y*-_t;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(J),ee.translateZ(y),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const re=dt+y,le=G+y,ce=St-J,Fe=P+(Ee-J),de=tt*G/le*re,Le=Ve*G/le*re;ee.projectionMatrix.makePerspective(ce,Fe,de,Le,re,le),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function pe(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;R.texture!==null&&(ee.near=R.depthNear,ee.far=R.depthFar),b.near=Q.near=O.near=ee.near,b.far=Q.far=O.far=ee.far,(K!==b.near||se!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),K=b.near,se=b.far,O.near=K,O.far=se,Q.near=K,Q.far=se,O.updateProjectionMatrix(),Q.updateProjectionMatrix(),ee.updateProjectionMatrix());const fe=ee.parent,we=b.cameras;pe(b,fe);for(let Ee=0;Ee<we.length;Ee++)pe(we[Ee],fe);we.length===2?Z(b,O,Q):b.projectionMatrix.copy(O.projectionMatrix),he(ee,b,fe)};function he(ee,fe,we){we===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(we.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=bc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&M===null))return f},this.setFoveation=function(ee){f=ee,_!==null&&(_.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return R.texture!==null};let Ae=null;function ct(ee,fe){if(p=fe.getViewerPose(d||c),A=fe,p!==null){const we=p.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ee=!1;we.length!==b.cameras.length&&(b.cameras.length=0,Ee=!0);for(let Ke=0;Ke<we.length;Ke++){const dt=we[Ke];let G=null;if(M!==null)G=M.getViewport(dt);else{const Ve=m.getViewSubImage(_,dt);G=Ve.viewport,Ke===0&&(e.setRenderTargetTextures(U,Ve.colorTexture,_.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(U))}let tt=C[Ke];tt===void 0&&(tt=new Xn,tt.layers.enable(Ke),tt.viewport=new rn,C[Ke]=tt),tt.matrix.fromArray(dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(G.x,G.y,G.width,G.height),Ke===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ee===!0&&b.cameras.push(tt)}const $e=a.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Ke=m.getDepthInformation(we[0]);Ke&&Ke.isValid&&Ke.texture&&R.init(e,Ke,a.renderState)}}for(let we=0;we<w.length;we++){const Ee=N[we],$e=w[we];Ee!==null&&$e!==void 0&&$e.update(Ee,fe,d||c)}R.render(e,b),Ae&&Ae(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),A=null}const Et=new Gd;Et.setAnimationLoop(ct),this.setAnimationLoop=function(ee){Ae=ee},this.dispose=function(){}}}const vr=new Li,uA=new Yt;function hA(s,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,zd(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,U,w,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(v,g):g.isMeshToonMaterial?(o(v,g),m(v,g)):g.isMeshPhongMaterial?(o(v,g),p(v,g)):g.isMeshStandardMaterial?(o(v,g),_(v,g),g.isMeshPhysicalMaterial&&M(v,g,N)):g.isMeshMatcapMaterial?(o(v,g),A(v,g)):g.isMeshDepthMaterial?o(v,g):g.isMeshDistanceMaterial?(o(v,g),R(v,g)):g.isMeshNormalMaterial?o(v,g):g.isLineBasicMaterial?(c(v,g),g.isLineDashedMaterial&&u(v,g)):g.isPointsMaterial?f(v,g,U,w):g.isSpriteMaterial?d(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===yn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===yn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const U=e.get(g),w=U.envMap,N=U.envMapRotation;if(w&&(v.envMap.value=w,vr.copy(N),vr.x*=-1,vr.y*=-1,vr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),v.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(vr)),v.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;const W=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*W,t(g.lightMap,v.lightMapTransform)}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function c(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function u(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function f(v,g,U,w){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*U,v.scale.value=w*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function d(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function m(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function _(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function M(v,g,U){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,g){g.matcap&&(v.matcap.value=g.matcap)}function R(v,g){const U=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function fA(s,e,t,i){let a={},o={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,w){const N=w.program;i.uniformBlockBinding(U,N)}function d(U,w){let N=a[U.id];N===void 0&&(A(U),N=p(U),a[U.id]=N,U.addEventListener("dispose",v));const W=w.program;i.updateUBOMapping(U,W);const F=e.render.frame;o[U.id]!==F&&(_(U),o[U.id]=F)}function p(U){const w=m();U.__bindingPointIndex=w;const N=s.createBuffer(),W=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,W,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,N),N}function m(){for(let U=0;U<u;U++)if(c.indexOf(U)===-1)return c.push(U),U;return 0}function _(U){const w=a[U.id],N=U.uniforms,W=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let F=0,O=N.length;F<O;F++){const Q=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,b=Q.length;C<b;C++){const K=Q[C];if(M(K,F,C,W)===!0){const se=K.__offset,H=Array.isArray(K.value)?K.value:[K.value];let te=0;for(let ae=0;ae<H.length;ae++){const ue=H[ae],xe=R(ue);typeof ue=="number"||typeof ue=="boolean"?(K.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,se+te,K.__data)):ue.isMatrix3?(K.__data[0]=ue.elements[0],K.__data[1]=ue.elements[1],K.__data[2]=ue.elements[2],K.__data[3]=0,K.__data[4]=ue.elements[3],K.__data[5]=ue.elements[4],K.__data[6]=ue.elements[5],K.__data[7]=0,K.__data[8]=ue.elements[6],K.__data[9]=ue.elements[7],K.__data[10]=ue.elements[8],K.__data[11]=0):(ue.toArray(K.__data,te),te+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,K.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,w,N,W){const F=U.value,O=w+"_"+N;if(W[O]===void 0)return typeof F=="number"||typeof F=="boolean"?W[O]=F:W[O]=F.clone(),!0;{const Q=W[O];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return W[O]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function A(U){const w=U.uniforms;let N=0;const W=16;for(let O=0,Q=w.length;O<Q;O++){const C=Array.isArray(w[O])?w[O]:[w[O]];for(let b=0,K=C.length;b<K;b++){const se=C[b],H=Array.isArray(se.value)?se.value:[se.value];for(let te=0,ae=H.length;te<ae;te++){const ue=H[te],xe=R(ue),Z=N%W;Z!==0&&W-Z<xe.boundary&&(N+=W-Z),se.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=N,N+=xe.storage}}}const F=N%W;return F>0&&(N+=W-F),U.__size=N,U.__cache={},this}function R(U){const w={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(w.boundary=4,w.storage=4):U.isVector2?(w.boundary=8,w.storage=8):U.isVector3||U.isColor?(w.boundary=16,w.storage=12):U.isVector4?(w.boundary=16,w.storage=16):U.isMatrix3?(w.boundary=48,w.storage=48):U.isMatrix4?(w.boundary=64,w.storage=64):U.isTexture,w}function v(U){const w=U.target;w.removeEventListener("dispose",v);const N=c.indexOf(w.__bindingPointIndex);c.splice(N,1),s.deleteBuffer(a[w.id]),delete a[w.id],delete o[w.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);c=[],a={},o={}}return{bind:f,update:d,dispose:g}}class dA{constructor(e={}){const{canvas:t=nS(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=c;const M=new Uint32Array(4),A=new Int32Array(4);let R=null,v=null;const g=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;const w=this;let N=!1,W=0,F=0,O=null,Q=-1,C=null;const b=new rn,K=new rn;let se=null;const H=new Rt(0);let te=0,ae=t.width,ue=t.height,xe=1,Z=null,pe=null;const he=new rn(0,0,ae,ue),Ae=new rn(0,0,ae,ue);let ct=!1;const Et=new kd;let ee=!1,fe=!1;const we=new Yt,Ee=new xt,$e=new Y,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return O===null?xe:1}let G=i;function tt(T,k){const $=t.getContext(T,k);return $!==null?$:null}try{const T={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),G===null){const k="webgl2";if(G=tt(k,T),G===null)throw tt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T}let Ve,_t,Ge,St,P,y,J,re,le,ce,Fe,de,Le,We,me,be,qe,Re,Ce,ot,ut,gt,mt,bt;function Ie(){Ve=new Sb(G),Ve.init(),_t=new pb(G,Ve,e),gt=new iA(G,Ve),Ge=new tA(G),St=new bb(G),P=new kT,y=new nA(G,Ve,Ge,P,_t,gt,St),J=new gb(w),re=new Mb(w),le=new CS(G),mt=new fb(G,le),ce=new yb(G,le,St,mt),Fe=new Ab(G,ce,le,St),Ce=new Tb(G,_t,y),be=new mb(P),de=new HT(w,J,re,Ve,_t,mt,be),Le=new hA(w,P),We=new VT,me=new KT(Ve),Re=new hb(w,J,re,Ge,Fe,_,f),qe=new eA(w,Fe,_t),bt=new fA(G,St,_t,Ge),ot=new db(G,Ve,St),ut=new Eb(G,Ve,St),St.programs=de.programs,w.capabilities=_t,w.extensions=Ve,w.properties=P,w.renderLists=We,w.shadowMap=qe,w.state=Ge,w.info=St}Ie();const I=new cA(w,G);this.xr=I,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(T){T!==void 0&&(xe=T,this.setSize(ae,ue,!1))},this.getSize=function(T){return T.set(ae,ue)},this.setSize=function(T,k,$=!0){I.isPresenting||(ae=T,ue=k,t.width=Math.floor(T*xe),t.height=Math.floor(k*xe),$===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k))},this.getDrawingBufferSize=function(T){return T.set(ae*xe,ue*xe).floor()},this.setDrawingBufferSize=function(T,k,$){ae=T,ue=k,xe=$,t.width=Math.floor(T*$),t.height=Math.floor(k*$),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,k,$,q){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,k,$,q),Ge.viewport(b.copy(he).multiplyScalar(xe).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,k,$,q){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,k,$,q),Ge.scissor(K.copy(Ae).multiplyScalar(xe).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){Ge.setScissorTest(ct=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,k=!0,$=!0){let q=0;if(T){let V=!1;if(O!==null){const ye=O.texture.format;V=ye===wd||ye===Ad||ye===Td}if(V){const ye=O.texture.type,De=ye===er||ye===ps||ye===Sd||ye===Ys||ye===Ed||ye===bd,Oe=Re.getClearColor(),Xe=Re.getClearAlpha(),Ye=Oe.r,Ze=Oe.g,Qe=Oe.b;De?(M[0]=Ye,M[1]=Ze,M[2]=Qe,M[3]=Xe,G.clearBufferuiv(G.COLOR,0,M)):(A[0]=Ye,A[1]=Ze,A[2]=Qe,A[3]=Xe,G.clearBufferiv(G.COLOR,0,A))}else q|=G.COLOR_BUFFER_BIT}k&&(q|=G.DEPTH_BUFFER_BIT),$&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),We.dispose(),me.dispose(),P.dispose(),J.dispose(),re.dispose(),Fe.dispose(),mt.dispose(),bt.dispose(),de.dispose(),I.dispose(),I.removeEventListener("sessionstart",Dn),I.removeEventListener("sessionend",Un),pi.stop()};function ve(T){T.preventDefault(),N=!0}function ge(){N=!1;const T=St.autoReset,k=qe.enabled,$=qe.autoUpdate,q=qe.needsUpdate,V=qe.type;Ie(),St.autoReset=T,qe.enabled=k,qe.autoUpdate=$,qe.needsUpdate=q,qe.type=V}function Ue(T){}function Ne(T){const k=T.target;k.removeEventListener("dispose",Ne),Tt(k)}function Tt(T){Pt(T),P.remove(T)}function Pt(T){const k=P.get(T).programs;k!==void 0&&(k.forEach(function($){de.releaseProgram($)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,$,q,V,ye){k===null&&(k=Ke);const De=V.isMesh&&V.matrixWorld.determinant()<0,Oe=Ao(T,k,$,q,V);Ge.setMaterial(q,De);let Xe=$.index,Ye=1;if(q.wireframe===!0){if(Xe=ce.getWireframeAttribute($),Xe===void 0)return;Ye=2}const Ze=$.drawRange,Qe=$.attributes.position;let zt=Ze.start*Ye,sn=(Ze.start+Ze.count)*Ye;ye!==null&&(zt=Math.max(zt,ye.start*Ye),sn=Math.min(sn,(ye.start+ye.count)*Ye)),Xe!==null?(zt=Math.max(zt,0),sn=Math.min(sn,Xe.count)):Qe!=null&&(zt=Math.max(zt,0),sn=Math.min(sn,Qe.count));const Gt=sn-zt;if(Gt<0||Gt===1/0)return;mt.setup(V,q,Oe,$,Xe);let Nn,Ut=ot;if(Xe!==null&&(Nn=le.get(Xe),Ut=ut,Ut.setIndex(Nn)),V.isMesh)q.wireframe===!0?(Ge.setLineWidth(q.wireframeLinewidth*dt()),Ut.setMode(G.LINES)):Ut.setMode(G.TRIANGLES);else if(V.isLine){let et=q.linewidth;et===void 0&&(et=1),Ge.setLineWidth(et*dt()),V.isLineSegments?Ut.setMode(G.LINES):V.isLineLoop?Ut.setMode(G.LINE_LOOP):Ut.setMode(G.LINE_STRIP)}else V.isPoints?Ut.setMode(G.POINTS):V.isSprite&&Ut.setMode(G.TRIANGLES);if(V.isBatchedMesh)Ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Ut.renderInstances(zt,Gt,V.count);else if($.isInstancedBufferGeometry){const et=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xs=Math.min($.instanceCount,et);Ut.renderInstances(zt,Gt,xs)}else Ut.render(zt,Gt)};function Dt(T,k,$){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,Cr(T,k,$),T.side=tr,T.needsUpdate=!0,Cr(T,k,$),T.side=ci):Cr(T,k,$)}this.compile=function(T,k,$=null){$===null&&($=T),v=me.get($),v.init(),U.push(v),$.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),T!==$&&T.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights(w._useLegacyLights);const q=new Set;return T.traverse(function(V){const ye=V.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const Oe=ye[De];Dt(Oe,$,V),q.add(Oe)}else Dt(ye,$,V),q.add(ye)}),U.pop(),v=null,q},this.compileAsync=function(T,k,$=null){const q=this.compile(T,k,$);return new Promise(V=>{function ye(){if(q.forEach(function(De){P.get(De).currentProgram.isReady()&&q.delete(De)}),q.size===0){V(T);return}setTimeout(ye,10)}Ve.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Jt=null;function At(T){Jt&&Jt(T)}function Dn(){pi.stop()}function Un(){pi.start()}const pi=new Gd;pi.setAnimationLoop(At),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(T){Jt=T,I.setAnimationLoop(T),T===null?pi.stop():pi.start()},I.addEventListener("sessionstart",Dn),I.addEventListener("sessionend",Un),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0||N===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(k),k=I.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,k,O),v=me.get(T,U.length),v.init(),U.push(v),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Et.setFromProjectionMatrix(we),fe=this.localClippingEnabled,ee=be.init(this.clippingPlanes,fe),R=We.get(T,g.length),R.init(),g.push(R),wr(T,k,0,w.sortObjects),R.finish(),w.sortObjects===!0&&R.sort(Z,pe),this.info.render.frame++,ee===!0&&be.beginShadows();const $=v.state.shadowsArray;if(qe.render($,T,k),ee===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1)&&Re.render(R,T),v.setupLights(w._useLegacyLights),k.isArrayCamera){const q=k.cameras;for(let V=0,ye=q.length;V<ye;V++){const De=q[V];ea(R,T,De,De.viewport)}}else ea(R,T,k);O!==null&&(y.updateMultisampleRenderTarget(O),y.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(w,T,k),mt.resetDefaultState(),Q=-1,C=null,U.pop(),U.length>0?v=U[U.length-1]:v=null,g.pop(),g.length>0?R=g[g.length-1]:R=null};function wr(T,k,$,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Et.intersectsSprite(T)){q&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const De=Fe.update(T),Oe=T.material;Oe.visible&&R.push(T,De,Oe,$,$e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Et.intersectsObject(T))){const De=Fe.update(T),Oe=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),$e.copy(De.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const Xe=De.groups;for(let Ye=0,Ze=Xe.length;Ye<Ze;Ye++){const Qe=Xe[Ye],zt=Oe[Qe.materialIndex];zt&&zt.visible&&R.push(T,De,zt,$,$e.z,Qe)}}else Oe.visible&&R.push(T,De,Oe,$,$e.z,null)}}const ye=T.children;for(let De=0,Oe=ye.length;De<Oe;De++)wr(ye[De],k,$,q)}function ea(T,k,$,q){const V=T.opaque,ye=T.transmissive,De=T.transparent;v.setupLightsView($),ee===!0&&be.setGlobalState(w.clippingPlanes,$),ye.length>0&&vs(V,ye,k,$),q&&Ge.viewport(b.copy(q)),V.length>0&&Rr(V,k,$),ye.length>0&&Rr(ye,k,$),De.length>0&&Rr(De,k,$),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function vs(T,k,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget===null){v.state.transmissionRenderTarget=new Tr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?_o:er,minFilter:Er,samples:4,stencilBuffer:o});const Ye=P.get(v.state.transmissionRenderTarget);Ye.__isTransmissionRenderTarget=!0}const ye=v.state.transmissionRenderTarget;w.getDrawingBufferSize(Ee),ye.setSize(Ee.x,Ee.y);const De=w.getRenderTarget();w.setRenderTarget(ye),w.getClearColor(H),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),w.clear();const Oe=w.toneMapping;w.toneMapping=ji,Rr(T,$,q),y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye);let Xe=!1;for(let Ye=0,Ze=k.length;Ye<Ze;Ye++){const Qe=k[Ye],zt=Qe.object,sn=Qe.geometry,Gt=Qe.material,Nn=Qe.group;if(Gt.side===ci&&zt.layers.test(q.layers)){const Ut=Gt.side;Gt.side=yn,Gt.needsUpdate=!0,ta(zt,$,q,sn,Gt,Nn),Gt.side=Ut,Gt.needsUpdate=!0,Xe=!0}}Xe===!0&&(y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye)),w.setRenderTarget(De),w.setClearColor(H,te),w.toneMapping=Oe}function Rr(T,k,$){const q=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ye=T.length;V<ye;V++){const De=T[V],Oe=De.object,Xe=De.geometry,Ye=q===null?De.material:q,Ze=De.group;Oe.layers.test($.layers)&&ta(Oe,k,$,Xe,Ye,Ze)}}function ta(T,k,$,q,V,ye){T.onBeforeRender(w,k,$,q,V,ye),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(w,k,$,q,T,ye),V.transparent===!0&&V.side===ci&&V.forceSinglePass===!1?(V.side=yn,V.needsUpdate=!0,w.renderBufferDirect($,k,q,V,T,ye),V.side=tr,V.needsUpdate=!0,w.renderBufferDirect($,k,q,V,T,ye),V.side=ci):w.renderBufferDirect($,k,q,V,T,ye),T.onAfterRender(w,k,$,q,V,ye)}function Cr(T,k,$){k.isScene!==!0&&(k=Ke);const q=P.get(T),V=v.state.lights,ye=v.state.shadowsArray,De=V.state.version,Oe=de.getParameters(T,V.state,ye,k,$),Xe=de.getProgramCacheKey(Oe);let Ye=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?re:J).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",Ne),Ye=new Map,q.programs=Ye);let Ze=Ye.get(Xe);if(Ze!==void 0){if(q.currentProgram===Ze&&q.lightsStateVersion===De)return ia(T,Oe),Ze}else Oe.uniforms=de.getUniforms(T),T.onBuild($,Oe,w),T.onBeforeCompile(Oe,w),Ze=de.acquireProgram(Oe,Xe),Ye.set(Xe,Ze),q.uniforms=Oe.uniforms;const Qe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qe.clippingPlanes=be.uniform),ia(T,Oe),q.needsLights=Ro(T),q.lightsStateVersion=De,q.needsLights&&(Qe.ambientLightColor.value=V.state.ambient,Qe.lightProbe.value=V.state.probe,Qe.directionalLights.value=V.state.directional,Qe.directionalLightShadows.value=V.state.directionalShadow,Qe.spotLights.value=V.state.spot,Qe.spotLightShadows.value=V.state.spotShadow,Qe.rectAreaLights.value=V.state.rectArea,Qe.ltc_1.value=V.state.rectAreaLTC1,Qe.ltc_2.value=V.state.rectAreaLTC2,Qe.pointLights.value=V.state.point,Qe.pointLightShadows.value=V.state.pointShadow,Qe.hemisphereLights.value=V.state.hemi,Qe.directionalShadowMap.value=V.state.directionalShadowMap,Qe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Qe.spotShadowMap.value=V.state.spotShadowMap,Qe.spotLightMatrix.value=V.state.spotLightMatrix,Qe.spotLightMap.value=V.state.spotLightMap,Qe.pointShadowMap.value=V.state.pointShadowMap,Qe.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ze,q.uniformsList=null,Ze}function na(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=po.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ia(T,k){const $=P.get(T);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Ao(T,k,$,q,V){k.isScene!==!0&&(k=Ke),y.resetTextureUnits();const ye=k.fog,De=q.isMeshStandardMaterial?k.environment:null,Oe=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nr,Xe=(q.isMeshStandardMaterial?re:J).get(q.envMap||De),Ye=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Qe=!!$.morphAttributes.position,zt=!!$.morphAttributes.normal,sn=!!$.morphAttributes.color;let Gt=ji;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Gt=w.toneMapping);const Nn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ut=Nn!==void 0?Nn.length:0,et=P.get(q),xs=v.state.lights;if(ee===!0&&(fe===!0||T!==C)){const un=T===C&&q.id===Q;be.setState(q,T,un)}let Lt=!1;q.version===et.__version?(et.needsLights&&et.lightsStateVersion!==xs.state.version||et.outputColorSpace!==Oe||V.isBatchedMesh&&et.batching===!1||!V.isBatchedMesh&&et.batching===!0||V.isInstancedMesh&&et.instancing===!1||!V.isInstancedMesh&&et.instancing===!0||V.isSkinnedMesh&&et.skinning===!1||!V.isSkinnedMesh&&et.skinning===!0||V.isInstancedMesh&&et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&et.instancingMorph===!1&&V.morphTexture!==null||et.envMap!==Xe||q.fog===!0&&et.fog!==ye||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==be.numPlanes||et.numIntersection!==be.numIntersection)||et.vertexAlphas!==Ye||et.vertexTangents!==Ze||et.morphTargets!==Qe||et.morphNormals!==zt||et.morphColors!==sn||et.toneMapping!==Gt||et.morphTargetsCount!==Ut)&&(Lt=!0):(Lt=!0,et.__version=q.version);let ni=et.currentProgram;Lt===!0&&(ni=Cr(q,k,V));let Ms=!1,Di=!1,ir=!1;const Qt=ni.getUniforms(),qn=et.uniforms;if(Ge.useProgram(ni.program)&&(Ms=!0,Di=!0,ir=!0),q.id!==Q&&(Q=q.id,Di=!0),Ms||C!==T){Qt.setValue(G,"projectionMatrix",T.projectionMatrix),Qt.setValue(G,"viewMatrix",T.matrixWorldInverse);const un=Qt.map.cameraPosition;un!==void 0&&un.setValue(G,$e.setFromMatrixPosition(T.matrixWorld)),_t.logarithmicDepthBuffer&&Qt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Qt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,Di=!0,ir=!0)}if(V.isSkinnedMesh){Qt.setOptional(G,V,"bindMatrix"),Qt.setOptional(G,V,"bindMatrixInverse");const un=V.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Qt.setValue(G,"boneTexture",un.boneTexture,y))}V.isBatchedMesh&&(Qt.setOptional(G,V,"batchingTexture"),Qt.setValue(G,"batchingTexture",V._matricesTexture,y));const Ui=$.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Ce.update(V,$,ni),(Di||et.receiveShadow!==V.receiveShadow)&&(et.receiveShadow=V.receiveShadow,Qt.setValue(G,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qn.envMap.value=Xe,qn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(qn.envMapIntensity.value=k.environmentIntensity),Di&&(Qt.setValue(G,"toneMappingExposure",w.toneMappingExposure),et.needsLights&&wo(qn,ir),ye&&q.fog===!0&&Le.refreshFogUniforms(qn,ye),Le.refreshMaterialUniforms(qn,q,xe,ue,v.state.transmissionRenderTarget),po.upload(G,na(et),qn,y)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(po.upload(G,na(et),qn,y),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Qt.setValue(G,"center",V.center),Qt.setValue(G,"modelViewMatrix",V.modelViewMatrix),Qt.setValue(G,"normalMatrix",V.normalMatrix),Qt.setValue(G,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let Ss=0,ra=un.length;Ss<ra;Ss++){const ys=un[Ss];bt.update(ys,ni),bt.bind(ys,ni)}}return ni}function wo(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ro(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,k,$){P.get(T.texture).__webglTexture=k,P.get(T.depthTexture).__webglTexture=$;const q=P.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const $=P.get(T);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,$=0){O=T,W=k,F=$;let q=!0,V=null,ye=!1,De=!1;if(T){const Xe=P.get(T);Xe.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(G.FRAMEBUFFER,null),q=!1):Xe.__webglFramebuffer===void 0?y.setupRenderTarget(T):Xe.__hasExternalTextures&&y.rebindTextures(T,P.get(T.texture).__webglTexture,P.get(T.depthTexture).__webglTexture);const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const Ze=P.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[k])?V=Ze[k][$]:V=Ze[k],ye=!0):T.samples>0&&y.useMultisampledRTT(T)===!1?V=P.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?V=Ze[$]:V=Ze,b.copy(T.viewport),K.copy(T.scissor),se=T.scissorTest}else b.copy(he).multiplyScalar(xe).floor(),K.copy(Ae).multiplyScalar(xe).floor(),se=ct;if(Ge.bindFramebuffer(G.FRAMEBUFFER,V)&&q&&Ge.drawBuffers(T,V),Ge.viewport(b),Ge.scissor(K),Ge.setScissorTest(se),ye){const Xe=P.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Xe.__webglTexture,$)}else if(De){const Xe=P.get(T.texture),Ye=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.__webglTexture,$||0,Ye)}Q=-1},this.readRenderTargetPixels=function(T,k,$,q,V,ye,De){if(!(T&&T.isWebGLRenderTarget))return;let Oe=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){Ge.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const Xe=T.texture,Ye=Xe.format,Ze=Xe.type;if(Ye!==hi&&gt.convert(Ye)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT))return;const Qe=Ze===_o&&(Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float"));if(Ze!==er&&gt.convert(Ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&Ze!==Ji&&!Qe)return;k>=0&&k<=T.width-q&&$>=0&&$<=T.height-V&&G.readPixels(k,$,q,V,gt.convert(Ye),gt.convert(Ze),ye)}finally{const Xe=O!==null?P.get(O).__webglFramebuffer:null;Ge.bindFramebuffer(G.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(T,k,$=0){const q=Math.pow(2,-$),V=Math.floor(k.image.width*q),ye=Math.floor(k.image.height*q);y.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,T.x,T.y,V,ye),Ge.unbindTexture()},this.copyTextureToTexture=function(T,k,$,q=0){const V=k.image.width,ye=k.image.height,De=gt.convert($.format),Oe=gt.convert($.type);y.setTexture2D($,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,T.x,T.y,V,ye,De,Oe,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,De,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,q,T.x,T.y,De,Oe,k.image),q===0&&$.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(T,k,$,q,V=0){const ye=Math.round(T.max.x-T.min.x),De=Math.round(T.max.y-T.min.y),Oe=T.max.z-T.min.z+1,Xe=gt.convert(q.format),Ye=gt.convert(q.type);let Ze;if(q.isData3DTexture)y.setTexture3D(q,0),Ze=G.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)y.setTexture2DArray(q,0),Ze=G.TEXTURE_2D_ARRAY;else return;G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Qe=G.getParameter(G.UNPACK_ROW_LENGTH),zt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),sn=G.getParameter(G.UNPACK_SKIP_PIXELS),Gt=G.getParameter(G.UNPACK_SKIP_ROWS),Nn=G.getParameter(G.UNPACK_SKIP_IMAGES),Ut=$.isCompressedTexture?$.mipmaps[V]:$.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ut.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ut.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?G.texSubImage3D(Ze,V,k.x,k.y,k.z,ye,De,Oe,Xe,Ye,Ut.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ze,V,k.x,k.y,k.z,ye,De,Oe,Xe,Ut.data):G.texSubImage3D(Ze,V,k.x,k.y,k.z,ye,De,Oe,Xe,Ye,Ut),G.pixelStorei(G.UNPACK_ROW_LENGTH,Qe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,sn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Gt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Nn),V===0&&q.generateMipmaps&&G.generateMipmap(Ze),Ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){W=0,F=0,O=null,Ge.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wc?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Eo?"display-p3":"srgb"}get useLegacyLights(){return this._useLegacyLights}set useLegacyLights(e){this._useLegacyLights=e}}class pA extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mA extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const pd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class gA{constructor(e,t,i){const a=this;let o=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){const m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=d.length;m<_;m+=2){const M=d[m],A=d[m+1];if(M.global&&(M.lastIndex=0),M.test(p))return A}return null}}}const _A=new gA;class Pc{constructor(e){this.manager=e!==void 0?e:_A,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";class vA extends Pc{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=pd.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const u=$s("img");function f(){p(),pd.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(m){p(),a&&a(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class _c extends Pc{constructor(e){super(e)}load(e,t,i,a){const o=new mn,c=new vA(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class xA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function md(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=Ac));const MA="modulepreload",SA=function(s){return"/"+s},gd={},Kd=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link");a=Promise.all(t.map(c=>{if(c=SA(c),c in gd)return;gd[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!i)for(let m=o.length-1;m>=0;m--){const _=o[m];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":MA,u||(p.as="script",p.crossOrigin=""),p.href=c,document.head.appendChild(p),u)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return a.then(()=>e()).catch(o=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o})};function qs(s,e,t){return Math.min(Math.max(s,e),t)}function Ln(s,e=1){return Math.round(s*e)/e}function yA(s,e=1){return Math.floor(s*e)/e}function EA(s){return s/Math.PI*180}function Zd(s){return s*Math.PI/180}function bA(s,e){return s*.5/Math.tan(Zd(e*.5))}function li(s,e,t){return(1-t)*s+t*e}const TA={};class Lc{constructor(e={}){this.handler=[],Ht.merge(this,TA,e)}addHandler(e,t,i=this.handler){i.push({task:e,taskId:t})}addUnshiftHandler(e,t,i=this.handler){i.unshift({task:e,taskId:t})}removeHandler(e,t=this.handler){t&&Ht.isArray(t)&&t.find((i,a)=>{i&&i.taskId&&i.taskId===e&&t.splice(a,1)})}destroy(){this.handler=[]}}const AA={fpsDigit:1e3,baseFps:60,multiplierMin:1,digit:1e4,useStats:!1};class wA extends Lc{constructor(e={}){super(),this.raf=null,this.prevTime=0,this.deltaTime=0,this.fpsMultiplier=1,Ht.merge(this,AA,e)}init(){this.useStats=this.useStats,this.fps=Ln(this.fpsDigit/this.baseFps,this.digit),this.raf=requestAnimationFrame(this._onRaf.bind(this)),this.useStats&&Kd(()=>import("./stats.min.ClHQFf_V.js").then(e=>e.s),__vite__mapDeps([0,1])).then(e=>{this.stats=e.default(),document.body.appendChild(this.stats.dom),this.stats.dom.style.display="none"})}destroy(){cancelAnimationFrame(this.raf),super.destroy()}_updateHandler(){this.handler.forEach(e=>{e.task(this.deltaTime)})}_calcFps(e=0){this.deltaTime=e-this.prevTime,this.fpsMultiplier=Ln(this.fps/this.deltaTime,this.digit),this.fpsMultiplier=Math.max(this.fpsMultiplier,this.multiplierMin),this.prevTime=e}_onRaf(e=0){this.stats&&this.stats.begin(),this._calcFps(e),this._updateHandler(),this.stats&&this.stats.end(),this.raf=requestAnimationFrame(this._onRaf.bind(this))}}const RA={};class CA extends Lc{constructor(e={}){super(),this.event={resize:this._onResize.bind(this)},this.size={width:0,height:0},this.prevSize={width:0,height:0},Ht.merge(this,RA,e)}init(){this._addEventListeners(),this.event.resize()}destroy(){this.handler=[],this._removeEventListeners()}_onResize(){requestAnimationFrame(()=>{this.size.width=window.innerWidth,this.size.height=window.innerHeight,Be.detectionManager.isMobileDevice||Be.detectionManager.isTabletDevice?this.size.width!==this.prevSize.width&&this._resizeHandler():this._resizeHandler(),this.prevSize.width=this.size.width,this.prevSize.height=this.size.height})}_addEventListeners(){window.addEventListener("resize",this.event.resize,!1)}_removeEventListeners(){window.removeEventListener("resize",this.event.resize,!1)}_resizeHandler(){this.handler.forEach(e=>{e.task(this.size,this.aspect)})}}const PA={lerpMultiplier:.1,deltalerpMultiplier:.1,deltaLerpMax:60,deltaLerpMin:-60,handleName:"MouseMove",digit:100};class LA extends Lc{constructor(e={}){super(),this.$ctr=window,this.mouseMoveHandler=[],this.ticking=!1,this.canUpdate=!1;const t=0,i=0;this.position={static:{x:t,y:i,normal:{x:.5,y:.5},prev:{x:t,y:i}},x:t,y:i,normal:{x:.5,y:.5},delta:{x:0,y:0}},this.size={x:0,y:0,ratioX:0,ratioY:0},Ht.merge(this,PA,e)}init(){this._setSize(),this._addHandlers(),this._addEventListeners()}destroy(){this._removeEventListeners(),this._removeHandlers()}isTouchDevice(){return!1}_addEventListeners(){this.isTouchDevice()?(this.$ctr.addEventListener("touchstart",this._onMousemove,{passive:!0}),this.$ctr.addEventListener("touchmove",this._onMousemove,{passive:!0}),this.$ctr.addEventListener("touchend",this._onMousemove,{passive:!0})):this.$ctr.addEventListener("mousemove",this._onMousemove,{passive:!0})}_removeEventListeners(){this.isTouchDevice()?(this.$ctr.removeEventListener("touchstart",this._onMousemove),this.$ctr.removeEventListener("touchmove",this._onMousemove),this.$ctr.removeEventListener("touchend",this._onMousemove)):this.$ctr.removeEventListener("mousemove",this._onMousemove)}_addHandlers(){Be.raf.addHandler(this._onUpdate.bind(this),this.handleName),Be.resize.addHandler(this._onResize.bind(this),this.handleName)}_removeHandlers(){Be.raf.removeHandler(this.handleName),Be.resize.removeHandler(this.handleName)}_setSize(e,t){this.$ctr instanceof HTMLElement?(this.size.x=this.size.x=this.$ctr.getBoundingClientRect().width,this.size.y=this.size.y=this.$ctr.getBoundingClientRect().height):(this.size.x=e||document.body.clientWidth,this.size.y=t||window.innerHeight),this.size.ratioX=1/this.size.x,this.size.ratioY=1/this.size.y}_getPosition(e,t){if(this._useClientPositionIfNeeded())if(e.targetTouches&&e.targetTouches[0]){let i;e.touches?(i=e.targetTouches[0],t.x=i.clientX,t.y=i.clientY):(t.x=e.clientX,t.y=e.clientY)}else t.x=e.clientX||0,t.y=e.clientY||0;else t.x=e.layerX,t.y=e.layerY;return t.normal.x=t.x*this.size.ratioX,t.normal.y=t.y*this.size.ratioY,t}_useClientPositionIfNeeded(){return this.$ctr===window||this.$ctr===document.body}_onMousemove=e=>{this._updateOnMousemove(e)};_updateOnMousemove(e){this.updateMousemove(e)}updateMousemove(e){this.ticking||(requestAnimationFrame(()=>{this.canUpdate||(this.canUpdate=!0),this.ticking=!1,this.position.static=this._getPosition(e,this.position.static)}),this.ticking=!0)}_mousemoveHandler(){this.mouseMoveHandler.forEach(e=>{e.task(this.position)})}checkMouseMove(){if(Math.abs(this.position.x-this.position.static.x)<.1&&Math.abs(this.position.y-this.position.static.y)<.1)this.position.x=this.position.static.x,this.position.y=this.position.static.y,this.position.delta.x=0,this.position.delta.y=0,this.canUpdate=!1,this._updateHandler();else{this.position.x=li(this.position.x,this.position.static.x,this.lerpMultiplier/Be.raf.fpsMultiplier),this.position.y=li(this.position.y,this.position.static.y,this.lerpMultiplier/Be.raf.fpsMultiplier),this.position.normal.x=li(this.position.normal.x,this.position.static.normal.x,this.lerpMultiplier/Be.raf.fpsMultiplier),this.position.normal.y=li(this.position.normal.y,this.position.static.normal.y,this.lerpMultiplier/Be.raf.fpsMultiplier);const e={x:this.position.static.x-this.position.x,y:this.position.static.y-this.position.y};this.position.delta.x=li(this.position.delta.x,e.x,this.deltalerpMultiplier/Be.raf.fpsMultiplier),this.position.delta.y=li(this.position.delta.y,e.y,this.deltalerpMultiplier/Be.raf.fpsMultiplier),this.position.delta.x=qs(this.position.delta.x,this.deltaLerpMin,this.deltaLerpMax),this.position.delta.y=qs(this.position.delta.y,this.deltaLerpMin,this.deltaLerpMax),this.position.delta.x=Ln(this.position.delta.x,this.digit),this.position.delta.y=Ln(this.position.delta.y,this.digit),this._updateHandler()}}_updateHandler(){this.handler.forEach(e=>{e.task(this.position)})}_onUpdate(){this.canUpdate&&this.checkMouseMove()}_onResize(e,t){this._setSize(e,t)}}function IA(){return navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||window.matchMedia("(pointer:coarse)").matches||"orientation"in window?!0:window.navigator.userAgentData&&navigator.userAgentData.mobile}function DA(s,e){s&&(s.length||s.length===0?s.forEach(t=>{e.forEach(i=>{t.style[i]=""})}):e.forEach(t=>{s.style[t]=""}))}const UA={breakPoint:{default:1920,mobile:767},browserName:{chrome:"chrome",safari:"safari",edge:"edge",opera:"opera",firefox:"firefox",uaClientHints:{chrome:"Google Chrome",edge:"Microsoft Edge",opera:"Opera"}},attrName:{os:{key:"data-os",value:{win:"win",mac:"mac"}},browser:{key:"data-browser",value:{chrome:"chrome",safari:"safari",edge:"edge",opera:"opera",firefox:"firefox",others:"others"}},device:{key:"data-device",value:{default:"default",mobile:"mobile",tablet:"tablet"}},pointingDevice:{key:"data-pointing-device",value:{mouse:"mouse",touch:"touch"}},layout:{key:"data-layout",value:{default:"default",mobile:"mobile"}},darkTheme:{key:"data-dark-theme",value:{default:"default",dark:"dark"}},usingWebgl:{key:"data-use-webgl"},usingInlineVideo:{key:"data-use-inline-video"},dpr:{key:"data-window-dpr"}}};class NA{constructor(e={}){Ht.merge(this,UA,e),this.$html=document.documentElement,this.browser=this.checkBrowser(),this.isTouchDevice=this.checkIsTouchDevice(),this.isMobileLayout=this.checkIsMobileLayout(),this.isMobileDevice=this.checkIsMobileDevice(),this.isTabletDevice=this.checkIsTabletDevice(),this.isDarkMode=this.checkIsDarkMode()}checkBrowser(){let e=this.browserName.others;const t=window.navigator.userAgentData;if(t){const i=t.brands;i&&i.length&&i.forEach(a=>{const o=a.brand;switch(!0){case o.indexOf(this.browserName.uaClientHints.chrome)!==-1:e=this.attrName.browser.value.chrome;break;case o.indexOf(this.browserName.uaClientHints.edge)!==-1:e=this.attrName.browser.value.edge;break;case o.indexOf(this.browserName.uaClientHints.opera)!==-1:e=this.attrName.browser.value.opera;break}})}else{let i=window.navigator.userAgent;if(i)switch(i=i.toLowerCase(),!0){case(i.match(/(msie|MSIE)/)||i.match(/(T|t)rident/)):e="ie";break;case i.indexOf("chrome")!==-1:e=this.attrName.browser.value.chrome;break;case i.indexOf("safari")!==-1:e=this.attrName.browser.value.safari;break;case i.indexOf("opera")!==-1:e=this.attrName.browser.value.opera;break;case i.indexOf("firefox")!==-1:e=this.attrName.browser.value.firefox;break;case i.indexOf("edge")!==-1:e=this.attrName.browser.value.edge;break}}return e}checkIsTouchDevice(){return IA()}checkIsMobileLayout(){return document.body.clientWidth<=this.breakPoint.mobile}checkIsMobileDevice(){return this.isMobileLayout&&this.isTouchDevice}checkIsTabletDevice(){return!this.isMobileLayout&&this.isTouchDevice}checkIsDarkMode(){return window.matchMedia("(prefers-color-scheme: dark)").matches}}const OA={config:{root:null,rootMargin:"0px",threshold:[0]},useClass:!1,dataName:{observerId:"observerId",autoClear:"observerAutoClear"},className:{inOneWay:"is-in",inView:"is-inView"}};class FA{constructor(e={}){Ht.merge(this,OA,e),this.inViewCallbackList=[],this.outOfViewCallbackList=[],this.ovserverCount=0,this.intersectionObsever=new IntersectionObserver((...t)=>{this.onUpdate(...t)},this.config)}onUpdate(e,t){e.forEach((i,a)=>{if(i.isIntersecting){this.useClass&&(i.target.classList.add(this.className.inOneWay),i.target.classList.add(this.className.inView));const o=i.target.dataset,c=o[this.dataName.observerId],u=typeof o[this.dataName.autoClear]=="string";this.inViewCallbackList[c]&&this.inViewCallbackList[c](i.target,i),u&&this.remove(i.target)}else{const c=i.target.dataset[this.dataName.observerId];this.useClass&&i.target.classList.remove(this.className.inView),this.outOfViewCallbackList[c]&&this.outOfViewCallbackList[c](i.target,i)}})}add(e,t=null,i=null){e&&(e.dataset[this.dataName.observerId]=this.ovserverCount,t&&(this.inViewCallbackList[this.ovserverCount]=t),i&&(this.outOfViewCallbackList[this.ovserverCount]=i),this.intersectionObsever.observe(e),this.ovserverCount++)}remove(e){if(!e)return;const t=e.dataset[this.dataName.observerId];this.inViewCallbackList[t]&&(this.inViewCallbackList[t]=null),this.outOfViewCallbackList[t]&&(this.outOfViewCallbackList[t]=null),e.dataset[this.dataName.observerId]="",this.intersectionObsever.unobserve(e)}clear(){this.intersectionObsever&&this.intersectionObsever.disconnect(),this.options=[]}destroy(){this.clear(),this.intersectionObsever=null}}const zA={};class BA{constructor(e={}){Ht.merge(this,zA,e),this.gui=null,this.isDebug=!1,this.raf=new wA,this.resize=new CA,this.mouseMove=new LA,this.detectionManager=new NA,this.iom=new FA,this.isKvInviewed=!1}async init(){this.$kv=document.querySelector(".p-home-kv"),await new Promise(e=>{this.isDebug?(this.raf.useStats=this.isDebug,this._setGui().then(()=>{this.raf.init(),this.resize.init(),this.mouseMove.init(),this.$kv&&this.iom.add(this.$kv,()=>{this.isKvInviewed||(this.isKvInviewed=!0)},()=>{this.isKvInviewed&&(this.isKvInviewed=!1)}),requestAnimationFrame(()=>{e()})})):(this.raf.init(),this.resize.init(),this.mouseMove.init(),this.$kv&&this.iom.add(this.$kv,()=>{this.isKvInviewed||(this.isKvInviewed=!0)},()=>{this.isKvInviewed&&(this.isKvInviewed=!1)}),e())})}async _setGui(){await Kd(()=>import("./lil-gui.esm.aH67Z4S0.js"),__vite__mapDeps([])).then(e=>{this.gui=new e.GUI({width:400}),this.gui.domElement.style.display="none"}),this.isDevDomShown=!1,window.addEventListener("keydown",e=>{e&&e.key&&e.key==="d"&&this.switchDevMode()})}switchDevMode(){this.gui.domElement&&this.raf.stats.dom.style&&(this.isDevDomShown=!this.isDevDomShown,this.isDevDomShown?(document.body.classList.add("is-dev-mode"),this.gui.domElement.style.display="",this.raf.stats.dom.style.display=""):(document.body.classList.remove("is-dev-mode"),this.gui.domElement.style.display="none",this.raf.stats.dom.style.display="none"))}}const Be=new BA,HA={$target:document};class kA{constructor(e={}){this.info={event:null,start:{x:0,y:0},move:{x:0,y:0},end:{x:0,y:0},distance:{x:0,y:0,prev:{x:0,y:0},diff:{x:0,y:0},diffAbs:{x:0,y:0}},distanceOffset:function(){return{x:Math.abs(this.distance.x),y:Math.abs(this.distance.y)}}},this.canMove=!0,this.callback={onStart:t=>{},onMove:t=>{},onEnd:t=>{}},this.isDown=!1,Ht.merge(this,HA,e)}isTouchDevice(){const e=window.ontouchstart,t=window.navigator.maxTouchPoints;return e!==void 0&&0<t}init(){this.onStart=this._onStart.bind(this),this.onMove=this._onMove.bind(this),this.onEnd=this._onEnd.bind(this),this.addEventListeners()}addEventListeners(){this.isTouchDevice()?this.$target.addEventListener("touchstart",this._onStart,{passive:!0}):this.$target.addEventListener("mousedown",this._onStart,{passive:!0})}_onStart=e=>{this.info.event=e,this.info.start=this.getInfo(e),this.info.move={x:0,y:0},this.info.end={x:0,y:0},this.info.distance={x:0,y:0,prev:{x:0,y:0},diff:{x:0,y:0},diffAbs:{x:0,y:0}},this.isDown=!0,this.callback.onStart(e,this.info),this.isTouchDevice()?(window.addEventListener("touchmove",this._onMove,{passive:!1}),window.addEventListener("touchend",this._onEnd,{passive:!1})):(window.addEventListener("mousemove",this._onMove,{passive:!0}),window.addEventListener("mouseup",this._onEnd,{passive:!0}))};destroy(){this.isTouchDevice()?(this.$target.removeEventListener("touchstart",this._onStart),window.removeEventListener("touchmove",this._onMove),window.removeEventListener("touchend",this._onEnd)):(this.$target.removeEventListener("mousedown",this._onStart),window.removeEventListener("mousemove",this._onMove),window.removeEventListener("mouseup",this._onEnd))}_onMove=e=>{this.canMove&&(this.info.move=this.getInfo(e),this.info.distance.x=this.info.start.x-this.info.move.x,this.info.distance.y=this.info.start.y-this.info.move.y,this.info.distance.diff.x=this.info.distance.x-this.info.distance.prev.x,this.info.distance.diff.y=this.info.distance.y-this.info.distance.prev.y,this.info.distance.diffAbs.x=Math.abs(this.info.distance.x)-Math.abs(this.info.distance.prev.x),this.info.distance.diffAbs.y=Math.abs(this.info.distance.y)-Math.abs(this.info.distance.prev.y),this.info.distance.prev.x=this.info.distance.x,this.info.distance.prev.y=this.info.distance.y,this.callback.onMove(e,this.info))};_onEnd=e=>{this.isDown=!1,this.info.end=this.getInfo(e),this.callback.onEnd(e,this.info),this.isTouchDevice()?(window.removeEventListener("touchmove",this._onMove),window.removeEventListener("touchend",this._onEnd)):(window.removeEventListener("mousemove",this._onMove),window.removeEventListener("mouseup",this._onEnd))};getInfo(e){let t={x:0,y:0};if(e.targetTouches&&e.targetTouches[0]){let i;e.touches?(i=e.targetTouches[0],t.x=i.clientX,t.y=i.clientY):(t.x=e.clientX,t.y=e.clientY)}else t.x=e.clientX||0,t.y=e.clientY||0;return t}}const GA={instanceName:"magneticHover",isDebug:!1,$name:{container:"[data-home-stage-magnetic-container]",trigger:"[data-home-stage-magnetic-trigger]",target:"[data-home-stage-magnetic-target]",targetItem:"[data-home-stage-magnetic-target-item]",logo:'[data-home-stage-image="logo"]',curry:'[data-home-stage-image="curry"]',bear:'[data-home-stage-image="bear"]',item1:'[data-home-stage-magnetic-area="item1"]',item2:'[data-home-stage-magnetic-area="item2"]',item3:'[data-home-stage-magnetic-area="item3"]',item4:'[data-home-stage-magnetic-area="item4"]',item5:'[data-home-stage-magnetic-area="item5"]',bearAnimationItem:'[data-home-stage-magnetic-animation="bear"]'},baseAreaSize:{item2:1550,item3:1303,item4:989,item5:680,mobile:{item2:1303,item3:1303,item4:989,item5:989}},baseImageSize:{default:{x:438.55,y:460.64,mobile:{x:257.53,y:270.51}},bear:{x:468,y:255,mobile:{x:264,y:144}},curry:{x:278.39,y:430.02,mobile:{x:209.69,y:320.68}}},baseBrowserSize:{width:1440,height:800,mobile:{width:393,height:393}},interactionPrams:{resetAnimationDuration:.8,resetAnimationDelay:.0125,friction:.3,lerpMultiplier:.12,roatatoin:540,translate:{x:.25,y:.25},scale:3,item0:{x:1.05,y:1.05,rotation:.7,lerpMultiplier:.3,friction:.4},item1:{x:1,y:1,rotation:.45,lerpMultiplier:.25,friction:.4},item2:{x:.6,y:.6,rotation:.3,lerpMultiplier:.2,friction:.4},itemCurry:{x:2,y:2,rotation:.3,lerpMultiplier:.25,friction:.4},itemBear:{x:2,y:2,rotation:.3,lerpMultiplier:.25,friction:.4,frameDuration:.1},mobile:{resetAnimationDuration:.8,resetAnimationDelay:.0125,friction:.3,lerpMultiplier:.12,roatatoin:540,translate:{x:.25,y:.25},scale:5.6,item0:{x:1.05,y:1.05,rotation:.7,lerpMultiplier:.4,friction:.4},item1:{x:1,y:1,rotation:.45,lerpMultiplier:.3,friction:.4},item2:{x:.6,y:.6,rotation:.3,lerpMultiplier:.2,friction:.4},itemCurry:{x:2,y:2,rotation:.3,lerpMultiplier:.4,friction:.4},itemBear:{x:2,y:2,rotation:.3,lerpMultiplier:.4,friction:.4,frameDuration:.1}}}};class VA{constructor(e={}){this.$container=document.body,this.$trigger=document.body,this.$target=null,this.$targetItems=[],this.$logo=null,this.$curry=null,this.$bear=null,this.$item1=null,this.$item2=null,this.$item3=null,this.$item4=null,this.$item5=null,this.targetItemsInfo=[],this.explodePoints={item2:0,item3:0,item4:0,item5:0},this.stageSize={x:0,y:0},this.stageSizeAspect=1,this.callback={onmouseenter:()=>{},onMouseLeave:()=>{}},this.baseTranslate={x:0,y:0},this.amount={x:0,y:0},this.diff={x:0,y:0},this.mouseInfo={isHovering:!1,x:0,y:0,start:{x:0,y:0},dist:{x:0,y:0}},this.enableUpdate=!1,this.isAdsorbing=!1,this.isDragging=!1,this.hasItem=!1,this.isAnimating=!1,this.dad=null,this.logoType=0,this.baerAnimationProgress=null,this.addScale=.001,Ht.merge(this,GA,e),Be.detectionManager.isMobileLayout&&(this.interactionPrams=this.interactionPrams.mobile,this.baseAreaSize=this.baseAreaSize.mobile)}init(){this.set$(),this.setDad(),this.setTargetItemsInfo(),this.addEventListeners(),this.addHandlers(),this.aspectBrowserSize=this.baseBrowserSize.width/this.baseBrowserSize.height,Be.detectionManager.isMobileLayout&&(this.aspectBrowserSize=this.baseBrowserSize.mobile.width/this.baseBrowserSize.mobile.height),this.setStageSize(),this.setAreaSize(),this.setImgsSize(),this.setExplodePoints(),this.setTranslate(),this.isDebug&&this.addGUI()}destroy(){}set$(){this.$container=document.querySelector(this.$name.container),this.$trigger=document.querySelector(this.$name.trigger),this.$target=document.querySelector(this.$name.target),this.$target&&(this.$targetItems=this.$target.querySelectorAll(this.$name.targetItem),this.hasItem=this.$targetItems.length>0),this.$logo=document.querySelector(this.$name.logo),this.$curry=document.querySelector(this.$name.curry),this.$bear=document.querySelector(this.$name.bear),this.$item1=document.querySelector(this.$name.item1),this.$item2=document.querySelector(this.$name.item2),this.$item3=document.querySelector(this.$name.item3),this.$item4=document.querySelector(this.$name.item4),this.$item5=document.querySelector(this.$name.item5),this.$bearAnimationItemAll=document.querySelectorAll(this.$name.bearAnimationItem)}setDad(){this.$item5&&(this.dad=new kA({$target:this.$item5}),this.dad.init(),this.dad.callback.onStart=e=>{document.body.classList.add("is-dragging-home-stage"),this.isDragging=!0,this.enableUpdate=!0,_e.killTweensOf(this.$target),this.targetItemsInfo.forEach((t,i)=>{_e.killTweensOf(t.$item)}),this.isAnimating=!1,this.startAdsorb(),this.setMouseMove(e),(Be.detectionManager.isMobileDevice||Be.detectionManager.isTabletDevice)&&requestAnimationFrame(()=>{_e.killTweensOf(this,"addScale"),_e.to(this,{addScale:.125,ease:"elastic.out(1, 0.4)",duration:.6})})},this.dad.callback.onMove=(e,t)=>{this.enableUpdate=!0,this.diff.x=t.move.x-t.start.x,this.diff.y=t.move.y-t.start.y;const i=EA(Math.atan2(Math.abs(this.diff.y),Math.abs(this.diff.x)));(!this.dad.isTouchDevice()||i<=60)&&this.dad.isTouchDevice()&&e.cancelable&&e.preventDefault(),this.setMouseMove(e)},this.dad.callback.onEnd=e=>{document.body.classList.remove("is-dragging-home-stage"),this.isDragging=!1,this.leaveAnimation(e,!0)})}setTargetItemsInfo(){this.targetItemsInfo=[],this.$targetItems.forEach((e,t)=>{let i=e.dataset.homeStageMagneticTargetItem||0;i=i.toString(),i=i.charAt(0).toUpperCase()+i.slice(1),this.targetItemsInfo.push({$item:e,itemName:i,amount:{x:0,y:0},mouseInfo:{dist:{x:0,y:0}},interactionPrams:this.interactionPrams[`item${i}`]})})}addEventListeners(){!Be.detectionManager.isMobileDevice&&!Be.detectionManager.isTabletDevice&&(this.$container.addEventListener("mouseenter",e=>{this._onMouseEnter(e)}),this.$container.addEventListener("mouseleave",e=>{this._onMouseLeave(e)}),this.$container.addEventListener("mousemove",e=>{this._onMouseMove(e)}))}addHandlers(){Be.raf&&Be.raf.addHandler(this.onRaf.bind(this),this.instanceName),Be.resize&&Be.resize.addHandler(this.onResize.bind(this),this.instanceName)}setStageSize(){this.stageSize.x=window.innerWidth,this.stageSize.y=window.innerHeight,this.stageSizeAspect=this.stageSize.x/this.stageSize.y}setAreaSize(){if(this.stageSizeAspect>this.aspectBrowserSize){if(this.$item2){const e=this.stageSize.y*this.baseAreaSize.item2/this.baseBrowserSize.height,t=e*this.baseAreaSize.item2/this.baseAreaSize.item2;this.$item2.style.width=Math.round(t)+"px",this.$item2.style.height=Math.round(e)+"px"}if(this.$item3){const e=this.stageSize.y*this.baseAreaSize.item3/this.baseBrowserSize.height,t=e*this.baseAreaSize.item3/this.baseAreaSize.item3;this.$item3.style.width=Math.round(t)+"px",this.$item3.style.height=Math.round(e)+"px"}if(this.$item4){const e=this.stageSize.y*this.baseAreaSize.item4/this.baseBrowserSize.height,t=e*this.baseAreaSize.item4/this.baseAreaSize.item4;this.$item4.style.width=Math.round(t)+"px",this.$item4.style.height=Math.round(e)+"px"}if(this.$item5){const e=this.stageSize.y*this.baseAreaSize.item5/this.baseBrowserSize.height,t=e*this.baseAreaSize.item5/this.baseAreaSize.item5;this.$item5.style.width=Math.round(t)+"px",this.$item5.style.height=Math.round(e)+"px"}}else{if(this.$item2){const e=this.stageSize.x*this.baseAreaSize.item2/this.baseBrowserSize.width,t=e*this.baseAreaSize.item2/this.baseAreaSize.item2;this.$item2.style.width=Math.round(e)+"px",this.$item2.style.height=Math.round(t)+"px"}if(this.$item3){const e=this.stageSize.x*this.baseAreaSize.item3/this.baseBrowserSize.width,t=e*this.baseAreaSize.item3/this.baseAreaSize.item3;this.$item3.style.width=Math.round(e)+"px",this.$item3.style.height=Math.round(t)+"px"}if(this.$item4){const e=this.stageSize.x*this.baseAreaSize.item4/this.baseBrowserSize.width,t=e*this.baseAreaSize.item4/this.baseAreaSize.item4;this.$item4.style.width=Math.round(e)+"px",this.$item4.style.height=Math.round(t)+"px"}if(this.$item5){const e=this.stageSize.x*this.baseAreaSize.item5/this.baseBrowserSize.width,t=e*this.baseAreaSize.item5/this.baseAreaSize.item5;this.$item5.style.width=Math.round(e)+"px",this.$item5.style.height=Math.round(t)+"px"}}}setImgsSize(){let e,t,i,a,o,c;Be.detectionManager.isMobileLayout?this.stageSizeAspect>this.aspectBrowserSize?(t=this.stageSize.y*this.baseImageSize.default.mobile.y/this.baseBrowserSize.mobile.height,e=t*this.baseImageSize.default.mobile.x/this.baseImageSize.default.mobile.y,a=this.stageSize.y*this.baseImageSize.curry.mobile.y/this.baseBrowserSize.mobile.height,i=a*this.baseImageSize.curry.mobile.x/this.baseImageSize.curry.mobile.y,c=this.stageSize.y*this.baseImageSize.bear.mobile.y/this.baseBrowserSize.mobile.height,o=c*this.baseImageSize.bear.mobile.x/this.baseImageSize.bear.mobile.y):(e=this.stageSize.x*this.baseImageSize.default.mobile.x/this.baseBrowserSize.mobile.width,t=e*this.baseImageSize.default.mobile.y/this.baseImageSize.default.mobile.x,i=this.stageSize.x*this.baseImageSize.curry.mobile.x/this.baseBrowserSize.mobile.width,a=i*this.baseImageSize.curry.mobile.y/this.baseImageSize.curry.mobile.x,o=this.stageSize.x*this.baseImageSize.bear.mobile.x/this.baseBrowserSize.mobile.width,c=o*this.baseImageSize.bear.mobile.y/this.baseImageSize.bear.mobile.x):this.stageSizeAspect>this.aspectBrowserSize?(t=this.stageSize.y*this.baseImageSize.default.y/this.baseBrowserSize.height,e=t*this.baseImageSize.default.x/this.baseImageSize.default.y,a=this.stageSize.y*this.baseImageSize.curry.y/this.baseBrowserSize.height,i=a*this.baseImageSize.curry.x/this.baseImageSize.curry.y,c=this.stageSize.y*this.baseImageSize.bear.y/this.baseBrowserSize.height,o=c*this.baseImageSize.bear.x/this.baseImageSize.bear.y):(e=this.stageSize.x*this.baseImageSize.default.x/this.baseBrowserSize.width,t=e*this.baseImageSize.default.y/this.baseImageSize.default.x,i=this.stageSize.x*this.baseImageSize.curry.x/this.baseBrowserSize.width,a=i*this.baseImageSize.curry.y/this.baseImageSize.curry.x,o=this.stageSize.x*this.baseImageSize.bear.x/this.baseBrowserSize.width,c=o*this.baseImageSize.bear.y/this.baseImageSize.bear.x),this.$logo&&(this.$logo.style.width=e+"px",this.$logo.style.height=t+"px"),this.$curry&&(this.$curry.style.width=i+"px",this.$curry.style.height=a+"px"),this.$bear&&(this.$bear.style.width=o+"px",this.$bear.style.height=c+"px")}setExplodePoints(){this.explodePoints.item2=this.$item2.offsetWidth/2,this.explodePoints.item3=this.$item3.offsetWidth/2,this.explodePoints.item4=this.$item4.offsetWidth/2,this.explodePoints.item5=this.$item5.offsetWidth/2}setTranslate(){this.baseTranslate.x=window.innerWidth*this.interactionPrams.translate.x,this.baseTranslate.y=window.innerHeight*this.interactionPrams.translate.y}updateTarget(){if(this.mouseInfo.isHovering||this.isDragging?(this.mouseInfo.dist.x=this.mouseInfo.x*this.interactionPrams.friction,this.mouseInfo.dist.y=this.mouseInfo.y*this.interactionPrams.friction):(this.mouseInfo.dist.x=0,this.mouseInfo.dist.y=0),this.amount.x=li(this.amount.x,this.mouseInfo.dist.x,this.interactionPrams.lerpMultiplier),this.amount.y=li(this.amount.y,this.mouseInfo.dist.y,this.interactionPrams.lerpMultiplier),Math.abs(this.amount.x-this.mouseInfo.dist.x)<1e-4&&(this.enableUpdate=!1),this.mouseInfo.isHovering&&this.amount.x!==0){const e=this.amount.x*this.baseTranslate.x;let t=this.amount.y*this.baseTranslate.y,i=this.amount.x*this.amount.y*360;const a=1+Math.abs(this.amount.x*this.amount.y)*10+this.addScale;(Be.detectionManager.isMobileDevice||Be.detectionManager.isTabletDevice)&&(t=0,i=this.amount.x*360),_e.set(this.$target,{x:e,y:t,rotation:i,scale:a})}}started(){requestAnimationFrame(()=>{this.hasItem?this.updateTargetItems():this.updateTarget()})}startAdsorb(){this.isAnimating||(this.isAdsorbing=!0)}updateTargetItems(){this.targetItemsInfo.forEach(e=>{if(this.isAdsorbing?(e.mouseInfo.dist.x=this.mouseInfo.x*e.interactionPrams.friction,e.mouseInfo.dist.y=this.mouseInfo.y*e.interactionPrams.friction):(e.mouseInfo.dist.x=0,e.mouseInfo.dist.y=0),e.amount.x=li(e.amount.x,e.mouseInfo.dist.x,e.interactionPrams.lerpMultiplier/Be.raf.fpsMultiplier),e.amount.y=li(e.amount.y,e.mouseInfo.dist.y,e.interactionPrams.lerpMultiplier/Be.raf.fpsMultiplier),this.isAdsorbing&&e.amount.x!==0){const t=Ln(e.amount.x*this.baseTranslate.x*e.interactionPrams.x,1e4);let i=Ln(e.amount.y*this.baseTranslate.y*e.interactionPrams.y,1e4),a=Ln(e.amount.x*e.amount.y*this.interactionPrams.roatatoin*e.interactionPrams.rotation,1e4);const o=Ln(1+Math.abs(e.amount.x*e.amount.y)*this.interactionPrams.scale+this.addScale,1e4);(Be.detectionManager.isMobileDevice||Be.detectionManager.isTabletDevice)&&(i=0,a=Ln(e.amount.x*.2*this.interactionPrams.roatatoin*e.interactionPrams.rotation,1e4)),_e.set(e.$item,{x:t,y:i,rotation:a,scale:o})}})}update(){!this.enableUpdate&&!this.isDragging||(this.hasItem?this.updateTargetItems():this.updateTarget())}reset(){this.mouseInfo.x=0,this.mouseInfo.y=0,this.amount.x=0,this.amount.y=0,this.enableUpdate=!1}leaveAnimation(e,t){this.isAnimating=!0,this.isAdsorbing=!1,this.mouseInfo.isHovering=!1;let i=0;if(t){const o=Math.abs(this.mouseInfo.x*this.stageSize.x*.5),c=Math.abs(this.mouseInfo.y*this.stageSize.y*.5),u=Math.sqrt(Math.pow(o,2)+Math.pow(c,2)),f=[this.explodePoints.item5,this.explodePoints.item4,this.explodePoints.item3,this.explodePoints.item2];i=4;for(let d=0;d<f.length;d++)if(u<f[d]){i=d;break}}else i="default";if(_e.killTweensOf(this,"addScale"),_e.to(this,{addScale:0,ease:"elastic.out(1, 0.4)",duration:this.interactionPrams.resetAnimationDuration}),this.hasItem){const o=[];this.targetItemsInfo.forEach((c,u)=>{_e.killTweensOf(c.$item);const f=u<3?u*this.interactionPrams.resetAnimationDelay:0;o.push(new Promise(d=>{_e.to(c.$item,{x:0,y:0,rotation:0,scale:1,ease:"elastic.out(1, 0.4)",duration:this.interactionPrams.resetAnimationDuration,delay:f,onComplete:()=>{this.mouseInfo.x=0,this.mouseInfo.y=0,d()}})}))}),Promise.all(o).then(()=>{this.isAnimating=!1,(this.mouseInfo.isHovering||this.isDragging)&&(this.enableUpdate=!0,this.startAdsorb(),this._onMouseMove(e))})}else _e.killTweensOf(this.$target),_e.to(this.$target,{x:0,y:0,rotation:0,scale:1,ease:"elastic.out",duration:1});let a=3;if(Be.detectionManager.isMobileLayout&&(a=2),i>=a){this.logoType+=1,this.logoType%=3;const o=0,c=.3,u="elastic.out(1, 0.9)";switch(this.logoType){case 0:this.stopBearLoopAnimation(),_e.killTweensOf(this.$bear),_e.to(this.$bear,{scale:0,ease:"elastic.out(1, 0.75)",duration:o}),_e.killTweensOf(this.$logo),_e.to(this.$logo,{scale:1,ease:u,duration:c});break;case 1:_e.killTweensOf(this.$logo),_e.to(this.$logo,{scale:0,ease:"elastic.out(1, 0.75)",duration:o}),_e.killTweensOf(this.$curry),_e.to(this.$curry,{scale:1,ease:u,duration:c});break;case 2:_e.killTweensOf(this.$curry),_e.to(this.$curry,{scale:0,ease:"elastic.out(1, 0.75)",duration:o}),_e.killTweensOf(this.$bear),this.startBearLoopAnimation(),_e.to(this.$bear,{scale:1,ease:u,duration:c});break}}_e.delayedCall(this.interactionPrams.resetAnimationDelay,()=>{this.callback.onMouseLeave(i,this.logoType)})}startBearLoopAnimation(){this.count=0,this.baerAnimationProgress=0,this.$bearAnimationItemAll.forEach((t,i)=>{i!==this.count?_e.set(t,{opacity:0}):_e.set(t,{opacity:1})});const e=()=>{_e.to(this,{baerAnimationProgress:1,duration:this.interactionPrams.itemBear.frameDuration,onComplete:()=>{this.count+=1,this.count%=this.$bearAnimationItemAll.length,this.$bearAnimationItemAll.forEach((t,i)=>{i!==this.count?_e.set(t,{opacity:0}):_e.set(t,{opacity:1})}),this.baerAnimationProgress=0,e()}})};e()}stopBearLoopAnimation(){this.baerAnimationProgress&&_e.killTweensOf(this,"baerAnimationProgress")}setMouseMove(e){e.touches&&e.touches[0]?(e.clientX=e.touches[0].clientX,e.clientY=e.touches[0].clientY):e.changedTouches&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),this.mouseInfo.x=qs((2*e.clientX-window.innerWidth)/window.innerWidth,-1,1),this.mouseInfo.y=qs((2*e.clientY-window.innerHeight)/window.innerHeight,-1,1)}_onMouseEnter(e){this.mouseInfo.isHovering||(this.mouseInfo.isHovering=!0,this.isAnimating||(this.startAdsorb(),_e.killTweensOf(this.$target),this.setMouseMove(e),this.enableUpdate=!0))}_onMouseLeave(e){this.mouseInfo.isHovering&&!this.isDragging&&(this.mouseInfo.isHovering=!1,this.isAnimating||this.leaveAnimation(e,!1))}_onMouseMove(e){!this.mouseInfo.isHovering&&!this.isDragging||(this.enableUpdate=!0,this.setMouseMove(e))}onResize(){this.setStageSize(),this.setAreaSize(),this.setImgsSize(),this.setExplodePoints(),this.setTranslate(),this.update()}onRaf(){Be.isKvInviewed&&this.update()}addGUI(){Be.gui&&(this.guiLogo=Be.gui.addFolder("Logo - center"),this.guiLogo.close(),this.guiLogoCommon=this.guiLogo.addFolder("Common logo center "),this.guiLogoCommon.close(),this.guiLogoCommon.add(this.interactionPrams,"resetAnimationDuration",.5,3,.01).name("弾けるアニメーションの秒数"),this.guiLogoCommon.add(this.interactionPrams,"resetAnimationDelay",0,.5,.01).name("弾けるアニメーションの遅延"),this.guiLogoCommon.add(this.interactionPrams,"scale",0,5,.01).name("拡大率"),this.guiLogoMain=this.guiLogo.addFolder("Main logo center"),this.guiLogoMain.close(),this.guiLogoMainItem0=this.guiLogoMain.addFolder("parts1 (上)"),this.guiLogoMainItem0.add(this.interactionPrams.item0,"x",0,2,.01).name("移動量 (x)"),this.guiLogoMainItem0.add(this.interactionPrams.item0,"y",0,2,.01).name("移動量 (y)"),this.guiLogoMainItem0.add(this.interactionPrams.item0,"rotation",0,2,.01).name("回転量"),this.guiLogoMainItem0.add(this.interactionPrams.item0,"lerpMultiplier",0,1,.01).name("lerp"),this.guiLogoMainItem0.add(this.interactionPrams.item0,"friction",0,2,.01).name("反発力（低い方が強くなる）"),this.guiLogoMainItem1=this.guiLogoMain.addFolder("parts2 (中)"),this.guiLogoMainItem1.add(this.interactionPrams.item1,"x",0,2,.01).name("移動量 (x)"),this.guiLogoMainItem1.add(this.interactionPrams.item1,"y",0,2,.01).name("移動量 (y)"),this.guiLogoMainItem1.add(this.interactionPrams.item1,"rotation",0,2,.01).name("回転量"),this.guiLogoMainItem1.add(this.interactionPrams.item1,"lerpMultiplier",0,1,.01).name("lerp"),this.guiLogoMainItem1.add(this.interactionPrams.item1,"friction",0,2,.01).name("反発力（低い方が強くなる）"),this.guiLogoMainItem2=this.guiLogoMain.addFolder("parts3 (下)"),this.guiLogoMainItem2.add(this.interactionPrams.item2,"x",0,2,.01).name("移動量 (x)"),this.guiLogoMainItem2.add(this.interactionPrams.item2,"y",0,2,.01).name("移動量 (y)"),this.guiLogoMainItem2.add(this.interactionPrams.item2,"rotation",0,2,.01).name("回転量"),this.guiLogoMainItem2.add(this.interactionPrams.item2,"lerpMultiplier",0,1,.01).name("lerp"),this.guiLogoMainItem2.add(this.interactionPrams.item2,"friction",0,2,.01).name("反発力（低い方が強くなる）"),this.guiLogoCurry=this.guiLogo.addFolder("Curry logo center"),this.guiLogoCurry.close(),this.guiLogoCurry.add(this.interactionPrams.itemCurry,"x",0,2,.01).name("移動量 (x)"),this.guiLogoCurry.add(this.interactionPrams.itemCurry,"y",0,2,.01).name("移動量 (y)"),this.guiLogoCurry.add(this.interactionPrams.itemCurry,"rotation",0,2,.01).name("回転量"),this.guiLogoCurry.add(this.interactionPrams.itemCurry,"lerpMultiplier",0,1,.01).name("lerp"),this.guiLogoCurry.add(this.interactionPrams.itemCurry,"friction",0,2,.01).name("反発力（低い方が強くなる）"),this.guiLogoBear=this.guiLogo.addFolder("Bear logo center"),this.guiLogoBear.close(),this.guiLogoBear.add(this.interactionPrams.itemBear,"x",0,2,.01).name("移動量 (x)"),this.guiLogoBear.add(this.interactionPrams.itemBear,"y",0,2,.01).name("移動量 (y)"),this.guiLogoBear.add(this.interactionPrams.itemBear,"rotation",0,2,.01).name("回転量"),this.guiLogoBear.add(this.interactionPrams.itemBear,"lerpMultiplier",0,1,.01).name("lerp"),this.guiLogoBear.add(this.interactionPrams.itemBear,"friction",0,2,.01).name("反発力（低い方が強くなる）"),this.guiLogoBear.add(this.interactionPrams.itemBear,"frameDuration",0,1,.001).name("1フレームあたりの切り替え秒数"))}}const WA={instanceName:"explode",$name:{target:"[data-explode-target]"},iconInfo:{duck:{length:{default:{min:15,max:20},0:{min:10,max:15},1:{min:15,max:20},2:{min:20,max:25},3:{min:25,max:30},4:{min:35,max:40}},size:{min:.08,max:.11},baseDuration:1.25,baseRandomDuration:.5,colors:["#000000","#e71f19"]},curry:{length:{default:{min:20,max:30},0:{min:10,max:20},1:{min:20,max:30},2:{min:30,max:40},3:{min:40,max:50},4:{min:50,max:60}},size:{min:.03,max:.08},useRotation:!1,baseDuration:1,baseRandomDuration:.5,colors:[]},bear:{length:{default:{min:20,max:30},0:{min:10,max:16},1:{min:20,max:30},2:{min:30,max:40},3:{min:40,max:50},4:{min:50,max:60}},size:{min:.03,max:.075},useRotation:!1,baseDuration:1,baseRandomDuration:.5,colors:[]},mobile:{duck:{length:{default:{min:30,max:40},0:{min:15,max:20},1:{min:15,max:20},2:{min:20,max:30},3:{min:20,max:30},4:{min:30,max:40}},size:{min:.1,max:.3},baseDuration:1,baseRandomDuration:.5,colors:["#000000","#e71f19"]},curry:{length:{default:{min:15,max:20},0:{min:15,max:20},1:{min:15,max:20},2:{min:20,max:30},3:{min:20,max:30},4:{min:30,max:40}},size:{min:.1,max:.24},useRotation:!1,baseDuration:1,baseRandomDuration:.5,colors:[]},bear:{length:{default:{min:15,max:20},0:{min:15,max:20},1:{min:15,max:20},2:{min:20,max:30},3:{min:20,max:30},4:{min:30,max:40}},size:{min:.1,max:.24},useRotation:!1,baseDuration:1,baseRandomDuration:.5,colors:[]}}}};class XA{constructor(e={}){this.webgl=null,this.$target=null,this.iconType="default",this.explodeMode="default",this.baseIconSize=0,this.currentIconSize=0,this.stageSize={x:0,y:0},Ht.merge(this,WA,e),Be.detectionManager.isMobileLayout&&(this.iconInfo=this.iconInfo.mobile)}init(){this.set$(),this.setBaseIconSize(),this.addHandlers(),this.addGUI()}destroy(){}set$(){this.$target=document.querySelector(this.$name.target)}addHandlers(){Be.resize&&Be.resize.addHandler(this.onResize.bind(this),this.instanceName)}setBaseIconSize(){this.baseIconSize=window.innerWidth,this.stageSize.x=window.innerWidth,this.stageSize.y=window.innerHeight}createIcon(e,t){this.$target&&(e===4&&t===0?this.webgl.explodeRun(e,t,!1):this.webgl.explodeRun(e,t))}onResize(){this.setBaseIconSize()}addGUI(){if(Be.gui){this.guiParticle=Be.gui.addFolder("Logo - particle"),this.guiParticle.close();const e=t=>{for(let i in t.controllers)t.controllers[i].updateDisplay()};this.guiDuckParticle=this.guiParticle.addFolder("Duck particle"),this.guiDuckParticle.close(),this.guiDuckParticle.add(this.iconInfo.duck,"baseDuration",0,3,.001).name("弾けるアニメの基本秒数"),this.guiDuckParticle.add(this.iconInfo.duck,"baseRandomDuration",0,3,.001).name("弾けるアニメの追加秒数（0 ~ x秒のランダムを基本秒数に追加）"),this.guiDuckParticleSize=this.guiDuckParticle.addFolder("パーティクルの大きさ"),this.guiDuckParticleSize.add(this.iconInfo.duck.size,"min",.01,2,.001).name("最小値").onChange(t=>{this.iconInfo.duck.size.max=Math.max(this.iconInfo.duck.size.max,this.iconInfo.duck.size.min+.01),e(this.guiDuckParticleSize)}),this.guiDuckParticleSize.add(this.iconInfo.duck.size,"max",.01,2,.001).name("最大値").onChange(t=>{this.iconInfo.duck.size.min=Math.min(this.iconInfo.duck.size.max,this.iconInfo.duck.size.min),e(this.guiDuckParticleSize)}),this.guiDuckParticleLength=this.guiDuckParticle.addFolder("パーティクルの数"),this.guiDuckParticleLength.add(this.iconInfo.duck.length.default,"min",0,1e3).name("ホバーアウト - 最小値").onChange(t=>{this.iconInfo.duck.length.default.max=Math.max(this.iconInfo.duck.length.default.max,this.iconInfo.duck.length.default.min+1),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length.default,"max",0,1e3).name("ホバーアウト - 最大値").onChange(t=>{this.iconInfo.duck.length.default.min=Math.min(this.iconInfo.duck.length.default.max,this.iconInfo.duck.length.default.min),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[0],"min",0,1e3).name("ドラッグアウト - 最小値 (1)").onChange(t=>{this.iconInfo.duck.length[0].max=Math.max(this.iconInfo.duck.length[0].max,this.iconInfo.duck.length[0].min+1),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[0],"max",0,1e3).name("ドラッグアウト - 最大値 (1)").onChange(t=>{this.iconInfo.duck.length[0].min=Math.min(this.iconInfo.duck.length[0].max,this.iconInfo.duck.length[0].min),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[1],"min",0,1e3).name("ドラッグアウト - 最小値 (2)").onChange(t=>{this.iconInfo.duck.length[1].max=Math.max(this.iconInfo.duck.length[1].max,this.iconInfo.duck.length[1].min+1),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[1],"max",0,1e3).name("ドラッグアウト - 最大値 (2)").onChange(t=>{this.iconInfo.duck.length[1].min=Math.min(this.iconInfo.duck.length[1].max,this.iconInfo.duck.length[1].min),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[2],"min",0,1e3).name("ドラッグアウト - 最小値 (3)").onChange(t=>{this.iconInfo.duck.length[2].max=Math.max(this.iconInfo.duck.length[2].max,this.iconInfo.duck.length[2].min+1),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[2],"max",0,1e3).name("ドラッグアウト - 最大値 (3)").onChange(t=>{this.iconInfo.duck.length[2].min=Math.min(this.iconInfo.duck.length[2].max,this.iconInfo.duck.length[2].min),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[3],"min",0,1e3).name("ドラッグアウト - 最小値 (4)").onChange(t=>{this.iconInfo.duck.length[3].max=Math.max(this.iconInfo.duck.length[3].max,this.iconInfo.duck.length[3].min+1),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[3],"max",0,1e3).name("ドラッグアウト - 最大値 (4)").onChange(t=>{this.iconInfo.duck.length[3].min=Math.min(this.iconInfo.duck.length[3].max,this.iconInfo.duck.length[3].min),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[4],"min",0,1e3).name("ドラッグアウト - 最小値 (5)").onChange(t=>{this.iconInfo.duck.length[4].max=Math.max(this.iconInfo.duck.length[4].max,this.iconInfo.duck.length[4].min+1),e(this.guiDuckParticleLength)}),this.guiDuckParticleLength.add(this.iconInfo.duck.length[4],"max",0,1e3).name("ドラッグアウト - 最大値 (5)").onChange(t=>{this.iconInfo.duck.length[4].min=Math.min(this.iconInfo.duck.length[4].max,this.iconInfo.duck.length[4].min),e(this.guiDuckParticleLength)}),this.guiCurryParticle=this.guiParticle.addFolder("Curry logo particle"),this.guiCurryParticle.close(),this.guiCurryParticle.add(this.iconInfo.curry,"baseDuration",0,3,.001).name("弾けるアニメの基本秒数"),this.guiCurryParticle.add(this.iconInfo.curry,"baseRandomDuration",0,3,.001).name("弾けるアニメの追加秒数（0 ~ x秒のランダムを基本秒数に追加）"),this.guiCurryParticleSize=this.guiCurryParticle.addFolder("パーティクルの大きさ"),this.guiCurryParticleSize.add(this.iconInfo.curry.size,"min",.01,2,.001).name("最小値").onChange(t=>{this.iconInfo.curry.size.max=Math.max(this.iconInfo.curry.size.max,this.iconInfo.curry.size.min+.01),e(this.guiCurryParticleSize)}),this.guiCurryParticleSize.add(this.iconInfo.curry.size,"max",.01,2,.001).name("最大値").onChange(t=>{this.iconInfo.curry.size.min=Math.min(this.iconInfo.curry.size.max,this.iconInfo.curry.size.min),e(this.guiCurryParticleSize)}),this.guiCurryParticleLength=this.guiCurryParticle.addFolder("パーティクルの数"),this.guiCurryParticleLength.add(this.iconInfo.curry.length.default,"min",0,1e3).name("ホバーアウト - 最小値").onChange(t=>{this.iconInfo.curry.length.default.max=Math.max(this.iconInfo.curry.length.default.max,this.iconInfo.curry.length.default.min+1),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length.default,"max",0,1e3).name("ホバーアウト - 最大値").onChange(t=>{this.iconInfo.curry.length.default.min=Math.min(this.iconInfo.curry.length.default.max,this.iconInfo.curry.length.default.min),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[0],"min",0,1e3).name("ドラッグアウト - 最小値 (1)").onChange(t=>{this.iconInfo.curry.length[0].max=Math.max(this.iconInfo.curry.length[0].max,this.iconInfo.curry.length[0].min+1),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[0],"max",0,1e3).name("ドラッグアウト - 最大値 (1)").onChange(t=>{this.iconInfo.curry.length[0].min=Math.min(this.iconInfo.curry.length[0].max,this.iconInfo.curry.length[0].min),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[1],"min",0,1e3).name("ドラッグアウト - 最小値 (2)").onChange(t=>{this.iconInfo.curry.length[1].max=Math.max(this.iconInfo.curry.length[1].max,this.iconInfo.curry.length[1].min+1),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[1],"max",0,1e3).name("ドラッグアウト - 最大値 (2)").onChange(t=>{this.iconInfo.curry.length[1].min=Math.min(this.iconInfo.curry.length[1].max,this.iconInfo.curry.length[1].min),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[2],"min",0,1e3).name("ドラッグアウト - 最小値 (3)").onChange(t=>{this.iconInfo.curry.length[2].max=Math.max(this.iconInfo.curry.length[2].max,this.iconInfo.curry.length[2].min+1),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[2],"max",0,1e3).name("ドラッグアウト - 最大値 (3)").onChange(t=>{this.iconInfo.curry.length[2].min=Math.min(this.iconInfo.curry.length[2].max,this.iconInfo.curry.length[2].min),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[3],"min",0,1e3).name("ドラッグアウト - 最小値 (4)").onChange(t=>{this.iconInfo.curry.length[3].max=Math.max(this.iconInfo.curry.length[3].max,this.iconInfo.curry.length[3].min+1),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[3],"max",0,1e3).name("ドラッグアウト - 最大値 (4)").onChange(t=>{this.iconInfo.curry.length[3].min=Math.min(this.iconInfo.curry.length[3].max,this.iconInfo.curry.length[3].min),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[4],"min",0,1e3).name("ドラッグアウト - 最小値 (5)").onChange(t=>{this.iconInfo.curry.length[4].max=Math.max(this.iconInfo.curry.length[4].max,this.iconInfo.curry.length[4].min+1),e(this.guiCurryParticleLength)}),this.guiCurryParticleLength.add(this.iconInfo.curry.length[4],"max",0,1e3).name("ドラッグアウト - 最大値 (5)").onChange(t=>{this.iconInfo.curry.length[4].min=Math.min(this.iconInfo.curry.length[4].max,this.iconInfo.curry.length[4].min),e(this.guiCurryParticleLength)}),this.guiBearParticle=this.guiParticle.addFolder("Bear logo particle"),this.guiBearParticle.close(),this.guiBearParticle.add(this.iconInfo.bear,"baseDuration",0,3,.001).name("弾けるアニメの基本秒数"),this.guiBearParticle.add(this.iconInfo.bear,"baseRandomDuration",0,3,.001).name("弾けるアニメの追加秒数（0 ~ x秒のランダムを基本秒数に追加）"),this.guiBearParticleSize=this.guiBearParticle.addFolder("パーティクルの大きさ"),this.guiBearParticleSize.add(this.iconInfo.bear.size,"min",.01,2,.001).name("最小値").onChange(t=>{this.iconInfo.bear.size.max=Math.max(this.iconInfo.bear.size.max,this.iconInfo.bear.size.min+.01),e(this.guiBearParticleSize)}),this.guiBearParticleSize.add(this.iconInfo.bear.size,"max",.01,2,.001).name("最大値").onChange(t=>{this.iconInfo.bear.size.min=Math.min(this.iconInfo.bear.size.max,this.iconInfo.bear.size.min),e(this.guiBearParticleSize)}),this.guiBearParticleLength=this.guiBearParticle.addFolder("パーティクルの数"),this.guiBearParticleLength.add(this.iconInfo.bear.length.default,"min",0,1e3).name("ホバーアウト - 最小値").onChange(t=>{this.iconInfo.bear.length.default.max=Math.max(this.iconInfo.bear.length.default.max,this.iconInfo.bear.length.default.min+1),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length.default,"max",0,1e3).name("ホバーアウト - 最大値").onChange(t=>{this.iconInfo.bear.length.default.min=Math.min(this.iconInfo.bear.length.default.max,this.iconInfo.bear.length.default.min),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[0],"min",0,1e3).name("ドラッグアウト - 最小値 (1)").onChange(t=>{this.iconInfo.bear.length[0].max=Math.max(this.iconInfo.bear.length[0].max,this.iconInfo.bear.length[0].min+1),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[0],"max",0,1e3).name("ドラッグアウト - 最大値 (1)").onChange(t=>{this.iconInfo.bear.length[0].min=Math.min(this.iconInfo.bear.length[0].max,this.iconInfo.bear.length[0].min),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[1],"min",0,1e3).name("ドラッグアウト - 最小値 (2)").onChange(t=>{this.iconInfo.bear.length[1].max=Math.max(this.iconInfo.bear.length[1].max,this.iconInfo.bear.length[1].min+1),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[1],"max",0,1e3).name("ドラッグアウト - 最大値 (2)").onChange(t=>{this.iconInfo.bear.length[1].min=Math.min(this.iconInfo.bear.length[1].max,this.iconInfo.bear.length[1].min),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[2],"min",0,1e3).name("ドラッグアウト - 最小値 (3)").onChange(t=>{this.iconInfo.bear.length[2].max=Math.max(this.iconInfo.bear.length[2].max,this.iconInfo.bear.length[2].min+1),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[2],"max",0,1e3).name("ドラッグアウト - 最大値 (3)").onChange(t=>{this.iconInfo.bear.length[2].min=Math.min(this.iconInfo.bear.length[2].max,this.iconInfo.bear.length[2].min),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[3],"min",0,1e3).name("ドラッグアウト - 最小値 (4)").onChange(t=>{this.iconInfo.bear.length[3].max=Math.max(this.iconInfo.bear.length[3].max,this.iconInfo.bear.length[3].min+1),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[3],"max",0,1e3).name("ドラッグアウト - 最大値 (4)").onChange(t=>{this.iconInfo.bear.length[3].min=Math.min(this.iconInfo.bear.length[3].max,this.iconInfo.bear.length[3].min),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[4],"min",0,1e3).name("ドラッグアウト - 最小値 (5)").onChange(t=>{this.iconInfo.bear.length[4].max=Math.max(this.iconInfo.bear.length[4].max,this.iconInfo.bear.length[4].min+1),e(this.guiBearParticleLength)}),this.guiBearParticleLength.add(this.iconInfo.bear.length[4],"max",0,1e3).name("ドラッグアウト - 最大値 (5)").onChange(t=>{this.iconInfo.bear.length[4].min=Math.min(this.iconInfo.bear.length[4].max,this.iconInfo.bear.length[4].min),e(this.guiBearParticleLength)})}}}const $A={instanceName:"ExPerspectiveCamera",cameraProps:{near:.01,far:1e4},cameraPosition:{x:0,y:0,z:0},cameraAspect:null,cameraFov:45,fitFovToViewport:!0,time:0,lookCenter:!0};class qA{constructor(e={}){this.stage=null,this.renderer=null,this.basePosition={x:0,y:0,z:0},Ht.merge(this,$A,e)}init(){this._setInstance(),this._setCamera(),this._setPosition()}destroy(){this.instance.clearViewOffset(),this.instance=null}_setInstance(){this.instance=new Xn,Ht.merge(this.instance,this.cameraProps)}_setCamera(){this._setFov(),this._setBasePosition(),this.instance.updateProjectionMatrix(),this.renderer.setSize(this.stage.stageSize.width,this.stage.stageSize.height)}_setFov(){this.instance.aspect=this.cameraAspect?this.cameraAspect:this.stage.stageSize.aspect.xy||document.body.clientWidth/window.innerHeight,this.instance.fov=this.cameraFov}_setBasePosition(){this.basePosition.x=this.cameraPosition.x,this.basePosition.y=this.cameraPosition.y,this.fitFovToViewport?this.basePosition.z=bA(this.stage.stageSize.height,this.instance.fov):this.basePosition.z=this.cameraPosition.z}_setPosition(){this.instance.position.x=this.basePosition.x,this.instance.position.y=this.basePosition.y,this.instance.position.z=this.basePosition.z}onResize(){this._setCamera()}onUpdate(){this._setPosition()}}const YA={instanceName:"BaseStage",dpr:Math.min(window.devicePixelRatio,1.5),rendererColor:{color:65280,alpha:0},webGLRendererParameters:{antialias:!1,alpha:!1},sceneParameters:{autoUpdate:!1}};class Jd{constructor(e={}){this.webgl={},this.detection=null,this.$canvas=null,this.$canvasContainer=null,this.renderer=null,this.scene=null,this.camera=null,this.stageSize={width:0,height:0,widthRatio:0,heightRatio:0,aspect:{xy:0,yx:0}},this.gui=null,Ht.merge(this,YA,e)}init(){this.$canvas?this.webGLRendererParameters.canvas=this.$canvas:this.webGLRendererParameters.canvas=document.createElement("canvas"),this.renderer=new dA(this.webGLRendererParameters),this.scene=new pA,this._setStageSize(),this._setCameraInstance(),this._initRenderer()}destroy(){this.camera&&this.camera.destroy(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss()),this.camera=null,this.renderer=null,this.scene=null}_setCameraInstance(){this.camera=new qA({stage:this,webgl:this.webgl,sizes:this.stageSize,renderer:this.renderer,detection:this.detection,gui:this.gui}),this.camera.init()}_initRenderer(){this.renderer.setClearColor(this.rendererColor.color,this.rendererColor.alpha),this.setRenderer()}setRenderer(){this.renderer&&(this.renderer.setSize(this.stageSize.width,this.stageSize.height),this.renderer.setPixelRatio(this.dpr))}hideRenderer(){this.renderer&&(this.renderer.setSize(0,0),this.renderer.setPixelRatio(.1))}_setStageSize(){if(this.$canvasContainer){const e=this.$canvasContainer.getBoundingClientRect();this.stageSize.width=e.width,this.stageSize.height=e.height}else this.stageSize.width=document.body.clientWidth,this.stageSize.height=window.innerHeight;this.stageSize.widthRatio=1/this.stageSize.width,this.stageSize.heightRatio=1/this.stageSize.height,this.stageSize.aspect.xy=this.stageSize.width/this.stageSize.height,this.stageSize.aspect.yx=this.stageSize.height/this.stageSize.width}onRender(){this.renderer.render(this.scene,this.camera.instance)}onResize(){this._setStageSize(),this.camera&&this.camera.onResize(this.stageSize),this.setRenderer()}onUpdate(e){this.camera&&this.camera.onUpdate(e),this.onRender()}onScrollUpdate(){this.camera&&this.camera.onUpdate(),this.onRender()}_checkWebGLRenderInfo(){this.renderer}}const KA={instanceName:"BaseWebgl",$name:{canvas:"[data-gl]",canvasContainer:"[data-gl-container]"},adjuster:{timeDelta:{digit:1e4,max:.019,min:.015}}};class ZA{constructor(e={}){this.time=new xA,this.timeDelta=0,this.$wrapper=document,this.$canvas=null,this.$canvasContainer=null,Ht.merge(this,KA,e)}init(){this._set$(),this._setStage(),this.addHandlers()}destroy(){this.removeHandlers(),this.stage.destroy()}_set$(){this.$canvasContainer=this.$wrapper.querySelector(this.$name.canvasContainer)||null,this.$canvasContainer&&!this.$canvas?this.$canvas=this.$canvasContainer.querySelector(this.$name.canvas)||null:this.$canvas||(this.$canvas=this.$wrapper.querySelector(this.$name.canvas)||null)}_setStage(){this.$canvas&&(this.stage=new Jd({$canvasContainer:this.$canvasContainer,$canvas:this.$canvas}),this.stage.init())}addHandlers(){Be.raf&&Be.raf.addHandler(this.onUpdate.bind(this),this.instanceName),Be.resize&&Be.resize.addHandler(this.onResize.bind(this),this.instanceName)}removeHandlers(){Be.raf&&Be.raf.removeHandler(this.instanceName),Be.resize&&Be.resize.removeHandler(this.instanceName)}onResize(){[this.stage].forEach(t=>{t&&t.onResize()})}onUpdate(e){this.calcTime(),this.stage&&this.stage.onUpdate(e)}calcTime(){this.timeDelta=this.time.getDelta(),this.timeDelta=yA(this.timeDelta,this.adjuster.timeDelta.digit),this.timeDelta=qs(this.timeDelta,this.adjuster.timeDelta.min,this.adjuster.timeDelta.max)}stop(){this.canUpdate=!1,this.canUpdateMesh=!1,this.canResize=!1}restart(){this.canUpdateMesh=!0,this.canUpdate=!0,this.canResize=!0}clear(){this.stop()}}const JA={};class QA extends Jd{constructor(e={}){super(),Ht.merge(this,JA,e)}init(){super.init()}_setStageSize(){super._setStageSize()}onRender(){this.camera&&this.camera.instance&&this.renderer.render(this.scene,this.camera.instance)}}var jA=`uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform vec2 uMeshResolution;

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;

mat2 scale2d_mat(vec2 _scale){
    return mat2(_scale.x, 0., 0., _scale.y);
}

void main()  {
  vUv = uv;
  vec3 pos = position;

  pos.xy *= scale2d_mat(uMeshResolution);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`,ew=`precision highp float;

varying vec2 vUv;
const float PI = 3.14159265;

void main() {
    gl_FragColor = vec4( vec3(1.,0.,0.), 1. );
}`;const tw={vs:jA,fs:ew,geometry:null,material:null,materialOption:{depthTest:!1,transparent:!0,alphaTest:.5,wireframe:!1}};class nw{constructor(e={}){this.vs=null,this.fs=null,this.webgl=null,this.mesh=null,this.uniforms={uTime:{value:0},uOpacity:{value:0},uStageResolution:{value:{x:0,y:0}},uMeshResolution:{value:{x:1,y:1}}},this.isInView=!1,Ht.merge(this,tw,e)}init(){this.material=new mA(Ht.merge({vertexShader:this.vs,fragmentShader:this.fs},this.materialOption)),this.material.uniforms=this.uniforms,this.material.side=ci,this.mesh=new fi(this.geometry,this.material)}destroy(){this.mesh&&(this.webgl.stage.scene.remove(this.mesh),this.material&&this.material.dispose(),this.mesh&&this.mesh.material&&this.mesh.material.dispose(),this.geometry&&this.geometry.dispose(),this.mesh&&this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh=null)}_setMeshSize(){}_setBaseSize(){this.uniforms.uStageResolution.value.x=this.webgl.stage.stageSize.width,this.uniforms.uStageResolution.value.y=this.webgl.stage.stageSize.height}onResize(){this._setBaseSize(),this._setMeshSize()}onUpdate(){}}var iw=`attribute vec2 uv;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uExplodeProgress;
uniform float uScale;
uniform float uTime;
uniform float uRotation;
uniform float uIsMainLogo;
uniform float uRandom;
uniform vec2 uMeshOffset;
uniform vec2 uMeshResolution;
uniform vec2 uRandomPos;
uniform vec2 uStageResolution;
varying vec2 vUv;

mat2 scale2d_mat(vec2 _scale){
    return mat2(_scale.x, 0., 0., _scale.y);
}
mat3 rotation3dZ(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
    c, s, 0.0,
    -s, c, 0.0,
    0.0, 0.0, 1.0
    );
}
mat3 rotation3dY(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
    );
}
const float PI = 3.14159265;

void main()  {
    vUv = uv;
    vec3 pos = position;
    pos.xy *= scale2d_mat(uMeshResolution * uScale);
    float size = max(uMeshResolution.x, uMeshResolution.y);

    float randomCurveX = sin(uTime + uRandomPos.x * 2.) * cos(uTime + uRandomPos.y * 2.);
    float randomCurveY = cos(uTime + uRandomPos.y * 2.) * sin(uTime + uRandomPos.x * 2.);

    vec2 curveMovement = vec2(randomCurveX, randomCurveY);

    vec2 normalizedDirection = normalize(uMeshOffset);
    vec2 perpendicularDirection = vec2(-normalizedDirection.x, normalizedDirection.x);

    if (uIsMainLogo == 1. && uRandomPos.x < 0.) {

        pos.xyz *= rotation3dY(PI * -1.);
    }

    vec2 translate = uMeshOffset;
    translate += ((perpendicularDirection * curveMovement * size * 0.3 * uRandom) * uExplodeProgress);

    pos.xy += translate;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);

}`,rw=`precision highp float;

uniform float uOpacity;
uniform float uOpacity2;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec2 uvTex = vUv;
    float opacity = uOpacity * uOpacity2;

    vec4 cDist = texture2D(uTexture, uvTex);

    cDist.a *= opacity;
    gl_FragColor = cDist;
}`;const sw={instanceName:"pageCoverMesh",$name:{}};class aw extends nw{constructor(e={}){super({vs:iw,fs:rw}),this.webgl=null,this.textures={},this.currentDuckTextures=[],this.duckAnimationProgress=0,this.uniforms=this.uniforms||{},this.width=0,this.height=0,this.originPos={x:0,y:0},this.meshOffset={x:0,y:0},this.index=0,Ht.merge(this,sw,e)}init(){super.init(),this._setUniforms(),this._set$(),this.setResolutions(),this._setBaseSize(),this.webgl.stage.scene.add(this.mesh)}destroy(){this.duckAnimationg=!1,this.duckAnimationProgress&&_e.killTweensOf(this,"duckAnimationProgress"),this.material.uniforms.uTexture&&this.material.uniforms.uTexture.value&&(this.material.uniforms.uTexture.value.dispose(),this.material.uniforms.uTexture.value=null),this.mesh.material&&this.mesh.material.uniforms.uTexture&&this.mesh.material.uniforms.uTexture.value&&(this.mesh.material.uniforms.uTexture.value.dispose(),this.mesh.material.uniforms.uTexture.value=null),this.uniforms.uTexture&&this.uniforms.uTexture.value&&(this.uniforms.uTexture.value.dispose(),this.uniforms.uTexture.value=null),super.destroy()}_setUniforms(){switch(Ht.merge(this.uniforms,{uOpacity:{value:1},uOpacity2:{value:0},uMeshOffset:{value:{x:0,y:0}},uIsMainLogo:{value:1},uRotation:{value:0},uRandomPos:{value:{x:0,y:0}},uExplodeProgress:{value:0},uScale:{value:1},uTexture:{value:null},uRandom:{value:Math.random()},uStageResolution:{value:{x:0,y:0}}}),this.logoType){case"0":this.currentDuckTextures=this.textures.duckItems[this.index%this.textures.duckItems.length],this.uniforms.uTexture.value=this.currentDuckTextures[0],this.duckFrameCount=0,this.duckAnimationg=!0;const e=()=>{requestAnimationFrame(()=>{_e.to(this,{duckAnimationProgress:1,duration:.1,onComplete:()=>{this.duckFrameCount+=1,this.duckFrameCount%=this.currentDuckTextures.length,this.uniforms.uTexture.value=this.currentDuckTextures[this.duckFrameCount],this.duckAnimationProgress=0,this.duckAnimationg&&e()}})})};e();break;case"1":const t=Math.floor(Math.random()*this.textures.curries.length);this.uniforms.uTexture.value=this.textures.curries[t];break;case"2":this.uniforms.uTexture.value=this.textures.bear;break}}_set$(){}setResolutions(){this.uniforms.uMeshResolution.value.x=this.width,this.uniforms.uMeshResolution.value.y=this.height,this.originPos.x=-(this.webgl.stage.stageSize.width*.5)+this.width*.5,this.originPos.y=this.webgl.stage.stageSize.height*.5-this.height*.5,this.meshOffset.x=0,this.meshOffset.y=0,this.mesh.position.z=.001,this.uniforms.uStageResolution.value.x=this.webgl.stage.stageSize.width,this.uniforms.uStageResolution.value.y=this.webgl.stage.stageSize.height}async explodeRun({x:e=0,y:t=0,duration:i=1,angleDegrees:a=0,theta:o=0,iconSize:c=0,startX:u=0,startY:f=0}){await new Promise(d=>{this.meshOffset.x=e,this.meshOffset.y=t,this.width=c,this.height=c,this.setResolutions(),this.logoType==="0"&&!this.isRandom?this.uniforms.uIsMainLogo.value=1:this.uniforms.uIsMainLogo.value=0,this.uniforms.uRotation.value=o-Zd(90),this.uniforms.uRandomPos.value={x:e,y:t};const p=.0125*Math.random();i=i,_e.fromTo(this.uniforms.uMeshOffset.value,{x:u,y:f},{x:e,y:t,duration:i,ease:"circ.out",delay:p,onComplete:()=>{requestAnimationFrame(()=>{d()})}}),_e.to(this.uniforms.uExplodeProgress,{value:1,duration:0,ease:"none"});const m=this.logoType==="0"?"cubic.out":"none";_e.to(this.uniforms.uScale,{value:Math.random()*.125,duration:i,ease:m,delay:p}),_e.to(this.uniforms.uOpacity2,{value:1,duration:.15,delay:p,ease:"none"}),_e.to(this.uniforms.uOpacity,{value:0,duration:i-.5,delay:p+.5,ease:"sine.out"})})}onResize(){this._setBaseSize(),this.setResolutions()}onUpdate(){this.uniforms.uTime.value+=.005/Be.raf.fpsMultiplier}}const ow={instanceName:"homeKvWebgl"};class lw{constructor(e={}){this.$contentRoot=document,this.explode=null,this.meshesItems=[],this.webgl=null,this.textures={},Ht.merge(this,ow,e)}init(){}destroy(){this._clearMesh()}setMeshes(e,t,i=!0){this.meshesItems=[],this.originalPlaneGeometry=new js(1,1,1,1);const a=[];let o=this.explode.iconInfo.default;switch(t=t.toString(),t){case"0":o=this.explode.iconInfo.duck;break;case"1":o=this.explode.iconInfo.curry;break;case"2":o=this.explode.iconInfo.bear;break}let c;switch(e=e.toString(),e){case"0":c=Math.floor(Math.random()*(o.length[0].max-o.length[0].min)+o.length[0].min);break;case"1":c=Math.floor(Math.random()*(o.length[1].max-o.length[1].min)+o.length[1].min);break;case"2":c=Math.floor(Math.random()*(o.length[2].max-o.length[2].min)+o.length[2].min);break;case"3":c=Math.floor(Math.random()*(o.length[3].max-o.length[3].min)+o.length[3].min);break;case"4":c=Math.floor(Math.random()*(o.length[4].max-o.length[4].min)+o.length[4].min);break;default:c=Math.floor(Math.random()*(o.length.default.max-o.length.default.min)+o.length.default.min);break}const u=[],f=window.innerWidth;for(let d=0;d<c;d++){const p=Math.round((Math.random()*(o.size.max-o.size.min)+o.size.min)*f);let m=Math.random()*Math.PI*2;const _=Math.max(this.webgl.stage.stageSize.width,this.webgl.stage.stageSize.height),M=Ln(_*.5-p*.5-Math.random()*_*.15,1e3);let A=(2*Math.PI*d+m)/c,R=Ln(A*(180/Math.PI),1e5),v=Ln(M*Math.cos(A)+Math.random()*_*.1,1e3),g=Ln(M*Math.sin(A)+Math.random()*_*.1,1e3),U=0,w=0;Be.detectionManager.isMobileLayout&&(U=Math.round(M*Math.cos(A)*.15),w=Math.round(M*Math.sin(A)*.15));const N=o.baseDuration+Math.random()*o.baseRandomDuration,W=new aw({geometry:this.originalPlaneGeometry,webgl:this.webgl,textures:this.textures,logoType:t,index:d});a.push(W),W.init(),u.push(new Promise(F=>{W.explodeRun({x:v,y:g,duration:N,theta:A,angleDegrees:R,iconSize:p,startX:U,startY:w}).then(()=>{F()})}))}this.meshesItems.push(a),Promise.all(u).then(()=>{a.forEach((d,p)=>{a[p].destroy(),this.meshesItems.pop()})}),this.originalPlaneGeometry&&(this.originalPlaneGeometry.dispose(),this.originalPlaneGeometry=null)}_clearMesh(){this.meshesItems.forEach(e=>{e.forEach(t=>{t.destroy(),t=null})}),this.meshesItems=[]}explodeRun(e,t,i=!0){this.setMeshes(e,t,i)}onResize(){this.meshesItems.forEach(e=>{e.forEach(t=>{t.onResize()})})}onUpdate(){this.meshesItems.forEach(e=>{e.forEach(t=>{t.onUpdate()})})}}const cw={instanceName:"Webgl"};class uw extends ZA{constructor(e={}){super(),this.explode=null,this.textures={},Ht.merge(this,cw,e)}init(){super.init(),this.homeKvWebgl=new lw({$contentRoot:document,webgl:this,explode:this.explode,textures:this.textures}),this.homeKvWebgl.init()}_setStage(){this.$canvas&&(this.stage=new QA({$canvasContainer:this.$canvasContainer,$canvas:this.$canvas,rendererColor:{color:1185306,alpha:0}}),this.stage&&this.stage.init())}addHandlers(){super.addHandlers()}removeHandlers(){super.removeHandlers()}startAnimation(){this.homeKvWebgl.explodeRun("3","0",!1)}explodeRun(e,t,i=!0){this.homeKvWebgl.explodeRun(e,t,i)}onResize(){requestAnimationFrame(()=>{super.onResize(),this.homeKvWebgl&&this.homeKvWebgl.onResize()})}onUpdate(e){Be.isKvInviewed&&(this.homeKvWebgl&&this.homeKvWebgl.onUpdate(),super.onUpdate(e))}}const hw={isDebug:!1,textureSrc:{duckItems:[["/assets/img/tex/ducks/duck_A1.webp","/assets/img/tex/ducks/duck_A2.webp","/assets/img/tex/ducks/duck_A3.webp","/assets/img/tex/ducks/duck_A4.webp"],["/assets/img/tex/ducks/duck_B1.webp","/assets/img/tex/ducks/duck_B2.webp","/assets/img/tex/ducks/duck_B3.webp","/assets/img/tex/ducks/duck_B4.webp"],["/assets/img/tex/ducks/duck_C1.webp","/assets/img/tex/ducks/duck_C2.webp","/assets/img/tex/ducks/duck_C3.webp","/assets/img/tex/ducks/duck_C4.webp"],["/assets/img/tex/ducks/duck_D1.webp","/assets/img/tex/ducks/duck_D2.webp","/assets/img/tex/ducks/duck_D3.webp","/assets/img/tex/ducks/duck_D4.webp"],["/assets/img/tex/ducks/duck_E1.webp","/assets/img/tex/ducks/duck_E2.webp","/assets/img/tex/ducks/duck_E3.webp","/assets/img/tex/ducks/duck_E4.webp"]],bear:"/assets/img/tex/bear.webp",curries:["/assets/img/tex/curry.webp","/assets/img/tex/curry_dish.webp"]},useOpeningStorageKey:"lastVisitHome",expiryPeriod:1e3*60*60};class fw{constructor(e={}){this.openingCallback=()=>{},Ht.merge(this,hw,e),this.hasRecentVisit=!1,Be.isDebug=this.isDebug,this.homeStageWebgl=new uw({isDebug:this.isDebug,instanceName:"homeStageWebgl",$wrapper:document.querySelector("#home_stage"),$canvas:document.querySelector("#home_stage_canvas"),explode:this.explode}),this.explode=new XA({isDebug:this.isDebug,instanceName:"explode",webgl:this.homeStageWebgl}),this.homeStageWebgl.explode=this.explode,this.homeStageMagneticHover=new VA({isDebug:this.isDebug,instanceName:"homeStageMagneticHover",callback:{onMouseLeave:(t,i)=>{this.explode.createIcon(t,i)}}})}init(){Be.init().then(()=>{this.checkHasRecentVisit()&&(this.hasRecentVisit=!0),this.$header=document.querySelector(".l-header"),this.$kvCopy=document.querySelector(".p-home-kv__copy"),this.hasRecentVisit&&(this.$header.classList.add("is-load-animating"),_e.fromTo(this.$header,{opacity:0},{opacity:1,ease:"none",duration:.5,onComplete:()=>{this.$header.classList.remove("is-load-animating")}}),_e.fromTo(this.$kvCopy,{opacity:0},{opacity:1,ease:"none",duration:.5,delay:.05}));const e=i=>{this.homeStageMagneticHover.init(),this.explode.init(),this.homeStageWebgl.textures=i,this.homeStageWebgl.init(),this.loadedAnimation()},t=[];this.textures={duckItems:[],curries:[],bear:null},Object.keys(this.textureSrc).forEach(i=>{i!=="curries"&&i!=="duckItems"&&t.push(new Promise((a,o)=>{new _c().load(this.textureSrc[i],c=>{this.textures[i]=c,this.textures[i].name=this.textureSrc[i],a(c)},c=>{},c=>{a()})}))}),Object.keys(this.textureSrc.curries).forEach(i=>{t.push(new Promise((a,o)=>{new _c().load(this.textureSrc.curries[i],c=>{const u=parseInt(i);this.textures.curries[u]=c,this.textures.curries[u].name=this.textureSrc.curries[i],a(c)},c=>{},c=>{a()})}))}),Object.keys(this.textureSrc.duckItems).forEach(i=>{this.textures.duckItems[i]=[],Object.keys(this.textureSrc.duckItems[i]).forEach(a=>{t.push(new Promise((o,c)=>{new _c().load(this.textureSrc.duckItems[i][a],u=>{const f=parseInt(a);this.textures.duckItems[i][f]=u,this.textures.duckItems[i][f].name=this.textureSrc.duckItems[i][a],o(u)},u=>{},u=>{o()})}))})}),t.push(new Promise((i,a)=>{_e.delayedCall(.4,()=>{i()})})),Promise.all(t).then(i=>{e(this.textures)})})}loadedAnimation(){this.$stage=document.querySelector("#home_stage"),this.$stageLogo=document.querySelector(".p-home_stage_logo"),this.hasRecentVisit||(this.$header.classList.add("is-load-animating"),_e.fromTo(this.$header,{opacity:1,y:"-100%"},{y:"0%",ease:"quart.out",duration:1,delay:1.2,onComplete:()=>{this.$header.classList.remove("is-load-animating")}}),_e.fromTo(this.$kvCopy,{opacity:0},{opacity:1,ease:"none",duration:.7,delay:1.25}),this.markVisit()),_e.fromTo(this.$stageLogo,{opacity:0},{opacity:1,duration:.2,ease:"none"}),_e.fromTo(this.$stageLogo,{scale:0},{x:0,y:0,rotate:0,scale:.3,duration:.925,ease:"elastic.out(1,0.6)",onComplete:()=>{}}),_e.delayedCall(1.1,()=>{_e.to(this.$stageLogo,{scale:1,duration:1.3,ease:"elastic.out",onComplete:()=>{this.homeStageMagneticHover.started(),requestAnimationFrame(()=>{this.$stageLogo.classList.add("is-loaded"),DA(this.$stageLogo,["transform"])})}}),this.homeStageWebgl&&this.homeStageWebgl.startAnimation(),_e.delayedCall(.8,()=>{this.homeStageMagneticHover.onResize(),this.$stage.classList.remove("is-loading")})})}destroy(){}checkHasRecentVisit(){const e=localStorage.getItem(this.useOpeningStorageKey);return e?new Date().getTime()-e<this.expiryPeriod:!1}markVisit(){const e=new Date().getTime();localStorage.setItem(this.useOpeningStorageKey,e)}}_e.registerPlugin(_d);class dw{constructor(){window.addEventListener("load",e=>{this.missionAnim()}),this.projectHeart(),this.projectInview(),this.clipPathImage(),this.valueItemInview(),this.verticalImageLoop()}missionKamoAnim(){const e=[...document.querySelectorAll(".p-home-kv__copyImg")],t=[...document.querySelectorAll(".p-home-kv__copyText")];_e.timeline({}).fromTo([e[0]],{x:0},{x:50}).fromTo([t[0]],{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 82% 0 0)"})}missionAnim(){const e=document.querySelector(".p-home-kv__copy"),t=document.querySelector(".p-home-mission__body"),i=document.documentElement.lang==="en",a=t.getBoundingClientRect();function o(p){let _;return window.matchMedia("(max-width: 1279px)").matches?_=i?-360:-400:window.matchMedia("(max-width: 1679px)").matches?_=i?-420:-480:window.matchMedia("(min-width: 1680px)").matches&&(_=i?-520:-540),.625*p+_}function c(){const p=window.innerWidth;return-o(p)}let u=c();window.addEventListener("resize",()=>{u=c()});let f;window.matchMedia("(max-width: 768px)").matches?f=1.25:window.matchMedia("(max-width: 1279px)").matches?f=2:window.matchMedia("(min-width: 1280px)").matches&&(f=2.5),window.addEventListener("resize",()=>{window.matchMedia("(max-width: 768px)").matches?f=1.25:window.matchMedia("(max-width: 1279px)").matches?f=2:window.matchMedia("(min-width: 1280px)").matches&&(f=2.5)});function d(){const p=[...document.querySelectorAll(".p-home-kv__copyBlock")],m=[...document.querySelectorAll(".p-home-kv__copyImg")],_=[...document.querySelectorAll(".p-home-kv__copyText")],M=p[0].getBoundingClientRect(),A=p[1].getBoundingClientRect();let R=i?M.width+150:M.width+70,v=A.width+260;const g=_e.timeline();g.set(e,{x:lt.isMatchMediaWidth?0:170,scale:1}),g.set(m[1],{opacity:0,scale:0}),g.fromTo(e,{x:lt.isMatchMediaWidth?0:170},{scale:f,x:lt.isMatchMediaWidth?0:()=>u,scrollTrigger:{trigger:e,start:"top 50%",endTrigger:t,end:lt.isMatchMediaWidth?"top 50%":"top 43%",pin:!0,anticipatePin:1,invalidateOnRefresh:!0,scrub:1}}).fromTo([m[0]],{xPercent:0},{xPercent:R,scrollTrigger:{trigger:e,start:"top 50%",endTrigger:t,end:lt.isMatchMediaWidth?"top-=300% 50%":"top-=300% 44%",scrub:1}}).fromTo([_[0]],{clipPath:i?"inset(0 83% 0 0)":"inset(0 73% 0 0)"},{clipPath:"inset(0 0% 0 0)",scrollTrigger:{trigger:e,start:"top 50%",endTrigger:t,end:lt.isMatchMediaWidth?"top-=300% 50%":"top-=300% 44%",scrub:1}}).to([m[0]],{scrollTrigger:{trigger:e,start:"top 50%",endTrigger:t,end:(lt.isMatchMediaWidth,"top-=300% 50%"),onEnterBack:()=>{_e.to([m[0]],{opacity:1,scale:1})},onLeave:()=>{_e.to([m[0]],{opacity:0,scale:0,duration:.4})}}}).fromTo([m[1]],{opacity:0,scale:0},{scrollTrigger:{trigger:t,start:"top-=300% 50%",end:"top-=300% 50%",onEnter:()=>{_e.to(m[1],{opacity:1,scale:1,duration:.4})},onLeaveBack:()=>{_e.to(m[1],{opacity:0,scale:0,duration:.4})}}},">").fromTo([m[1]],{xPercent:0},{xPercent:v,scrollTrigger:{trigger:t,start:"top-=300% 50%",endTrigger:t,end:lt.isMatchMediaWidth?"top 50%":"top 44%",scrub:1}},"<-0.5").fromTo([_[1]],{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",scrollTrigger:{trigger:t,start:"top-=300% 50%",endTrigger:t,end:lt.isMatchMediaWidth?"top 50%":"top 44%",scrub:1}},"<").to([m[1]],{scrollTrigger:{trigger:e,start:"top 50%",endTrigger:t,end:lt.isMatchMediaWidth?"top 50%":"top 44%",onEnterBack:()=>{document.querySelector(".p-home-mission").classList.remove("is-view")},onLeave:()=>{window.matchMedia("(max-width: 428px)").matches?_e.to([m[1]],{xPercent:v+a.width/3,duration:1}):lt.isMatchMediaWidth?_e.to([m[1]],{xPercent:v+a.width/1.1,duration:2}):window.matchMedia("(max-width: 1439px)").matches?_e.to([m[1]],{xPercent:v+a.width/1.9,duration:2}):window.matchMedia("(max-width: 1920px)").matches?_e.to([m[1]],{xPercent:v+a.width/2.5,duration:2}):window.matchMedia("(max-width: 2560px)").matches&&_e.to([m[1]],{xPercent:v+a.width/1.8,duration:2.5}),document.querySelector(".p-home-mission").classList.add("is-view")}}})}d()}projectHeart(){const e=document.querySelector(".p-home-project"),t=document.querySelector("#humanmade .p-home-project-brnds__head"),i=document.querySelector(".p-home-project__heart img");_e.set(i,{scale:.2,transformOrigin:"center"}),_e.to(i,{scale:1,scrollTrigger:{trigger:e,start:"top-=8% 90%",endTrigger:t,end:"bottom 90%",scrub:1}})}projectInview(){document.querySelectorAll(".p-home-project-brnds").forEach(a=>{const o=a.querySelector(".p-home-project-brnds__head"),c=a.querySelector(".p-home-project-brnds__body"),u=_e.timeline({});_e.set([o,c],{transformOrigin:"right bottom"}),u.fromTo(o,{xPercent:10,yPercent:10},{xPercent:0,yPercent:0,scrollTrigger:{trigger:o,start:"top-=50% 80%",end:"top 80%",scrub:1}}).fromTo(c,{xPercent:lt.isMatchMediaWidth?12:20,yPercent:lt.isMatchMediaWidth?12:20},{xPercent:0,yPercent:0,scrollTrigger:{trigger:c,start:lt.isMatchMediaWidth?"top-=300% 90%":"top-=250% 80%",end:lt.isMatchMediaWidth?"top 90%":"top 80%",scrub:1}})}),document.querySelectorAll(".p-home-project-collabo").forEach(a=>{const o=a.querySelector(".p-home-project-collabo__head"),c=a.querySelector(".p-home-project-collabo__body");[...o.querySelectorAll(".p-home-project-collabo__item")].forEach((f,d)=>{_e.fromTo(f,{xPercent:lt.isMatchMediaWidth?8:10,yPercent:lt.isMatchMediaWidth?4*d:10*d},{xPercent:0,yPercent:0,scrollTrigger:{trigger:f,start:lt.isMatchMediaWidth?"top-=100% 85%":"top-=50% 80%",end:lt.isMatchMediaWidth?"bottom 85%":"bottom 80%",scrub:1,stagger:{amount:.28*d}}})}),_e.fromTo(c,{xPercent:lt.isMatchMediaWidth?12:20,yPercent:lt.isMatchMediaWidth?12:20},{xPercent:0,yPercent:0,scrollTrigger:{trigger:c,start:lt.isMatchMediaWidth?"top-=400% 95%":"top-=250% 80%",end:lt.isMatchMediaWidth?"bottom 95%":"bottom 80%",scrub:1}})}),document.querySelectorAll(".p-home-project-social").forEach(a=>{const o=a.querySelector(".p-home-project-social__head"),c=a.querySelector(".p-home-project-social__body");[...o.querySelectorAll(".p-home-project-social__item")].forEach((f,d)=>{_e.fromTo(f,{xPercent:lt.isMatchMediaWidth?8:10,yPercent:lt.isMatchMediaWidth?4*d:10*d},{xPercent:0,yPercent:0,scrollTrigger:{trigger:f,start:lt.isMatchMediaWidth?"top-=100% 85%":"top-=50% 80%",end:lt.isMatchMediaWidth?"bottom 85%":"bottom 80%",scrub:1,stagger:{amount:.28*d}}}),_e.fromTo(c,{xPercent:lt.isMatchMediaWidth?8:5,yPercent:lt.isMatchMediaWidth?12:20},{xPercent:0,yPercent:0,scrollTrigger:{trigger:c,start:lt.isMatchMediaWidth?"top-=400% 95%":"top-=50% 80%",end:lt.isMatchMediaWidth?"bottom 95%":"bottom 80%",scrub:1}})})})}clipPathImage(){const e=document.querySelector(".p-home-project__layers"),t=[...document.querySelectorAll(".p-home-project__layersItem")];_e.timeline({}).to(t[1],{clipPath:"inset(0% 0px 0px)",scrollTrigger:{trigger:e,start:"top 50%",end:"top+=100% 50%",scrub:1}}).to(t[2],{clipPath:"inset(0% 0px 0px)",scrollTrigger:{trigger:e,start:"top+=50% 50%",end:"top+=100% 50%",scrub:1}})}valueItemInview(){if(document.documentElement.lang==="en"){const t=document.querySelector(".p-home-values__list");[...t.querySelectorAll(".p-home-values__item")].forEach((a,o)=>{_e.fromTo(a,{yPercent:12,opacity:0},{scrollTrigger:{trigger:lt.isMatchMediaWidth?a:t,start:lt.isMatchMediaWidth?"top 100%":"top-=12% 80%",end:lt.isMatchMediaWidth?"bottom 100%":"bottom 80%",onEnter:()=>{lt.isMatchMediaWidth?_e.to(a,{yPercent:0,opacity:1,duration:.45,ease:qh}):_e.to(a,{yPercent:0,opacity:1,duration:.45,ease:qh,delay:.08*o,stagger:{amount:.08*o,from:"start"}})}}})})}}verticalImageLoop(){const e={val:0};let t,i=0;const a=document.querySelector(".p-home-brandBg"),o=_e.utils.toArray(".p-home-brandBg__col");if(o.forEach((c,u)=>{const f=c.childNodes;f.forEach(d=>{var p=d.cloneNode(!0);c.appendChild(p)}),f.forEach(d=>{let p=d.parentElement.clientHeight,m=u%2!==0?"+=":"-=";_e.to(d,{y:m+Number(p/2),duration:15,repeat:-1,ease:"none",modifiers:{y:_e.utils.unitize(_=>(m=="+="?(i+=e.val,_=(parseFloat(_)-i)%(p*.5)):(i+=e.val,_=(parseFloat(_)+i)%-Number(p*.5)),_))}})})}),!lt.isMatchMediaWidth){const c=lt.isMatchMediaWidth?27e3:2e3,u=lt.isMatchMediaWidth?28e3:3e3;_d.create({trigger:a,start:"top 50%",end:"bottom 50%",onUpdate:function(f){const d=f.getVelocity();d>0&&(t&&t.kill(),e.val=-d/c,t=_e.to(e,{val:0})),d<0&&(t&&t.kill(),e.val=-d/u,t=_e.to(e,{val:0}))}})}window.addEventListener("resize",()=>{o.forEach((c,u)=>{c.childNodes.forEach(d=>{let p=d.parentElement.clientHeight,m=u%2!==0?"+=":"-=";_e.to(d,{y:m+Number(p/2),duration:15,repeat:-1,ease:"none",modifiers:{y:_e.utils.unitize(_=>(m=="+="?(i+=e.val,_=(parseFloat(_)-i)%(p*.5)):(i+=e.val,_=(parseFloat(_)+i)%-Number(p*.5)),_))}})})})})}}window.addEventListener("DOMContentLoaded",s=>{new dw,new fw().init()});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/stats.min.ClHQFf_V.js","assets/build.4pngAmH-.20241028.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
