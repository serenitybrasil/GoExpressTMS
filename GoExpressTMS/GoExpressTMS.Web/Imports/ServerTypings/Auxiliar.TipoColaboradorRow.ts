namespace GoExpressTMS.Auxiliar {
    export interface TipoColaboradorRow {
        TipoColaboradorId?: number;
        Tipo?: string;
    }

    export namespace TipoColaboradorRow {
        export const idProperty = 'TipoColaboradorId';
        export const nameProperty = 'Tipo';
        export const localTextPrefix = 'Auxiliar.TipoColaborador';
        export const lookupKey = 'Auxiliar.TipoColaborador';

        export function getLookup(): Q.Lookup<TipoColaboradorRow> {
            return Q.getLookup<TipoColaboradorRow>('Auxiliar.TipoColaborador');
        }

        export declare const enum Fields {
            TipoColaboradorId = "TipoColaboradorId",
            Tipo = "Tipo"
        }
    }
}

