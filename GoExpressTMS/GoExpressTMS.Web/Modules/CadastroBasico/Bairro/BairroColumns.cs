
namespace GoExpressTMS.CadastroBasico.Columns
{
    using GoExpressTMS.CadastroBasico.Entities;
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Bairro")]
    [BasedOnRow(typeof(Entities.BairroRow), CheckNames = true)]
    public class BairroColumns
    {
        [EditLink, Width(350)]
        public String Nome { get; set; }
        public String CidadeNome { get; set; }

        [Hidden, LookupEditor(typeof(EstadoRow)), QuickFilter(CssClass = "hidden-xs")]
        public Int32 EstadoId { get; set; }

        [Hidden, LookupEditor(typeof(CidadeRow)), QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "EstadoId")]
        public Int32 CidadeId { get; set; }
    }
}