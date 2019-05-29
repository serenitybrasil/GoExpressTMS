namespace GoExpressTMS.Auxiliar {
    export interface OrgaoEmissorRow {
        OrgaoEmissorId?: number;
        Nome?: string;
    }

    export namespace OrgaoEmissorRow {
        export const idProperty = 'OrgaoEmissorId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Auxiliar.OrgaoEmissor';
        export const lookupKey = 'Auxiliar.OrgaoEmissor';

        export function getLookup(): Q.Lookup<OrgaoEmissorRow> {
            return Q.getLookup<OrgaoEmissorRow>('Auxiliar.OrgaoEmissor');
        }

        export declare const enum Fields {
            OrgaoEmissorId = "OrgaoEmissorId",
            Nome = "Nome"
        }
    }
}

