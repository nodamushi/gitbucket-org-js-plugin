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
  
  $doc.find('img').each(function(){
    var $this = $(this);
    var src= $this.attr('src');
    if(!(src.startsWith("http://") ||src.startsWith("https://") ||
         src.startsWith("ftp://") || src.startsWith("file://") )){
      if(src.startsWith("file:")){
        $this.attr('src',src.substr(5,src.length)+"?raw=true");
      }else{
        $this.attr('src',src+"?raw=true");
      }
    }
  });
  $doc.find('a').each(function(){
    var $this = $(this);
    var src = $this.attr('href');
    if(src.startsWith("file:") &&! src.startsWith("file://") ){
      $this.attr('href',src.substr(5,src.length));
    }
  });
  
  if(PR)PR.prettyPrint();
});
