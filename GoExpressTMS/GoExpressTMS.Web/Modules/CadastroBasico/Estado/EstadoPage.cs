
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Estado"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EstadoRow))]
    public class EstadoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Estado/EstadoIndex.cshtml");
        }
    }
}