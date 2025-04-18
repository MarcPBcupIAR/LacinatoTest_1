/*

Lacinato WebABX/Shootouter
Version 1.61

http://lacinato.com/webabx

Copyright 2015, 2016 Casey Connor, All Rights Reserved.

This SOFTWARE PRODUCT is provided by THE PROVIDER "as is" and "with all faults." THE PROVIDER makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of this SOFTWARE PRODUCT. There are inherent dangers in the use of any software, and you are solely responsible for determining whether this SOFTWARE PRODUCT is compatible with your equipment and other software installed on your equipment. You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing this SOFTWARE PRODUCT.

Please see http://lacinato.com/webabx for licensing costs and related information.

*/

function aa(a){var b=d(a);if(b){var c=q.states[b];if(r(b))if(1>=c.b.length)alert(q.needTwoFilesABXError);else{if(0==c.v){if(!r(b)){t(b);return}u(c);c.v=!0;w(b,c)}var e;if(0==c.C){x();if(!r(b)){t(b);return}c.C=!0;c.u=Math.floor(Math.random()*c.b.length);c.s[c.s.length]=c.u;c.L=c.u;e=!0;document.getElementById(a).innerHTML=q.inABXText}else{if(c.D&&y(c.b[c.u])){x();return}x();if(!r(b)){t(b);return}e=!0}e&&(c.D=!0,z(document.getElementById(a)),A(b,c.b[c.u]))}else t(b)}}

function B(a){(a=d(a))&&C(a,q.states[a])}function A(a,b){if(b.currentTime/b.duration>q.atEndThreshold)b.currentTime=0;else{var c=document.getElementById(a+"_pp");b.currentTime=c.value/c.max*b.duration}b.play()}function r(a){var b,c;b=q.states[a].b;if(!b)return!0;for(var e=0;e<b.length;e++)if(b[e])if(q.states[a].dataset.requireAllAudio){if(c=b[e].buffered,1!=c.length||b[e].duration-(c.end(0)-c.start(0))>q.canPlayGapThreshold)return!1}else if(4!=b[e].readyState)return!1;return!0}

function t(a){var b=document.getElementById(a+"_asl");b.className=b.className.replace(q.audioLoadingErrorClass+"_disabled",q.audioLoadingErrorClass+"_enabled");setTimeout(function(a,b){return function(){b.className=b.className.replace(q.audioLoadingErrorClass+"_enabled",q.audioLoadingErrorClass+"_disabled")}}(a,b),3E3)}

function D(a){if(a=d(a)){var b=q.states[a];b.H=!b.H;w(a,b);"shootout"==b.i&&E(a,b)}}

function F(a,b){b.h=G(a);for(var c=b.h,e=[],f=0;f<c.length;f++)e[f]=1;b.A=e;H(a,b)}

function E(a,b){var c,e,f;if(b.w||b.j&&!b.H)for(var g=0;g<b.b.length;g++)c=document.getElementById(a+"_fl"+g),e=document.getElementById(a+"_nd"+g),f=document.getElementById(a+"_grd"+g),c.innerHTML=String.fromCharCode(65+g)+":",e.innerHTML=q.hiddenNameText,b.dataset.noVolumeControls||(f.style.display="none");else for(var h,m,g=0;g<b.b.length;g++)c=document.getElementById(a+"_fl"+g),e=document.getElementById(a+"_nd"+g),f=document.getElementById(a+"_grd"+g),h=document.getElementById(a+"_gr"+g),m=document.getElementById(a+
"_gri"+g),c.innerHTML=String.fromCharCode(65+parseInt(g))+":",0<b.a.length?(e.innerHTML=I(a,b,parseInt(b.a[g])),c=document.getElementById(a+"_pl"+parseInt(b.a[g]))):(e.innerHTML=I(a,b,g),c=document.getElementById(a+"_pl"+g)),b.dataset.noVolumeControls||(h.value=c.volume*h.max,m.style.opacity=c.volume,f.style.display="")}

function I(a,b,c,e){if("fileset"===b.K){if(void 0===e||null===e){e=document.getElementById(a+"_nd"+c);if(void 0===e||null===e)return;e=e.getAttribute("data-xml-file-id")}if(void 0===b.f[e]||null===b.f[e])return;(a=b.f[e][1])||(a=b.f[e][0])}else(a=b.dataset["file"+(c+1)+"DisplayName"])||(a=b.dataset["file"+(c+1)+"Path"]);return a}

function C(a,b){x();b.v?(u(b),document.getElementById(a+"_xsb").innerHTML=q.startABXText):b.j&&(u(b),document.getElementById(a+"_xsb").innerHTML=q.startShootoutText,E(a,b),J(document.getElementById(a+"_xsb")));w(a,b)}

