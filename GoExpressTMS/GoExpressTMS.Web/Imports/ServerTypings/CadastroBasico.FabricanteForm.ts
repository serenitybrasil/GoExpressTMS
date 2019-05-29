namespace GoExpressTMS.CadastroBasico {
    export interface FabricanteForm {
        Nome: Serenity.StringEditor;
    }

    export class FabricanteForm extends Serenity.PrefixedContext {
        static formKey = 'CadastroBasico.Fabricante';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FabricanteForm.init)  {
                FabricanteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FabricanteForm, [
                    'Nome', w0
                ]);
            }
        }
    }
}

