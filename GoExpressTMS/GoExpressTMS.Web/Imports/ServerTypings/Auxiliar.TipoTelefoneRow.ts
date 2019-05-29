namespace GoExpressTMS.Auxiliar {
    export interface TipoTelefoneRow {
        TipoTelefoneId?: number;
        Descricao?: string;
    }

    export namespace TipoTelefoneRow {
        export const idProperty = 'TipoTelefoneId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Auxiliar.TipoTelefone';
        export const lookupKey = 'Auxiliar.TipoTelefone';

        export function getLookup(): Q.Lookup<TipoTelefoneRow> {
            return Q.getLookup<TipoTelefoneRow>('Auxiliar.TipoTelefone');
        }

        export declare const enum Fields {
            TipoTelefoneId = "TipoTelefoneId",
            Descricao = "Descricao"
        }
    }
}

