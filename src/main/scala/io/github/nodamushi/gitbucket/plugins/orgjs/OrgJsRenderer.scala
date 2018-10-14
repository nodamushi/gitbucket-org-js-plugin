package io.github.nodamushi.gitbucket.plugins.orgjs
import gitbucket.core.plugin.{RenderRequest, Renderer}
import play.twirl.api.{Html, HtmlFormat}

class OrgJsRenderer extends  Renderer {



  override def render(request: RenderRequest): Html = {
    val script = s"""
                     |<script type="text/javascript">(function(){
                     |  var link = document.createElement('link');
                     |  link.href = '${request.context.path}/plugin-assets/org_js/style.css';
                     |  link.rel = 'stylesheet';link.type = 'text/css';
                     |  var head = document.getElementsByTagName('head')[0];
                     |  head.appendChild(link);
                     |})();</script>
                     |<script src="${request.context.path}/plugin-assets/org_js/bundle.js" type="text/javascript"></script>
                     |""".stripMargin
    new Html(scala.collection.immutable.Seq(
      Html(script),
      Html("""<div id="org-document">"""),
      HtmlFormat.escape(request.fileContent),
      Html("</div>"))
    )
  }

}
