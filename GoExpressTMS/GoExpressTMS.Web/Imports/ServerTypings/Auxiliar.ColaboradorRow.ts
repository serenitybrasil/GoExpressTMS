namespace GoExpressTMS.Auxiliar {
    export interface ColaboradorRow {
        ColaboradorId?: number;
        PessoaId?: number;
        Matricula?: string;
        DataAdmissao?: string;
        TipoColaboradorId?: number;
    }

    export namespace ColaboradorRow {
        export const idProperty = 'ColaboradorId';
        export const nameProperty = 'Matricula';
        export const localTextPrefix = 'Auxiliar.Colaborador';

        export declare const enum Fields {
            ColaboradorId = "ColaboradorId",
            PessoaId = "PessoaId",
            Matricula = "Matricula",
            DataAdmissao = "DataAdmissao",
            TipoColaboradorId = "TipoColaboradorId"
        }
    }
}

