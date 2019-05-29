
namespace GoExpressTMS.Auxiliar.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Auxiliar.OrgaoEmissor")]
    [BasedOnRow(typeof(Entities.OrgaoEmissorRow), CheckNames = true)]
    public class OrgaoEmissorColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 OrgaoEmissorId { get; set; }
        [EditLink, Width(350)]
        public String Nome { get; set; }
    }
}