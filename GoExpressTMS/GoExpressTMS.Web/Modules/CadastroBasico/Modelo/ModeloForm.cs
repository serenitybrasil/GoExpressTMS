
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CadastroBasico.Modelo")]
    [BasedOnRow(typeof(Entities.ModeloRow), CheckNames = true)]
    public class ModeloForm
    {
        public Int32 VeiculoFabricanteId { get; set; }
        public String Nome { get; set; }
    }
}