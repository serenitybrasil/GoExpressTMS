namespace GoExpressTMS.CadastroBasico {
    export namespace Pessoa_ClienteService {
        export const baseUrl = 'CadastroBasico/Pessoa_Cliente';

        export declare function Create(request: Serenity.SaveRequest<Pessoa_ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<Pessoa_ClienteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Pessoa_ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Pessoa_ClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CadastroBasico/Pessoa_Cliente/Create",
            Update = "CadastroBasico/Pessoa_Cliente/Update",
            Delete = "CadastroBasico/Pessoa_Cliente/Delete",
            Retrieve = "CadastroBasico/Pessoa_Cliente/Retrieve",
            List = "CadastroBasico/Pessoa_Cliente/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>Pessoa_ClienteService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

