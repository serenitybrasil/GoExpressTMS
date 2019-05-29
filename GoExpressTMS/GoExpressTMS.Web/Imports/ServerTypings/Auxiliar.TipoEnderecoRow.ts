namespace GoExpressTMS.Auxiliar {
    export interface TipoEnderecoRow {
        TipoEnderecoId?: number;
        Descricao?: string;
    }

    export namespace TipoEnderecoRow {
        export const idProperty = 'TipoEnderecoId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Auxiliar.TipoEndereco';
        export const lookupKey = 'Auxiliar.TipoEndereco';

        export function getLookup(): Q.Lookup<TipoEnderecoRow> {
            return Q.getLookup<TipoEnderecoRow>('Auxiliar.TipoEndereco');
        }

        export declare const enum Fields {
            TipoEnderecoId = "TipoEnderecoId",
            Descricao = "Descricao"
        }
    }
}

