
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[OrgaoEmissor]")]
    [DisplayName("Orgãos Emissores"), InstanceName("Orgão Emissor")]
    [ReadPermission(PermissionKeys.OrgaoEmissor.Visualizar)]
    [ModifyPermission(PermissionKeys.OrgaoEmissor.Alterar)]
    [LookupScript("Auxiliar.OrgaoEmissor", Permission = "?")]
    public sealed class OrgaoEmissorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Orgãoo Emissor Id"), Identity]
        public Int32? OrgaoEmissorId
        {
            get { return Fields.OrgaoEmissorId[this]; }
            set { Fields.OrgaoEmissorId[this] = value; }
        }

        [DisplayName("Nome"), Size(128), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrgaoEmissorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrgaoEmissorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrgaoEmissorId;
            public StringField Nome;
        }
    }
}
