
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Pessoa_Cliente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.Pessoa_ClienteRow))]
    public class Pessoa_ClienteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Pessoa_Cliente/Pessoa_ClienteIndex.cshtml");
        }
    }
}