namespace GoExpressTMS.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Auxiliar {

            namespace Cliente {
                export const ClienteId: string;
                export const DataCadastro: string;
                export const PessoaId: string;
                export const PessoaNome: string;
                export const PessoaTipoPessoa: string;
            }

            namespace Colaborador {
                export const ColaboradorId: string;
                export const DataAdmissao: string;
                export const Matricula: string;
                export const PessoaId: string;
                export const TipoColaboradorId: string;
            }

            namespace EstadoCivil {
                export const Descricao: string;
                export const EstadoCivilId: string;
            }

            namespace GrauInstrucao {
                export const Descricao: string;
                export const GrauInstrucaoId: string;
            }

            namespace Motorista {
                export const DataCadastro: string;
                export const MotoristaId: string;
                export const PessoaId: string;
                export const PessoaNome: string;
                export const PessoaTipoPessoa: string;
            }

            namespace OrgaoEmissor {
                export const Nome: string;
                export const OrgaoEmissorId: string;
            }

            namespace PessoaFisica {
                export const CnhEmissao: string;
                export const CnhNumero: string;
                export const CnhTipo: string;
                export const CnhValidade: string;
                export const Cpf: string;
                export const DataNascimento: string;
                export const EstadoCivil: string;
                export const EstadoNascimento: string;
                export const Filiacao01: string;
                export const Filiacao02: string;
                export const GrauInstrucao: string;
                export const Nacionalidade: string;
                export const Naturalidade: string;
                export const PessoaFisicaId: string;
                export const PessoaId: string;
                export const Pis: string;
                export const RgNumero: string;
                export const RgOrgaoEmissor: string;
                export const RgUfEmissor: string;
                export const Sexo: string;
                export const TituloEleitorNumero: string;
                export const TituloEleitorSecao: string;
                export const TituloEleitorZona: string;
            }

            namespace PessoaJuridica {
                export const Cnpj: string;
                export const InscEstadual: string;
                export const InscMunicipal: string;
                export const PessoaId: string;
                export const PessoaJuridicaId: string;
                export const PessoaNome: string;
                export const PessoaTipoPessoa: string;
                export const RazaoSocial: string;
            }

            namespace TipoColaborador {
                export const Tipo: string;
                export const TipoColaboradorId: string;
            }

            namespace TipoEndereco {
                export const Descricao: string;
                export const TipoEnderecoId: string;
            }

