namespace GoExpressTMS.CadastroBasico {
    export interface BairroForm {
        Nome: Serenity.StringEditor;
        CidadeId: Serenity.LookupEditor;
    }

    export class BairroForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Bairro';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BairroForm.init)  {
                BairroForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(BairroForm, [
                    'Nome', w0,
                    'CidadeId', w1
                ]);
            }
        }
    }
}

