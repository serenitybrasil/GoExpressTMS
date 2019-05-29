
namespace GoExpressTMS.CadastroBasico.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Fabricante")]
    [BasedOnRow(typeof(Entities.FabricanteRow), CheckNames = true)]
    public class FabricanteColumns
    {
        [EditLink, Width(350)]
        public String Nome { get; set; }
    }
}