function w(a,b){var c=document.getElementById(a+"_rsb");if(c){if(b.H){c.innerHTML=q.hideResultsText;z(c);var e=c=document.getElementById(a+"_rd"),f=b.G,g=b.g,h=1/b.b.length;for(total=0;f<=g;f++)total+=Math.exp((0==f||f==g?0:f>g||0>f?-1E38:K(g)-K(f)-K(g-f))+f*Math.log(h)+(g-f)*Math.log(1-h));b.confidence=1-total;g="";if(b.v){g+="<p>Number Correct: "+b.G+" of "+b.g+" ( "+(0<b.g?(b.G/b.g*100).toFixed(3):"0.000")+"%)</p><p>Confidence results are better than chance: "+(100*b.confidence).toFixed(3)+"%</p><p>Last trial was: "+
(0<b.g?document.getElementById(a+"_nd"+b.L).innerHTML:"(none yet)")+"</p>";if(0>=b.c.length)h="";else{h="<p>&nbsp;</p><p>Trial history (choice/actual):</p><p>";for(f=0;f<b.c.length;f++)h+=String.fromCharCode(65+b.c[f])+"/"+String.fromCharCode(65+b.s[f]),f+1<b.c.length&&(h+=" : ");h+="</p>"}g+=h}else if(b.j){h=Array(b.b.length+1).join("0").split("").map(parseFloat);for(f=0;f<b.c.length;f++)h[b.c[f]]+=1;for(f=0;f<b.b.length;f++)g+="<p>"+h[f]+" time"+(1!=h[f]?"s - (":" - (")+(0==b.g?"0.000":(100*h[f]/
b.g).toFixed(3))+"%) you chose "+I(a,b,f)+"</p>";if(0>=b.c.length)h="";else for(h="<p>&nbsp;</p><p>Shootout history:</p>",f=0;f<b.c.length;f++)h+="<p>#"+(f+1)+": "+I(a,b,b.c[f])+"</p>";g+=h}else g=q.noResultsText;e.innerHTML=g;c.className=c.className.replace(q.appprefix+"results_hidden",q.appprefix+"results_visible")}else c.innerHTML=q.showResultsText,J(c),c=document.getElementById(a+"_rd"),c.innerHTML=q.resultsHiddenText,c.className=c.className.replace(q.appprefix+"results_visible",q.appprefix+"results_hidden");
document.getElementById(a+"_tcv").innerHTML=b.g}}

function K(a){1>=a&&(a=1);if(12>a){for(var b=Math.round(a),c=1;1<b;)c*=b--;return Math.log(c)}var b=1/a,c=b*b,e=c*b,f=e*c;a=(a+.5)*Math.log(a)-a;a+=Math.log(2*Math.PI)/2;return a+(b/12-e/360)+(f/1260-f*c/1680)}

function x(){for(var a=Object.keys(q.states),b,c=0;c<a.length;c++){q.states[a[c]].D=!1;b=q.states[a[c]].b;for(var e=0;e<b.length;e++)b[e].pause();b=document.getElementById(a[c]+"_pp");q.states[a[c]].B=b.value}L()}

function L(){for(var a=document.getElementsByClassName(q.appprefix+"playstop_button"),b=0;b<a.length;b++)J(a[b]);a=document.getElementsByClassName(q.appprefix+"abxstart_button");for(b=0;b<a.length;b++)J(a[b])}

function y(a){return!a.paused&&!a.ended&&0<a.currentTime}

function M(a,b){return a[0]+"_"+b+a[1]}

function d(a){if((a=/^(.+)_.*/.exec(a))&&1<a.length&&a[1])return a[1]}

function N(a){a=/^(.+)_[^0-9]+([0-9]+)[^0-9]*/.exec(a);if(void 0!==a&&null!==a&&0<a.length)return[a[1],a[2]]}

function z(a){a.className=a.className.replace(q.btnClass+"_disabled",q.btnClass+"_enabled")}

function J(a){a.className=a.className.replace(q.btnClass+"_enabled",q.btnClass+"_disabled")}

function H(a,b){for(var c=document.getElementById(a+"_plsw");c.firstChild;)c.removeChild(c.firstChild);b.b=[];b.m=void 0;for(var e=0;e<b.h.length;e++)O(c,a,e,b.h.length,"compare"!=b.i,!0,b.f[b.h[e]][0],b.h[e],b.f[b.h[e]][2],b.A[e])}
function P(a,b){for(var c=[],e=document.getElementsByClassName(a+"_menu"),f=0,g=!0,h=0;h<e.length;h++)e[h].value&&b.o[e[h].name]&&e[h].value!==q.anyOptionText.toLowerCase().trim()&&(g=!1,c[f++]=[].concat.apply([],b.o[e[h].name][e[h].value]));g&&(c[0]=Object.keys(b.f));e=[];if(0>=c.length)e=[];else if(1==c.length)e=c[0];else{var f=c[0],m,h=0;for(;h<f.length;h++){g=f[h];m=!0;var k=1;b:for(;k<c.length;k++){var n=0;for(;n<c[k].length;n++)if(c[k][n]===g)continue b;m=!1;break b}m&&(e[e.length]=g)}}e=e.sort();
0<b.I&&e.length>b.I&&(e=e.splice(0,b.I),alert(q.maxFilesErrorText));ba(a,b,e)}

function G(a){a=document.getElementById(a+"_mrms").firstChild;for(var b=[];a;)a.selected&&(b[b.length]=parseInt(a.getAttribute("value"))),a=a.nextSibling;return b}

function ba(a,b,c){for(var e=document.getElementById(a+"_mrms"),f;e.firstChild;)e.removeChild(e.firstChild);for(var g=0;g<c.length;g++)f=document.createElement("option"),f.id=a+"_opt"+g,f.className=q.appprefix+"menu_results_option",f.setAttribute("value",c[g]),f.setAttribute("selected",!0),f.appendChild(document.createTextNode(b.f[c[g]][1]?b.f[c[g]][1]:b.f[c[g]][0])),f.addEventListener("mouseover",function(){var a=this.value,b=N(this.id);if(b){var c=q.states[b[0]];0!=Object.keys(c.l).length&&Q(b[0],
c,a)}}),e.appendChild(f)}

