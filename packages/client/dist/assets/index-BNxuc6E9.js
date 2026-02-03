(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="160",zd=0,Za=1,kd=2,tu=1,nu=2,kn=3,nn=0,Ht=1,Ct=2,ri=0,tr=1,Bo=2,ja=3,Ja=4,Hd=5,Ei=100,Gd=101,Vd=102,Qa=103,el=104,Wd=200,Xd=201,qd=202,Yd=203,zo=204,ko=205,$d=206,Kd=207,Zd=208,jd=209,Jd=210,Qd=211,eh=212,th=213,nh=214,ih=0,rh=1,sh=2,As=3,oh=4,ah=5,lh=6,ch=7,ha=0,uh=1,dh=2,si=0,hh=1,fh=2,ph=3,mh=4,gh=5,_h=6,iu=300,or=301,ar=302,Ho=303,Go=304,ks=306,mn=1e3,_n=1001,Vo=1002,vt=1003,tl=1004,ro=1005,lt=1006,vh=1007,Ft=1008,oi=1009,xh=1010,Mh=1011,fa=1012,ru=1013,ti=1014,ni=1015,Or=1016,su=1017,ou=1018,yi=1020,Eh=1021,vn=1023,Sh=1024,yh=1025,Ti=1026,lr=1027,Th=1028,au=1029,Ah=1030,lu=1031,cu=1033,so=33776,oo=33777,ao=33778,lo=33779,nl=35840,il=35841,rl=35842,sl=35843,uu=36196,ol=37492,al=37496,ll=37808,cl=37809,ul=37810,dl=37811,hl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Ml=37820,El=37821,co=36492,Sl=36494,yl=36495,bh=36283,Tl=36284,Al=36285,bl=36286,du=3e3,Ai=3001,wh=3200,Rh=3201,pa=0,Ch=1,un="",Mt="srgb",Vn="srgb-linear",ma="display-p3",Hs="display-p3-linear",bs="linear",at="srgb",ws="rec709",Rs="p3",Ui=7680,wl=519,Lh=512,Ph=513,Ih=514,hu=515,Dh=516,Uh=517,Nh=518,Oh=519,Rl=35044,Fh=35048,Cl="300 es",Wo=1035,Gn=2e3,Cs=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const br=Math.PI/180,Fr=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function ga(n,e){return(n%e+e)%e}function Bh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zh(n,e,t){return n!==e?(t-n)/(e-n):0}function wr(n,e,t){return(1-t)*n+t*e}function kh(n,e,t,i){return wr(n,e,1-Math.exp(-t*i))}function Hh(n,e=1){return e-Math.abs(ga(n,e*2)-e)}function Gh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xh(n,e){return n+Math.random()*(e-n)}function qh(n){return n*(.5-Math.random())}function Yh(n){n!==void 0&&(Ll=n);let e=Ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $h(n){return n*br}function Kh(n){return n*Fr}function Xo(n){return(n&n-1)===0&&n!==0}function Zh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ls(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jh(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pl={DEG2RAD:br,RAD2DEG:Fr,generateUUID:pr,clamp:Kt,euclideanModulo:ga,mapLinear:Bh,inverseLerp:zh,lerp:wr,damp:kh,pingpong:Hh,smoothstep:Gh,smootherstep:Vh,randInt:Wh,randFloat:Xh,randFloatSpread:qh,seededRandom:Yh,degToRad:$h,radToDeg:Kh,isPowerOfTwo:Xo,ceilPowerOfTwo:Zh,floorPowerOfTwo:Ls,setQuaternionFromProperEuler:jh,normalize:qt,denormalize:Ji};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],_=i[8],g=r[0],p=r[3],h=r[6],T=r[1],E=r[4],b=r[7],L=r[2],w=r[5],y=r[8];return s[0]=a*g+o*T+l*L,s[3]=a*p+o*E+l*w,s[6]=a*h+o*b+l*y,s[1]=c*g+u*T+d*L,s[4]=c*p+u*E+d*w,s[7]=c*h+u*b+d*y,s[2]=f*g+m*T+_*L,s[5]=f*p+m*E+_*w,s[8]=f*h+m*b+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,m=c*s-a*l,_=t*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Ge;function fu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jh(){const n=Br("canvas");return n.style.display="block",n}const Il={};function Rr(n){n in Il||(Il[n]=!0,console.warn(n))}const Dl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ul=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[Vn]:{transfer:bs,primaries:ws,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:at,primaries:ws,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hs]:{transfer:bs,primaries:Rs,toReference:n=>n.applyMatrix3(Ul),fromReference:n=>n.applyMatrix3(Dl)},[ma]:{transfer:at,primaries:Rs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ul),fromReference:n=>n.applyMatrix3(Dl).convertLinearToSRGB()}},Qh=new Set([Vn,Hs]),Qe={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qr[e].toReference,r=qr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qr[n].primaries},getTransfer:function(n){return n===un?bs:qr[n].transfer}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=Br("canvas")),Ni.width=e.width,Ni.height=e.height;const i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ef=0;class mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fo(r[a].image)):s.push(fo(r[a]))}else s=fo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;class jt extends fr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=_n,r=_n,s=lt,a=Ft,o=vn,l=oi,c=jt.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=pr(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ai?Mt:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Ai:du}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?Mt:un}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=iu;jt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,L=(h+1)/2,w=(u+f)/4,y=(d+g)/4,q=(_+p)/4;return E>b&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=y/i):b>L?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=w/r,s=q/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=y/s,r=q/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-g)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ai?Mt:un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends nf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gu extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rf extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==_){let p=1-o;const h=l*f+c*m+u*_+d*g,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),w=Math.atan2(L,h*T);p=Math.sin(p*w)/L,o=Math.sin(o*w)/L}const b=o*T;if(l=l*p+f*b,c=c*p+m*b,u=u*p+_*b,d=d*p+g*b,p===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*m-c*f,e[t+1]=l*_+u*f+c*d-o*m,e[t+2]=c*_+u*m+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new D,Nl=new mr;class Di{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),$r.subVectors(this.max,xr),Oi.subVectors(e.a,xr),Fi.subVectors(e.b,xr),Bi.subVectors(e.c,xr),$n.subVectors(Fi,Oi),Kn.subVectors(Bi,Fi),fi.subVectors(Oi,Bi);let t=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!mo(t,Oi,Fi,Bi,$r)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Oi,Fi,Bi,$r))?!1:(Kr.crossVectors($n,Kn),t=[Kr.x,Kr.y,Kr.z],mo(t,Oi,Fi,Bi,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,Yr=new Di,Oi=new D,Fi=new D,Bi=new D,$n=new D,Kn=new D,fi=new D,xr=new D,$r=new D,Kr=new D,pi=new D;function mo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const sf=new Di,Mr=new D,go=new D;class Hr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(go)),this.expandByPoint(Mr.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new D,_o=new D,Zr=new D,Zn=new D,vo=new D,jr=new D,xo=new D;class of{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_o.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(_o);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Zn.dot(this.direction),l=-Zn.dot(Zr),c=Zn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_o).addScaledVector(Zr,f),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){vo.subVectors(t,e),jr.subVectors(i,e),xo.crossVectors(vo,jr);let a=this.direction.dot(xo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(Zn,jr));if(l<0)return null;const c=o*this.direction.dot(vo.cross(Zn));if(c<0||l+c>a)return null;const u=-o*Zn.dot(xo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,m,_,g,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,m,_,g,p)}set(e,t,i,r,s,a,o,l,c,u,d,f,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,g=c*d;t[0]=f+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,lf)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),jn.crossVectors(i,Qt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),jn.crossVectors(i,Qt)),jn.normalize(),Jr.crossVectors(Qt,jn),r[0]=jn.x,r[4]=Jr.x,r[8]=Qt.x,r[1]=jn.y,r[5]=Jr.y,r[9]=Qt.y,r[2]=jn.z,r[6]=Jr.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],T=i[3],E=i[7],b=i[11],L=i[15],w=r[0],y=r[4],q=r[8],M=r[12],A=r[1],k=r[5],W=r[9],te=r[13],C=r[2],B=r[6],V=r[10],Y=r[14],X=r[3],$=r[7],K=r[11],ne=r[15];return s[0]=a*w+o*A+l*C+c*X,s[4]=a*y+o*k+l*B+c*$,s[8]=a*q+o*W+l*V+c*K,s[12]=a*M+o*te+l*Y+c*ne,s[1]=u*w+d*A+f*C+m*X,s[5]=u*y+d*k+f*B+m*$,s[9]=u*q+d*W+f*V+m*K,s[13]=u*M+d*te+f*Y+m*ne,s[2]=_*w+g*A+p*C+h*X,s[6]=_*y+g*k+p*B+h*$,s[10]=_*q+g*W+p*V+h*K,s[14]=_*M+g*te+p*Y+h*ne,s[3]=T*w+E*A+b*C+L*X,s[7]=T*y+E*k+b*B+L*$,s[11]=T*q+E*W+b*V+L*K,s[15]=T*M+E*te+b*Y+L*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*m-i*l*m)+g*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+p*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],T=d*p*c-g*f*c+g*l*m-o*p*m-d*l*h+o*f*h,E=_*f*c-u*p*c-_*l*m+a*p*m+u*l*h-a*f*h,b=u*g*c-_*d*c+_*o*m-a*g*m-u*o*h+a*d*h,L=_*d*l-u*g*l-_*o*f+a*g*f+u*o*p-a*d*p,w=t*T+i*E+r*b+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=T*y,e[1]=(g*f*s-d*p*s-g*r*m+i*p*m+d*r*h-i*f*h)*y,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*h+i*l*h)*y,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*m-i*l*m)*y,e[4]=E*y,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*h+t*f*h)*y,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*h-t*l*h)*y,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*y,e[8]=b*y,e[9]=(_*d*s-u*g*s-_*i*m+t*g*m+u*i*h-t*d*h)*y,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*h+t*o*h)*y,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*m-t*o*m)*y,e[12]=L*y,e[13]=(u*g*r-_*d*r+_*i*f-t*g*f-u*i*p+t*d*p)*y,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*p-t*o*p)*y,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,m=s*u,_=s*d,g=a*u,p=a*d,h=o*d,T=l*c,E=l*u,b=l*d,L=i.x,w=i.y,y=i.z;return r[0]=(1-(g+h))*L,r[1]=(m+b)*L,r[2]=(_-E)*L,r[3]=0,r[4]=(m-b)*w,r[5]=(1-(f+h))*w,r[6]=(p+T)*w,r[7]=0,r[8]=(_+E)*y,r[9]=(p-T)*y,r[10]=(1-(f+g))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(o===Gn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Cs)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),f=(t+e)*c,m=(i+r)*u;let _,g;if(o===Gn)_=(a+s)*d,g=-2*d;else if(o===Cs)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zi=new D,fn=new mt,af=new D(0,0,0),lf=new D(1,1,1),jn=new D,Jr=new D,Qt=new D,Ol=new mt,Fl=new mr;class Gs{constructor(e=0,t=0,i=0,r=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cf=0;const Bl=new D,ki=new mr,On=new mt,Qr=new D,Er=new D,uf=new D,df=new mr,zl=new D(1,0,0),kl=new D(0,1,0),Hl=new D(0,0,1),hf={type:"added"},ff={type:"removed"};class St extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new D,t=new Gs,i=new mr,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Er,Qr,this.up):On.lookAt(Qr,Er,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(On),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new D(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new D,Fn=new D,Mo=new D,Bn=new D,Hi=new D,Gi=new D,Gl=new D,Eo=new D,So=new D,yo=new D;let es=!1;class gn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),Fn.subVectors(i,t),Mo.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Fn),l=pn.dot(Mo),c=Fn.dot(Fn),u=Fn.dot(Mo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,r,s,a,o,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Fn.subVectors(e,t),pn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Gi.subVectors(s,i),Eo.subVectors(e,i);const l=Hi.dot(Eo),c=Gi.dot(Eo);if(l<=0&&c<=0)return t.copy(i);So.subVectors(e,r);const u=Hi.dot(So),d=Gi.dot(So);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hi,a);yo.subVectors(e,s);const m=Hi.dot(yo),_=Gi.dot(yo);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Gi,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return Gl.subVectors(s,r),o=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(Gl,o);const h=1/(p+g+f);return a=g*h,o=f*h,t.copy(i).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=ga(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=To(a,s,e+1/3),this.g=To(a,s,e),this.b=To(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=vu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Qe.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Kt(Nt.r*255,0,255))*65536+Math.round(Kt(Nt.g*255,0,255))*256+Math.round(Kt(Nt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Mt){Qe.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ts);const i=wr(Jn.h,ts.h,t),r=wr(Jn.s,ts.s,t),s=wr(Jn.l,ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new we;we.NAMES=vu;let pf=0;class gr extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=tr,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=ko,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zo&&(i.blendSrc=this.blendSrc),this.blendDst!==ko&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cr extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new D,ns=new Ke;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}}class xu extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mu extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ln extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mf=0;const on=new mt,Ao=new St,Vi=new D,en=new Di,Sr=new Di,wt=new D;class ci extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?Mu:xu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(en.min,Sr.min),en.expandByPoint(wt),wt.addVectors(en.max,Sr.max),en.expandByPoint(wt)):(en.expandByPoint(Sr.min),en.expandByPoint(Sr.max))}en.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),wt.add(Vi)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new D,u[A]=new D;const d=new D,f=new D,m=new D,_=new Ke,g=new Ke,p=new Ke,h=new D,T=new D;function E(A,k,W){d.fromArray(r,A*3),f.fromArray(r,k*3),m.fromArray(r,W*3),_.fromArray(a,A*2),g.fromArray(a,k*2),p.fromArray(a,W*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const te=1/(g.x*p.y-p.x*g.y);isFinite(te)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(te),T.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(te),c[A].add(h),c[k].add(h),c[W].add(h),u[A].add(T),u[k].add(T),u[W].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let A=0,k=b.length;A<k;++A){const W=b[A],te=W.start,C=W.count;for(let B=te,V=te+C;B<V;B+=3)E(i[B+0],i[B+1],i[B+2])}const L=new D,w=new D,y=new D,q=new D;function M(A){y.fromArray(s,A*3),q.copy(y);const k=c[A];L.copy(k),L.sub(y.multiplyScalar(y.dot(k))).normalize(),w.crossVectors(q,k);const te=w.dot(u[A])<0?-1:1;l[A*4]=L.x,l[A*4+1]=L.y,l[A*4+2]=L.z,l[A*4+3]=te}for(let A=0,k=b.length;A<k;++A){const W=b[A],te=W.start,C=W.count;for(let B=te,V=te+C;B<V;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new xn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new mt,mi=new of,is=new Hr,Wl=new D,Wi=new D,Xi=new D,qi=new D,bo=new D,rs=new D,ss=new Ke,os=new Ke,as=new Ke,Xl=new D,ql=new D,Yl=new D,ls=new D,cs=new D;class Ve extends St{constructor(e=new ci,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(bo.fromBufferAttribute(d,e),a?rs.addScaledVector(bo,u):rs.addScaledVector(bo.sub(t),u))}t.add(rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(is.containsPoint(mi.origin)===!1&&(mi.intersectSphere(is,Wl)===null||mi.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Vl.copy(s).invert(),mi.copy(e.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,L=E;b<L;b+=3){const w=o.getX(b),y=o.getX(b+1),q=o.getX(b+2);r=us(this,h,e,i,c,u,d,w,y,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const T=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);r=us(this,a,e,i,c,u,d,T,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,L=E;b<L;b+=3){const w=b,y=b+1,q=b+2;r=us(this,h,e,i,c,u,d,w,y,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const T=p,E=p+1,b=p+2;r=us(this,a,e,i,c,u,d,T,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function gf(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===nn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:n}}function us(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Wi),n.getVertexPosition(l,Xi),n.getVertexPosition(c,qi);const u=gf(n,e,t,i,Wi,Xi,qi,ls);if(u){r&&(ss.fromBufferAttribute(r,o),os.fromBufferAttribute(r,l),as.fromBufferAttribute(r,c),u.uv=gn.getInterpolation(ls,Wi,Xi,qi,ss,os,as,new Ke)),s&&(ss.fromBufferAttribute(s,o),os.fromBufferAttribute(s,l),as.fromBufferAttribute(s,c),u.uv1=gn.getInterpolation(ls,Wi,Xi,qi,ss,os,as,new Ke),u.uv2=u.uv1),a&&(Xl.fromBufferAttribute(a,o),ql.fromBufferAttribute(a,l),Yl.fromBufferAttribute(a,c),u.normal=gn.getInterpolation(ls,Wi,Xi,qi,Xl,ql,Yl,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};gn.getNormal(Wi,Xi,qi,d.normal),u.face=d}return u}class Wn extends ci{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(d,2));function _(g,p,h,T,E,b,L,w,y,q,M){const A=b/y,k=L/q,W=b/2,te=L/2,C=w/2,B=y+1,V=q+1;let Y=0,X=0;const $=new D;for(let K=0;K<V;K++){const ne=K*k-te;for(let ie=0;ie<B;ie++){const G=ie*A-W;$[g]=G*T,$[p]=ne*E,$[h]=C,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[h]=w>0?1:-1,u.push($.x,$.y,$.z),d.push(ie/y),d.push(1-K/q),Y+=1}}for(let K=0;K<q;K++)for(let ne=0;ne<y;ne++){const ie=f+ne+B*K,G=f+ne+B*(K+1),Z=f+(ne+1)+B*(K+1),ce=f+(ne+1)+B*K;l.push(ie,G,ce),l.push(G,Z,ce),X+=6}o.addGroup(m,X,M),m+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=ur(n[t]);for(const r in i)e[r]=i[r]}return e}function _f(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Eu(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const vf={clone:ur,merge:Yt};var xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Su extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends Su{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,$i=1;class Ef extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Yi,$i,e,t);r.layers=this.layers,this.add(r);const s=new cn(Yi,$i,e,t);s.layers=this.layers,this.add(s);const a=new cn(Yi,$i,e,t);a.layers=this.layers,this.add(a);const o=new cn(Yi,$i,e,t);o.layers=this.layers,this.add(o);const l=new cn(Yi,$i,e,t);l.layers=this.layers,this.add(l);const c=new cn(Yi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class yu extends jt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sf extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?Mt:un),this.texture=new yu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wn(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ri});s.uniforms.tEquirect.value=t;const a=new Ve(r,s),o=t.minFilter;return t.minFilter===Ft&&(t.minFilter=lt),new Ef(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const wo=new D,yf=new D,Tf=new Ge;class xi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wo.subVectors(i,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tf.getNormalMatrix(e),r=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Hr,ds=new D;class _a{constructor(e=new xi,t=new xi,i=new xi,r=new xi,s=new xi,a=new xi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],h=r[12],T=r[13],E=r[14],b=r[15];if(i[0].setComponents(l-s,f-c,p-m,b-h).normalize(),i[1].setComponents(l+s,f+c,p+m,b+h).normalize(),i[2].setComponents(l+a,f+u,p+_,b+T).normalize(),i[3].setComponents(l-a,f-u,p-_,b-T).normalize(),i[4].setComponents(l-o,f-d,p-g,b-E).normalize(),t===Gn)i[5].setComponents(l+o,f+d,p+g,b+E).normalize();else if(t===Cs)i[5].setComponents(o,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Af(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=d.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,d){const f=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&_.length===0&&n.bufferSubData(d,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const h=_[g];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class In extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const T=h*f-a;for(let E=0;E<c;E++){const b=E*d-s;_.push(b,-T,0),g.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const E=T+c*h,b=T+c*(h+1),L=T+1+c*(h+1),w=T+1+c*h;m.push(E,b,w),m.push(b,L,w)}this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`
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
}`,rp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,bp=`
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
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
}`,$m=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Km=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jm=`#define TOON
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
}`,Jm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qm=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:bf,alphahash_pars_fragment:wf,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Lf,alphatest_pars_fragment:Pf,aomap_fragment:If,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:$f,common:Kf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:rp,envmap_common_pars_fragment:sp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:hp,gradientmap_pars_fragment:fp,lightmap_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:vp,lights_toon_fragment:Mp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Sp,lights_phong_pars_fragment:yp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:bp,lights_fragment_maps:wp,lights_fragment_end:Rp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Dp,map_pars_fragment:Up,map_particle_fragment:Np,map_particle_pars_fragment:Op,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Bp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Jp,opaque_fragment:Qp,packing:em,premultiplied_alpha_fragment:tm,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:rm,roughnessmap_fragment:sm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:hm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:vm,transmission_fragment:xm,transmission_pars_fragment:Mm,uv_pars_fragment:Em,uv_pars_vertex:Sm,uv_vertex:ym,worldpos_vertex:Tm,background_vert:Am,background_frag:bm,backgroundCube_vert:wm,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Lm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Om,linedashed_vert:Fm,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Gm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:Zm,meshtoon_vert:jm,meshtoon_frag:Jm,points_vert:Qm,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:rg},se={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Tn={basic:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([se.lights,se.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tn.physical={uniforms:Yt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const hs={r:0,b:0,g:0};function sg(n,e,t,i,r,s,a){const o=new we(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function _(p,h){let T=!1,E=h.isScene===!0?h.background:null;E&&E.isTexture&&(E=(h.backgroundBlurriness>0?t:e).get(E)),E===null?g(o,l):E&&E.isColor&&(g(E,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ks)?(u===void 0&&(u=new Ve(new Wn(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ur(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==at,(d!==E||f!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ve(new In(2,2),new Ci({name:"BackgroundMaterial",uniforms:ur(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(hs,Eu(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function og(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function d(C,B,V,Y,X){let $=!1;if(a){const K=g(Y,V,B);c!==K&&(c=K,m(c.object)),$=h(C,Y,V,X),$&&T(C,Y,V,X)}else{const K=B.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==K)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=K,$=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,q(C,B,V,Y),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(C){return i.isWebGL2?n.bindVertexArray(C):s.bindVertexArrayOES(C)}function _(C){return i.isWebGL2?n.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function g(C,B,V){const Y=V.wireframe===!0;let X=o[C.id];X===void 0&&(X={},o[C.id]=X);let $=X[B.id];$===void 0&&($={},X[B.id]=$);let K=$[Y];return K===void 0&&(K=p(f()),$[Y]=K),K}function p(C){const B=[],V=[],Y=[];for(let X=0;X<r;X++)B[X]=0,V[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Y,object:C,attributes:{},index:null}}function h(C,B,V,Y){const X=c.attributes,$=B.attributes;let K=0;const ne=V.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const Z=X[ie];let ce=$[ie];if(ce===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;K++}return c.attributesNum!==K||c.index!==Y}function T(C,B,V,Y){const X={},$=B.attributes;let K=0;const ne=V.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let Z=$[ie];Z===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),X[ie]=ce,K++}c.attributes=X,c.attributesNum=K,c.index=Y}function E(){const C=c.newAttributes;for(let B=0,V=C.length;B<V;B++)C[B]=0}function b(C){L(C,0)}function L(C,B){const V=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;V[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),X[C]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),X[C]=B)}function w(){const C=c.newAttributes,B=c.enabledAttributes;for(let V=0,Y=B.length;V<Y;V++)B[V]!==C[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function y(C,B,V,Y,X,$,K){K===!0?n.vertexAttribIPointer(C,B,V,X,$):n.vertexAttribPointer(C,B,V,Y,X,$)}function q(C,B,V,Y){if(i.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const X=Y.attributes,$=V.getAttributes(),K=B.defaultAttributeValues;for(const ne in $){const ie=$[ne];if(ie.location>=0){let G=X[ne];if(G===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),G!==void 0){const Z=G.normalized,ce=G.itemSize,ve=t.get(G);if(ve===void 0)continue;const _e=ve.buffer,Ie=ve.type,Ue=ve.bytesPerElement,Ae=i.isWebGL2===!0&&(Ie===n.INT||Ie===n.UNSIGNED_INT||G.gpuType===ru);if(G.isInterleavedBufferAttribute){const Ye=G.data,U=Ye.stride,Gt=G.offset;if(Ye.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ie.locationSize;Ee++)L(ie.location+Ee,Ye.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Ee=0;Ee<ie.locationSize;Ee++)b(ie.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ee=0;Ee<ie.locationSize;Ee++)y(ie.location+Ee,ce/ie.locationSize,Ie,Z,U*Ue,(Gt+ce/ie.locationSize*Ee)*Ue,Ae)}else{if(G.isInstancedBufferAttribute){for(let Ye=0;Ye<ie.locationSize;Ye++)L(ie.location+Ye,G.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ye=0;Ye<ie.locationSize;Ye++)b(ie.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ye=0;Ye<ie.locationSize;Ye++)y(ie.location+Ye,ce/ie.locationSize,Ie,Z,ce*Ue,ce/ie.locationSize*Ye*Ue,Ae)}}else if(K!==void 0){const Z=K[ne];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(ie.location,Z);break;case 3:n.vertexAttrib3fv(ie.location,Z);break;case 4:n.vertexAttrib4fv(ie.location,Z);break;default:n.vertexAttrib1fv(ie.location,Z)}}}}w()}function M(){W();for(const C in o){const B=o[C];for(const V in B){const Y=B[V];for(const X in Y)_(Y[X].object),delete Y[X];delete B[V]}delete o[C]}}function A(C){if(o[C.id]===void 0)return;const B=o[C.id];for(const V in B){const Y=B[V];for(const X in Y)_(Y[X].object),delete Y[X];delete B[V]}delete o[C.id]}function k(C){for(const B in o){const V=o[B];if(V[C.id]===void 0)continue;const Y=V[C.id];for(const X in Y)_(Y[X].object),delete Y[X];delete V[C.id]}}function W(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:b,disableUnusedAttributes:w}}function ag(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,f){if(f===0)return;let m,_;if(r)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,d,f),t.update(d,s,f)}function c(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],d[_]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function lg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,b=a||e.has("OES_texture_float"),L=E&&b,w=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:w}}function cg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new xi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,E=T*4;let b=h.clippingState||null;l.value=b,b=u(_,f,E,m);for(let L=0;L!==E;++L)b[L]=t[L];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,b=m;E!==g;++E,b+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function ug(n){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=or:o===Go&&(a.mapping=ar),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ho||o===Go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sf(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Au extends Su{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,$l=[.125,.215,.35,.446,.526,.582],Si=20,Ro=new Au,Kl=new we;let Co=null,Lo=0,Po=0;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,Zl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Mi,Ki),new D(0,Mi,-Ki),new D(Ki,0,Mi),new D(-Ki,0,Mi),new D(Mi,Ki,0),new D(-Mi,Ki,0)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Co=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Lo,Po),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:lt,minFilter:lt,generateMipmaps:!1,type:Or,format:vn,colorSpace:Vn,depthBuffer:!1},r=Jl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(s)),this._blurMaterial=hg(s,e,t)}return r}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,r){const o=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Kl),u.toneMapping=si,u.autoClear=!1;const m=new cr({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new Ve(new Wn,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Kl),g=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;fs(r,T*E,h>2?E:0,E,E),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zl[(r-1)%Zl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ve(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const h=[];let T=0;for(let y=0;y<Si;++y){const q=y/g,M=Math.exp(-q*q/2);h.push(M),y===0?T+=M:y<p&&(T+=2*M)}for(let y=0;y<h.length;y++)h[y]=h[y]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const b=this._sizeLods[r],L=3*b*(r>E-Qi?r-E+Qi:0),w=4*(this._cubeSize-b);fs(t,L,w,3*b,2*b),l.setRenderTarget(t),l.render(d,Ro)}}function dg(n){const e=[],t=[],i=[];let r=n;const s=n-Qi+1+$l.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Qi?l=$l[a-n+Qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,g=3,p=2,h=1,T=new Float32Array(g*_*m),E=new Float32Array(p*_*m),b=new Float32Array(h*_*m);for(let w=0;w<m;w++){const y=w%3*2/3-1,q=w>2?0:-1,M=[y,q,0,y+2/3,q,0,y+2/3,q+1,0,y,q,0,y+2/3,q+1,0,y,q+1,0];T.set(M,g*_*w),E.set(f,p*_*w);const A=[w,w,w,w,w,w];b.set(A,h*_*w)}const L=new ci;L.setAttribute("position",new xn(T,g)),L.setAttribute("uv",new xn(E,p)),L.setAttribute("faceIndex",new xn(b,h)),e.push(L),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jl(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hg(n,e,t){const i=new Float32Array(Si),r=new D(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:va(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ql(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ec(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function fg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Go,u=l===or||l===ar;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new jl(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new jl(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function pg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mg(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const T=m.array;g=m.version;for(let E=0,b=T.length;E<b;E+=3){const L=T[E+0],w=T[E+1],y=T[E+2];f.push(L,w,w,y,y,L)}}else if(_!==void 0){const T=_.array;g=_.version;for(let E=0,b=T.length/3-1;E<b;E+=3){const L=E+0,w=E+1,y=E+2;f.push(L,w,w,y,y,L)}}else return;const p=new(fu(f)?Mu:xu)(f,1);p.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function gg(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(s,_,o,m*l),t.update(_,s,1)}function d(m,_,g){if(g===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,_,o,m*l,g),t.update(_,s,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<g;h++)this.render(m[h]/l,_[h]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,g);let h=0;for(let T=0;T<g;T++)h+=_[T];t.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function _g(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vg(n,e){return n[0]-e[0]}function xg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Mg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let B=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],q=u.morphAttributes.color||[];let M=0;E===!0&&(M=1),b===!0&&(M=2),L===!0&&(M=3);let A=u.attributes.position.count*M,k=1;A>e.maxTextureSize&&(k=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const W=new Float32Array(A*k*4*g),te=new gu(W,A,k,g);te.type=ni,te.needsUpdate=!0;const C=M*4;for(let V=0;V<g;V++){const Y=w[V],X=y[V],$=q[V],K=A*k*4*V;for(let ne=0;ne<Y.count;ne++){const ie=ne*C;E===!0&&(a.fromBufferAttribute(Y,ne),W[K+ie+0]=a.x,W[K+ie+1]=a.y,W[K+ie+2]=a.z,W[K+ie+3]=0),b===!0&&(a.fromBufferAttribute(X,ne),W[K+ie+4]=a.x,W[K+ie+5]=a.y,W[K+ie+6]=a.z,W[K+ie+7]=0),L===!0&&(a.fromBufferAttribute($,ne),W[K+ie+8]=a.x,W[K+ie+9]=a.y,W[K+ie+10]=a.z,W[K+ie+11]=$.itemSize===4?a.w:1)}}p={count:g,texture:te,size:new Ke(A,k)},s.set(u,p),u.addEventListener("dispose",B)}let h=0;for(let E=0;E<f.length;E++)h+=f[E];const T=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];i[u.id]=g}for(let b=0;b<_;b++){const L=g[b];L[0]=b,L[1]=f[b]}g.sort(xg);for(let b=0;b<8;b++)b<_&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(vg);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const L=o[b],w=L[0],y=L[1];w!==Number.MAX_SAFE_INTEGER&&y?(p&&u.getAttribute("morphTarget"+b)!==p[w]&&u.setAttribute("morphTarget"+b,p[w]),h&&u.getAttribute("morphNormal"+b)!==h[w]&&u.setAttribute("morphNormal"+b,h[w]),r[b]=y,T+=y):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const E=u.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Eg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class bu extends jt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ti,u!==Ti&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ti&&(i=ti),i===void 0&&u===lr&&(i=yi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wu=new jt,Ru=new bu(1,1);Ru.compareFunction=hu;const Cu=new gu,Lu=new rf,Pu=new yu,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vs(n,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;sc.set(i),n.uniformMatrix2fv(this.addr,!1,sc),Tt(t,i)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;rc.set(i),n.uniformMatrix3fv(this.addr,!1,rc),Tt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),Tt(t,i)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Fg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Ru:wu;t.setTexture2D(e||s,r)}function Bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lu,r)}function zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pu,r)}function kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cu,r)}function Hg(n){switch(n){case 5126:return Sg;case 35664:return yg;case 35665:return Tg;case 35666:return Ag;case 35674:return bg;case 35675:return wg;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Lg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Vg(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function qg(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yg(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $g(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kg(n,e){n.uniform1iv(this.addr,e)}function Zg(n,e){n.uniform2iv(this.addr,e)}function jg(n,e){n.uniform3iv(this.addr,e)}function Jg(n,e){n.uniform4iv(this.addr,e)}function Qg(n,e){n.uniform1uiv(this.addr,e)}function e_(n,e){n.uniform2uiv(this.addr,e)}function t_(n,e){n.uniform3uiv(this.addr,e)}function n_(n,e){n.uniform4uiv(this.addr,e)}function i_(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wu,s[a])}function r_(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Lu,s[a])}function s_(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pu,s[a])}function o_(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cu,s[a])}function a_(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return jg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return o_}}class l_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}}class c_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class u_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function oc(n,e){n.seq.push(e),n.map[e.id]=e}function d_(n,e,t){const i=n.name,r=i.length;for(Io.lastIndex=0;;){const s=Io.exec(i),a=Io.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){oc(t,c===void 0?new l_(o,n,e):new c_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new u_(o),oc(t,d)),t=d}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);d_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ac(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const h_=37297;let f_=0;function p_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function m_(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Rs&&t===ws?i="LinearDisplayP3ToLinearSRGB":e===ws&&t===Rs&&(i="LinearSRGBToLinearDisplayP3"),n){case Vn:case Hs:return[i,"LinearTransferOETF"];case Mt:case ma:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+p_(n.getShaderSource(e),a)}else return r}function g_(n,e){const t=m_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function __(n,e){let t;switch(e){case hh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="OptimizedCineon";break;case mh:t="ACESFilmic";break;case _h:t="AgX";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function v_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function x_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(er).join(`
`)}function M_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function er(n){return n!==""}function cc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(n){return n.replace(S_,T_)}const y_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T_(n,e){let t=Oe[e];if(t===void 0){const i=y_.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qo(t)}const A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(n){return n.replace(A_,b_)}function b_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function L_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ha:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case dh:e="ENVMAP_BLENDING_ADD";break}return e}function P_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function I_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w_(t),c=R_(t),u=C_(t),d=L_(t),f=P_(t),m=t.isWebGL2?"":v_(t),_=x_(t),g=M_(s),p=r.createProgram();let h,T,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),h.length>0&&(h+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),T.length>0&&(T+=`
`)):(h=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),T=[m,hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Oe.tonemapping_pars_fragment:"",t.toneMapping!==si?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=qo(a),a=cc(a,t),a=uc(a,t),o=qo(o),o=cc(o,t),o=uc(o,t),a=dc(a),o=dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const b=E+h+a,L=E+T+o,w=ac(r,r.VERTEX_SHADER,b),y=ac(r,r.FRAGMENT_SHADER,L);r.attachShader(p,w),r.attachShader(p,y),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function q(W){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(y).trim();let V=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,w,y);else{const X=lc(r,w,"vertex"),$=lc(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+X+`
`+$)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(C===""||B==="")&&(Y=!1);Y&&(W.diagnostics={runnable:V,programLog:te,vertexShader:{log:C,prefix:h},fragmentShader:{log:B,prefix:T}})}r.deleteShader(w),r.deleteShader(y),M=new Ms(r,p),A=E_(r,p)}let M;this.getUniforms=function(){return M===void 0&&q(this),M};let A;this.getAttributes=function(){return A===void 0&&q(this),A};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,h_)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=y,this}let D_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new N_(e),t.set(e,i)),i}}class N_{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}}function O_(n,e,t,i,r,s,a){const o=new _u,l=new U_,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,A,k,W,te){const C=W.fog,B=te.geometry,V=M.isMeshStandardMaterial?W.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),X=Y&&Y.mapping===ks?Y.image.height:null,$=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=K!==void 0?K.length:0;let ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let G,Z,ce,ve;if($){const Vt=Tn[$];G=Vt.vertexShader,Z=Vt.fragmentShader}else G=M.vertexShader,Z=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const _e=n.getRenderTarget(),Ie=te.isInstancedMesh===!0,Ue=te.isBatchedMesh===!0,Ae=!!M.map,Ye=!!M.matcap,U=!!Y,Gt=!!M.aoMap,Ee=!!M.lightMap,Le=!!M.bumpMap,pe=!!M.normalMap,ut=!!M.displacementMap,Fe=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,O=M.anisotropy>0,Q=M.clearcoat>0,J=M.iridescence>0,ee=M.sheen>0,me=M.transmission>0,le=O&&!!M.anisotropyMap,he=Q&&!!M.clearcoatMap,Te=Q&&!!M.clearcoatNormalMap,Be=Q&&!!M.clearcoatRoughnessMap,j=J&&!!M.iridescenceMap,Je=J&&!!M.iridescenceThicknessMap,We=ee&&!!M.sheenColorMap,Ce=ee&&!!M.sheenRoughnessMap,Me=!!M.specularMap,fe=!!M.specularColorMap,Ne=!!M.specularIntensityMap,je=me&&!!M.transmissionMap,ft=me&&!!M.thicknessMap,ke=!!M.gradientMap,re=!!M.alphaMap,R=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,be=!!B.attributes.uv1,Se=!!B.attributes.uv2,nt=!!B.attributes.uv3;let it=si;return M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Z,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ue,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Vn,map:Ae,matcap:Ye,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:X,aoMap:Gt,lightMap:Ee,bumpMap:Le,normalMap:pe,displacementMap:f&&ut,emissiveMap:Fe,normalMapObjectSpace:pe&&M.normalMapType===Ch,normalMapTangentSpace:pe&&M.normalMapType===pa,metalnessMap:S,roughnessMap:v,anisotropy:O,anisotropyMap:le,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,iridescence:J,iridescenceMap:j,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:fe,specularIntensityMap:Ne,transmission:me,transmissionMap:je,thicknessMap:ft,gradientMap:ke,opaque:M.transparent===!1&&M.blending===tr,alphaMap:re,alphaTest:R,alphaHash:oe,combine:M.combine,mapUv:Ae&&g(M.map.channel),aoMapUv:Gt&&g(M.aoMap.channel),lightMapUv:Ee&&g(M.lightMap.channel),bumpMapUv:Le&&g(M.bumpMap.channel),normalMapUv:pe&&g(M.normalMap.channel),displacementMapUv:ut&&g(M.displacementMap.channel),emissiveMapUv:Fe&&g(M.emissiveMap.channel),metalnessMapUv:S&&g(M.metalnessMap.channel),roughnessMapUv:v&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:he&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:fe&&g(M.specularColorMap.channel),specularIntensityMapUv:Ne&&g(M.specularIntensityMap.channel),transmissionMapUv:je&&g(M.transmissionMap.channel),thicknessMapUv:ft&&g(M.thicknessMap.channel),alphaMapUv:re&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Se,vertexUv3s:nt,pointsUvs:te.isPoints===!0&&!!B.attributes.uv&&(Ae||re),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ct,flipSided:M.side===Ht,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)A.push(k),A.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(T(A,M),E(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function T(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function E(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){const A=_[M.type];let k;if(A){const W=Tn[A];k=vf.clone(W.uniforms)}else k=M.uniforms;return k}function L(M,A){let k;for(let W=0,te=c.length;W<te;W++){const C=c[W];if(C.cacheKey===A){k=C,++k.usedTimes;break}}return k===void 0&&(k=new I_(n,A,M,s),c.push(k)),k}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function y(M){l.remove(M)}function q(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:L,releaseProgram:w,releaseShaderCache:y,programs:c,dispose:q}}function F_(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,_,g,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function o(d,f,m,_,g,p){const h=a(d,f,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,_,g,p){const h=a(d,f,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||B_),i.length>1&&i.sort(f||fc),r.length>1&&r.sort(f||fc)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function z_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new pc,n.set(i,[a])):r>=s.length?(a=new pc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function k_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function H_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G_=0;function V_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n,e){const t=new k_,i=H_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,a=new mt,o=new mt;function l(u,d){let f=0,m=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let g=0,p=0,h=0,T=0,E=0,b=0,L=0,w=0,y=0,q=0,M=0;u.sort(V_);const A=d===!0?Math.PI:1;for(let W=0,te=u.length;W<te;W++){const C=u[W],B=C.color,V=C.intensity,Y=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=B.r*V*A,m+=B.g*V*A,_+=B.b*V*A;else if(C.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(C.sh.coefficients[$],V);M++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const K=C.shadow,ne=i.get(C);ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,r.directionalShadow[g]=ne,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=C.shadow.matrix,b++}r.directional[g]=$,g++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(B).multiplyScalar(V*A),$.distance=Y,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,r.spot[h]=$;const K=C.shadow;if(C.map&&(r.spotLightMap[y]=C.map,y++,K.updateMatrices(C),C.castShadow&&q++),r.spotLightMatrix[h]=K.matrix,C.castShadow){const ne=i.get(C);ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,r.spotShadow[h]=ne,r.spotShadowMap[h]=X,w++}h++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(B).multiplyScalar(V),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),r.rectArea[T]=$,T++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity*A),$.distance=C.distance,$.decay=C.decay,C.castShadow){const K=C.shadow,ne=i.get(C);ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,r.pointShadow[p]=ne,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=C.shadow.matrix,L++}r.point[p]=$,p++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(V*A),$.groundColor.copy(C.groundColor).multiplyScalar(V*A),r.hemi[E]=$,E++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==h||k.rectAreaLength!==T||k.hemiLength!==E||k.numDirectionalShadows!==b||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==y||k.numLightProbes!==M)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=T,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+y-q,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=M,k.directionalLength=g,k.pointLength=p,k.spotLength=h,k.rectAreaLength=T,k.hemiLength=E,k.numDirectionalShadows=b,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=y,k.numLightProbes=M,r.version=G_++)}function c(u,d){let f=0,m=0,_=0,g=0,p=0;const h=d.matrixWorldInverse;for(let T=0,E=u.length;T<E;T++){const b=u[T];if(b.isDirectionalLight){const L=r.directional[f];L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),f++}else if(b.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),_++}else if(b.isRectAreaLight){const L=r.rectArea[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function mc(n,e){const t=new W_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function X_(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new mc(n,e),t.set(s,[l])):a>=o.length?(l=new mc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class q_ extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`;function Z_(n,e,t){let i=new _a;const r=new Ke,s=new Ke,a=new Lt,o=new q_({depthPacking:Rh}),l=new Y_,c={},u=t.maxTextureSize,d={[nn]:Ht,[Ht]:nn,[Ct]:Ct},f=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:$_,fragmentShader:K_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ci;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ve(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let h=this.type;this.render=function(w,y,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=h!==kn&&this.type===kn,C=h===kn&&this.type!==kn;for(let B=0,V=w.length;B<V;B++){const Y=w[B],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const $=X.getFrameExtents();if(r.multiply($),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,X.mapSize.y=s.y)),X.map===null||te===!0||C===!0){const ne=this.type!==kn?{minFilter:vt,magFilter:vt}:{};X.map!==null&&X.map.dispose(),X.map=new Ri(r.x,r.y,ne),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const K=X.getViewportCount();for(let ne=0;ne<K;ne++){const ie=X.getViewport(ne);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),W.viewport(a),X.updateMatrices(Y,ne),i=X.getFrustum(),b(y,q,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===kn&&T(X,q),X.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,A,k)};function T(w,y){const q=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ri(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(y,null,q,f,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(y,null,q,m,g,null)}function E(w,y,q,M){let A=null;const k=q.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)A=k;else if(A=q.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const W=A.uuid,te=y.uuid;let C=c[W];C===void 0&&(C={},c[W]=C);let B=C[te];B===void 0&&(B=A.clone(),C[te]=B,y.addEventListener("dispose",L)),A=B}if(A.visible=y.visible,A.wireframe=y.wireframe,M===kn?A.side=y.shadowSide!==null?y.shadowSide:y.side:A.side=y.shadowSide!==null?y.shadowSide:d[y.side],A.alphaMap=y.alphaMap,A.alphaTest=y.alphaTest,A.map=y.map,A.clipShadows=y.clipShadows,A.clippingPlanes=y.clippingPlanes,A.clipIntersection=y.clipIntersection,A.displacementMap=y.displacementMap,A.displacementScale=y.displacementScale,A.displacementBias=y.displacementBias,A.wireframeLinewidth=y.wireframeLinewidth,A.linewidth=y.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=n.properties.get(A);W.light=q}return A}function b(w,y,q,M,A){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===kn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld);const te=e.update(w),C=w.material;if(Array.isArray(C)){const B=te.groups;for(let V=0,Y=B.length;V<Y;V++){const X=B[V],$=C[X.materialIndex];if($&&$.visible){const K=E(w,$,M,A);w.onBeforeShadow(n,w,y,q,te,K,X),n.renderBufferDirect(q,null,te,K,w,X),w.onAfterShadow(n,w,y,q,te,K,X)}}}else if(C.visible){const B=E(w,C,M,A);w.onBeforeShadow(n,w,y,q,te,B,null),n.renderBufferDirect(q,null,te,B,w,null),w.onAfterShadow(n,w,y,q,te,B,null)}}const W=w.children;for(let te=0,C=W.length;te<C;te++)b(W[te],y,q,M,A)}function L(w){w.target.removeEventListener("dispose",L);for(const q in c){const M=c[q],A=w.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function j_(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const oe=new Lt;let ae=null;const be=new Lt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!R&&(n.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){R=Se},setClear:function(Se,nt,it,At,Vt){Vt===!0&&(Se*=At,nt*=At,it*=At),oe.set(Se,nt,it,At),be.equals(oe)===!1&&(n.clearColor(Se,nt,it,At),be.copy(oe))},reset:function(){R=!1,ae=null,be.set(-1,0,0,0)}}}function s(){let R=!1,oe=null,ae=null,be=null;return{setTest:function(Se){Se?Ue(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!R&&(n.depthMask(Se),oe=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case ih:n.depthFunc(n.NEVER);break;case rh:n.depthFunc(n.ALWAYS);break;case sh:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case oh:n.depthFunc(n.EQUAL);break;case ah:n.depthFunc(n.GEQUAL);break;case lh:n.depthFunc(n.GREATER);break;case ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Se}},setLocked:function(Se){R=Se},setClear:function(Se){be!==Se&&(n.clearDepth(Se),be=Se)},reset:function(){R=!1,oe=null,ae=null,be=null}}}function a(){let R=!1,oe=null,ae=null,be=null,Se=null,nt=null,it=null,At=null,Vt=null;return{setTest:function(rt){R||(rt?Ue(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!R&&(n.stencilMask(rt),oe=rt)},setFunc:function(rt,Wt,Sn){(ae!==rt||be!==Wt||Se!==Sn)&&(n.stencilFunc(rt,Wt,Sn),ae=rt,be=Wt,Se=Sn)},setOp:function(rt,Wt,Sn){(nt!==rt||it!==Wt||At!==Sn)&&(n.stencilOp(rt,Wt,Sn),nt=rt,it=Wt,At=Sn)},setLocked:function(rt){R=rt},setClear:function(rt){Vt!==rt&&(n.clearStencil(rt),Vt=rt)},reset:function(){R=!1,oe=null,ae=null,be=null,Se=null,nt=null,it=null,At=null,Vt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,h=!1,T=null,E=null,b=null,L=null,w=null,y=null,q=null,M=new we(0,0,0),A=0,k=!1,W=null,te=null,C=null,B=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=$>=2);let ne=null,ie={};const G=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ce=new Lt().fromArray(G),ve=new Lt().fromArray(Z);function _e(R,oe,ae,be){const Se=new Uint8Array(4),nt=n.createTexture();n.bindTexture(R,nt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<ae;it++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(oe+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return nt}const Ie={};Ie[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(As),Fe(!1),S(Za),Ue(n.CULL_FACE),pe(ri);function Ue(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Ae(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function Ye(R,oe){return m[R]!==oe?(n.bindFramebuffer(R,oe),m[R]=oe,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=oe),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function U(R,oe){let ae=g,be=!1;if(R)if(ae=_.get(oe),ae===void 0&&(ae=[],_.set(oe,ae)),R.isWebGLMultipleRenderTargets){const Se=R.texture;if(ae.length!==Se.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,it=Se.length;nt<it;nt++)ae[nt]=n.COLOR_ATTACHMENT0+nt;ae.length=Se.length,be=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,be=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Gt(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const Ee={[Ei]:n.FUNC_ADD,[Gd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Qa]=n.MIN,Ee[el]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ee[Qa]=R.MIN_EXT,Ee[el]=R.MAX_EXT)}const Le={[Wd]:n.ZERO,[Xd]:n.ONE,[qd]:n.SRC_COLOR,[zo]:n.SRC_ALPHA,[Jd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[$d]:n.DST_ALPHA,[Yd]:n.ONE_MINUS_SRC_COLOR,[ko]:n.ONE_MINUS_SRC_ALPHA,[jd]:n.ONE_MINUS_DST_COLOR,[Kd]:n.ONE_MINUS_DST_ALPHA,[Qd]:n.CONSTANT_COLOR,[eh]:n.ONE_MINUS_CONSTANT_COLOR,[th]:n.CONSTANT_ALPHA,[nh]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(R,oe,ae,be,Se,nt,it,At,Vt,rt){if(R===ri){h===!0&&(Ae(n.BLEND),h=!1);return}if(h===!1&&(Ue(n.BLEND),h=!0),R!==Hd){if(R!==T||rt!==k){if((E!==Ei||w!==Ei)&&(n.blendEquation(n.FUNC_ADD),E=Ei,w=Ei),rt)switch(R){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.ONE,n.ONE);break;case ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ja:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ja:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,L=null,y=null,q=null,M.set(0,0,0),A=0,T=R,k=rt}return}Se=Se||oe,nt=nt||ae,it=it||be,(oe!==E||Se!==w)&&(n.blendEquationSeparate(Ee[oe],Ee[Se]),E=oe,w=Se),(ae!==b||be!==L||nt!==y||it!==q)&&(n.blendFuncSeparate(Le[ae],Le[be],Le[nt],Le[it]),b=ae,L=be,y=nt,q=it),(At.equals(M)===!1||Vt!==A)&&(n.blendColor(At.r,At.g,At.b,Vt),M.copy(At),A=Vt),T=R,k=!1}function ut(R,oe){R.side===Ct?Ae(n.CULL_FACE):Ue(n.CULL_FACE);let ae=R.side===Ht;oe&&(ae=!ae),Fe(ae),R.blending===tr&&R.transparent===!1?pe(ri):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const be=R.stencilWrite;c.setTest(be),be&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),O(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){W!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),W=R)}function S(R){R!==zd?(Ue(n.CULL_FACE),R!==te&&(R===Za?n.cullFace(n.BACK):R===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),te=R}function v(R){R!==C&&(X&&n.lineWidth(R),C=R)}function O(R,oe,ae){R?(Ue(n.POLYGON_OFFSET_FILL),(B!==oe||V!==ae)&&(n.polygonOffset(oe,ae),B=oe,V=ae)):Ae(n.POLYGON_OFFSET_FILL)}function Q(R){R?Ue(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function J(R){R===void 0&&(R=n.TEXTURE0+Y-1),ne!==R&&(n.activeTexture(R),ne=R)}function ee(R,oe,ae){ae===void 0&&(ne===null?ae=n.TEXTURE0+Y-1:ae=ne);let be=ie[ae];be===void 0&&(be={type:void 0,texture:void 0},ie[ae]=be),(be.type!==R||be.texture!==oe)&&(ne!==ae&&(n.activeTexture(ae),ne=ae),n.bindTexture(R,oe||Ie[R]),be.type=R,be.texture=oe)}function me(){const R=ie[ne];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(R){ce.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ce.copy(R))}function je(R){ve.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function ft(R,oe){let ae=d.get(oe);ae===void 0&&(ae=new WeakMap,d.set(oe,ae));let be=ae.get(R);be===void 0&&(be=n.getUniformBlockIndex(oe,R.name),ae.set(R,be))}function ke(R,oe){const be=d.get(oe).get(R);u.get(oe)!==be&&(n.uniformBlockBinding(oe,be,R.__bindingPointIndex),u.set(oe,be))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ne=null,ie={},m={},_=new WeakMap,g=[],p=null,h=!1,T=null,E=null,b=null,L=null,w=null,y=null,q=null,M=new we(0,0,0),A=0,k=!1,W=null,te=null,C=null,B=null,V=null,ce.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ue,disable:Ae,bindFramebuffer:Ye,drawBuffers:U,useProgram:Gt,setBlending:pe,setMaterial:ut,setFlipSided:Fe,setCullFace:S,setLineWidth:v,setPolygonOffset:O,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:Me,texImage3D:fe,updateUBOMapping:ft,uniformBlockBinding:ke,texStorage2D:We,texStorage3D:Ce,texSubImage2D:Te,texSubImage3D:Be,compressedTexSubImage2D:j,compressedTexSubImage3D:Je,scissor:Ne,viewport:je,reset:re}}function J_(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Br("canvas")}function g(S,v,O,Q){let J=1;if((S.width>Q||S.height>Q)&&(J=Q/Math.max(S.width,S.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ee=v?Ls:Math.floor,me=ee(J*S.width),le=ee(J*S.height);d===void 0&&(d=_(me,le));const he=O?_(me,le):d;return he.width=me,he.height=le,he.getContext("2d").drawImage(S,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+me+"x"+le+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Xo(S.width)&&Xo(S.height)}function h(S){return o?!1:S.wrapS!==_n||S.wrapT!==_n||S.minFilter!==vt&&S.minFilter!==lt}function T(S,v){return S.generateMipmaps&&v&&S.minFilter!==vt&&S.minFilter!==lt}function E(S){n.generateMipmap(S)}function b(S,v,O,Q,J=!1){if(o===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=v;if(v===n.RED&&(O===n.FLOAT&&(ee=n.R32F),O===n.HALF_FLOAT&&(ee=n.R16F),O===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ee=n.R8UI),O===n.UNSIGNED_SHORT&&(ee=n.R16UI),O===n.UNSIGNED_INT&&(ee=n.R32UI),O===n.BYTE&&(ee=n.R8I),O===n.SHORT&&(ee=n.R16I),O===n.INT&&(ee=n.R32I)),v===n.RG&&(O===n.FLOAT&&(ee=n.RG32F),O===n.HALF_FLOAT&&(ee=n.RG16F),O===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RGBA){const me=J?bs:Qe.getTransfer(Q);O===n.FLOAT&&(ee=n.RGBA32F),O===n.HALF_FLOAT&&(ee=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ee=me===at?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function L(S,v,O){return T(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==vt&&S.minFilter!==lt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){return S===vt||S===tl||S===ro?n.NEAREST:n.LINEAR}function y(S){const v=S.target;v.removeEventListener("dispose",y),M(v),v.isVideoTexture&&u.delete(v)}function q(S){const v=S.target;v.removeEventListener("dispose",q),k(v)}function M(S){const v=i.get(S);if(v.__webglInit===void 0)return;const O=S.source,Q=f.get(O);if(Q){const J=Q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(S),Object.keys(Q).length===0&&f.delete(O)}i.remove(S)}function A(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const O=S.source,Q=f.get(O);delete Q[v.__cacheKey],a.memory.textures--}function k(S){const v=S.texture,O=i.get(S),Q=i.get(v);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let ee=0;ee<O.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(O.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)n.deleteFramebuffer(O.__webglFramebuffer[J]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,ee=v.length;J<ee;J++){const me=i.get(v[J]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(S)}let W=0;function te(){W=0}function C(){const S=W;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),W+=1,S}function B(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){const O=i.get(S);if(S.isVideoTexture&&ut(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(O,S,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function Y(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ce(O,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function X(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ce(O,S,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function $(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ve(O,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const K={[mn]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},ne={[vt]:n.NEAREST,[tl]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[lt]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[Ft]:n.LINEAR_MIPMAP_LINEAR},ie={[Lh]:n.NEVER,[Oh]:n.ALWAYS,[Ph]:n.LESS,[hu]:n.LEQUAL,[Ih]:n.EQUAL,[Nh]:n.GEQUAL,[Dh]:n.GREATER,[Uh]:n.NOTEQUAL};function G(S,v,O){if(O?(n.texParameteri(S,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,K[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ne[v.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==_n||v.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==vt&&v.minFilter!==lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===vt||v.minFilter!==ro&&v.minFilter!==Ft||v.type===ni&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Or&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Z(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",y));const Q=v.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const ee=B(v);if(ee!==S.__cacheKey){J[ee]===void 0&&(J[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[ee].usedTimes++;const me=J[S.__cacheKey];me!==void 0&&(J[S.__cacheKey].usedTimes--,me.usedTimes===0&&A(v)),S.__cacheKey=ee,S.__webglTexture=J[ee].texture}return O}function ce(S,v,O){let Q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=n.TEXTURE_3D);const J=Z(S,v),ee=v.source;t.bindTexture(Q,S.__webglTexture,n.TEXTURE0+O);const me=i.get(ee);if(ee.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const le=Qe.getPrimaries(Qe.workingColorSpace),he=v.colorSpace===un?null:Qe.getPrimaries(v.colorSpace),Te=v.colorSpace===un||le===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Be=h(v)&&p(v.image)===!1;let j=g(v.image,Be,!1,r.maxTextureSize);j=Fe(v,j);const Je=p(j)||o,We=s.convert(v.format,v.colorSpace);let Ce=s.convert(v.type),Me=b(v.internalFormat,We,Ce,v.colorSpace,v.isVideoTexture);G(Q,v,Je);let fe;const Ne=v.mipmaps,je=o&&v.isVideoTexture!==!0&&Me!==uu,ft=me.__version===void 0||J===!0,ke=L(v,j,Je);if(v.isDepthTexture)Me=n.DEPTH_COMPONENT,o?v.type===ni?Me=n.DEPTH_COMPONENT32F:v.type===ti?Me=n.DEPTH_COMPONENT24:v.type===yi?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:v.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ti&&Me===n.DEPTH_COMPONENT&&v.type!==fa&&v.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ti,Ce=s.convert(v.type)),v.format===lr&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,v.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=yi,Ce=s.convert(v.type))),ft&&(je?t.texStorage2D(n.TEXTURE_2D,1,Me,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Me,j.width,j.height,0,We,Ce,null));else if(v.isDataTexture)if(Ne.length>0&&Je){je&&ft&&t.texStorage2D(n.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let re=0,R=Ne.length;re<R;re++)fe=Ne[re],je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe.width,fe.height,We,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,re,Me,fe.width,fe.height,0,We,Ce,fe.data);v.generateMipmaps=!1}else je?(ft&&t.texStorage2D(n.TEXTURE_2D,ke,Me,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,We,Ce,j.data)):t.texImage2D(n.TEXTURE_2D,0,Me,j.width,j.height,0,We,Ce,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Me,Ne[0].width,Ne[0].height,j.depth);for(let re=0,R=Ne.length;re<R;re++)fe=Ne[re],v.format!==vn?We!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,j.depth,We,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Me,fe.width,fe.height,j.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,j.depth,We,Ce,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Me,fe.width,fe.height,j.depth,0,We,Ce,fe.data)}else{je&&ft&&t.texStorage2D(n.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let re=0,R=Ne.length;re<R;re++)fe=Ne[re],v.format!==vn?We!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,fe.width,fe.height,We,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe.width,fe.height,We,Ce,fe.data):t.texImage2D(n.TEXTURE_2D,re,Me,fe.width,fe.height,0,We,Ce,fe.data)}else if(v.isDataArrayTexture)je?(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Me,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,We,Ce,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,j.width,j.height,j.depth,0,We,Ce,j.data);else if(v.isData3DTexture)je?(ft&&t.texStorage3D(n.TEXTURE_3D,ke,Me,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,We,Ce,j.data)):t.texImage3D(n.TEXTURE_3D,0,Me,j.width,j.height,j.depth,0,We,Ce,j.data);else if(v.isFramebufferTexture){if(ft)if(je)t.texStorage2D(n.TEXTURE_2D,ke,Me,j.width,j.height);else{let re=j.width,R=j.height;for(let oe=0;oe<ke;oe++)t.texImage2D(n.TEXTURE_2D,oe,Me,re,R,0,We,Ce,null),re>>=1,R>>=1}}else if(Ne.length>0&&Je){je&&ft&&t.texStorage2D(n.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let re=0,R=Ne.length;re<R;re++)fe=Ne[re],je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,We,Ce,fe):t.texImage2D(n.TEXTURE_2D,re,Me,We,Ce,fe);v.generateMipmaps=!1}else je?(ft&&t.texStorage2D(n.TEXTURE_2D,ke,Me,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,Ce,j)):t.texImage2D(n.TEXTURE_2D,0,Me,We,Ce,j);T(v,Je)&&E(Q),me.__version=ee.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,O){if(v.image.length!==6)return;const Q=Z(S,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);const ee=i.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const me=Qe.getPrimaries(Qe.workingColorSpace),le=v.colorSpace===un?null:Qe.getPrimaries(v.colorSpace),he=v.colorSpace===un||me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!Te&&!Be?j[re]=g(v.image[re],!1,!0,r.maxCubemapSize):j[re]=Be?v.image[re].image:v.image[re],j[re]=Fe(v,j[re]);const Je=j[0],We=p(Je)||o,Ce=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),fe=b(v.internalFormat,Ce,Me,v.colorSpace),Ne=o&&v.isVideoTexture!==!0,je=ee.__version===void 0||Q===!0;let ft=L(v,Je,We);G(n.TEXTURE_CUBE_MAP,v,We);let ke;if(Te){Ne&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ft,fe,Je.width,Je.height);for(let re=0;re<6;re++){ke=j[re].mipmaps;for(let R=0;R<ke.length;R++){const oe=ke[R];v.format!==vn?Ce!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,0,0,oe.width,oe.height,Ce,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,0,0,oe.width,oe.height,Ce,Me,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,fe,oe.width,oe.height,0,Ce,Me,oe.data)}}}else{ke=v.mipmaps,Ne&&je&&(ke.length>0&&ft++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ft,fe,j[0].width,j[0].height));for(let re=0;re<6;re++)if(Be){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,j[re].width,j[re].height,Ce,Me,j[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,j[re].width,j[re].height,0,Ce,Me,j[re].data);for(let R=0;R<ke.length;R++){const ae=ke[R].image[re].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,0,0,ae.width,ae.height,Ce,Me,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,fe,ae.width,ae.height,0,Ce,Me,ae.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,Me,j[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,fe,Ce,Me,j[re]);for(let R=0;R<ke.length;R++){const oe=ke[R];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,0,0,Ce,Me,oe.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,fe,Ce,Me,oe.image[re])}}}T(v,We)&&E(n.TEXTURE_CUBE_MAP),ee.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _e(S,v,O,Q,J,ee){const me=s.convert(O.format,O.colorSpace),le=s.convert(O.type),he=b(O.internalFormat,me,le,O.colorSpace);if(!i.get(v).__hasExternalTextures){const Be=Math.max(1,v.width>>ee),j=Math.max(1,v.height>>ee);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,he,Be,j,v.depth,0,me,le,null):t.texImage2D(J,ee,he,Be,j,0,me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),pe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,i.get(O).__webglTexture,0,Le(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,i.get(O).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(S,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let Q=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||pe(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===ni?Q=n.DEPTH_COMPONENT32F:J.type===ti&&(Q=n.DEPTH_COMPONENT24));const ee=Le(v);pe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Q,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Q,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Le(v);O&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<Q.length;J++){const ee=Q[J],me=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),he=b(ee.internalFormat,me,le,ee.colorSpace),Te=Le(v);O&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,he,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Q=i.get(v.depthTexture).__webglTexture,J=Le(v);if(v.depthTexture.format===Ti)pe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===lr)pe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(S){const v=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=n.createRenderbuffer(),Ie(v.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Ie(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(S,v,O){const Q=i.get(S);v!==void 0&&_e(Q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ae(S)}function U(S){const v=S.texture,O=i.get(S),Q=i.get(v);S.addEventListener("dispose",q),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,a.memory.textures++);const J=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,me=p(S)||o;if(J){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let he=0;he<v.mipmaps.length;he++)O.__webglFramebuffer[le][he]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ee)if(r.drawBuffers){const le=S.texture;for(let he=0,Te=le.length;he<Te;he++){const Be=i.get(le[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&pe(S)===!1){const le=ee?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Te=le[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const Be=s.convert(Te.format,Te.colorSpace),j=s.convert(Te.type),Je=b(Te.internalFormat,Be,j,Te.colorSpace,S.isXRRenderTarget===!0),We=Le(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Je,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),G(n.TEXTURE_CUBE_MAP,v,me);for(let le=0;le<6;le++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(O.__webglFramebuffer[le][he],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else _e(O.__webglFramebuffer[le],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);T(v,me)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const le=S.texture;for(let he=0,Te=le.length;he<Te;he++){const Be=le[he],j=i.get(Be);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),G(n.TEXTURE_2D,Be,me),_e(O.__webglFramebuffer,S,Be,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),T(Be,me)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?le=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Q.__webglTexture),G(le,v,me),o&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(O.__webglFramebuffer[he],S,v,n.COLOR_ATTACHMENT0,le,he);else _e(O.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,le,0);T(v,me)&&E(le),t.unbindTexture()}S.depthBuffer&&Ae(S)}function Gt(S){const v=p(S)||o,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,J=O.length;Q<J;Q++){const ee=O[Q];if(T(ee,v)){const me=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(ee).__webglTexture;t.bindTexture(me,le),E(me),t.unbindTexture()}}}function Ee(S){if(o&&S.samples>0&&pe(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,Q=S.height;let J=n.COLOR_BUFFER_BIT;const ee=[],me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(S),he=S.isWebGLMultipleRenderTargets===!0;if(he)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){ee.push(n.COLOR_ATTACHMENT0+Te),S.depthBuffer&&ee.push(me);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Te]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),he){const j=i.get(v[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,le.__webglColorRenderbuffer[Te]);const Be=i.get(v[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Le(S){return Math.min(r.maxSamples,S.samples)}function pe(S){const v=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(S){const v=a.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Fe(S,v){const O=S.colorSpace,Q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Wo||O!==Vn&&O!==un&&(Qe.getTransfer(O)===at?o===!1?e.has("EXT_sRGB")===!0&&Q===vn?(S.format=Wo,S.minFilter=lt,S.generateMipmaps=!1):v=pu.sRGBToLinear(v):(Q!==vn||J!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=C,this.resetTextureUnits=te,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Ye,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function Q_(n,e,t){const i=t.isWebGL2;function r(s,a=un){let o;const l=Qe.getTransfer(a);if(s===oi)return n.UNSIGNED_BYTE;if(s===su)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ou)return n.UNSIGNED_SHORT_5_5_5_1;if(s===xh)return n.BYTE;if(s===Mh)return n.SHORT;if(s===fa)return n.UNSIGNED_SHORT;if(s===ru)return n.INT;if(s===ti)return n.UNSIGNED_INT;if(s===ni)return n.FLOAT;if(s===Or)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Eh)return n.ALPHA;if(s===vn)return n.RGBA;if(s===Sh)return n.LUMINANCE;if(s===yh)return n.LUMINANCE_ALPHA;if(s===Ti)return n.DEPTH_COMPONENT;if(s===lr)return n.DEPTH_STENCIL;if(s===Wo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Th)return n.RED;if(s===au)return n.RED_INTEGER;if(s===Ah)return n.RG;if(s===lu)return n.RG_INTEGER;if(s===cu)return n.RGBA_INTEGER;if(s===so||s===oo||s===ao||s===lo)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===so)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===so)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nl||s===il||s===rl||s===sl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ol||s===al)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ol)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===al)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ll||s===cl||s===ul||s===dl||s===hl||s===fl||s===pl||s===ml||s===gl||s===_l||s===vl||s===xl||s===Ml||s===El)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ll)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ul)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ml)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_l)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xl)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ml)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===El)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===co||s===Sl||s===yl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===co)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bh||s===Tl||s===Al||s===bl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===co)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Tl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Al)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class e0 extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class n0 extends fr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const T=[],E=[],b=new Ke;let L=null;const w=new cn;w.layers.enable(1),w.viewport=new Lt;const y=new cn;y.layers.enable(2),y.viewport=new Lt;const q=[w,y],M=new e0;M.layers.enable(1),M.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=T[G];return Z===void 0&&(Z=new Do,T[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=T[G];return Z===void 0&&(Z=new Do,T[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=T[G];return Z===void 0&&(Z=new Do,T[G]=Z),Z.getHandSpace()};function W(G){const Z=E.indexOf(G.inputSource);if(Z===-1)return;const ce=T[Z];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function te(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",C);for(let G=0;G<T.length;G++){const Z=E[G];Z!==null&&(E[G]=null,T[G].disconnect(Z))}A=null,k=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",te),r.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Ri(m.framebufferWidth,m.framebufferHeight,{format:vn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ce=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?lr:Ti,ce=g.stencil?yi:ti);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Ri(f.textureWidth,f.textureHeight,{format:vn,type:oi,depthTexture:new bu(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ie=e.properties.get(h);Ie.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(G){for(let Z=0;Z<G.removed.length;Z++){const ce=G.removed[Z],ve=E.indexOf(ce);ve>=0&&(E[ve]=null,T[ve].disconnect(ce))}for(let Z=0;Z<G.added.length;Z++){const ce=G.added[Z];let ve=E.indexOf(ce);if(ve===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=E.length){E.push(ce),ve=Ie;break}else if(E[Ie]===null){E[Ie]=ce,ve=Ie;break}if(ve===-1)break}const _e=T[ve];_e&&_e.connect(ce)}}const B=new D,V=new D;function Y(G,Z,ce){B.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const ve=B.distanceTo(V),_e=Z.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Ae=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],Gt=(_e[8]-1)/_e[0],Ee=(Ie[8]+1)/Ie[0],Le=Ue*Gt,pe=Ue*Ee,ut=ve/(-Gt+Ee),Fe=ut*-Gt;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(ut),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const S=Ue+ut,v=Ae+ut,O=Le-Fe,Q=pe+(ve-Fe),J=Ye*Ae/v*S,ee=U*Ae/v*S;G.projectionMatrix.makePerspective(O,Q,J,ee,S,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.near=y.near=w.near=G.near,M.far=y.far=w.far=G.far,(A!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,k=M.far);const Z=G.parent,ce=M.cameras;X(M,Z);for(let ve=0;ve<ce.length;ve++)X(ce[ve],Z);ce.length===2?Y(M,w,y):M.projectionMatrix.copy(w.projectionMatrix),$(G,M,Z)};function $(G,Z,ce){ce===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Fr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let K=null;function ne(G,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ve=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let _e=0;_e<ce.length;_e++){const Ie=ce[_e];let Ue=null;if(m!==null)Ue=m.getViewport(Ie);else{const Ye=d.getViewSubImage(f,Ie);Ue=Ye.viewport,_e===0&&(e.setRenderTargetTextures(h,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(h))}let Ae=q[_e];Ae===void 0&&(Ae=new cn,Ae.layers.enable(_e),Ae.viewport=new Lt,q[_e]=Ae),Ae.matrix.fromArray(Ie.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ie.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(Ae)}}for(let ce=0;ce<T.length;ce++){const ve=E[ce],_e=T[ce];ve!==null&&_e!==void 0&&_e.update(ve,Z,c||a)}K&&K(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const ie=new Tu;ie.setAnimationLoop(ne),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function i0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Eu(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,T,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ht&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ht&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*E,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function r0(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,E){const b=E.program;i.uniformBlockBinding(T,b)}function c(T,E){let b=r[T.id];b===void 0&&(_(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",p));const L=E.program;i.updateUBOMapping(T,L);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const E=d();T.__bindingPointIndex=E;const b=n.createBuffer(),L=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],b=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,y=b.length;w<y;w++){const q=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,A=q.length;M<A;M++){const k=q[M];if(m(k,w,M,L)===!0){const W=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let C=0;for(let B=0;B<te.length;B++){const V=te[B],Y=g(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,W+C,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,C),C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,E,b,L){const w=T.value,y=E+"_"+b;if(L[y]===void 0)return typeof w=="number"||typeof w=="boolean"?L[y]=w:L[y]=w.clone(),!0;{const q=L[y];if(typeof w=="number"||typeof w=="boolean"){if(q!==w)return L[y]=w,!0}else if(q.equals(w)===!1)return q.copy(w),!0}return!1}function _(T){const E=T.uniforms;let b=0;const L=16;for(let y=0,q=E.length;y<q;y++){const M=Array.isArray(E[y])?E[y]:[E[y]];for(let A=0,k=M.length;A<k;A++){const W=M[A],te=Array.isArray(W.value)?W.value:[W.value];for(let C=0,B=te.length;C<B;C++){const V=te[C],Y=g(V),X=b%L;X!==0&&L-X<Y.boundary&&(b+=L-X),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=Y.storage}}}const w=b%L;return w>0&&(b+=L-w),T.__size=b,T.__cache={},this}function g(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Iu{constructor(e={}){const{canvas:t=Jh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const E=this;let b=!1,L=0,w=0,y=null,q=-1,M=null;const A=new Lt,k=new Lt;let W=null;const te=new we(0);let C=0,B=t.width,V=t.height,Y=1,X=null,$=null;const K=new Lt(0,0,B,V),ne=new Lt(0,0,B,V);let ie=!1;const G=new _a;let Z=!1,ce=!1,ve=null;const _e=new mt,Ie=new Ke,Ue=new D,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return y===null?Y:1}let U=i;function Gt(x,P){for(let F=0;F<x.length;F++){const z=x[F],N=t.getContext(z,P);if(N!==null)return N}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const P=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&P.shift(),U=Gt(P,x),U===null)throw Gt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ee,Le,pe,ut,Fe,S,v,O,Q,J,ee,me,le,he,Te,Be,j,Je,We,Ce,Me,fe,Ne,je;function ft(){Ee=new pg(U),Le=new lg(U,Ee,e),Ee.init(Le),fe=new Q_(U,Ee,Le),pe=new j_(U,Ee,Le),ut=new _g(U),Fe=new F_,S=new J_(U,Ee,pe,Fe,Le,fe,ut),v=new ug(E),O=new fg(E),Q=new Af(U,Le),Ne=new og(U,Ee,Q,Le),J=new mg(U,Q,ut,Ne),ee=new Eg(U,J,Q,ut),We=new Mg(U,Le,S),Be=new cg(Fe),me=new O_(E,v,O,Ee,Le,Ne,Be),le=new i0(E,Fe),he=new z_,Te=new X_(Ee,Le),Je=new sg(E,v,O,pe,ee,f,l),j=new Z_(E,ee,Le),je=new r0(U,ut,Le,pe),Ce=new ag(U,Ee,ut,Le),Me=new gg(U,Ee,ut,Le),ut.programs=me.programs,E.capabilities=Le,E.extensions=Ee,E.properties=Fe,E.renderLists=he,E.shadowMap=j,E.state=pe,E.info=ut}ft();const ke=new n0(E,U);this.xr=ke,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Ee.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ee.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(B,V,!1))},this.getSize=function(x){return x.set(B,V)},this.setSize=function(x,P,F=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=x,V=P,t.width=Math.floor(x*Y),t.height=Math.floor(P*Y),F===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(B*Y,V*Y).floor()},this.setDrawingBufferSize=function(x,P,F){B=x,V=P,Y=F,t.width=Math.floor(x*F),t.height=Math.floor(P*F),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(K)},this.setViewport=function(x,P,F,z){x.isVector4?K.set(x.x,x.y,x.z,x.w):K.set(x,P,F,z),pe.viewport(A.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(ne)},this.setScissor=function(x,P,F,z){x.isVector4?ne.set(x.x,x.y,x.z,x.w):ne.set(x,P,F,z),pe.scissor(k.copy(ne).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(x){pe.setScissorTest(ie=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){$=x},this.getClearColor=function(x){return x.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(x=!0,P=!0,F=!0){let z=0;if(x){let N=!1;if(y!==null){const ue=y.texture.format;N=ue===cu||ue===lu||ue===au}if(N){const ue=y.texture.type,ge=ue===oi||ue===ti||ue===fa||ue===yi||ue===su||ue===ou,ye=Je.getClearColor(),Re=Je.getClearAlpha(),ze=ye.r,Pe=ye.g,De=ye.b;ge?(m[0]=ze,m[1]=Pe,m[2]=De,m[3]=Re,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=ze,_[1]=Pe,_[2]=De,_[3]=Re,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}P&&(z|=U.DEPTH_BUFFER_BIT),F&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),Te.dispose(),Fe.dispose(),v.dispose(),O.dispose(),ee.dispose(),Ne.dispose(),je.dispose(),me.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Vt),ke.removeEventListener("sessionend",rt),ve&&(ve.dispose(),ve=null),Wt.stop()};function re(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=ut.autoReset,P=j.enabled,F=j.autoUpdate,z=j.needsUpdate,N=j.type;ft(),ut.autoReset=x,j.enabled=P,j.autoUpdate=F,j.needsUpdate=z,j.type=N}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ae(x){const P=x.target;P.removeEventListener("dispose",ae),be(P)}function be(x){Se(x),Fe.remove(x)}function Se(x){const P=Fe.get(x).programs;P!==void 0&&(P.forEach(function(F){me.releaseProgram(F)}),x.isShaderMaterial&&me.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,F,z,N,ue){P===null&&(P=Ae);const ge=N.isMesh&&N.matrixWorld.determinant()<0,ye=Nd(x,P,F,z,N);pe.setMaterial(z,ge);let Re=F.index,ze=1;if(z.wireframe===!0){if(Re=J.getWireframeAttribute(F),Re===void 0)return;ze=2}const Pe=F.drawRange,De=F.attributes.position;let gt=Pe.start*ze,Jt=(Pe.start+Pe.count)*ze;ue!==null&&(gt=Math.max(gt,ue.start*ze),Jt=Math.min(Jt,(ue.start+ue.count)*ze)),Re!==null?(gt=Math.max(gt,0),Jt=Math.min(Jt,Re.count)):De!=null&&(gt=Math.max(gt,0),Jt=Math.min(Jt,De.count));const bt=Jt-gt;if(bt<0||bt===1/0)return;Ne.setup(N,z,ye,F,Re);let Dn,dt=Ce;if(Re!==null&&(Dn=Q.get(Re),dt=Me,dt.setIndex(Dn)),N.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*Ye()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(N.isLine){let He=z.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*Ye()),N.isLineSegments?dt.setMode(U.LINES):N.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else N.isPoints?dt.setMode(U.POINTS):N.isSprite&&dt.setMode(U.TRIANGLES);if(N.isBatchedMesh)dt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)dt.renderInstances(gt,bt,N.count);else if(F.isInstancedBufferGeometry){const He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,eo=Math.min(F.instanceCount,He);dt.renderInstances(gt,bt,eo)}else dt.render(gt,bt)};function nt(x,P,F){x.transparent===!0&&x.side===Ct&&x.forceSinglePass===!1?(x.side=Ht,x.needsUpdate=!0,Xr(x,P,F),x.side=nn,x.needsUpdate=!0,Xr(x,P,F),x.side=Ct):Xr(x,P,F)}this.compile=function(x,P,F=null){F===null&&(F=x),p=Te.get(F),p.init(),T.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(E._useLegacyLights);const z=new Set;return x.traverse(function(N){const ue=N.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const ye=ue[ge];nt(ye,F,N),z.add(ye)}else nt(ue,F,N),z.add(ue)}),T.pop(),p=null,z},this.compileAsync=function(x,P,F=null){const z=this.compile(x,P,F);return new Promise(N=>{function ue(){if(z.forEach(function(ge){Fe.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){N(x);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let it=null;function At(x){it&&it(x)}function Vt(){Wt.stop()}function rt(){Wt.start()}const Wt=new Tu;Wt.setAnimationLoop(At),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(x){it=x,ke.setAnimationLoop(x),x===null?Wt.stop():Wt.start()},ke.addEventListener("sessionstart",Vt),ke.addEventListener("sessionend",rt),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(P),P=ke.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,P,y),p=Te.get(x,T.length),p.init(),T.push(p),_e.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,Z=Be.init(this.clippingPlanes,ce),g=he.get(x,h.length),g.init(),h.push(g),Sn(x,P,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(X,$),this.info.render.frame++,Z===!0&&Be.beginShadows();const F=p.state.shadowsArray;if(j.render(F,x,P),Z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(g,x),p.setupLights(E._useLegacyLights),P.isArrayCamera){const z=P.cameras;for(let N=0,ue=z.length;N<ue;N++){const ge=z[N];Wa(g,x,ge,ge.viewport)}}else Wa(g,x,P);y!==null&&(S.updateMultisampleRenderTarget(y),S.updateRenderTargetMipmap(y)),x.isScene===!0&&x.onAfterRender(E,x,P),Ne.resetDefaultState(),q=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Sn(x,P,F,z){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||G.intersectsSprite(x)){z&&Ue.setFromMatrixPosition(x.matrixWorld).applyMatrix4(_e);const ge=ee.update(x),ye=x.material;ye.visible&&g.push(x,ge,ye,F,Ue.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||G.intersectsObject(x))){const ge=ee.update(x),ye=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ue.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(x.matrixWorld).applyMatrix4(_e)),Array.isArray(ye)){const Re=ge.groups;for(let ze=0,Pe=Re.length;ze<Pe;ze++){const De=Re[ze],gt=ye[De.materialIndex];gt&&gt.visible&&g.push(x,ge,gt,F,Ue.z,De)}}else ye.visible&&g.push(x,ge,ye,F,Ue.z,null)}}const ue=x.children;for(let ge=0,ye=ue.length;ge<ye;ge++)Sn(ue[ge],P,F,z)}function Wa(x,P,F,z){const N=x.opaque,ue=x.transmissive,ge=x.transparent;p.setupLightsView(F),Z===!0&&Be.setGlobalState(E.clippingPlanes,F),ue.length>0&&Ud(N,ue,P,F),z&&pe.viewport(A.copy(z)),N.length>0&&Wr(N,P,F),ue.length>0&&Wr(ue,P,F),ge.length>0&&Wr(ge,P,F),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ud(x,P,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ue=Le.isWebGL2;ve===null&&(ve=new Ri(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Or:oi,minFilter:Ft,samples:ue?4:0})),E.getDrawingBufferSize(Ie),ue?ve.setSize(Ie.x,Ie.y):ve.setSize(Ls(Ie.x),Ls(Ie.y));const ge=E.getRenderTarget();E.setRenderTarget(ve),E.getClearColor(te),C=E.getClearAlpha(),C<1&&E.setClearColor(16777215,.5),E.clear();const ye=E.toneMapping;E.toneMapping=si,Wr(x,F,z),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve);let Re=!1;for(let ze=0,Pe=P.length;ze<Pe;ze++){const De=P[ze],gt=De.object,Jt=De.geometry,bt=De.material,Dn=De.group;if(bt.side===Ct&&gt.layers.test(z.layers)){const dt=bt.side;bt.side=Ht,bt.needsUpdate=!0,Xa(gt,F,z,Jt,bt,Dn),bt.side=dt,bt.needsUpdate=!0,Re=!0}}Re===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve)),E.setRenderTarget(ge),E.setClearColor(te,C),E.toneMapping=ye}function Wr(x,P,F){const z=P.isScene===!0?P.overrideMaterial:null;for(let N=0,ue=x.length;N<ue;N++){const ge=x[N],ye=ge.object,Re=ge.geometry,ze=z===null?ge.material:z,Pe=ge.group;ye.layers.test(F.layers)&&Xa(ye,P,F,Re,ze,Pe)}}function Xa(x,P,F,z,N,ue){x.onBeforeRender(E,P,F,z,N,ue),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(E,P,F,z,x,ue),N.transparent===!0&&N.side===Ct&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,E.renderBufferDirect(F,P,z,N,x,ue),N.side=nn,N.needsUpdate=!0,E.renderBufferDirect(F,P,z,N,x,ue),N.side=Ct):E.renderBufferDirect(F,P,z,N,x,ue),x.onAfterRender(E,P,F,z,N,ue)}function Xr(x,P,F){P.isScene!==!0&&(P=Ae);const z=Fe.get(x),N=p.state.lights,ue=p.state.shadowsArray,ge=N.state.version,ye=me.getParameters(x,N.state,ue,P,F),Re=me.getProgramCacheKey(ye);let ze=z.programs;z.environment=x.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||z.environment),ze===void 0&&(x.addEventListener("dispose",ae),ze=new Map,z.programs=ze);let Pe=ze.get(Re);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===ge)return Ya(x,ye),Pe}else ye.uniforms=me.getUniforms(x),x.onBuild(F,ye,E),x.onBeforeCompile(ye,E),Pe=me.acquireProgram(ye,Re),ze.set(Re,Pe),z.uniforms=ye.uniforms;const De=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(De.clippingPlanes=Be.uniform),Ya(x,ye),z.needsLights=Fd(x),z.lightsStateVersion=ge,z.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Pe,z.uniformsList=null,Pe}function qa(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=Ms.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Ya(x,P){const F=Fe.get(x);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Nd(x,P,F,z,N){P.isScene!==!0&&(P=Ae),S.resetTextureUnits();const ue=P.fog,ge=z.isMeshStandardMaterial?P.environment:null,ye=y===null?E.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Vn,Re=(z.isMeshStandardMaterial?O:v).get(z.envMap||ge),ze=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!F.morphAttributes.position,gt=!!F.morphAttributes.normal,Jt=!!F.morphAttributes.color;let bt=si;z.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(bt=E.toneMapping);const Dn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,dt=Dn!==void 0?Dn.length:0,He=Fe.get(z),eo=p.state.lights;if(Z===!0&&(ce===!0||x!==M)){const sn=x===M&&z.id===q;Be.setState(z,x,sn)}let pt=!1;z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==eo.state.version||He.outputColorSpace!==ye||N.isBatchedMesh&&He.batching===!1||!N.isBatchedMesh&&He.batching===!0||N.isInstancedMesh&&He.instancing===!1||!N.isInstancedMesh&&He.instancing===!0||N.isSkinnedMesh&&He.skinning===!1||!N.isSkinnedMesh&&He.skinning===!0||N.isInstancedMesh&&He.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&He.instancingColor===!1&&N.instanceColor!==null||He.envMap!==Re||z.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Be.numPlanes||He.numIntersection!==Be.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Pe||He.morphTargets!==De||He.morphNormals!==gt||He.morphColors!==Jt||He.toneMapping!==bt||Le.isWebGL2===!0&&He.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,He.__version=z.version);let di=He.currentProgram;pt===!0&&(di=Xr(z,P,N));let $a=!1,vr=!1,to=!1;const Dt=di.getUniforms(),hi=He.uniforms;if(pe.useProgram(di.program)&&($a=!0,vr=!0,to=!0),z.id!==q&&(q=z.id,vr=!0),$a||M!==x){Dt.setValue(U,"projectionMatrix",x.projectionMatrix),Dt.setValue(U,"viewMatrix",x.matrixWorldInverse);const sn=Dt.map.cameraPosition;sn!==void 0&&sn.setValue(U,Ue.setFromMatrixPosition(x.matrixWorld)),Le.logarithmicDepthBuffer&&Dt.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Dt.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,vr=!0,to=!0)}if(N.isSkinnedMesh){Dt.setOptional(U,N,"bindMatrix"),Dt.setOptional(U,N,"bindMatrixInverse");const sn=N.skeleton;sn&&(Le.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Dt.setValue(U,"boneTexture",sn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Dt.setOptional(U,N,"batchingTexture"),Dt.setValue(U,"batchingTexture",N._matricesTexture,S));const no=F.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&Le.isWebGL2===!0)&&We.update(N,F,di),(vr||He.receiveShadow!==N.receiveShadow)&&(He.receiveShadow=N.receiveShadow,Dt.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=Re,hi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),vr&&(Dt.setValue(U,"toneMappingExposure",E.toneMappingExposure),He.needsLights&&Od(hi,to),ue&&z.fog===!0&&le.refreshFogUniforms(hi,ue),le.refreshMaterialUniforms(hi,z,Y,V,ve),Ms.upload(U,qa(He),hi,S)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ms.upload(U,qa(He),hi,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Dt.setValue(U,"center",N.center),Dt.setValue(U,"modelViewMatrix",N.modelViewMatrix),Dt.setValue(U,"normalMatrix",N.normalMatrix),Dt.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const sn=z.uniformsGroups;for(let io=0,Bd=sn.length;io<Bd;io++)if(Le.isWebGL2){const Ka=sn[io];je.update(Ka,di),je.bind(Ka,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function Od(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Fd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(x,P,F){Fe.get(x.texture).__webglTexture=P,Fe.get(x.depthTexture).__webglTexture=F;const z=Fe.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const F=Fe.get(x);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,F=0){y=x,L=P,w=F;let z=!0,N=null,ue=!1,ge=!1;if(x){const Re=Fe.get(x);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Re.__webglFramebuffer===void 0?S.setupRenderTarget(x):Re.__hasExternalTextures&&S.rebindTextures(x,Fe.get(x.texture).__webglTexture,Fe.get(x.depthTexture).__webglTexture);const ze=x.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const Pe=Fe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?N=Pe[P][F]:N=Pe[P],ue=!0):Le.isWebGL2&&x.samples>0&&S.useMultisampledRTT(x)===!1?N=Fe.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[F]:N=Pe,A.copy(x.viewport),k.copy(x.scissor),W=x.scissorTest}else A.copy(K).multiplyScalar(Y).floor(),k.copy(ne).multiplyScalar(Y).floor(),W=ie;if(pe.bindFramebuffer(U.FRAMEBUFFER,N)&&Le.drawBuffers&&z&&pe.drawBuffers(x,N),pe.viewport(A),pe.scissor(k),pe.setScissorTest(W),ue){const Re=Fe.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,Re.__webglTexture,F)}else if(ge){const Re=Fe.get(x.texture),ze=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,F||0,ze)}q=-1},this.readRenderTargetPixels=function(x,P,F,z,N,ue,ge){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){pe.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Re=x.texture,ze=Re.format,Pe=Re.type;if(ze!==vn&&fe.convert(ze)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Or&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Pe!==oi&&fe.convert(Pe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ni&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-z&&F>=0&&F<=x.height-N&&U.readPixels(P,F,z,N,fe.convert(ze),fe.convert(Pe),ue)}finally{const Re=y!==null?Fe.get(y).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(x,P,F=0){const z=Math.pow(2,-F),N=Math.floor(P.image.width*z),ue=Math.floor(P.image.height*z);S.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,x.x,x.y,N,ue),pe.unbindTexture()},this.copyTextureToTexture=function(x,P,F,z=0){const N=P.image.width,ue=P.image.height,ge=fe.convert(F.format),ye=fe.convert(F.type);S.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,x.x,x.y,N,ue,ge,ye,P.image.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,ge,P.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,x.x,x.y,ge,ye,P.image),z===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(x,P,F,z,N=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=x.max.x-x.min.x+1,ge=x.max.y-x.min.y+1,ye=x.max.z-x.min.z+1,Re=fe.convert(z.format),ze=fe.convert(z.type);let Pe;if(z.isData3DTexture)S.setTexture3D(z,0),Pe=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S.setTexture2DArray(z,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jt=U.getParameter(U.UNPACK_SKIP_PIXELS),bt=U.getParameter(U.UNPACK_SKIP_ROWS),Dn=U.getParameter(U.UNPACK_SKIP_IMAGES),dt=F.isCompressedTexture?F.mipmaps[N]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,x.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,x.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Pe,N,P.x,P.y,P.z,ue,ge,ye,Re,ze,dt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Pe,N,P.x,P.y,P.z,ue,ge,ye,Re,dt.data)):U.texSubImage3D(Pe,N,P.x,P.y,P.z,ue,ge,ye,Re,ze,dt),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dn),N===0&&z.generateMipmaps&&U.generateMipmap(Pe),pe.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),pe.unbindTexture()},this.resetState=function(){L=0,w=0,y=null,pe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ma?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Ai:du}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?Mt:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class s0 extends Iu{}s0.prototype.isWebGL1Renderer=!0;class xa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class o0 extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gc extends xn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new mt,_c=new mt,ps=[],vc=new Di,a0=new mt,yr=new Ve,Tr=new Hr;class l0 extends Ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,a0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zi),vc.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zi),Tr.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),e.ray.intersectsSphere(Tr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Zi),_c.multiplyMatrices(i,Zi),yr.matrixWorld=_c,yr.raycast(e,ps);for(let a=0,o=ps.length;a<o;a++){const l=ps[a];l.instanceId=s,l.object=this,t.push(l)}ps.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends ci{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new D,f=new D,m=[],_=[],g=[],p=[];for(let h=0;h<=i;h++){const T=[],E=h/i;let b=0;h===0&&a===0?b=.5/t:h===i&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const w=L/t;d.x=-e*Math.cos(r+w*s)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+E*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(w+b,1-E),T.push(c++)}u.push(T)}for(let h=0;h<i;h++)for(let T=0;T<t;T++){const E=u[h][T+1],b=u[h][T],L=u[h+1][T],w=u[h+1][T+1];(h!==0||a>0)&&m.push(E,b,w),(h!==i-1||l<Math.PI)&&m.push(b,L,w)}this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ar extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rt extends gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ps={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class c0{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const u0=new c0;class Gr{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class d0 extends Error{constructor(e,t){super(e),this.response=t}}class h0 extends Gr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ps.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:i,onError:r});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let g=0;const p=new ReadableStream({start(h){T();function T(){d.read().then(({done:E,value:b})=>{if(E)h.close();else{g+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let w=0,y=u.length;w<y;w++){const q=u[w];q.onProgress&&q.onProgress(L)}h.enqueue(b),T()}})}}});return new Response(p)}else throw new d0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Ps.add(e,c);const u=zn[e];delete zn[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class f0 extends Gr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ps.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Br("img");function l(){u(),Ps.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class p0 extends Gr{constructor(e){super(e)}load(e,t,i,r){const s=new jt,a=new f0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Du extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uo=new mt,xc=new D,Mc=new D;class m0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class g0 extends m0{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _0 extends Du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new g0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class v0 extends Du{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let ms;class Uu{static getContext(){return ms===void 0&&(ms=new(window.AudioContext||window.webkitAudioContext)),ms}static setContext(e){ms=e}}class x0 extends Gr{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new h0(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Uu.getContext().decodeAudioData(c,function(d){t(d)}).catch(o)}catch(c){o(c)}},i,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class Nu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ec();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ec(){return(typeof performance>"u"?Date:performance).now()}const _i=new D,Sc=new mr,M0=new D,vi=new D;class E0 extends St{constructor(){super(),this.type="AudioListener",this.context=Uu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Nu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_i,Sc,M0),vi.set(0,0,-1).applyQuaternion(Sc),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_i.x,r),t.positionY.linearRampToValueAtTime(_i.y,r),t.positionZ.linearRampToValueAtTime(_i.z,r),t.forwardX.linearRampToValueAtTime(vi.x,r),t.forwardY.linearRampToValueAtTime(vi.y,r),t.forwardZ.linearRampToValueAtTime(vi.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(_i.x,_i.y,_i.z),t.setOrientation(vi.x,vi.y,vi.z,i.x,i.y,i.z)}}class Ou extends St{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);const $e=80,de=1,En=.25,Yo=9,Fu=12,S0=.2,y0=.01,T0=.06,yc=2,Ea=100,Sa=3,Bu=30,A0=7,zu=1.5,ku=.5,$o=20,Hu=1.3,Gu=3,Vu=3,Ko=10,Zo=8,Ws=1.8,Wu=5,Xu=16,Xs=30,b0=3,w0=6,qu=10,Yu=.8,R0=1.5,ya=1e3,qs=6,$u=1.5,Li=10233776,C0=1.5,Ku={MUSIC:.3},Is={MUSIC:!1,SOUND_EFFECTS:!0},L0=!0,jo=8,Zu=5,Ds=.3,ju=10,zr=3,P0=5099745,I0=10,Jo=5,D0=5,Tc=0,U0=1,Ta=10,Ys=16733986,N0=2,O0=5025616,Qo=3,Ac=1,F0=16777215,B0=.03,z0=5,Et={UI:{SCORE_LABEL:"SCORE",KILLS_LABEL:"KILLS",GAME_OVER:{DEATH_REASONS:{WALL_COLLISION:"You crashed into a wall",SELF_COLLISION:"You ate yourself",ENEMY_COLLISION:"You choked on a snek",OBSTACLE_COLLISION:"You crashed into an obstacle",TREE_COLLISION:"You tried to eat a tree",BUSH_COLLISION:"You got tangled in a bush"}}},ALPHA_MODE:{ACTIVATED_MESSAGE:"ALPHA SNEK ACTIVATED!",KILL_MESSAGE:"ALPHA KILL!",ALPHA_KILL_MESSAGES:["ALPHA KILL","DOUBLE KILL","TRIPLE KILL","M-M-M-MONSTER KILL","UNSTOPPABLE","GODLIKE","SNEK KING","SNEK EMPORER","SNEK GOD","THE ONE SNEK TO RULE THEM ALL","YOU ARE OMEGA SNEK"]},POWERUPS:{SPEED_BOOST:"Speed boost!",GHOST_MODE:"Ghost mode!",SHRINK:"Shrinkaaage!",SCORE_MULTIPLIER:"3x rewards!",ENEMY_KILLED_MESSAGES:["MILOS SMELLS","MILOS IS THE BEST","MILOS IS A GOOD SNEK","MILOS IS THE BEST SNEK","MILOS IS BETTER THAN EVERYONE","YOU ATE FILIP!","YOU ATE MILOS!"]},TUTORIAL:{CONTROLS:"Left/Right keys to turn your Snek",MOBILE_CONTROLS:"Press left/right buttons to turn your Snek",OBJECTIVE:"Eat food and other sneks to grow your anaconda. Eat a Snek by eating its tail.",ALPHA_MODE_HINT:"Fill up the alpha meter to become the ALPHA SNEK!"}},Bt={BASE_SPEED:2,SPEED_VARIATION:.5,HOP_HEIGHT:.2,HOP_FREQUENCY:1,HOP_FREQUENCY_VARIATION:.5,MAX_DISTANCE:3,DISTANCE_VARIATION:1,DIRECTION_CHANGE_PROBABILITY:.005,MOVE_INTERVAL:.5},k0=10,ea=2,$s=.2,Ks=3,Cr=4620980,H0=.2,G0=3,Us={normal:89,speed:5,shrink:1,score_x2:3,ghost:2},ct={NORMAL:"normal",CASUAL:"casual"},V0={[ct.NORMAL]:{SNAKE_SPEED_MULTIPLIER:1,OBSTACLE_COUNT_MULTIPLIER:1,FOOD_COUNT_MULTIPLIER:1,ALPHA_POINTS_THRESHOLD_MULTIPLIER:1,ALPHA_MODE_DURATION_MULTIPLIER:1,COLLISION_FORGIVENESS:.2},[ct.CASUAL]:{SNAKE_SPEED_MULTIPLIER:.7,OBSTACLE_COUNT_MULTIPLIER:.7,FOOD_COUNT_MULTIPLIER:1.5,ALPHA_POINTS_THRESHOLD_MULTIPLIER:.7,ALPHA_MODE_DURATION_MULTIPLIER:1.5,COLLISION_FORGIVENESS:.5}},I={core:null,scene:null,camera:null,renderer:null,materials:null,lights:{ambientLight:null,directionalLight:null},clock:null,frameCount:0,simulation:{tickRate:15,fixedDelta:1/15,accumulator:0,time:0,lastTimeMs:0,maxSubSteps:5},gameMode:Y0(),playerSnake:{segments:[],direction:{x:1,y:0,z:0},nextDirection:{x:1,y:0,z:0},speed:En,moveTimer:0,animationFrame:0,animationTimer:0,scoreMultiplier:1,ghostModeActive:!1,activePowerUp:null,enlargedHeadUntil:0,alphaMode:{active:!1,startTime:0,endTime:0,lastScoreThreshold:0}},enemies:{list:[],kills:0},food:{positions:[],meshes:[]},obstacles:{list:[],group:null},particles:{},environment:{groundMesh:null,wallGroup:null,grassInstances:null,skybox:null},cameraEffects:{shake:{active:!1,startTime:0,duration:0,intensity:0,originalPosition:new D}},score:{current:0,multiplier:1},highScore:W0(),stats:{applesEaten:0,frogsEaten:0,snakesEaten:0},flags:{gameOver:!1,gameStarted:!1,gamePaused:!1,gameRunning:!1,restartRequested:!1,animating:!1,audioHealthCheckRun:!1,useCoreSimulation:!0},inputQueue:[],cleanupInput:null};function W0(){try{const n=localStorage.getItem("alphaSnek_highScore");return n?parseInt(n,10):0}catch(n){return console.warn("Could not load high score from localStorage:",n),0}}function X0(n){try{localStorage.setItem("alphaSnek_highScore",n.toString()),console.log("High score saved:",n)}catch(e){console.warn("Could not save high score to localStorage:",e)}}function q0(n){try{localStorage.setItem("alphaSnek_gameMode",n),console.log("Game mode saved:",n),I.gameMode=n}catch(e){console.warn("Could not save game mode to localStorage:",e)}}function Aa(){const n=I.gameMode===ct.CASUAL?ct.CASUAL:ct.NORMAL;return V0[n]}function ui(n){const e=Aa();switch(n){case"BASE_SNAKE_SPEED":return En*e.SNAKE_SPEED_MULTIPLIER;case"NUM_OBSTACLES":return Math.round(Bu*e.OBSTACLE_COUNT_MULTIPLIER);case"NUM_INITIAL_FOOD":return Math.round(Ea*e.FOOD_COUNT_MULTIPLIER);case"ALPHA_POINTS_THRESHOLD":return Math.round(Xs*e.ALPHA_POINTS_THRESHOLD_MULTIPLIER);case"ALPHA_MODE_DURATION":return qs*e.ALPHA_MODE_DURATION_MULTIPLIER;case"COLLISION_FORGIVENESS":return e.COLLISION_FORGIVENESS;default:return console.warn(`No adjustment found for setting: ${n}`),null}}function Y0(){try{return localStorage.getItem("alphaSnek_gameMode")===ct.CASUAL?ct.CASUAL:ct.NORMAL}catch(n){return console.warn("Could not load game mode from localStorage:",n),ct.NORMAL}}function $0(){console.log("Resetting game state for new game..."),I.playerSnake.segments=[],I.playerSnake.direction={x:1,y:0,z:0},I.playerSnake.nextDirection={x:1,y:0,z:0},I.playerSnake.speed=En,I.playerSnake.moveTimer=0,I.playerSnake.animationFrame=0,I.playerSnake.animationTimer=0,I.playerSnake.scoreMultiplier=1,I.playerSnake.ghostModeActive=!1,I.playerSnake.activePowerUp=null,I.playerSnake.enlargedHeadUntil=0,I.playerSnake.alphaMode={active:!1,startTime:0,endTime:0,lastScoreThreshold:0},I.score.current=0,I.score.multiplier=1,I.enemies.kills=0,I.stats.applesEaten=0,I.stats.frogsEaten=0,I.stats.snakesEaten=0,I.flags.gameOver=!1,I.flags.gameRunning=!0,I.flags.restartRequested=!1,I.flags.animating=!1,I.clock&&(I.playerSnake.moveTimer=0,I.playerSnake.animationTimer=0)}const xt={snakeSheet:"assets/svg/snake_spritesheet_improved.svg",enemySnakeSheet:"assets/svg/enemy_snake_spritesheet.svg",particle:"assets/svg/particle.svg",skybox:"assets/svg/skybox_blocky.svg",groundTile:"assets/svg/grass.svg",wallStone:"assets/svg/wall_stone.svg",wallIvy:"assets/textures/ivy_wall.png",foodNormal:"assets/svg/food_normal.svg",frogSpeed:"assets/textures/frogs/frog_speed.svg",frogShrink:"assets/textures/frogs/frog_shrink.svg",frogScore:"assets/textures/frogs/frog_score.svg",frogGhost:"assets/textures/frogs/frog_ghost.svg",treeLeaves:"assets/svg/leaves.png",treeTrunk:"assets/textures/tree.png",flowerBush:"assets/textures/flower_bush.png",pinkFlower:"assets/textures/pink_flow.png",whiteDaisy:"assets/textures/white_daisy.png",whiteTulip:"assets/textures/white_tulip.png",yellowFlower:"assets/textures/yellow_flower.png"},Xn=[{type:"normal",svgPath:xt.foodNormal,colorHint:new we(14494720),powerUpDuration:0,description:"Normal Food",effectText:"+1"},{type:"speed",svgPath:xt.frogSpeed,colorHint:new we(9159498),powerUpDuration:$o,description:"Speed Boost Frog",effectText:Et.POWERUPS.SPEED_BOOST},{type:"shrink",svgPath:xt.frogShrink,colorHint:new we(10233776),powerUpDuration:0,description:"Shrink Frog",effectText:Et.POWERUPS.SHRINK},{type:"score_x2",svgPath:xt.frogScore,colorHint:new we(16766720),powerUpDuration:Ko,description:"Score Multiplier Frog",effectText:Et.POWERUPS.SCORE_MULTIPLIER},{type:"ghost",svgPath:xt.frogGhost,colorHint:new we(12434877),powerUpDuration:Zo,description:"Ghost Mode Frog",effectText:Et.POWERUPS.GHOST_MODE}],bc=[{type:"tree"},{type:"bush"}],Xe={cube:new Wn(1,1,1),particle:new In(1,1),groundPlane:null,grassBlade:new In(.1,.6)};Xe.grassBlade.translate(0,.3,0);function K0(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600}const dn={shadows:!0,particles:!0,detailLevel:"high",textureQuality:1,initializeForCurrentDevice:function(){const n=K0();return n?(this.shadows=!1,this.detailLevel="low",this.textureQuality=.5,console.log("Mobile device detected - using low performance settings")):(this.shadows=!0,this.detailLevel="high",this.textureQuality=1,console.log("Desktop device detected - using high performance settings")),n}};function Z0(){const n=new o0;return n.fog=new xa(F0,B0),n}function j0(){const n=new cn(75,window.innerWidth/window.innerHeight,.1,$e*de*6);return n.position.set(0,Fu,Yo),n}function J0(n){const e=new Iu({canvas:n,antialias:!0});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=dn.shadows,dn.shadows&&(e.shadowMap.type=nu),e.outputColorSpace=Mt,e}function Q0(n){const e=new v0(13421772,.65);n.add(e);const t=new _0(16772829,.8);if(t.position.set($e*.15,$e*.25,$e*.1),t.castShadow=dn.shadows,dn.shadows){t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=.5,t.shadow.camera.far=$e*de*.8;const i=$e*de*.6;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-.001}return n.add(t),n.add(t.target),{ambientLight:e,directionalLight:t}}function ev(n,e){if(!e)return console.error("Skybox texture not loaded!"),null;const t=$e*de*5,i=new Wn(t,t,t),r=new cr({map:e,side:Ht,fog:!1}),s=new Ve(i,r);return n.add(s),s}function tv(n,e){if(!e)return console.error("Ground material not created!"),null;const t=$e*de;Xe.groundPlane=new In(t,t);const i=new Ve(Xe.groundPlane,e);return i.rotation.x=-Math.PI/2,i.position.y=0,i.receiveShadow=dn.shadows,n.add(i),i}function nv(n,e){if(!e)return console.error("Wall material not created!"),null;const t=new Cn,i=$e*de/2,r=$e*de+Ac*de,s=Qo*de,a=Ac*de,o=new Wn(r,s,a),l=new Wn(a,s,r),c=s/2,u=new Ve(o,e);u.position.set(0,c,-i-a/2),dn.shadows&&(u.castShadow=!0,u.receiveShadow=!0),t.add(u);const d=new Ve(o,e);d.position.set(0,c,i+a/2),dn.shadows&&(d.castShadow=!0,d.receiveShadow=!0),t.add(d);const f=new Ve(l,e);f.position.set(i+a/2,c,0),dn.shadows&&(f.castShadow=!0,f.receiveShadow=!0),t.add(f);const m=new Ve(l,e);return m.position.set(-i-a/2,c,0),dn.shadows&&(m.castShadow=!0,m.receiveShadow=!0),t.add(m),n.add(t),t}function iv(n,e){if(!e)return console.error("Grass material not created!"),null;const t=new l0(Xe.grassBlade,e,void 0);t.castShadow=!1,t.receiveShadow=!0,t.instanceMatrix.setUsage(Fh);const i=new St;for(let r=0;r<void 0;r++){i.position.set((Math.random()-.5)*($e*de),0,(Math.random()-.5)*($e*de)),i.rotation.y=Math.random()*Math.PI*2;const s=(.8+Math.random()*.4)*de;i.scale.set(s,s,s),i.updateMatrix(),t.setMatrixAt(r,i.matrix)}return t.instanceMatrix.needsUpdate=!0,n.add(t),t}function rv(){Xe.particle=new In(ea,ea)}function sv(n,e){var a;rv();const t=tv(n,e.ground),i=nv(n,e.wall),r=iv(n,e.grass),s=ev(n,(a=e.skybox)==null?void 0:a.map);return{groundMesh:t,wallGroup:i,grassInstances:r,skybox:s}}const ta=["error","warn","info","debug","trace"],ov={enabled:!1,level:"info",categories:{system:!0,physics:!0,input:!0,render:!0,audio:!0,gameplay:!0,ai:!0,performance:!0},showTimestamp:!0};let $t={...ov};function av(){const n=new URLSearchParams(window.location.search);if(n.has("debug")&&($t.enabled=n.get("debug")==="true"),n.has("loglevel")){const e=n.get("loglevel").toLowerCase();ta.includes(e)&&($t.level=e)}if(n.has("logcategories")){const e=n.get("logcategories").toLowerCase().split(",");Object.keys($t.categories).forEach(t=>{$t.categories[t]=!1}),e.forEach(t=>{$t.categories.hasOwnProperty(t)&&($t.categories[t]=!0)})}if($t.enabled){const e=Object.entries($t.categories).filter(([,t])=>t).map(([t])=>t);console.log(`%c[ALPHA_SNEK Logger]%c Initialized | Level: ${$t.level} | Categories: ${e.join(", ")}`,"color: #4CAF50; font-weight: bold;","color: inherit;")}return $t.enabled}function lv(n,...e){const t=[...e];if($t.showTimestamp){const r=new Date().toISOString().substr(11,8);t.unshift(`[${r}]`)}return t.unshift(`[${n}]`),t}function cv(n){switch(n){case"error":return"color: #FF5252; font-weight: bold;";case"warn":return"color: #FFC107; font-weight: bold;";case"info":return"color: #2196F3; font-weight: bold;";case"debug":return"color: #9E9E9E;";case"trace":return"color: #757575;";default:return"color: inherit;"}}function ot(n,e,...t){if(!$t.enabled||!$t.categories[e])return;const i=ta.indexOf($t.level);if(ta.indexOf(n)>i)return;const s=lv(e,...t),a=cv(n);switch(n){case"error":console.error(`%c${s.shift()}%c`,a,"color: inherit;",...s);break;case"warn":console.warn(`%c${s.shift()}%c`,a,"color: inherit;",...s);break;case"info":console.info(`%c${s.shift()}%c`,a,"color: inherit;",...s);break;case"debug":case"trace":default:console.log(`%c${s.shift()}%c`,a,"color: inherit;",...s)}}const H={error:(n,...e)=>ot("error",n,...e),warn:(n,...e)=>ot("warn",n,...e),info:(n,...e)=>ot("info",n,...e),debug:(n,...e)=>ot("debug",n,...e),trace:(n,...e)=>ot("trace",n,...e),system:{error:(...n)=>ot("error","system",...n),warn:(...n)=>ot("warn","system",...n),info:(...n)=>ot("info","system",...n),debug:(...n)=>ot("debug","system",...n),trace:(...n)=>ot("trace","system",...n)},gameplay:{error:(...n)=>ot("error","gameplay",...n),warn:(...n)=>ot("warn","gameplay",...n),info:(...n)=>ot("info","gameplay",...n),debug:(...n)=>ot("debug","gameplay",...n),trace:(...n)=>ot("trace","gameplay",...n)},performance:{error:(...n)=>ot("error","performance",...n),warn:(...n)=>ot("warn","performance",...n),info:(...n)=>ot("info","performance",...n),debug:(...n)=>ot("debug","performance",...n),trace:(...n)=>ot("trace","performance",...n)},audio:{error:(...n)=>ot("error","audio",...n),warn:(...n)=>ot("warn","audio",...n),info:(...n)=>ot("info","audio",...n),debug:(...n)=>ot("debug","audio",...n),trace:(...n)=>ot("trace","audio",...n)}};function uv(){return $t.enabled}async function Xt(n,e,t=!0,i=null){return new Promise((r,s)=>{n.load(e,a=>{t&&(a.colorSpace=Mt),i&&i(a),r(a)},void 0,a=>{H.system.error(`Failed to load texture: ${e}`,a),s(a)})})}async function dv(){const n=new p0,e={snake:{},enemy:{},food:{},obstacle:{},particle:null,ground:null,wall:null,grass:null,skybox:null};let t,i;try{const[r,s,a,o,l,c,u,d,f,m,_,g,p,h,...T]=await Promise.all([Xt(n,xt.snakeSheet,!0,y=>{y.magFilter=vt,y.minFilter=vt,t=y}),Xt(n,xt.enemySnakeSheet,!0,y=>{y.magFilter=vt,y.minFilter=vt,i=y}),Xt(n,xt.particle,!0),Xt(n,xt.skybox,!0,y=>{y.magFilter=vt,y.minFilter=lt}),Xt(n,xt.groundTile,!0,y=>{y.wrapS=mn,y.wrapT=mn,y.repeat.set($e/4,$e/4),y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.wallStone,!0,y=>{y.wrapS=mn,y.wrapT=mn,y.repeat.set($e/3,Qo*1),y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.wallIvy,!0,y=>{y.wrapS=mn,y.wrapT=mn,y.repeat.set($e/3,Qo*1),y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.treeLeaves,!0,y=>{y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.treeTrunk,!0,y=>{y.wrapS=mn,y.wrapT=mn,y.repeat.set(1,1),y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.flowerBush,!0,y=>{y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.pinkFlower,!0,y=>{y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.whiteDaisy,!0,y=>{y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.whiteTulip,!0,y=>{y.magFilter=lt,y.minFilter=Ft}),Xt(n,xt.yellowFlower,!0,y=>{y.magFilter=lt,y.minFilter=Ft}),...Xn.map(y=>Xt(n,y.svgPath,!0,q=>{q.magFilter=lt,q.minFilter=Ft}))]);H.system.info("Core textures loaded."),e.particle=new cr({map:a,transparent:!0,vertexColors:!1,side:Ct,depthWrite:!1,blending:Bo});const E={side:nn},b=(y,q,M)=>{if(!M)return new Rt({color:16711935,...E});const A=new Rt(E);A.map=M.clone(),A.map.needsUpdate=!0;const k=1/yc;return A.map.offset.set(y*k,q*k),A.map.repeat.set(k,k),A};e.snake.head1=b(0,1,t),e.snake.head2=b(1,1,t),e.snake.body1=b(0,0,t),e.snake.body2=b(1,0,t);const L={side:nn},w=(y,q,M)=>{if(!M)return new Rt({color:16711935,...L});const A=new Rt(L);A.map=M.clone(),A.map.needsUpdate=!0;const k=1/yc;return A.map.offset.set(y*k,q*k),A.map.repeat.set(k,k),A};return e.enemy.head1=w(0,1,i),e.enemy.head2=w(1,1,i),e.enemy.body1=w(0,0,i),e.enemy.body2=w(1,0,i),Xn.forEach((y,q)=>{const M=T[q];y.type==="normal"?M?e.food[y.type]=new Rt({map:M,side:nn,color:16777215}):e.food[y.type]=new Rt({color:y.colorHint||16711935,emissive:2236962}):e.food[y.type]=new Rt({color:y.colorHint,side:nn,emissive:2236962,transparent:y.type==="ghost",opacity:y.type==="ghost"?.7:1})}),e.obstacle.tree_trunk=new Rt({map:f,color:9858867}),e.obstacle.tree_leaves=new Rt({map:d,color:3706428,transparent:!0,alphaTest:.5,side:Ct}),e.obstacle.bush=new Rt({color:6856504}),e.obstacle.flower_bush=new Rt({map:m,color:16777215,transparent:!0,alphaTest:.5,side:Ct}),e.obstacle.pink_flower=new Rt({map:_,color:16777215,transparent:!0,alphaTest:.5,side:Ct}),e.obstacle.white_daisy=new Rt({map:g,color:16777215,transparent:!0,alphaTest:.5,side:Ct}),e.obstacle.white_tulip=new Rt({map:p,color:16777215,transparent:!0,alphaTest:.5,side:Ct}),e.obstacle.yellow_flower=new Rt({map:h,color:16777215,transparent:!0,alphaTest:.5,side:Ct}),e.ground=new Rt({map:l,side:nn,color:Cr||16777215}),H.system.info("Ground material created with color:",Cr?"#"+Cr.toString(16).padStart(6,"0"):"No tint (white)"),e.wall=new Rt({map:u,color:16777215,side:Ct}),e.grass=new Rt({color:5606191,side:Ct}),e.skybox=new cr({map:o,side:Ht,fog:!1}),H.system.info("Materials created successfully."),e}catch(r){return H.system.error("Error during texture loading or material creation:",r),e}}const Pt=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600;let Rn=null,Pi=null,xe=null,tt=null,dr=!1,Ju=!1,na=!1;const ia=Pt?5:12,st=[],Pn={},qe={MOVEMENT:"movement",EFFECT:"effect",VOICE:"voice",EXPLOSION:"explosion",UI:"ui"},Hn={[qe.MOVEMENT]:0,[qe.EFFECT]:0,[qe.VOICE]:0,[qe.EXPLOSION]:0,[qe.UI]:0},Qu={[qe.MOVEMENT]:Pt?1:2,[qe.EFFECT]:Pt?2:4,[qe.VOICE]:1,[qe.EXPLOSION]:Pt?1:2,[qe.UI]:1},Vr=[{name:"movePlayerSnake1",path:"assets/sounds/move_player_snake_1.ogg",critical:!0,category:qe.MOVEMENT},{name:"movePlayerSnake2",path:"assets/sounds/move_player_snake_2.ogg",critical:!1,category:qe.MOVEMENT},{name:"eatApple",path:"assets/sounds/eat_apple.ogg",critical:!0,category:qe.EFFECT},{name:"eatFrog",path:"assets/sounds/eat_frog.ogg",critical:!0,category:qe.EFFECT},{name:"eatSnake",path:"assets/sounds/eat_snake.ogg",critical:!0,category:qe.EFFECT},{name:"playerDeath",path:"assets/sounds/died_player.ogg",critical:!0,category:qe.EFFECT},{name:"alphaKillExplode1",path:"assets/sounds/alpha_kill_explode_1.ogg",critical:!0,category:qe.EXPLOSION},{name:"alphaKillExplode2",path:"assets/sounds/alpha_kill_explode_2.ogg",critical:!Pt,category:qe.EXPLOSION},{name:"alphaKill1",path:"assets/sounds/alpha_kill_1_firstblood.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill2",path:"assets/sounds/alpha_kill_2_Double_Kill.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill3",path:"assets/sounds/alpha_kill_3triple_kill.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill4Monster",path:"assets/sounds/alpha_kill_4_MonsterKill.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill4Unstoppable",path:"assets/sounds/alpha_kill_4_Unstoppable.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill5",path:"assets/sounds/alpha_kill_5_GodLike.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill6",path:"assets/sounds/alpha_kill_6_Ownage.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill7",path:"assets/sounds/alpha_kill_7_Killing_Spree.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill8",path:"assets/sounds/alpha_kill_8_UltraKill.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill9",path:"assets/sounds/alpha_kill_9_Rampage.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill10",path:"assets/sounds/alpha_kill_10_MegaKill.mp3",critical:!Pt,category:qe.VOICE},{name:"alphaKill11",path:"assets/sounds/alpha_kill_11_HolyShit.mp3",critical:!Pt,category:qe.VOICE}];let Zt=Is.MUSIC,tn=Is.SOUND_EFFECTS,ir=Ku.MUSIC,bi=Ku.SOUND;const Ns=!0;let No=0,wc=0;const hv="assets/music/Darkman007 - Sad song.mp3";function fv(n){H.audio.info("Initializing audio system...");try{Rn=new E0,n.add(Rn),xe=Rn.context,Ns&&(console.log("Audio context state at init:",xe?xe.state:"No context"),console.log("AudioListener created:",!!Rn)),/iPhone|iPad|iPod|Safari/i.test(navigator.userAgent)&&!navigator.userAgent.includes("Chrome")&&(console.log("Safari/iOS detected, adding special audio handling"),document.addEventListener("click",function e(){if(na)return;const t=xe.createBuffer(1,1,22050),i=xe.createBufferSource();i.buffer=t,i.connect(xe.destination),i.start(0),console.log("Safari audio unlock attempt"),na=!0,document.removeEventListener("click",e)},{once:!0})),Pi=new x0,_v(),tt=new Ou(Rn),vv(),pv(),H.audio.info("Audio system initialized"),gv(),setTimeout(()=>{xe&&xe.state!=="running"&&Es()},1e3),setTimeout(()=>{xe&&xe.state!=="running"&&Es()},5e3),window.testAudio=Lv,window.fixAudio=Es,window.playTestSound=Ev,Ns&&(console.log("Audio debug functions available in console:"),console.log("- window.testAudio() - Test the audio system"),console.log("- window.fixAudio() - Try to resume audio context"),console.log("- window.playTestSound() - Force play a test sound"))}catch(e){H.audio.error("Error initializing audio system:",e),console.error("Audio init error:",e)}}function pv(){try{if(H.audio.info("Initializing sound effects..."),!Pi){console.error("Audio loader not initialized");return}Vr.forEach(n=>{n.critical&&ba(n)}),L0&&setTimeout(()=>{mv()},2e3)}catch(n){H.audio.error("Error initializing sound effects:",n),console.error("Error initializing sound effects:",n)}}function mv(){console.log("Preloading all sound effects in background...");try{let i=function(){if(t>=e.length){console.log("Background preloading complete!");return}const r=e[t];t++,Pi.load(r.path,function(s){Pn[r.name]=s,console.log(`Preloaded sound: ${r.name}`),setTimeout(i,100)},function(s){},function(s){console.error(`Error preloading sound ${r.name}:`,s),setTimeout(i,100)})};var n=i;const e=Vr.filter(r=>!r.critical&&!Pn[r.name]);if(e.length===0){console.log("All sounds already loaded!");return}let t=0;i()}catch(e){console.error("Error in preloadAllSounds:",e)}}function gv(){["click","touchstart","touchend","mousedown","keydown"].forEach(e=>{document.addEventListener(e,rr,{once:!0}),document.body.addEventListener(e,rr,{once:!0}),window.addEventListener(e,rr,{once:!0})}),console.log("Set up multiple interaction handlers for audio")}function Es(){if(console.log("Attempting to forcibly start audio..."),xe){if(xe.state!=="running")console.log("Resuming audio context from state:",xe.state),xe.resume().then(()=>{if(console.log("Successfully resumed audio context, new state:",xe.state),Zt&&dr&&tt&&!tt.isPlaying){Zt=!0;try{tt.play(),console.log("Started background music")}catch(n){console.error("Error playing background music:",n)}}setTimeout(()=>{tn&&(tn=!0,Iv())},300),Ju=!0,na=!0}).catch(n=>{console.error("Failed to resume audio context:",n)});else if(console.log("Audio context already running"),Zt&&dr&&tt&&!tt.isPlaying)try{tt.play(),console.log("Started background music (context already running)")}catch(n){console.error("Error playing background music:",n)}}else console.error("No audio context available")}function rr(){H.audio.info("Handling user interaction for audio...");try{Es(),["click","touchstart","touchend","mousedown","keydown"].forEach(e=>{document.removeEventListener(e,rr),document.body.removeEventListener(e,rr),window.removeEventListener(e,rr)}),H.audio.info("Audio system fully initialized by user interaction")}catch(n){H.audio.error("Error in handleFirstUserInteraction:",n),console.error("First interaction error:",n)}}function _v(){H.audio.info(`Initializing sound pool with ${ia} slots`);try{for(let n=0;n<ia;n++){const e=new Ou(Rn);try{e.setVolume(bi||.5)}catch(t){console.error("Error setting audio volume:",t),e.gain.gain.value=bi||.5}st.push({audio:e,inUse:!1,name:null,category:null,startTime:0})}Ns&&console.log(`Created sound pool with ${st.length} audio objects`)}catch(n){H.audio.error("Error initializing sound pool:",n),console.error("Sound pool init error:",n)}}function ba(n){if(!Pi){H.audio.error("Cannot load sound effect - audio loader not initialized");return}console.log(`Loading sound effect: ${n.name} from ${n.path}`);try{Pi.load(n.path,e=>{Pn[n.name]=e,Ns&&console.log(`Successfully loaded sound effect: ${n.name}`)},e=>{H.audio.debug(`Sound effect ${n.name} loading: ${(e.loaded/e.total*100).toFixed(0)}%`)},e=>{H.audio.error(`Error loading sound effect ${n.name}:`,e),console.error(`Failed to load sound ${n.name} from ${n.path}:`,e)})}catch(e){H.audio.error(`Critical error loading sound effect ${n.name}:`,e),console.error(`Critical error loading sound ${n.name}:`,e)}}function vv(){if(!Pi||!Rn){H.audio.error("Cannot load background music - audio system not initialized");return}H.audio.info("Loading background music...");try{Pi.load(hv,n=>{tt&&(tt.setBuffer(n),tt.setLoop(!0),tt.setVolume(ir),dr=!0,H.audio.info("Background music loaded successfully"),Zt&&Ju&&Ii())},n=>{H.audio.debug(`Music loading: ${(n.loaded/n.total*100).toFixed(0)}%`)},n=>{H.audio.error("Error loading background music:",n)})}catch(n){H.audio.error("Critical error loading background music:",n)}}function ed(n){try{if(!Rn||!st||st.length===0)return console.error("Cannot get sound - invalid audio system state"),null;if(Hn[n]>=Qu[n]){let o=null,l=1/0;for(let c=0;c<st.length;c++){const u=st[c];u.category===n&&u.inUse&&u.audio.startTime&&u.audio.startTime<l&&(l=u.audio.startTime,o=u)}if(o){const c=o.audio;if(c.isPlaying)try{c.stop(),c.source.onended=null,c.source=null,c.buffer=null}catch(u){console.warn("Non-critical error stopping sound:",u)}return c}}for(let o=0;o<st.length;o++){const l=st[o];if(!l.inUse||!l.audio.isPlaying){if(l.inUse=!0,l.category=n,Hn[n]++,l.audio.isPlaying)try{l.audio.stop(),l.audio.source.onended=null,l.audio.source=null,l.audio.buffer=null}catch(c){console.warn("Non-critical error resetting sound:",c)}return l.audio}}const e=[qe.MOVEMENT,qe.EFFECT,qe.EXPLOSION,qe.VOICE],t=e.indexOf(n),i=e.slice(0,t);let r=null,s=1/0;for(let o=0;o<st.length;o++){const l=st[o];i.includes(l.category)&&l.inUse&&l.audio.startTime&&l.audio.startTime<s&&(s=l.audio.startTime,r=l)}if(r){const o=r.audio;if(o.isPlaying)try{o.stop(),o.source.onended=null,o.source=null,o.buffer=null}catch(l){console.warn("Non-critical error stopping stolen sound:",l)}return Hn[r.category]--,r.category=n,Hn[n]++,o}const a=st[0];if(a){const o=a.audio;if(o.isPlaying)try{o.stop(),o.source.onended=null,o.source=null,o.buffer=null}catch(l){console.warn("Non-critical error stopping fallback sound:",l)}return a.category&&Hn[a.category]--,a.inUse=!0,a.category=n,Hn[n]++,o}return null}catch(e){return console.error("Error in getAvailableSound:",e),null}}function rn(n,e,t=!1){if(!tn)return!1;try{const i=Vr.find(o=>o.name===n);if(!i)return H.audio.error(`Sound effect not found: ${n}`),!1;const r=i.category||qe.EFFECT;if(!t&&Hn[r]>=Qu[r])return!1;if(!Pn[n])return ba(i),console.log(`Loading sound effect: ${n} from ${i.path}`),!1;const s=ed(r);if(!s)return console.error("Cannot play sound - no available sound objects"),!1;s.setBuffer(Pn[n]);const a=e!==void 0&&!isNaN(e)&&isFinite(e)?Math.min(Math.max(e,0),1):bi||.5;try{s.gain&&s.gain.gain?s.gain.gain.value=a:s.setVolume(a)}catch(o){console.error("Error setting volume:",o);try{s.gain.gain.setValueAtTime(a,xe.currentTime)}catch(l){console.error("Critical error setting volume, using fixed value:",l),s.gain&&s.gain.gain&&(s.gain.gain.value=.3)}}return s.startTime=xe.currentTime,s.play(),s.onEnded=()=>{const o=st.findIndex(l=>l.audio===s);if(o!==-1){const l=st[o].category;l&&Hn[l]--,st[o].inUse=!1,st[o].name=null,st[o].category=null}},!0}catch(i){return H.audio.error(`Error playing sound effect ${n}:`,i),console.error(`Error playing ${n}:`,i),!1}}function xv(){if(tn)try{if(No=(No+1)%4,No!==0)return;const n=window.isAlphaMode?"movePlayerSnake2":"movePlayerSnake1";if(!rn(n,.4)&&!Pn[n]){const t=Vr.find(i=>i.name===n);t&&(ba(t),H.audio.debug(`Attempted to load missing movement sound: ${n}`))}Math.random()<.1&&Mv()}catch(n){console.error("Error playing player movement sound:",n)}}function Mv(){try{for(let n=0;n<st.length;n++){const e=st[n];e.inUse&&!e.audio.isPlaying&&(e.inUse=!1,e.name=null,e.category&&(Hn[e.category]--,e.category=null),H.audio.debug("Reset stalled sound in pool"))}}catch(n){console.error("Error resetting sound pool:",n)}}function Ev(){console.log("Attempting to force-play a test sound...");try{xe&&xe.state!=="running"?(console.log("Audio context not running, attempting to resume..."),xe.resume().then(()=>{console.log("Audio context resumed, now trying to play sound"),n()}).catch(e=>{console.error("Failed to resume audio context:",e),n()})):n()}catch(e){console.error("Error in playTestSound:",e)}function n(){try{const e=xe.createOscillator(),t=xe.createGain();t.gain.value=.1,e.connect(t),t.connect(xe.destination),e.frequency.value=440,e.start(0),console.log("Test tone started"),setTimeout(()=>{e.stop(),console.log("Test tone stopped"),console.log("Attempting to play movePlayerSnake1 sound...");const i=rn("movePlayerSnake1");console.log("Sound effect play result:",i)},1e3)}catch(e){console.error("Failed to play oscillator:",e)}}}function Ii(){if(!dr||!Zt||!tt)return!1;try{return tt.isPlaying||(H.audio.info("Playing background music..."),tt.setLoop(!0),tt.setVolume(ir),tt.play()),!0}catch(n){return H.audio.error("Error playing background music:",n),xe&&xe.state!=="running"&&xe.resume().catch(e=>{H.audio.warn("Could not resume audio context:",e)}),!1}}function gs(n){return n!==void 0?Zt=n:Zt=!Zt,console.log(`Music toggled to: ${Zt?"ON":"OFF"}`),Zt?dr&&tt&&Ii():tt&&tt.isPlaying&&wa(),Zt&&xe&&xe.state!=="running"&&xe.resume().catch(e=>console.error("Error resuming audio context:",e)),Zt}function Sv(n){return n!==void 0?tn=n:tn=!tn,console.log(`Sound effects toggled to: ${tn?"ON":"OFF"}`),tn||st.forEach(e=>{e&&e.audio&&e.audio.isPlaying&&(e.audio.stop(),e.inUse=!1)}),tn&&xe&&xe.state!=="running"&&xe.resume().catch(e=>console.error("Error resuming audio context:",e)),tn}function yv(){return ir}function Tv(){return bi}function Av(n){if(n<0||n>1){H.audio.warn(`Invalid music volume: ${n}. Must be between 0 and 1.`);return}ir=n,tt&&(tt.setVolume(ir),H.audio.info(`Music volume set to: ${ir}`))}function bv(n){if(n<0||n>1){H.audio.warn(`Invalid sound volume: ${n}. Must be between 0 and 1.`);return}bi=n,st.forEach(e=>{e&&e.audio.isObject3D&&e.audio.setVolume(bi)}),H.audio.info(`Sound effects volume set to: ${bi}`)}function td(){if(!tn)return;const n=["alphaKill1","alphaKill2","alphaKill3","alphaKill4Monster","alphaKill4Unstoppable","alphaKill5","alphaKill6","alphaKill7","alphaKill8","alphaKill9","alphaKill10","alphaKill11"],e=wc%n.length,t=n[e];rn(t),wc++,setTimeout(()=>rn("alphaKillExplode1"),100)}function wa(){tt&&tt.isPlaying&&(H.audio.info("Pausing background music"),tt.pause())}function wv(){H.audio.info("Cleaning up audio resources...");const n=tt&&tt.isPlaying;try{if(st.forEach(e=>{if(e&&e.audio.isPlaying)try{e.audio.stop(),e.inUse=!1,e.name=null}catch{}}),xe&&xe.state!=="running"){H.audio.warn(`Audio context is in state: ${xe.state}, attempting recovery`);try{xe.resume().catch(e=>{H.audio.warn("Could not resume audio context:",e)})}catch{}}}catch(e){H.audio.error("Error during audio cleanup:",e)}return H.audio.info("Sound effects stopped and cleaned up (music preserved)"),n}function Rv(){Zt&&dr&&tt&&!tt.isPlaying&&(H.audio.info("Attempting to restore background music playback"),setTimeout(()=>{Ii()},100))}function Cv(){if(!(!Rn||!xe))try{xe.state!=="running"&&(H.audio.warn(`Audio health check: context is ${xe.state}, attempting recovery`),xe.resume().catch(e=>{H.audio.error("Failed to resume audio context:",e)}));let n=0;if(st.forEach(e=>{e.audio.isPlaying&&n++}),n>ia-1){H.audio.warn(`Audio health check: ${n} sounds playing, cleaning up`);let e=null,t=1/0;st.forEach(i=>{i.audio.isPlaying&&i.audio.startTime&&i.audio.startTime<t&&(t=i.audio.startTime,e=i)}),e&&(e.audio.stop(),e.inUse=!1,H.audio.info(`Stopped oldest sound: ${e.name||"unknown"}`))}}catch(n){H.audio.error("Error in audio health check:",n)}}function Lv(){console.log("======= AUDIO SYSTEM TEST ======="),console.log("AudioListener exists:",!!Rn),console.log("AudioContext exists:",!!xe),console.log("AudioContext state:",xe?xe.state:"N/A"),console.log("Sound enabled:",tn),console.log("Music enabled:",Zt),console.log("Sound pool size:",st.length),console.log("Loaded sound buffers:",Object.keys(Pn)),xe&&xe.state==="suspended"&&(console.log("Attempting to resume suspended audio context..."),xe.resume().then(()=>{console.log("Audio context resumed successfully")}).catch(n=>{console.error("Failed to resume audio context:",n)}));try{const n=xe.createOscillator();n.type="sine",n.frequency.setValueAtTime(440,xe.currentTime);const e=xe.createGain();e.gain.setValueAtTime(.1,xe.currentTime),n.connect(e),e.connect(xe.destination),n.start(),console.log("Test tone started"),setTimeout(()=>{n.stop(),console.log("Test tone stopped"),console.log("Attempting to play movePlayerSnake1 sound...");const t=rn("movePlayerSnake1");console.log("Sound effect play result:",t)},1e3)}catch(n){console.error("Error playing test sound:",n)}console.log("================================")}function Pv(n=!1){window.isAlphaMode=n,xv()}function Iv(){console.log("Attempting to play player movement sound (direct method)...");try{if(Pn.movePlayerSnake1)n(Pn.movePlayerSnake1);else{console.log("Sound buffer not loaded, attempting to load...");const e=Vr.find(i=>i.name==="movePlayerSnake1");if(!e){console.error("Sound definition not found");return}const t=new XMLHttpRequest;t.open("GET",e.path,!1),t.responseType="arraybuffer",t.onload=function(){xe.decodeAudioData(t.response,function(i){Pn.movePlayerSnake1=i,console.log("Successfully loaded sound buffer synchronously"),n(i)},function(i){console.error("Error decoding audio data:",i)})},t.onerror=function(){console.error("Error loading sound file")},t.send()}}catch(e){console.error("Error in playMovePlayerSound:",e)}function n(e){try{const t=ed();if(!t){console.error("No available sound object in pool");return}t.setBuffer(e);try{t.gain&&t.gain.gain?t.gain.gain.value=.5:t.setVolume(.5)}catch(i){console.error("Error setting volume:",i);try{t.gain.gain.setValueAtTime(.5,xe.currentTime)}catch(r){console.error("Critical volume error:",r)}}t.play(),console.log("Successfully played movement sound!"),t.onEnded=()=>{const i=st.findIndex(r=>r.audio===t);i!==-1&&(st[i].inUse=!1),console.log("Sound playback completed")}}catch(t){console.error("Error playing sound with buffer:",t)}}}const An=document.getElementById("info"),bn=document.getElementById("kills"),wn=document.getElementById("highScoreInfo"),ji=document.getElementById("powerUpInfo"),Ot=document.getElementById("powerUpTextEffect"),Mn=document.getElementById("gameOver"),Rc=document.getElementById("finalScore"),Cc=document.getElementById("highScore"),Lc=document.getElementById("deathReason"),Pc=document.getElementById("restartButton"),Ss=document.getElementById("leftButton"),ys=document.getElementById("rightButton"),wi=document.getElementById("alphaModeContainer"),It=document.getElementById("alphaModeLabel"),ai=document.getElementById("alphaModeProgress"),Ic=document.getElementById("applesEaten"),Dc=document.getElementById("frogsEaten"),Uc=document.getElementById("snakesEaten"),Nc=document.getElementById("settingsButton"),Os=document.getElementById("settingsMenu"),Oc=document.getElementById("closeSettings"),Fc=document.querySelectorAll(".tab-button"),Dv=document.querySelectorAll(".tab-pane"),Lr=document.getElementById("musicToggle"),Pr=document.getElementById("soundToggle"),Ir=document.getElementById("musicVolume"),Dr=document.getElementById("soundVolume"),Bc=document.getElementById("musicToggleButton"),hr=document.getElementById("introScreen"),zc=document.getElementById("startButton"),kc=document.getElementById("controlsText"),Hc=document.getElementById("objectiveText"),Gc=document.getElementById("alphaModeText"),Vc=document.getElementById("helpButton");let Ra=!1,nd=!0;function Wc(){if(wn){const n=document.createElement("span");n.classList.add("label"),n.textContent="High Score: ",wn.innerHTML="",wn.appendChild(n),wn.appendChild(document.createTextNode("0"))}if(An){const n=document.createElement("span");n.classList.add("label"),n.textContent=Et.UI.SCORE_LABEL+": ",An.innerHTML="",An.appendChild(n),An.appendChild(document.createTextNode("0"))}if(bn){const n=document.createElement("span");n.classList.add("label"),n.textContent=Et.UI.KILLS_LABEL+": ",bn.innerHTML="",bn.appendChild(n),bn.appendChild(document.createTextNode("0"))}It&&(It.textContent="ALPHA MODE"),kc&&(kc.textContent=Uv()?Et.TUTORIAL.MOBILE_CONTROLS:Et.TUTORIAL.CONTROLS),Hc&&(Hc.textContent=Et.TUTORIAL.OBJECTIVE),Gc&&(Gc.textContent=Et.TUTORIAL.ALPHA_MODE_HINT)}function Uv(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Nv(){const n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(!n)return!1;const e=window.innerWidth>=600&&window.innerWidth<=1366,t=navigator.userAgent.toLowerCase(),i=/ipad/.test(t)||/macintosh/.test(t)&&navigator.maxTouchPoints>1,r=/android/.test(t)&&!/mobile/.test(t),s=/windows/.test(t)&&/touch/.test(t),a=!!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return i||r||s||a||n&&e}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Wc):Wc();function Ov(){zc&&zc.addEventListener("click",function(){Ra?kv():Ca()}),Pc&&Pc.addEventListener("click",function(){Mn&&Mn.classList.remove("active"),window.dispatchEvent(new CustomEvent("gameRestart"))}),Vc&&Vc.addEventListener("click",Xc),Nc&&Nc.addEventListener("click",Xc),Oc&&Oc.addEventListener("click",Yv),Fc.forEach(n=>{n.addEventListener("click",()=>{Fc.forEach(t=>t.classList.remove("active")),Dv.forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=n.getAttribute("data-tab");document.getElementById(e).classList.add("active")})}),Bc&&Bc.addEventListener("click",()=>{const n=sr();n.music=!n.music,Oo(n),Fs(),ra(),n.music?(gs(!0),Ii()):gs(!1),window.fixAudio&&window.fixAudio()}),Lr&&Lr.addEventListener("click",()=>{const n=sr();n.music=!n.music,Oo(n),Fs(),ra(),n.music?(gs(!0),Ii()):gs(!1),window.fixAudio&&window.fixAudio()}),Pr&&Pr.addEventListener("click",()=>{const n=sr();n.sound=!n.sound,Oo(n),id(),Sv(n.sound)}),Ir&&Ir.addEventListener("input",()=>{const n=Ir.value/100;Av(n)}),Dr&&Dr.addEventListener("input",()=>{const n=Dr.value/100;bv(n)})}function Fv(){Ov(),Bv(),Fs()}function sr(){try{const n=localStorage.getItem("alphaSnekAudioState");if(n)return JSON.parse(n)}catch(n){console.error("Error loading audio state:",n)}return{music:Is.MUSIC,sound:Is.SOUND_EFFECTS}}function Oo(n){try{localStorage.setItem("alphaSnekAudioState",JSON.stringify(n))}catch(e){console.error("Error saving audio state:",e)}}function Fs(){const n=document.querySelector("#musicToggleButton .music-icon");if(n){const e=sr().music;n.style.opacity=e?"1.0":"0.4";const t=n.parentElement;t&&(e?t.classList.remove("muted"):t.classList.add("muted"))}}function ra(){if(Lr){const n=sr().music;Lr.classList.toggle("muted",!n);const e=Lr.querySelector(".toggle-status");e&&(e.textContent=n?"ON":"OFF")}}function id(){if(Pr){const n=sr().sound;Pr.classList.toggle("muted",!n);const e=Pr.querySelector(".toggle-status");e&&(e.textContent=n?"ON":"OFF")}}function Bv(){Fs(),ra(),id(),Ir&&(Ir.value=Math.round(yv()*100)),Dr&&(Dr.value=Math.round(Tv()*100))}Fv();function Ca(){hr&&(hr.style.display="none"),Mn&&(Mn.style.display="none"),Ra=!0,nd=!1,window.dispatchEvent(new CustomEvent("gameStarted"))}function zv(){nd?(hr&&(hr.style.display="flex"),Ra=!1):Ca()}function kv(){hr&&(hr.style.display="none"),window.dispatchEvent(new CustomEvent("gameResumed"))}let ei=null;window.addEventListener("resize",La);function La(){!Ss||!ys||Mn!=null&&Mn.classList.contains("active")||(window.innerWidth<=767||Nv()?(Ss.style.display="flex",ys.style.display="flex"):(Ss.style.display="none",ys.style.display="none"))}La();function Hv(){wi&&(wi.style.display="flex",ai&&(ai.style.height="0%"),It&&(It.style.display="block"))}Hv();const Gv={leftButton:Ss,rightButton:ys};function Zs(n){if(An){const e=An.querySelector(".label");if(e){const t=document.createTextNode(n.toString());Array.from(An.childNodes).forEach(i=>{(i.nodeType===Node.TEXT_NODE||i!==e&&i.nodeType===Node.ELEMENT_NODE)&&An.removeChild(i)}),An.appendChild(t)}else An.textContent=`${Et.UI.SCORE_LABEL}: ${n}`}}function js(n){if(bn){const e=bn.querySelector(".label");if(e){const t=document.createTextNode(n.toString());Array.from(bn.childNodes).forEach(i=>{(i.nodeType===Node.TEXT_NODE||i!==e&&i.nodeType===Node.ELEMENT_NODE)&&bn.removeChild(i)}),bn.appendChild(t)}else bn.textContent=`${Et.UI.KILLS_LABEL}: ${n}`}}function sa(n){if(wn){const e=wn.querySelector(".label");e?(wn.innerHTML="",wn.appendChild(e),wn.appendChild(document.createTextNode(n))):wn.textContent="High Score: "+n}}function Vv(n,e,t,i={}){var r,s,a;if(Mn){if(Mn.style.display="flex",Rc){const o=typeof n=="object"?n.current||0:n;Rc.textContent=o,console.log("Setting final score:",o)}if(Cc&&(Cc.textContent=e),Lc){let o="You died!";Et?t&&((a=(s=(r=Et.UI)==null?void 0:r.GAME_OVER)==null?void 0:s.DEATH_REASONS)!=null&&a[t])&&(o=Et.UI.GAME_OVER.DEATH_REASONS[t]):console.warn("CONFIG.GAME_TEXT not found, using default death message"),Lc.textContent=o,console.log(`Game over: ${o} (reason code: ${t})`)}i&&(Ic&&i.applesEaten!==void 0&&(Ic.textContent=i.applesEaten),Dc&&i.frogsEaten!==void 0&&(Dc.textContent=i.frogsEaten),Uc&&i.snakesEaten!==void 0&&(Uc.textContent=i.snakesEaten)),window.dispatchEvent(new CustomEvent("gameOver"))}}function Wv(){Mn&&Mn.classList.remove("active"),La()}function Ur(n){if(ji){if(ji.innerHTML="",!n){ji.style.display="none";return}if(n.includes("|"))n.split("|").map(t=>t.trim()).forEach(t=>{const i=document.createElement("div");i.className="power-up-item",i.textContent=t,ji.appendChild(i)});else{const e=document.createElement("div");e.className="power-up-item",e.textContent=n,ji.appendChild(e)}ji.style.display="flex"}}function ht(n,e=16777215){if(!Ot)return;const t=()=>{Ot.style.display="none",Ot.classList.remove("powerup-text-animate"),ei=null};ei&&(Ot.removeEventListener("animationend",ei),Ot.classList.remove("powerup-text-animate"),Ot.style.display="none",Ot.offsetWidth),Ot.textContent=n,Ot.style.color=`#${e.toString(16).padStart(6,"0")}`,Ot.style.display="block",ei=t,Ot.addEventListener("animationend",ei,{once:!0}),Ot.classList.add("powerup-text-animate")}function rd(){Ot&&(ei&&(Ot.removeEventListener("animationend",ei),ei=null),Ot.style.display="none",Ot.classList.remove("powerup-text-animate"))}function sd(n=0,e){Zs(n),js(0),Ur(""),Wv(),rd(),e&&e.highScore!==void 0?sa(e.highScore):sa(0),wi&&(wi.style.display="flex",ai&&(ai.style.height="0%"),It&&(It.style.display="block",It.classList.remove("alpha-mode-active"),It.textContent="ALPHA MODE"))}function Xv(){const n=Et.POWERUPS.ENEMY_KILLED_MESSAGES;if(!n||n.length===0)return"ENEMY KILLED!";const e=Math.floor(Math.random()*n.length);return n[e]}function qv(n,e,t){if(ai){const i=Math.max(0,Math.min(100,n));ai.style.height=`${i}%`,wi&&wi.style.display!=="flex"&&(wi.style.display="flex",It&&(It.style.display="block",e!==void 0&&t!==void 0?It.textContent=`ALPHA: ${e}/${t}`:It.textContent="ALPHA"))}}function oa(n,e,t=1){if(ai){const i=n*100;ai.style.height=`${i}%`}if(It)if(n>0){It.classList.add("alpha-mode-active");const i=e.toFixed(1);let r="";t>1&&(r=` x${t.toFixed(1)}`),It.textContent=`ALPHA ${i}s${r}`}else It.classList.remove("alpha-mode-active"),It.textContent="ALPHA MODE"}function od(){ht(Et.ALPHA_MODE.ACTIVATED_MESSAGE,10233776)}function ad(n,e){console.log("Alpha Mode cooldown disabled")}function Xc(){window.dispatchEvent(new Event("gamePaused")),Os&&Os.classList.add("active")}function Yv(){Os&&Os.classList.remove("active"),window.dispatchEvent(new Event("gameResumed"))}function qc(n,e,t=!0,i=!0,r=!0,s=!0){const{playerSnake:a,food:o,obstacles:l,enemies:c}=e;if(r&&a.segments&&a.segments.some(u=>u.x===n.x&&u.z===n.z)||t&&o.positions&&o.positions.some(u=>u.x===n.x&&u.z===n.z))return!0;if(i&&l.list){for(const u of l.list)if(u.occupiedCells.some(d=>d.x===n.x&&d.z===n.z))return!0}if(s&&c.list){for(const u of c.list)if(u.snake.some(d=>d.x===n.x&&d.z===n.z))return!0}return!1}function Pa(n,e=!0,t=!0,i=!0,r=!0,s=0){const a=Math.floor($e/2);let o,l=0;const c=$e*$e;for(;l<c;){if(o={x:Math.floor(Math.random()*$e)-a,y:0,z:Math.floor(Math.random()*$e)-a},Math.abs(o.x)<=s&&Math.abs(o.z)<=s){l++;continue}if(!qc(o,n,e,t,i,r))if(t){let u=!1;for(const d of[-1,0,1]){for(const f of[-1,0,1])if(!(d===0&&f===0)&&qc({x:o.x+d,z:o.z+f},n,!1,!0,!1,!1)){u=!0;break}if(u)break}if(!u)return o}else return o;l++}return console.error(`Could not find unique position after ${c} attempts.`),{x:0,y:0,z:0}}function li(n,e,t,i,r=null){let s,a;i?(s=t.snake.head1,t.snake.head2,a=t.snake.body1,t.snake.body2):(s=t.enemy.head1,t.enemy.head2,a=t.enemy.body1,t.enemy.body2);const o=e?s:a;if(!o)return console.error(`Snake material missing! Player: ${i}, Head: ${e}`),new Ve(Xe.cube,new cr({color:16711935}));const l=new Ve(Xe.cube,o.clone());if(l.scale.setScalar(de),l.position.set(n.x*de,n.y*de,n.z*de),l.castShadow=!0,l.receiveShadow=!1,l.position.y+=de/2,i)l.name=e?"playerSnakeHead":"playerSnakeBody";else{const c=r!==null?`_${r}`:"";l.name=e?`enemySnakeHead${c}`:`enemySnakeBody${c}`}return l}let zt=[],qn=null,kr=!1;const Ia=200;function $v(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600}function Kv(n){if(!n){console.error("Particle material is required for initParticles!");return}qn=n,zt=[],kr=$v(),console.log(`Device detected as: ${kr?"Mobile":"Desktop"}`)}function Da(n){return zt.length>Ia*.7&&(n=Math.max(1,Math.floor(n*.3))),kr&&(n=Math.max(1,Math.floor(n*.25))),n}function Zv(n,e,t){if(!qn||!n||!e){console.warn("Cannot create food effect - material, scene or camera missing.");return}if(kr||zt.length>Ia*.8)return;const i=new we(O0),r=Da(N0);if(!(r<=0))for(let s=0;s<r;s++){const a=qn.clone();a.color=i.clone();const o=new Ve(Xe.particle,a);o.position.copy(t),o.scale.setScalar(.6),o.lookAt(e.position);const l=Math.random()*Math.PI*2,c=Ks*.6*(.6+Math.random()*.8),u=new D(Math.cos(l)*c,Math.random()*.5*c,Math.sin(l)*c),d=$s*.6;zt.push({mesh:o,velocity:u,life:d,initialLife:d}),n.add(o)}}function Js(n,e,t,i,r=16777215){if(!qn||!n||!e){console.warn("Cannot create explosion - material, scene or camera missing.");return}const s=Da(i);if(s<=0)return;const a=new we(r);for(let o=0;o<s;o++){const l=qn.clone(),c=new we(16768392).lerp(new we(16755268),Math.random());l.color=a.clone().lerp(c,Math.random()*.5);const u=new Ve(Xe.particle,l);u.position.copy(t),u.lookAt(e.position);const d=Math.random()*Math.PI*2,f=Ks*(.6+Math.random()*.8),m=new D(Math.cos(d)*f,(Math.random()-.2)*f*.7,Math.sin(d)*f),_=$s*(.7+Math.random()*.6);zt.push({mesh:u,velocity:m,life:_,initialLife:_}),n.add(u)}}function ld(n,e,t){if(!qn||!n||!e){console.warn("Cannot create kill effect - material, scene or camera missing.");return}let i=Ta;if(i=Da(i),i<=0)return;const r=new we(Ys),s=ea*1.5,a=$s*1.5,o=Ks*1.2;for(let l=0;l<i;l++){const c=new Ma(s,4,4),u=qn.clone();u.color.copy(r);const d=new Ve(c,u);d.position.copy(t);const f=l/i*Math.PI*8,m=l/i*5,_=l/i*4-2,g=new D(Math.cos(f)*m*o,_*o,Math.sin(f)*m*o);n.add(d),zt.push({mesh:d,velocity:g,life:a,initialLife:a})}}function jv(n,e,t,i=9159498){if(!qn||!n||!e){console.warn("Cannot create frog effect - material, scene or camera missing.");return}let r=30;if(kr&&(r=Math.max(5,Math.floor(r*.25))),r<=0)return;const s=new we(i);for(let a=0;a<r;a++){const o=qn.clone(),l=new we().setHSL(Math.random()*.1+.3,.8,.6);o.color=s.clone().lerp(l,Math.random()*.3);const c=new Ve(Xe.particle,o);c.position.copy(t),c.lookAt(e.position);const u=Math.random()*Math.PI*2,d=Ks*(.7+Math.random()*.6),f=new D(Math.cos(u)*d*.7,(Math.random()*.8+.5)*d,Math.sin(u)*d*.7),m=$s*(.8+Math.random()*.7);zt.push({mesh:c,velocity:f,life:m,initialLife:m,isFrog:!0}),n.add(c)}}function Yc(n,e){if(!e)return;const t=9.8;if(zt.length>Ia){const i=Math.floor(zt.length*.2);for(let r=0;r<i;r++){const s=zt[r];s&&s.mesh&&(e.remove(s.mesh),s.mesh.material&&s.mesh.material.dispose(),s.mesh.geometry&&s.mesh.geometry!==Xe.particle&&s.mesh.geometry.dispose(),s.mesh=null)}zt.splice(0,i),console.log(`Performance: Removed ${i} excess particles`)}for(let i=zt.length-1;i>=0;i--){const r=zt[i];if(r.life-=n,r.life<=0)e.remove(r.mesh),r.mesh.material&&r.mesh.material.dispose(),r.mesh.geometry&&r.mesh.geometry!==Xe.particle&&r.mesh.geometry.dispose(),r.mesh=null,zt.splice(i,1);else{r.mesh.position.addScaledVector(r.velocity,n);const s=Math.max(0,r.life/r.initialLife);r.mesh.material.transparent&&(r.mesh.material.opacity=s*.9);const a=Math.max(.1,s*.8+.2);r.mesh.scale.set(a,a,a),r.velocity.y-=t*n,r.isFrog&&(r.mesh.rotation.z+=n*(Math.random()*2-1),r.mesh.position.y<.5&&r.velocity.y<0&&(r.velocity.y=Math.abs(r.velocity.y)*.6,r.velocity.x*=.9,r.velocity.z*=.9))}}}function Jv(n){n&&(zt.forEach(e=>n.remove(e.mesh)),zt=[])}function cd(n,e=0){const t=Math.floor($e/2);let i=0;const r=$e*$e;for(;i<r;){const s={x:Math.floor(n.rng.nextFloat()*$e)-t,y:0,z:Math.floor(n.rng.nextFloat()*$e)-t};if(Math.abs(s.x)<=e&&Math.abs(s.z)<=e){i++;continue}if(!Qv(n,s))return s;i++}return{x:0,y:0,z:0}}function Qv(n,e){var t,i,r,s,a,o,l;if((i=(t=n.player)==null?void 0:t.segments)!=null&&i.some(c=>c.x===e.x&&c.z===e.z)||(s=(r=n.food)==null?void 0:r.positions)!=null&&s.some(c=>c.x===e.x&&c.z===e.z))return!0;if((a=n.obstacles)!=null&&a.list){for(const c of n.obstacles.list)if((o=c.occupiedCells)!=null&&o.some(u=>u.x===e.x&&u.z===e.z))return!0}if((l=n.enemies)!=null&&l.list){for(const c of n.enemies.list)if(c.snake.some(u=>u.x===e.x&&u.z===e.z))return!0}return!1}function ex(n){const e=Math.floor(n.nextFloat()*100)+1;let t=0;for(const i of Object.keys(Us)){const r=Us[i]||0;if(t+=r,e<=t)return i}return"normal"}function tx(n,e,t=0){for(let i=0;i<e;i++)Ua(n,t)}function Ua(n,e=0){const t=cd(n,e),i=ex(n.rng),r={...t,type:i};if(i!=="normal"){const s=aa(n),a=.8+n.rng.nextFloat()*.4,o=(n.rng.nextFloat()*2-1)*Bt.DISTANCE_VARIATION;r.movement={directionX:s.x,directionZ:s.z,timer:0,moveInterval:Bt.MOVE_INTERVAL*a,maxDistance:Math.max(1,Bt.MAX_DISTANCE+o),originX:r.x,originZ:r.z,changeProbability:Bt.DIRECTION_CHANGE_PROBABILITY}}return n.food.positions.push(r),r}function aa(n){const e=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}];return e[n.rng.nextInt(e.length)]}function ud(n,e){var i,r;const t=n.food;if(!(t!=null&&t.positions))return null;for(let s=0;s<t.positions.length;s++){const a=t.positions[s];if(e.x===a.x&&e.z===a.z){const o=nx(a.type,((r=(i=n.player)==null?void 0:i.alphaMode)==null?void 0:r.active)||!1);return{index:s,type:a.type,scoreValue:1,grow:a.type!=="shrink",effects:o}}}return null}function nx(n,e){return n==="normal"?{alphaPoints:b0,speedBoostDuration:A0,alphaModeExtension:e?ku:0,addScoreMultiplier:e}:{alphaPoints:w0*(e?R0:1),speedBoostDuration:0,alphaModeExtension:0,addScoreMultiplier:!1}}function ix(n,e){for(const t of n.food.positions){if(t.type==="normal")continue;if(!t.movement){const u=aa(n);t.movement={directionX:u.x,directionZ:u.z,timer:0,moveInterval:Bt.MOVE_INTERVAL,maxDistance:Bt.MAX_DISTANCE,originX:t.x,originZ:t.z,changeProbability:Bt.DIRECTION_CHANGE_PROBABILITY}}if(t.movement.timer+=e,t.movement.timer<t.movement.moveInterval)continue;if(t.movement.timer=0,n.rng.nextFloat()<t.movement.changeProbability){const u=aa(n);t.movement.directionX=u.x,t.movement.directionZ=u.z}let i=t.x+t.movement.directionX,r=t.z+t.movement.directionZ;const s=t.movement.maxDistance,a=Math.abs(i-t.movement.originX),o=Math.abs(r-t.movement.originZ),l=$e/2,c=i>=l||i<-l||r>=l||r<-l;(a>s||o>s||c)&&(Math.abs(t.x-t.movement.originX)>Math.abs(t.z-t.movement.originZ)?(t.movement.directionX=Math.sign(t.movement.originX-t.x)||t.movement.directionX*-1,t.movement.directionZ=0):(t.movement.directionZ=Math.sign(t.movement.originZ-t.z)||t.movement.directionZ*-1,t.movement.directionX=0),i=t.x+t.movement.directionX,r=t.z+t.movement.directionZ),t.x=i,t.z=r}}function rx(n){const e=new Cn,t=de*.4,i=new Ar({color:14494720,roughness:.7,metalness:.1}),r=new Ve(Xe.cube,i);r.scale.set(t*1.8,t*1.8,t*1.8),r.position.set(0,t*.9,0),r.castShadow=!0,e.add(r);const s=new Ar({color:9109504,roughness:.8,metalness:.1}),a=new Ve(Xe.cube,s);a.scale.set(t*.6,t*.3,t*.6),a.position.set(0,t*1.9,0),a.castShadow=!0,e.add(a);const o=new Ar({color:6636321,roughness:.9,metalness:.1}),l=new Ve(Xe.cube,o);l.scale.set(t*.5,t,t*.5),l.position.set(0,t*2.4,0),l.castShadow=!0,e.add(l);const c=new Ar({color:2263842,roughness:.7,metalness:.1}),u=new Ve(Xe.cube,c);return u.scale.set(t,t*.4,t*.6),u.position.set(t*.8,t*2.4,0),u.rotation.z=Math.PI*.15,u.castShadow=!0,e.add(u),e.userData.rotationSpeed=Math.random()*.01+.005,e.userData.rotationDirection=Math.random()>.5?1:-1,e}function dd(n,e,t){const i=t.food[e];if(!i)return H.system.error(`Food material missing for type: ${e}`),null;const r=new Cn;if(r.position.set(n.x*de,0,n.z*de),r.userData.foodType=e,e==="normal"){const s=rx();r.add(s)}else{ox(r,i,e);let s=Math.random()*2-1,a=Math.random()*2-1;const o=Math.sqrt(s*s+a*a);o>0&&(s/=o,a/=o);{const l=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}],c=l[Math.floor(Math.random()*l.length)];s=c.x,a=c.z}r.userData.movementProperties={directionX:s,directionZ:a,hopFrequency:Bt.HOP_FREQUENCY+(Math.random()*2-1)*Bt.HOP_FREQUENCY_VARIATION,speed:Bt.BASE_SPEED+(Math.random()*2-1)*Bt.SPEED_VARIATION,originalGridPos:{...n},currentGridPos:{...n},timer:Math.random()*Math.PI*2,maxDistance:Bt.MAX_DISTANCE+(Math.random()*2-1)*Bt.DISTANCE_VARIATION,phaseOffset1:Math.random()*Math.PI*2,phaseOffset2:Math.random()*Math.PI*2,moveInterval:Bt.MOVE_INTERVAL*(.8+Math.random()*.4),targetPosition:null}}return r}function sx(n){var i;const{scene:e,food:t}=n;if(!(!e||!(t!=null&&t.meshes))){for(const r of t.meshes)r&&(r.isGroup?r.traverse(s=>{var a;s.isMesh&&(s.geometry&&s.geometry!==Xe.cube&&s.geometry!==Xe.particle&&s.geometry.dispose(),s.material&&!((a=s.userData)!=null&&a.useSharedMaterial)&&(Array.isArray(s.material)?s.material.forEach(o=>o.dispose()):s.material.dispose()))}):r.isMesh&&(r.geometry&&r.geometry!==Xe.cube&&r.geometry!==Xe.particle&&r.geometry.dispose(),r.material&&!((i=r.userData)!=null&&i.useSharedMaterial)&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())),e.remove(r));t.meshes=[]}}function la(n){const{scene:e,materials:t,food:i}=n;if(!e||!(t!=null&&t.food)||!(i!=null&&i.positions))return;(!i.meshes||i.meshes.length!==i.positions.length||i.meshes.some(s=>!s)||i.meshes.some((s,a)=>{var o,l;return((o=s==null?void 0:s.userData)==null?void 0:o.foodType)!==((l=i.positions[a])==null?void 0:l.type)}))&&(sx(n),i.positions.forEach(s=>{const a=dd(s,s.type,t);a&&(i.meshes.push(a),e.add(a))}));for(let s=0;s<i.positions.length;s++){const a=i.positions[s],o=i.meshes[s];o&&o.position.set(a.x*de,0,a.z*de)}}function ox(n,e,t){const i=de*.5,r=new Ve(Xe.cube,e);r.scale.set(i*2,i,i*2),r.position.set(0,i/2,0),r.castShadow=!0,n.add(r);const s=new Ve(Xe.cube,e);s.scale.set(i*1.6,i*.8,i),s.position.set(0,i/2,-i*1.5),s.castShadow=!0,n.add(s);const a=new Ar({color:0}),o=new Ve(Xe.cube,a);o.scale.set(i*.4,i*.4,i*.4),o.position.set(-i*.5,i,-i*1.8),o.castShadow=!0,n.add(o);const l=new Ve(Xe.cube,a);l.scale.set(i*.4,i*.4,i*.4),l.position.set(i*.5,i,-i*1.8),l.castShadow=!0,n.add(l);const c=new Ve(Xe.cube,e);c.scale.set(i*.6,i*.6,i*.8),c.position.set(-i,i*.3,-i),c.castShadow=!0,n.add(c);const u=new Ve(Xe.cube,e);u.scale.set(i*.6,i*.6,i*.8),u.position.set(i,i*.3,-i),u.castShadow=!0,n.add(u);const d=new Ve(Xe.cube,e);d.scale.set(i*.6,i*.6,i*.8),d.position.set(-i,i*.3,i),d.castShadow=!0,n.add(d);const f=new Ve(Xe.cube,e);f.scale.set(i*.6,i*.6,i*.8),f.position.set(i,i*.3,i),f.castShadow=!0,n.add(f),t==="ghost"&&n.traverse(m=>{m.isMesh&&m.material!==a&&(m.material=m.material.clone(),m.material.transparent=!0,m.material.opacity=.7)}),n.rotation.y=Math.random()*Math.PI*2}function ax(n){const e=ui("NUM_INITIAL_FOOD")||Ea;hd(n);for(let t=0;t<e;t++)Na(n)}function Na(n){const{scene:e,materials:t,food:i}=n;if(!e||!(t!=null&&t.food)||!i)return;const r=Pa(n,!0,!0,!0,!0);if(!r){H.system.error("Failed to find a position for new food!");return}const s=lx(),a=dd(r,s,t);a?(i.positions.push({...r,type:s}),i.meshes.push(a),e.add(a)):H.system.error(`Failed to create mesh for food type ${s}`)}function lx(){const n=Math.floor(Math.random()*100)+1;let e=0;for(const t of Xn){const i=Us[t.type]||0;if(e+=i,n<=e)return t.type}return H.warn("Food selection fallback - check that FOOD_SPAWN_RATIOS adds up to 100"),"normal"}function cx(n,e){var f,m,_;const{scene:t,food:i,materials:r,camera:s,playerSnake:a}=e;if(!t||!(i!=null&&i.positions)||!(i!=null&&i.meshes)||!s||!a)return null;uv()&&H.gameplay.debug("checkAndEatFood called with position:",n,"Alpha Mode:",(f=a.alphaMode)==null?void 0:f.active,"Food positions count:",i.positions.length);let o=-1,l=null;const c=n.x*de,u=n.z*de,d=ud({food:{positions:i.positions},player:{alphaMode:{active:((m=a.alphaMode)==null?void 0:m.active)||!1}}},{x:n.x,z:n.z});if(d)o=d.index,l=d.type;else for(let g=0;g<i.positions.length;g++){const p=i.meshes[g],h=i.positions[g];if(h.type==="normal")continue;const T=de*.8,E=p.position.x,b=p.position.z;if(Math.sqrt(Math.pow(c-E,2)+Math.pow(u-b,2))<T){o=g,l=h.type;break}}if(o!==-1){const g=i.meshes[o],p=Xn.find(h=>h.type===l);if(l==="normal"){if(e.stats.applesEaten++,rn("eatApple"),e.playerSnake){const h=e.clock.getElapsedTime();e.playerSnake.speedBoostUntil=h+d.effects.speedBoostDuration,ht("Speed Boost!",49151),ua(d.effects.alphaPoints,e),e.playerSnake.alphaMode&&e.playerSnake.alphaMode.active&&(e.playerSnake.alphaMode.endTime+=d.effects.alphaModeExtension,ht(`Alpha Mode +${d.effects.alphaModeExtension}s!`,16733986),d.effects.addScoreMultiplier&&ka(h,e),H.gameplay.info(`Alpha Mode extended by ${ku} seconds! New end time:`,e.playerSnake.alphaMode.endTime))}}else e.stats.frogsEaten++,rn("eatFrog"),ua(d.effects.alphaPoints,e),e.playerSnake.alphaMode.active&&ht(`+${d.effects.alphaPoints.toFixed(0)} ALPHA PTS!`,Li);return g&&(l==="normal"?Zv(t,s,g.position):jv(t,s,g.position,(p==null?void 0:p.colorHint.getHex())||9159498),g.isGroup?g.traverse(h=>{var T;h.isMesh&&(h.geometry&&h.geometry!==Xe.cube&&h.geometry!==Xe.particle&&h.geometry.dispose(),h.material&&!((T=h.userData)!=null&&T.useSharedMaterial)&&(Array.isArray(h.material)?h.material.forEach(E=>E.dispose()):h.material.dispose()))}):g.isMesh&&(g.geometry&&g.geometry!==Xe.cube&&g.geometry!==Xe.particle&&g.geometry.dispose(),g.material&&!((_=g.userData)!=null&&_.useSharedMaterial)&&(Array.isArray(g.material)?g.material.forEach(h=>h.dispose()):g.material.dispose())),t.remove(g),i.meshes[o]=null),p!=null&&p.effectText&&ht(p.effectText,p.colorHint.getHex()),i.meshes.splice(o,1),i.positions.splice(o,1),e.flags.useCoreSimulation||Na(e),{type:l,scoreValue:d.scoreValue,grow:d.grow}}return null}function hd(n){var i;const{scene:e,food:t}=n;if(!(!e||!t)){if(t.meshes&&t.meshes.length>0)for(const r of t.meshes)r&&(e.children.includes(r)&&e.remove(r),r.isGroup?r.traverse(s=>{var a;s.isMesh&&(s.geometry&&s.geometry!==Xe.cube&&s.geometry!==Xe.particle&&s.geometry.dispose(),s.material&&!((a=s.userData)!=null&&a.useSharedMaterial)&&(Array.isArray(s.material)?s.material.forEach(o=>o.dispose()):s.material.dispose()))}):r.isMesh&&(r.geometry&&r.geometry!==Xe.cube&&r.geometry!==Xe.particle&&r.geometry.dispose(),r.material&&!((i=r.userData)!=null&&i.useSharedMaterial)&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())));t.meshes?t.meshes.length=0:t.meshes=[],t.positions?t.positions.length=0:t.positions=[],H.system.info("Food system reset, all food items removed and resources disposed")}}function $c(n,e){const{food:t}=n;if(!(!t||!t.meshes)){for(const i of t.meshes)if(i.userData.foodType==="normal"){const r=i.children[0];if(r&&r.userData.rotationSpeed){r.rotation.y+=r.userData.rotationSpeed*r.userData.rotationDirection*e;const s=n.clock.getElapsedTime(),a=Math.sin(s*.8)*.05;r.position.y=de*.45+a}}else if(i.userData.foodType!=="normal"&&i.userData.movementProperties){if(n.flags.useCoreSimulation)continue;const r=i.userData.movementProperties;r.timer+=e,r.originalGridPos.x*de,r.originalGridPos.z*de;const s=i.position.x,a=i.position.z;{if(r.timer>=r.moveInterval){r.timer=0;const m=r.currentGridPos.x+r.directionX,_=r.currentGridPos.z+r.directionZ;if(Math.sqrt(Math.pow(m-r.originalGridPos.x,2)+Math.pow(_-r.originalGridPos.z,2))>r.maxDistance||Math.random()<Bt.DIRECTION_CHANGE_PROBABILITY){const p={x:r.originalGridPos.x-r.currentGridPos.x,z:r.originalGridPos.z-r.currentGridPos.z},h=Math.sqrt(p.x*p.x+p.z*p.z);h>0&&(p.x/=h,p.z/=h);const T=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}];let E=T[0],b=-1/0;for(const L of T){const w=L.x*p.x+L.z*p.z;w>b&&(b=w,E=L)}if(Math.random()<.5)r.directionX=E.x,r.directionZ=E.z;else{const L=T[Math.floor(Math.random()*T.length)];r.directionX=L.x,r.directionZ=L.z}}r.currentGridPos.x+=r.directionX,r.currentGridPos.z+=r.directionZ,r.targetPosition={x:r.currentGridPos.x*de,z:r.currentGridPos.z*de}}const c=Math.min(r.timer/r.moveInterval,1),u=c*c*(3-2*c);r.targetPosition&&(i.position.x=Pl.lerp(s,r.targetPosition.x,u*r.speed),i.position.z=Pl.lerp(a,r.targetPosition.z,u*r.speed));const f=Math.sin(u*Math.PI)*Bt.HOP_HEIGHT*de;i.position.y=f}const o=i.position.x-s,l=i.position.z-a;if(Math.abs(o)>.01||Math.abs(l)>.01){const c=Math.atan2(o,l)+Math.PI,u=10*e;let f=c-i.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;i.rotation.y+=f*u}}}}function ux(n,e){const{food:t}=e;if(!t||t.positions.length===0)return{index:-1,position:null};let i=-1,r=1/0;return t.positions.forEach((s,a)=>{const o=s.x-n.x,l=s.z-n.z,c=o*o+l*l;c<r&&(r=c,i=a)}),{index:i,position:i!==-1?t.positions[i]:null}}function Oa(n,e){const t=(n==null?void 0:n.list)||[];for(const i of t)if(i.occupiedCells){for(const r of i.occupiedCells)if(r.x===e.x&&r.z===e.z)return i.type}else if(i.x===e.x&&i.z===e.z)return i.type;return null}function dx(n,e){const t=(n==null?void 0:n.list)||[];for(const i of t)for(let r=0;r<i.snake.length;r++){const s=i.snake[r];if(s.x===e.x&&s.z===e.z)return{id:i.id,segmentIndex:r}}return null}function hx(n,e,t,i){var g,p,h,T,E,b,L,w;const r=(g=t.obstacle)==null?void 0:g.tree_trunk,s=(p=t.obstacle)==null?void 0:p.tree_leaves,a=(h=t.obstacle)==null?void 0:h.bush,o=(T=t.obstacle)==null?void 0:T.flower_bush,l=(E=t.obstacle)==null?void 0:E.pink_flower,c=(b=t.obstacle)==null?void 0:b.white_daisy,u=(L=t.obstacle)==null?void 0:L.white_tulip,d=(w=t.obstacle)==null?void 0:w.yellow_flower;if(!r||!s||!a||!o||!l||!c||!u||!d)return console.error("Obstacle materials missing!"),null;const f=new Cn;f.position.set(n.x*de,0,n.z*de);let m=[];const _=de/2;if(e==="tree"){const y=Math.floor(3+Math.random()*2),q=y*de;for(let W=0;W<y;W++){const te=new Ve(Xe.cube,r);te.scale.setScalar(de),te.position.y=W*de+_,te.castShadow=!0,te.receiveShadow=!0,f.add(te)}m.push({x:n.x,z:n.z});const M=(1.5+Math.random())*de,A=q,k=35+Math.random()*20;for(let W=0;W<k;W++){const te=new In(de*1.2,de*1.2),C=new Ve(te,s),B=Math.random()*Math.PI*2,V=Math.random()*M,Y=Math.random()*M*.8,X=(.8+Math.random()*.6)*de;C.scale.set(X,X,X),C.position.set(Math.cos(B)*V,A+Y+_,Math.sin(B)*V),C.rotation.x=Math.random()*Math.PI/4,C.rotation.y=Math.random()*Math.PI*2,C.rotation.z=Math.random()*Math.PI/4,C.castShadow=!0,C.receiveShadow=!1,f.add(C)}}else if(e==="bush"){m.push({x:n.x,z:n.z});const y=12+Math.floor(Math.random()*8);for(let q=0;q<y;q++){const M=new In(de*1.5,de*1.5),A=new Ve(M,o),k=Math.random()*Math.PI*2,W=Math.random()*1.5*de,te=Math.random()*.8*de,C=(.9+Math.random()*.6)*de;A.scale.set(C,C,C),A.position.set(Math.cos(k)*W,te+_,Math.sin(k)*W),A.rotation.x=Math.random()*Math.PI/6,A.rotation.y=Math.random()*Math.PI*2,A.rotation.z=Math.random()*Math.PI/6,A.castShadow=!0,A.receiveShadow=!0,f.add(A)}}else return null;return i.add(f),{meshGroup:f,cells:m}}function fx(n){const{scene:e,materials:t}=n;if(!e||!(t!=null&&t.obstacle))return;fd(n);const i=new Cn;e.add(i),n.obstacles={list:[],group:i};const r=ui("NUM_OBSTACLES")||Bu;console.log(`Creating ${r} initial obstacles...`);for(let s=0;s<r;s++){const a=Pa(n,!1,!0,!1,!1,z0);if(!a){console.warn("Could not find space for new obstacle!");continue}const o=Math.floor(Math.random()*bc.length),l=bc[o].type;mx(n,l,a)}for(let s=0;s<30;s++){const a={x:Math.floor((Math.random()-.5)*($e-4)),z:Math.floor((Math.random()-.5)*($e-4))};Math.abs(a.x)<3&&Math.abs(a.z)<3&&(a.x+=a.x>=0?3:-3,a.z+=a.z>=0?3:-3),px(n,a)}}function px(n,e){const{obstacles:t,materials:i}=n,r=new Cn;r.position.set(e.x*de,0,e.z*de);const s=["pink_flower","white_daisy","white_tulip","yellow_flower"],a=s[Math.floor(Math.random()*s.length)];let o;switch(a){case"pink_flower":o=i.obstacle.pink_flower;break;case"white_daisy":o=i.obstacle.white_daisy;break;case"white_tulip":o=i.obstacle.white_tulip;break;case"yellow_flower":o=i.obstacle.yellow_flower;break;default:o=i.obstacle.yellow_flower}const l=new In(de*.8,de*.8),c=new Ve(l,o),u=(.5+Math.random()*.3)*de;c.scale.set(u,u,u),c.position.y=de*.4,c.rotation.y=Math.random()*Math.PI*2,c.rotation.x=Math.PI/2+(Math.random()-.5)*.2,c.castShadow=!0,c.receiveShadow=!0,r.add(c),t.group.add(r)}function mx(n,e,t){const{materials:i,obstacles:r}=n;if(!(i!=null&&i.obstacle)||!(r!=null&&r.group))return;const s=hx(t,e,i,r.group);s&&s.meshGroup&&s.cells&&r.list.push({...t,type:e,mesh:s.meshGroup,occupiedCells:s.cells})}function gx(n,e){return Oa(e.obstacles,n)||!1}function fd(n){const{scene:e,obstacles:t}=n;if(t!=null&&t.group){for(;t.group.children.length>0;)t.group.remove(t.group.children[0]);e&&e.remove(t.group)}t&&(t.list=[],t.group=null),console.log("Obstacles reset.")}let kt={};function _x(n){const{enemies:e}=n;if(e){md(n),H.gameplay.info(`Creating ${jo} enemies...`);for(let t=0;t<jo;t++)pd(t,n)}}function pd(n,e){const{scene:t,materials:i,enemies:r,clock:s}=e;if(!t||!(i!=null&&i.enemy)||!r||!s)return;const a=Pa(e,!1,!0,!0,!0,ju);if(!a){H.gameplay.warn(`Could not find start position for enemy ${n}. Skipping.`);return}const o=Math.random()<.5?Math.random()<.5?1:-1:0,l=o===0?Math.random()<.5?1:-1:0,c={x:o,y:0,z:l};let u=[],d={...a};for(let _=0;_<Zu;_++)u.push({...d}),d.x-=c.x,d.z-=c.z;let f=[];u.forEach((_,g)=>{const h=li(_,g===0,i,!1,n);h&&(f.push(h),t.add(h))}),kt[n]=f;const m={id:n,snake:u,direction:{...c},nextDirection:{...c},targetFoodIndex:null,state:"seeking",lastMoveTime:s.getElapsedTime()+Math.random()*Ds,animationFrame:0,animationTimer:s.getElapsedTime(),speed:Ds};r.list.push(m),gd(m,e),H.gameplay.info(`Enemy ${n} initialized.`)}function md(n){const{scene:e,enemies:t}=n;if(e){Object.keys(kt).forEach(r=>{const s=kt[r];s&&Array.isArray(s)&&s.forEach(a=>{a&&(a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(o=>o.dispose()):a.material.dispose()),e.children.includes(a)&&e.remove(a))})});const i=[];e.children.forEach(r=>{r.name&&r.name.startsWith("enemySnake")&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose()),i.push(r))}),i.forEach(r=>e.remove(r))}t&&(t.list=[],t.respawnQueue=[]),kt={},H.gameplay.info("Enemies reset completely.")}function vx(n,e){const{scene:t,camera:i}=e,r=kt[n];!t||!i||!r||r.forEach((s,a)=>{a===0?ld(t,i,s.position.clone()):Js(t,i,s.position.clone(),Ta/r.length,Ys)})}function ca(n){const{scene:e,materials:t,enemies:i}=n;!e||!(t!=null&&t.enemy)||!(i!=null&&i.list)||(Object.keys(kt).forEach(r=>{const s=Number(r);i.list.find(a=>a.id===s)||(kt[s].forEach(a=>{a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(o=>o.dispose()):a.material.dispose()),e.remove(a)}),delete kt[s])}),i.list.forEach(r=>{const s=kt[r.id];if(!s||s.length!==r.snake.length){s&&s.forEach(o=>{o.geometry&&o.geometry.dispose(),o.material&&(Array.isArray(o.material)?o.material.forEach(l=>l.dispose()):o.material.dispose()),e.remove(o)});const a=[];r.snake.forEach((o,l)=>{const c=li(o,l===0,t,!1,r.id);c&&(a.push(c),e.add(c))}),kt[r.id]=a}else s.forEach((a,o)=>{const l=r.snake[o];!a||!l||a.position.set(l.x*de,de/2,l.z*de)})}))}function xx(n,e,t){const{enemies:i,clock:r}=t;!(i!=null&&i.list)||!r||i.list.forEach(s=>{s.animationTimer+=n,s.animationTimer>.25&&(s.animationFrame=(s.animationFrame+1)%2,s.animationTimer=0,gd(s,t)),Ex(s,t),e-s.lastMoveTime>=s.speed&&(Sx(s,t),s.lastMoveTime=e),Mx(s,e)})}function Mx(n,e){const t=kt[n.id];if(!t)return;const i=zr;if(!(t.length<i))for(let r=t.length-i;r<t.length;r++){const s=t[r];if(!s||!s.userData.isPulsing)continue;const a=1.5,o=.2,l=s.userData.pulseStartTime||0,c=e-l,u=.3+Math.sin(c*a)*o;s.material&&(s.material.emissiveIntensity=u)}}function Ex(n,e){const t=n.snake[0],i=n.direction;if(n.state==="seeking"){const{index:r,position:s}=ux(t,e);if(n.targetFoodIndex=r,s){const a=s.x-t.x,o=s.z-t.z;let l={x:0,y:0,z:0};if(Math.abs(a)>Math.abs(o))l.x=Math.sign(a);else if(Math.abs(o)>0)l.z=Math.sign(o);else{n.state="idle",n.nextDirection=i;return}let c=l,u={x:t.x+c.x,z:t.z+c.z};if(an(u,n,e)){const d=_s(l);let f=!1;for(const m of d)if(u={x:t.x+m.x,y:0,z:t.z+m.z},!an(u,n,e)){c=m,f=!0;break}if(!f)if(u={x:t.x+i.x,y:0,z:t.z+i.z},!an(u,n,e))c=i;else{const m={x:-i.x,y:0,z:-i.z};if(u={x:t.x+m.x,y:0,z:t.z+m.z},!an(u,n,e))c=m;else{const _=_s(i);for(const g of _)if(u={x:t.x+g.x,y:0,z:t.z+g.z},!an(u,n,e)){c=g;break}n.state="idle"}}}n.snake.length>1&&c.x===-i.x&&(c.z,-i.z),n.nextDirection=c}else n.state="idle",n.nextDirection=i}else if(n.state==="idle"){if(Math.random()<.15){const r=_s(i),s=Math.floor(Math.random()*r.length);let a=r[s],o={x:t.x+a.x,z:t.z+a.z};an(o,n,e)&&(a=r[(s+1)%r.length],o={x:t.x+a.x,y:0,z:t.z+a.z},an(o,n,e)&&(a=i,o={x:t.x+i.x,y:0,z:t.z+i.z},an(o,n,e)&&(a=i))),n.nextDirection=a}else{let r=i,s={x:t.x+i.x,z:t.z+i.z};if(an(s,n,e)){const a=_s(i);let o=!1;for(const l of a)if(s={x:t.x+l.x,y:0,z:t.z+l.z},!an(s,n,e)){r=l,o=!0;break}o||(r={x:-i.x,y:0,z:-i.z},s={x:t.x+r.x,y:0,z:t.z+r.z},an(s,n,e)&&(r=i))}n.nextDirection=r}Math.random()<.05&&(n.state="seeking")}}function an(n,e,t){const i=$e/2;if(n.x>=i||n.x<-i||n.z>=i||n.z<-i)return!0;for(let r=0;r<e.snake.length-1;r++)if(e.snake[r].x===n.x&&e.snake[r].z===n.z)return!0;if(gx(n,t))return!0;for(const r of t.enemies.list)if(r.id!==e.id&&r.snake.some(s=>s.x===n.x&&s.z===n.z))return!0;return!1}function _s(n){return n.x!==0?[{x:0,y:0,z:1*n.x},{x:0,y:0,z:-1*n.x}]:n.z!==0?[{x:-1*n.z,y:0,z:0},{x:1*n.z,y:0,z:0}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0}]}function Sx(n,e){var f;const{scene:t,materials:i,food:r,camera:s}=e;if(!t||!(i!=null&&i.enemy)||!r||!s)return;n.direction=n.nextDirection;const a=n.snake[0],o={x:a.x+n.direction.x,y:0,z:a.z+n.direction.z};if(an(o,n,e)){H.gameplay.warn(`Enemy ${n.id} attempted invalid move to`,o),n.state="idle";return}let l=!1,c=-1;for(let m=0;m<r.positions.length;m++)if(o.x===r.positions[m].x&&o.z===r.positions[m].z){l=!0,c=m;break}const u=kt[n.id];if(!u){H.gameplay.error(`Meshes not found for enemy ${n.id}`);return}let d=!1;if(l){d=!0;const m=r.meshes[c],_=(f=r.positions[c])==null?void 0:f.type;m&&(Js(t,s,m.position,void 0/2,43690),t.remove(m)),r.meshes.splice(c,1),r.positions.splice(c,1),Na(e),n.state="seeking",H.gameplay.info(`Enemy ${n.id} ate ${_}`)}if(n.snake.unshift(o),d){const m=li(o,!0,i,!1,n.id);m&&(t.add(m),u.unshift(m))}else{n.snake.pop();const m=u.pop();if(m)m.position.set(o.x*de,de/2,o.z*de),u.unshift(m);else{H.gameplay.error(`Enemy ${n.id} missing tail mesh!`);const _=li(o,!0,i,!1,n.id);_&&(t.add(_),u.unshift(_))}}yx(n,e)}function yx(n,e){const{materials:t}=e;if(!(t!=null&&t.enemy))return;const i=kt[n.id];i&&(i.forEach((r,s)=>{if(r)if(s===0)r.material=n.animationFrame===0?t.enemy.head1:t.enemy.head2;else{const a=zr;i.length>=a&&s>=i.length-a?(r.material=n.animationFrame===0?t.enemy.body1.clone():t.enemy.body2.clone(),r.material.color.setHex(P0),r.material.emissive.setHex(5099745),r.material.emissiveIntensity=.3,r.userData.pulseStartTime=Date.now()/1e3,r.userData.isPulsing=!0):r.material=n.animationFrame===0?t.enemy.body1:t.enemy.body2}}),H.gameplay.info(`Updated enemy ${n.id} materials. Tail segments colored: ${zr}`))}function Tx(n,e,t=!1){const{enemies:i}=e;if(!(i!=null&&i.list))return{collided:!1};const r=dx(i,n);if(r){const s=i.list.find(l=>l.id===r.id);if(!s)return{collided:!1};const a=r.segmentIndex;return{collided:!0,isTail:a>=s.snake.length-zr,isHead:a===0,enemyId:s.id,segmentIndex:a}}return{collided:!1}}function Ax(n,e){const{scene:t,enemies:i,clock:r}=e;if(!t||!(i!=null&&i.list)||!r)return!1;const s=i.list.findIndex(l=>l.id===n);if(s===-1)return!1;i.list[s];const a=kt[n];a&&a.forEach((l,c)=>{c===0?ld(t,e.camera,l.position.clone()):Js(t,e.camera,l.position.clone(),Ta/a.length,Ys),l.geometry&&l.geometry.dispose(),l.material&&(Array.isArray(l.material)?l.material.forEach(u=>u.dispose()):l.material.dispose()),t.remove(l)}),i.list.splice(s,1),delete kt[n];const o=r.getElapsedTime()+Jo;return i.respawnQueue||(i.respawnQueue=[]),i.respawnQueue.push({id:n,respawnTime:o}),H.gameplay.info(`Enemy ${n} killed. Scheduled to respawn in ${Jo} seconds.`),!0}function bx(n){if(n.flags.useCoreSimulation)return;const{enemies:e,clock:t}=n;if(!(e!=null&&e.respawnQueue)||!t)return;const i=t.getElapsedTime(),r=[];for(const s of e.respawnQueue)i>=s.respawnTime?(pd(s.id,n),H.gameplay.info(`Enemy ${s.id} respawned.`)):r.push(s);e.respawnQueue=r}function gd(n,e){const{materials:t}=e,i=kt[n.id];!i||!(t!=null&&t.enemy)||i.forEach((r,s)=>{r&&(s===0?r.material=n.animationFrame===0?t.enemy.head1:t.enemy.head2:r.material=n.animationFrame===0?t.enemy.body1:t.enemy.body2)})}const Bs=1;var et=(n=>(n.PlayerMoved="PLAYER_MOVED",n.PlayerDead="PLAYER_DEAD",n.FoodEaten="FOOD_EATEN",n.FoodSpawned="FOOD_SPAWNED",n.EnemyMoved="ENEMY_MOVED",n.EnemyKilled="ENEMY_KILLED",n.EnemyRespawned="ENEMY_RESPAWNED",n.PowerupApplied="POWERUP_APPLIED",n.AlphaModeActivated="ALPHA_MODE_ACTIVATED",n.AlphaModeEnded="ALPHA_MODE_ENDED",n.AlphaPointsChanged="ALPHA_POINTS_CHANGED",n.ScorePopup="SCORE_POPUP",n.ScoreChanged="SCORE_CHANGED",n.Debug="DEBUG",n))(et||{});function _d(n,e=0){const t=n.player,i=t.segments[0],r={x:i.x+t.direction.x,y:0,z:i.z+t.direction.z},s=$e/2;if(r.x>=s||r.x<-s||r.z>=s||r.z<-s)return{newHead:r,collisionReason:"WALL"};if(!t.ghostModeActive)for(let a=0;a<t.segments.length-1;a++){const o=t.segments[a];if(wx(r,o,e))return{newHead:r,collisionReason:"SELF"}}if(!t.ghostModeActive){const a=Oa(n.obstacles,r);if(a)return{newHead:r,collisionReason:"OBSTACLE",obstacleType:a}}return{newHead:r,collisionReason:null,obstacleType:null}}function wx(n,e,t=0){return t>0?Math.abs(n.x-e.x)<1-t&&Math.abs(n.z-e.z)<1-t:n.x===e.x&&n.z===e.z}function Rx(n,e){n.flags.gameOver||(vd(n.player),e.turn==="left"?Kc(n,Lx):e.turn==="right"&&Kc(n,Px))}function Cx(n,e){var c;const t=[],i=n.player;i.moveTimer+=e;let r=1;i.speedBoostUntil&&n.time<i.speedBoostUntil&&(r*=zu),(c=i.alphaMode)!=null&&c.active&&(r*=$u);const s=i.speed/r;if(i.moveTimer<s)return{events:t};if(i.moveTimer=0,vd(i),i.turnQueue.queue.length>0){const u=i.turnQueue.queue.shift();u?i.direction={...u}:i.direction={...i.nextDirection}}else i.direction={...i.nextDirection};if(!i.segments[0])return t.push({type:et.Debug,payload:{message:"NO_HEAD"}}),{events:t};const{newHead:o,collisionReason:l}=_d(n);return l==="WALL"?(t.push({type:et.PlayerDead,payload:{reason:"WALL_COLLISION"}}),{events:t}):l==="SELF"?(t.push({type:et.PlayerDead,payload:{reason:"SELF_COLLISION"}}),{events:t}):l==="OBSTACLE"?(t.push({type:et.PlayerDead,payload:{reason:"OBSTACLE_COLLISION"}}),{events:t}):(i.segments.unshift(o),i.turnQueue.lastDirection={...i.direction},i.segments.pop(),t.push({type:et.PlayerMoved}),{events:t})}function vd(n){n.turnQueue||(n.turnQueue={queue:[],lastDirection:{...n.direction}})}function Kc(n,e){const t=n.player,i=t.turnQueue.queue.length>0?t.turnQueue.queue[t.turnQueue.queue.length-1]:t.turnQueue.lastDirection,r=e(i);r.x===-i.x&&r.z===-i.z||(t.turnQueue.queue.push({...r}),t.nextDirection=r)}function Lx(n){return{x:n.z,y:0,z:-n.x}}function Px(n){return{x:-n.z,y:0,z:n.x}}let Ze=[];function Ix(n){const{playerSnake:e,clock:t}=n;if(!e)return;e.segments=[],e.direction={x:1,z:0},e.lastDirection={x:1,z:0},e.pendingTurns=[],e.speed=ui("BASE_SNAKE_SPEED")||En,e.moveTimer=0,e.animationFrame=0,e.animationTimer=0,e.ghostModeActive=!1,e.activePowerUps=[],e.enlargedHeadUntil=0,e.speedBoostUntil=0,e.immediateDirectionChange=!1,e.lastTextureUpdateFrame=0;const i=t.getElapsedTime();e.alphaMode={active:!1,progress:0,startTime:0,endTime:0,lastScoreThreshold:0,alphaPoints:0,lastDecayTime:i,scoreMultiplier:1,scoreMultiplierStack:[],consecutiveActivations:0,cooldownActive:!1,cooldownEndTime:0};for(let r=0;r<Sa;r++)e.segments.push({x:-r,y:0,z:0});xd(n),H.gameplay.info("Player snake initialized."),Qs(n)}function xd(n){const{scene:e,materials:t,playerSnake:i}=n;!e||!(t!=null&&t.snake)||!(i!=null&&i.segments)||(Fa(n),i.segments.forEach((r,s)=>{const o=li(r,s===0,t,!0);o&&(Ze.push(o),e.add(o))}),Yn(n))}function Fa(n){const{scene:e}=n;e&&Ze.forEach(t=>{var i;e.remove(t),t.geometry&&!((i=t.userData)!=null&&i.sharedGeometry)&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):t.material.dispose())}),Ze=[]}function Dx(n){Fa(n),Ix(n),sd(0,n),H.gameplay.info("Player reset complete.")}function Ux(n,e,t){const{playerSnake:i,score:r,flags:s}=t;s.gameOver||!i||(s.useCoreSimulation||(i.alphaMode.active||wd(e,t),Qs(t),Ha(r.current,t),za(r.current,e,t),Ba(e,t),i.alphaMode.active?Td(e,t):i.alphaMode.cooldownActive&&ad(i.alphaMode.cooldownEndTime),Ed(e,t)),i.enlargedHeadUntil>0&&e>i.enlargedHeadUntil&&(i.enlargedHeadUntil=0,Ze.length>0&&Ze[0]&&Ze[0].scale.set(1,1,1)),i.animationTimer+=n,i.animationTimer>=.25&&(i.animationTimer=0,i.animationFrame=i.animationFrame===0?1:0,Yn(t)))}function Nx(n){const{playerSnake:e,scene:t,materials:i}=n;if(!(!(e!=null&&e.segments)||!t||!(i!=null&&i.snake))){if(Ze.length!==e.segments.length){Fa(n),xd(n);return}for(let r=0;r<e.segments.length;r++){const s=e.segments[r],a=Ze[r];a&&a.position.set(s.x*de,de/2,s.z*de)}Yn(n)}}function Zc(n){const{playerSnake:e,flags:t}=n;if(t.gameOver)return;const i=e.lastDirection.x,r=e.lastDirection.z,s={x:r,y:0,z:-i};let a;if(e.pendingTurns.length>0?a=e.pendingTurns[e.pendingTurns.length-1]:a={x:i,z:r},(s.x!==-a.x||s.z!==-a.z)&&(e.pendingTurns.push({...s}),e.pendingTurns.length===1&&(e.nextDirection=s),e.immediateDirectionChange=!0,e.pendingTurns.length>1)){const o=Ga(n);e.moveTimer<o*.8&&(e.moveTimer=o*.8)}}function jc(n){const{playerSnake:e,flags:t}=n;if(t.gameOver)return;const i=e.lastDirection.x,r=e.lastDirection.z,s={x:-r,y:0,z:i};let a;if(e.pendingTurns.length>0?a=e.pendingTurns[e.pendingTurns.length-1]:a={x:i,z:r},(s.x!==-a.x||s.z!==-a.z)&&(e.pendingTurns.push({...s}),e.pendingTurns.length===1&&(e.nextDirection=s),e.immediateDirectionChange=!0,e.pendingTurns.length>1)){const o=Ga(n);e.moveTimer<o*.8&&(e.moveTimer=o*.8)}}function Ox(n,e,t){var c,u;const{playerSnake:i,score:r,flags:s,scene:a,materials:o}=t;if(s.gameOver||!i)return;i.alphaMode.active||wd(e,t),Qs(t),Ha(r.current,t),za(r.current,e,t),Ba(e,t),i.alphaMode.active?Td(e,t):i.alphaMode.cooldownActive&&ad(i.alphaMode.cooldownEndTime),Ed(e,t),i.enlargedHeadUntil>0&&e>i.enlargedHeadUntil&&(i.enlargedHeadUntil=0,Ze.length>0&&Ze[0]&&Ze[0].scale.set(1,1,1)),i.animationTimer+=n,i.animationTimer>=.25&&(i.animationTimer=0,i.animationFrame=i.animationFrame===0?1:0,Yn(t)),i.moveTimer+=n;const l=Ga(t);if(i.immediateDirectionChange&&(i.direction=i.nextDirection,i.immediateDirectionChange=!1),i.moveTimer>=l){if(i.moveTimer=0,i.pendingTurns.length>0?(i.direction={...i.pendingTurns[0]},i.pendingTurns.shift(),i.pendingTurns.length>0&&(i.nextDirection={...i.pendingTurns[0]})):i.direction={...i.nextDirection},i.lastDirection={...i.direction},i.direction.x===0&&i.direction.z===0){H.gameplay.warn("Player direction became zero. Reverting to previous.");return}if(!i.segments||i.segments.length===0){H.gameplay.error("No player snake segments found!");return}if(!i.segments[0]){H.gameplay.error("Player head segment is undefined!");return}const{newHead:f,collisionReason:m,obstacleType:_}=_d({player:i,obstacles:t.obstacles},void 0);if(m==="WALL"){H.gameplay.info("Collision: Wall"),Ts(t,"WALL_COLLISION");return}if(m==="SELF"){H.gameplay.info("Collision: Self"),Ts(t,"SELF_COLLISION");return}if(m==="OBSTACLE"){H.gameplay.info("Collision: Obstacle type:",_);let T="OBSTACLE_COLLISION";_==="tree"?T="TREE_COLLISION":_==="bush"&&(T="BUSH_COLLISION"),Ts(t,T);return}const g=Tx(f,t,!0);if(g.collided&&!Wx(g,t))return;const p=cx(f,t);let h=!1;if(p){H.gameplay.info("Food eaten in playerSnake.js:",p.type,"Alpha Mode active:",(c=i.alphaMode)==null?void 0:c.active);let T=1;i.alphaMode&&i.alphaMode.active&&(T=i.alphaMode.scoreMultiplier,H.gameplay.info(`Applying Alpha Mode score multiplier: x${T}`));const E=p.scoreValue,b=Math.round(E*T);t.score.current+=b,T>1&&ht(`+${b} pts!`,16766720),Zs(t.score.current);const L=Xn.find(w=>w.type===p.type);L&&kx(L.type,t),h=p.grow!==!1}if(i.segments.unshift(f),h){const T=li(f,!0,o,!0);T&&(a.add(T),Ze.unshift(T))}else{i.segments.pop();const T=Ze.pop();if(T)T.position.set(f.x*de,de/2,f.z*de),Ze.unshift(T);else{H.gameplay.error("Tail mesh missing during move!");const E=li(f,!0,o,!0);E&&(a.add(E),Ze.unshift(E))}}Sd(t),i.lastDirection={...i.direction},Pv(((u=i.alphaMode)==null?void 0:u.active)||!1)}}function Fx(n,e){const{playerSnake:t,clock:i}=n;if(!(!t||!i)){if(t.enlargedHeadUntil=e+Tc,Ze.length>0&&Ze[0]){const r=U0;Ze[0].scale.set(r,r,r)}H.gameplay.info(`Player head enlarged for ${Tc} seconds`)}}function Jc(n,e){const{playerSnake:t,clock:i}=e,r=i.getElapsedTime();if(Ax(n,e)){let s=1;t.alphaMode&&t.alphaMode.active&&(s=t.alphaMode.scoreMultiplier,ka(r,e),H.gameplay.info(`Applied Alpha Mode score multiplier: x${s} and added new multiplier`));const o=Math.round(I0*s);if(e.score.current+=o,e.enemies.kills+=1,e.stats.snakesEaten+=1,s>1&&ht(`+${o} pts!`,16766720),rn("eatSnake"),Zs(e.score.current),js(e.enemies.kills),ht(Xv(),Ys),Md(e),Fx(e,r),Bx(e,D0),t.alphaMode.active){const l=C0;t.alphaMode.endTime+=l,ht(`+${l}s ALPHA TIME`,Li),H.gameplay.info(`Alpha mode extended by ${l} seconds! New end time:`,t.alphaMode.endTime)}return!0}return!1}function Bx(n,e){const{playerSnake:t,scene:i,materials:r}=n;if(!t||!i||!r)return;const s=t.segments[t.segments.length-1];if(s){for(let a=0;a<e;a++){const o={...s};t.segments.push(o);const l=li(o,!1,r,!0);l&&(i.add(l),Ze.push(l))}Sd(n)}}function zx(n){var m;const{camera:e,playerSnake:t,scene:i}=n,r=(m=n.lights)==null?void 0:m.directionalLight;if(!e||!t||t.segments.length===0||Ze.length===0||!r)return;const a=Ze[0].position,o=Math.max(2,Yo*.2),l=new D(t.direction.x,0,t.direction.z).normalize(),c=a.clone().addScaledVector(l,o);r.target&&r.target.position.lerp(a,S0*1.5);const u=l.clone().multiplyScalar(-1),d=a.clone().addScaledVector(u,Yo);d.y=Fu,e.position.lerp(d,y0);const f=e.clone();f.lookAt(c),e.quaternion.slerp(f.quaternion,T0)}function kx(n,e){var a;const{playerSnake:t,clock:i}=e;if(!t||!i)return;t.activePowerUps||(t.activePowerUps=[]);const r=(a=e.flags)!=null&&a.useCoreSimulation?e.simulation.time:i.getElapsedTime(),s=Xn.find(o=>o.type===n);if(!s){H.gameplay.error(`Unknown power-up type: ${n}`);return}switch(H.gameplay.info(`Applying power-up: ${s.description}`),n!=="normal"&&Md(e),n){case"speed":t.speed=En/Hu,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),ii(e);break;case"ghost":t.ghostModeActive=!0,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),Yn(e),ii(e);break;case"score_x2":t.scoreMultiplier=Vu,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),ii(e);break;case"shrink":const o=t.segments.length,l=Math.min(Gu,o-Sa);if(l>0){t.segments.splice(t.segments.length-l,l);for(let c=0;c<l;c++){const u=Ze.pop();u&&e.scene&&e.scene.remove(u)}ii(e,`Shrunk by ${l} segments!`)}break}}function Md(n){const{camera:e,cameraEffects:t,clock:i}=n;!e||!i||!t||!t.shake||(t.shake.originalPosition.copy(e.position),t.shake.active=!0,t.shake.startTime=i.getElapsedTime(),t.shake.duration=H0,t.shake.intensity=G0)}function Ed(n,e){const{playerSnake:t}=e;if(!(t!=null&&t.activePowerUps))return;let i=!1,r=t.activePowerUps.length;for(;r--;){const s=t.activePowerUps[r];if(n>=s.endTime){switch(H.gameplay.info(`Power-up expired: ${s.type}`),s.type){case"speed":t.speed=En,ht("Speed boost ended");break;case"ghost":t.ghostModeActive=!1,Yn(e),ht("Ghost mode ended");break;case"score_x2":t.scoreMultiplier=1,ht("Score multiplier ended");break}t.activePowerUps.splice(r,1),i=!0}}ii(e)}function ii(n,e=""){const{playerSnake:t,clock:i}=n;if(!(t!=null&&t.activePowerUps)||!i)return;const r=i.getElapsedTime();if(e){Ur(e);return}if(t.activePowerUps.length>0){const s=t.activePowerUps.map(a=>{const l=Math.max(0,a.endTime-r).toFixed(1),c=Xn.find(d=>d.type===a.type);return`${c?c.description:a.type}: ${l}s`});Ur(s.join(" | "))}else Ur("")}function Hx(n){const{playerSnake:e,clock:t}=n;if(!(e!=null&&e.activePowerUps)||!t)return;const i=t.getElapsedTime();let r=!1;for(let s=e.activePowerUps.length-1;s>=0;s--){const a=e.activePowerUps[s];if(i>=a.endTime){switch(H.gameplay.info(`Power-up expired: ${a.type}`),a.type){case"speed":e.speed=En,ht("Speed boost ended");break;case"ghost":e.ghostModeActive=!1,Yn(n),ht("Ghost mode ended");break;case"score_x2":e.scoreMultiplier=1,ht("Score multiplier ended");break}e.activePowerUps.splice(s,1),r=!0}}ii(n)}function Yn(n,e=!1){const{playerSnake:t,materials:i}=n;if(!(i!=null&&i.snake)||Ze.length===0||!e&&t.lastTextureUpdateFrame===t.animationFrame)return;t.lastTextureUpdateFrame=t.animationFrame;let r,s;t.alphaMode.active?(r=t.animationFrame===0?i.snake.head1.clone():i.snake.head2.clone(),s=t.animationFrame===0?i.snake.body1.clone():i.snake.body2.clone(),r.color.setHex(Li),s.color.setHex(Li)):t.ghostModeActive?(r=t.animationFrame===0?i.snake.head1.clone():i.snake.head2.clone(),s=t.animationFrame===0?i.snake.body1.clone():i.snake.body2.clone(),r.transparent=!0,r.opacity=.6,s.transparent=!0,s.opacity=.6):(r=t.animationFrame===0?i.snake.head1:i.snake.head2,s=t.animationFrame===0?i.snake.body1:i.snake.body2),Ze.forEach((a,o)=>{a&&(o===0?a.material=r:a.material=s)})}function Sd(n){const{playerSnake:e,materials:t}=n;if(Ze.length===0||!(t!=null&&t.snake))return;let i,r;e.alphaMode.active?(i=e.animationFrame===0?t.snake.head1.clone():t.snake.head2.clone(),r=e.animationFrame===0?t.snake.body1.clone():t.snake.body2.clone(),i.color.setHex(Li),r.color.setHex(Li)):e.ghostModeActive?(i=e.animationFrame===0?t.snake.head1.clone():t.snake.head2.clone(),r=e.animationFrame===0?t.snake.body1.clone():t.snake.body2.clone(),i.transparent=!0,i.opacity=.6,r.transparent=!0,r.opacity=.6):(i=e.animationFrame===0?t.snake.head1:t.snake.head2,r=e.animationFrame===0?t.snake.body1:t.snake.body2),Ze[0].material=i,Ze.length>1&&Ze[1]&&(Ze[1].material=r)}function Gx(n){const{playerSnake:e}=n;e.alphaMode.cooldownActive=!1,e.alphaMode.consecutiveActivations=0;const t=n.score.current,r=Math.floor(t/ya)-1;e.alphaMode.lastScoreThreshold=r,H.gameplay.info("Alpha Mode cooldown reset. lastScoreThreshold set to:",r)}function ua(n,e){const{playerSnake:t}=e;t.alphaMode.active||(t.alphaMode.alphaPoints+=n,Qs(e))}function Ba(n,e){const{playerSnake:t}=e;if(t.alphaMode.active)return!1;const i=ui("ALPHA_POINTS_THRESHOLD")||Xs;return t.alphaMode.alphaPoints>=i?(H.gameplay.info(`Alpha Mode triggered by points (${t.alphaMode.alphaPoints}/${i})`),t.alphaMode.alphaPoints=0,yd(n,e),!0):!1}function za(n,e,t){const{playerSnake:i}=t,s=Math.floor(n/ya);H.gameplay.debug(`Alpha Mode Check - Current Threshold: ${s}, Last Threshold: ${i.alphaMode.lastScoreThreshold}`),H.gameplay.debug(`Alpha Mode Active: ${i.alphaMode.active}, Cooldown Active: ${i.alphaMode.cooldownActive}`),s>i.alphaMode.lastScoreThreshold&&!i.alphaMode.active?(i.alphaMode.lastScoreThreshold=s,yd(e,t),H.gameplay.info("Alpha Mode activated via score threshold! Threshold:",s)):(s<=i.alphaMode.lastScoreThreshold&&H.gameplay.debug("Alpha Mode not activated: Current threshold not greater than last threshold"),i.alphaMode.active&&H.gameplay.debug("Alpha Mode not activated: Alpha Mode is already active"))}function yd(n,e){const{playerSnake:t}=e,i=ui("ALPHA_MODE_DURATION")||qs;t.alphaMode.active=!0,t.alphaMode.progress=1,t.alphaMode.startTime=n,t.alphaMode.endTime=n+i,t.alphaMode.scoreMultiplier=Ws,ka(n,e),t.alphaMode.consecutiveActivations++,od(),(void 0)(),oa(1,i,t.alphaMode.scoreMultiplier),H.gameplay.info(`Alpha Mode activated for ${i} seconds, multiplier: ${t.alphaMode.scoreMultiplier}`)}function Td(n,e){const{playerSnake:t}=e;if(!t.alphaMode.active)return;if(n>=t.alphaMode.endTime){t.alphaMode.active=!1,t.speed=En,t.alphaMode.scoreMultiplier=1,t.alphaMode.scoreMultiplierStack=[],oa(0,0),ht("Alpha Mode ended"),Yn(e);const a=e.score.current;Ha(a,e),H.gameplay.info("Alpha Mode deactivated");return}const i=t.alphaMode.endTime-n,s=i/qs;Ad(n,t),oa(s,i,t.alphaMode.scoreMultiplier)}function Ad(n,e){if(e.alphaMode.scoreMultiplierStack=e.alphaMode.scoreMultiplierStack.filter(t=>t.endTime>n),e.alphaMode.scoreMultiplierStack.length>0){let t=1;e.alphaMode.scoreMultiplierStack.forEach(i=>{t*=i.value}),t=Math.min(t,Xu),e.alphaMode.scoreMultiplier=t}else e.alphaMode.scoreMultiplier=1}function ka(n,e){const{playerSnake:t}=e;if(!t.alphaMode.active)return;const i={value:Ws,endTime:n+Wu};t.alphaMode.scoreMultiplierStack.push(i),Ad(n,t),ht(`Score x${t.alphaMode.scoreMultiplier.toFixed(1)}!`),H.gameplay.info(`Added score multiplier. Current total: x${t.alphaMode.scoreMultiplier}`)}let Fo=0;function Vx(){const n=Et.ALPHA_MODE.ALPHA_KILL_MESSAGES;if(!n||n.length===0)return Et.ALPHA_MODE.KILL_MESSAGE;const e=n[Fo];return Fo=(Fo+1)%n.length,e}function Wx(n,e,t){const{playerSnake:i}=e;return i.alphaMode.active?(console.log("Alpha Mode active - killing enemy snake regardless of collision point"),Jc(n.enemyId,e),rn("alphaKillExplode1"),td(),ht(Vx(),Li),!0):n.isTail?(console.log("Hit enemy tail - killing enemy snake"),Jc(n.enemyId,e),ua(qu,e),!0):i.ghostModeActive?(console.log("Ghost Mode active - passing through enemy"),!0):(console.log("Hit enemy body/head without Alpha Mode or Ghost Mode - player dies"),Ts(e,"ENEMY_COLLISION"),!1)}function Ts(n,e){const{scene:t,playerSnake:i,camera:r}=n;!t||!i||!r||(bd(n),Id(n,e))}function bd(n){const{scene:e,playerSnake:t,camera:i}=n;!e||!t||!i||(rn("playerDeath"),Ze.length>0&&Js(e,i,Ze[0].position,k0,16729156))}function Ha(n,e){const{playerSnake:t}=e,i=ya;if(t.alphaMode.active)return;(typeof t.alphaMode.lastScoreThreshold!="number"||isNaN(t.alphaMode.lastScoreThreshold))&&(H.gameplay.info("Fixing invalid lastScoreThreshold value:",t.alphaMode.lastScoreThreshold),t.alphaMode.lastScoreThreshold=Math.max(0,Math.floor(n/i)-1));const r=(t.alphaMode.lastScoreThreshold+1)*i,s=n-t.alphaMode.lastScoreThreshold*i,a=i;let o=0;if(o=Math.min(100,Math.floor(s/a*100)),t.alphaMode.scoreProgress=o,H.gameplay.info(`Alpha Mode Progress: ${o}% (Score: ${n}, Next Threshold: ${r})`),o>=100&&!t.alphaMode.cooldownActive){H.gameplay.info("Alpha Mode at 100% - Checking activation state:",{lastScoreThreshold:t.alphaMode.lastScoreThreshold,currentThreshold:Math.floor(n/i),cooldownActive:t.alphaMode.cooldownActive});const l=e.clock.getElapsedTime();za(n,l,e)}}function Qs(n){const{playerSnake:e}=n;if(e.alphaMode.active)return;const t=e.alphaMode.alphaPoints,i=Xs,r=Math.min(100,Math.floor(t/i*100));if((!e.alphaMode.lastDisplayedPercentage||e.alphaMode.lastDisplayedPercentage!==r||n.frameCount%10===0)&&(qv(r,t,i),e.alphaMode.lastDisplayedPercentage=r),r>=100&&!e.alphaMode.cooldownActive){const s=n.clock.getElapsedTime();Ba(s,n)}}function wd(n,e){const{playerSnake:t}=e;if(e.frameCount%5!==0)return;if(!t.alphaMode.lastDecayTime||t.alphaMode.lastDecayTime===0||isNaN(t.alphaMode.lastDecayTime)){t.alphaMode.lastDecayTime=n;return}const i=n-t.alphaMode.lastDecayTime;if(i>0&&i<1&&t.alphaMode.alphaPoints>0){const s=Yu*i;t.alphaMode.alphaPoints-=s,t.alphaMode.alphaPoints=Math.max(0,t.alphaMode.alphaPoints)}t.alphaMode.lastDecayTime=n}function Ga(n){const{playerSnake:e}=n;let t=e.speed,i=1;return e.speedBoostUntil>0&&(i*=zu),e.alphaMode.active&&(i*=$u),t/=i,t}function Xx(n,e){const t=s=>{if(n.flags.gameOver){s.key.toLowerCase()==="r"&&Dd();return}switch(["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"].includes(s.key.toLowerCase())&&s.preventDefault(),s.key.toLowerCase()){case"arrowleft":case"a":n.flags.useCoreSimulation?n.inputQueue.push({playerId:"local",tick:n.core.tick+1,turn:"left"}):(Zc(n),n.playerSnake.immediateDirectionChange=!0);break;case"arrowright":case"d":n.flags.useCoreSimulation?n.inputQueue.push({playerId:"local",tick:n.core.tick+1,turn:"right"}):(jc(n),n.playerSnake.immediateDirectionChange=!0);break;case"p":console.log("Debug Game State:",n);break}},i=s=>{n.flags.gameOver||(s.preventDefault(),n.flags.useCoreSimulation?n.inputQueue.push({playerId:"local",tick:n.core.tick+1,turn:"left"}):(Zc(n),n.playerSnake.immediateDirectionChange=!0))},r=s=>{n.flags.gameOver||(s.preventDefault(),n.flags.useCoreSimulation?n.inputQueue.push({playerId:"local",tick:n.core.tick+1,turn:"right"}):(jc(n),n.playerSnake.immediateDirectionChange=!0))};return window.addEventListener("keydown",t),e.leftButton&&e.leftButton.addEventListener("touchstart",i,{passive:!1}),e.rightButton&&e.rightButton.addEventListener("touchstart",r,{passive:!1}),()=>{console.log("Removing input listeners"),window.removeEventListener("keydown",t),e.leftButton&&e.leftButton.removeEventListener("touchstart",i),e.rightButton&&e.rightButton.removeEventListener("touchstart",r)}}var Nr=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===u?"block":"none";n=u}var r=(performance||Date).now(),s=r,a=0,o=t(new Nr.Panel("FPS","#0ff","#002")),l=t(new Nr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Nr.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(o.update(a*1e3/(u-s),100),s=u,a=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};Nr.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,u=2*a,d=3*a,f=15*a,m=74*a,_=30*a,g=document.createElement("canvas");g.width=o,g.height=l,g.style.cssText="width:80px;height:48px";var p=g.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,o,l),p.fillStyle=e,p.fillText(n,c,u),p.fillRect(d,f,m,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(d,f,m,_),{dom:g,update:function(h,T){i=Math.min(i,h),r=Math.max(r,h),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,o,f),p.fillStyle=e,p.fillText(s(h)+" "+n+" ("+s(i)+"-"+s(r)+")",c,u),p.drawImage(g,d+a,f,m-a,_,d,f,m-a,_),p.fillRect(d+m-a,f,a,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(d+m-a,f,a,s((1-h/T)*_))}}};function qx(){H.system.info("Initializing game mode system...");const n=I.gameMode;H.system.info(`Current game mode: ${n}`);const e=document.getElementById("normalModeBtn"),t=document.getElementById("casualModeBtn"),i=document.getElementById("normalModeBtnSettings"),r=document.getElementById("casualModeBtnSettings");e&&t&&(yn(e,t,n),e.addEventListener("click",()=>{vs(ct.NORMAL),yn(e,t,ct.NORMAL),i&&r&&yn(i,r,ct.NORMAL)}),t.addEventListener("click",()=>{vs(ct.CASUAL),yn(e,t,ct.CASUAL),i&&r&&yn(i,r,ct.CASUAL)})),i&&r&&(yn(i,r,n),i.addEventListener("click",()=>{vs(ct.NORMAL),yn(i,r,ct.NORMAL),e&&t&&yn(e,t,ct.NORMAL)}),r.addEventListener("click",()=>{vs(ct.CASUAL),yn(i,r,ct.CASUAL),e&&t&&yn(e,t,ct.CASUAL)}));const s=Aa();H.system.info("Current mode settings:",s)}function yn(n,e,t){t===ct.CASUAL?(n.classList.remove("active"),e.classList.add("active")):(n.classList.add("active"),e.classList.remove("active"))}function vs(n){if(n===ct.NORMAL||n===ct.CASUAL){H.system.info(`Setting game mode to: ${n}`),q0(n);const e=Aa();H.system.info(`Game mode set to ${n}. Settings:`,e)}else H.system.warn(`Invalid game mode: ${n}`)}function Yx(n){let e=n>>>0;const t=()=>{e+=1831565813;let r=Math.imul(e^e>>>15,1|e);return r^=r+Math.imul(r^r>>>7,61|r),((r^r>>>14)>>>0)/4294967296};return{nextFloat:t,nextInt:r=>r<=0?0:Math.floor(t()*r),seed:n}}function Rd(n=Date.now()){return{time:0,tick:0,eventIdCounter:0,rng:Yx(n),player:{segments:[],direction:{x:1,y:0,z:0},nextDirection:{x:1,y:0,z:0},speed:0,moveTimer:0,animationFrame:0,animationTimer:0,scoreMultiplier:1,ghostModeActive:!1,activePowerUps:[],enlargedHeadUntil:0,alphaMode:{active:!1,startTime:0,endTime:0,lastScoreThreshold:0,alphaPoints:0,lastDecayTime:0,scoreMultiplier:1,scoreMultiplierStack:[],consecutiveActivations:0,cooldownActive:!1,cooldownEndTime:0,progress:0}},enemies:{list:[],kills:0},food:{positions:[]},obstacles:{list:[]},score:{current:0,multiplier:1},flags:{gameOver:!1}}}function Cd(n){const e=n.core||Rd();return e.player=n.playerSnake,e.enemies=n.enemies,e.food.positions=n.food.positions,e.obstacles=n.obstacles,e.score=n.score,e.flags=n.flags,n.core=e,e}function $x(n,e){const t=[];for(const i of n.enemies.list)if(i.animationTimer+=e,i.animationTimer>.25&&(i.animationFrame=(i.animationFrame+1)%2,i.animationTimer=0),Kx(i,n),n.time-i.lastMoveTime>=i.speed){const r=Zx(i,n);i.lastMoveTime=n.time,r.moved&&t.push({type:et.EnemyMoved,payload:{enemyId:i.id}}),r.foodSpawned&&t.push({type:et.FoodSpawned,payload:{type:r.foodSpawned.type,x:r.foodSpawned.x,z:r.foodSpawned.z}})}return{events:t}}function Kx(n,e){const t=n.snake[0],i=n.direction;if(n.state==="seeking"){const{index:r,position:s}=Jx(t,e);if(n.targetFoodIndex=r,s){const a=s.x-t.x,o=s.z-t.z;let l={x:0,y:0,z:0};if(Math.abs(a)>Math.abs(o))l.x=Math.sign(a);else if(Math.abs(o)>0)l.z=Math.sign(o);else{n.state="idle",n.nextDirection=i;return}let c=l,u={x:t.x+c.x,z:t.z+c.z};if(ln(u,n,e)){const d=xs(l);let f=!1;for(const m of d)if(u={x:t.x+m.x,y:0,z:t.z+m.z},!ln(u,n,e)){c=m,f=!0;break}if(!f)if(u={x:t.x+i.x,y:0,z:t.z+i.z},!ln(u,n,e))c=i;else{const m={x:-i.x,y:0,z:-i.z};if(u={x:t.x+m.x,y:0,z:t.z+m.z},!ln(u,n,e))c=m;else{const _=xs(i);for(const g of _)if(u={x:t.x+g.x,y:0,z:t.z+g.z},!ln(u,n,e)){c=g;break}n.state="idle"}}}n.nextDirection=c}else n.state="idle",n.nextDirection=i}else if(n.state==="idle"){if(e.rng.nextFloat()<.15){const r=xs(i),s=e.rng.nextInt(r.length);let a=r[s],o={x:t.x+a.x,z:t.z+a.z};ln(o,n,e)&&(a=r[(s+1)%r.length],o={x:t.x+a.x,y:0,z:t.z+a.z},ln(o,n,e)&&(a=i,o={x:t.x+i.x,y:0,z:t.z+i.z},ln(o,n,e)&&(a=i))),n.nextDirection=a}else{let r=i,s={x:t.x+i.x,z:t.z+i.z};if(ln(s,n,e)){const a=xs(i);let o=!1;for(const l of a)if(s={x:t.x+l.x,y:0,z:t.z+l.z},!ln(s,n,e)){r=l,o=!0;break}o||(r={x:-i.x,y:0,z:-i.z},s={x:t.x+r.x,y:0,z:t.z+r.z},ln(s,n,e)&&(r=i))}n.nextDirection=r}e.rng.nextFloat()<.05&&(n.state="seeking")}}function ln(n,e,t){const i=$e/2;if(n.x>=i||n.x<-i||n.z>=i||n.z<-i)return!0;for(let r=0;r<e.snake.length-1;r++)if(e.snake[r].x===n.x&&e.snake[r].z===n.z)return!0;if(Oa(t.obstacles,n))return!0;for(const r of t.enemies.list)if(r.id!==e.id&&r.snake.some(s=>s.x===n.x&&s.z===n.z))return!0;return!1}function xs(n){return n.x!==0?[{x:0,y:0,z:1*n.x},{x:0,y:0,z:-1*n.x}]:n.z!==0?[{x:-1*n.z,y:0,z:0},{x:1*n.z,y:0,z:0}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0}]}function Zx(n,e){n.direction=n.nextDirection;const t=n.snake[0],i={x:t.x+n.direction.x,y:0,z:t.z+n.direction.z};if(ln(i,n,e))return n.state="idle",{moved:!1,foodSpawned:null};let r=!1,s=-1;for(let o=0;o<e.food.positions.length;o++)if(i.x===e.food.positions[o].x&&i.z===e.food.positions[o].z){r=!0,s=o;break}n.snake.unshift(i);let a=null;return r?(e.food.positions.splice(s,1),a=Ua(e),n.state="seeking"):n.snake.pop(),{moved:!0,foodSpawned:a}}function Ld(n,e){const t=cd(n,ju),i=n.rng.nextFloat()<.5?n.rng.nextFloat()<.5?1:-1:0,r=i===0?n.rng.nextFloat()<.5?1:-1:0,s={x:i,y:0,z:r},a=[];let o={...t};for(let c=0;c<Zu;c++)a.push({...o}),o.x-=s.x,o.z-=s.z;const l={id:e,snake:a,direction:{...s},nextDirection:{...s},targetFoodIndex:null,state:"seeking",lastMoveTime:n.time+n.rng.nextFloat()*Ds,animationFrame:0,animationTimer:n.time,speed:Ds};n.enemies.list.push(l)}function jx(n,e){n.enemies.list=[],n.enemies.respawnQueue=[];for(let t=0;t<e;t++)Ld(n,t)}function Jx(n,e){if(!e.food.positions.length)return{index:null,position:null};let t=null,i=1/0,r=null;for(let s=0;s<e.food.positions.length;s++){const a=e.food.positions[s],o=a.x-n.x,l=a.z-n.z,c=Math.abs(o)+Math.abs(l);c<i&&(i=c,t=s,r={x:a.x,y:0,z:a.z})}return{index:t,position:r}}function Qx(n,e){for(const t of n.enemies.list)for(let i=0;i<t.snake.length;i++){const r=t.snake[i];if(r.x===e.x&&r.z===e.z){const s=i>=t.snake.length-zr;return{enemyId:t.id,segmentIndex:i,isTail:s,isHead:i===0}}}return null}function eM(n,e){const t=n.enemies.list.findIndex(i=>i.id===e);return t===-1?!1:(n.enemies.list.splice(t,1),n.enemies.kills=(n.enemies.kills||0)+1,n.enemies.respawnQueue||(n.enemies.respawnQueue=[]),n.enemies.respawnQueue.push({id:e,respawnTime:n.time+Jo}),!0)}function tM(n){var i;if(!((i=n.enemies.respawnQueue)!=null&&i.length))return[];const e=[],t=[];for(const r of n.enemies.respawnQueue)n.time>=r.respawnTime?e.push(r.id):t.push(r);return n.enemies.respawnQueue=t,e}function Qc(n,e,t){const i=n.player;i.alphaMode.active||(i.alphaMode.alphaPoints+=e,t.push({type:et.AlphaPointsChanged,payload:{points:i.alphaMode.alphaPoints}}))}function nM(n,e){const t=n.player;if(!t.alphaMode.lastDecayTime||t.alphaMode.lastDecayTime===0||isNaN(t.alphaMode.lastDecayTime)){t.alphaMode.lastDecayTime=e;return}const i=e-t.alphaMode.lastDecayTime;if(i>0&&i<1&&t.alphaMode.alphaPoints>0){const r=Yu;t.alphaMode.alphaPoints=Math.max(0,t.alphaMode.alphaPoints-r*i)}t.alphaMode.lastDecayTime=e}function iM(n,e,t){const i=n.player;if(i.alphaMode.active)return!1;const r=ui("ALPHA_POINTS_THRESHOLD")||Xs;return i.alphaMode.alphaPoints>=r?(i.alphaMode.alphaPoints=0,rM(n,e,t),!0):!1}function rM(n,e,t){const i=n.player,r=ui("ALPHA_MODE_DURATION")||qs;i.alphaMode.active=!0,i.alphaMode.progress=1,i.alphaMode.startTime=e,i.alphaMode.endTime=e+r,i.alphaMode.scoreMultiplier=Ws,i.alphaMode.consecutiveActivations=(i.alphaMode.consecutiveActivations||0)+1,i.alphaMode.scoreMultiplierStack=[],t.push({type:et.AlphaModeActivated,payload:{duration:r}})}function sM(n,e,t){const i=n.player;if(i.alphaMode.active){if(e>=i.alphaMode.endTime){i.alphaMode.active=!1,i.alphaMode.scoreMultiplier=1,i.alphaMode.scoreMultiplierStack=[],t.push({type:et.AlphaModeEnded});return}if(i.alphaMode.scoreMultiplierStack=i.alphaMode.scoreMultiplierStack.filter(r=>r.endTime>e),i.alphaMode.scoreMultiplierStack.length>0){let r=1;i.alphaMode.scoreMultiplierStack.forEach(s=>{r*=s.value}),i.alphaMode.scoreMultiplier=Math.min(r,Xu)}else i.alphaMode.scoreMultiplier=1}}function oM(n,e){n.player.alphaMode.active&&n.player.alphaMode.scoreMultiplierStack.push({value:Ws,endTime:e+Wu})}function aM(n,e,t){const i=e.player;switch(i.activePowerUps||(i.activePowerUps=[]),n){case"speed":return i.speed=En/Hu,i.activePowerUps.push({type:n,endTime:t+$o}),{duration:$o};case"ghost":return i.ghostModeActive=!0,i.activePowerUps.push({type:n,endTime:t+Zo}),{duration:Zo};case"score_x2":return i.scoreMultiplier=Vu,i.activePowerUps.push({type:n,endTime:t+Ko}),{duration:Ko};case"shrink":const r=i.segments.length,s=Math.min(Gu,r-Sa);return s>0&&i.segments.splice(i.segments.length-s,s),{duration:0};default:return{duration:0}}}function lM(n,e){const t=n.player;!t.activePowerUps||t.activePowerUps.length===0||(t.activePowerUps=t.activePowerUps.filter(i=>{if(i.endTime>e)return!0;switch(i.type){case"speed":t.speed=En;break;case"ghost":t.ghostModeActive=!1;break;case"score_x2":t.scoreMultiplier=1;break}return!1}))}function eu(n,e){return e.map(t=>({tick:n.tick,eventId:n.eventIdCounter++,version:Bs,event:t}))}function cM(n,e){var a,o;n.time+=e,n.tick+=1;const t=Cx(n,e);if(t.events.some(l=>l.type===et.PlayerMoved)){const l=n.player.segments[0];if(l){const c=Qx(n,{x:l.x,z:l.z});if(c){const d=(a=n.player.alphaMode)==null?void 0:a.active,f=n.player.ghostModeActive;if(c.isTail||d)eM(n,c.enemyId)&&(c.isTail&&!d&&Qc(n,qu,t.events),t.events.push({type:et.EnemyKilled,payload:{enemyId:c.enemyId,viaTail:c.isTail}}));else if(!f)return t.events.push({type:et.PlayerDead,payload:{reason:"ENEMY_COLLISION"}}),{events:eu(n,t.events)}}const u=ud(n,{x:l.x,z:l.z});if(u){n.food.positions.splice(u.index,1);const d=(o=n.player.alphaMode)!=null&&o.active?n.player.scoreMultiplier:1,f=Math.round(u.scoreValue*d);if(n.score.current+=f,t.events.push({type:et.FoodEaten,payload:{type:u.type,score:f,effects:u.effects}}),t.events.push({type:et.ScoreChanged,payload:{score:n.score.current}}),u.grow){const _=n.player.segments[n.player.segments.length-1];_&&n.player.segments.push({..._})}if(u.effects.speedBoostDuration>0&&(n.player.speedBoostUntil=n.time+u.effects.speedBoostDuration),u.effects.alphaModeExtension>0&&n.player.alphaMode.active&&(n.player.alphaMode.endTime+=u.effects.alphaModeExtension,u.effects.addScoreMultiplier&&oM(n,n.time)),u.effects.alphaPoints>0&&Qc(n,u.effects.alphaPoints,t.events),u.type!=="normal"){const _=aM(u.type,n,n.time);t.events.push({type:et.PowerupApplied,payload:{type:u.type,duration:_.duration}})}const m=Ua(n);m&&t.events.push({type:et.FoodSpawned,payload:{type:m.type,x:m.x,z:m.z}})}}}nM(n,n.time),iM(n,n.time,t.events),sM(n,n.time,t.events),lM(n,n.time);const r=$x(n,e);return t.events.push(...r.events),ix(n,e),tM(n).forEach(l=>{Ld(n,l),t.events.push({type:et.EnemyRespawned,payload:{enemyId:l}})}),{events:eu(n,t.events)}}let zs;function Qn(n,e,t,i){n.addEventListener(e,t,i)}async function uM(){var o,l,c,u;av(),H.system.info("Initializing game..."),I.flags.gameRunning=!1;const n=dn.initializeForCurrentDevice();H.system.info(`Device type: ${n?"Mobile":"Desktop"}`),H.system.info(`Performance settings: Shadows=${dn.shadows}, Detail=${dn.detailLevel}`),MM();const e=document.getElementById("gameCanvas");if(!e){H.system.error("Canvas element #gameCanvas not found!");return}I.scene=Z0(),I.camera=j0(),I.renderer=J0(e),I.clock=new Nu;const t=new URLSearchParams(window.location.search).get("seed"),i=t?Number(t):Date.now();I.core=Rd(i),H.system.info(`Core RNG seed: ${i}`),H.system.info(`Event schema version: ${Bs}`),Cd(I),I.simulation.fixedDelta=1/I.simulation.tickRate,I.simulation.lastTimeMs=performance.now(),I.lights=Q0(I.scene);try{if(I.materials=await dv(),H.system.info("Materials loaded and created."),!((l=(o=I.materials)==null?void 0:o.snake)!=null&&l.head1)||!((c=I.materials)!=null&&c.ground)||!I.materials.particle)throw new Error("Essential materials failed to create after loading.")}catch(d){H.system.error("Fatal Error: Could not load/create materials.",d),alert("Error loading game materials. Please refresh the page and try again.");return}const r=sv(I.scene,I.materials);I.environment={...r},Kv(I.materials.particle),fv(I.camera),I.cleanupInput=Xx(I,Gv),Qn(window,"gameStarted",dM),Qn(window,"gamePaused",hM),Qn(window,"gameResumed",fM),zv(),Qn(window,"resize",xM),(u=document.getElementById("resetAlphaModeCooldown"))==null||u.addEventListener("click",function(){Gx(I),ht("Alpha Mode cooldown reset!"),H.system.info("Alpha Mode cooldown reset button clicked")});const s=window.location.search;new URLSearchParams(s).get("stats")==="true"&&(zs=new Nr,document.body.appendChild(zs.dom)),Qn(window,"gameOver",pM),Qn(window,"gamePaused",mM),Qn(window,"gameResumed",gM),Qn(window,"gameRestart",Dd),qx()}function dM(){H.system.info("Starting gameplay..."),Pd(),I.flags.gameStarted=!0,I.flags.gameOver=!1,I.flags.gamePaused=!1,window.fixAudio&&window.fixAudio(),I.flags.animating||(I.flags.animating=!0,Va())}function hM(){H.system.info("Game paused"),I.flags.gameRunning=!1,I.flags.gamePaused=!0,wa()}function fM(){H.system.info("Game resumed"),I.flags.gameOver||(I.flags.gameRunning=!0,I.flags.animating||(I.flags.animating=!0,Va()),Ii())}function pM(){H.system.info("Game over handler called")}function mM(){H.system.info("Game paused"),I.flags.gamePaused=!0,wa()}function gM(){H.system.info("Game resumed"),I.flags.gameOver||(I.flags.gamePaused=!1,Ii())}function Pd(){H.system.info("--- RESETTING GAME ---"),I.flags.gameRunning=!1,I.simulation.time=0,I.simulation.accumulator=0,I.simulation.lastTimeMs=performance.now(),$0(),I.cameraEffects||(I.cameraEffects={shake:{active:!1,startTime:0,duration:0,intensity:0,originalPosition:new D}}),wv(),setTimeout(()=>{Jv(I.scene),hd(I),setTimeout(()=>{fd(I),md(I),Dx(I),setTimeout(()=>{if(fx(I),I.flags.useCoreSimulation){const n=ui("NUM_INITIAL_FOOD")||Ea;tx(I.core,n),la(I)}else ax(I);setTimeout(()=>{I.flags.useCoreSimulation?(jx(I.core,jo),ca(I)):_x(I),sd(0,I),js(0),Cd(I),Rv(),H.system.info("--- GAME RESET COMPLETE ---"),I.flags.gameRunning=!0,I.flags.gameOver=!1},10)},10)},10)},10)}function Id(n=I,e="DEFAULT"){if(n.flags.gameOver)return;H.system.info("Game Over! Final Score:",n.score.current,"Reason:",e),n.flags.gameOver=!0,n.flags.gameRunning=!1,n.score.current>n.highScore&&(n.highScore=n.score.current,H.system.info("New High Score:",n.highScore),X0(n.highScore),sa(n.highScore));const t={applesEaten:n.stats.applesEaten||0,frogsEaten:n.stats.frogsEaten||0,snakesEaten:n.stats.snakesEaten||0};Vv(n.score.current,n.highScore,e,t),Ur(""),rd(),n.playerSnake.speed=En,n.playerSnake.scoreMultiplier=1,n.playerSnake.ghostModeActive&&(n.playerSnake.ghostModeActive=!1,Yn(n)),n.playerSnake.activePowerUp=null}function Dd(){I.flags.gameOver&&(Ca(),H.system.info("Restart requested."))}function Va(){requestAnimationFrame(Va),I.frameCount++,I.flags.gameRunning&&_M()}function _M(){var i;I.flags.restartRequested&&Pd();const n=performance.now(),e=Math.min((n-I.simulation.lastTimeMs)/1e3,.25);I.simulation.lastTimeMs=n,I.simulation.accumulator+=e,Math.floor(I.simulation.time*2)%2===0&&!I.flags.audioHealthCheckRun?(Cv(),I.flags.audioHealthCheckRun=!0):Math.floor(I.simulation.time*2)%2!==0&&(I.flags.audioHealthCheckRun=!1);let t=0;for(;I.simulation.accumulator>=I.simulation.fixedDelta&&t<I.simulation.maxSubSteps;){const r=I.simulation.fixedDelta;if(I.simulation.time+=r,I.flags.gameRunning&&!I.flags.gameOver){if(I.flags.useCoreSimulation){for(I.inputQueue.length>1&&I.inputQueue.sort((a,o)=>a.tick-o.tick);I.inputQueue.length>0;){const a=I.inputQueue.shift();a.tick<I.core.tick||Rx(I.core,a)}const s=cM(I.core,r);(i=s==null?void 0:s.events)!=null&&i.length&&s.events.forEach(a=>{var l,c,u;if(a.version!==Bs){H.system.warn(`Event schema mismatch. Expected ${Bs}, got ${a.version}`);return}const o=a.event;if(o.type===et.PlayerDead&&(bd(I),Id(I,((l=o.payload)==null?void 0:l.reason)||"DEFAULT")),o.type===et.ScoreChanged&&Zs(o.payload.score),o.type===et.FoodSpawned&&la(I),o.type===et.FoodEaten){const d=Xn.find(f=>f.type===o.payload.type);o.payload.type==="normal"?(I.stats.applesEaten++,rn("eatApple"),o.payload.effects.speedBoostDuration>0&&ht("Speed Boost!",49151)):(I.stats.frogsEaten++,rn("eatFrog")),d!=null&&d.effectText&&ht(d.effectText,d.colorHint.getHex())}if(o.type===et.EnemyKilled&&(vx(o.payload.enemyId,I),(u=(c=I.playerSnake)==null?void 0:c.alphaMode)!=null&&u.active&&(rn("alphaKillExplode1"),td()),I.stats.snakesEaten++,js(I.enemies.kills)),o.type===et.PowerupApplied){const d=Xn.find(f=>f.type===o.payload.type);d!=null&&d.effectText&&ht(d.effectText,d.colorHint.getHex())}o.type===et.AlphaModeActivated&&(od(),(void 0)()),o.type===et.AlphaModeEnded&&ht("Alpha Mode ended"),o.type===et.EnemyRespawned&&ca(I)}),Ux(r,I.simulation.time,I),Nx(I),ca(I),la(I)}else Ox(r,I.simulation.time,I),xx(r,I.simulation.time,I);Hx(I),bx(I),Yc(r,I.scene),$c(I,r)}else Yc(r,I.scene),$c(I,r);t+=1,I.simulation.accumulator-=I.simulation.fixedDelta}zx(I),vM(I.simulation.time),I.renderer.render(I.scene,I.camera),zs&&zs.update()}function vM(n){const{camera:e,cameraEffects:t}=I;if(!(!e||!t||!t.shake)&&t.shake.active){const i=t.shake,r=n-i.startTime;if(r>=i.duration)e.position.copy(i.originalPosition),i.active=!1;else{const s=1-r/i.duration,a=i.intensity*s,o=i.originalPosition;e.position.set(o.x+(Math.random()*2-1)*a,o.y+(Math.random()*2-1)*a*.5,o.z+(Math.random()*2-1)*a)}}}function xM(){I.camera&&I.renderer&&(I.camera.aspect=window.innerWidth/window.innerHeight,I.camera.updateProjectionMatrix(),I.renderer.setSize(window.innerWidth,window.innerHeight))}function MM(){const n=Us;let e=0;for(const t in n)n.hasOwnProperty(t)&&(e+=n[t]);if(Math.abs(e-100)>.001){H.system.warn(`Food spawn ratios do not add up to 100! Current total: ${e}`);const t=100/e;for(const i in n)n.hasOwnProperty(i)&&(n[i]=Math.round(n[i]*t));H.system.info("Food spawn ratios have been normalized:",n)}EM(),H.system.info("Configuration validated.")}function EM(){if(I.environment&&I.environment.groundMesh){const n=I.environment.groundMesh;n.material&&(n.material.color.set(Cr),n.material.needsUpdate=!0,H.system.info("Ground color updated to:","#"+Cr.toString(16).padStart(6,"0")))}}uM().catch(n=>{H.system.error("Initialization failed:",n),alert("Error initializing the game. Please check the console for details.")});
