
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Pessoa_Motorista"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.Pessoa_MotoristaRow))]
    public class Pessoa_MotoristaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Pessoa_Motorista/Pessoa_MotoristaIndex.cshtml");
        }
    }
}