function R(a){return Math.floor(a/60)+":"+("0"+(a-60*Math.floor(a/60)).toFixed(2)).slice(-5)}

function S(a){if(a=d(a)){var b=document.getElementById(a+"_pp");if(b){var c;a:{c=q.states[a].b;for(i=0;i<c.length;i++)if(y(c[i])){c=c[i];break a}c=void 0}var e;c||(e=q.states[a].b[0]);if(e||c)e=b.value/b.max*(c?c.duration:e.duration),c?(c.currentTime=b.value/b.max*c.duration,document.getElementById(a+"_ppt").innerHTML=R(c.currentTime)):(q.states[a].B=b.value,document.getElementById(a+"_ppt").innerHTML=R(e))}}}

function T(a,b){var c=d(a);if(c){var e=document.getElementById(c+"_lb"),f=document.getElementById(c+"_rb");document.getElementById(c+"_pp")&&e&&f&&(lval=Number(e.value),rval=Number(f.value),lmin=Number(e.min),rmax=Number(f.max),b?rval<=lval&&(lval+.1>rmax?(f.value=rmax,e.value=rmax-.1):f.value=lval+.1):lval>=rval&&(rval-.1<lmin?(e.value=lmin,f.value=lmin+.1):e.value=rval-.1))}}

function U(a){if(a=N(a)){var b=q.states[a[0]],c,e=document.getElementById(M(a,"gr")),f=document.getElementById(M(a,"gri"));0<b.a.length?(c=document.getElementById(a[0]+"_pl"+parseInt(b.a[a[1]])))&&e&&(c.volume=e.value/e.max,f.style.opacity=c.volume,b.A[parseInt(b.a[a[1]])]=c.volume):(c=document.getElementById(M(a,"pl")))&&e&&(c.volume=e.value/e.max,f.style.opacity=c.volume,b.A[a[1]]=c.volume)}}

function V(a,b){var c=(new Date).getTime();b?r(a)?(document.getElementById(a+"_lpw").className=q.appprefix+"load_progress_wrap "+q.appprefix+"load_progress_wrap_disabled",q.states[a].m=void 0):(c-q.states[a].m>q.showLoadingProgressThreshold&&(document.getElementById(a+"_lpw").className=q.appprefix+"load_progress_wrap "+q.appprefix+"load_progress_wrap_enabled"),c-q.states[a].m>1E3*q.chromeBugTimeout&&-1<navigator.userAgent.toLowerCase().indexOf("chrome")&&(document.getElementById(a+"_lpt").innerHTML=
q.loadProgressText+"<br/>"+q.chromeBugError),setTimeout(function(a){return function(){V(a,!0)}}(a),q.playerCheckFreq)):c-q.states[a].M>q.playerCheckFreq&&(q.states[a].M=c,r(a)?(document.getElementById(a+"_lpw").className=q.appprefix+"load_progress_wrap "+q.appprefix+"load_progress_wrap_disabled",q.states[a].m=void 0):c-q.states[a].m>q.showLoadingProgressThreshold&&(document.getElementById(a+"_lpw").className=q.appprefix+"load_progress_wrap "+q.appprefix+"load_progress_wrap_enabled"))}
function Q(a,b,c){if(void 0!==b.f[c]&&null!==b.f[c]&&(c=b.f[c][3],void 0!==c&&null!==c)){for(var e,f,g=[],h=0;h<c.length;h++)e=c[h][0],f=b.l[e],void 0!==f&&null!==f&&null!==f[c[h][1]]&&W(a,e,f[c[h][1]])&&g.push(e);ca(a,b,g)}}

function W(a,b,c){if(void 0===c)return!1;a=document.getElementById(a+"_"+b+"_preview_image");if(void 0===a||null===a)return!1;for(var e=!1,f=0;f<a.childNodes.length;f++)if(b=a.childNodes[f].className,void 0!==b&&null!==b)if(b===q.appprefix+"preview_image")a.childNodes[f].style.backgroundImage="url('"+c[0]+"')",e=!0;else if(b===q.appprefix+"preview_image_caption"){for(;a.childNodes[f].firstChild;)a.childNodes[f].removeChild(a.childNodes[f].firstChild);a.childNodes[f].appendChild(document.createTextNode(c[1]));
e=!0}return e}
function ca(a,b,c){for(var e,f=0;f<b.J.length;f++){e=!1;for(var g=0;g<c.length;g++)e|=b.J[f]===c[g];if(!e&&(e=document.getElementById(a+"_"+b.J[f]+"_preview_image"),void 0!==e&&null!==e))for(var h=0;h<e.childNodes.length;h++)if(g=e.childNodes[h].className,void 0!==g&&null!==g)if(g===q.appprefix+"preview_image")e.childNodes[h].style.backgroundImage="initial";else if(g===q.appprefix+"preview_image_caption"){for(;e.childNodes[h].firstChild;)e.childNodes[h].removeChild(e.childNodes[h].firstChild);e.childNodes[h].appendChild(document.createTextNode(""))}}}

