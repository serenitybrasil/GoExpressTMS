
namespace GoExpressTMS.CadastroBasico.Columns
{
    using GoExpressTMS.CadastroBasico.Entities;
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Cidade")]
    [BasedOnRow(typeof(Entities.CidadeRow), CheckNames = true)]
    public class CidadeColumns
    {
        [Hidden, LookupEditor(typeof(EstadoRow)), QuickFilter(CssClass = "hidden-xs")]
        public Int32? EstadoId { get; set; }

        [SortOrder(1), Width(130)]
        public String EstadoNome { get; set; }

        [EditLink, Width(190), SortOrder(2)]
        public String Nome { get; set; }
    }
}