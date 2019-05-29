
namespace GoExpressTMS.CadastroBasico.Entities
{
    using GoExpressTMS.Auxiliar.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[Pessoa]")]

    [InnerJoin("jMotorista", "Motorista", "jMotorista.[PessoaId] = T0.[PessoaId]", RowType = typeof(MotoristaRow), TitlePrefix = "")]
    [UpdatableExtension("jMotorista", typeof(MotoristaRow), CascadeDelete = true)]

    [LeftJoin("jPessoaFisica", "PessoaFisica", "jPessoaFisica.[PessoaId] = T0.[PessoaId]", RowType = typeof(PessoaFisicaRow), TitlePrefix = "")]
    [UpdatableExtension("jPessoaFisica", typeof(PessoaFisicaRow), CascadeDelete = true)]

    [DisplayName("Motoristas"), InstanceName("Motorista")]
    [ReadPermission(PermissionKeys.Motorista.Visualizar)]
    [ModifyPermission(PermissionKeys.Motorista.Alterar)]
    public sealed class Pessoa_MotoristaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pessoa Id"), Identity]
        public Int32? PessoaId
        {
            get { return Fields.PessoaId[this]; }
            set { Fields.PessoaId[this] = value; }
        }

        [DisplayName("Nome"), Size(128), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Tipo de Pessoa"), Size(1), NotNull, DefaultValue("F")]
        public String TipoPessoa
        {
            get { return Fields.TipoPessoa[this]; }
            set { Fields.TipoPessoa[this] = value; }
        }


        #region Motorista

        [Origin("jMotorista")]
        [DisplayName("Data Cadastro"), NotNull, DefaultValue("today"), MinSelectLevel(SelectLevel.Always)]
        public DateTime? DataCadastro
        {
            get { return Fields.DataCadastro[this]; }
            set { Fields.DataCadastro[this] = value; }
        }

        #endregion

        #region PessoaFisica

        [Origin("jPessoaFisica")]
        [DisplayName("Nascimento")]
        public DateTime? DataNascimento
        {
            get { return Fields.DataNascimento[this]; }
            set { Fields.DataNascimento[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Nome do Pai"), Size(128)]
        public String Filiacao01
        {
            get { return Fields.Filiacao01[this]; }
            set { Fields.Filiacao01[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Nome da Mãe"), Size(128)]
        public String Filiacao02
        {
            get { return Fields.Filiacao02[this]; }
            set { Fields.Filiacao02[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("CPF"), Column("CPF"), Size(14), MaskedEditor(Mask = "999.999.999-99"), QuickSearch]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("RG"), Column("RG_Numero"), Size(30), QuickSearch]
        public String RgNumero
        {
            get { return Fields.RgNumero[this]; }
            set { Fields.RgNumero[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Órgao Emissor"), Column("RG_OrgaoEmissor"), ForeignKey("[dbo].[OrgaoEmissor]", "OrgaoEmissorId"), LeftJoin("jRgOrgaoEmissor"), TextualField("RgOrgaoEmissorNome")]
        [LookupEditor(typeof(OrgaoEmissorRow), InplaceAdd = true, InplaceAddPermission = Auxiliar.PermissionKeys.OrgaoEmissor.Alterar)]
        public Int32? RgOrgaoEmissor
        {
            get { return Fields.RgOrgaoEmissor[this]; }
            set { Fields.RgOrgaoEmissor[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("UF Emissor"), Column("RG_UFEmissor"), ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jRgUfEmissor"), TextualField("RgUfEmissorNome")]
        [LookupEditor(typeof(EstadoRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Estado.Alterar)]
        public Int32? RgUfEmissor
        {
            get { return Fields.RgUfEmissor[this]; }
            set { Fields.RgUfEmissor[this] = value; }
        }

        [Origin("jPessoaFisica"), QuickSearch]
        [DisplayName("Título de Eleitor"), Size(30)]
        public String TituloEleitorNumero
        {
            get { return Fields.TituloEleitorNumero[this]; }
            set { Fields.TituloEleitorNumero[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Zona"), Size(6)]
        public String TituloEleitorZona
        {
            get { return Fields.TituloEleitorZona[this]; }
            set { Fields.TituloEleitorZona[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Seção"), Size(6)]
        public String TituloEleitorSecao
        {
            get { return Fields.TituloEleitorSecao[this]; }
            set { Fields.TituloEleitorSecao[this] = value; }
        }

        [Origin("jPessoaFisica"), QuickSearch]
        [DisplayName("PIS"), Column("PIS"), Size(20)]
        public String Pis
        {
            get { return Fields.Pis[this]; }
            set { Fields.Pis[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("CNH"), Column("CNHNumero"), Size(20), QuickSearch]
        public String CnhNumero
        {
            get { return Fields.CnhNumero[this]; }
            set { Fields.CnhNumero[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Tipo"), Column("CNHTipo"), Size(20)]
        public String CnhTipo
        {
            get { return Fields.CnhTipo[this]; }
            set { Fields.CnhTipo[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Emissão"), Column("CNHEmissao")]
        public DateTime? CnhEmissao
        {
            get { return Fields.CnhEmissao[this]; }
            set { Fields.CnhEmissao[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Validade"), Column("CNHValidade")]
        public DateTime? CnhValidade
        {
            get { return Fields.CnhValidade[this]; }
            set { Fields.CnhValidade[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Estado Civil"), ForeignKey("[dbo].[EstadoCivil]", "EstadoCivilId"), LeftJoin("jEstadoCivil"), TextualField("EstadoCivilDescricao")]
        [LookupEditor(typeof(EstadoCivilRow), InplaceAdd = true, InplaceAddPermission = Auxiliar.PermissionKeys.EstadoCivil.Alterar)]
        public Int32? EstadoCivil
        {
            get { return Fields.EstadoCivil[this]; }
            set { Fields.EstadoCivil[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Sexo"), Size(1), SexoEditor]
        public String Sexo
        {
            get { return Fields.Sexo[this]; }
            set { Fields.Sexo[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Grau de Instrução"), ForeignKey("[dbo].[GrauInstrucao]", "GrauInstrucaoId"), LeftJoin("jGrauInstrucao"), TextualField("GrauInstrucaoDescricao")]
        [LookupEditor(typeof(GrauInstrucaoRow), InplaceAdd = true, InplaceAddPermission = Auxiliar.PermissionKeys.GrauInstrucao.Alterar)]
        public Int32? GrauInstrucao
        {
            get { return Fields.GrauInstrucao[this]; }
            set { Fields.GrauInstrucao[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Nacionalidade"), ForeignKey("[dbo].[Pais]", "PaisId"), LeftJoin("jNacionalidade"), TextualField("NacionalidadeNome")]
        [LookupEditor(typeof(PaisRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Pais.Alterar)]
        public Int32? Nacionalidade
        {
            get { return Fields.Nacionalidade[this]; }
            set { Fields.Nacionalidade[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Estado de Nascimento"), ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jEstadoNascimento"), TextualField("EstadoNascimentoNome")]
        [LookupEditor(typeof(EstadoRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Estado.Alterar, CascadeFrom = "Nacionalidade", CascadeField = "PaisId")]
        public Int32? EstadoNascimento
        {
            get { return Fields.EstadoNascimento[this]; }
            set { Fields.EstadoNascimento[this] = value; }
        }

        [Origin("jPessoaFisica")]
        [DisplayName("Naturalidade"), ForeignKey("[dbo].[Cidade]", "CidadeId"), LeftJoin("jNaturalidade"), TextualField("NaturalidadeNome")]
        [LookupEditor(typeof(CidadeRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Cidade.Alterar, CascadeFrom = "EstadoNascimento", CascadeField = "EstadoId")]
        public Int32? Naturalidade
        {
            get { return Fields.Naturalidade[this]; }
            set { Fields.Naturalidade[this] = value; }
        }

        #endregion


        IIdField IIdRow.IdField
        {
            get { return Fields.PessoaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public Pessoa_MotoristaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PessoaId;
            public StringField Nome;
            public StringField TipoPessoa;

            //Motorista
            public DateTimeField DataCadastro;

            //Pessoa Física
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
