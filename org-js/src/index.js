$(function(){
  var org = require("org");
  var parser = new org.Parser();
  var $doc = $("#org-document");
  var orgDocument = parser.parse($doc.text());
  var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
    headerOffset: 1,
    exportFromLineNumber: false,
    suppressSubScriptHandling: false,
    suppressAutoLink: false
  });
  $doc.html(orgHTMLDocument.contentHTML);
  if(PR)PR.prettyPrint();
});
