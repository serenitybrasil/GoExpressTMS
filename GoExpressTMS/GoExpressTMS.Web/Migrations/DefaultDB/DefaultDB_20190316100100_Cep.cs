using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316100100)]
    public class DefaultDB_20190316100100_Cep : Migration
    {
        public override void Up()
        {
            Create.Table("Pais")
                .WithColumn("PaisId").AsInt32().NotNullable().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).NotNullable()
                .WithColumn("Sigla").AsString(3).Nullable()
                .WithColumn("NomeInternacional").AsString(255).Nullable()
                .WithColumn("BACEN").AsInt32().NotNullable()
                .WithColumn("Nacionalidade").AsString(255).Nullable();

            Create.Table("Estado")
                .WithColumn("EstadoId").AsInt32().NotNullable().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).NotNullable()
                .WithColumn("UF").AsString(2).NotNullable()
                .WithColumn("IBGE").AsInt32().NotNullable()
                .WithColumn("PaisID").AsInt32().NotNullable().ForeignKey("FK_Estado_PaisId", "Pais", "PaisId")
                .WithColumn("DDD").AsString(128).Nullable();

            Create.Table("Cidade")
                .WithColumn("CidadeId").AsInt32().NotNullable().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).NotNullable()
                .WithColumn("EstadoId").AsInt32().NotNullable().ForeignKey("FK_Cidade_EstadoId", "Estado", "EstadoId")
                .WithColumn("IBGE").AsInt32().Nullable();

            Create.Table("Bairro")
               .WithColumn("BairroId").AsInt32().NotNullable().PrimaryKey().Identity()
               .WithColumn("Nome").AsString(255).NotNullable()
               .WithColumn("CidadeId").AsInt32().NotNullable().ForeignKey("FK_Bairro_CidadeId", "Cidade", "CidadeId");

            Create.Table("Cep")
                .WithColumn("CepId").AsInt32().NotNullable().PrimaryKey().Identity()
                .WithColumn("Cep").AsString(8).NotNullable()
                .WithColumn("Logradouro").AsString(255).NotNullable()
                .WithColumn("EstadoId").AsInt32().NotNullable().ForeignKey("FK_Cep_EstadoId", "Estado", "EstadoId")
                .WithColumn("CidadeId").AsInt32().NotNullable().ForeignKey("FK_Cep_CidadeId", "Cidade", "CidadeId")
                .WithColumn("BairroId").AsInt32().NotNullable().ForeignKey("FK_Cep_BairroId", "Bairro", "BairroId");
        }

        public override void Down()
        {
            throw new System.NotImplementedException();
        }
    }
}