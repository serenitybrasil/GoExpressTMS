
namespace GoExpressTMS.Auxiliar.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Auxiliar.TipoTelefone")]
    [BasedOnRow(typeof(Entities.TipoTelefoneRow), CheckNames = true)]
    public class TipoTelefoneForm
    {
        public String Descricao { get; set; }
    }
}