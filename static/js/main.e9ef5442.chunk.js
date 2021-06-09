(this["webpackJsonphiring-exam-uplift"]=this["webpackJsonphiring-exam-uplift"]||[]).push([[0],{124:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(26),c=n.n(o),r=(n(91),n(8)),i=n(9),l=n(11),p=n(10),d=(n.p,n(92),n(13)),m=n.n(d),u=n(17),j=n(39),h=n(129),b=n(134),O=n(130),x=n(131),f=n(81),g=n(83),v=n(7),y=n(1),C=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={email:"",username:"",password:"",confirmPassword:"",passErrorMessage:"",emailFormatErrrorMessage:"",existedMessages:""},t.register=function(){if(t.state.email.includes("@"))if(t.state.password===t.state.confirmPassword){var e={email:t.state.email,username:t.state.username,password:t.state.password};m.a.post("https://sns-backend-hiring-exam.herokuapp.com/register",e).then((function(e){e.data.usernameError?t.setState({existedMessages:e.data.usernameError}):(alert("Welcome ".concat(e.data.email,"!")),t.props.login(e.data))}))}else t.setState({passErrorMessage:"Password did not match"});else t.setState({emailFormatErrrorMessage:"Invalid email"})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsx)(h.a,{className:"bg-light my-5 col-md-5 p-md-5",children:Object(y.jsxs)(b.a,{className:"col-md-12 mx-auto",children:[Object(y.jsx)("h3",{children:"Sign Up"}),Object(y.jsx)("br",{}),Object(y.jsxs)(b.a.Group,{as:O.a,controlId:"formHorizontalEmail",className:"d-md-flex justify-content-end",children:[""===this.state.existedMessages?"":Object(y.jsx)(x.a,{variant:"danger",className:"col-12 p-3",children:this.state.existedMessages}),Object(y.jsx)(b.a.Label,{column:!0,sm:2,children:"Email"}),Object(y.jsx)(f.a,{sm:10,children:Object(y.jsx)(b.a.Control,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(e){return t.setState({email:e.target.value.trim(),emailFormatErrrorMessage:"",existedMessages:""})}})}),""===this.state.emailFormatErrrorMessage?"":Object(y.jsx)(f.a,{className:"col-md-4 text-center",children:Object(y.jsx)(x.a,{variant:"danger",className:"m-0 mt-3 p-0",children:Object(y.jsx)("small",{children:this.state.emailFormatErrrorMessage})})})]}),Object(y.jsxs)(b.a.Group,{as:O.a,controlId:"formHorizontalUsername",children:[Object(y.jsx)(b.a.Label,{column:!0,sm:2,children:"Username"}),Object(y.jsx)(f.a,{sm:10,children:Object(y.jsx)(b.a.Control,{type:"text",placeholder:"Username",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value.trim(),existedMessages:""})}})})]}),Object(y.jsxs)(b.a.Group,{as:O.a,controlId:"formHorizontalPassword",className:"d-md-flex justify-content-end",children:[Object(y.jsx)(b.a.Label,{column:!0,sm:2,children:"Password"}),Object(y.jsx)(f.a,{sm:10,children:Object(y.jsx)(b.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value,passErrorMessage:""})}})}),""===this.state.passErrorMessage?"":Object(y.jsx)(f.a,{className:"col-md-4 text-center",children:Object(y.jsx)(x.a,{variant:"danger",className:"m-0 mt-3 p-0",children:Object(y.jsx)("small",{children:this.state.passErrorMessage})})})]}),Object(y.jsxs)(b.a.Group,{as:O.a,controlId:"formHorizontalConfirmPassword",children:[Object(y.jsx)(b.a.Label,{column:!0,sm:2,children:"Confirm Password"}),Object(y.jsx)(f.a,{sm:10,children:Object(y.jsx)(b.a.Control,{type:"password",placeholder:"Password",value:this.state.confirmPassword,onChange:function(e){return t.setState({confirmPassword:e.target.value})}})})]}),Object(y.jsx)(b.a.Group,{as:O.a,children:Object(y.jsxs)(f.a,{sm:{span:10,offset:2},children:[Object(y.jsx)(g.a,{onClick:this.register,className:"mr-2",children:"Register"}),Object(y.jsx)(j.b,{to:"/",children:"Login"})]})})]})})}}]),n}(s.a.Component),S=Object(v.b)(null,(function(t){return{login:function(e){return t({type:"LOGIN",payload:e})}}}))(C),k=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={username:"",password:"",errorMessage:""},t.login=function(){var e={username:t.state.username,password:t.state.password};m.a.post("https://sns-backend-hiring-exam.herokuapp.com/login",e).then((function(e){e.data.error?t.setState({errorMessage:e.data.error}):(alert("success"),t.props.login(e.data))}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsx)(h.a,{className:"bg-light my-5 col-md-5 p-md-5",children:Object(y.jsxs)(b.a,{className:"col-md-12 mx-auto",children:[Object(y.jsx)("h3",{children:"Log In"}),Object(y.jsx)("br",{}),""===this.state.errorMessage?"":Object(y.jsx)(x.a,{variant:"danger",onClose:function(){return t.setState({errorMessage:"",password:""})},dismissible:!0,children:this.state.errorMessage}),Object(y.jsxs)(b.a.Group,{as:O.a,controlId:"formHorizontalUsername",children:[Object(y.jsx)(b.a.Label,{column:!0,sm:2,children:"Username"}),Object(y.jsx)(f.a,{sm:10,children:Object(y.jsx)(b.a.Control,{type:"text",placeholder:"Username",value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})}})})]}),Object(y.jsxs)(b.a.Group,{as:O.a,controlId:"formHorizontalPassword",children:[Object(y.jsx)(b.a.Label,{column:!0,sm:2,children:"Password"}),Object(y.jsx)(f.a,{sm:10,children:Object(y.jsx)(b.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}})})]}),Object(y.jsx)(b.a.Group,{as:O.a,children:Object(y.jsxs)(f.a,{sm:{span:10,offset:2},children:[Object(y.jsx)(g.a,{onClick:this.login,className:"mr-2",children:"Login"}),Object(y.jsx)(j.b,{to:"/register",children:"Register"})]})})]})})}}]),n}(s.a.Component),w=Object(v.b)(null,(function(t){return{login:function(e){return t({type:"LOGIN",payload:e})}}}))(k),I=n(137),N=n(133),_=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={title:t.props.post.title,content:t.props.post.content,show:!1},t.btnEditPost=function(){var e={_id:t.props.post._id,userId:t.props.post.userId,username:t.props.post.username,email:t.props.post.email,title:t.state.title,content:t.state.content};m.a.put("https://sns-backend-hiring-exam.herokuapp.com/posts/"+t.props.post._id,e,{new:!0}).then((function(e){t.props.editPost(e.data)})),t.setState({show:!1,title:"",content:""})},t.handleClose=function(){return t.setState({show:!1})},t.handleShow=function(){return t.setState({show:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(g.a,{variant:"light",className:"mx-1 p-1",size:"sm",onClick:this.handleShow,children:Object(y.jsx)("span",{className:"material-icons p-0 text-info",children:"edit"})}),Object(y.jsxs)(N.a,{show:this.state.show,onHide:this.handleClose,animation:!1,children:[Object(y.jsx)(N.a.Header,{closeButton:!0,children:Object(y.jsx)(N.a.Title,{children:"Add New Post"})}),Object(y.jsx)(N.a.Body,{children:Object(y.jsxs)(b.a,{children:[Object(y.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(y.jsx)(b.a.Label,{children:"Title"}),Object(y.jsx)(b.a.Control,{type:"text",placeholder:"Title",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}})]}),Object(y.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(y.jsx)(b.a.Label,{children:"Content"}),Object(y.jsx)(b.a.Control,{as:"textarea",rows:3,value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}})]})]})}),Object(y.jsxs)(N.a.Footer,{children:[Object(y.jsx)(g.a,{variant:"secondary",onClick:this.handleClose,children:"Close"}),Object(y.jsx)(g.a,{variant:"primary",onClick:this.btnEditPost,children:"Save Changes"})]})]})]})}}]),n}(s.a.Component),E=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{editPost:function(e){return t({type:"EDIT_POST",payload:e})}}}))(_),P=n(29),T=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={post:t.props.post},t.btnLike=function(){var e={likes:Object(P.a)(t.state.post.likes)};e.likes.push(t.props.accountSignIn._id),m.a.put("https://sns-backend-hiring-exam.herokuapp.com/"+t.props.post._id,e).then((function(e){t.props.likePost(e.data)}))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("span",{className:"material-icons btn p-1",onClick:this.btnLike,children:"thumb_up"})})}}]),n}(s.a.Component),F=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{likePost:function(e){return t({type:"LIKE_POST",payload:e})}}}))(T),L=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={post:t.props.post},t.btnUnLike=function(){var e={likes:Object(P.a)(t.state.post.likes)}.likes.filter((function(e){return e!==t.props.accountSignIn._id}));m.a.put("https://sns-backend-hiring-exam.herokuapp.com/posts/"+t.props.post._id,{likes:e}).then((function(e){t.props.unLikePost(e.data)}))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("span",{className:"material-icons btn p-1",onClick:this.btnUnLike,children:"thumb_down"})})}}]),n}(s.a.Component),A=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{unLikePost:function(e){return t({type:"UNLIKE_POST",payload:e})}}}))(L),M=n(132),U=n(85),D=n(12),G=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={updateCommentValue:t.props.comment.comment},t.btnUpdatePost=function(){console.log(t.state),m.a.put("https://sns-backend-hiring-exam.herokuapp.com/comments/"+t.props.comment._id,Object(D.a)(Object(D.a)({},t.props.comment),{},{comment:t.state.updateCommentValue}),{new:!0}).then((function(e){t.props.editComment(e.data),t.props.btnShowUpdateForm(e.data)}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsx)("div",{className:"p-1",children:Object(y.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(y.jsx)(b.a.Label,{className:"p-1",children:"Edit Comment"}),Object(y.jsx)(b.a.Control,{as:"textarea",rows:2,value:this.state.updateCommentValue,onChange:function(e){return t.setState({updateCommentValue:e.target.value})}}),Object(y.jsx)("button",{className:"btn btn-light mt-2",onClick:this.btnUpdatePost,children:"Update Comment"})]})})}}]),n}(s.a.Component),B=Object(v.b)(null,(function(t){return{editComment:function(e){return t({type:"EDIT_COMMENT",payload:e})}}}))(G),H=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={comment:t.props.comment},t.btnLikeComment=function(){var e={likes:Object(P.a)(t.state.comment.likes)};e.likes.push(t.props.accountSignIn._id),m.a.put("https://sns-backend-hiring-exam.herokuapp.com/comments/"+t.props.comment._id,e).then((function(e){t.props.likeComment(e.data)}))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("span",{className:"material-icons btn p-0",onClick:this.btnLikeComment,children:"thumb_up"}),Object(y.jsxs)("small",{className:" m-1",children:[this.props.comment.likes.length,"Like/s"]})]})})}}]),n}(s.a.Component),z=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{likeComment:function(e){return t({type:"LIKE_COMMENT",payload:e})}}}))(H),K=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={comment:t.props.comment},t.btnUnLike=function(){var e={likes:Object(P.a)(t.state.comment.likes)}.likes.filter((function(e){return e!==t.props.accountSignIn._id}));m.a.put("https://sns-backend-hiring-exam.herokuapp.com/comments/"+t.props.comment._id,{likes:e}).then((function(e){t.props.unLikeComment(e.data)}))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsx)("span",{className:"material-icons btn p-0",onClick:this.btnUnLike,children:"thumb_down"}),Object(y.jsxs)("small",{className:"m-1 ",children:[this.props.comment.likes.length,"Like/s"]})]})})}}]),n}(s.a.Component),J=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{unLikeComment:function(e){return t({type:"UNLIKE_COMMENT",payload:e})}}}))(K),R=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={commentsFiltered:"",showUpdateForm:!1,comment:""},t.btnDeleteComment=function(){m.a.delete("https://sns-backend-hiring-exam.herokuapp.com/comments/"+t.props.comment._id).then((function(e){t.props.deleteComment(e.data)}))},t.btnShowUpdateForm=function(e){!0===t.state.showUpdateForm?t.setState({showUpdateForm:!1}):t.setState({showUpdateForm:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.props.accountSignIn._id),console.log(this.props.comment),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(I.a,{className:"mt-2",children:Object(y.jsx)(I.a.Body,{className:"p-0",children:Object(y.jsx)(I.a.Body,{className:"p-0",children:!1===this.state.showUpdateForm?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(I.a.Title,{className:"mb-0 bg-light p-2 d-flex justify-content-between",children:[Object(y.jsxs)("div",{children:[this.props.comment.userId.username,Object(y.jsxs)("small",{children:[" ",this.props.comment.userId.email]})]}),this.props.accountSignIn._id==this.props.comment.userId._id?Object(y.jsxs)(M.a,{id:"dropdown-basic-button",variant:"light",title:"",children:[Object(y.jsx)(U.a.Item,{className:"btn btn-danger",onClick:this.btnDeleteComment,children:"Delete"}),Object(y.jsx)(U.a.Item,{className:"btn btn-warning",onClick:this.btnShowUpdateForm,children:"Edit"})]}):""]}),Object(y.jsx)(I.a.Text,{className:"p-3",children:this.props.comment.comment}),Object(y.jsx)(h.a,{className:"p-3 bg-light",children:this.props.comment.likes.filter((function(e){return e===t.props.accountSignIn._id})).length>0?Object(y.jsx)(J,{comment:this.props.comment}):Object(y.jsx)(z,{comment:this.props.comment})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{className:"btn float-right",onClick:this.btnShowUpdateForm,children:Object(y.jsx)("span",{class:"material-icons text-dark",children:"cancel"})}),Object(y.jsx)(B,{comment:this.props.comment,btnShowUpdateForm:this.btnShowUpdateForm})]})})})})})}}]),n}(s.a.Component),V=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{deleteComment:function(e){return t({type:"DELETE_COMMENT",payload:e})}}}))(R),W=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={commentsFiltered:"",showUpdateForm:!1},t.btnDeleteComment=function(){m.a.delete("https://sns-backend-hiring-exam.herokuapp.com/comments/"+t.props.comment._id).then((function(t){console.log(t.data)}))},t.btnShowUpdateForm=function(){!0===t.state.showUpdateForm?t.setState({showUpdateForm:!1}):t.setState({showUpdateForm:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsx)(y.Fragment,{children:this.props.comments.filter((function(e){return e.postId._id===t.props.postId})).map((function(t){return Object(y.jsx)(V,{comment:t},t._id)}))})}}]),n}(s.a.Component),q=Object(v.b)((function(t){return{comments:t.comments}}))(W),Q=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={userId:t.props.accountSignIn._id,postId:t.props.postId,comment:""},t.btnAddComment=function(){m.a.post("https://sns-backend-hiring-exam.herokuapp.com/comments",t.state).then((function(e){t.props.addComment(e.data)})),t.setState({comment:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(I.a,{children:Object(y.jsxs)(I.a.Body,{children:[Object(y.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(y.jsx)(b.a.Label,{children:"Comments"}),Object(y.jsx)(b.a.Control,{as:"textarea",rows:2,value:this.state.comment,onChange:function(e){return t.setState({comment:e.target.value})}})]}),Object(y.jsx)("span",{className:"float-right btn btn-primary",onClick:this.btnAddComment,children:"Add comment"})]})})})}}]),n}(s.a.Component),X=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn,comments:t.comments}}),(function(t){return{addComment:function(e){return t({type:"ADD_COMMENT",payload:e})}}}))(Q),Y=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={show:!1,showComments:!1},t.handleClose=function(){return t.setState({show:!1})},t.handleShow=function(){return t.setState({show:!0})},t.btnDelete=function(){m.a.delete("https://sns-backend-hiring-exam.herokuapp.com/posts/"+t.props.post._id).then((function(e){t.props.deletePost(e.data)})),m.a.delete("https://sns-backend-hiring-exam.herokuapp.com/postId/"+t.props.post._id)},t.showComments=function(){t.setState({showComments:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(I.a,{className:"col-md-12 p-0 mb-1",children:[Object(y.jsxs)(I.a.Header,{className:"d-md-flex justify-content-between",children:[Object(y.jsxs)("b",{children:[this.props.post.username," ",Object(y.jsx)("small",{children:this.props.post.email})]}),this.props.accountSignIn._id===this.props.post.userId?Object(y.jsxs)("small",{children:[Object(y.jsx)(E,{post:this.props.post},this.props.post._id),Object(y.jsx)(g.a,{variant:"light",size:"sm",onClick:this.handleShow,children:Object(y.jsx)("span",{className:"material-icons text-danger",children:"delete"})}),Object(y.jsxs)(N.a,{show:this.state.show,onHide:this.handleClose,animation:!1,children:[Object(y.jsx)(N.a.Header,{closeButton:!0,children:Object(y.jsx)(N.a.Title,{children:"Are you sure to delete?"})}),Object(y.jsx)(N.a.Body,{children:Object(y.jsxs)(I.a.Body,{children:[Object(y.jsx)(I.a.Title,{children:this.props.post.title}),Object(y.jsx)(I.a.Text,{children:this.props.post.content})]})}),Object(y.jsxs)(N.a.Footer,{children:[Object(y.jsx)(g.a,{variant:"secondary",onClick:this.handleClose,children:"Close"}),Object(y.jsx)(g.a,{variant:"danger",onClick:this.btnDelete,children:"Delete Post"})]})]})]}):""]}),Object(y.jsxs)(I.a.Body,{children:[Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsxs)(I.a.Title,{children:["Title: ",this.props.post.title]}),Object(y.jsxs)("small",{className:"p-1",children:[" ",this.props.post.createdAt]})]}),Object(y.jsx)(I.a.Text,{className:"p-3",children:this.props.post.content}),Object(y.jsxs)(I.a.Text,{className:"d-md-flex bg-light",children:[Object(y.jsxs)("div",{className:"col-md-2",children:[this.props.post.likes.filter((function(e){return e===t.props.accountSignIn._id})).length>0?Object(y.jsx)(A,{post:this.props.post},this.props.post._id):Object(y.jsx)(F,{post:this.props.post},this.props.post._id),Object(y.jsxs)("small",{className:"m-1 py-1",children:[this.props.post.likes.length," Like/s"]})]}),Object(y.jsx)("di",{className:"d-md-flex justify-content-end col-md-10",children:Object(y.jsx)("div",{className:"m-1 btn p-0",onClick:this.showComments,children:Object(y.jsxs)("small",{children:[this.props.comments.filter((function(e){return e.postId._id===t.props.post._id})).length," ","Comments"]})})})]}),Object(y.jsx)(X,{postId:this.props.post._id}),!0===this.state.showComments?Object(y.jsx)(q,{postId:this.props.post._id},this.props.postId):""]})]})})}}]),n}(s.a.Component),Z=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn,comments:t.comments}}),(function(t){return{deletePost:function(e){return t({type:"DELETE_POST",payload:e})}}}))(Y),$=n(135),tt=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={title:"",content:"",show:!1},t.btnAddPost=function(){var e={userId:t.props.accountSignIn._id,username:t.props.accountSignIn.username,email:t.props.accountSignIn.email,title:t.state.title,content:t.state.content};m.a.post("https://sns-backend-hiring-exam.herokuapp.com/posts",e).then((function(e){t.props.addPost(e.data)})),t.setState({title:"",content:"",show:!1})},t.handleClose=function(){return t.setState({show:!1})},t.handleShow=function(){return t.setState({show:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(g.a,{variant:"light",onClick:this.handleShow,className:" border border-1 d-flex ",children:[Object(y.jsx)("span",{className:"material-icons mb-0",children:"add"}),Object(y.jsx)("span",{children:"Post"})]}),Object(y.jsxs)(N.a,{show:this.state.show,onHide:this.handleClose,animation:!1,children:[Object(y.jsx)(N.a.Header,{closeButton:!0,children:Object(y.jsx)(N.a.Title,{children:"Add New Post"})}),Object(y.jsx)(N.a.Body,{children:Object(y.jsxs)(b.a,{children:[Object(y.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(y.jsx)(b.a.Label,{children:"Title"}),Object(y.jsx)(b.a.Control,{type:"text",placeholder:"Title",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}})]}),Object(y.jsxs)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(y.jsx)(b.a.Label,{children:"Content"}),Object(y.jsx)(b.a.Control,{as:"textarea",rows:3,value:this.state.content,onChange:function(e){return t.setState({content:e.target.value})}})]})]})}),Object(y.jsxs)(N.a.Footer,{children:[Object(y.jsx)(g.a,{variant:"secondary",onClick:this.handleClose,children:"Close"}),Object(y.jsx)(g.a,{variant:"primary",onClick:this.btnAddPost,children:"Save Changes"})]})]})]})}}]),n}(s.a.Component),et=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{addPost:function(e){return t({type:"ADD_POST",payload:e})}}}))(tt),nt=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={accountSignIn:t.props.accountSignIn?t.props.accountSignIn.username:null},t.btnLogout=function(){t.props.logout(null)},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)($.a,{className:"bg-light",children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)($.a.Brand,{href:"#home",children:"SNS"}),Object(y.jsx)($.a.Toggle,{}),Object(y.jsx)($.a.Collapse,{className:"justify-content-end",children:Object(y.jsx)($.a.Text,{children:Object(y.jsx)(et,{})})}),Object(y.jsx)($.a.Collapse,{className:"justify-content-end",children:Object(y.jsx)($.a.Text,{children:Object(y.jsxs)(M.a,{id:"dropdown-basic-button",title:"Signed in as: "+this.state.accountSignIn,variant:"light",children:[Object(y.jsx)(U.a.Item,{children:Object(y.jsx)(y.Fragment,{children:this.state.accountSignIn})}),Object(y.jsx)(U.a.Item,{onClick:this.btnLogout,children:"Logout"})]})})})]})})})}}]),n}(s.a.Component),at=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn}}),(function(t){return{logout:function(e){return t({type:"LOGIN",payload:e})}}}))(nt),st=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(at,{}),Object(y.jsx)("div",{className:"col-md-12 p-3",children:Object(y.jsx)("div",{className:"col-md-8 mx-auto p-4",children:this.props.posts.map((function(t){return Object(y.jsx)(Z,{post:t},t._id)}))})})]})}}]),n}(s.a.Component),ot=Object(v.b)((function(t){return{posts:t.posts}}))(st),ct=n(136),rt=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={setShow:!1},t.btnClearPop=function(){t.props.clearPop(null)},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"200px"},children:Object(y.jsx)("div",{style:{position:"absolute",top:0,right:0},className:"col-12",children:Object(y.jsx)(O.a,{children:Object(y.jsx)(f.a,{xs:12,children:Object(y.jsxs)(ct.a,{onClick:this.btnClearPop,children:[Object(y.jsxs)(ct.a.Header,{children:[Object(y.jsx)("strong",{className:"mr-auto",children:this.props.popAlert.activity}),Object(y.jsx)("small",{children:"Just now"})]}),Object(y.jsx)(ct.a.Body,{children:this.props.popAlert.content})]})})})})})})}}]),n}(s.a.Component),it=Object(v.b)((function(t){return{popAlert:t.popAlert}}),(function(t){return{clearPop:function(e){return t({type:"ClEAR_POP",payload:e})}}}))(rt),lt=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;m.a.get("https://sns-backend-hiring-exam.herokuapp.com/posts").then((function(e){t.props.setPosts(e.data)})),m.a.get("https://sns-backend-hiring-exam.herokuapp.com/comments").then((function(e){t.props.setComments(e.data)}))}},{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(u.b,{exact:!0,path:"/register",children:[this.props.accountSignIn&&Object(y.jsx)(u.a,{to:"/posts"}),Object(y.jsx)(S,{})]}),Object(y.jsxs)(u.b,{exact:!0,path:"/",children:[this.props.accountSignIn&&Object(y.jsx)(u.a,{to:"/posts"}),Object(y.jsx)(w,{})]}),Object(y.jsxs)(u.b,{exact:!0,path:"/posts",children:[!this.props.accountSignIn&&Object(y.jsx)(u.a,{to:"/login"}),Object(y.jsx)(ot,{}),this.props.popAlert?Object(y.jsx)("div",{className:" col-md-3  fixed-bottom p-4",children:Object(y.jsx)(it,{})}):""]})]})}}]),n}(s.a.Component),pt=Object(v.b)((function(t){return{accountSignIn:t.acountSignIn,popAlert:t.popAlert}}),(function(t){return{setPosts:function(e){return t({type:"SET_POSTS",payload:e})},setComments:function(e){return t({type:"SET_COMMENTS",payload:e})}}}))(lt),dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),o(t),c(t)}))},mt=(n(122),n(86)),ut=n(28),jt={posts:[],comments:[],acountSignIn:localStorage.getItem("account")?JSON.parse(localStorage.getItem("account")):null,popAlert:""},ht=function(){var t,e,n,a,s,o,c,r,i,l,p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,d=arguments.length>1?arguments[1]:void 0;switch(d.type){case"LOGIN":return localStorage.setItem("account",JSON.stringify(d.payload)),Object(D.a)(Object(D.a)({},p),{},{acountSignIn:d.payload});case"LOGOUT":return localStorage.removeItem("account"),Object(D.a)(Object(D.a)({},p),{},{acountSignIn:d.payload});case"SET_POSTS":return Object(D.a)(Object(D.a)({},p),{},{posts:d.payload});case"ADD_POST":var m=d.payload,u=Object(P.a)(p.posts);return u.unshift(m),l={activity:"Post Added",content:d.payload.content},Object(D.a)(Object(D.a)({},p),{},{posts:u,popAlert:l});case"DELETE_POST":return t=d.payload._id,e=p.posts.filter((function(e){return e._id!==t})),l={activity:"Post Deleted",content:d.payload.content},Object(D.a)(Object(D.a)({},p),{},{posts:e,popAlert:l});case"EDIT_POST":t=d.payload._id;var j=d.payload;return n=Object(ut.clone)(p.posts),a=[],n.map((function(e){return e._id===t?a.push(j):a.push(e)})),l={activity:"Post Updated",content:d.payload.content},Object(D.a)(Object(D.a)({},p),{},{posts:Object(ut.clone)(a),popAlert:l});case"LIKE_POST":console.log(d.payload),t=d.payload._id;var h=d.payload;return n=Object(ut.clone)(p.posts),a=[],n.map((function(e){return e._id===t?a.push(e=h):a.push(e)})),Object(D.a)(Object(D.a)({},p),{},{posts:Object(ut.clone)(a)});case"UNLIKE_POST":t=d.payload._id;var b=d.payload;return n=Object(ut.clone)(p.posts),a=[],n.map((function(e){return e._id===t?a.push(e=b):a.push(e)})),Object(D.a)(Object(D.a)({},p),{},{posts:Object(ut.clone)(a)});case"SET_COMMENTS":return Object(D.a)(Object(D.a)({},p),{},{comments:d.payload});case"ADD_COMMENT":var O=d.payload,x=Object(P.a)(p.comments);return x.push(O),l={activity:"Comment Added",content:d.payload.comment},Object(D.a)(Object(D.a)({},p),{},{comments:x,popAlert:l});case"DELETE_COMMENT":return c=d.payload._id,i=p.comments.filter((function(t){return t._id!==c})),console.log(d.payload.comment),l={activity:"Comment Deleted",content:d.payload.comment},Object(D.a)(Object(D.a)({},p),{},{comments:i,popAlert:l});case"EDIT_COMMENT":return c=d.payload._id,s=d.payload,o=Object(ut.clone)(p.comments),r=[],o.map((function(t){return t._id===c?r.push(s):r.push(t)})),l={activity:"Comment Updated",content:d.payload.comment},Object(D.a)(Object(D.a)({},p),{},{comments:r,popAlert:l});case"LIKE_COMMENT":c=d.payload._id;var f=d.payload;return o=Object(ut.clone)(p.comments),r=[],o.map((function(t){return t._id===c?r.push(t=f):r.push(t)})),Object(D.a)(Object(D.a)({},p),{},{comments:Object(ut.clone)(r)});case"UNLIKE_COMMENT":c=d.payload._id;var g=d.payload;return o=Object(ut.clone)(p.comments),r=[],o.map((function(t){return t._id===c?r.push(t=g):r.push(t)})),Object(D.a)(Object(D.a)({},p),{},{comments:Object(ut.clone)(r)});case"ClEAR_POP":return Object(D.a)(Object(D.a)({},p),{},{popAlert:d.payload});default:return p}},bt=Object(mt.a)(ht);c.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(v.a,{store:bt,children:Object(y.jsx)(j.a,{basename:"/sns-exam-frontend",children:Object(y.jsx)(pt,{})})})}),document.getElementById("root")),dt()},91:function(t,e,n){},92:function(t,e,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.e9ef5442.chunk.js.map