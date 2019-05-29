
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class Pessoa_ColaboradorGrid extends Serenity.EntityGrid<Pessoa_ColaboradorRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Pessoa_Colaborador'; }
        protected getDialogType() { return Pessoa_ColaboradorDialog; }
        protected getIdProperty() { return Pessoa_ColaboradorRow.idProperty; }
        protected getLocalTextPrefix() { return Pessoa_ColaboradorRow.localTextPrefix; }
        protected getService() { return Pessoa_ColaboradorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}