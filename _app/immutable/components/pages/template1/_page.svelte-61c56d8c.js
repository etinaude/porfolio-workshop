import{S as Ge,i as Je,s as Ke,a as v,v as $e,k as u,q as N,H as Qe,h as s,c as $,w as ge,l as _,m as h,r as H,n as E,p as Re,b,x as Ee,F as a,f as O,d as ye,t as W,y as be,I as ve,A as we,g as De}from"../../../chunks/index-97634f48.js";import{a as Xe,b as Ye}from"../../../chunks/paths-6cd3a76e.js";import{H as Ze,C as Le}from"../../../chunks/header-ee26ac47.js";import{p as et}from"../../../chunks/projects-5881699e.js";import{i as x}from"../../../chunks/general-info-4cc9e480.js";import{e as Me}from"../../../chunks/experience-fefa4696.js";function Ve(n,r,i){const l=n.slice();return l[1]=r[i],l}function qe(n,r,i){const l=n.slice();return l[4]=r[i],l}function Ae(n,r,i){const l=n.slice();return l[7]=r[i],l}function Be(n){let r,i;return r=new Le({props:{title:n[7].title,description:n[7].description,image_url:n[7].image_url,follow_url:n[7].follow_url}}),{c(){$e(r.$$.fragment)},l(l){ge(r.$$.fragment,l)},m(l,g){Ee(r,l,g),i=!0},p:we,i(l){i||(O(r.$$.fragment,l),i=!0)},o(l){W(r.$$.fragment,l),i=!1},d(l){be(r,l)}}}function We(n){let r,i;return r=new Le({props:{title:n[4].title,description:n[4].description,image_url:n[4].image_url,follow_url:n[4].follow_url}}),{c(){$e(r.$$.fragment)},l(l){ge(r.$$.fragment,l)},m(l,g){Ee(r,l,g),i=!0},p:we,i(l){i||(O(r.$$.fragment,l),i=!0)},o(l){W(r.$$.fragment,l),i=!1},d(l){be(r,l)}}}function Fe(n){let r,i=n[1].type+"",l,g,p,w=n[1].displayText+"",C,F;return{c(){r=u("p"),l=N(i),g=N(": "),p=u("a"),C=N(w),F=v(),this.h()},l(P){r=_(P,"P",{});var j=h(r);l=H(j,i),g=H(j,": "),p=_(j,"A",{href:!0});var z=h(p);C=H(z,w),z.forEach(s),F=$(j),j.forEach(s),this.h()},h(){E(p,"href",n[1].url)},m(P,j){b(P,r,j),a(r,l),a(r,g),a(r,p),a(p,C),a(r,F)},p:we,d(P){P&&s(r)}}}function tt(n){let r,i,l,g,p,w,C,F=x.firstName+"",P,j,z=x.lastName+"",se,ae,G,Ce=x.tagLine+"",ne,Y,I,J,ie,ce,y,fe,D,ue,Z,M,K,_e,ee,S,Q,he,me,V,te,T,R,pe,de,q,X;document.title=r=x.firstName+" "+x.lastName,l=new Ze({props:{entries:{Home:"#about",Projects:"#projects",Experience:"#awards",Contact:"#cta"}}});let A=n[0],c=[];for(let e=0;e<A.length;e+=1)c[e]=Be(Ae(n,A,e));const Ue=e=>W(c[e],1,1,()=>{c[e]=null});let B=Me,f=[];for(let e=0;e<B.length;e+=1)f[e]=We(qe(n,B,e));const ze=e=>W(f[e],1,1,()=>{f[e]=null});let L=x.contacts,m=[];for(let e=0;e<L.length;e+=1)m[e]=Fe(Ve(n,L,e));return{c(){i=v(),$e(l.$$.fragment),g=v(),p=u("section"),w=u("div"),C=u("h1"),P=N(F),j=v(),se=N(z),ae=v(),G=u("h2"),ne=N(Ce),Y=v(),I=u("section"),J=u("h2"),ie=N("Projects"),ce=v(),y=u("div");for(let e=0;e<c.length;e+=1)c[e].c();fe=v(),D=u("a"),ue=N("More Projects \u2192"),Z=v(),M=u("section"),K=u("h2"),_e=N("Current Work"),ee=v(),S=u("section"),Q=u("h2"),he=N("Experience"),me=v(),V=u("div");for(let e=0;e<f.length;e+=1)f[e].c();te=v(),T=u("section"),R=u("h1"),pe=N("Contact Me"),de=v(),q=u("div");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){Qe('[data-svelte="svelte-1i7xi25"]',document.head).forEach(s),i=$(e),ge(l.$$.fragment,e),g=$(e),p=_(e,"SECTION",{id:!0,style:!0});var t=h(p);w=_(t,"DIV",{class:!0});var d=h(w);C=_(d,"H1",{});var le=h(C);P=H(le,F),j=$(le),se=H(le,z),le.forEach(s),ae=$(d),G=_(d,"H2",{});var je=h(G);ne=H(je,Ce),je.forEach(s),d.forEach(s),t.forEach(s),Y=$(e),I=_(e,"SECTION",{id:!0});var U=h(I);J=_(U,"H2",{});var Ie=h(J);ie=H(Ie,"Projects"),Ie.forEach(s),ce=$(U),y=_(U,"DIV",{class:!0});var ke=h(y);for(let k=0;k<c.length;k+=1)c[k].l(ke);ke.forEach(s),fe=$(U),D=_(U,"A",{class:!0,href:!0});var Ne=h(D);ue=H(Ne,"More Projects \u2192"),Ne.forEach(s),U.forEach(s),Z=$(e),M=_(e,"SECTION",{id:!0});var He=h(M);K=_(He,"H2",{});var xe=h(K);_e=H(xe,"Current Work"),xe.forEach(s),He.forEach(s),ee=$(e),S=_(e,"SECTION",{id:!0});var re=h(S);Q=_(re,"H2",{});var Pe=h(Q);he=H(Pe,"Experience"),Pe.forEach(s),me=$(re),V=_(re,"DIV",{class:!0});var Se=h(V);for(let k=0;k<f.length;k+=1)f[k].l(Se);Se.forEach(s),re.forEach(s),te=$(e),T=_(e,"SECTION",{id:!0});var oe=h(T);R=_(oe,"H1",{});var Te=h(R);pe=H(Te,"Contact Me"),Te.forEach(s),de=$(oe),q=_(oe,"DIV",{class:!0});var Oe=h(q);for(let k=0;k<m.length;k+=1)m[k].l(Oe);Oe.forEach(s),oe.forEach(s),this.h()},h(){E(w,"class","header-text"),E(p,"id","about"),Re(p,"--imageUrl",`url(${Xe}/images/${x.heroImage})`),E(y,"class","flex-row"),E(D,"class","button more-projects-btn"),E(D,"href",`${Ye}/projects`),E(I,"id","projects"),E(M,"id","work"),E(V,"class","flex-row"),E(S,"id","awards"),E(q,"class","contacts"),E(T,"id","cta")},m(e,o){b(e,i,o),Ee(l,e,o),b(e,g,o),b(e,p,o),a(p,w),a(w,C),a(C,P),a(C,j),a(C,se),a(w,ae),a(w,G),a(G,ne),b(e,Y,o),b(e,I,o),a(I,J),a(J,ie),a(I,ce),a(I,y);for(let t=0;t<c.length;t+=1)c[t].m(y,null);a(I,fe),a(I,D),a(D,ue),b(e,Z,o),b(e,M,o),a(M,K),a(K,_e),b(e,ee,o),b(e,S,o),a(S,Q),a(Q,he),a(S,me),a(S,V);for(let t=0;t<f.length;t+=1)f[t].m(V,null);b(e,te,o),b(e,T,o),a(T,R),a(R,pe),a(T,de),a(T,q);for(let t=0;t<m.length;t+=1)m[t].m(q,null);X=!0},p(e,[o]){if((!X||o&0)&&r!==(r=x.firstName+" "+x.lastName)&&(document.title=r),o&1){A=e[0];let t;for(t=0;t<A.length;t+=1){const d=Ae(e,A,t);c[t]?(c[t].p(d,o),O(c[t],1)):(c[t]=Be(d),c[t].c(),O(c[t],1),c[t].m(y,null))}for(De(),t=A.length;t<c.length;t+=1)Ue(t);ye()}if(o&16){B=Me;let t;for(t=0;t<B.length;t+=1){const d=qe(e,B,t);f[t]?(f[t].p(d,o),O(f[t],1)):(f[t]=We(d),f[t].c(),O(f[t],1),f[t].m(V,null))}for(De(),t=B.length;t<f.length;t+=1)ze(t);ye()}if(o&0){L=x.contacts;let t;for(t=0;t<L.length;t+=1){const d=Ve(e,L,t);m[t]?m[t].p(d,o):(m[t]=Fe(d),m[t].c(),m[t].m(q,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=L.length}},i(e){if(!X){O(l.$$.fragment,e);for(let o=0;o<A.length;o+=1)O(c[o]);for(let o=0;o<B.length;o+=1)O(f[o]);X=!0}},o(e){W(l.$$.fragment,e),c=c.filter(Boolean);for(let o=0;o<c.length;o+=1)W(c[o]);f=f.filter(Boolean);for(let o=0;o<f.length;o+=1)W(f[o]);X=!1},d(e){e&&s(i),be(l,e),e&&s(g),e&&s(p),e&&s(Y),e&&s(I),ve(c,e),e&&s(Z),e&&s(M),e&&s(ee),e&&s(S),ve(f,e),e&&s(te),e&&s(T),ve(m,e)}}}const ct=!0;function lt(n){return[et.slice(0,3)]}class ft extends Ge{constructor(r){super(),Je(this,r,lt,tt,Ke,{})}}export{ft as default,ct as prerender};
