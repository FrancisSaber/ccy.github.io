(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{601:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"项目部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[s._v("#")]),s._v(" 项目部署")]),s._v(" "),a("h3",{attrs:{id:"文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传"}},[s._v("#")]),s._v(" 文件上传")]),s._v(" "),a("ol",[a("li",[s._v("如果使用"),a("code",[s._v("x-ftp")]),s._v("，直接可视化拖拽文件就好")])]),s._v(" "),a("h4",{attrs:{id:"如果使用x-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果使用x-shell"}},[s._v("#")]),s._v(" 如果使用x-shell")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("uBuntu系统或者centOS")]),s._v(" "),a("p",[a("font",{attrs:{color:"orange"}},[s._v("lrzsz：用来从本地上传文件到服务器的工具")])],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt-get install lrzsz \t\t//安装lrzsz 如果是root权限就不用加sudo\nyum intall lrzsz\n\nsz urls.txt  //执行此命令就能从服务器下载文件到本地\nrz \t\t\t//命令可以从本地文件选择上传到服务器\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("解压rar文件\nsudo apt-get install rar  //安装解压依赖\nrar x 文件名  \t\t\t   //解压\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211107221307970.png",alt:"image-20211107221307970"}})]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211107224810767.png",alt:"image-20211107224810767"}}),s._v(" "),a("p",[a("code",[s._v("nginx")]),s._v("配置路径："),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211108163632395.png",alt:"image-20211108163632395"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root/usr/local/nginx/conf/nginx.conf\t\t//此文件为nginx启动配置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"关闭nginx所占用端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭nginx所占用端口"}},[s._v("#")]),s._v(" 关闭nginx所占用端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo fuser -k 9906/tcp \t\t#关闭占用nginx的端口占用 9906为nginx的占用端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"nginx-conf配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf配置"}},[s._v("#")]),s._v(" "),a("code",[s._v("nginx.conf")]),s._v("配置")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('user root ;\t\t\t//设置用户权限\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    server {\n        listen       9906;\t\t\t//设置服务端口号，从服务IP的该端口访问\n        server_name  localhost;\t\t//设置服务名称,localhost ，服务器IP地址\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        location / {\n            root  /root/freshCut_cloud_front/dist;  //当访问服务器:9906 ，请求此目录资源\n            index  index.html index.htm;\t\t   //指定主页\n            try_files  $uri $uri/ /index.html;\n        }\n\n        #location ~ .* {\n        #        proxy_pass http://120.79.152.61/;\n        #        proxy_set_header Host $http_host;\n        #        proxy_set_header X-Real-IP $remote_addr;\n        #        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        #}\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);