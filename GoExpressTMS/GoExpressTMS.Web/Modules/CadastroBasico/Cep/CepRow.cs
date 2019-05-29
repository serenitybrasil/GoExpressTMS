
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[Cep]")]
    [DisplayName("CEP´s"), InstanceName("CEP")]
    [ReadPermission(PermissionKeys.Cep.Visualizar)]
    [ModifyPermission(PermissionKeys.Cep.Alterar)]
    [LookupScript("CadastroBasico.Cep", Permission = "?")]
    public sealed class CepRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cep Id"), Identity]
        public Int32? CepId
        {
            get { return Fields.CepId[this]; }
            set { Fields.CepId[this] = value; }
        }

        [DisplayName("CEP"), Size(8), NotNull, QuickSearch, MaskedEditor(Mask = "99.999-999")]
        public String Cep
        {
            get { return Fields.Cep[this]; }
            set { Fields.Cep[this] = value; }
        }

        [DisplayName("Logradouro"), Size(255), NotNull, QuickSearch, Placeholder("Ex: Rua Setubal, Avenida Rebouças, Praça da Sé, etc...")]
        public String Logradouro
        {
            get { return Fields.Logradouro[this]; }
            set { Fields.Logradouro[this] = value; }
        }

        [DisplayName("País"), Expression("jEstado.PaisId"), ForeignKey("[dbo].[Pais]", "PaisId"), LeftJoin("jPais")]
        [LookupEditor(typeof(PaisRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Pais.Alterar)]
        [LookupInclude]
        public Int32? PaisId
        {
            get { return Fields.PaisId[this]; }
            set { Fields.PaisId[this] = value; }
        }

        [DisplayName("País"), Expression("jPais.[Nome]")]
        public String PaisNome
        {
            get { return Fields.PaisNome[this]; }
            set { Fields.PaisNome[this] = value; }
        }

        [DisplayName("Estado"), NotNull, ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jEstado"), TextualField("EstadoNome")]
        [LookupEditor(typeof(EstadoRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Estado.Alterar, CascadeFrom = "PaisId", CascadeField = "PaisId")]
        [LookupInclude]
        public Int32? EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }

        [DisplayName("Cidade"), NotNull, ForeignKey("[dbo].[Cidade]", "CidadeId"), LeftJoin("jCidade"), TextualField("CidadeNome")]
        [LookupEditor(typeof(CidadeRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Cidade.Alterar, CascadeFrom = "EstadoId", CascadeField = "EstadoId")]
        [LookupInclude]
        public Int32? CidadeId
        {
            get { return Fields.CidadeId[this]; }
            set { Fields.CidadeId[this] = value; }
        }

        [DisplayName("Bairro"), NotNull, ForeignKey("[dbo].[Bairro]", "BairroId"), LeftJoin("jBairro"), TextualField("BairroNome")]
        [LookupEditor(typeof(BairroRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Bairro.Alterar, CascadeFrom = "CidadeId", CascadeField = "CidadeId")]
        [LookupInclude]
        public Int32? BairroId
        {
            get { return Fields.BairroId[this]; }
            set { Fields.BairroId[this] = value; }
        }

        [DisplayName("Estado"), Expression("jEstado.[Nome]")]
        public String EstadoNome
        {
            get { return Fields.EstadoNome[this]; }
            set { Fields.EstadoNome[this] = value; }
        }

        [DisplayName("Cidade"), Expression("jCidade.[Nome]")]
        public String CidadeNome
        {
            get { return Fields.CidadeNome[this]; }
            set { Fields.CidadeNome[this] = value; }
        }


        [DisplayName("Bairro"), Expression("jBairro.[Nome]")]
        public String BairroNome
        {
            get { return Fields.BairroNome[this]; }
            set { Fields.BairroNome[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.CepId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cep; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CepRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CepId;
            public StringField Cep;
            public StringField Logradouro;

            public Int32Field PaisId;
            public StringField PaisNome;

            public Int32Field EstadoId;
            public StringField EstadoNome;

            public Int32Field CidadeId;
            public StringField CidadeNome;

            public Int32Field BairroId;
            public StringField BairroNome;
        }
    }
}