function O(a,b,c,e,f,g,h,m,k,n){void 0===n&&(n=1);var p=q.states[b],l=document.createElement("div");l.id=b+"_pl"+c+"w";l.className=q.appprefix+"player_wrap "+(6>e?q.appprefix+"player_wrap_evenrow":q.appprefix+(1==c%2?"player_wrap_oddrow":"player_wrap_evenrow"));a.appendChild(l);a=document.createElement("div");a.id=b+"_psb"+c;a.className=q.appprefix+"playstop_button "+q.appprefix+"button_disabled "+q.btnClass;a.addEventListener("click",function(){var a=N(this.id);if(a){var b=q.states[a[0]],c=a[1];
0<b.a.length&&(c=b.a[c]);var c=document.getElementById(a[0]+"_pl"+c),e=document.getElementById(M(a,"psb"));c&&(!b.D&&y(c)?x():(x(),r(a[0])?(0>b.B?c.play():A(a[0],c),z(e)):t(a[0])))}});l.appendChild(a);a=document.createElement("div");a.id=b+"_fl"+c;a.className=q.appprefix+"filelabel";a.appendChild(document.createTextNode(String.fromCharCode(65+c)+":"));l.appendChild(a);a=document.createElement("div");a.id=b+"_nd"+c;a.className=q.appprefix+"filename";a.addEventListener("mouseover",function(){var a=
N(this.id);if(a){var b=q.states[a[0]];if(0!=Object.keys(b.l).length&&!b.j){var c=document.getElementById(a[0]+"_nd"+(0<b.a.length?b.a[a[1]]:a[1]));void 0!==c&&null!==c&&(c=c.getAttribute("data-xml-file-id"),Q(a[0],b,c))}}});0<=m&&a.setAttribute("data-xml-file-id",m);a.appendChild(document.createTextNode(I(b,p,c,m)));l.appendChild(a);g&&(g=document.createElement("div"),g.id=b+"_xb"+c,g.className=q.appprefix+"x_button "+q.appprefix+"button_disabled "+q.btnClass,g.addEventListener("click",function(){var a=
N(this.id);if(a){var b=a[0],c=q.states[a[0]];C(b,c);var a=a[1],e=document.getElementById(b+"_plsw");if(document.getElementById(b+"_pl"+a+"w")&&e){if(0<c.a.length){for(var e=a=c.a[a],f=c.a,g=[],h=0;h<f.length;h++)f[h]<e?g[g.length]=f[h]:f[h]>e&&(g[g.length]=f[h]-1);c.a=g}e=c.A;c.h.splice(a,1);e.splice(a,1);H(b,c);0<c.a.length&&E(b,c)}}}),l.appendChild(g));f&&(f=document.createElement("div"),f.id=b+"_cb"+c,f.className=q.appprefix+"choose_button "+q.appprefix+"button_disabled "+q.btnClass,f.appendChild(document.createTextNode("choose")),
f.addEventListener("click",function(){var a=N(this.id);if(a){var b=q.states[a[0]];if("abx"==b.i)b.v?b.C?(x(),b.g++,b.c[b.c.length]=parseInt(a[1]),b.C=!1,b.s[b.s.length-1]==a[1]&&b.G++,w(a[0],b),document.getElementById(a[0]+"_xsb").innerHTML=q.nextABXText):alert(q.notInABXTestError):alert(q.notInABXSeriesError);else if("shootout"==b.i)if(b.j)if(b.w){x();b.g++;b.w=!1;var c=a[1];0<b.a.length&&(c=b.a[c]);b.c[b.c.length]=parseInt(c);w(a[0],b);E(a[0],b);document.getElementById(a[0]+"_xsb").innerHTML=q.nextShootoutText}else alert(q.notInShootoutTestError);
else alert(q.notInShootoutSeriesError)}}),l.appendChild(f));p.dataset.noVolumeControls||(f=document.createElement("div"),f.id=b+"_grd"+c,f.className=q.appprefix+"gain_wrap",g=document.createElement("input"),g.id=b+"_gr"+c,g.className=q.appprefix+"gain_slider "+q.appprefix+"slider",g.type="range",g.min=0,g.max=1E4,g.step="any",g.value=n*g.max,g.addEventListener("input",function(){U(this.id)},!0),g.addEventListener("change",function(){U(this.id)},!0),f.appendChild(g),g=document.createElement("div"),
g.id=b+"_gri"+c,g.className=q.appprefix+"gain_icon",g.style.opacity=n,f.appendChild(g),l.appendChild(f));f=document.createElement("div");f.id=b+"_pl"+c+"d";f.className=q.appprefix+"audio_wrap";l.appendChild(f);l=document.createElement("audio");l.id=b+"_pl"+c;l.className=q.appprefix+"player";g=h?h:p.dataset["file"+(c+1)+"Path"];-1!==g.trim().toLowerCase().indexOf("wav",g.length-3)&&(l.canPlayType("audio/wav")||(h&&k?g=k:p.dataset["file"+(c+1)+"Path2"]&&(g=p.dataset["file"+(c+1)+"Path2"])));0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")?
l.src=g:da(l,g);l.O="auto";l.addEventListener("timeupdate",function(){var a=N(this.id);if(a){var b=document.getElementById(a[0]+"_pp"),c=document.getElementById(a[0]+"_lb"),e=document.getElementById(a[0]+"_rb"),f=document.getElementById(M(a,"pl"));if(f&&b){var g=f.currentTime/f.duration*b.max;if(c&&e){var h=(new Date).getTime();300<h-q.lastBoundsSet&&(g<Number(c.value)?(f.currentTime=c.value/c.max*f.duration,g=c.value,q.lastBoundsSet=h):g>Number(e.value)&&(y(f)&&!q.states[a[0]].F&&x(),f.currentTime=
c.value/c.max*f.duration,g=c.value,q.lastBoundsSet=h))}b.value=g;q.states[a[0]].B=g;document.getElementById(a[0]+"_ppt").innerHTML=R(f.currentTime)}}},!0);l.addEventListener("pause",function(){var a=N(this.id);if(a){var b=document.getElementById(M(a,"pl"));b&&b.ended&&(L(),b.currentTime=0,q.states[a[0]].B=0)}},!0);l.addEventListener("progress",function(a){return function(){V(a)}}(b));l.loop=!0;l.volume=n;f.appendChild(l);p.m||(p.m=(new Date).getTime(),setTimeout(function(a){return function(){V(a,
!0)}}(b),q.showLoadingProgressThreshold+11));p.b[p.b.length]=l}

