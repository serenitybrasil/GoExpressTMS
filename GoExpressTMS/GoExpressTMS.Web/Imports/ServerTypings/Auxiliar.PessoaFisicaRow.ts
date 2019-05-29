namespace GoExpressTMS.Auxiliar {
    export interface PessoaFisicaRow {
        PessoaFisicaId?: number;
        PessoaId?: number;
        DataNascimento?: string;
        Filiacao01?: string;
        Filiacao02?: string;
        Cpf?: string;
        RgNumero?: string;
        RgOrgaoEmissor?: number;
        RgUfEmissor?: number;
        TituloEleitorNumero?: string;
        TituloEleitorZona?: string;
        TituloEleitorSecao?: string;
        Pis?: string;
        CnhNumero?: string;
        CnhTipo?: string;
        CnhEmissao?: string;
        CnhValidade?: string;
        EstadoCivil?: number;
        Sexo?: string;
        GrauInstrucao?: number;
        Nacionalidade?: number;
        EstadoNascimento?: number;
        Naturalidade?: number;
    }

    export namespace PessoaFisicaRow {
        export const idProperty = 'PessoaFisicaId';
        export const nameProperty = 'Filiacao01';
        export const localTextPrefix = 'Auxiliar.PessoaFisica';

        export declare const enum Fields {
            PessoaFisicaId = "PessoaFisicaId",
            PessoaId = "PessoaId",
            DataNascimento = "DataNascimento",
            Filiacao01 = "Filiacao01",
            Filiacao02 = "Filiacao02",
            Cpf = "Cpf",
            RgNumero = "RgNumero",
            RgOrgaoEmissor = "RgOrgaoEmissor",
            RgUfEmissor = "RgUfEmissor",
            TituloEleitorNumero = "TituloEleitorNumero",
            TituloEleitorZona = "TituloEleitorZona",
            TituloEleitorSecao = "TituloEleitorSecao",
            Pis = "Pis",
            CnhNumero = "CnhNumero",
            CnhTipo = "CnhTipo",
            CnhEmissao = "CnhEmissao",
            CnhValidade = "CnhValidade",
            EstadoCivil = "EstadoCivil",
            Sexo = "Sexo",
            GrauInstrucao = "GrauInstrucao",
            Nacionalidade = "Nacionalidade",
            EstadoNascimento = "EstadoNascimento",
            Naturalidade = "Naturalidade"
        }
    }
}

