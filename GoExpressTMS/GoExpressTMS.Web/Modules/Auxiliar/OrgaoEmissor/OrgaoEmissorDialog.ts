
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    export class OrgaoEmissorDialog extends Serenity.EntityDialog<OrgaoEmissorRow, any> {
        protected getFormKey() { return OrgaoEmissorForm.formKey; }
        protected getIdProperty() { return OrgaoEmissorRow.idProperty; }
        protected getLocalTextPrefix() { return OrgaoEmissorRow.localTextPrefix; }
        protected getNameProperty() { return OrgaoEmissorRow.nameProperty; }
        protected getService() { return OrgaoEmissorService.baseUrl; }

        protected form = new OrgaoEmissorForm(this.idPrefix);

    }
}