function da(a,b){var c=new XMLHttpRequest;c.open("GET",b);c.onreadystatechange=function(){4==this.readyState&&200==this.status&&(a.src=window.URL.createObjectURL(c.response))};c.responseType="blob";c.send()}

function X(a,b){var c=document.createElement("div");c.id=a.id+"_pr";c.className=q.appprefix+"playranges_wrap";a.appendChild(c);var e=document.createElement("div");e.id=a.id+"_ppd";e.className=q.appprefix+"play_position_slider_wrap "+q.appprefix+"ranges_slider_wrap";var f=document.createElement("div");f.id=a.id+"_ppld";f.className=q.appprefix+"play_position_loop_div "+q.appprefix+"ranges_column_div";var g=document.createElement("div");g.id=a.id+"_ppt";g.className=q.appprefix+"play_position_text";g.appendChild(document.createTextNode(R(0)));
var h=document.createElement("div");h.id=a.id+"_lpb";h.className=q.appprefix+"loop_button "+q.appprefix+"button_enabled "+q.btnClass;h.addEventListener("click",function(){var a=d(this.id);if(a){var b=q.states[a];if((a=document.getElementById(a+"_lpb"))&&b){b.F=!b.F;for(i=0;i<b.b.length;i++)b.b[i].loop=b.F;b.F?z(a):J(a)}}});f.appendChild(h);f.appendChild(g);g=document.createElement("input");g.id=a.id+"_pp";g.className=q.appprefix+"play_position_slider "+q.appprefix+"range_slider "+q.appprefix+"slider";
g.type="range";g.min=0;g.max=1E4;g.step="any";g.value=0;g.addEventListener("input",function(){S(this.id)},!0);g.addEventListener("change",function(){S(this.id)},!0);e.appendChild(f);e.appendChild(g);c.appendChild(e);if(b){e=document.createElement("div");e.id=a.id+"_lbd";e.className=q.appprefix+"left_bounds_slider_wrap "+q.appprefix+"ranges_slider_wrap";f=document.createElement("div");f.id=a.id+"_lbtd";f.className=q.appprefix+"play_position_left_bounds_text_div "+q.appprefix+"ranges_column_div";f.appendChild(document.createTextNode(q.leftBoundsText));
g=document.createElement("input");g.id=a.id+"_lb";g.className=q.appprefix+"left_bounds_slider "+q.appprefix+"range_slider "+q.appprefix+"slider";g.type="range";g.min=0;g.max=1E4;g.step="any";g.value=0;g.addEventListener("input",function(){T(this.id,!0)},!0);g.addEventListener("change",function(){T(this.id,!0)},!0);h=document.createElement("div");h.id=a.id+"_rbd";h.className=q.appprefix+"right_bounds_slider_wrap "+q.appprefix+"ranges_slider_wrap";var m=document.createElement("div");m.id=a.id+"_lbtd";
m.className=q.appprefix+"play_position_right_bounds_text_div "+q.appprefix+"ranges_column_div";m.appendChild(document.createTextNode(q.rightBoundsText));var k=document.createElement("input");k.id=a.id+"_rb";k.className=q.appprefix+"right_bounds_slider "+q.appprefix+"range_slider "+q.appprefix+"slider";k.type="range";k.min=0;k.max=1E4;k.step="any";k.value=1E4;k.addEventListener("input",function(){T(this.id,!1)},!0);k.addEventListener("change",function(){T(this.id,!1)},!0);e.appendChild(f);e.appendChild(g);
h.appendChild(m);h.appendChild(k);c.appendChild(e);c.appendChild(h)}}

