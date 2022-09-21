import{L as ee,S as te,i as le,s as re,a as w,v as V,e as U,H as oe,h as g,c as H,w as q,b as P,x as A,t as I,d as B,f as y,y as L,G as se,g as F,k as $,q as N,l as b,m as E,r as C,n as k,p as ne,F as m,A as D,M as O,N as S,I as G}from"../../../chunks/index-97634f48.js";import{a as ae,b as ce}from"../../../chunks/paths-6cd3a76e.js";import{p as ie}from"../../../chunks/stores-8dc2e77c.js";import{H as fe,C as Z}from"../../../chunks/header-ee26ac47.js";import{p as ue}from"../../../chunks/projects-5881699e.js";import{i as j}from"../../../chunks/general-info-4cc9e480.js";import{e as J}from"../../../chunks/experience-fefa4696.js";function z(u,{delay:t=0,duration:o=400,easing:l=ee}={}){const p=+getComputedStyle(u).opacity;return{delay:t,duration:o,easing:l,css:s=>`opacity: ${s*p}`}}function K(u,t,o){const l=u.slice();return l[8]=t[o],l}function Q(u,t,o){const l=u.slice();return l[5]=t[o],l}function R(u,t,o){const l=u.slice();return l[2]=t[o],l}function _e(u){let t,o,l,p=j.firstName+"",s,f,d=j.lastName+"",_,r,a,c=j.tagLine+"",e,n,i;return{c(){t=$("section"),o=$("div"),l=$("h1"),s=N(p),f=w(),_=N(d),r=w(),a=$("h2"),e=N(c),this.h()},l(h){t=b(h,"SECTION",{id:!0,style:!0,class:!0});var v=E(t);o=b(v,"DIV",{class:!0});var x=E(o);l=b(x,"H1",{});var M=E(l);s=C(M,p),f=H(M),_=C(M,d),M.forEach(g),r=H(x),a=b(x,"H2",{});var T=E(a);e=C(T,c),T.forEach(g),x.forEach(g),v.forEach(g),this.h()},h(){k(o,"class","header-text"),k(t,"id","about"),ne(t,"--imageUrl",`url(${ae}/images/${j.heroImage})`),k(t,"class","svelte-z778vp")},m(h,v){P(h,t,v),m(t,o),m(o,l),m(l,s),m(l,f),m(l,_),m(o,r),m(o,a),m(a,e),i=!0},p:D,i(h){i||(O(()=>{n||(n=S(t,z,{},!0)),n.run(1)}),i=!0)},o(h){n||(n=S(t,z,{},!1)),n.run(0),i=!1},d(h){h&&g(t),h&&n&&n.end()}}}function he(u){let t,o,l,p,s,f,d,_=j.contacts,r=[];for(let a=0;a<_.length;a+=1)r[a]=W(K(u,_,a));return{c(){t=$("section"),o=$("h1"),l=N("Contact Me"),p=w(),s=$("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=b(a,"SECTION",{id:!0,class:!0});var c=E(t);o=b(c,"H1",{});var e=E(o);l=C(e,"Contact Me"),e.forEach(g),p=H(c),s=b(c,"DIV",{class:!0});var n=E(s);for(let i=0;i<r.length;i+=1)r[i].l(n);n.forEach(g),c.forEach(g),this.h()},h(){k(s,"class","contacts"),k(t,"id","cta"),k(t,"class","svelte-z778vp")},m(a,c){P(a,t,c),m(t,o),m(o,l),m(t,p),m(t,s);for(let e=0;e<r.length;e+=1)r[e].m(s,null);d=!0},p(a,c){if(c&0){_=j.contacts;let e;for(e=0;e<_.length;e+=1){const n=K(a,_,e);r[e]?r[e].p(n,c):(r[e]=W(n),r[e].c(),r[e].m(s,null))}for(;e<r.length;e+=1)r[e].d(1);r.length=_.length}},i(a){d||(O(()=>{f||(f=S(t,z,{},!0)),f.run(1)}),d=!0)},o(a){f||(f=S(t,z,{},!1)),f.run(0),d=!1},d(a){a&&g(t),G(r,a),a&&f&&f.end()}}}function pe(u){let t,o,l,p,s,f,d,_=J,r=[];for(let c=0;c<_.length;c+=1)r[c]=X(Q(u,_,c));const a=c=>I(r[c],1,1,()=>{r[c]=null});return{c(){t=$("section"),o=$("h2"),l=N("Experience"),p=w(),s=$("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){t=b(c,"SECTION",{id:!0,class:!0});var e=E(t);o=b(e,"H2",{});var n=E(o);l=C(n,"Experience"),n.forEach(g),p=H(e),s=b(e,"DIV",{class:!0});var i=E(s);for(let h=0;h<r.length;h+=1)r[h].l(i);i.forEach(g),e.forEach(g),this.h()},h(){k(s,"class","flex-row experience-grid svelte-z778vp"),k(t,"id","Experience"),k(t,"class","svelte-z778vp")},m(c,e){P(c,t,e),m(t,o),m(o,l),m(t,p),m(t,s);for(let n=0;n<r.length;n+=1)r[n].m(s,null);d=!0},p(c,e){if(e&32){_=J;let n;for(n=0;n<_.length;n+=1){const i=Q(c,_,n);r[n]?(r[n].p(i,e),y(r[n],1)):(r[n]=X(i),r[n].c(),y(r[n],1),r[n].m(s,null))}for(F(),n=_.length;n<r.length;n+=1)a(n);B()}},i(c){if(!d){for(let e=0;e<_.length;e+=1)y(r[e]);O(()=>{f||(f=S(t,z,{},!0)),f.run(1)}),d=!0}},o(c){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)I(r[e]);f||(f=S(t,z,{},!1)),f.run(0),d=!1},d(c){c&&g(t),G(r,c),c&&f&&f.end()}}}function de(u){let t,o,l,p,s,f,d,_,r,a,c=u[1],e=[];for(let i=0;i<c.length;i+=1)e[i]=Y(R(u,c,i));const n=i=>I(e[i],1,1,()=>{e[i]=null});return{c(){t=$("section"),o=$("h2"),l=N("Projects"),p=w(),s=$("div");for(let i=0;i<e.length;i+=1)e[i].c();f=w(),d=$("a"),_=N("More Projects \u2192"),this.h()},l(i){t=b(i,"SECTION",{id:!0,class:!0});var h=E(t);o=b(h,"H2",{});var v=E(o);l=C(v,"Projects"),v.forEach(g),p=H(h),s=b(h,"DIV",{class:!0});var x=E(s);for(let T=0;T<e.length;T+=1)e[T].l(x);x.forEach(g),f=H(h),d=b(h,"A",{class:!0,href:!0});var M=E(d);_=C(M,"More Projects \u2192"),M.forEach(g),h.forEach(g),this.h()},h(){k(s,"class","flex-row"),k(d,"class","button more-projects-btn"),k(d,"href",`${ce}/projects`),k(t,"id","projects"),k(t,"class","svelte-z778vp")},m(i,h){P(i,t,h),m(t,o),m(o,l),m(t,p),m(t,s);for(let v=0;v<e.length;v+=1)e[v].m(s,null);m(t,f),m(t,d),m(d,_),a=!0},p(i,h){if(h&2){c=i[1];let v;for(v=0;v<c.length;v+=1){const x=R(i,c,v);e[v]?(e[v].p(x,h),y(e[v],1)):(e[v]=Y(x),e[v].c(),y(e[v],1),e[v].m(s,null))}for(F(),v=c.length;v<e.length;v+=1)n(v);B()}},i(i){if(!a){for(let h=0;h<c.length;h+=1)y(e[h]);O(()=>{r||(r=S(t,z,{},!0)),r.run(1)}),a=!0}},o(i){e=e.filter(Boolean);for(let h=0;h<e.length;h+=1)I(e[h]);r||(r=S(t,z,{},!1)),r.run(0),a=!1},d(i){i&&g(t),G(e,i),i&&r&&r.end()}}}function W(u){let t,o=u[8].type+"",l,p,s,f=u[8].displayText+"",d,_;return{c(){t=$("p"),l=N(o),p=N(": "),s=$("a"),d=N(f),_=w(),this.h()},l(r){t=b(r,"P",{});var a=E(t);l=C(a,o),p=C(a,": "),s=b(a,"A",{href:!0});var c=E(s);d=C(c,f),c.forEach(g),_=H(a),a.forEach(g),this.h()},h(){k(s,"href",u[8].url)},m(r,a){P(r,t,a),m(t,l),m(t,p),m(t,s),m(s,d),m(t,_)},p:D,d(r){r&&g(t)}}}function X(u){let t,o;return t=new Z({props:{title:u[5].title,description:u[5].description,image_url:u[5].image_url,follow_url:u[5].follow_url}}),{c(){V(t.$$.fragment)},l(l){q(t.$$.fragment,l)},m(l,p){A(t,l,p),o=!0},p:D,i(l){o||(y(t.$$.fragment,l),o=!0)},o(l){I(t.$$.fragment,l),o=!1},d(l){L(t,l)}}}function Y(u){let t,o;return t=new Z({props:{title:u[2].title,description:u[2].description,image_url:u[2].image_url,follow_url:u[2].follow_url}}),{c(){V(t.$$.fragment)},l(l){q(t.$$.fragment,l)},m(l,p){A(t,l,p),o=!0},p:D,i(l){o||(y(t.$$.fragment,l),o=!0)},o(l){I(t.$$.fragment,l),o=!1},d(l){L(t,l)}}}function me(u){let t,o,l,p,s,f,d,_;document.title=t=j.firstName+" "+j.lastName,l=new fe({props:{entries:{Home:"#",Projects:"#projects",Experience:"#experience",Contact:"#cta"}}});const r=[de,pe,he,_e],a=[];function c(e,n){return e[0].url.hash==="#projects"?0:e[0].url.hash==="#experience"?1:e[0].url.hash==="#cta"?2:3}return s=c(u),f=a[s]=r[s](u),{c(){o=w(),V(l.$$.fragment),p=w(),f.c(),d=U()},l(e){oe('[data-svelte="svelte-1i7xi25"]',document.head).forEach(g),o=H(e),q(l.$$.fragment,e),p=H(e),f.l(e),d=U()},m(e,n){P(e,o,n),A(l,e,n),P(e,p,n),a[s].m(e,n),P(e,d,n),_=!0},p(e,[n]){(!_||n&0)&&t!==(t=j.firstName+" "+j.lastName)&&(document.title=t);let i=s;s=c(e),s===i?a[s].p(e,n):(F(),I(a[i],1,1,()=>{a[i]=null}),B(),f=a[s],f?f.p(e,n):(f=a[s]=r[s](e),f.c()),y(f,1),f.m(d.parentNode,d))},i(e){_||(y(l.$$.fragment,e),y(f),_=!0)},o(e){I(l.$$.fragment,e),I(f),_=!1},d(e){e&&g(o),L(l,e),e&&g(p),a[s].d(e),e&&g(d)}}}const je=!0;function ve(u,t,o){let l;se(u,ie,s=>o(0,l=s));const p=ue.slice(0,3);return[l,p]}class Ne extends te{constructor(t){super(),le(this,t,ve,me,re,{})}}export{Ne as default,je as prerender};
