(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))h(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function c(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function h(u){if(u.ep)return;u.ep=!0;const f=c(u);fetch(u.href,f)}})();function _t(){return!!JSON.parse(localStorage.getItem("user"))?.accessToken}function xt(i,a,c){return a=parseFloat(a),c=parseFloat(c),i=parseFloat(i),i>=a&&i<=c}const wt=async()=>{if(!Array.isArray(window.allProductsData)){const a=await(await fetch("../products.json")).json();window.allProductsData=a}return allProductsData},vt=async i=>(await wt()).find(h=>{if(h.id===Number(i))return h}),gt=(i,a)=>i>a?a:i,yt=()=>(JSON.parse(localStorage.getItem("dom-commerce-cart-product"))??[])?.map(a=>a.productId),A=async()=>{const i=JSON.parse(localStorage.getItem("dom-commerce-cart-product"))??[],a=yt();if(a===void 0)return{totalPrice:0,totalCartItem:0};const c=a.map(u=>new Promise(async f=>{const p=await vt(u),_=i.find(C=>C.productId===u).productQuantity;f(gt(Number(p.price),Number(p.salePrice))*_)}));return{totalPrice:await new Promise(u=>{Promise.all(c).then(f=>{const p=f.reduce((_,C)=>_+C,0);u(p)})}),totalCartItem:c.length}},Mt=String.raw;var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tt(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var K={exports:{}};(function(i,a){(function(){var c,h,u,f,p,_,C,Z,tt,et,rt,x,S,nt,ot,F,it,w,R,st,P,H,$,k,L,B,U,at,j,J,ct,ut,dt=[].slice;it='<span class="odometer-value"></span>',nt='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+it+"</span></span>",f='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+nt+"</span></span>",C='<span class="odometer-formatting-mark"></span>',u="(,ddd).dd",Z=/^\(?([^)]*)\)?(?:(.)(d+))?$/,tt=30,_=2e3,c=20,et=2,p=.5,rt=1e3/tt,h=1e3/c,ot="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",L=document.createElement("div").style,F=L.transition!=null||L.webkitTransition!=null||L.mozTransition!=null||L.oTransition!=null,$=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,x=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=function(r){var t;return t=document.createElement("div"),t.innerHTML=r,t.children[0]},H=function(r,t){return r.className=r.className.replace(new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi")," ")},w=function(r,t){return H(r,t),r.className+=" "+t},B=function(r,t){var e;if(document.createEvent!=null)return e=document.createEvent("HTMLEvents"),e.initEvent(t,!0,!0),r.dispatchEvent(e)},P=function(){var r,t;return(r=(t=window.performance)!=null&&typeof t.now=="function"?t.now():void 0)!=null?r:+new Date},k=function(r,t){return t==null&&(t=0),t?(r*=Math.pow(10,t),r+=.5,r=Math.floor(r),r/=Math.pow(10,t)):Math.round(r)},U=function(r){return r<0?Math.ceil(r):Math.floor(r)},st=function(r){return r-k(r)},j=!1,(at=function(){var r,t,e,n,s;if(!j&&window.jQuery!=null){for(j=!0,n=["html","text"],s=[],t=0,e=n.length;t<e;t++)r=n[t],s.push(function(o){var d;return d=window.jQuery.fn[o],window.jQuery.fn[o]=function(l){var m;return l==null||((m=this[0])!=null?m.odometer:void 0)==null?d.apply(this,arguments):this[0].odometer.update(l)}}(r));return s}})(),setTimeout(at,0),S=function(){function r(t){var e,n,s,o,d,l,m,y,M,v=this;if(this.options=t,this.el=this.options.el,this.el.odometer!=null)return this.el.odometer;this.el.odometer=this,m=r.options;for(e in m)s=m[e],this.options[e]==null&&(this.options[e]=s);(o=this.options).duration==null&&(o.duration=_),this.MAX_VALUES=this.options.duration/rt/et|0,this.resetFormat(),this.value=this.cleanValue((y=this.options.value)!=null?y:""),this.renderInside(),this.render();try{for(M=["innerHTML","innerText","textContent"],d=0,l=M.length;d<l;d++)n=M[d],this.el[n]!=null&&function(g){return Object.defineProperty(v.el,g,{get:function(){var b;return g==="innerHTML"?v.inside.outerHTML:(b=v.inside.innerText)!=null?b:v.inside.textContent},set:function(b){return v.update(b)}})}(n)}catch{this.watchForMutations()}}return r.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},r.prototype.watchForMutations=function(){var t=this;if(x!=null)try{return this.observer==null&&(this.observer=new x(function(e){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)})),this.watchMutations=!0,this.startWatchingMutations()}catch{}},r.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},r.prototype.stopWatchingMutations=function(){var t;return(t=this.observer)!=null?t.disconnect():void 0},r.prototype.cleanValue=function(t){var e;return typeof t=="string"&&(t=t.replace((e=this.format.radix)!=null?e:".","<radix>"),t=t.replace(/[.,]/g,""),t=t.replace("<radix>","."),t=parseFloat(t,10)||0),k(t,this.format.precision)},r.prototype.bindTransitionEnd=function(){var t,e,n,s,o,d,l=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,o=ot.split(" "),d=[],n=0,s=o.length;n<s;n++)t=o[n],d.push(this.el.addEventListener(t,function(){return e||(e=!0,setTimeout(function(){return l.render(),e=!1,B(l.el,"odometerdone")},0)),!0},!1));return d}},r.prototype.resetFormat=function(){var t,e,n,s,o,d,l,m;if(t=(l=this.options.format)!=null?l:u,t||(t="d"),n=Z.exec(t),!n)throw new Error("Odometer: Unparsable digit format");return m=n.slice(1,4),d=m[0],o=m[1],e=m[2],s=e?.length||0,this.format={repeating:d,radix:o,precision:s}},r.prototype.render=function(t){var e,n,s,o,d,l,m;for(t==null&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",d=this.options.theme,e=this.el.className.split(" "),o=[],l=0,m=e.length;l<m;l++)if(n=e[l],!!n.length){if(s=/^odometer-theme-(.+)$/.exec(n)){d=s[1];continue}/^odometer(-|$)/.test(n)||o.push(n)}return o.push("odometer"),F||o.push("odometer-no-transitions"),d?o.push("odometer-theme-"+d):o.push("odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},r.prototype.formatDigits=function(t){var e,n,s,o,d,l,m,y,M,v;if(this.digits=[],this.options.formatFunction)for(s=this.options.formatFunction(t),M=s.split("").reverse(),d=0,m=M.length;d<m;d++)n=M[d],n.match(/0-9/)?(e=this.renderDigit(),e.querySelector(".odometer-value").innerHTML=n,this.digits.push(e),this.insertDigit(e)):this.addSpacer(n);else for(o=!this.format.precision||!st(t)||!1,v=t.toString().split("").reverse(),l=0,y=v.length;l<y;l++)e=v[l],e==="."&&(o=!0),this.addDigit(e,o)},r.prototype.update=function(t){var e,n=this;if(t=this.cleanValue(t),!!(e=t-this.value))return H(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),e>0?w(this.el,"odometer-animating-up"):w(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return n.el.offsetHeight,w(n.el,"odometer-animating")},0),this.value=t},r.prototype.renderDigit=function(){return R(f)},r.prototype.insertDigit=function(t,e){return e!=null?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},r.prototype.addSpacer=function(t,e,n){var s;return s=R(C),s.innerHTML=t,n&&w(s,n),this.insertDigit(s,e)},r.prototype.addDigit=function(t,e){var n,s,o,d;if(e==null&&(e=!0),t==="-")return this.addSpacer(t,null,"odometer-negation-mark");if(t===".")return this.addSpacer((d=this.format.radix)!=null?d:".",null,"odometer-radix-mark");if(e)for(o=!1;;){if(!this.format.repeating.length){if(o)throw new Error("Bad odometer format without digits");this.resetFormat(),o=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),n==="d")break;this.addSpacer(n)}return s=this.renderDigit(),s.querySelector(".odometer-value").innerHTML=t,this.digits.push(s),this.insertDigit(s)},r.prototype.animate=function(t){return!F||this.options.animation==="count"?this.animateCount(t):this.animateSlide(t)},r.prototype.animateCount=function(t){var e,n,s,o,d,l=this;if(n=+t-this.value)return o=s=P(),e=this.value,(d=function(){var m,y,M;if(P()-o>l.options.duration){l.value=t,l.render(),B(l.el,"odometerdone");return}return m=P()-s,m>h&&(s=P(),M=m/l.options.duration,y=n*M,e+=y,l.render(Math.round(e))),$!=null?$(d):setTimeout(d,h)})()},r.prototype.getDigitCount=function(){var t,e,n,s,o,d;for(s=1<=arguments.length?dt.call(arguments,0):[],t=o=0,d=s.length;o<d;t=++o)n=s[t],s[t]=Math.abs(n);return e=Math.max.apply(Math,s),Math.ceil(Math.log(e+1)/Math.log(10))},r.prototype.getFractionalDigitCount=function(){var t,e,n,s,o,d,l;for(o=1<=arguments.length?dt.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=d=0,l=o.length;d<l;t=++d)s=o[t],o[t]=s.toString(),n=e.exec(o[t]),n==null?o[t]=0:o[t]=n[1].length;return Math.max.apply(Math,o)},r.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},r.prototype.animateSlide=function(t){var e,n,s,o,d,l,m,y,M,v,g,b,O,N,E,T,I,lt,q,Q,W,ft,mt,ht,z,G,X;if(T=this.value,y=this.getFractionalDigitCount(T,t),y&&(t=t*Math.pow(10,y),T=T*Math.pow(10,y)),!!(s=t-T)){for(this.bindTransitionEnd(),o=this.getDigitCount(T,t),d=[],e=0,g=q=0;0<=o?q<o:q>o;g=0<=o?++q:--q){if(I=U(T/Math.pow(10,o-g-1)),m=U(t/Math.pow(10,o-g-1)),l=m-I,Math.abs(l)>this.MAX_VALUES){for(v=[],b=l/(this.MAX_VALUES+this.MAX_VALUES*e*p),n=I;l>0&&n<m||l<0&&n>m;)v.push(Math.round(n)),n+=b;v[v.length-1]!==m&&v.push(m),e++}else v=function(){X=[];for(var D=I;I<=m?D<=m:D>=m;I<=m?D++:D--)X.push(D);return X}.apply(this);for(g=Q=0,ft=v.length;Q<ft;g=++Q)M=v[g],v[g]=Math.abs(M%10);d.push(v)}for(this.resetDigits(),G=d.reverse(),g=W=0,mt=G.length;W<mt;g=++W)for(v=G[g],this.digits[g]||this.addDigit(" ",g>=y),(lt=this.ribbons)[g]==null&&(lt[g]=this.digits[g].querySelector(".odometer-ribbon-inner")),this.ribbons[g].innerHTML="",s<0&&(v=v.reverse()),O=z=0,ht=v.length;z<ht;O=++z)M=v[O],E=document.createElement("div"),E.className="odometer-value",E.innerHTML=M,this.ribbons[g].appendChild(E),O===v.length-1&&w(E,"odometer-last-value"),O===0&&w(E,"odometer-first-value");if(I<0&&this.addDigit("-"),N=this.inside.querySelector(".odometer-radix-mark"),N?.parent.removeChild(N),y)return this.addSpacer(this.format.radix,this.digits[y-1],"odometer-radix-mark")}},r}(),S.options=(ct=window.odometerOptions)!=null?ct:{},setTimeout(function(){var r,t,e,n,s;if(window.odometerOptions){n=window.odometerOptions,s=[];for(r in n)t=n[r],s.push((e=S.options)[r]!=null?(e=S.options)[r]:e[r]=t);return s}},0),S.init=function(){var r,t,e,n,s,o;if(document.querySelectorAll!=null){for(t=document.querySelectorAll(S.options.selector||".odometer"),o=[],e=0,n=t.length;e<n;e++)r=t[e],o.push(r.odometer=new S({el:r,value:(s=r.innerText)!=null?s:r.textContent}));return o}},((ut=document.documentElement)!=null?ut.doScroll:void 0)!=null&&document.createEventObject!=null?(J=document.onreadystatechange,document.onreadystatechange=function(){return document.readyState==="complete"&&S.options.auto!==!1&&S.init(),J?.apply(this,arguments)}):document.addEventListener("DOMContentLoaded",function(){if(S.options.auto!==!1)return S.init()},!1),a!==null?i.exports=S:window.Odometer=S}).call(bt)})(K,K.exports);var It=K.exports;const Ct=Tt(It),Et=async(i,a)=>{const c=JSON.parse(localStorage.getItem("dom-commerce-cart-product"))??[],h=c.find(_=>_.productId===i);h!==void 0?h.productQuantity=a:c.push({productId:i,productQuantity:a}),localStorage.setItem("dom-commerce-cart-product",JSON.stringify(c));const u=document.querySelector(".priceMeterSubtotal"),f=document.querySelector(".priceMeterItemNumber"),p=await A();u.innerHTML=p.totalPrice,f.innerText=p.totalCartItem},Pt=i=>{const a=JSON.parse(localStorage.getItem("dom-commerce-cart-product"))??[],c=a.findIndex(h=>Number(h.productId)===Number(i));return c!==-1?(a.splice(c,1),localStorage.setItem("dom-commerce-cart-product",JSON.stringify(a)),!0):!1},Ft=()=>{const i=document.querySelector("#cart"),a=i.dataset.productId;i.addEventListener("click",()=>{const c=document.querySelector("#quantity").value;Et(a,c).then(()=>{Y()})})},Lt=()=>{const i=document.querySelector(".priceMeterSubtotal"),a=document.querySelector(".priceMeterItemNumber");A().then(c=>{i.innerHTML=c.totalPrice,a.innerText=c.totalCartItem})},pt=(i,a)=>{const c=JSON.parse(localStorage.getItem("dom-commerce-cart-product")),h=c.findIndex(u=>Number(u.productId)===Number(i));c[h].productQuantity=a,localStorage.setItem("dom-commerce-cart-product",JSON.stringify(c));try{Lt()}catch(u){console.log(u)}},St=()=>{const i=document.querySelector(".off-canvas"),a=document.querySelector(".off-canvas-overlay");i.classList.add("show-off-canvas"),a.classList.add("show-off-canvas-overlay")},Ot=()=>{const i=document.querySelector(".off-canvas"),a=document.querySelector(".off-canvas-overlay");i.classList.remove("show-off-canvas"),a.classList.remove("show-off-canvas-overlay"),document.querySelector(".close-icon").addEventListener("click",function(h){h.preventDefault(),a.classList.remove("show-off-canvas-overlay"),i.classList.remove("show-off-canvas")})},qt=()=>{document.querySelector(".off-canvas-overlay").addEventListener("click",function(i){i.preventDefault(),Ot()})};function Dt({imageLink:i,productTilte:a,productCategory:c,productPrice:h,productId:u,quantity:f}){const p=document.querySelector(".cart-product-container");p.innerHTML+=Mt`
    <div class="cart-product">
      <div>
        <img
          src="${i}"
          alt=""
        />
      </div>

      <div class="cart-product-details">
        <div>
          <h4>
            ${a}
          </h4>
        </div>
        <h5>${c}</h5>
        <h5>${h}</h5>
        <div class="off-cart-btn">
          <button data-product-id="${u}" class="off-canvas-btn decrease">-</button>
          <input
            min="1"
            max="10"
            value="${f}"
            type="number"
            class="off-cart-quantity"
          />
          <button data-product-id="${u}" class="off-canvas-btn increase">+</button>
        </div>
      </div>
      <div data-product-id="${u}" class="off-canvas-cart-remove"><i class="fa-solid fa-trash"></i></div>
    </div>
    <hr class="off-canvas-horizontal-line">
  `,V()}const V=async()=>{const i=(await A()).totalPrice,a=20,c=50,h=document.querySelector(".cart-footer");h.innerHTML+=Mt`
  <div><h4>SubTotal: $ ${i.toFixed(2)}</h4></div>
  <div><h4>Tax: $ ${a.toFixed(2)}</h4></div>
  <div><h4>Shipping Cost: $ ${c.toFixed(2)}</h4></div>
  <hr>
  <div><h4>Total: $ ${(i+a+c).toFixed(2)}</h4></div>
  <div><a href="#">Checkout</a></div>
`},Y=()=>{const a=yt().map(c=>new Promise(h=>{vt(c).then(u=>{const f=JSON.parse(localStorage.getItem("dom-commerce-cart-product")).find(p=>Number(p.productId)===Number(c)).productQuantity;h({quantity:Number(f),imageLink:u.image,productCategory:u.category,productTilte:u.title,productPrice:"$ "+gt(u.price,u.salePrice),productId:u.id})})}));Promise.all(a).then(c=>{c.forEach(h=>{Dt(h)})}).finally(()=>{const c=document.querySelectorAll(".off-canvas-btn.increase"),h=document.querySelectorAll(".off-canvas-btn.decrease"),u=document.querySelectorAll(".off-canvas-cart-remove");c.forEach(f=>{f.addEventListener("click",function(){const p=document.querySelector(".off-cart-quantity");p.value=parseInt(p.value)+1,pt(f.dataset.productId,p.value),V()})}),h.forEach(f=>{f.addEventListener("click",function(){const p=document.querySelector(".off-cart-quantity");p.value>1&&(p.value=parseInt(p.value)-1,pt(f.dataset.productId,p.value),V())})}),u.forEach(f=>{f.addEventListener("click",function(){Pt(f.dataset.productId),Y()})})})},Nt=document.querySelector("#login-item");_t()&&(Nt.style.display="none");const At=document.querySelector(".view-cart");At.addEventListener("click",function(i){i.preventDefault(),St()});A().then(i=>{const a=document.createElement("div");a.innerHTML=`
            <div class="priceMeter">
                <div>Item : <span class="priceMeterItemNumber">${i.totalCartItem}</span></div>
                <div><span class="priceMeterSubtotal">${i.totalPrice}</span></div>
            </div>
`,document.querySelector("body").append(a),document.querySelector(".priceMeter").addEventListener("click",()=>{St()}),new Ct({el:document.querySelector(".priceMeterSubtotal"),value:i.totalPrice,format:"(,ddd).dd",theme:"default"})});Y();qt();export{xt as a,Ft as c,wt as g,_t as i};