namespace GoExpressTMS.Auxiliar {
    export interface GrauInstrucaoForm {
        Descricao: Serenity.StringEditor;
    }

    export class GrauInstrucaoForm extends Serenity.PrefixedContext {
        static formKey = 'Auxiliar.GrauInstrucao';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GrauInstrucaoForm.init)  {
                GrauInstrucaoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(GrauInstrucaoForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

