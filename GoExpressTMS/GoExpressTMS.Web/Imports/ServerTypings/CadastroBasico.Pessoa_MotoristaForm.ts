namespace GoExpressTMS.CadastroBasico {
    export interface Pessoa_MotoristaForm {
        Nome: Serenity.StringEditor;
        DataCadastro: Serenity.DateEditor;
        Sexo: SexoEditor;
        DataNascimento: Serenity.DateEditor;
        EstadoCivil: Serenity.LookupEditor;
        Filiacao01: Serenity.StringEditor;
        Filiacao02: Serenity.StringEditor;
        Nacionalidade: Serenity.LookupEditor;
        EstadoNascimento: Serenity.LookupEditor;
        Naturalidade: Serenity.LookupEditor;
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

    export class Pessoa_MotoristaForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Pessoa_Motorista';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!Pessoa_MotoristaForm.init)  {
                Pessoa_MotoristaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = SexoEditor;
                var w3 = s.LookupEditor;
                var w4 = s.MaskedEditor;

                Q.initFormType(Pessoa_MotoristaForm, [
                    'Nome', w0,
                    'DataCadastro', w1,
                    'Sexo', w2,
                    'DataNascimento', w1,
                    'EstadoCivil', w3,
                    'Filiacao01', w0,
                    'Filiacao02', w0,
                    'Nacionalidade', w3,
                    'EstadoNascimento', w3,
                    'Naturalidade', w3,
                    'Cpf', w4,
                    'RgNumero', w0,
                    'RgOrgaoEmissor', w3,
                    'RgUfEmissor', w3,
                    'TituloEleitorNumero', w0,
                    'TituloEleitorZona', w0,
                    'TituloEleitorSecao', w0,
                    'Pis', w0,
                    'CnhNumero', w0,
                    'CnhTipo', w0,
                    'CnhEmissao', w1,
                    'CnhValidade', w1,
                    'GrauInstrucao', w3
                ]);
            }
        }
    }
}

