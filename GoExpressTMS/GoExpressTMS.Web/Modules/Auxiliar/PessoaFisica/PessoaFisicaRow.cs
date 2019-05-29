
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[PessoaFisica]")]
    public sealed class PessoaFisicaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pessoa Fisica Id"), Identity, PrimaryKey]
        public Int32? PessoaFisicaId
        {
            get { return Fields.PessoaFisicaId[this]; }
            set { Fields.PessoaFisicaId[this] = value; }
        }

        [DisplayName("Pessoa"), NotNull, ForeignKey("[dbo].[Pessoa]", "PessoaId"), LeftJoin("jPessoa"), Column("PessoaId"), TextualField("PessoaNome")]
        public Int32? PessoaId
        {
            get { return Fields.PessoaId[this]; }
            set { Fields.PessoaId[this] = value; }
        }


        [DisplayName("Nascimento")]
        public DateTime? DataNascimento
        {
            get { return Fields.DataNascimento[this]; }
            set { Fields.DataNascimento[this] = value; }
        }


        [DisplayName("Nome do Pai"), Size(128)]
        public String Filiacao01
        {
            get { return Fields.Filiacao01[this]; }
            set { Fields.Filiacao01[this] = value; }
        }


        [DisplayName("Nome da Mãe"), Size(128)]
        public String Filiacao02
        {
            get { return Fields.Filiacao02[this]; }
            set { Fields.Filiacao02[this] = value; }
        }


        [DisplayName("CPF"), Column("CPF"), Size(14)]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }


        [DisplayName("RG"), Column("RG_Numero"), Size(30)]
        public String RgNumero
        {
            get { return Fields.RgNumero[this]; }
            set { Fields.RgNumero[this] = value; }
        }


        [DisplayName("Órgao Emissor"), Column("RG_OrgaoEmissor"), ForeignKey("[dbo].[OrgaoEmissor]", "OrgaoEmissorId"), LeftJoin("jRgOrgaoEmissor"), TextualField("RgOrgaoEmissorNome")]
        public Int32? RgOrgaoEmissor
        {
            get { return Fields.RgOrgaoEmissor[this]; }
            set { Fields.RgOrgaoEmissor[this] = value; }
        }


        [DisplayName("UF Emissor"), Column("RG_UFEmissor"), ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jRgUfEmissor"), TextualField("RgUfEmissorNome")]
        public Int32? RgUfEmissor
        {
            get { return Fields.RgUfEmissor[this]; }
            set { Fields.RgUfEmissor[this] = value; }
        }


        [DisplayName("Título de Eleitor"), Size(30)]
        public String TituloEleitorNumero
        {
            get { return Fields.TituloEleitorNumero[this]; }
            set { Fields.TituloEleitorNumero[this] = value; }
        }


        [DisplayName("Zona"), Size(6)]
        public String TituloEleitorZona
        {
            get { return Fields.TituloEleitorZona[this]; }
            set { Fields.TituloEleitorZona[this] = value; }
        }


        [DisplayName("Seção"), Size(6)]
        public String TituloEleitorSecao
        {
            get { return Fields.TituloEleitorSecao[this]; }
            set { Fields.TituloEleitorSecao[this] = value; }
        }


        [DisplayName("PIS"), Column("PIS"), Size(20)]
        public String Pis
        {
            get { return Fields.Pis[this]; }
            set { Fields.Pis[this] = value; }
        }


        [DisplayName("CNH"), Column("CNHNumero"), Size(20)]
        public String CnhNumero
        {
            get { return Fields.CnhNumero[this]; }
            set { Fields.CnhNumero[this] = value; }
        }


        [DisplayName("Tipo"), Column("CNHTipo"), Size(20)]
        public String CnhTipo
        {
            get { return Fields.CnhTipo[this]; }
            set { Fields.CnhTipo[this] = value; }
        }


        [DisplayName("Emissão"), Column("CNHEmissao")]
        public DateTime? CnhEmissao
        {
            get { return Fields.CnhEmissao[this]; }
            set { Fields.CnhEmissao[this] = value; }
        }


        [DisplayName("Validade"), Column("CNHValidade")]
        public DateTime? CnhValidade
        {
            get { return Fields.CnhValidade[this]; }
            set { Fields.CnhValidade[this] = value; }
        }


        [DisplayName("Estado Civil"), ForeignKey("[dbo].[EstadoCivil]", "EstadoCivilId"), LeftJoin("jEstadoCivil"), TextualField("EstadoCivilDescricao")]
        public Int32? EstadoCivil
        {
            get { return Fields.EstadoCivil[this]; }
            set { Fields.EstadoCivil[this] = value; }
        }


        [DisplayName("Sexo"), Size(1)]
        public String Sexo
        {
            get { return Fields.Sexo[this]; }
            set { Fields.Sexo[this] = value; }
        }


        [DisplayName("Grau de Instrução"), ForeignKey("[dbo].[GrauInstrucao]", "GrauInstrucaoId"), LeftJoin("jGrauInstrucao"), TextualField("GrauInstrucaoDescricao")]
        public Int32? GrauInstrucao
        {
            get { return Fields.GrauInstrucao[this]; }
            set { Fields.GrauInstrucao[this] = value; }
        }


        [DisplayName("Nacionalidade"), ForeignKey("[dbo].[Pais]", "PaisId"), LeftJoin("jNacionalidade"), TextualField("NacionalidadeNome")]
        public Int32? Nacionalidade
        {
            get { return Fields.Nacionalidade[this]; }
            set { Fields.Nacionalidade[this] = value; }
        }


        [DisplayName("Estado de Nascimento"), ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jEstadoNascimento"), TextualField("EstadoNascimentoNome")]
        public Int32? EstadoNascimento
        {
            get { return Fields.EstadoNascimento[this]; }
            set { Fields.EstadoNascimento[this] = value; }
        }


        [DisplayName("Naturalidade"), ForeignKey("[dbo].[Cidade]", "CidadeId"), LeftJoin("jNaturalidade"), TextualField("NaturalidadeNome")]
        public Int32? Naturalidade
        {
            get { return Fields.Naturalidade[this]; }
            set { Fields.Naturalidade[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PessoaFisicaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Filiacao01; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PessoaFisicaRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PessoaFisicaId;
            public Int32Field PessoaId;
            public DateTimeField DataNascimento;
            public StringField Filiacao01;
            public StringField Filiacao02;
            public StringField Cpf;
            public StringField RgNumero;
            public Int32Field RgOrgaoEmissor;
            public Int32Field RgUfEmissor;
            public StringField TituloEleitorNumero;
            public StringField TituloEleitorZona;
            public StringField TituloEleitorSecao;
            public StringField Pis;
            public StringField CnhNumero;
            public StringField CnhTipo;
            public DateTimeField CnhEmissao;
            public DateTimeField CnhValidade;
            public Int32Field EstadoCivil;
            public StringField Sexo;
            public Int32Field GrauInstrucao;
            public Int32Field Nacionalidade;
            public Int32Field EstadoNascimento;
            public Int32Field Naturalidade;
        }
    }
}
