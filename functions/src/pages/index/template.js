import Handlebars from "handlebars/runtime.js";export default Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "Hello worlds\r\n<button>\r\n  "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.title : stack1), depth0))
    + " hello\r\n</button>\r\nHey\r\n<br/>\r\n<a href=\"/?query=1\">Test</a><br/>\r\n<a href=\"/login\">Login</a><br/>\r\n<a href=\"/authorized\">Authorized</a>\r\n";
},"useData":true});