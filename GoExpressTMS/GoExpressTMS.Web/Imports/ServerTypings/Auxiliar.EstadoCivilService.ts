namespace GoExpressTMS.Auxiliar {
    export namespace EstadoCivilService {
        export const baseUrl = 'Auxiliar/EstadoCivil';

        export declare function Create(request: Serenity.SaveRequest<EstadoCivilRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EstadoCivilRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadoCivilRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadoCivilRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Auxiliar/EstadoCivil/Create",
            Update = "Auxiliar/EstadoCivil/Update",
            Delete = "Auxiliar/EstadoCivil/Delete",
            Retrieve = "Auxiliar/EstadoCivil/Retrieve",
            List = "Auxiliar/EstadoCivil/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EstadoCivilService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

