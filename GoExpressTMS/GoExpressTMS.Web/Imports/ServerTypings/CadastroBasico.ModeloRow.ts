namespace GoExpressTMS.CadastroBasico {
    export interface ModeloRow {
        VeiculoModeloId?: number;
        VeiculoFabricanteId?: number;
        Nome?: string;
        VeiculoFabricanteNome?: string;
    }

    export namespace ModeloRow {
        export const idProperty = 'VeiculoModeloId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Modelo';
        export const lookupKey = 'CadastroBasico.Modelo';

        export function getLookup(): Q.Lookup<ModeloRow> {
            return Q.getLookup<ModeloRow>('CadastroBasico.Modelo');
        }

        export declare const enum Fields {
            VeiculoModeloId = "VeiculoModeloId",
            VeiculoFabricanteId = "VeiculoFabricanteId",
            Nome = "Nome",
            VeiculoFabricanteNome = "VeiculoFabricanteNome"
        }
    }
}

