
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[TipoEndereco]")]
    [DisplayName("Tipos de Endereço"), InstanceName("Tipo Endereco")]
    [ReadPermission(PermissionKeys.TipoEndereco.Visualizar)]
    [ModifyPermission(PermissionKeys.TipoEndereco.Alterar)]
    [LookupScript("Auxiliar.TipoEndereco", Permission = "?")]
    public sealed class TipoEnderecoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tipo Endereco Id"), Identity]
        public Int32? TipoEnderecoId
        {
            get { return Fields.TipoEnderecoId[this]; }
            set { Fields.TipoEnderecoId[this] = value; }
        }

        [DisplayName("Descrição"), Size(60), NotNull, QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TipoEnderecoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipoEnderecoRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TipoEnderecoId;
            public StringField Descricao;
        }
    }
}
