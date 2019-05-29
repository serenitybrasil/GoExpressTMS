namespace GoExpressTMS.CadastroBasico {
    export interface EstadoRow {
        EstadoId?: number;
        Nome?: string;
        Uf?: string;
        Ibge?: number;
        Ddd?: string;
        PaisId?: number;
        PaisNome?: string;
    }

    export namespace EstadoRow {
        export const idProperty = 'EstadoId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Estado';
        export const lookupKey = 'CadastroBasico.Estado';

        export function getLookup(): Q.Lookup<EstadoRow> {
            return Q.getLookup<EstadoRow>('CadastroBasico.Estado');
        }

        export declare const enum Fields {
            EstadoId = "EstadoId",
            Nome = "Nome",
            Uf = "Uf",
            Ibge = "Ibge",
            Ddd = "Ddd",
            PaisId = "PaisId",
            PaisNome = "PaisNome"
        }
    }
}

