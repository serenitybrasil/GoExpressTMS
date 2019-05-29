
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("CadastroBasico.Pessoa_Cliente")]
    [BasedOnRow(typeof(Entities.Pessoa_ClienteRow), CheckNames = true)]
    public class Pessoa_ClienteForm
    {
        [OneThirdWidth]
        public String TipoPessoa { get; set; }

        [FormCssClass("line-break-lg"), HalfWidth]
        public String Nome { get; set; }

        [HalfWidth]
        public String RazaoSocial { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public DateTime DataCadastro { get; set; }

        [FormCssClass("line-break-lg")]
        [OneThirdWidth]
        public String Sexo { get; set; }

        [OneThirdWidth]
        public DateTime DataNascimento { get; set; }

        [OneThirdWidth]
        public Int32 EstadoCivil { get; set; }

        [FormCssClass("line-break-lg"), HalfWidth, Placeholder("Ex: Nome do pai")]
        public String Filiacao01 { get; set; }

        [HalfWidth, Placeholder("Ex: Nome da mãe")]
        public String Filiacao02 { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public Int32 Nacionalidade { get; set; }

        [OneThirdWidth]
        public Int32 EstadoNascimento { get; set; }

        [OneThirdWidth]
        public Int32 Naturalidade { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public String Cnpj { get; set; }

        [OneThirdWidth]
        public String InscEstadual { get; set; }

        [OneThirdWidth]
        public String InscMunicipal { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public String Cpf { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public String RgNumero { get; set; }

        [OneThirdWidth]
        public Int32 RgOrgaoEmissor { get; set; }

        [OneThirdWidth]
        public Int32 RgUfEmissor { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public String TituloEleitorNumero { get; set; }

        [OneThirdWidth]
        public String TituloEleitorZona { get; set; }

        [OneThirdWidth]
        public String TituloEleitorSecao { get; set; }

        [FormCssClass("line-break-lg"), OneThirdWidth]
        public String Pis { get; set; }

        [FormCssClass("line-break-lg"), CssClass("col-sm-4")]
        public String CnhNumero { get; set; }

        [CssClass("col-sm-2"), LabelWidth(40)]
        public String CnhTipo { get; set; }

        [CssClass("col-sm-3"), LabelWidth(60)]
        public DateTime CnhEmissao { get; set; }

        [CssClass("col-sm-3"), LabelWidth(60)]
        public DateTime CnhValidade { get; set; }

        [FormCssClass("line-break-lg"), HalfWidth, ResetLabelWidth]
        public Int32 GrauInstrucao { get; set; }
    }
}