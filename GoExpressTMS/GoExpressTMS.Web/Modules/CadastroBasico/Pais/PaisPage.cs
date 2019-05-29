
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Pais"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PaisRow))]
    public class PaisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Pais/PaisIndex.cshtml");
        }
    }
}