
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Fabricante"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FabricanteRow))]
    public class FabricanteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Fabricante/FabricanteIndex.cshtml");
        }
    }
}