function ea(a){var b=q.states[a],c=q.fxmls[a];if(c&&4===c.readyState&&200===c.status)if(c.responseXML){for(var e=c.responseXML.getElementsByTagName("menu"),f=document.getElementById(a+"_msw"),g,h,m,k,n=0;n<e.length;n++)g=document.createElement("div"),g.id=a+"_mw"+n,g.className=q.appprefix+"menu_wrap",h=document.createElement("div"),h.id=a+"_mtd"+n,h.className=q.appprefix+"menu_title",h.innerHTML=e[n].textContent,m=document.createElement("select"),m.name=e[n].attributes.id.value.toLowerCase().trim(),
b.J.push(m.name),m.id=a+"_menu_"+m.name,m.className=q.appprefix+"tagselect "+a+"_menu",m.onchange=function(a){return function(){P(a,q.states[a])}}(a),k=document.createElement("option"),k.className=q.appprefix+"menuoption",k.selected=!0,k.value=q.anyOptionText,k.innerHTML=q.anyOptionText,m.appendChild(k),g.appendChild(h),g.appendChild(m),f.appendChild(g),e[n].attributes["default"]&&(b.N[e[n].getAttribute("id")]=e[n].attributes["default"].value.toLowerCase().trim());for(var f=c.responseXML.getElementsByTagName("file"),
p,l,v,n=0;n<f.length;n++){g=f[n].attributes;m=h=k=void 0;v=[];for(e=0;e<g.length;e++)"name"===g[e].name?k=g[e].value:"path"===g[e].name?h=g[e].value:"path2"===g[e].name?m=g[e].value:(p=g[e].name.toLowerCase().trim(),l=g[e].value,document.getElementById(a+"_menu_"+p)&&fa(p,document.getElementById(a+"_menu_"+p),l,b.N,a),l=l.toLowerCase().trim(),v[v.length]=[p,l]);if(h){for(e=0;e<v.length;e++)p=v[e][0],l=v[e][1],b.o[p]||(b.o[p]={}),b.o[p][l]||(b.o[p][l]=[]),ga(b.o[p][l],n);k||(k=h);b.f[n]=[h,k,m,v]}}c=
c.responseXML.getElementsByTagName("menuimages");for(n=0;n<c.length;n++)if(e=c[n],f=[],null!==e&&(g=e.getAttribute("id"),h=e.children,0!=h.length)){for(e=0;e<h.length;e++)m=h[e].getAttribute("key"),k=h[e].getAttribute("value"),p=h[e].textContent,void 0!==k&&null!==k&&(f[m.toLowerCase().trim()]=[k,p]);b.l[g]=f}P(a,q.states[a]);void 0!==b.dataset.noInitialBuffering&&!1!==b.dataset.noInitialBuffering&&"false"!==b.dataset.noInitialBuffering||F(a,b)}else document.getElementById(q.genericXMLError+" Error 1_msw").innerHTML=
"<B>undefined</B>"}

function ga(a,b){-1<a.indexOf(b)||(a[a.length]=b)}

function fa(a,b,c,e,f){for(var g=0,h=0;h<b.childNodes.length;h++){if(b.childNodes[h].value===c.toLowerCase().trim())return;if(ha(b.childNodes[h].value,c.toLowerCase().trim()))break;g++}h=document.createElement("option");h.className=q.appprefix+"menuoption";h.value=c.toLowerCase().trim();h.setAttribute("data-menu-id",a);h.innerHTML=c;h.id=f+"_menuopt";h.addEventListener("mouseover",function(){var a=this.getAttribute("data-menu-id"),b=this.value,c=d(this.id);if(c){var e=q.states[c];0!=Object.keys(e.l).length&&
void 0!==e.l[a]&&null!==e.l[a]&&W(c,a,e.l[a][b])&&ca(c,e,[a])}});g==b.childNodes.length?b.appendChild(h):b.insertBefore(h,b.childNodes[g]);h.value===e[a]&&(h.selected=!0)}

var ia=/^(\d+)/;

function ha(a,b){var c=ia.exec(a);if(null===c)return a>b;var e=ia.exec(b);return null===e?!1:parseInt(c[1])>parseInt(e[1])}

function Y(a,b,c){var e=0;a.className+=" "+q.appprefix+b.i;var f=document.createElement("div");f.id=a.id+"_asl";f.className=q.audioLoadingErrorClass+" "+q.audioLoadingErrorClass+"_disabled";f.appendChild(document.createTextNode(q.loadingAudioError));a.appendChild(f);f=document.createElement("div");f.id=a.id+"_lpw";f.className=q.appprefix+"load_progress_wrap "+q.appprefix+"load_progress_wrap_disabled";var g=document.createElement("div");g.id=a.id+"_lpt";g.className=q.appprefix+"load_progress_text";
g.appendChild(document.createTextNode(q.loadProgressText));var h=document.createElement("div");h.id=a.id+"_lpi";h.className=q.appprefix+"load_progress_icon";f.appendChild(g);f.appendChild(h);a.appendChild(f);void 0!=b.dataset.comparisonTitle&&null!=b.dataset.comparisonTitle&&""!==b.dataset.comparisonTitle.trim()&&(f=document.createElement("div"),f.id=a.id+"_ctl",f.className=q.appprefix+"comparison_title",f.appendChild(document.createTextNode(b.dataset.comparisonTitle)),a.appendChild(f));b.dataset.maxFileResults&&
(b.I=parseInt(b.dataset.maxFileResults));b.dataset.xmlFileSet&&(f=document.createElement("div"),f.id=a.id+"_msw",f.className=q.appprefix+"menus_wrap",a.appendChild(f),f=document.createElement("div"),f.id=a.id+"_mrsw",f.className=q.appprefix+"menu_results_wrap",g=document.createElement("div"),g.id=a.id+"_mrswt",g.className=q.appprefix+"menu_results_title",g.appendChild(document.createTextNode(q.menuResultsTitle)),f.appendChild(g),g=document.createElement("select"),g.id=c+"_mrms",g.className=q.appprefix+
"menu_results_multichoice",g.setAttribute("multiple","multiple"),f.appendChild(g),a.appendChild(f));b.dataset.xmlFileSet&&(f=document.createElement("div"),f.id=c+"_fbd",f.className=q.appprefix+"filter_buttons",g=document.createElement("div"),g.id=c+"_adb",g.className=q.appprefix+"add_button "+q.appprefix+"button_disabled "+q.btnClass,g.appendChild(document.createTextNode(q.addButtonText)),g.addEventListener("click",function(){var a=d(this.id);if(a){var b=q.states[a];C(a,b);for(var c=G(a),e=0;e<c.length;e++)-1!=
b.h.indexOf(c[e])&&(c.splice(e,1),e--);c=c.sort();if(0<c.length){for(e=c.length-1;0<=e;e--)b.h.unshift(c[e]),b.A.unshift(1);e=b.a;c=c.length;if(!(1>c||1>e.length)){for(var f=0;f<c;f++)e.unshift(f);for(f=0;f<c;f++)e[f]=f;for(f=c;f<e.length;f++)e[f]+=c}H(a,b);0<b.a.length&&E(a,b)}}}),h=document.createElement("div"),h.id=c+"_sb",h.className=q.appprefix+"search_button "+q.appprefix+"button_disabled "+q.btnClass,h.appendChild(document.createTextNode(q.searchButtonText)),h.addEventListener("click",function(){var a=
d(this.id);if(a){var b=q.states[a];C(a,b);b.a=[];F(a,b)}}),f.appendChild(g),f.appendChild(h),a.appendChild(f));f=document.createElement("div");f.id=a.id+"_plsw";f.className=q.appprefix+"players_wrap";a.appendChild(f);if(b.dataset.xmlFileSet)b.K="fileset",e=new XMLHttpRequest,a=b.dataset.xmlFileSet,b.dataset.appendTimestamp&&(a=-1!=a.indexOf("?")?a+"&ts=":a+"?ts=",a+=(new Date).getTime()),e.open("GET",a,!0),b.dataset.noCache&&(e.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2005 00:00:00 GMT"),
e.setRequestHeader("Pragma","no-cache"),e.setRequestHeader("Cache-Control","no-cache")),e.onload=function(a){return function(){ea(a)}}(c),e.onerror=function(a){return function(){document.getElementById(a+"_msw").innerHTML="<B>"+(q.genericXMLError+" Error 3")+"</B>"}}(c),q.fxmls[c]=e,e.send();else{b.K="dataset";a=Object.keys(b.dataset);for(g=0;g<a.length;g++)0===a[g].lastIndexOf("file",0)&&-1!=a[g].indexOf("Path",a[g].length-4)&&e++;for(g=0;g<e;g++)O(f,c,g,e,"compare"!=b.i,!1)}}

