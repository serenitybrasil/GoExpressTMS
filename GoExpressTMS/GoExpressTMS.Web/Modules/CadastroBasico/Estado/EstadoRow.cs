
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[Estado]")]
    [DisplayName("Estados"), InstanceName("Estado")]
    [ReadPermission(PermissionKeys.Estado.Visualizar)]
    [ModifyPermission(PermissionKeys.Estado.Alterar)]
    [LookupScript("CadastroBasico.Estado", Permission = "?")]
    public sealed class EstadoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Estado Id"), Identity]
        public Int32? EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }

        [DisplayName("Nome"), Size(255), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("UF"), Column("UF"), Size(2), NotNull, QuickSearch]
        public String Uf
        {
            get { return Fields.Uf[this]; }
            set { Fields.Uf[this] = value; }
        }

        [DisplayName("IBGE"), Column("IBGE"), QuickSearch]
        public Int32? Ibge
        {
            get { return Fields.Ibge[this]; }
            set { Fields.Ibge[this] = value; }
        }


        [DisplayName("DDD"), Column("DDD"), Size(128)]
        public String Ddd
        {
            get { return Fields.Ddd[this]; }
            set { Fields.Ddd[this] = value; }
        }

        [DisplayName("País"), Column("PaisID"), NotNull, ForeignKey("[dbo].[Pais]", "PaisId"), LeftJoin("jPais"), TextualField("PaisNome")]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.EstadoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EstadoRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EstadoId;
            public StringField Nome;
            public StringField Uf;
            public Int32Field Ibge;
            public StringField Ddd;

            public Int32Field PaisId;
            public StringField PaisNome;
        }
    }
}