            namespace TipoTelefone {
                export const Descricao: string;
                export const TipoTelefoneId: string;
            }
        }

        namespace CadastroBasico {

            namespace Bairro {
                export const BairroId: string;
                export const CidadeId: string;
                export const CidadeNome: string;
                export const EstadoId: string;
                export const Nome: string;
            }

            namespace Cep {
                export const BairroId: string;
                export const BairroNome: string;
                export const Cep: string;
                export const CepId: string;
                export const CidadeId: string;
                export const CidadeNome: string;
                export const EstadoId: string;
                export const EstadoNome: string;
                export const Logradouro: string;
                export const PaisId: string;
                export const PaisNome: string;
            }

            namespace Cidade {
                export const CidadeId: string;
                export const EstadoId: string;
                export const EstadoNome: string;
                export const EstadoPaisId: string;
                export const Ibge: string;
                export const Nome: string;
            }

            namespace Estado {
                export const Ddd: string;
                export const EstadoId: string;
                export const Ibge: string;
                export const Nome: string;
                export const PaisId: string;
                export const PaisNome: string;
                export const Uf: string;
            }

            namespace Fabricante {
                export const Nome: string;
                export const VeiculoFabricanteId: string;
            }

            namespace Modelo {
                export const Nome: string;
                export const VeiculoFabricanteId: string;
                export const VeiculoFabricanteNome: string;
                export const VeiculoModeloId: string;
            }

            namespace Pais {
                export const Bacen: string;
                export const Nacionalidade: string;
                export const Nome: string;
                export const NomeInternacional: string;
                export const PaisId: string;
                export const Sigla: string;
            }

            namespace Pessoa_Cliente {
                export const CnhEmissao: string;
                export const CnhNumero: string;
                export const CnhTipo: string;
                export const CnhValidade: string;
                export const Cnpj: string;
                export const Cpf: string;
                export const DataCadastro: string;
                export const DataNascimento: string;
                export const EstadoCivil: string;
                export const EstadoNascimento: string;
                export const Filiacao01: string;
                export const Filiacao02: string;
                export const GrauInstrucao: string;
                export const InscEstadual: string;
                export const InscMunicipal: string;
                export const Nacionalidade: string;
                export const Naturalidade: string;
                export const Nome: string;
                export const PessoaId: string;
                export const PessoaTipo: string;
                export const Pis: string;
                export const RazaoSocial: string;
                export const RgNumero: string;
                export const RgOrgaoEmissor: string;
                export const RgUfEmissor: string;
                export const Sexo: string;
                export const TipoPessoa: string;
                export const TituloEleitorNumero: string;
                export const TituloEleitorSecao: string;
                export const TituloEleitorZona: string;
            }

            namespace Pessoa_Colaborador {
                export const CnhEmissao: string;
                export const CnhNumero: string;
                export const CnhTipo: string;
                export const CnhValidade: string;
                export const Cpf: string;
                export const DataAdmissao: string;
                export const DataNascimento: string;
                export const EstadoCivil: string;
                export const EstadoNascimento: string;
                export const Filiacao01: string;
                export const Filiacao02: string;
                export const GrauInstrucao: string;
                export const Matricula: string;
                export const Nacionalidade: string;
                export const Naturalidade: string;
                export const Nome: string;
                export const PessoaId: string;
                export const Pis: string;
                export const RgNumero: string;
                export const RgOrgaoEmissor: string;
                export const RgUfEmissor: string;
                export const Sexo: string;
                export const TipoColaborador: string;
                export const TipoColaboradorId: string;
                export const TipoPessoa: string;
                export const TituloEleitorNumero: string;
                export const TituloEleitorSecao: string;
                export const TituloEleitorZona: string;
            }

            namespace Pessoa_Motorista {
                export const CnhEmissao: string;
                export const CnhNumero: string;
                export const CnhTipo: string;
                export const CnhValidade: string;
                export const Cpf: string;
                export const DataCadastro: string;
                export const DataNascimento: string;
                export const EstadoCivil: string;
                export const EstadoNascimento: string;
                export const Filiacao01: string;
                export const Filiacao02: string;
                export const GrauInstrucao: string;
                export const Nacionalidade: string;
                export const Naturalidade: string;
                export const Nome: string;
                export const PessoaId: string;
                export const Pis: string;
                export const RgNumero: string;
                export const RgOrgaoEmissor: string;
                export const RgUfEmissor: string;
                export const Sexo: string;
                export const TipoPessoa: string;
                export const TituloEleitorNumero: string;
                export const TituloEleitorSecao: string;
                export const TituloEleitorZona: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    GoExpressTMS['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Auxiliar:{Cliente:{ClienteId:1,DataCadastro:1,PessoaId:1,PessoaNome:1,PessoaTipoPessoa:1},Colaborador:{ColaboradorId:1,DataAdmissao:1,Matricula:1,PessoaId:1,TipoColaboradorId:1},EstadoCivil:{Descricao:1,EstadoCivilId:1},GrauInstrucao:{Descricao:1,GrauInstrucaoId:1},Motorista:{DataCadastro:1,MotoristaId:1,PessoaId:1,PessoaNome:1,PessoaTipoPessoa:1},OrgaoEmissor:{Nome:1,OrgaoEmissorId:1},PessoaFisica:{CnhEmissao:1,CnhNumero:1,CnhTipo:1,CnhValidade:1,Cpf:1,DataNascimento:1,EstadoCivil:1,EstadoNascimento:1,Filiacao01:1,Filiacao02:1,GrauInstrucao:1,Nacionalidade:1,Naturalidade:1,PessoaFisicaId:1,PessoaId:1,Pis:1,RgNumero:1,RgOrgaoEmissor:1,RgUfEmissor:1,Sexo:1,TituloEleitorNumero:1,TituloEleitorSecao:1,TituloEleitorZona:1},PessoaJuridica:{Cnpj:1,InscEstadual:1,InscMunicipal:1,PessoaId:1,PessoaJuridicaId:1,PessoaNome:1,PessoaTipoPessoa:1,RazaoSocial:1},TipoColaborador:{Tipo:1,TipoColaboradorId:1},TipoEndereco:{Descricao:1,TipoEnderecoId:1},TipoTelefone:{Descricao:1,TipoTelefoneId:1}},CadastroBasico:{Bairro:{BairroId:1,CidadeId:1,CidadeNome:1,EstadoId:1,Nome:1},Cep:{BairroId:1,BairroNome:1,Cep:1,CepId:1,CidadeId:1,CidadeNome:1,EstadoId:1,EstadoNome:1,Logradouro:1,PaisId:1,PaisNome:1},Cidade:{CidadeId:1,EstadoId:1,EstadoNome:1,EstadoPaisId:1,Ibge:1,Nome:1},Estado:{Ddd:1,EstadoId:1,Ibge:1,Nome:1,PaisId:1,PaisNome:1,Uf:1},Fabricante:{Nome:1,VeiculoFabricanteId:1},Modelo:{Nome:1,VeiculoFabricanteId:1,VeiculoFabricanteNome:1,VeiculoModeloId:1},Pais:{Bacen:1,Nacionalidade:1,Nome:1,NomeInternacional:1,PaisId:1,Sigla:1},Pessoa_Cliente:{CnhEmissao:1,CnhNumero:1,CnhTipo:1,CnhValidade:1,Cnpj:1,Cpf:1,DataCadastro:1,DataNascimento:1,EstadoCivil:1,EstadoNascimento:1,Filiacao01:1,Filiacao02:1,GrauInstrucao:1,InscEstadual:1,InscMunicipal:1,Nacionalidade:1,Naturalidade:1,Nome:1,PessoaId:1,PessoaTipo:1,Pis:1,RazaoSocial:1,RgNumero:1,RgOrgaoEmissor:1,RgUfEmissor:1,Sexo:1,TipoPessoa:1,TituloEleitorNumero:1,TituloEleitorSecao:1,TituloEleitorZona:1},Pessoa_Colaborador:{CnhEmissao:1,CnhNumero:1,CnhTipo:1,CnhValidade:1,Cpf:1,DataAdmissao:1,DataNascimento:1,EstadoCivil:1,EstadoNascimento:1,Filiacao01:1,Filiacao02:1,GrauInstrucao:1,Matricula:1,Nacionalidade:1,Naturalidade:1,Nome:1,PessoaId:1,Pis:1,RgNumero:1,RgOrgaoEmissor:1,RgUfEmissor:1,Sexo:1,TipoColaborador:1,TipoColaboradorId:1,TipoPessoa:1,TituloEleitorNumero:1,TituloEleitorSecao:1,TituloEleitorZona:1},Pessoa_Motorista:{CnhEmissao:1,CnhNumero:1,CnhTipo:1,CnhValidade:1,Cpf:1,DataCadastro:1,DataNascimento:1,EstadoCivil:1,EstadoNascimento:1,Filiacao01:1,Filiacao02:1,GrauInstrucao:1,Nacionalidade:1,Naturalidade:1,Nome:1,PessoaId:1,Pis:1,RgNumero:1,RgOrgaoEmissor:1,RgUfEmissor:1,Sexo:1,TipoPessoa:1,TituloEleitorNumero:1,TituloEleitorSecao:1,TituloEleitorZona:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

