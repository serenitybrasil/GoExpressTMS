namespace GoExpressTMS.Auxiliar {
    export namespace OrgaoEmissorService {
        export const baseUrl = 'Auxiliar/OrgaoEmissor';

        export declare function Create(request: Serenity.SaveRequest<OrgaoEmissorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OrgaoEmissorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrgaoEmissorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrgaoEmissorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Auxiliar/OrgaoEmissor/Create",
            Update = "Auxiliar/OrgaoEmissor/Update",
            Delete = "Auxiliar/OrgaoEmissor/Delete",
            Retrieve = "Auxiliar/OrgaoEmissor/Retrieve",
            List = "Auxiliar/OrgaoEmissor/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OrgaoEmissorService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

