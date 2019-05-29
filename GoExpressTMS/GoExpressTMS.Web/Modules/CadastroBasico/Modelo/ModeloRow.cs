
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[VeiculoModelo]")]
    [DisplayName("Modelos"), InstanceName("Modelo")]
    [ReadPermission(PermissionKeys.Modelo.Alterar)]
    [ModifyPermission(PermissionKeys.Modelo.Alterar)]
    [LookupScript("CadastroBasico.Modelo", Permission = "?")]
    public sealed class ModeloRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? VeiculoModeloId
        {
            get { return Fields.VeiculoModeloId[this]; }
            set { Fields.VeiculoModeloId[this] = value; }
        }

        [DisplayName("Fabricante"), NotNull, ForeignKey("[dbo].[VeiculoFabricante]", "VeiculoFabricanteId"), LeftJoin("jVeiculoFabricante"), TextualField("VeiculoFabricanteNome")]
        [LookupEditor(typeof(FabricanteRow),InplaceAdd =true, InplaceAddPermission = PermissionKeys.Fabricante.Alterar)]
        public Int32? VeiculoFabricanteId
        {
            get { return Fields.VeiculoFabricanteId[this]; }
            set { Fields.VeiculoFabricanteId[this] = value; }
        }

        [DisplayName("Fabricante"), Expression("jVeiculoFabricante.[Nome]")]
        public String VeiculoFabricanteNome
        {
            get { return Fields.VeiculoFabricanteNome[this]; }
            set { Fields.VeiculoFabricanteNome[this] = value; }
        }

        [DisplayName("Nome"), Size(80), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.VeiculoModeloId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ModeloRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VeiculoModeloId;
            public Int32Field VeiculoFabricanteId;
            public StringField Nome;

            public StringField VeiculoFabricanteNome;
        }
    }
}
