(window["webpackJsonphotel-booking"]=window["webpackJsonphotel-booking"]||[]).push([[0],{102:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),c=a(7),s=(a(102),a(61)),m=a(10),i=a(11),u=a(13),p=a(12),d=a(14),h=a(23),E=a(34),g=a.n(E),f=(a(120),a(121),function(e){return l.a.createElement("aside",{className:"aside"},l.a.createElement("span",null),l.a.createElement("div",{className:"tag"},"\u8a02\u623f"),l.a.createElement("i",{className:"fas fa-phone-volume"}),l.a.createElement("i",{className:"far fa-comments"}))}),b=a(44),v=a.n(b),O=function(e){var t=e.allRooms,a=[];return t&&t.map(function(e,t){return a.push(l.a.createElement("div",{className:"photo-block",key:e.id},l.a.createElement(c.b,{to:"room/".concat(e.id)},l.a.createElement("img",{src:e.imageUrl,alt:e.name}),l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"hover-content"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,"$".concat(e.normalDayPrice," ~ $").concat(e.holidayPrice)),l.a.createElement("button",null,"more",l.a.createElement("span",null)))))),null}),l.a.createElement("section",{className:"col"},l.a.createElement("header",{className:"header header-home"},l.a.createElement("img",{src:v.a,alt:""}),l.a.createElement("h1",null,"\u7da0\u67f3\u5bbf\u65c5"),l.a.createElement("h2",null,"Green Willow Lodge")),l.a.createElement("div",{className:"room-list"},l.a.createElement("span",{className:"title"},"\u5ba2\u623f\u4ecb\u7d39"),a))},N=function(e){var t=e.allRooms;return l.a.createElement("div",{className:"home"},l.a.createElement(f,null),l.a.createElement("main",null,l.a.createElement(O,{allRooms:t})))},k=a(96),C=function(e){switch(e.type){case"date":case"email":case"phone":case"text":return l.a.createElement("div",{className:"form-group ".concat(e.id)},l.a.createElement("label",{htmlFor:e.id},e.label),l.a.createElement("input",{type:e.type,id:e.id,placeholder:e.placeholder}));case"checkbox":return l.a.createElement("div",{className:"form-group ".concat(e.id)},l.a.createElement("input",{type:e.type,id:e.id}),l.a.createElement("label",{htmlFor:e.id},e.label));case"select":var t=[];if("title"===e.id)t.push(l.a.createElement("option",{key:"ms",value:"ms"},"\u5973\u58eb"),l.a.createElement("option",{key:"mr",value:"mr"},"\u5148\u751f"));else for(var a=0;a<10;a++)"\u4eba"!==e.unit&&0===a||t.push(l.a.createElement("option",{key:a,value:a},"".concat(a).concat(e.unit)));var n=e.handleValueChange;return l.a.createElement("div",{className:"form-group ".concat(e.id)},l.a.createElement("label",{htmlFor:e.id},e.label),l.a.createElement("select",{onChange:n},t));default:console.log("error")}},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){a.props.isGuestValid()?a.props.history.push(a.props.linkTo):alert("\u5927\u4eba\u52a0\u5c0f\u5b69\u4eba\u6578\u8d85\u904e\u623f\u9593\u4eba\u6578\u9650\u5236\uff0c\u6216\u672a\u9078\u64c7\u4eba\u6578\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u4eba\u6578\u3002")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.room,a=e.buttonName;return l.a.createElement("section",{className:"top-bar"},l.a.createElement("span",{className:"hot-tag"},"hot"),l.a.createElement("h2",null,"\u623f\u578b\u540d\u7a31\uff1a",t.name),l.a.createElement("button",{onClick:this.handleSubmit},a))}}]),t}(l.a.Component),S=Object(h.e)(y),j=(a(127),a(88)),D=a.n(j),V=a(89),R=a.n(V),A=a(21),w=a.n(A),P=(a(189),a(190),w()()),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={hoverValue:[]},a.onHoverChange=function(e){a.setState({hoverValue:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showValue,a=l.a.createElement(D.a,{hoverValue:this.state.hoverValue,onHoverChange:this.onHoverChange,type:this.props.type,defaultValue:P,format:"YYYY-MM-DD",onChange:e.onChange,disabledDate:e.disabledDate});return l.a.createElement(R.a,{open:this.props.open,onOpenChange:this.props.onOpenChange,calendar:a,value:e.value},function(){return l.a.createElement("input",{placeholder:"\u8acb\u9078\u64c7\u65e5\u671f",style:{height:40,paddingLeft:8},readOnly:!0,value:t?t.format("YYYY\u5e74MM\u6708DD\u65e5"):""})})}}]),t}(l.a.Component),F=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){return e.props.getSubTotal()},500)}},{key:"render",value:function(){var e=this.props,t=e.startValue,a=e.endValue,n=e.startOpen,r=e.endOpen,o=e.onStartOpenChange,c=e.onEndOpenChange,s=e.onStartChange,m=e.onEndChange,i=e.disabledStartDate;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group checking"},l.a.createElement("label",null,"\u5165\u4f4f\u65e5\u671f"),l.a.createElement(q,{onOpenChange:o,type:"start",showValue:t,open:n,value:[t,a],onChange:s})),l.a.createElement("div",{className:"form-group checkout"},l.a.createElement("label",null,"\u9000\u623f\u65e5\u671f"),l.a.createElement(q,{onOpenChange:c,open:r,type:"end",showValue:a,disabledDate:i,value:[t,a],onChange:m})))}}]),t}(l.a.Component),G="https://challenge.thef2e.com/api/thef2e2019/stage6",I=864e5,x={"Wi-Fi":"Wi-Fi",Breakfast:"\u65e9\u9910","Mini-Bar":"\u8ff7\u4f60\u5427\u6aaf","Room-Service":"\u5ba2\u623f\u670d\u52d9",Television:"\u96fb\u8996","Air-Conditioner":"\u7a7a\u8abf",Refrigerator:"\u51b0\u7bb1",Sofa:"\u6c99\u767c","Great-View":"\u826f\u597d\u8996\u91ce","Smoke-Free":"\u7981\u6b62\u5438\u83f8","Child-Friendly":"\u9069\u5408\u5152\u7ae5","Pet-Friendly":"\u53ef\u5e36\u5bf5\u7269"},H={Single:"\u55ae\u4eba\u5e8a","Small Double":"\u5c0f\u578b\u96d9\u4eba\u5e8a",Double:"\u96d9\u4eba\u5e8a",Queen:"\u8c6a\u83ef\u96d9\u4eba\u5e8a"},T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getAmenities=function(e){if(e){for(var t=[],a=0,n=Object.entries(e.amenities);a<n.length;a++){var r=n[a],o=Object(k.a)(r,2),c=o[0],s=o[1];t.push(l.a.createElement("li",{key:c},x[c],"\uff1a",s?"\u6709":"\u7121"))}return t}},a.getRoomInfo=function(e){if(e){var t=e.descriptionShort.Bed[0];return l.a.createElement("ul",null,l.a.createElement("li",null,"\u5e8a\u578b\uff1a",H[t]),l.a.createElement("li",null,"\u623f\u5ba2\u4eba\u6578\u9650\u5236\uff1a",e.descriptionShort.GuestMin,"~",e.descriptionShort.GuestMax," \u4eba"),l.a.createElement("li",null,"\u885b\u6d74\u6578\u91cf\uff1a",e.descriptionShort["Private-Bath"]," \u9593"),l.a.createElement("li",null,"\u623f\u9593\u5927\u5c0f\uff1a",e.descriptionShort.Footage," \u5e73\u65b9\u516c\u5c3a"),l.a.createElement("li",null,"\u5047\u65e5(\u4e94~\u65e5)\u50f9\u683c\uff1a",e.holidayPrice),l.a.createElement("li",null,"\u5e73\u65e5(\u4e00~\u56db)\u50f9\u683c\uff1a",e.normalDayPrice))}},a.getCheckInAndOut=function(e){if(e){var t=e.checkInAndOut,a=t.checkInEarly,n=t.checkInLate,r=t.checkOut,o=(+n.slice(0,2)-+a.slice(0,2))/24*100,c=+a.slice(0,2)/24*100,s=+r.slice(0,2)/24*100,m=document.documentElement;return m.style.setProperty("--checkInW",o+"%"),m.style.setProperty("--checkOutW",s+"%"),m.style.setProperty("--checkInPos",c+"%"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("span",null,"Check In \u6642\u9593"),l.a.createElement("div",{className:"check-bar"},l.a.createElement("div",{className:"inner-wrapper checkIn-wrapper"},l.a.createElement("span",{className:"start"},a),l.a.createElement("span",{className:"end"},n)))),l.a.createElement("div",null,l.a.createElement("span",null,"Check Out \u6642\u9593"),l.a.createElement("div",{className:"check-bar"},l.a.createElement("div",{className:"inner-wrapper checkOut-wrapper"},l.a.createElement("span",{className:"end"},r)))))}},a.state={room:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getSelectedRoom(this.props.routeProps.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.selectedRoom,a=e.bookedRoom,n=e.guest,r=e.startValue,o=e.endValue,c=e.startOpen,s=e.endOpen,m=e.onStartOpenChange,i=e.onEndOpenChange,u=e.onStartChange,p=e.onEndChange,d=e.disabledStartDate,h=e.subtotal,E=e.handleValueChange,g=e.isGuestValid,f="";return t.imageUrl&&(f=t.imageUrl.map(function(e,t){return l.a.createElement("img",{key:t,src:e,alt:"room-".concat(t)})})),l.a.createElement("main",{className:"room-page"},l.a.createElement(S,{room:t,buttonName:"\u9810\u8a02",linkTo:"/booking/".concat(this.props.routeProps.match.params.id),isGuestValid:g}),l.a.createElement("section",{className:"photos-panel"},f),l.a.createElement("section",{className:"booking-bar"},l.a.createElement(F,{startValue:r,endValue:o,startOpen:c,endOpen:s,onStartOpenChange:m,onEndOpenChange:i,onStartChange:u,onEndChange:p,disabledStartDate:d,getSubTotal:this.props.getSubTotal}),l.a.createElement(C,{type:"select",id:"roomAmount",label:"\u5ba2\u623f",unit:"\u9593",handleValueChange:E("room"),value:a}),l.a.createElement(C,{type:"select",id:"adultAmount",label:"\u6210\u4eba",unit:"\u4eba",handleValueChange:E("adult"),value:n.adult}),l.a.createElement(C,{type:"select",id:"childAmount",label:"\u5c0f\u5b69",unit:"\u4eba",handleValueChange:E("child"),value:n.child})),l.a.createElement("section",{className:"main-info"},l.a.createElement("ul",{className:"amenities"},this.getAmenities(t)),l.a.createElement("div",{className:"subtotal"},"\u7e3d\u50f9\uff1aNT ",h),l.a.createElement("p",{className:"description"},t.description),l.a.createElement("aside",{className:"room-info"},this.getRoomInfo(t)),l.a.createElement("div",{className:"check-time"},this.getCheckInAndOut(t))))}}]),t}(l.a.Component),B=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedRoom,a=e.startValue,n=e.endValue,r=e.startOpen,o=e.endOpen,s=e.onStartOpenChange,m=e.onEndOpenChange,i=e.onStartChange,u=e.onEndChange,p=e.disabledStartDate,d=e.subtotal,h=e.guest;return t.imageUrl?l.a.createElement("main",{className:"booking-page"},l.a.createElement("h2",{className:"title"},"\u8a02\u55ae\u5167\u5bb9"),l.a.createElement("section",{className:"booking-banner"},l.a.createElement("img",{src:t.imageUrl[0],alt:"room",className:"banner-img"}),l.a.createElement(S,{room:t,buttonName:"\u53d6\u6d88",linkTo:"/"}),l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"\u7e3d\u50f9 NT ",d),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-calendar-alt"}),"\u5165\u4f4f\u65e5\u671f\uff1a",a?a.format("YYYY\u5e74MM\u6708DD\u65e5"):""," ~ ",n?n.format("YYYY\u5e74MM\u6708DD\u65e5"):""),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-user"}),"\u5165\u4f4f\u4eba\u6578\uff1a\u5927\u4eba ",h.adult," \u4eba\uff0c\u5c0f\u5b69 ",h.child," \u4eba"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-utensils"}),"\u4e0d\u542b\u65e9\u9910")),l.a.createElement("p",null,t.description))),l.a.createElement("section",{className:"notice"},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-star"}),"\u78ba\u4fdd\u9810\u8a02\u8cc7\u683c\u7121\u9700\u4efb\u4f55\u8cbb\u7528\u3002\u60a8\u5c07\u65bc\u5165\u4f4f\u671f\u9593\u4ed8\u6b3e\u3002")),l.a.createElement("form",null,l.a.createElement("span",{className:"tag"},"\u8a02\u623f\u8cc7\u6599"),l.a.createElement(F,{startValue:a,endValue:n,startOpen:r,endOpen:o,onStartOpenChange:s,onEndOpenChange:m,onStartChange:i,onEndChange:u,disabledStartDate:p,getSubTotal:this.props.getSubTotal}),l.a.createElement("p",{className:"des"},"\u6b61\u8fce\u60a8\u7684\u849e\u81e8\uff0c\u8aa0\u646f\u70ba\u60a8\u670d\u52d92\u665a\u3002"),l.a.createElement(C,{type:"text",id:"last-name",label:"\u59d3\u6c0f(\u82f1\u6587)",placeholder:"\u4f8b\uff1aWeng"}),l.a.createElement(C,{type:"text",id:"first-name",label:"\u59d3\u540d(\u82f1\u6587)",placeholder:"\u4f8b\uff1aYuri-Han"}),l.a.createElement(C,{type:"select",id:"title",label:"\u7a31\u8b02"}),l.a.createElement(C,{type:"phone",id:"phone",label:"\u806f\u7d61\u96fb\u8a71",placeholder:"\u4f8b\uff1a0932-123-123"}),l.a.createElement(C,{type:"email",id:"email",label:"\u96fb\u5b50\u4fe1\u7bb1",placeholder:"\u5c0f\u5fc3\u4e0d\u8981\u6253\u932f\u4e86\uff0c\u8a02\u623f\u78ba\u8a8d\u51fd\u6703\u5bc4\u5230\u96fb\u5b50\u4fe1\u7bb1\u5594"}),l.a.createElement("div",{className:"extra"},l.a.createElement("h4",null,"\u984d\u5916\u52a0\u50f9\u670d\u52d9"),l.a.createElement(C,{type:"checkbox",id:"brackfast",label:"\u65e9\u9910 $ 320 / 1\u4eba"}),l.a.createElement(C,{type:"checkbox",id:"rent-vent",label:"\u79df\u8eca\u65c5\u904a $ 2,500 / 1\u65e5"})),l.a.createElement(c.b,{to:"/orderComplete"},l.a.createElement("button",null,"\u78ba\u8a8d\u8a02\u623f")))):null}}]),t}(l.a.Component),X=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={room:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(G,"/room/").concat("3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu")).then(function(t){e.setState({room:t.data.room[0]})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.room;return e?l.a.createElement("main",{className:"complete-page"},l.a.createElement("section",null,l.a.createElement("div",{className:"col"},l.a.createElement("img",{src:e.imageUrl[0],alt:"room",className:"room"}),l.a.createElement("h4",null,e.name),l.a.createElement("p",null,"\u5165\u4f4f\u65e5\u671f\uff1a2019\u5e742\u670812\u65e5~2019\u5e742\u670814\u65e5"),l.a.createElement("p",null,"\u5165\u4f4f\u4eba\u6578\uff1a1\u4eba"),l.a.createElement("h3",null,"\u7e3d\u50f9 $ 3200")),l.a.createElement("span",{className:"tag"},"\u5b8c\u6210\u8a02\u55ae"),l.a.createElement("div",{className:"col"},l.a.createElement("h3",null,"\u89aa\u611b\u7684Weng\u5973\u58eb\uff1a"),l.a.createElement("h2",null,"\u8a02\u55ae\u7de8\u865f\uff1a1920181017"),l.a.createElement("p",{className:"des"},"\u60a8\u5df2\u6210\u529f\u9810\u7d04\u4e86",e.name,"\u6b64\u623f\u578b\uff0c\u671f\u5f85\u60a8\u7576\u5929\u7684\u849e\u81e8\u3002\u8a02\u623f\u78ba\u8a8d\u51fd\u5df2\u5bc4\u81f3sry55423@gmail.com\uff0c\u8acb\u7acb\u5373\u524d\u5f80\u67e5\u8a62\u8a02\u55ae\u3002"),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"\u8fd4\u56de\u9996\u9801")),l.a.createElement("p",{className:"mark"},"\u5982\u6709\u4efb\u4f55\u8b8a\u66f4\u6216\u53d6\u6d88\u9700\u6c42\uff0c\u8acb\u64a5\u6253\u5ba2\u670d\u5c08\u7dda0800-520-141")))):null}}]),t}(l.a.Component),Y=function(e){var t=e.routeProps.match.isExact,a=t?"home":"inner";return l.a.createElement("nav",{className:"nav-".concat(a)},t||l.a.createElement(c.b,{to:"/"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:v.a,alt:"logo"}),l.a.createElement("h1",null,"\u7da0\u67f3\u5bbf\u65c5"))),l.a.createElement("ul",{className:"menu menu-".concat(a)},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fas fa-user-tie"}),"\u95dc\u65bc\u6211\u5011")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fas fa-bed"}),"\u5ba2\u623f\u4ecb\u7d39")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fas fa-wine-glass"}),"\u4f4f\u5bbf\u670d\u52d9")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fas fa-map-marked-alt"}),"\u4ea4\u901a\u6307\u5f15")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"far fa-newspaper"}),"\u6700\u65b0\u6d88\u606f"))))},M=a(94),U=a.n(M),L=function(e){return l.a.createElement("footer",null,l.a.createElement("img",{className:"qr-code",src:U.a,alt:"qr-code"}),l.a.createElement("p",{className:"tel"},"Tel\uff1a 02-24884712"),l.a.createElement("p",{className:"fax"},"Fax\uff1a 02-84884712"),l.a.createElement("p",{className:"email"},"Email\uff1a reloading.hotel@gmail.com"),l.a.createElement("p",{className:"add"},"Add\uff1a \u65b0\u5317\u5e02\u5c0f\u5c71\u5340\u4e94\u6708\u9109\u4e09\u96f2\u88e15\u865f\u4e4b1"),l.a.createElement("ul",{className:"languages"},l.a.createElement("li",null,"\u7e41\u9ad4\u4e2d\u6587"),l.a.createElement("li",null,"\u7b80\u4f53\u4e2d\u6587"),l.a.createElement("li",null,"English"),l.a.createElement("li",null,"\ud55c\uad6d\uc5b4")))},K=a(95),W=a.n(K);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}g.a.defaults.headers.common.Authorization="Bearer qEyzXLEKxPOg751ZX4Klr7ahFxj4ggcnNjtLcT2142MCh7sAb3mshqLuiALu";var Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setBG=function(){"/"===a.props.location.pathname?document.querySelector("#root").classList.add("has-bg"):document.querySelector("#root").classList.remove("has-bg")},a.getSelectedRoom=function(e){g.a.get("".concat(G,"/room/").concat(e)).then(function(e){a.setState({selectedRoom:e.data.room[0]})}).catch(function(e){return console.log(e)})},a.onStartOpenChange=function(e){a.setState({startOpen:e})},a.onEndOpenChange=function(e){a.setState({endOpen:e})},a.onStartChange=function(e){a.setState({startValue:e[0],startOpen:!1,endOpen:!0})},a.onEndChange=function(e){a.setState({endValue:e[1]})},a.disabledStartDate=function(e){if(!e)return!1;var t=a.state.startValue;return!!t&&e.diff(t,"days")<0},a.getDiffStartEndDate=function(e,t){if(e&&t)return(Date.parse(t)-Date.parse(e))/I},a.getSubTotal=function(){for(var e=a.state,t=e.startValue,n=e.endValue,l=e.bookedRoom,r=e.selectedRoom,o=r.holidayPrice,c=r.normalDayPrice,s=a.getDiffStartEndDate(t,n),m=0,i=Date.parse(t),u=0;u<s;u++)5===new Date(i).getDay()||6===new Date(i).getDay()?m+=o:m+=c,i+=I;m*=l,a.setState({subtotal:a.convertToThousandth(m)})},a.convertToThousandth=function(e){return e.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g,"$1,")},a.handleValueChange=function(e){return function(t){var n=a.state.guest;switch(e){case"room":a.setState({bookedRoom:t.target.value});break;default:a.setState({guest:J({},n,Object(s.a)({},e,t.target.value))})}}},a.isGuestValid=function(){if(!a.state.selectedRoom)return null;var e=a.state,t=e.guest,n=t.adult,l=t.child,r=e.bookedRoom,o=a.state.selectedRoom.descriptionShort.GuestMax,c=a.state.selectedRoom.descriptionShort.GuestMin;return(0!==+n||0!==+l)&&(!(+n+ +l>o*r)&&!(+n+ +l<c*r))},a.state={allRooms:"",selectedRoom:"",guest:{adult:0,child:0},bookedRoom:1,subtotal:0,startValue:null,endValue:null,startOpen:!1,endOpen:!1,form:{lastName:{value:"",valid:!1,error:""},firstName:{value:"",valid:!1,error:""},title:{value:"",valid:!1,error:""},phone:{value:"",valid:!1,error:""},email:{value:"",valid:!1,error:""},bookBreakfast:!1,bookRentalCar:!1}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.a.get("".concat(G,"/rooms")).then(function(t){e.setState({allRooms:t.data.items})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.allRooms,n=t.selectedRoom,r=t.bookedRoom,o=t.guest,c=t.startValue,s=t.endValue,m=t.startOpen,i=t.endOpen,u=t.subtotal;return this.setBG(),l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"bg2",src:W.a,alt:""}),l.a.createElement(h.a,{path:"/",render:function(e){return l.a.createElement(Y,{routeProps:e})}}),l.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(N,{allRooms:a})}}),l.a.createElement(h.a,{path:"/room/:id",render:function(t){return l.a.createElement(T,{routeProps:t,getSelectedRoom:e.getSelectedRoom,selectedRoom:n,startValue:c,endValue:s,startOpen:m,endOpen:i,onStartOpenChange:e.onStartOpenChange,onEndOpenChange:e.onEndOpenChange,onStartChange:e.onStartChange,onEndChange:e.onEndChange,disabledStartDate:e.disabledStartDate,getSubTotal:e.getSubTotal,subtotal:u,handleValueChange:e.handleValueChange,bookedRoom:r,guest:o,isGuestValid:e.isGuestValid})}}),l.a.createElement(h.a,{path:"/booking/:id",render:function(t){return l.a.createElement(B,{routeProps:t,selectedRoom:n,startValue:c,endValue:s,startOpen:m,endOpen:i,onStartOpenChange:e.onStartOpenChange,onEndOpenChange:e.onEndOpenChange,onStartChange:e.onStartChange,onEndChange:e.onEndChange,disabledStartDate:e.disabledStartDate,getSubTotal:e.getSubTotal,subtotal:u,guest:o})}}),l.a.createElement(h.a,{path:"/orderComplete",render:function(e){return l.a.createElement(X,{routeProps:e})}}),l.a.createElement(L,null))}}]),t}(l.a.Component),z=Object(h.e)(Q);o.a.render(l.a.createElement(c.a,null,l.a.createElement(z,null)),document.getElementById("root"))},44:function(e,t,a){e.exports=a.p+"static/media/logo.8da27ff6.svg"},94:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAABHNCSVQICAgIfAhkiAAADVJJREFUeJztnW2MXkUVx3/PvpUutBToNlgoAlogEKUGaUDAygckiBgSKYQQhWhI1MawwbeEmFgIiSElUo3gFxOrGAzwoSYGBDUib5osppYXCa8Ktmm3pe22lG67ffbFD/e5zn/O3rl7n/vsUifMP9lk7nNmzpx7z95zZ86cOdMYHBycIiFadB1pARI6Q09eWL9+feNICpLQHnLLmd7AyJEUGDmSAiNHUmDkSAqMHEmBkSMpMHIkBUaOpMDIkRQYOXpmrlKIk4EL5XoKKHLFNYFeuR4P9DmJ/8/0NDAs16sDfR0G+oT2cKnUxfxeAV6s0GYJsEquJ4Dugnr2Hu0zyGGf2RDwdgU5PNRV4IXAQ3I9BswrqPcm8BG53kqmfIt3gYVyfSXwqFyH+noZOFtoVf25ym8d8N0Kbc417fYAxxfU2w58SK5fBc4sqGef2U3ALyvI4SGZ0MiRFBg56prQKTITkONkYLQDORYDrxn+iqNL5FCz+Z6UvwRsDLRTfs0qAjL9nleSmcu66Cf7pCj/tlFXgQ18+z1KZwo8aPjZb1lV3qqYsnurI6u954M1+SjK7rkSkgmNHHXfwDLcA6xolbcBS4X2DjDQKj8G3FWR5xNS1mH5BvyR22ekvBr4Rqu8GzhBaJdK+Trga63yIeCKijIp1gDXBPraAixrld8Abq7BP4i5UOAK3IMsm0a81QZPVYwOv/9i6j0p5TXSzg7tFcuk3oE2ZFJ8tKQvnUYsqsk/iGRCI0fdN7BJ9nYVYZvQdhraCG4kp7Qpw2/ctHtOysfgvC99wPmBem/ItR1kaZtJqXeIMMaNjDpq3CW0faavXbjnvMXwVH6HS/oOoq4Ce/FNo2KpoYVM6BL5vWHqWblWSnmHtL0auM3wyXGb0D4HPCK0ISmvM/xD6DEyal+LhWZN6LjQ9hueyq+PGkgmNHIkBUaOuiZ0HN+LoHhHaCOm3m4p75HylKk3UdL3JTi5b8B3gofQJCxv1cn4BGHPyV78e54I0HYYnsqvqkfIQ10F9lC8qgDZPC+njRXUy6/Vk98w9YqWaXKoy61ZIoeit6Ref4X2uUzKQ7+Bi4TWjf8NPCC0XYan8itacpoRyYRGjrmYyD+Gm6TvxB9t6hraM23wvFHKD1I+3M+xCji1VT6BzGtThL9LuYfMLOd4gGqmbUj47wOOFdowcGKr/J8KvNrCXCiwqnusHejDf5RqClyDW3l/BPh8hTZ9pq/fkilkJvym9fe+I5nQyFH3DZwkC4PIsZhsecXCrteFYmeON/wmDV1pOvprGprikNCsbANSHsX3gYb42Xs+jmLzWvWe51N+z5VQV4Fd+MP315jdmBhrGZSmD6OX8DTiKKHNNzR149mYmBA/e89PMbsxMbWsYTKhkSMpMHLUNaFPk4X+5QjZeRsjGYqltHGhzxm69qWjwhHgHwEZtwrNDt+1jfUIKU09KpuMHFZmbaP3GIqFtc/s+YI6M6KuAofx4zbnGqG+jgM+EaCdLLRthqZt/iTlhqGpInaXyHHEkExo5EgKjBx1FbiazIbnf+oQfkJ+H5retBADht8mc63YIb+vNjRtcyHVcLm0qeJ1ybFV2t1SUu9Zqaff134j743Tm86M9AZGjqTAyDFbofWKptCOwV/EvAS3nncd8JNWeQ/+qkVougFZ8E/OfyN+yKHiPuCqVvlsI4f2dTPOUzJOeDF5Ff7upEvJFq/BD+k/HfibXN+AmyKcJXLoc4IjHFqv6BVaH/7D0v6OEloD9zBmQp/wb5a0m5J62hemzWGp1034mdh72Rvou9vUG5V6S4VmXWkptP6DiLpv4GGyzZU59PV/S2i78c2EmqfNwNpWeVLKAL8mi+sswuu40AS7cqA8NgP/bJUPkb2FRXhP5LXeFV0heNPw/yrFZr4H/9lcBXy2QMYG/ig69EkqRV0F9hHeGXuq0OxqhN7w87hvwwD+CsEQYQUux5khu3LwAylfS7Ut18eIvNbtpcr8F3C7XG8FTirgZ1cjunHf2M04T0+/kTf0SSpFMqGRIykwctRV4MNkZjP/24nzKKyV36837R6Xer+Q398x/NYQ9sQorq1Yrwx3S7+9Rg71zFxm+lop9daX8P+K1FNH+ajpq+0EB5DewOiRFBg56o5CLwBuleth3CjKThs0fPxO3AKqbvBcCPxcrn+HH96nHpBbcVuxVhGOYam6XesqsoQIkE03vhyoZ+/lbtzz20xmzvN+dafRqwF+84D75fpe/A2qlVBXgcuYPofJFajDYRuO/jT+HCnHPMNvA+FEP2twno1zCIfMV92udab0fYCwAu29XI4LanqW6lmilJ/e8yPUUGAyoZGj7hu4HX/DpE6ANcZkEj+XSij28bDhZ3f2Ko9Lcc7jpmkXajOAvytX3+4xqTtGthm0CKcbnvtxn4uqe+sXAhe3yn2Gn92VXAl1FfgM1ULVu/C9EqE3ft8M/JTHr3Bmem1FOc7HV7R6juYJ/3HC/xAvGDnm4UxoKBGRxWnC3zqza+kimdDIkRQYOd5vBaonRv/2mWsbE6Mei6OkfLvP3mujI7xHDY8Qxkw9/ft2xXtcbuR4RcobhF9RWH7bSG9g5EgKjBx1R6FnAF+Qa10IfRCX0GacbPSWYz9umrENl+rYpiXegx8xreZL+3qPbD0vxzophzwgll+XtLPbxb6JGykuwL+XP+KmRccKzykjh+680gjxpqn3Uom8QdRV4Lmmcx0SP4dTYA/wcamn28s2US3VMfgrDbORcnmdKYfkuAOX3+wF/Hu5AqeQe3Df49fJ/sFnQrOk38pIJjRydJInRr0PYzhPgnpbJkw93Q07QTjFxxh+/My4KeehGU3DX/np7p8JfCe7trFmU3lM4N+XyjFf6nYLrSzHTRd+bE6nCWNrK3Aj/rcnhE0l9W7EPciZstbbLWr59Ub8qYSaWjXXNslBSKZ+wm6xLiPHEMVTgbIcNx8jW7mg1U+VZ1iKZEIjR1Jg5DiSCnyAbIS3CDhFyouAP5S0O0fqNch26eZ/yqNsZ5S2uaOk3oeF38WG/2lS/lkJj8ekr/ukzXIjh40fqoS5SPRTFU3a286V413TTtMY6+9lgwltEwr4zflVkbEsKHeB9Ncv/JpGjpQv9IOIum/gErLJfI7ZTnKwCT81pXpA9M16k8wjUoRt0s6mmlR+I1KeMjSdEh0PnCfXT+HePO1rJ1kIYo4XcSNbm7JZ+6qSPmwa6irQbrWa68Ov1AOi/wD34wcGKZZKO5urWvk9LuWGoek/1Xn43+aTcJ4Y7Wu7qXcR8NcC+WxfZaY8iGRCI0dSYOSoa0In8IOXVtJZsrvjyL4pOWzwk+4C+nOrPsCPWn859Fs3IjJa74ryu17aTTI98U+Op0w7PaByVNoNA58Ums3Sm+Og4TcSqFeKugrsxncjbaczv17T8LOWQZdhluC2ly0w9fSBTBEOOlJ+DWlnB136zzbG9IRBOfqlr90l9RRTFeuVIpnQyDEXE/k1ZGcJQWY+FgttL27yOkTnWW5XkK3F5RiU8heplhC9DD/EnyroQV6juNUIPVt3npHpx7htBEuB77TKh4HvdSjfnCjwGqodfrWBzhV4BtnpLTnU5F3UIW+Ar0vZLuiGztDtxf9HehinwAGhHWAWFJhMaOToZEE3dPzobqHtM/VGcBNx9TFOmXplfsx/S9tdJXJsJwtvgPLBgobWl+Wn2Sf8IBuxFvlA95jrATLHNWQmNO+raNTeNjo5+CN0Ht8JQhs19SbkWlPzN5ieGCCEC6S8Fvh0oN4tlOcwy2FD60PP5CX8WJethJ+B/n4XxSmX655V6CGZ0MiRFBg5OjkAMhR3uUVou/ADgfbiTId6MqYMP7vV6lkpX9niA5kT/NVAve/jn70bwgHhMYY/8vwpbqpg02pdjVvDux63AjGMO08X/O/qKbhEP00j753A7yvI66GTAyCL7Dpku3dzmj00UacRJ8rvDcPPyvUp03eOhSVyLA78bnG08DiAv3KQr7rD9LzbemTPauHRRfHqQ84/r2dXcJZMrz4zkgmNHHMxkX8D91+7Bf/Y0R045247B0FtlvJZ+B4Rpa2Q8km4Red3yaYfOXQxuld4jBnayzgTutPQ1DTqSTBlOCh92WQIdvpRCXOhwFk9J70FTZCjZ+iuNTRdPfgWzqVl40JV6evw85fp8H4Rbs55mWkX8sSU4TXCWfZrIZnQyDFbGXurnoIZwnzKs9cq/4O4t8QmXLfh/jlPO6rVvuzaYyjCzN6zyqE4ZGQ6VNBHDq1ntxNUwmxl7N1K5zExZdlr9UEtwQ3p1xqatntI+rb3WXboVCjto73nlRS76JYbmUIxMdZc30SNfGnJhEaOpMDIUdeEDpG98jlCsS52qGx34uawcaH2ICjtS9Msb8SfHijuxeVksXGhyk93xo4Z2qipp7RQDMuwqfd6oJ7tq50zhf+Hugp8m5r5LWsi1JembbZ4knDusRC/iRLa9hKaYn/FemV9VUYyoZEjKTByJAVGjqTAyJEUGDmSAiNHUmDkSAqMHEmBkSMpMHI0BgcH6x5Zk/B/gPQGRo7/Alm+YIq3HQNVAAAAAElFTkSuQmCC"},95:function(e,t,a){e.exports=a.p+"static/media/bg2.fa46d778.png"},97:function(e,t,a){e.exports=a(191)}},[[97,1,2]]]);
//# sourceMappingURL=main.96d139d3.chunk.js.map