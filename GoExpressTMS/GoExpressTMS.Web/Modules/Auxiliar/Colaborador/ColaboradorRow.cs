
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[Colaborador]")]
    public sealed class ColaboradorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Colaborador Id"), Identity]
        public Int32? ColaboradorId
        {
            get { return Fields.ColaboradorId[this]; }
            set { Fields.ColaboradorId[this] = value; }
        }

        [DisplayName("Pessoa"), NotNull, ForeignKey("[dbo].[Pessoa]", "PessoaId"), LeftJoin("jPessoa"), Column("PessoaId"), TextualField("PessoaNome")]
        public Int32? PessoaId
        {
            get { return Fields.PessoaId[this]; }
            set { Fields.PessoaId[this] = value; }
        }

        [DisplayName("Matrícula"), Size(20), QuickSearch]
        public String Matricula
        {
            get { return Fields.Matricula[this]; }
            set { Fields.Matricula[this] = value; }
        }

        [DisplayName("Admissão"), NotNull]
        public DateTime? DataAdmissao
        {
            get { return Fields.DataAdmissao[this]; }
            set { Fields.DataAdmissao[this] = value; }
        }

        [DisplayName("Tipo"), NotNull, ForeignKey("[dbo].[TipoColaborador]", "TipoColaboradorId"), LeftJoin("jTipoColaborador"), TextualField("TipoColaboradorTipo")]
        public Int32? TipoColaboradorId
        {
            get { return Fields.TipoColaboradorId[this]; }
            set { Fields.TipoColaboradorId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ColaboradorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Matricula; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ColaboradorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ColaboradorId;
            public Int32Field PessoaId;
            public StringField Matricula;
            public DateTimeField DataAdmissao;
            public Int32Field TipoColaboradorId;
        }
    }
}
