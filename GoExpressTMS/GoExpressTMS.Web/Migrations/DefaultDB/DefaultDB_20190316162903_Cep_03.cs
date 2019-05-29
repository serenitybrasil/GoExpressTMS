using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162903)]
    public class DefaultDB_20190316162903_Cep_03 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_03.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}