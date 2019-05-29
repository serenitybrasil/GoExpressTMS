
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CadastroBasico.Cidade")]
    [BasedOnRow(typeof(Entities.CidadeRow), CheckNames = true)]
    public class CidadeForm
    {
        public String Nome { get; set; }
        public Int32 EstadoId { get; set; }
        public Int32 Ibge { get; set; }
    }
}