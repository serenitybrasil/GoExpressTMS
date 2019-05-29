namespace GoExpressTMS.CadastroBasico {
    export interface CepRow {
        CepId?: number;
        Cep?: string;
        Logradouro?: string;
        PaisId?: number;
        PaisNome?: string;
        EstadoId?: number;
        EstadoNome?: string;
        CidadeId?: number;
        CidadeNome?: string;
        BairroId?: number;
        BairroNome?: string;
    }

    export namespace CepRow {
        export const idProperty = 'CepId';
        export const nameProperty = 'Cep';
        export const localTextPrefix = 'CadastroBasico.Cep';
        export const lookupKey = 'CadastroBasico.Cep';

        export function getLookup(): Q.Lookup<CepRow> {
            return Q.getLookup<CepRow>('CadastroBasico.Cep');
        }

        export declare const enum Fields {
            CepId = "CepId",
            Cep = "Cep",
            Logradouro = "Logradouro",
            PaisId = "PaisId",
            PaisNome = "PaisNome",
            EstadoId = "EstadoId",
            EstadoNome = "EstadoNome",
            CidadeId = "CidadeId",
            CidadeNome = "CidadeNome",
            BairroId = "BairroId",
            BairroNome = "BairroNome"
        }
    }
}

