using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190321102000)]
    public class DefaultDB_20190321102000_Indices : AutoReversingMigration
    {
        public override void Up()
        {
            //CEP
            Create.Index("UNQ_CEP_Cep_Logradouro")
                            .OnTable("Cep")
                            .OnColumn("Cep").Ascending()
                            .OnColumn("Logradouro").Ascending()
                            .WithOptions().Unique();

            Create.Index("IDX_CEP_Logradouro")
                            .OnTable("Cep")
                            .OnColumn("Logradouro").Ascending()
                            .WithOptions();

            //País
            Create.Index("UNQ_Pais_Nome")
                           .OnTable("Pais")
                           .OnColumn("Nome").Ascending().WithOptions().Unique();

            Create.Index("UNQ_Pais_Bacen")
                            .OnTable("Pais")
                            .OnColumn("Bacen").Ascending().WithOptions().Unique();

            Create.Index("IDX_Pais_NomeInternacional")
                            .OnTable("Pais")
                            .OnColumn("NomeInternacional").Ascending();

            Create.Index("IDX_Pais_Sigla")
                            .OnTable("Pais")
                            .OnColumn("Sigla").Ascending();


            //Estado
            Alter.Table("Estado").AlterColumn("IBGE").AsInt32().Nullable();

            Create.Index("UNQ_Estado_Pais_Nome")
                .OnTable("Estado")
                .OnColumn("PaisID").Ascending()
                .OnColumn("Nome").Ascending()
                .WithOptions().Unique();

            Create.Index("UNQ_Estado_Pais_UF")
                .OnTable("Estado")
                .OnColumn("PaisID").Ascending()
                .OnColumn("UF").Ascending()
                .WithOptions().Unique();

            Create.Index("IDX_Estado_UF")
                .OnTable("Estado")
                .OnColumn("UF").Ascending();

            //Cidade
            Create.Index("UNQ_Cidade_Estado_Nome")
                .OnTable("Cidade")
                .OnColumn("EstadoId").Ascending()
                .OnColumn("Nome").Ascending()
                .WithOptions().Unique();

            Create.Index("IDX_Cidade_Nome")
                .OnTable("Cidade")
                .OnColumn("Nome").Ascending();

            Create.Index("IDX_Cidade_IBGE")
                .OnTable("Cidade")
                .OnColumn("IBGE").Ascending();

            //Bairro
            Create.Index("UNQ_Bairro_Cidade_Nome")
               .OnTable("Bairro")
               .OnColumn("CidadeId").Ascending()
               .OnColumn("Nome").Ascending()
               .WithOptions().Unique();

            Create.Index("IDX_Bairro_Nome")
               .OnTable("Bairro")
               .OnColumn("Nome").Ascending();

        }
    }
}

