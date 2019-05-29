namespace GoExpressTMS.CadastroBasico {
    export interface Pessoa_ColaboradorForm {
        Matricula: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        DataAdmissao: Serenity.DateEditor;
        TipoColaboradorId: Serenity.LookupEditor;
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

    export class Pessoa_ColaboradorForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Pessoa_Colaborador';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!Pessoa_ColaboradorForm.init)  {
                Pessoa_ColaboradorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = SexoEditor;
                var w4 = s.MaskedEditor;

                Q.initFormType(Pessoa_ColaboradorForm, [
                    'Matricula', w0,
                    'Nome', w0,
                    'DataAdmissao', w1,
                    'TipoColaboradorId', w2,
                    'Sexo', w3,
                    'DataNascimento', w1,
                    'EstadoCivil', w2,
                    'Filiacao01', w0,
                    'Filiacao02', w0,
                    'Nacionalidade', w2,
                    'EstadoNascimento', w2,
                    'Naturalidade', w2,
                    'Cpf', w4,
                    'RgNumero', w0,
                    'RgOrgaoEmissor', w2,
                    'RgUfEmissor', w2,
                    'TituloEleitorNumero', w0,
                    'TituloEleitorZona', w0,
                    'TituloEleitorSecao', w0,
                    'Pis', w0,
                    'CnhNumero', w0,
                    'CnhTipo', w0,
                    'CnhEmissao', w1,
                    'CnhValidade', w1,
                    'GrauInstrucao', w2
                ]);
            }
        }
    }
}

