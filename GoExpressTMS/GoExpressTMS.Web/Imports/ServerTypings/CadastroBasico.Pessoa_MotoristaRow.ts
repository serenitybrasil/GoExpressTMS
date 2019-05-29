namespace GoExpressTMS.CadastroBasico {
    export interface Pessoa_MotoristaRow {
        PessoaId?: number;
        Nome?: string;
        TipoPessoa?: string;
        DataCadastro?: string;
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

    export namespace Pessoa_MotoristaRow {
        export const idProperty = 'PessoaId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Pessoa_Motorista';

        export declare const enum Fields {
            PessoaId = "PessoaId",
            Nome = "Nome",
            TipoPessoa = "TipoPessoa",
            DataCadastro = "DataCadastro",
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

