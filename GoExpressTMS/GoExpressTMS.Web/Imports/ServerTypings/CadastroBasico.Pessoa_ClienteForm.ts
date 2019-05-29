namespace GoExpressTMS.CadastroBasico {
    export interface Pessoa_ClienteForm {
        TipoPessoa: TipoPessoaEditor;
        Nome: Serenity.StringEditor;
        RazaoSocial: Serenity.StringEditor;
        DataCadastro: Serenity.DateEditor;
        Sexo: SexoEditor;
        DataNascimento: Serenity.DateEditor;
        EstadoCivil: Serenity.LookupEditor;
        Filiacao01: Serenity.StringEditor;
        Filiacao02: Serenity.StringEditor;
        Nacionalidade: Serenity.LookupEditor;
        EstadoNascimento: Serenity.LookupEditor;
        Naturalidade: Serenity.LookupEditor;
        Cnpj: Serenity.MaskedEditor;
        InscEstadual: Serenity.StringEditor;
        InscMunicipal: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        RgNumero: Serenity.StringEditor;
        RgOrgaoEmissor: Serenity.LookupEditor;
        RgUfEmissor: Serenity.LookupEditor;
        TituloEleitorNumero: Serenity.StringEditor;
        TituloEleitorZona: Serenity.StringEditor;
        TituloEleitorSecao: Serenity.StringEditor;
        Pis: Serenity.StringEditor;
        CnhNumero: Serenity.StringEditor;
        CnhTipo: Serenity.StringEditor;
        CnhEmissao: Serenity.DateEditor;
        CnhValidade: Serenity.DateEditor;
        GrauInstrucao: Serenity.LookupEditor;
    }

    export class Pessoa_ClienteForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Pessoa_Cliente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!Pessoa_ClienteForm.init)  {
                Pessoa_ClienteForm.init = true;

                var s = Serenity;
                var w0 = TipoPessoaEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = SexoEditor;
                var w4 = s.LookupEditor;
                var w5 = s.MaskedEditor;

                Q.initFormType(Pessoa_ClienteForm, [
                    'TipoPessoa', w0,
                    'Nome', w1,
                    'RazaoSocial', w1,
                    'DataCadastro', w2,
                    'Sexo', w3,
                    'DataNascimento', w2,
                    'EstadoCivil', w4,
                    'Filiacao01', w1,
                    'Filiacao02', w1,
                    'Nacionalidade', w4,
                    'EstadoNascimento', w4,
                    'Naturalidade', w4,
                    'Cnpj', w5,
                    'InscEstadual', w1,
                    'InscMunicipal', w1,
                    'Cpf', w5,
                    'RgNumero', w1,
                    'RgOrgaoEmissor', w4,
                    'RgUfEmissor', w4,
                    'TituloEleitorNumero', w1,
                    'TituloEleitorZona', w1,
                    'TituloEleitorSecao', w1,
                    'Pis', w1,
                    'CnhNumero', w1,
                    'CnhTipo', w1,
                    'CnhEmissao', w2,
                    'CnhValidade', w2,
                    'GrauInstrucao', w4
                ]);
            }
        }
    }
}

