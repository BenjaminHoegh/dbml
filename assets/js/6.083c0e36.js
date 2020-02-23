(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dbml-database-markup-language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dbml-database-markup-language"}},[e._v("#")]),e._v(" DBML - Database Markup Language")]),e._v(" "),r("h2",{attrs:{id:"intro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),r("p",[r("strong",[e._v("DBML (Database Markup Language)")]),e._v(" is an open-source DSL language designed to define and document database schemas and structures. It is designed to be simple, consistent and highly-readable.")]),e._v(" "),r("p",[e._v("It also comes with command-line tool and open-source module to help you convert between DBML and SQL.")]),e._v(" "),r("pre",[r("code",[e._v("Table users {\n  id integer\n  username varchar\n  role varchar\n  created_at timestamp\n}\n\nTable posts {\n  id integer [primary key]\n  title varchar\n  body text [note: 'Content of the post']\n  user_id integer\n  status post_status\n  created_at timestamp\n}\n\nEnum post_status {\n  draft\n  published\n  private [note: 'visible via URL only']\n}\n\nRef: posts.user_id > users.id // many-to-one\n")])]),e._v(" "),r("p",[r("em",[e._v("See the above dbml doc "),r("a",{attrs:{href:"https://dbdiagram.io/d/5d5cb582ced98361d6ddc5ab",target:"_blank",rel:"noopener noreferrer"}},[e._v("visualized on dbdiagram"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("For full DBML syntax documentation, refer to the "),r("router-link",{attrs:{to:"/docs/"}},[e._v("Docs")]),e._v(" section.")],1),e._v(" "),r("h2",{attrs:{id:"is-this-similar-to-sql-ddl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#is-this-similar-to-sql-ddl"}},[e._v("#")]),e._v(" Is this similar to SQL DDL?")]),e._v(" "),r("p",[e._v('Not quite. Despite its name (data "definition" language), DDL is designed mainly to help physically create, modify or\nremove tables, not to define them. In other words, '),r("strong",[e._v("DDL is imperative, while DBML is declarative")]),e._v(". This makes DBML\nso much easier to write, read and maintain.")]),e._v(" "),r("p",[e._v("DDL is also database specific (Oracle, PostgreSQL, etc), while "),r("strong",[e._v("DBML is database-agnostic")]),e._v(" and designed for the high-level database design instead of low-level database creation.")]),e._v(" "),r("h2",{attrs:{id:"what-can-i-do-now"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-can-i-do-now"}},[e._v("#")]),e._v(" What can I do now?")]),e._v(" "),r("p",[e._v("DBML comes with:")]),e._v(" "),r("ol",[r("li",[e._v("A command-line tool to help to convert SQL to DBML files and vice versa.")]),e._v(" "),r("li",[e._v("A free, simple database visualiser at "),r("a",{attrs:{href:"https://dbdiagram.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("dbdiagram.io"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("An open-source JS library (NPM package) for you to programmatically convert between DBML and SQL DDL. Detailed docs coming soon.")])]),e._v(" "),r("h3",{attrs:{id:"command-line-tool-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-line-tool-cli"}},[e._v("#")]),e._v(" Command-line Tool (CLI)")]),e._v(" "),r("p",[e._v("A simple command-line tool to help you convert between SQL (DDL) and DBML. Refer to "),r("a",{attrs:{href:"/cli"}},[e._v("CLI docs")]),e._v(" for more info.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(74),alt:"img"}})]),e._v(" "),r("h3",{attrs:{id:"dbdiagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dbdiagram"}},[e._v("#")]),e._v(" dbdiagram")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://dbdiagram.io?utm_source=dbml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dbdiagram.io"),r("OutboundLink")],1),e._v(" is a free tool to help you visualize database diagrams from DBML code.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/8T1tIZp.gif",alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"dbml-history"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dbml-history"}},[e._v("#")]),e._v(" DBML History")]),e._v(" "),r("p",[e._v("DBML was born out from "),r("a",{attrs:{href:"https://dbdiagram.io?utm_source=dbml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dbdiagram.io"),r("OutboundLink")],1),e._v(", a simple database diagram visualizer. At the time (Aug 2018) we were looking for a simple tool to design database structure but couldn't come up with one we liked. So we decided to build one.")]),e._v(" "),r("p",[e._v("After 1 year and over 100k diagrams created by 60k internet users later, we realized the syntax we designed for users to draw diagram is very received and one of the key values of the tool. That's how DBML is born. Our aim is to make DBML a good and simple way for developers to design and document database structures.")]),e._v(" "),r("h2",{attrs:{id:"dbml-statistics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dbml-statistics"}},[e._v("#")]),e._v(" DBML Statistics")]),e._v(" "),r("ul",[r("li",[e._v("110k DBML docs created via dbdiagram.io (as of July 2019)")]),e._v(" "),r("li",[e._v("59.5k users using DBML (as of July 2019)")])]),e._v(" "),r("h2",{attrs:{id:"who-s-behind-dbml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#who-s-behind-dbml"}},[e._v("#")]),e._v(" Who's behind DBML?")]),e._v(" "),r("p",[e._v("DBML is created and maintained by "),r("a",{attrs:{href:"https://holistics.io?utm_source=dbml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holistics"),r("OutboundLink")],1),e._v(", an analytics platform company.")]),e._v(" "),r("h2",{attrs:{id:"community"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#community"}},[e._v("#")]),e._v(" Community")]),e._v(" "),r("ul",[r("li",[e._v("DBML is "),r("a",{attrs:{href:"https://github.com/holistics/dbml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("being open-sourced on Github"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Have a question, suggestion or want to contribute? Use "),r("a",{attrs:{href:"https://github.com/holistics/dbml/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("the dbml issues page"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"community-contributions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#community-contributions"}},[e._v("#")]),e._v(" Community Contributions")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ccod/dbd-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emacs Mode for DBML by ccod"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jidn/vim-dbml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vim Plugin for DBML by jidn"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=duynvu.dbml-language",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode Plugin for DBML by duynvu"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports},74:function(e,t,a){e.exports=a.p+"assets/img/cli.29629c77.gif"}}]);