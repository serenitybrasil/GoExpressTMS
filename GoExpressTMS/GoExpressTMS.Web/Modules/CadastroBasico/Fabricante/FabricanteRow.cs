
namespace GoExpressTMS.CadastroBasico.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CadastroBasico"), TableName("[dbo].[VeiculoFabricante]")]
    [DisplayName("Fabricantes"), InstanceName("Fabricante")]
    [ReadPermission(PermissionKeys.Fabricante.Visualizar)]
    [ModifyPermission(PermissionKeys.Fabricante.Alterar)]
    [LookupScript("CadastroBasico.Fabricante", Permission = "?")]
    public sealed class FabricanteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Veiculo Fabricante Id"), Identity]
        public Int32? VeiculoFabricanteId
        {
            get { return Fields.VeiculoFabricanteId[this]; }
            set { Fields.VeiculoFabricanteId[this] = value; }
        }

        [DisplayName("Nome"), Size(80), NotNull, QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VeiculoFabricanteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FabricanteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VeiculoFabricanteId;
            public StringField Nome;
        }
    }
}
