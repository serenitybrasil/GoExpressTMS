namespace GoExpressTMS.CadastroBasico {
    export namespace Pessoa_ColaboradorService {
        export const baseUrl = 'CadastroBasico/Pessoa_Colaborador';

        export declare function Create(request: Serenity.SaveRequest<Pessoa_ColaboradorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<Pessoa_ColaboradorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Pessoa_ColaboradorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Pessoa_ColaboradorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CadastroBasico/Pessoa_Colaborador/Create",
            Update = "CadastroBasico/Pessoa_Colaborador/Update",
            Delete = "CadastroBasico/Pessoa_Colaborador/Delete",
            Retrieve = "CadastroBasico/Pessoa_Colaborador/Retrieve",
            List = "CadastroBasico/Pessoa_Colaborador/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>Pessoa_ColaboradorService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

