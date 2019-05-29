using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162915)]
    public class DefaultDB_20190316162915_Cep_15 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_15.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}