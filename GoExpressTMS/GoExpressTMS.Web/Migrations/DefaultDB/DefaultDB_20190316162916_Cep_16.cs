using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162916)]
    public class DefaultDB_20190316162916_Cep_16 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_16.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}