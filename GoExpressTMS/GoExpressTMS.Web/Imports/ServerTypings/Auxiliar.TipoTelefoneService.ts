namespace GoExpressTMS.Auxiliar {
    export namespace TipoTelefoneService {
        export const baseUrl = 'Auxiliar/TipoTelefone';

        export declare function Create(request: Serenity.SaveRequest<TipoTelefoneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TipoTelefoneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoTelefoneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoTelefoneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Auxiliar/TipoTelefone/Create",
            Update = "Auxiliar/TipoTelefone/Update",
            Delete = "Auxiliar/TipoTelefone/Delete",
            Retrieve = "Auxiliar/TipoTelefone/Retrieve",
            List = "Auxiliar/TipoTelefone/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TipoTelefoneService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

