(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).intervalID=void 0,e.state={time:(new Date).toUTCString().slice(-12,-4)},e.handleDocumentClick=function(){e.intervalID=window.setInterval((function(){e.setState({time:(new Date).toUTCString().slice(-12,-4)}),console.info("".concat(e.state.time))}),1e3)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.handleDocumentClick),document.addEventListener("click",this.handleDocumentClick)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID),document.removeEventListener("click",this.handleDocumentClick)}},{key:"render",value:function(){var e=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.time})]})}}]),n}(l.Component);var v=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).intervalID=void 0,e.state={hasClock:!0,clockName:"Clock-0"},e.stateSet=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=window.setInterval((function(){var t=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}();e.setState({clockName:t})}),3300),document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),document.addEventListener("click",this.stateSet)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalID),document.removeEventListener("click",this.stateSet)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1ff8cfed.chunk.js.map