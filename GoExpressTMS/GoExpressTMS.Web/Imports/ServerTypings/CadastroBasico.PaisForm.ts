namespace GoExpressTMS.CadastroBasico {
    export interface PaisForm {
        Nome: Serenity.StringEditor;
        Sigla: Serenity.StringEditor;
        NomeInternacional: Serenity.StringEditor;
        Bacen: Serenity.IntegerEditor;
        Nacionalidade: Serenity.StringEditor;
    }

    export class PaisForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Pais';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaisForm.init)  {
                PaisForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(PaisForm, [
                    'Nome', w0,
                    'Sigla', w0,
                    'NomeInternacional', w0,
                    'Bacen', w1,
                    'Nacionalidade', w0
                ]);
            }
        }
    }
}

