using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162904)]
    public class DefaultDB_20190316162904_Cep_04 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_04.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}