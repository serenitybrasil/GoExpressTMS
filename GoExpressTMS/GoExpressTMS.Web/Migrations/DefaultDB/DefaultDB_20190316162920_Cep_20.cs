using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162920)]
    public class DefaultDB_20190316162920_Cep_20 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_20.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}