namespace GoExpressTMS.CadastroBasico {
    export interface EstadoForm {
        PaisId: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
        Ibge: Serenity.IntegerEditor;
        Ddd: Serenity.StringEditor;
    }

    export class EstadoForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Estado';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EstadoForm.init)  {
                EstadoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(EstadoForm, [
                    'PaisId', w0,
                    'Nome', w1,
                    'Uf', w1,
                    'Ibge', w2,
                    'Ddd', w1
                ]);
            }
        }
    }
}

