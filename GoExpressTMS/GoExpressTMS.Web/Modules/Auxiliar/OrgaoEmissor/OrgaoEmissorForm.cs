
namespace GoExpressTMS.Auxiliar.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Auxiliar.OrgaoEmissor")]
    [BasedOnRow(typeof(Entities.OrgaoEmissorRow), CheckNames = true)]
    public class OrgaoEmissorForm
    {
        public String Nome { get; set; }
    }
}