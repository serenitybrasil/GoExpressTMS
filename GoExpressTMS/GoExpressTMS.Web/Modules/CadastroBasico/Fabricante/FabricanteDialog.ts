
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class FabricanteDialog extends Serenity.EntityDialog<FabricanteRow, any> {
        protected getFormKey() { return FabricanteForm.formKey; }
        protected getIdProperty() { return FabricanteRow.idProperty; }
        protected getLocalTextPrefix() { return FabricanteRow.localTextPrefix; }
        protected getNameProperty() { return FabricanteRow.nameProperty; }
        protected getService() { return FabricanteService.baseUrl; }

        protected form = new FabricanteForm(this.idPrefix);

    }
}