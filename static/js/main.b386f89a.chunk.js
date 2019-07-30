(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,s){e.exports=s(54)},30:function(e,t,s){},49:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),o=s(18),i=s.n(o),r=(s(30),s(23)),c=s(8),l=s.n(c),u=s(22),m=s(19),p=s(2),h=s(3),k=s(7),d=s(5),v=s(4),f=s(6),g=s(20),j=s.n(g),b=(s(49),function(e){function t(){return Object(p.a)(this,t),Object(k.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CSF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB38":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return n.a.createElement("div",{className:"Joke"},n.a.createElement("div",{className:"Joke-buttons"},n.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upvote}),n.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),n.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downvote})),n.a.createElement("div",{className:"Joke-text"},this.props.text),n.a.createElement("div",{className:"Joke-smiley"},n.a.createElement("i",{className:this.getEmoji()})))}}]),t}(a.Component)),J=s(21),w=s.n(J),E=(s(52),function(e){function t(e){var s;return Object(p.a)(this,t),(s=Object(k.a)(this,Object(d.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},s.seenJokes=new Set(s.state.jokes.map(function(e){return e.text})),console.log(s.seenJokes),s.handleClick=s.handleClick.bind(Object(v.a)(s)),s}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(m.a)(l.a.mark(function e(){var t,s,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokesToGet)){e.next=10;break}return e.next=5,j.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:s=e.sent,a=s.data.joke,this.seenJokes.has(a)?(console.log("Found Duplicate"),console.log(a)):t.push({id:w()(),text:a,votes:0}),e.next=2;break;case 10:this.setState(function(e){return{loading:!1,jokes:[].concat(Object(u.a)(e.jokes),t)}}),window.localStorage.setItem("jokes",JSON.stringify(t)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 18:case"end":return e.stop()}},e,this,[[0,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var s=this;this.setState(function(s){return{jokes:s.jokes.map(function(s){return s.id===e?Object(r.a)({},s,{votes:s.votes+t}):s})}},function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))})}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return n.a.createElement("div",{className:"JokeList-spinner"},n.a.createElement("i",{className:"far fa-8x fa-laugh fa-spin"}),n.a.createElement("h1",{className:"JokeList-title"},"Loading..."));var t=this.state.jokes.sort(function(e,t){return t.votes-e.votes});return n.a.createElement("div",{className:"JokeList"},n.a.createElement("div",{className:"JokeList-sidebar"},n.a.createElement("h1",{className:"JokeList-title"},n.a.createElement("span",null,"Dad")," Jokes"),n.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"}),n.a.createElement("button",{className:"JokeList-getmore",onClick:this.handleClick},"Fetch Jokes")),n.a.createElement("div",{className:"JokeList-jokes"},t.map(function(t){return n.a.createElement(b,{key:t.id,votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}})})))}}]),t}(a.Component));E.defaultProps={numJokesToGet:10};var y=E;s(53);var N=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.b386f89a.chunk.js.map