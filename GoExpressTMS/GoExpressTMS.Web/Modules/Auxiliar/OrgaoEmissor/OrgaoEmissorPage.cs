
namespace GoExpressTMS.Auxiliar.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Auxiliar/OrgaoEmissor"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrgaoEmissorRow))]
    public class OrgaoEmissorController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Auxiliar/OrgaoEmissor/OrgaoEmissorIndex.cshtml");
        }
    }
}