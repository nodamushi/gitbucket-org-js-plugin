import gitbucket.core.plugin.Renderer
import io.github.gitbucket.solidbase.model.Version
import io.github.nodamushi.gitbucket.plugins.orgjs.OrgJsRenderer

class Plugin extends gitbucket.core.plugin.Plugin {
  override val pluginId: String = "org_js"
  override val pluginName: String = "org-js Render Plugin"
  override val description: String = "Renders org-mode with org-js"
  override val versions: List[Version] = List(
    new Version("1.0.0")
  )

  override val assetsMappings: Seq[(String, String)] = Seq("/org_js"->"/org_js")
  override val renderers: Seq[(String, Renderer)] = Seq("org"->new OrgJsRenderer)
}
