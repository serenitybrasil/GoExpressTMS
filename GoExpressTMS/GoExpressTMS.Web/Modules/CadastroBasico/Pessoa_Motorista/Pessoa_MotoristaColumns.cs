
namespace GoExpressTMS.CadastroBasico.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Pessoa_Motorista")]
    [BasedOnRow(typeof(Entities.Pessoa_MotoristaRow), CheckNames = true)]
    public class Pessoa_MotoristaColumns
    {
        //[TipoPessoaEditor]
        //public String TipoPessoa { get; set; }

        [EditLink, Width(220)]
        public String Nome { get; set; }

        [Width(120)]
        public String Cpf { get; set; }

        [Hidden]
        public String RgNumero { get; set; }

        [Hidden]
        public DateTime DataNascimento { get; set; }

        [Hidden]
        public DateTime DataCadastro { get; set; }

        [Hidden]
        public String Filiacao01 { get; set; }

        [Hidden]
        public String Filiacao02 { get; set; }

        [Hidden]
        public Int32 RgOrgaoEmissor { get; set; }

        [Hidden]
        public Int32 RgUfEmissor { get; set; }

        [Hidden]
        public String TituloEleitorNumero { get; set; }

        [Hidden]
        public String TituloEleitorZona { get; set; }

        [Hidden]
        public String TituloEleitorSecao { get; set; }

        [Hidden]
        public String Pis { get; set; }

        [Hidden]
        public String CnhNumero { get; set; }

        [Hidden]
        public String CnhTipo { get; set; }

        [Hidden]
        public DateTime CnhEmissao { get; set; }

        [Hidden]
        public DateTime CnhValidade { get; set; }

        [Hidden]
        public Int32 EstadoCivil { get; set; }

        [Hidden]
        [QuickFilter(CssClass = "hidden-xs")]
        public String Sexo { get; set; }

        [Hidden]
        [LookupEditor(typeof(Auxiliar.Entities.GrauInstrucaoRow), InplaceAdd = false), QuickFilter(CssClass = "hidden-xs")]
        public Int32 GrauInstrucao { get; set; }

        [Hidden]
        [LookupEditor(typeof(Entities.PaisRow), InplaceAdd = false), QuickFilter(CssClass = "hidden-xs")]
        public Int32 Nacionalidade { get; set; }

        [Hidden]
        [LookupEditor(typeof(Entities.EstadoRow), InplaceAdd = false), QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "Nacionalidade")]
        public Int32 EstadoNascimento { get; set; }

        [Hidden]
        [LookupEditor(typeof(Entities.CidadeRow), InplaceAdd = false), QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "EstadoNascimento")]
        public Int32 Naturalidade { get; set; }
    }
}