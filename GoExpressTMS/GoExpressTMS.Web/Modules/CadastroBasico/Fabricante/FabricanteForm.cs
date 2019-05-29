
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CadastroBasico.Fabricante")]
    [BasedOnRow(typeof(Entities.FabricanteRow), CheckNames = true)]
    public class FabricanteForm
    {
        public String Nome { get; set; }
    }
}