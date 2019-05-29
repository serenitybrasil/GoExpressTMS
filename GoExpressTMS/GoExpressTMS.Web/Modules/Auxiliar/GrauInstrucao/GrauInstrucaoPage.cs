
namespace GoExpressTMS.Auxiliar.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Auxiliar/GrauInstrucao"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GrauInstrucaoRow))]
    public class GrauInstrucaoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Auxiliar/GrauInstrucao/GrauInstrucaoIndex.cshtml");
        }
    }
}