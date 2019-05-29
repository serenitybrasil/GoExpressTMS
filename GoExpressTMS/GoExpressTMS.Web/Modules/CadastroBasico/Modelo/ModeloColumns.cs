
namespace GoExpressTMS.CadastroBasico.Columns
{
    using GoExpressTMS.CadastroBasico.Entities;
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Modelo")]
    [BasedOnRow(typeof(Entities.ModeloRow), CheckNames = true)]
    public class ModeloColumns
    {
        [Hidden, LookupEditor(typeof(FabricanteRow)), QuickFilter(CssClass = "hidden-xs")]
        public Int32 VeiculoFabricanteId { get; set; }

        public String VeiculoFabricanteNome { get; set; }
        [EditLink]
        public String Nome { get; set; }
    }
}