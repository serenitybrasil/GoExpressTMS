/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace GoExpressTMS.Administration {
}
declare namespace GoExpressTMS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace GoExpressTMS.Administration {
}
declare namespace GoExpressTMS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GoExpressTMS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace GoExpressTMS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace GoExpressTMS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace GoExpressTMS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace GoExpressTMS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace GoExpressTMS.Administration {
}
declare namespace GoExpressTMS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace GoExpressTMS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace GoExpressTMS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface ClienteRow {
        ClienteId?: number;
        PessoaId?: number;
        DataCadastro?: string;
        PessoaNome?: string;
        PessoaTipoPessoa?: string;
    }
    namespace ClienteRow {
        const idProperty = "ClienteId";
        const localTextPrefix = "Auxiliar.Cliente";
        const enum Fields {
            ClienteId = "ClienteId",
            PessoaId = "PessoaId",
            DataCadastro = "DataCadastro",
            PessoaNome = "PessoaNome",
            PessoaTipoPessoa = "PessoaTipoPessoa"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface ColaboradorRow {
        ColaboradorId?: number;
        PessoaId?: number;
        Matricula?: string;
        DataAdmissao?: string;
        TipoColaboradorId?: number;
    }
    namespace ColaboradorRow {
        const idProperty = "ColaboradorId";
        const nameProperty = "Matricula";
        const localTextPrefix = "Auxiliar.Colaborador";
        const enum Fields {
            ColaboradorId = "ColaboradorId",
            PessoaId = "PessoaId",
            Matricula = "Matricula",
            DataAdmissao = "DataAdmissao",
            TipoColaboradorId = "TipoColaboradorId"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
}
declare namespace GoExpressTMS.Auxiliar {
    interface EstadoCivilForm {
        Descricao: Serenity.StringEditor;
    }
    class EstadoCivilForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface EstadoCivilRow {
        EstadoCivilId?: number;
        Descricao?: string;
    }
    namespace EstadoCivilRow {
        const idProperty = "EstadoCivilId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Auxiliar.EstadoCivil";
        const lookupKey = "Auxiliar.EstadoCivil";
        function getLookup(): Q.Lookup<EstadoCivilRow>;
        const enum Fields {
            EstadoCivilId = "EstadoCivilId",
            Descricao = "Descricao"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    namespace EstadoCivilService {
        const baseUrl = "Auxiliar/EstadoCivil";
        function Create(request: Serenity.SaveRequest<EstadoCivilRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EstadoCivilRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadoCivilRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadoCivilRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Auxiliar/EstadoCivil/Create",
            Update = "Auxiliar/EstadoCivil/Update",
            Delete = "Auxiliar/EstadoCivil/Delete",
            Retrieve = "Auxiliar/EstadoCivil/Retrieve",
            List = "Auxiliar/EstadoCivil/List"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
}
declare namespace GoExpressTMS.Auxiliar {
    interface GrauInstrucaoForm {
        Descricao: Serenity.StringEditor;
    }
    class GrauInstrucaoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface GrauInstrucaoRow {
        GrauInstrucaoId?: number;
        Descricao?: string;
    }
    namespace GrauInstrucaoRow {
        const idProperty = "GrauInstrucaoId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Auxiliar.GrauInstrucao";
        const lookupKey = "Auxiliar.GrauInstrucao";
        function getLookup(): Q.Lookup<GrauInstrucaoRow>;
        const enum Fields {
            GrauInstrucaoId = "GrauInstrucaoId",
            Descricao = "Descricao"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    namespace GrauInstrucaoService {
        const baseUrl = "Auxiliar/GrauInstrucao";
        function Create(request: Serenity.SaveRequest<GrauInstrucaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GrauInstrucaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GrauInstrucaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GrauInstrucaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Auxiliar/GrauInstrucao/Create",
            Update = "Auxiliar/GrauInstrucao/Update",
            Delete = "Auxiliar/GrauInstrucao/Delete",
            Retrieve = "Auxiliar/GrauInstrucao/Retrieve",
            List = "Auxiliar/GrauInstrucao/List"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface MotoristaRow {
        MotoristaId?: number;
        PessoaId?: number;
        DataCadastro?: string;
        PessoaNome?: string;
        PessoaTipoPessoa?: string;
    }
    namespace MotoristaRow {
        const idProperty = "MotoristaId";
        const localTextPrefix = "Auxiliar.Motorista";
        const enum Fields {
            MotoristaId = "MotoristaId",
            PessoaId = "PessoaId",
            DataCadastro = "DataCadastro",
            PessoaNome = "PessoaNome",
            PessoaTipoPessoa = "PessoaTipoPessoa"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
}
declare namespace GoExpressTMS.Auxiliar {
    interface OrgaoEmissorForm {
        Nome: Serenity.StringEditor;
    }
    class OrgaoEmissorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface OrgaoEmissorRow {
        OrgaoEmissorId?: number;
        Nome?: string;
    }
    namespace OrgaoEmissorRow {
        const idProperty = "OrgaoEmissorId";
        const nameProperty = "Nome";
        const localTextPrefix = "Auxiliar.OrgaoEmissor";
        const lookupKey = "Auxiliar.OrgaoEmissor";
        function getLookup(): Q.Lookup<OrgaoEmissorRow>;
        const enum Fields {
            OrgaoEmissorId = "OrgaoEmissorId",
            Nome = "Nome"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    namespace OrgaoEmissorService {
        const baseUrl = "Auxiliar/OrgaoEmissor";
        function Create(request: Serenity.SaveRequest<OrgaoEmissorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrgaoEmissorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrgaoEmissorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrgaoEmissorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Auxiliar/OrgaoEmissor/Create",
            Update = "Auxiliar/OrgaoEmissor/Update",
            Delete = "Auxiliar/OrgaoEmissor/Delete",
            Retrieve = "Auxiliar/OrgaoEmissor/Retrieve",
            List = "Auxiliar/OrgaoEmissor/List"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface PessoaFisicaRow {
        PessoaFisicaId?: number;
        PessoaId?: number;
        DataNascimento?: string;
        Filiacao01?: string;
        Filiacao02?: string;
        Cpf?: string;
        RgNumero?: string;
        RgOrgaoEmissor?: number;
        RgUfEmissor?: number;
        TituloEleitorNumero?: string;
        TituloEleitorZona?: string;
        TituloEleitorSecao?: string;
        Pis?: string;
        CnhNumero?: string;
        CnhTipo?: string;
        CnhEmissao?: string;
        CnhValidade?: string;
        EstadoCivil?: number;
        Sexo?: string;
        GrauInstrucao?: number;
        Nacionalidade?: number;
        EstadoNascimento?: number;
        Naturalidade?: number;
    }
    namespace PessoaFisicaRow {
        const idProperty = "PessoaFisicaId";
        const nameProperty = "Filiacao01";
        const localTextPrefix = "Auxiliar.PessoaFisica";
        const enum Fields {
            PessoaFisicaId = "PessoaFisicaId",
            PessoaId = "PessoaId",
            DataNascimento = "DataNascimento",
            Filiacao01 = "Filiacao01",
            Filiacao02 = "Filiacao02",
            Cpf = "Cpf",
            RgNumero = "RgNumero",
            RgOrgaoEmissor = "RgOrgaoEmissor",
            RgUfEmissor = "RgUfEmissor",
            TituloEleitorNumero = "TituloEleitorNumero",
            TituloEleitorZona = "TituloEleitorZona",
            TituloEleitorSecao = "TituloEleitorSecao",
            Pis = "Pis",
            CnhNumero = "CnhNumero",
            CnhTipo = "CnhTipo",
            CnhEmissao = "CnhEmissao",
            CnhValidade = "CnhValidade",
            EstadoCivil = "EstadoCivil",
            Sexo = "Sexo",
            GrauInstrucao = "GrauInstrucao",
            Nacionalidade = "Nacionalidade",
            EstadoNascimento = "EstadoNascimento",
            Naturalidade = "Naturalidade"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface PessoaJuridicaRow {
        PessoaJuridicaId?: number;
        PessoaId?: number;
        RazaoSocial?: string;
        Cnpj?: string;
        InscEstadual?: string;
        InscMunicipal?: string;
        PessoaNome?: string;
        PessoaTipoPessoa?: string;
    }
    namespace PessoaJuridicaRow {
        const idProperty = "PessoaJuridicaId";
        const nameProperty = "RazaoSocial";
        const localTextPrefix = "Auxiliar.PessoaJuridica";
        const enum Fields {
            PessoaJuridicaId = "PessoaJuridicaId",
            PessoaId = "PessoaId",
            RazaoSocial = "RazaoSocial",
            Cnpj = "Cnpj",
            InscEstadual = "InscEstadual",
            InscMunicipal = "InscMunicipal",
            PessoaNome = "PessoaNome",
            PessoaTipoPessoa = "PessoaTipoPessoa"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface TipoColaboradorRow {
        TipoColaboradorId?: number;
        Tipo?: string;
    }
    namespace TipoColaboradorRow {
        const idProperty = "TipoColaboradorId";
        const nameProperty = "Tipo";
        const localTextPrefix = "Auxiliar.TipoColaborador";
        const lookupKey = "Auxiliar.TipoColaborador";
        function getLookup(): Q.Lookup<TipoColaboradorRow>;
        const enum Fields {
            TipoColaboradorId = "TipoColaboradorId",
            Tipo = "Tipo"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
}
declare namespace GoExpressTMS.Auxiliar {
    interface TipoEnderecoForm {
        Descricao: Serenity.StringEditor;
    }
    class TipoEnderecoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface TipoEnderecoRow {
        TipoEnderecoId?: number;
        Descricao?: string;
    }
    namespace TipoEnderecoRow {
        const idProperty = "TipoEnderecoId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Auxiliar.TipoEndereco";
        const lookupKey = "Auxiliar.TipoEndereco";
        function getLookup(): Q.Lookup<TipoEnderecoRow>;
        const enum Fields {
            TipoEnderecoId = "TipoEnderecoId",
            Descricao = "Descricao"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    namespace TipoEnderecoService {
        const baseUrl = "Auxiliar/TipoEndereco";
        function Create(request: Serenity.SaveRequest<TipoEnderecoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoEnderecoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoEnderecoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoEnderecoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Auxiliar/TipoEndereco/Create",
            Update = "Auxiliar/TipoEndereco/Update",
            Delete = "Auxiliar/TipoEndereco/Delete",
            Retrieve = "Auxiliar/TipoEndereco/Retrieve",
            List = "Auxiliar/TipoEndereco/List"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
}
declare namespace GoExpressTMS.Auxiliar {
    interface TipoTelefoneForm {
        Descricao: Serenity.StringEditor;
    }
    class TipoTelefoneForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    interface TipoTelefoneRow {
        TipoTelefoneId?: number;
        Descricao?: string;
    }
    namespace TipoTelefoneRow {
        const idProperty = "TipoTelefoneId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Auxiliar.TipoTelefone";
        const lookupKey = "Auxiliar.TipoTelefone";
        function getLookup(): Q.Lookup<TipoTelefoneRow>;
        const enum Fields {
            TipoTelefoneId = "TipoTelefoneId",
            Descricao = "Descricao"
        }
    }
}
declare namespace GoExpressTMS.Auxiliar {
    namespace TipoTelefoneService {
        const baseUrl = "Auxiliar/TipoTelefone";
        function Create(request: Serenity.SaveRequest<TipoTelefoneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoTelefoneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoTelefoneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoTelefoneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Auxiliar/TipoTelefone/Create",
            Update = "Auxiliar/TipoTelefone/Update",
            Delete = "Auxiliar/TipoTelefone/Delete",
            Retrieve = "Auxiliar/TipoTelefone/Retrieve",
            List = "Auxiliar/TipoTelefone/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface BairroForm {
        Nome: Serenity.StringEditor;
        CidadeId: Serenity.LookupEditor;
    }
    class BairroForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface BairroRow {
        BairroId?: number;
        Nome?: string;
        CidadeId?: number;
        CidadeNome?: string;
        EstadoId?: number;
    }
    namespace BairroRow {
        const idProperty = "BairroId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Bairro";
        const lookupKey = "CadastroBasico.Bairro";
        function getLookup(): Q.Lookup<BairroRow>;
        const enum Fields {
            BairroId = "BairroId",
            Nome = "Nome",
            CidadeId = "CidadeId",
            CidadeNome = "CidadeNome",
            EstadoId = "EstadoId"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace BairroService {
        const baseUrl = "CadastroBasico/Bairro";
        function Create(request: Serenity.SaveRequest<BairroRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BairroRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BairroRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BairroRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Bairro/Create",
            Update = "CadastroBasico/Bairro/Update",
            Delete = "CadastroBasico/Bairro/Delete",
            Retrieve = "CadastroBasico/Bairro/Retrieve",
            List = "CadastroBasico/Bairro/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface CepForm {
        Cep: Serenity.MaskedEditor;
        Logradouro: Serenity.StringEditor;
        PaisId: Serenity.LookupEditor;
        EstadoId: Serenity.LookupEditor;
        CidadeId: Serenity.LookupEditor;
        BairroId: Serenity.LookupEditor;
    }
    class CepForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface CepRow {
        CepId?: number;
        Cep?: string;
        Logradouro?: string;
        PaisId?: number;
        PaisNome?: string;
        EstadoId?: number;
        EstadoNome?: string;
        CidadeId?: number;
        CidadeNome?: string;
        BairroId?: number;
        BairroNome?: string;
    }
    namespace CepRow {
        const idProperty = "CepId";
        const nameProperty = "Cep";
        const localTextPrefix = "CadastroBasico.Cep";
        const lookupKey = "CadastroBasico.Cep";
        function getLookup(): Q.Lookup<CepRow>;
        const enum Fields {
            CepId = "CepId",
            Cep = "Cep",
            Logradouro = "Logradouro",
            PaisId = "PaisId",
            PaisNome = "PaisNome",
            EstadoId = "EstadoId",
            EstadoNome = "EstadoNome",
            CidadeId = "CidadeId",
            CidadeNome = "CidadeNome",
            BairroId = "BairroId",
            BairroNome = "BairroNome"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace CepService {
        const baseUrl = "CadastroBasico/Cep";
        function Create(request: Serenity.SaveRequest<CepRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CepRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CepRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CepRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Cep/Create",
            Update = "CadastroBasico/Cep/Update",
            Delete = "CadastroBasico/Cep/Delete",
            Retrieve = "CadastroBasico/Cep/Retrieve",
            List = "CadastroBasico/Cep/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface CidadeForm {
        Nome: Serenity.StringEditor;
        EstadoId: Serenity.LookupEditor;
        Ibge: Serenity.IntegerEditor;
    }
    class CidadeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface CidadeRow {
        CidadeId?: number;
        Nome?: string;
        EstadoId?: number;
        EstadoNome?: string;
        Ibge?: number;
        EstadoPaisId?: number;
    }
    namespace CidadeRow {
        const idProperty = "CidadeId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Cidade";
        const lookupKey = "CadastroBasico.Cidade";
        function getLookup(): Q.Lookup<CidadeRow>;
        const enum Fields {
            CidadeId = "CidadeId",
            Nome = "Nome",
            EstadoId = "EstadoId",
            EstadoNome = "EstadoNome",
            Ibge = "Ibge",
            EstadoPaisId = "EstadoPaisId"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace CidadeService {
        const baseUrl = "CadastroBasico/Cidade";
        function Create(request: Serenity.SaveRequest<CidadeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CidadeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CidadeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CidadeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Cidade/Create",
            Update = "CadastroBasico/Cidade/Update",
            Delete = "CadastroBasico/Cidade/Delete",
            Retrieve = "CadastroBasico/Cidade/Retrieve",
            List = "CadastroBasico/Cidade/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface EstadoForm {
        PaisId: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
        Ibge: Serenity.IntegerEditor;
        Ddd: Serenity.StringEditor;
    }
    class EstadoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface EstadoRow {
        EstadoId?: number;
        Nome?: string;
        Uf?: string;
        Ibge?: number;
        Ddd?: string;
        PaisId?: number;
        PaisNome?: string;
    }
    namespace EstadoRow {
        const idProperty = "EstadoId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Estado";
        const lookupKey = "CadastroBasico.Estado";
        function getLookup(): Q.Lookup<EstadoRow>;
        const enum Fields {
            EstadoId = "EstadoId",
            Nome = "Nome",
            Uf = "Uf",
            Ibge = "Ibge",
            Ddd = "Ddd",
            PaisId = "PaisId",
            PaisNome = "PaisNome"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace EstadoService {
        const baseUrl = "CadastroBasico/Estado";
        function Create(request: Serenity.SaveRequest<EstadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EstadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Estado/Create",
            Update = "CadastroBasico/Estado/Update",
            Delete = "CadastroBasico/Estado/Delete",
            Retrieve = "CadastroBasico/Estado/Retrieve",
            List = "CadastroBasico/Estado/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface FabricanteForm {
        Nome: Serenity.StringEditor;
    }
    class FabricanteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface FabricanteRow {
        VeiculoFabricanteId?: number;
        Nome?: string;
    }
    namespace FabricanteRow {
        const idProperty = "VeiculoFabricanteId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Fabricante";
        const lookupKey = "CadastroBasico.Fabricante";
        function getLookup(): Q.Lookup<FabricanteRow>;
        const enum Fields {
            VeiculoFabricanteId = "VeiculoFabricanteId",
            Nome = "Nome"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace FabricanteService {
        const baseUrl = "CadastroBasico/Fabricante";
        function Create(request: Serenity.SaveRequest<FabricanteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FabricanteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FabricanteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FabricanteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Fabricante/Create",
            Update = "CadastroBasico/Fabricante/Update",
            Delete = "CadastroBasico/Fabricante/Delete",
            Retrieve = "CadastroBasico/Fabricante/Retrieve",
            List = "CadastroBasico/Fabricante/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface ModeloForm {
        VeiculoFabricanteId: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
    }
    class ModeloForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface ModeloRow {
        VeiculoModeloId?: number;
        VeiculoFabricanteId?: number;
        Nome?: string;
        VeiculoFabricanteNome?: string;
    }
    namespace ModeloRow {
        const idProperty = "VeiculoModeloId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Modelo";
        const lookupKey = "CadastroBasico.Modelo";
        function getLookup(): Q.Lookup<ModeloRow>;
        const enum Fields {
            VeiculoModeloId = "VeiculoModeloId",
            VeiculoFabricanteId = "VeiculoFabricanteId",
            Nome = "Nome",
            VeiculoFabricanteNome = "VeiculoFabricanteNome"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace ModeloService {
        const baseUrl = "CadastroBasico/Modelo";
        function Create(request: Serenity.SaveRequest<ModeloRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ModeloRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ModeloRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ModeloRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Modelo/Create",
            Update = "CadastroBasico/Modelo/Update",
            Delete = "CadastroBasico/Modelo/Delete",
            Retrieve = "CadastroBasico/Modelo/Retrieve",
            List = "CadastroBasico/Modelo/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface PaisForm {
        Nome: Serenity.StringEditor;
        Sigla: Serenity.StringEditor;
        NomeInternacional: Serenity.StringEditor;
        Bacen: Serenity.IntegerEditor;
        Nacionalidade: Serenity.StringEditor;
    }
    class PaisForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface PaisRow {
        PaisId?: number;
        Nome?: string;
        Sigla?: string;
        NomeInternacional?: string;
        Bacen?: number;
        Nacionalidade?: string;
    }
    namespace PaisRow {
        const idProperty = "PaisId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Pais";
        const lookupKey = "CadastroBasico.Pais";
        function getLookup(): Q.Lookup<PaisRow>;
        const enum Fields {
            PaisId = "PaisId",
            Nome = "Nome",
            Sigla = "Sigla",
            NomeInternacional = "NomeInternacional",
            Bacen = "Bacen",
            Nacionalidade = "Nacionalidade"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace PaisService {
        const baseUrl = "CadastroBasico/Pais";
        function Create(request: Serenity.SaveRequest<PaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Pais/Create",
            Update = "CadastroBasico/Pais/Update",
            Delete = "CadastroBasico/Pais/Delete",
            Retrieve = "CadastroBasico/Pais/Retrieve",
            List = "CadastroBasico/Pais/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface Pessoa_ClienteForm {
        TipoPessoa: TipoPessoaEditor;
        Nome: Serenity.StringEditor;
        RazaoSocial: Serenity.StringEditor;
        DataCadastro: Serenity.DateEditor;
        Sexo: SexoEditor;
        DataNascimento: Serenity.DateEditor;
        EstadoCivil: Serenity.LookupEditor;
        Filiacao01: Serenity.StringEditor;
        Filiacao02: Serenity.StringEditor;
        Nacionalidade: Serenity.LookupEditor;
        EstadoNascimento: Serenity.LookupEditor;
        Naturalidade: Serenity.LookupEditor;
        Cnpj: Serenity.MaskedEditor;
        InscEstadual: Serenity.StringEditor;
        InscMunicipal: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        RgNumero: Serenity.StringEditor;
        RgOrgaoEmissor: Serenity.LookupEditor;
        RgUfEmissor: Serenity.LookupEditor;
        TituloEleitorNumero: Serenity.StringEditor;
        TituloEleitorZona: Serenity.StringEditor;
        TituloEleitorSecao: Serenity.StringEditor;
        Pis: Serenity.StringEditor;
        CnhNumero: Serenity.StringEditor;
        CnhTipo: Serenity.StringEditor;
        CnhEmissao: Serenity.DateEditor;
        CnhValidade: Serenity.DateEditor;
        GrauInstrucao: Serenity.LookupEditor;
    }
    class Pessoa_ClienteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface Pessoa_ClienteRow {
        PessoaId?: number;
        Nome?: string;
        TipoPessoa?: string;
        PessoaTipo?: string;
        DataCadastro?: string;
        DataNascimento?: string;
        Filiacao01?: string;
        Filiacao02?: string;
        Cpf?: string;
        RgNumero?: string;
        RgOrgaoEmissor?: number;
        RgUfEmissor?: number;
        TituloEleitorNumero?: string;
        TituloEleitorZona?: string;
        TituloEleitorSecao?: string;
        Pis?: string;
        CnhNumero?: string;
        CnhTipo?: string;
        CnhEmissao?: string;
        CnhValidade?: string;
        EstadoCivil?: number;
        Sexo?: string;
        GrauInstrucao?: number;
        Nacionalidade?: number;
        EstadoNascimento?: number;
        Naturalidade?: number;
        RazaoSocial?: string;
        Cnpj?: string;
        InscEstadual?: string;
        InscMunicipal?: string;
    }
    namespace Pessoa_ClienteRow {
        const idProperty = "PessoaId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Pessoa_Cliente";
        const enum Fields {
            PessoaId = "PessoaId",
            Nome = "Nome",
            TipoPessoa = "TipoPessoa",
            PessoaTipo = "PessoaTipo",
            DataCadastro = "DataCadastro",
            DataNascimento = "DataNascimento",
            Filiacao01 = "Filiacao01",
            Filiacao02 = "Filiacao02",
            Cpf = "Cpf",
            RgNumero = "RgNumero",
            RgOrgaoEmissor = "RgOrgaoEmissor",
            RgUfEmissor = "RgUfEmissor",
            TituloEleitorNumero = "TituloEleitorNumero",
            TituloEleitorZona = "TituloEleitorZona",
            TituloEleitorSecao = "TituloEleitorSecao",
            Pis = "Pis",
            CnhNumero = "CnhNumero",
            CnhTipo = "CnhTipo",
            CnhEmissao = "CnhEmissao",
            CnhValidade = "CnhValidade",
            EstadoCivil = "EstadoCivil",
            Sexo = "Sexo",
            GrauInstrucao = "GrauInstrucao",
            Nacionalidade = "Nacionalidade",
            EstadoNascimento = "EstadoNascimento",
            Naturalidade = "Naturalidade",
            RazaoSocial = "RazaoSocial",
            Cnpj = "Cnpj",
            InscEstadual = "InscEstadual",
            InscMunicipal = "InscMunicipal"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace Pessoa_ClienteService {
        const baseUrl = "CadastroBasico/Pessoa_Cliente";
        function Create(request: Serenity.SaveRequest<Pessoa_ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<Pessoa_ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Pessoa_ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Pessoa_ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Pessoa_Cliente/Create",
            Update = "CadastroBasico/Pessoa_Cliente/Update",
            Delete = "CadastroBasico/Pessoa_Cliente/Delete",
            Retrieve = "CadastroBasico/Pessoa_Cliente/Retrieve",
            List = "CadastroBasico/Pessoa_Cliente/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface Pessoa_ColaboradorForm {
        Matricula: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        DataAdmissao: Serenity.DateEditor;
        TipoColaboradorId: Serenity.LookupEditor;
        Sexo: SexoEditor;
        DataNascimento: Serenity.DateEditor;
        EstadoCivil: Serenity.LookupEditor;
        Filiacao01: Serenity.StringEditor;
        Filiacao02: Serenity.StringEditor;
        Nacionalidade: Serenity.LookupEditor;
        EstadoNascimento: Serenity.LookupEditor;
        Naturalidade: Serenity.LookupEditor;
        Cpf: Serenity.MaskedEditor;
        RgNumero: Serenity.StringEditor;
        RgOrgaoEmissor: Serenity.LookupEditor;
        RgUfEmissor: Serenity.LookupEditor;
        TituloEleitorNumero: Serenity.StringEditor;
        TituloEleitorZona: Serenity.StringEditor;
        TituloEleitorSecao: Serenity.StringEditor;
        Pis: Serenity.StringEditor;
        CnhNumero: Serenity.StringEditor;
        CnhTipo: Serenity.StringEditor;
        CnhEmissao: Serenity.DateEditor;
        CnhValidade: Serenity.DateEditor;
        GrauInstrucao: Serenity.LookupEditor;
    }
    class Pessoa_ColaboradorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface Pessoa_ColaboradorRow {
        PessoaId?: number;
        Nome?: string;
        TipoPessoa?: string;
        Matricula?: string;
        DataAdmissao?: string;
        TipoColaboradorId?: number;
        TipoColaborador?: string;
        DataNascimento?: string;
        Filiacao01?: string;
        Filiacao02?: string;
        Cpf?: string;
        RgNumero?: string;
        RgOrgaoEmissor?: number;
        RgUfEmissor?: number;
        TituloEleitorNumero?: string;
        TituloEleitorZona?: string;
        TituloEleitorSecao?: string;
        Pis?: string;
        CnhNumero?: string;
        CnhTipo?: string;
        CnhEmissao?: string;
        CnhValidade?: string;
        EstadoCivil?: number;
        Sexo?: string;
        GrauInstrucao?: number;
        Nacionalidade?: number;
        EstadoNascimento?: number;
        Naturalidade?: number;
    }
    namespace Pessoa_ColaboradorRow {
        const idProperty = "PessoaId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Pessoa_Colaborador";
        const enum Fields {
            PessoaId = "PessoaId",
            Nome = "Nome",
            TipoPessoa = "TipoPessoa",
            Matricula = "Matricula",
            DataAdmissao = "DataAdmissao",
            TipoColaboradorId = "TipoColaboradorId",
            TipoColaborador = "TipoColaborador",
            DataNascimento = "DataNascimento",
            Filiacao01 = "Filiacao01",
            Filiacao02 = "Filiacao02",
            Cpf = "Cpf",
            RgNumero = "RgNumero",
            RgOrgaoEmissor = "RgOrgaoEmissor",
            RgUfEmissor = "RgUfEmissor",
            TituloEleitorNumero = "TituloEleitorNumero",
            TituloEleitorZona = "TituloEleitorZona",
            TituloEleitorSecao = "TituloEleitorSecao",
            Pis = "Pis",
            CnhNumero = "CnhNumero",
            CnhTipo = "CnhTipo",
            CnhEmissao = "CnhEmissao",
            CnhValidade = "CnhValidade",
            EstadoCivil = "EstadoCivil",
            Sexo = "Sexo",
            GrauInstrucao = "GrauInstrucao",
            Nacionalidade = "Nacionalidade",
            EstadoNascimento = "EstadoNascimento",
            Naturalidade = "Naturalidade"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace Pessoa_ColaboradorService {
        const baseUrl = "CadastroBasico/Pessoa_Colaborador";
        function Create(request: Serenity.SaveRequest<Pessoa_ColaboradorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<Pessoa_ColaboradorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Pessoa_ColaboradorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Pessoa_ColaboradorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Pessoa_Colaborador/Create",
            Update = "CadastroBasico/Pessoa_Colaborador/Update",
            Delete = "CadastroBasico/Pessoa_Colaborador/Delete",
            Retrieve = "CadastroBasico/Pessoa_Colaborador/Retrieve",
            List = "CadastroBasico/Pessoa_Colaborador/List"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
}
declare namespace GoExpressTMS.CadastroBasico {
    interface Pessoa_MotoristaForm {
        Nome: Serenity.StringEditor;
        DataCadastro: Serenity.DateEditor;
        Sexo: SexoEditor;
        DataNascimento: Serenity.DateEditor;
        EstadoCivil: Serenity.LookupEditor;
        Filiacao01: Serenity.StringEditor;
        Filiacao02: Serenity.StringEditor;
        Nacionalidade: Serenity.LookupEditor;
        EstadoNascimento: Serenity.LookupEditor;
        Naturalidade: Serenity.LookupEditor;
        Cpf: Serenity.MaskedEditor;
        RgNumero: Serenity.StringEditor;
        RgOrgaoEmissor: Serenity.LookupEditor;
        RgUfEmissor: Serenity.LookupEditor;
        TituloEleitorNumero: Serenity.StringEditor;
        TituloEleitorZona: Serenity.StringEditor;
        TituloEleitorSecao: Serenity.StringEditor;
        Pis: Serenity.StringEditor;
        CnhNumero: Serenity.StringEditor;
        CnhTipo: Serenity.StringEditor;
        CnhEmissao: Serenity.DateEditor;
        CnhValidade: Serenity.DateEditor;
        GrauInstrucao: Serenity.LookupEditor;
    }
    class Pessoa_MotoristaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    interface Pessoa_MotoristaRow {
        PessoaId?: number;
        Nome?: string;
        TipoPessoa?: string;
        DataCadastro?: string;
        DataNascimento?: string;
        Filiacao01?: string;
        Filiacao02?: string;
        Cpf?: string;
        RgNumero?: string;
        RgOrgaoEmissor?: number;
        RgUfEmissor?: number;
        TituloEleitorNumero?: string;
        TituloEleitorZona?: string;
        TituloEleitorSecao?: string;
        Pis?: string;
        CnhNumero?: string;
        CnhTipo?: string;
        CnhEmissao?: string;
        CnhValidade?: string;
        EstadoCivil?: number;
        Sexo?: string;
        GrauInstrucao?: number;
        Nacionalidade?: number;
        EstadoNascimento?: number;
        Naturalidade?: number;
    }
    namespace Pessoa_MotoristaRow {
        const idProperty = "PessoaId";
        const nameProperty = "Nome";
        const localTextPrefix = "CadastroBasico.Pessoa_Motorista";
        const enum Fields {
            PessoaId = "PessoaId",
            Nome = "Nome",
            TipoPessoa = "TipoPessoa",
            DataCadastro = "DataCadastro",
            DataNascimento = "DataNascimento",
            Filiacao01 = "Filiacao01",
            Filiacao02 = "Filiacao02",
            Cpf = "Cpf",
            RgNumero = "RgNumero",
            RgOrgaoEmissor = "RgOrgaoEmissor",
            RgUfEmissor = "RgUfEmissor",
            TituloEleitorNumero = "TituloEleitorNumero",
            TituloEleitorZona = "TituloEleitorZona",
            TituloEleitorSecao = "TituloEleitorSecao",
            Pis = "Pis",
            CnhNumero = "CnhNumero",
            CnhTipo = "CnhTipo",
            CnhEmissao = "CnhEmissao",
            CnhValidade = "CnhValidade",
            EstadoCivil = "EstadoCivil",
            Sexo = "Sexo",
            GrauInstrucao = "GrauInstrucao",
            Nacionalidade = "Nacionalidade",
            EstadoNascimento = "EstadoNascimento",
            Naturalidade = "Naturalidade"
        }
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    namespace Pessoa_MotoristaService {
        const baseUrl = "CadastroBasico/Pessoa_Motorista";
        function Create(request: Serenity.SaveRequest<Pessoa_MotoristaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<Pessoa_MotoristaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Pessoa_MotoristaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Pessoa_MotoristaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CadastroBasico/Pessoa_Motorista/Create",
            Update = "CadastroBasico/Pessoa_Motorista/Update",
            Delete = "CadastroBasico/Pessoa_Motorista/Delete",
            Retrieve = "CadastroBasico/Pessoa_Motorista/Retrieve",
            List = "CadastroBasico/Pessoa_Motorista/List"
        }
    }
}
declare namespace GoExpressTMS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace GoExpressTMS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace GoExpressTMS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace GoExpressTMS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace GoExpressTMS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace GoExpressTMS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace GoExpressTMS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace GoExpressTMS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace GoExpressTMS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace GoExpressTMS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GoExpressTMS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace GoExpressTMS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace GoExpressTMS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GoExpressTMS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GoExpressTMS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace GoExpressTMS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace GoExpressTMS.Texts {
}
declare namespace GoExpressTMS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace GoExpressTMS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace GoExpressTMS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GoExpressTMS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace GoExpressTMS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace GoExpressTMS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace GoExpressTMS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace GoExpressTMS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace GoExpressTMS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace GoExpressTMS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace GoExpressTMS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace GoExpressTMS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace GoExpressTMS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class EstadoCivilDialog extends Serenity.EntityDialog<EstadoCivilRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EstadoCivilForm;
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class EstadoCivilGrid extends Serenity.EntityGrid<EstadoCivilRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EstadoCivilDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class GrauInstrucaoDialog extends Serenity.EntityDialog<GrauInstrucaoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GrauInstrucaoForm;
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class GrauInstrucaoGrid extends Serenity.EntityGrid<GrauInstrucaoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GrauInstrucaoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class OrgaoEmissorDialog extends Serenity.EntityDialog<OrgaoEmissorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrgaoEmissorForm;
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class OrgaoEmissorGrid extends Serenity.EntityGrid<OrgaoEmissorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrgaoEmissorDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class TipoEnderecoDialog extends Serenity.EntityDialog<TipoEnderecoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TipoEnderecoForm;
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class TipoEnderecoGrid extends Serenity.EntityGrid<TipoEnderecoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoEnderecoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class TipoTelefoneDialog extends Serenity.EntityDialog<TipoTelefoneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TipoTelefoneForm;
    }
}
declare namespace GoExpressTMS.Auxiliar {
    class TipoTelefoneGrid extends Serenity.EntityGrid<TipoTelefoneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoTelefoneDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class BairroDialog extends Serenity.EntityDialog<BairroRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BairroForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class BairroGrid extends Serenity.EntityGrid<BairroRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BairroDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class CepDialog extends Serenity.EntityDialog<CepRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CepForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class CepGrid extends Serenity.EntityGrid<CepRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CepDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class CidadeDialog extends Serenity.EntityDialog<CidadeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CidadeForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class CidadeGrid extends Serenity.EntityGrid<CidadeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CidadeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class EstadoDialog extends Serenity.EntityDialog<EstadoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EstadoForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class EstadoGrid extends Serenity.EntityGrid<EstadoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EstadoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class FabricanteDialog extends Serenity.EntityDialog<FabricanteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FabricanteForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class FabricanteGrid extends Serenity.EntityGrid<FabricanteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FabricanteDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class ModeloDialog extends Serenity.EntityDialog<ModeloRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ModeloForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class ModeloGrid extends Serenity.EntityGrid<ModeloRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ModeloDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class PaisDialog extends Serenity.EntityDialog<PaisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PaisForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class PaisGrid extends Serenity.EntityGrid<PaisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class Pessoa_ClienteDialog extends Serenity.EntityDialog<Pessoa_ClienteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Pessoa_ClienteForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class Pessoa_ClienteGrid extends Serenity.EntityGrid<Pessoa_ClienteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Pessoa_ClienteDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class Pessoa_ColaboradorDialog extends Serenity.EntityDialog<Pessoa_ColaboradorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Pessoa_ColaboradorForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class Pessoa_ColaboradorGrid extends Serenity.EntityGrid<Pessoa_ColaboradorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Pessoa_ColaboradorDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class Pessoa_MotoristaDialog extends Serenity.EntityDialog<Pessoa_MotoristaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Pessoa_MotoristaForm;
    }
}
declare namespace GoExpressTMS.CadastroBasico {
    class Pessoa_MotoristaGrid extends Serenity.EntityGrid<Pessoa_MotoristaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Pessoa_MotoristaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.LanguageList {
    function getValue(): string[][];
}
declare namespace GoExpressTMS.ScriptInitialization {
}
declare namespace GoExpressTMS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace GoExpressTMS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace GoExpressTMS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace GoExpressTMS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace GoExpressTMS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace GoExpressTMS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace GoExpressTMS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace GoExpressTMS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace GoExpressTMS {
    class MonthEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS {
    class PhoneEditor extends Serenity.StringEditor {
        multiple: boolean;
        DDD: boolean;
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isDDD: boolean, isMultiple: boolean): string;
        static isValidPhone(phone: string, isDDD: boolean): boolean;
        static formatPhone(phone: any, DDD: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, isDDD: boolean, check: (s: string, isDDD: boolean) => boolean): boolean;
    }
}
declare namespace GoExpressTMS {
    class SexoEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS {
    class TipoPessoaEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace GoExpressTMS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace GoExpressTMS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace GoExpressTMS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace GoExpressTMS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace GoExpressTMS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace GoExpressTMS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace GoExpressTMS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace GoExpressTMS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GoExpressTMS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
