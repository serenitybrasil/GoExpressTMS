
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[Pais]")]
    [DisplayName("Países"), InstanceName("País")]
    [ReadPermission(PermissionKeys.Pais.Visualizar)]
    [ModifyPermission(PermissionKeys.Pais.Alterar)]
    [LookupScript("CadastroBasico.Pais", Permission = "?")]
    public sealed class PaisRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pais Id"), Identity]
        public Int32? PaisId
        {
            get { return Fields.PaisId[this]; }
            set { Fields.PaisId[this] = value; }
        }

        [DisplayName("Nome"), Size(255), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Sigla"), Size(3), QuickSearch]
        public String Sigla
        {
            get { return Fields.Sigla[this]; }
            set { Fields.Sigla[this] = value; }
        }

        [DisplayName("Nome Internacional"), Size(255), QuickSearch]
        public String NomeInternacional
        {
            get { return Fields.NomeInternacional[this]; }
            set { Fields.NomeInternacional[this] = value; }
        }

        [DisplayName("BACEN"), Column("BACEN"), NotNull, QuickSearch]
        public Int32? Bacen
        {
            get { return Fields.Bacen[this]; }
            set { Fields.Bacen[this] = value; }
        }

        [DisplayName("Nacionalidade"), Size(255), QuickSearch]
        public String Nacionalidade
        {
            get { return Fields.Nacionalidade[this]; }
            set { Fields.Nacionalidade[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PaisId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaisRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PaisId;
            public StringField Nome;
            public StringField Sigla;
            public StringField NomeInternacional;
            public Int32Field Bacen;
            public StringField Nacionalidade;
        }
    }
}
