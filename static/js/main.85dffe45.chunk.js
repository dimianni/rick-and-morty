(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{17:function(t,a,e){t.exports={Title:"Title_Title__22nW3"}},25:function(t,a,e){},26:function(t,a,e){},3:function(t,a,e){t.exports={Character:"Character_Character__34UjF",CharacterImg:"Character_CharacterImg__2KwVj",CharacterName:"Character_CharacterName__hFh5p"}},46:function(t,a,e){"use strict";e.r(a);var r=e(2),c=e.n(r),n=e(14),s=e.n(n),i=(e(25),e(15)),o=e(16),h=e(20),l=e(19),u=(e(26),e(17)),j=e.n(u),m=e(0),d=function(t){return Object(m.jsx)("h1",{className:j.a.Title,children:t.title})},p=e(5),C=e.n(p),b=e(3),f=e.n(b),g=function(t){return Object(m.jsxs)("div",{className:f.a.Character,children:[Object(m.jsx)("img",{className:f.a.CharacterImg,src:t.image,alt:""}),Object(m.jsx)("span",{className:f.a.CharacterName,children:t.name})]})},O=function(t){!function(t){for(var a=t.length-1;a>0;a--){var e=t[a],r=Math.floor(Math.random()*(a+1));t[a]=t[r],t[r]=e}}(t.characters);var a=t.characters.map((function(t,a){return Object(m.jsx)(g,{name:t.name,image:t.image},a)}));return Object(m.jsx)("section",{className:C.a.Characters,children:Object(m.jsx)("div",{className:C.a.CharactersWrapper,children:a})})},_=e(18),x=e.n(_),v=1,N=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var r;return Object(i.a)(this,e),(r=a.call(this,t)).getData=function(){var t="https://rickandmortyapi.com/api/character/?page=".concat(v);x.a.get(t).then((function(t){r.setState((function(a){return a.characters?{characters:a.characters.concat(t.data.results)}:{characters:t.data.results}}))})),v++,console.log(t)},r.state={characters:null},r}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t="Loading...",a=null;return this.state.characters&&(t=Object(m.jsx)(O,{characters:this.state.characters})),a=Object(m.jsx)("button",{onClick:this.getData,type:"button",children:"Load more"}),Object(m.jsx)("main",{className:"Main",children:Object(m.jsxs)("div",{className:"Container",children:[Object(m.jsx)(d,{title:"Rick and Morty"}),t,a]})})}}]),e}(r.Component),k=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,47)).then((function(a){var e=a.getCLS,r=a.getFID,c=a.getFCP,n=a.getLCP,s=a.getTTFB;e(t),r(t),c(t),n(t),s(t)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),k()},5:function(t,a,e){t.exports={Characters:"List_Characters__1ciX8",CharactersWrapper:"List_CharactersWrapper__3X8Ma"}}},[[46,1,2]]]);
//# sourceMappingURL=main.85dffe45.chunk.js.map