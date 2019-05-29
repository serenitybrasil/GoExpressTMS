namespace GoExpressTMS.CadastroBasico {
    export namespace Pessoa_MotoristaService {
        export const baseUrl = 'CadastroBasico/Pessoa_Motorista';

        export declare function Create(request: Serenity.SaveRequest<Pessoa_MotoristaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<Pessoa_MotoristaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Pessoa_MotoristaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Pessoa_MotoristaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CadastroBasico/Pessoa_Motorista/Create",
            Update = "CadastroBasico/Pessoa_Motorista/Update",
            Delete = "CadastroBasico/Pessoa_Motorista/Delete",
            Retrieve = "CadastroBasico/Pessoa_Motorista/Retrieve",
            List = "CadastroBasico/Pessoa_Motorista/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>Pessoa_MotoristaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

