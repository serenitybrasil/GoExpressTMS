
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[TipoColaborador]")]
    [DisplayName("Tipo Colaborador"), InstanceName("Tipo Colaborador")]
    [ReadPermission(PermissionKeys.TipoColaborador.Visualizar)]
    [ModifyPermission(PermissionKeys.TipoColaborador.Alterar)]
    [LookupScript("Auxiliar.TipoColaborador", Permission = "?")]
    public sealed class TipoColaboradorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tipo Colaborador Id"), Identity]
        public Int32? TipoColaboradorId
        {
            get { return Fields.TipoColaboradorId[this]; }
            set { Fields.TipoColaboradorId[this] = value; }
        }

        [DisplayName("Tipo"), Size(60), NotNull, QuickSearch]
        public String Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TipoColaboradorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Tipo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipoColaboradorRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TipoColaboradorId;
            public StringField Tipo;
        }
    }
}
