
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Bairro"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BairroRow))]
    public class BairroController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Bairro/BairroIndex.cshtml");
        }
    }
}