namespace GoExpressTMS.Auxiliar {
    export interface EstadoCivilRow {
        EstadoCivilId?: number;
        Descricao?: string;
    }

    export namespace EstadoCivilRow {
        export const idProperty = 'EstadoCivilId';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Auxiliar.EstadoCivil';
        export const lookupKey = 'Auxiliar.EstadoCivil';

        export function getLookup(): Q.Lookup<EstadoCivilRow> {
            return Q.getLookup<EstadoCivilRow>('Auxiliar.EstadoCivil');
        }

        export declare const enum Fields {
            EstadoCivilId = "EstadoCivilId",
            Descricao = "Descricao"
        }
    }
}

