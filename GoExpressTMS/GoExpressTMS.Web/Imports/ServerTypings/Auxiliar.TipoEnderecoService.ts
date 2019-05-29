namespace GoExpressTMS.Auxiliar {
    export namespace TipoEnderecoService {
        export const baseUrl = 'Auxiliar/TipoEndereco';

        export declare function Create(request: Serenity.SaveRequest<TipoEnderecoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TipoEnderecoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoEnderecoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoEnderecoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Auxiliar/TipoEndereco/Create",
            Update = "Auxiliar/TipoEndereco/Update",
            Delete = "Auxiliar/TipoEndereco/Delete",
            Retrieve = "Auxiliar/TipoEndereco/Retrieve",
            List = "Auxiliar/TipoEndereco/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TipoEnderecoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

