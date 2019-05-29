
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class OrgaoEmissorGrid extends Serenity.EntityGrid<OrgaoEmissorRow, any> {
        protected getColumnsKey() { return 'Auxiliar.OrgaoEmissor'; }
        protected getDialogType() { return OrgaoEmissorDialog; }
        protected getIdProperty() { return OrgaoEmissorRow.idProperty; }
        protected getLocalTextPrefix() { return OrgaoEmissorRow.localTextPrefix; }
        protected getService() { return OrgaoEmissorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}