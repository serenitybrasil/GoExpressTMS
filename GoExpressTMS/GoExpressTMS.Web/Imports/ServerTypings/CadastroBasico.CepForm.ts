namespace GoExpressTMS.CadastroBasico {
    export interface CepForm {
        Cep: Serenity.MaskedEditor;
        Logradouro: Serenity.StringEditor;
        PaisId: Serenity.LookupEditor;
        EstadoId: Serenity.LookupEditor;
        CidadeId: Serenity.LookupEditor;
        BairroId: Serenity.LookupEditor;
    }

    export class CepForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Cep';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CepForm.init)  {
                CepForm.init = true;

                var s = Serenity;
                var w0 = s.MaskedEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(CepForm, [
                    'Cep', w0,
                    'Logradouro', w1,
                    'PaisId', w2,
                    'EstadoId', w2,
                    'CidadeId', w2,
                    'BairroId', w2
                ]);
            }
        }
    }
}

