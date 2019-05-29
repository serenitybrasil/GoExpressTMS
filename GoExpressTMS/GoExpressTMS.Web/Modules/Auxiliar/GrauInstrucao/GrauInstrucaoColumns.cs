
namespace GoExpressTMS.Auxiliar.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Auxiliar.GrauInstrucao")]
    [BasedOnRow(typeof(Entities.GrauInstrucaoRow), CheckNames = true)]
    public class GrauInstrucaoColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 GrauInstrucaoId { get; set; }
        [EditLink, Width(350)]
        public String Descricao { get; set; }
    }
}