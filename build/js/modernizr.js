window.Modernizr=function(e,t,n){function r(){m.input=function(e){for(var t=0,n=e.length;n>t;t++)N[e[t]]=!!(e[t]in x);return N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,a,i=0,s=e.length;s>i;i++)x.setAttribute("type",o=e[i]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?r=x.checkValidity&&x.checkValidity()===!1:/^color$/.test(o)?(g.appendChild(x),g.offsetWidth,r=x.value!=w,g.removeChild(x)):r=x.value!=w)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function o(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),r=(e+" "+T.join(n+" ")+n).split(" ");return!!a(r,t)}function a(e,t){for(var r in e)if(b[e[r]]!==n&&(!t||t(e[r],y)))return!0}function i(e,t){return-1!==(""+e).indexOf(t)}function s(e,t){return typeof e===t}function c(e,t){return u(E.join(e+";")+(t||""))}function u(e){b.cssText=e}var l,d,f="1.7",m={},p=!0,g=t.documentElement,h=t.head||t.getElementsByTagName("head")[0],v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",C=Object.prototype.toString,E=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),T="Webkit Moz O ms Khtml".split(" "),k={svg:"http://www.w3.org/2000/svg"},S={},P={},N={},j=[],R=function(e){var n,r=t.createElement("style"),o=t.createElement("div");return r.textContent=e+"{#modernizr{height:3px}}",h.appendChild(r),o.id="modernizr",g.appendChild(o),n=3===o.offsetHeight,r.parentNode.removeChild(r),o.parentNode.removeChild(o),!!n},M=function(){function e(e,o){o=o||t.createElement(r[e]||"div");var a=(e="on"+e)in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=s(o[e],"function"),s(o[e],n)||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;d=s(z,n)||s(z.call,n)?function(e,t){return t in e&&s(e.constructor.prototype[t],n)}:function(e,t){return z.call(e,t)},S.flexbox=function(){function e(e,t,n,r){e.style.cssText=E.join(t+":"+n+";")+(r||"")}function n(e,t,n,r){t+=":",e.style.cssText=(t+E.join(n+";"+t)).slice(0,-t.length)+(r||"")}var r=t.createElement("div"),o=t.createElement("div");n(r,"display","box","width:42px;padding:0;"),e(o,"box-flex","1","width:10px;"),r.appendChild(o),g.appendChild(r);var a=42===o.offsetWidth;return r.removeChild(o),g.removeChild(r),a},S.canvas=function(){var e=t.createElement("canvas");return e.getContext&&e.getContext("2d")},S.canvastext=function(){return m.canvas&&s(t.createElement("canvas").getContext("2d").fillText,"function")},S.webgl=function(){return!!e.WebGLRenderingContext},S.touch=function(){return"ontouchstart"in e||R("@media ("+E.join("touch-enabled),(")+"modernizr)")},S.geolocation=function(){return!!navigator.geolocation},S.postmessage=function(){return!!e.postMessage},S.websqldatabase=function(){var t=!!e.openDatabase;return t},S.indexedDB=function(){for(var t=-1,n=T.length;++t<n;){var r=T[t].toLowerCase();if(e[r+"_indexedDB"]||e[r+"IndexedDB"])return!0}return!1},S.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},S.history=function(){return!(!e.history||!history.pushState)},S.draganddrop=function(){return M("dragstart")&&M("drop")},S.websockets=function(){return"WebSocket"in e},S.rgba=function(){return u("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},S.hsla=function(){return u("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},S.multiplebgs=function(){return u("background:url(//:),url(//:),red url(//:)"),new RegExp("(url\\s*\\(.*?){3}").test(b.background)},S.backgroundsize=function(){return o("backgroundSize")},S.borderimage=function(){return o("borderImage")},S.borderradius=function(){return o("borderRadius","",function(e){return i(e,"orderRadius")})},S.boxshadow=function(){return o("boxShadow")},S.textshadow=function(){return""===t.createElement("div").style.textShadow},S.opacity=function(){return c("opacity:.55"),/^0.55$/.test(b.opacity)},S.cssanimations=function(){return o("animationName")},S.csscolumns=function(){return o("columnCount")},S.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return u((e+E.join(t+e)+E.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},S.cssreflections=function(){return o("boxReflect")},S.csstransforms=function(){return!!a(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},S.csstransforms3d=function(){var e=!!a(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return e&&"webkitPerspective"in g.style&&(e=R("@media ("+E.join("transform-3d),(")+"modernizr)")),e},S.csstransitions=function(){return o("transitionProperty")},S.fontface=function(){var e,n,r=h||g,o=t.createElement("style"),a=t.implementation||{hasFeature:function(){return!1}};o.type="text/css",r.insertBefore(o,r.firstChild),e=o.sheet||o.styleSheet;var i=a.hasFeature("CSS2","")?function(t){if(!e||!t)return!1;var n=!1;try{e.insertRule(t,0),n=/src/i.test(e.cssRules[0].cssText),e.deleteRule(e.cssRules.length-1)}catch(r){}return n}:function(t){return e&&t?(e.cssText=t,0!==e.cssText.length&&/src/i.test(e.cssText)&&0===e.cssText.replace(/\r+|\n+/g,"").indexOf(t.split(" ")[0])):!1};return n=i('@font-face { font-family: "font"; src: url(data:,); }'),r.removeChild(o),n},S.video=function(){var e=t.createElement("video"),n=!!e.canPlayType;if(n){n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"');var r='video/mp4; codecs="avc1.42E01E';n.h264=e.canPlayType(r+'"')||e.canPlayType(r+', mp4a.40.2"'),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}return n},S.audio=function(){var e=t.createElement("audio"),n=!!e.canPlayType;return n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"'),n.mp3=e.canPlayType("audio/mpeg;"),n.wav=e.canPlayType('audio/wav; codecs="1"'),n.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")),n},S.localstorage=function(){try{return!!localStorage.getItem}catch(e){return!1}},S.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(e){return!1}},S.webWorkers=function(){return!!e.Worker},S.applicationcache=function(){return!!e.applicationCache},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},S.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},S.smil=function(){return!!t.createElementNS&&/SVG/.test(C.call(t.createElementNS(k.svg,"animate")))},S.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(C.call(t.createElementNS(k.svg,"clipPath")))};for(var W in S)d(S,W)&&(l=W.toLowerCase(),m[l]=S[W](),j.push((m[l]?"":"no-")+l));return m.input||r(),m.crosswindowmessaging=m.postmessage,m.historymanagement=m.history,m.addTest=function(e,t){return e=e.toLowerCase(),m[e]?void 0:(t=!!t(),g.className+=" "+(t?"":"no-")+e,m[e]=t,m)},u(""),y=x=null,p&&e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function n(e,t){for(var r,o=-1,a=e.length,i=[];++o<a;)r=e[o],"screen"!=(t=r.media||t)&&i.push(n(r.imports,t),r.cssText);return i.join("")}function r(e){for(var t=-1;++t<s;)e.createElement(i[t])}var o,a="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",i=a.split("|"),s=i.length,c=new RegExp("(^|\\s)("+a+")","gi"),u=new RegExp("<(/*)("+a+")","gi"),l=new RegExp("(^|[^\\n]*?\\s)("+a+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),d=t.createDocumentFragment(),f=t.documentElement,m=f.firstChild,p=t.createElement("body"),g=t.createElement("style");r(t),r(d),m.insertBefore(g,m.firstChild),g.media="print",e.attachEvent("onbeforeprint",function(){var e,r=-1,a=n(t.styleSheets,"all"),m=[];for(o=o||t.body;null!=(e=l.exec(a));)m.push((e[1]+e[2]+e[3]).replace(c,"$1.iepp_$2")+e[4]);for(g.styleSheet.cssText=m.join("\n");++r<s;)for(var h=t.getElementsByTagName(i[r]),v=h.length,y=-1;++y<v;)h[y].className.indexOf("iepp_")<0&&(h[y].className+=" iepp_"+i[r]);d.appendChild(o),f.appendChild(p),p.className=o.className,p.innerHTML=o.innerHTML.replace(u,"<$1font")}),e.attachEvent("onafterprint",function(){p.innerHTML="",f.removeChild(p),f.appendChild(o),g.styleSheet.cssText=""})}(e,t),m._enableHTML5=p,m._version=f,g.className=g.className.replace(/\bno-js\b/,"")+" js "+j.join(" "),m}(this,this.document);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVybml6ci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJNb2Rlcm5penIiLCJhIiwiYiIsImMiLCJHIiwiZSIsImlucHV0IiwibGVuZ3RoIiwidCIsImwiLCJzcGxpdCIsImlucHV0dHlwZXMiLCJmIiwiaCIsImQiLCJpIiwic2V0QXR0cmlidXRlIiwidHlwZSIsInZhbHVlIiwibSIsInN0eWxlIiwiY3NzVGV4dCIsInRlc3QiLCJXZWJraXRBcHBlYXJhbmNlIiwiZyIsImFwcGVuZENoaWxkIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0SGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJjaGVja1ZhbGlkaXR5Iiwib2Zmc2V0V2lkdGgiLCJzIiwiRiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwicCIsImpvaW4iLCJFIiwiayIsImoiLCJEIiwiaW5kZXhPZiIsIkMiLCJCIiwiQSIsIm8iLCJ2IiwieiIsImRvY3VtZW50RWxlbWVudCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJxIiwic3ZnIiwiciIsInUiLCJ3IiwidGV4dENvbnRlbnQiLCJpZCIsInBhcmVudE5vZGUiLCJ4IiwicmVtb3ZlQXR0cmlidXRlIiwic2VsZWN0IiwiY2hhbmdlIiwic3VibWl0IiwicmVzZXQiLCJlcnJvciIsImxvYWQiLCJhYm9ydCIsInkiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsImZsZXhib3giLCJzbGljZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJjYW52YXN0ZXh0IiwiZmlsbFRleHQiLCJ3ZWJnbCIsIldlYkdMUmVuZGVyaW5nQ29udGV4dCIsInRvdWNoIiwiZ2VvbG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJwb3N0bWVzc2FnZSIsInBvc3RNZXNzYWdlIiwid2Vic3FsZGF0YWJhc2UiLCJvcGVuRGF0YWJhc2UiLCJpbmRleGVkREIiLCJ0b0xvd2VyQ2FzZSIsImhhc2hjaGFuZ2UiLCJkb2N1bWVudE1vZGUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZHJhZ2FuZGRyb3AiLCJ3ZWJzb2NrZXRzIiwicmdiYSIsImJhY2tncm91bmRDb2xvciIsImhzbGEiLCJtdWx0aXBsZWJncyIsIlJlZ0V4cCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kc2l6ZSIsImJvcmRlcmltYWdlIiwiYm9yZGVycmFkaXVzIiwiYm94c2hhZG93IiwidGV4dHNoYWRvdyIsInRleHRTaGFkb3ciLCJvcGFjaXR5IiwiY3NzYW5pbWF0aW9ucyIsImNzc2NvbHVtbnMiLCJjc3NncmFkaWVudHMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjc3NyZWZsZWN0aW9ucyIsImNzc3RyYW5zZm9ybXMiLCJjc3N0cmFuc2Zvcm1zM2QiLCJjc3N0cmFuc2l0aW9ucyIsImZvbnRmYWNlIiwiaW1wbGVtZW50YXRpb24iLCJoYXNGZWF0dXJlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNoZWV0Iiwic3R5bGVTaGVldCIsImluc2VydFJ1bGUiLCJjc3NSdWxlcyIsImRlbGV0ZVJ1bGUiLCJyZXBsYWNlIiwidmlkZW8iLCJjYW5QbGF5VHlwZSIsIkJvb2xlYW4iLCJvZ2ciLCJoMjY0Iiwid2VibSIsImF1ZGlvIiwibXAzIiwid2F2IiwibTRhIiwibG9jYWxzdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25zdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJ3ZWJXb3JrZXJzIiwiV29ya2VyIiwiYXBwbGljYXRpb25jYWNoZSIsImFwcGxpY2F0aW9uQ2FjaGUiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVTVkdSZWN0IiwiaW5saW5lc3ZnIiwiaW5uZXJIVE1MIiwibmFtZXNwYWNlVVJJIiwic21pbCIsInN2Z2NsaXBwYXRocyIsIkgiLCJwdXNoIiwiY3Jvc3N3aW5kb3dtZXNzYWdpbmciLCJoaXN0b3J5bWFuYWdlbWVudCIsImFkZFRlc3QiLCJjbGFzc05hbWUiLCJhdHRhY2hFdmVudCIsImNoaWxkTm9kZXMiLCJtZWRpYSIsImltcG9ydHMiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic3R5bGVTaGVldHMiLCJib2R5IiwiZXhlYyIsIl9lbmFibGVIVE1MNSIsIl92ZXJzaW9uIiwidGhpcyIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiQUFDQUEsT0FBT0MsVUFBVSxTQUFTQyxFQUFFQyxFQUFFQyxHQUFHLFFBQVNDLEtBQUlDLEVBQUVDLE1BQU0sU0FBU0wsR0FBRyxJQUFJLEdBQUlDLEdBQUUsRUFBRUMsRUFBRUYsRUFBRU0sT0FBU0osRUFBRkQsRUFBSUEsSUFBSU0sRUFBRVAsRUFBRUMsT0FBT0QsRUFBRUMsSUFBS08sR0FBRyxPQUFPRCxJQUFHLGlGQUFpRkUsTUFBTSxNQUFNTCxFQUFFTSxXQUFXLFNBQVNWLEdBQUcsSUFBSSxHQUFRSSxHQUFFTyxFQUFFQyxFQUFSQyxFQUFFLEVBQVFDLEVBQUVkLEVBQUVNLE9BQVNRLEVBQUZELEVBQUlBLElBQUlMLEVBQUVPLGFBQWEsT0FBT0osRUFBRVgsRUFBRWEsSUFBSVQsRUFBVyxTQUFUSSxFQUFFUSxLQUFjWixJQUFJSSxFQUFFUyxNQUFNQyxFQUFFVixFQUFFVyxNQUFNQyxRQUFRLHVDQUF1QyxVQUFVQyxLQUFLVixJQUFJSCxFQUFFVyxNQUFNRyxtQkFBbUJwQixHQUFHcUIsRUFBRUMsWUFBWWhCLEdBQUdJLEVBQUVYLEVBQUV3QixZQUFZckIsRUFBRVEsRUFBRWMsa0JBQWdFLGNBQTlDZCxFQUFFYyxpQkFBaUJsQixFQUFFLE1BQU1jLGtCQUFpRCxJQUFqQmQsRUFBRW1CLGFBQWlCSixFQUFFSyxZQUFZcEIsSUFBSSxpQkFBaUJhLEtBQUtWLEtBQUssZ0JBQWdCVSxLQUFLVixHQUFHUCxFQUFFSSxFQUFFcUIsZUFBZXJCLEVBQUVxQixtQkFBa0IsRUFBRyxVQUFVUixLQUFLVixJQUFJWSxFQUFFQyxZQUFZaEIsR0FBR2UsRUFBRU8sWUFBWTFCLEVBQUVJLEVBQUVT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aWxlIjoibW9kZXJuaXpyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuaXpyIHYxLjcgIHd3dy5tb2Rlcm5penIuY29tXG53aW5kb3cuTW9kZXJuaXpyPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBHKCl7ZS5pbnB1dD1mdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2I8YztiKyspdFthW2JdXT0hIShhW2JdaW4gbCk7cmV0dXJuIHR9KFwiYXV0b2NvbXBsZXRlIGF1dG9mb2N1cyBsaXN0IHBsYWNlaG9sZGVyIG1heCBtaW4gbXVsdGlwbGUgcGF0dGVybiByZXF1aXJlZCBzdGVwXCIuc3BsaXQoXCIgXCIpKSxlLmlucHV0dHlwZXM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBkPTAsZSxmLGgsaT1hLmxlbmd0aDtkPGk7ZCsrKWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLGY9YVtkXSksZT1sLnR5cGUhPT1cInRleHRcIixlJiYobC52YWx1ZT1tLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3Zpc2liaWxpdHk6aGlkZGVuO1wiLC9ecmFuZ2UkLy50ZXN0KGYpJiZsLnN0eWxlLldlYmtpdEFwcGVhcmFuY2UhPT1jPyhnLmFwcGVuZENoaWxkKGwpLGg9Yi5kZWZhdWx0VmlldyxlPWguZ2V0Q29tcHV0ZWRTdHlsZSYmaC5nZXRDb21wdXRlZFN0eWxlKGwsbnVsbCkuV2Via2l0QXBwZWFyYW5jZSE9PVwidGV4dGZpZWxkXCImJmwub2Zmc2V0SGVpZ2h0IT09MCxnLnJlbW92ZUNoaWxkKGwpKTovXihzZWFyY2h8dGVsKSQvLnRlc3QoZil8fCgvXih1cmx8ZW1haWwpJC8udGVzdChmKT9lPWwuY2hlY2tWYWxpZGl0eSYmbC5jaGVja1ZhbGlkaXR5KCk9PT0hMTovXmNvbG9yJC8udGVzdChmKT8oZy5hcHBlbmRDaGlsZChsKSxnLm9mZnNldFdpZHRoLGU9bC52YWx1ZSE9bSxnLnJlbW92ZUNoaWxkKGwpKTplPWwudmFsdWUhPW0pKSxzW2FbZF1dPSEhZTtyZXR1cm4gc30oXCJzZWFyY2ggdGVsIHVybCBlbWFpbCBkYXRldGltZSBkYXRlIG1vbnRoIHdlZWsgdGltZSBkYXRldGltZS1sb2NhbCBudW1iZXIgcmFuZ2UgY29sb3JcIi5zcGxpdChcIiBcIikpfWZ1bmN0aW9uIEYoYSxiKXt2YXIgYz1hLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyKDEpLGQ9KGErXCIgXCIrcC5qb2luKGMrXCIgXCIpK2MpLnNwbGl0KFwiIFwiKTtyZXR1cm4hIUUoZCxiKX1mdW5jdGlvbiBFKGEsYil7Zm9yKHZhciBkIGluIGEpaWYoa1thW2RdXSE9PWMmJighYnx8YihhW2RdLGopKSlyZXR1cm4hMH1mdW5jdGlvbiBEKGEsYil7cmV0dXJuKFwiXCIrYSkuaW5kZXhPZihiKSE9PS0xfWZ1bmN0aW9uIEMoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PT1ifWZ1bmN0aW9uIEIoYSxiKXtyZXR1cm4gQShvLmpvaW4oYStcIjtcIikrKGJ8fFwiXCIpKX1mdW5jdGlvbiBBKGEpe2suY3NzVGV4dD1hfXZhciBkPVwiMS43XCIsZT17fSxmPSEwLGc9Yi5kb2N1bWVudEVsZW1lbnQsaD1iLmhlYWR8fGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLGk9XCJtb2Rlcm5penJcIixqPWIuY3JlYXRlRWxlbWVudChpKSxrPWouc3R5bGUsbD1iLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxtPVwiOilcIixuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbz1cIiAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAta2h0bWwtIFwiLnNwbGl0KFwiIFwiKSxwPVwiV2Via2l0IE1veiBPIG1zIEtodG1sXCIuc3BsaXQoXCIgXCIpLHE9e3N2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9LHI9e30scz17fSx0PXt9LHU9W10sdix3PWZ1bmN0aW9uKGEpe3ZhciBjPWIuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLGQ9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU7Yy50ZXh0Q29udGVudD1hK1wieyNtb2Rlcm5penJ7aGVpZ2h0OjNweH19XCIsaC5hcHBlbmRDaGlsZChjKSxkLmlkPVwibW9kZXJuaXpyXCIsZy5hcHBlbmRDaGlsZChkKSxlPWQub2Zmc2V0SGVpZ2h0PT09MyxjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpO3JldHVybiEhZX0seD1mdW5jdGlvbigpe2Z1bmN0aW9uIGQoZCxlKXtlPWV8fGIuY3JlYXRlRWxlbWVudChhW2RdfHxcImRpdlwiKTt2YXIgZj0oZD1cIm9uXCIrZClpbiBlO2Z8fChlLnNldEF0dHJpYnV0ZXx8KGU9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxlLnNldEF0dHJpYnV0ZSYmZS5yZW1vdmVBdHRyaWJ1dGUmJihlLnNldEF0dHJpYnV0ZShkLFwiXCIpLGY9QyhlW2RdLFwiZnVuY3Rpb25cIiksQyhlW2RdLGMpfHwoZVtkXT1jKSxlLnJlbW92ZUF0dHJpYnV0ZShkKSkpLGU9bnVsbDtyZXR1cm4gZn12YXIgYT17c2VsZWN0OlwiaW5wdXRcIixjaGFuZ2U6XCJpbnB1dFwiLHN1Ym1pdDpcImZvcm1cIixyZXNldDpcImZvcm1cIixlcnJvcjpcImltZ1wiLGxvYWQ6XCJpbWdcIixhYm9ydDpcImltZ1wifTtyZXR1cm4gZH0oKSx5PSh7fSkuaGFzT3duUHJvcGVydHksejtDKHksYyl8fEMoeS5jYWxsLGMpP3o9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYiBpbiBhJiZDKGEuY29uc3RydWN0b3IucHJvdG90eXBlW2JdLGMpfTp6PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHkuY2FsbChhLGIpfSxyLmZsZXhib3g9ZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGEsYixjLGQpe2Euc3R5bGUuY3NzVGV4dD1vLmpvaW4oYitcIjpcIitjK1wiO1wiKSsoZHx8XCJcIil9ZnVuY3Rpb24gYShhLGIsYyxkKXtiKz1cIjpcIixhLnN0eWxlLmNzc1RleHQ9KGIrby5qb2luKGMrXCI7XCIrYikpLnNsaWNlKDAsLWIubGVuZ3RoKSsoZHx8XCJcIil9dmFyIGQ9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EoZCxcImRpc3BsYXlcIixcImJveFwiLFwid2lkdGg6NDJweDtwYWRkaW5nOjA7XCIpLGMoZSxcImJveC1mbGV4XCIsXCIxXCIsXCJ3aWR0aDoxMHB4O1wiKSxkLmFwcGVuZENoaWxkKGUpLGcuYXBwZW5kQ2hpbGQoZCk7dmFyIGY9ZS5vZmZzZXRXaWR0aD09PTQyO2QucmVtb3ZlQ2hpbGQoZSksZy5yZW1vdmVDaGlsZChkKTtyZXR1cm4gZn0sci5jYW52YXM9ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cmV0dXJuIGEuZ2V0Q29udGV4dCYmYS5nZXRDb250ZXh0KFwiMmRcIil9LHIuY2FudmFzdGV4dD1mdW5jdGlvbigpe3JldHVybiBlLmNhbnZhcyYmQyhiLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpLmZpbGxUZXh0LFwiZnVuY3Rpb25cIil9LHIud2ViZ2w9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuV2ViR0xSZW5kZXJpbmdDb250ZXh0fSxyLnRvdWNoPWZ1bmN0aW9uKCl7cmV0dXJuXCJvbnRvdWNoc3RhcnRcImluIGF8fHcoXCJAbWVkaWEgKFwiK28uam9pbihcInRvdWNoLWVuYWJsZWQpLChcIikrXCJtb2Rlcm5penIpXCIpfSxyLmdlb2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuISFuYXZpZ2F0b3IuZ2VvbG9jYXRpb259LHIucG9zdG1lc3NhZ2U9ZnVuY3Rpb24oKXtyZXR1cm4hIWEucG9zdE1lc3NhZ2V9LHIud2Vic3FsZGF0YWJhc2U9ZnVuY3Rpb24oKXt2YXIgYj0hIWEub3BlbkRhdGFiYXNlO3JldHVybiBifSxyLmluZGV4ZWREQj1mdW5jdGlvbigpe2Zvcih2YXIgYj0tMSxjPXAubGVuZ3RoOysrYjxjOyl7dmFyIGQ9cFtiXS50b0xvd2VyQ2FzZSgpO2lmKGFbZCtcIl9pbmRleGVkREJcIl18fGFbZCtcIkluZGV4ZWREQlwiXSlyZXR1cm4hMH1yZXR1cm4hMX0sci5oYXNoY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuIHgoXCJoYXNoY2hhbmdlXCIsYSkmJihiLmRvY3VtZW50TW9kZT09PWN8fGIuZG9jdW1lbnRNb2RlPjcpfSxyLmhpc3Rvcnk9ZnVuY3Rpb24oKXtyZXR1cm4gISEoYS5oaXN0b3J5JiZoaXN0b3J5LnB1c2hTdGF0ZSl9LHIuZHJhZ2FuZGRyb3A9ZnVuY3Rpb24oKXtyZXR1cm4geChcImRyYWdzdGFydFwiKSYmeChcImRyb3BcIil9LHIud2Vic29ja2V0cz1mdW5jdGlvbigpe3JldHVyblwiV2ViU29ja2V0XCJpbiBhfSxyLnJnYmE9ZnVuY3Rpb24oKXtBKFwiYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1MCwyNTUsMTUwLC41KVwiKTtyZXR1cm4gRChrLmJhY2tncm91bmRDb2xvcixcInJnYmFcIil9LHIuaHNsYT1mdW5jdGlvbigpe0EoXCJiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMTIwLDQwJSwxMDAlLC41KVwiKTtyZXR1cm4gRChrLmJhY2tncm91bmRDb2xvcixcInJnYmFcIil8fEQoay5iYWNrZ3JvdW5kQ29sb3IsXCJoc2xhXCIpfSxyLm11bHRpcGxlYmdzPWZ1bmN0aW9uKCl7QShcImJhY2tncm91bmQ6dXJsKC8vOiksdXJsKC8vOikscmVkIHVybCgvLzopXCIpO3JldHVybihuZXcgUmVnRXhwKFwiKHVybFxcXFxzKlxcXFwoLio/KXszfVwiKSkudGVzdChrLmJhY2tncm91bmQpfSxyLmJhY2tncm91bmRzaXplPWZ1bmN0aW9uKCl7cmV0dXJuIEYoXCJiYWNrZ3JvdW5kU2l6ZVwiKX0sci5ib3JkZXJpbWFnZT1mdW5jdGlvbigpe3JldHVybiBGKFwiYm9yZGVySW1hZ2VcIil9LHIuYm9yZGVycmFkaXVzPWZ1bmN0aW9uKCl7cmV0dXJuIEYoXCJib3JkZXJSYWRpdXNcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJvcmRlclJhZGl1c1wiKX0pfSxyLmJveHNoYWRvdz1mdW5jdGlvbigpe3JldHVybiBGKFwiYm94U2hhZG93XCIpfSxyLnRleHRzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLnRleHRTaGFkb3c9PT1cIlwifSxyLm9wYWNpdHk9ZnVuY3Rpb24oKXtCKFwib3BhY2l0eTouNTVcIik7cmV0dXJuL14wLjU1JC8udGVzdChrLm9wYWNpdHkpfSxyLmNzc2FuaW1hdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gRihcImFuaW1hdGlvbk5hbWVcIil9LHIuY3NzY29sdW1ucz1mdW5jdGlvbigpe3JldHVybiBGKFwiY29sdW1uQ291bnRcIil9LHIuY3NzZ3JhZGllbnRzPWZ1bmN0aW9uKCl7dmFyIGE9XCJiYWNrZ3JvdW5kLWltYWdlOlwiLGI9XCJncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgYm90dG9tLGZyb20oIzlmOSksdG8od2hpdGUpKTtcIixjPVwibGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCM5ZjksIHdoaXRlKTtcIjtBKChhK28uam9pbihiK2EpK28uam9pbihjK2EpKS5zbGljZSgwLC1hLmxlbmd0aCkpO3JldHVybiBEKGsuYmFja2dyb3VuZEltYWdlLFwiZ3JhZGllbnRcIil9LHIuY3NzcmVmbGVjdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gRihcImJveFJlZmxlY3RcIil9LHIuY3NzdHJhbnNmb3Jtcz1mdW5jdGlvbigpe3JldHVybiEhRShbXCJ0cmFuc2Zvcm1Qcm9wZXJ0eVwiLFwiV2Via2l0VHJhbnNmb3JtXCIsXCJNb3pUcmFuc2Zvcm1cIixcIk9UcmFuc2Zvcm1cIixcIm1zVHJhbnNmb3JtXCJdKX0sci5jc3N0cmFuc2Zvcm1zM2Q9ZnVuY3Rpb24oKXt2YXIgYT0hIUUoW1wicGVyc3BlY3RpdmVQcm9wZXJ0eVwiLFwiV2Via2l0UGVyc3BlY3RpdmVcIixcIk1velBlcnNwZWN0aXZlXCIsXCJPUGVyc3BlY3RpdmVcIixcIm1zUGVyc3BlY3RpdmVcIl0pO2EmJlwid2Via2l0UGVyc3BlY3RpdmVcImluIGcuc3R5bGUmJihhPXcoXCJAbWVkaWEgKFwiK28uam9pbihcInRyYW5zZm9ybS0zZCksKFwiKStcIm1vZGVybml6cilcIikpO3JldHVybiBhfSxyLmNzc3RyYW5zaXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEYoXCJ0cmFuc2l0aW9uUHJvcGVydHlcIil9LHIuZm9udGZhY2U9ZnVuY3Rpb24oKXt2YXIgYSxjLGQ9aHx8ZyxlPWIuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLGY9Yi5pbXBsZW1lbnRhdGlvbnx8e2hhc0ZlYXR1cmU6ZnVuY3Rpb24oKXtyZXR1cm4hMX19O2UudHlwZT1cInRleHQvY3NzXCIsZC5pbnNlcnRCZWZvcmUoZSxkLmZpcnN0Q2hpbGQpLGE9ZS5zaGVldHx8ZS5zdHlsZVNoZWV0O3ZhciBpPWYuaGFzRmVhdHVyZShcIkNTUzJcIixcIlwiKT9mdW5jdGlvbihiKXtpZighYXx8IWIpcmV0dXJuITE7dmFyIGM9ITE7dHJ5e2EuaW5zZXJ0UnVsZShiLDApLGM9L3NyYy9pLnRlc3QoYS5jc3NSdWxlc1swXS5jc3NUZXh0KSxhLmRlbGV0ZVJ1bGUoYS5jc3NSdWxlcy5sZW5ndGgtMSl9Y2F0Y2goZCl7fXJldHVybiBjfTpmdW5jdGlvbihiKXtpZighYXx8IWIpcmV0dXJuITE7YS5jc3NUZXh0PWI7cmV0dXJuIGEuY3NzVGV4dC5sZW5ndGghPT0wJiYvc3JjL2kudGVzdChhLmNzc1RleHQpJiZhLmNzc1RleHQucmVwbGFjZSgvXFxyK3xcXG4rL2csXCJcIikuaW5kZXhPZihiLnNwbGl0KFwiIFwiKVswXSk9PT0wfTtjPWkoJ0Bmb250LWZhY2UgeyBmb250LWZhbWlseTogXCJmb250XCI7IHNyYzogdXJsKGRhdGE6LCk7IH0nKSxkLnJlbW92ZUNoaWxkKGUpO3JldHVybiBjfSxyLnZpZGVvPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwidmlkZW9cIiksYz0hIWEuY2FuUGxheVR5cGU7aWYoYyl7Yz1uZXcgQm9vbGVhbihjKSxjLm9nZz1hLmNhblBsYXlUeXBlKCd2aWRlby9vZ2c7IGNvZGVjcz1cInRoZW9yYVwiJyk7dmFyIGQ9J3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS40MkUwMUUnO2MuaDI2ND1hLmNhblBsYXlUeXBlKGQrJ1wiJyl8fGEuY2FuUGxheVR5cGUoZCsnLCBtcDRhLjQwLjJcIicpLGMud2VibT1hLmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDgsIHZvcmJpc1wiJyl9cmV0dXJuIGN9LHIuYXVkaW89ZnVuY3Rpb24oKXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSxjPSEhYS5jYW5QbGF5VHlwZTtjJiYoYz1uZXcgQm9vbGVhbihjKSxjLm9nZz1hLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJyksYy5tcDM9YS5jYW5QbGF5VHlwZShcImF1ZGlvL21wZWc7XCIpLGMud2F2PWEuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJyksYy5tNGE9YS5jYW5QbGF5VHlwZShcImF1ZGlvL3gtbTRhO1wiKXx8YS5jYW5QbGF5VHlwZShcImF1ZGlvL2FhYztcIikpO3JldHVybiBjfSxyLmxvY2Fsc3RvcmFnZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4hIWxvY2FsU3RvcmFnZS5nZXRJdGVtfWNhdGNoKGEpe3JldHVybiExfX0sci5zZXNzaW9uc3RvcmFnZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4hIXNlc3Npb25TdG9yYWdlLmdldEl0ZW19Y2F0Y2goYSl7cmV0dXJuITF9fSxyLndlYldvcmtlcnM9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuV29ya2VyfSxyLmFwcGxpY2F0aW9uY2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuYXBwbGljYXRpb25DYWNoZX0sci5zdmc9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYhIWIuY3JlYXRlRWxlbWVudE5TKHEuc3ZnLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3R9LHIuaW5saW5lc3ZnPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuaW5uZXJIVE1MPVwiPHN2Zy8+XCI7cmV0dXJuKGEuZmlyc3RDaGlsZCYmYS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSk9PXEuc3ZnfSxyLnNtaWw9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYvU1ZHLy50ZXN0KG4uY2FsbChiLmNyZWF0ZUVsZW1lbnROUyhxLnN2ZyxcImFuaW1hdGVcIikpKX0sci5zdmdjbGlwcGF0aHM9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYvU1ZHLy50ZXN0KG4uY2FsbChiLmNyZWF0ZUVsZW1lbnROUyhxLnN2ZyxcImNsaXBQYXRoXCIpKSl9O2Zvcih2YXIgSCBpbiByKXoocixIKSYmKHY9SC50b0xvd2VyQ2FzZSgpLGVbdl09cltIXSgpLHUucHVzaCgoZVt2XT9cIlwiOlwibm8tXCIpK3YpKTtlLmlucHV0fHxHKCksZS5jcm9zc3dpbmRvd21lc3NhZ2luZz1lLnBvc3RtZXNzYWdlLGUuaGlzdG9yeW1hbmFnZW1lbnQ9ZS5oaXN0b3J5LGUuYWRkVGVzdD1mdW5jdGlvbihhLGIpe2E9YS50b0xvd2VyQ2FzZSgpO2lmKCFlW2FdKXtiPSEhYigpLGcuY2xhc3NOYW1lKz1cIiBcIisoYj9cIlwiOlwibm8tXCIpK2EsZVthXT1iO3JldHVybiBlfX0sQShcIlwiKSxqPWw9bnVsbCxmJiZhLmF0dGFjaEV2ZW50JiZmdW5jdGlvbigpe3ZhciBhPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmlubmVySFRNTD1cIjxlbGVtPjwvZWxlbT5cIjtyZXR1cm4gYS5jaGlsZE5vZGVzLmxlbmd0aCE9PTF9KCkmJmZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gcChhLGIpe3ZhciBjPS0xLGQ9YS5sZW5ndGgsZSxmPVtdO3doaWxlKCsrYzxkKWU9YVtjXSwoYj1lLm1lZGlhfHxiKSE9XCJzY3JlZW5cIiYmZi5wdXNoKHAoZS5pbXBvcnRzLGIpLGUuY3NzVGV4dCk7cmV0dXJuIGYuam9pbihcIlwiKX1mdW5jdGlvbiBvKGEpe3ZhciBiPS0xO3doaWxlKCsrYjxlKWEuY3JlYXRlRWxlbWVudChkW2JdKX12YXIgYz1cImFiYnJ8YXJ0aWNsZXxhc2lkZXxhdWRpb3xjYW52YXN8ZGV0YWlsc3xmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8aGVhZGVyfGhncm91cHxtYXJrfG1ldGVyfG5hdnxvdXRwdXR8cHJvZ3Jlc3N8c2VjdGlvbnxzdW1tYXJ5fHRpbWV8dmlkZW9cIixkPWMuc3BsaXQoXCJ8XCIpLGU9ZC5sZW5ndGgsZj1uZXcgUmVnRXhwKFwiKF58XFxcXHMpKFwiK2MrXCIpXCIsXCJnaVwiKSxnPW5ldyBSZWdFeHAoXCI8KC8qKShcIitjK1wiKVwiLFwiZ2lcIiksaD1uZXcgUmVnRXhwKFwiKF58W15cXFxcbl0qP1xcXFxzKShcIitjK1wiKShbXlxcXFxuXSopKHtbXFxcXG5cXFxcd1xcXFxXXSo/fSlcIixcImdpXCIpLGk9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksaj1iLmRvY3VtZW50RWxlbWVudCxrPWouZmlyc3RDaGlsZCxsPWIuY3JlYXRlRWxlbWVudChcImJvZHlcIiksbT1iLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxuO28oYiksbyhpKSxrLmluc2VydEJlZm9yZShtLGsuZmlyc3RDaGlsZCksbS5tZWRpYT1cInByaW50XCIsYS5hdHRhY2hFdmVudChcIm9uYmVmb3JlcHJpbnRcIixmdW5jdGlvbigpe3ZhciBhPS0xLGM9cChiLnN0eWxlU2hlZXRzLFwiYWxsXCIpLGs9W10sbztuPW58fGIuYm9keTt3aGlsZSgobz1oLmV4ZWMoYykpIT1udWxsKWsucHVzaCgob1sxXStvWzJdK29bM10pLnJlcGxhY2UoZixcIiQxLmllcHBfJDJcIikrb1s0XSk7bS5zdHlsZVNoZWV0LmNzc1RleHQ9ay5qb2luKFwiXFxuXCIpO3doaWxlKCsrYTxlKXt2YXIgcT1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGRbYV0pLHI9cS5sZW5ndGgscz0tMTt3aGlsZSgrK3M8cilxW3NdLmNsYXNzTmFtZS5pbmRleE9mKFwiaWVwcF9cIik8MCYmKHFbc10uY2xhc3NOYW1lKz1cIiBpZXBwX1wiK2RbYV0pfWkuYXBwZW5kQ2hpbGQobiksai5hcHBlbmRDaGlsZChsKSxsLmNsYXNzTmFtZT1uLmNsYXNzTmFtZSxsLmlubmVySFRNTD1uLmlubmVySFRNTC5yZXBsYWNlKGcsXCI8JDFmb250XCIpfSksYS5hdHRhY2hFdmVudChcIm9uYWZ0ZXJwcmludFwiLGZ1bmN0aW9uKCl7bC5pbm5lckhUTUw9XCJcIixqLnJlbW92ZUNoaWxkKGwpLGouYXBwZW5kQ2hpbGQobiksbS5zdHlsZVNoZWV0LmNzc1RleHQ9XCJcIn0pfShhLGIpLGUuX2VuYWJsZUhUTUw1PWYsZS5fdmVyc2lvbj1kLGcuY2xhc3NOYW1lPWcuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYm5vLWpzXFxiLyxcIlwiKStcIiBqcyBcIit1LmpvaW4oXCIgXCIpO3JldHVybiBlfSh0aGlzLHRoaXMuZG9jdW1lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
