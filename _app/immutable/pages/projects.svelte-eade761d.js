import{S as te,i as le,s as re,x as Q,y as R,z as U,n as W,r as _,p as q,C as X,e as y,k as P,t as H,K as oe,c as $,d as u,m as b,a as j,h as T,b as h,J as f,g as V,q as z,L as A,o as J}from"../chunks/index-92502c41.js";import{C as Y}from"../chunks/card-58fc12cb.js";import{p as K}from"../chunks/projects-c4100f22.js";import"../chunks/paths-396f020f.js";function L(a,r,c){const l=a.slice();return l[2]=r[c],l}function O(a,r,c){const l=a.slice();return l[2]=r[c],l}function F(a){let r,c;return r=new Y({props:{title:a[2].title,description:a[2].description,image_url:a[2].image_url,follow_url:a[2].follow_url}}),{c(){Q(r.$$.fragment)},l(l){R(r.$$.fragment,l)},m(l,i){U(r,l,i),c=!0},p:W,i(l){c||(_(r.$$.fragment,l),c=!0)},o(l){q(r.$$.fragment,l),c=!1},d(l){X(r,l)}}}function G(a){let r,c;return r=new Y({props:{title:a[2].title,description:a[2].description,image_url:a[2].image_url,follow_url:a[2].follow_url,small:"true"}}),{c(){Q(r.$$.fragment)},l(l){R(r.$$.fragment,l)},m(l,i){U(r,l,i),c=!0},p:W,i(l){c||(_(r.$$.fragment,l),c=!0)},o(l){q(r.$$.fragment,l),c=!1},d(l){X(r,l)}}}function ne(a){let r,c,l,i,k,C,d,I,w,M,N,p,E,v=a[0],n=[];for(let t=0;t<v.length;t+=1)n[t]=F(O(a,v,t));const Z=t=>q(n[t],1,1,()=>{n[t]=null});let g=a[1],s=[];for(let t=0;t<g.length;t+=1)s[t]=G(L(a,g,t));const ee=t=>q(s[t],1,1,()=>{s[t]=null});return{c(){r=y("meta"),c=P(),l=y("section"),i=y("h2"),k=H("Projects"),C=P(),d=y("div");for(let t=0;t<n.length;t+=1)n[t].c();I=P(),w=y("h2"),M=H("More Projects"),N=P(),p=y("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){const o=oe('[data-svelte="svelte-6h4ds1"]',document.head);r=$(o,"META",{name:!0,content:!0}),o.forEach(u),c=b(t),l=$(t,"SECTION",{id:!0,class:!0});var e=j(l);i=$(e,"H2",{class:!0});var m=j(i);k=T(m,"Projects"),m.forEach(u),C=b(e),d=$(e,"DIV",{class:!0});var S=j(d);for(let x=0;x<n.length;x+=1)n[x].l(S);S.forEach(u),I=b(e),w=$(e,"H2",{class:!0});var B=j(w);M=T(B,"More Projects"),B.forEach(u),N=b(e),p=$(e,"DIV",{class:!0});var D=j(p);for(let x=0;x<s.length;x+=1)s[x].l(D);D.forEach(u),e.forEach(u),this.h()},h(){document.title="Etienne Naude",h(r,"name","description"),h(r,"content","Etienne Naude projects"),h(i,"class","svelte-6x3qyv"),h(d,"class","flex-row svelte-6x3qyv"),h(w,"class","svelte-6x3qyv"),h(p,"class","flex-row svelte-6x3qyv"),h(l,"id","projects"),h(l,"class","svelte-6x3qyv")},m(t,o){f(document.head,r),V(t,c,o),V(t,l,o),f(l,i),f(i,k),f(l,C),f(l,d);for(let e=0;e<n.length;e+=1)n[e].m(d,null);f(l,I),f(l,w),f(w,M),f(l,N),f(l,p);for(let e=0;e<s.length;e+=1)s[e].m(p,null);E=!0},p(t,[o]){if(o&1){v=t[0];let e;for(e=0;e<v.length;e+=1){const m=O(t,v,e);n[e]?(n[e].p(m,o),_(n[e],1)):(n[e]=F(m),n[e].c(),_(n[e],1),n[e].m(d,null))}for(J(),e=v.length;e<n.length;e+=1)Z(e);z()}if(o&2){g=t[1];let e;for(e=0;e<g.length;e+=1){const m=L(t,g,e);s[e]?(s[e].p(m,o),_(s[e],1)):(s[e]=G(m),s[e].c(),_(s[e],1),s[e].m(p,null))}for(J(),e=g.length;e<s.length;e+=1)ee(e);z()}},i(t){if(!E){for(let o=0;o<v.length;o+=1)_(n[o]);for(let o=0;o<g.length;o+=1)_(s[o]);E=!0}},o(t){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)q(n[o]);s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)q(s[o]);E=!1},d(t){u(r),t&&u(c),t&&u(l),A(n,t),A(s,t)}}}const ue=!0;function se(a){const r=K.slice(0,6),c=K.slice(6);return[r,c]}class me extends te{constructor(r){super(),le(this,r,se,ne,re,{})}}export{me as default,ue as prerender};
