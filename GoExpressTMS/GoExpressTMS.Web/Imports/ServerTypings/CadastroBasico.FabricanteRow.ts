namespace GoExpressTMS.CadastroBasico {
    export interface FabricanteRow {
        VeiculoFabricanteId?: number;
        Nome?: string;
    }

    export namespace FabricanteRow {
        export const idProperty = 'VeiculoFabricanteId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Fabricante';
        export const lookupKey = 'CadastroBasico.Fabricante';

        export function getLookup(): Q.Lookup<FabricanteRow> {
            return Q.getLookup<FabricanteRow>('CadastroBasico.Fabricante');
        }

        export declare const enum Fields {
            VeiculoFabricanteId = "VeiculoFabricanteId",
            Nome = "Nome"
        }
    }
}

