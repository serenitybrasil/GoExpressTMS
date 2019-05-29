using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190322223940)]
    public class DefaultDB_20190322223940_PessoaFisica : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Column("GrauInstrucao").OnTable("PessoaFisica").AsInt32().Nullable();

        }
    }
}