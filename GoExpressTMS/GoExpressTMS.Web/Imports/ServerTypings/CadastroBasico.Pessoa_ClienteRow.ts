namespace GoExpressTMS.CadastroBasico {
    export interface Pessoa_ClienteRow {
        PessoaId?: number;
        Nome?: string;
        TipoPessoa?: string;
        PessoaTipo?: string;
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
        RazaoSocial?: string;
        Cnpj?: string;
        InscEstadual?: string;
        InscMunicipal?: string;
    }

    export namespace Pessoa_ClienteRow {
        export const idProperty = 'PessoaId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Pessoa_Cliente';

        export declare const enum Fields {
            PessoaId = "PessoaId",
            Nome = "Nome",
            TipoPessoa = "TipoPessoa",
            PessoaTipo = "PessoaTipo",
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
            Naturalidade = "Naturalidade",
            RazaoSocial = "RazaoSocial",
            Cnpj = "Cnpj",
            InscEstadual = "InscEstadual",
            InscMunicipal = "InscMunicipal"
        }
    }
}

