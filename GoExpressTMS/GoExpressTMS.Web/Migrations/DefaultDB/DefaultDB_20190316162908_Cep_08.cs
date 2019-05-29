using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162908)]
    public class DefaultDB_20190316162908_Cep_08 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_08.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}