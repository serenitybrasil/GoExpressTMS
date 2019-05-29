
namespace GoExpressTMS.CadastroBasico.Columns
{
    using GoExpressTMS.CadastroBasico.Entities;
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Cep")]
    [BasedOnRow(typeof(Entities.CepRow), CheckNames = true)]
    public class CepColumns
    {
        [EditLink, Width(75)]
        public String Cep { get; set; }

        [Width(250), SortOrder(1)]
        public String Logradouro { get; set; }

        [Width(130), Hidden]
        public String PaisNome { get; set; }

        [Width(130)]
        public String EstadoNome { get; set; }

        [Width(200)]
        public String CidadeNome { get; set; }

        [Width(250)]
        public String BairroNome { get; set; }

        [Hidden]
        [QuickFilter, LookupEditor(typeof(PaisRow), AutoComplete = true)]
        public String PaisId { get; set; }

        [Hidden]
        [QuickFilter, LookupEditor(typeof(EstadoRow), AutoComplete = true), QuickFilterOption("cascadeFrom", "PaisId")]
        public String EstadoId { get; set; }

        [Hidden]
        [QuickFilter, LookupEditor(typeof(CidadeRow), AutoComplete = true), QuickFilterOption("cascadeFrom", "EstadoId")]
        public String CidadeId { get; set; }

        [Hidden]
        [QuickFilter, LookupEditor(typeof(BairroRow), AutoComplete = true), QuickFilterOption("cascadeFrom", "CidadeId")]
        public String BairroId { get; set; }
    }
}