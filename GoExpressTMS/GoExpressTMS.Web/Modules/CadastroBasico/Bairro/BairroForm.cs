
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CadastroBasico.Bairro")]
    [BasedOnRow(typeof(Entities.BairroRow), CheckNames = true)]
    public class BairroForm
    {
        public String Nome { get; set; }
        public Int32 CidadeId { get; set; }
    }
}