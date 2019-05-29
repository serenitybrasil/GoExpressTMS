
namespace GoExpressTMS.CadastroBasico.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("CadastroBasico.Pais")]
    [BasedOnRow(typeof(Entities.PaisRow), CheckNames = true)]
    public class PaisColumns
    {
        [EditLink, Width(200)]
        public String Nome { get; set; }
        [Width(41)]
        public String Sigla { get; set; }
        [Width(200)]
        public String NomeInternacional { get; set; }
        [Width(60)]
        public Int32 Bacen { get; set; }
        [Width(200)]
        public String Nacionalidade { get; set; }
    }
}