
namespace GoExpressTMS.Auxiliar.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Auxiliar"), TableName("[dbo].[Motorista]")]
    [DisplayName("Motorista"), InstanceName("Motorista")]
    [ReadPermission("Auxiliar:Motorista")]
    [ModifyPermission("Auxiliar:Motorista")]
    public sealed class MotoristaRow : Row, IIdRow
    {
        [DisplayName("Motorista Id"), Identity]
        public Int32? MotoristaId
        {
            get { return Fields.MotoristaId[this]; }
            set { Fields.MotoristaId[this] = value; }
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
            get { return Fields.MotoristaId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MotoristaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MotoristaId;
            public Int32Field PessoaId;
            public DateTimeField DataCadastro;

            public StringField PessoaNome;
            public StringField PessoaTipoPessoa;
        }
    }
}
