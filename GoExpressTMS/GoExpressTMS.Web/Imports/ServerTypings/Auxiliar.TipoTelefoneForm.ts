namespace GoExpressTMS.Auxiliar {
    export interface TipoTelefoneForm {
        Descricao: Serenity.StringEditor;
    }

    export class TipoTelefoneForm extends Serenity.PrefixedContext {
        static formKey = 'Auxiliar.TipoTelefone';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipoTelefoneForm.init)  {
                TipoTelefoneForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TipoTelefoneForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

