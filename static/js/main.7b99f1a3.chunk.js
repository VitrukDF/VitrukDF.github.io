(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t){e.exports="/static/media/cross.57c94804.svg"},16:function(e,t){e.exports="/static/media/nought.fac8de41.svg"},17:function(e,t){e.exports="/static/media/noughtMuted.f2ca6631.svg"},20:function(e,t){e.exports="/static/media/tick.f498b4c6.svg"},28:function(e,t){e.exports="/static/media/pluss.7fef4e83.svg"},30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),i=a.n(s),l=(a(35),a(2)),m=a(3),o=a(6),c=a(4),u=a(1),p=a(5),h=a(11),d=a(12),g=(a(36),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"bg-black px-fixed py-3 shadow"},r.a.createElement(h.b,{to:"/",className:"text-white text-decoration-none"},"Tic Tac Toe"))}}]),t}(n.Component)),b=a(29),v=a(15),f=a.n(v),k=a(16),y=a.n(k),N=a(17),C=a.n(N),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=y.a,t="border-bottom border-2 border-black";this.props.userName!==this.props.player1&&this.props.userName!==this.props.player2&&(e=C.a,t="border-bottom border-2 border-muted");var a,n,s="visible";return void 0===this.props.player2&&(s="invisible"),this.props.strokeCounter%2?this.props.strokeCounter%2?(a=void 0,n=t):(a=void 0,n=void 0):(a=t,n=void 0),r.a.createElement("div",{className:"d-flex flex-shrink-0 justify-content-between "},r.a.createElement("div",{className:"d-flex align-items-center pb-1 mr-1 "+a},r.a.createElement("span",{className:"pr-1"},this.props.player1),r.a.createElement("img",{src:f.a,height:"20",width:"20"})),r.a.createElement("div",{className:"d-flex align-items-center pb-1 "+n+" "+s},r.a.createElement("img",{className:"pr-1",src:e,height:"20"}),r.a.createElement("span",null,this.props.player2)))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={elapsedTime:0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){e.startTime!==this.props.startTime&&this.tick()}},{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval(function(){return e.tick()},1e3),this.tick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){var e=Date.now()-this.props.startTime+1e3;this.setState(function(){return{elapsedTime:e}})}},{key:"render",value:function(){var e=new Date(this.state.elapsedTime-108e5).toLocaleTimeString();return r.a.createElement(r.a.Fragment,null,e)}}]),t}(n.Component),O=function(){function e(){Object(l.a)(this,e)}return Object(m.a)(e,null,[{key:"push",value:function(e,t){var a=this.get(e);null===a&&(a=[]),a.push(t),localStorage.setItem(e,JSON.stringify(a)),console.log("table",a)}},{key:"set",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"get",value:function(e){return JSON.parse(localStorage.getItem(e))}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}(),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={},a.surrenderClick=a.surrenderClick.bind(Object(u.a)(a)),a.menuClick=a.menuClick.bind(Object(u.a)(a)),a.checkGameState=a.checkGameState.bind(Object(u.a)(a)),a.clickGameCell=a.clickGameCell.bind(Object(u.a)(a)),a.getData=a.getData.bind(Object(u.a)(a)),a.isOdd=a.isOdd.bind(Object(u.a)(a)),a.endGame=a.endGame.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"isOdd",value:function(e){return!!(e%2)}},{key:"clickGameCell",value:function(e){var t=this,a=Object(b.a)(e,2),n=a[0],r=a[1],s=this.isOdd(this.state.game.strokeCounter)?this.state.game.player2:this.state.game.player1;null===this.state.game.gameField[n][r]&&0===this.state.game.winner&&this.props.userName===s&&this.setState(function(e){var a=e.game.gameField.map(function(a,s){return s===n?a.map(function(a,n){return n===r?t.isOdd(e.game.strokeCounter+1):a}):a}),s=Object.assign({},e.game);s.lastActivity=Date.now(),s.strokeCounter=e.game.strokeCounter+1,s.lastPosition=[n,r],s.gameField=a;var i=O.get("games");return i.splice(t.props.match.params.id,1,s),O.set("games",i),{game:s}})}},{key:"componentDidUpdate",value:function(){if(void 0!==this.state.game&&"deleted"!==this.state.game&&0===this.state.game.winner)if(this.checkGameState()){var e=this.isOdd(this.state.game.strokeCounter)?1:2;this.setState({game:this.endGame(e)})}else if(this.state.game.cellNumber===this.state.game.strokeCounter){this.setState({game:this.endGame(5)})}}},{key:"checkGameState",value:function(){for(var e=this.state.game.lastPosition,t=this.state.game.numberToWin,a=t-1,n=this.state.game.gameField,r=this.state.game.strokeCounter,s=0,i=e[1]-a;i<=e[1]+a;i++)if(i>=0&&i<n[e[0]].length)if(n[e[0]][i]==this.isOdd(r)){if(++s==t)return!0}else s=0;for(var l=0,m=e[0]-a;m<=e[0]+a;m++)if(m>=0&&m<n.length)if(n[m][e[1]]==this.isOdd(r)){if(++l==t)return!0}else l=0;for(var o=0,c=e[0]-a,u=e[1]-a;e[0],u<=e[1]+a;c++,u++)if(c>=0&&c<n.length&&u>=0&&u<n[e[0]].length)if(n[c][u]==this.isOdd(r)){if(++o==t)return!0}else o=0;for(var p=0,h=e[0]+a,d=e[1]-a;e[0],d<=e[1]+a;h--,d++)if(h>=0&&h<n.length&&d>=0&&d<n[e[0]].length)if(n[h][d]==this.isOdd(r)){if(++p==t)return!0}else p=0}},{key:"surrenderClick",value:function(e){var t=this;if(e.preventDefault(),0===this.state.game.winner){var a=t.props.userName==t.state.game.player1?3:t.props.userName==t.state.game.player2?4:void 0;this.setState({game:this.endGame(a)}),this.props.history.push("/")}}},{key:"menuClick",value:function(e){e.preventDefault(),this.props.history.push("/")}},{key:"endGame",value:function(e){var t=Object.assign({},this.state.game);t.lastActivity=Date.now(),t.strokeCounter=this.state.game.strokeCounter-1,t.winner=e;var a=O.get("games");return a.splice(this.props.match.params.id,1,t),O.set("games",a),t}},{key:"getData",value:function(){var e=this,t=O.get("games");if(null===t)this.props.history.push("/");else{var a=t[this.props.match.params.id];this.setState(function(t){if("deleted"===a){if("deleted"!==t.game)return{game:"deleted"}}else{if(void 0===a.player2&&a.player1!==e.props.userName){a.player2=e.props.userName;var n=O.get("games");return n.splice(e.props.match.params.id,1,a),O.set("games",n),{game:a}}if(void 0===t.game||t.game.player2!=a.player2||t.game.startTime!=a.startTime||t.game.gamePhase!=a.gamePhase||t.game.gameVieW!=a.gameVieW||t.game.strokeCounter!=a.strokeCounter||t.game.winner!=a.winner)return{game:a}}})}}},{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval(function(){return e.getData()},1e3),this.getData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this;if("deleted"===this.state.game)return r.a.createElement("div",null,(alert("\u0438\u0441\u0442\u0435\u043a\u043b\u043e \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438"),void e.props.history.push("/")));if(void 0!==this.state.game){var t="",a=y.a,n="customColumn",s="SURRENDER",i=this.surrenderClick;void 0!==this.state.game.player2&&0===this.state.game.winner||(s="BACK",i=this.menuClick),this.props.userName!==this.state.game.player1&&this.props.userName!==this.state.game.player2&&(t="text-muted",a=C.a,n="customColumnMuted",s="BACK",i=this.menuClick);var l=new Date(this.state.game.lastActivity-this.state.game.startTime-108e5).toLocaleTimeString(),m="";switch(this.state.game.winner){case 1:m="Winner "+this.state.game.player1;break;case 2:m="Winner "+this.state.game.player2;break;case 3:m="Surrender "+this.state.game.player1;break;case 4:m="Surrender "+this.state.game.player2;break;case 5:m="Draw Game";break;default:l=r.a.createElement(w,{startTime:this.state.game.startTime})}var o=40/this.state.game.gameField.length+"vmin";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t},r.a.createElement(E,{userName:this.props.userName,player1:this.state.game.player1,player2:this.state.game.player2,strokeCounter:this.state.game.strokeCounter})),r.a.createElement("div",{className:"d-flex flex-column align-items-center flex-grow-0 flex-shrink-1 my-4 overflow-auto"},this.state.game.gameField.map(function(t,s){return r.a.createElement("div",{className:"customRow",key:s},t.map(function(t,i){var l=null;return l=1==t?f.a:0==t?a:null,s===e.state.game.gameField.length-1&&(n=e.props.userName!==e.state.game.player1&&e.props.userName!==e.state.game.player2?"customColumnLastRowMuted":"customColumnLastRow"),r.a.createElement("div",{className:n,onClick:function(){return e.clickGameCell([s,i])},key:i,style:{flexBasis:o}},r.a.createElement("img",{src:l,className:"gameCell img-fluid",alt:""}))}))})),r.a.createElement("div",{className:"endGame"},m),r.a.createElement("div",{className:"mx-auto my-4 h2 "+t},l),r.a.createElement("button",{className:"flex-shrink-0 mx-auto btn btn-buttonColor",style:{width:"10rem"},onClick:i},s))}return r.a.createElement("div",null,"...Loading")}}]),t}(n.Component),j=Object(d.f)(I),x=a(20),T=a.n(x),W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){this.props.game.gamePhase;var e,t,a,n,s,i,l=this.props.game.player1,m=this.props.game.player2,o=this.props.game.winner,c=this.props.game.startTime,u=this.props.game.lastActivity,p=r.a.createElement(w,{startTime:c});0!==o&&(p=new Date(u-c-108e5).toLocaleTimeString());return void 0===m?(e="bg-bgGameCardColor1",t="text-white",a="text-white",n="invisible",s="invisible",i="invisible"):0===o?(e="bg-bgGameCardColor2",t="text-white",a="text-white",n="visible",s="invisible",i="invisible"):(e="bg-bgGameCardColor3",n="visible",1===o||4===o?(t="text-winnerColor",a="text-black",s="visible",i="invisible"):2===o||3===o?(t="text-black",a="text-winnerColor",s="invisible",i="visible"):(t="text-black",a="text-black",s="invisible",i="invisible")),r.a.createElement("div",{className:"gameCard p-1 "+e},r.a.createElement("div",{className:"p-1 "},r.a.createElement("div",{className:""},r.a.createElement("span",{className:"pr-1 "+t},l),r.a.createElement("img",{className:s,src:T.a})),r.a.createElement("div",{className:"border-top border-black pt-1 "+n},r.a.createElement("span",{className:"pr-1 "+a},m),r.a.createElement("img",{className:i,src:T.a}))),r.a.createElement("div",{className:""},p))}}]),t}(n.Component),D=a(28),G=a.n(D),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={games:[]},a.callCreateGame=a.callCreateGame.bind(Object(u.a)(a)),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.getData=a.getData.bind(Object(u.a)(a)),a.userNameInputChange=a.userNameInputChange.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/game/"+e)}},{key:"callCreateGame",value:function(e){e.preventDefault(),this.props.history.push("/createGame")}},{key:"getData",value:function(){var e=this,t=O.get("games");this.setState(function(a){if(null===t){if(0!==a.games.length)return{games:[]}}else for(var n=0;n<t.length;n++)if(t[n].lastActivity+e.props.standbyTime<Date.now()&&(t.splice(n,1,"deleted"),O.set("games",t)),"deleted"===t[n]){if(a.games[n]!=t[n])return{games:t}}else if(a.games.length!=t.length||a.games[n].winner!=t[n].winner||a.games[n].player1!=t[n].player1||a.games[n].player2!=t[n].player2)return{games:t}})}},{key:"userNameInputChange",value:function(e){this.props.stateChanger({userName:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval(function(){return e.getData()},1e3),this.getData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{className:"pb-2 flex-shrink-0 border-bottom d-flex form-control-plaintext",style:{width:"70%"},name:"userNameInput",value:this.props.userName,onChange:this.userNameInputChange,maxLength:"20"})),r.a.createElement("div",{className:"d-flex flex-wrap flex-grow-0 borde borde-3 flex-shrink-1 my-4 overflow-auto gameCardList"},this.state.games.map(function(t,a){if("deleted"!==e.state.games[a])return r.a.createElement("div",{key:a,onClick:function(){e.handleClick(a)},style:{cursor:"pointer"}},r.a.createElement(W,{game:e.state.games[a]}))})),r.a.createElement("button",{className:"flex-shrink-0 mt-auto ml-auto btn btn-buttonColor shadow rounded-circle",style:{width:"50px",height:"50px"},onClick:this.callCreateGame},r.a.createElement("img",{src:G.a,className:"img-fluid",alt:""})))}}]),t}(n.Component),M=Object(d.f)(S),F=a(14),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={rowInput:"4",columnInput:"4",numberToWinInput:"4",rowInputError:"",columnInputError:"",numberToWinInputError:"",rowInputHighlight:"",columnInputHighlight:"",numberToWinInputHighlight:""},a.backToMenu=a.backToMenu.bind(Object(u.a)(a)),a.createGame=a.createGame.bind(Object(u.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t;e.preventDefault();var a=e.target.name,n=a+"Error",r=a+"Highlight";if("numberToWinInput"==a){var s=e.target.validationMessage,i=Math.round(+this.state.rowInput*this.state.columnInput/2);(+e.target.value>+this.state.rowInput&&+e.target.value>+this.state.columnInput||+e.target.value>i)&&(s="\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0438\u0433\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435")}else if("rowInput"==a){i=Math.round(+e.target.value*this.state.columnInput/2);(+this.state.numberToWinInput>+e.target.value&&+this.state.numberToWinInput>+this.state.columnInput||+this.state.numberToWinInput>i)&&(s="\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0438\u0433\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435")}else if("columnInput"==a){i=Math.round(+this.state.rowInput*e.target.value/2);(+this.state.numberToWinInput>+this.state.rowInput&&+this.state.numberToWinInput>+e.target.value||+this.state.numberToWinInput>i)&&(s="\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0438\u0433\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435")}var l=s?"is-invalid":"is-valid",m=e.target.validationMessage?"is-invalid":"is-valid";this.setState((t={},Object(F.a)(t,a,e.target.value),Object(F.a)(t,n,e.target.validationMessage),Object(F.a)(t,r,m),Object(F.a)(t,"numberToWinInputError",s),Object(F.a)(t,"numberToWinInputHighlight",l),t))}},{key:"backToMenu",value:function(e){e.preventDefault(),this.props.history.push("/")}},{key:"createGame",value:function(e){if(e.preventDefault(),!this.state.rowInputError&&!this.state.columnInputError&&!this.state.numberToWinInputError){for(var t=Number(this.state.rowInput),a=Number(this.state.columnInput),n=Number(this.state.numberToWinInput),r=new Array(t),s=0;s<r.length;s++)r[s]=new Array(a),r[s].fill(null);var i={startTime:Date.now(),lastActivity:Date.now(),strokeCounter:0,numberToWin:n,lastPosition:[0,0],gameField:r,cellNumber:t*a,winner:0,player1:this.props.userName,player2:void 0};O.push("games",i),this.props.history.push("/")}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"mx-auto p-4 mb-4 bg-white shadow-sm rounded needs-validation",noValidate:!0,style:{maxWidth:"700px"},action:"#",method:"post"},r.a.createElement("div",{className:"mb-4 mx-auto flex-grow-1",style:{maxWidth:"300px"}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputRow",className:"col-sm-7 col-form-label"},"Number of rows",r.a.createElement("small",{id:"inputRowHelpBlock",className:"form-text text-muted"},"1-999")),r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("input",{type:"text",className:"form-control "+this.state.rowInputHighlight,id:"inputRow",value:this.state.rowInput,name:"rowInput",onChange:this.handleInputChange,"aria-describedby":"inputRowHelpBlock",pattern:"[1-9]{1}\\d{0,2}",required:!0})),r.a.createElement("div",{className:"invalid-feedback d-block px-3"},this.state.rowInputError)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputColumn",className:"col-sm-7 col-form-label"},"Number of columns",r.a.createElement("small",{id:"inputColumnHelpBlock",className:"form-text text-muted"},"1-999")),r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("input",{type:"text",className:"form-control "+this.state.columnInputHighlight,id:"inputColumn",value:this.state.columnInput,name:"columnInput",onChange:this.handleInputChange,"aria-describedby":"inputColumnHelpBlock",pattern:"[1-9]{1}\\d{0,2}",required:!0})),r.a.createElement("div",{className:"invalid-feedback d-block px-3"},this.state.columnInputError)),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputNumberToWin",className:"col-sm-7 col-form-label"},"Number to win",r.a.createElement("small",{id:"inputNumberToWinHelpBlock",className:"form-text text-muted"},"more then null and less than max field")),r.a.createElement("div",{className:"col-sm-5"},r.a.createElement("input",{type:"text",className:"form-control "+this.state.numberToWinInputHighlight,id:"inputNumberToWin",value:this.state.numberToWinInput,name:"numberToWinInput",onChange:this.handleInputChange,"aria-describedby":"inputNumberToWinHelpBlock",pattern:"[1-9]{1}\\d{0,2}",required:!0})),r.a.createElement("div",{className:"invalid-feedback d-block px-3"},this.state.numberToWinInputError)),r.a.createElement("div",{className:"form-group row justify-content-between"},r.a.createElement("div",{className:"col-auto pb-2"},r.a.createElement("button",{className:"btn btn-warning ",type:"reset",onClick:this.backToMenu},"Cancel")),r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{className:"btn btn-buttonColor ",type:"submit",onClick:this.createGame},"Create game"))))))}}]),t}(n.Component),A=Object(d.f)(H),B=(n.Component,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={selectGame:0,standbyTime:6e4,userName:"user Name"},a.stateChanger=a.stateChanger.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"stateChanger",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{basename:"/"},r.a.createElement(g,null),r.a.createElement("div",{className:"flex-grow-1 d-flex flex-column px-fixed py-4 overflow-auto"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/menu",render:function(){return r.a.createElement(M,{stateChanger:e.stateChanger,userName:e.state.userName,standbyTime:e.state.standbyTime})}}),r.a.createElement(d.b,{path:"/createGame",render:function(){return r.a.createElement(A,{userName:e.state.userName})}}),r.a.createElement(d.b,{path:"/game/:id",render:function(t){var a=t.match;return r.a.createElement(j,{match:a,userName:e.state.userName})}}),r.a.createElement(d.b,{path:"/no",component:R}),r.a.createElement(d.a,{from:"/*",to:"/menu"}))))}}]),t}(n.Component)),R=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,t.pathname)))},L=B;i.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7b99f1a3.chunk.js.map