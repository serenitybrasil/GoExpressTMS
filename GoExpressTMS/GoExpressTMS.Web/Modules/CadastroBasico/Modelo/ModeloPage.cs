
namespace GoExpressTMS.CadastroBasico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CadastroBasico/Modelo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ModeloRow))]
    public class ModeloController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CadastroBasico/Modelo/ModeloIndex.cshtml");
        }
    }
}