function ja(a){var b=q.states[a.id];b.i="abx";Y(a,b,a.id);X(a,"true"!==b.dataset.noBounds);b=document.createElement("div");b.id=a.id+"_cw";b.className=q.appprefix+"control_wrap";var c=document.createElement("div");c.id=a.id+"_xsb";c.className=q.appprefix+"abxstart_button "+q.appprefix+"button_disabled "+q.btnClass;c.appendChild(document.createTextNode(q.startABXText));c.addEventListener("click",function(){aa(this.id)});var e=document.createElement("div");e.id=a.id+"_rsb";e.className=q.appprefix+"results_button "+
q.appprefix+"button_disabled "+q.btnClass;e.appendChild(document.createTextNode(q.showResultsText));e.addEventListener("click",function(){D(this.id)});var f=document.createElement("div");f.id=a.id+"_rstb";f.className=q.appprefix+"reset_button "+q.appprefix+"button_disabled "+q.btnClass;f.appendChild(document.createTextNode(q.resetText));f.addEventListener("click",function(){B(this.id)});a.appendChild(b);b.appendChild(c);b.appendChild(e);b.appendChild(f);ka(a,q.initialResultsABXText);Z(a,a.id)}

function la(a){var b=q.states[a.id];b.i="shootout";Y(a,b,a.id);X(a,"true"!==b.dataset.noBounds);b=document.createElement("div");b.id=a.id+"_cw";b.className=q.appprefix+"control_wrap";var c=document.createElement("div");c.id=a.id+"_xsb";c.className=q.appprefix+"shootoutstart_button "+q.appprefix+"button_disabled "+q.btnClass;c.appendChild(document.createTextNode(q.startShootoutText));c.addEventListener("click",function(){var a=this.id,b=d(a);if(b){var c=q.states[b];if(r(b))if(1>=c.b.length)alert(q.needTwoFilesShootoutError);
else{0==c.j&&(u(c),c.j=!0,w(b,c));if(0==c.w){c.w=!0;x();c.a=Object.keys(c.b);for(var e=0;e<c.a.length;e++)c.a[e]=parseInt(c.a[e]);for(e=c.a.length-1;0<e;e--){var f=Math.floor(Math.random()*(e+1)),p=c.a[e];c.a[e]=c.a[f];c.a[f]=p}E(b,c);document.getElementById(a).innerHTML=q.inShootoutText}z(document.getElementById(a))}else t(b)}});var e=document.createElement("div");e.id=a.id+"_rsb";e.className=q.appprefix+"results_button "+q.appprefix+"button_disabled "+q.btnClass;e.appendChild(document.createTextNode(q.showResultsText));
e.addEventListener("click",function(){D(this.id)});var f=document.createElement("div");f.id=a.id+"_rstb";f.className=q.appprefix+"reset_button "+q.appprefix+"button_disabled "+q.btnClass;f.appendChild(document.createTextNode(q.resetText));f.addEventListener("click",function(){B(this.id)});a.appendChild(b);b.appendChild(c);b.appendChild(e);b.appendChild(f);ka(a,q.initialResultsShootoutText);Z(a,a.id)}

