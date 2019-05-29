namespace GoExpressTMS.Auxiliar {
    export namespace GrauInstrucaoService {
        export const baseUrl = 'Auxiliar/GrauInstrucao';

        export declare function Create(request: Serenity.SaveRequest<GrauInstrucaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GrauInstrucaoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GrauInstrucaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GrauInstrucaoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Auxiliar/GrauInstrucao/Create",
            Update = "Auxiliar/GrauInstrucao/Update",
            Delete = "Auxiliar/GrauInstrucao/Delete",
            Retrieve = "Auxiliar/GrauInstrucao/Retrieve",
            List = "Auxiliar/GrauInstrucao/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>GrauInstrucaoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

