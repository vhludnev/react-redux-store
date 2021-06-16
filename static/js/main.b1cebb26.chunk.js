(this["webpackJsonpreact-redux-store-app"]=this["webpackJsonpreact-redux-store-app"]||[]).push([[0],{33:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r,o=n(0),c=n.n(o),a=n(16),i=n.n(a),s=n(10),u=n(8),d=n(3),l=(n(33),n(1)),j=Object(u.b)((function(t){var e=t.shoppingCart;return{numItems:e.totalCount,total:e.orderTotal}}))((function(t){var e=t.numItems,n=t.total;return Object(l.jsxs)("header",{className:"shop-header row",children:[Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)("div",{className:"logo text-dark",href:"#",children:"React Redux Store"})}),Object(l.jsx)(s.b,{to:"/cart",children:Object(l.jsxs)("div",{className:"shopping-cart",children:[Object(l.jsx)("i",{className:"cart-icon fa fa-shopping-cart"}),e," items ($",n,")"]})})]})})),b=n(11),h=n(12),O=n(19),p=n(18),m=n(15),f=(n(37),function(t){var e=t.book,n=t.onAddedToCart,r=e.title,o=e.author,c=e.price,a=e.coverImage,i=e.page;return Object(l.jsxs)("div",{className:"book-list-item",children:[Object(l.jsx)("div",{className:"book-cover",children:Object(l.jsx)("img",{src:a,alt:"cover"})}),Object(l.jsxs)("div",{className:"book-details",children:[Object(l.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:"book-title",children:r}),Object(l.jsx)("div",{className:"book-author",children:o}),Object(l.jsxs)("div",{className:"book-price",children:["$",c]}),Object(l.jsx)("button",{onClick:n,className:"btn btn-info add-to-cart",children:"Add to cart"})]})]})}),g=n(24),x=c.a.createContext(),v=x.Provider,_=x.Consumer,C=function(){return function(t){return function(e){return Object(l.jsx)(_,{children:function(n){return Object(l.jsx)(t,Object(g.a)(Object(g.a)({},e),{},{bookstoreService:n}))}})}}},k=function(t){return{type:"BOOK_ADDED_TO_CART",payload:t}},y=function(t){return function(){return function(e){e({type:"FETCH_BOOKS_REQUEST"}),t.getBooks().then((function(t){return e({type:"FETCH_BOOKS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_BOOKS_FAILURE",payload:t})}))}}},S=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}},E=(n(38),function(){return Object(l.jsx)("div",{children:"loading..."})}),R=(n(39),function(){return Object(l.jsx)("div",{children:"Error!"})}),T=(n(40),function(t){var e=t.books,n=t.onAddedToCart;return Object(l.jsx)("ul",{className:"book-list",children:e.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(f,{book:t,onAddedToCart:function(){return n(t.id)}})},t.id)}))})}),w=function(t){Object(O.a)(n,t);var e=Object(p.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var t=this.props,e=t.books,n=t.loading,r=t.error,o=t.onAddedToCart;return n?Object(l.jsx)(E,{}):r?Object(l.jsx)(R,{}):Object(l.jsx)(T,{books:e,onAddedToCart:o})}}]),n}(o.Component),I=S(C(),Object(u.b)((function(t){var e=t.bookList;return{books:e.books,loading:e.loading,error:e.error}}),(function(t,e){var n=e.bookstoreService;return Object(m.b)({fetchBooks:y(n),onAddedToCart:k},t)})))(w),A=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(I,{})})},N=(n(41),{onIncrease:k,onDecrease:function(t){return{type:"BOOK_REMOVED_FROM_CART",payload:t}},onDelete:function(t){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:t}}}),D=Object(u.b)((function(t){var e=t.shoppingCart;return{items:e.cartItems,total:e.orderTotal}}),N)((function(t){var e=t.items,n=t.total,r=t.onIncrease,o=t.onDecrease,c=t.onDelete;return Object(l.jsxs)("div",{className:"shopping-cart-table",children:[Object(l.jsx)("h2",{children:"Your Order"}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Item"}),Object(l.jsx)("th",{children:"Count"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:e.map((function(t,e){var n=t.id,a=t.title,i=t.count,s=t.total;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e+1}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:i}),Object(l.jsxs)("td",{children:["$",s.toFixed(2)]}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-trash-o"})}),Object(l.jsx)("button",{onClick:function(){return r(n)},className:"btn btn-outline-success btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-plus-circle"})}),Object(l.jsx)("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-minus-circle"})})]})]},n)}))})]}),Object(l.jsxs)("div",{className:"total",children:["Total: $",n]})]})})),B=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(D,{})})},F=(n(42),function(){return Object(l.jsxs)("main",{role:"main",className:"container",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/react-redux-store",component:A}),Object(l.jsx)(d.a,{path:"/cart",component:B})]})]})}),L=function(t){Object(O.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={hasError:!1},t}return Object(h.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)(R,{}):this.props.children}}]),n}(o.Component),M=function(){function t(){Object(b.a)(this,t),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:4.01,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",page:"https://www.amazon.com/Production-Ready-Microservices-Susan-Fowler/dp/1491965975/"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:28.89,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg",page:"https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395/"},{id:3,title:"Modern JavaScript for the Impatient 1st Edition",author:" Cay Horstmann",price:40.49,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51Y5+ZPSaYL._SX376_BO1,204,203,200_.jpg",page:"https://www.amazon.com/Modern-JavaScript-Impatient-Cay-Horstmann/dp/0136502148/"},{id:4,title:"JavaScript. The Definitive Guide 7th Edition",author:"David Flanagan",price:22.75,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",page:"https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/"},{id:5,title:"The Road to React",author:"Robin Wieruch",price:28.49,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41+WkW8xuAS._SX384_BO1,204,203,200_.jpg",page:"https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/"}]}return Object(h.a)(t,[{key:"getBooks",value:function(){var t=this;return new Promise((function(e){setTimeout((function(){e(t.data)}),700)}))}}]),t}(),K=n(25),z=function(t,e){if(void 0===t)return{books:[],loading:!0,error:null};switch(e.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:e.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:e.payload};default:return t.bookList}},H=n(13),J=function(t,e,n){return 0===e.count?[].concat(Object(H.a)(t.slice(0,n)),Object(H.a)(t.slice(n+1))):-1===n?[].concat(Object(H.a)(t),[e]):[].concat(Object(H.a)(t.slice(0,n)),[e],Object(H.a)(t.slice(n+1)))},P=function(t,e,n){var r=t.bookList.books,o=t.shoppingCart.cartItems,c=r.find((function(t){return t.id===e})),a=o.findIndex((function(t){return t.id===e})),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.id,o=void 0===r?t.id:r,c=e.count,a=void 0===c?0:c,i=e.title,s=void 0===i?t.title:i,u=e.total;return{id:o,title:s,count:a+n,total:(void 0===u?0:u)+n*t.price}}(c,o[a],n);return{totalCount:J(o,i,a).map((function(t){return t.count})).reduce((function(t,e){return t+e}),0),orderTotal:J(o,i,a).map((function(t){return t.total})).reduce((function(t,e){return t+e}),0).toFixed(2),cartItems:J(o,i,a)}},U=function(t,e){if(void 0===t)return{totalCount:0,cartItems:[],orderTotal:0};switch(e.type){case"BOOK_ADDED_TO_CART":return P(t,e.payload,1);case"BOOK_REMOVED_FROM_CART":return P(t,e.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=t.shoppingCart.cartItems.find((function(t){return t.id===e.payload}));return P(t,e.payload,-n.count);default:return t.shoppingCart}},X=function(t,e){return{bookList:z(t,e),shoppingCart:U(t,e)}},V=Object(m.c)(X,Object(m.a)(K.a,(function(){return function(t){return function(e){return t("string"===typeof e?{type:e}:e)}}}),(function(t){var e=t.getState;return function(t){return function(n){return console.log(n.type,e()),t(n)}}})));V.dispatch((r=3e3,function(t){setTimeout((function(){return t({type:"DELAYED_ACTION"})}),r)}));var Y=V,$=new M;i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u.a,{store:Y,children:Object(l.jsx)(L,{children:Object(l.jsx)(v,{value:$,children:Object(l.jsx)(s.a,{children:Object(l.jsx)(F,{})})})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b1cebb26.chunk.js.map