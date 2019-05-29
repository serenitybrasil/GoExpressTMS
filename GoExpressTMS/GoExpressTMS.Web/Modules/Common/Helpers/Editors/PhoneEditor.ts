namespace GoExpressTMS {

    @Serenity.Decorators.registerEditor()
    export class PhoneEditor extends Serenity.StringEditor {

        @Serenity.Decorators.option()
        public multiple: boolean;

        @Serenity.Decorators.option()
        public DDD: boolean = true;

        constructor(input: JQuery) {
            super(input);

            this.addValidationRule(this.uniqueName, e => {
                var value = Q.trimToNull(this.get_value());
                if (value == null) {
                    return null;
                }
                return PhoneEditor.validate(value, this.DDD, this.multiple);
            });

            input.bind('change', e => {
                if (!Serenity.WX.hasOriginalEvent(e)) {
                    return;
                }
                this.formatValue();
            });

            input.bind('blur', e => {
                if (this.element.hasClass('valid')) {
                    this.formatValue();
                }
            });
        }

        protected formatValue(): void {
            this.element.val(this.getFormattedValue());
        }

        protected getFormattedValue(): string {
            var value = this.element.val();

            if (this.multiple) {
                return PhoneEditor.formatMulti(value, PhoneEditor.formatPhone(value, this.DDD));
            }
            return PhoneEditor.formatPhone(value, this.DDD);
        }


        get_value() {
            return this.getFormattedValue();
        }

        set_value(value: string) {
            this.element.val(value);
        }

        static validate(phone: string, isDDD: boolean, isMultiple: boolean) {
            var valid = (isMultiple ? PhoneEditor.isValidMulti(phone, isDDD, PhoneEditor.isValidPhone) : PhoneEditor.isValidPhone(phone, isDDD));
            if (valid) {
                return null;
            }
            return Q.text((isMultiple ? 'Validation.PhoneEditorMultiple' : 'Validation.PhoneEditor'));
        }

        static isValidPhone(phone: string, isDDD: boolean) {
            if (Q.isEmptyOrNull(phone)) {
                return false;
            }

            phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');

            if (Q.startsWith(phone, '0')) {
                phone = phone.substring(1);
            }

            if (isDDD) {
                if (phone.length < 10) {
                    return false;
                }

                if (Q.startsWith(phone, '(') && phone.charAt(3) === ')') {
                    phone = phone.substr(1, 2) + phone.substring(4);
                }

                if (phone.length < 10 || phone.length > 11) {
                    return false;
                }

            } else {
                if (phone.indexOf('(') >= 0 || phone.indexOf(')') >= 0) {
                    return false;
                }

                if (phone.length < 8 || phone.length > 9) {
                    return false;
                }
            }

            if (Q.startsWith(phone, '0')) {
                return false;
            }

            for (var i = 0; i < phone.length; i++) {
                var c = phone.charAt(i);
                if (c < '0' || c > '9') {
                    return false;
                }
            }

            return true;
        }

        static formatPhone(phone, DDD) {
            if (!PhoneEditor.isValidPhone(phone, DDD)) {
                return phone;
            }
            phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
            if (Q.startsWith(phone, '0')) {
                phone = phone.substring(1);
            }
            if (DDD) {
                if (phone.length == 10) {
                    phone = '(' + phone.substr(0, 2) + ') ' + phone.substr(2, 4) + '-' + phone.substr(6, 4);
                } else if (phone.length == 11) {
                    phone = '(' + phone.substr(0, 2) + ') ' + phone.substr(2, 5) + '-' + phone.substr(7, 4);
                }
            } else {
                    if (phone.length == 8) {
                    phone = phone.substr(0, 4) + '-' + phone.substr(4, 4);
                } else if (phone.length == 9) {
                    phone = phone.substr(0, 5) + '-' + phone.substr(5, 4);
                }
            }
                return phone;
            }

        static formatMulti(phone: string, format: (s: string) => string) {
            var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
            var result = '';
            for (var x of phones) {
                var s = Q.trimToNull(x);
                if (s == null) {
                    continue;
                }
                if (result.length > 0) {
                    result += ', ';
                }
                result += format(s);
            }
            return result;
        }

        static isValidMulti(phone: string, isDDD: boolean, check: (s: string, isDDD: boolean) => boolean) {
            if (Q.isEmptyOrNull(phone)) {
                return false;
            }
            var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
            var anyValid = false;
            for (var $t1 = 0; $t1 < phones.length; $t1++) {
                var x = phones[$t1];
                var s = Q.trimToNull(x);
                if (s == null) {
                    continue;
                }
                if (!check(s, isDDD)) {
                    return false;
                }
                anyValid = true;
            }
            if (!anyValid) {
                return false;
            }
            return true;
        }
    }
}