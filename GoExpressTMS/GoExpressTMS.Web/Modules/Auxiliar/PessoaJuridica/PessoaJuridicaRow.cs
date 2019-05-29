
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[PessoaJuridica]")]
    [DisplayName("Pessoa Juridica"), InstanceName("Pessoa Juridica")]
    [ReadPermission("Auxiliar:PessoaJuridica")]
    [ModifyPermission("Auxiliar:PessoaJuridica")]
    public sealed class PessoaJuridicaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pessoa Juridica Id"), Identity]
        public Int32? PessoaJuridicaId
        {
            get { return Fields.PessoaJuridicaId[this]; }
            set { Fields.PessoaJuridicaId[this] = value; }
        }

        [DisplayName("Pessoa"), NotNull, ForeignKey("[dbo].[Pessoa]", "PessoaId"), LeftJoin("jPessoa"), TextualField("PessoaNome")]
        public Int32? PessoaId
        {
            get { return Fields.PessoaId[this]; }
            set { Fields.PessoaId[this] = value; }
        }

        [DisplayName("Razao Social"), Size(128), QuickSearch]
        public String RazaoSocial
        {
            get { return Fields.RazaoSocial[this]; }
            set { Fields.RazaoSocial[this] = value; }
        }

        [DisplayName("CNPJ"), Column("CNPJ"), Size(20)]
        public String Cnpj
        {
            get { return Fields.Cnpj[this]; }
            set { Fields.Cnpj[this] = value; }
        }

        [DisplayName("Insc. Estadual"), Size(30)]
        public String InscEstadual
        {
            get { return Fields.InscEstadual[this]; }
            set { Fields.InscEstadual[this] = value; }
        }

        [DisplayName("Insc Municipal"), Size(30)]
        public String InscMunicipal
        {
            get { return Fields.InscMunicipal[this]; }
            set { Fields.InscMunicipal[this] = value; }
        }

        [DisplayName("Pessoa Nome"), Expression("jPessoa.[Nome]")]
        public String PessoaNome
        {
            get { return Fields.PessoaNome[this]; }
            set { Fields.PessoaNome[this] = value; }
        }

        [DisplayName("Pessoa Tipo Pessoa"), Expression("jPessoa.[TipoPessoa]")]
        public String PessoaTipoPessoa
        {
            get { return Fields.PessoaTipoPessoa[this]; }
            set { Fields.PessoaTipoPessoa[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PessoaJuridicaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RazaoSocial; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PessoaJuridicaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PessoaJuridicaId;
            public Int32Field PessoaId;
            public StringField RazaoSocial;
            public StringField Cnpj;
            public StringField InscEstadual;
            public StringField InscMunicipal;

            public StringField PessoaNome;
            public StringField PessoaTipoPessoa;
        }
    }
}
