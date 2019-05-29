
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[EstadoCivil]")]
    [DisplayName("Estados Civis"), InstanceName("Estado Civil")]
    [ReadPermission(PermissionKeys.EstadoCivil.Visualizar)]
    [ModifyPermission(PermissionKeys.EstadoCivil.Alterar)]
    [LookupScript("Auxiliar.EstadoCivil", Permission = "?")]
    public sealed class EstadoCivilRow : Row, IIdRow, INameRow
    {
        [DisplayName("Estado Civil Id"), Identity]
        public Int32? EstadoCivilId
        {
            get { return Fields.EstadoCivilId[this]; }
            set { Fields.EstadoCivilId[this] = value; }
        }

        [DisplayName("Descrição"), Size(60), NotNull, QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EstadoCivilId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EstadoCivilRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EstadoCivilId;
            public StringField Descricao;
        }
    }
}
