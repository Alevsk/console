"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1380],{61380:function(e,t,o){o.r(t),o.d(t,{default:function(){return x}});var n=o(1413),r=o(72791),a=o(57689),i=o(11135),l=o(25787),s=o(61757),c=o(23814),p=o(56087),d=o(64554),u=o(75952),g=o(80184),m=function(e){var t=e.icon,o=e.description;return(0,g.jsxs)(d.Z,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[t," ",(0,g.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:o})]})},f=function(){return(0,g.jsxs)(d.Z,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px",marginTop:{xs:"0px"}},children:[(0,g.jsxs)(d.Z,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,g.jsx)(u.M9A,{}),(0,g.jsx)("div",{children:"Learn more about Event Destinations"})]}),(0,g.jsx)(d.Z,{sx:{fontSize:"14px",marginBottom:"15px"},children:(0,g.jsxs)(d.Z,{sx:{paddingBottom:"20px"},children:[(0,g.jsx)(m,{icon:(0,g.jsx)(u.HNx,{}),description:"What are Event Destinations?"}),(0,g.jsx)(d.Z,{sx:{paddingTop:"20px"},children:"MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications."})]})})]})},h=o(47974),y=s.BI.filter((function(e){return""!==e.logo})),b=y.filter((function(e){return e.category===s.z5.DB})),T=y.filter((function(e){return e.category===s.z5.Queue})),S=y.filter((function(e){return e.category===s.z5.Func})),x=(0,l.Z)((function(e){return(0,i.Z)((0,n.Z)((0,n.Z)({},c.Je),c.fc))}))((function(e){var t=e.classes,o=(0,a.s0)();return(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(h.Z,{label:(0,g.jsx)(r.Fragment,{children:(0,g.jsx)(u.hbI,{label:"Event Destinations",onClick:function(){return o(p.gA.EVENT_DESTINATIONS)}})}),actions:(0,g.jsx)(r.Fragment,{})}),(0,g.jsx)(u.Xgh,{children:(0,g.jsxs)(d.Z,{sx:{display:"grid",padding:"16px",gap:"8px",gridTemplateColumns:{md:"2fr 1.2fr",xs:"1fr"},border:"1px solid #eaeaea"},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{style:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Queue"}),(0,g.jsx)("div",{className:t.iconContainer,children:T.map((function(e){return(0,g.jsxs)("button",{className:t.lambdaNotif,onClick:function(){o("".concat(p.gA.EVENT_DESTINATIONS_ADD,"/").concat(e.actionTrigger))},children:[(0,g.jsx)("div",{className:t.lambdaNotifIcon,children:(0,g.jsx)("img",{src:e.logo,className:t.logoButton,alt:e.targetTitle})}),(0,g.jsx)("div",{className:t.lambdaNotifTitle,children:(0,g.jsx)("b",{children:e.targetTitle})})]},"icon-".concat(e.targetTitle))}))}),(0,g.jsx)("div",{style:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Database"}),(0,g.jsx)("div",{className:t.iconContainer,children:b.map((function(e){return(0,g.jsxs)("button",{className:t.lambdaNotif,onClick:function(){o("".concat(p.gA.EVENT_DESTINATIONS_ADD,"/").concat(e.actionTrigger))},children:[(0,g.jsx)("div",{className:t.lambdaNotifIcon,children:(0,g.jsx)("img",{src:e.logo,className:t.logoButton,alt:e.targetTitle})}),(0,g.jsx)("div",{className:t.lambdaNotifTitle,children:(0,g.jsx)("b",{children:e.targetTitle})})]},"icon-".concat(e.targetTitle))}))}),(0,g.jsx)("div",{style:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Functions"}),(0,g.jsx)("div",{className:t.iconContainer,children:S.map((function(e){return(0,g.jsxs)("button",{className:t.lambdaNotif,onClick:function(){o("".concat(p.gA.EVENT_DESTINATIONS_ADD,"/").concat(e.actionTrigger))},children:[(0,g.jsx)("div",{className:t.lambdaNotifIcon,children:(0,g.jsx)("img",{src:e.logo,className:t.logoButton,alt:e.targetTitle})}),(0,g.jsx)("div",{className:t.lambdaNotifTitle,children:(0,g.jsx)("b",{children:e.targetTitle})})]},"icon-".concat(e.targetTitle))}))})]}),(0,g.jsx)(f,{})]})})]})}))},61757:function(e,t,o){o.d(t,{BI:function(){return T},DD:function(){return x},L:function(){return E},dM:function(){return s},ee:function(){return l},fk:function(){return y},oj:function(){return v},z5:function(){return b}});var n,r=o(4942),a=o(43144),i=o(15671),l="notify_postgres",s="notify_mysql",c="notify_kafka",p="notify_amqp",d="notify_mqtt",u="notify_redis",g="notify_nats",m="notify_elasticsearch",f="notify_webhook",h="notify_nsq",y=function(e){return e.map((function(e){return{service_name:"".concat(e.service,":").concat(e.account_id),name:e.service,account_id:e.account_id,status:e.status}}))},b=(0,a.Z)((function e(){(0,i.Z)(this,e)}));b.DB="database",b.Queue="queue",b.Func="functions";var T=[{actionTrigger:l,targetTitle:"PostgreSQL",logo:"/postgres-logo.svg",category:b.DB},{actionTrigger:c,targetTitle:"Kafka",logo:"/kafka-logo.svg",category:b.Queue},{actionTrigger:p,targetTitle:"AMQP",logo:"/amqp-logo.svg",category:b.Queue},{actionTrigger:d,targetTitle:"MQTT",logo:"/mqtt-logo.svg",category:b.Queue},{actionTrigger:u,targetTitle:"Redis",logo:"/redis-logo.svg",category:b.Queue},{actionTrigger:g,targetTitle:"NATS",logo:"/nats-logo.svg",category:b.Queue},{actionTrigger:s,targetTitle:"Mysql",logo:"/mysql-logo.svg",category:b.DB},{actionTrigger:m,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg",category:b.DB},{actionTrigger:f,targetTitle:"Webhook",logo:"/webhooks-logo.svg",category:b.Func},{actionTrigger:h,targetTitle:"NSQ",logo:"/nsq-logo.svg",category:b.Queue}],S=[{name:"queue_dir",label:"Queue Directory",required:!1,tooltip:"staging dir for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue_limit",label:"Queue Limit",required:!1,tooltip:"maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter custom notes if any"}],x=function(e){return e.filter((function(e){return""!==e.value}))},v=(n={},(0,r.Z)(n,c,[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client auth",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS auth",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS auth",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"}].concat(S)),(0,r.Z)(n,p,[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"}].concat(S)),(0,r.Z)(n,u,[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address. For example: `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"}].concat(S)),(0,r.Z)(n,d,[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Internal"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"}].concat(S)),(0,r.Z)(n,g,[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on', to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on', to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS auth",type:"string",placeholder:"Enter Client Key"}].concat(S)),(0,r.Z)(n,m,[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"}].concat(S)),(0,r.Z)(n,f,[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"}].concat(S)),(0,r.Z)(n,h,[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'trust server TLS without verification, defaults to "on" (verify)',type:"on|off"}].concat(S)),n),_={webhook:"notify_webhook",amqp:"notify_amqp",kafka:"notify_kafka",mqtt:"notify_mqtt",nats:"notify_nats",nsq:"notify_nsq",mysql:"notify_mysql",postgresql:"notify_postgres",elasticsearch:"notify_elasticsearch",redis:"notify_redis"},E=function(e){return _[e]}}}]);
//# sourceMappingURL=1380.94a88a7f.chunk.js.map