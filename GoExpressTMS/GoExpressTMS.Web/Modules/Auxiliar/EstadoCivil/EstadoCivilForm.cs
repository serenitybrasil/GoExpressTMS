
namespace GoExpressTMS.Auxiliar.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Auxiliar.EstadoCivil")]
    [BasedOnRow(typeof(Entities.EstadoCivilRow), CheckNames = true)]
    public class EstadoCivilForm
    {
        public String Descricao { get; set; }
    }
}