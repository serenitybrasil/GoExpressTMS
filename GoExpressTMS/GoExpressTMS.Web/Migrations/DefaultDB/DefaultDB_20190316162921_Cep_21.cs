﻿using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316162921)]
    public class DefaultDB_20190316162921_Cep_21 : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("DefaultDB_20190316162900_Cep_21.sql");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}