﻿using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162917)]
    public class DefaultDB_20190316162917_Cep_17 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_17.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}