
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Cidade"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CidadeRow))]
    public class CidadeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Cidade/CidadeIndex.cshtml");
        }
    }
}