using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190326223000)]
    public class DefaultDB_20190326223000_Cliente : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Cliente", "ClienteId", s => s
                           .WithColumn("PessoaId").AsInt32().NotNullable().ForeignKey("FK_Cliente_PessoaId", "Pessoa", "PessoaId")
                           .WithColumn("DataCadastro").AsDate().NotNullable());
        }
    }
}