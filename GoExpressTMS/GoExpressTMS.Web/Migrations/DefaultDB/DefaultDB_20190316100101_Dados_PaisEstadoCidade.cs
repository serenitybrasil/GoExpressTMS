using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316100101)]
    public class DefaultDB_20190316100101_Dados_PaisEstadoCidade : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162800_Pais.sql");
            Execute.EmbeddedScript("DefaultDB_20190316162801_Estado.sql");
            Execute.EmbeddedScript("DefaultDB_20190316162802_Cidade.sql");
            Execute.EmbeddedScript("DefaultDB_20190316162802_Bairro.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}