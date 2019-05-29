namespace GoExpressTMS.CadastroBasico {
    export interface CidadeForm {
        Nome: Serenity.StringEditor;
        EstadoId: Serenity.LookupEditor;
        Ibge: Serenity.IntegerEditor;
    }

    export class CidadeForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Cidade';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CidadeForm.init)  {
                CidadeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(CidadeForm, [
                    'Nome', w0,
                    'EstadoId', w1,
                    'Ibge', w2
                ]);
            }
        }
    }
}

