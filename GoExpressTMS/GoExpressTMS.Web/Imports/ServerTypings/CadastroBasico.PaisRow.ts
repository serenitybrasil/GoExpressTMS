namespace GoExpressTMS.CadastroBasico {
    export interface PaisRow {
        PaisId?: number;
        Nome?: string;
        Sigla?: string;
        NomeInternacional?: string;
        Bacen?: number;
        Nacionalidade?: string;
    }

    export namespace PaisRow {
        export const idProperty = 'PaisId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Pais';
        export const lookupKey = 'CadastroBasico.Pais';

        export function getLookup(): Q.Lookup<PaisRow> {
            return Q.getLookup<PaisRow>('CadastroBasico.Pais');
        }

        export declare const enum Fields {
            PaisId = "PaisId",
            Nome = "Nome",
            Sigla = "Sigla",
            NomeInternacional = "NomeInternacional",
            Bacen = "Bacen",
            Nacionalidade = "Nacionalidade"
        }
    }
}

