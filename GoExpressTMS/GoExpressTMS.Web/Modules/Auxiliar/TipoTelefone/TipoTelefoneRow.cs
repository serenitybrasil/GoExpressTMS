
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[TipoTelefone]")]
    [DisplayName("Tipos de Telefone"), InstanceName("Tipo de Telefone")]
    [ReadPermission(PermissionKeys.TipoTelefone.Visualizar)]
    [ModifyPermission(PermissionKeys.TipoTelefone.Alterar)]
    [LookupScript("Auxiliar.TipoTelefone", Permission = "?")]
    public sealed class TipoTelefoneRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tipo Telefone Id"), Identity]
        public Int32? TipoTelefoneId
        {
            get { return Fields.TipoTelefoneId[this]; }
            set { Fields.TipoTelefoneId[this] = value; }
        }

        [DisplayName("Descrição"), Size(60), NotNull, QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TipoTelefoneId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipoTelefoneRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TipoTelefoneId;
            public StringField Descricao;
        }
    }
}
