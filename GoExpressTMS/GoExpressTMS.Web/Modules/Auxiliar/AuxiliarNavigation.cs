using Serenity.Navigation;
using MyPages = GoExpressTMS.Auxiliar.Pages;

[assembly: NavigationMenu(2000, "Auxiliar", icon: "fas fa-list")]
[assembly: NavigationLink(2001, "Auxiliar/Estado Civil", typeof(MyPages.EstadoCivilController), icon: null)]
[assembly: NavigationLink(2002, "Auxiliar/Grau de Instrução", typeof(MyPages.GrauInstrucaoController), icon: null)]
[assembly: NavigationLink(2003, "Auxiliar/Orgão Emissor", typeof(MyPages.OrgaoEmissorController), icon: null)]
[assembly: NavigationLink(2004, "Auxiliar/Tipos de Endereço", typeof(MyPages.TipoEnderecoController), icon: null)]
[assembly: NavigationLink(2005, "Auxiliar/Tipos de Telefone", typeof(MyPages.TipoTelefoneController), icon: null)]