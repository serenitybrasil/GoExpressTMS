namespace GoExpressTMS.Auxiliar {
    export interface EstadoCivilForm {
        Descricao: Serenity.StringEditor;
    }

    export class EstadoCivilForm extends Serenity.PrefixedContext {
        static formKey = 'Auxiliar.EstadoCivil';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EstadoCivilForm.init)  {
                EstadoCivilForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EstadoCivilForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

