
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[Bairro]")]
    [DisplayName("Bairros"), InstanceName("Bairro")]
    [ReadPermission(PermissionKeys.Bairro.Visualizar)]
    [ModifyPermission(PermissionKeys.Bairro.Alterar)]
    [LookupScript("CadastroBasico.Bairro", Permission = "?")]
    public sealed class BairroRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bairro Id"), Identity]
        public Int32? BairroId
        {
            get { return Fields.BairroId[this]; }
            set { Fields.BairroId[this] = value; }
        }

        [DisplayName("Nome"), Size(255), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Cidade"), NotNull, ForeignKey("[dbo].[Cidade]", "CidadeId"), LeftJoin("jCidade"), TextualField("CidadeNome")]
        [LookupEditor(typeof(CidadeRow), AutoComplete = true, InplaceAdd = true, InplaceAddPermission = PermissionKeys.Cidade.Alterar)]
        [LookupInclude]
        public Int32? CidadeId
        {
            get { return Fields.CidadeId[this]; }
            set { Fields.CidadeId[this] = value; }
        }

        [DisplayName("Estado"), Expression("jCidade.EstadoId"), ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jEstado")]
        [LookupEditor(typeof(EstadoRow), AutoComplete = true)]
        public Int32? EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }




        [DisplayName("Cidade"), Expression("jCidade.[Nome]")]
        public String CidadeNome
        {
            get { return Fields.CidadeNome[this]; }
            set { Fields.CidadeNome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BairroId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BairroRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BairroId;
            public StringField Nome;
            public Int32Field CidadeId;
            public StringField CidadeNome;

            public Int32Field EstadoId;

        }
    }
}
