namespace GoExpressTMS.CadastroBasico {
    export interface CidadeRow {
        CidadeId?: number;
        Nome?: string;
        EstadoId?: number;
        EstadoNome?: string;
        Ibge?: number;
        EstadoPaisId?: number;
    }

    export namespace CidadeRow {
        export const idProperty = 'CidadeId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Cidade';
        export const lookupKey = 'CadastroBasico.Cidade';

        export function getLookup(): Q.Lookup<CidadeRow> {
            return Q.getLookup<CidadeRow>('CadastroBasico.Cidade');
        }

        export declare const enum Fields {
            CidadeId = "CidadeId",
            Nome = "Nome",
            EstadoId = "EstadoId",
            EstadoNome = "EstadoNome",
            Ibge = "Ibge",
            EstadoPaisId = "EstadoPaisId"
        }
    }
}

