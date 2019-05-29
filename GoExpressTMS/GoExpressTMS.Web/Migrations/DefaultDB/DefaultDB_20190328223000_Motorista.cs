using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190328223000)]
    public class DefaultDB_20190328223000_Motorista : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Motorista", "MotoristaId", s => s
                           .WithColumn("PessoaId").AsInt32().NotNullable().ForeignKey("FK_Motorista_PessoaId", "Pessoa", "PessoaId")
                           .WithColumn("DataCadastro").AsDate().NotNullable());
        }
    }
}