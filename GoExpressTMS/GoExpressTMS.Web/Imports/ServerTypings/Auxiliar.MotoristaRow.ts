namespace GoExpressTMS.Auxiliar {
    export interface MotoristaRow {
        MotoristaId?: number;
        PessoaId?: number;
        DataCadastro?: string;
        PessoaNome?: string;
        PessoaTipoPessoa?: string;
    }

    export namespace MotoristaRow {
        export const idProperty = 'MotoristaId';
        export const localTextPrefix = 'Auxiliar.Motorista';

        export declare const enum Fields {
            MotoristaId = "MotoristaId",
            PessoaId = "PessoaId",
            DataCadastro = "DataCadastro",
            PessoaNome = "PessoaNome",
            PessoaTipoPessoa = "PessoaTipoPessoa"
        }
    }
}

