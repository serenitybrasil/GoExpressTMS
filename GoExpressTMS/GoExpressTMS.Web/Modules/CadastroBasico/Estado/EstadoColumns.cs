
namespace GoExpressTMS.CadastroBasico.Columns
{
    using GoExpressTMS.CadastroBasico.Entities;
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Estado")]
    [BasedOnRow(typeof(Entities.EstadoRow), CheckNames = true)]
    public class EstadoColumns
    {
        [Hidden, Width(130), LookupEditor(typeof(PaisRow)), QuickFilter(CssClass = "hidden-xs")]
        public Int32 PaisId { get; set; }

        [Hidden, Width(161)]
        public String PaisNome { get; set; }

        [EditLink, Width(200)]
        public String Nome { get; set; }

        [Width(60)]
        public String Uf { get; set; }

        [Width(80)]
        public Int32 Ibge { get; set; }

        [Width(140)]
        public String Ddd { get; set; }
    }
}