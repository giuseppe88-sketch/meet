(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{312:function(e,t,n){},739:function(e,t,n){},740:function(e,t,n){},761:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),i=n.n(o),s=(n(312),n(27)),c=n(39),u=n(28),l=n(29),d=n(7),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showHideDetails:!1},e.toggleEvent=function(){e.setState({showHideDetails:!0!==e.state.showHideDetails})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h3",{className:"event-summary",children:e.summary}),Object(d.jsxs)("p",{className:"event-start-date",children:[e.start.dateTime,", ",e.start.timeZone]}),Object(d.jsx)("p",{className:"event-location",children:e.location}),this.state.showHideDetails&&Object(d.jsxs)("div",{className:"event-details",children:[Object(d.jsx)("h2",{children:"About event:"}),Object(d.jsx)("a",{href:e.htmlLink,children:"See Details on Google Calendar"}),Object(d.jsx)("p",{className:"description",children:e.description})]}),Object(d.jsx)("button",{className:"details-btn",onClick:this.toggleEvent,children:this.state.showHideDetails?"Hide Details":"Show Details"})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(p),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,0)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(v,{text:this.state.infoText}),Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Search for a city",onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:20,ErrorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>20?e.setState({ErrorText:"Please choose a number between 1 and 20",numberOfEvents:""}):(e.setState({numberOfEvents:n,ErrorText:""}),void e.props.updateEvents("",n))},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"numberOfEvents",children:[Object(d.jsx)("p",{children:"Number of Events:"}),Object(d.jsx)("input",{type:"number",className:"number-input-event",placeholder:"Enter number of Events",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(d.jsx)(m,{text:this.state.ErrorText})]})}}]),n}(a.Component),w=n(20),O=(n(314),n(769)),y=n(293),x=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(w.a)(n,2),o=r[0],i=r[1];Object(a.useEffect)((function(){i((function(){return s()}))}),[t]);var s=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(d.jsx)(O.a,{width:400,height:400,children:Object(d.jsx)(y.a,{data:o,cx:200,cy:200,labelLine:!1,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:80,fill:"#8884d8",dataKey:"value"})})},k=(n(739),n(740),n(43)),S=n.n(k),T=n(113),E=n(302),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],N=n(190),Z=n.n(N),A=n(114),D=n.n(A),W=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},I=function(){var e=Object(T.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a,r,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return D.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),D.a.done(),e.abrupt("return",JSON.parse(t).events);case 8:return e.next=10,L();case 10:if(!(n=e.sent)){e.next=20;break}return M(),a="https://tz66221w1m.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,Z.a.get(a);case 16:return(r=e.sent).data&&(o=W(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),D.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a,r,o,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,Z.a.get("https://tz66221w1m.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&q(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tz66221w1m.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=n(765),B=n(766),U=n(767),H=n(299),z=n(300),F=n(115),P=n(303),_=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:20,notificationText:""},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t,n){e.mounted=!0,J().then((function(a){var r="all"===t&&0===n?a:"all"!==t&&0===n?a.filter((function(e){return e.location===t})):a.slice(0,n);e.mounted&&e.setState({events:r,numberOfEvents:n})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,!1===navigator.onLine?this.setState({notificationText:"App is offline, list may be not up to date"}):this.setState({notificationText:""}),J().then((function(t){if(e.mounted){var n=t.slice(0,e.state.numberOfEvents);e.setState({events:n,locations:W(t)})}}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"MeetApp"}),Object(d.jsx)("h4",{children:"Choose your nearest city"}),Object(d.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(g,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(d.jsx)(b,{text:this.state.notificationText}),Object(d.jsx)("h4",{children:"Events in each city"}),Object(d.jsxs)("div",{className:"data-vis-wrapper",children:[Object(d.jsx)(x,{events:this.state.events}),Object(d.jsx)(R.a,{height:400,children:Object(d.jsxs)(B.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(d.jsx)(U.a,{}),Object(d.jsx)(H.a,{type:"category",dataKey:"city",name:"city"}),Object(d.jsx)(z.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(d.jsx)(F.a,{cursor:{strokeDasharray:"3 3"}}),Object(d.jsx)(P.a,{name:"A school",data:this.getData(),fill:"#8884d8"})]})})]}),Object(d.jsx)(f,{events:this.state.events})]})}}]),n}(a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,770)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},V=n(191);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(t,e)}))}}(),K(),V.config("c2c78604682d4220a2c18ae28ee5d429").install(),V.notify(new Error("Test Atatus Setup"))}},[[761,1,2]]]);
//# sourceMappingURL=main.2823e4b0.chunk.js.map