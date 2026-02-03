(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="160",Gf=0,Vc=1,Vf=2,nd=1,id=2,ni=3,_n=0,nn=1,Vt=2,Ti=0,Ar=1,Pa=2,Wc=3,$c=4,Wf=5,Hi=100,$f=101,Xf=102,Xc=103,qc=104,qf=200,Yf=201,jf=202,Kf=203,La=204,Ia=205,Zf=206,Jf=207,Qf=208,eh=209,th=210,nh=211,ih=212,rh=213,sh=214,oh=0,ah=1,ch=2,ao=3,lh=4,uh=5,dh=6,fh=7,rc=0,hh=1,ph=2,Ai=0,mh=1,gh=2,_h=3,vh=4,xh=5,Mh=6,rd=300,Pr=301,Lr=302,Da=303,Oa=304,wo=306,Ln=1e3,Dn=1001,Ua=1002,Dt=1003,Yc=1004,qo=1005,bt=1006,Eh=1007,en=1008,wi=1009,yh=1010,Sh=1011,sc=1012,sd=1013,Ei=1014,yi=1015,us=1016,od=1017,ad=1018,Vi=1020,Th=1021,On=1023,Ah=1024,wh=1025,Wi=1026,Ir=1027,bh=1028,cd=1029,Rh=1030,ld=1031,ud=1033,Yo=33776,jo=33777,Ko=33778,Zo=33779,jc=35840,Kc=35841,Zc=35842,Jc=35843,dd=36196,Qc=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,cl=37815,ll=37816,ul=37817,dl=37818,fl=37819,hl=37820,pl=37821,Jo=36492,ml=36494,gl=36495,Ch=36283,_l=36284,vl=36285,xl=36286,fd=3e3,$i=3001,Ph=3200,Lh=3201,oc=0,Ih=1,Tn="",Nt="srgb",si="srgb-linear",ac="display-p3",bo="display-p3-linear",co="linear",At="srgb",lo="rec709",uo="p3",tr=7680,Ml=519,Dh=512,Oh=513,Uh=514,hd=515,Nh=516,Fh=517,Bh=518,kh=519,El=35044,zh=35048,yl="300 es",Na=1035,ri=2e3,fo=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const es=Math.PI/180,ds=180/Math.PI;function Hr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function Hh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gh(n,e,t){return n!==e?(t-n)/(e-n):0}function ts(n,e,t){return(1-t)*n+t*e}function Vh(n,e,t,i){return ts(n,e,1-Math.exp(-t*i))}function Wh(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function $h(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yh(n,e){return n+Math.random()*(e-n)}function jh(n){return n*(.5-Math.random())}function Kh(n){n!==void 0&&(Sl=n);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zh(n){return n*es}function Jh(n){return n*ds}function Fa(n){return(n&n-1)===0&&n!==0}function Qh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ep(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),p=a((e-i)/2),_=s((i-e)/2),M=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*f,c*p,o*l);break;case"YZY":n.set(c*p,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*p,o*u,o*l);break;case"XZX":n.set(o*u,c*M,c*_,o*l);break;case"YXY":n.set(c*_,o*u,c*M,o*l);break;case"ZYZ":n.set(c*M,c*_,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:es,RAD2DEG:ds,generateUUID:Hr,clamp:cn,euclideanModulo:lc,mapLinear:Hh,inverseLerp:Gh,lerp:ts,damp:Vh,pingpong:Wh,smoothstep:$h,smootherstep:Xh,randInt:qh,randFloat:Yh,randFloatSpread:jh,seededRandom:Kh,degToRad:Zh,radToDeg:Jh,isPowerOfTwo:Fa,ceilPowerOfTwo:Qh,floorPowerOfTwo:ho,setQuaternionFromProperEuler:ep,normalize:sn,denormalize:Mr};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,a,o,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],p=i[2],_=i[5],M=i[8],x=r[0],v=r[3],h=r[6],R=r[1],A=r[4],P=r[7],B=r[2],L=r[5],w=r[8];return s[0]=a*x+o*R+c*B,s[3]=a*v+o*A+c*L,s[6]=a*h+o*P+c*w,s[1]=l*x+u*R+f*B,s[4]=l*v+u*A+f*L,s[7]=l*h+u*P+f*w,s[2]=p*x+_*R+M*B,s[5]=p*v+_*A+M*L,s[8]=p*h+_*P+M*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,p=o*c-u*s,_=l*s-a*c,M=t*f+i*p+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/M;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=p*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=_*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new tt;function pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){const n=fs("canvas");return n.style.display="block",n}const Al={};function ns(n){n in Al||(Al[n]=!0,console.warn(n))}const wl=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bl=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),As={[si]:{transfer:co,primaries:lo,toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:At,primaries:lo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bo]:{transfer:co,primaries:uo,toReference:n=>n.applyMatrix3(bl),fromReference:n=>n.applyMatrix3(wl)},[ac]:{transfer:At,primaries:uo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bl),fromReference:n=>n.applyMatrix3(wl).convertLinearToSRGB()}},np=new Set([si,bo]),vt={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!np.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=As[e].toReference,r=As[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return As[n].primaries},getTransfer:function(n){return n===Tn?co:As[n].transfer}};function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let nr;class md{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=fs("canvas")),nr.width=e.width,nr.height=e.height;const i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ip=0;class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ta(r[a].image)):s.push(ta(r[a]))}else s=ta(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?md.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class fn extends zr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Dn,r=Dn,s=bt,a=en,o=On,c=wi,l=fn.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Hr(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$i?Nt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?$i:fd}set encoding(e){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?Nt:Tn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=rd;fn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],p=c[1],_=c[5],M=c[9],x=c[2],v=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-x)<.01&&Math.abs(M-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+x)<.1&&Math.abs(M+v)<.1&&Math.abs(l+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,P=(_+1)/2,B=(h+1)/2,L=(u+p)/4,w=(f+x)/4,J=(M+v)/4;return A>P&&A>B?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=L/i,s=w/i):P>B?P<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),i=L/r,s=J/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=w/s,r=J/s),this.set(i,r,s,t),this}let R=Math.sqrt((v-M)*(v-M)+(f-x)*(f-x)+(p-u)*(p-u));return Math.abs(R)<.001&&(R=1),this.x=(v-M)/R,this.y=(f-x)/R,this.z=(p-u)/R,this.w=Math.acos((l+_+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$i?Nt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends sp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _d extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class op extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const p=s[a+0],_=s[a+1],M=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=_,e[t+2]=M,e[t+3]=x;return}if(f!==x||c!==p||l!==_||u!==M){let v=1-o;const h=c*p+l*_+u*M+f*x,R=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const B=Math.sqrt(A),L=Math.atan2(B,h*R);v=Math.sin(v*L)/B,o=Math.sin(o*L)/B}const P=o*R;if(c=c*v+p*P,l=l*v+_*P,u=u*v+M*P,f=f*v+x*P,v===1-o){const B=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=B,l*=B,u*=B,f*=B}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],p=s[a+1],_=s[a+2],M=s[a+3];return e[t]=o*M+u*f+c*_-l*p,e[t+1]=c*M+u*p+l*f-o*_,e[t+2]=l*M+u*_+o*p-c*f,e[t+3]=u*M-o*f-c*p-l*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),p=c(i/2),_=c(r/2),M=c(s/2);switch(a){case"XYZ":this._x=p*u*f+l*_*M,this._y=l*_*f-p*u*M,this._z=l*u*M+p*_*f,this._w=l*u*f-p*_*M;break;case"YXZ":this._x=p*u*f+l*_*M,this._y=l*_*f-p*u*M,this._z=l*u*M-p*_*f,this._w=l*u*f+p*_*M;break;case"ZXY":this._x=p*u*f-l*_*M,this._y=l*_*f+p*u*M,this._z=l*u*M+p*_*f,this._w=l*u*f-p*_*M;break;case"ZYX":this._x=p*u*f-l*_*M,this._y=l*_*f+p*u*M,this._z=l*u*M-p*_*f,this._w=l*u*f+p*_*M;break;case"YZX":this._x=p*u*f+l*_*M,this._y=l*_*f+p*u*M,this._z=l*u*M-p*_*f,this._w=l*u*f-p*_*M;break;case"XZY":this._x=p*u*f-l*_*M,this._y=l*_*f-p*u*M,this._z=l*u*M+p*_*f,this._w=l*u*f+p*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],p=i+o+f;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-c)*_,this._y=(s-l)*_,this._z=(a-r)*_}else if(i>o&&i>f){const _=2*Math.sqrt(1+i-o-f);this._w=(u-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+l)/_}else if(o>f){const _=2*Math.sqrt(1+o-i-f);this._w=(s-l)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+f-i-o);this._w=(a-r)/_,this._x=(s+l)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new H,Rl=new Gr;class er{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),bs.subVectors(this.max,Xr),ir.subVectors(e.a,Xr),rr.subVectors(e.b,Xr),sr.subVectors(e.c,Xr),hi.subVectors(rr,ir),pi.subVectors(sr,rr),Ii.subVectors(ir,sr);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!ia(t,ir,rr,sr,bs)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,ir,rr,sr,bs))?!1:(Rs.crossVectors(hi,pi),t=[Rs.x,Rs.y,Rs.z],ia(t,ir,rr,sr,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new H,new H,new H,new H,new H,new H,new H,new H],Rn=new H,ws=new er,ir=new H,rr=new H,sr=new H,hi=new H,pi=new H,Ii=new H,Xr=new H,bs=new H,Rs=new H,Di=new H;function ia(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Di.fromArray(n,s);const o=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ap=new er,qr=new H,ra=new H;class gs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ap.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(ra)),this.expandByPoint(qr.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new H,sa=new H,Cs=new H,mi=new H,oa=new H,Ps=new H,aa=new H;class cp{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sa.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Cs),o=mi.dot(this.direction),c=-mi.dot(Cs),l=mi.lengthSq(),u=Math.abs(1-a*a);let f,p,_,M;if(u>0)if(f=a*c-o,p=a*o-c,M=s*u,f>=0)if(p>=-M)if(p<=M){const x=1/u;f*=x,p*=x,_=f*(f+a*p+2*o)+p*(a*f+p+2*c)+l}else p=s,f=Math.max(0,-(a*p+o)),_=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(a*p+o)),_=-f*f+p*(p+2*c)+l;else p<=-M?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),_=-f*f+p*(p+2*c)+l):p<=M?(f=0,p=Math.min(Math.max(-s,-c),s),_=p*(p+2*c)+l):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),_=-f*f+p*(p+2*c)+l);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),_=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sa).addScaledVector(Cs,p),_}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,r,s){oa.subVectors(t,e),Ps.subVectors(i,e),aa.crossVectors(oa,Ps);let a=this.direction.dot(aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(Ps.crossVectors(mi,Ps));if(c<0)return null;const l=o*this.direction.dot(oa.cross(mi));if(l<0||c+l>a)return null;const u=-o*mi.dot(aa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,r,s,a,o,c,l,u,f,p,_,M,x,v){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,p,_,M,x,v)}set(e,t,i,r,s,a,o,c,l,u,f,p,_,M,x,v){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=p,h[3]=_,h[7]=M,h[11]=x,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*u,_=a*f,M=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=_+M*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=M+_*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,_=c*f,M=l*u,x=l*f;t[0]=p+x*o,t[4]=M*o-_,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=_*o-M,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,_=c*f,M=l*u,x=l*f;t[0]=p-x*o,t[4]=-a*f,t[8]=M+_*o,t[1]=_+M*o,t[5]=a*u,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,_=a*f,M=o*u,x=o*f;t[0]=c*u,t[4]=M*l-_,t[8]=p*l+x,t[1]=c*f,t[5]=x*l+p,t[9]=_*l-M,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,_=a*l,M=o*c,x=o*l;t[0]=c*u,t[4]=x-p*f,t[8]=M*f+_,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=_*f+M,t[10]=p-x*f}else if(e.order==="XZY"){const p=a*c,_=a*l,M=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=p*f+x,t[5]=a*u,t[9]=_*f-M,t[2]=M*f-_,t[6]=o*u,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,up)}lookAt(e,t,i){const r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(i,hn),gi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(i,hn)),gi.normalize(),Ls.crossVectors(hn,gi),r[0]=gi.x,r[4]=Ls.x,r[8]=hn.x,r[1]=gi.y,r[5]=Ls.y,r[9]=hn.y,r[2]=gi.z,r[6]=Ls.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],p=i[9],_=i[13],M=i[2],x=i[6],v=i[10],h=i[14],R=i[3],A=i[7],P=i[11],B=i[15],L=r[0],w=r[4],J=r[8],T=r[12],C=r[1],$=r[5],Y=r[9],ae=r[13],U=r[2],W=r[6],K=r[10],Q=r[14],te=r[3],ne=r[7],ie=r[11],de=r[15];return s[0]=a*L+o*C+c*U+l*te,s[4]=a*w+o*$+c*W+l*ne,s[8]=a*J+o*Y+c*K+l*ie,s[12]=a*T+o*ae+c*Q+l*de,s[1]=u*L+f*C+p*U+_*te,s[5]=u*w+f*$+p*W+_*ne,s[9]=u*J+f*Y+p*K+_*ie,s[13]=u*T+f*ae+p*Q+_*de,s[2]=M*L+x*C+v*U+h*te,s[6]=M*w+x*$+v*W+h*ne,s[10]=M*J+x*Y+v*K+h*ie,s[14]=M*T+x*ae+v*Q+h*de,s[3]=R*L+A*C+P*U+B*te,s[7]=R*w+A*$+P*W+B*ne,s[11]=R*J+A*Y+P*K+B*ie,s[15]=R*T+A*ae+P*Q+B*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],p=e[10],_=e[14],M=e[3],x=e[7],v=e[11],h=e[15];return M*(+s*c*f-r*l*f-s*o*p+i*l*p+r*o*_-i*c*_)+x*(+t*c*_-t*l*p+s*a*p-r*a*_+r*l*u-s*c*u)+v*(+t*l*f-t*o*_-s*a*f+i*a*_+s*o*u-i*l*u)+h*(-r*o*u-t*c*f+t*o*p+r*a*f-i*a*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],p=e[10],_=e[11],M=e[12],x=e[13],v=e[14],h=e[15],R=f*v*l-x*p*l+x*c*_-o*v*_-f*c*h+o*p*h,A=M*p*l-u*v*l-M*c*_+a*v*_+u*c*h-a*p*h,P=u*x*l-M*f*l+M*o*_-a*x*_-u*o*h+a*f*h,B=M*f*c-u*x*c-M*o*p+a*x*p+u*o*v-a*f*v,L=t*R+i*A+r*P+s*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return e[0]=R*w,e[1]=(x*p*s-f*v*s-x*r*_+i*v*_+f*r*h-i*p*h)*w,e[2]=(o*v*s-x*c*s+x*r*l-i*v*l-o*r*h+i*c*h)*w,e[3]=(f*c*s-o*p*s-f*r*l+i*p*l+o*r*_-i*c*_)*w,e[4]=A*w,e[5]=(u*v*s-M*p*s+M*r*_-t*v*_-u*r*h+t*p*h)*w,e[6]=(M*c*s-a*v*s-M*r*l+t*v*l+a*r*h-t*c*h)*w,e[7]=(a*p*s-u*c*s+u*r*l-t*p*l-a*r*_+t*c*_)*w,e[8]=P*w,e[9]=(M*f*s-u*x*s-M*i*_+t*x*_+u*i*h-t*f*h)*w,e[10]=(a*x*s-M*o*s+M*i*l-t*x*l-a*i*h+t*o*h)*w,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*_-t*o*_)*w,e[12]=B*w,e[13]=(u*x*r-M*f*r+M*i*p-t*x*p-u*i*v+t*f*v)*w,e[14]=(M*o*r-a*x*r-M*i*c+t*x*c+a*i*v-t*o*v)*w,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*p+t*o*p)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,p=s*l,_=s*u,M=s*f,x=a*u,v=a*f,h=o*f,R=c*l,A=c*u,P=c*f,B=i.x,L=i.y,w=i.z;return r[0]=(1-(x+h))*B,r[1]=(_+P)*B,r[2]=(M-A)*B,r[3]=0,r[4]=(_-P)*L,r[5]=(1-(p+h))*L,r[6]=(v+R)*L,r[7]=0,r[8]=(M+A)*w,r[9]=(v-R)*w,r[10]=(1-(p+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const a=or.set(r[4],r[5],r[6]).length(),o=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const l=1/s,u=1/a,f=1/o;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ri){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,M;if(o===ri)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===fo)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ri){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),p=(t+e)*l,_=(i+r)*u;let M,x;if(o===ri)M=(a+s)*f,x=-2*f;else if(o===fo)M=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=x,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const or=new H,Cn=new Pt,lp=new H(0,0,0),up=new H(1,1,1),gi=new H,Ls=new H,hn=new H,Cl=new Pt,Pl=new Gr;class Ro{constructor(e=0,t=0,i=0,r=Ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],p=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ro.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dp=0;const Ll=new H,ar=new Gr,Jn=new Pt,Is=new H,Yr=new H,fp=new H,hp=new Gr,Il=new H(1,0,0),Dl=new H(0,1,0),Ol=new H(0,0,1),pp={type:"added"},mp={type:"removed"};class Bt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new Ro,i=new Gr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new tt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Yr,Is,this.up):Jn.lookAt(Is,Yr,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Jn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),_=a(e.animations),M=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new H,Qn=new H,ca=new H,ei=new H,cr=new H,lr=new H,Ul=new H,la=new H,ua=new H,da=new H;let Ds=!1;class In{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pn.subVectors(r,t),Qn.subVectors(i,t),ca.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(Qn),c=Pn.dot(ca),l=Qn.dot(Qn),u=Qn.dot(ca),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,_=(l*c-o*u)*p,M=(a*u-o*c)*p;return s.set(1-_-M,M,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,i,r,s,a,o,c){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),Qn.subVectors(e,t),Pn.cross(Qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;cr.subVectors(r,i),lr.subVectors(s,i),la.subVectors(e,i);const c=cr.dot(la),l=lr.dot(la);if(c<=0&&l<=0)return t.copy(i);ua.subVectors(e,r);const u=cr.dot(ua),f=lr.dot(ua);if(u>=0&&f<=u)return t.copy(r);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(cr,a);da.subVectors(e,s);const _=cr.dot(da),M=lr.dot(da);if(M>=0&&_<=M)return t.copy(s);const x=_*l-c*M;if(x<=0&&l>=0&&M<=0)return o=l/(l-M),t.copy(i).addScaledVector(lr,o);const v=u*M-_*f;if(v<=0&&f-u>=0&&_-M>=0)return Ul.subVectors(s,r),o=(f-u)/(f-u+(_-M)),t.copy(r).addScaledVector(Ul,o);const h=1/(v+x+p);return a=x*h,o=p*h,t.copy(i).addScaledVector(cr,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Os={h:0,s:0,l:0};function fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=lc(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fa(a,s,e+1/3),this.g=fa(a,s,e),this.b=fa(a,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return vt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(cn(Zt.r*255,0,255))*65536+Math.round(cn(Zt.g*255,0,255))*256+Math.round(cn(Zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Nt){vt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Os);const i=ts(_i.h,Os.h,t),r=ts(_i.s,Os.s,t),s=ts(_i.l,Os.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new He;He.NAMES=xd;let gp=0;class Vr extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Ar,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dr extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new H,Us=new lt;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=El,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class Md extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _p=0;const Mn=new Pt,ha=new Bt,ur=new H,pn=new er,jr=new er,Ht=new H;class Pi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?Ed:Md)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(pn.min,jr.min),pn.expandByPoint(Ht),Ht.addVectors(pn.max,jr.max),pn.expandByPoint(Ht)):(pn.expandByPoint(jr.min),pn.expandByPoint(jr.max))}pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(ur.fromBufferAttribute(e,l),Ht.add(ur)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let C=0;C<o;C++)l[C]=new H,u[C]=new H;const f=new H,p=new H,_=new H,M=new lt,x=new lt,v=new lt,h=new H,R=new H;function A(C,$,Y){f.fromArray(r,C*3),p.fromArray(r,$*3),_.fromArray(r,Y*3),M.fromArray(a,C*2),x.fromArray(a,$*2),v.fromArray(a,Y*2),p.sub(f),_.sub(f),x.sub(M),v.sub(M);const ae=1/(x.x*v.y-v.x*x.y);isFinite(ae)&&(h.copy(p).multiplyScalar(v.y).addScaledVector(_,-x.y).multiplyScalar(ae),R.copy(_).multiplyScalar(x.x).addScaledVector(p,-v.x).multiplyScalar(ae),l[C].add(h),l[$].add(h),l[Y].add(h),u[C].add(R),u[$].add(R),u[Y].add(R))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let C=0,$=P.length;C<$;++C){const Y=P[C],ae=Y.start,U=Y.count;for(let W=ae,K=ae+U;W<K;W+=3)A(i[W+0],i[W+1],i[W+2])}const B=new H,L=new H,w=new H,J=new H;function T(C){w.fromArray(s,C*3),J.copy(w);const $=l[C];B.copy($),B.sub(w.multiplyScalar(w.dot($))).normalize(),L.crossVectors(J,$);const ae=L.dot(u[C])<0?-1:1;c[C*4]=B.x,c[C*4+1]=B.y,c[C*4+2]=B.z,c[C*4+3]=ae}for(let C=0,$=P.length;C<$;++C){const Y=P[C],ae=Y.start,U=Y.count;for(let W=ae,K=ae+U;W<K;W+=3)T(i[W+0]),T(i[W+1]),T(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,f=new H;if(e)for(let p=0,_=e.count;p<_;p+=3){const M=e.getX(p+0),x=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,v),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),o.add(u),c.add(u),l.add(u),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,_=t.count;p<_;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,p=new l.constructor(c.length*u);let _=0,M=0;for(let x=0,v=c.length;x<v;x++){o.isInterleavedBufferAttribute?_=c[x]*o.data.stride+o.offset:_=c[x]*u;for(let h=0;h<u;h++)p[M++]=l[_++]}return new Un(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const p=l[u],_=e(p,i);c.push(_)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const _=l[f];u.push(_.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let p=0,_=f.length;p<_;p++)u.push(f[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Pt,Oi=new cp,Ns=new gs,Fl=new H,dr=new H,fr=new H,hr=new H,pa=new H,Fs=new H,Bs=new lt,ks=new lt,zs=new lt,Bl=new H,kl=new H,zl=new H,Hs=new H,Gs=new H;class Ge extends Bt{constructor(e=new Pi,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(pa.fromBufferAttribute(f,e),a?Fs.addScaledVector(pa,u):Fs.addScaledVector(pa.sub(t),u))}t.add(Fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Ns.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ns,Fl)===null||Oi.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Nl.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,p=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,x=p.length;M<x;M++){const v=p[M],h=a[v.materialIndex],R=Math.max(v.start,_.start),A=Math.min(o.count,Math.min(v.start+v.count,_.start+_.count));for(let P=R,B=A;P<B;P+=3){const L=o.getX(P),w=o.getX(P+1),J=o.getX(P+2);r=Vs(this,h,e,i,l,u,f,L,w,J),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let v=M,h=x;v<h;v+=3){const R=o.getX(v),A=o.getX(v+1),P=o.getX(v+2);r=Vs(this,a,e,i,l,u,f,R,A,P),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,x=p.length;M<x;M++){const v=p[M],h=a[v.materialIndex],R=Math.max(v.start,_.start),A=Math.min(c.count,Math.min(v.start+v.count,_.start+_.count));for(let P=R,B=A;P<B;P+=3){const L=P,w=P+1,J=P+2;r=Vs(this,h,e,i,l,u,f,L,w,J),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),x=Math.min(c.count,_.start+_.count);for(let v=M,h=x;v<h;v+=3){const R=v,A=v+1,P=v+2;r=Vs(this,a,e,i,l,u,f,R,A,P),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function vp(n,e,t,i,r,s,a,o){let c;if(e.side===nn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===_n,o),c===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gs);return l<t.near||l>t.far?null:{distance:l,point:Gs.clone(),object:n}}function Vs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,dr),n.getVertexPosition(c,fr),n.getVertexPosition(l,hr);const u=vp(n,e,t,i,dr,fr,hr,Hs);if(u){r&&(Bs.fromBufferAttribute(r,o),ks.fromBufferAttribute(r,c),zs.fromBufferAttribute(r,l),u.uv=In.getInterpolation(Hs,dr,fr,hr,Bs,ks,zs,new lt)),s&&(Bs.fromBufferAttribute(s,o),ks.fromBufferAttribute(s,c),zs.fromBufferAttribute(s,l),u.uv1=In.getInterpolation(Hs,dr,fr,hr,Bs,ks,zs,new lt),u.uv2=u.uv1),a&&(Bl.fromBufferAttribute(a,o),kl.fromBufferAttribute(a,c),zl.fromBufferAttribute(a,l),u.normal=In.getInterpolation(Hs,dr,fr,hr,Bl,kl,zl,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};In.getNormal(dr,fr,hr,f.normal),u.face=f}return u}class oi extends Pi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let p=0,_=0;M("z","y","x",-1,-1,i,t,e,a,s,0),M("z","y","x",1,-1,i,t,-e,a,s,1),M("x","z","y",1,1,e,i,t,r,a,2),M("x","z","y",1,-1,e,i,-t,r,a,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(f,2));function M(x,v,h,R,A,P,B,L,w,J,T){const C=P/w,$=B/J,Y=P/2,ae=B/2,U=L/2,W=w+1,K=J+1;let Q=0,te=0;const ne=new H;for(let ie=0;ie<K;ie++){const de=ie*$-ae;for(let he=0;he<W;he++){const j=he*C-Y;ne[x]=j*R,ne[v]=de*A,ne[h]=U,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[v]=0,ne[h]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(he/w),f.push(1-ie/J),Q+=1}}for(let ie=0;ie<J;ie++)for(let de=0;de<w;de++){const he=p+de+W*ie,j=p+de+W*(ie+1),se=p+(de+1)+W*(ie+1),Me=p+(de+1)+W*ie;c.push(he,j,Me),c.push(j,se,Me),te+=6}o.addGroup(_,te,T),_+=te,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Or(n[t]);for(const r in i)e[r]=i[r]}return e}function xp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yd(n){return n.getRenderTarget()===null?n.outputColorSpace:vt.workingColorSpace}const Mp={clone:Or,merge:on};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sd extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends Sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class Sp extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new Sn(pr,mr,e,t);s.layers=this.layers,this.add(s);const a=new Sn(pr,mr,e,t);a.layers=this.layers,this.add(a);const o=new Sn(pr,mr,e,t);o.layers=this.layers,this.add(o);const c=new Sn(pr,mr,e,t);c.layers=this.layers,this.add(c);const l=new Sn(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,p,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Td extends fn{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?Nt:Tn),this.texture=new Td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oi(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ti});s.uniforms.tEquirect.value=t;const a=new Ge(r,s),o=t.minFilter;return t.minFilter===en&&(t.minFilter=bt),new Sp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ma=new H,Ap=new H,wp=new tt;class ki{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ma.subVectors(i,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wp.getNormalMatrix(e),r=this.coplanarPoint(ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new gs,Ws=new H;class uc{constructor(e=new ki,t=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],p=r[7],_=r[8],M=r[9],x=r[10],v=r[11],h=r[12],R=r[13],A=r[14],P=r[15];if(i[0].setComponents(c-s,p-l,v-_,P-h).normalize(),i[1].setComponents(c+s,p+l,v+_,P+h).normalize(),i[2].setComponents(c+a,p+u,v+M,P+R).normalize(),i[3].setComponents(c-a,p-u,v-M,P-R).normalize(),i[4].setComponents(c-o,p-f,v-x,P-A).normalize(),t===ri)i[5].setComponents(c+o,p+f,v+x,P+A).normalize();else if(t===fo)i[5].setComponents(o,f,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ws.x=r.normal.x>0?e.max.x:e.min.x,Ws.y=r.normal.y>0?e.max.y:e.min.y,Ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,p=l.usage,_=f.byteLength,M=n.createBuffer();n.bindBuffer(u,M),n.bufferData(u,f,p),l.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:M,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:_}}function s(l,u,f){const p=u.array,_=u._updateRange,M=u.updateRanges;if(n.bindBuffer(f,l),_.count===-1&&M.length===0&&n.bufferSubData(f,0,p),M.length!==0){for(let x=0,v=M.length;x<v;x++){const h=M[x];t?n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}_.count!==-1&&(t?n.bufferSubData(f,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count):n.bufferSubData(f,_.offset*p.BYTES_PER_ELEMENT,p.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,r(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,u),f.version=l.version}}return{get:a,remove:o,update:c}}class ai extends Pi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,p=t/c,_=[],M=[],x=[],v=[];for(let h=0;h<u;h++){const R=h*p-a;for(let A=0;A<l;A++){const P=A*f-s;M.push(P,-R,0),x.push(0,0,1),v.push(A/o),v.push(1-h/c)}}for(let h=0;h<c;h++)for(let R=0;R<o;R++){const A=R+l*h,P=R+l*(h+1),B=R+1+l*(h+1),L=R+1+l*h;_.push(A,P,L),_.push(P,B,L)}this.setIndex(_),this.setAttribute("position",new Yn(M,3)),this.setAttribute("normal",new Yn(x,3)),this.setAttribute("uv",new Yn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`
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
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,r_=`uniform vec3 color;
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
}`,s_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Ip,alphatest_pars_fragment:Dp,aomap_fragment:Op,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:Fp,begin_vertex:Bp,beginnormal_vertex:kp,bsdfs:zp,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:jp,color_vertex:Kp,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:rm,colorspace_pars_fragment:sm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:cm,envmap_pars_vertex:lm,envmap_physical_pars_fragment:Em,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:hm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:vm,lights_lambert_pars_fragment:xm,lights_pars_begin:Mm,lights_toon_fragment:ym,lights_toon_pars_fragment:Sm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:wm,lights_physical_pars_fragment:bm,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Om,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Bm,metalnessmap_fragment:km,metalnessmap_pars_fragment:zm,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Wm,normal_fragment_begin:$m,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:eg,opaque_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:rg,dithering_fragment:sg,dithering_pars_fragment:og,roughnessmap_fragment:ag,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:ug,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:hg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:_g,specularmap_pars_fragment:vg,tonemapping_fragment:xg,tonemapping_pars_fragment:Mg,transmission_fragment:Eg,transmission_pars_fragment:yg,uv_pars_fragment:Sg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:wg,background_vert:bg,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Pg,cube_vert:Lg,cube_frag:Ig,depth_vert:Dg,depth_frag:Og,distanceRGBA_vert:Ug,distanceRGBA_frag:Ng,equirect_vert:Fg,equirect_frag:Bg,linedashed_vert:kg,linedashed_frag:zg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Vg,meshlambert_frag:Wg,meshmatcap_vert:$g,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:jg,meshphong_frag:Kg,meshphysical_vert:Zg,meshphysical_frag:Jg,meshtoon_vert:Qg,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:r_,sprite_vert:s_,sprite_frag:o_},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:on([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:on([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:on([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:on([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:on([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:on([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:on([ge.common,ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:on([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const $s={r:0,b:0,g:0};function a_(n,e,t,i,r,s,a){const o=new He(0);let c=s===!0?0:1,l,u,f=null,p=0,_=null;function M(v,h){let R=!1,A=h.isScene===!0?h.background:null;A&&A.isTexture&&(A=(h.backgroundBlurriness>0?t:e).get(A)),A===null?x(o,c):A&&A.isColor&&(x(A,1),R=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||R)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===wo)?(u===void 0&&(u=new Ge(new oi(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Or(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=vt.getTransfer(A.colorSpace)!==At,(f!==A||p!==A.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,p=A.version,_=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ge(new ai(2,2),new ji({name:"BackgroundMaterial",uniforms:Or(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=vt.getTransfer(A.colorSpace)!==At,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||_!==n.toneMapping)&&(l.material.needsUpdate=!0,f=A,p=A.version,_=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function x(v,h){v.getRGB($s,yd(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(v,h=1){o.set(v),c=h,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,x(o,c)},render:M}}function c_(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=v(null);let l=c,u=!1;function f(U,W,K,Q,te){let ne=!1;if(a){const ie=x(Q,K,W);l!==ie&&(l=ie,_(l.object)),ne=h(U,Q,K,te),ne&&R(U,Q,K,te)}else{const ie=W.wireframe===!0;(l.geometry!==Q.id||l.program!==K.id||l.wireframe!==ie)&&(l.geometry=Q.id,l.program=K.id,l.wireframe=ie,ne=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,J(U,W,K,Q),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function _(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function M(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function x(U,W,K){const Q=K.wireframe===!0;let te=o[U.id];te===void 0&&(te={},o[U.id]=te);let ne=te[W.id];ne===void 0&&(ne={},te[W.id]=ne);let ie=ne[Q];return ie===void 0&&(ie=v(p()),ne[Q]=ie),ie}function v(U){const W=[],K=[],Q=[];for(let te=0;te<r;te++)W[te]=0,K[te]=0,Q[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:Q,object:U,attributes:{},index:null}}function h(U,W,K,Q){const te=l.attributes,ne=W.attributes;let ie=0;const de=K.getAttributes();for(const he in de)if(de[he].location>=0){const se=te[he];let Me=ne[he];if(Me===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor)),se===void 0||se.attribute!==Me||Me&&se.data!==Me.data)return!0;ie++}return l.attributesNum!==ie||l.index!==Q}function R(U,W,K,Q){const te={},ne=W.attributes;let ie=0;const de=K.getAttributes();for(const he in de)if(de[he].location>=0){let se=ne[he];se===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));const Me={};Me.attribute=se,se&&se.data&&(Me.data=se.data),te[he]=Me,ie++}l.attributes=te,l.attributesNum=ie,l.index=Q}function A(){const U=l.newAttributes;for(let W=0,K=U.length;W<K;W++)U[W]=0}function P(U){B(U,0)}function B(U,W){const K=l.newAttributes,Q=l.enabledAttributes,te=l.attributeDivisors;K[U]=1,Q[U]===0&&(n.enableVertexAttribArray(U),Q[U]=1),te[U]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,W),te[U]=W)}function L(){const U=l.newAttributes,W=l.enabledAttributes;for(let K=0,Q=W.length;K<Q;K++)W[K]!==U[K]&&(n.disableVertexAttribArray(K),W[K]=0)}function w(U,W,K,Q,te,ne,ie){ie===!0?n.vertexAttribIPointer(U,W,K,te,ne):n.vertexAttribPointer(U,W,K,Q,te,ne)}function J(U,W,K,Q){if(i.isWebGL2===!1&&(U.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const te=Q.attributes,ne=K.getAttributes(),ie=W.defaultAttributeValues;for(const de in ne){const he=ne[de];if(he.location>=0){let j=te[de];if(j===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){const se=j.normalized,Me=j.itemSize,we=t.get(j);if(we===void 0)continue;const Ie=we.buffer,Xe=we.type,qe=we.bytesPerElement,Be=i.isWebGL2===!0&&(Xe===n.INT||Xe===n.UNSIGNED_INT||j.gpuType===sd);if(j.isInterleavedBufferAttribute){const it=j.data,V=it.stride,ft=j.offset;if(it.isInstancedInterleavedBuffer){for(let Ue=0;Ue<he.locationSize;Ue++)B(he.location+Ue,it.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ue=0;Ue<he.locationSize;Ue++)P(he.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ue=0;Ue<he.locationSize;Ue++)w(he.location+Ue,Me/he.locationSize,Xe,se,V*qe,(ft+Me/he.locationSize*Ue)*qe,Be)}else{if(j.isInstancedBufferAttribute){for(let it=0;it<he.locationSize;it++)B(he.location+it,j.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let it=0;it<he.locationSize;it++)P(he.location+it);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let it=0;it<he.locationSize;it++)w(he.location+it,Me/he.locationSize,Xe,se,Me*qe,Me/he.locationSize*it*qe,Be)}}else if(ie!==void 0){const se=ie[de];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(he.location,se);break;case 3:n.vertexAttrib3fv(he.location,se);break;case 4:n.vertexAttrib4fv(he.location,se);break;default:n.vertexAttrib1fv(he.location,se)}}}}L()}function T(){Y();for(const U in o){const W=o[U];for(const K in W){const Q=W[K];for(const te in Q)M(Q[te].object),delete Q[te];delete W[K]}delete o[U]}}function C(U){if(o[U.id]===void 0)return;const W=o[U.id];for(const K in W){const Q=W[K];for(const te in Q)M(Q[te].object),delete Q[te];delete W[K]}delete o[U.id]}function $(U){for(const W in o){const K=o[W];if(K[U.id]===void 0)continue;const Q=K[U.id];for(const te in Q)M(Q[te].object),delete Q[te];delete K[U.id]}}function Y(){ae(),u=!0,l!==c&&(l=c,_(l.object))}function ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:ae,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:$,initAttributes:A,enableAttribute:P,disableUnusedAttributes:L}}function l_(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,p){if(p===0)return;let _,M;if(r)_=n,M="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[M](s,u,f,p),t.update(f,s,p)}function l(u,f,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<p;M++)this.render(u[M],f[M]);else{_.multiDrawArraysWEBGL(s,u,0,f,0,p);let M=0;for(let x=0;x<p;x++)M+=f[x];t.update(M,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function u_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,P=a||e.has("OES_texture_float"),B=A&&P,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:v,maxVaryings:h,maxFragmentUniforms:R,vertexTextures:A,floatFragmentTextures:P,floatVertexTextures:B,maxSamples:L}}function d_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ki,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const _=f.length!==0||p||i!==0||r;return r=p,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,_){const M=f.clippingPlanes,x=f.clipIntersection,v=f.clipShadows,h=n.get(f);if(!r||M===null||M.length===0||s&&!v)s?u(null):l();else{const R=s?0:i,A=R*4;let P=h.clippingState||null;c.value=P,P=u(M,p,A,_);for(let B=0;B!==A;++B)P[B]=t[B];h.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,p,_,M){const x=f!==null?f.length:0;let v=null;if(x!==0){if(v=c.value,M!==!0||v===null){const h=_+x*4,R=p.matrixWorldInverse;o.getNormalMatrix(R),(v===null||v.length<h)&&(v=new Float32Array(h));for(let A=0,P=_;A!==x;++A,P+=4)a.copy(f[A]).applyMatrix4(R,o),a.normal.toArray(v,P),v[P+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function f_(n){let e=new WeakMap;function t(a,o){return o===Da?a.mapping=Pr:o===Oa&&(a.mapping=Lr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Da||o===Oa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Tp(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wd extends Sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,Hl=[.125,.215,.35,.446,.526,.582],Gi=20,ga=new wd,Gl=new He;let _a=null,va=0,xa=0;const zi=(1+Math.sqrt(5))/2,gr=1/zi,Vl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,zi,gr),new H(0,zi,-gr),new H(gr,0,zi),new H(-gr,0,zi),new H(zi,gr,0),new H(-zi,gr,0)];class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,va,xa),e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:us,format:On,colorSpace:si,depthBuffer:!1},r=$l(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(s)),this._blurMaterial=p_(s,e,t)}return r}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,r){const o=new Sn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Gl),u.toneMapping=Ai,u.autoClear=!1;const _=new Dr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),M=new Ge(new oi,_);let x=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,x=!0):(_.color.copy(Gl),x=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):R===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const A=this._cubeSize;Xs(r,R*A,h>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(M,o),u.render(e,o)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Xs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vl[(r-1)%Vl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ge(this._lodPlanes[r],l),p=l.uniforms,_=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Gi-1),x=s/M,v=isFinite(s)?1+Math.floor(u*x):Gi;v>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Gi}`);const h=[];let R=0;for(let w=0;w<Gi;++w){const J=w/x,T=Math.exp(-J*J/2);h.push(T),w===0?R+=T:w<v&&(R+=2*T)}for(let w=0;w<h.length;w++)h[w]=h[w]/R;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:A}=this;p.dTheta.value=M,p.mipInt.value=A-i;const P=this._sizeLods[r],B=3*P*(r>A-yr?r-A+yr:0),L=4*(this._cubeSize-P);Xs(t,B,L,3*P,2*P),c.setRenderTarget(t),c.render(f,ga)}}function h_(n){const e=[],t=[],i=[];let r=n;const s=n-yr+1+Hl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-yr?c=Hl[a-n+yr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,M=6,x=3,v=2,h=1,R=new Float32Array(x*M*_),A=new Float32Array(v*M*_),P=new Float32Array(h*M*_);for(let L=0;L<_;L++){const w=L%3*2/3-1,J=L>2?0:-1,T=[w,J,0,w+2/3,J,0,w+2/3,J+1,0,w,J,0,w+2/3,J+1,0,w,J+1,0];R.set(T,x*M*L),A.set(p,v*M*L);const C=[L,L,L,L,L,L];P.set(C,h*M*L)}const B=new Pi;B.setAttribute("position",new Un(R,x)),B.setAttribute("uv",new Un(A,v)),B.setAttribute("faceIndex",new Un(P,h)),e.push(B),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $l(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function p_(n,e,t){const i=new Float32Array(Gi),r=new H(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xl(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ql(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function m_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Da||c===Oa,u=c===Pr||c===Lr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Wl(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Wl(n));const p=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function g_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function __(n,e,t,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);for(const M in p.morphAttributes){const x=p.morphAttributes[M];for(let v=0,h=x.length;v<h;v++)e.remove(x[v])}p.removeEventListener("dispose",a),delete r[p.id];const _=s.get(p);_&&(e.remove(_),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const M in p)e.update(p[M],n.ARRAY_BUFFER);const _=f.morphAttributes;for(const M in _){const x=_[M];for(let v=0,h=x.length;v<h;v++)e.update(x[v],n.ARRAY_BUFFER)}}function l(f){const p=[],_=f.index,M=f.attributes.position;let x=0;if(_!==null){const R=_.array;x=_.version;for(let A=0,P=R.length;A<P;A+=3){const B=R[A+0],L=R[A+1],w=R[A+2];p.push(B,L,L,w,w,B)}}else if(M!==void 0){const R=M.array;x=M.version;for(let A=0,P=R.length/3-1;A<P;A+=3){const B=A+0,L=A+1,w=A+2;p.push(B,L,L,w,w,B)}}else return;const v=new(pd(p)?Ed:Md)(p,1);v.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,v)}function u(f){const p=s.get(f);if(p){const _=f.index;_!==null&&p.version<_.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function v_(n,e,t,i){const r=i.isWebGL2;let s;function a(_){s=_}let o,c;function l(_){o=_.type,c=_.bytesPerElement}function u(_,M){n.drawElements(s,M,o,_*c),t.update(M,s,1)}function f(_,M,x){if(x===0)return;let v,h;if(r)v=n,h="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[h](s,M,o,_*c,x),t.update(M,s,x)}function p(_,M,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let h=0;h<x;h++)this.render(_[h]/c,M[h]);else{v.multiDrawElementsWEBGL(s,M,0,o,_,0,x);let h=0;for(let R=0;R<x;R++)h+=M[R];t.update(h,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function x_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M_(n,e){return n[0]-e[0]}function E_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function y_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Wt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const M=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=M!==void 0?M.length:0;let v=s.get(u);if(v===void 0||v.count!==x){let W=function(){ae.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var _=W;v!==void 0&&v.texture.dispose();const A=u.morphAttributes.position!==void 0,P=u.morphAttributes.normal!==void 0,B=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],J=u.morphAttributes.color||[];let T=0;A===!0&&(T=1),P===!0&&(T=2),B===!0&&(T=3);let C=u.attributes.position.count*T,$=1;C>e.maxTextureSize&&($=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Y=new Float32Array(C*$*4*x),ae=new _d(Y,C,$,x);ae.type=yi,ae.needsUpdate=!0;const U=T*4;for(let K=0;K<x;K++){const Q=L[K],te=w[K],ne=J[K],ie=C*$*4*K;for(let de=0;de<Q.count;de++){const he=de*U;A===!0&&(a.fromBufferAttribute(Q,de),Y[ie+he+0]=a.x,Y[ie+he+1]=a.y,Y[ie+he+2]=a.z,Y[ie+he+3]=0),P===!0&&(a.fromBufferAttribute(te,de),Y[ie+he+4]=a.x,Y[ie+he+5]=a.y,Y[ie+he+6]=a.z,Y[ie+he+7]=0),B===!0&&(a.fromBufferAttribute(ne,de),Y[ie+he+8]=a.x,Y[ie+he+9]=a.y,Y[ie+he+10]=a.z,Y[ie+he+11]=ne.itemSize===4?a.w:1)}}v={count:x,texture:ae,size:new lt(C,$)},s.set(u,v),u.addEventListener("dispose",W)}let h=0;for(let A=0;A<p.length;A++)h+=p[A];const R=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",R),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const M=p===void 0?0:p.length;let x=i[u.id];if(x===void 0||x.length!==M){x=[];for(let P=0;P<M;P++)x[P]=[P,0];i[u.id]=x}for(let P=0;P<M;P++){const B=x[P];B[0]=P,B[1]=p[P]}x.sort(E_);for(let P=0;P<8;P++)P<M&&x[P][1]?(o[P][0]=x[P][0],o[P][1]=x[P][1]):(o[P][0]=Number.MAX_SAFE_INTEGER,o[P][1]=0);o.sort(M_);const v=u.morphAttributes.position,h=u.morphAttributes.normal;let R=0;for(let P=0;P<8;P++){const B=o[P],L=B[0],w=B[1];L!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+P)!==v[L]&&u.setAttribute("morphTarget"+P,v[L]),h&&u.getAttribute("morphNormal"+P)!==h[L]&&u.setAttribute("morphNormal"+P,h[L]),r[P]=w,R+=w):(v&&u.hasAttribute("morphTarget"+P)===!0&&u.deleteAttribute("morphTarget"+P),h&&u.hasAttribute("morphNormal"+P)===!0&&u.deleteAttribute("morphNormal"+P),r[P]=0)}const A=u.morphTargetsRelative?1:1-R;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function S_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class bd extends fn{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Wi,u!==Wi&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wi&&(i=Ei),i===void 0&&u===Ir&&(i=Vi),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rd=new fn,Cd=new bd(1,1);Cd.compareFunction=hd;const Pd=new _d,Ld=new op,Id=new Td,Yl=[],jl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function Wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yl[r];if(s===void 0&&(s=new Float32Array(r),Yl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Co(n,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function R_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),zt(t,i)}}function C_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Zl.set(i),n.uniformMatrix3fv(this.addr,!1,Zl),zt(t,i)}}function P_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Kl.set(i),n.uniformMatrix4fv(this.addr,!1,Kl),zt(t,i)}}function L_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function U_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function k_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Cd:Rd;t.setTexture2D(e||s,r)}function z_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function H_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Id,r)}function G_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function V_(n){switch(n){case 5126:return T_;case 35664:return A_;case 35665:return w_;case 35666:return b_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return I_;case 35668:case 35672:return D_;case 35669:case 35673:return O_;case 5125:return U_;case 36294:return N_;case 36295:return F_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return G_}}function W_(n,e){n.uniform1fv(this.addr,e)}function $_(n,e){const t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function X_(n,e){const t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function q_(n,e){const t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Y_(n,e){const t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function j_(n,e){const t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function K_(n,e){const t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z_(n,e){n.uniform1iv(this.addr,e)}function J_(n,e){n.uniform2iv(this.addr,e)}function Q_(n,e){n.uniform3iv(this.addr,e)}function e0(n,e){n.uniform4iv(this.addr,e)}function t0(n,e){n.uniform1uiv(this.addr,e)}function n0(n,e){n.uniform2uiv(this.addr,e)}function i0(n,e){n.uniform3uiv(this.addr,e)}function r0(n,e){n.uniform4uiv(this.addr,e)}function s0(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Rd,s[a])}function o0(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ld,s[a])}function a0(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Id,s[a])}function c0(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pd,s[a])}function l0(n){switch(n){case 5126:return W_;case 35664:return $_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return j_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return c0}}class u0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V_(t.type)}}class d0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l0(t.type)}}class f0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Ql(n,e){n.seq.push(e),n.map[e.id]=e}function h0(n,e,t){const i=n.name,r=i.length;for(Ma.lastIndex=0;;){const s=Ma.exec(i),a=Ma.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ql(t,l===void 0?new u0(o,n,e):new d0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new f0(o),Ql(t,f)),t=f}}}class eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);h0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const p0=37297;let m0=0;function g0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function _0(n){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(n);let i;switch(e===t?i="":e===uo&&t===lo?i="LinearDisplayP3ToLinearSRGB":e===lo&&t===uo&&(i="LinearSRGBToLinearDisplayP3"),n){case si:case bo:return[i,"LinearTransferOETF"];case Nt:case ac:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function tu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+g0(n.getShaderSource(e),a)}else return r}function v0(n,e){const t=_0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x0(n,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case _h:t="OptimizedCineon";break;case vh:t="ACESFilmic";break;case Mh:t="AgX";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sr).join(`
`)}function y0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sr(n){return n!==""}function nu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(T0,w0)}const A0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w0(n,e){let t=et[e];if(t===void 0){const i=A0.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(n){return n.replace(b0,R0)}function R0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function su(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===id?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function I0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rc:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case ph:e="ENVMAP_BLENDING_ADD";break}return e}function D0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function O0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=C0(t),l=P0(t),u=L0(t),f=I0(t),p=D0(t),_=t.isWebGL2?"":M0(t),M=E0(t),x=y0(s),v=r.createProgram();let h,R,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Sr).join(`
`),h.length>0&&(h+=`
`),R=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Sr).join(`
`),R.length>0&&(R+=`
`)):(h=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),R=[_,su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?et.tonemapping_pars_fragment:"",t.toneMapping!==Ai?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,v0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Ba(a),a=nu(a,t),a=iu(a,t),o=Ba(o),o=nu(o,t),o=iu(o,t),a=ru(a),o=ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,h=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const P=A+h+a,B=A+R+o,L=eu(r,r.VERTEX_SHADER,P),w=eu(r,r.FRAGMENT_SHADER,B);r.attachShader(v,L),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function J(Y){if(n.debug.checkShaderErrors){const ae=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(w).trim();let K=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,L,w);else{const te=tu(r,L,"vertex"),ne=tu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+te+`
`+ne)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(U===""||W==="")&&(Q=!1);Q&&(Y.diagnostics={runnable:K,programLog:ae,vertexShader:{log:U,prefix:h},fragmentShader:{log:W,prefix:R}})}r.deleteShader(L),r.deleteShader(w),T=new eo(r,v),C=S0(r,v)}let T;this.getUniforms=function(){return T===void 0&&J(this),T};let C;this.getAttributes=function(){return C===void 0&&J(this),C};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=r.getProgramParameter(v,p0)),$},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=w,this}let U0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new F0(e),t.set(e,i)),i}}class F0{constructor(e){this.id=U0++,this.code=e,this.usedTimes=0}}function B0(n,e,t,i,r,s,a){const o=new vd,c=new N0,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function v(T,C,$,Y,ae){const U=Y.fog,W=ae.geometry,K=T.isMeshStandardMaterial?Y.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),te=Q&&Q.mapping===wo?Q.image.height:null,ne=M[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=ie!==void 0?ie.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let j,se,Me,we;if(ne){const $t=Gn[ne];j=$t.vertexShader,se=$t.fragmentShader}else j=T.vertexShader,se=T.fragmentShader,c.update(T),Me=c.getVertexShaderID(T),we=c.getFragmentShaderID(T);const Ie=n.getRenderTarget(),Xe=ae.isInstancedMesh===!0,qe=ae.isBatchedMesh===!0,Be=!!T.map,it=!!T.matcap,V=!!Q,ft=!!T.aoMap,Ue=!!T.lightMap,$e=!!T.bumpMap,be=!!T.normalMap,pt=!!T.displacementMap,je=!!T.emissiveMap,b=!!T.metalnessMap,S=!!T.roughnessMap,G=T.anisotropy>0,le=T.clearcoat>0,ce=T.iridescence>0,ue=T.sheen>0,Ce=T.transmission>0,_e=G&&!!T.anisotropyMap,Se=le&&!!T.clearcoatMap,ke=le&&!!T.clearcoatNormalMap,Ye=le&&!!T.clearcoatRoughnessMap,re=ce&&!!T.iridescenceMap,ht=ce&&!!T.iridescenceThicknessMap,Qe=ue&&!!T.sheenColorMap,We=ue&&!!T.sheenRoughnessMap,Re=!!T.specularMap,Te=!!T.specularColorMap,Ke=!!T.specularIntensityMap,ot=Ce&&!!T.transmissionMap,St=Ce&&!!T.thicknessMap,Ze=!!T.gradientMap,fe=!!T.alphaMap,D=T.alphaTest>0,xe=!!T.alphaHash,ve=!!T.extensions,ze=!!W.attributes.uv1,Fe=!!W.attributes.uv2,gt=!!W.attributes.uv3;let _t=Ai;return T.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(_t=n.toneMapping),{isWebGL2:u,shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:se,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:we,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:qe,instancing:Xe,instancingColor:Xe&&ae.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:si,map:Be,matcap:it,envMap:V,envMapMode:V&&Q.mapping,envMapCubeUVHeight:te,aoMap:ft,lightMap:Ue,bumpMap:$e,normalMap:be,displacementMap:p&&pt,emissiveMap:je,normalMapObjectSpace:be&&T.normalMapType===Ih,normalMapTangentSpace:be&&T.normalMapType===oc,metalnessMap:b,roughnessMap:S,anisotropy:G,anisotropyMap:_e,clearcoat:le,clearcoatMap:Se,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ye,iridescence:ce,iridescenceMap:re,iridescenceThicknessMap:ht,sheen:ue,sheenColorMap:Qe,sheenRoughnessMap:We,specularMap:Re,specularColorMap:Te,specularIntensityMap:Ke,transmission:Ce,transmissionMap:ot,thicknessMap:St,gradientMap:Ze,opaque:T.transparent===!1&&T.blending===Ar,alphaMap:fe,alphaTest:D,alphaHash:xe,combine:T.combine,mapUv:Be&&x(T.map.channel),aoMapUv:ft&&x(T.aoMap.channel),lightMapUv:Ue&&x(T.lightMap.channel),bumpMapUv:$e&&x(T.bumpMap.channel),normalMapUv:be&&x(T.normalMap.channel),displacementMapUv:pt&&x(T.displacementMap.channel),emissiveMapUv:je&&x(T.emissiveMap.channel),metalnessMapUv:b&&x(T.metalnessMap.channel),roughnessMapUv:S&&x(T.roughnessMap.channel),anisotropyMapUv:_e&&x(T.anisotropyMap.channel),clearcoatMapUv:Se&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(T.sheenRoughnessMap.channel),specularMapUv:Re&&x(T.specularMap.channel),specularColorMapUv:Te&&x(T.specularColorMap.channel),specularIntensityMapUv:Ke&&x(T.specularIntensityMap.channel),transmissionMapUv:ot&&x(T.transmissionMap.channel),thicknessMapUv:St&&x(T.thicknessMap.channel),alphaMapUv:fe&&x(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(be||G),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Fe,vertexUv3s:gt,pointsUvs:ae.isPoints===!0&&!!W.attributes.uv&&(Be||fe),fog:!!U,useFog:T.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===At,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vt,flipSided:T.side===nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ve&&T.extensions.derivatives===!0,extensionFragDepth:ve&&T.extensions.fragDepth===!0,extensionDrawBuffers:ve&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const $ in T.defines)C.push($),C.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(R(C,T),A(C,T),C.push(n.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function R(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function A(T,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),T.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function P(T){const C=M[T.type];let $;if(C){const Y=Gn[C];$=Mp.clone(Y.uniforms)}else $=T.uniforms;return $}function B(T,C){let $;for(let Y=0,ae=l.length;Y<ae;Y++){const U=l[Y];if(U.cacheKey===C){$=U,++$.usedTimes;break}}return $===void 0&&($=new O0(n,C,T,s),l.push($)),$}function L(T){if(--T.usedTimes===0){const C=l.indexOf(T);l[C]=l[l.length-1],l.pop(),T.destroy()}}function w(T){c.remove(T)}function J(){c.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:P,acquireProgram:B,releaseProgram:L,releaseShaderCache:w,programs:l,dispose:J}}function k0(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function au(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,p,_,M,x,v){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:_,groupOrder:M,renderOrder:f.renderOrder,z:x,group:v},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=_,h.groupOrder=M,h.renderOrder=f.renderOrder,h.z=x,h.group=v),e++,h}function o(f,p,_,M,x,v){const h=a(f,p,_,M,x,v);_.transmission>0?i.push(h):_.transparent===!0?r.push(h):t.push(h)}function c(f,p,_,M,x,v){const h=a(f,p,_,M,x,v);_.transmission>0?i.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,p){t.length>1&&t.sort(f||z0),i.length>1&&i.sort(p||ou),r.length>1&&r.sort(p||ou)}function u(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function H0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new au,n.set(i,[a])):r>=s.length?(a=new au,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new He};break;case"SpotLight":t={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function V0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W0=0;function $0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function X0(n,e){const t=new G0,i=V0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new Pt,o=new Pt;function c(u,f){let p=0,_=0,M=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,v=0,h=0,R=0,A=0,P=0,B=0,L=0,w=0,J=0,T=0;u.sort($0);const C=f===!0?Math.PI:1;for(let Y=0,ae=u.length;Y<ae;Y++){const U=u[Y],W=U.color,K=U.intensity,Q=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=W.r*K*C,_+=W.g*K*C,M+=W.b*K*C;else if(U.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(U.sh.coefficients[ne],K);T++}else if(U.isDirectionalLight){const ne=t.get(U);if(ne.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const ie=U.shadow,de=i.get(U);de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize=ie.mapSize,r.directionalShadow[x]=de,r.directionalShadowMap[x]=te,r.directionalShadowMatrix[x]=U.shadow.matrix,P++}r.directional[x]=ne,x++}else if(U.isSpotLight){const ne=t.get(U);ne.position.setFromMatrixPosition(U.matrixWorld),ne.color.copy(W).multiplyScalar(K*C),ne.distance=Q,ne.coneCos=Math.cos(U.angle),ne.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ne.decay=U.decay,r.spot[h]=ne;const ie=U.shadow;if(U.map&&(r.spotLightMap[w]=U.map,w++,ie.updateMatrices(U),U.castShadow&&J++),r.spotLightMatrix[h]=ie.matrix,U.castShadow){const de=i.get(U);de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize=ie.mapSize,r.spotShadow[h]=de,r.spotShadowMap[h]=te,L++}h++}else if(U.isRectAreaLight){const ne=t.get(U);ne.color.copy(W).multiplyScalar(K),ne.halfWidth.set(U.width*.5,0,0),ne.halfHeight.set(0,U.height*.5,0),r.rectArea[R]=ne,R++}else if(U.isPointLight){const ne=t.get(U);if(ne.color.copy(U.color).multiplyScalar(U.intensity*C),ne.distance=U.distance,ne.decay=U.decay,U.castShadow){const ie=U.shadow,de=i.get(U);de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize=ie.mapSize,de.shadowCameraNear=ie.camera.near,de.shadowCameraFar=ie.camera.far,r.pointShadow[v]=de,r.pointShadowMap[v]=te,r.pointShadowMatrix[v]=U.shadow.matrix,B++}r.point[v]=ne,v++}else if(U.isHemisphereLight){const ne=t.get(U);ne.skyColor.copy(U.color).multiplyScalar(K*C),ne.groundColor.copy(U.groundColor).multiplyScalar(K*C),r.hemi[A]=ne,A++}}R>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=M;const $=r.hash;($.directionalLength!==x||$.pointLength!==v||$.spotLength!==h||$.rectAreaLength!==R||$.hemiLength!==A||$.numDirectionalShadows!==P||$.numPointShadows!==B||$.numSpotShadows!==L||$.numSpotMaps!==w||$.numLightProbes!==T)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=R,r.point.length=v,r.hemi.length=A,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=L+w-J,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=T,$.directionalLength=x,$.pointLength=v,$.spotLength=h,$.rectAreaLength=R,$.hemiLength=A,$.numDirectionalShadows=P,$.numPointShadows=B,$.numSpotShadows=L,$.numSpotMaps=w,$.numLightProbes=T,r.version=W0++)}function l(u,f){let p=0,_=0,M=0,x=0,v=0;const h=f.matrixWorldInverse;for(let R=0,A=u.length;R<A;R++){const P=u[R];if(P.isDirectionalLight){const B=r.directional[p];B.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),B.direction.sub(s),B.direction.transformDirection(h),p++}else if(P.isSpotLight){const B=r.spot[M];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(h),B.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),B.direction.sub(s),B.direction.transformDirection(h),M++}else if(P.isRectAreaLight){const B=r.rectArea[x];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(h),o.identity(),a.copy(P.matrixWorld),a.premultiply(h),o.extractRotation(a),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),B.halfWidth.applyMatrix4(o),B.halfHeight.applyMatrix4(o),x++}else if(P.isPointLight){const B=r.point[_];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(h),_++}else if(P.isHemisphereLight){const B=r.hemi[v];B.direction.setFromMatrixPosition(P.matrixWorld),B.direction.transformDirection(h),v++}}}return{setup:c,setupView:l,state:r}}function cu(n,e){const t=new X0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function q0(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new cu(n,e),t.set(s,[c])):a>=o.length?(c=new cu(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Y0 extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j0 extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function J0(n,e,t){let i=new uc;const r=new lt,s=new lt,a=new Wt,o=new Y0({depthPacking:Lh}),c=new j0,l={},u=t.maxTextureSize,f={[_n]:nn,[nn]:_n,[Vt]:Vt},p=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const M=new Pi;M.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ge(M,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let h=this.type;this.render=function(L,w,J){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),C=n.getActiveCubeFace(),$=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Ti),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ae=h!==ni&&this.type===ni,U=h===ni&&this.type!==ni;for(let W=0,K=L.length;W<K;W++){const Q=L[W],te=Q.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const ne=te.getFrameExtents();if(r.multiply(ne),s.copy(te.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,te.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,te.mapSize.y=s.y)),te.map===null||ae===!0||U===!0){const de=this.type!==ni?{minFilter:Dt,magFilter:Dt}:{};te.map!==null&&te.map.dispose(),te.map=new Yi(r.x,r.y,de),te.map.texture.name=Q.name+".shadowMap",te.camera.updateProjectionMatrix()}n.setRenderTarget(te.map),n.clear();const ie=te.getViewportCount();for(let de=0;de<ie;de++){const he=te.getViewport(de);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),Y.viewport(a),te.updateMatrices(Q,de),i=te.getFrustum(),P(w,J,te.camera,Q,this.type)}te.isPointLightShadow!==!0&&this.type===ni&&R(te,J),te.needsUpdate=!1}h=this.type,v.needsUpdate=!1,n.setRenderTarget(T,C,$)};function R(L,w){const J=e.update(x);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(w,null,J,p,x,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(w,null,J,_,x,null)}function A(L,w,J,T){let C=null;const $=J.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if($!==void 0)C=$;else if(C=J.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=C.uuid,ae=w.uuid;let U=l[Y];U===void 0&&(U={},l[Y]=U);let W=U[ae];W===void 0&&(W=C.clone(),U[ae]=W,w.addEventListener("dispose",B)),C=W}if(C.visible=w.visible,C.wireframe=w.wireframe,T===ni?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:f[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=n.properties.get(C);Y.light=J}return C}function P(L,w,J,T,C){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===ni)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld);const ae=e.update(L),U=L.material;if(Array.isArray(U)){const W=ae.groups;for(let K=0,Q=W.length;K<Q;K++){const te=W[K],ne=U[te.materialIndex];if(ne&&ne.visible){const ie=A(L,ne,T,C);L.onBeforeShadow(n,L,w,J,ae,ie,te),n.renderBufferDirect(J,null,ae,ie,L,te),L.onAfterShadow(n,L,w,J,ae,ie,te)}}}else if(U.visible){const W=A(L,U,T,C);L.onBeforeShadow(n,L,w,J,ae,W,null),n.renderBufferDirect(J,null,ae,W,L,null),L.onAfterShadow(n,L,w,J,ae,W,null)}}const Y=L.children;for(let ae=0,U=Y.length;ae<U;ae++)P(Y[ae],w,J,T,C)}function B(L){L.target.removeEventListener("dispose",B);for(const J in l){const T=l[J],C=L.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Q0(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const xe=new Wt;let ve=null;const ze=new Wt(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!D&&(n.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){D=Fe},setClear:function(Fe,gt,_t,ut,$t){$t===!0&&(Fe*=ut,gt*=ut,_t*=ut),xe.set(Fe,gt,_t,ut),ze.equals(xe)===!1&&(n.clearColor(Fe,gt,_t,ut),ze.copy(xe))},reset:function(){D=!1,ve=null,ze.set(-1,0,0,0)}}}function s(){let D=!1,xe=null,ve=null,ze=null;return{setTest:function(Fe){Fe?qe(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Fe){xe!==Fe&&!D&&(n.depthMask(Fe),xe=Fe)},setFunc:function(Fe){if(ve!==Fe){switch(Fe){case oh:n.depthFunc(n.NEVER);break;case ah:n.depthFunc(n.ALWAYS);break;case ch:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case lh:n.depthFunc(n.EQUAL);break;case uh:n.depthFunc(n.GEQUAL);break;case dh:n.depthFunc(n.GREATER);break;case fh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=Fe}},setLocked:function(Fe){D=Fe},setClear:function(Fe){ze!==Fe&&(n.clearDepth(Fe),ze=Fe)},reset:function(){D=!1,xe=null,ve=null,ze=null}}}function a(){let D=!1,xe=null,ve=null,ze=null,Fe=null,gt=null,_t=null,ut=null,$t=null;return{setTest:function(st){D||(st?qe(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(st){xe!==st&&!D&&(n.stencilMask(st),xe=st)},setFunc:function(st,Ot,un){(ve!==st||ze!==Ot||Fe!==un)&&(n.stencilFunc(st,Ot,un),ve=st,ze=Ot,Fe=un)},setOp:function(st,Ot,un){(gt!==st||_t!==Ot||ut!==un)&&(n.stencilOp(st,Ot,un),gt=st,_t=Ot,ut=un)},setLocked:function(st){D=st},setClear:function(st){$t!==st&&(n.clearStencil(st),$t=st)},reset:function(){D=!1,xe=null,ve=null,ze=null,Fe=null,gt=null,_t=null,ut=null,$t=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let p={},_={},M=new WeakMap,x=[],v=null,h=!1,R=null,A=null,P=null,B=null,L=null,w=null,J=null,T=new He(0,0,0),C=0,$=!1,Y=null,ae=null,U=null,W=null,K=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),te=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),te=ne>=2);let de=null,he={};const j=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Me=new Wt().fromArray(j),we=new Wt().fromArray(se);function Ie(D,xe,ve,ze){const Fe=new Uint8Array(4),gt=n.createTexture();n.bindTexture(D,gt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<ve;_t++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(xe+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return gt}const Xe={};Xe[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Xe[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Xe[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xe[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qe(n.DEPTH_TEST),c.setFunc(ao),je(!1),b(Vc),qe(n.CULL_FACE),be(Ti);function qe(D){p[D]!==!0&&(n.enable(D),p[D]=!0)}function Be(D){p[D]!==!1&&(n.disable(D),p[D]=!1)}function it(D,xe){return _[D]!==xe?(n.bindFramebuffer(D,xe),_[D]=xe,i&&(D===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=xe),D===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function V(D,xe){let ve=x,ze=!1;if(D)if(ve=M.get(xe),ve===void 0&&(ve=[],M.set(xe,ve)),D.isWebGLMultipleRenderTargets){const Fe=D.texture;if(ve.length!==Fe.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,_t=Fe.length;gt<_t;gt++)ve[gt]=n.COLOR_ATTACHMENT0+gt;ve.length=Fe.length,ze=!0}}else ve[0]!==n.COLOR_ATTACHMENT0&&(ve[0]=n.COLOR_ATTACHMENT0,ze=!0);else ve[0]!==n.BACK&&(ve[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function ft(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const Ue={[Hi]:n.FUNC_ADD,[$f]:n.FUNC_SUBTRACT,[Xf]:n.FUNC_REVERSE_SUBTRACT};if(i)Ue[Xc]=n.MIN,Ue[qc]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ue[Xc]=D.MIN_EXT,Ue[qc]=D.MAX_EXT)}const $e={[qf]:n.ZERO,[Yf]:n.ONE,[jf]:n.SRC_COLOR,[La]:n.SRC_ALPHA,[th]:n.SRC_ALPHA_SATURATE,[Qf]:n.DST_COLOR,[Zf]:n.DST_ALPHA,[Kf]:n.ONE_MINUS_SRC_COLOR,[Ia]:n.ONE_MINUS_SRC_ALPHA,[eh]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[nh]:n.CONSTANT_COLOR,[ih]:n.ONE_MINUS_CONSTANT_COLOR,[rh]:n.CONSTANT_ALPHA,[sh]:n.ONE_MINUS_CONSTANT_ALPHA};function be(D,xe,ve,ze,Fe,gt,_t,ut,$t,st){if(D===Ti){h===!0&&(Be(n.BLEND),h=!1);return}if(h===!1&&(qe(n.BLEND),h=!0),D!==Wf){if(D!==R||st!==$){if((A!==Hi||L!==Hi)&&(n.blendEquation(n.FUNC_ADD),A=Hi,L=Hi),st)switch(D){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFunc(n.ONE,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}P=null,B=null,w=null,J=null,T.set(0,0,0),C=0,R=D,$=st}return}Fe=Fe||xe,gt=gt||ve,_t=_t||ze,(xe!==A||Fe!==L)&&(n.blendEquationSeparate(Ue[xe],Ue[Fe]),A=xe,L=Fe),(ve!==P||ze!==B||gt!==w||_t!==J)&&(n.blendFuncSeparate($e[ve],$e[ze],$e[gt],$e[_t]),P=ve,B=ze,w=gt,J=_t),(ut.equals(T)===!1||$t!==C)&&(n.blendColor(ut.r,ut.g,ut.b,$t),T.copy(ut),C=$t),R=D,$=!1}function pt(D,xe){D.side===Vt?Be(n.CULL_FACE):qe(n.CULL_FACE);let ve=D.side===nn;xe&&(ve=!ve),je(ve),D.blending===Ar&&D.transparent===!1?be(Ti):be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const ze=D.stencilWrite;l.setTest(ze),ze&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?qe(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){Y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),Y=D)}function b(D){D!==Gf?(qe(n.CULL_FACE),D!==ae&&(D===Vc?n.cullFace(n.BACK):D===Vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),ae=D}function S(D){D!==U&&(te&&n.lineWidth(D),U=D)}function G(D,xe,ve){D?(qe(n.POLYGON_OFFSET_FILL),(W!==xe||K!==ve)&&(n.polygonOffset(xe,ve),W=xe,K=ve)):Be(n.POLYGON_OFFSET_FILL)}function le(D){D?qe(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function ce(D){D===void 0&&(D=n.TEXTURE0+Q-1),de!==D&&(n.activeTexture(D),de=D)}function ue(D,xe,ve){ve===void 0&&(de===null?ve=n.TEXTURE0+Q-1:ve=de);let ze=he[ve];ze===void 0&&(ze={type:void 0,texture:void 0},he[ve]=ze),(ze.type!==D||ze.texture!==xe)&&(de!==ve&&(n.activeTexture(ve),de=ve),n.bindTexture(D,xe||Xe[D]),ze.type=D,ze.texture=xe)}function Ce(){const D=he[de];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(D){Me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function ot(D){we.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),we.copy(D))}function St(D,xe){let ve=f.get(xe);ve===void 0&&(ve=new WeakMap,f.set(xe,ve));let ze=ve.get(D);ze===void 0&&(ze=n.getUniformBlockIndex(xe,D.name),ve.set(D,ze))}function Ze(D,xe){const ze=f.get(xe).get(D);u.get(xe)!==ze&&(n.uniformBlockBinding(xe,ze,D.__bindingPointIndex),u.set(xe,ze))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},de=null,he={},_={},M=new WeakMap,x=[],v=null,h=!1,R=null,A=null,P=null,B=null,L=null,w=null,J=null,T=new He(0,0,0),C=0,$=!1,Y=null,ae=null,U=null,W=null,K=null,Me.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:qe,disable:Be,bindFramebuffer:it,drawBuffers:V,useProgram:ft,setBlending:be,setMaterial:pt,setFlipSided:je,setCullFace:b,setLineWidth:S,setPolygonOffset:G,setScissorTest:le,activeTexture:ce,bindTexture:ue,unbindTexture:Ce,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:Re,texImage3D:Te,updateUBOMapping:St,uniformBlockBinding:Ze,texStorage2D:Qe,texStorage3D:We,texSubImage2D:ke,texSubImage3D:Ye,compressedTexSubImage2D:re,compressedTexSubImage3D:ht,scissor:Ke,viewport:ot,reset:fe}}function ev(n,e,t,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,S){return _?new OffscreenCanvas(b,S):fs("canvas")}function x(b,S,G,le){let ce=1;if((b.width>le||b.height>le)&&(ce=le/Math.max(b.width,b.height)),ce<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ue=S?ho:Math.floor,Ce=ue(ce*b.width),_e=ue(ce*b.height);f===void 0&&(f=M(Ce,_e));const Se=G?M(Ce,_e):f;return Se.width=Ce,Se.height=_e,Se.getContext("2d").drawImage(b,0,0,Ce,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ce+"x"+_e+")."),Se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return Fa(b.width)&&Fa(b.height)}function h(b){return o?!1:b.wrapS!==Dn||b.wrapT!==Dn||b.minFilter!==Dt&&b.minFilter!==bt}function R(b,S){return b.generateMipmaps&&S&&b.minFilter!==Dt&&b.minFilter!==bt}function A(b){n.generateMipmap(b)}function P(b,S,G,le,ce=!1){if(o===!1)return S;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=S;if(S===n.RED&&(G===n.FLOAT&&(ue=n.R32F),G===n.HALF_FLOAT&&(ue=n.R16F),G===n.UNSIGNED_BYTE&&(ue=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ue=n.R8UI),G===n.UNSIGNED_SHORT&&(ue=n.R16UI),G===n.UNSIGNED_INT&&(ue=n.R32UI),G===n.BYTE&&(ue=n.R8I),G===n.SHORT&&(ue=n.R16I),G===n.INT&&(ue=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ue=n.RG32F),G===n.HALF_FLOAT&&(ue=n.RG16F),G===n.UNSIGNED_BYTE&&(ue=n.RG8)),S===n.RGBA){const Ce=ce?co:vt.getTransfer(le);G===n.FLOAT&&(ue=n.RGBA32F),G===n.HALF_FLOAT&&(ue=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ue=Ce===At?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function B(b,S,G){return R(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==bt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function L(b){return b===Dt||b===Yc||b===qo?n.NEAREST:n.LINEAR}function w(b){const S=b.target;S.removeEventListener("dispose",w),T(S),S.isVideoTexture&&u.delete(S)}function J(b){const S=b.target;S.removeEventListener("dispose",J),$(S)}function T(b){const S=i.get(b);if(S.__webglInit===void 0)return;const G=b.source,le=p.get(G);if(le){const ce=le[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(b),Object.keys(le).length===0&&p.delete(G)}i.remove(b)}function C(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const G=b.source,le=p.get(G);delete le[S.__cacheKey],a.memory.textures--}function $(b){const S=b.texture,G=i.get(b),le=i.get(S);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(G.__webglFramebuffer[ce]))for(let ue=0;ue<G.__webglFramebuffer[ce].length;ue++)n.deleteFramebuffer(G.__webglFramebuffer[ce][ue]);else n.deleteFramebuffer(G.__webglFramebuffer[ce]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ce])}else{if(Array.isArray(G.__webglFramebuffer))for(let ce=0;ce<G.__webglFramebuffer.length;ce++)n.deleteFramebuffer(G.__webglFramebuffer[ce]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ce=0;ce<G.__webglColorRenderbuffer.length;ce++)G.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ce]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ce=0,ue=S.length;ce<ue;ce++){const Ce=i.get(S[ce]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),a.memory.textures--),i.remove(S[ce])}i.remove(S),i.remove(b)}let Y=0;function ae(){Y=0}function U(){const b=Y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),Y+=1,b}function W(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function K(b,S){const G=i.get(b);if(b.isVideoTexture&&pt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const le=b.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,b,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function Q(b,S){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Me(G,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function te(b,S){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Me(G,b,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function ne(b,S){const G=i.get(b);if(b.version>0&&G.__version!==b.version){we(G,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const ie={[Ln]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},de={[Dt]:n.NEAREST,[Yc]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[bt]:n.LINEAR,[Eh]:n.LINEAR_MIPMAP_NEAREST,[en]:n.LINEAR_MIPMAP_LINEAR},he={[Dh]:n.NEVER,[kh]:n.ALWAYS,[Oh]:n.LESS,[hd]:n.LEQUAL,[Uh]:n.EQUAL,[Bh]:n.GEQUAL,[Nh]:n.GREATER,[Fh]:n.NOTEQUAL};function j(b,S,G){if(G?(n.texParameteri(b,n.TEXTURE_WRAP_S,ie[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ie[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ie[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[S.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Dn||S.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,L(S.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,L(S.minFilter)),S.minFilter!==Dt&&S.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Dt||S.minFilter!==qo&&S.minFilter!==en||S.type===yi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===us&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(b,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function se(b,S){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",w));const le=S.source;let ce=p.get(le);ce===void 0&&(ce={},p.set(le,ce));const ue=W(S);if(ue!==b.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ce[ue].usedTimes++;const Ce=ce[b.__cacheKey];Ce!==void 0&&(ce[b.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(S)),b.__cacheKey=ue,b.__webglTexture=ce[ue].texture}return G}function Me(b,S,G){let le=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(le=n.TEXTURE_3D);const ce=se(b,S),ue=S.source;t.bindTexture(le,b.__webglTexture,n.TEXTURE0+G);const Ce=i.get(ue);if(ue.version!==Ce.__version||ce===!0){t.activeTexture(n.TEXTURE0+G);const _e=vt.getPrimaries(vt.workingColorSpace),Se=S.colorSpace===Tn?null:vt.getPrimaries(S.colorSpace),ke=S.colorSpace===Tn||_e===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ye=h(S)&&v(S.image)===!1;let re=x(S.image,Ye,!1,r.maxTextureSize);re=je(S,re);const ht=v(re)||o,Qe=s.convert(S.format,S.colorSpace);let We=s.convert(S.type),Re=P(S.internalFormat,Qe,We,S.colorSpace,S.isVideoTexture);j(le,S,ht);let Te;const Ke=S.mipmaps,ot=o&&S.isVideoTexture!==!0&&Re!==dd,St=Ce.__version===void 0||ce===!0,Ze=B(S,re,ht);if(S.isDepthTexture)Re=n.DEPTH_COMPONENT,o?S.type===yi?Re=n.DEPTH_COMPONENT32F:S.type===Ei?Re=n.DEPTH_COMPONENT24:S.type===Vi?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:S.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Wi&&Re===n.DEPTH_COMPONENT&&S.type!==sc&&S.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ei,We=s.convert(S.type)),S.format===Ir&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Vi,We=s.convert(S.type))),St&&(ot?t.texStorage2D(n.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,Qe,We,null));else if(S.isDataTexture)if(Ke.length>0&&ht){ot&&St&&t.texStorage2D(n.TEXTURE_2D,Ze,Re,Ke[0].width,Ke[0].height);for(let fe=0,D=Ke.length;fe<D;fe++)Te=Ke[fe],ot?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Te.width,Te.height,Qe,We,Te.data):t.texImage2D(n.TEXTURE_2D,fe,Re,Te.width,Te.height,0,Qe,We,Te.data);S.generateMipmaps=!1}else ot?(St&&t.texStorage2D(n.TEXTURE_2D,Ze,Re,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Qe,We,re.data)):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,Qe,We,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,Re,Ke[0].width,Ke[0].height,re.depth);for(let fe=0,D=Ke.length;fe<D;fe++)Te=Ke[fe],S.format!==On?Qe!==null?ot?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,re.depth,Qe,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Re,Te.width,Te.height,re.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,re.depth,Qe,We,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Re,Te.width,Te.height,re.depth,0,Qe,We,Te.data)}else{ot&&St&&t.texStorage2D(n.TEXTURE_2D,Ze,Re,Ke[0].width,Ke[0].height);for(let fe=0,D=Ke.length;fe<D;fe++)Te=Ke[fe],S.format!==On?Qe!==null?ot?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Te.width,Te.height,Qe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Te.width,Te.height,Qe,We,Te.data):t.texImage2D(n.TEXTURE_2D,fe,Re,Te.width,Te.height,0,Qe,We,Te.data)}else if(S.isDataArrayTexture)ot?(St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,Re,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Qe,We,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,Qe,We,re.data);else if(S.isData3DTexture)ot?(St&&t.texStorage3D(n.TEXTURE_3D,Ze,Re,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Qe,We,re.data)):t.texImage3D(n.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,Qe,We,re.data);else if(S.isFramebufferTexture){if(St)if(ot)t.texStorage2D(n.TEXTURE_2D,Ze,Re,re.width,re.height);else{let fe=re.width,D=re.height;for(let xe=0;xe<Ze;xe++)t.texImage2D(n.TEXTURE_2D,xe,Re,fe,D,0,Qe,We,null),fe>>=1,D>>=1}}else if(Ke.length>0&&ht){ot&&St&&t.texStorage2D(n.TEXTURE_2D,Ze,Re,Ke[0].width,Ke[0].height);for(let fe=0,D=Ke.length;fe<D;fe++)Te=Ke[fe],ot?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Qe,We,Te):t.texImage2D(n.TEXTURE_2D,fe,Re,Qe,We,Te);S.generateMipmaps=!1}else ot?(St&&t.texStorage2D(n.TEXTURE_2D,Ze,Re,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,We,re)):t.texImage2D(n.TEXTURE_2D,0,Re,Qe,We,re);R(S,ht)&&A(le),Ce.__version=ue.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function we(b,S,G){if(S.image.length!==6)return;const le=se(b,S),ce=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+G);const ue=i.get(ce);if(ce.version!==ue.__version||le===!0){t.activeTexture(n.TEXTURE0+G);const Ce=vt.getPrimaries(vt.workingColorSpace),_e=S.colorSpace===Tn?null:vt.getPrimaries(S.colorSpace),Se=S.colorSpace===Tn||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ke=S.isCompressedTexture||S.image[0].isCompressedTexture,Ye=S.image[0]&&S.image[0].isDataTexture,re=[];for(let fe=0;fe<6;fe++)!ke&&!Ye?re[fe]=x(S.image[fe],!1,!0,r.maxCubemapSize):re[fe]=Ye?S.image[fe].image:S.image[fe],re[fe]=je(S,re[fe]);const ht=re[0],Qe=v(ht)||o,We=s.convert(S.format,S.colorSpace),Re=s.convert(S.type),Te=P(S.internalFormat,We,Re,S.colorSpace),Ke=o&&S.isVideoTexture!==!0,ot=ue.__version===void 0||le===!0;let St=B(S,ht,Qe);j(n.TEXTURE_CUBE_MAP,S,Qe);let Ze;if(ke){Ke&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,St,Te,ht.width,ht.height);for(let fe=0;fe<6;fe++){Ze=re[fe].mipmaps;for(let D=0;D<Ze.length;D++){const xe=Ze[D];S.format!==On?We!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,xe.width,xe.height,We,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Te,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,xe.width,xe.height,We,Re,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Te,xe.width,xe.height,0,We,Re,xe.data)}}}else{Ze=S.mipmaps,Ke&&ot&&(Ze.length>0&&St++,t.texStorage2D(n.TEXTURE_CUBE_MAP,St,Te,re[0].width,re[0].height));for(let fe=0;fe<6;fe++)if(Ye){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,re[fe].width,re[fe].height,We,Re,re[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Te,re[fe].width,re[fe].height,0,We,Re,re[fe].data);for(let D=0;D<Ze.length;D++){const ve=Ze[D].image[fe].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,ve.width,ve.height,We,Re,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Te,ve.width,ve.height,0,We,Re,ve.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,We,Re,re[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Te,We,Re,re[fe]);for(let D=0;D<Ze.length;D++){const xe=Ze[D];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,We,Re,xe.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Te,We,Re,xe.image[fe])}}}R(S,Qe)&&A(n.TEXTURE_CUBE_MAP),ue.__version=ce.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ie(b,S,G,le,ce,ue){const Ce=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),Se=P(G.internalFormat,Ce,_e,G.colorSpace);if(!i.get(S).__hasExternalTextures){const Ye=Math.max(1,S.width>>ue),re=Math.max(1,S.height>>ue);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,Se,Ye,re,S.depth,0,Ce,_e,null):t.texImage2D(ce,ue,Se,Ye,re,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),be(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ce,i.get(G).__webglTexture,0,$e(S)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ce,i.get(G).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(b,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let le=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||be(S)){const ce=S.depthTexture;ce&&ce.isDepthTexture&&(ce.type===yi?le=n.DEPTH_COMPONENT32F:ce.type===Ei&&(le=n.DEPTH_COMPONENT24));const ue=$e(S);be(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,le,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,le,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const le=$e(S);G&&be(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,S.width,S.height):be(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const le=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ce=0;ce<le.length;ce++){const ue=le[ce],Ce=s.convert(ue.format,ue.colorSpace),_e=s.convert(ue.type),Se=P(ue.internalFormat,Ce,_e,ue.colorSpace),ke=$e(S);G&&be(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Se,S.width,S.height):be(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,Se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Se,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const le=i.get(S.depthTexture).__webglTexture,ce=$e(S);if(S.depthTexture.format===Wi)be(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(S.depthTexture.format===Ir)be(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Be(b){const S=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,b)}else if(G){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]=n.createRenderbuffer(),Xe(S.__webglDepthbuffer[le],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Xe(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,S,G){const le=i.get(b);S!==void 0&&Ie(le.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Be(b)}function V(b){const S=b.texture,G=i.get(b),le=i.get(S);b.addEventListener("dispose",J),b.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=S.version,a.memory.textures++);const ce=b.isWebGLCubeRenderTarget===!0,ue=b.isWebGLMultipleRenderTargets===!0,Ce=v(b)||o;if(ce){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Se=0;Se<S.mipmaps.length;Se++)G.__webglFramebuffer[_e][Se]=n.createFramebuffer()}else G.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)G.__webglFramebuffer[_e]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers){const _e=b.texture;for(let Se=0,ke=_e.length;Se<ke;Se++){const Ye=i.get(_e[Se]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&be(b)===!1){const _e=ue?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Se=0;Se<_e.length;Se++){const ke=_e[Se];G.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Se]);const Ye=s.convert(ke.format,ke.colorSpace),re=s.convert(ke.type),ht=P(ke.internalFormat,Ye,re,ke.colorSpace,b.isXRRenderTarget===!0),Qe=$e(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,G.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),j(n.TEXTURE_CUBE_MAP,S,Ce);for(let _e=0;_e<6;_e++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)Ie(G.__webglFramebuffer[_e][Se],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Se);else Ie(G.__webglFramebuffer[_e],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);R(S,Ce)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const _e=b.texture;for(let Se=0,ke=_e.length;Se<ke;Se++){const Ye=_e[Se],re=i.get(Ye);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),j(n.TEXTURE_2D,Ye,Ce),Ie(G.__webglFramebuffer,b,Ye,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),R(Ye,Ce)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?_e=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,le.__webglTexture),j(_e,S,Ce),o&&S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)Ie(G.__webglFramebuffer[Se],b,S,n.COLOR_ATTACHMENT0,_e,Se);else Ie(G.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,_e,0);R(S,Ce)&&A(_e),t.unbindTexture()}b.depthBuffer&&Be(b)}function ft(b){const S=v(b)||o,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let le=0,ce=G.length;le<ce;le++){const ue=G[le];if(R(ue,S)){const Ce=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ue).__webglTexture;t.bindTexture(Ce,_e),A(Ce),t.unbindTexture()}}}function Ue(b){if(o&&b.samples>0&&be(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,le=b.height;let ce=n.COLOR_BUFFER_BIT;const ue=[],Ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(b),Se=b.isWebGLMultipleRenderTargets===!0;if(Se)for(let ke=0;ke<S.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ke=0;ke<S.length;ke++){ue.push(n.COLOR_ATTACHMENT0+ke),b.depthBuffer&&ue.push(Ce);const Ye=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ye===!1&&(b.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ke]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Se){const re=i.get(S[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,G,le,0,0,G,le,ce,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let ke=0;ke<S.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ke]);const Ye=i.get(S[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function $e(b){return Math.min(r.maxSamples,b.samples)}function be(b){const S=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(b){const S=a.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function je(b,S){const G=b.colorSpace,le=b.format,ce=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Na||G!==si&&G!==Tn&&(vt.getTransfer(G)===At?o===!1?e.has("EXT_sRGB")===!0&&le===On?(b.format=Na,b.minFilter=bt,b.generateMipmaps=!1):S=md.sRGBToLinear(S):(le!==On||ce!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=U,this.resetTextureUnits=ae,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=it,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=be}function tv(n,e,t){const i=t.isWebGL2;function r(s,a=Tn){let o;const c=vt.getTransfer(a);if(s===wi)return n.UNSIGNED_BYTE;if(s===od)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ad)return n.UNSIGNED_SHORT_5_5_5_1;if(s===yh)return n.BYTE;if(s===Sh)return n.SHORT;if(s===sc)return n.UNSIGNED_SHORT;if(s===sd)return n.INT;if(s===Ei)return n.UNSIGNED_INT;if(s===yi)return n.FLOAT;if(s===us)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Th)return n.ALPHA;if(s===On)return n.RGBA;if(s===Ah)return n.LUMINANCE;if(s===wh)return n.LUMINANCE_ALPHA;if(s===Wi)return n.DEPTH_COMPONENT;if(s===Ir)return n.DEPTH_STENCIL;if(s===Na)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===bh)return n.RED;if(s===cd)return n.RED_INTEGER;if(s===Rh)return n.RG;if(s===ld)return n.RG_INTEGER;if(s===ud)return n.RGBA_INTEGER;if(s===Yo||s===jo||s===Ko||s===Zo)if(c===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jc||s===Kc||s===Zc||s===Jc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qc||s===el)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qc)return c===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===el)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tl||s===nl||s===il||s===rl||s===sl||s===ol||s===al||s===cl||s===ll||s===ul||s===dl||s===fl||s===hl||s===pl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===il)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ol)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===al)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ll)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ul)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pl)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jo||s===ml||s===gl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Jo)return c===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ml)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===_l||s===vl||s===xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===_l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class nv extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qn extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iv={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const v=t.getJointPose(x,i),h=this._getHandJoint(l,x);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),_=.02,M=.005;l.inputState.pinching&&p>_+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=_-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class rv extends zr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,p=null,_=null,M=null;const x=t.getContextAttributes();let v=null,h=null;const R=[],A=[],P=new lt;let B=null;const L=new Sn;L.layers.enable(1),L.viewport=new Wt;const w=new Sn;w.layers.enable(2),w.viewport=new Wt;const J=[L,w],T=new nv;T.layers.enable(1),T.layers.enable(2);let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=R[j];return se===void 0&&(se=new Ea,R[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=R[j];return se===void 0&&(se=new Ea,R[j]=se),se.getGripSpace()},this.getHand=function(j){let se=R[j];return se===void 0&&(se=new Ea,R[j]=se),se.getHandSpace()};function Y(j){const se=A.indexOf(j.inputSource);if(se===-1)return;const Me=R[se];Me!==void 0&&(Me.update(j.inputSource,j.frame,l||a),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function ae(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",U);for(let j=0;j<R.length;j++){const se=A[j];se!==null&&(A[j]=null,R[j].disconnect(se))}C=null,$=null,e.setRenderTarget(v),_=null,p=null,f=null,r=null,h=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),h=new Yi(_.framebufferWidth,_.framebufferHeight,{format:On,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,Me=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?Ir:Wi,Me=x.stencil?Vi:Ei);const Ie={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new Yi(p.textureWidth,p.textureHeight,{format:On,type:wi,depthTexture:new bd(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Xe=e.properties.get(h);Xe.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(j){for(let se=0;se<j.removed.length;se++){const Me=j.removed[se],we=A.indexOf(Me);we>=0&&(A[we]=null,R[we].disconnect(Me))}for(let se=0;se<j.added.length;se++){const Me=j.added[se];let we=A.indexOf(Me);if(we===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=A.length){A.push(Me),we=Xe;break}else if(A[Xe]===null){A[Xe]=Me,we=Xe;break}if(we===-1)break}const Ie=R[we];Ie&&Ie.connect(Me)}}const W=new H,K=new H;function Q(j,se,Me){W.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(Me.matrixWorld);const we=W.distanceTo(K),Ie=se.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,qe=Ie[14]/(Ie[10]-1),Be=Ie[14]/(Ie[10]+1),it=(Ie[9]+1)/Ie[5],V=(Ie[9]-1)/Ie[5],ft=(Ie[8]-1)/Ie[0],Ue=(Xe[8]+1)/Xe[0],$e=qe*ft,be=qe*Ue,pt=we/(-ft+Ue),je=pt*-ft;se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(je),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=qe+pt,S=Be+pt,G=$e-je,le=be+(we-je),ce=it*Be/S*b,ue=V*Be/S*b;j.projectionMatrix.makePerspective(G,le,ce,ue,b,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function te(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;T.near=w.near=L.near=j.near,T.far=w.far=L.far=j.far,(C!==T.near||$!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,$=T.far);const se=j.parent,Me=T.cameras;te(T,se);for(let we=0;we<Me.length;we++)te(Me[we],se);Me.length===2?Q(T,L,w):T.projectionMatrix.copy(L.projectionMatrix),ne(j,T,se)};function ne(j,se,Me){Me===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ds*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(j){c=j,p!==null&&(p.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)};let ie=null;function de(j,se){if(u=se.getViewerPose(l||a),M=se,u!==null){const Me=u.views;_!==null&&(e.setRenderTargetFramebuffer(h,_.framebuffer),e.setRenderTarget(h));let we=!1;Me.length!==T.cameras.length&&(T.cameras.length=0,we=!0);for(let Ie=0;Ie<Me.length;Ie++){const Xe=Me[Ie];let qe=null;if(_!==null)qe=_.getViewport(Xe);else{const it=f.getViewSubImage(p,Xe);qe=it.viewport,Ie===0&&(e.setRenderTargetTextures(h,it.colorTexture,p.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(h))}let Be=J[Ie];Be===void 0&&(Be=new Sn,Be.layers.enable(Ie),Be.viewport=new Wt,J[Ie]=Be),Be.matrix.fromArray(Xe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Xe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),Ie===0&&(T.matrix.copy(Be.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),we===!0&&T.cameras.push(Be)}}for(let Me=0;Me<R.length;Me++){const we=A[Me],Ie=R[Me];we!==null&&Ie!==void 0&&Ie.update(we,se,l||a)}ie&&ie(j,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),M=null}const he=new Ad;he.setAnimationLoop(de),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}function sv(n,e){function t(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,yd(n)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,R,A,P){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(v,h):h.isMeshToonMaterial?(s(v,h),f(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h)):h.isMeshStandardMaterial?(s(v,h),p(v,h),h.isMeshPhysicalMaterial&&_(v,h,P)):h.isMeshMatcapMaterial?(s(v,h),M(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),x(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(a(v,h),h.isLineDashedMaterial&&o(v,h)):h.isPointsMaterial?c(v,h,R,A):h.isSpriteMaterial?l(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,t(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,t(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===nn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,t(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===nn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,t(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,t(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const R=e.get(h).envMap;if(R&&(v.envMap.value=R,v.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap){v.lightMap.value=h.lightMap;const A=n._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=h.lightMapIntensity*A,t(h.lightMap,v.lightMapTransform)}h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,v.aoMapTransform))}function a(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,t(h.map,v.mapTransform))}function o(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function c(v,h,R,A){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*R,v.scale.value=A*.5,h.map&&(v.map.value=h.map,t(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function l(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,t(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,t(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function f(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function p(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,v.roughnessMapTransform)),e.get(h).envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function _(v,h,R){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&v.clearcoatNormalScale.value.negate())),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=R.texture,v.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,h){h.matcap&&(v.matcap.value=h.matcap)}function x(v,h){const R=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(R.matrixWorld),v.nearDistance.value=R.shadow.camera.near,v.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ov(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(R,A){const P=A.program;i.uniformBlockBinding(R,P)}function l(R,A){let P=r[R.id];P===void 0&&(M(R),P=u(R),r[R.id]=P,R.addEventListener("dispose",v));const B=A.program;i.updateUBOMapping(R,B);const L=e.render.frame;s[R.id]!==L&&(p(R),s[R.id]=L)}function u(R){const A=f();R.__bindingPointIndex=A;const P=n.createBuffer(),B=R.__size,L=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,B,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,P),P}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const A=r[R.id],P=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let L=0,w=P.length;L<w;L++){const J=Array.isArray(P[L])?P[L]:[P[L]];for(let T=0,C=J.length;T<C;T++){const $=J[T];if(_($,L,T,B)===!0){const Y=$.__offset,ae=Array.isArray($.value)?$.value:[$.value];let U=0;for(let W=0;W<ae.length;W++){const K=ae[W],Q=x(K);typeof K=="number"||typeof K=="boolean"?($.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,Y+U,$.__data)):K.isMatrix3?($.__data[0]=K.elements[0],$.__data[1]=K.elements[1],$.__data[2]=K.elements[2],$.__data[3]=0,$.__data[4]=K.elements[3],$.__data[5]=K.elements[4],$.__data[6]=K.elements[5],$.__data[7]=0,$.__data[8]=K.elements[6],$.__data[9]=K.elements[7],$.__data[10]=K.elements[8],$.__data[11]=0):(K.toArray($.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,$.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(R,A,P,B){const L=R.value,w=A+"_"+P;if(B[w]===void 0)return typeof L=="number"||typeof L=="boolean"?B[w]=L:B[w]=L.clone(),!0;{const J=B[w];if(typeof L=="number"||typeof L=="boolean"){if(J!==L)return B[w]=L,!0}else if(J.equals(L)===!1)return J.copy(L),!0}return!1}function M(R){const A=R.uniforms;let P=0;const B=16;for(let w=0,J=A.length;w<J;w++){const T=Array.isArray(A[w])?A[w]:[A[w]];for(let C=0,$=T.length;C<$;C++){const Y=T[C],ae=Array.isArray(Y.value)?Y.value:[Y.value];for(let U=0,W=ae.length;U<W;U++){const K=ae[U],Q=x(K),te=P%B;te!==0&&B-te<Q.boundary&&(P+=B-te),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=Q.storage}}}const L=P%B;return L>0&&(P+=B-L),R.__size=P,R.__cache={},this}function x(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function v(R){const A=R.target;A.removeEventListener("dispose",v);const P=a.indexOf(A.__bindingPointIndex);a.splice(P,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function h(){for(const R in r)n.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Dd{constructor(e={}){const{canvas:t=tp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const _=new Uint32Array(4),M=new Int32Array(4);let x=null,v=null;const h=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;const A=this;let P=!1,B=0,L=0,w=null,J=-1,T=null;const C=new Wt,$=new Wt;let Y=null;const ae=new He(0);let U=0,W=t.width,K=t.height,Q=1,te=null,ne=null;const ie=new Wt(0,0,W,K),de=new Wt(0,0,W,K);let he=!1;const j=new uc;let se=!1,Me=!1,we=null;const Ie=new Pt,Xe=new lt,qe=new H,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return w===null?Q:1}let V=i;function ft(y,I){for(let k=0;k<y.length;k++){const O=y[k],F=t.getContext(O,I);if(F!==null)return F}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",xe,!1),V===null){const I=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&I.shift(),V=ft(I,y),V===null)throw ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ue,$e,be,pt,je,b,S,G,le,ce,ue,Ce,_e,Se,ke,Ye,re,ht,Qe,We,Re,Te,Ke,ot;function St(){Ue=new g_(V),$e=new u_(V,Ue,e),Ue.init($e),Te=new tv(V,Ue,$e),be=new Q0(V,Ue,$e),pt=new x_(V),je=new k0,b=new ev(V,Ue,be,je,$e,Te,pt),S=new f_(A),G=new m_(A),le=new bp(V,$e),Ke=new c_(V,Ue,le,$e),ce=new __(V,le,pt,Ke),ue=new S_(V,ce,le,pt),Qe=new y_(V,$e,b),Ye=new d_(je),Ce=new B0(A,S,G,Ue,$e,Ke,Ye),_e=new sv(A,je),Se=new H0,ke=new q0(Ue,$e),ht=new a_(A,S,G,be,ue,p,c),re=new J0(A,ue,$e),ot=new ov(V,pt,$e,be),We=new l_(V,Ue,pt,$e),Re=new v_(V,Ue,pt,$e),pt.programs=Ce.programs,A.capabilities=$e,A.extensions=Ue,A.properties=je,A.renderLists=Se,A.shadowMap=re,A.state=be,A.info=pt}St();const Ze=new rv(A,V);this.xr=Ze,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const y=Ue.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ue.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(W,K,!1))},this.getSize=function(y){return y.set(W,K)},this.setSize=function(y,I,k=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,K=I,t.width=Math.floor(y*Q),t.height=Math.floor(I*Q),k===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(W*Q,K*Q).floor()},this.setDrawingBufferSize=function(y,I,k){W=y,K=I,Q=k,t.width=Math.floor(y*k),t.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,I,k,O){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,I,k,O),be.viewport(C.copy(ie).multiplyScalar(Q).floor())},this.getScissor=function(y){return y.copy(de)},this.setScissor=function(y,I,k,O){y.isVector4?de.set(y.x,y.y,y.z,y.w):de.set(y,I,k,O),be.scissor($.copy(de).multiplyScalar(Q).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){be.setScissorTest(he=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){ne=y},this.getClearColor=function(y){return y.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(y=!0,I=!0,k=!0){let O=0;if(y){let F=!1;if(w!==null){const ee=w.texture.format;F=ee===ud||ee===ld||ee===cd}if(F){const ee=w.texture.type,oe=ee===wi||ee===Ei||ee===sc||ee===Vi||ee===od||ee===ad,q=ht.getClearColor(),pe=ht.getClearAlpha(),Oe=q.r,ye=q.g,me=q.b;oe?(_[0]=Oe,_[1]=ye,_[2]=me,_[3]=pe,V.clearBufferuiv(V.COLOR,0,_)):(M[0]=Oe,M[1]=ye,M[2]=me,M[3]=pe,V.clearBufferiv(V.COLOR,0,M))}else O|=V.COLOR_BUFFER_BIT}I&&(O|=V.DEPTH_BUFFER_BIT),k&&(O|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Se.dispose(),ke.dispose(),je.dispose(),S.dispose(),G.dispose(),ue.dispose(),Ke.dispose(),ot.dispose(),Ce.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",$t),Ze.removeEventListener("sessionend",st),we&&(we.dispose(),we=null),Ot.stop()};function fe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const y=pt.autoReset,I=re.enabled,k=re.autoUpdate,O=re.needsUpdate,F=re.type;St(),pt.autoReset=y,re.enabled=I,re.autoUpdate=k,re.needsUpdate=O,re.type=F}function xe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ve(y){const I=y.target;I.removeEventListener("dispose",ve),ze(I)}function ze(y){Fe(y),je.remove(y)}function Fe(y){const I=je.get(y).programs;I!==void 0&&(I.forEach(function(k){Ce.releaseProgram(k)}),y.isShaderMaterial&&Ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,O,F,ee){I===null&&(I=Be);const oe=F.isMesh&&F.matrixWorld.determinant()<0,q=Le(y,I,k,O,F);be.setMaterial(O,oe);let pe=k.index,Oe=1;if(O.wireframe===!0){if(pe=ce.getWireframeAttribute(k),pe===void 0)return;Oe=2}const ye=k.drawRange,me=k.attributes.position;let De=ye.start*Oe,Ct=(ye.start+ye.count)*Oe;ee!==null&&(De=Math.max(De,ee.start*Oe),Ct=Math.min(Ct,(ee.start+ee.count)*Oe)),pe!==null?(De=Math.max(De,0),Ct=Math.min(Ct,pe.count)):me!=null&&(De=Math.max(De,0),Ct=Math.min(Ct,me.count));const Et=Ct-De;if(Et<0||Et===1/0)return;Ke.setup(F,O,q,k,pe);let Lt,Je=We;if(pe!==null&&(Lt=le.get(pe),Je=Re,Je.setIndex(Lt)),F.isMesh)O.wireframe===!0?(be.setLineWidth(O.wireframeLinewidth*it()),Je.setMode(V.LINES)):Je.setMode(V.TRIANGLES);else if(F.isLine){let Pe=O.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*it()),F.isLineSegments?Je.setMode(V.LINES):F.isLineLoop?Je.setMode(V.LINE_LOOP):Je.setMode(V.LINE_STRIP)}else F.isPoints?Je.setMode(V.POINTS):F.isSprite&&Je.setMode(V.TRIANGLES);if(F.isBatchedMesh)Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Je.renderInstances(De,Et,F.count);else if(k.isInstancedBufferGeometry){const Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fi=Math.min(k.instanceCount,Pe);Je.renderInstances(De,Et,fi)}else Je.render(De,Et)};function gt(y,I,k){y.transparent===!0&&y.side===Vt&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,E(y,I,k),y.side=_n,y.needsUpdate=!0,E(y,I,k),y.side=Vt):E(y,I,k)}this.compile=function(y,I,k=null){k===null&&(k=y),v=ke.get(k),v.init(),R.push(v),k.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),y!==k&&y.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights(A._useLegacyLights);const O=new Set;return y.traverse(function(F){const ee=F.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const q=ee[oe];gt(q,k,F),O.add(q)}else gt(ee,k,F),O.add(ee)}),R.pop(),v=null,O},this.compileAsync=function(y,I,k=null){const O=this.compile(y,I,k);return new Promise(F=>{function ee(){if(O.forEach(function(oe){je.get(oe).currentProgram.isReady()&&O.delete(oe)}),O.size===0){F(y);return}setTimeout(ee,10)}Ue.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _t=null;function ut(y){_t&&_t(y)}function $t(){Ot.stop()}function st(){Ot.start()}const Ot=new Ad;Ot.setAnimationLoop(ut),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(y){_t=y,Ze.setAnimationLoop(y),y===null?Ot.stop():Ot.start()},Ze.addEventListener("sessionstart",$t),Ze.addEventListener("sessionend",st),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(I),I=Ze.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,I,w),v=ke.get(y,R.length),v.init(),R.push(v),Ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,se=Ye.init(this.clippingPlanes,Me),x=Se.get(y,h.length),x.init(),h.push(x),un(y,I,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(te,ne),this.info.render.frame++,se===!0&&Ye.beginShadows();const k=v.state.shadowsArray;if(re.render(k,y,I),se===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(x,y),v.setupLights(A._useLegacyLights),I.isArrayCamera){const O=I.cameras;for(let F=0,ee=O.length;F<ee;F++){const oe=O[F];Ts(x,y,oe,oe.viewport)}}else Ts(x,y,I);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(A,y,I),Ke.resetDefaultState(),J=-1,T=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function un(y,I,k,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)v.pushLight(y),y.castShadow&&v.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){O&&qe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ie);const oe=ue.update(y),q=y.material;q.visible&&x.push(y,oe,q,k,qe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const oe=ue.update(y),q=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qe.copy(y.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),qe.copy(oe.boundingSphere.center)),qe.applyMatrix4(y.matrixWorld).applyMatrix4(Ie)),Array.isArray(q)){const pe=oe.groups;for(let Oe=0,ye=pe.length;Oe<ye;Oe++){const me=pe[Oe],De=q[me.materialIndex];De&&De.visible&&x.push(y,oe,De,k,qe.z,me)}}else q.visible&&x.push(y,oe,q,k,qe.z,null)}}const ee=y.children;for(let oe=0,q=ee.length;oe<q;oe++)un(ee[oe],I,k,O)}function Ts(y,I,k,O){const F=y.opaque,ee=y.transmissive,oe=y.transparent;v.setupLightsView(k),se===!0&&Ye.setGlobalState(A.clippingPlanes,k),ee.length>0&&m(F,ee,I,k),O&&be.viewport(C.copy(O)),F.length>0&&d(F,I,k),ee.length>0&&d(ee,I,k),oe.length>0&&d(oe,I,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function m(y,I,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ee=$e.isWebGL2;we===null&&(we=new Yi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?us:wi,minFilter:en,samples:ee?4:0})),A.getDrawingBufferSize(Xe),ee?we.setSize(Xe.x,Xe.y):we.setSize(ho(Xe.x),ho(Xe.y));const oe=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(ae),U=A.getClearAlpha(),U<1&&A.setClearColor(16777215,.5),A.clear();const q=A.toneMapping;A.toneMapping=Ai,d(y,k,O),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we);let pe=!1;for(let Oe=0,ye=I.length;Oe<ye;Oe++){const me=I[Oe],De=me.object,Ct=me.geometry,Et=me.material,Lt=me.group;if(Et.side===Vt&&De.layers.test(O.layers)){const Je=Et.side;Et.side=nn,Et.needsUpdate=!0,g(De,k,O,Ct,Et,Lt),Et.side=Je,Et.needsUpdate=!0,pe=!0}}pe===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we)),A.setRenderTarget(oe),A.setClearColor(ae,U),A.toneMapping=q}function d(y,I,k){const O=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ee=y.length;F<ee;F++){const oe=y[F],q=oe.object,pe=oe.geometry,Oe=O===null?oe.material:O,ye=oe.group;q.layers.test(k.layers)&&g(q,I,k,pe,Oe,ye)}}function g(y,I,k,O,F,ee){y.onBeforeRender(A,I,k,O,F,ee),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(A,I,k,O,y,ee),F.transparent===!0&&F.side===Vt&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,A.renderBufferDirect(k,I,O,F,y,ee),F.side=_n,F.needsUpdate=!0,A.renderBufferDirect(k,I,O,F,y,ee),F.side=Vt):A.renderBufferDirect(k,I,O,F,y,ee),y.onAfterRender(A,I,k,O,F,ee)}function E(y,I,k){I.isScene!==!0&&(I=Be);const O=je.get(y),F=v.state.lights,ee=v.state.shadowsArray,oe=F.state.version,q=Ce.getParameters(y,F.state,ee,I,k),pe=Ce.getProgramCacheKey(q);let Oe=O.programs;O.environment=y.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(y.isMeshStandardMaterial?G:S).get(y.envMap||O.environment),Oe===void 0&&(y.addEventListener("dispose",ve),Oe=new Map,O.programs=Oe);let ye=Oe.get(pe);if(ye!==void 0){if(O.currentProgram===ye&&O.lightsStateVersion===oe)return Z(y,q),ye}else q.uniforms=Ce.getUniforms(y),y.onBuild(k,q,A),y.onBeforeCompile(q,A),ye=Ce.acquireProgram(q,pe),Oe.set(pe,ye),O.uniforms=q.uniforms;const me=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(me.clippingPlanes=Ye.uniform),Z(y,q),O.needsLights=nt(y),O.lightsStateVersion=oe,O.needsLights&&(me.ambientLightColor.value=F.state.ambient,me.lightProbe.value=F.state.probe,me.directionalLights.value=F.state.directional,me.directionalLightShadows.value=F.state.directionalShadow,me.spotLights.value=F.state.spot,me.spotLightShadows.value=F.state.spotShadow,me.rectAreaLights.value=F.state.rectArea,me.ltc_1.value=F.state.rectAreaLTC1,me.ltc_2.value=F.state.rectAreaLTC2,me.pointLights.value=F.state.point,me.pointLightShadows.value=F.state.pointShadow,me.hemisphereLights.value=F.state.hemi,me.directionalShadowMap.value=F.state.directionalShadowMap,me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,me.spotShadowMap.value=F.state.spotShadowMap,me.spotLightMatrix.value=F.state.spotLightMatrix,me.spotLightMap.value=F.state.spotLightMap,me.pointShadowMap.value=F.state.pointShadowMap,me.pointShadowMatrix.value=F.state.pointShadowMatrix),O.currentProgram=ye,O.uniformsList=null,ye}function N(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=eo.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Z(y,I){const k=je.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Le(y,I,k,O,F){I.isScene!==!0&&(I=Be),b.resetTextureUnits();const ee=I.fog,oe=O.isMeshStandardMaterial?I.environment:null,q=w===null?A.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:si,pe=(O.isMeshStandardMaterial?G:S).get(O.envMap||oe),Oe=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ye=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),me=!!k.morphAttributes.position,De=!!k.morphAttributes.normal,Ct=!!k.morphAttributes.color;let Et=Ai;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Et=A.toneMapping);const Lt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=Lt!==void 0?Lt.length:0,Pe=je.get(O),fi=v.state.lights;if(se===!0&&(Me===!0||y!==T)){const xn=y===T&&O.id===J;Ye.setState(O,y,xn)}let at=!1;O.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==fi.state.version||Pe.outputColorSpace!==q||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||Pe.envMap!==pe||O.fog===!0&&Pe.fog!==ee||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ye.numPlanes||Pe.numIntersection!==Ye.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==ye||Pe.morphTargets!==me||Pe.morphNormals!==De||Pe.morphColors!==Ct||Pe.toneMapping!==Et||$e.isWebGL2===!0&&Pe.morphTargetsCount!==Je)&&(at=!0):(at=!0,Pe.__version=O.version);let wn=Pe.currentProgram;at===!0&&(wn=E(O,I,F));let bn=!1,kn=!1,Wo=!1;const jt=wn.getUniforms(),Li=Pe.uniforms;if(be.useProgram(wn.program)&&(bn=!0,kn=!0,Wo=!0),O.id!==J&&(J=O.id,kn=!0),bn||T!==y){jt.setValue(V,"projectionMatrix",y.projectionMatrix),jt.setValue(V,"viewMatrix",y.matrixWorldInverse);const xn=jt.map.cameraPosition;xn!==void 0&&xn.setValue(V,qe.setFromMatrixPosition(y.matrixWorld)),$e.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&jt.setValue(V,"isOrthographic",y.isOrthographicCamera===!0),T!==y&&(T=y,kn=!0,Wo=!0)}if(F.isSkinnedMesh){jt.setOptional(V,F,"bindMatrix"),jt.setOptional(V,F,"bindMatrixInverse");const xn=F.skeleton;xn&&($e.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),jt.setValue(V,"boneTexture",xn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(jt.setOptional(V,F,"batchingTexture"),jt.setValue(V,"batchingTexture",F._matricesTexture,b));const $o=k.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&$e.isWebGL2===!0)&&Qe.update(F,k,wn),(kn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,jt.setValue(V,"receiveShadow",F.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Li.envMap.value=pe,Li.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),kn&&(jt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&Ae(Li,Wo),ee&&O.fog===!0&&_e.refreshFogUniforms(Li,ee),_e.refreshMaterialUniforms(Li,O,Q,K,we),eo.upload(V,N(Pe),Li,b)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(eo.upload(V,N(Pe),Li,b),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&jt.setValue(V,"center",F.center),jt.setValue(V,"modelViewMatrix",F.modelViewMatrix),jt.setValue(V,"normalMatrix",F.normalMatrix),jt.setValue(V,"modelMatrix",F.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const xn=O.uniformsGroups;for(let Xo=0,Hf=xn.length;Xo<Hf;Xo++)if($e.isWebGL2){const Gc=xn[Xo];ot.update(Gc,wn),ot.bind(Gc,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Ae(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function nt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,I,k){je.get(y.texture).__webglTexture=I,je.get(y.depthTexture).__webglTexture=k;const O=je.get(y);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const k=je.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,k=0){w=y,B=I,L=k;let O=!0,F=null,ee=!1,oe=!1;if(y){const pe=je.get(y);pe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(V.FRAMEBUFFER,null),O=!1):pe.__webglFramebuffer===void 0?b.setupRenderTarget(y):pe.__hasExternalTextures&&b.rebindTextures(y,je.get(y.texture).__webglTexture,je.get(y.depthTexture).__webglTexture);const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(oe=!0);const ye=je.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ye[I])?F=ye[I][k]:F=ye[I],ee=!0):$e.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?F=je.get(y).__webglMultisampledFramebuffer:Array.isArray(ye)?F=ye[k]:F=ye,C.copy(y.viewport),$.copy(y.scissor),Y=y.scissorTest}else C.copy(ie).multiplyScalar(Q).floor(),$.copy(de).multiplyScalar(Q).floor(),Y=he;if(be.bindFramebuffer(V.FRAMEBUFFER,F)&&$e.drawBuffers&&O&&be.drawBuffers(y,F),be.viewport(C),be.scissor($),be.setScissorTest(Y),ee){const pe=je.get(y.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,k)}else if(oe){const pe=je.get(y.texture),Oe=I||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,pe.__webglTexture,k||0,Oe)}J=-1},this.readRenderTargetPixels=function(y,I,k,O,F,ee,oe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=je.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(q=q[oe]),q){be.bindFramebuffer(V.FRAMEBUFFER,q);try{const pe=y.texture,Oe=pe.format,ye=pe.type;if(Oe!==On&&Te.convert(Oe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const me=ye===us&&(Ue.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(ye!==wi&&Te.convert(ye)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ye===yi&&($e.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&k>=0&&k<=y.height-F&&V.readPixels(I,k,O,F,Te.convert(Oe),Te.convert(ye),ee)}finally{const pe=w!==null?je.get(w).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(y,I,k=0){const O=Math.pow(2,-k),F=Math.floor(I.image.width*O),ee=Math.floor(I.image.height*O);b.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,k,0,0,y.x,y.y,F,ee),be.unbindTexture()},this.copyTextureToTexture=function(y,I,k,O=0){const F=I.image.width,ee=I.image.height,oe=Te.convert(k.format),q=Te.convert(k.type);b.setTexture2D(k,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,O,y.x,y.y,F,ee,oe,q,I.image.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,O,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,oe,I.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,O,y.x,y.y,oe,q,I.image),O===0&&k.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(y,I,k,O,F=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ee=y.max.x-y.min.x+1,oe=y.max.y-y.min.y+1,q=y.max.z-y.min.z+1,pe=Te.convert(O.format),Oe=Te.convert(O.type);let ye;if(O.isData3DTexture)b.setTexture3D(O,0),ye=V.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)b.setTexture2DArray(O,0),ye=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);const me=V.getParameter(V.UNPACK_ROW_LENGTH),De=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ct=V.getParameter(V.UNPACK_SKIP_PIXELS),Et=V.getParameter(V.UNPACK_SKIP_ROWS),Lt=V.getParameter(V.UNPACK_SKIP_IMAGES),Je=k.isCompressedTexture?k.mipmaps[F]:k.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Je.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Je.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,y.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,y.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?V.texSubImage3D(ye,F,I.x,I.y,I.z,ee,oe,q,pe,Oe,Je.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ye,F,I.x,I.y,I.z,ee,oe,q,pe,Je.data)):V.texSubImage3D(ye,F,I.x,I.y,I.z,ee,oe,q,pe,Oe,Je),V.pixelStorei(V.UNPACK_ROW_LENGTH,me),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,De),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ct),V.pixelStorei(V.UNPACK_SKIP_ROWS,Et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Lt),F===0&&O.generateMipmaps&&V.generateMipmap(ye),be.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){B=0,L=0,w=null,be.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ac?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===bo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?$i:fd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?Nt:si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class av extends Dd{}av.prototype.isWebGL1Renderer=!0;class fc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cv extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class lu extends Un{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new Pt,uu=new Pt,qs=[],du=new er,lv=new Pt,Kr=new Ge,Zr=new gs;class uv extends Ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),du.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(du)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),Zr.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(i),e.ray.intersectsSphere(Zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_r),uu.multiplyMatrices(i,_r),Kr.matrixWorld=uu,Kr.raycast(e,qs);for(let a=0,o=qs.length;a<o;a++){const c=qs[a];c.instanceId=s,c.object=this,t.push(c)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class hc extends Pi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new H,p=new H,_=[],M=[],x=[],v=[];for(let h=0;h<=i;h++){const R=[],A=h/i;let P=0;h===0&&a===0?P=.5/t:h===i&&c===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const L=B/t;f.x=-e*Math.cos(r+L*s)*Math.sin(a+A*o),f.y=e*Math.cos(a+A*o),f.z=e*Math.sin(r+L*s)*Math.sin(a+A*o),M.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),v.push(L+P,1-A),R.push(l++)}u.push(R)}for(let h=0;h<i;h++)for(let R=0;R<t;R++){const A=u[h][R+1],P=u[h][R],B=u[h+1][R],L=u[h+1][R+1];(h!==0||a>0)&&_.push(A,P,L),(h!==i-1||c<Math.PI)&&_.push(P,B,L)}this.setIndex(_),this.setAttribute("position",new Yn(M,3)),this.setAttribute("normal",new Yn(x,3)),this.setAttribute("uv",new Yn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gt extends Vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const po={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dv{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=l.length;f<p;f+=2){const _=l[f],M=l[f+1];if(_.global&&(_.lastIndex=0),_.test(u))return M}return null}}}const fv=new dv;class _s{constructor(e){this.manager=e!==void 0?e:fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class hv extends Error{constructor(e,t){super(e),this.response=t}}class pv extends _s{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=po.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:i,onError:r});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ti[e],f=l.body.getReader(),p=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),_=p?parseInt(p):0,M=_!==0;let x=0;const v=new ReadableStream({start(h){R();function R(){f.read().then(({done:A,value:P})=>{if(A)h.close();else{x+=P.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:x,total:_});for(let L=0,w=u.length;L<w;L++){const J=u[L];J.onProgress&&J.onProgress(B)}h.enqueue(P),R()}})}}});return new Response(v)}else throw new hv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(p);return l.arrayBuffer().then(M=>_.decode(M))}}}).then(l=>{po.add(e,l);const u=ti[e];delete ti[e];for(let f=0,p=u.length;f<p;f++){const _=u[f];_.onLoad&&_.onLoad(l)}}).catch(l=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let f=0,p=u.length;f<p;f++){const _=u[f];_.onError&&_.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mv extends _s{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=po.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=fs("img");function c(){u(),po.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class gv extends _s{constructor(e){super(e)}load(e,t,i,r){const s=new fn,a=new mv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Od extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ya=new Pt,fu=new H,hu=new H;class _v{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vv extends _v{constructor(){super(new wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xv extends Od{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mv extends Od{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let Ys;class Ud{static getContext(){return Ys===void 0&&(Ys=new(window.AudioContext||window.webkitAudioContext)),Ys}static setContext(e){Ys=e}}class Ev extends _s{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new pv(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Ud.getContext().decodeAudioData(l,function(f){t(f)}).catch(o)}catch(l){o(l)}},i,r);function o(c){r?r(c):console.error(c),s.manager.itemError(e)}}}class Nd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pu(){return(typeof performance>"u"?Date:performance).now()}const Ni=new H,mu=new Gr,yv=new H,Fi=new H;class Sv extends Bt{constructor(){super(),this.type="AudioListener",this.context=Ud.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Nd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ni,mu,yv),Fi.set(0,0,-1).applyQuaternion(mu),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ni.x,r),t.positionY.linearRampToValueAtTime(Ni.y,r),t.positionZ.linearRampToValueAtTime(Ni.z,r),t.forwardX.linearRampToValueAtTime(Fi.x,r),t.forwardY.linearRampToValueAtTime(Fi.y,r),t.forwardZ.linearRampToValueAtTime(Fi.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Ni.x,Ni.y,Ni.z),t.setOrientation(Fi.x,Fi.y,Fi.z,i.x,i.y,i.z)}}class Fd extends Bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const ct=80,Ee=1,Bn=.25,ka=9,Bd=12,Tv=.2,Av=.01,wv=.06,gu=2,pc=100,mc=3,kd=30,bv=!1,Rv="ws://localhost:2567",Cv=7,zd=1.5,Hd=.5,za=20,Gd=1.3,Vd=3,Wd=3,Ha=10,Ga=8,Po=1.8,$d=5,Xd=16,Lo=30,Pv=3,Lv=6,qd=10,Yd=.8,Iv=1.5,gc=1e3,_c=6,jd=1.5,Ki=10233776,Dv=1.5,Kd={MUSIC:.3},mo={MUSIC:!1,SOUND_EFFECTS:!0},Ov=!0,Va=8,Zd=5,go=.3,Jd=10,hs=3,Uv=5099745,Nv=10,Wa=5,Fv=5,_u=0,Bv=1,vc=10,Io=16733986,kv=2,zv=5025616,$a=3,vu=1,Hv=16777215,Gv=.03,Vv=5,Ft={UI:{SCORE_LABEL:"SCORE",KILLS_LABEL:"KILLS",GAME_OVER:{DEATH_REASONS:{WALL_COLLISION:"You crashed into a wall",SELF_COLLISION:"You ate yourself",ENEMY_COLLISION:"You choked on a snek",OBSTACLE_COLLISION:"You crashed into an obstacle",TREE_COLLISION:"You tried to eat a tree",BUSH_COLLISION:"You got tangled in a bush"}}},ALPHA_MODE:{ACTIVATED_MESSAGE:"ALPHA SNEK ACTIVATED!",KILL_MESSAGE:"ALPHA KILL!",ALPHA_KILL_MESSAGES:["ALPHA KILL","DOUBLE KILL","TRIPLE KILL","M-M-M-MONSTER KILL","UNSTOPPABLE","GODLIKE","SNEK KING","SNEK EMPORER","SNEK GOD","THE ONE SNEK TO RULE THEM ALL","YOU ARE OMEGA SNEK"]},POWERUPS:{SPEED_BOOST:"Speed boost!",GHOST_MODE:"Ghost mode!",SHRINK:"Shrinkaaage!",SCORE_MULTIPLIER:"3x rewards!",ENEMY_KILLED_MESSAGES:["MILOS SMELLS","MILOS IS THE BEST","MILOS IS A GOOD SNEK","MILOS IS THE BEST SNEK","MILOS IS BETTER THAN EVERYONE","YOU ATE FILIP!","YOU ATE MILOS!"]},TUTORIAL:{CONTROLS:"Left/Right keys to turn your Snek",MOBILE_CONTROLS:"Press left/right buttons to turn your Snek",OBJECTIVE:"Eat food and other sneks to grow your anaconda. Eat a Snek by eating its tail.",ALPHA_MODE_HINT:"Fill up the alpha meter to become the ALPHA SNEK!"}},qt={BASE_SPEED:2,SPEED_VARIATION:.5,HOP_HEIGHT:.2,HOP_FREQUENCY:1,HOP_FREQUENCY_VARIATION:.5,MAX_DISTANCE:3,DISTANCE_VARIATION:1,DIRECTION_CHANGE_PROBABILITY:.005,MOVE_INTERVAL:.5},Wv=10,Xa=2,Do=.2,Oo=3,is=4620980,$v=.2,Xv=3,_o={normal:89,speed:5,shrink:1,score_x2:3,ghost:2},wt={NORMAL:"normal",CASUAL:"casual"},qv={[wt.NORMAL]:{SNAKE_SPEED_MULTIPLIER:1,OBSTACLE_COUNT_MULTIPLIER:1,FOOD_COUNT_MULTIPLIER:1,ALPHA_POINTS_THRESHOLD_MULTIPLIER:1,ALPHA_MODE_DURATION_MULTIPLIER:1,COLLISION_FORGIVENESS:.2},[wt.CASUAL]:{SNAKE_SPEED_MULTIPLIER:.7,OBSTACLE_COUNT_MULTIPLIER:.7,FOOD_COUNT_MULTIPLIER:1.5,ALPHA_POINTS_THRESHOLD_MULTIPLIER:.7,ALPHA_MODE_DURATION_MULTIPLIER:1.5,COLLISION_FORGIVENESS:.5}},z={core:null,scene:null,camera:null,renderer:null,materials:null,lights:{ambientLight:null,directionalLight:null},clock:null,frameCount:0,simulation:{tickRate:30,fixedDelta:1/30,accumulator:0,time:0,lastTimeMs:0,maxSubSteps:5},gameMode:Zv(),playerSnake:{segments:[],direction:{x:1,y:0,z:0},nextDirection:{x:1,y:0,z:0},speed:Bn,moveTimer:0,animationFrame:0,animationTimer:0,scoreMultiplier:1,ghostModeActive:!1,activePowerUp:null,enlargedHeadUntil:0,alphaMode:{active:!1,startTime:0,endTime:0,lastScoreThreshold:0}},enemies:{list:[],kills:0},food:{positions:[],meshes:[]},obstacles:{list:[],group:null},particles:{},environment:{groundMesh:null,wallGroup:null,grassInstances:null,skybox:null},cameraEffects:{shake:{active:!1,startTime:0,duration:0,intensity:0,originalPosition:new H}},score:{current:0,multiplier:1},highScore:Yv(),stats:{applesEaten:0,frogsEaten:0,snakesEaten:0},flags:{gameOver:!1,gameStarted:!1,gamePaused:!1,gameRunning:!1,restartRequested:!1,animating:!1,audioHealthCheckRun:!1,useCoreSimulation:!0},inputQueue:[],network:{enabled:!1,status:"idle",room:null,sessionId:null,lastSnapshotTick:0,sendInput:null},cleanupInput:null};function Yv(){if(typeof localStorage>"u")return 0;try{const n=localStorage.getItem("alphaSnek_highScore");return n?parseInt(n,10):0}catch(n){return console.warn("Could not load high score from localStorage:",n),0}}function jv(n){if(!(typeof localStorage>"u"))try{localStorage.setItem("alphaSnek_highScore",n.toString()),console.log("High score saved:",n)}catch(e){console.warn("Could not save high score to localStorage:",e)}}function Kv(n){if(!(typeof localStorage>"u"))try{localStorage.setItem("alphaSnek_gameMode",n),console.log("Game mode saved:",n),z.gameMode=n}catch(e){console.warn("Could not save game mode to localStorage:",e)}}function xc(){const n=z.gameMode===wt.CASUAL?wt.CASUAL:wt.NORMAL;return qv[n]}function ui(n){const e=xc();switch(n){case"BASE_SNAKE_SPEED":return Bn*e.SNAKE_SPEED_MULTIPLIER;case"NUM_OBSTACLES":return Math.round(kd*e.OBSTACLE_COUNT_MULTIPLIER);case"NUM_INITIAL_FOOD":return Math.round(pc*e.FOOD_COUNT_MULTIPLIER);case"ALPHA_POINTS_THRESHOLD":return Math.round(Lo*e.ALPHA_POINTS_THRESHOLD_MULTIPLIER);case"ALPHA_MODE_DURATION":return _c*e.ALPHA_MODE_DURATION_MULTIPLIER;case"COLLISION_FORGIVENESS":return e.COLLISION_FORGIVENESS;default:return console.warn(`No adjustment found for setting: ${n}`),null}}function Zv(){if(typeof localStorage>"u")return wt.NORMAL;try{return localStorage.getItem("alphaSnek_gameMode")===wt.CASUAL?wt.CASUAL:wt.NORMAL}catch(n){return console.warn("Could not load game mode from localStorage:",n),wt.NORMAL}}function Jv(){console.log("Resetting game state for new game..."),z.playerSnake.segments=[],z.playerSnake.direction={x:1,y:0,z:0},z.playerSnake.nextDirection={x:1,y:0,z:0},z.playerSnake.speed=Bn,z.playerSnake.moveTimer=0,z.playerSnake.animationFrame=0,z.playerSnake.animationTimer=0,z.playerSnake.scoreMultiplier=1,z.playerSnake.ghostModeActive=!1,z.playerSnake.activePowerUp=null,z.playerSnake.enlargedHeadUntil=0,z.playerSnake.alphaMode={active:!1,startTime:0,endTime:0,lastScoreThreshold:0},z.score.current=0,z.score.multiplier=1,z.enemies.kills=0,z.stats.applesEaten=0,z.stats.frogsEaten=0,z.stats.snakesEaten=0,z.flags.gameOver=!1,z.flags.gameRunning=!0,z.flags.restartRequested=!1,z.flags.animating=!1,z.clock&&(z.playerSnake.moveTimer=0,z.playerSnake.animationTimer=0)}const Ut={snakeSheet:"assets/svg/snake_spritesheet_improved.svg",enemySnakeSheet:"assets/svg/enemy_snake_spritesheet.svg",particle:"assets/svg/particle.svg",skybox:"assets/svg/skybox_blocky.svg",groundTile:"assets/svg/grass.svg",wallStone:"assets/svg/wall_stone.svg",wallIvy:"assets/textures/ivy_wall.png",foodNormal:"assets/svg/food_normal.svg",frogSpeed:"assets/textures/frogs/frog_speed.svg",frogShrink:"assets/textures/frogs/frog_shrink.svg",frogScore:"assets/textures/frogs/frog_score.svg",frogGhost:"assets/textures/frogs/frog_ghost.svg",treeLeaves:"assets/svg/leaves.png",treeTrunk:"assets/textures/tree.png",flowerBush:"assets/textures/flower_bush.png",pinkFlower:"assets/textures/pink_flow.png",whiteDaisy:"assets/textures/white_daisy.png",whiteTulip:"assets/textures/white_tulip.png",yellowFlower:"assets/textures/yellow_flower.png"},ci=[{type:"normal",svgPath:Ut.foodNormal,colorHint:new He(14494720),powerUpDuration:0,description:"Normal Food",effectText:"+1"},{type:"speed",svgPath:Ut.frogSpeed,colorHint:new He(9159498),powerUpDuration:za,description:"Speed Boost Frog",effectText:Ft.POWERUPS.SPEED_BOOST},{type:"shrink",svgPath:Ut.frogShrink,colorHint:new He(10233776),powerUpDuration:0,description:"Shrink Frog",effectText:Ft.POWERUPS.SHRINK},{type:"score_x2",svgPath:Ut.frogScore,colorHint:new He(16766720),powerUpDuration:Ha,description:"Score Multiplier Frog",effectText:Ft.POWERUPS.SCORE_MULTIPLIER},{type:"ghost",svgPath:Ut.frogGhost,colorHint:new He(12434877),powerUpDuration:Ga,description:"Ghost Mode Frog",effectText:Ft.POWERUPS.GHOST_MODE}],xu=[{type:"tree"},{type:"bush"}],Ve={cube:new oi(1,1,1),particle:new ai(1,1),groundPlane:null,grassBlade:new ai(.1,.6)};Ve.grassBlade.translate(0,.3,0);function Qv(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600}const An={shadows:!0,particles:!0,detailLevel:"high",textureQuality:1,initializeForCurrentDevice:function(){const n=Qv();return n?(this.shadows=!1,this.detailLevel="low",this.textureQuality=.5,console.log("Mobile device detected - using low performance settings")):(this.shadows=!0,this.detailLevel="high",this.textureQuality=1,console.log("Desktop device detected - using high performance settings")),n}};function ex(){const n=new cv;return n.fog=new fc(Hv,Gv),n}function tx(){const n=new Sn(75,window.innerWidth/window.innerHeight,.1,ct*Ee*6);return n.position.set(0,Bd,ka),n}function nx(n){const e=new Dd({canvas:n,antialias:!0});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=An.shadows,An.shadows&&(e.shadowMap.type=id),e.outputColorSpace=Nt,e}function ix(n){const e=new Mv(13421772,.65);n.add(e);const t=new xv(16772829,.8);if(t.position.set(ct*.15,ct*.25,ct*.1),t.castShadow=An.shadows,An.shadows){t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=.5,t.shadow.camera.far=ct*Ee*.8;const i=ct*Ee*.6;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-.001}return n.add(t),n.add(t.target),{ambientLight:e,directionalLight:t}}function rx(n,e){if(!e)return console.error("Skybox texture not loaded!"),null;const t=ct*Ee*5,i=new oi(t,t,t),r=new Dr({map:e,side:nn,fog:!1}),s=new Ge(i,r);return n.add(s),s}function sx(n,e){if(!e)return console.error("Ground material not created!"),null;const t=ct*Ee;Ve.groundPlane=new ai(t,t);const i=new Ge(Ve.groundPlane,e);return i.rotation.x=-Math.PI/2,i.position.y=0,i.receiveShadow=An.shadows,n.add(i),i}function ox(n,e){if(!e)return console.error("Wall material not created!"),null;const t=new qn,i=ct*Ee/2,r=ct*Ee+vu*Ee,s=$a*Ee,a=vu*Ee,o=new oi(r,s,a),c=new oi(a,s,r),l=s/2,u=new Ge(o,e);u.position.set(0,l,-i-a/2),An.shadows&&(u.castShadow=!0,u.receiveShadow=!0),t.add(u);const f=new Ge(o,e);f.position.set(0,l,i+a/2),An.shadows&&(f.castShadow=!0,f.receiveShadow=!0),t.add(f);const p=new Ge(c,e);p.position.set(i+a/2,l,0),An.shadows&&(p.castShadow=!0,p.receiveShadow=!0),t.add(p);const _=new Ge(c,e);return _.position.set(-i-a/2,l,0),An.shadows&&(_.castShadow=!0,_.receiveShadow=!0),t.add(_),n.add(t),t}function ax(n,e){if(!e)return console.error("Grass material not created!"),null;const t=new uv(Ve.grassBlade,e,void 0);t.castShadow=!1,t.receiveShadow=!0,t.instanceMatrix.setUsage(zh);const i=new Bt;for(let r=0;r<void 0;r++){i.position.set((Math.random()-.5)*(ct*Ee),0,(Math.random()-.5)*(ct*Ee)),i.rotation.y=Math.random()*Math.PI*2;const s=(.8+Math.random()*.4)*Ee;i.scale.set(s,s,s),i.updateMatrix(),t.setMatrixAt(r,i.matrix)}return t.instanceMatrix.needsUpdate=!0,n.add(t),t}function cx(){Ve.particle=new ai(Xa,Xa)}function lx(n,e){var a;cx();const t=sx(n,e.ground),i=ox(n,e.wall),r=ax(n,e.grass),s=rx(n,(a=e.skybox)==null?void 0:a.map);return{groundMesh:t,wallGroup:i,grassInstances:r,skybox:s}}const qa=["error","warn","info","debug","trace"],ux={enabled:!1,level:"info",categories:{system:!0,physics:!0,input:!0,render:!0,audio:!0,gameplay:!0,ai:!0,performance:!0},showTimestamp:!0};let an={...ux};function dx(){const n=new URLSearchParams(window.location.search);if(n.has("debug")&&(an.enabled=n.get("debug")==="true"),n.has("loglevel")){const e=n.get("loglevel").toLowerCase();qa.includes(e)&&(an.level=e)}if(n.has("logcategories")){const e=n.get("logcategories").toLowerCase().split(",");Object.keys(an.categories).forEach(t=>{an.categories[t]=!1}),e.forEach(t=>{an.categories.hasOwnProperty(t)&&(an.categories[t]=!0)})}if(an.enabled){const e=Object.entries(an.categories).filter(([,t])=>t).map(([t])=>t);console.log(`%c[ALPHA_SNEK Logger]%c Initialized | Level: ${an.level} | Categories: ${e.join(", ")}`,"color: #4CAF50; font-weight: bold;","color: inherit;")}return an.enabled}function fx(n,...e){const t=[...e];if(an.showTimestamp){const r=new Date().toISOString().substr(11,8);t.unshift(`[${r}]`)}return t.unshift(`[${n}]`),t}function hx(n){switch(n){case"error":return"color: #FF5252; font-weight: bold;";case"warn":return"color: #FFC107; font-weight: bold;";case"info":return"color: #2196F3; font-weight: bold;";case"debug":return"color: #9E9E9E;";case"trace":return"color: #757575;";default:return"color: inherit;"}}function Tt(n,e,...t){if(!an.enabled||!an.categories[e])return;const i=qa.indexOf(an.level);if(qa.indexOf(n)>i)return;const s=fx(e,...t),a=hx(n);switch(n){case"error":console.error(`%c${s.shift()}%c`,a,"color: inherit;",...s);break;case"warn":console.warn(`%c${s.shift()}%c`,a,"color: inherit;",...s);break;case"info":console.info(`%c${s.shift()}%c`,a,"color: inherit;",...s);break;case"debug":case"trace":default:console.log(`%c${s.shift()}%c`,a,"color: inherit;",...s)}}const X={error:(n,...e)=>Tt("error",n,...e),warn:(n,...e)=>Tt("warn",n,...e),info:(n,...e)=>Tt("info",n,...e),debug:(n,...e)=>Tt("debug",n,...e),trace:(n,...e)=>Tt("trace",n,...e),system:{error:(...n)=>Tt("error","system",...n),warn:(...n)=>Tt("warn","system",...n),info:(...n)=>Tt("info","system",...n),debug:(...n)=>Tt("debug","system",...n),trace:(...n)=>Tt("trace","system",...n)},gameplay:{error:(...n)=>Tt("error","gameplay",...n),warn:(...n)=>Tt("warn","gameplay",...n),info:(...n)=>Tt("info","gameplay",...n),debug:(...n)=>Tt("debug","gameplay",...n),trace:(...n)=>Tt("trace","gameplay",...n)},performance:{error:(...n)=>Tt("error","performance",...n),warn:(...n)=>Tt("warn","performance",...n),info:(...n)=>Tt("info","performance",...n),debug:(...n)=>Tt("debug","performance",...n),trace:(...n)=>Tt("trace","performance",...n)},audio:{error:(...n)=>Tt("error","audio",...n),warn:(...n)=>Tt("warn","audio",...n),info:(...n)=>Tt("info","audio",...n),debug:(...n)=>Tt("debug","audio",...n),trace:(...n)=>Tt("trace","audio",...n)}};function px(){return an.enabled}async function rn(n,e,t=!0,i=null){return new Promise((r,s)=>{n.load(e,a=>{t&&(a.colorSpace=Nt),i&&i(a),r(a)},void 0,a=>{X.system.error(`Failed to load texture: ${e}`,a),s(a)})})}async function mx(){const n=new gv,e={snake:{},enemy:{},food:{},obstacle:{},particle:null,ground:null,wall:null,grass:null,skybox:null};let t,i;try{const[r,s,a,o,c,l,u,f,p,_,M,x,v,h,...R]=await Promise.all([rn(n,Ut.snakeSheet,!0,w=>{w.magFilter=Dt,w.minFilter=Dt,t=w}),rn(n,Ut.enemySnakeSheet,!0,w=>{w.magFilter=Dt,w.minFilter=Dt,i=w}),rn(n,Ut.particle,!0),rn(n,Ut.skybox,!0,w=>{w.magFilter=Dt,w.minFilter=bt}),rn(n,Ut.groundTile,!0,w=>{w.wrapS=Ln,w.wrapT=Ln,w.repeat.set(ct/4,ct/4),w.magFilter=bt,w.minFilter=en}),rn(n,Ut.wallStone,!0,w=>{w.wrapS=Ln,w.wrapT=Ln,w.repeat.set(ct/3,$a*1),w.magFilter=bt,w.minFilter=en}),rn(n,Ut.wallIvy,!0,w=>{w.wrapS=Ln,w.wrapT=Ln,w.repeat.set(ct/3,$a*1),w.magFilter=bt,w.minFilter=en}),rn(n,Ut.treeLeaves,!0,w=>{w.magFilter=bt,w.minFilter=en}),rn(n,Ut.treeTrunk,!0,w=>{w.wrapS=Ln,w.wrapT=Ln,w.repeat.set(1,1),w.magFilter=bt,w.minFilter=en}),rn(n,Ut.flowerBush,!0,w=>{w.magFilter=bt,w.minFilter=en}),rn(n,Ut.pinkFlower,!0,w=>{w.magFilter=bt,w.minFilter=en}),rn(n,Ut.whiteDaisy,!0,w=>{w.magFilter=bt,w.minFilter=en}),rn(n,Ut.whiteTulip,!0,w=>{w.magFilter=bt,w.minFilter=en}),rn(n,Ut.yellowFlower,!0,w=>{w.magFilter=bt,w.minFilter=en}),...ci.map(w=>rn(n,w.svgPath,!0,J=>{J.magFilter=bt,J.minFilter=en}))]);X.system.info("Core textures loaded."),e.particle=new Dr({map:a,transparent:!0,vertexColors:!1,side:Vt,depthWrite:!1,blending:Pa});const A={side:_n},P=(w,J,T)=>{if(!T)return new Gt({color:16711935,...A});const C=new Gt(A);C.map=T.clone(),C.map.needsUpdate=!0;const $=1/gu;return C.map.offset.set(w*$,J*$),C.map.repeat.set($,$),C};e.snake.head1=P(0,1,t),e.snake.head2=P(1,1,t),e.snake.body1=P(0,0,t),e.snake.body2=P(1,0,t);const B={side:_n},L=(w,J,T)=>{if(!T)return new Gt({color:16711935,...B});const C=new Gt(B);C.map=T.clone(),C.map.needsUpdate=!0;const $=1/gu;return C.map.offset.set(w*$,J*$),C.map.repeat.set($,$),C};return e.enemy.head1=L(0,1,i),e.enemy.head2=L(1,1,i),e.enemy.body1=L(0,0,i),e.enemy.body2=L(1,0,i),ci.forEach((w,J)=>{const T=R[J];w.type==="normal"?T?e.food[w.type]=new Gt({map:T,side:_n,color:16777215}):e.food[w.type]=new Gt({color:w.colorHint||16711935,emissive:2236962}):e.food[w.type]=new Gt({color:w.colorHint,side:_n,emissive:2236962,transparent:w.type==="ghost",opacity:w.type==="ghost"?.7:1})}),e.obstacle.tree_trunk=new Gt({map:p,color:9858867}),e.obstacle.tree_leaves=new Gt({map:f,color:3706428,transparent:!0,alphaTest:.5,side:Vt}),e.obstacle.bush=new Gt({color:6856504}),e.obstacle.flower_bush=new Gt({map:_,color:16777215,transparent:!0,alphaTest:.5,side:Vt}),e.obstacle.pink_flower=new Gt({map:M,color:16777215,transparent:!0,alphaTest:.5,side:Vt}),e.obstacle.white_daisy=new Gt({map:x,color:16777215,transparent:!0,alphaTest:.5,side:Vt}),e.obstacle.white_tulip=new Gt({map:v,color:16777215,transparent:!0,alphaTest:.5,side:Vt}),e.obstacle.yellow_flower=new Gt({map:h,color:16777215,transparent:!0,alphaTest:.5,side:Vt}),e.ground=new Gt({map:c,side:_n,color:is||16777215}),X.system.info("Ground material created with color:",is?"#"+is.toString(16).padStart(6,"0"):"No tint (white)"),e.wall=new Gt({map:u,color:16777215,side:Vt}),e.grass=new Gt({color:5606191,side:Vt}),e.skybox=new Dr({map:o,side:nn,fog:!1}),X.system.info("Materials created successfully."),e}catch(r){return X.system.error("Error during texture loading or material creation:",r),e}}const Xt=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600;let Xn=null,Zi=null,Ne=null,Mt=null,Ur=!1,Qd=!1,Ya=!1;const ja=Xt?5:12,yt=[],jn={},rt={MOVEMENT:"movement",EFFECT:"effect",VOICE:"voice",EXPLOSION:"explosion",UI:"ui"},ii={[rt.MOVEMENT]:0,[rt.EFFECT]:0,[rt.VOICE]:0,[rt.EXPLOSION]:0,[rt.UI]:0},ef={[rt.MOVEMENT]:Xt?1:2,[rt.EFFECT]:Xt?2:4,[rt.VOICE]:1,[rt.EXPLOSION]:Xt?1:2,[rt.UI]:1},vs=[{name:"movePlayerSnake1",path:"assets/sounds/move_player_snake_1.ogg",critical:!0,category:rt.MOVEMENT},{name:"movePlayerSnake2",path:"assets/sounds/move_player_snake_2.ogg",critical:!1,category:rt.MOVEMENT},{name:"eatApple",path:"assets/sounds/eat_apple.ogg",critical:!0,category:rt.EFFECT},{name:"eatFrog",path:"assets/sounds/eat_frog.ogg",critical:!0,category:rt.EFFECT},{name:"eatSnake",path:"assets/sounds/eat_snake.ogg",critical:!0,category:rt.EFFECT},{name:"playerDeath",path:"assets/sounds/died_player.ogg",critical:!0,category:rt.EFFECT},{name:"alphaKillExplode1",path:"assets/sounds/alpha_kill_explode_1.ogg",critical:!0,category:rt.EXPLOSION},{name:"alphaKillExplode2",path:"assets/sounds/alpha_kill_explode_2.ogg",critical:!Xt,category:rt.EXPLOSION},{name:"alphaKill1",path:"assets/sounds/alpha_kill_1_firstblood.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill2",path:"assets/sounds/alpha_kill_2_Double_Kill.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill3",path:"assets/sounds/alpha_kill_3triple_kill.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill4Monster",path:"assets/sounds/alpha_kill_4_MonsterKill.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill4Unstoppable",path:"assets/sounds/alpha_kill_4_Unstoppable.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill5",path:"assets/sounds/alpha_kill_5_GodLike.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill6",path:"assets/sounds/alpha_kill_6_Ownage.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill7",path:"assets/sounds/alpha_kill_7_Killing_Spree.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill8",path:"assets/sounds/alpha_kill_8_UltraKill.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill9",path:"assets/sounds/alpha_kill_9_Rampage.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill10",path:"assets/sounds/alpha_kill_10_MegaKill.mp3",critical:!Xt,category:rt.VOICE},{name:"alphaKill11",path:"assets/sounds/alpha_kill_11_HolyShit.mp3",critical:!Xt,category:rt.VOICE}];let dn=mo.MUSIC,gn=mo.SOUND_EFFECTS,br=Kd.MUSIC,Xi=Kd.SOUND;const vo=!0;let Sa=0,Mu=0;const gx="assets/music/Darkman007 - Sad song.mp3";function _x(n){X.audio.info("Initializing audio system...");try{Xn=new Sv,n.add(Xn),Ne=Xn.context,vo&&(console.log("Audio context state at init:",Ne?Ne.state:"No context"),console.log("AudioListener created:",!!Xn)),/iPhone|iPad|iPod|Safari/i.test(navigator.userAgent)&&!navigator.userAgent.includes("Chrome")&&(console.log("Safari/iOS detected, adding special audio handling"),document.addEventListener("click",function e(){if(Ya)return;const t=Ne.createBuffer(1,1,22050),i=Ne.createBufferSource();i.buffer=t,i.connect(Ne.destination),i.start(0),console.log("Safari audio unlock attempt"),Ya=!0,document.removeEventListener("click",e)},{once:!0})),Zi=new Ev,Ex(),Mt=new Fd(Xn),yx(),vx(),X.audio.info("Audio system initialized"),Mx(),setTimeout(()=>{Ne&&Ne.state!=="running"&&to()},1e3),setTimeout(()=>{Ne&&Ne.state!=="running"&&to()},5e3),window.testAudio=Ox,window.fixAudio=to,window.playTestSound=Ax,vo&&(console.log("Audio debug functions available in console:"),console.log("- window.testAudio() - Test the audio system"),console.log("- window.fixAudio() - Try to resume audio context"),console.log("- window.playTestSound() - Force play a test sound"))}catch(e){X.audio.error("Error initializing audio system:",e),console.error("Audio init error:",e)}}function vx(){try{if(X.audio.info("Initializing sound effects..."),!Zi){console.error("Audio loader not initialized");return}vs.forEach(n=>{n.critical&&Mc(n)}),Ov&&setTimeout(()=>{xx()},2e3)}catch(n){X.audio.error("Error initializing sound effects:",n),console.error("Error initializing sound effects:",n)}}function xx(){console.log("Preloading all sound effects in background...");try{let i=function(){if(t>=e.length){console.log("Background preloading complete!");return}const r=e[t];t++,Zi.load(r.path,function(s){jn[r.name]=s,console.log(`Preloaded sound: ${r.name}`),setTimeout(i,100)},function(s){},function(s){console.error(`Error preloading sound ${r.name}:`,s),setTimeout(i,100)})};var n=i;const e=vs.filter(r=>!r.critical&&!jn[r.name]);if(e.length===0){console.log("All sounds already loaded!");return}let t=0;i()}catch(e){console.error("Error in preloadAllSounds:",e)}}function Mx(){["click","touchstart","touchend","mousedown","keydown"].forEach(e=>{document.addEventListener(e,Rr,{once:!0}),document.body.addEventListener(e,Rr,{once:!0}),window.addEventListener(e,Rr,{once:!0})}),console.log("Set up multiple interaction handlers for audio")}function to(){if(console.log("Attempting to forcibly start audio..."),Ne){if(Ne.state!=="running")console.log("Resuming audio context from state:",Ne.state),Ne.resume().then(()=>{if(console.log("Successfully resumed audio context, new state:",Ne.state),dn&&Ur&&Mt&&!Mt.isPlaying){dn=!0;try{Mt.play(),console.log("Started background music")}catch(n){console.error("Error playing background music:",n)}}setTimeout(()=>{gn&&(gn=!0,Nx())},300),Qd=!0,Ya=!0}).catch(n=>{console.error("Failed to resume audio context:",n)});else if(console.log("Audio context already running"),dn&&Ur&&Mt&&!Mt.isPlaying)try{Mt.play(),console.log("Started background music (context already running)")}catch(n){console.error("Error playing background music:",n)}}else console.error("No audio context available")}function Rr(){X.audio.info("Handling user interaction for audio...");try{to(),["click","touchstart","touchend","mousedown","keydown"].forEach(e=>{document.removeEventListener(e,Rr),document.body.removeEventListener(e,Rr),window.removeEventListener(e,Rr)}),X.audio.info("Audio system fully initialized by user interaction")}catch(n){X.audio.error("Error in handleFirstUserInteraction:",n),console.error("First interaction error:",n)}}function Ex(){X.audio.info(`Initializing sound pool with ${ja} slots`);try{for(let n=0;n<ja;n++){const e=new Fd(Xn);try{e.setVolume(Xi||.5)}catch(t){console.error("Error setting audio volume:",t),e.gain.gain.value=Xi||.5}yt.push({audio:e,inUse:!1,name:null,category:null,startTime:0})}vo&&console.log(`Created sound pool with ${yt.length} audio objects`)}catch(n){X.audio.error("Error initializing sound pool:",n),console.error("Sound pool init error:",n)}}function Mc(n){if(!Zi){X.audio.error("Cannot load sound effect - audio loader not initialized");return}console.log(`Loading sound effect: ${n.name} from ${n.path}`);try{Zi.load(n.path,e=>{jn[n.name]=e,vo&&console.log(`Successfully loaded sound effect: ${n.name}`)},e=>{X.audio.debug(`Sound effect ${n.name} loading: ${(e.loaded/e.total*100).toFixed(0)}%`)},e=>{X.audio.error(`Error loading sound effect ${n.name}:`,e),console.error(`Failed to load sound ${n.name} from ${n.path}:`,e)})}catch(e){X.audio.error(`Critical error loading sound effect ${n.name}:`,e),console.error(`Critical error loading sound ${n.name}:`,e)}}function yx(){if(!Zi||!Xn){X.audio.error("Cannot load background music - audio system not initialized");return}X.audio.info("Loading background music...");try{Zi.load(gx,n=>{Mt&&(Mt.setBuffer(n),Mt.setLoop(!0),Mt.setVolume(br),Ur=!0,X.audio.info("Background music loaded successfully"),dn&&Qd&&Ji())},n=>{X.audio.debug(`Music loading: ${(n.loaded/n.total*100).toFixed(0)}%`)},n=>{X.audio.error("Error loading background music:",n)})}catch(n){X.audio.error("Critical error loading background music:",n)}}function tf(n){try{if(!Xn||!yt||yt.length===0)return console.error("Cannot get sound - invalid audio system state"),null;if(ii[n]>=ef[n]){let o=null,c=1/0;for(let l=0;l<yt.length;l++){const u=yt[l];u.category===n&&u.inUse&&u.audio.startTime&&u.audio.startTime<c&&(c=u.audio.startTime,o=u)}if(o){const l=o.audio;if(l.isPlaying)try{l.stop(),l.source.onended=null,l.source=null,l.buffer=null}catch(u){console.warn("Non-critical error stopping sound:",u)}return l}}for(let o=0;o<yt.length;o++){const c=yt[o];if(!c.inUse||!c.audio.isPlaying){if(c.inUse=!0,c.category=n,ii[n]++,c.audio.isPlaying)try{c.audio.stop(),c.audio.source.onended=null,c.audio.source=null,c.audio.buffer=null}catch(l){console.warn("Non-critical error resetting sound:",l)}return c.audio}}const e=[rt.MOVEMENT,rt.EFFECT,rt.EXPLOSION,rt.VOICE],t=e.indexOf(n),i=e.slice(0,t);let r=null,s=1/0;for(let o=0;o<yt.length;o++){const c=yt[o];i.includes(c.category)&&c.inUse&&c.audio.startTime&&c.audio.startTime<s&&(s=c.audio.startTime,r=c)}if(r){const o=r.audio;if(o.isPlaying)try{o.stop(),o.source.onended=null,o.source=null,o.buffer=null}catch(c){console.warn("Non-critical error stopping stolen sound:",c)}return ii[r.category]--,r.category=n,ii[n]++,o}const a=yt[0];if(a){const o=a.audio;if(o.isPlaying)try{o.stop(),o.source.onended=null,o.source=null,o.buffer=null}catch(c){console.warn("Non-critical error stopping fallback sound:",c)}return a.category&&ii[a.category]--,a.inUse=!0,a.category=n,ii[n]++,o}return null}catch(e){return console.error("Error in getAvailableSound:",e),null}}function vn(n,e,t=!1){if(!gn)return!1;try{const i=vs.find(o=>o.name===n);if(!i)return X.audio.error(`Sound effect not found: ${n}`),!1;const r=i.category||rt.EFFECT;if(!t&&ii[r]>=ef[r])return!1;if(!jn[n])return Mc(i),console.log(`Loading sound effect: ${n} from ${i.path}`),!1;const s=tf(r);if(!s)return console.error("Cannot play sound - no available sound objects"),!1;s.setBuffer(jn[n]);const a=e!==void 0&&!isNaN(e)&&isFinite(e)?Math.min(Math.max(e,0),1):Xi||.5;try{s.gain&&s.gain.gain?s.gain.gain.value=a:s.setVolume(a)}catch(o){console.error("Error setting volume:",o);try{s.gain.gain.setValueAtTime(a,Ne.currentTime)}catch(c){console.error("Critical error setting volume, using fixed value:",c),s.gain&&s.gain.gain&&(s.gain.gain.value=.3)}}return s.startTime=Ne.currentTime,s.play(),s.onEnded=()=>{const o=yt.findIndex(c=>c.audio===s);if(o!==-1){const c=yt[o].category;c&&ii[c]--,yt[o].inUse=!1,yt[o].name=null,yt[o].category=null}},!0}catch(i){return X.audio.error(`Error playing sound effect ${n}:`,i),console.error(`Error playing ${n}:`,i),!1}}function Sx(){if(gn)try{if(Sa=(Sa+1)%4,Sa!==0)return;const n=window.isAlphaMode?"movePlayerSnake2":"movePlayerSnake1";if(!vn(n,.4)&&!jn[n]){const t=vs.find(i=>i.name===n);t&&(Mc(t),X.audio.debug(`Attempted to load missing movement sound: ${n}`))}Math.random()<.1&&Tx()}catch(n){console.error("Error playing player movement sound:",n)}}function Tx(){try{for(let n=0;n<yt.length;n++){const e=yt[n];e.inUse&&!e.audio.isPlaying&&(e.inUse=!1,e.name=null,e.category&&(ii[e.category]--,e.category=null),X.audio.debug("Reset stalled sound in pool"))}}catch(n){console.error("Error resetting sound pool:",n)}}function Ax(){console.log("Attempting to force-play a test sound...");try{Ne&&Ne.state!=="running"?(console.log("Audio context not running, attempting to resume..."),Ne.resume().then(()=>{console.log("Audio context resumed, now trying to play sound"),n()}).catch(e=>{console.error("Failed to resume audio context:",e),n()})):n()}catch(e){console.error("Error in playTestSound:",e)}function n(){try{const e=Ne.createOscillator(),t=Ne.createGain();t.gain.value=.1,e.connect(t),t.connect(Ne.destination),e.frequency.value=440,e.start(0),console.log("Test tone started"),setTimeout(()=>{e.stop(),console.log("Test tone stopped"),console.log("Attempting to play movePlayerSnake1 sound...");const i=vn("movePlayerSnake1");console.log("Sound effect play result:",i)},1e3)}catch(e){console.error("Failed to play oscillator:",e)}}}function Ji(){if(!Ur||!dn||!Mt)return!1;try{return Mt.isPlaying||(X.audio.info("Playing background music..."),Mt.setLoop(!0),Mt.setVolume(br),Mt.play()),!0}catch(n){return X.audio.error("Error playing background music:",n),Ne&&Ne.state!=="running"&&Ne.resume().catch(e=>{X.audio.warn("Could not resume audio context:",e)}),!1}}function js(n){return n!==void 0?dn=n:dn=!dn,console.log(`Music toggled to: ${dn?"ON":"OFF"}`),dn?Ur&&Mt&&Ji():Mt&&Mt.isPlaying&&Ec(),dn&&Ne&&Ne.state!=="running"&&Ne.resume().catch(e=>console.error("Error resuming audio context:",e)),dn}function wx(n){return n!==void 0?gn=n:gn=!gn,console.log(`Sound effects toggled to: ${gn?"ON":"OFF"}`),gn||yt.forEach(e=>{e&&e.audio&&e.audio.isPlaying&&(e.audio.stop(),e.inUse=!1)}),gn&&Ne&&Ne.state!=="running"&&Ne.resume().catch(e=>console.error("Error resuming audio context:",e)),gn}function bx(){return br}function Rx(){return Xi}function Cx(n){if(n<0||n>1){X.audio.warn(`Invalid music volume: ${n}. Must be between 0 and 1.`);return}br=n,Mt&&(Mt.setVolume(br),X.audio.info(`Music volume set to: ${br}`))}function Px(n){if(n<0||n>1){X.audio.warn(`Invalid sound volume: ${n}. Must be between 0 and 1.`);return}Xi=n,yt.forEach(e=>{e&&e.audio.isObject3D&&e.audio.setVolume(Xi)}),X.audio.info(`Sound effects volume set to: ${Xi}`)}function nf(){if(!gn)return;const n=["alphaKill1","alphaKill2","alphaKill3","alphaKill4Monster","alphaKill4Unstoppable","alphaKill5","alphaKill6","alphaKill7","alphaKill8","alphaKill9","alphaKill10","alphaKill11"],e=Mu%n.length,t=n[e];vn(t),Mu++,setTimeout(()=>vn("alphaKillExplode1"),100)}function Ec(){Mt&&Mt.isPlaying&&(X.audio.info("Pausing background music"),Mt.pause())}function Lx(){X.audio.info("Cleaning up audio resources...");const n=Mt&&Mt.isPlaying;try{if(yt.forEach(e=>{if(e&&e.audio.isPlaying)try{e.audio.stop(),e.inUse=!1,e.name=null}catch{}}),Ne&&Ne.state!=="running"){X.audio.warn(`Audio context is in state: ${Ne.state}, attempting recovery`);try{Ne.resume().catch(e=>{X.audio.warn("Could not resume audio context:",e)})}catch{}}}catch(e){X.audio.error("Error during audio cleanup:",e)}return X.audio.info("Sound effects stopped and cleaned up (music preserved)"),n}function Ix(){dn&&Ur&&Mt&&!Mt.isPlaying&&(X.audio.info("Attempting to restore background music playback"),setTimeout(()=>{Ji()},100))}function Dx(){if(!(!Xn||!Ne))try{Ne.state!=="running"&&(X.audio.warn(`Audio health check: context is ${Ne.state}, attempting recovery`),Ne.resume().catch(e=>{X.audio.error("Failed to resume audio context:",e)}));let n=0;if(yt.forEach(e=>{e.audio.isPlaying&&n++}),n>ja-1){X.audio.warn(`Audio health check: ${n} sounds playing, cleaning up`);let e=null,t=1/0;yt.forEach(i=>{i.audio.isPlaying&&i.audio.startTime&&i.audio.startTime<t&&(t=i.audio.startTime,e=i)}),e&&(e.audio.stop(),e.inUse=!1,X.audio.info(`Stopped oldest sound: ${e.name||"unknown"}`))}}catch(n){X.audio.error("Error in audio health check:",n)}}function Ox(){console.log("======= AUDIO SYSTEM TEST ======="),console.log("AudioListener exists:",!!Xn),console.log("AudioContext exists:",!!Ne),console.log("AudioContext state:",Ne?Ne.state:"N/A"),console.log("Sound enabled:",gn),console.log("Music enabled:",dn),console.log("Sound pool size:",yt.length),console.log("Loaded sound buffers:",Object.keys(jn)),Ne&&Ne.state==="suspended"&&(console.log("Attempting to resume suspended audio context..."),Ne.resume().then(()=>{console.log("Audio context resumed successfully")}).catch(n=>{console.error("Failed to resume audio context:",n)}));try{const n=Ne.createOscillator();n.type="sine",n.frequency.setValueAtTime(440,Ne.currentTime);const e=Ne.createGain();e.gain.setValueAtTime(.1,Ne.currentTime),n.connect(e),e.connect(Ne.destination),n.start(),console.log("Test tone started"),setTimeout(()=>{n.stop(),console.log("Test tone stopped"),console.log("Attempting to play movePlayerSnake1 sound...");const t=vn("movePlayerSnake1");console.log("Sound effect play result:",t)},1e3)}catch(n){console.error("Error playing test sound:",n)}console.log("================================")}function Ux(n=!1){window.isAlphaMode=n,Sx()}function Nx(){console.log("Attempting to play player movement sound (direct method)...");try{if(jn.movePlayerSnake1)n(jn.movePlayerSnake1);else{console.log("Sound buffer not loaded, attempting to load...");const e=vs.find(i=>i.name==="movePlayerSnake1");if(!e){console.error("Sound definition not found");return}const t=new XMLHttpRequest;t.open("GET",e.path,!1),t.responseType="arraybuffer",t.onload=function(){Ne.decodeAudioData(t.response,function(i){jn.movePlayerSnake1=i,console.log("Successfully loaded sound buffer synchronously"),n(i)},function(i){console.error("Error decoding audio data:",i)})},t.onerror=function(){console.error("Error loading sound file")},t.send()}}catch(e){console.error("Error in playMovePlayerSound:",e)}function n(e){try{const t=tf();if(!t){console.error("No available sound object in pool");return}t.setBuffer(e);try{t.gain&&t.gain.gain?t.gain.gain.value=.5:t.setVolume(.5)}catch(i){console.error("Error setting volume:",i);try{t.gain.gain.setValueAtTime(.5,Ne.currentTime)}catch(r){console.error("Critical volume error:",r)}}t.play(),console.log("Successfully played movement sound!"),t.onEnded=()=>{const i=yt.findIndex(r=>r.audio===t);i!==-1&&(yt[i].inUse=!1),console.log("Sound playback completed")}}catch(t){console.error("Error playing sound with buffer:",t)}}}const Vn=document.getElementById("info"),Wn=document.getElementById("kills"),$n=document.getElementById("highScoreInfo"),vr=document.getElementById("powerUpInfo"),Qt=document.getElementById("powerUpTextEffect"),Nn=document.getElementById("gameOver"),Eu=document.getElementById("finalScore"),yu=document.getElementById("highScore"),Su=document.getElementById("deathReason"),Tu=document.getElementById("restartButton"),no=document.getElementById("leftButton"),io=document.getElementById("rightButton"),qi=document.getElementById("alphaModeContainer"),Yt=document.getElementById("alphaModeLabel"),Ri=document.getElementById("alphaModeProgress"),Au=document.getElementById("applesEaten"),wu=document.getElementById("frogsEaten"),bu=document.getElementById("snakesEaten"),Ru=document.getElementById("settingsButton"),xo=document.getElementById("settingsMenu"),Cu=document.getElementById("closeSettings"),Pu=document.querySelectorAll(".tab-button"),Fx=document.querySelectorAll(".tab-pane"),rs=document.getElementById("musicToggle"),ss=document.getElementById("soundToggle"),os=document.getElementById("musicVolume"),as=document.getElementById("soundVolume"),Lu=document.getElementById("musicToggleButton"),Nr=document.getElementById("introScreen"),Iu=document.getElementById("startButton"),Du=document.getElementById("controlsText"),Ou=document.getElementById("objectiveText"),Uu=document.getElementById("alphaModeText"),Nu=document.getElementById("helpButton");let yc=!1,rf=!0;function Fu(){if($n){const n=document.createElement("span");n.classList.add("label"),n.textContent="High Score: ",$n.innerHTML="",$n.appendChild(n),$n.appendChild(document.createTextNode("0"))}if(Vn){const n=document.createElement("span");n.classList.add("label"),n.textContent=Ft.UI.SCORE_LABEL+": ",Vn.innerHTML="",Vn.appendChild(n),Vn.appendChild(document.createTextNode("0"))}if(Wn){const n=document.createElement("span");n.classList.add("label"),n.textContent=Ft.UI.KILLS_LABEL+": ",Wn.innerHTML="",Wn.appendChild(n),Wn.appendChild(document.createTextNode("0"))}Yt&&(Yt.textContent="ALPHA MODE"),Du&&(Du.textContent=Bx()?Ft.TUTORIAL.MOBILE_CONTROLS:Ft.TUTORIAL.CONTROLS),Ou&&(Ou.textContent=Ft.TUTORIAL.OBJECTIVE),Uu&&(Uu.textContent=Ft.TUTORIAL.ALPHA_MODE_HINT)}function Bx(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function kx(){const n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(!n)return!1;const e=window.innerWidth>=600&&window.innerWidth<=1366,t=navigator.userAgent.toLowerCase(),i=/ipad/.test(t)||/macintosh/.test(t)&&navigator.maxTouchPoints>1,r=/android/.test(t)&&!/mobile/.test(t),s=/windows/.test(t)&&/touch/.test(t),a=!!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return i||r||s||a||n&&e}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fu):Fu();function zx(){Iu&&Iu.addEventListener("click",function(){yc?Wx():Sc()}),Tu&&Tu.addEventListener("click",function(){Nn&&Nn.classList.remove("active"),window.dispatchEvent(new CustomEvent("gameRestart"))}),Nu&&Nu.addEventListener("click",Bu),Ru&&Ru.addEventListener("click",Bu),Cu&&Cu.addEventListener("click",Zx),Pu.forEach(n=>{n.addEventListener("click",()=>{Pu.forEach(t=>t.classList.remove("active")),Fx.forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=n.getAttribute("data-tab");document.getElementById(e).classList.add("active")})}),Lu&&Lu.addEventListener("click",()=>{const n=Cr();n.music=!n.music,Ta(n),Mo(),Ka(),n.music?(js(!0),Ji()):js(!1),window.fixAudio&&window.fixAudio()}),rs&&rs.addEventListener("click",()=>{const n=Cr();n.music=!n.music,Ta(n),Mo(),Ka(),n.music?(js(!0),Ji()):js(!1),window.fixAudio&&window.fixAudio()}),ss&&ss.addEventListener("click",()=>{const n=Cr();n.sound=!n.sound,Ta(n),sf(),wx(n.sound)}),os&&os.addEventListener("input",()=>{const n=os.value/100;Cx(n)}),as&&as.addEventListener("input",()=>{const n=as.value/100;Px(n)})}function Hx(){zx(),Gx(),Mo()}function Cr(){try{const n=localStorage.getItem("alphaSnekAudioState");if(n)return JSON.parse(n)}catch(n){console.error("Error loading audio state:",n)}return{music:mo.MUSIC,sound:mo.SOUND_EFFECTS}}function Ta(n){try{localStorage.setItem("alphaSnekAudioState",JSON.stringify(n))}catch(e){console.error("Error saving audio state:",e)}}function Mo(){const n=document.querySelector("#musicToggleButton .music-icon");if(n){const e=Cr().music;n.style.opacity=e?"1.0":"0.4";const t=n.parentElement;t&&(e?t.classList.remove("muted"):t.classList.add("muted"))}}function Ka(){if(rs){const n=Cr().music;rs.classList.toggle("muted",!n);const e=rs.querySelector(".toggle-status");e&&(e.textContent=n?"ON":"OFF")}}function sf(){if(ss){const n=Cr().sound;ss.classList.toggle("muted",!n);const e=ss.querySelector(".toggle-status");e&&(e.textContent=n?"ON":"OFF")}}function Gx(){Mo(),Ka(),sf(),os&&(os.value=Math.round(bx()*100)),as&&(as.value=Math.round(Rx()*100))}Hx();function Sc(){Nr&&(Nr.style.display="none"),Nn&&(Nn.style.display="none"),yc=!0,rf=!1,window.dispatchEvent(new CustomEvent("gameStarted"))}function Vx(){rf?(Nr&&(Nr.style.display="flex"),yc=!1):Sc()}function Wx(){Nr&&(Nr.style.display="none"),window.dispatchEvent(new CustomEvent("gameResumed"))}let Mi=null;window.addEventListener("resize",Tc);function Tc(){!no||!io||Nn!=null&&Nn.classList.contains("active")||(window.innerWidth<=767||kx()?(no.style.display="flex",io.style.display="flex"):(no.style.display="none",io.style.display="none"))}Tc();function $x(){qi&&(qi.style.display="flex",Ri&&(Ri.style.height="0%"),Yt&&(Yt.style.display="block"))}$x();const Xx={leftButton:no,rightButton:io};function xs(n){if(Vn){const e=Vn.querySelector(".label");if(e){const t=document.createTextNode(n.toString());Array.from(Vn.childNodes).forEach(i=>{(i.nodeType===Node.TEXT_NODE||i!==e&&i.nodeType===Node.ELEMENT_NODE)&&Vn.removeChild(i)}),Vn.appendChild(t)}else Vn.textContent=`${Ft.UI.SCORE_LABEL}: ${n}`}}function Ms(n){if(Wn){const e=Wn.querySelector(".label");if(e){const t=document.createTextNode(n.toString());Array.from(Wn.childNodes).forEach(i=>{(i.nodeType===Node.TEXT_NODE||i!==e&&i.nodeType===Node.ELEMENT_NODE)&&Wn.removeChild(i)}),Wn.appendChild(t)}else Wn.textContent=`${Ft.UI.KILLS_LABEL}: ${n}`}}function Za(n){if($n){const e=$n.querySelector(".label");e?($n.innerHTML="",$n.appendChild(e),$n.appendChild(document.createTextNode(n))):$n.textContent="High Score: "+n}}function qx(n,e,t,i={}){var r,s,a;if(Nn){if(Nn.style.display="flex",Eu){const o=typeof n=="object"?n.current||0:n;Eu.textContent=o,console.log("Setting final score:",o)}if(yu&&(yu.textContent=e),Su){let o="You died!";Ft?t&&((a=(s=(r=Ft.UI)==null?void 0:r.GAME_OVER)==null?void 0:s.DEATH_REASONS)!=null&&a[t])&&(o=Ft.UI.GAME_OVER.DEATH_REASONS[t]):console.warn("CONFIG.GAME_TEXT not found, using default death message"),Su.textContent=o,console.log(`Game over: ${o} (reason code: ${t})`)}i&&(Au&&i.applesEaten!==void 0&&(Au.textContent=i.applesEaten),wu&&i.frogsEaten!==void 0&&(wu.textContent=i.frogsEaten),bu&&i.snakesEaten!==void 0&&(bu.textContent=i.snakesEaten)),window.dispatchEvent(new CustomEvent("gameOver"))}}function Yx(){Nn&&Nn.classList.remove("active"),Tc()}function cs(n){if(vr){if(vr.innerHTML="",!n){vr.style.display="none";return}if(n.includes("|"))n.split("|").map(t=>t.trim()).forEach(t=>{const i=document.createElement("div");i.className="power-up-item",i.textContent=t,vr.appendChild(i)});else{const e=document.createElement("div");e.className="power-up-item",e.textContent=n,vr.appendChild(e)}vr.style.display="flex"}}function mt(n,e=16777215){if(!Qt)return;const t=()=>{Qt.style.display="none",Qt.classList.remove("powerup-text-animate"),Mi=null};Mi&&(Qt.removeEventListener("animationend",Mi),Qt.classList.remove("powerup-text-animate"),Qt.style.display="none",Qt.offsetWidth),Qt.textContent=n,Qt.style.color=`#${e.toString(16).padStart(6,"0")}`,Qt.style.display="block",Mi=t,Qt.addEventListener("animationend",Mi,{once:!0}),Qt.classList.add("powerup-text-animate")}function of(){Qt&&(Mi&&(Qt.removeEventListener("animationend",Mi),Mi=null),Qt.style.display="none",Qt.classList.remove("powerup-text-animate"))}function af(n=0,e){xs(n),Ms(0),cs(""),Yx(),of(),e&&e.highScore!==void 0?Za(e.highScore):Za(0),qi&&(qi.style.display="flex",Ri&&(Ri.style.height="0%"),Yt&&(Yt.style.display="block",Yt.classList.remove("alpha-mode-active"),Yt.textContent="ALPHA MODE"))}function jx(){const n=Ft.POWERUPS.ENEMY_KILLED_MESSAGES;if(!n||n.length===0)return"ENEMY KILLED!";const e=Math.floor(Math.random()*n.length);return n[e]}function Kx(n,e,t){if(Ri){const i=Math.max(0,Math.min(100,n));Ri.style.height=`${i}%`,qi&&qi.style.display!=="flex"&&(qi.style.display="flex",Yt&&(Yt.style.display="block",e!==void 0&&t!==void 0?Yt.textContent=`ALPHA: ${e}/${t}`:Yt.textContent="ALPHA"))}}function Eo(n,e,t=1){if(Ri){const i=n*100;Ri.style.height=`${i}%`}if(Yt)if(n>0){Yt.classList.add("alpha-mode-active");const i=e.toFixed(1);let r="";t>1&&(r=` x${t.toFixed(1)}`),Yt.textContent=`ALPHA ${i}s${r}`}else Yt.classList.remove("alpha-mode-active"),Yt.textContent="ALPHA MODE"}function cf(){mt(Ft.ALPHA_MODE.ACTIVATED_MESSAGE,10233776)}function lf(n,e){console.log("Alpha Mode cooldown disabled")}function Bu(){window.dispatchEvent(new Event("gamePaused")),xo&&xo.classList.add("active")}function Zx(){xo&&xo.classList.remove("active"),window.dispatchEvent(new Event("gameResumed"))}function ku(n,e,t=!0,i=!0,r=!0,s=!0){const{playerSnake:a,food:o,obstacles:c,enemies:l}=e;if(r&&a.segments&&a.segments.some(u=>u.x===n.x&&u.z===n.z)||t&&o.positions&&o.positions.some(u=>u.x===n.x&&u.z===n.z))return!0;if(i&&c.list){for(const u of c.list)if(u.occupiedCells.some(f=>f.x===n.x&&f.z===n.z))return!0}if(s&&l.list){for(const u of l.list)if(u.snake.some(f=>f.x===n.x&&f.z===n.z))return!0}return!1}function Ac(n,e=!0,t=!0,i=!0,r=!0,s=0){const a=Math.floor(ct/2);let o,c=0;const l=ct*ct;for(;c<l;){if(o={x:Math.floor(Math.random()*ct)-a,y:0,z:Math.floor(Math.random()*ct)-a},Math.abs(o.x)<=s&&Math.abs(o.z)<=s){c++;continue}if(!ku(o,n,e,t,i,r))if(t){let u=!1;for(const f of[-1,0,1]){for(const p of[-1,0,1])if(!(f===0&&p===0)&&ku({x:o.x+f,z:o.z+p},n,!1,!0,!1,!1)){u=!0;break}if(u)break}if(!u)return o}else return o;c++}return console.error(`Could not find unique position after ${l} attempts.`),{x:0,y:0,z:0}}function Ci(n,e,t,i,r=null){let s,a;i?(s=t.snake.head1,t.snake.head2,a=t.snake.body1,t.snake.body2):(s=t.enemy.head1,t.enemy.head2,a=t.enemy.body1,t.enemy.body2);const o=e?s:a;if(!o)return console.error(`Snake material missing! Player: ${i}, Head: ${e}`),new Ge(Ve.cube,new Dr({color:16711935}));const c=new Ge(Ve.cube,o.clone());if(c.scale.setScalar(Ee),c.position.set(n.x*Ee,n.y*Ee,n.z*Ee),c.castShadow=!0,c.receiveShadow=!1,c.position.y+=Ee/2,i)c.name=e?"playerSnakeHead":"playerSnakeBody";else{const l=r!==null?`_${r}`:"";c.name=e?`enemySnakeHead${l}`:`enemySnakeBody${l}`}return c}let tn=[],li=null,ps=!1;const wc=200;function Jx(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600}function Qx(n){if(!n){console.error("Particle material is required for initParticles!");return}li=n,tn=[],ps=Jx(),console.log(`Device detected as: ${ps?"Mobile":"Desktop"}`)}function bc(n){return tn.length>wc*.7&&(n=Math.max(1,Math.floor(n*.3))),ps&&(n=Math.max(1,Math.floor(n*.25))),n}function eM(n,e,t){if(!li||!n||!e){console.warn("Cannot create food effect - material, scene or camera missing.");return}if(ps||tn.length>wc*.8)return;const i=new He(zv),r=bc(kv);if(!(r<=0))for(let s=0;s<r;s++){const a=li.clone();a.color=i.clone();const o=new Ge(Ve.particle,a);o.position.copy(t),o.scale.setScalar(.6),o.lookAt(e.position);const c=Math.random()*Math.PI*2,l=Oo*.6*(.6+Math.random()*.8),u=new H(Math.cos(c)*l,Math.random()*.5*l,Math.sin(c)*l),f=Do*.6;tn.push({mesh:o,velocity:u,life:f,initialLife:f}),n.add(o)}}function Uo(n,e,t,i,r=16777215){if(!li||!n||!e){console.warn("Cannot create explosion - material, scene or camera missing.");return}const s=bc(i);if(s<=0)return;const a=new He(r);for(let o=0;o<s;o++){const c=li.clone(),l=new He(16768392).lerp(new He(16755268),Math.random());c.color=a.clone().lerp(l,Math.random()*.5);const u=new Ge(Ve.particle,c);u.position.copy(t),u.lookAt(e.position);const f=Math.random()*Math.PI*2,p=Oo*(.6+Math.random()*.8),_=new H(Math.cos(f)*p,(Math.random()-.2)*p*.7,Math.sin(f)*p),M=Do*(.7+Math.random()*.6);tn.push({mesh:u,velocity:_,life:M,initialLife:M}),n.add(u)}}function uf(n,e,t){if(!li||!n||!e){console.warn("Cannot create kill effect - material, scene or camera missing.");return}let i=vc;if(i=bc(i),i<=0)return;const r=new He(Io),s=Xa*1.5,a=Do*1.5,o=Oo*1.2;for(let c=0;c<i;c++){const l=new hc(s,4,4),u=li.clone();u.color.copy(r);const f=new Ge(l,u);f.position.copy(t);const p=c/i*Math.PI*8,_=c/i*5,M=c/i*4-2,x=new H(Math.cos(p)*_*o,M*o,Math.sin(p)*_*o);n.add(f),tn.push({mesh:f,velocity:x,life:a,initialLife:a})}}function tM(n,e,t,i=9159498){if(!li||!n||!e){console.warn("Cannot create frog effect - material, scene or camera missing.");return}let r=30;if(ps&&(r=Math.max(5,Math.floor(r*.25))),r<=0)return;const s=new He(i);for(let a=0;a<r;a++){const o=li.clone(),c=new He().setHSL(Math.random()*.1+.3,.8,.6);o.color=s.clone().lerp(c,Math.random()*.3);const l=new Ge(Ve.particle,o);l.position.copy(t),l.lookAt(e.position);const u=Math.random()*Math.PI*2,f=Oo*(.7+Math.random()*.6),p=new H(Math.cos(u)*f*.7,(Math.random()*.8+.5)*f,Math.sin(u)*f*.7),_=Do*(.8+Math.random()*.7);tn.push({mesh:l,velocity:p,life:_,initialLife:_,isFrog:!0}),n.add(l)}}function zu(n,e){if(!e)return;const t=9.8;if(tn.length>wc){const i=Math.floor(tn.length*.2);for(let r=0;r<i;r++){const s=tn[r];s&&s.mesh&&(e.remove(s.mesh),s.mesh.material&&s.mesh.material.dispose(),s.mesh.geometry&&s.mesh.geometry!==Ve.particle&&s.mesh.geometry.dispose(),s.mesh=null)}tn.splice(0,i),console.log(`Performance: Removed ${i} excess particles`)}for(let i=tn.length-1;i>=0;i--){const r=tn[i];if(r.life-=n,r.life<=0)e.remove(r.mesh),r.mesh.material&&r.mesh.material.dispose(),r.mesh.geometry&&r.mesh.geometry!==Ve.particle&&r.mesh.geometry.dispose(),r.mesh=null,tn.splice(i,1);else{r.mesh.position.addScaledVector(r.velocity,n);const s=Math.max(0,r.life/r.initialLife);r.mesh.material.transparent&&(r.mesh.material.opacity=s*.9);const a=Math.max(.1,s*.8+.2);r.mesh.scale.set(a,a,a),r.velocity.y-=t*n,r.isFrog&&(r.mesh.rotation.z+=n*(Math.random()*2-1),r.mesh.position.y<.5&&r.velocity.y<0&&(r.velocity.y=Math.abs(r.velocity.y)*.6,r.velocity.x*=.9,r.velocity.z*=.9))}}}function nM(n){n&&(tn.forEach(e=>n.remove(e.mesh)),tn=[])}function df(n,e=0){const t=Math.floor(ct/2);let i=0;const r=ct*ct;for(;i<r;){const s={x:Math.floor(n.rng.nextFloat()*ct)-t,y:0,z:Math.floor(n.rng.nextFloat()*ct)-t};if(Math.abs(s.x)<=e&&Math.abs(s.z)<=e){i++;continue}if(!iM(n,s))return s;i++}return{x:0,y:0,z:0}}function iM(n,e){var t,i,r,s,a,o,c;if((i=(t=n.player)==null?void 0:t.segments)!=null&&i.some(l=>l.x===e.x&&l.z===e.z)||(s=(r=n.food)==null?void 0:r.positions)!=null&&s.some(l=>l.x===e.x&&l.z===e.z))return!0;if((a=n.obstacles)!=null&&a.list){for(const l of n.obstacles.list)if((o=l.occupiedCells)!=null&&o.some(u=>u.x===e.x&&u.z===e.z))return!0}if((c=n.enemies)!=null&&c.list){for(const l of n.enemies.list)if(l.snake.some(u=>u.x===e.x&&u.z===e.z))return!0}return!1}function rM(n){const e=Math.floor(n.nextFloat()*100)+1;let t=0;for(const i of Object.keys(_o)){const r=_o[i]||0;if(t+=r,e<=t)return i}return"normal"}function sM(n,e,t=0){for(let i=0;i<e;i++)Rc(n,t)}function Rc(n,e=0){const t=df(n,e),i=rM(n.rng),r={...t,type:i};if(i!=="normal"){const s=Ja(n),a=.8+n.rng.nextFloat()*.4,o=(n.rng.nextFloat()*2-1)*qt.DISTANCE_VARIATION;r.movement={directionX:s.x,directionZ:s.z,timer:0,moveInterval:qt.MOVE_INTERVAL*a,maxDistance:Math.max(1,qt.MAX_DISTANCE+o),originX:r.x,originZ:r.z,changeProbability:qt.DIRECTION_CHANGE_PROBABILITY}}return n.food.positions.push(r),r}function Ja(n){const e=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}];return e[n.rng.nextInt(e.length)]}function ff(n,e){var i,r;const t=n.food;if(!(t!=null&&t.positions))return null;for(let s=0;s<t.positions.length;s++){const a=t.positions[s];if(e.x===a.x&&e.z===a.z){const o=oM(a.type,((r=(i=n.player)==null?void 0:i.alphaMode)==null?void 0:r.active)||!1);return{index:s,type:a.type,scoreValue:1,grow:a.type!=="shrink",effects:o}}}return null}function oM(n,e){return n==="normal"?{alphaPoints:Pv,speedBoostDuration:Cv,alphaModeExtension:e?Hd:0,addScoreMultiplier:e}:{alphaPoints:Lv*(e?Iv:1),speedBoostDuration:0,alphaModeExtension:0,addScoreMultiplier:!1}}function aM(n,e){for(const t of n.food.positions){if(t.type==="normal")continue;if(!t.movement){const u=Ja(n);t.movement={directionX:u.x,directionZ:u.z,timer:0,moveInterval:qt.MOVE_INTERVAL,maxDistance:qt.MAX_DISTANCE,originX:t.x,originZ:t.z,changeProbability:qt.DIRECTION_CHANGE_PROBABILITY}}if(t.movement.timer+=e,t.movement.timer<t.movement.moveInterval)continue;if(t.movement.timer=0,n.rng.nextFloat()<t.movement.changeProbability){const u=Ja(n);t.movement.directionX=u.x,t.movement.directionZ=u.z}let i=t.x+t.movement.directionX,r=t.z+t.movement.directionZ;const s=t.movement.maxDistance,a=Math.abs(i-t.movement.originX),o=Math.abs(r-t.movement.originZ),c=ct/2,l=i>=c||i<-c||r>=c||r<-c;(a>s||o>s||l)&&(Math.abs(t.x-t.movement.originX)>Math.abs(t.z-t.movement.originZ)?(t.movement.directionX=Math.sign(t.movement.originX-t.x)||t.movement.directionX*-1,t.movement.directionZ=0):(t.movement.directionZ=Math.sign(t.movement.originZ-t.z)||t.movement.directionZ*-1,t.movement.directionX=0),i=t.x+t.movement.directionX,r=t.z+t.movement.directionZ),t.x=i,t.z=r}}function cM(n){const e=new qn,t=Ee*.4,i=new Tr({color:14494720,roughness:.7,metalness:.1}),r=new Ge(Ve.cube,i);r.scale.set(t*1.8,t*1.8,t*1.8),r.position.set(0,t*.9,0),r.castShadow=!0,e.add(r);const s=new Tr({color:9109504,roughness:.8,metalness:.1}),a=new Ge(Ve.cube,s);a.scale.set(t*.6,t*.3,t*.6),a.position.set(0,t*1.9,0),a.castShadow=!0,e.add(a);const o=new Tr({color:6636321,roughness:.9,metalness:.1}),c=new Ge(Ve.cube,o);c.scale.set(t*.5,t,t*.5),c.position.set(0,t*2.4,0),c.castShadow=!0,e.add(c);const l=new Tr({color:2263842,roughness:.7,metalness:.1}),u=new Ge(Ve.cube,l);return u.scale.set(t,t*.4,t*.6),u.position.set(t*.8,t*2.4,0),u.rotation.z=Math.PI*.15,u.castShadow=!0,e.add(u),e.userData.rotationSpeed=Math.random()*.01+.005,e.userData.rotationDirection=Math.random()>.5?1:-1,e}function hf(n,e,t){const i=t.food[e];if(!i)return X.system.error(`Food material missing for type: ${e}`),null;const r=new qn;if(r.position.set(n.x*Ee,0,n.z*Ee),r.userData.foodType=e,e==="normal"){const s=cM();r.add(s)}else{uM(r,i,e);let s=Math.random()*2-1,a=Math.random()*2-1;const o=Math.sqrt(s*s+a*a);o>0&&(s/=o,a/=o);{const c=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}],l=c[Math.floor(Math.random()*c.length)];s=l.x,a=l.z}r.userData.movementProperties={directionX:s,directionZ:a,hopFrequency:qt.HOP_FREQUENCY+(Math.random()*2-1)*qt.HOP_FREQUENCY_VARIATION,speed:qt.BASE_SPEED+(Math.random()*2-1)*qt.SPEED_VARIATION,originalGridPos:{...n},currentGridPos:{...n},timer:Math.random()*Math.PI*2,maxDistance:qt.MAX_DISTANCE+(Math.random()*2-1)*qt.DISTANCE_VARIATION,phaseOffset1:Math.random()*Math.PI*2,phaseOffset2:Math.random()*Math.PI*2,moveInterval:qt.MOVE_INTERVAL*(.8+Math.random()*.4),targetPosition:null}}return r}function lM(n){var i;const{scene:e,food:t}=n;if(!(!e||!(t!=null&&t.meshes))){for(const r of t.meshes)r&&(r.isGroup?r.traverse(s=>{var a;s.isMesh&&(s.geometry&&s.geometry!==Ve.cube&&s.geometry!==Ve.particle&&s.geometry.dispose(),s.material&&!((a=s.userData)!=null&&a.useSharedMaterial)&&(Array.isArray(s.material)?s.material.forEach(o=>o.dispose()):s.material.dispose()))}):r.isMesh&&(r.geometry&&r.geometry!==Ve.cube&&r.geometry!==Ve.particle&&r.geometry.dispose(),r.material&&!((i=r.userData)!=null&&i.useSharedMaterial)&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())),e.remove(r));t.meshes=[]}}function yo(n){const{scene:e,materials:t,food:i}=n;if(!e||!(t!=null&&t.food)||!(i!=null&&i.positions))return;(!i.meshes||i.meshes.length!==i.positions.length||i.meshes.some(s=>!s)||i.meshes.some((s,a)=>{var o,c;return((o=s==null?void 0:s.userData)==null?void 0:o.foodType)!==((c=i.positions[a])==null?void 0:c.type)}))&&(lM(n),i.positions.forEach(s=>{const a=hf(s,s.type,t);a&&(i.meshes.push(a),e.add(a))}));for(let s=0;s<i.positions.length;s++){const a=i.positions[s],o=i.meshes[s];o&&o.position.set(a.x*Ee,0,a.z*Ee)}}function uM(n,e,t){const i=Ee*.4,r=(T,C)=>{const $=T.clone();return $.color&&($.color=$.color.clone().multiplyScalar(C)),$},s=r(e,1.1),a=r(e,.8),o=new Tr({color:16777215}),c=new Tr({color:0}),l=new Ge(Ve.cube,e);l.scale.set(i*2,i,i*2),l.position.set(0,i/2,0),l.castShadow=!0,n.add(l);const u=new Ge(Ve.cube,s);u.scale.set(i*1.6,i*.35,i*1.6),u.position.set(0,i*.2,i*.1),u.castShadow=!0,n.add(u);const f=new Ge(Ve.cube,e);f.scale.set(i*1.6,i*.8,i),f.position.set(0,i/2,-i*1.5),f.castShadow=!0,n.add(f);const p=new Ge(Ve.cube,a);p.scale.set(i*1.2,i*.3,i*.4),p.position.set(0,i*.35,-i*2),p.castShadow=!0,n.add(p);const _=new Ge(Ve.cube,o);_.scale.set(i*.45,i*.45,i*.45),_.position.set(-i*.55,i,-i*1.8),_.castShadow=!0,n.add(_);const M=new Ge(Ve.cube,o);M.scale.set(i*.45,i*.45,i*.45),M.position.set(i*.55,i,-i*1.8),M.castShadow=!0,n.add(M);const x=new Ge(Ve.cube,c);x.scale.set(i*.18,i*.18,i*.18),x.position.set(-i*.55,i*.98,-i*2.02),x.castShadow=!0,n.add(x);const v=new Ge(Ve.cube,c);v.scale.set(i*.18,i*.18,i*.18),v.position.set(i*.55,i*.98,-i*2.02),v.castShadow=!0,n.add(v);const h=new Ge(Ve.cube,e);h.scale.set(i*.6,i*.6,i*.8),h.position.set(-i,i*.3,-i),h.castShadow=!0,n.add(h);const R=new Ge(Ve.cube,e);R.scale.set(i*.6,i*.6,i*.8),R.position.set(i,i*.3,-i),R.castShadow=!0,n.add(R);const A=new Ge(Ve.cube,a);A.scale.set(i*.8,i*.2,i*.9),A.position.set(-i,i*.05,-i*1.2),A.castShadow=!0,n.add(A);const P=new Ge(Ve.cube,a);P.scale.set(i*.8,i*.2,i*.9),P.position.set(i,i*.05,-i*1.2),P.castShadow=!0,n.add(P);const B=new Ge(Ve.cube,e);B.scale.set(i*.9,i*.7,i*1.2),B.position.set(-i*1.1,i*.35,i*.9),B.castShadow=!0,n.add(B);const L=new Ge(Ve.cube,e);L.scale.set(i*.9,i*.7,i*1.2),L.position.set(i*1.1,i*.35,i*.9),L.castShadow=!0,n.add(L);const w=new Ge(Ve.cube,a);w.scale.set(i*1.1,i*.2,i*1.2),w.position.set(-i*1.1,i*.05,i*1.4),w.castShadow=!0,n.add(w);const J=new Ge(Ve.cube,a);J.scale.set(i*1.1,i*.2,i*1.2),J.position.set(i*1.1,i*.05,i*1.4),J.castShadow=!0,n.add(J),t==="ghost"&&n.traverse(T=>{T.isMesh&&T.material!==c&&(T.material=T.material.clone(),T.material.transparent=!0,T.material.opacity=.7)}),n.rotation.y=Math.random()*Math.PI*2}function dM(n){const e=ui("NUM_INITIAL_FOOD")||pc;pf(n);for(let t=0;t<e;t++)Cc(n)}function Cc(n){const{scene:e,materials:t,food:i}=n;if(!e||!(t!=null&&t.food)||!i)return;const r=Ac(n,!0,!0,!0,!0);if(!r){X.system.error("Failed to find a position for new food!");return}const s=fM(),a=hf(r,s,t);a?(i.positions.push({...r,type:s}),i.meshes.push(a),e.add(a)):X.system.error(`Failed to create mesh for food type ${s}`)}function fM(){const n=Math.floor(Math.random()*100)+1;let e=0;for(const t of ci){const i=_o[t.type]||0;if(e+=i,n<=e)return t.type}return X.warn("Food selection fallback - check that FOOD_SPAWN_RATIOS adds up to 100"),"normal"}function hM(n,e){var p,_,M;const{scene:t,food:i,materials:r,camera:s,playerSnake:a}=e;if(!t||!(i!=null&&i.positions)||!(i!=null&&i.meshes)||!s||!a)return null;px()&&X.gameplay.debug("checkAndEatFood called with position:",n,"Alpha Mode:",(p=a.alphaMode)==null?void 0:p.active,"Food positions count:",i.positions.length);let o=-1,c=null;const l=n.x*Ee,u=n.z*Ee,f=ff({food:{positions:i.positions},player:{alphaMode:{active:((_=a.alphaMode)==null?void 0:_.active)||!1}}},{x:n.x,z:n.z});if(f)o=f.index,c=f.type;else for(let x=0;x<i.positions.length;x++){const v=i.meshes[x],h=i.positions[x];if(h.type==="normal")continue;const R=Ee*.8,A=v.position.x,P=v.position.z;if(Math.sqrt(Math.pow(l-A,2)+Math.pow(u-P,2))<R){o=x,c=h.type;break}}if(o!==-1){const x=i.meshes[o],v=ci.find(h=>h.type===c);if(c==="normal"){if(e.stats.applesEaten++,vn("eatApple"),e.playerSnake){const h=e.clock.getElapsedTime();e.playerSnake.speedBoostUntil=h+f.effects.speedBoostDuration,mt("Speed Boost!",49151),ec(f.effects.alphaPoints,e),e.playerSnake.alphaMode&&e.playerSnake.alphaMode.active&&(e.playerSnake.alphaMode.endTime+=f.effects.alphaModeExtension,mt(`Alpha Mode +${f.effects.alphaModeExtension}s!`,16733986),f.effects.addScoreMultiplier&&Uc(h,e),X.gameplay.info(`Alpha Mode extended by ${Hd} seconds! New end time:`,e.playerSnake.alphaMode.endTime))}}else e.stats.frogsEaten++,vn("eatFrog"),ec(f.effects.alphaPoints,e),e.playerSnake.alphaMode.active&&mt(`+${f.effects.alphaPoints.toFixed(0)} ALPHA PTS!`,Ki);return x&&(c==="normal"?eM(t,s,x.position):tM(t,s,x.position,(v==null?void 0:v.colorHint.getHex())||9159498),x.isGroup?x.traverse(h=>{var R;h.isMesh&&(h.geometry&&h.geometry!==Ve.cube&&h.geometry!==Ve.particle&&h.geometry.dispose(),h.material&&!((R=h.userData)!=null&&R.useSharedMaterial)&&(Array.isArray(h.material)?h.material.forEach(A=>A.dispose()):h.material.dispose()))}):x.isMesh&&(x.geometry&&x.geometry!==Ve.cube&&x.geometry!==Ve.particle&&x.geometry.dispose(),x.material&&!((M=x.userData)!=null&&M.useSharedMaterial)&&(Array.isArray(x.material)?x.material.forEach(h=>h.dispose()):x.material.dispose())),t.remove(x),i.meshes[o]=null),v!=null&&v.effectText&&mt(v.effectText,v.colorHint.getHex()),i.meshes.splice(o,1),i.positions.splice(o,1),e.flags.useCoreSimulation||Cc(e),{type:c,scoreValue:f.scoreValue,grow:f.grow}}return null}function pf(n){var i;const{scene:e,food:t}=n;if(!(!e||!t)){if(t.meshes&&t.meshes.length>0)for(const r of t.meshes)r&&(e.children.includes(r)&&e.remove(r),r.isGroup?r.traverse(s=>{var a;s.isMesh&&(s.geometry&&s.geometry!==Ve.cube&&s.geometry!==Ve.particle&&s.geometry.dispose(),s.material&&!((a=s.userData)!=null&&a.useSharedMaterial)&&(Array.isArray(s.material)?s.material.forEach(o=>o.dispose()):s.material.dispose()))}):r.isMesh&&(r.geometry&&r.geometry!==Ve.cube&&r.geometry!==Ve.particle&&r.geometry.dispose(),r.material&&!((i=r.userData)!=null&&i.useSharedMaterial)&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())));t.meshes?t.meshes.length=0:t.meshes=[],t.positions?t.positions.length=0:t.positions=[],X.system.info("Food system reset, all food items removed and resources disposed")}}function Hu(n,e){var i;const{food:t}=n;if(!(!t||!t.meshes)){for(const r of t.meshes)if(r.userData.foodType==="normal"){const s=r.children[0];if(s&&s.userData.rotationSpeed){s.rotation.y+=s.userData.rotationSpeed*s.userData.rotationDirection*e;const a=n.clock.getElapsedTime(),o=Math.sin(a*.8)*.05;s.position.y=Ee*.45+o}}else if(r.userData.foodType!=="normal"&&r.userData.movementProperties){if(n.flags.useCoreSimulation){const u=r.userData.movementProperties,f=((i=n.simulation)==null?void 0:i.time)??n.clock.getElapsedTime(),p=Math.abs(Math.sin((f+u.phaseOffset1)*u.hopFrequency*2)),_=Math.abs(Math.sin((f+u.phaseOffset2)*u.hopFrequency*4))*.2,M=(p+_)*qt.HOP_HEIGHT*Ee;r.position.y=M;continue}const s=r.userData.movementProperties;s.timer+=e,s.originalGridPos.x*Ee,s.originalGridPos.z*Ee;const a=r.position.x,o=r.position.z;{if(s.timer>=s.moveInterval){s.timer=0;const M=s.currentGridPos.x+s.directionX,x=s.currentGridPos.z+s.directionZ;if(Math.sqrt(Math.pow(M-s.originalGridPos.x,2)+Math.pow(x-s.originalGridPos.z,2))>s.maxDistance||Math.random()<qt.DIRECTION_CHANGE_PROBABILITY){const h={x:s.originalGridPos.x-s.currentGridPos.x,z:s.originalGridPos.z-s.currentGridPos.z},R=Math.sqrt(h.x*h.x+h.z*h.z);R>0&&(h.x/=R,h.z/=R);const A=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}];let P=A[0],B=-1/0;for(const L of A){const w=L.x*h.x+L.z*h.z;w>B&&(B=w,P=L)}if(Math.random()<.5)s.directionX=P.x,s.directionZ=P.z;else{const L=A[Math.floor(Math.random()*A.length)];s.directionX=L.x,s.directionZ=L.z}}s.currentGridPos.x+=s.directionX,s.currentGridPos.z+=s.directionZ,s.targetPosition={x:s.currentGridPos.x*Ee,z:s.currentGridPos.z*Ee}}const u=Math.min(s.timer/s.moveInterval,1),f=u*u*(3-2*u);s.targetPosition&&(r.position.x=Tl.lerp(a,s.targetPosition.x,f*s.speed),r.position.z=Tl.lerp(o,s.targetPosition.z,f*s.speed));const _=Math.sin(f*Math.PI)*qt.HOP_HEIGHT*Ee;r.position.y=_}const c=r.position.x-a,l=r.position.z-o;if(Math.abs(c)>.01||Math.abs(l)>.01){const u=Math.atan2(c,l)+Math.PI,f=10*e;let _=u-r.rotation.y;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;r.rotation.y+=_*f}}}}function pM(n,e){const{food:t}=e;if(!t||t.positions.length===0)return{index:-1,position:null};let i=-1,r=1/0;return t.positions.forEach((s,a)=>{const o=s.x-n.x,c=s.z-n.z,l=o*o+c*c;l<r&&(r=l,i=a)}),{index:i,position:i!==-1?t.positions[i]:null}}function Pc(n,e){const t=(n==null?void 0:n.list)||[];for(const i of t)if(i.occupiedCells){for(const r of i.occupiedCells)if(r.x===e.x&&r.z===e.z)return i.type}else if(i.x===e.x&&i.z===e.z)return i.type;return null}function mM(n,e){const t=(n==null?void 0:n.list)||[];for(const i of t)for(let r=0;r<i.snake.length;r++){const s=i.snake[r];if(s.x===e.x&&s.z===e.z)return{id:i.id,segmentIndex:r}}return null}function gM(n,e,t,i){var x,v,h,R,A,P,B,L;const r=(x=t.obstacle)==null?void 0:x.tree_trunk,s=(v=t.obstacle)==null?void 0:v.tree_leaves,a=(h=t.obstacle)==null?void 0:h.bush,o=(R=t.obstacle)==null?void 0:R.flower_bush,c=(A=t.obstacle)==null?void 0:A.pink_flower,l=(P=t.obstacle)==null?void 0:P.white_daisy,u=(B=t.obstacle)==null?void 0:B.white_tulip,f=(L=t.obstacle)==null?void 0:L.yellow_flower;if(!r||!s||!a||!o||!c||!l||!u||!f)return console.error("Obstacle materials missing!"),null;const p=new qn;p.position.set(n.x*Ee,0,n.z*Ee);let _=[];const M=Ee/2;if(e==="tree"){const w=4+Math.floor(Math.random()*2);for(let Y=0;Y<w;Y++){const ae=new Ge(Ve.cube,r);ae.scale.setScalar(Ee),ae.position.y=Y*Ee+M,ae.castShadow=!0,ae.receiveShadow=!0,p.add(ae)}_.push({x:n.x,z:n.z});const J=w-1,T=[{y:0,radius:2,cornerDrop:.35},{y:1,radius:2,cornerDrop:.55},{y:2,radius:1,cornerDrop:.15}],C=(Y,ae,U)=>{const W=new Ge(Ve.cube,s);W.scale.setScalar(Ee),W.position.set(Y*Ee,(J+ae)*Ee+M,U*Ee),W.castShadow=!0,W.receiveShadow=!1,p.add(W)};T.forEach(Y=>{for(let ae=-Y.radius;ae<=Y.radius;ae++)for(let U=-Y.radius;U<=Y.radius;U++)Math.abs(ae)===Y.radius&&Math.abs(U)===Y.radius&&Math.random()<Y.cornerDrop||ae===0&&U===0&&Y.y<=1||C(ae,Y.y,U)}),[{x:2,z:0},{x:-2,z:0},{x:0,z:2},{x:0,z:-2}].forEach(Y=>{Math.random()<.4&&C(Y.x,-1,Y.z)})}else if(e==="bush"){_.push({x:n.x,z:n.z});const w=12+Math.floor(Math.random()*8);for(let J=0;J<w;J++){const T=new ai(Ee*1.5,Ee*1.5),C=new Ge(T,o),$=Math.random()*Math.PI*2,Y=Math.random()*1.5*Ee,ae=Math.random()*.8*Ee,U=(.9+Math.random()*.6)*Ee;C.scale.set(U,U,U),C.position.set(Math.cos($)*Y,ae+M,Math.sin($)*Y),C.rotation.x=Math.random()*Math.PI/6,C.rotation.y=Math.random()*Math.PI*2,C.rotation.z=Math.random()*Math.PI/6,C.castShadow=!0,C.receiveShadow=!0,p.add(C)}}else return null;return i.add(p),{meshGroup:p,cells:_}}function _M(n){const{scene:e,materials:t}=n;if(!e||!(t!=null&&t.obstacle))return;mf(n);const i=new qn;e.add(i),n.obstacles={list:[],group:i};const r=ui("NUM_OBSTACLES")||kd;console.log(`Creating ${r} initial obstacles...`);for(let s=0;s<r;s++){const a=Ac(n,!1,!0,!1,!1,Vv);if(!a){console.warn("Could not find space for new obstacle!");continue}const o=Math.floor(Math.random()*xu.length),c=xu[o].type;xM(n,c,a)}for(let s=0;s<30;s++){const a={x:Math.floor((Math.random()-.5)*(ct-4)),z:Math.floor((Math.random()-.5)*(ct-4))};Math.abs(a.x)<3&&Math.abs(a.z)<3&&(a.x+=a.x>=0?3:-3,a.z+=a.z>=0?3:-3),vM(n,a)}}function vM(n,e){const{obstacles:t,materials:i}=n,r=new qn;r.position.set(e.x*Ee,0,e.z*Ee);const s=["pink_flower","white_daisy","white_tulip","yellow_flower"],a=s[Math.floor(Math.random()*s.length)];let o;switch(a){case"pink_flower":o=i.obstacle.pink_flower;break;case"white_daisy":o=i.obstacle.white_daisy;break;case"white_tulip":o=i.obstacle.white_tulip;break;case"yellow_flower":o=i.obstacle.yellow_flower;break;default:o=i.obstacle.yellow_flower}const c=new ai(Ee*.8,Ee*.8),l=new Ge(c,o),u=(.5+Math.random()*.3)*Ee;l.scale.set(u,u,u),l.position.y=Ee*.4,l.rotation.y=Math.random()*Math.PI*2,l.rotation.x=Math.PI/2+(Math.random()-.5)*.2,l.castShadow=!0,l.receiveShadow=!0,r.add(l),t.group.add(r)}function xM(n,e,t){const{materials:i,obstacles:r}=n;if(!(i!=null&&i.obstacle)||!(r!=null&&r.group))return;const s=gM(t,e,i,r.group);s&&s.meshGroup&&s.cells&&r.list.push({...t,type:e,mesh:s.meshGroup,occupiedCells:s.cells})}function MM(n,e){return Pc(e.obstacles,n)||!1}function mf(n){const{scene:e,obstacles:t}=n;if(t!=null&&t.group){for(;t.group.children.length>0;)t.group.remove(t.group.children[0]);e&&e.remove(t.group)}t&&(t.list=[],t.group=null),console.log("Obstacles reset.")}let ln={};function EM(n){const{enemies:e}=n;if(e){_f(n),X.gameplay.info(`Creating ${Va} enemies...`);for(let t=0;t<Va;t++)gf(t,n)}}function gf(n,e){const{scene:t,materials:i,enemies:r,clock:s}=e;if(!t||!(i!=null&&i.enemy)||!r||!s)return;const a=Ac(e,!1,!0,!0,!0,Jd);if(!a){X.gameplay.warn(`Could not find start position for enemy ${n}. Skipping.`);return}const o=Math.random()<.5?Math.random()<.5?1:-1:0,c=o===0?Math.random()<.5?1:-1:0,l={x:o,y:0,z:c};let u=[],f={...a};for(let M=0;M<Zd;M++)u.push({...f}),f.x-=l.x,f.z-=l.z;let p=[];u.forEach((M,x)=>{const h=Ci(M,x===0,i,!1,n);h&&(p.push(h),t.add(h))}),ln[n]=p;const _={id:n,snake:u,direction:{...l},nextDirection:{...l},targetFoodIndex:null,state:"seeking",lastMoveTime:s.getElapsedTime()+Math.random()*go,animationFrame:0,animationTimer:s.getElapsedTime(),speed:go};r.list.push(_),Lc(_,e),X.gameplay.info(`Enemy ${n} initialized.`)}function _f(n){const{scene:e,enemies:t}=n;if(e){Object.keys(ln).forEach(r=>{const s=ln[r];s&&Array.isArray(s)&&s.forEach(a=>{a&&(a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(o=>o.dispose()):a.material.dispose()),e.children.includes(a)&&e.remove(a))})});const i=[];e.children.forEach(r=>{r.name&&r.name.startsWith("enemySnake")&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose()),i.push(r))}),i.forEach(r=>e.remove(r))}t&&(t.list=[],t.respawnQueue=[]),ln={},X.gameplay.info("Enemies reset completely.")}function yM(n,e){const{scene:t,camera:i}=e,r=ln[n];!t||!i||!r||r.forEach((s,a)=>{a===0?uf(t,i,s.position.clone()):Uo(t,i,s.position.clone(),vc/r.length,Io)})}function So(n){const{scene:e,materials:t,enemies:i}=n;!e||!(t!=null&&t.enemy)||!(i!=null&&i.list)||(Object.keys(ln).forEach(r=>{const s=Number(r);i.list.find(a=>a.id===s)||(ln[s].forEach(a=>{a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(o=>o.dispose()):a.material.dispose()),e.remove(a)}),delete ln[s])}),i.list.forEach(r=>{const s=ln[r.id];if(!s||s.length!==r.snake.length){s&&s.forEach(o=>{o.geometry&&o.geometry.dispose(),o.material&&(Array.isArray(o.material)?o.material.forEach(c=>c.dispose()):o.material.dispose()),e.remove(o)});const a=[];r.snake.forEach((o,c)=>{const l=Ci(o,c===0,t,!1,r.id);l&&(a.push(l),e.add(l))}),ln[r.id]=a}else s.forEach((a,o)=>{const c=r.snake[o];!a||!c||a.position.set(c.x*Ee,Ee/2,c.z*Ee)})}))}function SM(n,e,t){const{enemies:i,clock:r}=t;!(i!=null&&i.list)||!r||i.list.forEach(s=>{s.animationTimer+=n,s.animationTimer>.25&&(s.animationFrame=(s.animationFrame+1)%2,s.animationTimer=0,Lc(s,t)),AM(s,t),e-s.lastMoveTime>=s.speed&&(wM(s,t),s.lastMoveTime=e),TM(s,e)})}function TM(n,e){const t=ln[n.id];if(!t)return;const i=hs;if(!(t.length<i))for(let r=t.length-i;r<t.length;r++){const s=t[r];if(!s||!s.userData.isPulsing)continue;const a=1.5,o=.2,c=s.userData.pulseStartTime||0,l=e-c,u=.3+Math.sin(l*a)*o;s.material&&(s.material.emissiveIntensity=u)}}function AM(n,e){const t=n.snake[0],i=n.direction;if(n.state==="seeking"){const{index:r,position:s}=pM(t,e);if(n.targetFoodIndex=r,s){const a=s.x-t.x,o=s.z-t.z;let c={x:0,y:0,z:0};if(Math.abs(a)>Math.abs(o))c.x=Math.sign(a);else if(Math.abs(o)>0)c.z=Math.sign(o);else{n.state="idle",n.nextDirection=i;return}let l=c,u={x:t.x+l.x,z:t.z+l.z};if(En(u,n,e)){const f=Ks(c);let p=!1;for(const _ of f)if(u={x:t.x+_.x,y:0,z:t.z+_.z},!En(u,n,e)){l=_,p=!0;break}if(!p)if(u={x:t.x+i.x,y:0,z:t.z+i.z},!En(u,n,e))l=i;else{const _={x:-i.x,y:0,z:-i.z};if(u={x:t.x+_.x,y:0,z:t.z+_.z},!En(u,n,e))l=_;else{const M=Ks(i);for(const x of M)if(u={x:t.x+x.x,y:0,z:t.z+x.z},!En(u,n,e)){l=x;break}n.state="idle"}}}n.snake.length>1&&l.x===-i.x&&(l.z,-i.z),n.nextDirection=l}else n.state="idle",n.nextDirection=i}else if(n.state==="idle"){if(Math.random()<.15){const r=Ks(i),s=Math.floor(Math.random()*r.length);let a=r[s],o={x:t.x+a.x,z:t.z+a.z};En(o,n,e)&&(a=r[(s+1)%r.length],o={x:t.x+a.x,y:0,z:t.z+a.z},En(o,n,e)&&(a=i,o={x:t.x+i.x,y:0,z:t.z+i.z},En(o,n,e)&&(a=i))),n.nextDirection=a}else{let r=i,s={x:t.x+i.x,z:t.z+i.z};if(En(s,n,e)){const a=Ks(i);let o=!1;for(const c of a)if(s={x:t.x+c.x,y:0,z:t.z+c.z},!En(s,n,e)){r=c,o=!0;break}o||(r={x:-i.x,y:0,z:-i.z},s={x:t.x+r.x,y:0,z:t.z+r.z},En(s,n,e)&&(r=i))}n.nextDirection=r}Math.random()<.05&&(n.state="seeking")}}function En(n,e,t){const i=ct/2;if(n.x>=i||n.x<-i||n.z>=i||n.z<-i)return!0;for(let r=0;r<e.snake.length-1;r++)if(e.snake[r].x===n.x&&e.snake[r].z===n.z)return!0;if(MM(n,t))return!0;for(const r of t.enemies.list)if(r.id!==e.id&&r.snake.some(s=>s.x===n.x&&s.z===n.z))return!0;return!1}function Ks(n){return n.x!==0?[{x:0,y:0,z:1*n.x},{x:0,y:0,z:-1*n.x}]:n.z!==0?[{x:-1*n.z,y:0,z:0},{x:1*n.z,y:0,z:0}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0}]}function wM(n,e){var p;const{scene:t,materials:i,food:r,camera:s}=e;if(!t||!(i!=null&&i.enemy)||!r||!s)return;n.direction=n.nextDirection;const a=n.snake[0],o={x:a.x+n.direction.x,y:0,z:a.z+n.direction.z};if(En(o,n,e)){X.gameplay.warn(`Enemy ${n.id} attempted invalid move to`,o),n.state="idle";return}let c=!1,l=-1;for(let _=0;_<r.positions.length;_++)if(o.x===r.positions[_].x&&o.z===r.positions[_].z){c=!0,l=_;break}const u=ln[n.id];if(!u){X.gameplay.error(`Meshes not found for enemy ${n.id}`);return}let f=!1;if(c){f=!0;const _=r.meshes[l],M=(p=r.positions[l])==null?void 0:p.type;_&&(Uo(t,s,_.position,void 0/2,43690),t.remove(_)),r.meshes.splice(l,1),r.positions.splice(l,1),Cc(e),n.state="seeking",X.gameplay.info(`Enemy ${n.id} ate ${M}`)}if(n.snake.unshift(o),f){const _=Ci(o,!0,i,!1,n.id);_&&(t.add(_),u.unshift(_))}else{n.snake.pop();const _=u.pop();if(_)_.position.set(o.x*Ee,Ee/2,o.z*Ee),u.unshift(_);else{X.gameplay.error(`Enemy ${n.id} missing tail mesh!`);const M=Ci(o,!0,i,!1,n.id);M&&(t.add(M),u.unshift(M))}}Lc(n,e)}function Lc(n,e){const{materials:t}=e;if(!(t!=null&&t.enemy))return;const i=ln[n.id];i&&(i.forEach((r,s)=>{if(r)if(s===0)r.material=n.animationFrame===0?t.enemy.head1:t.enemy.head2;else{const a=hs;if(i.length>=a&&s>=i.length-a){r.material=n.animationFrame===0?t.enemy.body1.clone():t.enemy.body2.clone();const o=new He(Uv).multiplyScalar(.45);r.material.color.copy(o),r.material.needsUpdate=!0,r.material.emissive.setHex(0),r.material.emissiveIntensity=0,r.userData.pulseStartTime=Date.now()/1e3,r.userData.isPulsing=!0}else r.material=n.animationFrame===0?t.enemy.body1:t.enemy.body2}}),X.gameplay.info(`Updated enemy ${n.id} materials. Tail segments colored: ${hs}`))}function bM(n,e,t=!1){const{enemies:i}=e;if(!(i!=null&&i.list))return{collided:!1};const r=mM(i,n);if(r){const s=i.list.find(c=>c.id===r.id);if(!s)return{collided:!1};const a=r.segmentIndex;return{collided:!0,isTail:a>=s.snake.length-hs,isHead:a===0,enemyId:s.id,segmentIndex:a}}return{collided:!1}}function RM(n,e){const{scene:t,enemies:i,clock:r}=e;if(!t||!(i!=null&&i.list)||!r)return!1;const s=i.list.findIndex(c=>c.id===n);if(s===-1)return!1;i.list[s];const a=ln[n];a&&a.forEach((c,l)=>{l===0?uf(t,e.camera,c.position.clone()):Uo(t,e.camera,c.position.clone(),vc/a.length,Io),c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material.forEach(u=>u.dispose()):c.material.dispose()),t.remove(c)}),i.list.splice(s,1),delete ln[n];const o=r.getElapsedTime()+Wa;return i.respawnQueue||(i.respawnQueue=[]),i.respawnQueue.push({id:n,respawnTime:o}),X.gameplay.info(`Enemy ${n} killed. Scheduled to respawn in ${Wa} seconds.`),!0}function CM(n){if(n.flags.useCoreSimulation)return;const{enemies:e,clock:t}=n;if(!(e!=null&&e.respawnQueue)||!t)return;const i=t.getElapsedTime(),r=[];for(const s of e.respawnQueue)i>=s.respawnTime?(gf(s.id,n),X.gameplay.info(`Enemy ${s.id} respawned.`)):r.push(s);e.respawnQueue=r}const To=1;var xt=(n=>(n.PlayerMoved="PLAYER_MOVED",n.PlayerDead="PLAYER_DEAD",n.FoodEaten="FOOD_EATEN",n.FoodSpawned="FOOD_SPAWNED",n.EnemyMoved="ENEMY_MOVED",n.EnemyKilled="ENEMY_KILLED",n.EnemyRespawned="ENEMY_RESPAWNED",n.PowerupApplied="POWERUP_APPLIED",n.AlphaModeActivated="ALPHA_MODE_ACTIVATED",n.AlphaModeEnded="ALPHA_MODE_ENDED",n.AlphaPointsChanged="ALPHA_POINTS_CHANGED",n.ScorePopup="SCORE_POPUP",n.ScoreChanged="SCORE_CHANGED",n.Debug="DEBUG",n))(xt||{});const Gu=1;function PM(n){const e=new TextDecoder().decode(n);return JSON.parse(e).state}const Vu=1,Qa=1,Aa={Snapshot:"snapshot",Meta:"meta",Error:"error"};function vf(n,e=0){const t=n.player,i=t.segments[0],r={x:i.x+t.direction.x,y:0,z:i.z+t.direction.z},s=ct/2;if(r.x>=s||r.x<-s||r.z>=s||r.z<-s)return{newHead:r,collisionReason:"WALL"};if(!t.ghostModeActive)for(let a=0;a<t.segments.length-1;a++){const o=t.segments[a];if(LM(r,o,e))return{newHead:r,collisionReason:"SELF"}}if(!t.ghostModeActive){const a=Pc(n.obstacles,r);if(a)return{newHead:r,collisionReason:"OBSTACLE",obstacleType:a}}return{newHead:r,collisionReason:null,obstacleType:null}}function LM(n,e,t=0){return t>0?Math.abs(n.x-e.x)<1-t&&Math.abs(n.z-e.z)<1-t:n.x===e.x&&n.z===e.z}function IM(n,e){n.flags.gameOver||(xf(n.player),e.turn==="left"?Wu(n,OM):e.turn==="right"&&Wu(n,UM))}function DM(n,e){var l;const t=[],i=n.player;i.moveTimer+=e;let r=1;i.speedBoostUntil&&n.time<i.speedBoostUntil&&(r*=zd),(l=i.alphaMode)!=null&&l.active&&(r*=jd);const s=i.speed/r;if(i.moveTimer<s)return{events:t};if(i.moveTimer=0,xf(i),i.turnQueue.queue.length>0){const u=i.turnQueue.queue.shift();u?i.direction={...u}:i.direction={...i.nextDirection}}else i.direction={...i.nextDirection};if(!i.segments[0])return t.push({type:xt.Debug,payload:{message:"NO_HEAD"}}),{events:t};const{newHead:o,collisionReason:c}=vf(n);return c==="WALL"?(t.push({type:xt.PlayerDead,payload:{reason:"WALL_COLLISION"}}),{events:t}):c==="SELF"?(t.push({type:xt.PlayerDead,payload:{reason:"SELF_COLLISION"}}),{events:t}):c==="OBSTACLE"?(t.push({type:xt.PlayerDead,payload:{reason:"OBSTACLE_COLLISION"}}),{events:t}):(i.segments.unshift(o),i.turnQueue.lastDirection={...i.direction},i.segments.pop(),t.push({type:xt.PlayerMoved}),{events:t})}function xf(n){n.turnQueue||(n.turnQueue={queue:[],lastDirection:{...n.direction}})}function Wu(n,e){const t=n.player,i=t.turnQueue.queue.length>0?t.turnQueue.queue[t.turnQueue.queue.length-1]:t.turnQueue.lastDirection,r=e(i);r.x===-i.x&&r.z===-i.z||(t.turnQueue.queue.push({...r}),t.nextDirection=r)}function OM(n){return{x:n.z,y:0,z:-n.x}}function UM(n){return{x:-n.z,y:0,z:n.x}}let dt=[];function NM(n){const{playerSnake:e,clock:t}=n;if(!e)return;e.segments=[],e.direction={x:1,z:0},e.lastDirection={x:1,z:0},e.pendingTurns=[],e.speed=ui("BASE_SNAKE_SPEED")||Bn,e.moveTimer=0,e.animationFrame=0,e.animationTimer=0,e.ghostModeActive=!1,e.activePowerUps=[],e.enlargedHeadUntil=0,e.speedBoostUntil=0,e.immediateDirectionChange=!1,e.lastTextureUpdateFrame=0;const i=t.getElapsedTime();e.alphaMode={active:!1,progress:0,startTime:0,endTime:0,lastScoreThreshold:0,alphaPoints:0,lastDecayTime:i,scoreMultiplier:1,scoreMultiplierStack:[],consecutiveActivations:0,cooldownActive:!1,cooldownEndTime:0};for(let r=0;r<mc;r++)e.segments.push({x:-r,y:0,z:0});Mf(n),X.gameplay.info("Player snake initialized."),ms(n)}function Mf(n){const{scene:e,materials:t,playerSnake:i}=n;!e||!(t!=null&&t.snake)||!(i!=null&&i.segments)||(Ic(n),i.segments.forEach((r,s)=>{const o=Ci(r,s===0,t,!0);o&&(dt.push(o),e.add(o))}),di(n))}function Ic(n){const{scene:e}=n;e&&dt.forEach(t=>{var i;e.remove(t),t.geometry&&!((i=t.userData)!=null&&i.sharedGeometry)&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):t.material.dispose())}),dt=[]}function FM(n){Ic(n),NM(n),af(0,n),X.gameplay.info("Player reset complete.")}function BM(n,e,t){const{playerSnake:i,score:r,flags:s}=t;if(!(s.gameOver||!i)){if(!s.useCoreSimulation)i.alphaMode.active||Cf(e,t),ms(t),Nc(r.current,t),Oc(r.current,e,t),Dc(e,t),i.alphaMode.active?wf(e,t):i.alphaMode.cooldownActive&&lf(i.alphaMode.cooldownEndTime),Sf(e,t);else if(ms(t),i.alphaMode.active){const a=i.alphaMode.endTime-e,o=Math.max(.001,i.alphaMode.endTime-i.alphaMode.startTime),c=Math.max(0,Math.min(1,a/o));Eo(c,a,i.alphaMode.scoreMultiplier)}i.enlargedHeadUntil>0&&e>i.enlargedHeadUntil&&(i.enlargedHeadUntil=0,dt.length>0&&dt[0]&&dt[0].scale.set(1,1,1)),i.animationTimer+=n,i.animationTimer>=.25&&(i.animationTimer=0,i.animationFrame=i.animationFrame===0?1:0,di(t))}}function Ef(n){const{playerSnake:e,scene:t,materials:i}=n;if(!(!(e!=null&&e.segments)||!t||!(i!=null&&i.snake))){if(dt.length!==e.segments.length){Ic(n),Mf(n);return}for(let r=0;r<e.segments.length;r++){const s=e.segments[r],a=dt[r];a&&a.position.set(s.x*Ee,Ee/2,s.z*Ee)}di(n)}}function $u(n){const{playerSnake:e,flags:t}=n;if(t.gameOver)return;const i=e.lastDirection.x,r=e.lastDirection.z,s={x:r,y:0,z:-i};let a;if(e.pendingTurns.length>0?a=e.pendingTurns[e.pendingTurns.length-1]:a={x:i,z:r},(s.x!==-a.x||s.z!==-a.z)&&(e.pendingTurns.push({...s}),e.pendingTurns.length===1&&(e.nextDirection=s),e.immediateDirectionChange=!0,e.pendingTurns.length>1)){const o=Fc(n);e.moveTimer<o*.8&&(e.moveTimer=o*.8)}}function Xu(n){const{playerSnake:e,flags:t}=n;if(t.gameOver)return;const i=e.lastDirection.x,r=e.lastDirection.z,s={x:-r,y:0,z:i};let a;if(e.pendingTurns.length>0?a=e.pendingTurns[e.pendingTurns.length-1]:a={x:i,z:r},(s.x!==-a.x||s.z!==-a.z)&&(e.pendingTurns.push({...s}),e.pendingTurns.length===1&&(e.nextDirection=s),e.immediateDirectionChange=!0,e.pendingTurns.length>1)){const o=Fc(n);e.moveTimer<o*.8&&(e.moveTimer=o*.8)}}function kM(n,e,t){var l,u;const{playerSnake:i,score:r,flags:s,scene:a,materials:o}=t;if(s.gameOver||!i)return;i.alphaMode.active||Cf(e,t),ms(t),Nc(r.current,t),Oc(r.current,e,t),Dc(e,t),i.alphaMode.active?wf(e,t):i.alphaMode.cooldownActive&&lf(i.alphaMode.cooldownEndTime),Sf(e,t),i.enlargedHeadUntil>0&&e>i.enlargedHeadUntil&&(i.enlargedHeadUntil=0,dt.length>0&&dt[0]&&dt[0].scale.set(1,1,1)),i.animationTimer+=n,i.animationTimer>=.25&&(i.animationTimer=0,i.animationFrame=i.animationFrame===0?1:0,di(t)),i.moveTimer+=n;const c=Fc(t);if(i.immediateDirectionChange&&(i.direction=i.nextDirection,i.immediateDirectionChange=!1),i.moveTimer>=c){if(i.moveTimer=0,i.pendingTurns.length>0?(i.direction={...i.pendingTurns[0]},i.pendingTurns.shift(),i.pendingTurns.length>0&&(i.nextDirection={...i.pendingTurns[0]})):i.direction={...i.nextDirection},i.lastDirection={...i.direction},i.direction.x===0&&i.direction.z===0){X.gameplay.warn("Player direction became zero. Reverting to previous.");return}if(!i.segments||i.segments.length===0){X.gameplay.error("No player snake segments found!");return}if(!i.segments[0]){X.gameplay.error("Player head segment is undefined!");return}const{newHead:p,collisionReason:_,obstacleType:M}=vf({player:i,obstacles:t.obstacles},void 0);if(_==="WALL"){X.gameplay.info("Collision: Wall"),ro(t,"WALL_COLLISION");return}if(_==="SELF"){X.gameplay.info("Collision: Self"),ro(t,"SELF_COLLISION");return}if(_==="OBSTACLE"){X.gameplay.info("Collision: Obstacle type:",M);let R="OBSTACLE_COLLISION";M==="tree"?R="TREE_COLLISION":M==="bush"&&(R="BUSH_COLLISION"),ro(t,R);return}const x=bM(p,t,!0);if(x.collided&&!qM(x,t))return;const v=hM(p,t);let h=!1;if(v){X.gameplay.info("Food eaten in playerSnake.js:",v.type,"Alpha Mode active:",(l=i.alphaMode)==null?void 0:l.active);let R=1;i.alphaMode&&i.alphaMode.active&&(R=i.alphaMode.scoreMultiplier,X.gameplay.info(`Applying Alpha Mode score multiplier: x${R}`));const A=v.scoreValue,P=Math.round(A*R);t.score.current+=P,R>1&&mt(`+${P} pts!`,16766720),xs(t.score.current);const B=ci.find(L=>L.type===v.type);B&&VM(B.type,t),h=v.grow!==!1}if(i.segments.unshift(p),h){const R=Ci(p,!0,o,!0);R&&(a.add(R),dt.unshift(R))}else{i.segments.pop();const R=dt.pop();if(R)R.position.set(p.x*Ee,Ee/2,p.z*Ee),dt.unshift(R);else{X.gameplay.error("Tail mesh missing during move!");const A=Ci(p,!0,o,!0);A&&(a.add(A),dt.unshift(A))}}Tf(t),i.lastDirection={...i.direction},Ux(((u=i.alphaMode)==null?void 0:u.active)||!1)}}function zM(n,e){const{playerSnake:t,clock:i}=n;if(!(!t||!i)){if(t.enlargedHeadUntil=e+_u,dt.length>0&&dt[0]){const r=Bv;dt[0].scale.set(r,r,r)}X.gameplay.info(`Player head enlarged for ${_u} seconds`)}}function qu(n,e){const{playerSnake:t,clock:i}=e,r=i.getElapsedTime();if(RM(n,e)){let s=1;t.alphaMode&&t.alphaMode.active&&(s=t.alphaMode.scoreMultiplier,Uc(r,e),X.gameplay.info(`Applied Alpha Mode score multiplier: x${s} and added new multiplier`));const o=Math.round(Nv*s);if(e.score.current+=o,e.enemies.kills+=1,e.stats.snakesEaten+=1,s>1&&mt(`+${o} pts!`,16766720),vn("eatSnake"),xs(e.score.current),Ms(e.enemies.kills),mt(jx(),Io),yf(e),zM(e,r),HM(e,Fv),t.alphaMode.active){const c=Dv;t.alphaMode.endTime+=c,mt(`+${c}s ALPHA TIME`,Ki),X.gameplay.info(`Alpha mode extended by ${c} seconds! New end time:`,t.alphaMode.endTime)}return!0}return!1}function HM(n,e){const{playerSnake:t,scene:i,materials:r}=n;if(!t||!i||!r)return;const s=t.segments[t.segments.length-1];if(s){for(let a=0;a<e;a++){const o={...s};t.segments.push(o);const c=Ci(o,!1,r,!0);c&&(i.add(c),dt.push(c))}Tf(n)}}function GM(n){var _;const{camera:e,playerSnake:t,scene:i}=n,r=(_=n.lights)==null?void 0:_.directionalLight;if(!e||!t||t.segments.length===0||dt.length===0||!r)return;const a=dt[0].position,o=Math.max(2,ka*.2),c=new H(t.direction.x,0,t.direction.z).normalize(),l=a.clone().addScaledVector(c,o);r.target&&r.target.position.lerp(a,Tv*1.5);const u=c.clone().multiplyScalar(-1),f=a.clone().addScaledVector(u,ka);f.y=Bd,e.position.lerp(f,Av);const p=e.clone();p.lookAt(l),e.quaternion.slerp(p.quaternion,wv)}function VM(n,e){var a;const{playerSnake:t,clock:i}=e;if(!t||!i)return;t.activePowerUps||(t.activePowerUps=[]);const r=(a=e.flags)!=null&&a.useCoreSimulation?e.simulation.time:i.getElapsedTime(),s=ci.find(o=>o.type===n);if(!s){X.gameplay.error(`Unknown power-up type: ${n}`);return}switch(X.gameplay.info(`Applying power-up: ${s.description}`),n!=="normal"&&yf(e),n){case"speed":t.speed=Bn/Gd,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),Si(e);break;case"ghost":t.ghostModeActive=!0,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),di(e),Si(e);break;case"score_x2":t.scoreMultiplier=Wd,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),Si(e);break;case"shrink":const o=t.segments.length,c=Math.min(Vd,o-mc);if(c>0){t.segments.splice(t.segments.length-c,c);for(let l=0;l<c;l++){const u=dt.pop();u&&e.scene&&e.scene.remove(u)}Si(e,`Shrunk by ${c} segments!`)}break}}function yf(n){const{camera:e,cameraEffects:t,clock:i}=n;!e||!i||!t||!t.shake||(t.shake.originalPosition.copy(e.position),t.shake.active=!0,t.shake.startTime=i.getElapsedTime(),t.shake.duration=$v,t.shake.intensity=Xv)}function Sf(n,e){const{playerSnake:t}=e;if(!(t!=null&&t.activePowerUps))return;let i=!1,r=t.activePowerUps.length;for(;r--;){const s=t.activePowerUps[r];if(n>=s.endTime){switch(X.gameplay.info(`Power-up expired: ${s.type}`),s.type){case"speed":t.speed=Bn,mt("Speed boost ended");break;case"ghost":t.ghostModeActive=!1,di(e),mt("Ghost mode ended");break;case"score_x2":t.scoreMultiplier=1,mt("Score multiplier ended");break}t.activePowerUps.splice(r,1),i=!0}}Si(e)}function Si(n,e=""){const{playerSnake:t,clock:i}=n;if(!(t!=null&&t.activePowerUps)||!i)return;const r=i.getElapsedTime();if(e){cs(e);return}if(t.activePowerUps.length>0){const s=t.activePowerUps.map(a=>{const c=Math.max(0,a.endTime-r).toFixed(1),l=ci.find(f=>f.type===a.type);return`${l?l.description:a.type}: ${c}s`});cs(s.join(" | "))}else cs("")}function WM(n){const{playerSnake:e,clock:t}=n;if(!(e!=null&&e.activePowerUps)||!t)return;const i=t.getElapsedTime();let r=!1;for(let s=e.activePowerUps.length-1;s>=0;s--){const a=e.activePowerUps[s];if(i>=a.endTime){switch(X.gameplay.info(`Power-up expired: ${a.type}`),a.type){case"speed":e.speed=Bn,mt("Speed boost ended");break;case"ghost":e.ghostModeActive=!1,di(n),mt("Ghost mode ended");break;case"score_x2":e.scoreMultiplier=1,mt("Score multiplier ended");break}e.activePowerUps.splice(s,1),r=!0}}Si(n)}function di(n,e=!1){const{playerSnake:t,materials:i}=n;if(!(i!=null&&i.snake)||dt.length===0||!e&&t.lastTextureUpdateFrame===t.animationFrame)return;t.lastTextureUpdateFrame=t.animationFrame;let r,s;t.alphaMode.active?(r=t.animationFrame===0?i.snake.head1.clone():i.snake.head2.clone(),s=t.animationFrame===0?i.snake.body1.clone():i.snake.body2.clone(),r.color.setHex(Ki),s.color.setHex(Ki)):t.ghostModeActive?(r=t.animationFrame===0?i.snake.head1.clone():i.snake.head2.clone(),s=t.animationFrame===0?i.snake.body1.clone():i.snake.body2.clone(),r.transparent=!0,r.opacity=.6,s.transparent=!0,s.opacity=.6):(r=t.animationFrame===0?i.snake.head1:i.snake.head2,s=t.animationFrame===0?i.snake.body1:i.snake.body2),dt.forEach((a,o)=>{a&&(o===0?a.material=r:a.material=s)})}function Tf(n){const{playerSnake:e,materials:t}=n;if(dt.length===0||!(t!=null&&t.snake))return;let i,r;e.alphaMode.active?(i=e.animationFrame===0?t.snake.head1.clone():t.snake.head2.clone(),r=e.animationFrame===0?t.snake.body1.clone():t.snake.body2.clone(),i.color.setHex(Ki),r.color.setHex(Ki)):e.ghostModeActive?(i=e.animationFrame===0?t.snake.head1.clone():t.snake.head2.clone(),r=e.animationFrame===0?t.snake.body1.clone():t.snake.body2.clone(),i.transparent=!0,i.opacity=.6,r.transparent=!0,r.opacity=.6):(i=e.animationFrame===0?t.snake.head1:t.snake.head2,r=e.animationFrame===0?t.snake.body1:t.snake.body2),dt[0].material=i,dt.length>1&&dt[1]&&(dt[1].material=r)}function $M(n){const{playerSnake:e}=n;e.alphaMode.cooldownActive=!1,e.alphaMode.consecutiveActivations=0;const t=n.score.current,r=Math.floor(t/gc)-1;e.alphaMode.lastScoreThreshold=r,X.gameplay.info("Alpha Mode cooldown reset. lastScoreThreshold set to:",r)}function ec(n,e){const{playerSnake:t}=e;t.alphaMode.active||(t.alphaMode.alphaPoints+=n,ms(e))}function Dc(n,e){const{playerSnake:t}=e;if(t.alphaMode.active)return!1;const i=ui("ALPHA_POINTS_THRESHOLD")||Lo;return t.alphaMode.alphaPoints>=i?(X.gameplay.info(`Alpha Mode triggered by points (${t.alphaMode.alphaPoints}/${i})`),t.alphaMode.alphaPoints=0,Af(n,e),!0):!1}function Oc(n,e,t){const{playerSnake:i}=t,s=Math.floor(n/gc);X.gameplay.debug(`Alpha Mode Check - Current Threshold: ${s}, Last Threshold: ${i.alphaMode.lastScoreThreshold}`),X.gameplay.debug(`Alpha Mode Active: ${i.alphaMode.active}, Cooldown Active: ${i.alphaMode.cooldownActive}`),s>i.alphaMode.lastScoreThreshold&&!i.alphaMode.active?(i.alphaMode.lastScoreThreshold=s,Af(e,t),X.gameplay.info("Alpha Mode activated via score threshold! Threshold:",s)):(s<=i.alphaMode.lastScoreThreshold&&X.gameplay.debug("Alpha Mode not activated: Current threshold not greater than last threshold"),i.alphaMode.active&&X.gameplay.debug("Alpha Mode not activated: Alpha Mode is already active"))}function Af(n,e){const{playerSnake:t}=e,i=ui("ALPHA_MODE_DURATION")||_c;t.alphaMode.active=!0,t.alphaMode.progress=1,t.alphaMode.startTime=n,t.alphaMode.endTime=n+i,t.alphaMode.scoreMultiplier=Po,Uc(n,e),t.alphaMode.consecutiveActivations++,cf(),(void 0)(),Eo(1,i,t.alphaMode.scoreMultiplier),X.gameplay.info(`Alpha Mode activated for ${i} seconds, multiplier: ${t.alphaMode.scoreMultiplier}`)}function wf(n,e){const{playerSnake:t}=e;if(!t.alphaMode.active)return;if(n>=t.alphaMode.endTime){t.alphaMode.active=!1,t.speed=Bn,t.alphaMode.scoreMultiplier=1,t.alphaMode.scoreMultiplierStack=[],Eo(0,0),mt("Alpha Mode ended"),di(e);const a=e.score.current;Nc(a,e),X.gameplay.info("Alpha Mode deactivated");return}const i=t.alphaMode.endTime-n,r=Math.max(.001,t.alphaMode.endTime-t.alphaMode.startTime),s=Math.max(0,Math.min(1,i/r));bf(n,t),Eo(s,i,t.alphaMode.scoreMultiplier)}function bf(n,e){if(e.alphaMode.scoreMultiplierStack=e.alphaMode.scoreMultiplierStack.filter(t=>t.endTime>n),e.alphaMode.scoreMultiplierStack.length>0){let t=1;e.alphaMode.scoreMultiplierStack.forEach(i=>{t*=i.value}),t=Math.min(t,Xd),e.alphaMode.scoreMultiplier=t}else e.alphaMode.scoreMultiplier=1}function Uc(n,e){const{playerSnake:t}=e;if(!t.alphaMode.active)return;const i={value:Po,endTime:n+$d};t.alphaMode.scoreMultiplierStack.push(i),bf(n,t),mt(`Score x${t.alphaMode.scoreMultiplier.toFixed(1)}!`),X.gameplay.info(`Added score multiplier. Current total: x${t.alphaMode.scoreMultiplier}`)}let wa=0;function XM(){const n=Ft.ALPHA_MODE.ALPHA_KILL_MESSAGES;if(!n||n.length===0)return Ft.ALPHA_MODE.KILL_MESSAGE;const e=n[wa];return wa=(wa+1)%n.length,e}function qM(n,e,t){const{playerSnake:i}=e;return i.alphaMode.active?(console.log("Alpha Mode active - killing enemy snake regardless of collision point"),qu(n.enemyId,e),vn("alphaKillExplode1"),nf(),mt(XM(),Ki),!0):n.isTail?(console.log("Hit enemy tail - killing enemy snake"),qu(n.enemyId,e),ec(qd,e),!0):i.ghostModeActive?(console.log("Ghost Mode active - passing through enemy"),!0):(console.log("Hit enemy body/head without Alpha Mode or Ghost Mode - player dies"),ro(e,"ENEMY_COLLISION"),!1)}function ro(n,e){const{scene:t,playerSnake:i,camera:r}=n;!t||!i||!r||(Rf(n),kf(n,e))}function Rf(n){const{scene:e,playerSnake:t,camera:i}=n;!e||!t||!i||(vn("playerDeath"),dt.length>0&&Uo(e,i,dt[0].position,Wv,16729156))}function Nc(n,e){const{playerSnake:t}=e,i=gc;if(t.alphaMode.active)return;(typeof t.alphaMode.lastScoreThreshold!="number"||isNaN(t.alphaMode.lastScoreThreshold))&&(X.gameplay.info("Fixing invalid lastScoreThreshold value:",t.alphaMode.lastScoreThreshold),t.alphaMode.lastScoreThreshold=Math.max(0,Math.floor(n/i)-1));const r=(t.alphaMode.lastScoreThreshold+1)*i,s=n-t.alphaMode.lastScoreThreshold*i,a=i;let o=0;if(o=Math.min(100,Math.floor(s/a*100)),t.alphaMode.scoreProgress=o,X.gameplay.info(`Alpha Mode Progress: ${o}% (Score: ${n}, Next Threshold: ${r})`),o>=100&&!t.alphaMode.cooldownActive){X.gameplay.info("Alpha Mode at 100% - Checking activation state:",{lastScoreThreshold:t.alphaMode.lastScoreThreshold,currentThreshold:Math.floor(n/i),cooldownActive:t.alphaMode.cooldownActive});const c=e.clock.getElapsedTime();Oc(n,c,e)}}function ms(n){const{playerSnake:e}=n;if(e.alphaMode.active)return;const t=e.alphaMode.alphaPoints,i=ui("ALPHA_POINTS_THRESHOLD")||Lo,r=i>0?i:1,s=Math.min(100,Math.floor(t/r*100));if((!e.alphaMode.lastDisplayedPercentage||e.alphaMode.lastDisplayedPercentage!==s||n.frameCount%10===0)&&(Kx(s,t,r),e.alphaMode.lastDisplayedPercentage=s),s>=100&&!e.alphaMode.cooldownActive){const a=n.clock.getElapsedTime();Dc(a,n)}}function Cf(n,e){const{playerSnake:t}=e;if(e.frameCount%5!==0)return;if(!t.alphaMode.lastDecayTime||t.alphaMode.lastDecayTime===0||isNaN(t.alphaMode.lastDecayTime)){t.alphaMode.lastDecayTime=n;return}const i=n-t.alphaMode.lastDecayTime;if(i>0&&i<1&&t.alphaMode.alphaPoints>0){const s=Yd*i;t.alphaMode.alphaPoints-=s,t.alphaMode.alphaPoints=Math.max(0,t.alphaMode.alphaPoints)}t.alphaMode.lastDecayTime=n}function Fc(n){const{playerSnake:e}=n;let t=e.speed,i=1;return e.speedBoostUntil>0&&(i*=zd),e.alphaMode.active&&(i*=jd),t/=i,t}function YM(n,e){const t=a=>{var c;const o={playerId:"local",tick:n.core.tick+1,turn:a,version:Qa};if((c=n.network)!=null&&c.enabled&&typeof n.network.sendInput=="function"){n.network.sendInput(o);return}n.inputQueue.push(o)},i=a=>{if(n.flags.gameOver){a.key.toLowerCase()==="r"&&zf();return}switch(["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"].includes(a.key.toLowerCase())&&a.preventDefault(),a.key.toLowerCase()){case"arrowleft":case"a":n.flags.useCoreSimulation?t("left"):($u(n),n.playerSnake.immediateDirectionChange=!0);break;case"arrowright":case"d":n.flags.useCoreSimulation?t("right"):(Xu(n),n.playerSnake.immediateDirectionChange=!0);break;case"p":console.log("Debug Game State:",n);break}},r=a=>{n.flags.gameOver||(a.preventDefault(),n.flags.useCoreSimulation?t("left"):($u(n),n.playerSnake.immediateDirectionChange=!0))},s=a=>{n.flags.gameOver||(a.preventDefault(),n.flags.useCoreSimulation?t("right"):(Xu(n),n.playerSnake.immediateDirectionChange=!0))};return window.addEventListener("keydown",i),e.leftButton&&e.leftButton.addEventListener("touchstart",r,{passive:!1}),e.rightButton&&e.rightButton.addEventListener("touchstart",s,{passive:!1}),()=>{console.log("Removing input listeners"),window.removeEventListener("keydown",i),e.leftButton&&e.leftButton.removeEventListener("touchstart",r),e.rightButton&&e.rightButton.removeEventListener("touchstart",s)}}var ls=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";n=u}var r=(performance||Date).now(),s=r,a=0,o=t(new ls.Panel("FPS","#0ff","#002")),c=t(new ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(c.update(u-r,200),u>=s+1e3&&(o.update(a*1e3/(u-s),100),s=u,a=0,l)){var f=performance.memory;l.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};ls.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,c=48*a,l=3*a,u=2*a,f=3*a,p=15*a,_=74*a,M=30*a,x=document.createElement("canvas");x.width=o,x.height=c,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*a+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,o,c),v.fillStyle=e,v.fillText(n,l,u),v.fillRect(f,p,_,M),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(f,p,_,M),{dom:x,update:function(h,R){i=Math.min(i,h),r=Math.max(r,h),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,o,p),v.fillStyle=e,v.fillText(s(h)+" "+n+" ("+s(i)+"-"+s(r)+")",l,u),v.drawImage(x,f+a,p,_-a,M,f,p,_-a,M),v.fillRect(f+_-a,p,a,M),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(f+_-a,p,a,s((1-h/R)*M))}}};function jM(){X.system.info("Initializing game mode system...");const n=z.gameMode;X.system.info(`Current game mode: ${n}`);const e=document.getElementById("normalModeBtn"),t=document.getElementById("casualModeBtn"),i=document.getElementById("normalModeBtnSettings"),r=document.getElementById("casualModeBtnSettings");e&&t&&(zn(e,t,n),e.addEventListener("click",()=>{Zs(wt.NORMAL),zn(e,t,wt.NORMAL),i&&r&&zn(i,r,wt.NORMAL)}),t.addEventListener("click",()=>{Zs(wt.CASUAL),zn(e,t,wt.CASUAL),i&&r&&zn(i,r,wt.CASUAL)})),i&&r&&(zn(i,r,n),i.addEventListener("click",()=>{Zs(wt.NORMAL),zn(i,r,wt.NORMAL),e&&t&&zn(e,t,wt.NORMAL)}),r.addEventListener("click",()=>{Zs(wt.CASUAL),zn(i,r,wt.CASUAL),e&&t&&zn(e,t,wt.CASUAL)}));const s=xc();X.system.info("Current mode settings:",s)}function zn(n,e,t){t===wt.CASUAL?(n.classList.remove("active"),e.classList.add("active")):(n.classList.add("active"),e.classList.remove("active"))}function Zs(n){if(n===wt.NORMAL||n===wt.CASUAL){X.system.info(`Setting game mode to: ${n}`),Kv(n);const e=xc();X.system.info(`Game mode set to ${n}. Settings:`,e)}else X.system.warn(`Invalid game mode: ${n}`)}function Pf(n){let e=n>>>0;const t=()=>{e+=1831565813;let r=Math.imul(e^e>>>15,1|e);return r^=r+Math.imul(r^r>>>7,61|r),((r^r>>>14)>>>0)/4294967296};return{nextFloat:t,nextInt:r=>r<=0?0:Math.floor(t()*r),seed:n}}function Lf(n=Date.now()){return{time:0,tick:0,eventIdCounter:0,rng:Pf(n),player:{segments:[],direction:{x:1,y:0,z:0},nextDirection:{x:1,y:0,z:0},speed:0,moveTimer:0,animationFrame:0,animationTimer:0,scoreMultiplier:1,ghostModeActive:!1,activePowerUps:[],enlargedHeadUntil:0,alphaMode:{active:!1,startTime:0,endTime:0,lastScoreThreshold:0,alphaPoints:0,lastDecayTime:0,scoreMultiplier:1,scoreMultiplierStack:[],consecutiveActivations:0,cooldownActive:!1,cooldownEndTime:0,progress:0}},enemies:{list:[],kills:0},food:{positions:[]},obstacles:{list:[]},score:{current:0,multiplier:1},flags:{gameOver:!1}}}function If(n){const e=n.core||Lf();return e.player=n.playerSnake,e.enemies=n.enemies,e.food.positions=n.food.positions,e.obstacles=n.obstacles,e.score=n.score,e.flags=n.flags,n.core=e,e}function KM(n,e){n.core=e,n.playerSnake=e.player,n.enemies={...n.enemies,...e.enemies},n.food={...n.food,positions:e.food.positions},n.obstacles={...n.obstacles,...e.obstacles},n.score=e.score,n.flags={...n.flags,...e.flags}}function ZM(n,e){const t=[];for(const i of n.enemies.list)if(i.animationTimer+=e,i.animationTimer>.25&&(i.animationFrame=(i.animationFrame+1)%2,i.animationTimer=0),JM(i,n),n.time-i.lastMoveTime>=i.speed){const r=QM(i,n);i.lastMoveTime=n.time,r.moved&&t.push({type:xt.EnemyMoved,payload:{enemyId:i.id}}),r.foodSpawned&&t.push({type:xt.FoodSpawned,payload:{type:r.foodSpawned.type,x:r.foodSpawned.x,z:r.foodSpawned.z}})}return{events:t}}function JM(n,e){const t=n.snake[0],i=n.direction;if(n.state==="seeking"){const{index:r,position:s}=tE(t,e);if(n.targetFoodIndex=r,s){const a=s.x-t.x,o=s.z-t.z;let c={x:0,y:0,z:0};if(Math.abs(a)>Math.abs(o))c.x=Math.sign(a);else if(Math.abs(o)>0)c.z=Math.sign(o);else{n.state="idle",n.nextDirection=i;return}let l=c,u={x:t.x+l.x,z:t.z+l.z};if(yn(u,n,e)){const f=Js(c);let p=!1;for(const _ of f)if(u={x:t.x+_.x,y:0,z:t.z+_.z},!yn(u,n,e)){l=_,p=!0;break}if(!p)if(u={x:t.x+i.x,y:0,z:t.z+i.z},!yn(u,n,e))l=i;else{const _={x:-i.x,y:0,z:-i.z};if(u={x:t.x+_.x,y:0,z:t.z+_.z},!yn(u,n,e))l=_;else{const M=Js(i);for(const x of M)if(u={x:t.x+x.x,y:0,z:t.z+x.z},!yn(u,n,e)){l=x;break}n.state="idle"}}}n.nextDirection=l}else n.state="idle",n.nextDirection=i}else if(n.state==="idle"){if(e.rng.nextFloat()<.15){const r=Js(i),s=e.rng.nextInt(r.length);let a=r[s],o={x:t.x+a.x,z:t.z+a.z};yn(o,n,e)&&(a=r[(s+1)%r.length],o={x:t.x+a.x,y:0,z:t.z+a.z},yn(o,n,e)&&(a=i,o={x:t.x+i.x,y:0,z:t.z+i.z},yn(o,n,e)&&(a=i))),n.nextDirection=a}else{let r=i,s={x:t.x+i.x,z:t.z+i.z};if(yn(s,n,e)){const a=Js(i);let o=!1;for(const c of a)if(s={x:t.x+c.x,y:0,z:t.z+c.z},!yn(s,n,e)){r=c,o=!0;break}o||(r={x:-i.x,y:0,z:-i.z},s={x:t.x+r.x,y:0,z:t.z+r.z},yn(s,n,e)&&(r=i))}n.nextDirection=r}e.rng.nextFloat()<.05&&(n.state="seeking")}}function yn(n,e,t){const i=ct/2;if(n.x>=i||n.x<-i||n.z>=i||n.z<-i)return!0;for(let r=0;r<e.snake.length-1;r++)if(e.snake[r].x===n.x&&e.snake[r].z===n.z)return!0;if(Pc(t.obstacles,n))return!0;for(const r of t.enemies.list)if(r.id!==e.id&&r.snake.some(s=>s.x===n.x&&s.z===n.z))return!0;return!1}function Js(n){return n.x!==0?[{x:0,y:0,z:1*n.x},{x:0,y:0,z:-1*n.x}]:n.z!==0?[{x:-1*n.z,y:0,z:0},{x:1*n.z,y:0,z:0}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0}]}function QM(n,e){n.direction=n.nextDirection;const t=n.snake[0],i={x:t.x+n.direction.x,y:0,z:t.z+n.direction.z};if(yn(i,n,e))return n.state="idle",{moved:!1,foodSpawned:null};let r=!1,s=-1;for(let o=0;o<e.food.positions.length;o++)if(i.x===e.food.positions[o].x&&i.z===e.food.positions[o].z){r=!0,s=o;break}n.snake.unshift(i);let a=null;return r?(e.food.positions.splice(s,1),a=Rc(e),n.state="seeking"):n.snake.pop(),{moved:!0,foodSpawned:a}}function Df(n,e){const t=df(n,Jd),i=n.rng.nextFloat()<.5?n.rng.nextFloat()<.5?1:-1:0,r=i===0?n.rng.nextFloat()<.5?1:-1:0,s={x:i,y:0,z:r},a=[];let o={...t};for(let l=0;l<Zd;l++)a.push({...o}),o.x-=s.x,o.z-=s.z;const c={id:e,snake:a,direction:{...s},nextDirection:{...s},targetFoodIndex:null,state:"seeking",lastMoveTime:n.time+n.rng.nextFloat()*go,animationFrame:0,animationTimer:n.time,speed:go};n.enemies.list.push(c)}function eE(n,e){n.enemies.list=[],n.enemies.respawnQueue=[];for(let t=0;t<e;t++)Df(n,t)}function tE(n,e){if(!e.food.positions.length)return{index:null,position:null};let t=null,i=1/0,r=null;for(let s=0;s<e.food.positions.length;s++){const a=e.food.positions[s],o=a.x-n.x,c=a.z-n.z,l=Math.abs(o)+Math.abs(c);l<i&&(i=l,t=s,r={x:a.x,y:0,z:a.z})}return{index:t,position:r}}function nE(n,e){for(const t of n.enemies.list)for(let i=0;i<t.snake.length;i++){const r=t.snake[i];if(r.x===e.x&&r.z===e.z){const s=i>=t.snake.length-hs;return{enemyId:t.id,segmentIndex:i,isTail:s,isHead:i===0}}}return null}function iE(n,e){const t=n.enemies.list.findIndex(i=>i.id===e);return t===-1?!1:(n.enemies.list.splice(t,1),n.enemies.kills=(n.enemies.kills||0)+1,n.enemies.respawnQueue||(n.enemies.respawnQueue=[]),n.enemies.respawnQueue.push({id:e,respawnTime:n.time+Wa}),!0)}function rE(n){var i;if(!((i=n.enemies.respawnQueue)!=null&&i.length))return[];const e=[],t=[];for(const r of n.enemies.respawnQueue)n.time>=r.respawnTime?e.push(r.id):t.push(r);return n.enemies.respawnQueue=t,e}function Yu(n,e,t){const i=n.player;i.alphaMode.active||(i.alphaMode.alphaPoints+=e,t.push({type:xt.AlphaPointsChanged,payload:{points:i.alphaMode.alphaPoints}}))}function sE(n,e){const t=n.player;if(!t.alphaMode.lastDecayTime||t.alphaMode.lastDecayTime===0||isNaN(t.alphaMode.lastDecayTime)){t.alphaMode.lastDecayTime=e;return}const i=e-t.alphaMode.lastDecayTime;if(i>0&&i<1&&t.alphaMode.alphaPoints>0){const r=Yd;t.alphaMode.alphaPoints=Math.max(0,t.alphaMode.alphaPoints-r*i)}t.alphaMode.lastDecayTime=e}function oE(n,e,t){const i=n.player;if(i.alphaMode.active)return!1;const r=ui("ALPHA_POINTS_THRESHOLD")||Lo;return i.alphaMode.alphaPoints>=r?(i.alphaMode.alphaPoints=0,aE(n,e,t),!0):!1}function aE(n,e,t){const i=n.player,r=ui("ALPHA_MODE_DURATION")||_c;i.alphaMode.active=!0,i.alphaMode.progress=1,i.alphaMode.startTime=e,i.alphaMode.endTime=e+r,i.alphaMode.scoreMultiplier=Po,i.alphaMode.consecutiveActivations=(i.alphaMode.consecutiveActivations||0)+1,i.alphaMode.scoreMultiplierStack=[],t.push({type:xt.AlphaModeActivated,payload:{duration:r}})}function cE(n,e,t){const i=n.player;if(i.alphaMode.active){if(e>=i.alphaMode.endTime){i.alphaMode.active=!1,i.alphaMode.scoreMultiplier=1,i.alphaMode.scoreMultiplierStack=[],t.push({type:xt.AlphaModeEnded});return}if(i.alphaMode.scoreMultiplierStack=i.alphaMode.scoreMultiplierStack.filter(r=>r.endTime>e),i.alphaMode.scoreMultiplierStack.length>0){let r=1;i.alphaMode.scoreMultiplierStack.forEach(s=>{r*=s.value}),i.alphaMode.scoreMultiplier=Math.min(r,Xd)}else i.alphaMode.scoreMultiplier=1}}function lE(n,e){n.player.alphaMode.active&&n.player.alphaMode.scoreMultiplierStack.push({value:Po,endTime:e+$d})}function uE(n,e,t){const i=e.player;switch(i.activePowerUps||(i.activePowerUps=[]),n){case"speed":return i.speed=Bn/Gd,i.activePowerUps.push({type:n,endTime:t+za}),{duration:za};case"ghost":return i.ghostModeActive=!0,i.activePowerUps.push({type:n,endTime:t+Ga}),{duration:Ga};case"score_x2":return i.scoreMultiplier=Wd,i.activePowerUps.push({type:n,endTime:t+Ha}),{duration:Ha};case"shrink":const r=i.segments.length,s=Math.min(Vd,r-mc);return s>0&&i.segments.splice(i.segments.length-s,s),{duration:0};default:return{duration:0}}}function dE(n,e){const t=n.player;!t.activePowerUps||t.activePowerUps.length===0||(t.activePowerUps=t.activePowerUps.filter(i=>{if(i.endTime>e)return!0;switch(i.type){case"speed":t.speed=Bn;break;case"ghost":t.ghostModeActive=!1;break;case"score_x2":t.scoreMultiplier=1;break}return!1}))}function ju(n,e){return e.map(t=>({tick:n.tick,eventId:n.eventIdCounter++,version:To,event:t}))}function fE(n,e){var a,o;n.time+=e,n.tick+=1;const t=DM(n,e);if(t.events.some(c=>c.type===xt.PlayerMoved)){const c=n.player.segments[0];if(c){const l=nE(n,{x:c.x,z:c.z});if(l){const f=(a=n.player.alphaMode)==null?void 0:a.active,p=n.player.ghostModeActive;if(l.isTail||f)iE(n,l.enemyId)&&(l.isTail&&!f&&Yu(n,qd,t.events),t.events.push({type:xt.EnemyKilled,payload:{enemyId:l.enemyId,viaTail:l.isTail}}));else if(!p)return t.events.push({type:xt.PlayerDead,payload:{reason:"ENEMY_COLLISION"}}),{events:ju(n,t.events)}}const u=ff(n,{x:c.x,z:c.z});if(u){n.food.positions.splice(u.index,1);const f=(o=n.player.alphaMode)!=null&&o.active?n.player.scoreMultiplier:1,p=Math.round(u.scoreValue*f);if(n.score.current+=p,t.events.push({type:xt.FoodEaten,payload:{type:u.type,score:p,effects:u.effects}}),t.events.push({type:xt.ScoreChanged,payload:{score:n.score.current}}),u.grow){const M=n.player.segments[n.player.segments.length-1];M&&n.player.segments.push({...M})}if(u.effects.speedBoostDuration>0&&(n.player.speedBoostUntil=n.time+u.effects.speedBoostDuration),u.effects.alphaModeExtension>0&&n.player.alphaMode.active&&(n.player.alphaMode.endTime+=u.effects.alphaModeExtension,u.effects.addScoreMultiplier&&lE(n,n.time)),u.effects.alphaPoints>0&&Yu(n,u.effects.alphaPoints,t.events),u.type!=="normal"){const M=uE(u.type,n,n.time);t.events.push({type:xt.PowerupApplied,payload:{type:u.type,duration:M.duration}})}const _=Rc(n);_&&t.events.push({type:xt.FoodSpawned,payload:{type:_.type,x:_.x,z:_.z}})}}}sE(n,n.time),oE(n,n.time,t.events),cE(n,n.time,t.events),dE(n,n.time);const r=ZM(n,e);return t.events.push(...r.events),aM(n,e),rE(n).forEach(c=>{Df(n,c),t.events.push({type:xt.EnemyRespawned,payload:{enemyId:c}})}),{events:ju(n,t.events)}}var Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hE(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Of={};ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Fr={},No={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.ServerError=n.CloseCode=void 0,function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(i,r){super(r),this.name="ServerError",this.code=i}}n.ServerError=e})(No);var Es={},Br={};Object.defineProperty(Br,"__esModule",{value:!0});Br.decode=Br.encode=void 0;function $r(n,e){if(this._offset=e,n instanceof ArrayBuffer)this._buffer=n,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(n))this._buffer=n.buffer,this._view=new DataView(this._buffer,n.byteOffset,n.byteLength);else throw new Error("Invalid argument")}function pE(n,e,t){for(var i="",r=0,s=e,a=e+t;s<a;s++){var o=n.getUint8(s);if(!(o&128)){i+=String.fromCharCode(o);continue}if((o&224)===192){i+=String.fromCharCode((o&31)<<6|n.getUint8(++s)&63);continue}if((o&240)===224){i+=String.fromCharCode((o&15)<<12|(n.getUint8(++s)&63)<<6|(n.getUint8(++s)&63)<<0);continue}if((o&248)===240){r=(o&7)<<18|(n.getUint8(++s)&63)<<12|(n.getUint8(++s)&63)<<6|(n.getUint8(++s)&63)<<0,r>=65536?(r-=65536,i+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):i+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+o.toString(16))}return i}$r.prototype._array=function(n){for(var e=new Array(n),t=0;t<n;t++)e[t]=this._parse();return e};$r.prototype._map=function(n){for(var e="",t={},i=0;i<n;i++)e=this._parse(),t[e]=this._parse();return t};$r.prototype._str=function(n){var e=pE(this._view,this._offset,n);return this._offset+=n,e};$r.prototype._bin=function(n){var e=this._buffer.slice(this._offset,this._offset+n);return this._offset+=n,e};$r.prototype._parse=function(){var n=this._view.getUint8(this._offset++),e,t=0,i=0,r=0,s=0;if(n<192)return n<128?n:n<144?this._map(n&15):n<160?this._array(n&15):this._str(n&31);if(n>223)return(255-n+1)*-1;switch(n){case 192:return null;case 194:return!1;case 195:return!0;case 196:return t=this._view.getUint8(this._offset),this._offset+=1,this._bin(t);case 197:return t=this._view.getUint16(this._offset),this._offset+=2,this._bin(t);case 198:return t=this._view.getUint32(this._offset),this._offset+=4,this._bin(t);case 199:if(t=this._view.getUint8(this._offset),i=this._view.getInt8(this._offset+1),this._offset+=2,i===-1){var a=this._view.getUint32(this._offset);return r=this._view.getInt32(this._offset+4),s=this._view.getUint32(this._offset+8),this._offset+=12,new Date((r*4294967296+s)*1e3+a/1e6)}return[i,this._bin(t)];case 200:return t=this._view.getUint16(this._offset),i=this._view.getInt8(this._offset+2),this._offset+=3,[i,this._bin(t)];case 201:return t=this._view.getUint32(this._offset),i=this._view.getInt8(this._offset+4),this._offset+=5,[i,this._bin(t)];case 202:return e=this._view.getFloat32(this._offset),this._offset+=4,e;case 203:return e=this._view.getFloat64(this._offset),this._offset+=8,e;case 204:return e=this._view.getUint8(this._offset),this._offset+=1,e;case 205:return e=this._view.getUint16(this._offset),this._offset+=2,e;case 206:return e=this._view.getUint32(this._offset),this._offset+=4,e;case 207:return r=this._view.getUint32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,r+s;case 208:return e=this._view.getInt8(this._offset),this._offset+=1,e;case 209:return e=this._view.getInt16(this._offset),this._offset+=2,e;case 210:return e=this._view.getInt32(this._offset),this._offset+=4,e;case 211:return r=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,r+s;case 212:if(i=this._view.getInt8(this._offset),this._offset+=1,i===0){this._offset+=1;return}return[i,this._bin(1)];case 213:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(2)];case 214:return i=this._view.getInt8(this._offset),this._offset+=1,i===-1?(e=this._view.getUint32(this._offset),this._offset+=4,new Date(e*1e3)):[i,this._bin(4)];case 215:if(i=this._view.getInt8(this._offset),this._offset+=1,i===0)return r=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,new Date(r+s);if(i===-1){r=this._view.getUint32(this._offset),s=this._view.getUint32(this._offset+4),this._offset+=8;var o=(r&3)*4294967296+s;return new Date(o*1e3+(r>>>2)/1e6)}return[i,this._bin(8)];case 216:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(16)];case 217:return t=this._view.getUint8(this._offset),this._offset+=1,this._str(t);case 218:return t=this._view.getUint16(this._offset),this._offset+=2,this._str(t);case 219:return t=this._view.getUint32(this._offset),this._offset+=4,this._str(t);case 220:return t=this._view.getUint16(this._offset),this._offset+=2,this._array(t);case 221:return t=this._view.getUint32(this._offset),this._offset+=4,this._array(t);case 222:return t=this._view.getUint16(this._offset),this._offset+=2,this._map(t);case 223:return t=this._view.getUint32(this._offset),this._offset+=4,this._map(t)}throw new Error("Could not parse")};function mE(n,e=0){var t=new $r(n,e),i=t._parse();if(t._offset!==n.byteLength)throw new Error(n.byteLength-t._offset+" trailing bytes");return i}Br.decode=mE;var gE=4294967296-1,_E=17179869184-1;function vE(n,e,t){for(var i=0,r=0,s=t.length;r<s;r++)i=t.charCodeAt(r),i<128?n.setUint8(e++,i):i<2048?(n.setUint8(e++,192|i>>6),n.setUint8(e++,128|i&63)):i<55296||i>=57344?(n.setUint8(e++,224|i>>12),n.setUint8(e++,128|i>>6&63),n.setUint8(e++,128|i&63)):(r++,i=65536+((i&1023)<<10|t.charCodeAt(r)&1023),n.setUint8(e++,240|i>>18),n.setUint8(e++,128|i>>12&63),n.setUint8(e++,128|i>>6&63),n.setUint8(e++,128|i&63))}function xE(n){for(var e=0,t=0,i=0,r=n.length;i<r;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function Er(n,e,t){var i=typeof t,r=0,s=0,a=0,o=0,c=0,l=0;if(i==="string"){if(c=xE(t),c<32)n.push(c|160),l=1;else if(c<256)n.push(217,c),l=2;else if(c<65536)n.push(218,c>>8,c),l=3;else if(c<4294967296)n.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return e.push({_str:t,_length:c,_offset:n.length}),l+c}if(i==="number")return Math.floor(t)!==t||!isFinite(t)?(n.push(203),e.push({_float:t,_length:8,_offset:n.length}),9):t>=0?t<128?(n.push(t),1):t<256?(n.push(204,t),2):t<65536?(n.push(205,t>>8,t),3):t<4294967296?(n.push(206,t>>24,t>>16,t>>8,t),5):(a=t/Math.pow(2,32)>>0,o=t>>>0,n.push(207,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9):t>=-32?(n.push(t),1):t>=-128?(n.push(208,t),2):t>=-32768?(n.push(209,t>>8,t),3):t>=-2147483648?(n.push(210,t>>24,t>>16,t>>8,t),5):(a=Math.floor(t/Math.pow(2,32)),o=t>>>0,n.push(211,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9);if(i==="object"){if(t===null)return n.push(192),1;if(Array.isArray(t)){if(c=t.length,c<16)n.push(c|144),l=1;else if(c<65536)n.push(220,c>>8,c),l=3;else if(c<4294967296)n.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(r=0;r<c;r++)l+=Er(n,e,t[r]);return l}if(t instanceof Date){var u=t.getTime(),f=Math.floor(u/1e3),p=(u-f*1e3)*1e6;return f>=0&&p>=0&&f<=_E?p===0&&f<=gE?(n.push(214,255,f>>24,f>>16,f>>8,f),6):(a=f/4294967296,o=f&4294967295,n.push(215,255,p>>22,p>>14,p>>6,a,o>>24,o>>16,o>>8,o),10):(a=Math.floor(f/4294967296),o=f>>>0,n.push(199,12,255,p>>24,p>>16,p>>8,p,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),15)}if(t instanceof ArrayBuffer){if(c=t.byteLength,c<256)n.push(196,c),l=2;else if(c<65536)n.push(197,c>>8,c),l=3;else if(c<4294967296)n.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return e.push({_bin:t,_length:c,_offset:n.length}),l+c}if(typeof t.toJSON=="function")return Er(n,e,t.toJSON());var _=[],M="",x=Object.keys(t);for(r=0,s=x.length;r<s;r++)M=x[r],t[M]!==void 0&&typeof t[M]!="function"&&_.push(M);if(c=_.length,c<16)n.push(c|128),l=1;else if(c<65536)n.push(222,c>>8,c),l=3;else if(c<4294967296)n.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(r=0;r<c;r++)M=_[r],l+=Er(n,e,M),l+=Er(n,e,t[M]);return l}if(i==="boolean")return n.push(t?195:194),1;if(i==="undefined")return n.push(192),1;if(typeof t.toJSON=="function")return Er(n,e,t.toJSON());throw new Error("Could not encode")}function ME(n){var e=[],t=[],i=Er(e,t,n),r=new ArrayBuffer(i),s=new DataView(r),a=0,o=0,c=-1;t.length>0&&(c=t[0]._offset);for(var l,u=0,f=0,p=0,_=e.length;p<_;p++)if(s.setUint8(o+p,e[p]),p+1===c){if(l=t[a],u=l._length,f=o+c,l._bin)for(var M=new Uint8Array(l._bin),x=0;x<u;x++)s.setUint8(f+x,M[x]);else l._str?vE(s,f,l._str):l._float!==void 0&&s.setFloat64(f,l._float);a++,o+=u,t[a]&&(c=t[a]._offset)}return r}Br.encode=ME;var Fo={},Bo={},EE=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},yE=Rt&&Rt.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Bo,"__esModule",{value:!0});Bo.WebSocketTransport=void 0;const SE=yE(EE),ba=globalThis.WebSocket||SE.default;class TE{constructor(e){this.events=e}send(e){e instanceof ArrayBuffer?this.ws.send(e):Array.isArray(e)&&this.ws.send(new Uint8Array(e).buffer)}connect(e,t){try{this.ws=new ba(e,{headers:t,protocols:this.protocols})}catch{this.ws=new ba(e,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(e,t){this.ws.close(e,t)}get isOpen(){return this.ws.readyState===ba.OPEN}}Bo.WebSocketTransport=TE;Object.defineProperty(Fo,"__esModule",{value:!0});Fo.Connection=void 0;const AE=Bo;class wE{constructor(){this.events={},this.transport=new AE.WebSocketTransport(this.events)}send(e){this.transport.send(e)}connect(e,t){this.transport.connect(e,t)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}}Fo.Connection=wE;var Bc={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.utf8Length=n.utf8Read=n.ErrorCode=n.Protocol=void 0,function(i){i[i.HANDSHAKE=9]="HANDSHAKE",i[i.JOIN_ROOM=10]="JOIN_ROOM",i[i.ERROR=11]="ERROR",i[i.LEAVE_ROOM=12]="LEAVE_ROOM",i[i.ROOM_DATA=13]="ROOM_DATA",i[i.ROOM_STATE=14]="ROOM_STATE",i[i.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",i[i.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",i[i.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(n.Protocol||(n.Protocol={})),function(i){i[i.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",i[i.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",i[i.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",i[i.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",i[i.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",i[i.AUTH_FAILED=4215]="AUTH_FAILED",i[i.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(n.ErrorCode||(n.ErrorCode={}));function e(i,r){const s=i[r++];for(var a="",o=0,c=r,l=r+s;c<l;c++){var u=i[c];if(!(u&128)){a+=String.fromCharCode(u);continue}if((u&224)===192){a+=String.fromCharCode((u&31)<<6|i[++c]&63);continue}if((u&240)===224){a+=String.fromCharCode((u&15)<<12|(i[++c]&63)<<6|(i[++c]&63)<<0);continue}if((u&248)===240){o=(u&7)<<18|(i[++c]&63)<<12|(i[++c]&63)<<6|(i[++c]&63)<<0,o>=65536?(o-=65536,a+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):a+=String.fromCharCode(o);continue}throw new Error("Invalid byte "+u.toString(16))}return a}n.utf8Read=e;function t(i=""){let r=0,s=0;for(let a=0,o=i.length;a<o;a++)r=i.charCodeAt(a),r<128?s+=1:r<2048?s+=2:r<55296||r>=57344?s+=3:(a++,s+=4);return s+1}n.utf8Length=t})(Bc);var Qi={};Object.defineProperty(Qi,"__esModule",{value:!0});Qi.getSerializer=Qi.registerSerializer=void 0;const Uf={};function bE(n,e){Uf[n]=e}Qi.registerSerializer=bE;function RE(n){const e=Uf[n];if(!e)throw new Error("missing serializer: "+n);return e}Qi.getSerializer=RE;var ys={};Object.defineProperty(ys,"__esModule",{value:!0});ys.createNanoEvents=void 0;const CE=()=>({emit(n,...e){let t=this.events[n]||[];for(let i=0,r=t.length;i<r;i++)t[i](...e)},events:{},on(n,e){var t;return!((t=this.events[n])===null||t===void 0)&&t.push(e)||(this.events[n]=[e]),()=>{var i;this.events[n]=(i=this.events[n])===null||i===void 0?void 0:i.filter(r=>e!==r)}}});ys.createNanoEvents=CE;var kr={};Object.defineProperty(kr,"__esModule",{value:!0});kr.createSignal=kr.EventEmitter=void 0;class Nf{constructor(){this.handlers=[]}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){this.handlers.forEach(t=>t.apply(this,e))}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){const t=this.handlers.indexOf(e);this.handlers[t]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}kr.EventEmitter=Nf;function PE(){const n=new Nf;function e(t){return n.register(t,this===null)}return e.once=t=>{const i=function(...r){t.apply(this,r),n.remove(i)};n.register(i)},e.remove=t=>n.remove(t),e.invoke=(...t)=>n.invoke(...t),e.invokeAsync=(...t)=>n.invokeAsync(...t),e.clear=()=>n.clear(),e}kr.createSignal=PE;var tc={exports:{}};(function(n,e){(function(t,i){i(e)})(Rt,function(t){var i=function(m,d){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,E){g.__proto__=E}||function(g,E){for(var N in E)Object.prototype.hasOwnProperty.call(E,N)&&(g[N]=E[N])},i(m,d)};function r(m,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");i(m,d);function g(){this.constructor=m}m.prototype=d===null?Object.create(d):(g.prototype=d.prototype,new g)}function s(m,d,g,E){var N=arguments.length,Z=N<3?d:E,Le;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Z=Reflect.decorate(m,d,g,E);else for(var Ae=m.length-1;Ae>=0;Ae--)(Le=m[Ae])&&(Z=(N<3?Le(Z):N>3?Le(d,g,Z):Le(d,g))||Z);return N>3&&Z&&Object.defineProperty(d,g,Z),Z}function a(m,d,g){if(arguments.length===2)for(var E=0,N=d.length,Z;E<N;E++)(Z||!(E in d))&&(Z||(Z=Array.prototype.slice.call(d,0,E)),Z[E]=d[E]);return m.concat(Z||Array.prototype.slice.call(d))}typeof SuppressedError=="function"&&SuppressedError;var o=255,c=213;t.OPERATION=void 0,function(m){m[m.ADD=128]="ADD",m[m.REPLACE=0]="REPLACE",m[m.DELETE=64]="DELETE",m[m.DELETE_AND_ADD=192]="DELETE_AND_ADD",m[m.TOUCH=1]="TOUCH",m[m.CLEAR=10]="CLEAR"}(t.OPERATION||(t.OPERATION={}));var l=function(){function m(d,g,E){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=d,this.setParent(g,E)}return m.prototype.setParent=function(d,g,E){var N=this;if(this.indexes||(this.indexes=this.ref instanceof ut?this.ref._definition.indexes:{}),this.parent=d,this.parentIndex=E,!!g)if(this.root=g,this.ref instanceof ut){var Z=this.ref._definition;for(var Le in Z.schema){var Ae=this.ref[Le];if(Ae&&Ae.$changes){var nt=Z.indexes[Le];Ae.$changes.setParent(this.ref,g,nt)}}}else typeof this.ref=="object"&&this.ref.forEach(function(y,I){if(y instanceof ut){var k=y.$changes,O=N.ref.$changes.indexes[I];k.setParent(N.ref,N.root,O)}})},m.prototype.operation=function(d){this.changes.set(--this.currentCustomOperation,d)},m.prototype.change=function(d,g){g===void 0&&(g=t.OPERATION.ADD);var E=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(E,d);var N=this.changes.get(E);(!N||N.op===t.OPERATION.DELETE||N.op===t.OPERATION.TOUCH)&&this.changes.set(E,{op:N&&N.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:g,index:E}),this.allChanges.add(E),this.changed=!0,this.touchParents()},m.prototype.touch=function(d){var g=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(g,d),this.changes.has(g)||this.changes.set(g,{op:t.OPERATION.TOUCH,index:g}),this.allChanges.add(g),this.touchParents()},m.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},m.prototype.getType=function(d){if(this.ref._definition){var g=this.ref._definition;return g.schema[g.fieldsByIndex[d]]}else{var g=this.parent._definition,E=g.schema[g.fieldsByIndex[this.parentIndex]];return Object.values(E)[0]}},m.prototype.getChildrenFilter=function(){var d=this.parent._definition.childFilters;return d&&d[this.parentIndex]},m.prototype.getValue=function(d){return this.ref.getByIndex(d)},m.prototype.delete=function(d){var g=typeof d=="number"?d:this.indexes[d];if(g===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(d," (").concat(g,")"));return}var E=this.getValue(g);this.changes.set(g,{op:t.OPERATION.DELETE,index:g}),this.allChanges.delete(g),delete this.caches[g],E&&E.$changes&&(E.$changes.parent=void 0),this.changed=!0,this.touchParents()},m.prototype.discard=function(d,g){var E=this;d===void 0&&(d=!1),g===void 0&&(g=!1),this.ref instanceof ut||this.changes.forEach(function(N){if(N.op===t.OPERATION.DELETE){var Z=E.ref.getIndex(N.index);delete E.indexes[Z]}}),this.changes.clear(),this.changed=d,g&&this.allChanges.clear(),this.currentCustomOperation=0},m.prototype.discardAll=function(){var d=this;this.changes.forEach(function(g){var E=d.getValue(g.index);E&&E.$changes&&E.$changes.discardAll()}),this.discard()},m.prototype.cache=function(d,g){this.caches[d]=g},m.prototype.clone=function(){return new m(this.ref,this.parent,this.root)},m.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},m.prototype.assertValidIndex=function(d,g){if(d===void 0)throw new Error('ChangeTree: missing index for field "'.concat(g,'"'))},m}();function u(m,d,g,E){return m[d]||(m[d]=[]),m[d].push(g),E==null||E.forEach(function(N,Z){return g(N,Z)}),function(){return p(m[d],m[d].indexOf(g))}}function f(m){var d=this,g=typeof this.$changes.getType()!="string";this.$items.forEach(function(E,N){m.push({refId:d.$changes.refId,op:t.OPERATION.DELETE,field:N,value:void 0,previousValue:E}),g&&d.$changes.root.removeRef(E.$changes.refId)})}function p(m,d){if(d===-1||d>=m.length)return!1;for(var g=m.length-1,E=d;E<g;E++)m[E]=m[E+1];return m.length=g,!0}var _=function(m,d){var g=m.toString(),E=d.toString();return g<E?-1:g>E?1:0};function M(m){return m.$proxy=!0,m=new Proxy(m,{get:function(d,g){return typeof g!="symbol"&&!isNaN(g)?d.at(g):d[g]},set:function(d,g,E){if(typeof g!="symbol"&&!isNaN(g)){var N=Array.from(d.$items.keys()),Z=parseInt(N[g]||g);E==null?d.deleteAt(Z):d.setAt(Z,E)}else d[g]=E;return!0},deleteProperty:function(d,g){return typeof g=="number"?d.deleteAt(g):delete d[g],!0},has:function(d,g){return typeof g!="symbol"&&!isNaN(Number(g))?d.$items.has(Number(g)):Reflect.has(d,g)}}),m}var x=function(){function m(){for(var d=[],g=0;g<arguments.length;g++)d[g]=arguments[g];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,d)}return m.prototype.onAdd=function(d,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,d,g?this.$items:void 0)},m.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},m.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},m.is=function(d){return Array.isArray(d)||d.array!==void 0},Object.defineProperty(m.prototype,"length",{get:function(){return this.$items.size},set:function(d){d===0?this.clear():this.splice(d,this.length-d)},enumerable:!1,configurable:!0}),m.prototype.push=function(){for(var d=this,g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];var N;return g.forEach(function(Z){N=d.$refId++,d.setAt(N,Z)}),N},m.prototype.pop=function(){var d=Array.from(this.$indexes.values()).pop();if(d!==void 0){this.$changes.delete(d),this.$indexes.delete(d);var g=this.$items.get(d);return this.$items.delete(d),g}},m.prototype.at=function(d){if(d=Math.trunc(d)||0,d<0&&(d+=this.length),!(d<0||d>=this.length)){var g=Array.from(this.$items.keys())[d];return this.$items.get(g)}},m.prototype.setAt=function(d,g){var E,N;if(g==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(d)!==g){g.$changes!==void 0&&g.$changes.setParent(this,this.$changes.root,d);var Z=(N=(E=this.$changes.indexes[d])===null||E===void 0?void 0:E.op)!==null&&N!==void 0?N:t.OPERATION.ADD;this.$changes.indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,g),this.$changes.change(d,Z)}},m.prototype.deleteAt=function(d){var g=Array.from(this.$items.keys())[d];return g===void 0?!1:this.$deleteAt(g)},m.prototype.$deleteAt=function(d){return this.$changes.delete(d),this.$indexes.delete(d),this.$items.delete(d)},m.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.concat=function(){for(var d,g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];return new(m.bind.apply(m,a([void 0],(d=Array.from(this.$items.values())).concat.apply(d,g),!1)))},m.prototype.join=function(d){return Array.from(this.$items.values()).join(d)},m.prototype.reverse=function(){var d=this,g=Array.from(this.$items.keys()),E=Array.from(this.$items.values()).reverse();return E.forEach(function(N,Z){d.setAt(g[Z],N)}),this},m.prototype.shift=function(){var d=Array.from(this.$items.keys()),g=d.shift();if(g!==void 0){var E=this.$items.get(g);return this.$deleteAt(g),E}},m.prototype.slice=function(d,g){var E=new m;return E.push.apply(E,Array.from(this.$items.values()).slice(d,g)),E},m.prototype.sort=function(d){var g=this;d===void 0&&(d=_);var E=Array.from(this.$items.keys()),N=Array.from(this.$items.values()).sort(d);return N.forEach(function(Z,Le){g.setAt(E[Le],Z)}),this},m.prototype.splice=function(d,g){g===void 0&&(g=this.length-d);for(var E=[],N=2;N<arguments.length;N++)E[N-2]=arguments[N];for(var Z=Array.from(this.$items.keys()),Le=[],Ae=d;Ae<d+g;Ae++)Le.push(this.$items.get(Z[Ae])),this.$deleteAt(Z[Ae]);for(var Ae=0;Ae<E.length;Ae++)this.setAt(d+Ae,E[Ae]);return Le},m.prototype.unshift=function(){for(var d=this,g=[],E=0;E<arguments.length;E++)g[E]=arguments[E];var N=this.length,Z=g.length,Le=Array.from(this.$items.values());return g.forEach(function(Ae,nt){d.setAt(nt,Ae)}),Le.forEach(function(Ae,nt){d.setAt(Z+nt,Ae)}),N+Z},m.prototype.indexOf=function(d,g){return Array.from(this.$items.values()).indexOf(d,g)},m.prototype.lastIndexOf=function(d,g){return g===void 0&&(g=this.length-1),Array.from(this.$items.values()).lastIndexOf(d,g)},m.prototype.every=function(d,g){return Array.from(this.$items.values()).every(d,g)},m.prototype.some=function(d,g){return Array.from(this.$items.values()).some(d,g)},m.prototype.forEach=function(d,g){Array.from(this.$items.values()).forEach(d,g)},m.prototype.map=function(d,g){return Array.from(this.$items.values()).map(d,g)},m.prototype.filter=function(d,g){return Array.from(this.$items.values()).filter(d,g)},m.prototype.reduce=function(d,g){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},m.prototype.reduceRight=function(d,g){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},m.prototype.find=function(d,g){return Array.from(this.$items.values()).find(d,g)},m.prototype.findIndex=function(d,g){return Array.from(this.$items.values()).findIndex(d,g)},m.prototype.fill=function(d,g,E){throw new Error("ArraySchema#fill() not implemented")},m.prototype.copyWithin=function(d,g,E){throw new Error("ArraySchema#copyWithin() not implemented")},m.prototype.toString=function(){return this.$items.toString()},m.prototype.toLocaleString=function(){return this.$items.toLocaleString()},m.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(m,Symbol.species,{get:function(){return m},enumerable:!1,configurable:!0}),m.prototype.entries=function(){return this.$items.entries()},m.prototype.keys=function(){return this.$items.keys()},m.prototype.values=function(){return this.$items.values()},m.prototype.includes=function(d,g){return Array.from(this.$items.values()).includes(d,g)},m.prototype.flatMap=function(d,g){throw new Error("ArraySchema#flatMap() is not supported.")},m.prototype.flat=function(d){throw new Error("ArraySchema#flat() is not supported.")},m.prototype.findLast=function(){var d=Array.from(this.$items.values());return d.findLast.apply(d,arguments)},m.prototype.findLastIndex=function(){var d=Array.from(this.$items.values());return d.findLastIndex.apply(d,arguments)},m.prototype.with=function(d,g){var E=Array.from(this.$items.values());return E[d]=g,new(m.bind.apply(m,a([void 0],E,!1)))},m.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},m.prototype.toSorted=function(d){return Array.from(this.$items.values()).sort(d)},m.prototype.toSpliced=function(d,g){var E=Array.from(this.$items.values());return E.toSpliced.apply(E,arguments)},m.prototype.setIndex=function(d,g){this.$indexes.set(d,g)},m.prototype.getIndex=function(d){return this.$indexes.get(d)},m.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},m.prototype.deleteByIndex=function(d){var g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){return this.toArray().map(function(d){return typeof d.toJSON=="function"?d.toJSON():d})},m.prototype.clone=function(d){var g;return d?g=new(m.bind.apply(m,a([void 0],Array.from(this.$items.values()),!1))):g=new(m.bind.apply(m,a([void 0],this.map(function(E){return E.$changes?E.clone():E}),!1))),g},m}();function v(m){return m.$proxy=!0,m=new Proxy(m,{get:function(d,g){return typeof g!="symbol"&&typeof d[g]>"u"?d.get(g):d[g]},set:function(d,g,E){return typeof g!="symbol"&&g.indexOf("$")===-1&&g!=="onAdd"&&g!=="onRemove"&&g!=="onChange"?d.set(g,E):d[g]=E,!0},deleteProperty:function(d,g){return d.delete(g),!0}}),m}var h=function(){function m(d){var g=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d)if(d instanceof Map||d instanceof m)d.forEach(function(N,Z){return g.set(Z,N)});else for(var E in d)this.set(E,d[E])}return m.prototype.onAdd=function(d,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,d,g?this.$items:void 0)},m.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},m.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},m.is=function(d){return d.map!==void 0},m.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(m.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(m,Symbol.species,{get:function(){return m},enumerable:!1,configurable:!0}),m.prototype.set=function(d,g){if(g==null)throw new Error("MapSchema#set('".concat(d,"', ").concat(g,"): trying to set ").concat(g," value on '").concat(d,"'."));d=d.toString();var E=typeof this.$changes.indexes[d]<"u",N=E?this.$changes.indexes[d]:this.$refId++,Z=E?t.OPERATION.REPLACE:t.OPERATION.ADD,Le=g.$changes!==void 0;if(Le&&g.$changes.setParent(this,this.$changes.root,N),!E)this.$changes.indexes[d]=N,this.$indexes.set(N,d);else{if(!Le&&this.$items.get(d)===g)return;Le&&this.$items.get(d)!==g&&(Z=t.OPERATION.ADD)}return this.$items.set(d,g),this.$changes.change(d,Z),this},m.prototype.get=function(d){return this.$items.get(d)},m.prototype.delete=function(d){return this.$changes.delete(d.toString()),this.$items.delete(d)},m.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(d){return this.$items.has(d)},m.prototype.forEach=function(d){this.$items.forEach(d)},m.prototype.entries=function(){return this.$items.entries()},m.prototype.keys=function(){return this.$items.keys()},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(d,g){this.$indexes.set(d,g)},m.prototype.getIndex=function(d){return this.$indexes.get(d)},m.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},m.prototype.deleteByIndex=function(d){var g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)},m.prototype.toJSON=function(){var d={};return this.forEach(function(g,E){d[E]=typeof g.toJSON=="function"?g.toJSON():g}),d},m.prototype.clone=function(d){var g;return d?g=Object.assign(new m,this):(g=new m,this.forEach(function(E,N){E.$changes?g.set(N,E.clone()):g.set(N,E)})),g},m}(),R={};function A(m,d){R[m]=d}function P(m){return R[m]}var B=function(){function m(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return m.create=function(d){var g=new m;return g.schema=Object.assign({},d&&d.schema||{}),g.indexes=Object.assign({},d&&d.indexes||{}),g.fieldsByIndex=Object.assign({},d&&d.fieldsByIndex||{}),g.descriptors=Object.assign({},d&&d.descriptors||{}),g.deprecated=Object.assign({},d&&d.deprecated||{}),g},m.prototype.addField=function(d,g){var E=this.getNextFieldIndex();this.fieldsByIndex[E]=d,this.indexes[d]=E,this.schema[d]=Array.isArray(g)?{array:g[0]}:g},m.prototype.hasField=function(d){return this.indexes[d]!==void 0},m.prototype.addFilter=function(d,g){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[d]]=g,this.indexesWithFilters.push(this.indexes[d]),!0},m.prototype.addChildrenFilter=function(d,g){var E=this.indexes[d],N=this.schema[d];if(P(Object.keys(N)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[E]=g,!0;console.warn("@filterChildren: field '".concat(d,"' can't have children. Ignoring filter."))},m.prototype.getChildrenFilter=function(d){return this.childFilters&&this.childFilters[this.indexes[d]]},m.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},m}();function L(m){return m._context&&m._context.useFilters}var w=function(){function m(){this.types={},this.schemas=new Map,this.useFilters=!1}return m.prototype.has=function(d){return this.schemas.has(d)},m.prototype.get=function(d){return this.types[d]},m.prototype.add=function(d,g){g===void 0&&(g=this.schemas.size),d._definition=B.create(d._definition),d._typeid=g,this.types[g]=d,this.schemas.set(d,g)},m.create=function(d){return d===void 0&&(d={}),function(g){return d.context||(d.context=new m),T(g,d)}},m}(),J=new w;function T(m,d){return d===void 0&&(d={}),function(g,E){var N=d.context||J,Z=g.constructor;if(Z._context=N,!m)throw new Error("".concat(Z.name,': @type() reference provided for "').concat(E,`" is undefined. Make sure you don't have any circular dependencies.`));N.has(Z)||N.add(Z);var Le=Z._definition;if(Le.addField(E,m),Le.descriptors[E]){if(Le.deprecated[E])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(E,"' definition on '").concat(Z.name,`'.
Check @type() annotation`))}catch(O){var Ae=O.stack.split(`
`)[4].trim();throw new Error("".concat(O.message," ").concat(Ae))}}var nt=x.is(m),y=!nt&&h.is(m);if(typeof m!="string"&&!ut.is(m)){var I=Object.values(m)[0];typeof I!="string"&&!N.has(I)&&N.add(I)}if(d.manual){Le.descriptors[E]={enumerable:!0,configurable:!0,writable:!0};return}var k="_".concat(E);Le.descriptors[k]={enumerable:!1,configurable:!1,writable:!0},Le.descriptors[E]={get:function(){return this[k]},set:function(O){O!==this[k]&&(O!=null?(nt&&!(O instanceof x)&&(O=new(x.bind.apply(x,a([void 0],O,!1)))),y&&!(O instanceof h)&&(O=new h(O)),O.$proxy===void 0&&(y?O=v(O):nt&&(O=M(O))),this.$changes.change(E),O.$changes&&O.$changes.setParent(this,this.$changes.root,this._definition.indexes[E])):this[k]!==void 0&&this.$changes.delete(E),this[k]=O)},enumerable:!0,configurable:!0}}}function C(m){return function(d,g){var E=d.constructor,N=E._definition;N.addFilter(g,m)&&(E._context.useFilters=!0)}}function $(m){return function(d,g){var E=d.constructor,N=E._definition;N.addChildrenFilter(g,m)&&(E._context.useFilters=!0)}}function Y(m){return m===void 0&&(m=!0),function(d,g){var E=d.constructor,N=E._definition;N.deprecated[g]=!0,m&&(N.descriptors[g]={get:function(){throw new Error("".concat(g," is deprecated."))},set:function(Z){},enumerable:!1,configurable:!0})}}function ae(m,d,g){g===void 0&&(g={}),g.context||(g.context=m._context||g.context||J);for(var E in d)T(d[E],g)(m.prototype,E);return m}function U(m){for(var d=0,g=0,E=0,N=m.length;E<N;E++)d=m.charCodeAt(E),d<128?g+=1:d<2048?g+=2:d<55296||d>=57344?g+=3:(E++,g+=4);return g}function W(m,d,g){for(var E=0,N=0,Z=g.length;N<Z;N++)E=g.charCodeAt(N),E<128?m[d++]=E:E<2048?(m[d++]=192|E>>6,m[d++]=128|E&63):E<55296||E>=57344?(m[d++]=224|E>>12,m[d++]=128|E>>6&63,m[d++]=128|E&63):(N++,E=65536+((E&1023)<<10|g.charCodeAt(N)&1023),m[d++]=240|E>>18,m[d++]=128|E>>12&63,m[d++]=128|E>>6&63,m[d++]=128|E&63)}function K(m,d){m.push(d&255)}function Q(m,d){m.push(d&255)}function te(m,d){m.push(d&255),m.push(d>>8&255)}function ne(m,d){m.push(d&255),m.push(d>>8&255)}function ie(m,d){m.push(d&255),m.push(d>>8&255),m.push(d>>16&255),m.push(d>>24&255)}function de(m,d){var g=d>>24,E=d>>16,N=d>>8,Z=d;m.push(Z&255),m.push(N&255),m.push(E&255),m.push(g&255)}function he(m,d){var g=Math.floor(d/Math.pow(2,32)),E=d>>>0;de(m,E),de(m,g)}function j(m,d){var g=d/Math.pow(2,32)>>0,E=d>>>0;de(m,E),de(m,g)}function se(m,d){qe(m,d)}function Me(m,d){Be(m,d)}var we=new Int32Array(2),Ie=new Float32Array(we.buffer),Xe=new Float64Array(we.buffer);function qe(m,d){Ie[0]=d,ie(m,we[0])}function Be(m,d){Xe[0]=d,ie(m,we[0]),ie(m,we[1])}function it(m,d){return Q(m,d?1:0)}function V(m,d){d||(d="");var g=U(d),E=0;if(g<32)m.push(g|160),E=1;else if(g<256)m.push(217),Q(m,g),E=2;else if(g<65536)m.push(218),ne(m,g),E=3;else if(g<4294967296)m.push(219),de(m,g),E=5;else throw new Error("String too long");return W(m,m.length,d),E+g}function ft(m,d){if(isNaN(d))return ft(m,0);if(isFinite(d)){if(d!==(d|0))return m.push(203),Be(m,d),9}else return ft(m,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return d>=0?d<128?(Q(m,d),1):d<256?(m.push(204),Q(m,d),2):d<65536?(m.push(205),ne(m,d),3):d<4294967296?(m.push(206),de(m,d),5):(m.push(207),j(m,d),9):d>=-32?(m.push(224|d+32),1):d>=-128?(m.push(208),K(m,d),2):d>=-32768?(m.push(209),te(m,d),3):d>=-2147483648?(m.push(210),ie(m,d),5):(m.push(211),he(m,d),9)}var Ue=Object.freeze({__proto__:null,boolean:it,float32:se,float64:Me,int16:te,int32:ie,int64:he,int8:K,number:ft,string:V,uint16:ne,uint32:de,uint64:j,uint8:Q,utf8Write:W,writeFloat32:qe,writeFloat64:Be});function $e(m,d,g){for(var E="",N=0,Z=d,Le=d+g;Z<Le;Z++){var Ae=m[Z];if(!(Ae&128)){E+=String.fromCharCode(Ae);continue}if((Ae&224)===192){E+=String.fromCharCode((Ae&31)<<6|m[++Z]&63);continue}if((Ae&240)===224){E+=String.fromCharCode((Ae&15)<<12|(m[++Z]&63)<<6|(m[++Z]&63)<<0);continue}if((Ae&248)===240){N=(Ae&7)<<18|(m[++Z]&63)<<12|(m[++Z]&63)<<6|(m[++Z]&63)<<0,N>=65536?(N-=65536,E+=String.fromCharCode((N>>>10)+55296,(N&1023)+56320)):E+=String.fromCharCode(N);continue}console.error("Invalid byte "+Ae.toString(16))}return E}function be(m,d){return pt(m,d)<<24>>24}function pt(m,d){return m[d.offset++]}function je(m,d){return b(m,d)<<16>>16}function b(m,d){return m[d.offset++]|m[d.offset++]<<8}function S(m,d){return m[d.offset++]|m[d.offset++]<<8|m[d.offset++]<<16|m[d.offset++]<<24}function G(m,d){return S(m,d)>>>0}function le(m,d){return Ye(m,d)}function ce(m,d){return re(m,d)}function ue(m,d){var g=G(m,d),E=S(m,d)*Math.pow(2,32);return E+g}function Ce(m,d){var g=G(m,d),E=G(m,d)*Math.pow(2,32);return E+g}var _e=new Int32Array(2),Se=new Float32Array(_e.buffer),ke=new Float64Array(_e.buffer);function Ye(m,d){return _e[0]=S(m,d),Se[0]}function re(m,d){return _e[0]=S(m,d),_e[1]=S(m,d),ke[0]}function ht(m,d){return pt(m,d)>0}function Qe(m,d){var g=m[d.offset++],E;g<192?E=g&31:g===217?E=pt(m,d):g===218?E=b(m,d):g===219&&(E=G(m,d));var N=$e(m,d.offset,E);return d.offset+=E,N}function We(m,d){var g=m[d.offset];return g<192&&g>160||g===217||g===218||g===219}function Re(m,d){var g=m[d.offset++];if(g<128)return g;if(g===202)return Ye(m,d);if(g===203)return re(m,d);if(g===204)return pt(m,d);if(g===205)return b(m,d);if(g===206)return G(m,d);if(g===207)return Ce(m,d);if(g===208)return be(m,d);if(g===209)return je(m,d);if(g===210)return S(m,d);if(g===211)return ue(m,d);if(g>223)return(255-g+1)*-1}function Te(m,d){var g=m[d.offset];return g<128||g>=202&&g<=211}function Ke(m,d){return m[d.offset]<160}function ot(m,d){return m[d.offset-1]===o&&(m[d.offset]<128||m[d.offset]>=202&&m[d.offset]<=211)}var St=Object.freeze({__proto__:null,arrayCheck:Ke,boolean:ht,float32:le,float64:ce,int16:je,int32:S,int64:ue,int8:be,number:Re,numberCheck:Te,readFloat32:Ye,readFloat64:re,string:Qe,stringCheck:We,switchStructureCheck:ot,uint16:b,uint32:G,uint64:Ce,uint8:pt}),Ze=function(){function m(d){var g=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(E){return g.add(E)})}return m.prototype.onAdd=function(d,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,d,g?this.$items:void 0)},m.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,d)},m.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,d)},m.is=function(d){return d.collection!==void 0},m.prototype.add=function(d){var g=this.$refId++,E=d.$changes!==void 0;return E&&d.$changes.setParent(this,this.$changes.root,g),this.$changes.indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this.$changes.change(g),g},m.prototype.at=function(d){var g=Array.from(this.$items.keys())[d];return this.$items.get(g)},m.prototype.entries=function(){return this.$items.entries()},m.prototype.delete=function(d){for(var g=this.$items.entries(),E,N;(N=g.next())&&!N.done;)if(d===N.value[1]){E=N.value[0];break}return E===void 0?!1:(this.$changes.delete(E),this.$indexes.delete(E),this.$items.delete(E))},m.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(d){return Array.from(this.$items.values()).some(function(g){return g===d})},m.prototype.forEach=function(d){var g=this;this.$items.forEach(function(E,N,Z){return d(E,N,g)})},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(d,g){this.$indexes.set(d,g)},m.prototype.getIndex=function(d){return this.$indexes.get(d)},m.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},m.prototype.deleteByIndex=function(d){var g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){var d=[];return this.forEach(function(g,E){d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d},m.prototype.clone=function(d){var g;return d?g=Object.assign(new m,this):(g=new m,this.forEach(function(E){E.$changes?g.add(E.clone()):g.add(E)})),g},m}(),fe=function(){function m(d){var g=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(E){return g.add(E)})}return m.prototype.onAdd=function(d,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,d,g?this.$items:void 0)},m.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,d)},m.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,d)},m.is=function(d){return d.set!==void 0},m.prototype.add=function(d){var g,E;if(this.has(d))return!1;var N=this.$refId++;d.$changes!==void 0&&d.$changes.setParent(this,this.$changes.root,N);var Z=(E=(g=this.$changes.indexes[N])===null||g===void 0?void 0:g.op)!==null&&E!==void 0?E:t.OPERATION.ADD;return this.$changes.indexes[N]=N,this.$indexes.set(N,N),this.$items.set(N,d),this.$changes.change(N,Z),N},m.prototype.entries=function(){return this.$items.entries()},m.prototype.delete=function(d){for(var g=this.$items.entries(),E,N;(N=g.next())&&!N.done;)if(d===N.value[1]){E=N.value[0];break}return E===void 0?!1:(this.$changes.delete(E),this.$indexes.delete(E),this.$items.delete(E))},m.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(d){for(var g=this.$items.values(),E=!1,N;(N=g.next())&&!N.done;)if(d===N.value){E=!0;break}return E},m.prototype.forEach=function(d){var g=this;this.$items.forEach(function(E,N,Z){return d(E,N,g)})},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(d,g){this.$indexes.set(d,g)},m.prototype.getIndex=function(d){return this.$indexes.get(d)},m.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},m.prototype.deleteByIndex=function(d){var g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){var d=[];return this.forEach(function(g,E){d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d},m.prototype.clone=function(d){var g;return d?g=Object.assign(new m,this):(g=new m,this.forEach(function(E){E.$changes?g.add(E.clone()):g.add(E)})),g},m}(),D=function(){function m(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return m.prototype.addRefId=function(d){this.refIds.has(d)||(this.refIds.add(d),this.containerIndexes.set(d,new Set))},m.get=function(d){return d.$filterState===void 0&&(d.$filterState=new m),d.$filterState},m}(),xe=function(){function m(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return m.prototype.getNextUniqueId=function(){return this.nextUniqueId++},m.prototype.addRef=function(d,g,E){E===void 0&&(E=!0),this.refs.set(d,g),E&&(this.refCounts[d]=(this.refCounts[d]||0)+1)},m.prototype.removeRef=function(d){var g=this.refCounts[d];if(g===void 0){console.warn("trying to remove reference ".concat(d," that doesn't exist"));return}if(g===0){console.warn("trying to remove reference ".concat(d," with 0 refCount"));return}this.refCounts[d]=g-1,this.deletedRefs.add(d)},m.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},m.prototype.garbageCollectDeletedRefs=function(){var d=this;this.deletedRefs.forEach(function(g){if(!(d.refCounts[g]>0)){var E=d.refs.get(g);if(E instanceof ut)for(var N in E._definition.schema)typeof E._definition.schema[N]!="string"&&E[N]&&E[N].$changes&&d.removeRef(E[N].$changes.refId);else{var Z=E.$changes.parent._definition,Le=Z.schema[Z.fieldsByIndex[E.$changes.parentIndex]];typeof Object.values(Le)[0]=="function"&&Array.from(E.values()).forEach(function(Ae){return d.removeRef(Ae.$changes.refId)})}d.refs.delete(g),delete d.refCounts[g]}}),this.deletedRefs.clear()},m}(),ve=function(m){r(d,m);function d(){return m!==null&&m.apply(this,arguments)||this}return d}(Error);function ze(m,d,g,E){var N,Z=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":N="number",isNaN(m)&&console.log('trying to encode "NaN" in '.concat(g.constructor.name,"#").concat(E));break;case"string":N="string",Z=!0;break;case"boolean":return}if(typeof m!==N&&(!Z||Z&&m!==null)){var Le="'".concat(JSON.stringify(m),"'").concat(m&&m.constructor&&" (".concat(m.constructor.name,")")||"");throw new ve("a '".concat(N,"' was expected, but ").concat(Le," was provided in ").concat(g.constructor.name,"#").concat(E))}}function Fe(m,d,g,E){if(!(m instanceof d))throw new ve("a '".concat(d.name,"' was expected, but '").concat(m.constructor.name,"' was provided in ").concat(g.constructor.name,"#").concat(E))}function gt(m,d,g,E,N){ze(g,m,E,N);var Z=Ue[m];if(Z)Z(d,g);else throw new ve("a '".concat(m,"' was expected, but ").concat(g," was provided in ").concat(E.constructor.name,"#").concat(N))}function _t(m,d,g){return St[m](d,g)}var ut=function(){function m(){for(var d=[],g=0;g<arguments.length;g++)d[g]=arguments[g];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new xe),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var E=this._definition.descriptors;E&&Object.defineProperties(this,E),d[0]&&this.assign(d[0])}return m.onError=function(d){console.error(d)},m.is=function(d){return d._definition&&d._definition.schema!==void 0},m.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},m.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},m.prototype.assign=function(d){return Object.assign(this,d),this},Object.defineProperty(m.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),m.prototype.setDirty=function(d,g){this.$changes.change(d,g)},m.prototype.listen=function(d,g,E){var N=this;return E===void 0&&(E=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[d]||(this.$callbacks[d]=[]),this.$callbacks[d].push(g),E&&this[d]!==void 0&&g(this[d],void 0),function(){return p(N.$callbacks[d],N.$callbacks[d].indexOf(g))}},m.prototype.decode=function(d,g,E){g===void 0&&(g={offset:0}),E===void 0&&(E=this);var N=[],Z=this.$changes.root,Le=d.length,Ae=0;for(Z.refs.set(Ae,this);g.offset<Le;){var nt=d[g.offset++];if(nt==o){Ae=Re(d,g);var y=Z.refs.get(Ae);if(!y)throw new Error('"refId" not found: '.concat(Ae));E=y;continue}var I=E.$changes,k=E._definition!==void 0,O=k?nt>>6<<6:nt;if(O===t.OPERATION.CLEAR){E.clear(N);continue}var F=k?nt%(O||255):Re(d,g),ee=k?E._definition.fieldsByIndex[F]:"",oe=I.getType(F),q=void 0,pe=void 0,Oe=void 0;if(k?pe=E["_".concat(ee)]:(pe=E.getByIndex(F),(O&t.OPERATION.ADD)===t.OPERATION.ADD?(Oe=E instanceof h?Qe(d,g):F,E.setIndex(F,Oe)):Oe=E.getIndex(F)),(O&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(O!==t.OPERATION.DELETE_AND_ADD&&E.deleteByIndex(F),pe&&pe.$changes&&Z.removeRef(pe.$changes.refId),q=null),ee===void 0){console.warn("@colyseus/schema: definition mismatch");for(var ye={offset:g.offset};g.offset<Le&&!(ot(d,g)&&(ye.offset=g.offset+1,Z.refs.has(Re(d,ye))));)g.offset++;continue}else if(O!==t.OPERATION.DELETE)if(m.is(oe)){var me=Re(d,g);if(q=Z.refs.get(me),O!==t.OPERATION.REPLACE){var De=this.getSchemaType(d,g,oe);q||(q=this.createTypeInstance(De),q.$changes.refId=me,pe&&(q.$callbacks=pe.$callbacks,pe.$changes.refId&&me!==pe.$changes.refId&&Z.removeRef(pe.$changes.refId))),Z.addRef(me,q,q!==pe)}}else if(typeof oe=="string")q=_t(oe,d,g);else{var Ct=P(Object.keys(oe)[0]),Et=Re(d,g),Lt=Z.refs.has(Et)?pe||Z.refs.get(Et):new Ct.constructor;if(q=Lt.clone(!0),q.$changes.refId=Et,pe&&(q.$callbacks=pe.$callbacks,pe.$changes.refId&&Et!==pe.$changes.refId)){Z.removeRef(pe.$changes.refId);for(var Je=pe.entries(),Pe=void 0;(Pe=Je.next())&&!Pe.done;){var fi=Pe.value,at=fi[0],wn=fi[1];N.push({refId:Et,op:t.OPERATION.DELETE,field:at,value:void 0,previousValue:wn})}}Z.addRef(Et,q,Lt!==pe)}if(q!=null){if(q.$changes&&q.$changes.setParent(I.ref,I.root,F),E instanceof m)E[ee]=q;else if(E instanceof h){var at=Oe;E.$items.set(at,q),E.$changes.allChanges.add(F)}else if(E instanceof x)E.setAt(F,q);else if(E instanceof Ze){var bn=E.add(q);E.setIndex(F,bn)}else if(E instanceof fe){var bn=E.add(q);bn!==!1&&E.setIndex(F,bn)}}pe!==q&&N.push({refId:Ae,op:O,field:ee,dynamicIndex:Oe,value:q,previousValue:pe})}return this._triggerChanges(N),Z.garbageCollectDeletedRefs(),N},m.prototype.encode=function(d,g,E){d===void 0&&(d=!1),g===void 0&&(g=[]),E===void 0&&(E=!1);for(var N=this.$changes,Z=new WeakSet,Le=[N],Ae=1,nt=0;nt<Ae;nt++){var y=Le[nt],I=y.ref,k=I instanceof m;y.ensureRefId(),Z.add(y),y!==N&&(y.changed||d)&&(Q(g,o),ft(g,y.refId));for(var O=d?Array.from(y.allChanges):Array.from(y.changes.values()),F=0,ee=O.length;F<ee;F++){var oe=d?{op:t.OPERATION.ADD,index:O[F]}:O[F],q=oe.index,pe=k?I._definition.fieldsByIndex&&I._definition.fieldsByIndex[q]:q,Oe=g.length;if(oe.op!==t.OPERATION.TOUCH)if(k)Q(g,q|oe.op);else{if(Q(g,oe.op),oe.op===t.OPERATION.CLEAR)continue;ft(g,q)}if(!k&&(oe.op&t.OPERATION.ADD)==t.OPERATION.ADD&&I instanceof h){var ye=y.ref.$indexes.get(q);V(g,ye)}if(oe.op!==t.OPERATION.DELETE){var me=y.getType(q),De=y.getValue(q);if(De&&De.$changes&&!Z.has(De.$changes)&&(Le.push(De.$changes),De.$changes.ensureRefId(),Ae++),oe.op!==t.OPERATION.TOUCH){if(m.is(me))Fe(De,me,I,pe),ft(g,De.$changes.refId),(oe.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(g,me,De.constructor);else if(typeof me=="string")gt(me,g,De,I,pe);else{var Ct=P(Object.keys(me)[0]);Fe(I["_".concat(pe)],Ct.constructor,I,pe),ft(g,De.$changes.refId)}E&&y.cache(q,g.slice(Oe))}}}!d&&!E&&y.discard()}return g},m.prototype.encodeAll=function(d){return this.encode(!0,[],d)},m.prototype.applyFilters=function(d,g){var E,N;g===void 0&&(g=!1);for(var Z=this,Le=new Set,Ae=D.get(d),nt=[this.$changes],y=1,I=[],k=function(F){var ee=nt[F];if(Le.has(ee.refId))return"continue";var oe=ee.ref,q=oe instanceof m;Q(I,o),ft(I,ee.refId);var pe=Ae.refIds.has(ee),Oe=g||!pe;Ae.addRefId(ee);var ye=Ae.containerIndexes.get(ee),me=Oe?Array.from(ee.allChanges):Array.from(ee.changes.values());if(!g&&q&&oe._definition.indexesWithFilters){var De=oe._definition.indexesWithFilters;De.forEach(function(kn){!ye.has(kn)&&ee.allChanges.has(kn)&&(Oe?me.push(kn):me.push({op:t.OPERATION.ADD,index:kn}))})}for(var Ct=0,Et=me.length;Ct<Et;Ct++){var Lt=Oe?{op:t.OPERATION.ADD,index:me[Ct]}:me[Ct];if(Lt.op===t.OPERATION.CLEAR){Q(I,Lt.op);continue}var Je=Lt.index;if(Lt.op===t.OPERATION.DELETE){q?Q(I,Lt.op|Je):(Q(I,Lt.op),ft(I,Je));continue}var Pe=ee.getValue(Je),fi=ee.getType(Je);if(q){var at=oe._definition.filters&&oe._definition.filters[Je];if(at&&!at.call(oe,d,Pe,Z)){Pe&&Pe.$changes&&Le.add(Pe.$changes.refId);continue}}else{var wn=ee.parent,at=ee.getChildrenFilter();if(at&&!at.call(wn,d,oe.$indexes.get(Je),Pe,Z)){Pe&&Pe.$changes&&Le.add(Pe.$changes.refId);continue}}if(Pe.$changes&&(nt.push(Pe.$changes),y++),Lt.op!==t.OPERATION.TOUCH)if(Lt.op===t.OPERATION.ADD||q)I.push.apply(I,(E=ee.caches[Je])!==null&&E!==void 0?E:[]),ye.add(Je);else if(ye.has(Je))I.push.apply(I,(N=ee.caches[Je])!==null&&N!==void 0?N:[]);else{if(ye.add(Je),Q(I,t.OPERATION.ADD),ft(I,Je),oe instanceof h){var bn=ee.ref.$indexes.get(Je);V(I,bn)}Pe.$changes?ft(I,Pe.$changes.refId):Ue[fi](I,Pe)}else if(Pe.$changes&&!q){if(Q(I,t.OPERATION.ADD),ft(I,Je),oe instanceof h){var bn=ee.ref.$indexes.get(Je);V(I,bn)}ft(I,Pe.$changes.refId)}}},O=0;O<y;O++)k(O);return I},m.prototype.clone=function(){var d,g=new this.constructor,E=this._definition.schema;for(var N in E)typeof this[N]=="object"&&typeof((d=this[N])===null||d===void 0?void 0:d.clone)=="function"?g[N]=this[N].clone():g[N]=this[N];return g},m.prototype.toJSON=function(){var d=this._definition.schema,g=this._definition.deprecated,E={};for(var N in d)!g[N]&&this[N]!==null&&typeof this[N]<"u"&&(E[N]=typeof this[N].toJSON=="function"?this[N].toJSON():this["_".concat(N)]);return E},m.prototype.discardAllChanges=function(){this.$changes.discardAll()},m.prototype.getByIndex=function(d){return this[this._definition.fieldsByIndex[d]]},m.prototype.deleteByIndex=function(d){this[this._definition.fieldsByIndex[d]]=void 0},m.prototype.tryEncodeTypeId=function(d,g,E){g._typeid!==E._typeid&&(Q(d,c),ft(d,E._typeid))},m.prototype.getSchemaType=function(d,g,E){var N;return d[g.offset]===c&&(g.offset++,N=this.constructor._context.get(Re(d,g))),N||E},m.prototype.createTypeInstance=function(d){var g=new d;return g.$changes.root=this.$changes.root,g},m.prototype._triggerChanges=function(d){for(var g,E,N,Z,Le,Ae,nt,y,I,k=new Set,O=this.$changes.root.refs,F=function(oe){var q=d[oe],pe=q.refId,Oe=O.get(pe),ye=Oe.$callbacks;if((q.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&q.previousValue instanceof m&&((E=(g=q.previousValue.$callbacks)===null||g===void 0?void 0:g[t.OPERATION.DELETE])===null||E===void 0||E.forEach(function(me){return me()})),!ye)return"continue";if(Oe instanceof m){if(!k.has(pe))try{(N=ye==null?void 0:ye[t.OPERATION.REPLACE])===null||N===void 0||N.forEach(function(me){return me()})}catch(me){m.onError(me)}try{ye.hasOwnProperty(q.field)&&((Z=ye[q.field])===null||Z===void 0||Z.forEach(function(me){return me(q.value,q.previousValue)}))}catch(me){m.onError(me)}}else q.op===t.OPERATION.ADD&&q.previousValue===void 0?(Le=ye[t.OPERATION.ADD])===null||Le===void 0||Le.forEach(function(me){var De;return me(q.value,(De=q.dynamicIndex)!==null&&De!==void 0?De:q.field)}):q.op===t.OPERATION.DELETE?q.previousValue!==void 0&&((Ae=ye[t.OPERATION.DELETE])===null||Ae===void 0||Ae.forEach(function(me){var De;return me(q.previousValue,(De=q.dynamicIndex)!==null&&De!==void 0?De:q.field)})):q.op===t.OPERATION.DELETE_AND_ADD&&(q.previousValue!==void 0&&((nt=ye[t.OPERATION.DELETE])===null||nt===void 0||nt.forEach(function(me){var De;return me(q.previousValue,(De=q.dynamicIndex)!==null&&De!==void 0?De:q.field)})),(y=ye[t.OPERATION.ADD])===null||y===void 0||y.forEach(function(me){var De;return me(q.value,(De=q.dynamicIndex)!==null&&De!==void 0?De:q.field)})),q.value!==q.previousValue&&((I=ye[t.OPERATION.REPLACE])===null||I===void 0||I.forEach(function(me){var De;return me(q.value,(De=q.dynamicIndex)!==null&&De!==void 0?De:q.field)}));k.add(pe)},ee=0;ee<d.length;ee++)F(ee)},m._definition=B.create(),m}();function $t(m){for(var d=[m.$changes],g=1,E={},N=E,Z=function(Ae){var nt=d[Ae];nt.changes.forEach(function(y){var I=nt.ref,k=y.index,O=I._definition?I._definition.fieldsByIndex[k]:I.$indexes.get(k);N[O]=nt.getValue(k)})},Le=0;Le<g;Le++)Z(Le);return E}var st={context:new w},Ot=function(m){r(d,m);function d(){return m!==null&&m.apply(this,arguments)||this}return s([T("string",st)],d.prototype,"name",void 0),s([T("string",st)],d.prototype,"type",void 0),s([T("number",st)],d.prototype,"referencedType",void 0),d}(ut),un=function(m){r(d,m);function d(){var g=m!==null&&m.apply(this,arguments)||this;return g.fields=new x,g}return s([T("number",st)],d.prototype,"id",void 0),s([T([Ot],st)],d.prototype,"fields",void 0),d}(ut),Ts=function(m){r(d,m);function d(){var g=m!==null&&m.apply(this,arguments)||this;return g.types=new x,g}return d.encode=function(g){var E,N=g.constructor,Z=new d;Z.rootType=N._typeid;var Le=function(I,k){for(var O in k){var F=new Ot;F.name=O;var ee=void 0;if(typeof k[O]=="string")ee=k[O];else{var oe=k[O],q=void 0;ut.is(oe)?(ee="ref",q=k[O]):(ee=Object.keys(oe)[0],typeof oe[ee]=="string"?ee+=":"+oe[ee]:q=oe[ee]),F.referencedType=q?q._typeid:-1}F.type=ee,I.fields.push(F)}Z.types.push(I)},Ae=(E=N._context)===null||E===void 0?void 0:E.types;for(var nt in Ae){var y=new un;y.id=Number(nt),Le(y,Ae[nt]._definition.schema)}return Z.encodeAll()},d.decode=function(g,E){var N=new w,Z=new d;Z.decode(g,E);var Le=Z.types.reduce(function(k,O){var F=function(oe){r(q,oe);function q(){return oe!==null&&oe.apply(this,arguments)||this}return q}(ut),ee=O.id;return k[ee]=F,N.add(F,ee),k},{});Z.types.forEach(function(k){var O=Le[k.id];k.fields.forEach(function(F){var ee;if(F.referencedType!==void 0){var oe=F.type,q=Le[F.referencedType];if(!q){var pe=F.type.split(":");oe=pe[0],q=pe[1]}oe==="ref"?T(q,{context:N})(O.prototype,F.name):T((ee={},ee[oe]=q,ee),{context:N})(O.prototype,F.name)}else T(F.type,{context:N})(O.prototype,F.name)})});var Ae=Le[Z.rootType],nt=new Ae;for(var y in Ae._definition.schema){var I=Ae._definition.schema[y];typeof I!="string"&&(nt[y]=typeof I=="function"?new I:new(P(Object.keys(I)[0])).constructor)}return nt},s([T([un],st)],d.prototype,"types",void 0),s([T("number",st)],d.prototype,"rootType",void 0),d}(ut);A("map",{constructor:h}),A("array",{constructor:x}),A("set",{constructor:fe}),A("collection",{constructor:Ze}),t.ArraySchema=x,t.CollectionSchema=Ze,t.Context=w,t.MapSchema=h,t.Reflection=Ts,t.ReflectionField=Ot,t.ReflectionType=un,t.Schema=ut,t.SchemaDefinition=B,t.SetSchema=fe,t.decode=St,t.defineTypes=ae,t.deprecated=Y,t.dumpChanges=$t,t.encode=Ue,t.filter=C,t.filterChildren=$,t.hasFilter=L,t.registerType=A,t.type=T})})(tc,tc.exports);var Ff=tc.exports,LE=Rt&&Rt.__createBinding||(Object.create?function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}:function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]}),IE=Rt&&Rt.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),DE=Rt&&Rt.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&LE(e,n,t);return IE(e,n),e};Object.defineProperty(Es,"__esModule",{value:!0});Es.Room=void 0;const Ku=DE(Br),OE=Fo,Jt=Bc,Zu=Qi,UE=ys,Qs=kr,mn=Ff,Ju=No;class kc{constructor(e,t){this.onStateChange=(0,Qs.createSignal)(),this.onError=(0,Qs.createSignal)(),this.onLeave=(0,Qs.createSignal)(),this.onJoin=(0,Qs.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,UE.createNanoEvents)(),this.roomId=null,this.name=e,t&&(this.serializer=new((0,Zu.getSerializer)("schema")),this.rootSchema=t,this.serializer.state=new t),this.onError((i,r)=>{var s;return(s=console.warn)===null||s===void 0?void 0:s.call(console,`colyseus.js - onError => (${i}) ${r}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(e,t,i=this,r){const s=new OE.Connection;i.connection=s,s.events.onmessage=kc.prototype.onMessageCallback.bind(i),s.events.onclose=function(a){var o;if(!i.hasJoined){(o=console.warn)===null||o===void 0||o.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),i.onError.invoke(a.code,a.reason);return}a.code===Ju.CloseCode.DEVMODE_RESTART&&t?t():(i.onLeave.invoke(a.code,a.reason),i.destroy())},s.events.onerror=function(a){var o;(o=console.warn)===null||o===void 0||o.call(console,`Room, onError (${a.code}): ${a.reason}`),i.onError.invoke(a.code,a.reason)},s.connect(e,r)}leave(e=!0){return new Promise(t=>{this.onLeave(i=>t(i)),this.connection?e?this.connection.send([Jt.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Ju.CloseCode.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}send(e,t){const i=[Jt.Protocol.ROOM_DATA];typeof e=="string"?mn.encode.string(i,e):mn.encode.number(i,e);let r;if(t!==void 0){const s=Ku.encode(t);r=new Uint8Array(i.length+s.byteLength),r.set(new Uint8Array(i),0),r.set(new Uint8Array(s),i.length)}else r=new Uint8Array(i);this.connection.send(r.buffer)}sendBytes(e,t){const i=[Jt.Protocol.ROOM_DATA_BYTES];typeof e=="string"?mn.encode.string(i,e):mn.encode.number(i,e);let r;r=new Uint8Array(i.length+(t.byteLength||t.length)),r.set(new Uint8Array(i),0),r.set(new Uint8Array(t),i.length),this.connection.send(r.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(e){const t=Array.from(new Uint8Array(e.data)),i=t[0];if(i===Jt.Protocol.JOIN_ROOM){let r=1;const s=(0,Jt.utf8Read)(t,r);if(r+=(0,Jt.utf8Length)(s),this.serializerId=(0,Jt.utf8Read)(t,r),r+=(0,Jt.utf8Length)(this.serializerId),!this.serializer){const a=(0,Zu.getSerializer)(this.serializerId);this.serializer=new a}t.length>r&&this.serializer.handshake&&this.serializer.handshake(t,{offset:r}),this.reconnectionToken=`${this.roomId}:${s}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([Jt.Protocol.JOIN_ROOM])}else if(i===Jt.Protocol.ERROR){const r={offset:1},s=mn.decode.number(t,r),a=mn.decode.string(t,r);this.onError.invoke(s,a)}else if(i===Jt.Protocol.LEAVE_ROOM)this.leave();else if(i===Jt.Protocol.ROOM_DATA_SCHEMA){const r={offset:1},a=this.serializer.getState().constructor._context.get(mn.decode.number(t,r)),o=new a;o.decode(t,r),this.dispatchMessage(a,o)}else if(i===Jt.Protocol.ROOM_STATE)t.shift(),this.setState(t);else if(i===Jt.Protocol.ROOM_STATE_PATCH)t.shift(),this.patch(t);else if(i===Jt.Protocol.ROOM_DATA){const r={offset:1},s=mn.decode.stringCheck(t,r)?mn.decode.string(t,r):mn.decode.number(t,r),a=t.length>r.offset?Ku.decode(e.data,r.offset):void 0;this.dispatchMessage(s,a)}else if(i===Jt.Protocol.ROOM_DATA_BYTES){const r={offset:1},s=mn.decode.stringCheck(t,r)?mn.decode.string(t,r):mn.decode.number(t,r);this.dispatchMessage(s,new Uint8Array(t.slice(r.offset)))}}setState(e){this.serializer.setState(e),this.onStateChange.invoke(this.serializer.getState())}patch(e){this.serializer.patch(e),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(e,t){var i;const r=this.getMessageHandlerKey(e);this.onMessageHandlers.events[r]?this.onMessageHandlers.emit(r,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):(i=console.warn)===null||i===void 0||i.call(console,`colyseus.js: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"function":return`$${e._typeid}`;case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}}Es.Room=kc;var ko={};function Qu(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Fn(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,a,o,c,l=t.body,u=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Qu(s,s);o=c.shift();)o=o.split(": "),s.headers[o.shift().toLowerCase()]=o.join(": ");if(o=s.headers["content-type"],o&&~o.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return Qu(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(u["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(a in u)s.setRequestHeader(a,u[a]);s.send(l)})}var NE=Fn.bind(Fn,"GET"),FE=Fn.bind(Fn,"POST"),BE=Fn.bind(Fn,"PATCH"),kE=Fn.bind(Fn,"DELETE"),zE=Fn.bind(Fn,"PUT");const HE=Object.freeze(Object.defineProperty({__proto__:null,del:kE,get:NE,patch:BE,post:FE,put:zE,send:Fn},Symbol.toStringTag,{value:"Module"})),GE=hE(HE);var VE=Rt&&Rt.__createBinding||(Object.create?function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}:function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]}),WE=Rt&&Rt.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),$E=Rt&&Rt.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&VE(e,n,t);return WE(e,n),e};Object.defineProperty(ko,"__esModule",{value:!0});ko.HTTP=void 0;const XE=No,qE=$E(GE);class YE{constructor(e,t={}){this.client=e,this.headers=t}get(e,t={}){return this.request("get",e,t)}post(e,t={}){return this.request("post",e,t)}del(e,t={}){return this.request("del",e,t)}put(e,t={}){return this.request("put",e,t)}request(e,t,i={}){return qE[e](this.client.getHttpEndpoint(t),this.getOptions(i)).catch(r=>{var s;const a=r.statusCode,o=((s=r.data)===null||s===void 0?void 0:s.error)||r.statusMessage||r.message;throw!a&&!o?r:new XE.ServerError(a,o)})}getOptions(e){return e.headers=Object.assign({},this.headers,e.headers),this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(e.withCredentials=!0),e}}ko.HTTP=YE;var Ss={},bi={};Object.defineProperty(bi,"__esModule",{value:!0});bi.getItem=bi.removeItem=bi.setItem=void 0;let Jr;function zc(){if(!Jr)try{Jr=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return Jr||(Jr={cache:{},setItem:function(n,e){this.cache[n]=e},getItem:function(n){this.cache[n]},removeItem:function(n){delete this.cache[n]}}),Jr}function jE(n,e){zc().setItem(n,e)}bi.setItem=jE;function KE(n){zc().removeItem(n)}bi.removeItem=KE;function ZE(n,e){const t=zc().getItem(n);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(i=>e(i))}bi.getItem=ZE;var Bi=Rt&&Rt.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{l(i.next(u))}catch(f){a(f)}}function c(u){try{l(i.throw(u))}catch(f){a(f)}}function l(u){u.done?s(u.value):r(u.value).then(o,c)}l((i=i.apply(n,e||[])).next())})},xr=Rt&&Rt.__classPrivateFieldGet||function(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)},Qr=Rt&&Rt.__classPrivateFieldSet||function(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t},so,nc,xi,oo;Object.defineProperty(Ss,"__esModule",{value:!0});Ss.Auth=void 0;const Ra=bi,JE=ys;class QE{constructor(e){this.http=e,this.settings={path:"/auth",key:"colyseus-auth-token"},so.set(this,!1),nc.set(this,void 0),xi.set(this,void 0),oo.set(this,(0,JE.createNanoEvents)()),(0,Ra.getItem)(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){const t=xr(this,oo,"f").on("change",e);return xr(this,so,"f")||Qr(this,nc,new Promise((i,r)=>{this.getUserData().then(s=>{this.emitChange(Object.assign(Object.assign({},s),{token:this.token}))}).catch(s=>{this.emitChange({user:null,token:void 0})}).finally(()=>{i()})}),"f"),Qr(this,so,!0,"f"),t}getUserData(){return Bi(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(e,t,i){return Bi(this,void 0,void 0,function*(){const r=(yield this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:i}})).data;return this.emitChange(r),r})}signInWithEmailAndPassword(e,t){return Bi(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(i),i})}signInAnonymously(e){return Bi(this,void 0,void 0,function*(){const t=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t})}sendPasswordResetEmail(e){return Bi(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data})}signInWithProvider(e,t={}){return Bi(this,void 0,void 0,function*(){return new Promise((i,r)=>{const s=t.width||480,a=t.height||768,o=this.token?`?token=${this.token}`:"",c=`Login with ${e[0].toUpperCase()+e.substring(1)}`,l=this.http.client.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${o}`),u=screen.width/2-s/2,f=screen.height/2-a/2;Qr(this,xi,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+a+", top="+f+", left="+u),"f");const p=M=>{M.data.user===void 0&&M.data.token===void 0||(clearInterval(_),xr(this,xi,"f").close(),Qr(this,xi,void 0,"f"),window.removeEventListener("message",p),M.data.error!==void 0?r(M.data.error):(i(M.data),this.emitChange(M.data)))},_=setInterval(()=>{(!xr(this,xi,"f")||xr(this,xi,"f").closed)&&(Qr(this,xi,void 0,"f"),r("cancelled"),window.removeEventListener("message",p))},200);window.addEventListener("message",p)})})}signOut(){return Bi(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?(0,Ra.removeItem)(this.settings.key):(0,Ra.setItem)(this.settings.key,e.token)),xr(this,oo,"f").emit("change",e)}}Ss.Auth=QE;so=new WeakMap,nc=new WeakMap,xi=new WeakMap,oo=new WeakMap;var zo={};Object.defineProperty(zo,"__esModule",{value:!0});zo.discordURLBuilder=void 0;function ey(n){var e;const t=((e=window==null?void 0:window.location)===null||e===void 0?void 0:e.hostname)||"localhost",i=n.hostname.split("."),r=!n.hostname.includes("trycloudflare.com")&&!n.hostname.includes("discordsays.com")&&i.length>2?`/${i[0]}`:"";return n.pathname.startsWith("/.proxy")?`${n.protocol}//${t}${r}${n.pathname}${n.search}`:`${n.protocol}//${t}/.proxy/colyseus${r}${n.pathname}${n.search}`}zo.discordURLBuilder=ey;var Hn=Rt&&Rt.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{l(i.next(u))}catch(f){a(f)}}function c(u){try{l(i.throw(u))}catch(f){a(f)}}function l(u){u.done?s(u.value):r(u.value).then(o,c)}l((i=i.apply(n,e||[])).next())})},Ca;Object.defineProperty(Fr,"__esModule",{value:!0});Fr.Client=Fr.MatchMakeError=void 0;const ty=No,ny=Es,iy=ko,ry=Ss,sy=zo;class Ho extends Error{constructor(e,t){super(e),this.code=t,Object.setPrototypeOf(this,Ho.prototype)}}Fr.MatchMakeError=Ho;const ed=typeof window<"u"&&typeof((Ca=window==null?void 0:window.location)===null||Ca===void 0?void 0:Ca.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class oy{constructor(e=ed,t){var i,r;if(typeof e=="string"){const s=e.startsWith("/")?new URL(e,ed):new URL(e),a=s.protocol==="https:"||s.protocol==="wss:",o=Number(s.port||(a?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:o,secure:a}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new iy.HTTP(this,(t==null?void 0:t.headers)||{}),this.auth=new ry.Auth(this.http),this.urlBuilder=t==null?void 0:t.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((r=(i=window==null?void 0:window.location)===null||i===void 0?void 0:i.hostname)===null||r===void 0)&&r.includes("discordsays.com"))&&(this.urlBuilder=sy.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(e,t={},i){return Hn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",e,t,i)})}create(e,t={},i){return Hn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",e,t,i)})}join(e,t={},i){return Hn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",e,t,i)})}joinById(e,t={},i){return Hn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",e,t,i)})}reconnect(e,t){return Hn(this,void 0,void 0,function*(){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[i,r]=e.split(":");if(!i||!r)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",i,{reconnectionToken:r},t)})}getAvailableRooms(e=""){return Hn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${e}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(e,t,i){return Hn(this,void 0,void 0,function*(){const r=this.createRoom(e.room.name,t);r.roomId=e.room.roomId,r.sessionId=e.sessionId;const s={sessionId:r.sessionId};e.reconnectionToken&&(s.reconnectionToken=e.reconnectionToken);const a=i||r;return r.connect(this.buildEndpoint(e.room,s),e.devMode&&(()=>Hn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${r.roomId}'...`);let o=0,c=8;const l=()=>Hn(this,void 0,void 0,function*(){o++;try{yield this.consumeSeatReservation(e,t,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${r.roomId}'`)}catch{o<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${o} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),a,this.http.headers),new Promise((o,c)=>{const l=(u,f)=>c(new ty.ServerError(u,f));a.onError.once(l),a.onJoin.once(()=>{a.onError.remove(l),o(a)})})})}createMatchMakeRequest(e,t,i={},r,s){return Hn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${e}/${t}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)})).data;if(a.error)throw new Ho(a.error,a.code);return e==="reconnect"&&(a.reconnectionToken=i.reconnectionToken),yield this.consumeSeatReservation(a,r,s)})}createRoom(e,t){return new ny.Room(e,t)}buildEndpoint(e,t={}){const i=[];for(const a in t)t.hasOwnProperty(a)&&i.push(`${a}=${t[a]}`);let r=this.settings.secure?"wss://":"ws://";e.publicAddress?r+=`${e.publicAddress}`:r+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const s=`${r}/${e.processId}/${e.roomId}?${i.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(s)):s}getHttpEndpoint(e=""){const t=e.startsWith("/")?e:`/${e}`,i=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.urlBuilder?this.urlBuilder(new URL(i)):i}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Fr.Client=oy;var Go={};Object.defineProperty(Go,"__esModule",{value:!0});Go.SchemaSerializer=void 0;const td=Ff;class ay{setState(e){return this.state.decode(e)}getState(){return this.state}patch(e){return this.state.decode(e)}teardown(){var e,t;(t=(e=this.state)===null||e===void 0?void 0:e.$changes)===null||t===void 0||t.root.clearRefs()}handshake(e,t){this.state?new td.Reflection().decode(e,t):this.state=td.Reflection.decode(e,t)}}Go.SchemaSerializer=ay;var Vo={};Object.defineProperty(Vo,"__esModule",{value:!0});Vo.NoneSerializer=void 0;class cy{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}}Vo.NoneSerializer=cy;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SchemaSerializer=n.registerSerializer=n.Auth=n.Room=n.ErrorCode=n.Protocol=n.MatchMakeError=n.Client=void 0;var e=Fr;Object.defineProperty(n,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(n,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=Bc;Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var i=Es;Object.defineProperty(n,"Room",{enumerable:!0,get:function(){return i.Room}});var r=Ss;Object.defineProperty(n,"Auth",{enumerable:!0,get:function(){return r.Auth}});const s=Go;Object.defineProperty(n,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const a=Vo,o=Qi;Object.defineProperty(n,"registerSerializer",{enumerable:!0,get:function(){return o.registerSerializer}}),(0,o.registerSerializer)("schema",s.SchemaSerializer),(0,o.registerSerializer)("none",a.NoneSerializer)})(Of);function ly(n){const{rng:e,...t}=n;return{...t,rng:Pf((e==null?void 0:e.seed)??Date.now())}}function uy(n,e){const t=e instanceof Uint8Array?e:new Uint8Array(e),i=PM(t),r=ly(i);KM(n,r),n.simulation.time=r.time,n.network.lastSnapshotTick=r.tick,Ef(n),So(n),yo(n),xs(r.score.current),Ms(r.enemies.kills)}function dy(n,e){X.system.info(`Connected to multiplayer server v${e.serverVersion}, tick ${e.tickRate}`),n.simulation.tickRate=e.tickRate,n.simulation.fixedDelta=1/e.tickRate}async function fy(n,e={}){const t=e.serverUrl??Rv,i=e.roomName??"snek",r=new Of.Client(t);let s=0;n.network.enabled=!0,n.network.status="connecting",n.flags.useCoreSimulation=!0;const a=c=>{n.network.room=c,n.network.sessionId=c.sessionId,n.network.status="connected",n.network.sendInput=l=>{c.send("input",l)},c.onMessage(Aa.Meta,l=>dy(n,l)),c.onMessage(Aa.Snapshot,l=>{uy(n,l)}),c.onMessage(Aa.Error,l=>{X.system.warn(`Server error: ${l.message}`),mt(l.message,16729156)}),c.onLeave(l=>{n.network.status="disconnected",X.system.warn(`Disconnected from multiplayer (code ${l}).`),mt("Disconnected from server",16729156),o()}),c.onError((l,u)=>{n.network.status="error",X.system.error(`Room error ${l}: ${u}`),mt("Network error",16729156),o()})},o=()=>{n.network.enabled&&(s>=5||(s+=1,n.network.status="reconnecting",mt("Reconnecting...",16761095),setTimeout(async()=>{try{const c=await r.joinOrCreate(i,{clientVersion:Vu,stateVersion:Gu,inputVersion:Qa});s=0,a(c)}catch(c){X.system.warn("Reconnect attempt failed",c),o()}},1500)))};try{const c=await r.joinOrCreate(i,{clientVersion:Vu,stateVersion:Gu,inputVersion:Qa});return a(c),c}catch(c){throw n.network.status="error",X.system.error("Failed to connect to multiplayer server",c),mt("Unable to connect to server",16729156),c}}let Ao;function vi(n,e,t,i){n.addEventListener(e,t,i)}async function hy(){var c,l,u,f;dx(),X.system.info("Initializing game..."),z.flags.gameRunning=!1;const n=An.initializeForCurrentDevice();X.system.info(`Device type: ${n?"Mobile":"Desktop"}`),X.system.info(`Performance settings: Shadows=${An.shadows}, Detail=${An.detailLevel}`),Sy();const e=document.getElementById("gameCanvas");if(!e){X.system.error("Canvas element #gameCanvas not found!");return}z.scene=ex(),z.camera=tx(),z.renderer=nx(e),z.clock=new Nd;const t=new URLSearchParams(window.location.search),i=t.get("seed"),r=i?Number(i):Date.now();z.core=Lf(r),X.system.info(`Core RNG seed: ${r}`),X.system.info(`Event schema version: ${To}`),If(z),z.simulation.fixedDelta=1/z.simulation.tickRate,z.simulation.lastTimeMs=performance.now(),z.lights=ix(z.scene);try{if(z.materials=await mx(),X.system.info("Materials loaded and created."),!((l=(c=z.materials)==null?void 0:c.snake)!=null&&l.head1)||!((u=z.materials)!=null&&u.ground)||!z.materials.particle)throw new Error("Essential materials failed to create after loading.")}catch(p){X.system.error("Fatal Error: Could not load/create materials.",p),alert("Error loading game materials. Please refresh the page and try again.");return}const s=lx(z.scene,z.materials);z.environment={...s},Qx(z.materials.particle),_x(z.camera),z.cleanupInput=YM(z,Xx),vi(window,"gameStarted",py),vi(window,"gamePaused",my),vi(window,"gameResumed",gy),Vx(),vi(window,"resize",yy),(f=document.getElementById("resetAlphaModeCooldown"))==null||f.addEventListener("click",function(){$M(z),mt("Alpha Mode cooldown reset!"),X.system.info("Alpha Mode cooldown reset button clicked")}),t.get("stats")==="true"&&(Ao=new ls,document.body.appendChild(Ao.dom));const a=t.get("multiplayer");if(a==="1"||a==="true"||bv)try{await fy(z),mt("Connected to multiplayer",5025616)}catch(p){X.system.warn("Multiplayer connection failed; running offline.",p)}vi(window,"gameOver",_y),vi(window,"gamePaused",vy),vi(window,"gameResumed",xy),vi(window,"gameRestart",zf),jM()}function py(){X.system.info("Starting gameplay..."),Bf(),z.flags.gameStarted=!0,z.flags.gameOver=!1,z.flags.gamePaused=!1,window.fixAudio&&window.fixAudio(),z.flags.animating||(z.flags.animating=!0,Hc())}function my(){X.system.info("Game paused"),z.flags.gameRunning=!1,z.flags.gamePaused=!0,Ec()}function gy(){X.system.info("Game resumed"),z.flags.gameOver||(z.flags.gameRunning=!0,z.flags.animating||(z.flags.animating=!0,Hc()),Ji())}function _y(){X.system.info("Game over handler called")}function vy(){X.system.info("Game paused"),z.flags.gamePaused=!0,Ec()}function xy(){X.system.info("Game resumed"),z.flags.gameOver||(z.flags.gamePaused=!1,Ji())}function Bf(){X.system.info("--- RESETTING GAME ---"),z.flags.gameRunning=!1,z.simulation.time=0,z.simulation.accumulator=0,z.simulation.lastTimeMs=performance.now(),Jv(),z.cameraEffects||(z.cameraEffects={shake:{active:!1,startTime:0,duration:0,intensity:0,originalPosition:new H}}),Lx(),setTimeout(()=>{nM(z.scene),pf(z),setTimeout(()=>{mf(z),_f(z),FM(z),setTimeout(()=>{var e;const n=(e=z.network)==null?void 0:e.enabled;if(n||_M(z),z.flags.useCoreSimulation&&!n){const t=ui("NUM_INITIAL_FOOD")||pc;sM(z.core,t),yo(z)}else n||dM(z);setTimeout(()=>{z.flags.useCoreSimulation&&!n?(eE(z.core,Va),So(z)):n||EM(z),af(0,z),Ms(0),n||If(z),Ix(),X.system.info("--- GAME RESET COMPLETE ---"),z.flags.gameRunning=!0,z.flags.gameOver=!1},10)},10)},10)},10)}function kf(n=z,e="DEFAULT"){if(n.flags.gameOver)return;X.system.info("Game Over! Final Score:",n.score.current,"Reason:",e),n.flags.gameOver=!0,n.flags.gameRunning=!1,n.score.current>n.highScore&&(n.highScore=n.score.current,X.system.info("New High Score:",n.highScore),jv(n.highScore),Za(n.highScore));const t={applesEaten:n.stats.applesEaten||0,frogsEaten:n.stats.frogsEaten||0,snakesEaten:n.stats.snakesEaten||0};qx(n.score.current,n.highScore,e,t),cs(""),of(),n.playerSnake.speed=Bn,n.playerSnake.scoreMultiplier=1,n.playerSnake.ghostModeActive&&(n.playerSnake.ghostModeActive=!1,di(n)),n.playerSnake.activePowerUp=null}function zf(){z.flags.gameOver&&(Sc(),X.system.info("Restart requested."))}function Hc(){requestAnimationFrame(Hc),z.frameCount++,z.flags.gameRunning&&My()}function My(){var i,r;z.flags.restartRequested&&Bf();const n=performance.now(),e=Math.min((n-z.simulation.lastTimeMs)/1e3,.25);z.simulation.lastTimeMs=n,z.simulation.accumulator+=e,Math.floor(z.simulation.time*2)%2===0&&!z.flags.audioHealthCheckRun?(Dx(),z.flags.audioHealthCheckRun=!0):Math.floor(z.simulation.time*2)%2!==0&&(z.flags.audioHealthCheckRun=!1);let t=0;for(;z.simulation.accumulator>=z.simulation.fixedDelta&&t<z.simulation.maxSubSteps;){const s=z.simulation.fixedDelta;if(z.simulation.time+=s,z.flags.gameRunning&&!z.flags.gameOver){if(z.flags.useCoreSimulation){if(!((i=z.network)!=null&&i.enabled)){for(z.inputQueue.length>1&&z.inputQueue.sort((o,c)=>o.tick-c.tick);z.inputQueue.length>0;){const o=z.inputQueue.shift();o.tick<z.core.tick||IM(z.core,o)}const a=fE(z.core,s);(r=a==null?void 0:a.events)!=null&&r.length&&a.events.forEach(o=>{var l,u,f;if(o.version!==To){X.system.warn(`Event schema mismatch. Expected ${To}, got ${o.version}`);return}const c=o.event;if(c.type===xt.PlayerDead&&(Rf(z),kf(z,((l=c.payload)==null?void 0:l.reason)||"DEFAULT")),c.type===xt.ScoreChanged&&xs(c.payload.score),c.type===xt.FoodSpawned&&yo(z),c.type===xt.FoodEaten){const p=ci.find(_=>_.type===c.payload.type);c.payload.type==="normal"?(z.stats.applesEaten++,vn("eatApple"),c.payload.effects.speedBoostDuration>0&&mt("Speed Boost!",49151)):(z.stats.frogsEaten++,vn("eatFrog")),p!=null&&p.effectText&&mt(p.effectText,p.colorHint.getHex())}if(c.type===xt.EnemyKilled&&(yM(c.payload.enemyId,z),(f=(u=z.playerSnake)==null?void 0:u.alphaMode)!=null&&f.active&&(vn("alphaKillExplode1"),nf()),z.stats.snakesEaten++,Ms(z.enemies.kills)),c.type===xt.PowerupApplied){const p=ci.find(_=>_.type===c.payload.type);p!=null&&p.effectText&&mt(p.effectText,p.colorHint.getHex())}c.type===xt.AlphaModeActivated&&(cf(),(void 0)()),c.type===xt.AlphaModeEnded&&mt("Alpha Mode ended"),c.type===xt.EnemyRespawned&&So(z)})}BM(s,z.simulation.time,z),Ef(z),So(z),yo(z)}else kM(s,z.simulation.time,z),SM(s,z.simulation.time,z);WM(z),CM(z),zu(s,z.scene),Hu(z,s)}else zu(s,z.scene),Hu(z,s);t+=1,z.simulation.accumulator-=z.simulation.fixedDelta}GM(z),Ey(z.simulation.time),z.renderer.render(z.scene,z.camera),Ao&&Ao.update()}function Ey(n){const{camera:e,cameraEffects:t}=z;if(!(!e||!t||!t.shake)&&t.shake.active){const i=t.shake,r=n-i.startTime;if(r>=i.duration)e.position.copy(i.originalPosition),i.active=!1;else{const s=1-r/i.duration,a=i.intensity*s,o=i.originalPosition;e.position.set(o.x+(Math.random()*2-1)*a,o.y+(Math.random()*2-1)*a*.5,o.z+(Math.random()*2-1)*a)}}}function yy(){z.camera&&z.renderer&&(z.camera.aspect=window.innerWidth/window.innerHeight,z.camera.updateProjectionMatrix(),z.renderer.setSize(window.innerWidth,window.innerHeight))}function Sy(){const n=_o;let e=0;for(const t in n)n.hasOwnProperty(t)&&(e+=n[t]);if(Math.abs(e-100)>.001){X.system.warn(`Food spawn ratios do not add up to 100! Current total: ${e}`);const t=100/e;for(const i in n)n.hasOwnProperty(i)&&(n[i]=Math.round(n[i]*t));X.system.info("Food spawn ratios have been normalized:",n)}Ty(),X.system.info("Configuration validated.")}function Ty(){if(z.environment&&z.environment.groundMesh){const n=z.environment.groundMesh;n.material&&(n.material.color.set(is),n.material.needsUpdate=!0,X.system.info("Ground color updated to:","#"+is.toString(16).padStart(6,"0")))}}hy().catch(n=>{X.system.error("Initialization failed:",n),alert("Error initializing the game. Please check the console for details.")});
