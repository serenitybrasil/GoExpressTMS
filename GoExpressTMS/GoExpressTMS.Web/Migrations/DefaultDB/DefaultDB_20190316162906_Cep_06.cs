﻿using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162906)]
    public class DefaultDB_20190316162906_Cep_06 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_06.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}