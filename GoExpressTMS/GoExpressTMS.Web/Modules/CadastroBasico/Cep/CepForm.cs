
namespace GoExpressTMS.CadastroBasico.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("CadastroBasico.Cep")]
    [BasedOnRow(typeof(Entities.CepRow), CheckNames = true)]
    public class CepForm
    {
        public String Cep { get; set; }
        public String Logradouro { get; set; }
        [OneWay, DefaultValue(1)]
        public Int32 PaisId { get; set; }
        public Int32 EstadoId { get; set; }
        public Int32 CidadeId { get; set; }
        public Int32 BairroId { get; set; }
    }
}