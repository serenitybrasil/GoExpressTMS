
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CadastroBasico.Pais")]
    [BasedOnRow(typeof(Entities.PaisRow), CheckNames = true)]
    public class PaisForm
    {
        public String Nome { get; set; }
        public String Sigla { get; set; }
        public String NomeInternacional { get; set; }
        public Int32 Bacen { get; set; }
        public String Nacionalidade { get; set; }
    }
}