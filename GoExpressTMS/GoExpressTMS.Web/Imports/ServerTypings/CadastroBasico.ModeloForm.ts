namespace GoExpressTMS.CadastroBasico {
    export interface ModeloForm {
        VeiculoFabricanteId: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
    }

    export class ModeloForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Modelo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ModeloForm.init)  {
                ModeloForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ModeloForm, [
                    'VeiculoFabricanteId', w0,
                    'Nome', w1
                ]);
            }
        }
    }
}

