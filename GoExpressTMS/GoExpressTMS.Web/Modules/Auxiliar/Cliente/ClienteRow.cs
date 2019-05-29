
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[Cliente]")]
    public sealed class ClienteRow : Row, IIdRow
    {
        [DisplayName("Cliente Id"), Identity]
        public Int32? ClienteId
        {
            get { return Fields.ClienteId[this]; }
            set { Fields.ClienteId[this] = value; }
        }

        [DisplayName("Pessoa"), NotNull, ForeignKey("[dbo].[Pessoa]", "PessoaId"), LeftJoin("jPessoa"), TextualField("PessoaNome")]
        public Int32? PessoaId
        {
            get { return Fields.PessoaId[this]; }
            set { Fields.PessoaId[this] = value; }
        }

        [DisplayName("Data Cadastro"), NotNull]
        public DateTime? DataCadastro
        {
            get { return Fields.DataCadastro[this]; }
            set { Fields.DataCadastro[this] = value; }
        }

        [DisplayName("Pessoa Nome"), Expression("jPessoa.[Nome]")]
        public String PessoaNome
        {
            get { return Fields.PessoaNome[this]; }
            set { Fields.PessoaNome[this] = value; }
        }

        [DisplayName("Pessoa Tipo Pessoa"), Expression("jPessoa.[TipoPessoa]")]
        public String PessoaTipoPessoa
        {
            get { return Fields.PessoaTipoPessoa[this]; }
            set { Fields.PessoaTipoPessoa[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ClienteId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ClienteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClienteId;
            public Int32Field PessoaId;
            public DateTimeField DataCadastro;

            public StringField PessoaNome;
            public StringField PessoaTipoPessoa;
        }
    }
}
