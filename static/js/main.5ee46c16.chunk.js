(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).intervalID=void 0,t.state={time:(new Date).toUTCString().slice(-12,-4)},t.handleDocumentClick=function(){t.intervalID=window.setInterval((function(){t.setState({time:(new Date).toUTCString().slice(-12,-4)}),console.info("".concat(t.state.time))}),1e3)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.info("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),document.removeEventListener("click",this.handleDocumentClick)}},{key:"render",value:function(){var t=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.time})]})}}]),n}(l.Component);var v=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).intervalID=void 0,t.state={hasClock:!0,clockName:"Clock-0"},t.stateSet=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=window.setInterval((function(){var e=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}();t.setState({clockName:e})}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",this.stateSet)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalID),document.removeEventListener("click",this.stateSet)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(m,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5ee46c16.chunk.js.map