using FluentMigrator;

namespace GoExpressTMS.Migrations.DefaultDB
{

    [Migration(20190321204000)]
    public class DefaultDB_20190321204000_Colaboradores : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("TipoColaborador", "TipoColaboradorId", s => s
                           .WithColumn("Tipo").AsString(60).NotNullable());

            Insert.IntoTable("TipoColaborador").Row(new { Tipo = "Funcionário" });
            Insert.IntoTable("TipoColaborador").Row(new { Tipo = "Autônomo" });
            Insert.IntoTable("TipoColaborador").Row(new { Tipo = "Estagiário" });
            Insert.IntoTable("TipoColaborador").Row(new { Tipo = "Externo" });

            Alter.Table("Colaborador").AddColumn("TipoColaboradorId").AsInt32().NotNullable()
                    .ForeignKey("FK_Colaborador_TipoColaboradorId", "TipoColaborador", "TipoColaboradorId")
                    .AlterColumn("PessoaId").AsInt32().ForeignKey("FK_Colaborador_PessoaId", "Pessoa", "PessoaId");
        }
    }
}