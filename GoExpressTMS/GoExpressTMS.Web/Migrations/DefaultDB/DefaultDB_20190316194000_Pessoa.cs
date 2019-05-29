using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190316194000)]
    public class DefaultDB_20190316194000_Pessoa : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Pessoa", "PessoaId", s => s
                .WithColumn("Nome").AsString(128).NotNullable()
                .WithColumn("TipoPessoa").AsString(1).NotNullable());

            this.CreateTableWithId32("OrgaoEmissor", "OrgaoEmissorId", s => s
                .WithColumn("Nome").AsString(128).NotNullable());

            this.CreateTableWithId32("EstadoCivil", "EstadoCivilId", s => s
                            .WithColumn("Descricao").AsString(60).NotNullable());

            Insert.IntoTable("EstadoCivil").Row(new { Descricao = "Solteiro(a)" });
            Insert.IntoTable("EstadoCivil").Row(new { Descricao = "Casado(a)" });
            Insert.IntoTable("EstadoCivil").Row(new { Descricao = "Separado(a)" });
            Insert.IntoTable("EstadoCivil").Row(new { Descricao = "Divorciado(a)" });
            Insert.IntoTable("EstadoCivil").Row(new { Descricao = "Viúvo(a)" });


            this.CreateTableWithId32("GrauInstrucao", "GrauInstrucaoId", s => s
                       .WithColumn("Descricao").AsString(80).NotNullable());

            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Analfabeto(a)" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Ensino fundamental incompleto" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Ensino fundamental completo" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Ensino médio incompleto" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Ensino médio completo" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Superior completo" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Pós-Graduação" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Mestrado" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Doutorado" });
            Insert.IntoTable("GrauInstrucao").Row(new { Descricao = "Pòs-Doutorado (PhD)" });

            this.CreateTableWithId32("PessoaFisica", "PessoaFisicaId", s => s
                            .WithColumn("PessoaId").AsInt32().NotNullable()
                                .ForeignKey("FK_PessoaFisica_PessoaId", "Pessoa", "PessoaId")
                            .WithColumn("DataNascimento").AsDate().Nullable()
                            .WithColumn("Filiacao01").AsString(128).Nullable()
                            .WithColumn("Filiacao02").AsString(128).Nullable()
                            .WithColumn("CPF").AsString(14).Nullable()
                            .WithColumn("RG_Numero").AsString(30).Nullable()
                            .WithColumn("RG_OrgaoEmissor").AsInt32().Nullable()
                                .ForeignKey("FK_PessoaFisica_RG_OrgaoEmissor", "OrgaoEmissor", "OrgaoEmissorId")
                            .WithColumn("RG_UFEmissor").AsInt32().Nullable()
                                .ForeignKey("FK_PessoaFisica_RG_UFEmissor", "Estado", "EstadoId")
                            .WithColumn("TituloEleitorNumero").AsString(30).Nullable()
                            .WithColumn("TituloEleitorZona").AsString(6).Nullable()
                            .WithColumn("TituloEleitorSecao").AsString(6).Nullable()
                            .WithColumn("PIS").AsString(20).Nullable()
                            .WithColumn("CNHNumero").AsString(20).Nullable()
                            .WithColumn("CNHTipo").AsString(20).Nullable()
                            .WithColumn("CNHEmissao").AsDate().Nullable()
                            .WithColumn("CNHValidade").AsDate().Nullable()
                            .WithColumn("EstadoCivil").AsInt32().Nullable()
                                .ForeignKey("FK_PessoaFisica_EstadoCivil", "EstadoCivil", "EstadoCivilId")
                            .WithColumn("Sexo").AsString(1).Nullable()
                            .WithColumn("GrauInstrucao").AsInt32().NotNullable()
                                .ForeignKey("FK_PessoaFisica_GrauInstrucao", "GrauInstrucao", "GrauInstrucaoId")
                            .WithColumn("Nacionalidade").AsInt32().Nullable()
                                .ForeignKey("FK_PessoaFisica_Nacionalidade", "Pais", "PaisId")
                            .WithColumn("EstadoNascimento").AsInt32().Nullable()
                                .ForeignKey("FK_PessoaFisica_EstadoNascimento", "Estado", "EstadoId")
                            .WithColumn("Naturalidade").AsInt32().Nullable()
                                .ForeignKey("FK_PessoaFisica_Naturalidade", "Cidade", "CidadeId")
                            );

            this.CreateTableWithId32("TipoEndereco", "TipoEnderecoId", s => s
                       .WithColumn("Descricao").AsString(60).NotNullable());

            Insert.IntoTable("TipoEndereco").Row(new { Descricao = "Principal" });
            Insert.IntoTable("TipoEndereco").Row(new { Descricao = "Residêncial" });
            Insert.IntoTable("TipoEndereco").Row(new { Descricao = "Comercial" });
            Insert.IntoTable("TipoEndereco").Row(new { Descricao = "Coleta" });
            Insert.IntoTable("TipoEndereco").Row(new { Descricao = "Entrega" });

            this.CreateTableWithId32("PessoaEndereco", "PessoaEnderecoId", s => s
                        .WithColumn("PessoaId").AsInt32().NotNullable()
                            .ForeignKey("FK_PessoaEndereco_PessoaId", "Pessoa", "PessoaId")
                        .WithColumn("TipoEnderecoId").AsInt32().NotNullable()
                            .ForeignKey("FK_PessoaEndereco_TipoEnderecoId", "TipoEndereco", "TipoEnderecoId")
                        .WithColumn("CepId").AsInt32().NotNullable()
                            .ForeignKey("FK_PessoaEndereco_CepId", "Cep", "CepId")
                        .WithColumn("Numero").AsString(10).NotNullable()
                        .WithColumn("Complemento").AsString(40).Nullable());

            this.CreateTableWithId32("TipoTelefone", "TipoTelefoneId", s => s
                      .WithColumn("Descricao").AsString(60).NotNullable());

            Insert.IntoTable("TipoTelefone").Row(new { Descricao = "Principal" });
            Insert.IntoTable("TipoTelefone").Row(new { Descricao = "Residêncial" });
            Insert.IntoTable("TipoTelefone").Row(new { Descricao = "Comercial" });

            this.CreateTableWithId32("PessoaTelefone", "PessoaTelefoneId", s => s
                        .WithColumn("PessoaId").AsInt32().NotNullable()
                            .ForeignKey("FK_PessoaTelefone_PessoaId", "Pessoa", "PessoaId")
                        .WithColumn("Numero").AsString(20).NotNullable()
                        .WithColumn("TipoTelefoneId").AsInt32()
                            .ForeignKey("FK_PessoaTelefone_TipoTelefoneId", "TipoTelefone", "TipoTelefoneId"));

            this.CreateTableWithId32("PessoaJuridica", "PessoaJuridicaId", s => s
                           .WithColumn("PessoaId").AsInt32().NotNullable()
                               .ForeignKey("FK_PessoaJuridica_PessoaId", "Pessoa", "PessoaId")
                            .WithColumn("RazaoSocial").AsString(128).NotNullable()
                            .WithColumn("CNPJ").AsString(20).NotNullable()
                            .WithColumn("InscEstadual").AsString(30).Nullable()
                            .WithColumn("InscMunicipal").AsString(30).Nullable());

            this.CreateTableWithId32("Colaborador", "ColaboradorId", s => s
                           .WithColumn("PessoaId").AsInt32().NotNullable()
                           .WithColumn("Matricula").AsString(20).Nullable()
                           .WithColumn("DataAdmissao").AsDate().NotNullable());

        }
    }
}