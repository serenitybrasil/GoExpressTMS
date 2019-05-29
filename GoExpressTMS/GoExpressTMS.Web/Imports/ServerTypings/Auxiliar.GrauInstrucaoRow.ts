namespace GoExpressTMS.Auxiliar {
    export interface GrauInstrucaoRow {
        GrauInstrucaoId?: number;
        Descricao?: string;
    }

    export namespace GrauInstrucaoRow {
        export const idProperty = 'GrauInstrucaoId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Auxiliar.GrauInstrucao';
        export const lookupKey = 'Auxiliar.GrauInstrucao';

        export function getLookup(): Q.Lookup<GrauInstrucaoRow> {
            return Q.getLookup<GrauInstrucaoRow>('Auxiliar.GrauInstrucao');
        }

        export declare const enum Fields {
            GrauInstrucaoId = "GrauInstrucaoId",
            Descricao = "Descricao"
        }
    }
}

