(this["webpackJsonpauth0-with-react"]=this["webpackJsonpauth0-with-react"]||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=a(7),i=a(10),s=(a(30),a(4)),u=a(6),m=a(8),h=a(9),p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),this.props.auth.isAuthenticated()?r.a.createElement(c.b,{to:"/profile"},"View Profile"):null)}}]),a}(n.Component),f=(a(35),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={profile:null,error:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadUserProfile()}},{key:"loadUserProfile",value:function(){var e=this;this.props.auth.getProfile((function(t,a){e.setState({profile:t,error:a})}))}},{key:"render",value:function(){var e=this.state.profile;return e?r.a.createElement("div",{className:"profile"},r.a.createElement("h1",null,"Profile"),r.a.createElement("img",{src:e.picture,alt:"profile pic"}),r.a.createElement("div",{className:"list-info"},r.a.createElement("div",{className:"list"},r.a.createElement("span",{className:"property"},"Name"),r.a.createElement("span",null,e.name)),r.a.createElement("div",{className:"list"},r.a.createElement("span",{className:"property"},"Given Name"),r.a.createElement("span",null,e.given_name)),r.a.createElement("div",{className:"list"},r.a.createElement("span",{className:"property"},"Family Name"),r.a.createElement("span",null,e.family_name)),r.a.createElement("div",{className:"list"},r.a.createElement("span",{className:"property"},"Nick Name"),r.a.createElement("span",null,e.nickname)),r.a.createElement("div",{className:"list"},r.a.createElement("span",{className:"property"},"Email"),r.a.createElement("span",null,e.email)))):null}}]),a}(n.Component)),E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.login,n=e.logout;return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("button",{onClick:t()?n:a},t()?"log out":"log in"))))}}]),a}(n.Component),d=a(23),v=a(24);a.n(v).a.config();var g=function e(t){var a=this;Object(s.a)(this,e),this.login=function(){a.auth0.authorize()},this.handleAuthentication=function(){a.auth0.parseHash((function(e,t){t&&t.accessToken&&t.idToken?(a.setSession(t),a.history.push("/")):e&&(a.history.push("/"),alert("Error: ".concat(e.error,". check console")),console.log(e))}))},this.setSession=function(e){var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t)},this.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),a.userProfile=null,a.auth0.logout({clientID:"WyD2KryahoqM5YXITndh43KWkO7EF6fI",returnTo:"http://localhost:3000"})},this.getAccessToken=function(){var e=localStorage.getItem("access_token");if(!e)throw new Error("No access token found");return e},this.getProfile=function(e){if(a.userProfile)return e(a.userProfile);a.auth0.client.userInfo(a.getAccessToken(),(function(t,n){n&&(a.userProfile=n),e(n,t)}))},this.history=t,this.userProfile=null,this.auth0=new d.a.WebAuth({domain:"kalujja-dev.auth0.com",clientID:"WyD2KryahoqM5YXITndh43KWkO7EF6fI",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid profile email"})},b=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){if(!/access_token|id_token|error/.test(e.props.location.hash))throw new Error("Invalid callback URL");e.props.auth.handleAuthentication()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Loading...")}}]),a}(n.Component);var k=function(e){var t=new g(e.history);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{auth:t}),r.a.createElement("div",{className:"body"},r.a.createElement(i.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(p,Object.assign({auth:t},e))}}),r.a.createElement(i.b,{path:"/callback",exact:!0,render:function(e){return r.a.createElement(b,Object.assign({auth:t},e))}}),r.a.createElement(i.b,{path:"/profile",exact:!0,render:function(e){return t.isAuthenticated()?r.a.createElement(f,Object.assign({auth:t},e)):r.a.createElement(i.a,{to:"/"})}})))};o.a.render(r.a.createElement(c.a,null,r.a.createElement(i.b,{component:k})),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.6a1b8d2f.chunk.js.map