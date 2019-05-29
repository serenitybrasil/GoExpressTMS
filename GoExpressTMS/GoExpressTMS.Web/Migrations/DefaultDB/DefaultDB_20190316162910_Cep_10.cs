using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162910)]
    public class DefaultDB_20190316162910_Cep_10 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_10.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}