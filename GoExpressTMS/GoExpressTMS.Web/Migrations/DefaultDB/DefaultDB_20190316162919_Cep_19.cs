using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162919)]
    public class DefaultDB_20190316162919_Cep_19 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_19.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}