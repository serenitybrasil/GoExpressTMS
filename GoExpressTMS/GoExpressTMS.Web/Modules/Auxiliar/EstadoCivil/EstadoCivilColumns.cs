
namespace GoExpressTMS.Auxiliar.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Auxiliar.EstadoCivil")]
    [BasedOnRow(typeof(Entities.EstadoCivilRow), CheckNames = true)]
    public class EstadoCivilColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 EstadoCivilId { get; set; }
        [EditLink, Width(350)]
        public String Descricao { get; set; }
    }
}