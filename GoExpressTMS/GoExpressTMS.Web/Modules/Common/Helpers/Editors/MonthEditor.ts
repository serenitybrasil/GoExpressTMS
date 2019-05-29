namespace GoExpressTMS {

    @Serenity.Decorators.registerEditor()
    export class MonthEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            this.addOption("1", "Janeiro");
            this.addOption("2", "Fevereiro");
            this.addOption("3", "Março");
            this.addOption("4", "Abril");
            this.addOption("5", "Maio");
            this.addOption("6", "junho");
            this.addOption("7", "Julho");
            this.addOption("8", "Agosto");
            this.addOption("9", "Setembro");
            this.addOption("10", "Outubro");
            this.addOption("11", "Novembro");
            this.addOption("12", "Dezembro");
        }
    }
}