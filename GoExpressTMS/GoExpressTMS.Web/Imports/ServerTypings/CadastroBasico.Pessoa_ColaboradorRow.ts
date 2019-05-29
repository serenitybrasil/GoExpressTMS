namespace GoExpressTMS.CadastroBasico {
    export interface Pessoa_ColaboradorRow {
        PessoaId?: number;
        Nome?: string;
        TipoPessoa?: string;
        Matricula?: string;
        DataAdmissao?: string;
        TipoColaboradorId?: number;
        TipoColaborador?: string;
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

    export namespace Pessoa_ColaboradorRow {
        export const idProperty = 'PessoaId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'CadastroBasico.Pessoa_Colaborador';

        export declare const enum Fields {
            PessoaId = "PessoaId",
            Nome = "Nome",
            TipoPessoa = "TipoPessoa",
            Matricula = "Matricula",
            DataAdmissao = "DataAdmissao",
            TipoColaboradorId = "TipoColaboradorId",
            TipoColaborador = "TipoColaborador",
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

