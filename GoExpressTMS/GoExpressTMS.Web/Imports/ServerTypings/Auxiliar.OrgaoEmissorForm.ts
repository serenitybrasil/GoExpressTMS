namespace GoExpressTMS.Auxiliar {
    export interface OrgaoEmissorForm {
        Nome: Serenity.StringEditor;
    }

    export class OrgaoEmissorForm extends Serenity.PrefixedContext {
        static formKey = 'Auxiliar.OrgaoEmissor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrgaoEmissorForm.init)  {
                OrgaoEmissorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OrgaoEmissorForm, [
                    'Nome', w0
                ]);
            }
        }
    }
}

