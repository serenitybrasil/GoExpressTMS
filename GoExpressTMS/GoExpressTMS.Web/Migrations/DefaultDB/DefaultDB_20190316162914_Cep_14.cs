using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162914)]
    public class DefaultDB_20190316162914_Cep_14 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_14.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}