
using Serenity.Extensibility;
using System.ComponentModel;

namespace GoExpressTMS.Auxiliar
{
    [NestedPermissionKeys]
    [DisplayName("Cadastros Auxiliares")]
    public class PermissionKeys
    {
        [DisplayName("Estado Civil")]
        public class EstadoCivil
        {
            [Description("Visualizar")]
            public const string Visualizar = "Auxiliar:EstadoCivil:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Auxiliar:EstadoCivil:Alterar";
        }

        [DisplayName("Grau de Instrução")]
        public class GrauInstrucao
        {
            [Description("Visualizar")]
            public const string Visualizar = "Auxiliar:GrauInstrucao:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Auxiliar:GrauInstrucao:Alterar";
        }

        [DisplayName("Órgão Emissor")]
        public class OrgaoEmissor
        {
            [Description("Visualizar")]
            public const string Visualizar = "Auxiliar:OrgaoEmissor:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Auxiliar:OrgaoEmissor:Alterar";
        }

        [DisplayName("Tipos de Endereço")]
        public class TipoEndereco
        {
            [Description("Visualizar")]
            public const string Visualizar = "Auxiliar:TipoEndereco:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Auxiliar:TipoEndereco:Alterar";
        }

        [DisplayName("Tipos de Telefone")]
        public class TipoTelefone
        {
            [Description("Visualizar")]
            public const string Visualizar = "Auxiliar:TipoTelefone:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Auxiliar:TipoTelefone:Alterar";
        }

        [DisplayName("Tipos de Colaborador")]
        public class TipoColaborador
        {
            [Description("Visualizar")]
            public const string Visualizar = "Auxiliar:TipoColaborador:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Auxiliar:TipoColaborador:Alterar";
        }



    }
}