
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Cep"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CepRow))]
    public class CepController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Cep/CepIndex.cshtml");
        }
    }
}