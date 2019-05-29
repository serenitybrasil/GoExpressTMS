
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[Cidade]")]
    [DisplayName("Cidades"), InstanceName("Cidade")]
    [ReadPermission(PermissionKeys.Cidade.Visualizar)]
    [ModifyPermission(PermissionKeys.Cidade.Alterar)]
    [LookupScript("CadastroBasico.Cidade", Permission = "?")]
    public sealed class CidadeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cidade Id"), Identity]
        public Int32? CidadeId
        {
            get { return Fields.CidadeId[this]; }
            set { Fields.CidadeId[this] = value; }
        }

        [DisplayName("Nome"), Size(255), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Estado"), NotNull, ForeignKey("[dbo].[Estado]", "EstadoId"), LeftJoin("jEstado"), TextualField("EstadoNome")]
        [LookupEditor(typeof(EstadoRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Estado.Alterar)]
        [LookupInclude]
        public Int32? EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }

        [DisplayName("IBGE"), Column("IBGE"), QuickSearch]
        public Int32? Ibge
        {
            get { return Fields.Ibge[this]; }
            set { Fields.Ibge[this] = value; }
        }

        [DisplayName("Estado"), Expression("jEstado.[Nome]"), QuickSearch]
        public String EstadoNome
        {
            get { return Fields.EstadoNome[this]; }
            set { Fields.EstadoNome[this] = value; }
        }

        [DisplayName("País"), Expression("jEstado.[PaisID]")]
        [LookupEditor(typeof(PaisRow), InplaceAdd = true, InplaceAddPermission = PermissionKeys.Pais.Alterar)]
        [LookupInclude]
        public Int32? EstadoPaisId
        {
            get { return Fields.EstadoPaisId[this]; }
            set { Fields.EstadoPaisId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CidadeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CidadeRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CidadeId;
            public StringField Nome;
            public Int32Field EstadoId;
            public StringField EstadoNome;
            public Int32Field Ibge;

            public Int32Field EstadoPaisId;
        }
    }
}
