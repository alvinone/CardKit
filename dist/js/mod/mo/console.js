define("mo/console",["mo/lang","mo/browsers","mo/template/string","mo/domready"],function(t,e,n){function i(t,e){e=e||{};var n=(""+t).trim().match(l)[1].trim().replace(/return\s+/,"").replace(/;$/,"");a.info("run `"+n+"`");try{a.info(t())}catch(i){a.error(e.showStack?i:i.message)}}function r(e){return function(){t.isFunction(c[e])&&c[e].apply(a,arguments);var n=this.output=this.output||o(),i=n.innerHTML,r=i&&/\S/.test(i)?[i]:[];r.push.call(r,'<p><span class="type type-'+e+'"></span>'+'<span class="log">'+Array.prototype.slice.call(arguments).map(s,e).join('</span><span class="log">')+"</span></p>"),n.innerHTML=r.join("")}}function o(){var t=document.createElement("DIV");return t.setAttribute("id","console"),document.body.insertBefore(t,document.body.firstChild),t}function s(t){var i=this;return t instanceof Error?(t=t.stack?t.stack.split(/at\s/):[t.message],t.map(function(t){return s("at "+t,i)}).join("<br>")):"log"==""+i||!t||"object"!=typeof t||e.aosp&&1===t.nodeType?(t+="","string"==typeof t?n.escapeHTML(t):t):(t=['<span class="obj-start">'+n.escapeHTML("{")+"</span>",Object.keys(t).map(function(t){var e;try{e=this[t]}catch(r){e=r.message}return"string"==typeof e?e='"'+e+'"':e+="",'<span class="obj-item"><span class="obj-k">'+s(t,i)+': </span><span class="obj-v">'+("string"==typeof e?n.escapeHTML(e):e)+"</span>,</span>"},t).join(""),'<span class="obj-end">'+n.escapeHTML("}")+"</span>"].join(""),'<span class="obj-wrap"><span class="obj-overview">'+t+'</span><span class="obj-end">...}</span><span class="obj-detail">'+t+"</span></span></span>")}var a=this.console=this.console||{},c={log:a.log,info:a.info,warn:a.warn,error:a.error},l=/^function[^(]*\([^)]*\)[^{]*\{([.\s\S]*)\}$/;return a.config=function(t){return this.output=t.output,this},a.enable=function(){this.output||(this.output=o());for(var t in c)a[t]=r(t);return a.run=i,this},a.disable=function(){for(var t in c)a[t]=c[t];return a.run=a.log,this},a});