(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(23),c=a.n(r),s=a(7),i=a(41),o=a(68),l=a(69),d=a(15),j="PRODUCT_LIST_REQUEST",u="PRODUCT_LIST_SUCCESS",b="PRODUCT_LIST_FAIL",h="PRODUCT_DETAILS_REQUEST",p="PRODUCT_DETAILS_SUCCESS",O="PRODUCT_DETAILS_FAIL",x=a(35),m="CART_ADD_ITEM",f="CART_REMOVE_ITEM",g="CART_SAVE_SHIPPING_ADDRESS",v="CART_SAVE_PAYMENT_METHOD",y="USER_LOGIN_REQUEST",I="USER_LOGIN_SUCCESS",S="USER_LOGIN_FAIL",C="USER_LOGOUT",E="USER_REGISTER_REQUEST",k="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",w="USER_DETAILS_REQUEST",N="USER_DETAILS_SUCCESS",P="USER_DETAILS_FAIL",_="USER_UPDATE_PROFILE_REQUEST",T="USER_UPDATE_PROFILE_SUCCESS",A="USER_UPDATE_PROFILE_FAIL",R=Object(i.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0,products:[]};case u:return{loading:!1,products:t.payload};case b:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case p:return{loading:!1,product:t.payload};case O:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}):Object(d.a)(Object(d.a)({},e),{},{cartItems:[].concat(Object(x.a)(e.cartItems),[a])});case f:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case g:return Object(d.a)(Object(d.a)({},e),{},{shippingAdress:t.payload});case v:return Object(d.a)(Object(d.a)({},e),{},{paymentMethod:t.payload});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case I:return{loading:!1,userInfo:t.payload};case S:return{loading:!1,error:t.payload};case C:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case k:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case N:return{loading:!1,user:t.payload};case P:return{loading:!1,error:t.payload};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case T:return{loading:!1,success:!0,userInfo:t.payload};case A:return{loading:!1,error:t.payload};default:return e}}}),U=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],D=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,G={cart:{cartItems:U,shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{},paymentMethod:localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem("paymentMethod")):{}},userLogin:{userInfo:D}},F=[o.a],M=Object(i.createStore)(R,G,Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,F))),q=(a(81),a(82),a(10)),J=a(9),B=a(20),W=a(120),Q=a(113),$=a(122),z=a(118),H=a(14),V=a.n(H),Y=a(25),K=a(26),X=a.n(K),Z=function(){return function(e){localStorage.removeItem("userInfo"),e({type:C}),document.location.href="/login"}},ee=a(1),te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.userLogin})).userInfo;return Object(ee.jsx)("header",{children:Object(ee.jsx)(W.a,{bg:"primary",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(ee.jsxs)(Q.a,{children:[Object(ee.jsx)(B.LinkContainer,{to:"/",children:Object(ee.jsx)(W.a.Brand,{children:"HeadShots"})}),Object(ee.jsx)(W.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(ee.jsx)(W.a.Collapse,{id:"basic-navbar-nav",children:Object(ee.jsxs)($.a,{children:[Object(ee.jsx)(B.LinkContainer,{to:"/cart",children:Object(ee.jsxs)($.a.Link,{children:[Object(ee.jsx)("i",{className:"fas fa-shopping-cart"})," Cart"]})}),t?Object(ee.jsxs)(z.a,{title:t.name,id:"username",children:[Object(ee.jsx)(B.LinkContainer,{to:"/profile",children:Object(ee.jsx)(z.a.Item,{children:"Profile"})}),Object(ee.jsx)(z.a.Item,{onClick:function(){e(Z())},children:"Logout"})]}):Object(ee.jsx)(B.LinkContainer,{to:"/login",children:Object(ee.jsxs)($.a.Link,{children:[Object(ee.jsx)("i",{className:"fas fa-user"})," Sign In"]})}),t&&t.isAdmin&&Object(ee.jsxs)(z.a,{title:"Admin",id:"adminmenu",children:[Object(ee.jsx)(B.LinkContainer,{to:"/admin/userlist",children:Object(ee.jsx)(z.a.Item,{children:"Users"})}),Object(ee.jsx)(B.LinkContainer,{to:"/admin/productlist",children:Object(ee.jsx)(z.a.Item,{children:"Products"})}),Object(ee.jsx)(B.LinkContainer,{to:"/admin/orderlist",children:Object(ee.jsx)(z.a.Item,{children:"Orders"})})]})]})})]})})})},ae=a(114),ne=a(73),re=function(){return Object(ee.jsx)("footer",{children:Object(ee.jsx)(Q.a,{children:Object(ee.jsx)(ae.a,{children:Object(ee.jsx)(ne.a,{className:"text-center py-3",children:"Copright \xa9 HeadShots"})})})})},ce=a(123),se=function(e){var t=e.value,a=e.text,n=e.color;return Object(ee.jsxs)("div",{className:"rating",children:[Object(ee.jsx)("span",{children:Object(ee.jsx)("i",{style:{color:n},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star",children:" "})}),Object(ee.jsx)("span",{children:Object(ee.jsx)("i",{style:{color:n},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star",children:" "})}),Object(ee.jsx)("span",{children:Object(ee.jsx)("i",{style:{color:n},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star",children:" "})}),Object(ee.jsx)("span",{children:Object(ee.jsx)("i",{style:{color:n},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star",children:" "})}),Object(ee.jsx)("span",{children:Object(ee.jsx)("i",{style:{color:n},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star",children:" "})}),Object(ee.jsx)("span",{children:a&&a})]})},ie=function(e){var t=e.product;return Object(ee.jsxs)(ce.a,{className:"mb-3 p-3 rounded",children:[Object(ee.jsx)(q.Link,{to:"/product/".concat(t._id),children:Object(ee.jsx)(ce.a.Img,{src:t.image,variant:"top"})}),Object(ee.jsxs)(ce.a.Body,{children:[Object(ee.jsx)(q.Link,{to:"/product/".concat(t._id),children:Object(ee.jsx)(ce.a.Title,{as:"div",children:Object(ee.jsx)("strong",{children:t.name})})}),Object(ee.jsx)(ce.a.Text,{as:"div",children:Object(ee.jsx)(se,{value:t.rating,text:"".concat(t.numReviews," reviews"),color:"#FDCC0D"})}),Object(ee.jsxs)(ce.a.Text,{as:"h3",children:["\u20b9",t.price]})]})]})},oe=a(121),le=function(e){var t=e.variant,a=e.children;return Object(ee.jsx)(oe.a,{variant:t,children:a})};le.defaultProps={variant:"info"};var de=le,je=a(115),ue=function(){return Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(je.a,{animation:"grow",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block",marginTop:"30vh"},children:Object(ee.jsx)("span",{className:"sr-only",children:" Loading..."})})})},be=function(e){var t=e.match,a=t.params.keyword,r=t.params.pageNumber||1,c=Object(s.b)(),i=Object(s.c)((function(e){return e.productList})),o=i.loading,l=i.error,d=i.products;return Object(n.useEffect)((function(){c(function(){var e=Object(Y.a)(V.a.mark((function e(t){var a,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:j}),e.next=4,X.a.get("/api/products");case 4:a=e.sent,n=a.data,t({type:u,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:b,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[c,a,r]),Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("h1",{children:"Latest Products"}),o?Object(ee.jsx)(ue,{}):l?Object(ee.jsx)(de,{variant:"danger",children:l}):Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(ae.a,{children:d.map((function(e){return Object(ee.jsx)(ne.a,{sm:6,md:6,lg:4,xl:3,children:Object(ee.jsx)(ie,{product:e})},e._id)}))})})]})},he=a(8),pe=a(116),Oe=a(124),xe=a(119),me=a(72),fe=function(e){var t=e.history,a=e.match,r=Object(n.useState)(1),c=Object(he.a)(r,2),i=c[0],o=c[1],l=Object(s.b)();Object(n.useEffect)((function(){var e;l((e=a.params.id,function(){var t=Object(Y.a)(V.a.mark((function t(a){var n,r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:h}),t.next=4,X.a.get("/api/products/".concat(e));case 4:n=t.sent,r=n.data,a({type:p,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:O,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,a]);var d=Object(s.c)((function(e){return e.userLogin})).userInfo,j=Object(s.c)((function(e){return e.productDetails})),u=j.product,b=j.loading,m=j.error;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)(q.Link,{className:"btn btn-light my-3",to:"/",children:[" ","Go Back"," "]}),b?Object(ee.jsx)(ue,{}):m?Object(ee.jsx)(de,{variant:"danger",children:m}):Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{md:6,children:Object(ee.jsx)(pe.a,{src:u.image,alt:u.name,fluid:!0})}),Object(ee.jsx)(ne.a,{md:3,children:Object(ee.jsxs)(Oe.a,{variant:"flush",children:[Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsx)("h3",{children:u.name})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsx)(se,{value:u.rating,text:"".concat(u.numReviews," reviews"),color:"#FDCC0D"})}),Object(ee.jsxs)(Oe.a.Item,{children:["price : \u20b9",u.price]}),Object(ee.jsxs)(Oe.a.Item,{children:["price : ",u.description]})]})}),Object(ee.jsx)(ne.a,{md:3,children:Object(ee.jsx)(ce.a,{children:Object(ee.jsxs)(Oe.a,{variant:"flush",children:[Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:"Price:"}),Object(ee.jsx)(ne.a,{children:Object(ee.jsxs)("strong",{children:["\u20b9",u.price]})})]})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:"Status"}),Object(ee.jsx)(ne.a,{children:Object(ee.jsx)("strong",{children:u.countInStock>0?"In Stock":"Out Of Stock"})})]})}),u.countInStock>0&&Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:" Qty "}),Object(ee.jsx)(ne.a,{children:Object(ee.jsx)(xe.a.Control,{as:"select",value:i,onChange:function(e){return o(e.target.value)},children:Object(x.a)(Array(u.countInStock).keys()).map((function(e){return Object(ee.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(ee.jsx)(Oe.a.Item,{children:d?Object(ee.jsx)("div",{className:"d-grid gap-1",children:Object(ee.jsx)(me.a,{onClick:function(){t.push("/cart/".concat(a.params.id,"?qty=").concat(i))},variant:"info",size:"lg",disabled:0===u.countInStock,children:"Add To cart"})}):Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(q.Link,{to:"/login",children:Object(ee.jsx)("div",{className:"d-grid",children:Object(ee.jsx)(me.a,{variant:"dark",size:"lg",children:"Add To Cart"})})})})})]})})})]})]})},ge=a(117),ve=function(e,t){return function(){var a=Object(Y.a)(V.a.mark((function a(n,r){var c,s;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,X.a.get("/api/products/".concat(e));case 2:c=a.sent,s=c.data,n({type:m,payload:{product:s._id,name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},ye=function(e){var t=e.step1,a=e.step2,n=e.step3,r=e.step4;return Object(ee.jsxs)($.a,{className:"justify-content-center mb-4",children:[Object(ee.jsx)($.a.Item,{children:t?Object(ee.jsx)(B.LinkContainer,{to:"/login",children:Object(ee.jsx)($.a.Link,{children:"Sign In"})}):Object(ee.jsx)($.a.Link,{disabled:!0,children:"Sign In"})}),Object(ee.jsx)($.a.Item,{children:a?Object(ee.jsx)(B.LinkContainer,{to:"/shipping",children:Object(ee.jsx)($.a.Link,{children:"Shipping"})}):Object(ee.jsx)($.a.Link,{disabled:!0,children:"Shipping"})}),Object(ee.jsx)($.a.Item,{children:n?Object(ee.jsx)(B.LinkContainer,{to:"/payment",children:Object(ee.jsx)($.a.Link,{children:"Payment"})}):Object(ee.jsx)($.a.Link,{disabled:!0,children:"Payment"})}),Object(ee.jsx)($.a.Item,{children:r?Object(ee.jsx)(B.LinkContainer,{to:"/placeorder",children:Object(ee.jsx)($.a.Link,{children:"Place Order"})}):Object(ee.jsx)($.a.Link,{disabled:!0,children:"Place Order"})})]})},Ie=function(e){var t=e.match,a=e.location,r=e.history,c=t.params.id,i=a.search?Number(a.search.split("=")[1]):1,o=Object(s.b)(),l=Object(s.c)((function(e){return e.cart})).cartItems,d=function(e){o(function(e){return function(t,a){t({type:f,payload:e}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems))}}(e))};return Object(n.useEffect)((function(){c&&o(ve(c,i))}),[o,c,i]),Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)("h1",{children:"Shopping Cart"}),Object(ee.jsx)(ye,{step1:!0}),0===l.length?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(de,{variant:"danger",children:Object(ee.jsx)(q.Link,{className:"lead",to:"/",children:"Go back"})}),Object(ee.jsx)(ge.a,{children:Object(ee.jsxs)(Q.a,{className:"text-center",children:[Object(ee.jsx)("i",{className:"fa fa-shopping-cart fa-7x"}),Object(ee.jsx)("h1",{className:"display-3 ",children:"Your cart is empty !"}),Object(ee.jsx)("hr",{className:"my-2"}),Object(ee.jsxs)("p",{className:"lead",children:["Start Adding stuffs to it Explore now. Click ",Object(ee.jsx)(q.Link,{to:"/",children:"go back"})," "]})]})})]}):Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{md:8,children:Object(ee.jsx)(Oe.a,{variant:"flush",children:l.map((function(e){return Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{md:2,children:Object(ee.jsx)(pe.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(ee.jsx)(ne.a,{md:3,children:Object(ee.jsx)(q.Link,{to:"/product/".concat(e.product),children:e.name})}),Object(ee.jsxs)(ne.a,{md:2,children:["\u20b9",e.price]}),Object(ee.jsx)(ne.a,{md:2,children:Object(ee.jsx)(xe.a.Control,{as:"select",value:e.qty,onChange:function(t){return o(ve(e.product,Number(t.target.value)))},children:Object(x.a)(Array(e.countInStock).keys()).map((function(e){return Object(ee.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(ee.jsx)(ne.a,{md:2,children:Object(ee.jsx)(me.a,{type:"button",variant:"light",onClick:function(){return d(e.product)},children:Object(ee.jsx)("i",{className:"fas fa-trash"})})})]})},e.product)}))})}),Object(ee.jsx)(ne.a,{md:4,children:Object(ee.jsx)(ce.a,{children:Object(ee.jsxs)(Oe.a,{variant:"flush",children:[Object(ee.jsxs)(Oe.a.Item,{children:[Object(ee.jsxs)("h2",{children:["Subtotal (",l.reduce((function(e,t){return e+t.qty}),0),") items"]}),"\u20b9",l.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2)]}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsx)("div",{className:"d-grid gap-2",children:Object(ee.jsx)("button",{onClick:function(){r.push("/login?redirect=shipping")},className:"btn btn-primary",type:"button",disabled:0===l.length,children:"Proceed To Checkout"})})})]})})})]})]})},Se=function(e){var t=e.children;return Object(ee.jsx)(Q.a,{children:Object(ee.jsx)(ae.a,{className:"justify-content-md-center",children:Object(ee.jsx)(ne.a,{xs:12,md:6,children:t})})})},Ce=function(e){var t=e.location,a=e.history,r=Object(n.useState)(""),c=Object(he.a)(r,2),i=c[0],o=c[1],l=Object(n.useState)(""),d=Object(he.a)(l,2),j=d[0],u=d[1],b=Object(s.b)(),h=Object(s.c)((function(e){return e.userLogin})),p=h.loading,O=h.error,x=h.userInfo,m=t.search?t.search.split("=")[1]:"/";Object(n.useEffect)((function(){x&&a.push(m)}),[a,x,m]);return Object(ee.jsxs)(Se,{children:[Object(ee.jsx)("h1",{children:"Login In"}),O&&Object(ee.jsx)(de,{variant:"danger",children:O}),p&&Object(ee.jsx)(ue,{}),Object(ee.jsxs)(xe.a,{onSubmit:function(e){e.preventDefault(),b(function(e,t){return function(){var a=Object(Y.a)(V.a.mark((function a(n){var r,c,s;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:y}),r={headers:{"Content-Type":"application/json"}},a.next=5,X.a.post("/api/users/login",{email:e,password:t},r);case 5:c=a.sent,s=c.data,n({type:I,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:S,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(i,j))},children:[Object(ee.jsxs)(xe.a.Group,{controlId:"email",className:"mb-3",children:[Object(ee.jsx)(xe.a.Label,{children:"Email Address"}),Object(ee.jsx)(xe.a.Control,{type:"email",placeholder:"Enter email",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"password",className:"mb-3",children:[Object(ee.jsx)(xe.a.Label,{children:"Password"}),Object(ee.jsx)(xe.a.Control,{type:"password",placeholder:"Enter password",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(ee.jsx)(me.a,{type:"submit",variant:"primary",className:"mb-3",children:"Login In"})]}),Object(ee.jsx)(ae.a,{className:"py-3",children:Object(ee.jsxs)(ne.a,{children:["New Customer?"," "," ",Object(ee.jsx)(q.Link,{to:m?"/register?redirect=".concat(m):"/register",children:"Register"})]})})]})},Ee=function(e){var t=e.location,a=e.history,r=Object(n.useState)(""),c=Object(he.a)(r,2),i=c[0],o=c[1],l=Object(n.useState)(""),d=Object(he.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(""),h=Object(he.a)(b,2),p=h[0],O=h[1],x=Object(n.useState)(""),m=Object(he.a)(x,2),f=m[0],g=m[1],v=Object(n.useState)(null),y=Object(he.a)(v,2),S=y[0],C=y[1],w=Object(s.b)(),N=Object(s.c)((function(e){return e.userRegister})),P=N.loading,_=N.error,T=N.userInfo,A=t.search?t.search.split("=")[1]:"/";Object(n.useEffect)((function(){T&&a.push(A)}),[a,T,A]);return Object(ee.jsxs)(Se,{children:[Object(ee.jsx)("h1",{children:"Sign Up"}),S&&Object(ee.jsx)(de,{variant:"danger",children:S}),_&&Object(ee.jsx)(de,{variant:"danger",children:_}),P&&Object(ee.jsx)(ue,{}),Object(ee.jsxs)(xe.a,{onSubmit:function(e){e.preventDefault(),p!==f?C("Passwords do not match"):w(function(e,t,a){return function(){var n=Object(Y.a)(V.a.mark((function n(r){var c,s,i;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:E}),c={headers:{"Content-Type":"application/json"}},n.next=5,X.a.post("/api/users",{name:e,email:t,password:a},c);case 5:s=n.sent,i=s.data,r({type:k,payload:i}),r({type:I,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:L,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(i,j,p))},children:[Object(ee.jsxs)(xe.a.Group,{controlId:"name",children:[Object(ee.jsx)(xe.a.Label,{children:"Name"}),Object(ee.jsx)(xe.a.Control,{type:"name",placeholder:"Enter name",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"email",children:[Object(ee.jsx)(xe.a.Label,{children:"Email Address"}),Object(ee.jsx)(xe.a.Control,{type:"email",placeholder:"Enter email",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"password",children:[Object(ee.jsx)(xe.a.Label,{children:"Password"}),Object(ee.jsx)(xe.a.Control,{type:"password",placeholder:"Enter password",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"confirmPassword",children:[Object(ee.jsx)(xe.a.Label,{children:"Confirm Password"}),Object(ee.jsx)(xe.a.Control,{type:"password",placeholder:"Confirm password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(ee.jsx)(me.a,{type:"submit",variant:"primary",className:"mt-2",children:"Register"})]}),Object(ee.jsx)(ae.a,{className:"py-2",children:Object(ee.jsxs)(ne.a,{children:["Have an Account?"," ",Object(ee.jsx)(q.Link,{to:A?"/login?redirect=".concat(A):"/login",children:"Login"})]})})]})},ke=function(e){e.location;var t=e.history,a=Object(n.useState)(""),r=Object(he.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),l=Object(he.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(""),b=Object(he.a)(u,2),h=b[0],p=b[1],O=Object(n.useState)(""),x=Object(he.a)(O,2),m=x[0],f=x[1],g=Object(n.useState)(null),v=Object(he.a)(g,2),y=v[0],S=v[1],C=Object(s.b)(),E=Object(s.c)((function(e){return e.userDetails})),k=E.loading,L=E.error,R=E.user,U=Object(s.c)((function(e){return e.userLogin})).userInfo,D=Object(s.c)((function(e){return e.userUpdateProfile})).success;Object(n.useEffect)((function(){var e;U?R.name?(i(R.name),j(R.email)):C((e="profile",function(){var t=Object(Y.a)(V.a.mark((function t(a,n){var r,c,s,i,o,l;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:w}),r=n(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,X.a.get("/api/users/".concat(e),s);case 6:i=t.sent,o=i.data,a({type:N,payload:o}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Z()),a({type:P,payload:l});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}())):t.push("/login")}),[C,t,U,R]);var G=function(e){e.preventDefault(),h!==m?S("Passwords do not match"):C(function(e){return function(){var t=Object(Y.a)(V.a.mark((function t(a,n){var r,c,s,i,o,l;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:_}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,X.a.put("/api/users/profile",e,s);case 6:i=t.sent,o=i.data,a({type:T,payload:o}),a({type:I,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),"Not authorized, token failed"===(l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Z()),a({type:A,payload:l});case 18:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,a){return t.apply(this,arguments)}}()}({id:R._id,name:c,email:d,password:h}))};return Object(ee.jsxs)(ae.a,{children:[Object(ee.jsxs)(ne.a,{md:3,children:[Object(ee.jsx)("h1",{children:"User Profile"}),D&&Object(ee.jsx)(de,{variant:"success",children:"Profile Successfully Updated"}),y&&Object(ee.jsx)(de,{variant:"danger",children:y}),L&&Object(ee.jsx)(de,{variant:"danger",children:L}),k&&Object(ee.jsx)(ue,{}),Object(ee.jsxs)(xe.a,{onSubmit:G,children:[Object(ee.jsxs)(xe.a.Group,{controlId:"email",children:[Object(ee.jsx)(xe.a.Label,{children:"Email"}),Object(ee.jsx)(xe.a.Control,{type:"email",placeholder:U.email,value:d,disabled:!0})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"name",children:[Object(ee.jsx)(xe.a.Label,{children:"Name"}),Object(ee.jsx)(xe.a.Control,{type:"name",placeholder:"Enter name",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"password",children:[Object(ee.jsx)(xe.a.Label,{children:"Password"}),Object(ee.jsx)(xe.a.Control,{type:"password",placeholder:"Enter password",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"confirmPassword",children:[Object(ee.jsx)(xe.a.Label,{children:"Confirm Password"}),Object(ee.jsx)(xe.a.Control,{type:"password",placeholder:"Confirm password",value:m,onChange:function(e){return f(e.target.value)}})]}),Object(ee.jsx)(me.a,{type:"submit",variant:"primary",className:"mt-2",onClick:G,children:"Update"})]})]}),Object(ee.jsx)(ne.a,{md:9,children:"My orders"})]})},Le=function(e){var t=e.history,a=Object(s.c)((function(e){return e.cart})).shippingAddress,r=Object(n.useState)(a.name),c=Object(he.a)(r,2),i=c[0],o=c[1],l=Object(n.useState)(a.address),d=Object(he.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(a.state),h=Object(he.a)(b,2),p=h[0],O=h[1],x=Object(n.useState)(a.postalCode),m=Object(he.a)(x,2),f=m[0],v=m[1],y=Object(n.useState)(a.country),I=Object(he.a)(y,2),S=I[0],C=I[1],E=Object(n.useState)(a.contactNumber),k=Object(he.a)(E,2),L=k[0],w=k[1],N=Object(s.b)();return Object(ee.jsxs)(Se,{children:[Object(ee.jsx)("h1",{children:"Shipping"}),Object(ee.jsx)(ye,{step1:!0,step2:!0}),Object(ee.jsxs)(xe.a,{onSubmit:function(e){var a;e.preventDefault(),N((a={name:i,address:j,state:p,postalCode:f,country:S,contactNumber:L},function(e){e({type:g,payload:a}),localStorage.setItem("shippingAddress",JSON.stringify(a))})),t.push("/payment")},children:[Object(ee.jsxs)(xe.a.Group,{controlId:"name",children:[Object(ee.jsx)(xe.a.Label,{children:"Enter Name"}),Object(ee.jsx)(xe.a.Control,{type:"name",placeholder:"Enter Name",value:i,required:!0,onChange:function(e){return o(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"address",children:[Object(ee.jsx)(xe.a.Label,{children:"Enter Address"}),Object(ee.jsx)(xe.a.Control,{type:"text",placeholder:"Enter Address",value:j,required:!0,onChange:function(e){return u(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"state",children:[Object(ee.jsx)(xe.a.Label,{children:"State"}),Object(ee.jsx)(xe.a.Control,{type:"state",placeholder:"Enter State",value:p,required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"postalCode",children:[Object(ee.jsx)(xe.a.Label,{children:"Enter PIN Code"}),Object(ee.jsx)(xe.a.Control,{type:"text",placeholder:"Enter Postal Code",value:f,required:!0,onChange:function(e){return v(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"country",children:[Object(ee.jsx)(xe.a.Label,{children:"Enter Country"}),Object(ee.jsx)(xe.a.Control,{placeholder:"Enter Country",type:"text",value:S,required:!0,onChange:function(e){return C(e.target.value)}})]}),Object(ee.jsxs)(xe.a.Group,{controlId:"contactNumber",children:[Object(ee.jsx)(xe.a.Label,{children:"Enter Contact No."}),Object(ee.jsx)(xe.a.Control,{type:"text",placeholder:"Enter Contact Number",value:L,required:!0,onChange:function(e){return w(e.target.value)}})]}),Object(ee.jsx)(me.a,{type:"submit",variant:"primary",children:"Continue"})]})]})},we=function(e){var t=e.history,a=Object(s.c)((function(e){return e.cart}));a.shippingAddress.address||t.push("/shipping");var r=Object(n.useState)(a.paymentMethod),c=Object(he.a)(r,2),i=c[0],o=c[1],l=Object(s.b)();return Object(ee.jsxs)(Se,{children:[Object(ee.jsx)(ye,{step1:!0,step2:!0,step3:!0}),Object(ee.jsx)("h1",{children:"Payment Method"}),Object(ee.jsxs)(xe.a,{onSubmit:function(e){e.preventDefault(),l(function(e){return function(t){t({type:v,payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e))}}(i)),t.push("/placeorder")},children:[Object(ee.jsxs)(xe.a.Group,{children:[Object(ee.jsx)(xe.a.Label,{as:"legend",children:"Select Method"}),Object(ee.jsxs)(ne.a,{children:[Object(ee.jsx)(xe.a.Check,{type:"radio",label:"PayPal or Credit Card",id:"PayPal",name:"paymentMethod",value:"PayPal",checked:!0,onChange:function(e){return o(e.target.value)}}),Object(ee.jsx)(xe.a.Check,{type:"radio",label:"Paytm",id:"Paytm",name:"paymentMethod",value:"paytm",onChange:function(e){return o(e.target.value)}}),Object(ee.jsx)(xe.a.Check,{type:"radio",label:"Debit Card",id:"debitCard",name:"debitCard",value:"debitCard",onChange:function(e){return o(e.target.value)}})]})]}),Object(ee.jsx)(me.a,{type:"submit",variant:"primary",children:"Continue"})]})]})},Ne=function(e){var t=e.history,a=Object(s.b)(),r=Object(s.c)((function(e){return e.cart}));r.shippingAddress.address?r.paymentMethod||t.push("/payment"):t.push("/shipping");var c=function(e){return(Math.round(100*e)/100).toFixed(2)};r.itemsPrice=c(r.cartItems.reduce((function(e,t){return e+t.price*t.qty}),0)),r.shippingPrice=c(r.itemsPrice>100?0:100),r.taxPrice=c(Number((.15*r.itemsPrice).toFixed(2))),r.totalPrice=(Number(r.itemsPrice)+Number(r.shippingPrice)+Number(r.taxPrice)).toFixed(2);var i=Object(s.c)((function(e){return e.orderCreate})),o=i.order,l=i.success,d=i.error;Object(n.useEffect)((function(){l&&(t.push("/order/".concat(o._id)),a({type:"USER_DETAILS_RESET"}),a({type:"ORDER_CREATE_RESET"}))}),[t,l]);return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(ye,{step1:!0,step2:!0,step3:!0,step4:!0}),Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{md:8,children:Object(ee.jsxs)(Oe.a,{variant:"flush",children:[Object(ee.jsxs)(Oe.a.Item,{children:[Object(ee.jsx)("h2",{children:"Shipping"}),Object(ee.jsxs)("p",{children:[Object(ee.jsx)("strong",{children:"Address:"}),r.shippingAddress.address,", ",r.shippingAddress.city," ",r.shippingAddress.postalCode,","," ",r.shippingAddress.country]})]}),Object(ee.jsxs)(Oe.a.Item,{children:[Object(ee.jsx)("h2",{children:"Payment Method"}),Object(ee.jsx)("strong",{children:"Method: "}),r.paymentMethod]}),Object(ee.jsxs)(Oe.a.Item,{children:[Object(ee.jsx)("h2",{children:"Order Items"}),0===r.cartItems.length?Object(ee.jsx)(de,{children:"Your cart is empty"}):Object(ee.jsx)(Oe.a,{variant:"flush",children:r.cartItems.map((function(e,t){return Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{md:1,children:Object(ee.jsx)(pe.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(ee.jsx)(ne.a,{children:Object(ee.jsx)(q.Link,{to:"/product/".concat(e.product),children:e.name})}),Object(ee.jsxs)(ne.a,{md:4,children:[e.qty," x $",e.price," = $",e.qty*e.price]})]})},t)}))})]})]})}),Object(ee.jsx)(ne.a,{md:4,children:Object(ee.jsx)(ce.a,{children:Object(ee.jsxs)(Oe.a,{variant:"flush",children:[Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsx)("h2",{children:"Order Summary"})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:"Items"}),Object(ee.jsxs)(ne.a,{children:["$",r.itemsPrice]})]})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:"Shipping"}),Object(ee.jsxs)(ne.a,{children:["$",r.shippingPrice]})]})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:"Tax"}),Object(ee.jsxs)(ne.a,{children:["$",r.taxPrice]})]})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsxs)(ae.a,{children:[Object(ee.jsx)(ne.a,{children:"Total"}),Object(ee.jsxs)(ne.a,{children:["$",r.totalPrice]})]})}),Object(ee.jsx)(Oe.a.Item,{children:d&&Object(ee.jsx)(de,{variant:"danger",children:d})}),Object(ee.jsx)(Oe.a.Item,{children:Object(ee.jsx)(me.a,{type:"button",className:"btn-block",disabled:0===r.cartItems,onClick:function(){},children:"Place Order"})})]})})})]})]})},Pe=function(){return Object(ee.jsxs)(q.BrowserRouter,{children:[Object(ee.jsx)(te,{}),Object(ee.jsxs)("main",{className:"py-3",children:[Object(ee.jsx)(J.d,{exact:!0,path:"placeorder",component:Ne}),Object(ee.jsx)(J.d,{exact:!0,path:"/payment",component:we}),Object(ee.jsx)(J.d,{exact:!0,path:"/shipping",component:Le}),Object(ee.jsx)(J.d,{exact:!0,path:"/profile",component:ke}),Object(ee.jsx)(J.d,{path:"/register",component:Ee}),Object(ee.jsx)(J.d,{exact:!0,path:"/login",component:Ce}),Object(ee.jsx)(J.d,{exact:!0,path:"/",component:be}),Object(ee.jsx)(J.d,{path:"/product/:id",component:fe}),Object(ee.jsx)(J.d,{path:"/cart/:id?",component:Ie})]}),Object(ee.jsx)(re,{})]})},_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(ee.jsx)(s.a,{store:M,children:Object(ee.jsx)(Pe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/headshots",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/headshots","/service-worker.js");console.log(t),Te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ae(t,e)}))}}(),_e()},81:function(e,t,a){},82:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.277c1ebc.chunk.js.map