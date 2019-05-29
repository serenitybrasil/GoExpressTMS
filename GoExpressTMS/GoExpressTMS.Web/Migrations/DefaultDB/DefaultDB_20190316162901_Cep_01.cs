using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162901)]
    public class DefaultDB_20190316162901_Cep_01 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_01.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}