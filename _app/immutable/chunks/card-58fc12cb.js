import{S as N,i as U,s as B,e as v,k as E,t as I,c as m,a as h,d as k,m as C,h as S,M as O,b as a,g as F,J as s,j as V,n as q}from"./index-92502c41.js";import{a as H}from"./paths-396f020f.js";function G(i){let t,e,c,b,p,z,n,l,x,u,g,w,f,y,_;return{c(){t=v("div"),e=v("a"),c=v("div"),b=v("img"),z=E(),n=v("h3"),l=I(i[0]),x=E(),u=v("caption"),g=I(i[1]),w=E(),f=v("div"),y=I("read more \u2192"),this.h()},l(r){t=m(r,"DIV",{class:!0});var o=h(t);e=m(o,"A",{href:!0,target:!0,rel:!0,class:!0});var d=h(e);c=m(d,"DIV",{class:!0});var j=h(c);b=m(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(k),z=C(d),n=m(d,"H3",{class:!0});var A=h(n);l=S(A,i[0]),A.forEach(k),x=C(d),u=m(d,"CAPTION",{class:!0});var D=h(u);g=S(D,i[1]),D.forEach(k),w=C(d),f=m(d,"DIV",{class:!0});var M=h(f);y=S(M,"read more \u2192"),M.forEach(k),d.forEach(k),o.forEach(k),this.h()},h(){O(b.src,p=`${H}/images/${i[2]}`)||a(b,"src",p),a(b,"alt","project"),a(b,"class","svelte-pbbbzk"),a(c,"class","img svelte-pbbbzk"),a(n,"class","svelte-pbbbzk"),a(u,"class","svelte-pbbbzk"),a(f,"class","read-more svelte-pbbbzk"),a(e,"href",i[3]),a(e,"target","_blank"),a(e,"rel","noopener"),a(e,"class","svelte-pbbbzk"),a(t,"class",_="card tilt "+(i[4]=="true"?"small":"")+" svelte-pbbbzk")},m(r,o){F(r,t,o),s(t,e),s(e,c),s(c,b),s(e,z),s(e,n),s(n,l),s(e,x),s(e,u),s(u,g),s(e,w),s(e,f),s(f,y)},p(r,[o]){o&4&&!O(b.src,p=`${H}/images/${r[2]}`)&&a(b,"src",p),o&1&&V(l,r[0]),o&2&&V(g,r[1]),o&8&&a(e,"href",r[3]),o&16&&_!==(_="card tilt "+(r[4]=="true"?"small":"")+" svelte-pbbbzk")&&a(t,"class",_)},i:q,o:q,d(r){r&&k(t)}}}function J(i,t,e){let{title:c}=t,{description:b}=t,{image_url:p}=t,{follow_url:z="https://github.com"}=t,{small:n="false"}=t;return i.$$set=l=>{"title"in l&&e(0,c=l.title),"description"in l&&e(1,b=l.description),"image_url"in l&&e(2,p=l.image_url),"follow_url"in l&&e(3,z=l.follow_url),"small"in l&&e(4,n=l.small)},[c,b,p,z,n]}class T extends N{constructor(t){super(),U(this,t,J,G,B,{title:0,description:1,image_url:2,follow_url:3,small:4})}}export{T as C};
