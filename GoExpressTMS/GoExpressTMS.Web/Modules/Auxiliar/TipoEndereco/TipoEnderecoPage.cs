
namespace GoExpressTMS.Auxiliar.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Auxiliar/TipoEndereco"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipoEnderecoRow))]
    public class TipoEnderecoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Auxiliar/TipoEndereco/TipoEnderecoIndex.cshtml");
        }
    }
}