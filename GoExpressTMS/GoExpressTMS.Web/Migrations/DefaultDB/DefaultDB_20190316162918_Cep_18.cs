using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162918)]
    public class DefaultDB_20190316162918_Cep_18 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_18.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}