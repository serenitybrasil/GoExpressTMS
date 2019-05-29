namespace GoExpressTMS.Auxiliar {
    export interface ClienteRow {
        ClienteId?: number;
        PessoaId?: number;
        DataCadastro?: string;
        PessoaNome?: string;
        PessoaTipoPessoa?: string;
    }

    export namespace ClienteRow {
        export const idProperty = 'ClienteId';
        export const localTextPrefix = 'Auxiliar.Cliente';

        export declare const enum Fields {
            ClienteId = "ClienteId",
            PessoaId = "PessoaId",
            DataCadastro = "DataCadastro",
            PessoaNome = "PessoaNome",
            PessoaTipoPessoa = "PessoaTipoPessoa"
        }
    }
}

