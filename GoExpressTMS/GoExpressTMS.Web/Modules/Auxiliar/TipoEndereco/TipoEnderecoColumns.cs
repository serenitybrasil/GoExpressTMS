
namespace GoExpressTMS.Auxiliar.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Auxiliar.TipoEndereco")]
    [BasedOnRow(typeof(Entities.TipoEnderecoRow), CheckNames = true)]
    public class TipoEnderecoColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 TipoEnderecoId { get; set; }
        [EditLink, Width(350)]
        public String Descricao { get; set; }
    }
}