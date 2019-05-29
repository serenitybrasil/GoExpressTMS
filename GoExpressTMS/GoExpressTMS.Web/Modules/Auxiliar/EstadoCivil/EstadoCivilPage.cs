
namespace GoExpressTMS.Auxiliar.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Auxiliar/EstadoCivil"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EstadoCivilRow))]
    public class EstadoCivilController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Auxiliar/EstadoCivil/EstadoCivilIndex.cshtml");
        }
    }
}