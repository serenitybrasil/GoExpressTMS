
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class Pessoa_ColaboradorDialog extends Serenity.EntityDialog<Pessoa_ColaboradorRow, any> {
        protected getFormKey() { return Pessoa_ColaboradorForm.formKey; }
        protected getIdProperty() { return Pessoa_ColaboradorRow.idProperty; }
        protected getLocalTextPrefix() { return Pessoa_ColaboradorRow.localTextPrefix; }
        protected getNameProperty() { return Pessoa_ColaboradorRow.nameProperty; }
        protected getService() { return Pessoa_ColaboradorService.baseUrl; }

        protected form = new Pessoa_ColaboradorForm(this.idPrefix);

    }
}