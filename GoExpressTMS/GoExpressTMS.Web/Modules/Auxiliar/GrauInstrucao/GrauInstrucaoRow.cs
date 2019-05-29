
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[GrauInstrucao]")]
    [DisplayName("Graus de Instrução"), InstanceName("Grau de Instrução")]
    [ReadPermission(PermissionKeys.GrauInstrucao.Visualizar)]
    [ModifyPermission(PermissionKeys.GrauInstrucao.Alterar)]
    [LookupScript("Auxiliar.GrauInstrucao", Permission ="?")]
    public sealed class GrauInstrucaoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Grau Instrucao Id"), Identity]
        public Int32? GrauInstrucaoId
        {
            get { return Fields.GrauInstrucaoId[this]; }
            set { Fields.GrauInstrucaoId[this] = value; }
        }

        [DisplayName("Descrição"), Size(80), NotNull, QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GrauInstrucaoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GrauInstrucaoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GrauInstrucaoId;
            public StringField Descricao;
        }
    }
}
