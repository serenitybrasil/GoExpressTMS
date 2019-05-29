using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162913)]
    public class DefaultDB_20190316162913_Cep_13 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_13.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}