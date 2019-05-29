
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("CadastroBasico.Estado")]
    [BasedOnRow(typeof(Entities.EstadoRow), CheckNames = true)]
    public class EstadoForm
    {
        [DefaultValue(1)]
        public Int32 PaisId { get; set; }
        public String Nome { get; set; }
        public String Uf { get; set; }
        public Int32 Ibge { get; set; }
        public String Ddd { get; set; }
    }
}