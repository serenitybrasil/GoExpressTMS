
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Pessoa_Colaborador"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.Pessoa_ColaboradorRow))]
    public class Pessoa_ColaboradorController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Pessoa_Colaborador/Pessoa_ColaboradorIndex.cshtml");
        }
    }
}