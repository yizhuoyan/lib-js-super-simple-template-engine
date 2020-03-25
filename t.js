(function(){
  var cache = {};
  this.t = function t(str, vo){
    var fn = !/\W/.test(str) ?
	cache[str]=cache[str]||t(document.getElementById(str).innerHTML)
	:new Function("o", "var p=[];with(o){p.push('"
        +str.replace(/[\r\t\n]+/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/{{(.*?)}}/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")
		+"');}return p.join('');");
    return vo?fn(vo):fn;
  }
})();