(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return S}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,d,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,f){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{d=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),f(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,f(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[d]&&r.removeSignatureListener(d),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,d,b,f,l,O,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),d={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,f=b.data.itemsAvailable.toNumber(),l=b.itemsRedeemed.toNumber(),O=f-l,p=b.data.goLiveDate.toNumber(),p=new Date(1e3*p),console.log({itemsAvailable:f,itemsRedeemed:l,itemsRemaining:O,goLiveDate:p}),e.abrupt("return",{candyMachine:d,itemsAvailable:f,itemsRedeemed:l,itemsRemaining:O,goLiveDate:p});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,l,j,S,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,m(r,s.publicKey);case 3:return u=e.sent,b=t.connection,l=t.program,e.next=7,p(s.publicKey);case 7:return j=e.sent,e.next=10,O(s.publicKey);case 10:return S=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return v=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:j,masterEdition:S,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:d,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:v,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),f(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),d=n.n(u),b=(n(353),n(354),n(12)),f=n(1),l=n.n(f),O=n(4),p=n(13),m=n(132),j=n(134),S=n(313),v=n(596),g=n(601),_=n(605),x=n(604),T=n(15),y=n(52),E=n(175),h=n(133),P=n(31),R=Object(j.a)(E.a)(r||(r=Object(m.a)([""]))),A=j.a.span(c||(c=Object(m.a)([""]))),C=j.a.div(a||(a=Object(m.a)([""]))),w=Object(j.a)(v.a)(i||(i=Object(m.a)([""]))),K=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(P.jsxs)(A,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},D=function(e){var t=Object(o.useState)(),n=Object(p.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(p.a)(a,2),s=i[0],u=i[1],d=Object(o.useState)(!1),f=Object(p.a)(d,2),m=f[0],j=f[1],v=Object(o.useState)(!1),E=Object(p.a)(v,2),A=E[0],D=E[1],k=Object(o.useState)(0),L=Object(p.a)(k,2),W=L[0],N=L[1],I=Object(o.useState)(0),B=Object(p.a)(I,2),M=B[0],H=B[1],U=Object(o.useState)(0),F=Object(p.a)(U,2),Y=F[0],V=F[1],q=Object(o.useState)({open:!1,message:"",severity:void 0}),G=Object(p.a)(q,2),J=G[0],z=G[1],Z=Object(o.useState)(new Date(e.startDate)),Q=Object(p.a)(Z,2),X=Q[0],$=Q[1],ee=Object(y.c)(),te=Object(o.useState)(),ne=Object(p.a)(te,2),re=ne[0],ce=ne[1],ae=function(){Object(O.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(h.b)(ee,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,N(a),V(i),H(o),j(0===i),$(c),ce(r);case 16:case"end":return t.stop()}}),t)})))()},ie=function(){var t=Object(O.a)(l.a.mark((function t(){var n,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,D(!0),!ee||!(null===re||void 0===re?void 0:re.program)){t.next=10;break}return t.next=5,Object(h.c)(re,e.config,ee.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(h.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),z({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:i=t.sent,c(i/T.LAMPORTS_PER_SOL);case 23:return D(!1),ae(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(O.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:n=t.sent,c(n/T.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(o.useEffect)(ae,[ee,e.candyMachineId,e.connection]),Object(P.jsxs)("main",{children:[ee&&Object(P.jsxs)("p",{children:["Wallet ",Object(h.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(P.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),ee&&Object(P.jsxs)("p",{children:["Total Available: ",W]}),ee&&Object(P.jsxs)("p",{children:["Redeemed: ",M]}),ee&&Object(P.jsxs)("p",{children:["Remaining: ",Y]}),Object(P.jsx)(C,{children:ee?Object(P.jsx)(w,{disabled:m||A||!s,onClick:ie,variant:"contained",children:m?"SOLD OUT":s?A?Object(P.jsx)(g.a,{}):"MINT":Object(P.jsx)(S.a,{date:X,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:K})}):Object(P.jsx)(R,{children:"Connect Wallet"})}),Object(P.jsx)(_.a,{open:J.open,autoHideDuration:6e3,onClose:function(){return z(Object(b.a)(Object(b.a)({},J),{},{open:!1}))},children:Object(P.jsx)(x.a,{onClose:function(){return z(Object(b.a)(Object(b.a)({},J),{},{open:!1}))},severity:J.severity,children:J.message})})]})},k=n(32),L=n(116),W=n(340),N=n(602),I=new k.d.PublicKey(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TREASURY_ADDRESS),B=new k.d.PublicKey(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_MACHINE_CONFIG),M=new k.d.PublicKey(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_MACHINE_ID),H=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SOLANA_NETWORK,U=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SOLANA_RPC_HOST,F=new k.d.Connection(U),Y=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_START_DATE,10),V=Object(W.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),q=function(){var e=Object(o.useMemo)((function(){return Object(T.clusterApiUrl)(H)}),[]),t=Object(o.useMemo)((function(){return[Object(L.a)(),Object(L.b)(),Object(L.c)(),Object(L.e)({network:H}),Object(L.d)({network:H})]}),[]);return Object(P.jsx)(N.a,{theme:V,children:Object(P.jsx)(y.a,{endpoint:e,children:Object(P.jsx)(y.b,{wallets:t,autoConnect:!0,children:Object(P.jsx)(E.b,{children:Object(P.jsx)(D,{candyMachineId:M,config:B,connection:F,startDate:Y,treasury:I,txTimeout:3e4})})})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};d.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(q,{})}),document.getElementById("root")),G()}},[[569,1,2]]]);
//# sourceMappingURL=main.55b88fc8.chunk.js.map