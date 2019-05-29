
using Serenity.Extensibility;
using System.ComponentModel;

namespace GoExpressTMS.CadastroBasico
{
    [NestedPermissionKeys]
    [DisplayName("Cadastro Básico")]
    public class PermissionKeys
    {
        [DisplayName("Bairro")]
        public class Bairro
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Bairro:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Bairro:Alterar";
        }

        [DisplayName("Cep")]
        public class Cep
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Cep:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Cep:Alterar";
        }

        [DisplayName("Cidade")]
        public class Cidade
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Cidade:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Cidade:Alterar";
        }

        [DisplayName("Estado")]
        public class Estado
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Estado:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Estado:Alterar";
        }

        [DisplayName("Pais")]
        public class Pais
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Pais:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Pais:Alterar";
        }

        [DisplayName("Colaborador")]
        public class Colaborador
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Colaborador:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Colaborador:Alterar";
        }

        [DisplayName("Cliente")]
        public class Cliente
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Cliente:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Cliente:Alterar";
        }

        [DisplayName("Motorista")]
        public class Motorista
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Motorista:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Motorista:Alterar";
        }

        [DisplayName("Fabricante")]
        public class Fabricante
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Fabricante:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Fabricante:Alterar";
        }

        [DisplayName("Modelo")]
        public class Modelo
        {
            [Description("Visualizar")]
            public const string Visualizar = "Cadastro Básico:Modelo:Visualizar";
            [Description("Modificar")]
            public const string Alterar = "Cadastro Básico:Modelo:Alterar";
        }

    }
}