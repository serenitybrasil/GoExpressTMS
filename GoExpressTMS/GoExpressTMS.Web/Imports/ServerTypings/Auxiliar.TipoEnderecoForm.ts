namespace GoExpressTMS.Auxiliar {
    export interface TipoEnderecoForm {
        Descricao: Serenity.StringEditor;
    }

    export class TipoEnderecoForm extends Serenity.PrefixedContext {
        static formKey = 'Auxiliar.TipoEndereco';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipoEnderecoForm.init)  {
                TipoEnderecoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TipoEnderecoForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

