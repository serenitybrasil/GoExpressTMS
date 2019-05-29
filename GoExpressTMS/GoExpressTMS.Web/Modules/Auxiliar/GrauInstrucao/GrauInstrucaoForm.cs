
namespace GoExpressTMS.Auxiliar.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Auxiliar.GrauInstrucao")]
    [BasedOnRow(typeof(Entities.GrauInstrucaoRow), CheckNames = true)]
    public class GrauInstrucaoForm
    {
        public String Descricao { get; set; }
    }
}