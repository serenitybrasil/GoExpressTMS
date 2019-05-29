
namespace GoExpressTMS.Auxiliar.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Auxiliar.TipoEndereco")]
    [BasedOnRow(typeof(Entities.TipoEnderecoRow), CheckNames = true)]
    public class TipoEnderecoForm
    {
        public String Descricao { get; set; }
    }
}