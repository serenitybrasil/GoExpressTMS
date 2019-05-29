namespace GoExpressTMS.CadastroBasico {
    export interface BairroRow {
        BairroId?: number;
        Nome?: string;
        CidadeId?: number;
        CidadeNome?: string;
        EstadoId?: number;
    }

    export namespace BairroRow {
        export const idProperty = 'BairroId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Bairro';
        export const lookupKey = 'CadastroBasico.Bairro';

        export function getLookup(): Q.Lookup<BairroRow> {
            return Q.getLookup<BairroRow>('CadastroBasico.Bairro');
        }

        export declare const enum Fields {
            BairroId = "BairroId",
            Nome = "Nome",
            CidadeId = "CidadeId",
            CidadeNome = "CidadeNome",
            EstadoId = "EstadoId"
        }
    }
}