function ka(a,b){var c=document.createElement("div");c.id=a.id+"_rw";c.className=q.appprefix+"results_wrap";var e=document.createElement("div");e.id=a.id+"_tcw";e.className=q.appprefix+"tests_complete_wrap";var f=document.createElement("div");f.id=a.id+"_tcd";f.className=q.appprefix+"test_complete_text";f.appendChild(document.createTextNode("# Tests Completed:"));var g=document.createElement("div");g.id=a.id+"_tcv";g.className=q.appprefix+"test_complete_value";g.appendChild(document.createTextNode("0"));
e.appendChild(f);e.appendChild(g);f=document.createElement("div");f.id=a.id+"_rd";f.className=q.appprefix+"results webabx_results_hidden";f.appendChild(document.createTextNode(b));c.appendChild(e);c.appendChild(f);a.appendChild(c)}

function Z(a,b){var c=document.createElement("div");c.id=b+"_atw";c.className=q.appprefix+"attribution_wrap dont_hide_this_unless_a_paying_customer_thanks";var e=document.createElement("div");e.id=b+"_ati";e.className=q.appprefix+"attribution_icon dont_hide_this_unless_a_paying_customer_thanks";var f=document.createElement("div");f.id=b+"_att";f.className=q.appprefix+"attribution dont_hide_this_unless_a_paying_customer_thanks";f.innerHTML=q.attributionText;c.appendChild(e);c.appendChild(f);a.appendChild(c)}

function ma(){var a=document.getElementsByClassName("webabx_"+q.versiontag);na(document.getElementsByClassName("webabx"));na(a)}

function na(a){if(a){for(var b=0;b<a.length;b++){var c=q.states,e=a[b].id;mystate={i:"unset",dataset:a[b].dataset,K:"unset",o:{},f:[],h:[],A:[],l:[],I:-1,J:[],N:{},C:!1,v:!1,w:!1,j:!1,g:0,G:0,confidence:0,u:-1,L:-1,c:[],s:[],b:[],a:[],B:-1,F:!0,H:!1,D:!1,M:0};c[e]=mystate}for(b=0;b<a.length;b++)if(c=a[b])"compare"==a[b].dataset.comparisonType?(e=q.states[c.id],e.i="compare",Y(c,e,c.id),X(c,"true"!==e.dataset.noBounds),Z(c,c.id)):"abx"==a[b].dataset.comparisonType?ja(c):"shootout"==a[b].dataset.comparisonType?
la(c):a[b].innerHTML="Unrecognized comparison type: "+c.dataset.comparisonType}}

function u(a){a.C=!1;a.v=!1;a.w=!1;a.j=!1;a.g=0;a.G=0;a.confidence=0;a.u=-1;a.L=-1;a.c=[];a.s=[];a.H=!1;a.D=!1}

var q={versionstring:"1.61",versiontag:"1p61",states:{},fxmls:{},appprefix:"webabx_",appname:"Lacinato WebABX/Shootouter",appweblink:"http://lacinato.com/webabx"};

q.btnClass=q.appprefix+"button";
q.atEndThreshold=.995;
q.canPlayGapThreshold=1;
q.playerCheckFreq=500;
q.showLoadingProgressThreshold=1E3;
q.menuResultsTitle="Filter results (select the files that interest you):";
q.lastBoundsSet=new Date;
q.leftBoundsText="start time";
q.rightBoundsText="end time";
q.startABXText="Start ABX";
q.startShootoutText="Start Shootout";
q.inABXText="Play X";
q.inShootoutText="(in shootout)";
q.hiddenLabelText="-";
q.hiddenNameText="(shuffled)";
q.nextShootoutText="Next Shootout";
q.nextABXText="Next X";
q.showResultsText="Show Results";
q.hideResultsText="Hide Results";
q.resultsHiddenText="(results hidden)";
q.noResultsText="(no results to show)";
q.resetText="Reset";
q.addButtonText="Add";
q.searchButtonText="Only These";
q.notInABXSeriesError='You must start an ABX test before you can choose a file. Click "'+q.startABXText+'".';
q.needTwoFilesABXError="You need at least two files ready to play before starting an ABX test.";
q.needTwoFilesShootoutError="You need at least two files ready to play before starting a shootout.";
q.notInABXTestError='You must click "'+q.nextABXText+'" before you can choose the next file.';
q.notInShootoutSeriesError='You must start a shootout before you can choose a file. Click "'+q.startShootoutText+'".';
q.notInShootoutTestError='You must click "'+q.nextShootoutText+'" before you can choose the next file.';
q.initialResultsABXText='Click "'+q.startABXText+'" to start test.';q.initialResultsShootoutText='Click "'+q.startShootoutText+'" to start shootout.';
q.genericXMLError="There was a problem loading the audio files...";
q.maxFilesErrorText="Sorry -- some files will not be compared because too many were returned. Try narrowing your search options with the menus.";
q.anyOptionText="(any)";q.attributionText='Audio comparison by <a href="'+q.appweblink+'">'+q.appname+"</a>";q.loadProgressText="Buffering audio...";
q.loadingAudioError="Sorry -- not enough audio has downloaded yet. Please try again soon.";q.audioLoadingErrorClass=q.appprefix+"audio_loading_error";
q.chromeBugError="Note that a bug in Chrome causes failure when loading more than six files simultaneously. If buffering never stops, try reloading the page, or try another browser.";
q.chromeBugTimeout=10;

var oa=window.onload;
window.onload="function"!=typeof window.onload?ma:function(){oa();ma()};
