
namespace GoExpressTMS.Auxiliar.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Auxiliar/TipoTelefone"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipoTelefoneRow))]
    public class TipoTelefoneController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Auxiliar/TipoTelefone/TipoTelefoneIndex.cshtml");
        }
    }
}