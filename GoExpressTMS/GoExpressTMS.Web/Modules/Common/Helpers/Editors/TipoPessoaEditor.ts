
namespace GoExpressTMS {

    @Serenity.Decorators.registerEditor()
    export class TipoPessoaEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            this.addOption("F", "Pessoa Física");
            this.addOption("J", "Pessoa Jurídica");
        }
    }
}