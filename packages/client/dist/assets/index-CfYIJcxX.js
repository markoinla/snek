(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Af="modulepreload",wf=function(n){return"/"+n},Fc={},bf=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=wf(c),c in Fc)return;Fc[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Af,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="160",Rf=0,kc=1,Pf=2,Qu=1,ed=2,Qn=3,cn=0,Jt=1,zt=2,Mi=0,yr=1,La=2,Bc=3,zc=4,Cf=5,Bi=100,Lf=101,If=102,Hc=103,Gc=104,Df=200,Of=201,Nf=202,Uf=203,Ia=204,Da=205,Ff=206,kf=207,Bf=208,zf=209,Hf=210,Gf=211,Vf=212,Wf=213,$f=214,Xf=0,Yf=1,qf=2,ao=3,Kf=4,Zf=5,jf=6,Jf=7,Qa=0,Qf=1,eh=2,xi=0,th=1,nh=2,ih=3,rh=4,sh=5,oh=6,td=300,Rr=301,Pr=302,Oa=303,Na=304,To=306,bn=1e3,Cn=1001,Ua=1002,Lt=1003,Vc=1004,Ho=1005,At=1006,ah=1007,Zt=1008,Si=1009,ch=1010,lh=1011,ec=1012,nd=1013,_i=1014,Ei=1015,ls=1016,id=1017,rd=1018,Hi=1020,uh=1021,Ln=1023,dh=1024,fh=1025,Gi=1026,Cr=1027,hh=1028,sd=1029,ph=1030,od=1031,ad=1033,Go=33776,Vo=33777,Wo=33778,$o=33779,Wc=35840,$c=35841,Xc=35842,Yc=35843,cd=36196,qc=37492,Kc=37496,Zc=37808,jc=37809,Jc=37810,Qc=37811,el=37812,tl=37813,nl=37814,il=37815,rl=37816,sl=37817,ol=37818,al=37819,cl=37820,ll=37821,Xo=36492,ul=36494,dl=36495,mh=36283,fl=36284,hl=36285,pl=36286,ld=3e3,Vi=3001,gh=3200,_h=3201,tc=0,Eh=1,Mn="",Nt="srgb",ni="srgb-linear",nc="display-p3",Ao="display-p3-linear",co="linear",Tt="srgb",lo="rec709",uo="p3",Qi=7680,ml=519,vh=512,Mh=513,xh=514,ud=515,Sh=516,yh=517,Th=518,Ah=519,gl=35044,wh=35048,_l="300 es",Fa=1035,ti=2e3,fo=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const Qr=Math.PI/180,us=180/Math.PI;function Br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function ic(n,e){return(n%e+e)%e}function bh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rh(n,e,t){return n!==e?(t-n)/(e-n):0}function es(n,e,t){return(1-t)*n+t*e}function Ph(n,e,t,i){return es(n,e,1-Math.exp(-t*i))}function Ch(n,e=1){return e-Math.abs(ic(n,e*2)-e)}function Lh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ih(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Oh(n,e){return n+Math.random()*(e-n)}function Nh(n){return n*(.5-Math.random())}function Uh(n){n!==void 0&&(El=n);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fh(n){return n*Qr}function kh(n){return n*us}function ka(n){return(n&n-1)===0&&n!==0}function Bh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zh(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*v,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*v,a*l);break;case"ZYZ":n.set(c*v,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vl={DEG2RAD:Qr,RAD2DEG:us,generateUUID:Br,clamp:rn,euclideanModulo:ic,mapLinear:bh,inverseLerp:Rh,lerp:es,damp:Ph,pingpong:Ch,smoothstep:Lh,smootherstep:Ih,randInt:Dh,randFloat:Oh,randFloatSpread:Nh,seededRandom:Uh,degToRad:Fh,radToDeg:kh,isPowerOfTwo:ka,ceilPowerOfTwo:Bh,floorPowerOfTwo:ho,setQuaternionFromProperEuler:zh,normalize:en,denormalize:Er};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,c,l){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],M=r[0],E=r[3],p=r[6],R=r[1],S=r[4],L=r[7],N=r[2],I=r[5],b=r[8];return s[0]=o*M+a*R+c*N,s[3]=o*E+a*S+c*I,s[6]=o*p+a*L+c*b,s[1]=l*M+u*R+f*N,s[4]=l*E+u*S+f*I,s[7]=l*p+u*L+f*b,s[2]=h*M+m*R+v*N,s[5]=h*E+m*S+v*I,s[8]=h*p+m*L+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,m=l*s-o*c,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(r*l-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(i*c-l*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new nt;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hh(){const n=ds("canvas");return n.style.display="block",n}const Ml={};function ts(n){n in Ml||(Ml[n]=!0,console.warn(n))}const xl=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sl=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[ni]:{transfer:co,primaries:lo,toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:Tt,primaries:lo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ao]:{transfer:co,primaries:uo,toReference:n=>n.applyMatrix3(Sl),fromReference:n=>n.applyMatrix3(xl)},[nc]:{transfer:Tt,primaries:uo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sl),fromReference:n=>n.applyMatrix3(xl).convertLinearToSRGB()}},Gh=new Set([ni,Ao]),Et={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Gh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ys[e].toReference,r=ys[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ys[n].primaries},getTransfer:function(n){return n===Mn?co:ys[n].transfer}};function Tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=ds("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vh=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Br(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ko(r[o].image)):s.push(Ko(r[o]))}else s=Ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;class un extends kr{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Cn,r=Cn,s=At,o=Zt,a=Ln,c=Si,l=un.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Br(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Vi?Nt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Vi:ld}set encoding(e){ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vi?Nt:Mn}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=td;un.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],v=c[9],M=c[2],E=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(v-E)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(v+E)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,L=(m+1)/2,N=(p+1)/2,I=(u+h)/4,b=(f+M)/4,Y=(v+E)/4;return S>L&&S>N?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=I/i,s=b/i):L>N?L<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),i=I/r,s=Y/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=b/s,r=Y/s),this.set(i,r,s,t),this}let R=Math.sqrt((E-v)*(E-v)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(E-v)/R,this.y=(f-M)/R,this.z=(h-u)/R,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends kr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vi?Nt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends $h{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xh extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(f!==M||c!==h||l!==m||u!==v){let E=1-a;const p=c*h+l*m+u*v+f*M,R=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const N=Math.sqrt(S),I=Math.atan2(N,p*R);E=Math.sin(E*I)/N,a=Math.sin(a*I)/N}const L=a*R;if(c=c*E+h*L,l=l*E+m*L,u=u*E+v*L,f=f*E+M*L,E===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=N,l*=N,u*=N,f*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*f+c*m-l*h,e[t+1]=c*v+u*h+l*f-a*m,e[t+2]=l*v+u*m+a*h-c*f,e[t+3]=u*v-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f+h*m*v;break;case"YZX":this._x=h*u*f+l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f-h*m*v;break;case"XZY":this._x=h*u*f-l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new G,yl=new ji;class Ji{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),As.subVectors(this.max,Vr),tr.subVectors(e.a,Vr),nr.subVectors(e.b,Vr),ir.subVectors(e.c,Vr),ai.subVectors(nr,tr),ci.subVectors(ir,nr),Ci.subVectors(tr,ir);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Ci.z,Ci.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Ci.z,0,-Ci.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Ci.y,Ci.x,0];return!jo(t,tr,nr,ir,As)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,tr,nr,ir,As))?!1:(ws.crossVectors(ai,ci),t=[ws.x,ws.y,ws.z],jo(t,tr,nr,ir,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new G,new G,new G,new G,new G,new G,new G,new G],Tn=new G,Ts=new Ji,tr=new G,nr=new G,ir=new G,ai=new G,ci=new G,Ci=new G,Vr=new G,As=new G,ws=new G,Li=new G;function jo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Li.fromArray(n,s);const a=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Yh=new Ji,Wr=new G,Jo=new G;class ps{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Jo)),this.expandByPoint(Wr.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new G,Qo=new G,bs=new G,li=new G,ea=new G,Rs=new G,ta=new G;class qh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qo.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=li.dot(this.direction),c=-li.dot(bs),l=li.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*c-a,h=o*a-c,v=s*u,f>=0)if(h>=-v)if(h<=v){const M=1/u;f*=M,h*=M,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qo).addScaledVector(bs,h),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){ea.subVectors(t,e),Rs.subVectors(i,e),ta.crossVectors(ea,Rs);let o=this.direction.dot(ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(Rs.crossVectors(li,Rs));if(c<0)return null;const l=a*this.direction.dot(ea.cross(li));if(l<0||c+l>o)return null;const u=-a*li.dot(ta);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,c,l,u,f,h,m,v,M,E){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,h,m,v,M,E)}set(e,t,i,r,s,o,a,c,l,u,f,h,m,v,M,E){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=v,p[11]=M,p[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,M=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=h-M*l,t[9]=-a*c,t[2]=M-h*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,v=l*u,M=l*f;t[0]=h+M*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=M+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,v=l*u,M=l*f;t[0]=h-M*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=M-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,M=a*f;t[0]=c*u,t[4]=v*l-m,t[8]=h*l+M,t[1]=c*f,t[5]=M*l+h,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,v=a*c,M=a*l;t[0]=c*u,t[4]=M-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+v,t[10]=h-M*f}else if(e.order==="XZY"){const h=o*c,m=o*l,v=a*c,M=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+M,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,Zh)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ui.crossVectors(i,dn),ui.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ui.crossVectors(i,dn)),ui.normalize(),Ps.crossVectors(dn,ui),r[0]=ui.x,r[4]=Ps.x,r[8]=dn.x,r[1]=ui.y,r[5]=Ps.y,r[9]=dn.y,r[2]=ui.z,r[6]=Ps.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],M=i[6],E=i[10],p=i[14],R=i[3],S=i[7],L=i[11],N=i[15],I=r[0],b=r[4],Y=r[8],w=r[12],C=r[1],V=r[5],Q=r[9],fe=r[13],k=r[2],X=r[6],J=r[10],ee=r[14],ie=r[3],te=r[7],re=r[11],ce=r[15];return s[0]=o*I+a*C+c*k+l*ie,s[4]=o*b+a*V+c*X+l*te,s[8]=o*Y+a*Q+c*J+l*re,s[12]=o*w+a*fe+c*ee+l*ce,s[1]=u*I+f*C+h*k+m*ie,s[5]=u*b+f*V+h*X+m*te,s[9]=u*Y+f*Q+h*J+m*re,s[13]=u*w+f*fe+h*ee+m*ce,s[2]=v*I+M*C+E*k+p*ie,s[6]=v*b+M*V+E*X+p*te,s[10]=v*Y+M*Q+E*J+p*re,s[14]=v*w+M*fe+E*ee+p*ce,s[3]=R*I+S*C+L*k+N*ie,s[7]=R*b+S*V+L*X+N*te,s[11]=R*Y+S*Q+L*J+N*re,s[15]=R*w+S*fe+L*ee+N*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],M=e[7],E=e[11],p=e[15];return v*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*m-i*c*m)+M*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+E*(+t*l*f-t*a*m-s*o*f+i*o*m+s*a*u-i*l*u)+p*(-r*a*u-t*c*f+t*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],M=e[13],E=e[14],p=e[15],R=f*E*l-M*h*l+M*c*m-a*E*m-f*c*p+a*h*p,S=v*h*l-u*E*l-v*c*m+o*E*m+u*c*p-o*h*p,L=u*M*l-v*f*l+v*a*m-o*M*m-u*a*p+o*f*p,N=v*f*c-u*M*c-v*a*h+o*M*h+u*a*E-o*f*E,I=t*R+i*S+r*L+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/I;return e[0]=R*b,e[1]=(M*h*s-f*E*s-M*r*m+i*E*m+f*r*p-i*h*p)*b,e[2]=(a*E*s-M*c*s+M*r*l-i*E*l-a*r*p+i*c*p)*b,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*m-i*c*m)*b,e[4]=S*b,e[5]=(u*E*s-v*h*s+v*r*m-t*E*m-u*r*p+t*h*p)*b,e[6]=(v*c*s-o*E*s-v*r*l+t*E*l+o*r*p-t*c*p)*b,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*b,e[8]=L*b,e[9]=(v*f*s-u*M*s-v*i*m+t*M*m+u*i*p-t*f*p)*b,e[10]=(o*M*s-v*a*s+v*i*l-t*M*l-o*i*p+t*a*p)*b,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*m-t*a*m)*b,e[12]=N*b,e[13]=(u*M*r-v*f*r+v*i*h-t*M*h-u*i*E+t*f*E)*b,e[14]=(v*a*r-o*M*r-v*i*c+t*M*c+o*i*E-t*a*E)*b,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,m=s*u,v=s*f,M=o*u,E=o*f,p=a*f,R=c*l,S=c*u,L=c*f,N=i.x,I=i.y,b=i.z;return r[0]=(1-(M+p))*N,r[1]=(m+L)*N,r[2]=(v-S)*N,r[3]=0,r[4]=(m-L)*I,r[5]=(1-(h+p))*I,r[6]=(E+R)*I,r[7]=0,r[8]=(v+S)*b,r[9]=(E-R)*b,r[10]=(1-(h+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),a=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const l=1/s,u=1/o,f=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ti){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(a===ti)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===fo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ti){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*l,m=(i+r)*u;let v,M;if(a===ti)v=(o+s)*f,M=-2*f;else if(a===fo)v=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rr=new G,An=new wt,Kh=new G(0,0,0),Zh=new G(1,1,1),ui=new G,Ps=new G,dn=new G,Tl=new wt,Al=new ji;class wo{constructor(e=0,t=0,i=0,r=wo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wo.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jh=0;const wl=new G,sr=new ji,Kn=new wt,Cs=new G,$r=new G,Jh=new G,Qh=new ji,bl=new G(1,0,0),Rl=new G(0,1,0),Pl=new G(0,0,1),ep={type:"added"},tp={type:"removed"};class Ut extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new G,t=new wo,i=new ji,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new nt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt($r,Cs,this.up):Kn.lookAt(Cs,$r,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Kn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ep)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new G(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new G,Zn=new G,na=new G,jn=new G,or=new G,ar=new G,Cl=new G,ia=new G,ra=new G,sa=new G;let Ls=!1;class Pn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wn.subVectors(r,t),Zn.subVectors(i,t),na.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Zn),c=wn.dot(na),l=Zn.dot(Zn),u=Zn.dot(na),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-a*u)*h,v=(o*u-a*c)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,i,r,s,o,a,c){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),Zn.subVectors(e,t),wn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;or.subVectors(r,i),ar.subVectors(s,i),ia.subVectors(e,i);const c=or.dot(ia),l=ar.dot(ia);if(c<=0&&l<=0)return t.copy(i);ra.subVectors(e,r);const u=or.dot(ra),f=ar.dot(ra);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(or,o);sa.subVectors(e,s);const m=or.dot(sa),v=ar.dot(sa);if(v>=0&&m<=v)return t.copy(s);const M=m*l-c*v;if(M<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(ar,a);const E=u*v-m*f;if(E<=0&&f-u>=0&&m-v>=0)return Cl.subVectors(s,r),a=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(Cl,a);const p=1/(E+M+h);return o=M*p,a=h*p,t.copy(i).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Is={h:0,s:0,l:0};function oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=ic(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=oa(o,s,e+1/3),this.g=oa(o,s,e),this.b=oa(o,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Et.fromWorkingColorSpace(Yt.copy(this),e),Math.round(rn(Yt.r*255,0,255))*65536+Math.round(rn(Yt.g*255,0,255))*256+Math.round(rn(Yt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nt){Et.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Is);const i=es(di.h,Is.h,t),r=es(di.s,Is.s,t),s=es(di.l,Is.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ve;Ve.NAMES=gd;let np=0;class zr extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=yr,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Da,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lr extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new G,Ds=new lt;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class _d extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ip=0;const gn=new wt,aa=new Ut,cr=new G,fn=new Ji,Xr=new Ji,Bt=new G;class bi extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?Ed:_d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(fn.min,Xr.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,Xr.max),fn.expandByPoint(Bt)):(fn.expandByPoint(Xr.min),fn.expandByPoint(Xr.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bt.fromBufferAttribute(a,l),c&&(cr.fromBufferAttribute(e,l),Bt.add(cr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let C=0;C<a;C++)l[C]=new G,u[C]=new G;const f=new G,h=new G,m=new G,v=new lt,M=new lt,E=new lt,p=new G,R=new G;function S(C,V,Q){f.fromArray(r,C*3),h.fromArray(r,V*3),m.fromArray(r,Q*3),v.fromArray(o,C*2),M.fromArray(o,V*2),E.fromArray(o,Q*2),h.sub(f),m.sub(f),M.sub(v),E.sub(v);const fe=1/(M.x*E.y-E.x*M.y);isFinite(fe)&&(p.copy(h).multiplyScalar(E.y).addScaledVector(m,-M.y).multiplyScalar(fe),R.copy(m).multiplyScalar(M.x).addScaledVector(h,-E.x).multiplyScalar(fe),l[C].add(p),l[V].add(p),l[Q].add(p),u[C].add(R),u[V].add(R),u[Q].add(R))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let C=0,V=L.length;C<V;++C){const Q=L[C],fe=Q.start,k=Q.count;for(let X=fe,J=fe+k;X<J;X+=3)S(i[X+0],i[X+1],i[X+2])}const N=new G,I=new G,b=new G,Y=new G;function w(C){b.fromArray(s,C*3),Y.copy(b);const V=l[C];N.copy(V),N.sub(b.multiplyScalar(b.dot(V))).normalize(),I.crossVectors(Y,V);const fe=I.dot(u[C])<0?-1:1;c[C*4]=N.x,c[C*4+1]=N.y,c[C*4+2]=N.z,c[C*4+3]=fe}for(let C=0,V=L.length;C<V;++C){const Q=L[C],fe=Q.start,k=Q.count;for(let X=fe,J=fe+k;X<J;X+=3)w(i[X+0]),w(i[X+1]),w(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,c=new G,l=new G,u=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),M=e.getX(h+1),E=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,E),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,E),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(E,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,v=0;for(let M=0,E=c.length;M<E;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*u;for(let p=0;p<u;p++)h[v++]=l[m++]}return new Dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new wt,Ii=new qh,Os=new ps,Il=new G,lr=new G,ur=new G,dr=new G,ca=new G,Ns=new G,Us=new lt,Fs=new lt,ks=new lt,Dl=new G,Ol=new G,Nl=new G,Bs=new G,zs=new G;class He extends Ut{constructor(e=new bi,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(ca.fromBufferAttribute(f,e),o?Ns.addScaledVector(ca,u):Ns.addScaledVector(ca.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Os.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Os,Il)===null||Ii.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Ll),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const E=h[v],p=o[E.materialIndex],R=Math.max(E.start,m.start),S=Math.min(a.count,Math.min(E.start+E.count,m.start+m.count));for(let L=R,N=S;L<N;L+=3){const I=a.getX(L),b=a.getX(L+1),Y=a.getX(L+2);r=Hs(this,p,e,i,l,u,f,I,b,Y),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let E=v,p=M;E<p;E+=3){const R=a.getX(E),S=a.getX(E+1),L=a.getX(E+2);r=Hs(this,o,e,i,l,u,f,R,S,L),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,M=h.length;v<M;v++){const E=h[v],p=o[E.materialIndex],R=Math.max(E.start,m.start),S=Math.min(c.count,Math.min(E.start+E.count,m.start+m.count));for(let L=R,N=S;L<N;L+=3){const I=L,b=L+1,Y=L+2;r=Hs(this,p,e,i,l,u,f,I,b,Y),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let E=v,p=M;E<p;E+=3){const R=E,S=E+1,L=E+2;r=Hs(this,o,e,i,l,u,f,R,S,L),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}}function rp(n,e,t,i,r,s,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===cn,a),c===null)return null;zs.copy(a),zs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zs);return l<t.near||l>t.far?null:{distance:l,point:zs.clone(),object:n}}function Hs(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,lr),n.getVertexPosition(c,ur),n.getVertexPosition(l,dr);const u=rp(n,e,t,i,lr,ur,dr,Bs);if(u){r&&(Us.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,c),ks.fromBufferAttribute(r,l),u.uv=Pn.getInterpolation(Bs,lr,ur,dr,Us,Fs,ks,new lt)),s&&(Us.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,c),ks.fromBufferAttribute(s,l),u.uv1=Pn.getInterpolation(Bs,lr,ur,dr,Us,Fs,ks,new lt),u.uv2=u.uv1),o&&(Dl.fromBufferAttribute(o,a),Ol.fromBufferAttribute(o,c),Nl.fromBufferAttribute(o,l),u.normal=Pn.getInterpolation(Bs,lr,ur,dr,Dl,Ol,Nl,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};Pn.getNormal(lr,ur,dr,f.normal),u.face=f}return u}class Xn extends bi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(f,2));function v(M,E,p,R,S,L,N,I,b,Y,w){const C=L/b,V=N/Y,Q=L/2,fe=N/2,k=I/2,X=b+1,J=Y+1;let ee=0,ie=0;const te=new G;for(let re=0;re<J;re++){const ce=re*V-fe;for(let xe=0;xe<X;xe++){const Z=xe*C-Q;te[M]=Z*R,te[E]=ce*S,te[p]=k,l.push(te.x,te.y,te.z),te[M]=0,te[E]=0,te[p]=I>0?1:-1,u.push(te.x,te.y,te.z),f.push(xe/b),f.push(1-re/Y),ee+=1}}for(let re=0;re<Y;re++)for(let ce=0;ce<b;ce++){const xe=h+ce+X*re,Z=h+ce+X*(re+1),oe=h+(ce+1)+X*(re+1),Me=h+(ce+1)+X*re;c.push(xe,Z,Me),c.push(Z,oe,Me),ie+=6}a.addGroup(m,ie,w),m+=ie,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const r in i)e[r]=i[r]}return e}function sp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vd(n){return n.getRenderTarget()===null?n.outputColorSpace:Et.workingColorSpace}const op={clone:Ir,merge:tn};var ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Md extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends Md{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,hr=1;class lp extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(fr,hr,e,t);r.layers=this.layers,this.add(r);const s=new vn(fr,hr,e,t);s.layers=this.layers,this.add(s);const o=new vn(fr,hr,e,t);o.layers=this.layers,this.add(o);const a=new vn(fr,hr,e,t);a.layers=this.layers,this.add(a);const c=new vn(fr,hr,e,t);c.layers=this.layers,this.add(c);const l=new vn(fr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xd extends un{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class up extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vi?Nt:Mn),this.texture=new xd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xn(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Mi});s.uniforms.tEquirect.value=t;const o=new He(r,s),a=t.minFilter;return t.minFilter===Zt&&(t.minFilter=At),new lp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const la=new G,dp=new G,fp=new nt;class Fi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=la.subVectors(i,t).cross(dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fp.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new ps,Gs=new G;class rc{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],m=r[8],v=r[9],M=r[10],E=r[11],p=r[12],R=r[13],S=r[14],L=r[15];if(i[0].setComponents(c-s,h-l,E-m,L-p).normalize(),i[1].setComponents(c+s,h+l,E+m,L+p).normalize(),i[2].setComponents(c+o,h+u,E+v,L+R).normalize(),i[3].setComponents(c-o,h-u,E-v,L-R).normalize(),i[4].setComponents(c-a,h-f,E-M,L-S).normalize(),t===ti)i[5].setComponents(c+a,h+f,E+M,L+S).normalize();else if(t===fo)i[5].setComponents(a,f,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Gs.x=r.normal.x>0?e.max.x:e.min.x,Gs.y=r.normal.y>0?e.max.y:e.min.y,Gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,h=l.usage,m=f.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,f,h),l.onUploadCallback();let M;if(f instanceof Float32Array)M=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=n.SHORT;else if(f instanceof Uint32Array)M=n.UNSIGNED_INT;else if(f instanceof Int32Array)M=n.INT;else if(f instanceof Int8Array)M=n.BYTE;else if(f instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,f){const h=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(f,l),m.count===-1&&v.length===0&&n.bufferSubData(f,0,h),v.length!==0){for(let M=0,E=v.length;M<E;M++){const p=v[M];t?n.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,r(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class Ti extends bi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,m=[],v=[],M=[],E=[];for(let p=0;p<u;p++){const R=p*h-o;for(let S=0;S<l;S++){const L=S*f-s;v.push(L,-R,0),M.push(0,0,1),E.push(S/a),E.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<a;R++){const S=R+l*p,L=R+l*(p+1),N=R+1+l*(p+1),I=R+1+l*p;m.push(S,L,I),m.push(L,N,I)}this.setIndex(m),this.setAttribute("position",new Wn(v,3)),this.setAttribute("normal",new Wn(M,3)),this.setAttribute("uv",new Wn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bp=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`
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
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,hm=`struct PhysicalMaterial {
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,xg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,zg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:Ep,alphatest_pars_fragment:vp,aomap_fragment:Mp,aomap_pars_fragment:xp,batching_pars_vertex:Sp,batching_vertex:yp,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:wp,iridescence_fragment:bp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Dp,color_pars_fragment:Op,color_pars_vertex:Np,color_vertex:Up,common:Fp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Hp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Vp,colorspace_fragment:Wp,colorspace_pars_fragment:$p,envmap_fragment:Xp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:qp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:am,envmap_vertex:Zp,fog_vertex:jp,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:rm,lights_lambert_pars_fragment:sm,lights_pars_begin:om,lights_toon_fragment:cm,lights_toon_pars_fragment:lm,lights_phong_fragment:um,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:hm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:Mm,map_fragment:xm,map_pars_fragment:Sm,map_particle_fragment:ym,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:wm,morphcolor_vertex:bm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Cm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Dm,normal_pars_vertex:Om,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:Hm,packing:Gm,premultiplied_alpha_fragment:Vm,project_vertex:Wm,dithering_fragment:$m,dithering_pars_fragment:Xm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Zm,shadowmap_vertex:jm,shadowmask_pars_fragment:Jm,skinbase_vertex:Qm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:og,transmission_fragment:ag,transmission_pars_fragment:cg,uv_pars_fragment:lg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:hg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:_g,cube_frag:Eg,depth_vert:vg,depth_frag:Mg,distanceRGBA_vert:xg,distanceRGBA_frag:Sg,equirect_vert:yg,equirect_frag:Tg,linedashed_vert:Ag,linedashed_frag:wg,meshbasic_vert:bg,meshbasic_frag:Rg,meshlambert_vert:Pg,meshlambert_frag:Cg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:Dg,meshnormal_frag:Og,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Fg,meshphysical_frag:kg,meshtoon_vert:Bg,meshtoon_frag:zg,points_vert:Hg,points_frag:Gg,shadow_vert:Vg,shadow_frag:Wg,sprite_vert:$g,sprite_frag:Xg},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:tn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:tn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:tn([ge.points,ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:tn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:tn([ge.common,ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:tn([ge.sprite,ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:tn([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:tn([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Vs={r:0,b:0,g:0};function Yg(n,e,t,i,r,s,o){const a=new Ve(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function v(E,p){let R=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=(p.backgroundBlurriness>0?t:e).get(S)),S===null?M(a,c):S&&S.isColor&&(M(S,1),R=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||R)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===To)?(u===void 0&&(u=new He(new Xn(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ir(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Et.getTransfer(S.colorSpace)!==Tt,(f!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new He(new Ti(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ir(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Et.getTransfer(S.colorSpace)!==Tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function M(E,p){E.getRGB(Vs,vd(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(E,p=1){a.set(E),c=p,M(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,M(a,c)},render:v}}function qg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=E(null);let l=c,u=!1;function f(k,X,J,ee,ie){let te=!1;if(o){const re=M(ee,J,X);l!==re&&(l=re,m(l.object)),te=p(k,ee,J,ie),te&&R(k,ee,J,ie)}else{const re=X.wireframe===!0;(l.geometry!==ee.id||l.program!==J.id||l.wireframe!==re)&&(l.geometry=ee.id,l.program=J.id,l.wireframe=re,te=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,Y(k,X,J,ee),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function v(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function M(k,X,J){const ee=J.wireframe===!0;let ie=a[k.id];ie===void 0&&(ie={},a[k.id]=ie);let te=ie[X.id];te===void 0&&(te={},ie[X.id]=te);let re=te[ee];return re===void 0&&(re=E(h()),te[ee]=re),re}function E(k){const X=[],J=[],ee=[];for(let ie=0;ie<r;ie++)X[ie]=0,J[ie]=0,ee[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:ee,object:k,attributes:{},index:null}}function p(k,X,J,ee){const ie=l.attributes,te=X.attributes;let re=0;const ce=J.getAttributes();for(const xe in ce)if(ce[xe].location>=0){const oe=ie[xe];let Me=te[xe];if(Me===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(Me=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(Me=k.instanceColor)),oe===void 0||oe.attribute!==Me||Me&&oe.data!==Me.data)return!0;re++}return l.attributesNum!==re||l.index!==ee}function R(k,X,J,ee){const ie={},te=X.attributes;let re=0;const ce=J.getAttributes();for(const xe in ce)if(ce[xe].location>=0){let oe=te[xe];oe===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));const Me={};Me.attribute=oe,oe&&oe.data&&(Me.data=oe.data),ie[xe]=Me,re++}l.attributes=ie,l.attributesNum=re,l.index=ee}function S(){const k=l.newAttributes;for(let X=0,J=k.length;X<J;X++)k[X]=0}function L(k){N(k,0)}function N(k,X){const J=l.newAttributes,ee=l.enabledAttributes,ie=l.attributeDivisors;J[k]=1,ee[k]===0&&(n.enableVertexAttribArray(k),ee[k]=1),ie[k]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),ie[k]=X)}function I(){const k=l.newAttributes,X=l.enabledAttributes;for(let J=0,ee=X.length;J<ee;J++)X[J]!==k[J]&&(n.disableVertexAttribArray(J),X[J]=0)}function b(k,X,J,ee,ie,te,re){re===!0?n.vertexAttribIPointer(k,X,J,ie,te):n.vertexAttribPointer(k,X,J,ee,ie,te)}function Y(k,X,J,ee){if(i.isWebGL2===!1&&(k.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const ie=ee.attributes,te=J.getAttributes(),re=X.defaultAttributeValues;for(const ce in te){const xe=te[ce];if(xe.location>=0){let Z=ie[ce];if(Z===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),Z!==void 0){const oe=Z.normalized,Me=Z.itemSize,we=t.get(Z);if(we===void 0)continue;const Ie=we.buffer,Xe=we.type,Ye=we.bytesPerElement,ke=i.isWebGL2===!0&&(Xe===n.INT||Xe===n.UNSIGNED_INT||Z.gpuType===nd);if(Z.isInterleavedBufferAttribute){const rt=Z.data,$=rt.stride,ft=Z.offset;if(rt.isInstancedInterleavedBuffer){for(let Ne=0;Ne<xe.locationSize;Ne++)N(xe.location+Ne,rt.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ne=0;Ne<xe.locationSize;Ne++)L(xe.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ne=0;Ne<xe.locationSize;Ne++)b(xe.location+Ne,Me/xe.locationSize,Xe,oe,$*Ye,(ft+Me/xe.locationSize*Ne)*Ye,ke)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<xe.locationSize;rt++)N(xe.location+rt,Z.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<xe.locationSize;rt++)L(xe.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let rt=0;rt<xe.locationSize;rt++)b(xe.location+rt,Me/xe.locationSize,Xe,oe,Me*Ye,Me/xe.locationSize*rt*Ye,ke)}}else if(re!==void 0){const oe=re[ce];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(xe.location,oe);break;case 3:n.vertexAttrib3fv(xe.location,oe);break;case 4:n.vertexAttrib4fv(xe.location,oe);break;default:n.vertexAttrib1fv(xe.location,oe)}}}}I()}function w(){Q();for(const k in a){const X=a[k];for(const J in X){const ee=X[J];for(const ie in ee)v(ee[ie].object),delete ee[ie];delete X[J]}delete a[k]}}function C(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const J in X){const ee=X[J];for(const ie in ee)v(ee[ie].object),delete ee[ie];delete X[J]}delete a[k.id]}function V(k){for(const X in a){const J=a[X];if(J[k.id]===void 0)continue;const ee=J[k.id];for(const ie in ee)v(ee[ie].object),delete ee[ie];delete J[k.id]}}function Q(){fe(),u=!0,l!==c&&(l=c,m(l.object))}function fe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:fe,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:V,initAttributes:S,enableAttribute:L,disableUnusedAttributes:I}}function Kg(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,h){if(h===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,f,h),t.update(f,s,h)}function l(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,h);let v=0;for(let M=0;M<h;M++)v+=f[M];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Zg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,L=o||e.has("OES_texture_float"),N=S&&L,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:E,maxVaryings:p,maxFragmentUniforms:R,vertexTextures:S,floatFragmentTextures:L,floatVertexTextures:N,maxSamples:I}}function jg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Fi,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,M=f.clipIntersection,E=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!E)s?u(null):l();else{const R=s?0:i,S=R*4;let L=p.clippingState||null;c.value=L,L=u(v,h,S,m);for(let N=0;N!==S;++N)L[N]=t[N];p.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const M=f!==null?f.length:0;let E=null;if(M!==0){if(E=c.value,v!==!0||E===null){const p=m+M*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(E===null||E.length<p)&&(E=new Float32Array(p));for(let S=0,L=m;S!==M;++S,L+=4)o.copy(f[S]).applyMatrix4(R,a),o.normal.toArray(E,L),E[L+3]=o.constant}c.value=E,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,E}}function Jg(n){let e=new WeakMap;function t(o,a){return a===Oa?o.mapping=Rr:a===Na&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oa||a===Na)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new up(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class yd extends Md{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,Ul=[.125,.215,.35,.446,.526,.582],zi=20,ua=new yd,Fl=new Ve;let da=null,fa=0,ha=0;const ki=(1+Math.sqrt(5))/2,pr=1/ki,kl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,ki,pr),new G(0,ki,-pr),new G(pr,0,ki),new G(-pr,0,ki),new G(ki,pr,0),new G(-ki,pr,0)];class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,fa,ha),e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:ls,format:Ln,colorSpace:ni,depthBuffer:!1},r=zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(s)),this._blurMaterial=e_(s,e,t)}return r}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,i,r){const a=new vn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fl),u.toneMapping=xi,u.autoClear=!1;const m=new Lr({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),v=new He(new Xn,m);let M=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,M=!0):(m.color.copy(Fl),M=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):R===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Ws(r,R*S,p>2?S:0,S,S),u.setRenderTarget(r),M&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kl[(r-1)%kl.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new He(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zi-1),M=s/v,E=isFinite(s)?1+Math.floor(u*M):zi;E>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${zi}`);const p=[];let R=0;for(let b=0;b<zi;++b){const Y=b/M,w=Math.exp(-Y*Y/2);p.push(w),b===0?R+=w:b<E&&(R+=2*w)}for(let b=0;b<p.length;b++)p[b]=p[b]/R;h.envMap.value=e.texture,h.samples.value=E,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-i;const L=this._sizeLods[r],N=3*L*(r>S-Mr?r-S+Mr:0),I=4*(this._cubeSize-L);Ws(t,N,I,3*L,2*L),c.setRenderTarget(t),c.render(f,ua)}}function Qg(n){const e=[],t=[],i=[];let r=n;const s=n-Mr+1+Ul.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Mr?c=Ul[o-n+Mr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,M=3,E=2,p=1,R=new Float32Array(M*v*m),S=new Float32Array(E*v*m),L=new Float32Array(p*v*m);for(let I=0;I<m;I++){const b=I%3*2/3-1,Y=I>2?0:-1,w=[b,Y,0,b+2/3,Y,0,b+2/3,Y+1,0,b,Y,0,b+2/3,Y+1,0,b,Y+1,0];R.set(w,M*v*I),S.set(h,E*v*I);const C=[I,I,I,I,I,I];L.set(C,p*v*I)}const N=new bi;N.setAttribute("position",new Dn(R,M)),N.setAttribute("uv",new Dn(S,E)),N.setAttribute("faceIndex",new Dn(L,p)),e.push(N),r>Mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zl(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function e_(n,e,t){const i=new Float32Array(zi),r=new G(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Hl(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Gl(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function t_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Oa||c===Na,u=c===Rr||c===Pr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Bl(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Bl(n));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function n_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function i_(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const M=h.morphAttributes[v];for(let E=0,p=M.length;E<p;E++)e.remove(M[E])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const M=m[v];for(let E=0,p=M.length;E<p;E++)e.update(M[E],n.ARRAY_BUFFER)}}function l(f){const h=[],m=f.index,v=f.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let S=0,L=R.length;S<L;S+=3){const N=R[S+0],I=R[S+1],b=R[S+2];h.push(N,I,I,b,b,N)}}else if(v!==void 0){const R=v.array;M=v.version;for(let S=0,L=R.length/3-1;S<L;S+=3){const N=S+0,I=S+1,b=S+2;h.push(N,I,I,b,b,N)}}else return;const E=new(dd(h)?Ed:_d)(h,1);E.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,E)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function r_(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,v){n.drawElements(s,v,a,m*c),t.update(v,s,1)}function f(m,v,M){if(M===0)return;let E,p;if(r)E=n,p="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[p](s,v,a,m*c,M),t.update(v,s,M)}function h(m,v,M){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let p=0;p<M;p++)this.render(m[p]/c,v[p]);else{E.multiDrawElementsWEBGL(s,v,0,a,m,0,M);let p=0;for(let R=0;R<M;R++)p+=v[R];t.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function s_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function o_(n,e){return n[0]-e[0]}function a_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function c_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let M=s.get(u);if(M===void 0||M.count!==v){let k=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",k)};M!==void 0&&M.texture.dispose();const R=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let Y=0;R===!0&&(Y=1),S===!0&&(Y=2),L===!0&&(Y=3);let w=u.attributes.position.count*Y,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const V=new Float32Array(w*C*4*v),Q=new pd(V,w,C,v);Q.type=Ei,Q.needsUpdate=!0;const fe=Y*4;for(let X=0;X<v;X++){const J=N[X],ee=I[X],ie=b[X],te=w*C*4*X;for(let re=0;re<J.count;re++){const ce=re*fe;R===!0&&(o.fromBufferAttribute(J,re),V[te+ce+0]=o.x,V[te+ce+1]=o.y,V[te+ce+2]=o.z,V[te+ce+3]=0),S===!0&&(o.fromBufferAttribute(ee,re),V[te+ce+4]=o.x,V[te+ce+5]=o.y,V[te+ce+6]=o.z,V[te+ce+7]=0),L===!0&&(o.fromBufferAttribute(ie,re),V[te+ce+8]=o.x,V[te+ce+9]=o.y,V[te+ce+10]=o.z,V[te+ce+11]=ie.itemSize===4?o.w:1)}}M={count:v,texture:Q,size:new lt(w,C)},s.set(u,M),u.addEventListener("dispose",k)}let E=0;for(let R=0;R<h.length;R++)E+=h[R];const p=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",M.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",M.size)}else{const m=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let S=0;S<m;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<m;S++){const L=v[S];L[0]=S,L[1]=h[S]}v.sort(a_);for(let S=0;S<8;S++)S<m&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(o_);const M=u.morphAttributes.position,E=u.morphAttributes.normal;let p=0;for(let S=0;S<8;S++){const L=a[S],N=L[0],I=L[1];N!==Number.MAX_SAFE_INTEGER&&I?(M&&u.getAttribute("morphTarget"+S)!==M[N]&&u.setAttribute("morphTarget"+S,M[N]),E&&u.getAttribute("morphNormal"+S)!==E[N]&&u.setAttribute("morphNormal"+S,E[N]),r[S]=I,p+=I):(M&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),E&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const R=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",R),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function l_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Td extends un{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gi&&(i=_i),i===void 0&&u===Cr&&(i=Hi),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ad=new un,wd=new Td(1,1);wd.compareFunction=ud;const bd=new pd,Rd=new Xh,Pd=new xd,Vl=[],Wl=[],$l=new Float32Array(16),Xl=new Float32Array(9),Yl=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vl[r];if(s===void 0&&(s=new Float32Array(r),Vl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bo(n,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;Yl.set(i),n.uniformMatrix2fv(this.addr,!1,Yl),kt(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;Xl.set(i),n.uniformMatrix3fv(this.addr,!1,Xl),kt(t,i)}}function g_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),kt(t,i)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function x_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function A_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?wd:Ad;t.setTexture2D(e||s,r)}function w_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rd,r)}function b_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pd,r)}function R_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bd,r)}function P_(n){switch(n){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return h_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return E_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return x_;case 36294:return S_;case 36295:return y_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return R_}}function C_(n,e){n.uniform1fv(this.addr,e)}function L_(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function I_(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function D_(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function O_(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N_(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U_(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F_(n,e){n.uniform1iv(this.addr,e)}function k_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function z_(n,e){n.uniform4iv(this.addr,e)}function H_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function V_(n,e){n.uniform3uiv(this.addr,e)}function W_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ad,s[o])}function X_(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Rd,s[o])}function Y_(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Pd,s[o])}function q_(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bd,s[o])}function K_(n){switch(n){case 5126:return C_;case 35664:return L_;case 35665:return I_;case 35666:return D_;case 35674:return O_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return k_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return q_}}class Z_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function ql(n,e){n.seq.push(e),n.map[e.id]=e}function Q_(n,e,t){const i=n.name,r=i.length;for(pa.lastIndex=0;;){const s=pa.exec(i),o=pa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ql(t,l===void 0?new Z_(a,n,e):new j_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new J_(a),ql(t,f)),t=f}}}class eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Q_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const e0=37297;let t0=0;function n0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function i0(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let i;switch(e===t?i="":e===uo&&t===lo?i="LinearDisplayP3ToLinearSRGB":e===lo&&t===uo&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case Ao:return[i,"LinearTransferOETF"];case Nt:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+n0(n.getShaderSource(e),o)}else return r}function r0(n,e){const t=i0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function s0(n,e){let t;switch(e){case th:t="Linear";break;case nh:t="Reinhard";break;case ih:t="OptimizedCineon";break;case rh:t="ACESFilmic";break;case oh:t="AgX";break;case sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function o0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function a0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xr).join(`
`)}function c0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function l0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xr(n){return n!==""}function jl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(u0,f0)}const d0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function f0(n,e){let t=tt[e];if(t===void 0){const i=d0.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(n){return n.replace(h0,p0)}function p0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function g0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Pr:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function E0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case eh:e="ENVMAP_BLENDING_ADD";break}return e}function v0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function M0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=m0(t),l=g0(t),u=_0(t),f=E0(t),h=v0(t),m=t.isWebGL2?"":o0(t),v=a0(t),M=c0(s),E=r.createProgram();let p,R,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xr).join(`
`),p.length>0&&(p+=`
`),R=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xr).join(`
`),R.length>0&&(R+=`
`)):(p=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),R=[m,eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?tt.tonemapping_pars_fragment:"",t.toneMapping!==xi?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,r0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=Ba(o),o=jl(o,t),o=Jl(o,t),a=Ba(a),a=jl(a,t),a=Jl(a,t),o=Ql(o),a=Ql(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const L=S+p+o,N=S+R+a,I=Kl(r,r.VERTEX_SHADER,L),b=Kl(r,r.FRAGMENT_SHADER,N);r.attachShader(E,I),r.attachShader(E,b),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function Y(Q){if(n.debug.checkShaderErrors){const fe=r.getProgramInfoLog(E).trim(),k=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(b).trim();let J=!0,ee=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,I,b);else{const ie=Zl(r,I,"vertex"),te=Zl(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+ie+`
`+te)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(k===""||X==="")&&(ee=!1);ee&&(Q.diagnostics={runnable:J,programLog:fe,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:R}})}r.deleteShader(I),r.deleteShader(b),w=new eo(r,E),C=l0(r,E)}let w;this.getUniforms=function(){return w===void 0&&Y(this),w};let C;this.getAttributes=function(){return C===void 0&&Y(this),C};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(E,e0)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=b,this}let x0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new y0(e),t.set(e,i)),i}}class y0{constructor(e){this.id=x0++,this.code=e,this.usedTimes=0}}function T0(n,e,t,i,r,s,o){const a=new md,c=new S0,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return w===0?"uv":`uv${w}`}function E(w,C,V,Q,fe){const k=Q.fog,X=fe.geometry,J=w.isMeshStandardMaterial?Q.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),ie=ee&&ee.mapping===To?ee.image.height:null,te=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=re!==void 0?re.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let Z,oe,Me,we;if(te){const Gt=Bn[te];Z=Gt.vertexShader,oe=Gt.fragmentShader}else Z=w.vertexShader,oe=w.fragmentShader,c.update(w),Me=c.getVertexShaderID(w),we=c.getFragmentShaderID(w);const Ie=n.getRenderTarget(),Xe=fe.isInstancedMesh===!0,Ye=fe.isBatchedMesh===!0,ke=!!w.map,rt=!!w.matcap,$=!!ee,ft=!!w.aoMap,Ne=!!w.lightMap,$e=!!w.bumpMap,be=!!w.normalMap,pt=!!w.displacementMap,Ke=!!w.emissiveMap,P=!!w.metalnessMap,A=!!w.roughnessMap,W=w.anisotropy>0,ue=w.clearcoat>0,le=w.iridescence>0,de=w.sheen>0,Pe=w.transmission>0,_e=W&&!!w.anisotropyMap,ye=ue&&!!w.clearcoatMap,Be=ue&&!!w.clearcoatNormalMap,qe=ue&&!!w.clearcoatRoughnessMap,se=le&&!!w.iridescenceMap,ht=le&&!!w.iridescenceThicknessMap,et=de&&!!w.sheenColorMap,We=de&&!!w.sheenRoughnessMap,Re=!!w.specularMap,Te=!!w.specularColorMap,Ze=!!w.specularIntensityMap,at=Pe&&!!w.transmissionMap,St=Pe&&!!w.thicknessMap,je=!!w.gradientMap,he=!!w.alphaMap,O=w.alphaTest>0,ve=!!w.alphaHash,Ee=!!w.extensions,ze=!!X.attributes.uv1,Fe=!!X.attributes.uv2,gt=!!X.attributes.uv3;let _t=xi;return w.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(_t=n.toneMapping),{isWebGL2:u,shaderID:te,shaderType:w.type,shaderName:w.name,vertexShader:Z,fragmentShader:oe,defines:w.defines,customVertexShaderID:Me,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ye,instancing:Xe,instancingColor:Xe&&fe.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:ni,map:ke,matcap:rt,envMap:$,envMapMode:$&&ee.mapping,envMapCubeUVHeight:ie,aoMap:ft,lightMap:Ne,bumpMap:$e,normalMap:be,displacementMap:h&&pt,emissiveMap:Ke,normalMapObjectSpace:be&&w.normalMapType===Eh,normalMapTangentSpace:be&&w.normalMapType===tc,metalnessMap:P,roughnessMap:A,anisotropy:W,anisotropyMap:_e,clearcoat:ue,clearcoatMap:ye,clearcoatNormalMap:Be,clearcoatRoughnessMap:qe,iridescence:le,iridescenceMap:se,iridescenceThicknessMap:ht,sheen:de,sheenColorMap:et,sheenRoughnessMap:We,specularMap:Re,specularColorMap:Te,specularIntensityMap:Ze,transmission:Pe,transmissionMap:at,thicknessMap:St,gradientMap:je,opaque:w.transparent===!1&&w.blending===yr,alphaMap:he,alphaTest:O,alphaHash:ve,combine:w.combine,mapUv:ke&&M(w.map.channel),aoMapUv:ft&&M(w.aoMap.channel),lightMapUv:Ne&&M(w.lightMap.channel),bumpMapUv:$e&&M(w.bumpMap.channel),normalMapUv:be&&M(w.normalMap.channel),displacementMapUv:pt&&M(w.displacementMap.channel),emissiveMapUv:Ke&&M(w.emissiveMap.channel),metalnessMapUv:P&&M(w.metalnessMap.channel),roughnessMapUv:A&&M(w.roughnessMap.channel),anisotropyMapUv:_e&&M(w.anisotropyMap.channel),clearcoatMapUv:ye&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&M(w.sheenRoughnessMap.channel),specularMapUv:Re&&M(w.specularMap.channel),specularColorMapUv:Te&&M(w.specularColorMap.channel),specularIntensityMapUv:Ze&&M(w.specularIntensityMap.channel),transmissionMapUv:at&&M(w.transmissionMap.channel),thicknessMapUv:St&&M(w.thicknessMap.channel),alphaMapUv:he&&M(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||W),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Fe,vertexUv3s:gt,pointsUvs:fe.isPoints===!0&&!!X.attributes.uv&&(ke||he),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:fe.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zt,flipSided:w.side===Jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ee&&w.extensions.derivatives===!0,extensionFragDepth:Ee&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(R(C,w),S(C,w),C.push(n.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function R(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function S(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),w.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function L(w){const C=v[w.type];let V;if(C){const Q=Bn[C];V=op.clone(Q.uniforms)}else V=w.uniforms;return V}function N(w,C){let V;for(let Q=0,fe=l.length;Q<fe;Q++){const k=l[Q];if(k.cacheKey===C){V=k,++V.usedTimes;break}}return V===void 0&&(V=new M0(n,C,w,s),l.push(V)),V}function I(w){if(--w.usedTimes===0){const C=l.indexOf(w);l[C]=l[l.length-1],l.pop(),w.destroy()}}function b(w){c.remove(w)}function Y(){c.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:L,acquireProgram:N,releaseProgram:I,releaseShaderCache:b,programs:l,dispose:Y}}function A0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function w0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,v,M,E){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:E},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=M,p.group=E),e++,p}function a(f,h,m,v,M,E){const p=o(f,h,m,v,M,E);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function c(f,h,m,v,M,E){const p=o(f,h,m,v,M,E);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||w0),i.length>1&&i.sort(h||tu),r.length>1&&r.sort(h||tu)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function b0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nu,n.set(i,[o])):r>=s.length?(o=new nu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function R0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ve};break;case"SpotLight":t={position:new G,direction:new G,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let C0=0;function L0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function I0(n,e){const t=new R0,i=P0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new wt,a=new wt;function c(u,f){let h=0,m=0,v=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let M=0,E=0,p=0,R=0,S=0,L=0,N=0,I=0,b=0,Y=0,w=0;u.sort(L0);const C=f===!0?Math.PI:1;for(let Q=0,fe=u.length;Q<fe;Q++){const k=u[Q],X=k.color,J=k.intensity,ee=k.distance,ie=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=X.r*J*C,m+=X.g*J*C,v+=X.b*J*C;else if(k.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(k.sh.coefficients[te],J);w++}else if(k.isDirectionalLight){const te=t.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const re=k.shadow,ce=i.get(k);ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,r.directionalShadow[M]=ce,r.directionalShadowMap[M]=ie,r.directionalShadowMatrix[M]=k.shadow.matrix,L++}r.directional[M]=te,M++}else if(k.isSpotLight){const te=t.get(k);te.position.setFromMatrixPosition(k.matrixWorld),te.color.copy(X).multiplyScalar(J*C),te.distance=ee,te.coneCos=Math.cos(k.angle),te.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),te.decay=k.decay,r.spot[p]=te;const re=k.shadow;if(k.map&&(r.spotLightMap[b]=k.map,b++,re.updateMatrices(k),k.castShadow&&Y++),r.spotLightMatrix[p]=re.matrix,k.castShadow){const ce=i.get(k);ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,r.spotShadow[p]=ce,r.spotShadowMap[p]=ie,I++}p++}else if(k.isRectAreaLight){const te=t.get(k);te.color.copy(X).multiplyScalar(J),te.halfWidth.set(k.width*.5,0,0),te.halfHeight.set(0,k.height*.5,0),r.rectArea[R]=te,R++}else if(k.isPointLight){const te=t.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity*C),te.distance=k.distance,te.decay=k.decay,k.castShadow){const re=k.shadow,ce=i.get(k);ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,ce.shadowCameraNear=re.camera.near,ce.shadowCameraFar=re.camera.far,r.pointShadow[E]=ce,r.pointShadowMap[E]=ie,r.pointShadowMatrix[E]=k.shadow.matrix,N++}r.point[E]=te,E++}else if(k.isHemisphereLight){const te=t.get(k);te.skyColor.copy(k.color).multiplyScalar(J*C),te.groundColor.copy(k.groundColor).multiplyScalar(J*C),r.hemi[S]=te,S++}}R>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==M||V.pointLength!==E||V.spotLength!==p||V.rectAreaLength!==R||V.hemiLength!==S||V.numDirectionalShadows!==L||V.numPointShadows!==N||V.numSpotShadows!==I||V.numSpotMaps!==b||V.numLightProbes!==w)&&(r.directional.length=M,r.spot.length=p,r.rectArea.length=R,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=I+b-Y,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=w,V.directionalLength=M,V.pointLength=E,V.spotLength=p,V.rectAreaLength=R,V.hemiLength=S,V.numDirectionalShadows=L,V.numPointShadows=N,V.numSpotShadows=I,V.numSpotMaps=b,V.numLightProbes=w,r.version=C0++)}function l(u,f){let h=0,m=0,v=0,M=0,E=0;const p=f.matrixWorldInverse;for(let R=0,S=u.length;R<S;R++){const L=u[R];if(L.isDirectionalLight){const N=r.directional[h];N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(p),h++}else if(L.isSpotLight){const N=r.spot[v];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(p),v++}else if(L.isRectAreaLight){const N=r.rectArea[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(p),a.identity(),o.copy(L.matrixWorld),o.premultiply(p),a.extractRotation(o),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),M++}else if(L.isPointLight){const N=r.point[m];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(p),m++}else if(L.isHemisphereLight){const N=r.hemi[E];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(p),E++}}}return{setup:c,setupView:l,state:r}}function iu(n,e){const t=new I0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function D0(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new iu(n,e),t.set(s,[c])):o>=a.length?(c=new iu(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class O0 extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N0 extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function k0(n,e,t){let i=new rc;const r=new lt,s=new lt,o=new Ht,a=new O0({depthPacking:_h}),c=new N0,l={},u=t.maxTextureSize,f={[cn]:Jt,[Jt]:cn,[zt]:zt},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:U0,fragmentShader:F0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new bi;v.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new He(v,h),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let p=this.type;this.render=function(I,b,Y){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||I.length===0)return;const w=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(Mi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const fe=p!==Qn&&this.type===Qn,k=p===Qn&&this.type!==Qn;for(let X=0,J=I.length;X<J;X++){const ee=I[X],ie=ee.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const te=ie.getFrameExtents();if(r.multiply(te),s.copy(ie.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,ie.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,ie.mapSize.y=s.y)),ie.map===null||fe===!0||k===!0){const ce=this.type!==Qn?{minFilter:Lt,magFilter:Lt}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Xi(r.x,r.y,ce),ie.map.texture.name=ee.name+".shadowMap",ie.camera.updateProjectionMatrix()}n.setRenderTarget(ie.map),n.clear();const re=ie.getViewportCount();for(let ce=0;ce<re;ce++){const xe=ie.getViewport(ce);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),Q.viewport(o),ie.updateMatrices(ee,ce),i=ie.getFrustum(),L(b,Y,ie.camera,ee,this.type)}ie.isPointLightShadow!==!0&&this.type===Qn&&R(ie,Y),ie.needsUpdate=!1}p=this.type,E.needsUpdate=!1,n.setRenderTarget(w,C,V)};function R(I,b){const Y=e.update(M);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xi(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,Y,h,M,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,Y,m,M,null)}function S(I,b,Y,w){let C=null;const V=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)C=V;else if(C=Y.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Q=C.uuid,fe=b.uuid;let k=l[Q];k===void 0&&(k={},l[Q]=k);let X=k[fe];X===void 0&&(X=C.clone(),k[fe]=X,b.addEventListener("dispose",N)),C=X}if(C.visible=b.visible,C.wireframe=b.wireframe,w===Qn?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:f[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=n.properties.get(C);Q.light=Y}return C}function L(I,b,Y,w,C){if(I.visible===!1)return;if(I.layers.test(b.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Qn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const fe=e.update(I),k=I.material;if(Array.isArray(k)){const X=fe.groups;for(let J=0,ee=X.length;J<ee;J++){const ie=X[J],te=k[ie.materialIndex];if(te&&te.visible){const re=S(I,te,w,C);I.onBeforeShadow(n,I,b,Y,fe,re,ie),n.renderBufferDirect(Y,null,fe,re,I,ie),I.onAfterShadow(n,I,b,Y,fe,re,ie)}}}else if(k.visible){const X=S(I,k,w,C);I.onBeforeShadow(n,I,b,Y,fe,X,null),n.renderBufferDirect(Y,null,fe,X,I,null),I.onAfterShadow(n,I,b,Y,fe,X,null)}}const Q=I.children;for(let fe=0,k=Q.length;fe<k;fe++)L(Q[fe],b,Y,w,C)}function N(I){I.target.removeEventListener("dispose",N);for(const Y in l){const w=l[Y],C=I.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function B0(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const ve=new Ht;let Ee=null;const ze=new Ht(0,0,0,0);return{setMask:function(Fe){Ee!==Fe&&!O&&(n.colorMask(Fe,Fe,Fe,Fe),Ee=Fe)},setLocked:function(Fe){O=Fe},setClear:function(Fe,gt,_t,ut,Gt){Gt===!0&&(Fe*=ut,gt*=ut,_t*=ut),ve.set(Fe,gt,_t,ut),ze.equals(ve)===!1&&(n.clearColor(Fe,gt,_t,ut),ze.copy(ve))},reset:function(){O=!1,Ee=null,ze.set(-1,0,0,0)}}}function s(){let O=!1,ve=null,Ee=null,ze=null;return{setTest:function(Fe){Fe?Ye(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(Fe){ve!==Fe&&!O&&(n.depthMask(Fe),ve=Fe)},setFunc:function(Fe){if(Ee!==Fe){switch(Fe){case Xf:n.depthFunc(n.NEVER);break;case Yf:n.depthFunc(n.ALWAYS);break;case qf:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case Kf:n.depthFunc(n.EQUAL);break;case Zf:n.depthFunc(n.GEQUAL);break;case jf:n.depthFunc(n.GREATER);break;case Jf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Fe}},setLocked:function(Fe){O=Fe},setClear:function(Fe){ze!==Fe&&(n.clearDepth(Fe),ze=Fe)},reset:function(){O=!1,ve=null,Ee=null,ze=null}}}function o(){let O=!1,ve=null,Ee=null,ze=null,Fe=null,gt=null,_t=null,ut=null,Gt=null;return{setTest:function(ot){O||(ot?Ye(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(ot){ve!==ot&&!O&&(n.stencilMask(ot),ve=ot)},setFunc:function(ot,It,on){(Ee!==ot||ze!==It||Fe!==on)&&(n.stencilFunc(ot,It,on),Ee=ot,ze=It,Fe=on)},setOp:function(ot,It,on){(gt!==ot||_t!==It||ut!==on)&&(n.stencilOp(ot,It,on),gt=ot,_t=It,ut=on)},setLocked:function(ot){O=ot},setClear:function(ot){Gt!==ot&&(n.clearStencil(ot),Gt=ot)},reset:function(){O=!1,ve=null,Ee=null,ze=null,Fe=null,gt=null,_t=null,ut=null,Gt=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,M=[],E=null,p=!1,R=null,S=null,L=null,N=null,I=null,b=null,Y=null,w=new Ve(0,0,0),C=0,V=!1,Q=null,fe=null,k=null,X=null,J=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,te=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(re)[1]),ie=te>=1):re.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ie=te>=2);let ce=null,xe={};const Z=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Me=new Ht().fromArray(Z),we=new Ht().fromArray(oe);function Ie(O,ve,Ee,ze){const Fe=new Uint8Array(4),gt=n.createTexture();n.bindTexture(O,gt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<Ee;_t++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(ve+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return gt}const Xe={};Xe[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Xe[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Xe[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Xe[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ye(n.DEPTH_TEST),c.setFunc(ao),Ke(!1),P(kc),Ye(n.CULL_FACE),be(Mi);function Ye(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ke(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function rt(O,ve){return m[O]!==ve?(n.bindFramebuffer(O,ve),m[O]=ve,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function $(O,ve){let Ee=M,ze=!1;if(O)if(Ee=v.get(ve),Ee===void 0&&(Ee=[],v.set(ve,Ee)),O.isWebGLMultipleRenderTargets){const Fe=O.texture;if(Ee.length!==Fe.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,_t=Fe.length;gt<_t;gt++)Ee[gt]=n.COLOR_ATTACHMENT0+gt;Ee.length=Fe.length,ze=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,ze=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function ft(O){return E!==O?(n.useProgram(O),E=O,!0):!1}const Ne={[Bi]:n.FUNC_ADD,[Lf]:n.FUNC_SUBTRACT,[If]:n.FUNC_REVERSE_SUBTRACT};if(i)Ne[Hc]=n.MIN,Ne[Gc]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ne[Hc]=O.MIN_EXT,Ne[Gc]=O.MAX_EXT)}const $e={[Df]:n.ZERO,[Of]:n.ONE,[Nf]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[Hf]:n.SRC_ALPHA_SATURATE,[Bf]:n.DST_COLOR,[Ff]:n.DST_ALPHA,[Uf]:n.ONE_MINUS_SRC_COLOR,[Da]:n.ONE_MINUS_SRC_ALPHA,[zf]:n.ONE_MINUS_DST_COLOR,[kf]:n.ONE_MINUS_DST_ALPHA,[Gf]:n.CONSTANT_COLOR,[Vf]:n.ONE_MINUS_CONSTANT_COLOR,[Wf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function be(O,ve,Ee,ze,Fe,gt,_t,ut,Gt,ot){if(O===Mi){p===!0&&(ke(n.BLEND),p=!1);return}if(p===!1&&(Ye(n.BLEND),p=!0),O!==Cf){if(O!==R||ot!==V){if((S!==Bi||I!==Bi)&&(n.blendEquation(n.FUNC_ADD),S=Bi,I=Bi),ot)switch(O){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.ONE,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}L=null,N=null,b=null,Y=null,w.set(0,0,0),C=0,R=O,V=ot}return}Fe=Fe||ve,gt=gt||Ee,_t=_t||ze,(ve!==S||Fe!==I)&&(n.blendEquationSeparate(Ne[ve],Ne[Fe]),S=ve,I=Fe),(Ee!==L||ze!==N||gt!==b||_t!==Y)&&(n.blendFuncSeparate($e[Ee],$e[ze],$e[gt],$e[_t]),L=Ee,N=ze,b=gt,Y=_t),(ut.equals(w)===!1||Gt!==C)&&(n.blendColor(ut.r,ut.g,ut.b,Gt),w.copy(ut),C=Gt),R=O,V=!1}function pt(O,ve){O.side===zt?ke(n.CULL_FACE):Ye(n.CULL_FACE);let Ee=O.side===Jt;ve&&(Ee=!Ee),Ke(Ee),O.blending===yr&&O.transparent===!1?be(Mi):be(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const ze=O.stencilWrite;l.setTest(ze),ze&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),W(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){Q!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),Q=O)}function P(O){O!==Rf?(Ye(n.CULL_FACE),O!==fe&&(O===kc?n.cullFace(n.BACK):O===Pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),fe=O}function A(O){O!==k&&(ie&&n.lineWidth(O),k=O)}function W(O,ve,Ee){O?(Ye(n.POLYGON_OFFSET_FILL),(X!==ve||J!==Ee)&&(n.polygonOffset(ve,Ee),X=ve,J=Ee)):ke(n.POLYGON_OFFSET_FILL)}function ue(O){O?Ye(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function le(O){O===void 0&&(O=n.TEXTURE0+ee-1),ce!==O&&(n.activeTexture(O),ce=O)}function de(O,ve,Ee){Ee===void 0&&(ce===null?Ee=n.TEXTURE0+ee-1:Ee=ce);let ze=xe[Ee];ze===void 0&&(ze={type:void 0,texture:void 0},xe[Ee]=ze),(ze.type!==O||ze.texture!==ve)&&(ce!==Ee&&(n.activeTexture(Ee),ce=Ee),n.bindTexture(O,ve||Xe[O]),ze.type=O,ze.texture=ve)}function Pe(){const O=xe[ce];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){Me.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Me.copy(O))}function at(O){we.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function St(O,ve){let Ee=f.get(ve);Ee===void 0&&(Ee=new WeakMap,f.set(ve,Ee));let ze=Ee.get(O);ze===void 0&&(ze=n.getUniformBlockIndex(ve,O.name),Ee.set(O,ze))}function je(O,ve){const ze=f.get(ve).get(O);u.get(ve)!==ze&&(n.uniformBlockBinding(ve,ze,O.__bindingPointIndex),u.set(ve,ze))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,xe={},m={},v=new WeakMap,M=[],E=null,p=!1,R=null,S=null,L=null,N=null,I=null,b=null,Y=null,w=new Ve(0,0,0),C=0,V=!1,Q=null,fe=null,k=null,X=null,J=null,Me.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ye,disable:ke,bindFramebuffer:rt,drawBuffers:$,useProgram:ft,setBlending:be,setMaterial:pt,setFlipSided:Ke,setCullFace:P,setLineWidth:A,setPolygonOffset:W,setScissorTest:ue,activeTexture:le,bindTexture:de,unbindTexture:Pe,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:Re,texImage3D:Te,updateUBOMapping:St,uniformBlockBinding:je,texStorage2D:et,texStorage3D:We,texSubImage2D:Be,texSubImage3D:qe,compressedTexSubImage2D:se,compressedTexSubImage3D:ht,scissor:Ze,viewport:at,reset:he}}function z0(n,e,t,i,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,A){return m?new OffscreenCanvas(P,A):ds("canvas")}function M(P,A,W,ue){let le=1;if((P.width>ue||P.height>ue)&&(le=ue/Math.max(P.width,P.height)),le<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=A?ho:Math.floor,Pe=de(le*P.width),_e=de(le*P.height);f===void 0&&(f=v(Pe,_e));const ye=W?v(Pe,_e):f;return ye.width=Pe,ye.height=_e,ye.getContext("2d").drawImage(P,0,0,Pe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pe+"x"+_e+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function E(P){return ka(P.width)&&ka(P.height)}function p(P){return a?!1:P.wrapS!==Cn||P.wrapT!==Cn||P.minFilter!==Lt&&P.minFilter!==At}function R(P,A){return P.generateMipmaps&&A&&P.minFilter!==Lt&&P.minFilter!==At}function S(P){n.generateMipmap(P)}function L(P,A,W,ue,le=!1){if(a===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=A;if(A===n.RED&&(W===n.FLOAT&&(de=n.R32F),W===n.HALF_FLOAT&&(de=n.R16F),W===n.UNSIGNED_BYTE&&(de=n.R8)),A===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(de=n.R8UI),W===n.UNSIGNED_SHORT&&(de=n.R16UI),W===n.UNSIGNED_INT&&(de=n.R32UI),W===n.BYTE&&(de=n.R8I),W===n.SHORT&&(de=n.R16I),W===n.INT&&(de=n.R32I)),A===n.RG&&(W===n.FLOAT&&(de=n.RG32F),W===n.HALF_FLOAT&&(de=n.RG16F),W===n.UNSIGNED_BYTE&&(de=n.RG8)),A===n.RGBA){const Pe=le?co:Et.getTransfer(ue);W===n.FLOAT&&(de=n.RGBA32F),W===n.HALF_FLOAT&&(de=n.RGBA16F),W===n.UNSIGNED_BYTE&&(de=Pe===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function N(P,A,W){return R(P,W)===!0||P.isFramebufferTexture&&P.minFilter!==Lt&&P.minFilter!==At?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function I(P){return P===Lt||P===Vc||P===Ho?n.NEAREST:n.LINEAR}function b(P){const A=P.target;A.removeEventListener("dispose",b),w(A),A.isVideoTexture&&u.delete(A)}function Y(P){const A=P.target;A.removeEventListener("dispose",Y),V(A)}function w(P){const A=i.get(P);if(A.__webglInit===void 0)return;const W=P.source,ue=h.get(W);if(ue){const le=ue[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(P),Object.keys(ue).length===0&&h.delete(W)}i.remove(P)}function C(P){const A=i.get(P);n.deleteTexture(A.__webglTexture);const W=P.source,ue=h.get(W);delete ue[A.__cacheKey],o.memory.textures--}function V(P){const A=P.texture,W=i.get(P),ue=i.get(A);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(W.__webglFramebuffer[le]))for(let de=0;de<W.__webglFramebuffer[le].length;de++)n.deleteFramebuffer(W.__webglFramebuffer[le][de]);else n.deleteFramebuffer(W.__webglFramebuffer[le]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[le])}else{if(Array.isArray(W.__webglFramebuffer))for(let le=0;le<W.__webglFramebuffer.length;le++)n.deleteFramebuffer(W.__webglFramebuffer[le]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let le=0;le<W.__webglColorRenderbuffer.length;le++)W.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[le]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,de=A.length;le<de;le++){const Pe=i.get(A[le]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(A[le])}i.remove(A),i.remove(P)}let Q=0;function fe(){Q=0}function k(){const P=Q;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),Q+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function J(P,A){const W=i.get(P);if(P.isVideoTexture&&pt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const ue=P.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(W,P,A);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+A)}function ee(P,A){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Me(W,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+A)}function ie(P,A){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Me(W,P,A);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+A)}function te(P,A){const W=i.get(P);if(P.version>0&&W.__version!==P.version){we(W,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+A)}const re={[bn]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},ce={[Lt]:n.NEAREST,[Vc]:n.NEAREST_MIPMAP_NEAREST,[Ho]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[ah]:n.LINEAR_MIPMAP_NEAREST,[Zt]:n.LINEAR_MIPMAP_LINEAR},xe={[vh]:n.NEVER,[Ah]:n.ALWAYS,[Mh]:n.LESS,[ud]:n.LEQUAL,[xh]:n.EQUAL,[Th]:n.GEQUAL,[Sh]:n.GREATER,[yh]:n.NOTEQUAL};function Z(P,A,W){if(W?(n.texParameteri(P,n.TEXTURE_WRAP_S,re[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,re[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,re[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ce[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ce[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Cn||A.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,I(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,I(A.minFilter)),A.minFilter!==Lt&&A.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,xe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Lt||A.minFilter!==Ho&&A.minFilter!==Zt||A.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function oe(P,A){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",b));const ue=A.source;let le=h.get(ue);le===void 0&&(le={},h.set(ue,le));const de=X(A);if(de!==P.__cacheKey){le[de]===void 0&&(le[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),le[de].usedTimes++;const Pe=le[P.__cacheKey];Pe!==void 0&&(le[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(A)),P.__cacheKey=de,P.__webglTexture=le[de].texture}return W}function Me(P,A,W){let ue=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ue=n.TEXTURE_3D);const le=oe(P,A),de=A.source;t.bindTexture(ue,P.__webglTexture,n.TEXTURE0+W);const Pe=i.get(de);if(de.version!==Pe.__version||le===!0){t.activeTexture(n.TEXTURE0+W);const _e=Et.getPrimaries(Et.workingColorSpace),ye=A.colorSpace===Mn?null:Et.getPrimaries(A.colorSpace),Be=A.colorSpace===Mn||_e===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const qe=p(A)&&E(A.image)===!1;let se=M(A.image,qe,!1,r.maxTextureSize);se=Ke(A,se);const ht=E(se)||a,et=s.convert(A.format,A.colorSpace);let We=s.convert(A.type),Re=L(A.internalFormat,et,We,A.colorSpace,A.isVideoTexture);Z(ue,A,ht);let Te;const Ze=A.mipmaps,at=a&&A.isVideoTexture!==!0&&Re!==cd,St=Pe.__version===void 0||le===!0,je=N(A,se,ht);if(A.isDepthTexture)Re=n.DEPTH_COMPONENT,a?A.type===Ei?Re=n.DEPTH_COMPONENT32F:A.type===_i?Re=n.DEPTH_COMPONENT24:A.type===Hi?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:A.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Gi&&Re===n.DEPTH_COMPONENT&&A.type!==ec&&A.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=_i,We=s.convert(A.type)),A.format===Cr&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,A.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Hi,We=s.convert(A.type))),St&&(at?t.texStorage2D(n.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,et,We,null));else if(A.isDataTexture)if(Ze.length>0&&ht){at&&St&&t.texStorage2D(n.TEXTURE_2D,je,Re,Ze[0].width,Ze[0].height);for(let he=0,O=Ze.length;he<O;he++)Te=Ze[he],at?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,et,We,Te.data):t.texImage2D(n.TEXTURE_2D,he,Re,Te.width,Te.height,0,et,We,Te.data);A.generateMipmaps=!1}else at?(St&&t.texStorage2D(n.TEXTURE_2D,je,Re,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,et,We,se.data)):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,et,We,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Re,Ze[0].width,Ze[0].height,se.depth);for(let he=0,O=Ze.length;he<O;he++)Te=Ze[he],A.format!==Ln?et!==null?at?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,se.depth,et,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Re,Te.width,Te.height,se.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,se.depth,et,We,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Re,Te.width,Te.height,se.depth,0,et,We,Te.data)}else{at&&St&&t.texStorage2D(n.TEXTURE_2D,je,Re,Ze[0].width,Ze[0].height);for(let he=0,O=Ze.length;he<O;he++)Te=Ze[he],A.format!==Ln?et!==null?at?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,et,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,et,We,Te.data):t.texImage2D(n.TEXTURE_2D,he,Re,Te.width,Te.height,0,et,We,Te.data)}else if(A.isDataArrayTexture)at?(St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Re,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,et,We,se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,et,We,se.data);else if(A.isData3DTexture)at?(St&&t.texStorage3D(n.TEXTURE_3D,je,Re,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,et,We,se.data)):t.texImage3D(n.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,et,We,se.data);else if(A.isFramebufferTexture){if(St)if(at)t.texStorage2D(n.TEXTURE_2D,je,Re,se.width,se.height);else{let he=se.width,O=se.height;for(let ve=0;ve<je;ve++)t.texImage2D(n.TEXTURE_2D,ve,Re,he,O,0,et,We,null),he>>=1,O>>=1}}else if(Ze.length>0&&ht){at&&St&&t.texStorage2D(n.TEXTURE_2D,je,Re,Ze[0].width,Ze[0].height);for(let he=0,O=Ze.length;he<O;he++)Te=Ze[he],at?t.texSubImage2D(n.TEXTURE_2D,he,0,0,et,We,Te):t.texImage2D(n.TEXTURE_2D,he,Re,et,We,Te);A.generateMipmaps=!1}else at?(St&&t.texStorage2D(n.TEXTURE_2D,je,Re,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,et,We,se)):t.texImage2D(n.TEXTURE_2D,0,Re,et,We,se);R(A,ht)&&S(ue),Pe.__version=de.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function we(P,A,W){if(A.image.length!==6)return;const ue=oe(P,A),le=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);const de=i.get(le);if(le.version!==de.__version||ue===!0){t.activeTexture(n.TEXTURE0+W);const Pe=Et.getPrimaries(Et.workingColorSpace),_e=A.colorSpace===Mn?null:Et.getPrimaries(A.colorSpace),ye=A.colorSpace===Mn||Pe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,qe=A.image[0]&&A.image[0].isDataTexture,se=[];for(let he=0;he<6;he++)!Be&&!qe?se[he]=M(A.image[he],!1,!0,r.maxCubemapSize):se[he]=qe?A.image[he].image:A.image[he],se[he]=Ke(A,se[he]);const ht=se[0],et=E(ht)||a,We=s.convert(A.format,A.colorSpace),Re=s.convert(A.type),Te=L(A.internalFormat,We,Re,A.colorSpace),Ze=a&&A.isVideoTexture!==!0,at=de.__version===void 0||ue===!0;let St=N(A,ht,et);Z(n.TEXTURE_CUBE_MAP,A,et);let je;if(Be){Ze&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,St,Te,ht.width,ht.height);for(let he=0;he<6;he++){je=se[he].mipmaps;for(let O=0;O<je.length;O++){const ve=je[O];A.format!==Ln?We!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O,0,0,ve.width,ve.height,We,Re,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O,Te,ve.width,ve.height,0,We,Re,ve.data)}}}else{je=A.mipmaps,Ze&&at&&(je.length>0&&St++,t.texStorage2D(n.TEXTURE_CUBE_MAP,St,Te,se[0].width,se[0].height));for(let he=0;he<6;he++)if(qe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,se[he].width,se[he].height,We,Re,se[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Te,se[he].width,se[he].height,0,We,Re,se[he].data);for(let O=0;O<je.length;O++){const Ee=je[O].image[he].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O+1,0,0,Ee.width,Ee.height,We,Re,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O+1,Te,Ee.width,Ee.height,0,We,Re,Ee.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Re,se[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Te,We,Re,se[he]);for(let O=0;O<je.length;O++){const ve=je[O];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O+1,0,0,We,Re,ve.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,O+1,Te,We,Re,ve.image[he])}}}R(A,et)&&S(n.TEXTURE_CUBE_MAP),de.__version=le.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ie(P,A,W,ue,le,de){const Pe=s.convert(W.format,W.colorSpace),_e=s.convert(W.type),ye=L(W.internalFormat,Pe,_e,W.colorSpace);if(!i.get(A).__hasExternalTextures){const qe=Math.max(1,A.width>>de),se=Math.max(1,A.height>>de);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,de,ye,qe,se,A.depth,0,Pe,_e,null):t.texImage2D(le,de,ye,qe,se,0,Pe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),be(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,le,i.get(W).__webglTexture,0,$e(A)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,le,i.get(W).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(P,A,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ue=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||be(A)){const le=A.depthTexture;le&&le.isDepthTexture&&(le.type===Ei?ue=n.DEPTH_COMPONENT32F:le.type===_i&&(ue=n.DEPTH_COMPONENT24));const de=$e(A);be(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ue,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ue,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ue=$e(A);W&&be(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,A.width,A.height):be(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ue=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0;le<ue.length;le++){const de=ue[le],Pe=s.convert(de.format,de.colorSpace),_e=s.convert(de.type),ye=L(de.internalFormat,Pe,_e,de.colorSpace),Be=$e(A);W&&be(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ye,A.width,A.height):be(A)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,ye,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ye,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const ue=i.get(A.depthTexture).__webglTexture,le=$e(A);if(A.depthTexture.format===Gi)be(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(A.depthTexture.format===Cr)be(A)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ke(P){const A=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ye(A.__webglFramebuffer,P)}else if(W){A.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ue]),A.__webglDepthbuffer[ue]=n.createRenderbuffer(),Xe(A.__webglDepthbuffer[ue],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Xe(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(P,A,W){const ue=i.get(P);A!==void 0&&Ie(ue.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ke(P)}function $(P){const A=P.texture,W=i.get(P),ue=i.get(A);P.addEventListener("dispose",Y),P.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=A.version,o.memory.textures++);const le=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Pe=E(P)||a;if(le){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let ye=0;ye<A.mipmaps.length;ye++)W.__webglFramebuffer[_e][ye]=n.createFramebuffer()}else W.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)W.__webglFramebuffer[_e]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(de)if(r.drawBuffers){const _e=P.texture;for(let ye=0,Be=_e.length;ye<Be;ye++){const qe=i.get(_e[ye]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&be(P)===!1){const _e=de?A:[A];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ye=0;ye<_e.length;ye++){const Be=_e[ye];W.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ye]);const qe=s.convert(Be.format,Be.colorSpace),se=s.convert(Be.type),ht=L(Be.internalFormat,qe,se,Be.colorSpace,P.isXRRenderTarget===!0),et=$e(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ht,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,W.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Z(n.TEXTURE_CUBE_MAP,A,Pe);for(let _e=0;_e<6;_e++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)Ie(W.__webglFramebuffer[_e][ye],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else Ie(W.__webglFramebuffer[_e],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);R(A,Pe)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const _e=P.texture;for(let ye=0,Be=_e.length;ye<Be;ye++){const qe=_e[ye],se=i.get(qe);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Z(n.TEXTURE_2D,qe,Pe),Ie(W.__webglFramebuffer,P,qe,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),R(qe,Pe)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ue.__webglTexture),Z(_e,A,Pe),a&&A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)Ie(W.__webglFramebuffer[ye],P,A,n.COLOR_ATTACHMENT0,_e,ye);else Ie(W.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,_e,0);R(A,Pe)&&S(_e),t.unbindTexture()}P.depthBuffer&&ke(P)}function ft(P){const A=E(P)||a,W=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ue=0,le=W.length;ue<le;ue++){const de=W[ue];if(R(de,A)){const Pe=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(de).__webglTexture;t.bindTexture(Pe,_e),S(Pe),t.unbindTexture()}}}function Ne(P){if(a&&P.samples>0&&be(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],W=P.width,ue=P.height;let le=n.COLOR_BUFFER_BIT;const de=[],Pe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(P),ye=P.isWebGLMultipleRenderTargets===!0;if(ye)for(let Be=0;Be<A.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Be=0;Be<A.length;Be++){de.push(n.COLOR_ATTACHMENT0+Be),P.depthBuffer&&de.push(Pe);const qe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(qe===!1&&(P.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ye&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Be]),qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Pe])),ye){const se=i.get(A[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,W,ue,0,0,W,ue,le,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Be=0;Be<A.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Be]);const qe=i.get(A[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function $e(P){return Math.min(r.maxSamples,P.samples)}function be(P){const A=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function pt(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function Ke(P,A){const W=P.colorSpace,ue=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Fa||W!==ni&&W!==Mn&&(Et.getTransfer(W)===Tt?a===!1?e.has("EXT_sRGB")===!0&&ue===Ln?(P.format=Fa,P.minFilter=At,P.generateMipmaps=!1):A=fd.sRGBToLinear(A):(ue!==Ln||le!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}this.allocateTextureUnit=k,this.resetTextureUnits=fe,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=te,this.rebindTextures=rt,this.setupRenderTarget=$,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=be}function H0(n,e,t){const i=t.isWebGL2;function r(s,o=Mn){let a;const c=Et.getTransfer(o);if(s===Si)return n.UNSIGNED_BYTE;if(s===id)return n.UNSIGNED_SHORT_4_4_4_4;if(s===rd)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ch)return n.BYTE;if(s===lh)return n.SHORT;if(s===ec)return n.UNSIGNED_SHORT;if(s===nd)return n.INT;if(s===_i)return n.UNSIGNED_INT;if(s===Ei)return n.FLOAT;if(s===ls)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uh)return n.ALPHA;if(s===Ln)return n.RGBA;if(s===dh)return n.LUMINANCE;if(s===fh)return n.LUMINANCE_ALPHA;if(s===Gi)return n.DEPTH_COMPONENT;if(s===Cr)return n.DEPTH_STENCIL;if(s===Fa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hh)return n.RED;if(s===sd)return n.RED_INTEGER;if(s===ph)return n.RG;if(s===od)return n.RG_INTEGER;if(s===ad)return n.RGBA_INTEGER;if(s===Go||s===Vo||s===Wo||s===$o)if(c===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Go)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Go)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wc||s===$c||s===Xc||s===Yc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qc||s===Kc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qc)return c===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Kc)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zc||s===jc||s===Jc||s===Qc||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===ol||s===al||s===cl||s===ll)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zc)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jc)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jc)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qc)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===el)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tl)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nl)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===il)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rl)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sl)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ol)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===al)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cl)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ll)return c===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xo||s===ul||s===dl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xo)return c===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ul)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mh||s===fl||s===hl||s===pl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class G0 extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class In extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V0={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const E=t.getJointPose(M,i),p=this._getHandJoint(l,M);E!==null&&(p.matrix.fromArray(E.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=E.radius),p.visible=E!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class W0 extends kr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,v=null;const M=t.getContextAttributes();let E=null,p=null;const R=[],S=[],L=new lt;let N=null;const I=new vn;I.layers.enable(1),I.viewport=new Ht;const b=new vn;b.layers.enable(2),b.viewport=new Ht;const Y=[I,b],w=new G0;w.layers.enable(1),w.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=R[Z];return oe===void 0&&(oe=new ma,R[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=R[Z];return oe===void 0&&(oe=new ma,R[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=R[Z];return oe===void 0&&(oe=new ma,R[Z]=oe),oe.getHandSpace()};function Q(Z){const oe=S.indexOf(Z.inputSource);if(oe===-1)return;const Me=R[oe];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,l||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",k);for(let Z=0;Z<R.length;Z++){const oe=S[Z];oe!==null&&(S[Z]=null,R[Z].disconnect(oe))}C=null,V=null,e.setRenderTarget(E),m=null,h=null,f=null,r=null,p=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Xi(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let oe=null,Me=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?Cr:Gi,Me=M.stencil?Hi:_i);const Ie={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Xi(h.textureWidth,h.textureHeight,{format:Ln,type:Si,depthTexture:new Td(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Xe=e.properties.get(p);Xe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(Z){for(let oe=0;oe<Z.removed.length;oe++){const Me=Z.removed[oe],we=S.indexOf(Me);we>=0&&(S[we]=null,R[we].disconnect(Me))}for(let oe=0;oe<Z.added.length;oe++){const Me=Z.added[oe];let we=S.indexOf(Me);if(we===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=S.length){S.push(Me),we=Xe;break}else if(S[Xe]===null){S[Xe]=Me,we=Xe;break}if(we===-1)break}const Ie=R[we];Ie&&Ie.connect(Me)}}const X=new G,J=new G;function ee(Z,oe,Me){X.setFromMatrixPosition(oe.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const we=X.distanceTo(J),Ie=oe.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Ye=Ie[14]/(Ie[10]-1),ke=Ie[14]/(Ie[10]+1),rt=(Ie[9]+1)/Ie[5],$=(Ie[9]-1)/Ie[5],ft=(Ie[8]-1)/Ie[0],Ne=(Xe[8]+1)/Xe[0],$e=Ye*ft,be=Ye*Ne,pt=we/(-ft+Ne),Ke=pt*-ft;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ke),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=Ye+pt,A=ke+pt,W=$e-Ke,ue=be+(we-Ke),le=rt*ke/A*P,de=$*ke/A*P;Z.projectionMatrix.makePerspective(W,ue,le,de,P,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function ie(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;w.near=b.near=I.near=Z.near,w.far=b.far=I.far=Z.far,(C!==w.near||V!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,V=w.far);const oe=Z.parent,Me=w.cameras;ie(w,oe);for(let we=0;we<Me.length;we++)ie(Me[we],oe);Me.length===2?ee(w,I,b):w.projectionMatrix.copy(I.projectionMatrix),te(Z,w,oe)};function te(Z,oe,Me){Me===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=us*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)};let re=null;function ce(Z,oe){if(u=oe.getViewerPose(l||o),v=oe,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let we=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,we=!0);for(let Ie=0;Ie<Me.length;Ie++){const Xe=Me[Ie];let Ye=null;if(m!==null)Ye=m.getViewport(Xe);else{const rt=f.getViewSubImage(h,Xe);Ye=rt.viewport,Ie===0&&(e.setRenderTargetTextures(p,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(p))}let ke=Y[Ie];ke===void 0&&(ke=new vn,ke.layers.enable(Ie),ke.viewport=new Ht,Y[Ie]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ie===0&&(w.matrix.copy(ke.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),we===!0&&w.cameras.push(ke)}}for(let Me=0;Me<R.length;Me++){const we=S[Me],Ie=R[Me];we!==null&&Ie!==void 0&&Ie.update(we,oe,l||o)}re&&re(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const xe=new Sd;xe.setAnimationLoop(ce),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}}function $0(n,e){function t(E,p){E.matrixAutoUpdate===!0&&E.updateMatrix(),p.value.copy(E.matrix)}function i(E,p){p.color.getRGB(E.fogColor.value,vd(n)),p.isFog?(E.fogNear.value=p.near,E.fogFar.value=p.far):p.isFogExp2&&(E.fogDensity.value=p.density)}function r(E,p,R,S,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(E,p):p.isMeshToonMaterial?(s(E,p),f(E,p)):p.isMeshPhongMaterial?(s(E,p),u(E,p)):p.isMeshStandardMaterial?(s(E,p),h(E,p),p.isMeshPhysicalMaterial&&m(E,p,L)):p.isMeshMatcapMaterial?(s(E,p),v(E,p)):p.isMeshDepthMaterial?s(E,p):p.isMeshDistanceMaterial?(s(E,p),M(E,p)):p.isMeshNormalMaterial?s(E,p):p.isLineBasicMaterial?(o(E,p),p.isLineDashedMaterial&&a(E,p)):p.isPointsMaterial?c(E,p,R,S):p.isSpriteMaterial?l(E,p):p.isShadowMaterial?(E.color.value.copy(p.color),E.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(E,p){E.opacity.value=p.opacity,p.color&&E.diffuse.value.copy(p.color),p.emissive&&E.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(E.map.value=p.map,t(p.map,E.mapTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,t(p.alphaMap,E.alphaMapTransform)),p.bumpMap&&(E.bumpMap.value=p.bumpMap,t(p.bumpMap,E.bumpMapTransform),E.bumpScale.value=p.bumpScale,p.side===Jt&&(E.bumpScale.value*=-1)),p.normalMap&&(E.normalMap.value=p.normalMap,t(p.normalMap,E.normalMapTransform),E.normalScale.value.copy(p.normalScale),p.side===Jt&&E.normalScale.value.negate()),p.displacementMap&&(E.displacementMap.value=p.displacementMap,t(p.displacementMap,E.displacementMapTransform),E.displacementScale.value=p.displacementScale,E.displacementBias.value=p.displacementBias),p.emissiveMap&&(E.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,E.emissiveMapTransform)),p.specularMap&&(E.specularMap.value=p.specularMap,t(p.specularMap,E.specularMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest);const R=e.get(p).envMap;if(R&&(E.envMap.value=R,E.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=p.reflectivity,E.ior.value=p.ior,E.refractionRatio.value=p.refractionRatio),p.lightMap){E.lightMap.value=p.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;E.lightMapIntensity.value=p.lightMapIntensity*S,t(p.lightMap,E.lightMapTransform)}p.aoMap&&(E.aoMap.value=p.aoMap,E.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,E.aoMapTransform))}function o(E,p){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,p.map&&(E.map.value=p.map,t(p.map,E.mapTransform))}function a(E,p){E.dashSize.value=p.dashSize,E.totalSize.value=p.dashSize+p.gapSize,E.scale.value=p.scale}function c(E,p,R,S){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,E.size.value=p.size*R,E.scale.value=S*.5,p.map&&(E.map.value=p.map,t(p.map,E.uvTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,t(p.alphaMap,E.alphaMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest)}function l(E,p){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,E.rotation.value=p.rotation,p.map&&(E.map.value=p.map,t(p.map,E.mapTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,t(p.alphaMap,E.alphaMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest)}function u(E,p){E.specular.value.copy(p.specular),E.shininess.value=Math.max(p.shininess,1e-4)}function f(E,p){p.gradientMap&&(E.gradientMap.value=p.gradientMap)}function h(E,p){E.metalness.value=p.metalness,p.metalnessMap&&(E.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,E.metalnessMapTransform)),E.roughness.value=p.roughness,p.roughnessMap&&(E.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,E.roughnessMapTransform)),e.get(p).envMap&&(E.envMapIntensity.value=p.envMapIntensity)}function m(E,p,R){E.ior.value=p.ior,p.sheen>0&&(E.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),E.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(E.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,E.sheenColorMapTransform)),p.sheenRoughnessMap&&(E.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,E.sheenRoughnessMapTransform))),p.clearcoat>0&&(E.clearcoat.value=p.clearcoat,E.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(E.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,E.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(E.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&E.clearcoatNormalScale.value.negate())),p.iridescence>0&&(E.iridescence.value=p.iridescence,E.iridescenceIOR.value=p.iridescenceIOR,E.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(E.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,E.iridescenceMapTransform)),p.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),p.transmission>0&&(E.transmission.value=p.transmission,E.transmissionSamplerMap.value=R.texture,E.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(E.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,E.transmissionMapTransform)),E.thickness.value=p.thickness,p.thicknessMap&&(E.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=p.attenuationDistance,E.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(E.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(E.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=p.specularIntensity,E.specularColor.value.copy(p.specularColor),p.specularColorMap&&(E.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,E.specularColorMapTransform)),p.specularIntensityMap&&(E.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,E.specularIntensityMapTransform))}function v(E,p){p.matcap&&(E.matcap.value=p.matcap)}function M(E,p){const R=e.get(p).light;E.referencePosition.value.setFromMatrixPosition(R.matrixWorld),E.nearDistance.value=R.shadow.camera.near,E.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X0(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(R,S){const L=S.program;i.uniformBlockBinding(R,L)}function l(R,S){let L=r[R.id];L===void 0&&(v(R),L=u(R),r[R.id]=L,R.addEventListener("dispose",E));const N=S.program;i.updateUBOMapping(R,N);const I=e.render.frame;s[R.id]!==I&&(h(R),s[R.id]=I)}function u(R){const S=f();R.__bindingPointIndex=S;const L=n.createBuffer(),N=R.__size,I=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,L),L}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const S=r[R.id],L=R.uniforms,N=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,b=L.length;I<b;I++){const Y=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,C=Y.length;w<C;w++){const V=Y[w];if(m(V,I,w,N)===!0){const Q=V.__offset,fe=Array.isArray(V.value)?V.value:[V.value];let k=0;for(let X=0;X<fe.length;X++){const J=fe[X],ee=M(J);typeof J=="number"||typeof J=="boolean"?(V.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,Q+k,V.__data)):J.isMatrix3?(V.__data[0]=J.elements[0],V.__data[1]=J.elements[1],V.__data[2]=J.elements[2],V.__data[3]=0,V.__data[4]=J.elements[3],V.__data[5]=J.elements[4],V.__data[6]=J.elements[5],V.__data[7]=0,V.__data[8]=J.elements[6],V.__data[9]=J.elements[7],V.__data[10]=J.elements[8],V.__data[11]=0):(J.toArray(V.__data,k),k+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,S,L,N){const I=R.value,b=S+"_"+L;if(N[b]===void 0)return typeof I=="number"||typeof I=="boolean"?N[b]=I:N[b]=I.clone(),!0;{const Y=N[b];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return N[b]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function v(R){const S=R.uniforms;let L=0;const N=16;for(let b=0,Y=S.length;b<Y;b++){const w=Array.isArray(S[b])?S[b]:[S[b]];for(let C=0,V=w.length;C<V;C++){const Q=w[C],fe=Array.isArray(Q.value)?Q.value:[Q.value];for(let k=0,X=fe.length;k<X;k++){const J=fe[k],ee=M(J),ie=L%N;ie!==0&&N-ie<ee.boundary&&(L+=N-ie),Q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=ee.storage}}}const I=L%N;return I>0&&(L+=N-I),R.__size=L,R.__cache={},this}function M(R){const S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function E(R){const S=R.target;S.removeEventListener("dispose",E);const L=o.indexOf(S.__bindingPointIndex);o.splice(L,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Cd{constructor(e={}){const{canvas:t=Hh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,E=null;const p=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const S=this;let L=!1,N=0,I=0,b=null,Y=-1,w=null;const C=new Ht,V=new Ht;let Q=null;const fe=new Ve(0);let k=0,X=t.width,J=t.height,ee=1,ie=null,te=null;const re=new Ht(0,0,X,J),ce=new Ht(0,0,X,J);let xe=!1;const Z=new rc;let oe=!1,Me=!1,we=null;const Ie=new wt,Xe=new lt,Ye=new G,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return b===null?ee:1}let $=i;function ft(T,D){for(let z=0;z<T.length;z++){const U=T[z],B=t.getContext(U,D);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ve,!1),$===null){const D=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&D.shift(),$=ft(D,T),$===null)throw ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ne,$e,be,pt,Ke,P,A,W,ue,le,de,Pe,_e,ye,Be,qe,se,ht,et,We,Re,Te,Ze,at;function St(){Ne=new n_($),$e=new Zg($,Ne,e),Ne.init($e),Te=new H0($,Ne,$e),be=new B0($,Ne,$e),pt=new s_($),Ke=new A0,P=new z0($,Ne,be,Ke,$e,Te,pt),A=new Jg(S),W=new t_(S),ue=new hp($,$e),Ze=new qg($,Ne,ue,$e),le=new i_($,ue,pt,Ze),de=new l_($,le,ue,pt),et=new c_($,$e,P),qe=new jg(Ke),Pe=new T0(S,A,W,Ne,$e,Ze,qe),_e=new $0(S,Ke),ye=new b0,Be=new D0(Ne,$e),ht=new Yg(S,A,W,be,de,h,c),se=new k0(S,de,$e),at=new X0($,pt,$e,be),We=new Kg($,Ne,pt,$e),Re=new r_($,Ne,pt,$e),pt.programs=Pe.programs,S.capabilities=$e,S.extensions=Ne,S.properties=Ke,S.renderLists=ye,S.shadowMap=se,S.state=be,S.info=pt}St();const je=new W0(S,$);this.xr=je,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=Ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(X,J,!1))},this.getSize=function(T){return T.set(X,J)},this.setSize=function(T,D,z=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,J=D,t.width=Math.floor(T*ee),t.height=Math.floor(D*ee),z===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(X*ee,J*ee).floor()},this.setDrawingBufferSize=function(T,D,z){X=T,J=D,ee=z,t.width=Math.floor(T*z),t.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,D,z,U){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,D,z,U),be.viewport(C.copy(re).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,D,z,U){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,D,z,U),be.scissor(V.copy(ce).multiplyScalar(ee).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(T){be.setScissorTest(xe=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(T=!0,D=!0,z=!0){let U=0;if(T){let B=!1;if(b!==null){const ne=b.texture.format;B=ne===ad||ne===od||ne===sd}if(B){const ne=b.texture.type,ae=ne===Si||ne===_i||ne===ec||ne===Hi||ne===id||ne===rd,K=ht.getClearColor(),pe=ht.getClearAlpha(),Oe=K.r,Se=K.g,me=K.b;ae?(m[0]=Oe,m[1]=Se,m[2]=me,m[3]=pe,$.clearBufferuiv($.COLOR,0,m)):(v[0]=Oe,v[1]=Se,v[2]=me,v[3]=pe,$.clearBufferiv($.COLOR,0,v))}else U|=$.COLOR_BUFFER_BIT}D&&(U|=$.DEPTH_BUFFER_BIT),z&&(U|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),Be.dispose(),Ke.dispose(),A.dispose(),W.dispose(),de.dispose(),Ze.dispose(),at.dispose(),Pe.dispose(),je.dispose(),je.removeEventListener("sessionstart",Gt),je.removeEventListener("sessionend",ot),we&&(we.dispose(),we=null),It.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=pt.autoReset,D=se.enabled,z=se.autoUpdate,U=se.needsUpdate,B=se.type;St(),pt.autoReset=T,se.enabled=D,se.autoUpdate=z,se.needsUpdate=U,se.type=B}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ee(T){const D=T.target;D.removeEventListener("dispose",Ee),ze(D)}function ze(T){Fe(T),Ke.remove(T)}function Fe(T){const D=Ke.get(T).programs;D!==void 0&&(D.forEach(function(z){Pe.releaseProgram(z)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,U,B,ne){D===null&&(D=ke);const ae=B.isMesh&&B.matrixWorld.determinant()<0,K=Le(T,D,z,U,B);be.setMaterial(U,ae);let pe=z.index,Oe=1;if(U.wireframe===!0){if(pe=le.getWireframeAttribute(z),pe===void 0)return;Oe=2}const Se=z.drawRange,me=z.attributes.position;let De=Se.start*Oe,Rt=(Se.start+Se.count)*Oe;ne!==null&&(De=Math.max(De,ne.start*Oe),Rt=Math.min(Rt,(ne.start+ne.count)*Oe)),pe!==null?(De=Math.max(De,0),Rt=Math.min(Rt,pe.count)):me!=null&&(De=Math.max(De,0),Rt=Math.min(Rt,me.count));const Mt=Rt-De;if(Mt<0||Mt===1/0)return;Ze.setup(B,U,K,z,pe);let Pt,Je=We;if(pe!==null&&(Pt=ue.get(pe),Je=Re,Je.setIndex(Pt)),B.isMesh)U.wireframe===!0?(be.setLineWidth(U.wireframeLinewidth*rt()),Je.setMode($.LINES)):Je.setMode($.TRIANGLES);else if(B.isLine){let Ce=U.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*rt()),B.isLineSegments?Je.setMode($.LINES):B.isLineLoop?Je.setMode($.LINE_LOOP):Je.setMode($.LINE_STRIP)}else B.isPoints?Je.setMode($.POINTS):B.isSprite&&Je.setMode($.TRIANGLES);if(B.isBatchedMesh)Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Je.renderInstances(De,Mt,B.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,oi=Math.min(z.instanceCount,Ce);Je.renderInstances(De,Mt,oi)}else Je.render(De,Mt)};function gt(T,D,z){T.transparent===!0&&T.side===zt&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,y(T,D,z),T.side=cn,T.needsUpdate=!0,y(T,D,z),T.side=zt):y(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),E=Be.get(z),E.init(),R.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),T!==z&&T.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(S._useLegacyLights);const U=new Set;return T.traverse(function(B){const ne=B.material;if(ne)if(Array.isArray(ne))for(let ae=0;ae<ne.length;ae++){const K=ne[ae];gt(K,z,B),U.add(K)}else gt(ne,z,B),U.add(ne)}),R.pop(),E=null,U},this.compileAsync=function(T,D,z=null){const U=this.compile(T,D,z);return new Promise(B=>{function ne(){if(U.forEach(function(ae){Ke.get(ae).currentProgram.isReady()&&U.delete(ae)}),U.size===0){B(T);return}setTimeout(ne,10)}Ne.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let _t=null;function ut(T){_t&&_t(T)}function Gt(){It.stop()}function ot(){It.start()}const It=new Sd;It.setAnimationLoop(ut),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(T){_t=T,je.setAnimationLoop(T),T===null?It.stop():It.start()},je.addEventListener("sessionstart",Gt),je.addEventListener("sessionend",ot),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(D),D=je.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,D,b),E=Be.get(T,R.length),E.init(),R.push(E),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,oe=qe.init(this.clippingPlanes,Me),M=ye.get(T,p.length),M.init(),p.push(M),on(T,D,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ie,te),this.info.render.frame++,oe===!0&&qe.beginShadows();const z=E.state.shadowsArray;if(se.render(z,T,D),oe===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(M,T),E.setupLights(S._useLegacyLights),D.isArrayCamera){const U=D.cameras;for(let B=0,ne=U.length;B<ne;B++){const ae=U[B];Ss(M,T,ae,ae.viewport)}}else Ss(M,T,D);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(S,T,D),Ze.resetDefaultState(),Y=-1,w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function on(T,D,z,U){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){U&&Ye.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const ae=de.update(T),K=T.material;K.visible&&M.push(T,ae,K,z,Ye.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const ae=de.update(T),K=T.material;if(U&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ye.copy(T.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ye.copy(ae.boundingSphere.center)),Ye.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(K)){const pe=ae.groups;for(let Oe=0,Se=pe.length;Oe<Se;Oe++){const me=pe[Oe],De=K[me.materialIndex];De&&De.visible&&M.push(T,ae,De,z,Ye.z,me)}}else K.visible&&M.push(T,ae,K,z,Ye.z,null)}}const ne=T.children;for(let ae=0,K=ne.length;ae<K;ae++)on(ne[ae],D,z,U)}function Ss(T,D,z,U){const B=T.opaque,ne=T.transmissive,ae=T.transparent;E.setupLightsView(z),oe===!0&&qe.setGlobalState(S.clippingPlanes,z),ne.length>0&&g(B,ne,D,z),U&&be.viewport(C.copy(U)),B.length>0&&d(B,D,z),ne.length>0&&d(ne,D,z),ae.length>0&&d(ae,D,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function g(T,D,z,U){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ne=$e.isWebGL2;we===null&&(we=new Xi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?ls:Si,minFilter:Zt,samples:ne?4:0})),S.getDrawingBufferSize(Xe),ne?we.setSize(Xe.x,Xe.y):we.setSize(ho(Xe.x),ho(Xe.y));const ae=S.getRenderTarget();S.setRenderTarget(we),S.getClearColor(fe),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear();const K=S.toneMapping;S.toneMapping=xi,d(T,z,U),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we);let pe=!1;for(let Oe=0,Se=D.length;Oe<Se;Oe++){const me=D[Oe],De=me.object,Rt=me.geometry,Mt=me.material,Pt=me.group;if(Mt.side===zt&&De.layers.test(U.layers)){const Je=Mt.side;Mt.side=Jt,Mt.needsUpdate=!0,_(De,z,U,Rt,Mt,Pt),Mt.side=Je,Mt.needsUpdate=!0,pe=!0}}pe===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we)),S.setRenderTarget(ae),S.setClearColor(fe,k),S.toneMapping=K}function d(T,D,z){const U=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ne=T.length;B<ne;B++){const ae=T[B],K=ae.object,pe=ae.geometry,Oe=U===null?ae.material:U,Se=ae.group;K.layers.test(z.layers)&&_(K,D,z,pe,Oe,Se)}}function _(T,D,z,U,B,ne){T.onBeforeRender(S,D,z,U,B,ne),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(S,D,z,U,T,ne),B.transparent===!0&&B.side===zt&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,S.renderBufferDirect(z,D,U,B,T,ne),B.side=cn,B.needsUpdate=!0,S.renderBufferDirect(z,D,U,B,T,ne),B.side=zt):S.renderBufferDirect(z,D,U,B,T,ne),T.onAfterRender(S,D,z,U,B,ne)}function y(T,D,z){D.isScene!==!0&&(D=ke);const U=Ke.get(T),B=E.state.lights,ne=E.state.shadowsArray,ae=B.state.version,K=Pe.getParameters(T,B.state,ne,D,z),pe=Pe.getProgramCacheKey(K);let Oe=U.programs;U.environment=T.isMeshStandardMaterial?D.environment:null,U.fog=D.fog,U.envMap=(T.isMeshStandardMaterial?W:A).get(T.envMap||U.environment),Oe===void 0&&(T.addEventListener("dispose",Ee),Oe=new Map,U.programs=Oe);let Se=Oe.get(pe);if(Se!==void 0){if(U.currentProgram===Se&&U.lightsStateVersion===ae)return j(T,K),Se}else K.uniforms=Pe.getUniforms(T),T.onBuild(z,K,S),T.onBeforeCompile(K,S),Se=Pe.acquireProgram(K,pe),Oe.set(pe,Se),U.uniforms=K.uniforms;const me=U.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(me.clippingPlanes=qe.uniform),j(T,K),U.needsLights=it(T),U.lightsStateVersion=ae,U.needsLights&&(me.ambientLightColor.value=B.state.ambient,me.lightProbe.value=B.state.probe,me.directionalLights.value=B.state.directional,me.directionalLightShadows.value=B.state.directionalShadow,me.spotLights.value=B.state.spot,me.spotLightShadows.value=B.state.spotShadow,me.rectAreaLights.value=B.state.rectArea,me.ltc_1.value=B.state.rectAreaLTC1,me.ltc_2.value=B.state.rectAreaLTC2,me.pointLights.value=B.state.point,me.pointLightShadows.value=B.state.pointShadow,me.hemisphereLights.value=B.state.hemi,me.directionalShadowMap.value=B.state.directionalShadowMap,me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,me.spotShadowMap.value=B.state.spotShadowMap,me.spotLightMatrix.value=B.state.spotLightMatrix,me.spotLightMap.value=B.state.spotLightMap,me.pointShadowMap.value=B.state.pointShadowMap,me.pointShadowMatrix.value=B.state.pointShadowMatrix),U.currentProgram=Se,U.uniformsList=null,Se}function F(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=eo.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function j(T,D){const z=Ke.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Le(T,D,z,U,B){D.isScene!==!0&&(D=ke),P.resetTextureUnits();const ne=D.fog,ae=U.isMeshStandardMaterial?D.environment:null,K=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ni,pe=(U.isMeshStandardMaterial?W:A).get(U.envMap||ae),Oe=U.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Se=!!z.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),me=!!z.morphAttributes.position,De=!!z.morphAttributes.normal,Rt=!!z.morphAttributes.color;let Mt=xi;U.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=S.toneMapping);const Pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Pt!==void 0?Pt.length:0,Ce=Ke.get(U),oi=E.state.lights;if(oe===!0&&(Me===!0||T!==w)){const mn=T===w&&U.id===Y;qe.setState(U,T,mn)}let ct=!1;U.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==oi.state.version||Ce.outputColorSpace!==K||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||Ce.envMap!==pe||U.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==qe.numPlanes||Ce.numIntersection!==qe.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==Se||Ce.morphTargets!==me||Ce.morphNormals!==De||Ce.morphColors!==Rt||Ce.toneMapping!==Mt||$e.isWebGL2===!0&&Ce.morphTargetsCount!==Je)&&(ct=!0):(ct=!0,Ce.__version=U.version);let Sn=Ce.currentProgram;ct===!0&&(Sn=y(U,D,B));let yn=!1,Un=!1,ko=!1;const $t=Sn.getUniforms(),Pi=Ce.uniforms;if(be.useProgram(Sn.program)&&(yn=!0,Un=!0,ko=!0),U.id!==Y&&(Y=U.id,Un=!0),yn||w!==T){$t.setValue($,"projectionMatrix",T.projectionMatrix),$t.setValue($,"viewMatrix",T.matrixWorldInverse);const mn=$t.map.cameraPosition;mn!==void 0&&mn.setValue($,Ye.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&$t.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&$t.setValue($,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Un=!0,ko=!0)}if(B.isSkinnedMesh){$t.setOptional($,B,"bindMatrix"),$t.setOptional($,B,"bindMatrixInverse");const mn=B.skeleton;mn&&($e.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),$t.setValue($,"boneTexture",mn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&($t.setOptional($,B,"batchingTexture"),$t.setValue($,"batchingTexture",B._matricesTexture,P));const Bo=z.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0&&$e.isWebGL2===!0)&&et.update(B,z,Sn),(Un||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,$t.setValue($,"receiveShadow",B.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Pi.envMap.value=pe,Pi.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),Un&&($t.setValue($,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&Ae(Pi,ko),ne&&U.fog===!0&&_e.refreshFogUniforms(Pi,ne),_e.refreshMaterialUniforms(Pi,U,ee,J,we),eo.upload($,F(Ce),Pi,P)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(eo.upload($,F(Ce),Pi,P),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&$t.setValue($,"center",B.center),$t.setValue($,"modelViewMatrix",B.modelViewMatrix),$t.setValue($,"normalMatrix",B.normalMatrix),$t.setValue($,"modelMatrix",B.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const mn=U.uniformsGroups;for(let zo=0,Tf=mn.length;zo<Tf;zo++)if($e.isWebGL2){const Uc=mn[zo];at.update(Uc,Sn),at.bind(Uc,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Ae(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function it(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,D,z){Ke.get(T.texture).__webglTexture=D,Ke.get(T.depthTexture).__webglTexture=z;const U=Ke.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=z===void 0,U.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,D){const z=Ke.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){b=T,N=D,I=z;let U=!0,B=null,ne=!1,ae=!1;if(T){const pe=Ke.get(T);pe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer($.FRAMEBUFFER,null),U=!1):pe.__webglFramebuffer===void 0?P.setupRenderTarget(T):pe.__hasExternalTextures&&P.rebindTextures(T,Ke.get(T.texture).__webglTexture,Ke.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ae=!0);const Se=Ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Se[D])?B=Se[D][z]:B=Se[D],ne=!0):$e.isWebGL2&&T.samples>0&&P.useMultisampledRTT(T)===!1?B=Ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Se)?B=Se[z]:B=Se,C.copy(T.viewport),V.copy(T.scissor),Q=T.scissorTest}else C.copy(re).multiplyScalar(ee).floor(),V.copy(ce).multiplyScalar(ee).floor(),Q=xe;if(be.bindFramebuffer($.FRAMEBUFFER,B)&&$e.drawBuffers&&U&&be.drawBuffers(T,B),be.viewport(C),be.scissor(V),be.setScissorTest(Q),ne){const pe=Ke.get(T.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,z)}else if(ae){const pe=Ke.get(T.texture),Oe=D||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,pe.__webglTexture,z||0,Oe)}Y=-1},this.readRenderTargetPixels=function(T,D,z,U,B,ne,ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let K=Ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ae!==void 0&&(K=K[ae]),K){be.bindFramebuffer($.FRAMEBUFFER,K);try{const pe=T.texture,Oe=pe.format,Se=pe.type;if(Oe!==Ln&&Te.convert(Oe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const me=Se===ls&&(Ne.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Se!==Si&&Te.convert(Se)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===Ei&&($e.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-U&&z>=0&&z<=T.height-B&&$.readPixels(D,z,U,B,Te.convert(Oe),Te.convert(Se),ne)}finally{const pe=b!==null?Ke.get(b).__webglFramebuffer:null;be.bindFramebuffer($.FRAMEBUFFER,pe)}}},this.copyFramebufferToTexture=function(T,D,z=0){const U=Math.pow(2,-z),B=Math.floor(D.image.width*U),ne=Math.floor(D.image.height*U);P.setTexture2D(D,0),$.copyTexSubImage2D($.TEXTURE_2D,z,0,0,T.x,T.y,B,ne),be.unbindTexture()},this.copyTextureToTexture=function(T,D,z,U=0){const B=D.image.width,ne=D.image.height,ae=Te.convert(z.format),K=Te.convert(z.type);P.setTexture2D(z,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?$.texSubImage2D($.TEXTURE_2D,U,T.x,T.y,B,ne,ae,K,D.image.data):D.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,U,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,ae,D.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,U,T.x,T.y,ae,K,D.image),U===0&&z.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z,U,B=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=T.max.x-T.min.x+1,ae=T.max.y-T.min.y+1,K=T.max.z-T.min.z+1,pe=Te.convert(U.format),Oe=Te.convert(U.type);let Se;if(U.isData3DTexture)P.setTexture3D(U,0),Se=$.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)P.setTexture2DArray(U,0),Se=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,U.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,U.unpackAlignment);const me=$.getParameter($.UNPACK_ROW_LENGTH),De=$.getParameter($.UNPACK_IMAGE_HEIGHT),Rt=$.getParameter($.UNPACK_SKIP_PIXELS),Mt=$.getParameter($.UNPACK_SKIP_ROWS),Pt=$.getParameter($.UNPACK_SKIP_IMAGES),Je=z.isCompressedTexture?z.mipmaps[B]:z.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Je.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Je.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,T.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,T.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?$.texSubImage3D(Se,B,D.x,D.y,D.z,ne,ae,K,pe,Oe,Je.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Se,B,D.x,D.y,D.z,ne,ae,K,pe,Je.data)):$.texSubImage3D(Se,B,D.x,D.y,D.z,ne,ae,K,pe,Oe,Je),$.pixelStorei($.UNPACK_ROW_LENGTH,me),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,De),$.pixelStorei($.UNPACK_SKIP_PIXELS,Rt),$.pixelStorei($.UNPACK_SKIP_ROWS,Mt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Pt),B===0&&U.generateMipmaps&&$.generateMipmap(Se),be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){N=0,I=0,b=null,be.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nc?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Vi:ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vi?Nt:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Y0 extends Cd{}Y0.prototype.isWebGL1Renderer=!0;class oc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new oc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class q0 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ru extends Dn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new wt,su=new wt,$s=[],ou=new Ji,K0=new wt,Yr=new He,qr=new ps;class Z0 extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ru(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,K0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),ou.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),qr.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),su.multiplyMatrices(i,mr),Yr.matrixWorld=su,Yr.raycast(e,$s);for(let o=0,a=$s.length;o<a;o++){const c=$s[o];c.instanceId=s,c.object=this,t.push(c)}$s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ru(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ac extends bi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new G,h=new G,m=[],v=[],M=[],E=[];for(let p=0;p<=i;p++){const R=[],S=p/i;let L=0;p===0&&o===0?L=.5/t:p===i&&c===Math.PI&&(L=-.5/t);for(let N=0;N<=t;N++){const I=N/t;f.x=-e*Math.cos(r+I*s)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(r+I*s)*Math.sin(o+S*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),E.push(I+L,1-S),R.push(l++)}u.push(R)}for(let p=0;p<i;p++)for(let R=0;R<t;R++){const S=u[p][R+1],L=u[p][R],N=u[p+1][R],I=u[p+1][R+1];(p!==0||o>0)&&m.push(S,L,I),(p!==i-1||c<Math.PI)&&m.push(L,N,I)}this.setIndex(m),this.setAttribute("position",new Wn(v,3)),this.setAttribute("normal",new Wn(M,3)),this.setAttribute("uv",new Wn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sr extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dt extends zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const po={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class j0{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],v=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const J0=new j0;class ms{constructor(e){this.manager=e!==void 0?e:J0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class Q0 extends Error{constructor(e,t){super(e),this.response=t}}class eE extends ms{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=po.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:i,onError:r});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Jn[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=h?parseInt(h):0,v=m!==0;let M=0;const E=new ReadableStream({start(p){R();function R(){f.read().then(({done:S,value:L})=>{if(S)p.close();else{M+=L.byteLength;const N=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:m});for(let I=0,b=u.length;I<b;I++){const Y=u[I];Y.onProgress&&Y.onProgress(N)}p.enqueue(L),R()}})}}});return new Response(E)}else throw new Q0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{po.add(e,l);const u=Jn[e];delete Jn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Jn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Jn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tE extends ms{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=po.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ds("img");function c(){u(),po.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nE extends ms{constructor(e){super(e)}load(e,t,i,r){const s=new un,o=new tE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ld extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ga=new wt,au=new G,cu=new G;class iE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rE extends iE{constructor(){super(new yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sE extends Ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new rE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oE extends Ld{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let Xs;class Id{static getContext(){return Xs===void 0&&(Xs=new(window.AudioContext||window.webkitAudioContext)),Xs}static setContext(e){Xs=e}}class aE extends ms{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new eE(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);Id.getContext().decodeAudioData(l,function(f){t(f)}).catch(a)}catch(l){a(l)}},i,r);function a(c){r?r(c):console.error(c),s.manager.itemError(e)}}}class Dd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lu(){return(typeof performance>"u"?Date:performance).now()}const Oi=new G,uu=new ji,cE=new G,Ni=new G;class lE extends Ut{constructor(){super(),this.type="AudioListener",this.context=Id.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Dd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Oi,uu,cE),Ni.set(0,0,-1).applyQuaternion(uu),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Oi.x,r),t.positionY.linearRampToValueAtTime(Oi.y,r),t.positionZ.linearRampToValueAtTime(Oi.z,r),t.forwardX.linearRampToValueAtTime(Ni.x,r),t.forwardY.linearRampToValueAtTime(Ni.y,r),t.forwardZ.linearRampToValueAtTime(Ni.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Oi.x,Oi.y,Oi.z),t.setOrientation(Ni.x,Ni.y,Ni.z,i.x,i.y,i.z)}}class Od extends Ut{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);const x={GRID_SIZE:80,UNIT_SIZE:1,BASE_SNAKE_SPEED:.25,CAMERA_DISTANCE:9,CAMERA_HEIGHT:12,CAMERA_LAG:.2,CAMERA_POSITION_SMOOTHNESS:.01,CAMERA_ROTATION_SMOOTHNESS:.06,SPRITE_SHEET_DIM:2,NUM_INITIAL_FOOD:100,MIN_SNAKE_LENGTH:3,NUM_OBSTACLES:30,POWERUP_TEXT_ANIMATION_DURATION:1500,MULTIPLAYER_DEFAULT_ENABLED:!1,MULTIPLAYER_SERVER_URL:"ws://localhost:2567",MULTIPLAYER_TICK_RATE:30,MULTIPLAYER_LERP_SPEED:12,FOOD_SPEED_BOOST_DURATION:7,FOOD_SPEED_BOOST_MULTIPLIER:1.5,ALPHA_MODE_EXTENSION_PER_FOOD:.5,POWERUP_SPEED_DURATION:20,POWERUP_SPEED_MULTIPLIER:1.3,POWERUP_SHRINK_AMOUNT:3,POWERUP_SCORE_MULTIPLIER:3,POWERUP_SCORE_MULTIPLIER_DURATION:10,POWERUP_GHOST_DURATION:8,ALPHA_MODE_SCORE_MULTIPLIER:1.8,ALPHA_MODE_SCORE_MULTIPLIER_DURATION:5,ALPHA_MODE_MAX_SCORE_MULTIPLIER:16,ALPHA_MODE_MAX_CONSECUTIVE_ACTIVATIONS:999,ALPHA_MODE_COOLDOWN_DURATION:.1,ALPHA_POINTS_THRESHOLD:30,ALPHA_POINTS_FOOD:3,ALPHA_POINTS_FROG:6,ALPHA_POINTS_ENEMY:10,ALPHA_POINTS_DECAY_RATE:.8,ALPHA_POINTS_FROG_MULTIPLIER:1.5,ALPHA_MODE_SCORE_THRESHOLD:1e3,ALPHA_MODE_DURATION:6,ALPHA_MODE_SPEED_MULTIPLIER:1.5,ALPHA_MODE_COLOR:10233776,ALPHA_MODE_EXTENSION_PER_ENEMY:1.5,AUDIO_VOLUME:{MUSIC:.3,MOVEMENT_SOUNDS:.4,EATING_SOUNDS:.5,ALPHA_MODE_SOUNDS:.6,DEATH_SOUND:.6},AUDIO_ENABLED:{MUSIC:!1,SOUND_EFFECTS:!0},AUDIO_PRELOAD_ALL:!0,NUM_ENEMIES:8,ENEMY_START_LENGTH:5,ENEMY_SNAKE_SPEED:.3,ENEMY_START_SAFE_ZONE:10,ENEMY_TAIL_EDIBLE_SEGMENTS:3,ENEMY_TAIL_COLOR:5099745,ENEMY_KILL_SCORE:10,ENEMY_RESPAWN_TIME:5,ENEMY_KILL_SEGMENTS:5,PLAYER_RESPAWN_DELAY_TICKS:90,PLAYER_RESPAWN_LENGTH:3,ENLARGED_HEAD_DURATION:0,ENLARGED_HEAD_SCALE:1,PARTICLE_COUNT_KILL:10,PARTICLE_COLOR_KILL:16733986,PARTICLE_COUNT_NORMAL_FOOD:2,PARTICLE_COLOR_NORMAL_FOOD:5025616,PARTICLE_COUNT_DEATH:10,PARTICLE_SIZE:2,PARTICLE_LIFESPAN:.2,PARTICLE_SPEED:3,WALL_HEIGHT:3,WALL_THICKNESS:1,FOG_COLOR:16777215,FOG_DENSITY:.03,START_SAFE_ZONE:5,GROUND_COLOR:4620980,CAMERA_SHAKE_ENABLED:!0,CAMERA_SHAKE_DURATION:.2,CAMERA_SHAKE_INTENSITY:3,FOOD_SPAWN_RATIOS:{normal:89,speed:5,shrink:1,score_x2:3,ghost:2},GAME_MODES:{NORMAL:"normal",CASUAL:"casual"},DEFAULT_GAME_MODE:"normal",MODE_SETTINGS:{normal:{SNAKE_SPEED_MULTIPLIER:1,OBSTACLE_COUNT_MULTIPLIER:1,FOOD_COUNT_MULTIPLIER:1,ALPHA_POINTS_THRESHOLD_MULTIPLIER:1,ALPHA_MODE_DURATION_MULTIPLIER:1,COLLISION_FORGIVENESS:.2},casual:{SNAKE_SPEED_MULTIPLIER:.7,OBSTACLE_COUNT_MULTIPLIER:.7,FOOD_COUNT_MULTIPLIER:1.5,ALPHA_POINTS_THRESHOLD_MULTIPLIER:.7,ALPHA_MODE_DURATION_MULTIPLIER:1.5,COLLISION_FORGIVENESS:.5}},GAME_TEXT:{UI:{SCORE_LABEL:"SCORE",KILLS_LABEL:"KILLS",GAME_OVER:{TITLE:"GAME OVER!",SCORE_PREFIX:"FINAL SCORE: ",RESTART_BUTTON:"RESTART",HIGH_SCORE:"HIGH SCORE",DEATH_REASONS:{WALL_COLLISION:"You crashed into a wall",SELF_COLLISION:"You ate yourself",ENEMY_COLLISION:"You choked on a snek",OBSTACLE_COLLISION:"You crashed into an obstacle",TREE_COLLISION:"You tried to eat a tree",BUSH_COLLISION:"You got tangled in a bush",PVP_COLLISION:"Another snek got you"}}},ALPHA_MODE:{PROGRESS_LABEL:"",ACTIVE_LABEL:"Alpha SNEK!",ACTIVATED_MESSAGE:"ALPHA SNEK ACTIVATED!",DEACTIVATED_MESSAGE:"ALPHA SNEK DEACTIVATED",KILL_MESSAGE:"ALPHA KILL!",ALPHA_KILL_MESSAGES:["ALPHA KILL","DOUBLE KILL","TRIPLE KILL","M-M-M-MONSTER KILL","UNSTOPPABLE","GODLIKE","SNEK KING","SNEK EMPORER","SNEK GOD","THE ONE SNEK TO RULE THEM ALL","YOU ARE OMEGA SNEK"]},POWERUPS:{SPEED_BOOST:"Speed boost!",GHOST_MODE:"Ghost mode!",SHRINK:"Shrinkaaage!",SCORE_MULTIPLIER:"3x rewards!",ENEMY_KILLED_MESSAGES:["MILOS SMELLS","MILOS IS THE BEST","MILOS IS A GOOD SNEK","MILOS IS THE BEST SNEK","MILOS IS BETTER THAN EVERYONE","YOU ATE FILIP!","YOU ATE MILOS!"]},TUTORIAL:{CONTROLS:"Left/Right keys to turn your Snek",MOBILE_CONTROLS:"Press left/right buttons to turn your Snek",OBJECTIVE:"Eat food and other sneks to grow your anaconda. Eat a Snek by eating its tail.",ALPHA_MODE_HINT:"Fill up the alpha meter to become the ALPHA SNEK!"}},FROG_MOVEMENT:{BASE_SPEED:2,SPEED_VARIATION:.5,HOP_HEIGHT:.2,HOP_FREQUENCY:1,HOP_FREQUENCY_VARIATION:.5,MAX_DISTANCE:3,DISTANCE_VARIATION:1,DIRECTION_CHANGE_PROBABILITY:.005,MOVEMENT_STYLE:"crawl",MOVE_INTERVAL:.5}};function Nd(n){Object.freeze(n);for(const e of Object.values(n))e&&typeof e=="object"&&Nd(e);return n}const za=Nd(JSON.parse(JSON.stringify(x))),mo="snek_adminConfig";function lc(n,e){for(const t of Object.keys(e))e[t]&&typeof e[t]=="object"&&!Array.isArray(e[t])&&n[t]&&typeof n[t]=="object"&&!Array.isArray(n[t])?lc(n[t],e[t]):n[t]=e[t]}function Kx(){try{const n={};for(const e of Object.keys(za))JSON.stringify(x[e])!==JSON.stringify(za[e])&&(n[e]=x[e]);Object.keys(n).length>0?localStorage.setItem(mo,JSON.stringify(n)):localStorage.removeItem(mo)}catch(n){console.warn("Failed to save config overrides:",n)}}function Zx(){lc(x,za);try{localStorage.removeItem(mo)}catch{}}try{const n=localStorage.getItem(mo);n&&lc(x,JSON.parse(n))}catch(n){console.warn("Failed to load config overrides:",n)}const H={core:null,scene:null,camera:null,renderer:null,materials:null,lights:{ambientLight:null,directionalLight:null},clock:null,frameCount:0,simulation:{tickRate:30,fixedDelta:1/30,accumulator:0,time:0,lastTimeMs:0,maxSubSteps:5},gameMode:hE(),playerSnake:{segments:[],direction:{x:1,y:0,z:0},nextDirection:{x:1,y:0,z:0},speed:x.BASE_SNAKE_SPEED,moveTimer:0,animationFrame:0,animationTimer:0,scoreMultiplier:1,ghostModeActive:!1,activePowerUp:null,enlargedHeadUntil:0,alphaMode:{active:!1,startTime:0,endTime:0,lastScoreThreshold:0}},enemies:{list:[],kills:0},food:{positions:[],meshes:[]},obstacles:{list:[],group:null},particles:{},environment:{groundMesh:null,wallGroup:null,grassInstances:null,skybox:null},cameraEffects:{shake:{active:!1,startTime:0,duration:0,intensity:0,originalPosition:new G}},score:{current:0,multiplier:1},highScore:uE(),stats:{applesEaten:0,frogsEaten:0,snakesEaten:0},flags:{gameOver:!1,gameStarted:!1,gamePaused:!1,gameRunning:!1,restartRequested:!1,animating:!1,audioHealthCheckRun:!1,useCoreSimulation:!0},inputQueue:[],network:{enabled:!1,status:"idle",room:null,sessionId:null,lastSnapshotTick:0,lastSnapshotTimeMs:0,snapshotIntervalMs:100,sendInput:null,pendingServerEvents:[]},players:{},localPlayerId:"local",cleanupInput:null};function uE(){if(typeof localStorage>"u")return 0;try{const n=localStorage.getItem("alphaSnek_highScore");return n?parseInt(n,10):0}catch(n){return console.warn("Could not load high score from localStorage:",n),0}}function dE(n){if(!(typeof localStorage>"u"))try{localStorage.setItem("alphaSnek_highScore",n.toString()),console.log("High score saved:",n)}catch(e){console.warn("Could not save high score to localStorage:",e)}}function fE(n){if(!(typeof localStorage>"u"))try{localStorage.setItem("alphaSnek_gameMode",n),console.log("Game mode saved:",n),H.gameMode=n}catch(e){console.warn("Could not save game mode to localStorage:",e)}}function uc(){const n=H.gameMode===x.GAME_MODES.CASUAL?x.GAME_MODES.CASUAL:x.GAME_MODES.NORMAL;return x.MODE_SETTINGS[n]}function si(n){const e=uc();switch(n){case"BASE_SNAKE_SPEED":return x.BASE_SNAKE_SPEED*e.SNAKE_SPEED_MULTIPLIER;case"NUM_OBSTACLES":return Math.round(x.NUM_OBSTACLES*e.OBSTACLE_COUNT_MULTIPLIER);case"NUM_INITIAL_FOOD":return Math.round(x.NUM_INITIAL_FOOD*e.FOOD_COUNT_MULTIPLIER);case"ALPHA_POINTS_THRESHOLD":return Math.round(x.ALPHA_POINTS_THRESHOLD*e.ALPHA_POINTS_THRESHOLD_MULTIPLIER);case"ALPHA_MODE_DURATION":return x.ALPHA_MODE_DURATION*e.ALPHA_MODE_DURATION_MULTIPLIER;case"COLLISION_FORGIVENESS":return e.COLLISION_FORGIVENESS;default:return console.warn(`No adjustment found for setting: ${n}`),null}}function hE(){if(typeof localStorage>"u")return x.GAME_MODES.NORMAL;try{return localStorage.getItem("alphaSnek_gameMode")===x.GAME_MODES.CASUAL?x.GAME_MODES.CASUAL:x.GAME_MODES.NORMAL}catch(n){return console.warn("Could not load game mode from localStorage:",n),x.GAME_MODES.NORMAL}}function pE(){console.log("Resetting game state for new game..."),H.playerSnake.segments=[],H.playerSnake.direction={x:1,y:0,z:0},H.playerSnake.nextDirection={x:1,y:0,z:0},H.playerSnake.speed=x.BASE_SNAKE_SPEED,H.playerSnake.moveTimer=0,H.playerSnake.animationFrame=0,H.playerSnake.animationTimer=0,H.playerSnake.scoreMultiplier=1,H.playerSnake.ghostModeActive=!1,H.playerSnake.activePowerUp=null,H.playerSnake.enlargedHeadUntil=0,H.playerSnake.alphaMode={active:!1,startTime:0,endTime:0,lastScoreThreshold:0},H.score.current=0,H.score.multiplier=1,H.enemies.kills=0,H.stats.applesEaten=0,H.stats.frogsEaten=0,H.stats.snakesEaten=0,H.flags.gameOver=!1,H.flags.gameRunning=!0,H.flags.restartRequested=!1,H.flags.animating=!1,H.clock&&(H.playerSnake.moveTimer=0,H.playerSnake.animationTimer=0)}const Ot={snakeSheet:"assets/svg/snake_spritesheet_improved.svg",enemySnakeSheet:"assets/svg/enemy_snake_spritesheet.svg",particle:"assets/svg/particle.svg",skybox:"assets/svg/skybox_blocky.svg",groundTile:"assets/svg/grass.svg",wallStone:"assets/svg/wall_stone.svg",wallIvy:"assets/textures/ivy_wall.png",foodNormal:"assets/svg/food_normal.svg",frogSpeed:"assets/textures/frogs/frog_speed.svg",frogShrink:"assets/textures/frogs/frog_shrink.svg",frogScore:"assets/textures/frogs/frog_score.svg",frogGhost:"assets/textures/frogs/frog_ghost.svg",treeLeaves:"assets/svg/leaves.png",treeTrunk:"assets/textures/tree.png",flowerBush:"assets/textures/flower_bush.png",pinkFlower:"assets/textures/pink_flow.png",whiteDaisy:"assets/textures/white_daisy.png",whiteTulip:"assets/textures/white_tulip.png",yellowFlower:"assets/textures/yellow_flower.png"},ii=[{type:"normal",svgPath:Ot.foodNormal,colorHint:new Ve(14494720),powerUpDuration:0,description:"Normal Food",effectText:"+1"},{type:"speed",svgPath:Ot.frogSpeed,colorHint:new Ve(9159498),powerUpDuration:x.POWERUP_SPEED_DURATION,description:"Speed Boost Frog",effectText:x.GAME_TEXT.POWERUPS.SPEED_BOOST},{type:"shrink",svgPath:Ot.frogShrink,colorHint:new Ve(10233776),powerUpDuration:0,description:"Shrink Frog",effectText:x.GAME_TEXT.POWERUPS.SHRINK},{type:"score_x2",svgPath:Ot.frogScore,colorHint:new Ve(16766720),powerUpDuration:x.POWERUP_SCORE_MULTIPLIER_DURATION,description:"Score Multiplier Frog",effectText:x.GAME_TEXT.POWERUPS.SCORE_MULTIPLIER},{type:"ghost",svgPath:Ot.frogGhost,colorHint:new Ve(12434877),powerUpDuration:x.POWERUP_GHOST_DURATION,description:"Ghost Mode Frog",effectText:x.GAME_TEXT.POWERUPS.GHOST_MODE}],du=[{type:"tree"},{type:"bush"}],Ge={cube:new Xn(1,1,1),particle:new Ti(1,1),groundPlane:null,grassBlade:new Ti(.1,.6)};Ge.grassBlade.translate(0,.3,0);function mE(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600}const xn={shadows:!0,particles:!0,detailLevel:"high",textureQuality:1,initializeForCurrentDevice:function(){const n=mE();return n?(this.shadows=!1,this.detailLevel="low",this.textureQuality=.5,console.log("Mobile device detected - using low performance settings")):(this.shadows=!0,this.detailLevel="high",this.textureQuality=1,console.log("Desktop device detected - using high performance settings")),n}};function gE(){const n=new q0;return n.fog=new oc(x.FOG_COLOR,x.FOG_DENSITY),n}function _E(){const n=new vn(75,window.innerWidth/window.innerHeight,.1,x.GRID_SIZE*x.UNIT_SIZE*6);return n.position.set(0,x.CAMERA_HEIGHT,x.CAMERA_DISTANCE),n}function EE(n){const e=new Cd({canvas:n,antialias:!0});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=xn.shadows,xn.shadows&&(e.shadowMap.type=ed),e.outputColorSpace=Nt,e}function vE(n){const e=new oE(13421772,.65);n.add(e);const t=new sE(16772829,.8);if(t.position.set(x.GRID_SIZE*.15,x.GRID_SIZE*.25,x.GRID_SIZE*.1),t.castShadow=xn.shadows,xn.shadows){t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=.5,t.shadow.camera.far=x.GRID_SIZE*x.UNIT_SIZE*.8;const i=x.GRID_SIZE*x.UNIT_SIZE*.6;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-.001}return n.add(t),n.add(t.target),{ambientLight:e,directionalLight:t}}function ME(n,e){if(!e)return console.error("Skybox texture not loaded!"),null;const t=x.GRID_SIZE*x.UNIT_SIZE*5,i=new Xn(t,t,t),r=new Lr({map:e,side:Jt,fog:!1}),s=new He(i,r);return n.add(s),s}function xE(n,e){if(!e)return console.error("Ground material not created!"),null;const t=x.GRID_SIZE*x.UNIT_SIZE;Ge.groundPlane=new Ti(t,t);const i=new He(Ge.groundPlane,e);return i.rotation.x=-Math.PI/2,i.position.y=0,i.receiveShadow=xn.shadows,n.add(i),i}function SE(n,e){if(!e)return console.error("Wall material not created!"),null;const t=new In,i=x.GRID_SIZE*x.UNIT_SIZE/2,r=x.GRID_SIZE*x.UNIT_SIZE+x.WALL_THICKNESS*x.UNIT_SIZE,s=x.WALL_HEIGHT*x.UNIT_SIZE,o=x.WALL_THICKNESS*x.UNIT_SIZE,a=new Xn(r,s,o),c=new Xn(o,s,r),l=s/2,u=new He(a,e);u.position.set(0,l,-i-o/2),xn.shadows&&(u.castShadow=!0,u.receiveShadow=!0),t.add(u);const f=new He(a,e);f.position.set(0,l,i+o/2),xn.shadows&&(f.castShadow=!0,f.receiveShadow=!0),t.add(f);const h=new He(c,e);h.position.set(i+o/2,l,0),xn.shadows&&(h.castShadow=!0,h.receiveShadow=!0),t.add(h);const m=new He(c,e);return m.position.set(-i-o/2,l,0),xn.shadows&&(m.castShadow=!0,m.receiveShadow=!0),t.add(m),n.add(t),t}function yE(n,e){if(!e)return console.error("Grass material not created!"),null;const t=new Z0(Ge.grassBlade,e,x.GRASS_COUNT);t.castShadow=!1,t.receiveShadow=!0,t.instanceMatrix.setUsage(wh);const i=new Ut;x.GRID_SIZE*x.UNIT_SIZE/2;for(let r=0;r<x.GRASS_COUNT;r++){i.position.set((Math.random()-.5)*(x.GRID_SIZE*x.UNIT_SIZE),0,(Math.random()-.5)*(x.GRID_SIZE*x.UNIT_SIZE)),i.rotation.y=Math.random()*Math.PI*2;const s=(.8+Math.random()*.4)*x.UNIT_SIZE;i.scale.set(s,s,s),i.updateMatrix(),t.setMatrixAt(r,i.matrix)}return t.instanceMatrix.needsUpdate=!0,n.add(t),t}function TE(){Ge.particle=new Ti(x.PARTICLE_SIZE,x.PARTICLE_SIZE)}function AE(n,e){var o;TE();const t=xE(n,e.ground),i=SE(n,e.wall),r=yE(n,e.grass),s=ME(n,(o=e.skybox)==null?void 0:o.map);return{groundMesh:t,wallGroup:i,grassInstances:r,skybox:s}}const Ha=["error","warn","info","debug","trace"],wE={enabled:!1,level:"info",categories:{system:!0,physics:!0,input:!0,render:!0,audio:!0,gameplay:!0,ai:!0,performance:!0},showTimestamp:!0};let nn={...wE};function bE(){const n=new URLSearchParams(window.location.search);if(n.has("debug")&&(nn.enabled=n.get("debug")==="true"),n.has("loglevel")){const e=n.get("loglevel").toLowerCase();Ha.includes(e)&&(nn.level=e)}if(n.has("logcategories")){const e=n.get("logcategories").toLowerCase().split(",");Object.keys(nn.categories).forEach(t=>{nn.categories[t]=!1}),e.forEach(t=>{nn.categories.hasOwnProperty(t)&&(nn.categories[t]=!0)})}if(nn.enabled){const e=Object.entries(nn.categories).filter(([,t])=>t).map(([t])=>t);console.log(`%c[ALPHA_SNEK Logger]%c Initialized | Level: ${nn.level} | Categories: ${e.join(", ")}`,"color: #4CAF50; font-weight: bold;","color: inherit;")}return nn.enabled}function RE(n,...e){const t=[...e];if(nn.showTimestamp){const r=new Date().toISOString().substr(11,8);t.unshift(`[${r}]`)}return t.unshift(`[${n}]`),t}function PE(n){switch(n){case"error":return"color: #FF5252; font-weight: bold;";case"warn":return"color: #FFC107; font-weight: bold;";case"info":return"color: #2196F3; font-weight: bold;";case"debug":return"color: #9E9E9E;";case"trace":return"color: #757575;";default:return"color: inherit;"}}function yt(n,e,...t){if(!nn.enabled||!nn.categories[e])return;const i=Ha.indexOf(nn.level);if(Ha.indexOf(n)>i)return;const s=RE(e,...t),o=PE(n);switch(n){case"error":console.error(`%c${s.shift()}%c`,o,"color: inherit;",...s);break;case"warn":console.warn(`%c${s.shift()}%c`,o,"color: inherit;",...s);break;case"info":console.info(`%c${s.shift()}%c`,o,"color: inherit;",...s);break;case"debug":case"trace":default:console.log(`%c${s.shift()}%c`,o,"color: inherit;",...s)}}const q={error:(n,...e)=>yt("error",n,...e),warn:(n,...e)=>yt("warn",n,...e),info:(n,...e)=>yt("info",n,...e),debug:(n,...e)=>yt("debug",n,...e),trace:(n,...e)=>yt("trace",n,...e),system:{error:(...n)=>yt("error","system",...n),warn:(...n)=>yt("warn","system",...n),info:(...n)=>yt("info","system",...n),debug:(...n)=>yt("debug","system",...n),trace:(...n)=>yt("trace","system",...n)},gameplay:{error:(...n)=>yt("error","gameplay",...n),warn:(...n)=>yt("warn","gameplay",...n),info:(...n)=>yt("info","gameplay",...n),debug:(...n)=>yt("debug","gameplay",...n),trace:(...n)=>yt("trace","gameplay",...n)},performance:{error:(...n)=>yt("error","performance",...n),warn:(...n)=>yt("warn","performance",...n),info:(...n)=>yt("info","performance",...n),debug:(...n)=>yt("debug","performance",...n),trace:(...n)=>yt("trace","performance",...n)},audio:{error:(...n)=>yt("error","audio",...n),warn:(...n)=>yt("warn","audio",...n),info:(...n)=>yt("info","audio",...n),debug:(...n)=>yt("debug","audio",...n),trace:(...n)=>yt("trace","audio",...n)}};function CE(){return nn.enabled}async function Qt(n,e,t=!0,i=null){return new Promise((r,s)=>{n.load(e,o=>{t&&(o.colorSpace=Nt),i&&i(o),r(o)},void 0,o=>{q.system.error(`Failed to load texture: ${e}`,o),s(o)})})}async function LE(){const n=new nE,e={snake:{},enemy:{},food:{},obstacle:{},particle:null,ground:null,wall:null,grass:null,skybox:null};let t,i;try{const[r,s,o,a,c,l,u,f,h,m,v,M,E,p,...R]=await Promise.all([Qt(n,Ot.snakeSheet,!0,b=>{b.magFilter=Lt,b.minFilter=Lt,t=b}),Qt(n,Ot.enemySnakeSheet,!0,b=>{b.magFilter=Lt,b.minFilter=Lt,i=b}),Qt(n,Ot.particle,!0),Qt(n,Ot.skybox,!0,b=>{b.magFilter=Lt,b.minFilter=At}),Qt(n,Ot.groundTile,!0,b=>{b.wrapS=bn,b.wrapT=bn,b.repeat.set(x.GRID_SIZE/4,x.GRID_SIZE/4),b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.wallStone,!0,b=>{b.wrapS=bn,b.wrapT=bn,b.repeat.set(x.GRID_SIZE/3,x.WALL_HEIGHT*1),b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.wallIvy,!0,b=>{b.wrapS=bn,b.wrapT=bn,b.repeat.set(x.GRID_SIZE/3,x.WALL_HEIGHT*1),b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.treeLeaves,!0,b=>{b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.treeTrunk,!0,b=>{b.wrapS=bn,b.wrapT=bn,b.repeat.set(1,1),b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.flowerBush,!0,b=>{b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.pinkFlower,!0,b=>{b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.whiteDaisy,!0,b=>{b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.whiteTulip,!0,b=>{b.magFilter=At,b.minFilter=Zt}),Qt(n,Ot.yellowFlower,!0,b=>{b.magFilter=At,b.minFilter=Zt}),...ii.map(b=>Qt(n,b.svgPath,!0,Y=>{Y.magFilter=At,Y.minFilter=Zt}))]);q.system.info("Core textures loaded."),e.particle=new Lr({map:o,transparent:!0,vertexColors:!1,side:zt,depthWrite:!1,blending:La});const S={side:cn},L=(b,Y,w)=>{if(!w)return new Dt({color:16711935,...S});const C=new Dt(S);C.map=w.clone(),C.map.needsUpdate=!0;const V=1/x.SPRITE_SHEET_DIM;return C.map.offset.set(b*V,Y*V),C.map.repeat.set(V,V),C};e.snake.head1=L(0,1,t),e.snake.head2=L(1,1,t),e.snake.body1=L(0,0,t),e.snake.body2=L(1,0,t);const N={side:cn},I=(b,Y,w)=>{if(!w)return new Dt({color:16711935,...N});const C=new Dt(N);C.map=w.clone(),C.map.needsUpdate=!0;const V=1/x.SPRITE_SHEET_DIM;return C.map.offset.set(b*V,Y*V),C.map.repeat.set(V,V),C};return e.enemy.head1=I(0,1,i),e.enemy.head2=I(1,1,i),e.enemy.body1=I(0,0,i),e.enemy.body2=I(1,0,i),ii.forEach((b,Y)=>{const w=R[Y];b.type==="normal"?w?e.food[b.type]=new Dt({map:w,side:cn,color:16777215}):e.food[b.type]=new Dt({color:b.colorHint||16711935,emissive:2236962}):e.food[b.type]=new Dt({color:b.colorHint,side:cn,emissive:2236962,transparent:b.type==="ghost",opacity:b.type==="ghost"?.7:1})}),e.obstacle.tree_trunk=new Dt({map:h,color:9858867}),e.obstacle.tree_leaves=new Dt({map:f,color:3706428,transparent:!0,alphaTest:.5,side:zt}),e.obstacle.bush=new Dt({color:6856504}),e.obstacle.flower_bush=new Dt({map:m,color:16777215,transparent:!0,alphaTest:.5,side:zt}),e.obstacle.pink_flower=new Dt({map:v,color:16777215,transparent:!0,alphaTest:.5,side:zt}),e.obstacle.white_daisy=new Dt({map:M,color:16777215,transparent:!0,alphaTest:.5,side:zt}),e.obstacle.white_tulip=new Dt({map:E,color:16777215,transparent:!0,alphaTest:.5,side:zt}),e.obstacle.yellow_flower=new Dt({map:p,color:16777215,transparent:!0,alphaTest:.5,side:zt}),e.ground=new Dt({map:c,side:cn,color:x.GROUND_COLOR||16777215}),q.system.info("Ground material created with color:",x.GROUND_COLOR?"#"+x.GROUND_COLOR.toString(16).padStart(6,"0"):"No tint (white)"),e.wall=new Dt({map:u,color:16777215,side:zt}),e.grass=new Dt({color:5606191,side:zt}),e.skybox=new Lr({map:a,side:Jt,fog:!1}),q.system.info("Materials created successfully."),e}catch(r){return q.system.error("Error during texture loading or material creation:",r),e}}const Vt=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600;let Vn=null,qi=null,Ue=null,vt=null,Dr=!1,Ud=!1,Ga=!1;const Va=Vt?5:12,xt=[],$n={},st={MOVEMENT:"movement",EFFECT:"effect",VOICE:"voice",EXPLOSION:"explosion",UI:"ui"},ei={[st.MOVEMENT]:0,[st.EFFECT]:0,[st.VOICE]:0,[st.EXPLOSION]:0,[st.UI]:0},Fd={[st.MOVEMENT]:Vt?1:2,[st.EFFECT]:Vt?2:4,[st.VOICE]:1,[st.EXPLOSION]:Vt?1:2,[st.UI]:1},gs=[{name:"movePlayerSnake1",path:"assets/sounds/move_player_snake_1.ogg",critical:!0,category:st.MOVEMENT},{name:"movePlayerSnake2",path:"assets/sounds/move_player_snake_2.ogg",critical:!1,category:st.MOVEMENT},{name:"eatApple",path:"assets/sounds/eat_apple.ogg",critical:!0,category:st.EFFECT},{name:"eatFrog",path:"assets/sounds/eat_frog.ogg",critical:!0,category:st.EFFECT},{name:"eatSnake",path:"assets/sounds/eat_snake.ogg",critical:!0,category:st.EFFECT},{name:"playerDeath",path:"assets/sounds/died_player.ogg",critical:!0,category:st.EFFECT},{name:"alphaKillExplode1",path:"assets/sounds/alpha_kill_explode_1.ogg",critical:!0,category:st.EXPLOSION},{name:"alphaKillExplode2",path:"assets/sounds/alpha_kill_explode_2.ogg",critical:!Vt,category:st.EXPLOSION},{name:"alphaKill1",path:"assets/sounds/alpha_kill_1_firstblood.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill2",path:"assets/sounds/alpha_kill_2_Double_Kill.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill3",path:"assets/sounds/alpha_kill_3triple_kill.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill4Monster",path:"assets/sounds/alpha_kill_4_MonsterKill.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill4Unstoppable",path:"assets/sounds/alpha_kill_4_Unstoppable.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill5",path:"assets/sounds/alpha_kill_5_GodLike.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill6",path:"assets/sounds/alpha_kill_6_Ownage.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill7",path:"assets/sounds/alpha_kill_7_Killing_Spree.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill8",path:"assets/sounds/alpha_kill_8_UltraKill.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill9",path:"assets/sounds/alpha_kill_9_Rampage.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill10",path:"assets/sounds/alpha_kill_10_MegaKill.mp3",critical:!Vt,category:st.VOICE},{name:"alphaKill11",path:"assets/sounds/alpha_kill_11_HolyShit.mp3",critical:!Vt,category:st.VOICE}];let an=x.AUDIO_ENABLED.MUSIC,pn=x.AUDIO_ENABLED.SOUND_EFFECTS,Ar=x.AUDIO_VOLUME.MUSIC,Wi=x.AUDIO_VOLUME.SOUND;const go=!0;let _a=0,fu=0;const IE="assets/music/Darkman007 - Sad song.mp3";function DE(n){q.audio.info("Initializing audio system...");try{Vn=new lE,n.add(Vn),Ue=Vn.context,go&&(console.log("Audio context state at init:",Ue?Ue.state:"No context"),console.log("AudioListener created:",!!Vn)),/iPhone|iPad|iPod|Safari/i.test(navigator.userAgent)&&!navigator.userAgent.includes("Chrome")&&(console.log("Safari/iOS detected, adding special audio handling"),document.addEventListener("click",function e(){if(Ga)return;const t=Ue.createBuffer(1,1,22050),i=Ue.createBufferSource();i.buffer=t,i.connect(Ue.destination),i.start(0),console.log("Safari audio unlock attempt"),Ga=!0,document.removeEventListener("click",e)},{once:!0})),qi=new aE,FE(),vt=new Od(Vn),kE(),OE(),q.audio.info("Audio system initialized"),UE(),setTimeout(()=>{Ue&&Ue.state!=="running"&&to()},1e3),setTimeout(()=>{Ue&&Ue.state!=="running"&&to()},5e3),window.testAudio=ZE,window.fixAudio=to,window.playTestSound=HE,go&&(console.log("Audio debug functions available in console:"),console.log("- window.testAudio() - Test the audio system"),console.log("- window.fixAudio() - Try to resume audio context"),console.log("- window.playTestSound() - Force play a test sound"))}catch(e){q.audio.error("Error initializing audio system:",e),console.error("Audio init error:",e)}}function OE(){try{if(q.audio.info("Initializing sound effects..."),!qi){console.error("Audio loader not initialized");return}gs.forEach(n=>{n.critical&&dc(n)}),x.AUDIO_PRELOAD_ALL&&setTimeout(()=>{NE()},2e3)}catch(n){q.audio.error("Error initializing sound effects:",n),console.error("Error initializing sound effects:",n)}}function NE(){console.log("Preloading all sound effects in background...");try{let t=function(){if(e>=n.length){console.log("Background preloading complete!");return}const i=n[e];e++,qi.load(i.path,function(r){$n[i.name]=r,console.log(`Preloaded sound: ${i.name}`),setTimeout(t,100)},function(r){},function(r){console.error(`Error preloading sound ${i.name}:`,r),setTimeout(t,100)})};const n=gs.filter(i=>!i.critical&&!$n[i.name]);if(n.length===0){console.log("All sounds already loaded!");return}let e=0;t()}catch(n){console.error("Error in preloadAllSounds:",n)}}function UE(){["click","touchstart","touchend","mousedown","keydown"].forEach(e=>{document.addEventListener(e,wr,{once:!0}),document.body.addEventListener(e,wr,{once:!0}),window.addEventListener(e,wr,{once:!0})}),console.log("Set up multiple interaction handlers for audio")}function to(){if(console.log("Attempting to forcibly start audio..."),Ue){if(Ue.state!=="running")console.log("Resuming audio context from state:",Ue.state),Ue.resume().then(()=>{if(console.log("Successfully resumed audio context, new state:",Ue.state),an&&Dr&&vt&&!vt.isPlaying){an=!0;try{vt.play(),console.log("Started background music")}catch(n){console.error("Error playing background music:",n)}}setTimeout(()=>{pn&&(pn=!0,JE())},300),Ud=!0,Ga=!0}).catch(n=>{console.error("Failed to resume audio context:",n)});else if(console.log("Audio context already running"),an&&Dr&&vt&&!vt.isPlaying)try{vt.play(),console.log("Started background music (context already running)")}catch(n){console.error("Error playing background music:",n)}}else console.error("No audio context available")}function wr(){q.audio.info("Handling user interaction for audio...");try{to(),["click","touchstart","touchend","mousedown","keydown"].forEach(e=>{document.removeEventListener(e,wr),document.body.removeEventListener(e,wr),window.removeEventListener(e,wr)}),q.audio.info("Audio system fully initialized by user interaction")}catch(n){q.audio.error("Error in handleFirstUserInteraction:",n),console.error("First interaction error:",n)}}function FE(){q.audio.info(`Initializing sound pool with ${Va} slots`);try{for(let n=0;n<Va;n++){const e=new Od(Vn);try{e.setVolume(Wi||.5)}catch(t){console.error("Error setting audio volume:",t),e.gain.gain.value=Wi||.5}xt.push({audio:e,inUse:!1,name:null,category:null,startTime:0})}go&&console.log(`Created sound pool with ${xt.length} audio objects`)}catch(n){q.audio.error("Error initializing sound pool:",n),console.error("Sound pool init error:",n)}}function dc(n){if(!qi){q.audio.error("Cannot load sound effect - audio loader not initialized");return}console.log(`Loading sound effect: ${n.name} from ${n.path}`);try{qi.load(n.path,e=>{$n[n.name]=e,go&&console.log(`Successfully loaded sound effect: ${n.name}`)},e=>{q.audio.debug(`Sound effect ${n.name} loading: ${(e.loaded/e.total*100).toFixed(0)}%`)},e=>{q.audio.error(`Error loading sound effect ${n.name}:`,e),console.error(`Failed to load sound ${n.name} from ${n.path}:`,e)})}catch(e){q.audio.error(`Critical error loading sound effect ${n.name}:`,e),console.error(`Critical error loading sound ${n.name}:`,e)}}function kE(){if(!qi||!Vn){q.audio.error("Cannot load background music - audio system not initialized");return}q.audio.info("Loading background music...");try{qi.load(IE,n=>{vt&&(vt.setBuffer(n),vt.setLoop(!0),vt.setVolume(Ar),Dr=!0,q.audio.info("Background music loaded successfully"),an&&Ud&&Ki())},n=>{q.audio.debug(`Music loading: ${(n.loaded/n.total*100).toFixed(0)}%`)},n=>{q.audio.error("Error loading background music:",n)})}catch(n){q.audio.error("Critical error loading background music:",n)}}function kd(n){try{if(!Vn||!xt||xt.length===0)return console.error("Cannot get sound - invalid audio system state"),null;if(ei[n]>=Fd[n]){let a=null,c=1/0;for(let l=0;l<xt.length;l++){const u=xt[l];u.category===n&&u.inUse&&u.audio.startTime&&u.audio.startTime<c&&(c=u.audio.startTime,a=u)}if(a){const l=a.audio;if(l.isPlaying)try{l.stop(),l.source.onended=null,l.source=null,l.buffer=null}catch(u){console.warn("Non-critical error stopping sound:",u)}return l}}for(let a=0;a<xt.length;a++){const c=xt[a];if(!c.inUse||!c.audio.isPlaying){if(c.inUse=!0,c.category=n,ei[n]++,c.audio.isPlaying)try{c.audio.stop(),c.audio.source.onended=null,c.audio.source=null,c.audio.buffer=null}catch(l){console.warn("Non-critical error resetting sound:",l)}return c.audio}}const e=[st.MOVEMENT,st.EFFECT,st.EXPLOSION,st.VOICE],t=e.indexOf(n),i=e.slice(0,t);let r=null,s=1/0;for(let a=0;a<xt.length;a++){const c=xt[a];i.includes(c.category)&&c.inUse&&c.audio.startTime&&c.audio.startTime<s&&(s=c.audio.startTime,r=c)}if(r){const a=r.audio;if(a.isPlaying)try{a.stop(),a.source.onended=null,a.source=null,a.buffer=null}catch(c){console.warn("Non-critical error stopping stolen sound:",c)}return ei[r.category]--,r.category=n,ei[n]++,a}const o=xt[0];if(o){const a=o.audio;if(a.isPlaying)try{a.stop(),a.source.onended=null,a.source=null,a.buffer=null}catch(c){console.warn("Non-critical error stopping fallback sound:",c)}return o.category&&ei[o.category]--,o.inUse=!0,o.category=n,ei[n]++,a}return null}catch(e){return console.error("Error in getAvailableSound:",e),null}}function ln(n,e,t=!1){if(!pn)return!1;try{const i=gs.find(a=>a.name===n);if(!i)return q.audio.error(`Sound effect not found: ${n}`),!1;const r=i.category||st.EFFECT;if(!t&&ei[r]>=Fd[r])return!1;if(!$n[n])return dc(i),console.log(`Loading sound effect: ${n} from ${i.path}`),!1;const s=kd(r);if(!s)return console.error("Cannot play sound - no available sound objects"),!1;s.setBuffer($n[n]);const o=e!==void 0&&!isNaN(e)&&isFinite(e)?Math.min(Math.max(e,0),1):Wi||.5;try{s.gain&&s.gain.gain?s.gain.gain.value=o:s.setVolume(o)}catch(a){console.error("Error setting volume:",a);try{s.gain.gain.setValueAtTime(o,Ue.currentTime)}catch(c){console.error("Critical error setting volume, using fixed value:",c),s.gain&&s.gain.gain&&(s.gain.gain.value=.3)}}return s.startTime=Ue.currentTime,s.play(),s.onEnded=()=>{const a=xt.findIndex(c=>c.audio===s);if(a!==-1){const c=xt[a].category;c&&ei[c]--,xt[a].inUse=!1,xt[a].name=null,xt[a].category=null}},!0}catch(i){return q.audio.error(`Error playing sound effect ${n}:`,i),console.error(`Error playing ${n}:`,i),!1}}function BE(){if(pn)try{if(_a=(_a+1)%4,_a!==0)return;const n=window.isAlphaMode?"movePlayerSnake2":"movePlayerSnake1";if(!ln(n,.4)&&!$n[n]){const t=gs.find(i=>i.name===n);t&&(dc(t),q.audio.debug(`Attempted to load missing movement sound: ${n}`))}Math.random()<.1&&zE()}catch(n){console.error("Error playing player movement sound:",n)}}function zE(){try{for(let n=0;n<xt.length;n++){const e=xt[n];e.inUse&&!e.audio.isPlaying&&(e.inUse=!1,e.name=null,e.category&&(ei[e.category]--,e.category=null),q.audio.debug("Reset stalled sound in pool"))}}catch(n){console.error("Error resetting sound pool:",n)}}function HE(){console.log("Attempting to force-play a test sound...");try{Ue&&Ue.state!=="running"?(console.log("Audio context not running, attempting to resume..."),Ue.resume().then(()=>{console.log("Audio context resumed, now trying to play sound"),n()}).catch(e=>{console.error("Failed to resume audio context:",e),n()})):n()}catch(e){console.error("Error in playTestSound:",e)}function n(){try{const e=Ue.createOscillator(),t=Ue.createGain();t.gain.value=.1,e.connect(t),t.connect(Ue.destination),e.frequency.value=440,e.start(0),console.log("Test tone started"),setTimeout(()=>{e.stop(),console.log("Test tone stopped"),console.log("Attempting to play movePlayerSnake1 sound...");const i=ln("movePlayerSnake1");console.log("Sound effect play result:",i)},1e3)}catch(e){console.error("Failed to play oscillator:",e)}}}function Ki(){if(!Dr||!an||!vt)return!1;try{return vt.isPlaying||(q.audio.info("Playing background music..."),vt.setLoop(!0),vt.setVolume(Ar),vt.play()),!0}catch(n){return q.audio.error("Error playing background music:",n),Ue&&Ue.state!=="running"&&Ue.resume().catch(e=>{q.audio.warn("Could not resume audio context:",e)}),!1}}function Ys(n){return n!==void 0?an=n:an=!an,console.log(`Music toggled to: ${an?"ON":"OFF"}`),an?Dr&&vt&&Ki():vt&&vt.isPlaying&&fc(),an&&Ue&&Ue.state!=="running"&&Ue.resume().catch(e=>console.error("Error resuming audio context:",e)),an}function GE(n){return n!==void 0?pn=n:pn=!pn,console.log(`Sound effects toggled to: ${pn?"ON":"OFF"}`),pn||xt.forEach(e=>{e&&e.audio&&e.audio.isPlaying&&(e.audio.stop(),e.inUse=!1)}),pn&&Ue&&Ue.state!=="running"&&Ue.resume().catch(e=>console.error("Error resuming audio context:",e)),pn}function VE(){return Ar}function WE(){return Wi}function $E(n){if(n<0||n>1){q.audio.warn(`Invalid music volume: ${n}. Must be between 0 and 1.`);return}Ar=n,vt&&(vt.setVolume(Ar),q.audio.info(`Music volume set to: ${Ar}`))}function XE(n){if(n<0||n>1){q.audio.warn(`Invalid sound volume: ${n}. Must be between 0 and 1.`);return}Wi=n,xt.forEach(e=>{e&&e.audio.isObject3D&&e.audio.setVolume(Wi)}),q.audio.info(`Sound effects volume set to: ${Wi}`)}function Bd(){if(!pn)return;const n=["alphaKill1","alphaKill2","alphaKill3","alphaKill4Monster","alphaKill4Unstoppable","alphaKill5","alphaKill6","alphaKill7","alphaKill8","alphaKill9","alphaKill10","alphaKill11"],e=fu%n.length,t=n[e];ln(t),fu++,setTimeout(()=>ln("alphaKillExplode1"),100)}function fc(){vt&&vt.isPlaying&&(q.audio.info("Pausing background music"),vt.pause())}function YE(){q.audio.info("Cleaning up audio resources...");const n=vt&&vt.isPlaying;try{if(xt.forEach(e=>{if(e&&e.audio.isPlaying)try{e.audio.stop(),e.inUse=!1,e.name=null}catch{}}),Ue&&Ue.state!=="running"){q.audio.warn(`Audio context is in state: ${Ue.state}, attempting recovery`);try{Ue.resume().catch(e=>{q.audio.warn("Could not resume audio context:",e)})}catch{}}}catch(e){q.audio.error("Error during audio cleanup:",e)}return q.audio.info("Sound effects stopped and cleaned up (music preserved)"),n}function qE(){an&&Dr&&vt&&!vt.isPlaying&&(q.audio.info("Attempting to restore background music playback"),setTimeout(()=>{Ki()},100))}function KE(){if(!(!Vn||!Ue))try{Ue.state!=="running"&&(q.audio.warn(`Audio health check: context is ${Ue.state}, attempting recovery`),Ue.resume().catch(e=>{q.audio.error("Failed to resume audio context:",e)}));let n=0;if(xt.forEach(e=>{e.audio.isPlaying&&n++}),n>Va-1){q.audio.warn(`Audio health check: ${n} sounds playing, cleaning up`);let e=null,t=1/0;xt.forEach(i=>{i.audio.isPlaying&&i.audio.startTime&&i.audio.startTime<t&&(t=i.audio.startTime,e=i)}),e&&(e.audio.stop(),e.inUse=!1,q.audio.info(`Stopped oldest sound: ${e.name||"unknown"}`))}}catch(n){q.audio.error("Error in audio health check:",n)}}function ZE(){console.log("======= AUDIO SYSTEM TEST ======="),console.log("AudioListener exists:",!!Vn),console.log("AudioContext exists:",!!Ue),console.log("AudioContext state:",Ue?Ue.state:"N/A"),console.log("Sound enabled:",pn),console.log("Music enabled:",an),console.log("Sound pool size:",xt.length),console.log("Loaded sound buffers:",Object.keys($n)),Ue&&Ue.state==="suspended"&&(console.log("Attempting to resume suspended audio context..."),Ue.resume().then(()=>{console.log("Audio context resumed successfully")}).catch(n=>{console.error("Failed to resume audio context:",n)}));try{const n=Ue.createOscillator();n.type="sine",n.frequency.setValueAtTime(440,Ue.currentTime);const e=Ue.createGain();e.gain.setValueAtTime(.1,Ue.currentTime),n.connect(e),e.connect(Ue.destination),n.start(),console.log("Test tone started"),setTimeout(()=>{n.stop(),console.log("Test tone stopped"),console.log("Attempting to play movePlayerSnake1 sound...");const t=ln("movePlayerSnake1");console.log("Sound effect play result:",t)},1e3)}catch(n){console.error("Error playing test sound:",n)}console.log("================================")}function jE(n=!1){window.isAlphaMode=n,BE()}function JE(){console.log("Attempting to play player movement sound (direct method)...");try{if($n.movePlayerSnake1)n($n.movePlayerSnake1);else{console.log("Sound buffer not loaded, attempting to load...");const e=gs.find(i=>i.name==="movePlayerSnake1");if(!e){console.error("Sound definition not found");return}const t=new XMLHttpRequest;t.open("GET",e.path,!1),t.responseType="arraybuffer",t.onload=function(){Ue.decodeAudioData(t.response,function(i){$n.movePlayerSnake1=i,console.log("Successfully loaded sound buffer synchronously"),n(i)},function(i){console.error("Error decoding audio data:",i)})},t.onerror=function(){console.error("Error loading sound file")},t.send()}}catch(e){console.error("Error in playMovePlayerSound:",e)}function n(e){try{const t=kd();if(!t){console.error("No available sound object in pool");return}t.setBuffer(e);try{t.gain&&t.gain.gain?t.gain.gain.value=.5:t.setVolume(.5)}catch(i){console.error("Error setting volume:",i);try{t.gain.gain.setValueAtTime(.5,Ue.currentTime)}catch(r){console.error("Critical volume error:",r)}}t.play(),console.log("Successfully played movement sound!"),t.onEnded=()=>{const i=xt.findIndex(r=>r.audio===t);i!==-1&&(xt[i].inUse=!1),console.log("Sound playback completed")}}catch(t){console.error("Error playing sound with buffer:",t)}}}const zn=document.getElementById("info"),Hn=document.getElementById("kills"),Gn=document.getElementById("highScoreInfo"),gr=document.getElementById("powerUpInfo"),Kt=document.getElementById("powerUpTextEffect"),On=document.getElementById("gameOver"),hu=document.getElementById("finalScore"),pu=document.getElementById("highScore"),mu=document.getElementById("deathReason"),gu=document.getElementById("restartButton"),no=document.getElementById("leftButton"),io=document.getElementById("rightButton"),$i=document.getElementById("alphaModeContainer"),Wt=document.getElementById("alphaModeLabel"),Ai=document.getElementById("alphaModeProgress"),_u=document.getElementById("applesEaten"),Eu=document.getElementById("frogsEaten"),vu=document.getElementById("snakesEaten"),Mu=document.getElementById("settingsButton"),_o=document.getElementById("settingsMenu"),xu=document.getElementById("closeSettings"),Su=document.querySelectorAll(".tab-button"),QE=document.querySelectorAll(".tab-pane"),ns=document.getElementById("musicToggle"),is=document.getElementById("soundToggle"),rs=document.getElementById("musicVolume"),ss=document.getElementById("soundVolume"),yu=document.getElementById("musicToggleButton"),Or=document.getElementById("introScreen");document.getElementById("singlePlayerButton");document.getElementById("multiPlayerButton");const Tu=document.getElementById("controlsText"),Au=document.getElementById("objectiveText"),wu=document.getElementById("alphaModeText"),bu=document.getElementById("helpButton"),Eo=document.getElementById("respawnOverlay"),Ru=document.getElementById("respawnReason"),qs=document.getElementById("respawnCountdown"),os=document.getElementById("multiplayerScoreboard"),Ea=document.getElementById("scoreboardEntries"),Kr=document.getElementById("killFeed");let hc=!1,zd=!0,mi=null;function Pu(){if(Gn){const n=document.createElement("span");n.classList.add("label"),n.textContent="High Score: ",Gn.innerHTML="",Gn.appendChild(n),Gn.appendChild(document.createTextNode("0"))}if(zn){const n=document.createElement("span");n.classList.add("label"),n.textContent=x.GAME_TEXT.UI.SCORE_LABEL+": ",zn.innerHTML="",zn.appendChild(n),zn.appendChild(document.createTextNode("0"))}if(Hn){const n=document.createElement("span");n.classList.add("label"),n.textContent=x.GAME_TEXT.UI.KILLS_LABEL+": ",Hn.innerHTML="",Hn.appendChild(n),Hn.appendChild(document.createTextNode("0"))}Wt&&(Wt.textContent="ALPHA MODE"),Tu&&(Tu.textContent=ev()?x.GAME_TEXT.TUTORIAL.MOBILE_CONTROLS:x.GAME_TEXT.TUTORIAL.CONTROLS),Au&&(Au.textContent=x.GAME_TEXT.TUTORIAL.OBJECTIVE),wu&&(wu.textContent=x.GAME_TEXT.TUTORIAL.ALPHA_MODE_HINT)}function ev(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function tv(){const n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(!n)return!1;const e=window.innerWidth>=600&&window.innerWidth<=1366,t=navigator.userAgent.toLowerCase(),i=/ipad/.test(t)||/macintosh/.test(t)&&navigator.maxTouchPoints>1,r=/android/.test(t)&&!/mobile/.test(t),s=/windows/.test(t)&&/touch/.test(t),o=!!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return i||r||s||o||n&&e}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pu):Pu();function nv(){startButton&&startButton.addEventListener("click",function(){hc?ov():pc()}),gu&&gu.addEventListener("click",function(){On&&On.classList.remove("active"),window.dispatchEvent(new CustomEvent("gameRestart"))}),bu&&bu.addEventListener("click",Cu),Mu&&Mu.addEventListener("click",Cu),xu&&xu.addEventListener("click",hv),Su.forEach(n=>{n.addEventListener("click",()=>{Su.forEach(t=>t.classList.remove("active")),QE.forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=n.getAttribute("data-tab");document.getElementById(e).classList.add("active")})}),yu&&yu.addEventListener("click",()=>{const n=br();n.music=!n.music,va(n),vo(),Wa(),n.music?(Ys(!0),Ki()):Ys(!1),window.fixAudio&&window.fixAudio()}),ns&&ns.addEventListener("click",()=>{const n=br();n.music=!n.music,va(n),vo(),Wa(),n.music?(Ys(!0),Ki()):Ys(!1),window.fixAudio&&window.fixAudio()}),is&&is.addEventListener("click",()=>{const n=br();n.sound=!n.sound,va(n),Hd(),GE(n.sound)}),rs&&rs.addEventListener("input",()=>{const n=rs.value/100;$E(n)}),ss&&ss.addEventListener("input",()=>{const n=ss.value/100;XE(n)})}function iv(){nv(),rv(),vo()}function br(){try{const n=localStorage.getItem("alphaSnekAudioState");if(n)return JSON.parse(n)}catch(n){console.error("Error loading audio state:",n)}return{music:x.AUDIO_ENABLED.MUSIC,sound:x.AUDIO_ENABLED.SOUND_EFFECTS}}function va(n){try{localStorage.setItem("alphaSnekAudioState",JSON.stringify(n))}catch(e){console.error("Error saving audio state:",e)}}function vo(){const n=document.querySelector("#musicToggleButton .music-icon");if(n){const e=br().music;n.style.opacity=e?"1.0":"0.4";const t=n.parentElement;t&&(e?t.classList.remove("muted"):t.classList.add("muted"))}}function Wa(){if(ns){const n=br().music;ns.classList.toggle("muted",!n);const e=ns.querySelector(".toggle-status");e&&(e.textContent=n?"ON":"OFF")}}function Hd(){if(is){const n=br().sound;is.classList.toggle("muted",!n);const e=is.querySelector(".toggle-status");e&&(e.textContent=n?"ON":"OFF")}}function rv(){vo(),Wa(),Hd(),rs&&(rs.value=Math.round(VE()*100)),ss&&(ss.value=Math.round(WE()*100))}iv();function pc(){Or&&(Or.style.display="none"),On&&(On.style.display="none"),hc=!0,zd=!1,window.dispatchEvent(new CustomEvent("gameStarted"))}function sv(){zd?(Or&&(Or.style.display="flex"),hc=!1):pc()}function ov(){Or&&(Or.style.display="none"),window.dispatchEvent(new CustomEvent("gameResumed"))}let gi=null;window.addEventListener("resize",mc);function mc(){!no||!io||On!=null&&On.classList.contains("active")||(window.innerWidth<=767||tv()?(no.style.display="flex",io.style.display="flex"):(no.style.display="none",io.style.display="none"))}mc();function av(){$i&&($i.style.display="flex",Ai&&(Ai.style.height="0%"),Wt&&(Wt.style.display="block"))}av();const cv={leftButton:no,rightButton:io};function _s(n){if(zn){const e=zn.querySelector(".label");if(e){const t=document.createTextNode(n.toString());Array.from(zn.childNodes).forEach(i=>{(i.nodeType===Node.TEXT_NODE||i!==e&&i.nodeType===Node.ELEMENT_NODE)&&zn.removeChild(i)}),zn.appendChild(t)}else zn.textContent=`${x.GAME_TEXT.UI.SCORE_LABEL}: ${n}`}}function Es(n){if(Hn){const e=Hn.querySelector(".label");if(e){const t=document.createTextNode(n.toString());Array.from(Hn.childNodes).forEach(i=>{(i.nodeType===Node.TEXT_NODE||i!==e&&i.nodeType===Node.ELEMENT_NODE)&&Hn.removeChild(i)}),Hn.appendChild(t)}else Hn.textContent=`${x.GAME_TEXT.UI.KILLS_LABEL}: ${n}`}}function $a(n){if(Gn){const e=Gn.querySelector(".label");e?(Gn.innerHTML="",Gn.appendChild(e),Gn.appendChild(document.createTextNode(n))):Gn.textContent="High Score: "+n}}function lv(n,e,t,i={}){var r,s,o;if(On){if(On.style.display="flex",hu){const a=typeof n=="object"?n.current||0:n;hu.textContent=a,console.log("Setting final score:",a)}if(pu&&(pu.textContent=e),mu){let a="You died!";x.GAME_TEXT?t&&((o=(s=(r=x.GAME_TEXT.UI)==null?void 0:r.GAME_OVER)==null?void 0:s.DEATH_REASONS)!=null&&o[t])&&(a=x.GAME_TEXT.UI.GAME_OVER.DEATH_REASONS[t]):console.warn("CONFIG.GAME_TEXT not found, using default death message"),mu.textContent=a,console.log(`Game over: ${a} (reason code: ${t})`)}i&&(_u&&i.applesEaten!==void 0&&(_u.textContent=i.applesEaten),Eu&&i.frogsEaten!==void 0&&(Eu.textContent=i.frogsEaten),vu&&i.snakesEaten!==void 0&&(vu.textContent=i.snakesEaten)),window.dispatchEvent(new CustomEvent("gameOver"))}}function uv(){On&&On.classList.remove("active"),mc()}function as(n){if(gr){if(gr.innerHTML="",!n){gr.style.display="none";return}if(n.includes("|"))n.split("|").map(t=>t.trim()).forEach(t=>{const i=document.createElement("div");i.className="power-up-item",i.textContent=t,gr.appendChild(i)});else{const e=document.createElement("div");e.className="power-up-item",e.textContent=n,gr.appendChild(e)}gr.style.display="flex"}}function mt(n,e=16777215){if(!Kt)return;const t=()=>{Kt.style.display="none",Kt.classList.remove("powerup-text-animate"),gi=null};gi&&(Kt.removeEventListener("animationend",gi),Kt.classList.remove("powerup-text-animate"),Kt.style.display="none",Kt.offsetWidth),Kt.textContent=n,Kt.style.color=`#${e.toString(16).padStart(6,"0")}`,Kt.style.display="block",gi=t,Kt.addEventListener("animationend",gi,{once:!0}),Kt.classList.add("powerup-text-animate")}function Gd(){Kt&&(gi&&(Kt.removeEventListener("animationend",gi),gi=null),Kt.style.display="none",Kt.classList.remove("powerup-text-animate"))}function Vd(n=0,e){_s(n),Es(0),as(""),uv(),Gd(),e&&e.highScore!==void 0?$a(e.highScore):$a(0),$i&&($i.style.display="flex",Ai&&(Ai.style.height="0%"),Wt&&(Wt.style.display="block",Wt.classList.remove("alpha-mode-active"),Wt.textContent="ALPHA MODE"))}function dv(){const n=x.GAME_TEXT.POWERUPS.ENEMY_KILLED_MESSAGES;if(!n||n.length===0)return"ENEMY KILLED!";const e=Math.floor(Math.random()*n.length);return n[e]}function fv(n,e,t){if(Ai){const i=Math.max(0,Math.min(100,n));Ai.style.height=`${i}%`,$i&&$i.style.display!=="flex"&&($i.style.display="flex",Wt&&(Wt.style.display="block",e!==void 0&&t!==void 0?Wt.textContent=`ALPHA: ${e}/${t}`:Wt.textContent="ALPHA"))}}function Mo(n,e,t=1){if(Ai){const i=n*100;Ai.style.height=`${i}%`}if(Wt)if(n>0){Wt.classList.add("alpha-mode-active");const i=e.toFixed(1);let r="";t>1&&(r=` x${t.toFixed(1)}`),Wt.textContent=`ALPHA ${i}s${r}`}else Wt.classList.remove("alpha-mode-active"),Wt.textContent="ALPHA MODE"}function Wd(){mt(x.GAME_TEXT.ALPHA_MODE.ACTIVATED_MESSAGE,10233776)}function $d(n,e){console.log("Alpha Mode cooldown disabled")}function Cu(){window.dispatchEvent(new Event("gamePaused")),_o&&_o.classList.add("active")}function hv(){_o&&_o.classList.remove("active"),window.dispatchEvent(new Event("gameResumed"))}const Lu=["#4CAF50","#2196F3","#F44336","#FFEB3B"];function pv(n,e,t=30){var s,o,a,c;if(!Eo)return;let i="YOU DIED!";(c=(a=(o=(s=x.GAME_TEXT)==null?void 0:s.UI)==null?void 0:o.GAME_OVER)==null?void 0:a.DEATH_REASONS)!=null&&c[n]&&(i=x.GAME_TEXT.UI.GAME_OVER.DEATH_REASONS[n]),Ru&&(Ru.textContent=i);let r=Math.ceil(e/t);qs&&(qs.textContent=`Respawning in ${r}...`),Eo.classList.add("active"),mi&&clearInterval(mi),mi=setInterval(()=>{if(r-=1,r<=0){clearInterval(mi),mi=null,gc();return}qs&&(qs.textContent=`Respawning in ${r}...`)},1e3)}function gc(){Eo&&(Eo.classList.remove("active"),mi&&(clearInterval(mi),mi=null))}function mv(n,e){if(!os||!Ea)return;if(!n||Object.keys(n).length<=1){os.classList.remove("active");return}os.classList.add("active");const t=Object.entries(n).map(([i,r])=>{var s;return{id:i,score:((s=r.score)==null?void 0:s.current)??0,colorIndex:r.colorIndex??0,dead:!!r.dead,isLocal:i===e}}).sort((i,r)=>r.score-i.score);Ea.innerHTML="",t.forEach(i=>{const r=document.createElement("div");r.className="mp-scoreboard-entry",i.isLocal&&r.classList.add("local"),i.dead&&r.classList.add("dead");const s=document.createElement("div");s.className="mp-scoreboard-color",s.style.backgroundColor=Lu[i.colorIndex%Lu.length];const o=document.createElement("span");o.className="mp-scoreboard-name",o.textContent=i.isLocal?"You":`P${i.colorIndex+1}`;const a=document.createElement("span");a.className="mp-scoreboard-score",a.textContent=i.score,r.appendChild(s),r.appendChild(o),r.appendChild(a),Ea.appendChild(r)})}function gv(){os&&os.classList.remove("active")}function Ma(n){if(!Kr)return;const e=document.createElement("div");for(e.className="kill-feed-entry",e.textContent=n,Kr.appendChild(e),setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},500)},4e3);Kr.children.length>5;)Kr.removeChild(Kr.children[0])}function Iu(n,e,t=!0,i=!0,r=!0,s=!0){const{playerSnake:o,food:a,obstacles:c,enemies:l}=e;if(r&&o.segments&&o.segments.some(u=>u.x===n.x&&u.z===n.z)||t&&a.positions&&a.positions.some(u=>u.x===n.x&&u.z===n.z))return!0;if(i&&c.list){for(const u of c.list)if(u.occupiedCells.some(f=>f.x===n.x&&f.z===n.z))return!0}if(s&&l.list){for(const u of l.list)if(u.snake.some(f=>f.x===n.x&&f.z===n.z))return!0}return!1}function _c(n,e=!0,t=!0,i=!0,r=!0,s=0){const o=Math.floor(x.GRID_SIZE/2);let a,c=0;const l=x.GRID_SIZE*x.GRID_SIZE;for(;c<l;){if(a={x:Math.floor(Math.random()*x.GRID_SIZE)-o,y:0,z:Math.floor(Math.random()*x.GRID_SIZE)-o},Math.abs(a.x)<=s&&Math.abs(a.z)<=s){c++;continue}if(!Iu(a,n,e,t,i,r))if(t){let u=!1;for(const f of[-1,0,1]){for(const h of[-1,0,1])if(!(f===0&&h===0)&&Iu({x:a.x+f,z:a.z+h},n,!1,!0,!1,!1)){u=!0;break}if(u)break}if(!u)return a}else return a;c++}return console.error(`Could not find unique position after ${l} attempts.`),{x:0,y:0,z:0}}function wi(n,e,t,i,r=null){let s,o;i?(s=t.snake.head1,t.snake.head2,o=t.snake.body1,t.snake.body2):(s=t.enemy.head1,t.enemy.head2,o=t.enemy.body1,t.enemy.body2);const a=e?s:o;if(!a)return console.error(`Snake material missing! Player: ${i}, Head: ${e}`),new He(Ge.cube,new Lr({color:16711935}));const c=new He(Ge.cube,a.clone());if(c.scale.setScalar(x.UNIT_SIZE),c.position.set(n.x*x.UNIT_SIZE,n.y*x.UNIT_SIZE,n.z*x.UNIT_SIZE),c.castShadow=!0,c.receiveShadow=!1,c.position.y+=x.UNIT_SIZE/2,i)c.name=e?"playerSnakeHead":"playerSnakeBody";else{const l=r!==null?`_${r}`:"";c.name=e?`enemySnakeHead${l}`:`enemySnakeBody${l}`}return c}let jt=[],ri=null,fs=!1;const Ec=200;function _v(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800&&window.innerHeight<=600}function Ev(n){if(!n){console.error("Particle material is required for initParticles!");return}ri=n,jt=[],fs=_v(),console.log(`Device detected as: ${fs?"Mobile":"Desktop"}`)}function vc(n){return jt.length>Ec*.7&&(n=Math.max(1,Math.floor(n*.3))),fs&&(n=Math.max(1,Math.floor(n*.25))),n}function vv(n,e,t){if(!ri||!n||!e){console.warn("Cannot create food effect - material, scene or camera missing.");return}if(fs||jt.length>Ec*.8)return;const i=new Ve(x.PARTICLE_COLOR_NORMAL_FOOD),r=vc(x.PARTICLE_COUNT_NORMAL_FOOD);if(!(r<=0))for(let s=0;s<r;s++){const o=ri.clone();o.color=i.clone();const a=new He(Ge.particle,o);a.position.copy(t),a.scale.setScalar(.6),a.lookAt(e.position);const c=Math.random()*Math.PI*2,l=x.PARTICLE_SPEED*.6*(.6+Math.random()*.8),u=new G(Math.cos(c)*l,Math.random()*.5*l,Math.sin(c)*l),f=x.PARTICLE_LIFESPAN*.6;jt.push({mesh:a,velocity:u,life:f,initialLife:f}),n.add(a)}}function Ro(n,e,t,i,r=16777215){if(!ri||!n||!e){console.warn("Cannot create explosion - material, scene or camera missing.");return}const s=vc(i);if(s<=0)return;const o=new Ve(r);for(let a=0;a<s;a++){const c=ri.clone(),l=new Ve(16768392).lerp(new Ve(16755268),Math.random());c.color=o.clone().lerp(l,Math.random()*.5);const u=new He(Ge.particle,c);u.position.copy(t),u.lookAt(e.position);const f=Math.random()*Math.PI*2,h=x.PARTICLE_SPEED*(.6+Math.random()*.8),m=new G(Math.cos(f)*h,(Math.random()-.2)*h*.7,Math.sin(f)*h),v=x.PARTICLE_LIFESPAN*(.7+Math.random()*.6);jt.push({mesh:u,velocity:m,life:v,initialLife:v}),n.add(u)}}function Xd(n,e,t){if(!ri||!n||!e){console.warn("Cannot create kill effect - material, scene or camera missing.");return}let i=x.PARTICLE_COUNT_KILL;if(i=vc(i),i<=0)return;const r=new Ve(x.PARTICLE_COLOR_KILL),s=x.PARTICLE_SIZE*1.5,o=x.PARTICLE_LIFESPAN*1.5,a=x.PARTICLE_SPEED*1.2;for(let c=0;c<i;c++){const l=new ac(s,4,4),u=ri.clone();u.color.copy(r);const f=new He(l,u);f.position.copy(t);const h=c/i*Math.PI*8,m=c/i*5,v=c/i*4-2,M=new G(Math.cos(h)*m*a,v*a,Math.sin(h)*m*a);n.add(f),jt.push({mesh:f,velocity:M,life:o,initialLife:o})}}function Mv(n,e,t,i=9159498){if(!ri||!n||!e){console.warn("Cannot create frog effect - material, scene or camera missing.");return}let r=30;if(fs&&(r=Math.max(5,Math.floor(r*.25))),r<=0)return;const s=new Ve(i);for(let o=0;o<r;o++){const a=ri.clone(),c=new Ve().setHSL(Math.random()*.1+.3,.8,.6);a.color=s.clone().lerp(c,Math.random()*.3);const l=new He(Ge.particle,a);l.position.copy(t),l.lookAt(e.position);const u=Math.random()*Math.PI*2,f=x.PARTICLE_SPEED*(.7+Math.random()*.6),h=new G(Math.cos(u)*f*.7,(Math.random()*.8+.5)*f,Math.sin(u)*f*.7),m=x.PARTICLE_LIFESPAN*(.8+Math.random()*.7);jt.push({mesh:l,velocity:h,life:m,initialLife:m,isFrog:!0}),n.add(l)}}function xa(n,e){if(!e)return;const t=9.8;if(jt.length>Ec){const i=Math.floor(jt.length*.2);for(let r=0;r<i;r++){const s=jt[r];s&&s.mesh&&(e.remove(s.mesh),s.mesh.material&&s.mesh.material.dispose(),s.mesh.geometry&&s.mesh.geometry!==Ge.particle&&s.mesh.geometry.dispose(),s.mesh=null)}jt.splice(0,i),console.log(`Performance: Removed ${i} excess particles`)}for(let i=jt.length-1;i>=0;i--){const r=jt[i];if(r.life-=n,r.life<=0)e.remove(r.mesh),r.mesh.material&&r.mesh.material.dispose(),r.mesh.geometry&&r.mesh.geometry!==Ge.particle&&r.mesh.geometry.dispose(),r.mesh=null,jt.splice(i,1);else{r.mesh.position.addScaledVector(r.velocity,n);const s=Math.max(0,r.life/r.initialLife);r.mesh.material.transparent&&(r.mesh.material.opacity=s*.9);const o=Math.max(.1,s*.8+.2);r.mesh.scale.set(o,o,o),r.velocity.y-=t*n,r.isFrog&&(r.mesh.rotation.z+=n*(Math.random()*2-1),r.mesh.position.y<.5&&r.velocity.y<0&&(r.velocity.y=Math.abs(r.velocity.y)*.6,r.velocity.x*=.9,r.velocity.z*=.9))}}}function xv(n){n&&(jt.forEach(e=>n.remove(e.mesh)),jt=[])}function Mc(n,e=0){const t=Math.floor(x.GRID_SIZE/2);let i=0;const r=x.GRID_SIZE*x.GRID_SIZE;for(;i<r;){const s={x:Math.floor(n.rng.nextFloat()*x.GRID_SIZE)-t,y:0,z:Math.floor(n.rng.nextFloat()*x.GRID_SIZE)-t};if(Math.abs(s.x)<=e&&Math.abs(s.z)<=e){i++;continue}if(!Sv(n,s))return s;i++}return{x:0,y:0,z:0}}function Sv(n,e){var t,i,r,s,o,a;for(const c of Object.values(n.players))if((t=c.segments)!=null&&t.some(l=>l.x===e.x&&l.z===e.z))return!0;if((r=(i=n.food)==null?void 0:i.positions)!=null&&r.some(c=>c.x===e.x&&c.z===e.z))return!0;if((s=n.obstacles)!=null&&s.list){for(const c of n.obstacles.list)if((o=c.occupiedCells)!=null&&o.some(l=>l.x===e.x&&l.z===e.z))return!0}if((a=n.enemies)!=null&&a.list){for(const c of n.enemies.list)if(c.snake.some(l=>l.x===e.x&&l.z===e.z))return!0}return!1}function yv(n){const e=Math.floor(n.nextFloat()*100)+1;let t=0;for(const i of Object.keys(x.FOOD_SPAWN_RATIOS)){const r=x.FOOD_SPAWN_RATIOS[i]||0;if(t+=r,e<=t)return i}return"normal"}function Tv(n,e,t=0){for(let i=0;i<e;i++)xc(n,t)}function xc(n,e=0){const t=Mc(n,e),i=yv(n.rng),r={...t,type:i};if(i!=="normal"){const s=Xa(n),o=.8+n.rng.nextFloat()*.4,a=(n.rng.nextFloat()*2-1)*x.FROG_MOVEMENT.DISTANCE_VARIATION;r.movement={directionX:s.x,directionZ:s.z,timer:0,moveInterval:x.FROG_MOVEMENT.MOVE_INTERVAL*o,maxDistance:Math.max(1,x.FROG_MOVEMENT.MAX_DISTANCE+a),originX:r.x,originZ:r.z,changeProbability:x.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY}}return n.food.positions.push(r),r}function Xa(n){const e=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}];return e[n.rng.nextInt(e.length)]}function Yd(n,e,t=!1){const i=n.food;if(!(i!=null&&i.positions))return null;for(let r=0;r<i.positions.length;r++){const s=i.positions[r];if(e.x===s.x&&e.z===s.z){const o=Av(s.type,t);return{index:r,type:s.type,scoreValue:1,grow:s.type!=="shrink",effects:o}}}return null}function Av(n,e){if(n==="normal")return{alphaPoints:x.ALPHA_POINTS_FOOD,speedBoostDuration:x.FOOD_SPEED_BOOST_DURATION,alphaModeExtension:e?x.ALPHA_MODE_EXTENSION_PER_FOOD:0,addScoreMultiplier:e};const t=x.ALPHA_POINTS_FROG,i=e?x.ALPHA_POINTS_FROG_MULTIPLIER:1;return{alphaPoints:t*i,speedBoostDuration:0,alphaModeExtension:0,addScoreMultiplier:!1}}function wv(n,e){for(const t of n.food.positions){if(t.type==="normal")continue;if(!t.movement){const u=Xa(n);t.movement={directionX:u.x,directionZ:u.z,timer:0,moveInterval:x.FROG_MOVEMENT.MOVE_INTERVAL,maxDistance:x.FROG_MOVEMENT.MAX_DISTANCE,originX:t.x,originZ:t.z,changeProbability:x.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY}}if(t.movement.timer+=e,t.movement.timer<t.movement.moveInterval)continue;if(t.movement.timer=0,n.rng.nextFloat()<t.movement.changeProbability){const u=Xa(n);t.movement.directionX=u.x,t.movement.directionZ=u.z}let i=t.x+t.movement.directionX,r=t.z+t.movement.directionZ;const s=t.movement.maxDistance,o=Math.abs(i-t.movement.originX),a=Math.abs(r-t.movement.originZ),c=x.GRID_SIZE/2,l=i>=c||i<-c||r>=c||r<-c;(o>s||a>s||l)&&(Math.abs(t.x-t.movement.originX)>Math.abs(t.z-t.movement.originZ)?(t.movement.directionX=Math.sign(t.movement.originX-t.x)||t.movement.directionX*-1,t.movement.directionZ=0):(t.movement.directionZ=Math.sign(t.movement.originZ-t.z)||t.movement.directionZ*-1,t.movement.directionX=0),i=t.x+t.movement.directionX,r=t.z+t.movement.directionZ),t.x=i,t.z=r}}function bv(n){const e=new In,t=x.UNIT_SIZE*.4,i=new Sr({color:14494720,roughness:.7,metalness:.1}),r=new He(Ge.cube,i);r.scale.set(t*1.8,t*1.8,t*1.8),r.position.set(0,t*.9,0),r.castShadow=!0,e.add(r);const s=new Sr({color:9109504,roughness:.8,metalness:.1}),o=new He(Ge.cube,s);o.scale.set(t*.6,t*.3,t*.6),o.position.set(0,t*1.9,0),o.castShadow=!0,e.add(o);const a=new Sr({color:6636321,roughness:.9,metalness:.1}),c=new He(Ge.cube,a);c.scale.set(t*.5,t,t*.5),c.position.set(0,t*2.4,0),c.castShadow=!0,e.add(c);const l=new Sr({color:2263842,roughness:.7,metalness:.1}),u=new He(Ge.cube,l);return u.scale.set(t,t*.4,t*.6),u.position.set(t*.8,t*2.4,0),u.rotation.z=Math.PI*.15,u.castShadow=!0,e.add(u),e.userData.rotationSpeed=Math.random()*.01+.005,e.userData.rotationDirection=Math.random()>.5?1:-1,e}function qd(n,e,t){const i=t.food[e];if(!i)return q.system.error(`Food material missing for type: ${e}`),null;const r=new In;if(r.position.set(n.x*x.UNIT_SIZE,0,n.z*x.UNIT_SIZE),r.userData.foodType=e,e==="normal"){const s=bv();r.add(s)}else{Pv(r,i,e);let s=Math.random()*2-1,o=Math.random()*2-1;const a=Math.sqrt(s*s+o*o);if(a>0&&(s/=a,o/=a),x.FROG_MOVEMENT.MOVEMENT_STYLE==="crawl"){const c=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}],l=c[Math.floor(Math.random()*c.length)];s=l.x,o=l.z}r.userData.movementProperties={directionX:s,directionZ:o,hopFrequency:x.FROG_MOVEMENT.HOP_FREQUENCY+(Math.random()*2-1)*x.FROG_MOVEMENT.HOP_FREQUENCY_VARIATION,speed:x.FROG_MOVEMENT.BASE_SPEED+(Math.random()*2-1)*x.FROG_MOVEMENT.SPEED_VARIATION,originalGridPos:{...n},currentGridPos:{...n},timer:Math.random()*Math.PI*2,maxDistance:x.FROG_MOVEMENT.MAX_DISTANCE+(Math.random()*2-1)*x.FROG_MOVEMENT.DISTANCE_VARIATION,phaseOffset1:Math.random()*Math.PI*2,phaseOffset2:Math.random()*Math.PI*2,moveInterval:x.FROG_MOVEMENT.MOVE_INTERVAL*(.8+Math.random()*.4),targetPosition:null}}return r}function Rv(n){var i;const{scene:e,food:t}=n;if(!(!e||!(t!=null&&t.meshes))){for(const r of t.meshes)r&&(r.isGroup?r.traverse(s=>{var o;s.isMesh&&(s.geometry&&s.geometry!==Ge.cube&&s.geometry!==Ge.particle&&s.geometry.dispose(),s.material&&!((o=s.userData)!=null&&o.useSharedMaterial)&&(Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose()))}):r.isMesh&&(r.geometry&&r.geometry!==Ge.cube&&r.geometry!==Ge.particle&&r.geometry.dispose(),r.material&&!((i=r.userData)!=null&&i.useSharedMaterial)&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())),e.remove(r));t.meshes=[]}}function Sc(n){const{scene:e,materials:t,food:i}=n;if(!e||!(t!=null&&t.food)||!(i!=null&&i.positions))return;(!i.meshes||i.meshes.length!==i.positions.length||i.meshes.some(s=>!s)||i.meshes.some((s,o)=>{var a,c;return((a=s==null?void 0:s.userData)==null?void 0:a.foodType)!==((c=i.positions[o])==null?void 0:c.type)}))&&(Rv(n),i.positions.forEach(s=>{const o=qd(s,s.type,t);o&&(i.meshes.push(o),e.add(o))}));for(let s=0;s<i.positions.length;s++){const o=i.positions[s],a=i.meshes[s];a&&a.position.set(o.x*x.UNIT_SIZE,0,o.z*x.UNIT_SIZE)}}function Pv(n,e,t){const i=x.UNIT_SIZE*.4,r=(w,C)=>{const V=w.clone();return V.color&&(V.color=V.color.clone().multiplyScalar(C)),V},s=r(e,1.1),o=r(e,.8),a=new Sr({color:16777215}),c=new Sr({color:0}),l=new He(Ge.cube,e);l.scale.set(i*2,i,i*2),l.position.set(0,i/2,0),l.castShadow=!0,n.add(l);const u=new He(Ge.cube,s);u.scale.set(i*1.6,i*.35,i*1.6),u.position.set(0,i*.2,i*.1),u.castShadow=!0,n.add(u);const f=new He(Ge.cube,e);f.scale.set(i*1.6,i*.8,i),f.position.set(0,i/2,-i*1.5),f.castShadow=!0,n.add(f);const h=new He(Ge.cube,o);h.scale.set(i*1.2,i*.3,i*.4),h.position.set(0,i*.35,-i*2),h.castShadow=!0,n.add(h);const m=new He(Ge.cube,a);m.scale.set(i*.45,i*.45,i*.45),m.position.set(-i*.55,i,-i*1.8),m.castShadow=!0,n.add(m);const v=new He(Ge.cube,a);v.scale.set(i*.45,i*.45,i*.45),v.position.set(i*.55,i,-i*1.8),v.castShadow=!0,n.add(v);const M=new He(Ge.cube,c);M.scale.set(i*.18,i*.18,i*.18),M.position.set(-i*.55,i*.98,-i*2.02),M.castShadow=!0,n.add(M);const E=new He(Ge.cube,c);E.scale.set(i*.18,i*.18,i*.18),E.position.set(i*.55,i*.98,-i*2.02),E.castShadow=!0,n.add(E);const p=new He(Ge.cube,e);p.scale.set(i*.6,i*.6,i*.8),p.position.set(-i,i*.3,-i),p.castShadow=!0,n.add(p);const R=new He(Ge.cube,e);R.scale.set(i*.6,i*.6,i*.8),R.position.set(i,i*.3,-i),R.castShadow=!0,n.add(R);const S=new He(Ge.cube,o);S.scale.set(i*.8,i*.2,i*.9),S.position.set(-i,i*.05,-i*1.2),S.castShadow=!0,n.add(S);const L=new He(Ge.cube,o);L.scale.set(i*.8,i*.2,i*.9),L.position.set(i,i*.05,-i*1.2),L.castShadow=!0,n.add(L);const N=new He(Ge.cube,e);N.scale.set(i*.9,i*.7,i*1.2),N.position.set(-i*1.1,i*.35,i*.9),N.castShadow=!0,n.add(N);const I=new He(Ge.cube,e);I.scale.set(i*.9,i*.7,i*1.2),I.position.set(i*1.1,i*.35,i*.9),I.castShadow=!0,n.add(I);const b=new He(Ge.cube,o);b.scale.set(i*1.1,i*.2,i*1.2),b.position.set(-i*1.1,i*.05,i*1.4),b.castShadow=!0,n.add(b);const Y=new He(Ge.cube,o);Y.scale.set(i*1.1,i*.2,i*1.2),Y.position.set(i*1.1,i*.05,i*1.4),Y.castShadow=!0,n.add(Y),t==="ghost"&&n.traverse(w=>{w.isMesh&&w.material!==c&&(w.material=w.material.clone(),w.material.transparent=!0,w.material.opacity=.7)}),n.rotation.y=Math.random()*Math.PI*2}function Cv(n){const e=si("NUM_INITIAL_FOOD")||x.NUM_INITIAL_FOOD;Kd(n);for(let t=0;t<e;t++)yc(n)}function yc(n){const{scene:e,materials:t,food:i}=n;if(!e||!(t!=null&&t.food)||!i)return;const r=_c(n,!0,!0,!0,!0);if(!r){q.system.error("Failed to find a position for new food!");return}const s=Lv(),o=qd(r,s,t);o?(i.positions.push({...r,type:s}),i.meshes.push(o),e.add(o)):q.system.error(`Failed to create mesh for food type ${s}`)}function Lv(){const n=Math.floor(Math.random()*100)+1;let e=0;for(const t of ii){const i=x.FOOD_SPAWN_RATIOS[t.type]||0;if(e+=i,n<=e)return t.type}return q.warn("Food selection fallback - check that FOOD_SPAWN_RATIOS adds up to 100"),"normal"}function Iv(n,e){var h,m,v;const{scene:t,food:i,materials:r,camera:s,playerSnake:o}=e;if(!t||!(i!=null&&i.positions)||!(i!=null&&i.meshes)||!s||!o)return null;CE()&&q.gameplay.debug("checkAndEatFood called with position:",n,"Alpha Mode:",(h=o.alphaMode)==null?void 0:h.active,"Food positions count:",i.positions.length);let a=-1,c=null;const l=n.x*x.UNIT_SIZE,u=n.z*x.UNIT_SIZE,f=Yd({food:{positions:i.positions},player:{alphaMode:{active:((m=o.alphaMode)==null?void 0:m.active)||!1}}},{x:n.x,z:n.z});if(f)a=f.index,c=f.type;else for(let M=0;M<i.positions.length;M++){const E=i.meshes[M],p=i.positions[M];if(p.type==="normal")continue;const R=x.UNIT_SIZE*.8,S=E.position.x,L=E.position.z;if(Math.sqrt(Math.pow(l-S,2)+Math.pow(u-L,2))<R){a=M,c=p.type;break}}if(a!==-1){const M=i.meshes[a],E=ii.find(p=>p.type===c);if(c==="normal"){if(e.stats.applesEaten++,ln("eatApple"),e.playerSnake){const p=e.clock.getElapsedTime();e.playerSnake.speedBoostUntil=p+f.effects.speedBoostDuration,mt("Speed Boost!",49151),Ka(f.effects.alphaPoints,e),e.playerSnake.alphaMode&&e.playerSnake.alphaMode.active&&(e.playerSnake.alphaMode.endTime+=f.effects.alphaModeExtension,mt(`Alpha Mode +${f.effects.alphaModeExtension}s!`,16733986),f.effects.addScoreMultiplier&&Pc(p,e),q.gameplay.info(`Alpha Mode extended by ${x.ALPHA_MODE_EXTENSION_PER_FOOD} seconds! New end time:`,e.playerSnake.alphaMode.endTime))}}else e.stats.frogsEaten++,ln("eatFrog"),Ka(f.effects.alphaPoints,e),e.playerSnake.alphaMode.active&&mt(`+${f.effects.alphaPoints.toFixed(0)} ALPHA PTS!`,x.ALPHA_MODE_COLOR);return M&&(c==="normal"?vv(t,s,M.position):Mv(t,s,M.position,(E==null?void 0:E.colorHint.getHex())||9159498),M.isGroup?M.traverse(p=>{var R;p.isMesh&&(p.geometry&&p.geometry!==Ge.cube&&p.geometry!==Ge.particle&&p.geometry.dispose(),p.material&&!((R=p.userData)!=null&&R.useSharedMaterial)&&(Array.isArray(p.material)?p.material.forEach(S=>S.dispose()):p.material.dispose()))}):M.isMesh&&(M.geometry&&M.geometry!==Ge.cube&&M.geometry!==Ge.particle&&M.geometry.dispose(),M.material&&!((v=M.userData)!=null&&v.useSharedMaterial)&&(Array.isArray(M.material)?M.material.forEach(p=>p.dispose()):M.material.dispose())),t.remove(M),i.meshes[a]=null),E!=null&&E.effectText&&mt(E.effectText,E.colorHint.getHex()),i.meshes.splice(a,1),i.positions.splice(a,1),e.flags.useCoreSimulation||yc(e),{type:c,scoreValue:f.scoreValue,grow:f.grow}}return null}function Kd(n){var i;const{scene:e,food:t}=n;if(!(!e||!t)){if(t.meshes&&t.meshes.length>0)for(const r of t.meshes)r&&(e.children.includes(r)&&e.remove(r),r.isGroup?r.traverse(s=>{var o;s.isMesh&&(s.geometry&&s.geometry!==Ge.cube&&s.geometry!==Ge.particle&&s.geometry.dispose(),s.material&&!((o=s.userData)!=null&&o.useSharedMaterial)&&(Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose()))}):r.isMesh&&(r.geometry&&r.geometry!==Ge.cube&&r.geometry!==Ge.particle&&r.geometry.dispose(),r.material&&!((i=r.userData)!=null&&i.useSharedMaterial)&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())));t.meshes?t.meshes.length=0:t.meshes=[],t.positions?t.positions.length=0:t.positions=[],q.system.info("Food system reset, all food items removed and resources disposed")}}function Sa(n,e){var i;const{food:t}=n;if(!(!t||!t.meshes)){for(const r of t.meshes)if(r.userData.foodType==="normal"){const s=r.children[0];if(s&&s.userData.rotationSpeed){s.rotation.y+=s.userData.rotationSpeed*s.userData.rotationDirection*e;const o=n.clock.getElapsedTime(),a=Math.sin(o*.8)*.05;s.position.y=x.UNIT_SIZE*.45+a}}else if(r.userData.foodType!=="normal"&&r.userData.movementProperties){if(n.flags.useCoreSimulation){const h=r.userData.movementProperties,m=((i=n.simulation)==null?void 0:i.time)??n.clock.getElapsedTime(),v=Math.abs(Math.sin((m+h.phaseOffset1)*h.hopFrequency*2)),M=Math.abs(Math.sin((m+h.phaseOffset2)*h.hopFrequency*4))*.2,E=(v+M)*x.FROG_MOVEMENT.HOP_HEIGHT*x.UNIT_SIZE;r.position.y=E;continue}const s=r.userData.movementProperties;s.timer+=e;const o=s.originalGridPos.x*x.UNIT_SIZE,a=s.originalGridPos.z*x.UNIT_SIZE,c=r.position.x,l=r.position.z;if(x.FROG_MOVEMENT.MOVEMENT_STYLE==="crawl"){if(s.timer>=s.moveInterval){s.timer=0;const E=s.currentGridPos.x+s.directionX,p=s.currentGridPos.z+s.directionZ;if(Math.sqrt(Math.pow(E-s.originalGridPos.x,2)+Math.pow(p-s.originalGridPos.z,2))>s.maxDistance||Math.random()<x.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY){const S={x:s.originalGridPos.x-s.currentGridPos.x,z:s.originalGridPos.z-s.currentGridPos.z},L=Math.sqrt(S.x*S.x+S.z*S.z);L>0&&(S.x/=L,S.z/=L);const N=[{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1}];let I=N[0],b=-1/0;for(const Y of N){const w=Y.x*S.x+Y.z*S.z;w>b&&(b=w,I=Y)}if(Math.random()<.5)s.directionX=I.x,s.directionZ=I.z;else{const Y=N[Math.floor(Math.random()*N.length)];s.directionX=Y.x,s.directionZ=Y.z}}s.currentGridPos.x+=s.directionX,s.currentGridPos.z+=s.directionZ,s.targetPosition={x:s.currentGridPos.x*x.UNIT_SIZE,z:s.currentGridPos.z*x.UNIT_SIZE}}const h=Math.min(s.timer/s.moveInterval,1),m=h*h*(3-2*h);s.targetPosition&&(r.position.x=vl.lerp(c,s.targetPosition.x,m*s.speed),r.position.z=vl.lerp(l,s.targetPosition.z,m*s.speed));const M=Math.sin(m*Math.PI)*x.FROG_MOVEMENT.HOP_HEIGHT*x.UNIT_SIZE;r.position.y=M}else{s.timer+=e*s.hopFrequency;const h=s.timer,m=s.maxDistance*x.UNIT_SIZE,v=Math.sin(h)*m*s.directionX,M=Math.cos(h*.7)*m*s.directionZ,E=.3,p=Math.sin(h*1.3+s.phaseOffset1)*m*E*s.directionX,R=Math.cos(h*1.7+s.phaseOffset2)*m*E*s.directionZ;r.position.x=o+v+p,r.position.z=a+M+R;const S=Math.abs(Math.sin(h*2)),L=Math.abs(Math.sin(h*4))*.2,N=(S+L)*x.FROG_MOVEMENT.HOP_HEIGHT*x.UNIT_SIZE;if(r.position.y=N,Math.random()<x.FROG_MOVEMENT.DIRECTION_CHANGE_PROBABILITY*e*60){s.directionX=Math.random()*2-1,s.directionZ=Math.random()*2-1;const I=Math.sqrt(s.directionX*s.directionX+s.directionZ*s.directionZ);I>0&&(s.directionX/=I,s.directionZ/=I)}}const u=r.position.x-c,f=r.position.z-l;if(Math.abs(u)>.01||Math.abs(f)>.01){const h=Math.atan2(u,f)+Math.PI,m=10*e;let M=h-r.rotation.y;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;r.rotation.y+=M*m}}}}function Dv(n,e){const{food:t}=e;if(!t||t.positions.length===0)return{index:-1,position:null};let i=-1,r=1/0;return t.positions.forEach((s,o)=>{const a=s.x-n.x,c=s.z-n.z,l=a*a+c*c;l<r&&(r=l,i=o)}),{index:i,position:i!==-1?t.positions[i]:null}}function Tc(n,e){const t=(n==null?void 0:n.list)||[];for(const i of t)if(i.occupiedCells){for(const r of i.occupiedCells)if(r.x===e.x&&r.z===e.z)return i.type}else if(i.x===e.x&&i.z===e.z)return i.type;return null}function Ov(n,e){const t=(n==null?void 0:n.list)||[];for(const i of t)for(let r=0;r<i.snake.length;r++){const s=i.snake[r];if(s.x===e.x&&s.z===e.z)return{id:i.id,segmentIndex:r}}return null}function Zd(n,e,t,i){var M,E,p,R,S,L,N,I;const r=(M=t.obstacle)==null?void 0:M.tree_trunk,s=(E=t.obstacle)==null?void 0:E.tree_leaves,o=(p=t.obstacle)==null?void 0:p.bush,a=(R=t.obstacle)==null?void 0:R.flower_bush,c=(S=t.obstacle)==null?void 0:S.pink_flower,l=(L=t.obstacle)==null?void 0:L.white_daisy,u=(N=t.obstacle)==null?void 0:N.white_tulip,f=(I=t.obstacle)==null?void 0:I.yellow_flower;if(!r||!s||!o||!a||!c||!l||!u||!f)return console.error("Obstacle materials missing!"),null;const h=new In;h.position.set(n.x*x.UNIT_SIZE,0,n.z*x.UNIT_SIZE);let m=[];const v=x.UNIT_SIZE/2;if(e==="tree"){const b=4+Math.floor(Math.random()*2);for(let Q=0;Q<b;Q++){const fe=new He(Ge.cube,r);fe.scale.setScalar(x.UNIT_SIZE),fe.position.y=Q*x.UNIT_SIZE+v,fe.castShadow=!0,fe.receiveShadow=!0,h.add(fe)}m.push({x:n.x,z:n.z});const Y=b-1,w=[{y:0,radius:2,cornerDrop:.35},{y:1,radius:2,cornerDrop:.55},{y:2,radius:1,cornerDrop:.15}],C=(Q,fe,k)=>{const X=new He(Ge.cube,s);X.scale.setScalar(x.UNIT_SIZE),X.position.set(Q*x.UNIT_SIZE,(Y+fe)*x.UNIT_SIZE+v,k*x.UNIT_SIZE),X.castShadow=!0,X.receiveShadow=!1,h.add(X)};w.forEach(Q=>{for(let fe=-Q.radius;fe<=Q.radius;fe++)for(let k=-Q.radius;k<=Q.radius;k++)Math.abs(fe)===Q.radius&&Math.abs(k)===Q.radius&&Math.random()<Q.cornerDrop||fe===0&&k===0&&Q.y<=1||C(fe,Q.y,k)}),[{x:2,z:0},{x:-2,z:0},{x:0,z:2},{x:0,z:-2}].forEach(Q=>{Math.random()<.4&&C(Q.x,-1,Q.z)})}else if(e==="bush"){m.push({x:n.x,z:n.z});const b=(Y,w,C)=>{const V=new He(Ge.cube,s);V.scale.setScalar(x.UNIT_SIZE),V.position.set(Y*x.UNIT_SIZE,w*x.UNIT_SIZE+v,C*x.UNIT_SIZE),V.castShadow=!0,V.receiveShadow=!0,h.add(V)};for(let Y=-1;Y<=1;Y++)for(let w=-1;w<=1;w++)Math.abs(Y)===1&&Math.abs(w)===1&&Math.random()<.5||b(Y,0,w);b(0,1,0),Math.random()<.6&&b(1,1,0),Math.random()<.6&&b(-1,1,0),Math.random()<.6&&b(0,1,1),Math.random()<.6&&b(0,1,-1)}else return null;return i.add(h),{meshGroup:h,cells:m}}function Nv(n){const{scene:e,materials:t}=n;if(!e||!(t!=null&&t.obstacle))return;jd(n);const i=new In;e.add(i),n.obstacles={list:[],group:i};const r=si("NUM_OBSTACLES")||x.NUM_OBSTACLES;console.log(`Creating ${r} initial obstacles...`);for(let s=0;s<r;s++){const o=_c(n,!1,!0,!1,!1,x.START_SAFE_ZONE);if(!o){console.warn("Could not find space for new obstacle!");continue}const a=Math.floor(Math.random()*du.length),c=du[a].type;Fv(n,c,o)}for(let s=0;s<30;s++){const o={x:Math.floor((Math.random()-.5)*(x.GRID_SIZE-4)),z:Math.floor((Math.random()-.5)*(x.GRID_SIZE-4))};Math.abs(o.x)<3&&Math.abs(o.z)<3&&(o.x+=o.x>=0?3:-3,o.z+=o.z>=0?3:-3),Uv(n,o)}}function Uv(n,e){const{obstacles:t,materials:i}=n,r=new In;r.position.set(e.x*x.UNIT_SIZE,0,e.z*x.UNIT_SIZE);const s=["pink_flower","white_daisy","white_tulip","yellow_flower"],o=s[Math.floor(Math.random()*s.length)];let a;switch(o){case"pink_flower":a=i.obstacle.pink_flower;break;case"white_daisy":a=i.obstacle.white_daisy;break;case"white_tulip":a=i.obstacle.white_tulip;break;case"yellow_flower":a=i.obstacle.yellow_flower;break;default:a=i.obstacle.yellow_flower}const c=new Ti(x.UNIT_SIZE*.8,x.UNIT_SIZE*.8),l=new He(c,a),u=(.5+Math.random()*.3)*x.UNIT_SIZE;l.scale.set(u,u,u),l.position.y=x.UNIT_SIZE*.4,l.rotation.y=Math.random()*Math.PI*2,l.rotation.x=Math.PI/2+(Math.random()-.5)*.2,l.castShadow=!0,l.receiveShadow=!0,r.add(l),t.group.add(r)}function Fv(n,e,t){const{materials:i,obstacles:r}=n;if(!(i!=null&&i.obstacle)||!(r!=null&&r.group))return;const s=Zd(t,e,i,r.group);s&&s.meshGroup&&s.cells&&r.list.push({...t,type:e,mesh:s.meshGroup,occupiedCells:s.cells})}function kv(n){const{scene:e,materials:t,obstacles:i}=n;if(!e||!(t!=null&&t.obstacle)||!(i!=null&&i.list))return;i.group||(i.group=new In,e.add(i.group));const r=new Set;i.list.forEach(s=>{s.mesh&&r.add(`${s.x},${s.z}`)}),i.list.forEach(s=>{if(s.mesh)return;const o=Zd({x:s.x,z:s.z},s.type,t,i.group);o&&(s.mesh=o.meshGroup,s.occupiedCells=s.occupiedCells||o.cells)})}function Bv(n,e){return Tc(e.obstacles,n)||!1}function jd(n){const{scene:e,obstacles:t}=n;if(t!=null&&t.group){for(;t.group.children.length>0;)t.group.remove(t.group.children[0]);e&&e.remove(t.group)}t&&(t.list=[],t.group=null),console.log("Obstacles reset.")}let sn={};function zv(n){const{enemies:e}=n;if(e){Qd(n),q.gameplay.info(`Creating ${x.NUM_ENEMIES} enemies...`);for(let t=0;t<x.NUM_ENEMIES;t++)Jd(t,n)}}function Jd(n,e){const{scene:t,materials:i,enemies:r,clock:s}=e;if(!t||!(i!=null&&i.enemy)||!r||!s)return;const o=_c(e,!1,!0,!0,!0,x.ENEMY_START_SAFE_ZONE);if(!o){q.gameplay.warn(`Could not find start position for enemy ${n}. Skipping.`);return}const a=Math.random()<.5?Math.random()<.5?1:-1:0,c=a===0?Math.random()<.5?1:-1:0,l={x:a,y:0,z:c};let u=[],f={...o};for(let v=0;v<x.ENEMY_START_LENGTH;v++)u.push({...f}),f.x-=l.x,f.z-=l.z;let h=[];u.forEach((v,M)=>{const p=wi(v,M===0,i,!1,n);p&&(h.push(p),t.add(p))}),sn[n]=h;const m={id:n,snake:u,direction:{...l},nextDirection:{...l},targetFoodIndex:null,state:"seeking",lastMoveTime:s.getElapsedTime()+Math.random()*x.ENEMY_SNAKE_SPEED,animationFrame:0,animationTimer:s.getElapsedTime(),speed:x.ENEMY_SNAKE_SPEED};r.list.push(m),Po(m,e),q.gameplay.info(`Enemy ${n} initialized.`)}function Qd(n){const{scene:e,enemies:t}=n;if(e){Object.keys(sn).forEach(r=>{const s=sn[r];s&&Array.isArray(s)&&s.forEach(o=>{o&&(o.geometry&&o.geometry.dispose(),o.material&&(Array.isArray(o.material)?o.material.forEach(a=>a.dispose()):o.material.dispose()),e.children.includes(o)&&e.remove(o))})});const i=[];e.children.forEach(r=>{r.name&&r.name.startsWith("enemySnake")&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose()),i.push(r))}),i.forEach(r=>e.remove(r))}t&&(t.list=[],t.respawnQueue=[]),sn={},q.gameplay.info("Enemies reset completely.")}function Hv(n,e){const{scene:t,camera:i}=e,r=sn[n];!t||!i||!r||r.forEach((s,o)=>{o===0?Xd(t,i,s.position.clone()):Ro(t,i,s.position.clone(),x.PARTICLE_COUNT_KILL/r.length,x.PARTICLE_COLOR_KILL)})}function Ac(n,e){var a;const{scene:t,materials:i,enemies:r}=n;if(!t||!(i!=null&&i.enemy)||!(r!=null&&r.list))return;Object.keys(sn).forEach(c=>{const l=Number(c);r.list.find(u=>u.id===l)||(sn[l].forEach(u=>{u.geometry&&u.geometry.dispose(),u.material&&(Array.isArray(u.material)?u.material.forEach(f=>f.dispose()):u.material.dispose()),t.remove(u)}),delete sn[l])});const o=((a=n.network)==null?void 0:a.enabled)&&e!=null?1-Math.exp(-x.MULTIPLAYER_LERP_SPEED*e):1;r.list.forEach(c=>{const l=sn[c.id];if(!l||l.length!==c.snake.length){l&&l.forEach(f=>{f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material.forEach(h=>h.dispose()):f.material.dispose()),t.remove(f)});const u=[];c.snake.forEach((f,h)=>{const m=wi(f,h===0,i,!1,c.id);m&&(u.push(m),t.add(m))}),sn[c.id]=u}else l.forEach((u,f)=>{const h=c.snake[f];if(!u||!h)return;const m=h.x*x.UNIT_SIZE,v=h.z*x.UNIT_SIZE;o>=1?u.position.set(m,x.UNIT_SIZE/2,v):(u.position.x+=(m-u.position.x)*o,u.position.y=x.UNIT_SIZE/2,u.position.z+=(v-u.position.z)*o)});Po(c,n)})}function Gv(n,e,t){const{enemies:i,clock:r}=t;!(i!=null&&i.list)||!r||i.list.forEach(s=>{s.animationTimer+=n,s.animationTimer>.25&&(s.animationFrame=(s.animationFrame+1)%2,s.animationTimer=0,Po(s,t)),Wv(s,t),e-s.lastMoveTime>=s.speed&&($v(s,t),s.lastMoveTime=e),Vv(s,e)})}function Vv(n,e){const t=sn[n.id];if(!t)return;const i=x.ENEMY_TAIL_EDIBLE_SEGMENTS;if(!(t.length<i))for(let r=t.length-i;r<t.length;r++){const s=t[r];if(!s||!s.userData.isPulsing)continue;const o=1.5,a=.2,c=s.userData.pulseStartTime||0,l=e-c,u=.3+Math.sin(l*o)*a;s.material&&(s.material.emissiveIntensity=u)}}function Wv(n,e){const t=n.snake[0],i=n.direction;if(n.state==="seeking"){const{index:r,position:s}=Dv(t,e);if(n.targetFoodIndex=r,s){const o=s.x-t.x,a=s.z-t.z;let c={x:0,y:0,z:0};if(Math.abs(o)>Math.abs(a))c.x=Math.sign(o);else if(Math.abs(a)>0)c.z=Math.sign(a);else{n.state="idle",n.nextDirection=i;return}let l=c,u={x:t.x+l.x,z:t.z+l.z};if(_n(u,n,e)){const f=Ks(c);let h=!1;for(const m of f)if(u={x:t.x+m.x,y:0,z:t.z+m.z},!_n(u,n,e)){l=m,h=!0;break}if(!h)if(u={x:t.x+i.x,y:0,z:t.z+i.z},!_n(u,n,e))l=i;else{const m={x:-i.x,y:0,z:-i.z};if(u={x:t.x+m.x,y:0,z:t.z+m.z},!_n(u,n,e))l=m;else{const v=Ks(i);for(const M of v)if(u={x:t.x+M.x,y:0,z:t.z+M.z},!_n(u,n,e)){l=M;break}n.state="idle"}}}n.snake.length>1&&l.x===-i.x&&(l.z,-i.z),n.nextDirection=l}else n.state="idle",n.nextDirection=i}else if(n.state==="idle"){if(Math.random()<.15){const r=Ks(i),s=Math.floor(Math.random()*r.length);let o=r[s],a={x:t.x+o.x,z:t.z+o.z};_n(a,n,e)&&(o=r[(s+1)%r.length],a={x:t.x+o.x,y:0,z:t.z+o.z},_n(a,n,e)&&(o=i,a={x:t.x+i.x,y:0,z:t.z+i.z},_n(a,n,e)&&(o=i))),n.nextDirection=o}else{let r=i,s={x:t.x+i.x,z:t.z+i.z};if(_n(s,n,e)){const o=Ks(i);let a=!1;for(const c of o)if(s={x:t.x+c.x,y:0,z:t.z+c.z},!_n(s,n,e)){r=c,a=!0;break}a||(r={x:-i.x,y:0,z:-i.z},s={x:t.x+r.x,y:0,z:t.z+r.z},_n(s,n,e)&&(r=i))}n.nextDirection=r}Math.random()<.05&&(n.state="seeking")}}function _n(n,e,t){const i=x.GRID_SIZE/2;if(n.x>=i||n.x<-i||n.z>=i||n.z<-i)return!0;for(let r=0;r<e.snake.length-1;r++)if(e.snake[r].x===n.x&&e.snake[r].z===n.z)return!0;if(Bv(n,t))return!0;for(const r of t.enemies.list)if(r.id!==e.id&&r.snake.some(s=>s.x===n.x&&s.z===n.z))return!0;return!1}function Ks(n){return n.x!==0?[{x:0,y:0,z:1*n.x},{x:0,y:0,z:-1*n.x}]:n.z!==0?[{x:-1*n.z,y:0,z:0},{x:1*n.z,y:0,z:0}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0}]}function $v(n,e){var h;const{scene:t,materials:i,food:r,camera:s}=e;if(!t||!(i!=null&&i.enemy)||!r||!s)return;n.direction=n.nextDirection;const o=n.snake[0],a={x:o.x+n.direction.x,y:0,z:o.z+n.direction.z};if(_n(a,n,e)){q.gameplay.warn(`Enemy ${n.id} attempted invalid move to`,a),n.state="idle";return}let c=!1,l=-1;for(let m=0;m<r.positions.length;m++)if(a.x===r.positions[m].x&&a.z===r.positions[m].z){c=!0,l=m;break}const u=sn[n.id];if(!u){q.gameplay.error(`Meshes not found for enemy ${n.id}`);return}let f=!1;if(c){f=!0;const m=r.meshes[l],v=(h=r.positions[l])==null?void 0:h.type;m&&(Ro(t,s,m.position,x.PARTICLE_COUNT_EAT/2,43690),t.remove(m)),r.meshes.splice(l,1),r.positions.splice(l,1),yc(e),n.state="seeking",q.gameplay.info(`Enemy ${n.id} ate ${v}`)}if(n.snake.unshift(a),f){const m=wi(a,!0,i,!1,n.id);m&&(t.add(m),u.unshift(m))}else{n.snake.pop();const m=u.pop();if(m)m.position.set(a.x*x.UNIT_SIZE,x.UNIT_SIZE/2,a.z*x.UNIT_SIZE),u.unshift(m);else{q.gameplay.error(`Enemy ${n.id} missing tail mesh!`);const v=wi(a,!0,i,!1,n.id);v&&(t.add(v),u.unshift(v))}}Po(n,e)}let ya=null;function Xv(){return ya||(ya=new Dt({color:16711680,side:cn})),ya}function Po(n,e){const{materials:t}=e;if(!(t!=null&&t.enemy))return;const i=sn[n.id];if(!i)return;const r=x.ENEMY_TAIL_EDIBLE_SEGMENTS,s=Xv();i.forEach((o,a)=>{o&&(a===0?o.material=n.animationFrame===0?t.enemy.head1:t.enemy.head2:i.length>=r&&a>=i.length-r?o.material!==s&&(o.material=s,o.userData.pulseStartTime=Date.now()/1e3,o.userData.isPulsing=!0):o.material=n.animationFrame===0?t.enemy.body1:t.enemy.body2)})}function Yv(n,e,t=!1){const{enemies:i}=e;if(!(i!=null&&i.list))return{collided:!1};const r=Ov(i,n);if(r){const s=i.list.find(c=>c.id===r.id);if(!s)return{collided:!1};const o=r.segmentIndex;return{collided:!0,isTail:o>=s.snake.length-x.ENEMY_TAIL_EDIBLE_SEGMENTS,isHead:o===0,enemyId:s.id,segmentIndex:o}}return{collided:!1}}function qv(n,e){const{scene:t,enemies:i,clock:r}=e;if(!t||!(i!=null&&i.list)||!r)return!1;const s=i.list.findIndex(c=>c.id===n);if(s===-1)return!1;i.list[s];const o=sn[n];o&&o.forEach((c,l)=>{l===0?Xd(t,e.camera,c.position.clone()):Ro(t,e.camera,c.position.clone(),x.PARTICLE_COUNT_KILL/o.length,x.PARTICLE_COLOR_KILL),c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material.forEach(u=>u.dispose()):c.material.dispose()),t.remove(c)}),i.list.splice(s,1),delete sn[n];const a=r.getElapsedTime()+x.ENEMY_RESPAWN_TIME;return i.respawnQueue||(i.respawnQueue=[]),i.respawnQueue.push({id:n,respawnTime:a}),q.gameplay.info(`Enemy ${n} killed. Scheduled to respawn in ${x.ENEMY_RESPAWN_TIME} seconds.`),!0}function Du(n){if(n.flags.useCoreSimulation)return;const{enemies:e,clock:t}=n;if(!(e!=null&&e.respawnQueue)||!t)return;const i=t.getElapsedTime(),r=[];for(const s of e.respawnQueue)i>=s.respawnTime?(Jd(s.id,n),q.gameplay.info(`Enemy ${s.id} respawned.`)):r.push(s);e.respawnQueue=r}const xo=2;var Qe=(n=>(n.PlayerMoved="PLAYER_MOVED",n.PlayerDead="PLAYER_DEAD",n.PlayerRespawned="PLAYER_RESPAWNED",n.PlayerKilledPlayer="PLAYER_KILLED_PLAYER",n.FoodEaten="FOOD_EATEN",n.FoodSpawned="FOOD_SPAWNED",n.EnemyMoved="ENEMY_MOVED",n.EnemyKilled="ENEMY_KILLED",n.EnemyRespawned="ENEMY_RESPAWNED",n.PowerupApplied="POWERUP_APPLIED",n.AlphaModeActivated="ALPHA_MODE_ACTIVATED",n.AlphaModeEnded="ALPHA_MODE_ENDED",n.AlphaPointsChanged="ALPHA_POINTS_CHANGED",n.ScorePopup="SCORE_POPUP",n.ScoreChanged="SCORE_CHANGED",n.Debug="DEBUG",n))(Qe||{});const Ou=1;function Kv(n){const e=new TextDecoder().decode(n);return JSON.parse(e).state}const Nu=1,Ya=1,Zs={Snapshot:"snapshot",Meta:"meta",Error:"error",Events:"events"};function ef(n,e,t=0){const i=n.players[e],r=i.segments[0],s={x:r.x+i.direction.x,y:0,z:r.z+i.direction.z},o=x.GRID_SIZE/2;if(s.x>=o||s.x<-o||s.z>=o||s.z<-o)return{newHead:s,collisionReason:"WALL"};if(!i.ghostModeActive)for(let a=0;a<i.segments.length-1;a++){const c=i.segments[a];if(Zv(s,c,t))return{newHead:s,collisionReason:"SELF"}}if(!i.ghostModeActive){const a=Tc(n.obstacles,s);if(a)return{newHead:s,collisionReason:"OBSTACLE",obstacleType:a}}return{newHead:s,collisionReason:null,obstacleType:null}}function Zv(n,e,t=0){return t>0?Math.abs(n.x-e.x)<1-t&&Math.abs(n.z-e.z)<1-t:n.x===e.x&&n.z===e.z}function jv(n,e){if(n.flags.gameOver)return;const t=e.playerId||"local",i=n.players[t];i&&(tf(i),e.turn==="left"?Uu(i,Qv):e.turn==="right"&&Uu(i,eM))}function Jv(n,e,t){var u;const i=[],r=n.players[e];if(!r||r.dead)return{events:i};r.moveTimer+=t;let s=1;r.speedBoostUntil&&n.time<r.speedBoostUntil&&(s*=x.FOOD_SPEED_BOOST_MULTIPLIER),(u=r.alphaMode)!=null&&u.active&&(s*=x.ALPHA_MODE_SPEED_MULTIPLIER);const o=r.speed/s;if(r.moveTimer<o)return{events:i};if(r.moveTimer=0,tf(r),r.turnQueue.queue.length>0){const f=r.turnQueue.queue.shift();f?r.direction={...f}:r.direction={...r.nextDirection}}else r.direction={...r.nextDirection};if(!r.segments[0])return i.push({type:Qe.Debug,payload:{message:"NO_HEAD"}}),{events:i};const{newHead:c,collisionReason:l}=ef(n,e);return l==="WALL"?(i.push({type:Qe.PlayerDead,playerId:e,payload:{reason:"WALL_COLLISION"}}),{events:i}):l==="SELF"?(i.push({type:Qe.PlayerDead,playerId:e,payload:{reason:"SELF_COLLISION"}}),{events:i}):l==="OBSTACLE"?(i.push({type:Qe.PlayerDead,playerId:e,payload:{reason:"OBSTACLE_COLLISION"}}),{events:i}):(r.segments.unshift(c),r.turnQueue.lastDirection={...r.direction},r.segments.pop(),i.push({type:Qe.PlayerMoved,playerId:e}),{events:i})}function tf(n){n.turnQueue||(n.turnQueue={queue:[],lastDirection:{...n.direction}})}function Uu(n,e){const t=n.turnQueue.queue.length>0?n.turnQueue.queue[n.turnQueue.queue.length-1]:n.turnQueue.lastDirection,i=e(t);i.x===-t.x&&i.z===-t.z||(n.turnQueue.queue.push({...i}),n.nextDirection=i)}function Qv(n){return{x:n.z,y:0,z:-n.x}}function eM(n){return{x:-n.z,y:0,z:n.x}}let dt=[],Rn={};const Ta=[5025616,2201331,16007990,16771899];function tM(n){const{playerSnake:e,clock:t}=n;if(!e)return;e.segments=[],e.direction={x:1,z:0},e.lastDirection={x:1,z:0},e.pendingTurns=[],e.speed=si("BASE_SNAKE_SPEED")||x.BASE_SNAKE_SPEED,e.moveTimer=0,e.animationFrame=0,e.animationTimer=0,e.ghostModeActive=!1,e.activePowerUps=[],e.enlargedHeadUntil=0,e.speedBoostUntil=0,e.immediateDirectionChange=!1,e.lastTextureUpdateFrame=0;const i=t.getElapsedTime();e.alphaMode={active:!1,progress:0,startTime:0,endTime:0,lastScoreThreshold:0,alphaPoints:0,lastDecayTime:i,scoreMultiplier:1,scoreMultiplierStack:[],consecutiveActivations:0,cooldownActive:!1,cooldownEndTime:0};for(let r=0;r<x.MIN_SNAKE_LENGTH;r++)e.segments.push({x:-r,y:0,z:0});nf(n),q.gameplay.info("Player snake initialized."),hs(n)}function nf(n){const{scene:e,materials:t,playerSnake:i}=n;!e||!(t!=null&&t.snake)||!(i!=null&&i.segments)||(wc(n),i.segments.forEach((r,s)=>{const a=wi(r,s===0,t,!0);a&&(dt.push(a),e.add(a))}),Ri(n))}function wc(n){const{scene:e}=n;e&&dt.forEach(t=>{var i;e.remove(t),t.geometry&&!((i=t.userData)!=null&&i.sharedGeometry)&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):t.material.dispose())}),dt=[]}function nM(n){wc(n),tM(n),Vd(0,n),q.gameplay.info("Player reset complete.")}function Fu(n,e,t){const{playerSnake:i,score:r,flags:s}=t;if(!(s.gameOver||!i)){if(!s.useCoreSimulation)i.alphaMode.active||ff(e,t),hs(t),Cc(r.current,t),Rc(r.current,e,t),bc(e,t),i.alphaMode.active?lf(e,t):i.alphaMode.cooldownActive&&$d(i.alphaMode.cooldownEndTime),of(e,t);else if(hs(t),i.alphaMode.active){const o=i.alphaMode.endTime-e,a=Math.max(.001,i.alphaMode.endTime-i.alphaMode.startTime),c=Math.max(0,Math.min(1,o/a));Mo(c,o,i.alphaMode.scoreMultiplier)}i.enlargedHeadUntil>0&&e>i.enlargedHeadUntil&&(i.enlargedHeadUntil=0,dt.length>0&&dt[0]&&dt[0].scale.set(1,1,1)),i.animationTimer+=n,i.animationTimer>=.25&&(i.animationTimer=0,i.animationFrame=i.animationFrame===0?1:0,Ri(t))}}function rf(n,e){var a;const{playerSnake:t,scene:i,materials:r}=n;if(!(t!=null&&t.segments)||!i||!(r!=null&&r.snake))return;if(dt.length!==t.segments.length){wc(n),nf(n);return}const o=((a=n.network)==null?void 0:a.enabled)&&e!=null?1-Math.exp(-x.MULTIPLAYER_LERP_SPEED*e):1;for(let c=0;c<t.segments.length;c++){const l=t.segments[c],u=dt[c];if(!u)continue;const f=l.x*x.UNIT_SIZE,h=x.UNIT_SIZE/2,m=l.z*x.UNIT_SIZE;o>=1?u.position.set(f,h,m):(u.position.x+=(f-u.position.x)*o,u.position.y=h,u.position.z+=(m-u.position.z)*o)}}const iM=new Xn(1,1,1);function rM(n,e,t,i,r){const s=[],o=Ta[t%Ta.length]||Ta[1];return e.forEach((a,c)=>{const u=c===0?r.snake.head1:r.snake.body1;if(!u)return;const f=u.clone();f.color=new Ve(o);const h=new He(iM,f);h.scale.setScalar(x.UNIT_SIZE),h.position.set(a.x*x.UNIT_SIZE,x.UNIT_SIZE/2,a.z*x.UNIT_SIZE),h.castShadow=!0,h.receiveShadow=!1,h.name=`remotePlayer_${n}_${c}`,s.push(h),i.add(h)}),s}function qa(n,e){const t=Rn[n];t&&(t.forEach(i=>{e.remove(i),i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose())}),delete Rn[n])}function sM(n,e){const{scene:t,materials:i,players:r,localPlayerId:s}=n;if(!t||!(i!=null&&i.snake)||!r)return;const o=s||"local";rf(n,e);const a=Object.keys(r).filter(l=>l!==o);Object.keys(Rn).forEach(l=>{r[l]||qa(l,t)});const c=e!=null?1-Math.exp(-x.MULTIPLAYER_LERP_SPEED*e):.35;a.forEach(l=>{const u=r[l];if(!u||!u.segments||u.segments.length===0){Rn[l]&&Rn[l].forEach(h=>{h.visible=!1});return}if(u.dead){Rn[l]&&Rn[l].forEach(h=>{h.visible=!1});return}const f=Rn[l];if(!f||f.length!==u.segments.length){qa(l,t),Rn[l]=rM(l,u.segments,u.colorIndex||1,t,i);return}for(let h=0;h<u.segments.length;h++){const m=u.segments[h],v=f[h];if(!v||!m)continue;v.visible=!0;const M=m.x*x.UNIT_SIZE,E=m.z*x.UNIT_SIZE;v.position.x+=(M-v.position.x)*c,v.position.y=x.UNIT_SIZE/2,v.position.z+=(E-v.position.z)*c}})}function ku(n){const{scene:e}=n;Object.keys(Rn).forEach(t=>{qa(t,e)}),Rn={}}function Bu(n){const{playerSnake:e,flags:t}=n;if(t.gameOver)return;const i=e.lastDirection.x,r=e.lastDirection.z,s={x:r,y:0,z:-i};let o;if(e.pendingTurns.length>0?o=e.pendingTurns[e.pendingTurns.length-1]:o={x:i,z:r},(s.x!==-o.x||s.z!==-o.z)&&(e.pendingTurns.push({...s}),e.pendingTurns.length===1&&(e.nextDirection=s),e.immediateDirectionChange=!0,e.pendingTurns.length>1)){const a=Lc(n);e.moveTimer<a*.8&&(e.moveTimer=a*.8)}}function zu(n){const{playerSnake:e,flags:t}=n;if(t.gameOver)return;const i=e.lastDirection.x,r=e.lastDirection.z,s={x:-r,y:0,z:i};let o;if(e.pendingTurns.length>0?o=e.pendingTurns[e.pendingTurns.length-1]:o={x:i,z:r},(s.x!==-o.x||s.z!==-o.z)&&(e.pendingTurns.push({...s}),e.pendingTurns.length===1&&(e.nextDirection=s),e.immediateDirectionChange=!0,e.pendingTurns.length>1)){const a=Lc(n);e.moveTimer<a*.8&&(e.moveTimer=a*.8)}}function oM(n,e,t){var l,u;const{playerSnake:i,score:r,flags:s,scene:o,materials:a}=t;if(s.gameOver||!i)return;i.alphaMode.active||ff(e,t),hs(t),Cc(r.current,t),Rc(r.current,e,t),bc(e,t),i.alphaMode.active?lf(e,t):i.alphaMode.cooldownActive&&$d(i.alphaMode.cooldownEndTime),of(e,t),i.enlargedHeadUntil>0&&e>i.enlargedHeadUntil&&(i.enlargedHeadUntil=0,dt.length>0&&dt[0]&&dt[0].scale.set(1,1,1)),i.animationTimer+=n,i.animationTimer>=.25&&(i.animationTimer=0,i.animationFrame=i.animationFrame===0?1:0,Ri(t)),i.moveTimer+=n;const c=Lc(t);if(i.immediateDirectionChange&&(i.direction=i.nextDirection,i.immediateDirectionChange=!1),i.moveTimer>=c){if(i.moveTimer=0,i.pendingTurns.length>0?(i.direction={...i.pendingTurns[0]},i.pendingTurns.shift(),i.pendingTurns.length>0&&(i.nextDirection={...i.pendingTurns[0]})):i.direction={...i.nextDirection},i.lastDirection={...i.direction},i.direction.x===0&&i.direction.z===0){q.gameplay.warn("Player direction became zero. Reverting to previous.");return}if(!i.segments||i.segments.length===0){q.gameplay.error("No player snake segments found!");return}if(!i.segments[0]){q.gameplay.error("Player head segment is undefined!");return}const{newHead:h,collisionReason:m,obstacleType:v}=ef({obstacles:t.obstacles},x.COLLISION_FORGIVENESS);if(m==="WALL"){q.gameplay.info("Collision: Wall"),ro(t,"WALL_COLLISION");return}if(m==="SELF"){q.gameplay.info("Collision: Self"),ro(t,"SELF_COLLISION");return}if(m==="OBSTACLE"){q.gameplay.info("Collision: Obstacle type:",v);let R="OBSTACLE_COLLISION";v==="tree"?R="TREE_COLLISION":v==="bush"&&(R="BUSH_COLLISION"),ro(t,R);return}const M=Yv(h,t,!0);if(M.collided&&!pM(M,t))return;const E=Iv(h,t);let p=!1;if(E){q.gameplay.info("Food eaten in playerSnake.js:",E.type,"Alpha Mode active:",(l=i.alphaMode)==null?void 0:l.active);let R=1;i.alphaMode&&i.alphaMode.active&&(R=i.alphaMode.scoreMultiplier,q.gameplay.info(`Applying Alpha Mode score multiplier: x${R}`));const S=E.scoreValue,L=Math.round(S*R);t.score.current+=L,R>1&&mt(`+${L} pts!`,16766720),_s(t.score.current);const N=ii.find(I=>I.type===E.type);N&&dM(N.type,t),p=E.grow!==!1}if(i.segments.unshift(h),p){const R=wi(h,!0,a,!0);R&&(o.add(R),dt.unshift(R))}else{i.segments.pop();const R=dt.pop();if(R)R.position.set(h.x*x.UNIT_SIZE,x.UNIT_SIZE/2,h.z*x.UNIT_SIZE),dt.unshift(R);else{q.gameplay.error("Tail mesh missing during move!");const S=wi(h,!0,a,!0);S&&(o.add(S),dt.unshift(S))}}af(t),i.lastDirection={...i.direction},jE(((u=i.alphaMode)==null?void 0:u.active)||!1)}}function aM(n,e){const{playerSnake:t,clock:i}=n;if(!(!t||!i)){if(t.enlargedHeadUntil=e+x.ENLARGED_HEAD_DURATION,dt.length>0&&dt[0]){const r=x.ENLARGED_HEAD_SCALE;dt[0].scale.set(r,r,r)}q.gameplay.info(`Player head enlarged for ${x.ENLARGED_HEAD_DURATION} seconds`)}}function Hu(n,e){const{playerSnake:t,clock:i}=e,r=i.getElapsedTime();if(qv(n,e)){let s=1;t.alphaMode&&t.alphaMode.active&&(s=t.alphaMode.scoreMultiplier,Pc(r,e),q.gameplay.info(`Applied Alpha Mode score multiplier: x${s} and added new multiplier`));const o=x.ENEMY_KILL_SCORE,a=Math.round(o*s);if(e.score.current+=a,e.enemies.kills+=1,e.stats.snakesEaten+=1,s>1&&mt(`+${a} pts!`,16766720),ln("eatSnake"),_s(e.score.current),Es(e.enemies.kills),mt(dv(),x.PARTICLE_COLOR_KILL),sf(e),aM(e,r),cM(e,x.ENEMY_KILL_SEGMENTS),t.alphaMode.active){const c=x.ALPHA_MODE_EXTENSION_PER_ENEMY;t.alphaMode.endTime+=c,mt(`+${c}s ALPHA TIME`,x.ALPHA_MODE_COLOR),q.gameplay.info(`Alpha mode extended by ${c} seconds! New end time:`,t.alphaMode.endTime)}return!0}return!1}function cM(n,e){const{playerSnake:t,scene:i,materials:r}=n;if(!t||!i||!r)return;const s=t.segments[t.segments.length-1];if(s){for(let o=0;o<e;o++){const a={...s};t.segments.push(a);const c=wi(a,!1,r,!0);c&&(i.add(c),dt.push(c))}af(n)}}const Aa=new G,Gu=new G,wa=new G,Vu=new ji,Wu=new wt,lM=new G(0,1,0);function uM(n){var c;const{camera:e,playerSnake:t,scene:i}=n,r=(c=n.lights)==null?void 0:c.directionalLight;if(!e||!t||t.segments.length===0||dt.length===0||!r)return;const o=dt[0].position,a=Math.max(2,x.CAMERA_DISTANCE*.2);Aa.set(t.direction.x,0,t.direction.z).normalize(),Gu.copy(o).addScaledVector(Aa,a),r.target&&r.target.position.lerp(o,x.CAMERA_LAG*1.5),wa.copy(o).addScaledVector(Aa,-x.CAMERA_DISTANCE),wa.y=x.CAMERA_HEIGHT,e.position.lerp(wa,x.CAMERA_POSITION_SMOOTHNESS),Wu.lookAt(e.position,Gu,lM),Vu.setFromRotationMatrix(Wu),e.quaternion.slerp(Vu,x.CAMERA_ROTATION_SMOOTHNESS)}function dM(n,e){var o;const{playerSnake:t,clock:i}=e;if(!t||!i)return;t.activePowerUps||(t.activePowerUps=[]);const r=(o=e.flags)!=null&&o.useCoreSimulation?e.simulation.time:i.getElapsedTime(),s=ii.find(a=>a.type===n);if(!s){q.gameplay.error(`Unknown power-up type: ${n}`);return}switch(q.gameplay.info(`Applying power-up: ${s.description}`),x.CAMERA_SHAKE_ENABLED&&n!=="normal"&&sf(e),n){case"speed":t.speed=x.BASE_SNAKE_SPEED/x.POWERUP_SPEED_MULTIPLIER,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),vi(e);break;case"ghost":t.ghostModeActive=!0,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),Ri(e),vi(e);break;case"score_x2":t.scoreMultiplier=x.POWERUP_SCORE_MULTIPLIER,t.activePowerUps.push({type:n,endTime:r+s.powerUpDuration}),vi(e);break;case"shrink":const a=t.segments.length,c=Math.min(x.POWERUP_SHRINK_AMOUNT,a-x.MIN_SNAKE_LENGTH);if(c>0){t.segments.splice(t.segments.length-c,c);for(let l=0;l<c;l++){const u=dt.pop();u&&e.scene&&e.scene.remove(u)}vi(e,`Shrunk by ${c} segments!`)}break}}function sf(n){const{camera:e,cameraEffects:t,clock:i}=n;!e||!i||!t||!t.shake||(t.shake.originalPosition.copy(e.position),t.shake.active=!0,t.shake.startTime=i.getElapsedTime(),t.shake.duration=x.CAMERA_SHAKE_DURATION,t.shake.intensity=x.CAMERA_SHAKE_INTENSITY)}function of(n,e){const{playerSnake:t}=e;if(!(t!=null&&t.activePowerUps))return;let i=!1,r=t.activePowerUps.length;for(;r--;){const s=t.activePowerUps[r];if(n>=s.endTime){switch(q.gameplay.info(`Power-up expired: ${s.type}`),s.type){case"speed":t.speed=x.BASE_SNAKE_SPEED,mt("Speed boost ended");break;case"ghost":t.ghostModeActive=!1,Ri(e),mt("Ghost mode ended");break;case"score_x2":t.scoreMultiplier=1,mt("Score multiplier ended");break}t.activePowerUps.splice(r,1),i=!0}}vi(e)}function vi(n,e=""){const{playerSnake:t,clock:i}=n;if(!(t!=null&&t.activePowerUps)||!i)return;const r=i.getElapsedTime();if(e){as(e);return}if(t.activePowerUps.length>0){const s=t.activePowerUps.map(o=>{const c=Math.max(0,o.endTime-r).toFixed(1),l=ii.find(f=>f.type===o.type);return`${l?l.description:o.type}: ${c}s`});as(s.join(" | "))}else as("")}function $u(n){const{playerSnake:e,clock:t}=n;if(!(e!=null&&e.activePowerUps)||!t)return;const i=t.getElapsedTime();let r=!1;for(let s=e.activePowerUps.length-1;s>=0;s--){const o=e.activePowerUps[s];if(i>=o.endTime){switch(q.gameplay.info(`Power-up expired: ${o.type}`),o.type){case"speed":e.speed=x.BASE_SNAKE_SPEED,mt("Speed boost ended");break;case"ghost":e.ghostModeActive=!1,Ri(n),mt("Ghost mode ended");break;case"score_x2":e.scoreMultiplier=1,mt("Score multiplier ended");break}e.activePowerUps.splice(s,1),r=!0}}vi(n)}function Ri(n,e=!1){const{playerSnake:t,materials:i}=n;if(!(i!=null&&i.snake)||dt.length===0||!e&&t.lastTextureUpdateFrame===t.animationFrame)return;t.lastTextureUpdateFrame=t.animationFrame;let r,s;t.alphaMode.active?(r=t.animationFrame===0?i.snake.head1.clone():i.snake.head2.clone(),s=t.animationFrame===0?i.snake.body1.clone():i.snake.body2.clone(),r.color.setHex(x.ALPHA_MODE_COLOR),s.color.setHex(x.ALPHA_MODE_COLOR)):t.ghostModeActive?(r=t.animationFrame===0?i.snake.head1.clone():i.snake.head2.clone(),s=t.animationFrame===0?i.snake.body1.clone():i.snake.body2.clone(),r.transparent=!0,r.opacity=.6,s.transparent=!0,s.opacity=.6):(r=t.animationFrame===0?i.snake.head1:i.snake.head2,s=t.animationFrame===0?i.snake.body1:i.snake.body2),dt.forEach((o,a)=>{o&&(a===0?o.material=r:o.material=s)})}function af(n){const{playerSnake:e,materials:t}=n;if(dt.length===0||!(t!=null&&t.snake))return;let i,r;e.alphaMode.active?(i=e.animationFrame===0?t.snake.head1.clone():t.snake.head2.clone(),r=e.animationFrame===0?t.snake.body1.clone():t.snake.body2.clone(),i.color.setHex(x.ALPHA_MODE_COLOR),r.color.setHex(x.ALPHA_MODE_COLOR)):e.ghostModeActive?(i=e.animationFrame===0?t.snake.head1.clone():t.snake.head2.clone(),r=e.animationFrame===0?t.snake.body1.clone():t.snake.body2.clone(),i.transparent=!0,i.opacity=.6,r.transparent=!0,r.opacity=.6):(i=e.animationFrame===0?t.snake.head1:t.snake.head2,r=e.animationFrame===0?t.snake.body1:t.snake.body2),dt[0].material=i,dt.length>1&&dt[1]&&(dt[1].material=r)}function fM(n){const{playerSnake:e}=n;e.alphaMode.cooldownActive=!1,e.alphaMode.consecutiveActivations=0;const t=n.score.current,i=x.ALPHA_MODE_SCORE_THRESHOLD,r=Math.floor(t/i)-1;e.alphaMode.lastScoreThreshold=r,q.gameplay.info("Alpha Mode cooldown reset. lastScoreThreshold set to:",r)}function Ka(n,e){const{playerSnake:t}=e;t.alphaMode.active||(t.alphaMode.alphaPoints+=n,hs(e))}function bc(n,e){const{playerSnake:t}=e;if(t.alphaMode.active)return!1;const i=si("ALPHA_POINTS_THRESHOLD")||x.ALPHA_POINTS_THRESHOLD;return t.alphaMode.alphaPoints>=i?(q.gameplay.info(`Alpha Mode triggered by points (${t.alphaMode.alphaPoints}/${i})`),t.alphaMode.alphaPoints=0,cf(n,e),!0):!1}function Rc(n,e,t){const{playerSnake:i}=t,r=x.ALPHA_MODE_SCORE_THRESHOLD,s=Math.floor(n/r);q.gameplay.debug(`Alpha Mode Check - Current Threshold: ${s}, Last Threshold: ${i.alphaMode.lastScoreThreshold}`),q.gameplay.debug(`Alpha Mode Active: ${i.alphaMode.active}, Cooldown Active: ${i.alphaMode.cooldownActive}`),s>i.alphaMode.lastScoreThreshold&&!i.alphaMode.active?(i.alphaMode.lastScoreThreshold=s,cf(e,t),q.gameplay.info("Alpha Mode activated via score threshold! Threshold:",s)):(s<=i.alphaMode.lastScoreThreshold&&q.gameplay.debug("Alpha Mode not activated: Current threshold not greater than last threshold"),i.alphaMode.active&&q.gameplay.debug("Alpha Mode not activated: Alpha Mode is already active"))}function cf(n,e){const{playerSnake:t}=e,i=si("ALPHA_MODE_DURATION")||x.ALPHA_MODE_DURATION;t.alphaMode.active=!0,t.alphaMode.progress=1,t.alphaMode.startTime=n,t.alphaMode.endTime=n+i,t.alphaMode.scoreMultiplier=x.ALPHA_MODE_SCORE_MULTIPLIER,Pc(n,e),t.alphaMode.consecutiveActivations++,Wd(),(void 0)(),Mo(1,i,t.alphaMode.scoreMultiplier),q.gameplay.info(`Alpha Mode activated for ${i} seconds, multiplier: ${t.alphaMode.scoreMultiplier}`)}function lf(n,e){const{playerSnake:t}=e;if(!t.alphaMode.active)return;if(n>=t.alphaMode.endTime){t.alphaMode.active=!1,t.speed=x.BASE_SNAKE_SPEED,t.alphaMode.scoreMultiplier=1,t.alphaMode.scoreMultiplierStack=[],Mo(0,0),mt("Alpha Mode ended"),Ri(e);const o=e.score.current;Cc(o,e),q.gameplay.info("Alpha Mode deactivated");return}const i=t.alphaMode.endTime-n,r=Math.max(.001,t.alphaMode.endTime-t.alphaMode.startTime),s=Math.max(0,Math.min(1,i/r));uf(n,t),Mo(s,i,t.alphaMode.scoreMultiplier)}function uf(n,e){if(e.alphaMode.scoreMultiplierStack=e.alphaMode.scoreMultiplierStack.filter(t=>t.endTime>n),e.alphaMode.scoreMultiplierStack.length>0){let t=1;e.alphaMode.scoreMultiplierStack.forEach(i=>{t*=i.value}),t=Math.min(t,x.ALPHA_MODE_MAX_SCORE_MULTIPLIER),e.alphaMode.scoreMultiplier=t}else e.alphaMode.scoreMultiplier=1}function Pc(n,e){const{playerSnake:t}=e;if(!t.alphaMode.active)return;const i={value:x.ALPHA_MODE_SCORE_MULTIPLIER,endTime:n+x.ALPHA_MODE_SCORE_MULTIPLIER_DURATION};t.alphaMode.scoreMultiplierStack.push(i),uf(n,t),mt(`Score x${t.alphaMode.scoreMultiplier.toFixed(1)}!`),q.gameplay.info(`Added score multiplier. Current total: x${t.alphaMode.scoreMultiplier}`)}let ba=0;function hM(){const n=x.GAME_TEXT.ALPHA_MODE.ALPHA_KILL_MESSAGES;if(!n||n.length===0)return x.GAME_TEXT.ALPHA_MODE.KILL_MESSAGE||"ALPHA KILL!";const e=n[ba];return ba=(ba+1)%n.length,e}function pM(n,e,t){const{playerSnake:i}=e;return i.alphaMode.active?(console.log("Alpha Mode active - killing enemy snake regardless of collision point"),Hu(n.enemyId,e),ln("alphaKillExplode1"),Bd(),mt(hM(),x.ALPHA_MODE_COLOR),!0):n.isTail?(console.log("Hit enemy tail - killing enemy snake"),Hu(n.enemyId,e),Ka(x.ALPHA_POINTS_ENEMY,e),!0):i.ghostModeActive?(console.log("Ghost Mode active - passing through enemy"),!0):(console.log("Hit enemy body/head without Alpha Mode or Ghost Mode - player dies"),ro(e,"ENEMY_COLLISION"),!1)}function ro(n,e){const{scene:t,playerSnake:i,camera:r}=n;!t||!i||!r||(df(n),Sf(n,e))}function df(n){const{scene:e,playerSnake:t,camera:i}=n;!e||!t||!i||(ln("playerDeath"),dt.length>0&&Ro(e,i,dt[0].position,x.PARTICLE_COUNT_DEATH,16729156))}function Cc(n,e){const{playerSnake:t}=e,i=x.ALPHA_MODE_SCORE_THRESHOLD;if(t.alphaMode.active)return;(typeof t.alphaMode.lastScoreThreshold!="number"||isNaN(t.alphaMode.lastScoreThreshold))&&(q.gameplay.info("Fixing invalid lastScoreThreshold value:",t.alphaMode.lastScoreThreshold),t.alphaMode.lastScoreThreshold=Math.max(0,Math.floor(n/i)-1));const r=(t.alphaMode.lastScoreThreshold+1)*i,s=n-t.alphaMode.lastScoreThreshold*i,o=i;let a=0;if(o>0&&(a=Math.min(100,Math.floor(s/o*100))),t.alphaMode.scoreProgress=a,q.gameplay.info(`Alpha Mode Progress: ${a}% (Score: ${n}, Next Threshold: ${r})`),a>=100&&!t.alphaMode.cooldownActive){q.gameplay.info("Alpha Mode at 100% - Checking activation state:",{lastScoreThreshold:t.alphaMode.lastScoreThreshold,currentThreshold:Math.floor(n/i),cooldownActive:t.alphaMode.cooldownActive});const c=e.clock.getElapsedTime();Rc(n,c,e)}}function hs(n){const{playerSnake:e}=n;if(e.alphaMode.active)return;const t=e.alphaMode.alphaPoints,i=si("ALPHA_POINTS_THRESHOLD")||x.ALPHA_POINTS_THRESHOLD,r=i>0?i:1,s=Math.min(100,Math.floor(t/r*100));if((!e.alphaMode.lastDisplayedPercentage||e.alphaMode.lastDisplayedPercentage!==s||n.frameCount%10===0)&&(fv(s,t,r),e.alphaMode.lastDisplayedPercentage=s),s>=100&&!e.alphaMode.cooldownActive){const o=n.clock.getElapsedTime();bc(o,n)}}function ff(n,e){const{playerSnake:t}=e;if(e.frameCount%5!==0)return;if(!t.alphaMode.lastDecayTime||t.alphaMode.lastDecayTime===0||isNaN(t.alphaMode.lastDecayTime)){t.alphaMode.lastDecayTime=n;return}const i=n-t.alphaMode.lastDecayTime;if(i>0&&i<1&&t.alphaMode.alphaPoints>0){const s=x.ALPHA_POINTS_DECAY_RATE*i;t.alphaMode.alphaPoints-=s,t.alphaMode.alphaPoints=Math.max(0,t.alphaMode.alphaPoints)}t.alphaMode.lastDecayTime=n}function Lc(n){const{playerSnake:e}=n;let t=e.speed,i=1;return e.speedBoostUntil>0&&(i*=x.FOOD_SPEED_BOOST_MULTIPLIER),e.alphaMode.active&&(i*=x.ALPHA_MODE_SPEED_MULTIPLIER),t/=i,t}function mM(n,e){let t=0,i=0;const r=c=>{var h,m,v;const l=n.core.tick;if((h=n.network)!=null&&h.enabled){const M=n.network.lastSnapshotTick||0;M!==i&&(i=M,t=0),t++}const u=(m=n.network)!=null&&m.enabled?l+t:l+1,f={playerId:n.localPlayerId||"local",tick:u,turn:c,version:Ya};if((v=n.network)!=null&&v.enabled&&typeof n.network.sendInput=="function"){n.network.sendInput(f);return}n.inputQueue.push(f)},s=c=>{if(n.flags.gameOver){c.key.toLowerCase()==="r"&&yf();return}switch(["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"].includes(c.key.toLowerCase())&&c.preventDefault(),c.key.toLowerCase()){case"arrowleft":case"a":n.flags.useCoreSimulation?r("left"):(Bu(n),n.playerSnake.immediateDirectionChange=!0);break;case"arrowright":case"d":n.flags.useCoreSimulation?r("right"):(zu(n),n.playerSnake.immediateDirectionChange=!0);break;case"p":console.log("Debug Game State:",n);break}},o=c=>{n.flags.gameOver||(c.preventDefault(),n.flags.useCoreSimulation?r("left"):(Bu(n),n.playerSnake.immediateDirectionChange=!0))},a=c=>{n.flags.gameOver||(c.preventDefault(),n.flags.useCoreSimulation?r("right"):(zu(n),n.playerSnake.immediateDirectionChange=!0))};return window.addEventListener("keydown",s),e.leftButton&&e.leftButton.addEventListener("touchstart",o,{passive:!1}),e.rightButton&&e.rightButton.addEventListener("touchstart",a,{passive:!1}),()=>{console.log("Removing input listeners"),window.removeEventListener("keydown",s),e.leftButton&&e.leftButton.removeEventListener("touchstart",o),e.rightButton&&e.rightButton.removeEventListener("touchstart",a)}}var cs=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";n=u}var r=(performance||Date).now(),s=r,o=0,a=t(new cs.Panel("FPS","#0ff","#002")),c=t(new cs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new cs.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,l)){var f=performance.memory;l.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};cs.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,u=2*o,f=3*o,h=15*o,m=74*o,v=30*o,M=document.createElement("canvas");M.width=a,M.height=c,M.style.cssText="width:80px;height:48px";var E=M.getContext("2d");return E.font="bold "+9*o+"px Helvetica,Arial,sans-serif",E.textBaseline="top",E.fillStyle=t,E.fillRect(0,0,a,c),E.fillStyle=e,E.fillText(n,l,u),E.fillRect(f,h,m,v),E.fillStyle=t,E.globalAlpha=.9,E.fillRect(f,h,m,v),{dom:M,update:function(p,R){i=Math.min(i,p),r=Math.max(r,p),E.fillStyle=t,E.globalAlpha=1,E.fillRect(0,0,a,h),E.fillStyle=e,E.fillText(s(p)+" "+n+" ("+s(i)+"-"+s(r)+")",l,u),E.drawImage(M,f+o,h,m-o,v,f,h,m-o,v),E.fillRect(f+m-o,h,o,v),E.fillStyle=t,E.globalAlpha=.9,E.fillRect(f+m-o,h,o,s((1-p/R)*v))}}};function gM(){q.system.info("Initializing game mode system...");const n=H.gameMode;q.system.info(`Current game mode: ${n}`);const e=document.getElementById("normalModeBtn"),t=document.getElementById("casualModeBtn"),i=document.getElementById("normalModeBtnSettings"),r=document.getElementById("casualModeBtnSettings");e&&t&&(Fn(e,t,n),e.addEventListener("click",()=>{js(x.GAME_MODES.NORMAL),Fn(e,t,x.GAME_MODES.NORMAL),i&&r&&Fn(i,r,x.GAME_MODES.NORMAL)}),t.addEventListener("click",()=>{js(x.GAME_MODES.CASUAL),Fn(e,t,x.GAME_MODES.CASUAL),i&&r&&Fn(i,r,x.GAME_MODES.CASUAL)})),i&&r&&(Fn(i,r,n),i.addEventListener("click",()=>{js(x.GAME_MODES.NORMAL),Fn(i,r,x.GAME_MODES.NORMAL),e&&t&&Fn(e,t,x.GAME_MODES.NORMAL)}),r.addEventListener("click",()=>{js(x.GAME_MODES.CASUAL),Fn(i,r,x.GAME_MODES.CASUAL),e&&t&&Fn(e,t,x.GAME_MODES.CASUAL)}));const s=uc();q.system.info("Current mode settings:",s)}function Fn(n,e,t){t===x.GAME_MODES.CASUAL?(n.classList.remove("active"),e.classList.add("active")):(n.classList.add("active"),e.classList.remove("active"))}function js(n){if(n===x.GAME_MODES.NORMAL||n===x.GAME_MODES.CASUAL){q.system.info(`Setting game mode to: ${n}`),fE(n);const e=uc();q.system.info(`Game mode set to ${n}. Settings:`,e)}else q.system.warn(`Invalid game mode: ${n}`)}function hf(n){let e=n>>>0;const t=()=>{e+=1831565813;let r=Math.imul(e^e>>>15,1|e);return r^=r+Math.imul(r^r>>>7,61|r),((r^r>>>14)>>>0)/4294967296};return{nextFloat:t,nextInt:r=>r<=0?0:Math.floor(t()*r),seed:n}}function So(n){return{segments:[],direction:{x:1,y:0,z:0},nextDirection:{x:1,y:0,z:0},speed:0,moveTimer:0,animationFrame:0,animationTimer:0,scoreMultiplier:1,ghostModeActive:!1,activePowerUps:[],enlargedHeadUntil:0,alphaMode:{active:!1,startTime:0,endTime:0,lastScoreThreshold:0,alphaPoints:0,lastDecayTime:0,scoreMultiplier:1,scoreMultiplierStack:[],consecutiveActivations:0,cooldownActive:!1,cooldownEndTime:0,progress:0},dead:!1,respawnAt:0,score:{current:0,multiplier:1},colorIndex:0}}function pf(n=Date.now()){return{time:0,tick:0,eventIdCounter:0,rng:hf(n),players:{},enemies:{list:[],kills:0},food:{positions:[]},obstacles:{list:[]},flags:{gameOver:!1}}}function mf(n){const e=n.core||pf();if(n.players&&Object.keys(n.players).length>0)e.players=n.players;else if(n.playerSnake){const i=n.localPlayerId||"local",r=So();e.players[i]=Object.assign(r,n.playerSnake)}const t=n.localPlayerId||"local";return e.players[t]||(e.players[t]=So()),e.enemies=n.enemies,e.food.positions=n.food.positions,e.obstacles=n.obstacles,e.flags=n.flags,n.core=e,e}function _M(n,e){n.core=e,n.players=e.players;const t=n.localPlayerId||"local";n.playerSnake=e.players[t]||null;const i=e.players[t];i&&(n.score=i.score),n.enemies={...n.enemies,...e.enemies},n.food={...n.food,positions:e.food.positions},n.obstacles={...n.obstacles,...e.obstacles},n.flags={...n.flags,...e.flags}}function EM(n,e){const t=[];for(const i of n.enemies.list)if(i.animationTimer+=e,i.animationTimer>.25&&(i.animationFrame=(i.animationFrame+1)%2,i.animationTimer=0),vM(i,n),n.time-i.lastMoveTime>=i.speed){const r=MM(i,n);i.lastMoveTime=n.time,r.moved&&t.push({type:Qe.EnemyMoved,payload:{enemyId:i.id}}),r.foodSpawned&&t.push({type:Qe.FoodSpawned,payload:{type:r.foodSpawned.type,x:r.foodSpawned.x,z:r.foodSpawned.z}})}return{events:t}}function vM(n,e){const t=n.snake[0],i=n.direction;if(n.state==="seeking"){const{index:r,position:s}=SM(t,e);if(n.targetFoodIndex=r,s){const o=s.x-t.x,a=s.z-t.z;let c={x:0,y:0,z:0};if(Math.abs(o)>Math.abs(a))c.x=Math.sign(o);else if(Math.abs(a)>0)c.z=Math.sign(a);else{n.state="idle",n.nextDirection=i;return}let l=c,u={x:t.x+l.x,z:t.z+l.z};if(En(u,n,e)){const f=Js(c);let h=!1;for(const m of f)if(u={x:t.x+m.x,y:0,z:t.z+m.z},!En(u,n,e)){l=m,h=!0;break}if(!h)if(u={x:t.x+i.x,y:0,z:t.z+i.z},!En(u,n,e))l=i;else{const m={x:-i.x,y:0,z:-i.z};if(u={x:t.x+m.x,y:0,z:t.z+m.z},!En(u,n,e))l=m;else{const v=Js(i);for(const M of v)if(u={x:t.x+M.x,y:0,z:t.z+M.z},!En(u,n,e)){l=M;break}n.state="idle"}}}n.nextDirection=l}else n.state="idle",n.nextDirection=i}else if(n.state==="idle"){if(e.rng.nextFloat()<.15){const r=Js(i),s=e.rng.nextInt(r.length);let o=r[s],a={x:t.x+o.x,z:t.z+o.z};En(a,n,e)&&(o=r[(s+1)%r.length],a={x:t.x+o.x,y:0,z:t.z+o.z},En(a,n,e)&&(o=i,a={x:t.x+i.x,y:0,z:t.z+i.z},En(a,n,e)&&(o=i))),n.nextDirection=o}else{let r=i,s={x:t.x+i.x,z:t.z+i.z};if(En(s,n,e)){const o=Js(i);let a=!1;for(const c of o)if(s={x:t.x+c.x,y:0,z:t.z+c.z},!En(s,n,e)){r=c,a=!0;break}a||(r={x:-i.x,y:0,z:-i.z},s={x:t.x+r.x,y:0,z:t.z+r.z},En(s,n,e)&&(r=i))}n.nextDirection=r}e.rng.nextFloat()<.05&&(n.state="seeking")}}function En(n,e,t){const i=x.GRID_SIZE/2;if(n.x>=i||n.x<-i||n.z>=i||n.z<-i)return!0;for(let r=0;r<e.snake.length-1;r++)if(e.snake[r].x===n.x&&e.snake[r].z===n.z)return!0;if(Tc(t.obstacles,n))return!0;for(const r of t.enemies.list)if(r.id!==e.id&&r.snake.some(s=>s.x===n.x&&s.z===n.z))return!0;return!1}function Js(n){return n.x!==0?[{x:0,y:0,z:1*n.x},{x:0,y:0,z:-1*n.x}]:n.z!==0?[{x:-1*n.z,y:0,z:0},{x:1*n.z,y:0,z:0}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0}]}function MM(n,e){n.direction=n.nextDirection;const t=n.snake[0],i={x:t.x+n.direction.x,y:0,z:t.z+n.direction.z};if(En(i,n,e))return n.state="idle",{moved:!1,foodSpawned:null};let r=!1,s=-1;for(let a=0;a<e.food.positions.length;a++)if(i.x===e.food.positions[a].x&&i.z===e.food.positions[a].z){r=!0,s=a;break}n.snake.unshift(i);let o=null;return r?(e.food.positions.splice(s,1),o=xc(e),n.state="seeking"):n.snake.pop(),{moved:!0,foodSpawned:o}}function gf(n,e){const t=Mc(n,x.ENEMY_START_SAFE_ZONE),i=n.rng.nextFloat()<.5?n.rng.nextFloat()<.5?1:-1:0,r=i===0?n.rng.nextFloat()<.5?1:-1:0,s={x:i,y:0,z:r},o=[];let a={...t};for(let l=0;l<x.ENEMY_START_LENGTH;l++)o.push({...a}),a.x-=s.x,a.z-=s.z;const c={id:e,snake:o,direction:{...s},nextDirection:{...s},targetFoodIndex:null,state:"seeking",lastMoveTime:n.time+n.rng.nextFloat()*x.ENEMY_SNAKE_SPEED,animationFrame:0,animationTimer:n.time,speed:x.ENEMY_SNAKE_SPEED};n.enemies.list.push(c)}function xM(n,e){n.enemies.list=[],n.enemies.respawnQueue=[];for(let t=0;t<e;t++)gf(n,t)}function SM(n,e){if(!e.food.positions.length)return{index:null,position:null};let t=null,i=1/0,r=null;for(let s=0;s<e.food.positions.length;s++){const o=e.food.positions[s],a=o.x-n.x,c=o.z-n.z,l=Math.abs(a)+Math.abs(c);l<i&&(i=l,t=s,r={x:o.x,y:0,z:o.z})}return{index:t,position:r}}function yM(n,e,t){for(const[i,r]of Object.entries(n.players))if(!(i===t||r.dead))for(let s=0;s<r.segments.length;s++){const o=r.segments[s];if(o.x===e.x&&o.z===e.z)return{targetPlayerId:i,segmentIndex:s,isHead:s===0}}return null}function TM(n,e){for(const t of n.enemies.list)for(let i=0;i<t.snake.length;i++){const r=t.snake[i];if(r.x===e.x&&r.z===e.z){const s=i>=t.snake.length-x.ENEMY_TAIL_EDIBLE_SEGMENTS;return{enemyId:t.id,segmentIndex:i,isTail:s,isHead:i===0}}}return null}function AM(n,e){const t=n.enemies.list.findIndex(i=>i.id===e);return t===-1?!1:(n.enemies.list.splice(t,1),n.enemies.kills=(n.enemies.kills||0)+1,n.enemies.respawnQueue||(n.enemies.respawnQueue=[]),n.enemies.respawnQueue.push({id:e,respawnTime:n.time+x.ENEMY_RESPAWN_TIME}),!0)}function wM(n){var i;if(!((i=n.enemies.respawnQueue)!=null&&i.length))return[];const e=[],t=[];for(const r of n.enemies.respawnQueue)n.time>=r.respawnTime?e.push(r.id):t.push(r);return n.enemies.respawnQueue=t,e}function fi(n,e){const t=n.players[e];!t||t.dead||(t.dead=!0,t.respawnAt=n.tick+x.PLAYER_RESPAWN_DELAY_TICKS)}function bM(n){const e=[];for(const[t,i]of Object.entries(n.players))if(!(!i.dead||i.respawnAt<=0)&&n.tick>=i.respawnAt){const r=So(),s=Mc(n,x.START_SAFE_ZONE);r.segments=[];for(let o=0;o<x.PLAYER_RESPAWN_LENGTH;o++)r.segments.push({x:s.x-o,y:0,z:s.z});r.direction={x:1,y:0,z:0},r.nextDirection={x:1,y:0,z:0},r.speed=x.BASE_SNAKE_SPEED,r.colorIndex=i.colorIndex,n.players[t]=r,e.push(t)}return e}function Zr(n,e,t,i){const r=n.players[e];r.alphaMode.active||(r.alphaMode.alphaPoints+=t,i.push({type:Qe.AlphaPointsChanged,playerId:e,payload:{points:r.alphaMode.alphaPoints}}))}function RM(n,e,t){const i=n.players[e];if(!i.alphaMode.lastDecayTime||i.alphaMode.lastDecayTime===0||isNaN(i.alphaMode.lastDecayTime)){i.alphaMode.lastDecayTime=t;return}const r=t-i.alphaMode.lastDecayTime;if(r>0&&r<1&&i.alphaMode.alphaPoints>0){const s=x.ALPHA_POINTS_DECAY_RATE;i.alphaMode.alphaPoints=Math.max(0,i.alphaMode.alphaPoints-s*r)}i.alphaMode.lastDecayTime=t}function PM(n,e,t,i){const r=n.players[e];if(r.alphaMode.active)return!1;const s=si("ALPHA_POINTS_THRESHOLD")||x.ALPHA_POINTS_THRESHOLD;return r.alphaMode.alphaPoints>=s?(r.alphaMode.alphaPoints=0,CM(n,e,t,i),!0):!1}function CM(n,e,t,i){const r=n.players[e],s=si("ALPHA_MODE_DURATION")||x.ALPHA_MODE_DURATION;r.alphaMode.active=!0,r.alphaMode.progress=1,r.alphaMode.startTime=t,r.alphaMode.endTime=t+s,r.alphaMode.scoreMultiplier=x.ALPHA_MODE_SCORE_MULTIPLIER,r.alphaMode.consecutiveActivations=(r.alphaMode.consecutiveActivations||0)+1,r.alphaMode.scoreMultiplierStack=[],i.push({type:Qe.AlphaModeActivated,playerId:e,payload:{duration:s}})}function LM(n,e,t,i){const r=n.players[e];if(r.alphaMode.active){if(t>=r.alphaMode.endTime){r.alphaMode.active=!1,r.alphaMode.scoreMultiplier=1,r.alphaMode.scoreMultiplierStack=[],i.push({type:Qe.AlphaModeEnded,playerId:e});return}if(r.alphaMode.scoreMultiplierStack=r.alphaMode.scoreMultiplierStack.filter(s=>s.endTime>t),r.alphaMode.scoreMultiplierStack.length>0){let s=1;r.alphaMode.scoreMultiplierStack.forEach(o=>{s*=o.value}),r.alphaMode.scoreMultiplier=Math.min(s,x.ALPHA_MODE_MAX_SCORE_MULTIPLIER)}else r.alphaMode.scoreMultiplier=1}}function IM(n,e,t){const i=n.players[e];i.alphaMode.active&&i.alphaMode.scoreMultiplierStack.push({value:x.ALPHA_MODE_SCORE_MULTIPLIER,endTime:t+x.ALPHA_MODE_SCORE_MULTIPLIER_DURATION})}function DM(n,e,t,i){const r=e.players[t];switch(r.activePowerUps||(r.activePowerUps=[]),n){case"speed":return r.speed=x.BASE_SNAKE_SPEED/x.POWERUP_SPEED_MULTIPLIER,r.activePowerUps.push({type:n,endTime:i+x.POWERUP_SPEED_DURATION}),{duration:x.POWERUP_SPEED_DURATION};case"ghost":return r.ghostModeActive=!0,r.activePowerUps.push({type:n,endTime:i+x.POWERUP_GHOST_DURATION}),{duration:x.POWERUP_GHOST_DURATION};case"score_x2":return r.scoreMultiplier=x.POWERUP_SCORE_MULTIPLIER,r.activePowerUps.push({type:n,endTime:i+x.POWERUP_SCORE_MULTIPLIER_DURATION}),{duration:x.POWERUP_SCORE_MULTIPLIER_DURATION};case"shrink":const s=r.segments.length,o=Math.min(x.POWERUP_SHRINK_AMOUNT,s-x.MIN_SNAKE_LENGTH);return o>0&&r.segments.splice(r.segments.length-o,o),{duration:0};default:return{duration:0}}}function OM(n,e,t){const i=n.players[e];!i.activePowerUps||i.activePowerUps.length===0||(i.activePowerUps=i.activePowerUps.filter(r=>{if(r.endTime>t)return!0;switch(r.type){case"speed":i.speed=x.BASE_SNAKE_SPEED;break;case"ghost":i.ghostModeActive=!1;break;case"score_x2":i.scoreMultiplier=1;break}return!1}))}function NM(n,e){return e.map(t=>({tick:n.tick,eventId:n.eventIdCounter++,version:xo,event:t}))}function UM(n,e){var a,c,l,u,f;n.time+=e,n.tick+=1;const t=[],i=Object.keys(n.players).sort();for(const h of i){const m=n.players[h];if(m.dead)continue;const v=Jv(n,h,e);if(t.push(...v.events),v.events.some(p=>p.type===Qe.PlayerDead)){fi(n,h);continue}if(v.events.some(p=>p.type===Qe.PlayerMoved)){const p=m.segments[0];if(p){const R=TM(n,{x:p.x,z:p.z});if(R){const N=(a=m.alphaMode)==null?void 0:a.active,I=m.ghostModeActive;if(R.isTail||N)AM(n,R.enemyId)&&(R.isTail&&!N&&Zr(n,h,x.ALPHA_POINTS_ENEMY,t),t.push({type:Qe.EnemyKilled,playerId:h,payload:{enemyId:R.enemyId,viaTail:R.isTail}}));else if(!I){fi(n,h),t.push({type:Qe.PlayerDead,playerId:h,payload:{reason:"ENEMY_COLLISION"}});continue}}const S=yM(n,{x:p.x,z:p.z},h);if(S){const N=!!((c=m.alphaMode)!=null&&c.active),I=m.ghostModeActive,b=n.players[S.targetPlayerId],Y=!!((l=b==null?void 0:b.alphaMode)!=null&&l.active);if(S.isHead){if(N&&!Y)fi(n,S.targetPlayerId),Zr(n,h,x.ALPHA_POINTS_ENEMY,t),t.push({type:Qe.PlayerKilledPlayer,playerId:h,payload:{victimId:S.targetPlayerId,headOn:!0}}),t.push({type:Qe.PlayerDead,playerId:S.targetPlayerId,payload:{reason:"PVP_COLLISION"}});else if(!N&&Y){if(!I){fi(n,h),t.push({type:Qe.PlayerDead,playerId:h,payload:{reason:"PVP_COLLISION"}}),t.push({type:Qe.PlayerKilledPlayer,playerId:S.targetPlayerId,payload:{victimId:h,headOn:!0}}),Zr(n,S.targetPlayerId,x.ALPHA_POINTS_ENEMY,t);continue}}else if(I||(fi(n,h),t.push({type:Qe.PlayerDead,playerId:h,payload:{reason:"PVP_COLLISION"}})),b.ghostModeActive||(fi(n,S.targetPlayerId),t.push({type:Qe.PlayerDead,playerId:S.targetPlayerId,payload:{reason:"PVP_COLLISION"}})),!I)continue}else if(N)fi(n,S.targetPlayerId),Zr(n,h,x.ALPHA_POINTS_ENEMY,t),t.push({type:Qe.PlayerKilledPlayer,playerId:h,payload:{victimId:S.targetPlayerId,headOn:!1}}),t.push({type:Qe.PlayerDead,playerId:S.targetPlayerId,payload:{reason:"PVP_COLLISION"}});else if(!I){fi(n,h),t.push({type:Qe.PlayerDead,playerId:h,payload:{reason:"PVP_COLLISION"}});continue}}const L=Yd(n,{x:p.x,z:p.z},((u=m.alphaMode)==null?void 0:u.active)||!1);if(L){n.food.positions.splice(L.index,1);const N=(f=m.alphaMode)!=null&&f.active?m.scoreMultiplier:1,I=Math.round(L.scoreValue*N);if(m.score.current+=I,t.push({type:Qe.FoodEaten,playerId:h,payload:{type:L.type,score:I,effects:L.effects}}),t.push({type:Qe.ScoreChanged,playerId:h,payload:{score:m.score.current}}),L.grow){const Y=m.segments[m.segments.length-1];Y&&m.segments.push({...Y})}if(L.effects.speedBoostDuration>0&&(m.speedBoostUntil=n.time+L.effects.speedBoostDuration),L.effects.alphaModeExtension>0&&m.alphaMode.active&&(m.alphaMode.endTime+=L.effects.alphaModeExtension,L.effects.addScoreMultiplier&&IM(n,h,n.time)),L.effects.alphaPoints>0&&Zr(n,h,L.effects.alphaPoints,t),L.type!=="normal"){const Y=DM(L.type,n,h,n.time);t.push({type:Qe.PowerupApplied,playerId:h,payload:{type:L.type,duration:Y.duration}})}const b=xc(n);b&&t.push({type:Qe.FoodSpawned,payload:{type:b.type,x:b.x,z:b.z}})}}}RM(n,h,n.time),PM(n,h,n.time,t),LM(n,h,n.time,t),OM(n,h,n.time)}const r=EM(n,e);t.push(...r.events),wv(n,e),wM(n).forEach(h=>{gf(n,h),t.push({type:Qe.EnemyRespawned,payload:{enemyId:h}})});const o=bM(n);for(const h of o)t.push({type:Qe.PlayerRespawned,playerId:h});return{events:NM(n,t)}}var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function FM(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var _f={};ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Nr={},Co={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.ServerError=n.CloseCode=void 0,function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(i,r){super(r),this.name="ServerError",this.code=i}}n.ServerError=e})(Co);var vs={},Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.decode=Ur.encode=void 0;function Gr(n,e){if(this._offset=e,n instanceof ArrayBuffer)this._buffer=n,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(n))this._buffer=n.buffer,this._view=new DataView(this._buffer,n.byteOffset,n.byteLength);else throw new Error("Invalid argument")}function kM(n,e,t){for(var i="",r=0,s=e,o=e+t;s<o;s++){var a=n.getUint8(s);if(!(a&128)){i+=String.fromCharCode(a);continue}if((a&224)===192){i+=String.fromCharCode((a&31)<<6|n.getUint8(++s)&63);continue}if((a&240)===224){i+=String.fromCharCode((a&15)<<12|(n.getUint8(++s)&63)<<6|(n.getUint8(++s)&63)<<0);continue}if((a&248)===240){r=(a&7)<<18|(n.getUint8(++s)&63)<<12|(n.getUint8(++s)&63)<<6|(n.getUint8(++s)&63)<<0,r>=65536?(r-=65536,i+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):i+=String.fromCharCode(r);continue}throw new Error("Invalid byte "+a.toString(16))}return i}Gr.prototype._array=function(n){for(var e=new Array(n),t=0;t<n;t++)e[t]=this._parse();return e};Gr.prototype._map=function(n){for(var e="",t={},i=0;i<n;i++)e=this._parse(),t[e]=this._parse();return t};Gr.prototype._str=function(n){var e=kM(this._view,this._offset,n);return this._offset+=n,e};Gr.prototype._bin=function(n){var e=this._buffer.slice(this._offset,this._offset+n);return this._offset+=n,e};Gr.prototype._parse=function(){var n=this._view.getUint8(this._offset++),e,t=0,i=0,r=0,s=0;if(n<192)return n<128?n:n<144?this._map(n&15):n<160?this._array(n&15):this._str(n&31);if(n>223)return(255-n+1)*-1;switch(n){case 192:return null;case 194:return!1;case 195:return!0;case 196:return t=this._view.getUint8(this._offset),this._offset+=1,this._bin(t);case 197:return t=this._view.getUint16(this._offset),this._offset+=2,this._bin(t);case 198:return t=this._view.getUint32(this._offset),this._offset+=4,this._bin(t);case 199:if(t=this._view.getUint8(this._offset),i=this._view.getInt8(this._offset+1),this._offset+=2,i===-1){var o=this._view.getUint32(this._offset);return r=this._view.getInt32(this._offset+4),s=this._view.getUint32(this._offset+8),this._offset+=12,new Date((r*4294967296+s)*1e3+o/1e6)}return[i,this._bin(t)];case 200:return t=this._view.getUint16(this._offset),i=this._view.getInt8(this._offset+2),this._offset+=3,[i,this._bin(t)];case 201:return t=this._view.getUint32(this._offset),i=this._view.getInt8(this._offset+4),this._offset+=5,[i,this._bin(t)];case 202:return e=this._view.getFloat32(this._offset),this._offset+=4,e;case 203:return e=this._view.getFloat64(this._offset),this._offset+=8,e;case 204:return e=this._view.getUint8(this._offset),this._offset+=1,e;case 205:return e=this._view.getUint16(this._offset),this._offset+=2,e;case 206:return e=this._view.getUint32(this._offset),this._offset+=4,e;case 207:return r=this._view.getUint32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,r+s;case 208:return e=this._view.getInt8(this._offset),this._offset+=1,e;case 209:return e=this._view.getInt16(this._offset),this._offset+=2,e;case 210:return e=this._view.getInt32(this._offset),this._offset+=4,e;case 211:return r=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,r+s;case 212:if(i=this._view.getInt8(this._offset),this._offset+=1,i===0){this._offset+=1;return}return[i,this._bin(1)];case 213:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(2)];case 214:return i=this._view.getInt8(this._offset),this._offset+=1,i===-1?(e=this._view.getUint32(this._offset),this._offset+=4,new Date(e*1e3)):[i,this._bin(4)];case 215:if(i=this._view.getInt8(this._offset),this._offset+=1,i===0)return r=this._view.getInt32(this._offset)*Math.pow(2,32),s=this._view.getUint32(this._offset+4),this._offset+=8,new Date(r+s);if(i===-1){r=this._view.getUint32(this._offset),s=this._view.getUint32(this._offset+4),this._offset+=8;var a=(r&3)*4294967296+s;return new Date(a*1e3+(r>>>2)/1e6)}return[i,this._bin(8)];case 216:return i=this._view.getInt8(this._offset),this._offset+=1,[i,this._bin(16)];case 217:return t=this._view.getUint8(this._offset),this._offset+=1,this._str(t);case 218:return t=this._view.getUint16(this._offset),this._offset+=2,this._str(t);case 219:return t=this._view.getUint32(this._offset),this._offset+=4,this._str(t);case 220:return t=this._view.getUint16(this._offset),this._offset+=2,this._array(t);case 221:return t=this._view.getUint32(this._offset),this._offset+=4,this._array(t);case 222:return t=this._view.getUint16(this._offset),this._offset+=2,this._map(t);case 223:return t=this._view.getUint32(this._offset),this._offset+=4,this._map(t)}throw new Error("Could not parse")};function BM(n,e=0){var t=new Gr(n,e),i=t._parse();if(t._offset!==n.byteLength)throw new Error(n.byteLength-t._offset+" trailing bytes");return i}Ur.decode=BM;var zM=4294967296-1,HM=17179869184-1;function GM(n,e,t){for(var i=0,r=0,s=t.length;r<s;r++)i=t.charCodeAt(r),i<128?n.setUint8(e++,i):i<2048?(n.setUint8(e++,192|i>>6),n.setUint8(e++,128|i&63)):i<55296||i>=57344?(n.setUint8(e++,224|i>>12),n.setUint8(e++,128|i>>6&63),n.setUint8(e++,128|i&63)):(r++,i=65536+((i&1023)<<10|t.charCodeAt(r)&1023),n.setUint8(e++,240|i>>18),n.setUint8(e++,128|i>>12&63),n.setUint8(e++,128|i>>6&63),n.setUint8(e++,128|i&63))}function VM(n){for(var e=0,t=0,i=0,r=n.length;i<r;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function vr(n,e,t){var i=typeof t,r=0,s=0,o=0,a=0,c=0,l=0;if(i==="string"){if(c=VM(t),c<32)n.push(c|160),l=1;else if(c<256)n.push(217,c),l=2;else if(c<65536)n.push(218,c>>8,c),l=3;else if(c<4294967296)n.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return e.push({_str:t,_length:c,_offset:n.length}),l+c}if(i==="number")return Math.floor(t)!==t||!isFinite(t)?(n.push(203),e.push({_float:t,_length:8,_offset:n.length}),9):t>=0?t<128?(n.push(t),1):t<256?(n.push(204,t),2):t<65536?(n.push(205,t>>8,t),3):t<4294967296?(n.push(206,t>>24,t>>16,t>>8,t),5):(o=t/Math.pow(2,32)>>0,a=t>>>0,n.push(207,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9):t>=-32?(n.push(t),1):t>=-128?(n.push(208,t),2):t>=-32768?(n.push(209,t>>8,t),3):t>=-2147483648?(n.push(210,t>>24,t>>16,t>>8,t),5):(o=Math.floor(t/Math.pow(2,32)),a=t>>>0,n.push(211,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9);if(i==="object"){if(t===null)return n.push(192),1;if(Array.isArray(t)){if(c=t.length,c<16)n.push(c|144),l=1;else if(c<65536)n.push(220,c>>8,c),l=3;else if(c<4294967296)n.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(r=0;r<c;r++)l+=vr(n,e,t[r]);return l}if(t instanceof Date){var u=t.getTime(),f=Math.floor(u/1e3),h=(u-f*1e3)*1e6;return f>=0&&h>=0&&f<=HM?h===0&&f<=zM?(n.push(214,255,f>>24,f>>16,f>>8,f),6):(o=f/4294967296,a=f&4294967295,n.push(215,255,h>>22,h>>14,h>>6,o,a>>24,a>>16,a>>8,a),10):(o=Math.floor(f/4294967296),a=f>>>0,n.push(199,12,255,h>>24,h>>16,h>>8,h,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),15)}if(t instanceof ArrayBuffer){if(c=t.byteLength,c<256)n.push(196,c),l=2;else if(c<65536)n.push(197,c>>8,c),l=3;else if(c<4294967296)n.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return e.push({_bin:t,_length:c,_offset:n.length}),l+c}if(typeof t.toJSON=="function")return vr(n,e,t.toJSON());var m=[],v="",M=Object.keys(t);for(r=0,s=M.length;r<s;r++)v=M[r],t[v]!==void 0&&typeof t[v]!="function"&&m.push(v);if(c=m.length,c<16)n.push(c|128),l=1;else if(c<65536)n.push(222,c>>8,c),l=3;else if(c<4294967296)n.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(r=0;r<c;r++)v=m[r],l+=vr(n,e,v),l+=vr(n,e,t[v]);return l}if(i==="boolean")return n.push(t?195:194),1;if(i==="undefined")return n.push(192),1;if(typeof t.toJSON=="function")return vr(n,e,t.toJSON());throw new Error("Could not encode")}function WM(n){var e=[],t=[],i=vr(e,t,n),r=new ArrayBuffer(i),s=new DataView(r),o=0,a=0,c=-1;t.length>0&&(c=t[0]._offset);for(var l,u=0,f=0,h=0,m=e.length;h<m;h++)if(s.setUint8(a+h,e[h]),h+1===c){if(l=t[o],u=l._length,f=a+c,l._bin)for(var v=new Uint8Array(l._bin),M=0;M<u;M++)s.setUint8(f+M,v[M]);else l._str?GM(s,f,l._str):l._float!==void 0&&s.setFloat64(f,l._float);o++,a+=u,t[o]&&(c=t[o]._offset)}return r}Ur.encode=WM;var Lo={},Io={},$M=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},XM=bt&&bt.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Io,"__esModule",{value:!0});Io.WebSocketTransport=void 0;const YM=XM($M),Ra=globalThis.WebSocket||YM.default;class qM{constructor(e){this.events=e}send(e){e instanceof ArrayBuffer?this.ws.send(e):Array.isArray(e)&&this.ws.send(new Uint8Array(e).buffer)}connect(e,t){try{this.ws=new Ra(e,{headers:t,protocols:this.protocols})}catch{this.ws=new Ra(e,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(e,t){this.ws.close(e,t)}get isOpen(){return this.ws.readyState===Ra.OPEN}}Io.WebSocketTransport=qM;Object.defineProperty(Lo,"__esModule",{value:!0});Lo.Connection=void 0;const KM=Io;class ZM{constructor(){this.events={},this.transport=new KM.WebSocketTransport(this.events)}send(e){this.transport.send(e)}connect(e,t){this.transport.connect(e,t)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}}Lo.Connection=ZM;var Ic={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.utf8Length=n.utf8Read=n.ErrorCode=n.Protocol=void 0,function(i){i[i.HANDSHAKE=9]="HANDSHAKE",i[i.JOIN_ROOM=10]="JOIN_ROOM",i[i.ERROR=11]="ERROR",i[i.LEAVE_ROOM=12]="LEAVE_ROOM",i[i.ROOM_DATA=13]="ROOM_DATA",i[i.ROOM_STATE=14]="ROOM_STATE",i[i.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",i[i.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",i[i.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(n.Protocol||(n.Protocol={})),function(i){i[i.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",i[i.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",i[i.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",i[i.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",i[i.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",i[i.AUTH_FAILED=4215]="AUTH_FAILED",i[i.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(n.ErrorCode||(n.ErrorCode={}));function e(i,r){const s=i[r++];for(var o="",a=0,c=r,l=r+s;c<l;c++){var u=i[c];if(!(u&128)){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|i[++c]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(i[++c]&63)<<6|(i[++c]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(i[++c]&63)<<12|(i[++c]&63)<<6|(i[++c]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}n.utf8Read=e;function t(i=""){let r=0,s=0;for(let o=0,a=i.length;o<a;o++)r=i.charCodeAt(o),r<128?s+=1:r<2048?s+=2:r<55296||r>=57344?s+=3:(o++,s+=4);return s+1}n.utf8Length=t})(Ic);var Zi={};Object.defineProperty(Zi,"__esModule",{value:!0});Zi.getSerializer=Zi.registerSerializer=void 0;const Ef={};function jM(n,e){Ef[n]=e}Zi.registerSerializer=jM;function JM(n){const e=Ef[n];if(!e)throw new Error("missing serializer: "+n);return e}Zi.getSerializer=JM;var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});Ms.createNanoEvents=void 0;const QM=()=>({emit(n,...e){let t=this.events[n]||[];for(let i=0,r=t.length;i<r;i++)t[i](...e)},events:{},on(n,e){var t;return!((t=this.events[n])===null||t===void 0)&&t.push(e)||(this.events[n]=[e]),()=>{var i;this.events[n]=(i=this.events[n])===null||i===void 0?void 0:i.filter(r=>e!==r)}}});Ms.createNanoEvents=QM;var Fr={};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.createSignal=Fr.EventEmitter=void 0;class vf{constructor(){this.handlers=[]}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){this.handlers.forEach(t=>t.apply(this,e))}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){const t=this.handlers.indexOf(e);this.handlers[t]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Fr.EventEmitter=vf;function ex(){const n=new vf;function e(t){return n.register(t,this===null)}return e.once=t=>{const i=function(...r){t.apply(this,r),n.remove(i)};n.register(i)},e.remove=t=>n.remove(t),e.invoke=(...t)=>n.invoke(...t),e.invokeAsync=(...t)=>n.invokeAsync(...t),e.clear=()=>n.clear(),e}Fr.createSignal=ex;var Za={exports:{}};(function(n,e){(function(t,i){i(e)})(bt,function(t){var i=function(g,d){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,y){_.__proto__=y}||function(_,y){for(var F in y)Object.prototype.hasOwnProperty.call(y,F)&&(_[F]=y[F])},i(g,d)};function r(g,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");i(g,d);function _(){this.constructor=g}g.prototype=d===null?Object.create(d):(_.prototype=d.prototype,new _)}function s(g,d,_,y){var F=arguments.length,j=F<3?d:y,Le;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")j=Reflect.decorate(g,d,_,y);else for(var Ae=g.length-1;Ae>=0;Ae--)(Le=g[Ae])&&(j=(F<3?Le(j):F>3?Le(d,_,j):Le(d,_))||j);return F>3&&j&&Object.defineProperty(d,_,j),j}function o(g,d,_){if(arguments.length===2)for(var y=0,F=d.length,j;y<F;y++)(j||!(y in d))&&(j||(j=Array.prototype.slice.call(d,0,y)),j[y]=d[y]);return g.concat(j||Array.prototype.slice.call(d))}typeof SuppressedError=="function"&&SuppressedError;var a=255,c=213;t.OPERATION=void 0,function(g){g[g.ADD=128]="ADD",g[g.REPLACE=0]="REPLACE",g[g.DELETE=64]="DELETE",g[g.DELETE_AND_ADD=192]="DELETE_AND_ADD",g[g.TOUCH=1]="TOUCH",g[g.CLEAR=10]="CLEAR"}(t.OPERATION||(t.OPERATION={}));var l=function(){function g(d,_,y){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=d,this.setParent(_,y)}return g.prototype.setParent=function(d,_,y){var F=this;if(this.indexes||(this.indexes=this.ref instanceof ut?this.ref._definition.indexes:{}),this.parent=d,this.parentIndex=y,!!_)if(this.root=_,this.ref instanceof ut){var j=this.ref._definition;for(var Le in j.schema){var Ae=this.ref[Le];if(Ae&&Ae.$changes){var it=j.indexes[Le];Ae.$changes.setParent(this.ref,_,it)}}}else typeof this.ref=="object"&&this.ref.forEach(function(T,D){if(T instanceof ut){var z=T.$changes,U=F.ref.$changes.indexes[D];z.setParent(F.ref,F.root,U)}})},g.prototype.operation=function(d){this.changes.set(--this.currentCustomOperation,d)},g.prototype.change=function(d,_){_===void 0&&(_=t.OPERATION.ADD);var y=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(y,d);var F=this.changes.get(y);(!F||F.op===t.OPERATION.DELETE||F.op===t.OPERATION.TOUCH)&&this.changes.set(y,{op:F&&F.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:_,index:y}),this.allChanges.add(y),this.changed=!0,this.touchParents()},g.prototype.touch=function(d){var _=typeof d=="number"?d:this.indexes[d];this.assertValidIndex(_,d),this.changes.has(_)||this.changes.set(_,{op:t.OPERATION.TOUCH,index:_}),this.allChanges.add(_),this.touchParents()},g.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},g.prototype.getType=function(d){if(this.ref._definition){var _=this.ref._definition;return _.schema[_.fieldsByIndex[d]]}else{var _=this.parent._definition,y=_.schema[_.fieldsByIndex[this.parentIndex]];return Object.values(y)[0]}},g.prototype.getChildrenFilter=function(){var d=this.parent._definition.childFilters;return d&&d[this.parentIndex]},g.prototype.getValue=function(d){return this.ref.getByIndex(d)},g.prototype.delete=function(d){var _=typeof d=="number"?d:this.indexes[d];if(_===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(d," (").concat(_,")"));return}var y=this.getValue(_);this.changes.set(_,{op:t.OPERATION.DELETE,index:_}),this.allChanges.delete(_),delete this.caches[_],y&&y.$changes&&(y.$changes.parent=void 0),this.changed=!0,this.touchParents()},g.prototype.discard=function(d,_){var y=this;d===void 0&&(d=!1),_===void 0&&(_=!1),this.ref instanceof ut||this.changes.forEach(function(F){if(F.op===t.OPERATION.DELETE){var j=y.ref.getIndex(F.index);delete y.indexes[j]}}),this.changes.clear(),this.changed=d,_&&this.allChanges.clear(),this.currentCustomOperation=0},g.prototype.discardAll=function(){var d=this;this.changes.forEach(function(_){var y=d.getValue(_.index);y&&y.$changes&&y.$changes.discardAll()}),this.discard()},g.prototype.cache=function(d,_){this.caches[d]=_},g.prototype.clone=function(){return new g(this.ref,this.parent,this.root)},g.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},g.prototype.assertValidIndex=function(d,_){if(d===void 0)throw new Error('ChangeTree: missing index for field "'.concat(_,'"'))},g}();function u(g,d,_,y){return g[d]||(g[d]=[]),g[d].push(_),y==null||y.forEach(function(F,j){return _(F,j)}),function(){return h(g[d],g[d].indexOf(_))}}function f(g){var d=this,_=typeof this.$changes.getType()!="string";this.$items.forEach(function(y,F){g.push({refId:d.$changes.refId,op:t.OPERATION.DELETE,field:F,value:void 0,previousValue:y}),_&&d.$changes.root.removeRef(y.$changes.refId)})}function h(g,d){if(d===-1||d>=g.length)return!1;for(var _=g.length-1,y=d;y<_;y++)g[y]=g[y+1];return g.length=_,!0}var m=function(g,d){var _=g.toString(),y=d.toString();return _<y?-1:_>y?1:0};function v(g){return g.$proxy=!0,g=new Proxy(g,{get:function(d,_){return typeof _!="symbol"&&!isNaN(_)?d.at(_):d[_]},set:function(d,_,y){if(typeof _!="symbol"&&!isNaN(_)){var F=Array.from(d.$items.keys()),j=parseInt(F[_]||_);y==null?d.deleteAt(j):d.setAt(j,y)}else d[_]=y;return!0},deleteProperty:function(d,_){return typeof _=="number"?d.deleteAt(_):delete d[_],!0},has:function(d,_){return typeof _!="symbol"&&!isNaN(Number(_))?d.$items.has(Number(_)):Reflect.has(d,_)}}),g}var M=function(){function g(){for(var d=[],_=0;_<arguments.length;_++)d[_]=arguments[_];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,d)}return g.prototype.onAdd=function(d,_){return _===void 0&&(_=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,d,_?this.$items:void 0)},g.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},g.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},g.is=function(d){return Array.isArray(d)||d.array!==void 0},Object.defineProperty(g.prototype,"length",{get:function(){return this.$items.size},set:function(d){d===0?this.clear():this.splice(d,this.length-d)},enumerable:!1,configurable:!0}),g.prototype.push=function(){for(var d=this,_=[],y=0;y<arguments.length;y++)_[y]=arguments[y];var F;return _.forEach(function(j){F=d.$refId++,d.setAt(F,j)}),F},g.prototype.pop=function(){var d=Array.from(this.$indexes.values()).pop();if(d!==void 0){this.$changes.delete(d),this.$indexes.delete(d);var _=this.$items.get(d);return this.$items.delete(d),_}},g.prototype.at=function(d){if(d=Math.trunc(d)||0,d<0&&(d+=this.length),!(d<0||d>=this.length)){var _=Array.from(this.$items.keys())[d];return this.$items.get(_)}},g.prototype.setAt=function(d,_){var y,F;if(_==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(d)!==_){_.$changes!==void 0&&_.$changes.setParent(this,this.$changes.root,d);var j=(F=(y=this.$changes.indexes[d])===null||y===void 0?void 0:y.op)!==null&&F!==void 0?F:t.OPERATION.ADD;this.$changes.indexes[d]=d,this.$indexes.set(d,d),this.$items.set(d,_),this.$changes.change(d,j)}},g.prototype.deleteAt=function(d){var _=Array.from(this.$items.keys())[d];return _===void 0?!1:this.$deleteAt(_)},g.prototype.$deleteAt=function(d){return this.$changes.delete(d),this.$indexes.delete(d),this.$items.delete(d)},g.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},g.prototype.concat=function(){for(var d,_=[],y=0;y<arguments.length;y++)_[y]=arguments[y];return new(g.bind.apply(g,o([void 0],(d=Array.from(this.$items.values())).concat.apply(d,_),!1)))},g.prototype.join=function(d){return Array.from(this.$items.values()).join(d)},g.prototype.reverse=function(){var d=this,_=Array.from(this.$items.keys()),y=Array.from(this.$items.values()).reverse();return y.forEach(function(F,j){d.setAt(_[j],F)}),this},g.prototype.shift=function(){var d=Array.from(this.$items.keys()),_=d.shift();if(_!==void 0){var y=this.$items.get(_);return this.$deleteAt(_),y}},g.prototype.slice=function(d,_){var y=new g;return y.push.apply(y,Array.from(this.$items.values()).slice(d,_)),y},g.prototype.sort=function(d){var _=this;d===void 0&&(d=m);var y=Array.from(this.$items.keys()),F=Array.from(this.$items.values()).sort(d);return F.forEach(function(j,Le){_.setAt(y[Le],j)}),this},g.prototype.splice=function(d,_){_===void 0&&(_=this.length-d);for(var y=[],F=2;F<arguments.length;F++)y[F-2]=arguments[F];for(var j=Array.from(this.$items.keys()),Le=[],Ae=d;Ae<d+_;Ae++)Le.push(this.$items.get(j[Ae])),this.$deleteAt(j[Ae]);for(var Ae=0;Ae<y.length;Ae++)this.setAt(d+Ae,y[Ae]);return Le},g.prototype.unshift=function(){for(var d=this,_=[],y=0;y<arguments.length;y++)_[y]=arguments[y];var F=this.length,j=_.length,Le=Array.from(this.$items.values());return _.forEach(function(Ae,it){d.setAt(it,Ae)}),Le.forEach(function(Ae,it){d.setAt(j+it,Ae)}),F+j},g.prototype.indexOf=function(d,_){return Array.from(this.$items.values()).indexOf(d,_)},g.prototype.lastIndexOf=function(d,_){return _===void 0&&(_=this.length-1),Array.from(this.$items.values()).lastIndexOf(d,_)},g.prototype.every=function(d,_){return Array.from(this.$items.values()).every(d,_)},g.prototype.some=function(d,_){return Array.from(this.$items.values()).some(d,_)},g.prototype.forEach=function(d,_){Array.from(this.$items.values()).forEach(d,_)},g.prototype.map=function(d,_){return Array.from(this.$items.values()).map(d,_)},g.prototype.filter=function(d,_){return Array.from(this.$items.values()).filter(d,_)},g.prototype.reduce=function(d,_){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},g.prototype.reduceRight=function(d,_){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},g.prototype.find=function(d,_){return Array.from(this.$items.values()).find(d,_)},g.prototype.findIndex=function(d,_){return Array.from(this.$items.values()).findIndex(d,_)},g.prototype.fill=function(d,_,y){throw new Error("ArraySchema#fill() not implemented")},g.prototype.copyWithin=function(d,_,y){throw new Error("ArraySchema#copyWithin() not implemented")},g.prototype.toString=function(){return this.$items.toString()},g.prototype.toLocaleString=function(){return this.$items.toLocaleString()},g.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(g,Symbol.species,{get:function(){return g},enumerable:!1,configurable:!0}),g.prototype.entries=function(){return this.$items.entries()},g.prototype.keys=function(){return this.$items.keys()},g.prototype.values=function(){return this.$items.values()},g.prototype.includes=function(d,_){return Array.from(this.$items.values()).includes(d,_)},g.prototype.flatMap=function(d,_){throw new Error("ArraySchema#flatMap() is not supported.")},g.prototype.flat=function(d){throw new Error("ArraySchema#flat() is not supported.")},g.prototype.findLast=function(){var d=Array.from(this.$items.values());return d.findLast.apply(d,arguments)},g.prototype.findLastIndex=function(){var d=Array.from(this.$items.values());return d.findLastIndex.apply(d,arguments)},g.prototype.with=function(d,_){var y=Array.from(this.$items.values());return y[d]=_,new(g.bind.apply(g,o([void 0],y,!1)))},g.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},g.prototype.toSorted=function(d){return Array.from(this.$items.values()).sort(d)},g.prototype.toSpliced=function(d,_){var y=Array.from(this.$items.values());return y.toSpliced.apply(y,arguments)},g.prototype.setIndex=function(d,_){this.$indexes.set(d,_)},g.prototype.getIndex=function(d){return this.$indexes.get(d)},g.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},g.prototype.deleteByIndex=function(d){var _=this.$indexes.get(d);this.$items.delete(_),this.$indexes.delete(d)},g.prototype.toArray=function(){return Array.from(this.$items.values())},g.prototype.toJSON=function(){return this.toArray().map(function(d){return typeof d.toJSON=="function"?d.toJSON():d})},g.prototype.clone=function(d){var _;return d?_=new(g.bind.apply(g,o([void 0],Array.from(this.$items.values()),!1))):_=new(g.bind.apply(g,o([void 0],this.map(function(y){return y.$changes?y.clone():y}),!1))),_},g}();function E(g){return g.$proxy=!0,g=new Proxy(g,{get:function(d,_){return typeof _!="symbol"&&typeof d[_]>"u"?d.get(_):d[_]},set:function(d,_,y){return typeof _!="symbol"&&_.indexOf("$")===-1&&_!=="onAdd"&&_!=="onRemove"&&_!=="onChange"?d.set(_,y):d[_]=y,!0},deleteProperty:function(d,_){return d.delete(_),!0}}),g}var p=function(){function g(d){var _=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d)if(d instanceof Map||d instanceof g)d.forEach(function(F,j){return _.set(j,F)});else for(var y in d)this.set(y,d[y])}return g.prototype.onAdd=function(d,_){return _===void 0&&(_=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,d,_?this.$items:void 0)},g.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},g.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},g.is=function(d){return d.map!==void 0},g.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(g.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(g,Symbol.species,{get:function(){return g},enumerable:!1,configurable:!0}),g.prototype.set=function(d,_){if(_==null)throw new Error("MapSchema#set('".concat(d,"', ").concat(_,"): trying to set ").concat(_," value on '").concat(d,"'."));d=d.toString();var y=typeof this.$changes.indexes[d]<"u",F=y?this.$changes.indexes[d]:this.$refId++,j=y?t.OPERATION.REPLACE:t.OPERATION.ADD,Le=_.$changes!==void 0;if(Le&&_.$changes.setParent(this,this.$changes.root,F),!y)this.$changes.indexes[d]=F,this.$indexes.set(F,d);else{if(!Le&&this.$items.get(d)===_)return;Le&&this.$items.get(d)!==_&&(j=t.OPERATION.ADD)}return this.$items.set(d,_),this.$changes.change(d,j),this},g.prototype.get=function(d){return this.$items.get(d)},g.prototype.delete=function(d){return this.$changes.delete(d.toString()),this.$items.delete(d)},g.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},g.prototype.has=function(d){return this.$items.has(d)},g.prototype.forEach=function(d){this.$items.forEach(d)},g.prototype.entries=function(){return this.$items.entries()},g.prototype.keys=function(){return this.$items.keys()},g.prototype.values=function(){return this.$items.values()},Object.defineProperty(g.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),g.prototype.setIndex=function(d,_){this.$indexes.set(d,_)},g.prototype.getIndex=function(d){return this.$indexes.get(d)},g.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},g.prototype.deleteByIndex=function(d){var _=this.$indexes.get(d);this.$items.delete(_),this.$indexes.delete(d)},g.prototype.toJSON=function(){var d={};return this.forEach(function(_,y){d[y]=typeof _.toJSON=="function"?_.toJSON():_}),d},g.prototype.clone=function(d){var _;return d?_=Object.assign(new g,this):(_=new g,this.forEach(function(y,F){y.$changes?_.set(F,y.clone()):_.set(F,y)})),_},g}(),R={};function S(g,d){R[g]=d}function L(g){return R[g]}var N=function(){function g(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return g.create=function(d){var _=new g;return _.schema=Object.assign({},d&&d.schema||{}),_.indexes=Object.assign({},d&&d.indexes||{}),_.fieldsByIndex=Object.assign({},d&&d.fieldsByIndex||{}),_.descriptors=Object.assign({},d&&d.descriptors||{}),_.deprecated=Object.assign({},d&&d.deprecated||{}),_},g.prototype.addField=function(d,_){var y=this.getNextFieldIndex();this.fieldsByIndex[y]=d,this.indexes[d]=y,this.schema[d]=Array.isArray(_)?{array:_[0]}:_},g.prototype.hasField=function(d){return this.indexes[d]!==void 0},g.prototype.addFilter=function(d,_){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[d]]=_,this.indexesWithFilters.push(this.indexes[d]),!0},g.prototype.addChildrenFilter=function(d,_){var y=this.indexes[d],F=this.schema[d];if(L(Object.keys(F)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[y]=_,!0;console.warn("@filterChildren: field '".concat(d,"' can't have children. Ignoring filter."))},g.prototype.getChildrenFilter=function(d){return this.childFilters&&this.childFilters[this.indexes[d]]},g.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},g}();function I(g){return g._context&&g._context.useFilters}var b=function(){function g(){this.types={},this.schemas=new Map,this.useFilters=!1}return g.prototype.has=function(d){return this.schemas.has(d)},g.prototype.get=function(d){return this.types[d]},g.prototype.add=function(d,_){_===void 0&&(_=this.schemas.size),d._definition=N.create(d._definition),d._typeid=_,this.types[_]=d,this.schemas.set(d,_)},g.create=function(d){return d===void 0&&(d={}),function(_){return d.context||(d.context=new g),w(_,d)}},g}(),Y=new b;function w(g,d){return d===void 0&&(d={}),function(_,y){var F=d.context||Y,j=_.constructor;if(j._context=F,!g)throw new Error("".concat(j.name,': @type() reference provided for "').concat(y,`" is undefined. Make sure you don't have any circular dependencies.`));F.has(j)||F.add(j);var Le=j._definition;if(Le.addField(y,g),Le.descriptors[y]){if(Le.deprecated[y])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(y,"' definition on '").concat(j.name,`'.
Check @type() annotation`))}catch(U){var Ae=U.stack.split(`
`)[4].trim();throw new Error("".concat(U.message," ").concat(Ae))}}var it=M.is(g),T=!it&&p.is(g);if(typeof g!="string"&&!ut.is(g)){var D=Object.values(g)[0];typeof D!="string"&&!F.has(D)&&F.add(D)}if(d.manual){Le.descriptors[y]={enumerable:!0,configurable:!0,writable:!0};return}var z="_".concat(y);Le.descriptors[z]={enumerable:!1,configurable:!1,writable:!0},Le.descriptors[y]={get:function(){return this[z]},set:function(U){U!==this[z]&&(U!=null?(it&&!(U instanceof M)&&(U=new(M.bind.apply(M,o([void 0],U,!1)))),T&&!(U instanceof p)&&(U=new p(U)),U.$proxy===void 0&&(T?U=E(U):it&&(U=v(U))),this.$changes.change(y),U.$changes&&U.$changes.setParent(this,this.$changes.root,this._definition.indexes[y])):this[z]!==void 0&&this.$changes.delete(y),this[z]=U)},enumerable:!0,configurable:!0}}}function C(g){return function(d,_){var y=d.constructor,F=y._definition;F.addFilter(_,g)&&(y._context.useFilters=!0)}}function V(g){return function(d,_){var y=d.constructor,F=y._definition;F.addChildrenFilter(_,g)&&(y._context.useFilters=!0)}}function Q(g){return g===void 0&&(g=!0),function(d,_){var y=d.constructor,F=y._definition;F.deprecated[_]=!0,g&&(F.descriptors[_]={get:function(){throw new Error("".concat(_," is deprecated."))},set:function(j){},enumerable:!1,configurable:!0})}}function fe(g,d,_){_===void 0&&(_={}),_.context||(_.context=g._context||_.context||Y);for(var y in d)w(d[y],_)(g.prototype,y);return g}function k(g){for(var d=0,_=0,y=0,F=g.length;y<F;y++)d=g.charCodeAt(y),d<128?_+=1:d<2048?_+=2:d<55296||d>=57344?_+=3:(y++,_+=4);return _}function X(g,d,_){for(var y=0,F=0,j=_.length;F<j;F++)y=_.charCodeAt(F),y<128?g[d++]=y:y<2048?(g[d++]=192|y>>6,g[d++]=128|y&63):y<55296||y>=57344?(g[d++]=224|y>>12,g[d++]=128|y>>6&63,g[d++]=128|y&63):(F++,y=65536+((y&1023)<<10|_.charCodeAt(F)&1023),g[d++]=240|y>>18,g[d++]=128|y>>12&63,g[d++]=128|y>>6&63,g[d++]=128|y&63)}function J(g,d){g.push(d&255)}function ee(g,d){g.push(d&255)}function ie(g,d){g.push(d&255),g.push(d>>8&255)}function te(g,d){g.push(d&255),g.push(d>>8&255)}function re(g,d){g.push(d&255),g.push(d>>8&255),g.push(d>>16&255),g.push(d>>24&255)}function ce(g,d){var _=d>>24,y=d>>16,F=d>>8,j=d;g.push(j&255),g.push(F&255),g.push(y&255),g.push(_&255)}function xe(g,d){var _=Math.floor(d/Math.pow(2,32)),y=d>>>0;ce(g,y),ce(g,_)}function Z(g,d){var _=d/Math.pow(2,32)>>0,y=d>>>0;ce(g,y),ce(g,_)}function oe(g,d){Ye(g,d)}function Me(g,d){ke(g,d)}var we=new Int32Array(2),Ie=new Float32Array(we.buffer),Xe=new Float64Array(we.buffer);function Ye(g,d){Ie[0]=d,re(g,we[0])}function ke(g,d){Xe[0]=d,re(g,we[0]),re(g,we[1])}function rt(g,d){return ee(g,d?1:0)}function $(g,d){d||(d="");var _=k(d),y=0;if(_<32)g.push(_|160),y=1;else if(_<256)g.push(217),ee(g,_),y=2;else if(_<65536)g.push(218),te(g,_),y=3;else if(_<4294967296)g.push(219),ce(g,_),y=5;else throw new Error("String too long");return X(g,g.length,d),y+_}function ft(g,d){if(isNaN(d))return ft(g,0);if(isFinite(d)){if(d!==(d|0))return g.push(203),ke(g,d),9}else return ft(g,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return d>=0?d<128?(ee(g,d),1):d<256?(g.push(204),ee(g,d),2):d<65536?(g.push(205),te(g,d),3):d<4294967296?(g.push(206),ce(g,d),5):(g.push(207),Z(g,d),9):d>=-32?(g.push(224|d+32),1):d>=-128?(g.push(208),J(g,d),2):d>=-32768?(g.push(209),ie(g,d),3):d>=-2147483648?(g.push(210),re(g,d),5):(g.push(211),xe(g,d),9)}var Ne=Object.freeze({__proto__:null,boolean:rt,float32:oe,float64:Me,int16:ie,int32:re,int64:xe,int8:J,number:ft,string:$,uint16:te,uint32:ce,uint64:Z,uint8:ee,utf8Write:X,writeFloat32:Ye,writeFloat64:ke});function $e(g,d,_){for(var y="",F=0,j=d,Le=d+_;j<Le;j++){var Ae=g[j];if(!(Ae&128)){y+=String.fromCharCode(Ae);continue}if((Ae&224)===192){y+=String.fromCharCode((Ae&31)<<6|g[++j]&63);continue}if((Ae&240)===224){y+=String.fromCharCode((Ae&15)<<12|(g[++j]&63)<<6|(g[++j]&63)<<0);continue}if((Ae&248)===240){F=(Ae&7)<<18|(g[++j]&63)<<12|(g[++j]&63)<<6|(g[++j]&63)<<0,F>=65536?(F-=65536,y+=String.fromCharCode((F>>>10)+55296,(F&1023)+56320)):y+=String.fromCharCode(F);continue}console.error("Invalid byte "+Ae.toString(16))}return y}function be(g,d){return pt(g,d)<<24>>24}function pt(g,d){return g[d.offset++]}function Ke(g,d){return P(g,d)<<16>>16}function P(g,d){return g[d.offset++]|g[d.offset++]<<8}function A(g,d){return g[d.offset++]|g[d.offset++]<<8|g[d.offset++]<<16|g[d.offset++]<<24}function W(g,d){return A(g,d)>>>0}function ue(g,d){return qe(g,d)}function le(g,d){return se(g,d)}function de(g,d){var _=W(g,d),y=A(g,d)*Math.pow(2,32);return y+_}function Pe(g,d){var _=W(g,d),y=W(g,d)*Math.pow(2,32);return y+_}var _e=new Int32Array(2),ye=new Float32Array(_e.buffer),Be=new Float64Array(_e.buffer);function qe(g,d){return _e[0]=A(g,d),ye[0]}function se(g,d){return _e[0]=A(g,d),_e[1]=A(g,d),Be[0]}function ht(g,d){return pt(g,d)>0}function et(g,d){var _=g[d.offset++],y;_<192?y=_&31:_===217?y=pt(g,d):_===218?y=P(g,d):_===219&&(y=W(g,d));var F=$e(g,d.offset,y);return d.offset+=y,F}function We(g,d){var _=g[d.offset];return _<192&&_>160||_===217||_===218||_===219}function Re(g,d){var _=g[d.offset++];if(_<128)return _;if(_===202)return qe(g,d);if(_===203)return se(g,d);if(_===204)return pt(g,d);if(_===205)return P(g,d);if(_===206)return W(g,d);if(_===207)return Pe(g,d);if(_===208)return be(g,d);if(_===209)return Ke(g,d);if(_===210)return A(g,d);if(_===211)return de(g,d);if(_>223)return(255-_+1)*-1}function Te(g,d){var _=g[d.offset];return _<128||_>=202&&_<=211}function Ze(g,d){return g[d.offset]<160}function at(g,d){return g[d.offset-1]===a&&(g[d.offset]<128||g[d.offset]>=202&&g[d.offset]<=211)}var St=Object.freeze({__proto__:null,arrayCheck:Ze,boolean:ht,float32:ue,float64:le,int16:Ke,int32:A,int64:de,int8:be,number:Re,numberCheck:Te,readFloat32:qe,readFloat64:se,string:et,stringCheck:We,switchStructureCheck:at,uint16:P,uint32:W,uint64:Pe,uint8:pt}),je=function(){function g(d){var _=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(y){return _.add(y)})}return g.prototype.onAdd=function(d,_){return _===void 0&&(_=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,d,_?this.$items:void 0)},g.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,d)},g.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,d)},g.is=function(d){return d.collection!==void 0},g.prototype.add=function(d){var _=this.$refId++,y=d.$changes!==void 0;return y&&d.$changes.setParent(this,this.$changes.root,_),this.$changes.indexes[_]=_,this.$indexes.set(_,_),this.$items.set(_,d),this.$changes.change(_),_},g.prototype.at=function(d){var _=Array.from(this.$items.keys())[d];return this.$items.get(_)},g.prototype.entries=function(){return this.$items.entries()},g.prototype.delete=function(d){for(var _=this.$items.entries(),y,F;(F=_.next())&&!F.done;)if(d===F.value[1]){y=F.value[0];break}return y===void 0?!1:(this.$changes.delete(y),this.$indexes.delete(y),this.$items.delete(y))},g.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},g.prototype.has=function(d){return Array.from(this.$items.values()).some(function(_){return _===d})},g.prototype.forEach=function(d){var _=this;this.$items.forEach(function(y,F,j){return d(y,F,_)})},g.prototype.values=function(){return this.$items.values()},Object.defineProperty(g.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),g.prototype.setIndex=function(d,_){this.$indexes.set(d,_)},g.prototype.getIndex=function(d){return this.$indexes.get(d)},g.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},g.prototype.deleteByIndex=function(d){var _=this.$indexes.get(d);this.$items.delete(_),this.$indexes.delete(d)},g.prototype.toArray=function(){return Array.from(this.$items.values())},g.prototype.toJSON=function(){var d=[];return this.forEach(function(_,y){d.push(typeof _.toJSON=="function"?_.toJSON():_)}),d},g.prototype.clone=function(d){var _;return d?_=Object.assign(new g,this):(_=new g,this.forEach(function(y){y.$changes?_.add(y.clone()):_.add(y)})),_},g}(),he=function(){function g(d){var _=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,d&&d.forEach(function(y){return _.add(y)})}return g.prototype.onAdd=function(d,_){return _===void 0&&(_=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,d,_?this.$items:void 0)},g.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,d)},g.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,d)},g.is=function(d){return d.set!==void 0},g.prototype.add=function(d){var _,y;if(this.has(d))return!1;var F=this.$refId++;d.$changes!==void 0&&d.$changes.setParent(this,this.$changes.root,F);var j=(y=(_=this.$changes.indexes[F])===null||_===void 0?void 0:_.op)!==null&&y!==void 0?y:t.OPERATION.ADD;return this.$changes.indexes[F]=F,this.$indexes.set(F,F),this.$items.set(F,d),this.$changes.change(F,j),F},g.prototype.entries=function(){return this.$items.entries()},g.prototype.delete=function(d){for(var _=this.$items.entries(),y,F;(F=_.next())&&!F.done;)if(d===F.value[1]){y=F.value[0];break}return y===void 0?!1:(this.$changes.delete(y),this.$indexes.delete(y),this.$items.delete(y))},g.prototype.clear=function(d){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),d&&f.call(this,d),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},g.prototype.has=function(d){for(var _=this.$items.values(),y=!1,F;(F=_.next())&&!F.done;)if(d===F.value){y=!0;break}return y},g.prototype.forEach=function(d){var _=this;this.$items.forEach(function(y,F,j){return d(y,F,_)})},g.prototype.values=function(){return this.$items.values()},Object.defineProperty(g.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),g.prototype.setIndex=function(d,_){this.$indexes.set(d,_)},g.prototype.getIndex=function(d){return this.$indexes.get(d)},g.prototype.getByIndex=function(d){return this.$items.get(this.$indexes.get(d))},g.prototype.deleteByIndex=function(d){var _=this.$indexes.get(d);this.$items.delete(_),this.$indexes.delete(d)},g.prototype.toArray=function(){return Array.from(this.$items.values())},g.prototype.toJSON=function(){var d=[];return this.forEach(function(_,y){d.push(typeof _.toJSON=="function"?_.toJSON():_)}),d},g.prototype.clone=function(d){var _;return d?_=Object.assign(new g,this):(_=new g,this.forEach(function(y){y.$changes?_.add(y.clone()):_.add(y)})),_},g}(),O=function(){function g(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return g.prototype.addRefId=function(d){this.refIds.has(d)||(this.refIds.add(d),this.containerIndexes.set(d,new Set))},g.get=function(d){return d.$filterState===void 0&&(d.$filterState=new g),d.$filterState},g}(),ve=function(){function g(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return g.prototype.getNextUniqueId=function(){return this.nextUniqueId++},g.prototype.addRef=function(d,_,y){y===void 0&&(y=!0),this.refs.set(d,_),y&&(this.refCounts[d]=(this.refCounts[d]||0)+1)},g.prototype.removeRef=function(d){var _=this.refCounts[d];if(_===void 0){console.warn("trying to remove reference ".concat(d," that doesn't exist"));return}if(_===0){console.warn("trying to remove reference ".concat(d," with 0 refCount"));return}this.refCounts[d]=_-1,this.deletedRefs.add(d)},g.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},g.prototype.garbageCollectDeletedRefs=function(){var d=this;this.deletedRefs.forEach(function(_){if(!(d.refCounts[_]>0)){var y=d.refs.get(_);if(y instanceof ut)for(var F in y._definition.schema)typeof y._definition.schema[F]!="string"&&y[F]&&y[F].$changes&&d.removeRef(y[F].$changes.refId);else{var j=y.$changes.parent._definition,Le=j.schema[j.fieldsByIndex[y.$changes.parentIndex]];typeof Object.values(Le)[0]=="function"&&Array.from(y.values()).forEach(function(Ae){return d.removeRef(Ae.$changes.refId)})}d.refs.delete(_),delete d.refCounts[_]}}),this.deletedRefs.clear()},g}(),Ee=function(g){r(d,g);function d(){return g!==null&&g.apply(this,arguments)||this}return d}(Error);function ze(g,d,_,y){var F,j=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":F="number",isNaN(g)&&console.log('trying to encode "NaN" in '.concat(_.constructor.name,"#").concat(y));break;case"string":F="string",j=!0;break;case"boolean":return}if(typeof g!==F&&(!j||j&&g!==null)){var Le="'".concat(JSON.stringify(g),"'").concat(g&&g.constructor&&" (".concat(g.constructor.name,")")||"");throw new Ee("a '".concat(F,"' was expected, but ").concat(Le," was provided in ").concat(_.constructor.name,"#").concat(y))}}function Fe(g,d,_,y){if(!(g instanceof d))throw new Ee("a '".concat(d.name,"' was expected, but '").concat(g.constructor.name,"' was provided in ").concat(_.constructor.name,"#").concat(y))}function gt(g,d,_,y,F){ze(_,g,y,F);var j=Ne[g];if(j)j(d,_);else throw new Ee("a '".concat(g,"' was expected, but ").concat(_," was provided in ").concat(y.constructor.name,"#").concat(F))}function _t(g,d,_){return St[g](d,_)}var ut=function(){function g(){for(var d=[],_=0;_<arguments.length;_++)d[_]=arguments[_];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new ve),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var y=this._definition.descriptors;y&&Object.defineProperties(this,y),d[0]&&this.assign(d[0])}return g.onError=function(d){console.error(d)},g.is=function(d){return d._definition&&d._definition.schema!==void 0},g.prototype.onChange=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,d)},g.prototype.onRemove=function(d){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,d)},g.prototype.assign=function(d){return Object.assign(this,d),this},Object.defineProperty(g.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),g.prototype.setDirty=function(d,_){this.$changes.change(d,_)},g.prototype.listen=function(d,_,y){var F=this;return y===void 0&&(y=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[d]||(this.$callbacks[d]=[]),this.$callbacks[d].push(_),y&&this[d]!==void 0&&_(this[d],void 0),function(){return h(F.$callbacks[d],F.$callbacks[d].indexOf(_))}},g.prototype.decode=function(d,_,y){_===void 0&&(_={offset:0}),y===void 0&&(y=this);var F=[],j=this.$changes.root,Le=d.length,Ae=0;for(j.refs.set(Ae,this);_.offset<Le;){var it=d[_.offset++];if(it==a){Ae=Re(d,_);var T=j.refs.get(Ae);if(!T)throw new Error('"refId" not found: '.concat(Ae));y=T;continue}var D=y.$changes,z=y._definition!==void 0,U=z?it>>6<<6:it;if(U===t.OPERATION.CLEAR){y.clear(F);continue}var B=z?it%(U||255):Re(d,_),ne=z?y._definition.fieldsByIndex[B]:"",ae=D.getType(B),K=void 0,pe=void 0,Oe=void 0;if(z?pe=y["_".concat(ne)]:(pe=y.getByIndex(B),(U&t.OPERATION.ADD)===t.OPERATION.ADD?(Oe=y instanceof p?et(d,_):B,y.setIndex(B,Oe)):Oe=y.getIndex(B)),(U&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(U!==t.OPERATION.DELETE_AND_ADD&&y.deleteByIndex(B),pe&&pe.$changes&&j.removeRef(pe.$changes.refId),K=null),ne===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Se={offset:_.offset};_.offset<Le&&!(at(d,_)&&(Se.offset=_.offset+1,j.refs.has(Re(d,Se))));)_.offset++;continue}else if(U!==t.OPERATION.DELETE)if(g.is(ae)){var me=Re(d,_);if(K=j.refs.get(me),U!==t.OPERATION.REPLACE){var De=this.getSchemaType(d,_,ae);K||(K=this.createTypeInstance(De),K.$changes.refId=me,pe&&(K.$callbacks=pe.$callbacks,pe.$changes.refId&&me!==pe.$changes.refId&&j.removeRef(pe.$changes.refId))),j.addRef(me,K,K!==pe)}}else if(typeof ae=="string")K=_t(ae,d,_);else{var Rt=L(Object.keys(ae)[0]),Mt=Re(d,_),Pt=j.refs.has(Mt)?pe||j.refs.get(Mt):new Rt.constructor;if(K=Pt.clone(!0),K.$changes.refId=Mt,pe&&(K.$callbacks=pe.$callbacks,pe.$changes.refId&&Mt!==pe.$changes.refId)){j.removeRef(pe.$changes.refId);for(var Je=pe.entries(),Ce=void 0;(Ce=Je.next())&&!Ce.done;){var oi=Ce.value,ct=oi[0],Sn=oi[1];F.push({refId:Mt,op:t.OPERATION.DELETE,field:ct,value:void 0,previousValue:Sn})}}j.addRef(Mt,K,Pt!==pe)}if(K!=null){if(K.$changes&&K.$changes.setParent(D.ref,D.root,B),y instanceof g)y[ne]=K;else if(y instanceof p){var ct=Oe;y.$items.set(ct,K),y.$changes.allChanges.add(B)}else if(y instanceof M)y.setAt(B,K);else if(y instanceof je){var yn=y.add(K);y.setIndex(B,yn)}else if(y instanceof he){var yn=y.add(K);yn!==!1&&y.setIndex(B,yn)}}pe!==K&&F.push({refId:Ae,op:U,field:ne,dynamicIndex:Oe,value:K,previousValue:pe})}return this._triggerChanges(F),j.garbageCollectDeletedRefs(),F},g.prototype.encode=function(d,_,y){d===void 0&&(d=!1),_===void 0&&(_=[]),y===void 0&&(y=!1);for(var F=this.$changes,j=new WeakSet,Le=[F],Ae=1,it=0;it<Ae;it++){var T=Le[it],D=T.ref,z=D instanceof g;T.ensureRefId(),j.add(T),T!==F&&(T.changed||d)&&(ee(_,a),ft(_,T.refId));for(var U=d?Array.from(T.allChanges):Array.from(T.changes.values()),B=0,ne=U.length;B<ne;B++){var ae=d?{op:t.OPERATION.ADD,index:U[B]}:U[B],K=ae.index,pe=z?D._definition.fieldsByIndex&&D._definition.fieldsByIndex[K]:K,Oe=_.length;if(ae.op!==t.OPERATION.TOUCH)if(z)ee(_,K|ae.op);else{if(ee(_,ae.op),ae.op===t.OPERATION.CLEAR)continue;ft(_,K)}if(!z&&(ae.op&t.OPERATION.ADD)==t.OPERATION.ADD&&D instanceof p){var Se=T.ref.$indexes.get(K);$(_,Se)}if(ae.op!==t.OPERATION.DELETE){var me=T.getType(K),De=T.getValue(K);if(De&&De.$changes&&!j.has(De.$changes)&&(Le.push(De.$changes),De.$changes.ensureRefId(),Ae++),ae.op!==t.OPERATION.TOUCH){if(g.is(me))Fe(De,me,D,pe),ft(_,De.$changes.refId),(ae.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(_,me,De.constructor);else if(typeof me=="string")gt(me,_,De,D,pe);else{var Rt=L(Object.keys(me)[0]);Fe(D["_".concat(pe)],Rt.constructor,D,pe),ft(_,De.$changes.refId)}y&&T.cache(K,_.slice(Oe))}}}!d&&!y&&T.discard()}return _},g.prototype.encodeAll=function(d){return this.encode(!0,[],d)},g.prototype.applyFilters=function(d,_){var y,F;_===void 0&&(_=!1);for(var j=this,Le=new Set,Ae=O.get(d),it=[this.$changes],T=1,D=[],z=function(B){var ne=it[B];if(Le.has(ne.refId))return"continue";var ae=ne.ref,K=ae instanceof g;ee(D,a),ft(D,ne.refId);var pe=Ae.refIds.has(ne),Oe=_||!pe;Ae.addRefId(ne);var Se=Ae.containerIndexes.get(ne),me=Oe?Array.from(ne.allChanges):Array.from(ne.changes.values());if(!_&&K&&ae._definition.indexesWithFilters){var De=ae._definition.indexesWithFilters;De.forEach(function(Un){!Se.has(Un)&&ne.allChanges.has(Un)&&(Oe?me.push(Un):me.push({op:t.OPERATION.ADD,index:Un}))})}for(var Rt=0,Mt=me.length;Rt<Mt;Rt++){var Pt=Oe?{op:t.OPERATION.ADD,index:me[Rt]}:me[Rt];if(Pt.op===t.OPERATION.CLEAR){ee(D,Pt.op);continue}var Je=Pt.index;if(Pt.op===t.OPERATION.DELETE){K?ee(D,Pt.op|Je):(ee(D,Pt.op),ft(D,Je));continue}var Ce=ne.getValue(Je),oi=ne.getType(Je);if(K){var ct=ae._definition.filters&&ae._definition.filters[Je];if(ct&&!ct.call(ae,d,Ce,j)){Ce&&Ce.$changes&&Le.add(Ce.$changes.refId);continue}}else{var Sn=ne.parent,ct=ne.getChildrenFilter();if(ct&&!ct.call(Sn,d,ae.$indexes.get(Je),Ce,j)){Ce&&Ce.$changes&&Le.add(Ce.$changes.refId);continue}}if(Ce.$changes&&(it.push(Ce.$changes),T++),Pt.op!==t.OPERATION.TOUCH)if(Pt.op===t.OPERATION.ADD||K)D.push.apply(D,(y=ne.caches[Je])!==null&&y!==void 0?y:[]),Se.add(Je);else if(Se.has(Je))D.push.apply(D,(F=ne.caches[Je])!==null&&F!==void 0?F:[]);else{if(Se.add(Je),ee(D,t.OPERATION.ADD),ft(D,Je),ae instanceof p){var yn=ne.ref.$indexes.get(Je);$(D,yn)}Ce.$changes?ft(D,Ce.$changes.refId):Ne[oi](D,Ce)}else if(Ce.$changes&&!K){if(ee(D,t.OPERATION.ADD),ft(D,Je),ae instanceof p){var yn=ne.ref.$indexes.get(Je);$(D,yn)}ft(D,Ce.$changes.refId)}}},U=0;U<T;U++)z(U);return D},g.prototype.clone=function(){var d,_=new this.constructor,y=this._definition.schema;for(var F in y)typeof this[F]=="object"&&typeof((d=this[F])===null||d===void 0?void 0:d.clone)=="function"?_[F]=this[F].clone():_[F]=this[F];return _},g.prototype.toJSON=function(){var d=this._definition.schema,_=this._definition.deprecated,y={};for(var F in d)!_[F]&&this[F]!==null&&typeof this[F]<"u"&&(y[F]=typeof this[F].toJSON=="function"?this[F].toJSON():this["_".concat(F)]);return y},g.prototype.discardAllChanges=function(){this.$changes.discardAll()},g.prototype.getByIndex=function(d){return this[this._definition.fieldsByIndex[d]]},g.prototype.deleteByIndex=function(d){this[this._definition.fieldsByIndex[d]]=void 0},g.prototype.tryEncodeTypeId=function(d,_,y){_._typeid!==y._typeid&&(ee(d,c),ft(d,y._typeid))},g.prototype.getSchemaType=function(d,_,y){var F;return d[_.offset]===c&&(_.offset++,F=this.constructor._context.get(Re(d,_))),F||y},g.prototype.createTypeInstance=function(d){var _=new d;return _.$changes.root=this.$changes.root,_},g.prototype._triggerChanges=function(d){for(var _,y,F,j,Le,Ae,it,T,D,z=new Set,U=this.$changes.root.refs,B=function(ae){var K=d[ae],pe=K.refId,Oe=U.get(pe),Se=Oe.$callbacks;if((K.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&K.previousValue instanceof g&&((y=(_=K.previousValue.$callbacks)===null||_===void 0?void 0:_[t.OPERATION.DELETE])===null||y===void 0||y.forEach(function(me){return me()})),!Se)return"continue";if(Oe instanceof g){if(!z.has(pe))try{(F=Se==null?void 0:Se[t.OPERATION.REPLACE])===null||F===void 0||F.forEach(function(me){return me()})}catch(me){g.onError(me)}try{Se.hasOwnProperty(K.field)&&((j=Se[K.field])===null||j===void 0||j.forEach(function(me){return me(K.value,K.previousValue)}))}catch(me){g.onError(me)}}else K.op===t.OPERATION.ADD&&K.previousValue===void 0?(Le=Se[t.OPERATION.ADD])===null||Le===void 0||Le.forEach(function(me){var De;return me(K.value,(De=K.dynamicIndex)!==null&&De!==void 0?De:K.field)}):K.op===t.OPERATION.DELETE?K.previousValue!==void 0&&((Ae=Se[t.OPERATION.DELETE])===null||Ae===void 0||Ae.forEach(function(me){var De;return me(K.previousValue,(De=K.dynamicIndex)!==null&&De!==void 0?De:K.field)})):K.op===t.OPERATION.DELETE_AND_ADD&&(K.previousValue!==void 0&&((it=Se[t.OPERATION.DELETE])===null||it===void 0||it.forEach(function(me){var De;return me(K.previousValue,(De=K.dynamicIndex)!==null&&De!==void 0?De:K.field)})),(T=Se[t.OPERATION.ADD])===null||T===void 0||T.forEach(function(me){var De;return me(K.value,(De=K.dynamicIndex)!==null&&De!==void 0?De:K.field)})),K.value!==K.previousValue&&((D=Se[t.OPERATION.REPLACE])===null||D===void 0||D.forEach(function(me){var De;return me(K.value,(De=K.dynamicIndex)!==null&&De!==void 0?De:K.field)}));z.add(pe)},ne=0;ne<d.length;ne++)B(ne)},g._definition=N.create(),g}();function Gt(g){for(var d=[g.$changes],_=1,y={},F=y,j=function(Ae){var it=d[Ae];it.changes.forEach(function(T){var D=it.ref,z=T.index,U=D._definition?D._definition.fieldsByIndex[z]:D.$indexes.get(z);F[U]=it.getValue(z)})},Le=0;Le<_;Le++)j(Le);return y}var ot={context:new b},It=function(g){r(d,g);function d(){return g!==null&&g.apply(this,arguments)||this}return s([w("string",ot)],d.prototype,"name",void 0),s([w("string",ot)],d.prototype,"type",void 0),s([w("number",ot)],d.prototype,"referencedType",void 0),d}(ut),on=function(g){r(d,g);function d(){var _=g!==null&&g.apply(this,arguments)||this;return _.fields=new M,_}return s([w("number",ot)],d.prototype,"id",void 0),s([w([It],ot)],d.prototype,"fields",void 0),d}(ut),Ss=function(g){r(d,g);function d(){var _=g!==null&&g.apply(this,arguments)||this;return _.types=new M,_}return d.encode=function(_){var y,F=_.constructor,j=new d;j.rootType=F._typeid;var Le=function(D,z){for(var U in z){var B=new It;B.name=U;var ne=void 0;if(typeof z[U]=="string")ne=z[U];else{var ae=z[U],K=void 0;ut.is(ae)?(ne="ref",K=z[U]):(ne=Object.keys(ae)[0],typeof ae[ne]=="string"?ne+=":"+ae[ne]:K=ae[ne]),B.referencedType=K?K._typeid:-1}B.type=ne,D.fields.push(B)}j.types.push(D)},Ae=(y=F._context)===null||y===void 0?void 0:y.types;for(var it in Ae){var T=new on;T.id=Number(it),Le(T,Ae[it]._definition.schema)}return j.encodeAll()},d.decode=function(_,y){var F=new b,j=new d;j.decode(_,y);var Le=j.types.reduce(function(z,U){var B=function(ae){r(K,ae);function K(){return ae!==null&&ae.apply(this,arguments)||this}return K}(ut),ne=U.id;return z[ne]=B,F.add(B,ne),z},{});j.types.forEach(function(z){var U=Le[z.id];z.fields.forEach(function(B){var ne;if(B.referencedType!==void 0){var ae=B.type,K=Le[B.referencedType];if(!K){var pe=B.type.split(":");ae=pe[0],K=pe[1]}ae==="ref"?w(K,{context:F})(U.prototype,B.name):w((ne={},ne[ae]=K,ne),{context:F})(U.prototype,B.name)}else w(B.type,{context:F})(U.prototype,B.name)})});var Ae=Le[j.rootType],it=new Ae;for(var T in Ae._definition.schema){var D=Ae._definition.schema[T];typeof D!="string"&&(it[T]=typeof D=="function"?new D:new(L(Object.keys(D)[0])).constructor)}return it},s([w([on],ot)],d.prototype,"types",void 0),s([w("number",ot)],d.prototype,"rootType",void 0),d}(ut);S("map",{constructor:p}),S("array",{constructor:M}),S("set",{constructor:he}),S("collection",{constructor:je}),t.ArraySchema=M,t.CollectionSchema=je,t.Context=b,t.MapSchema=p,t.Reflection=Ss,t.ReflectionField=It,t.ReflectionType=on,t.Schema=ut,t.SchemaDefinition=N,t.SetSchema=he,t.decode=St,t.defineTypes=fe,t.deprecated=Q,t.dumpChanges=Gt,t.encode=Ne,t.filter=C,t.filterChildren=V,t.hasFilter=I,t.registerType=S,t.type=w})})(Za,Za.exports);var Mf=Za.exports,tx=bt&&bt.__createBinding||(Object.create?function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}:function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]}),nx=bt&&bt.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),ix=bt&&bt.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&tx(e,n,t);return nx(e,n),e};Object.defineProperty(vs,"__esModule",{value:!0});vs.Room=void 0;const Xu=ix(Ur),rx=Lo,qt=Ic,Yu=Zi,sx=Ms,Qs=Fr,hn=Mf,qu=Co;class Dc{constructor(e,t){this.onStateChange=(0,Qs.createSignal)(),this.onError=(0,Qs.createSignal)(),this.onLeave=(0,Qs.createSignal)(),this.onJoin=(0,Qs.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,sx.createNanoEvents)(),this.roomId=null,this.name=e,t&&(this.serializer=new((0,Yu.getSerializer)("schema")),this.rootSchema=t,this.serializer.state=new t),this.onError((i,r)=>{var s;return(s=console.warn)===null||s===void 0?void 0:s.call(console,`colyseus.js - onError => (${i}) ${r}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(e,t,i=this,r){const s=new rx.Connection;i.connection=s,s.events.onmessage=Dc.prototype.onMessageCallback.bind(i),s.events.onclose=function(o){var a;if(!i.hasJoined){(a=console.warn)===null||a===void 0||a.call(console,`Room connection was closed unexpectedly (${o.code}): ${o.reason}`),i.onError.invoke(o.code,o.reason);return}o.code===qu.CloseCode.DEVMODE_RESTART&&t?t():(i.onLeave.invoke(o.code,o.reason),i.destroy())},s.events.onerror=function(o){var a;(a=console.warn)===null||a===void 0||a.call(console,`Room, onError (${o.code}): ${o.reason}`),i.onError.invoke(o.code,o.reason)},s.connect(e,r)}leave(e=!0){return new Promise(t=>{this.onLeave(i=>t(i)),this.connection?e?this.connection.send([qt.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(qu.CloseCode.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}send(e,t){const i=[qt.Protocol.ROOM_DATA];typeof e=="string"?hn.encode.string(i,e):hn.encode.number(i,e);let r;if(t!==void 0){const s=Xu.encode(t);r=new Uint8Array(i.length+s.byteLength),r.set(new Uint8Array(i),0),r.set(new Uint8Array(s),i.length)}else r=new Uint8Array(i);this.connection.send(r.buffer)}sendBytes(e,t){const i=[qt.Protocol.ROOM_DATA_BYTES];typeof e=="string"?hn.encode.string(i,e):hn.encode.number(i,e);let r;r=new Uint8Array(i.length+(t.byteLength||t.length)),r.set(new Uint8Array(i),0),r.set(new Uint8Array(t),i.length),this.connection.send(r.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(e){const t=Array.from(new Uint8Array(e.data)),i=t[0];if(i===qt.Protocol.JOIN_ROOM){let r=1;const s=(0,qt.utf8Read)(t,r);if(r+=(0,qt.utf8Length)(s),this.serializerId=(0,qt.utf8Read)(t,r),r+=(0,qt.utf8Length)(this.serializerId),!this.serializer){const o=(0,Yu.getSerializer)(this.serializerId);this.serializer=new o}t.length>r&&this.serializer.handshake&&this.serializer.handshake(t,{offset:r}),this.reconnectionToken=`${this.roomId}:${s}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([qt.Protocol.JOIN_ROOM])}else if(i===qt.Protocol.ERROR){const r={offset:1},s=hn.decode.number(t,r),o=hn.decode.string(t,r);this.onError.invoke(s,o)}else if(i===qt.Protocol.LEAVE_ROOM)this.leave();else if(i===qt.Protocol.ROOM_DATA_SCHEMA){const r={offset:1},o=this.serializer.getState().constructor._context.get(hn.decode.number(t,r)),a=new o;a.decode(t,r),this.dispatchMessage(o,a)}else if(i===qt.Protocol.ROOM_STATE)t.shift(),this.setState(t);else if(i===qt.Protocol.ROOM_STATE_PATCH)t.shift(),this.patch(t);else if(i===qt.Protocol.ROOM_DATA){const r={offset:1},s=hn.decode.stringCheck(t,r)?hn.decode.string(t,r):hn.decode.number(t,r),o=t.length>r.offset?Xu.decode(e.data,r.offset):void 0;this.dispatchMessage(s,o)}else if(i===qt.Protocol.ROOM_DATA_BYTES){const r={offset:1},s=hn.decode.stringCheck(t,r)?hn.decode.string(t,r):hn.decode.number(t,r);this.dispatchMessage(s,new Uint8Array(t.slice(r.offset)))}}setState(e){this.serializer.setState(e),this.onStateChange.invoke(this.serializer.getState())}patch(e){this.serializer.patch(e),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(e,t){var i;const r=this.getMessageHandlerKey(e);this.onMessageHandlers.events[r]?this.onMessageHandlers.emit(r,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):(i=console.warn)===null||i===void 0||i.call(console,`colyseus.js: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"function":return`$${e._typeid}`;case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}}vs.Room=Dc;var Do={};function Ku(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Nn(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,u=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Ku(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return Ku(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(u["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in u)s.setRequestHeader(o,u[o]);s.send(l)})}var ox=Nn.bind(Nn,"GET"),ax=Nn.bind(Nn,"POST"),cx=Nn.bind(Nn,"PATCH"),lx=Nn.bind(Nn,"DELETE"),ux=Nn.bind(Nn,"PUT");const dx=Object.freeze(Object.defineProperty({__proto__:null,del:lx,get:ox,patch:cx,post:ax,put:ux,send:Nn},Symbol.toStringTag,{value:"Module"})),fx=FM(dx);var hx=bt&&bt.__createBinding||(Object.create?function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}:function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]}),px=bt&&bt.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),mx=bt&&bt.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&hx(e,n,t);return px(e,n),e};Object.defineProperty(Do,"__esModule",{value:!0});Do.HTTP=void 0;const gx=Co,_x=mx(fx);class Ex{constructor(e,t={}){this.client=e,this.headers=t}get(e,t={}){return this.request("get",e,t)}post(e,t={}){return this.request("post",e,t)}del(e,t={}){return this.request("del",e,t)}put(e,t={}){return this.request("put",e,t)}request(e,t,i={}){return _x[e](this.client.getHttpEndpoint(t),this.getOptions(i)).catch(r=>{var s;const o=r.statusCode,a=((s=r.data)===null||s===void 0?void 0:s.error)||r.statusMessage||r.message;throw!o&&!a?r:new gx.ServerError(o,a)})}getOptions(e){return e.headers=Object.assign({},this.headers,e.headers),this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(e.withCredentials=!0),e}}Do.HTTP=Ex;var xs={},yi={};Object.defineProperty(yi,"__esModule",{value:!0});yi.getItem=yi.removeItem=yi.setItem=void 0;let jr;function Oc(){if(!jr)try{jr=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return jr||(jr={cache:{},setItem:function(n,e){this.cache[n]=e},getItem:function(n){this.cache[n]},removeItem:function(n){delete this.cache[n]}}),jr}function vx(n,e){Oc().setItem(n,e)}yi.setItem=vx;function Mx(n){Oc().removeItem(n)}yi.removeItem=Mx;function xx(n,e){const t=Oc().getItem(n);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(i=>e(i))}yi.getItem=xx;var Ui=bt&&bt.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(f){o(f)}}function c(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})},_r=bt&&bt.__classPrivateFieldGet||function(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)},Jr=bt&&bt.__classPrivateFieldSet||function(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t},so,ja,pi,oo;Object.defineProperty(xs,"__esModule",{value:!0});xs.Auth=void 0;const Pa=yi,Sx=Ms;class yx{constructor(e){this.http=e,this.settings={path:"/auth",key:"colyseus-auth-token"},so.set(this,!1),ja.set(this,void 0),pi.set(this,void 0),oo.set(this,(0,Sx.createNanoEvents)()),(0,Pa.getItem)(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){const t=_r(this,oo,"f").on("change",e);return _r(this,so,"f")||Jr(this,ja,new Promise((i,r)=>{this.getUserData().then(s=>{this.emitChange(Object.assign(Object.assign({},s),{token:this.token}))}).catch(s=>{this.emitChange({user:null,token:void 0})}).finally(()=>{i()})}),"f"),Jr(this,so,!0,"f"),t}getUserData(){return Ui(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(e,t,i){return Ui(this,void 0,void 0,function*(){const r=(yield this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:i}})).data;return this.emitChange(r),r})}signInWithEmailAndPassword(e,t){return Ui(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(i),i})}signInAnonymously(e){return Ui(this,void 0,void 0,function*(){const t=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t})}sendPasswordResetEmail(e){return Ui(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data})}signInWithProvider(e,t={}){return Ui(this,void 0,void 0,function*(){return new Promise((i,r)=>{const s=t.width||480,o=t.height||768,a=this.token?`?token=${this.token}`:"",c=`Login with ${e[0].toUpperCase()+e.substring(1)}`,l=this.http.client.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${a}`),u=screen.width/2-s/2,f=screen.height/2-o/2;Jr(this,pi,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+o+", top="+f+", left="+u),"f");const h=v=>{v.data.user===void 0&&v.data.token===void 0||(clearInterval(m),_r(this,pi,"f").close(),Jr(this,pi,void 0,"f"),window.removeEventListener("message",h),v.data.error!==void 0?r(v.data.error):(i(v.data),this.emitChange(v.data)))},m=setInterval(()=>{(!_r(this,pi,"f")||_r(this,pi,"f").closed)&&(Jr(this,pi,void 0,"f"),r("cancelled"),window.removeEventListener("message",h))},200);window.addEventListener("message",h)})})}signOut(){return Ui(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?(0,Pa.removeItem)(this.settings.key):(0,Pa.setItem)(this.settings.key,e.token)),_r(this,oo,"f").emit("change",e)}}xs.Auth=yx;so=new WeakMap,ja=new WeakMap,pi=new WeakMap,oo=new WeakMap;var Oo={};Object.defineProperty(Oo,"__esModule",{value:!0});Oo.discordURLBuilder=void 0;function Tx(n){var e;const t=((e=window==null?void 0:window.location)===null||e===void 0?void 0:e.hostname)||"localhost",i=n.hostname.split("."),r=!n.hostname.includes("trycloudflare.com")&&!n.hostname.includes("discordsays.com")&&i.length>2?`/${i[0]}`:"";return n.pathname.startsWith("/.proxy")?`${n.protocol}//${t}${r}${n.pathname}${n.search}`:`${n.protocol}//${t}/.proxy/colyseus${r}${n.pathname}${n.search}`}Oo.discordURLBuilder=Tx;var kn=bt&&bt.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(f){o(f)}}function c(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})},Ca;Object.defineProperty(Nr,"__esModule",{value:!0});Nr.Client=Nr.MatchMakeError=void 0;const Ax=Co,wx=vs,bx=Do,Rx=xs,Px=Oo;class No extends Error{constructor(e,t){super(e),this.code=t,Object.setPrototypeOf(this,No.prototype)}}Nr.MatchMakeError=No;const Zu=typeof window<"u"&&typeof((Ca=window==null?void 0:window.location)===null||Ca===void 0?void 0:Ca.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class Cx{constructor(e=Zu,t){var i,r;if(typeof e=="string"){const s=e.startsWith("/")?new URL(e,Zu):new URL(e),o=s.protocol==="https:"||s.protocol==="wss:",a=Number(s.port||(o?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:a,secure:o}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new bx.HTTP(this,(t==null?void 0:t.headers)||{}),this.auth=new Rx.Auth(this.http),this.urlBuilder=t==null?void 0:t.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((r=(i=window==null?void 0:window.location)===null||i===void 0?void 0:i.hostname)===null||r===void 0)&&r.includes("discordsays.com"))&&(this.urlBuilder=Px.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(e,t={},i){return kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",e,t,i)})}create(e,t={},i){return kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",e,t,i)})}join(e,t={},i){return kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",e,t,i)})}joinById(e,t={},i){return kn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",e,t,i)})}reconnect(e,t){return kn(this,void 0,void 0,function*(){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[i,r]=e.split(":");if(!i||!r)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",i,{reconnectionToken:r},t)})}getAvailableRooms(e=""){return kn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${e}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(e,t,i){return kn(this,void 0,void 0,function*(){const r=this.createRoom(e.room.name,t);r.roomId=e.room.roomId,r.sessionId=e.sessionId;const s={sessionId:r.sessionId};e.reconnectionToken&&(s.reconnectionToken=e.reconnectionToken);const o=i||r;return r.connect(this.buildEndpoint(e.room,s),e.devMode&&(()=>kn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${r.roomId}'...`);let a=0,c=8;const l=()=>kn(this,void 0,void 0,function*(){a++;try{yield this.consumeSeatReservation(e,t,o),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${r.roomId}'`)}catch{a<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${a} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),o,this.http.headers),new Promise((a,c)=>{const l=(u,f)=>c(new Ax.ServerError(u,f));o.onError.once(l),o.onJoin.once(()=>{o.onError.remove(l),a(o)})})})}createMatchMakeRequest(e,t,i={},r,s){return kn(this,void 0,void 0,function*(){const o=(yield this.http.post(`matchmake/${e}/${t}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)})).data;if(o.error)throw new No(o.error,o.code);return e==="reconnect"&&(o.reconnectionToken=i.reconnectionToken),yield this.consumeSeatReservation(o,r,s)})}createRoom(e,t){return new wx.Room(e,t)}buildEndpoint(e,t={}){const i=[];for(const o in t)t.hasOwnProperty(o)&&i.push(`${o}=${t[o]}`);let r=this.settings.secure?"wss://":"ws://";e.publicAddress?r+=`${e.publicAddress}`:r+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const s=`${r}/${e.processId}/${e.roomId}?${i.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(s)):s}getHttpEndpoint(e=""){const t=e.startsWith("/")?e:`/${e}`,i=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.urlBuilder?this.urlBuilder(new URL(i)):i}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Nr.Client=Cx;var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0});Uo.SchemaSerializer=void 0;const ju=Mf;class Lx{setState(e){return this.state.decode(e)}getState(){return this.state}patch(e){return this.state.decode(e)}teardown(){var e,t;(t=(e=this.state)===null||e===void 0?void 0:e.$changes)===null||t===void 0||t.root.clearRefs()}handshake(e,t){this.state?new ju.Reflection().decode(e,t):this.state=ju.Reflection.decode(e,t)}}Uo.SchemaSerializer=Lx;var Fo={};Object.defineProperty(Fo,"__esModule",{value:!0});Fo.NoneSerializer=void 0;class Ix{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}}Fo.NoneSerializer=Ix;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SchemaSerializer=n.registerSerializer=n.Auth=n.Room=n.ErrorCode=n.Protocol=n.MatchMakeError=n.Client=void 0;var e=Nr;Object.defineProperty(n,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(n,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=Ic;Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var i=vs;Object.defineProperty(n,"Room",{enumerable:!0,get:function(){return i.Room}});var r=xs;Object.defineProperty(n,"Auth",{enumerable:!0,get:function(){return r.Auth}});const s=Uo;Object.defineProperty(n,"SchemaSerializer",{enumerable:!0,get:function(){return s.SchemaSerializer}});const o=Fo,a=Zi;Object.defineProperty(n,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",s.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(_f);function Dx(n){const{rng:e,...t}=n;return{...t,rng:hf((e==null?void 0:e.seed)??Date.now())}}function Ox(n,e){var l;const t=e instanceof Uint8Array?e:new Uint8Array(e),i=Kv(t),r=Dx(i);_M(n,r),n.simulation.time=r.time;const s=performance.now(),o=n.network.lastSnapshotTick;o>0&&r.tick>o&&(n.network.snapshotIntervalMs=s-(n.network.lastSnapshotTimeMs||s)),n.network.lastSnapshotTick=r.tick,n.network.lastSnapshotTimeMs=s,kv(n);const a=n.localPlayerId||"local",c=(l=r.players)==null?void 0:l[a];c&&_s(c.score.current),Es(r.enemies.kills),r.players&&mv(r.players,a)}function Nx(n,e){var t;q.system.info(`Connected to multiplayer server v${e.serverVersion}, tick ${e.tickRate}`),n.simulation.tickRate=e.tickRate,n.simulation.fixedDelta=1/e.tickRate,e.sessionId?n.localPlayerId=e.sessionId:(t=n.network)!=null&&t.sessionId&&(n.localPlayerId=n.network.sessionId)}async function Ux(n,e={}){const t=e.serverUrl??x.MULTIPLAYER_SERVER_URL,i=e.roomName??"snek",r=new _f.Client(t);let s=0;n.network.enabled=!0,n.network.status="connecting",n.flags.useCoreSimulation=!0;const o=c=>{n.network.room=c,n.network.sessionId=c.sessionId,n.network.status="connected",n.network.sendInput=l=>{c.send("input",l)},c.onMessage(Zs.Meta,l=>Nx(n,l)),c.onMessage(Zs.Snapshot,l=>{Ox(n,l)}),c.onMessage(Zs.Events,l=>{n.network.pendingServerEvents||(n.network.pendingServerEvents=[]),n.network.pendingServerEvents.push(...l)}),c.onMessage(Zs.Error,l=>{q.system.warn(`Server error: ${l.message}`),mt(l.message,16729156)}),c.onLeave(l=>{n.network.status="disconnected",q.system.warn(`Disconnected from multiplayer (code ${l}).`),mt("Disconnected from server",16729156),gc(),gv(),ku(n),a()}),c.onError((l,u)=>{n.network.status="error",q.system.error(`Room error ${l}: ${u}`),mt("Network error",16729156),ku(n),a()})},a=()=>{n.network.enabled&&(s>=5||(s+=1,n.network.status="reconnecting",mt("Reconnecting...",16761095),setTimeout(async()=>{try{const c=await r.joinOrCreate(i,{clientVersion:Nu,stateVersion:Ou,inputVersion:Ya});s=0,o(c)}catch(c){q.system.warn("Reconnect attempt failed",c),a()}},1500)))};try{const c=await r.joinOrCreate(i,{clientVersion:Nu,stateVersion:Ou,inputVersion:Ya});return o(c),c}catch(c){throw n.network.status="error",q.system.error("Failed to connect to multiplayer server",c),mt("Unable to connect to server",16729156),c}}let yo;function hi(n,e,t,i){n.addEventListener(e,t,i)}async function Fx(){var c,l,u,f;bE(),q.system.info("Initializing game..."),H.flags.gameRunning=!1;const n=xn.initializeForCurrentDevice();q.system.info(`Device type: ${n?"Mobile":"Desktop"}`),q.system.info(`Performance settings: Shadows=${xn.shadows}, Detail=${xn.detailLevel}`),Yx();const e=document.getElementById("gameCanvas");if(!e){q.system.error("Canvas element #gameCanvas not found!");return}H.scene=gE(),H.camera=_E(),H.renderer=EE(e),H.clock=new Dd;const t=new URLSearchParams(window.location.search);t.get("admin")==="1"&&bf(async()=>{const{initAdminPanel:h}=await import("./adminPanel-MZkQe_lF.js");return{initAdminPanel:h}},[]).then(({initAdminPanel:h})=>{h()}).catch(console.error);const i=t.get("seed"),r=i?Number(i):Date.now();H.core=pf(r),H.core.players.local=So(),H.localPlayerId="local",q.system.info(`Core RNG seed: ${r}`),q.system.info(`Event schema version: ${xo}`),mf(H),H.simulation.fixedDelta=1/H.simulation.tickRate,H.simulation.lastTimeMs=performance.now(),H.lights=vE(H.scene);try{if(H.materials=await LE(),q.system.info("Materials loaded and created."),!((l=(c=H.materials)==null?void 0:c.snake)!=null&&l.head1)||!((u=H.materials)!=null&&u.ground)||!H.materials.particle)throw new Error("Essential materials failed to create after loading.")}catch(h){q.system.error("Fatal Error: Could not load/create materials.",h),alert("Error loading game materials. Please refresh the page and try again.");return}const s=AE(H.scene,H.materials);H.environment={...s},Ev(H.materials.particle),DE(H.camera),H.cleanupInput=mM(H,cv),hi(window,"gameStarted",kx),hi(window,"gamePaused",Bx),hi(window,"gameResumed",zx),sv(),hi(window,"resize",Xx),(f=document.getElementById("resetAlphaModeCooldown"))==null||f.addEventListener("click",function(){fM(H),mt("Alpha Mode cooldown reset!"),q.system.info("Alpha Mode cooldown reset button clicked")}),t.get("stats")==="true"&&(yo=new cs,document.body.appendChild(yo.dom));const o=t.get("multiplayer");if(o==="1"||o==="true"||x.MULTIPLAYER_DEFAULT_ENABLED)try{await Ux(H),mt("Connected to multiplayer",5025616)}catch(h){q.system.warn("Multiplayer connection failed; running offline.",h)}hi(window,"gameOver",Hx),hi(window,"gamePaused",Gx),hi(window,"gameResumed",Vx),hi(window,"gameRestart",yf),gM()}function kx(){q.system.info("Starting gameplay..."),xf(),H.flags.gameStarted=!0,H.flags.gameOver=!1,H.flags.gamePaused=!1,window.fixAudio&&window.fixAudio(),H.flags.animating||(H.flags.animating=!0,Nc())}function Bx(){q.system.info("Game paused"),H.flags.gameRunning=!1,H.flags.gamePaused=!0,fc()}function zx(){q.system.info("Game resumed"),H.flags.gameOver||(H.flags.gameRunning=!0,H.flags.animating||(H.flags.animating=!0,Nc()),Ki())}function Hx(){q.system.info("Game over handler called")}function Gx(){q.system.info("Game paused"),H.flags.gamePaused=!0,fc()}function Vx(){q.system.info("Game resumed"),H.flags.gameOver||(H.flags.gamePaused=!1,Ki())}function xf(){q.system.info("--- RESETTING GAME ---"),H.flags.gameRunning=!1,H.simulation.time=0,H.simulation.accumulator=0,H.simulation.lastTimeMs=performance.now(),pE(),H.cameraEffects||(H.cameraEffects={shake:{active:!1,startTime:0,duration:0,intensity:0,originalPosition:new G}}),YE(),setTimeout(()=>{xv(H.scene),Kd(H),setTimeout(()=>{jd(H),Qd(H),nM(H),setTimeout(()=>{var e;const n=(e=H.network)==null?void 0:e.enabled;if(n||Nv(H),H.flags.useCoreSimulation&&!n){const t=si("NUM_INITIAL_FOOD")||x.NUM_INITIAL_FOOD;Tv(H.core,t),Sc(H)}else n||Cv(H);setTimeout(()=>{H.flags.useCoreSimulation&&!n?(xM(H.core,x.NUM_ENEMIES),Ac(H)):n||zv(H),Vd(0,H),Es(0),n||mf(H),qE(),q.system.info("--- GAME RESET COMPLETE ---"),H.flags.gameRunning=!0,H.flags.gameOver=!1},10)},10)},10)},10)}function Sf(n=H,e="DEFAULT"){if(n.flags.gameOver)return;q.system.info("Game Over! Final Score:",n.score.current,"Reason:",e),n.flags.gameOver=!0,n.flags.gameRunning=!1,n.score.current>n.highScore&&(n.highScore=n.score.current,q.system.info("New High Score:",n.highScore),dE(n.highScore),$a(n.highScore));const t={applesEaten:n.stats.applesEaten||0,frogsEaten:n.stats.frogsEaten||0,snakesEaten:n.stats.snakesEaten||0};lv(n.score.current,n.highScore,e,t),as(""),Gd(),n.playerSnake.speed=x.BASE_SNAKE_SPEED,n.playerSnake.scoreMultiplier=1,n.playerSnake.ghostModeActive&&(n.playerSnake.ghostModeActive=!1,Ri(n)),n.playerSnake.activePowerUp=null}function yf(){H.flags.gameOver&&(pc(),q.system.info("Restart requested."))}function Ju(n,e,t){const i=e.localPlayerId||"local";n.forEach(r=>{var a,c,l,u,f,h;if(r.version!==xo){q.system.warn(`Event schema mismatch. Expected ${xo}, got ${r.version}`);return}const s=r.event,o=!s.playerId||s.playerId===i;if(s.type===Qe.PlayerDead&&o&&(df(e),t?pv(((c=s.payload)==null?void 0:c.reason)||"DEFAULT",x.PLAYER_RESPAWN_DELAY_TICKS,((l=e.simulation)==null?void 0:l.tickRate)||30):Sf(e,((a=s.payload)==null?void 0:a.reason)||"DEFAULT")),s.type===Qe.ScoreChanged&&o&&_s(s.payload.score),s.type===Qe.FoodSpawned&&Sc(e),s.type===Qe.FoodEaten){const m=ii.find(v=>v.type===s.payload.type);o&&(s.payload.type==="normal"?(e.stats.applesEaten++,ln("eatApple"),s.payload.effects.speedBoostDuration>0&&mt("Speed Boost!",49151)):(e.stats.frogsEaten++,ln("eatFrog")),m!=null&&m.effectText&&mt(m.effectText,m.colorHint.getHex()))}if(s.type===Qe.EnemyKilled&&(Hv(s.payload.enemyId,e),o&&((f=(u=e.playerSnake)==null?void 0:u.alphaMode)!=null&&f.active)&&(ln("alphaKillExplode1"),Bd()),o&&e.stats.snakesEaten++,Es(e.enemies.kills)),s.type===Qe.PowerupApplied&&o){const m=ii.find(v=>v.type===s.payload.type);m!=null&&m.effectText&&mt(m.effectText,m.colorHint.getHex())}s.type===Qe.AlphaModeActivated&&o&&(Wd(),(void 0)()),s.type===Qe.AlphaModeEnded&&o&&mt("Alpha Mode ended"),s.type===Qe.EnemyRespawned&&Ac(e),s.type===Qe.PlayerKilledPlayer&&(o?(ln("eatApple"),Ma("You killed a player!")):((h=s.payload)==null?void 0:h.victimId)===i?Ma("You were killed!"):Ma("Player eliminated")),s.type===Qe.PlayerRespawned&&o&&(gc(),rf(e))})}function Nc(){requestAnimationFrame(Nc),H.frameCount++,H.flags.gameRunning&&Wx()}function Wx(){var i,r,s,o;H.flags.restartRequested&&xf();const n=performance.now(),e=Math.min((n-H.simulation.lastTimeMs)/1e3,.25);if(H.simulation.lastTimeMs=n,H.simulation.accumulator+=e,Math.floor(H.simulation.time*2)%2===0&&!H.flags.audioHealthCheckRun?(KE(),H.flags.audioHealthCheckRun=!0):Math.floor(H.simulation.time*2)%2!==0&&(H.flags.audioHealthCheckRun=!1),(i=H.network)==null?void 0:i.enabled){const a=Math.min(Math.floor(H.simulation.accumulator/H.simulation.fixedDelta),H.simulation.maxSubSteps);if(a>0&&(H.simulation.accumulator-=a*H.simulation.fixedDelta,H.simulation.time+=a*H.simulation.fixedDelta),H.flags.gameRunning&&!H.flags.gameOver){if((r=H.network.pendingServerEvents)!=null&&r.length){const c=H.network.pendingServerEvents.splice(0);Ju(c,H,!0)}Fu(e,H.simulation.time,H),$u(H),Du(H)}xa(e,H.scene),Sa(H,e)}else{let a=0;for(;H.simulation.accumulator>=H.simulation.fixedDelta&&a<H.simulation.maxSubSteps;){const c=H.simulation.fixedDelta;if(H.simulation.time+=c,H.flags.gameRunning&&!H.flags.gameOver){if(H.flags.useCoreSimulation){for(H.inputQueue.length>1&&H.inputQueue.sort((u,f)=>u.tick-f.tick);H.inputQueue.length>0;){const u=H.inputQueue.shift();u.tick<H.core.tick||jv(H.core,u)}const l=UM(H.core,c);(s=l==null?void 0:l.events)!=null&&s.length&&Ju(l.events,H,!1),Fu(c,H.simulation.time,H)}else oM(c,H.simulation.time,H),Gv(c,H.simulation.time,H);$u(H),Du(H),xa(c,H.scene),Sa(H,c)}else xa(c,H.scene),Sa(H,c);a+=1,H.simulation.accumulator-=H.simulation.fixedDelta}}if(H.flags.useCoreSimulation&&H.flags.gameRunning&&!H.flags.gameOver){const a=(o=H.network)!=null&&o.enabled?e:void 0;sM(H,a),Ac(H,a),Sc(H)}uM(H),$x(H.simulation.time),H.renderer.render(H.scene,H.camera),yo&&yo.update()}function $x(n){const{camera:e,cameraEffects:t}=H;if(!(!e||!t||!t.shake)&&t.shake.active){const i=t.shake,r=n-i.startTime;if(r>=i.duration)e.position.copy(i.originalPosition),i.active=!1;else{const s=1-r/i.duration,o=i.intensity*s,a=i.originalPosition;e.position.set(a.x+(Math.random()*2-1)*o,a.y+(Math.random()*2-1)*o*.5,a.z+(Math.random()*2-1)*o)}}}function Xx(){H.camera&&H.renderer&&(H.camera.aspect=window.innerWidth/window.innerHeight,H.camera.updateProjectionMatrix(),H.renderer.setSize(window.innerWidth,window.innerHeight))}function Yx(){const n=x.FOOD_SPAWN_RATIOS;let e=0;for(const t in n)n.hasOwnProperty(t)&&(e+=n[t]);if(Math.abs(e-100)>.001){q.system.warn(`Food spawn ratios do not add up to 100! Current total: ${e}`);const t=100/e;for(const i in n)n.hasOwnProperty(i)&&(n[i]=Math.round(n[i]*t));q.system.info("Food spawn ratios have been normalized:",n)}qx(),q.system.info("Configuration validated.")}function qx(){if(H.environment&&H.environment.groundMesh){const n=H.environment.groundMesh;n.material&&(n.material.color.set(x.GROUND_COLOR||16777215),n.material.needsUpdate=!0,q.system.info("Ground color updated to:",x.GROUND_COLOR?"#"+x.GROUND_COLOR.toString(16).padStart(6,"0"):"No tint (white)"))}}Fx().catch(n=>{q.system.error("Initialization failed:",n),alert("Error initializing the game. Please check the console for details.")});export{x as C,Zx as r,Kx as s};
