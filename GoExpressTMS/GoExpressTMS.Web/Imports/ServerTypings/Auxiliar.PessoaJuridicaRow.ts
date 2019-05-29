namespace GoExpressTMS.Auxiliar {
    export interface PessoaJuridicaRow {
        PessoaJuridicaId?: number;
        PessoaId?: number;
        RazaoSocial?: string;
        Cnpj?: string;
        InscEstadual?: string;
        InscMunicipal?: string;
        PessoaNome?: string;
        PessoaTipoPessoa?: string;
    }

    export namespace PessoaJuridicaRow {
        export const idProperty = 'PessoaJuridicaId';
        export const nameProperty = 'RazaoSocial';
        export const localTextPrefix = 'Auxiliar.PessoaJuridica';

        export declare const enum Fields {
            PessoaJuridicaId = "PessoaJuridicaId",
            PessoaId = "PessoaId",
            RazaoSocial = "RazaoSocial",
            Cnpj = "Cnpj",
            InscEstadual = "InscEstadual",
            InscMunicipal = "InscMunicipal",
            PessoaNome = "PessoaNome",
            PessoaTipoPessoa = "PessoaTipoPessoa"
        }
    }
}

