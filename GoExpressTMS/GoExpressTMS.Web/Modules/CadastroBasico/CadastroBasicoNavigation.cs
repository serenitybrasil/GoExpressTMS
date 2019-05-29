using Serenity.Navigation;
using MyPages = GoExpressTMS.CadastroBasico.Pages;

[assembly: NavigationMenu(3000, "Cadastro Básico", icon: "far fa-address-book")]
[assembly: NavigationLink(3001, "Cadastro Básico/Endereço/País", typeof(MyPages.PaisController), icon: null)]
[assembly: NavigationLink(3002, "Cadastro Básico/Endereço/Estado", typeof(MyPages.EstadoController), icon: null)]
[assembly: NavigationLink(3003, "Cadastro Básico/Endereço/Cidade", typeof(MyPages.CidadeController), icon: null)]
[assembly: NavigationLink(3004, "Cadastro Básico/Endereço/Bairro", typeof(MyPages.BairroController), icon: null)]
[assembly: NavigationLink(3005, "Cadastro Básico/Endereço/Cep", typeof(MyPages.CepController), icon: null)]
[assembly: NavigationLink(3006, "Cadastro Básico/Colaborador", typeof(MyPages.Pessoa_ColaboradorController), icon: null)]
[assembly: NavigationLink(3007, "Cadastro Básico/Cliente", typeof(MyPages.Pessoa_ClienteController), icon: null)]
[assembly: NavigationLink(3008, "Cadastro Básico/Motorista", typeof(MyPages.Pessoa_MotoristaController), icon: null)]
[assembly: NavigationLink(3009, "Cadastro Básico/Veículos/Fabricante", typeof(MyPages.FabricanteController), icon: null)]
[assembly: NavigationLink(3010, "Cadastro Básico/Veículos/Modelo", typeof(MyPages.ModeloController), icon: null)]