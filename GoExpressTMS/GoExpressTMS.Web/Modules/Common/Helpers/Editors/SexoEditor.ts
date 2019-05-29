
namespace GoExpressTMS {

    @Serenity.Decorators.registerEditor()
    export class SexoEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            this.addOption("F", "Feminino");
            this.addOption("M", "Masculino");
        }
    }
}