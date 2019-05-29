
namespace GoExpressTMS.Auxiliar.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Auxiliar.TipoTelefone")]
    [BasedOnRow(typeof(Entities.TipoTelefoneRow), CheckNames = true)]
    public class TipoTelefoneColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 TipoTelefoneId { get; set; }
        [EditLink, Width(350)]
        public String Descricao { get; set; }
    }
}