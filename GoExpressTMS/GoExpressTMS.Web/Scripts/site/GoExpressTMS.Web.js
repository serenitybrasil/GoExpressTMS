var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var ClienteRow;
        (function (ClienteRow) {
            ClienteRow.idProperty = 'ClienteId';
            ClienteRow.localTextPrefix = 'Auxiliar.Cliente';
        })(ClienteRow = Auxiliar.ClienteRow || (Auxiliar.ClienteRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var ColaboradorRow;
        (function (ColaboradorRow) {
            ColaboradorRow.idProperty = 'ColaboradorId';
            ColaboradorRow.nameProperty = 'Matricula';
            ColaboradorRow.localTextPrefix = 'Auxiliar.Colaborador';
        })(ColaboradorRow = Auxiliar.ColaboradorRow || (Auxiliar.ColaboradorRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var EstadoCivilForm = /** @class */ (function (_super) {
            __extends(EstadoCivilForm, _super);
            function EstadoCivilForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EstadoCivilForm.init) {
                    EstadoCivilForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(EstadoCivilForm, [
                        'Descricao', w0
                    ]);
                }
                return _this;
            }
            EstadoCivilForm.formKey = 'Auxiliar.EstadoCivil';
            return EstadoCivilForm;
        }(Serenity.PrefixedContext));
        Auxiliar.EstadoCivilForm = EstadoCivilForm;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var EstadoCivilRow;
        (function (EstadoCivilRow) {
            EstadoCivilRow.idProperty = 'EstadoCivilId';
            EstadoCivilRow.nameProperty = 'Descricao';
            EstadoCivilRow.localTextPrefix = 'Auxiliar.EstadoCivil';
            EstadoCivilRow.lookupKey = 'Auxiliar.EstadoCivil';
            function getLookup() {
                return Q.getLookup('Auxiliar.EstadoCivil');
            }
            EstadoCivilRow.getLookup = getLookup;
        })(EstadoCivilRow = Auxiliar.EstadoCivilRow || (Auxiliar.EstadoCivilRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var EstadoCivilService;
        (function (EstadoCivilService) {
            EstadoCivilService.baseUrl = 'Auxiliar/EstadoCivil';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EstadoCivilService[x] = function (r, s, o) {
                    return Q.serviceRequest(EstadoCivilService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EstadoCivilService = Auxiliar.EstadoCivilService || (Auxiliar.EstadoCivilService = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var GrauInstrucaoForm = /** @class */ (function (_super) {
            __extends(GrauInstrucaoForm, _super);
            function GrauInstrucaoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GrauInstrucaoForm.init) {
                    GrauInstrucaoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(GrauInstrucaoForm, [
                        'Descricao', w0
                    ]);
                }
                return _this;
            }
            GrauInstrucaoForm.formKey = 'Auxiliar.GrauInstrucao';
            return GrauInstrucaoForm;
        }(Serenity.PrefixedContext));
        Auxiliar.GrauInstrucaoForm = GrauInstrucaoForm;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var GrauInstrucaoRow;
        (function (GrauInstrucaoRow) {
            GrauInstrucaoRow.idProperty = 'GrauInstrucaoId';
            GrauInstrucaoRow.nameProperty = 'Descricao';
            GrauInstrucaoRow.localTextPrefix = 'Auxiliar.GrauInstrucao';
            GrauInstrucaoRow.lookupKey = 'Auxiliar.GrauInstrucao';
            function getLookup() {
                return Q.getLookup('Auxiliar.GrauInstrucao');
            }
            GrauInstrucaoRow.getLookup = getLookup;
        })(GrauInstrucaoRow = Auxiliar.GrauInstrucaoRow || (Auxiliar.GrauInstrucaoRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var GrauInstrucaoService;
        (function (GrauInstrucaoService) {
            GrauInstrucaoService.baseUrl = 'Auxiliar/GrauInstrucao';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GrauInstrucaoService[x] = function (r, s, o) {
                    return Q.serviceRequest(GrauInstrucaoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GrauInstrucaoService = Auxiliar.GrauInstrucaoService || (Auxiliar.GrauInstrucaoService = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var MotoristaRow;
        (function (MotoristaRow) {
            MotoristaRow.idProperty = 'MotoristaId';
            MotoristaRow.localTextPrefix = 'Auxiliar.Motorista';
        })(MotoristaRow = Auxiliar.MotoristaRow || (Auxiliar.MotoristaRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var OrgaoEmissorForm = /** @class */ (function (_super) {
            __extends(OrgaoEmissorForm, _super);
            function OrgaoEmissorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrgaoEmissorForm.init) {
                    OrgaoEmissorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OrgaoEmissorForm, [
                        'Nome', w0
                    ]);
                }
                return _this;
            }
            OrgaoEmissorForm.formKey = 'Auxiliar.OrgaoEmissor';
            return OrgaoEmissorForm;
        }(Serenity.PrefixedContext));
        Auxiliar.OrgaoEmissorForm = OrgaoEmissorForm;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var OrgaoEmissorRow;
        (function (OrgaoEmissorRow) {
            OrgaoEmissorRow.idProperty = 'OrgaoEmissorId';
            OrgaoEmissorRow.nameProperty = 'Nome';
            OrgaoEmissorRow.localTextPrefix = 'Auxiliar.OrgaoEmissor';
            OrgaoEmissorRow.lookupKey = 'Auxiliar.OrgaoEmissor';
            function getLookup() {
                return Q.getLookup('Auxiliar.OrgaoEmissor');
            }
            OrgaoEmissorRow.getLookup = getLookup;
        })(OrgaoEmissorRow = Auxiliar.OrgaoEmissorRow || (Auxiliar.OrgaoEmissorRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var OrgaoEmissorService;
        (function (OrgaoEmissorService) {
            OrgaoEmissorService.baseUrl = 'Auxiliar/OrgaoEmissor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrgaoEmissorService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrgaoEmissorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrgaoEmissorService = Auxiliar.OrgaoEmissorService || (Auxiliar.OrgaoEmissorService = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var PessoaFisicaRow;
        (function (PessoaFisicaRow) {
            PessoaFisicaRow.idProperty = 'PessoaFisicaId';
            PessoaFisicaRow.nameProperty = 'Filiacao01';
            PessoaFisicaRow.localTextPrefix = 'Auxiliar.PessoaFisica';
        })(PessoaFisicaRow = Auxiliar.PessoaFisicaRow || (Auxiliar.PessoaFisicaRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var PessoaJuridicaRow;
        (function (PessoaJuridicaRow) {
            PessoaJuridicaRow.idProperty = 'PessoaJuridicaId';
            PessoaJuridicaRow.nameProperty = 'RazaoSocial';
            PessoaJuridicaRow.localTextPrefix = 'Auxiliar.PessoaJuridica';
        })(PessoaJuridicaRow = Auxiliar.PessoaJuridicaRow || (Auxiliar.PessoaJuridicaRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoColaboradorRow;
        (function (TipoColaboradorRow) {
            TipoColaboradorRow.idProperty = 'TipoColaboradorId';
            TipoColaboradorRow.nameProperty = 'Tipo';
            TipoColaboradorRow.localTextPrefix = 'Auxiliar.TipoColaborador';
            TipoColaboradorRow.lookupKey = 'Auxiliar.TipoColaborador';
            function getLookup() {
                return Q.getLookup('Auxiliar.TipoColaborador');
            }
            TipoColaboradorRow.getLookup = getLookup;
        })(TipoColaboradorRow = Auxiliar.TipoColaboradorRow || (Auxiliar.TipoColaboradorRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoEnderecoForm = /** @class */ (function (_super) {
            __extends(TipoEnderecoForm, _super);
            function TipoEnderecoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TipoEnderecoForm.init) {
                    TipoEnderecoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TipoEnderecoForm, [
                        'Descricao', w0
                    ]);
                }
                return _this;
            }
            TipoEnderecoForm.formKey = 'Auxiliar.TipoEndereco';
            return TipoEnderecoForm;
        }(Serenity.PrefixedContext));
        Auxiliar.TipoEnderecoForm = TipoEnderecoForm;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoEnderecoRow;
        (function (TipoEnderecoRow) {
            TipoEnderecoRow.idProperty = 'TipoEnderecoId';
            TipoEnderecoRow.nameProperty = 'Descricao';
            TipoEnderecoRow.localTextPrefix = 'Auxiliar.TipoEndereco';
            TipoEnderecoRow.lookupKey = 'Auxiliar.TipoEndereco';
            function getLookup() {
                return Q.getLookup('Auxiliar.TipoEndereco');
            }
            TipoEnderecoRow.getLookup = getLookup;
        })(TipoEnderecoRow = Auxiliar.TipoEnderecoRow || (Auxiliar.TipoEnderecoRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoEnderecoService;
        (function (TipoEnderecoService) {
            TipoEnderecoService.baseUrl = 'Auxiliar/TipoEndereco';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TipoEnderecoService[x] = function (r, s, o) {
                    return Q.serviceRequest(TipoEnderecoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TipoEnderecoService = Auxiliar.TipoEnderecoService || (Auxiliar.TipoEnderecoService = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoTelefoneForm = /** @class */ (function (_super) {
            __extends(TipoTelefoneForm, _super);
            function TipoTelefoneForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TipoTelefoneForm.init) {
                    TipoTelefoneForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TipoTelefoneForm, [
                        'Descricao', w0
                    ]);
                }
                return _this;
            }
            TipoTelefoneForm.formKey = 'Auxiliar.TipoTelefone';
            return TipoTelefoneForm;
        }(Serenity.PrefixedContext));
        Auxiliar.TipoTelefoneForm = TipoTelefoneForm;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoTelefoneRow;
        (function (TipoTelefoneRow) {
            TipoTelefoneRow.idProperty = 'TipoTelefoneId';
            TipoTelefoneRow.nameProperty = 'Descricao';
            TipoTelefoneRow.localTextPrefix = 'Auxiliar.TipoTelefone';
            TipoTelefoneRow.lookupKey = 'Auxiliar.TipoTelefone';
            function getLookup() {
                return Q.getLookup('Auxiliar.TipoTelefone');
            }
            TipoTelefoneRow.getLookup = getLookup;
        })(TipoTelefoneRow = Auxiliar.TipoTelefoneRow || (Auxiliar.TipoTelefoneRow = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoTelefoneService;
        (function (TipoTelefoneService) {
            TipoTelefoneService.baseUrl = 'Auxiliar/TipoTelefone';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TipoTelefoneService[x] = function (r, s, o) {
                    return Q.serviceRequest(TipoTelefoneService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TipoTelefoneService = Auxiliar.TipoTelefoneService || (Auxiliar.TipoTelefoneService = {}));
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var BairroForm = /** @class */ (function (_super) {
            __extends(BairroForm, _super);
            function BairroForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BairroForm.init) {
                    BairroForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(BairroForm, [
                        'Nome', w0,
                        'CidadeId', w1
                    ]);
                }
                return _this;
            }
            BairroForm.formKey = 'CadastroBasico.Bairro';
            return BairroForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.BairroForm = BairroForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var BairroRow;
        (function (BairroRow) {
            BairroRow.idProperty = 'BairroId';
            BairroRow.nameProperty = 'Nome';
            BairroRow.localTextPrefix = 'CadastroBasico.Bairro';
            BairroRow.lookupKey = 'CadastroBasico.Bairro';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Bairro');
            }
            BairroRow.getLookup = getLookup;
        })(BairroRow = CadastroBasico.BairroRow || (CadastroBasico.BairroRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var BairroService;
        (function (BairroService) {
            BairroService.baseUrl = 'CadastroBasico/Bairro';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BairroService[x] = function (r, s, o) {
                    return Q.serviceRequest(BairroService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BairroService = CadastroBasico.BairroService || (CadastroBasico.BairroService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CepForm = /** @class */ (function (_super) {
            __extends(CepForm, _super);
            function CepForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CepForm.init) {
                    CepForm.init = true;
                    var s = Serenity;
                    var w0 = s.MaskedEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(CepForm, [
                        'Cep', w0,
                        'Logradouro', w1,
                        'PaisId', w2,
                        'EstadoId', w2,
                        'CidadeId', w2,
                        'BairroId', w2
                    ]);
                }
                return _this;
            }
            CepForm.formKey = 'CadastroBasico.Cep';
            return CepForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.CepForm = CepForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CepRow;
        (function (CepRow) {
            CepRow.idProperty = 'CepId';
            CepRow.nameProperty = 'Cep';
            CepRow.localTextPrefix = 'CadastroBasico.Cep';
            CepRow.lookupKey = 'CadastroBasico.Cep';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Cep');
            }
            CepRow.getLookup = getLookup;
        })(CepRow = CadastroBasico.CepRow || (CadastroBasico.CepRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CepService;
        (function (CepService) {
            CepService.baseUrl = 'CadastroBasico/Cep';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CepService[x] = function (r, s, o) {
                    return Q.serviceRequest(CepService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CepService = CadastroBasico.CepService || (CadastroBasico.CepService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CidadeForm = /** @class */ (function (_super) {
            __extends(CidadeForm, _super);
            function CidadeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CidadeForm.init) {
                    CidadeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(CidadeForm, [
                        'Nome', w0,
                        'EstadoId', w1,
                        'Ibge', w2
                    ]);
                }
                return _this;
            }
            CidadeForm.formKey = 'CadastroBasico.Cidade';
            return CidadeForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.CidadeForm = CidadeForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CidadeRow;
        (function (CidadeRow) {
            CidadeRow.idProperty = 'CidadeId';
            CidadeRow.nameProperty = 'Nome';
            CidadeRow.localTextPrefix = 'CadastroBasico.Cidade';
            CidadeRow.lookupKey = 'CadastroBasico.Cidade';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Cidade');
            }
            CidadeRow.getLookup = getLookup;
        })(CidadeRow = CadastroBasico.CidadeRow || (CadastroBasico.CidadeRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CidadeService;
        (function (CidadeService) {
            CidadeService.baseUrl = 'CadastroBasico/Cidade';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CidadeService[x] = function (r, s, o) {
                    return Q.serviceRequest(CidadeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CidadeService = CadastroBasico.CidadeService || (CadastroBasico.CidadeService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var EstadoForm = /** @class */ (function (_super) {
            __extends(EstadoForm, _super);
            function EstadoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EstadoForm.init) {
                    EstadoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(EstadoForm, [
                        'PaisId', w0,
                        'Nome', w1,
                        'Uf', w1,
                        'Ibge', w2,
                        'Ddd', w1
                    ]);
                }
                return _this;
            }
            EstadoForm.formKey = 'CadastroBasico.Estado';
            return EstadoForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.EstadoForm = EstadoForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var EstadoRow;
        (function (EstadoRow) {
            EstadoRow.idProperty = 'EstadoId';
            EstadoRow.nameProperty = 'Nome';
            EstadoRow.localTextPrefix = 'CadastroBasico.Estado';
            EstadoRow.lookupKey = 'CadastroBasico.Estado';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Estado');
            }
            EstadoRow.getLookup = getLookup;
        })(EstadoRow = CadastroBasico.EstadoRow || (CadastroBasico.EstadoRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var EstadoService;
        (function (EstadoService) {
            EstadoService.baseUrl = 'CadastroBasico/Estado';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EstadoService[x] = function (r, s, o) {
                    return Q.serviceRequest(EstadoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EstadoService = CadastroBasico.EstadoService || (CadastroBasico.EstadoService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var FabricanteForm = /** @class */ (function (_super) {
            __extends(FabricanteForm, _super);
            function FabricanteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FabricanteForm.init) {
                    FabricanteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(FabricanteForm, [
                        'Nome', w0
                    ]);
                }
                return _this;
            }
            FabricanteForm.formKey = 'CadastroBasico.Fabricante';
            return FabricanteForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.FabricanteForm = FabricanteForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var FabricanteRow;
        (function (FabricanteRow) {
            FabricanteRow.idProperty = 'VeiculoFabricanteId';
            FabricanteRow.nameProperty = 'Nome';
            FabricanteRow.localTextPrefix = 'CadastroBasico.Fabricante';
            FabricanteRow.lookupKey = 'CadastroBasico.Fabricante';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Fabricante');
            }
            FabricanteRow.getLookup = getLookup;
        })(FabricanteRow = CadastroBasico.FabricanteRow || (CadastroBasico.FabricanteRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var FabricanteService;
        (function (FabricanteService) {
            FabricanteService.baseUrl = 'CadastroBasico/Fabricante';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FabricanteService[x] = function (r, s, o) {
                    return Q.serviceRequest(FabricanteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FabricanteService = CadastroBasico.FabricanteService || (CadastroBasico.FabricanteService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var ModeloForm = /** @class */ (function (_super) {
            __extends(ModeloForm, _super);
            function ModeloForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ModeloForm.init) {
                    ModeloForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(ModeloForm, [
                        'VeiculoFabricanteId', w0,
                        'Nome', w1
                    ]);
                }
                return _this;
            }
            ModeloForm.formKey = 'CadastroBasico.Modelo';
            return ModeloForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.ModeloForm = ModeloForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var ModeloRow;
        (function (ModeloRow) {
            ModeloRow.idProperty = 'VeiculoModeloId';
            ModeloRow.nameProperty = 'Nome';
            ModeloRow.localTextPrefix = 'CadastroBasico.Modelo';
            ModeloRow.lookupKey = 'CadastroBasico.Modelo';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Modelo');
            }
            ModeloRow.getLookup = getLookup;
        })(ModeloRow = CadastroBasico.ModeloRow || (CadastroBasico.ModeloRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var ModeloService;
        (function (ModeloService) {
            ModeloService.baseUrl = 'CadastroBasico/Modelo';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ModeloService[x] = function (r, s, o) {
                    return Q.serviceRequest(ModeloService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ModeloService = CadastroBasico.ModeloService || (CadastroBasico.ModeloService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var PaisForm = /** @class */ (function (_super) {
            __extends(PaisForm, _super);
            function PaisForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PaisForm.init) {
                    PaisForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(PaisForm, [
                        'Nome', w0,
                        'Sigla', w0,
                        'NomeInternacional', w0,
                        'Bacen', w1,
                        'Nacionalidade', w0
                    ]);
                }
                return _this;
            }
            PaisForm.formKey = 'CadastroBasico.Pais';
            return PaisForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.PaisForm = PaisForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var PaisRow;
        (function (PaisRow) {
            PaisRow.idProperty = 'PaisId';
            PaisRow.nameProperty = 'Nome';
            PaisRow.localTextPrefix = 'CadastroBasico.Pais';
            PaisRow.lookupKey = 'CadastroBasico.Pais';
            function getLookup() {
                return Q.getLookup('CadastroBasico.Pais');
            }
            PaisRow.getLookup = getLookup;
        })(PaisRow = CadastroBasico.PaisRow || (CadastroBasico.PaisRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var PaisService;
        (function (PaisService) {
            PaisService.baseUrl = 'CadastroBasico/Pais';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaisService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaisService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PaisService = CadastroBasico.PaisService || (CadastroBasico.PaisService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ClienteForm = /** @class */ (function (_super) {
            __extends(Pessoa_ClienteForm, _super);
            function Pessoa_ClienteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!Pessoa_ClienteForm.init) {
                    Pessoa_ClienteForm.init = true;
                    var s = Serenity;
                    var w0 = GoExpressTMS.TipoPessoaEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = GoExpressTMS.SexoEditor;
                    var w4 = s.LookupEditor;
                    var w5 = s.MaskedEditor;
                    Q.initFormType(Pessoa_ClienteForm, [
                        'TipoPessoa', w0,
                        'Nome', w1,
                        'RazaoSocial', w1,
                        'DataCadastro', w2,
                        'Sexo', w3,
                        'DataNascimento', w2,
                        'EstadoCivil', w4,
                        'Filiacao01', w1,
                        'Filiacao02', w1,
                        'Nacionalidade', w4,
                        'EstadoNascimento', w4,
                        'Naturalidade', w4,
                        'Cnpj', w5,
                        'InscEstadual', w1,
                        'InscMunicipal', w1,
                        'Cpf', w5,
                        'RgNumero', w1,
                        'RgOrgaoEmissor', w4,
                        'RgUfEmissor', w4,
                        'TituloEleitorNumero', w1,
                        'TituloEleitorZona', w1,
                        'TituloEleitorSecao', w1,
                        'Pis', w1,
                        'CnhNumero', w1,
                        'CnhTipo', w1,
                        'CnhEmissao', w2,
                        'CnhValidade', w2,
                        'GrauInstrucao', w4
                    ]);
                }
                return _this;
            }
            Pessoa_ClienteForm.formKey = 'CadastroBasico.Pessoa_Cliente';
            return Pessoa_ClienteForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.Pessoa_ClienteForm = Pessoa_ClienteForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ClienteRow;
        (function (Pessoa_ClienteRow) {
            Pessoa_ClienteRow.idProperty = 'PessoaId';
            Pessoa_ClienteRow.nameProperty = 'Nome';
            Pessoa_ClienteRow.localTextPrefix = 'CadastroBasico.Pessoa_Cliente';
        })(Pessoa_ClienteRow = CadastroBasico.Pessoa_ClienteRow || (CadastroBasico.Pessoa_ClienteRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ClienteService;
        (function (Pessoa_ClienteService) {
            Pessoa_ClienteService.baseUrl = 'CadastroBasico/Pessoa_Cliente';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                Pessoa_ClienteService[x] = function (r, s, o) {
                    return Q.serviceRequest(Pessoa_ClienteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(Pessoa_ClienteService = CadastroBasico.Pessoa_ClienteService || (CadastroBasico.Pessoa_ClienteService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ColaboradorForm = /** @class */ (function (_super) {
            __extends(Pessoa_ColaboradorForm, _super);
            function Pessoa_ColaboradorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!Pessoa_ColaboradorForm.init) {
                    Pessoa_ColaboradorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = GoExpressTMS.SexoEditor;
                    var w4 = s.MaskedEditor;
                    Q.initFormType(Pessoa_ColaboradorForm, [
                        'Matricula', w0,
                        'Nome', w0,
                        'DataAdmissao', w1,
                        'TipoColaboradorId', w2,
                        'Sexo', w3,
                        'DataNascimento', w1,
                        'EstadoCivil', w2,
                        'Filiacao01', w0,
                        'Filiacao02', w0,
                        'Nacionalidade', w2,
                        'EstadoNascimento', w2,
                        'Naturalidade', w2,
                        'Cpf', w4,
                        'RgNumero', w0,
                        'RgOrgaoEmissor', w2,
                        'RgUfEmissor', w2,
                        'TituloEleitorNumero', w0,
                        'TituloEleitorZona', w0,
                        'TituloEleitorSecao', w0,
                        'Pis', w0,
                        'CnhNumero', w0,
                        'CnhTipo', w0,
                        'CnhEmissao', w1,
                        'CnhValidade', w1,
                        'GrauInstrucao', w2
                    ]);
                }
                return _this;
            }
            Pessoa_ColaboradorForm.formKey = 'CadastroBasico.Pessoa_Colaborador';
            return Pessoa_ColaboradorForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.Pessoa_ColaboradorForm = Pessoa_ColaboradorForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ColaboradorRow;
        (function (Pessoa_ColaboradorRow) {
            Pessoa_ColaboradorRow.idProperty = 'PessoaId';
            Pessoa_ColaboradorRow.nameProperty = 'Nome';
            Pessoa_ColaboradorRow.localTextPrefix = 'CadastroBasico.Pessoa_Colaborador';
        })(Pessoa_ColaboradorRow = CadastroBasico.Pessoa_ColaboradorRow || (CadastroBasico.Pessoa_ColaboradorRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ColaboradorService;
        (function (Pessoa_ColaboradorService) {
            Pessoa_ColaboradorService.baseUrl = 'CadastroBasico/Pessoa_Colaborador';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                Pessoa_ColaboradorService[x] = function (r, s, o) {
                    return Q.serviceRequest(Pessoa_ColaboradorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(Pessoa_ColaboradorService = CadastroBasico.Pessoa_ColaboradorService || (CadastroBasico.Pessoa_ColaboradorService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_MotoristaForm = /** @class */ (function (_super) {
            __extends(Pessoa_MotoristaForm, _super);
            function Pessoa_MotoristaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!Pessoa_MotoristaForm.init) {
                    Pessoa_MotoristaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = GoExpressTMS.SexoEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.MaskedEditor;
                    Q.initFormType(Pessoa_MotoristaForm, [
                        'Nome', w0,
                        'DataCadastro', w1,
                        'Sexo', w2,
                        'DataNascimento', w1,
                        'EstadoCivil', w3,
                        'Filiacao01', w0,
                        'Filiacao02', w0,
                        'Nacionalidade', w3,
                        'EstadoNascimento', w3,
                        'Naturalidade', w3,
                        'Cpf', w4,
                        'RgNumero', w0,
                        'RgOrgaoEmissor', w3,
                        'RgUfEmissor', w3,
                        'TituloEleitorNumero', w0,
                        'TituloEleitorZona', w0,
                        'TituloEleitorSecao', w0,
                        'Pis', w0,
                        'CnhNumero', w0,
                        'CnhTipo', w0,
                        'CnhEmissao', w1,
                        'CnhValidade', w1,
                        'GrauInstrucao', w3
                    ]);
                }
                return _this;
            }
            Pessoa_MotoristaForm.formKey = 'CadastroBasico.Pessoa_Motorista';
            return Pessoa_MotoristaForm;
        }(Serenity.PrefixedContext));
        CadastroBasico.Pessoa_MotoristaForm = Pessoa_MotoristaForm;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_MotoristaRow;
        (function (Pessoa_MotoristaRow) {
            Pessoa_MotoristaRow.idProperty = 'PessoaId';
            Pessoa_MotoristaRow.nameProperty = 'Nome';
            Pessoa_MotoristaRow.localTextPrefix = 'CadastroBasico.Pessoa_Motorista';
        })(Pessoa_MotoristaRow = CadastroBasico.Pessoa_MotoristaRow || (CadastroBasico.Pessoa_MotoristaRow = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_MotoristaService;
        (function (Pessoa_MotoristaService) {
            Pessoa_MotoristaService.baseUrl = 'CadastroBasico/Pessoa_Motorista';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                Pessoa_MotoristaService[x] = function (r, s, o) {
                    return Q.serviceRequest(Pessoa_MotoristaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(Pessoa_MotoristaService = CadastroBasico.Pessoa_MotoristaService || (CadastroBasico.Pessoa_MotoristaService = {}));
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Texts;
    (function (Texts) {
        GoExpressTMS['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Auxiliar: { Cliente: { ClienteId: 1, DataCadastro: 1, PessoaId: 1, PessoaNome: 1, PessoaTipoPessoa: 1 }, Colaborador: { ColaboradorId: 1, DataAdmissao: 1, Matricula: 1, PessoaId: 1, TipoColaboradorId: 1 }, EstadoCivil: { Descricao: 1, EstadoCivilId: 1 }, GrauInstrucao: { Descricao: 1, GrauInstrucaoId: 1 }, Motorista: { DataCadastro: 1, MotoristaId: 1, PessoaId: 1, PessoaNome: 1, PessoaTipoPessoa: 1 }, OrgaoEmissor: { Nome: 1, OrgaoEmissorId: 1 }, PessoaFisica: { CnhEmissao: 1, CnhNumero: 1, CnhTipo: 1, CnhValidade: 1, Cpf: 1, DataNascimento: 1, EstadoCivil: 1, EstadoNascimento: 1, Filiacao01: 1, Filiacao02: 1, GrauInstrucao: 1, Nacionalidade: 1, Naturalidade: 1, PessoaFisicaId: 1, PessoaId: 1, Pis: 1, RgNumero: 1, RgOrgaoEmissor: 1, RgUfEmissor: 1, Sexo: 1, TituloEleitorNumero: 1, TituloEleitorSecao: 1, TituloEleitorZona: 1 }, PessoaJuridica: { Cnpj: 1, InscEstadual: 1, InscMunicipal: 1, PessoaId: 1, PessoaJuridicaId: 1, PessoaNome: 1, PessoaTipoPessoa: 1, RazaoSocial: 1 }, TipoColaborador: { Tipo: 1, TipoColaboradorId: 1 }, TipoEndereco: { Descricao: 1, TipoEnderecoId: 1 }, TipoTelefone: { Descricao: 1, TipoTelefoneId: 1 } }, CadastroBasico: { Bairro: { BairroId: 1, CidadeId: 1, CidadeNome: 1, EstadoId: 1, Nome: 1 }, Cep: { BairroId: 1, BairroNome: 1, Cep: 1, CepId: 1, CidadeId: 1, CidadeNome: 1, EstadoId: 1, EstadoNome: 1, Logradouro: 1, PaisId: 1, PaisNome: 1 }, Cidade: { CidadeId: 1, EstadoId: 1, EstadoNome: 1, EstadoPaisId: 1, Ibge: 1, Nome: 1 }, Estado: { Ddd: 1, EstadoId: 1, Ibge: 1, Nome: 1, PaisId: 1, PaisNome: 1, Uf: 1 }, Fabricante: { Nome: 1, VeiculoFabricanteId: 1 }, Modelo: { Nome: 1, VeiculoFabricanteId: 1, VeiculoFabricanteNome: 1, VeiculoModeloId: 1 }, Pais: { Bacen: 1, Nacionalidade: 1, Nome: 1, NomeInternacional: 1, PaisId: 1, Sigla: 1 }, Pessoa_Cliente: { CnhEmissao: 1, CnhNumero: 1, CnhTipo: 1, CnhValidade: 1, Cnpj: 1, Cpf: 1, DataCadastro: 1, DataNascimento: 1, EstadoCivil: 1, EstadoNascimento: 1, Filiacao01: 1, Filiacao02: 1, GrauInstrucao: 1, InscEstadual: 1, InscMunicipal: 1, Nacionalidade: 1, Naturalidade: 1, Nome: 1, PessoaId: 1, PessoaTipo: 1, Pis: 1, RazaoSocial: 1, RgNumero: 1, RgOrgaoEmissor: 1, RgUfEmissor: 1, Sexo: 1, TipoPessoa: 1, TituloEleitorNumero: 1, TituloEleitorSecao: 1, TituloEleitorZona: 1 }, Pessoa_Colaborador: { CnhEmissao: 1, CnhNumero: 1, CnhTipo: 1, CnhValidade: 1, Cpf: 1, DataAdmissao: 1, DataNascimento: 1, EstadoCivil: 1, EstadoNascimento: 1, Filiacao01: 1, Filiacao02: 1, GrauInstrucao: 1, Matricula: 1, Nacionalidade: 1, Naturalidade: 1, Nome: 1, PessoaId: 1, Pis: 1, RgNumero: 1, RgOrgaoEmissor: 1, RgUfEmissor: 1, Sexo: 1, TipoColaborador: 1, TipoColaboradorId: 1, TipoPessoa: 1, TituloEleitorNumero: 1, TituloEleitorSecao: 1, TituloEleitorZona: 1 }, Pessoa_Motorista: { CnhEmissao: 1, CnhNumero: 1, CnhTipo: 1, CnhValidade: 1, Cpf: 1, DataCadastro: 1, DataNascimento: 1, EstadoCivil: 1, EstadoNascimento: 1, Filiacao01: 1, Filiacao02: 1, GrauInstrucao: 1, Nacionalidade: 1, Naturalidade: 1, Nome: 1, PessoaId: 1, Pis: 1, RgNumero: 1, RgOrgaoEmissor: 1, RgUfEmissor: 1, Sexo: 1, TipoPessoa: 1, TituloEleitorNumero: 1, TituloEleitorSecao: 1, TituloEleitorZona: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = GoExpressTMS.Texts || (GoExpressTMS.Texts = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = GoExpressTMS.Authorization || (GoExpressTMS.Authorization = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = GoExpressTMS.Administration || (GoExpressTMS.Administration = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var EstadoCivilDialog = /** @class */ (function (_super) {
            __extends(EstadoCivilDialog, _super);
            function EstadoCivilDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Auxiliar.EstadoCivilForm(_this.idPrefix);
                return _this;
            }
            EstadoCivilDialog.prototype.getFormKey = function () { return Auxiliar.EstadoCivilForm.formKey; };
            EstadoCivilDialog.prototype.getIdProperty = function () { return Auxiliar.EstadoCivilRow.idProperty; };
            EstadoCivilDialog.prototype.getLocalTextPrefix = function () { return Auxiliar.EstadoCivilRow.localTextPrefix; };
            EstadoCivilDialog.prototype.getNameProperty = function () { return Auxiliar.EstadoCivilRow.nameProperty; };
            EstadoCivilDialog.prototype.getService = function () { return Auxiliar.EstadoCivilService.baseUrl; };
            EstadoCivilDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadoCivilDialog);
            return EstadoCivilDialog;
        }(Serenity.EntityDialog));
        Auxiliar.EstadoCivilDialog = EstadoCivilDialog;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var EstadoCivilGrid = /** @class */ (function (_super) {
            __extends(EstadoCivilGrid, _super);
            function EstadoCivilGrid(container) {
                return _super.call(this, container) || this;
            }
            EstadoCivilGrid.prototype.getColumnsKey = function () { return 'Auxiliar.EstadoCivil'; };
            EstadoCivilGrid.prototype.getDialogType = function () { return Auxiliar.EstadoCivilDialog; };
            EstadoCivilGrid.prototype.getIdProperty = function () { return Auxiliar.EstadoCivilRow.idProperty; };
            EstadoCivilGrid.prototype.getLocalTextPrefix = function () { return Auxiliar.EstadoCivilRow.localTextPrefix; };
            EstadoCivilGrid.prototype.getService = function () { return Auxiliar.EstadoCivilService.baseUrl; };
            EstadoCivilGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EstadoCivilGrid);
            return EstadoCivilGrid;
        }(Serenity.EntityGrid));
        Auxiliar.EstadoCivilGrid = EstadoCivilGrid;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var GrauInstrucaoDialog = /** @class */ (function (_super) {
            __extends(GrauInstrucaoDialog, _super);
            function GrauInstrucaoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Auxiliar.GrauInstrucaoForm(_this.idPrefix);
                return _this;
            }
            GrauInstrucaoDialog.prototype.getFormKey = function () { return Auxiliar.GrauInstrucaoForm.formKey; };
            GrauInstrucaoDialog.prototype.getIdProperty = function () { return Auxiliar.GrauInstrucaoRow.idProperty; };
            GrauInstrucaoDialog.prototype.getLocalTextPrefix = function () { return Auxiliar.GrauInstrucaoRow.localTextPrefix; };
            GrauInstrucaoDialog.prototype.getNameProperty = function () { return Auxiliar.GrauInstrucaoRow.nameProperty; };
            GrauInstrucaoDialog.prototype.getService = function () { return Auxiliar.GrauInstrucaoService.baseUrl; };
            GrauInstrucaoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GrauInstrucaoDialog);
            return GrauInstrucaoDialog;
        }(Serenity.EntityDialog));
        Auxiliar.GrauInstrucaoDialog = GrauInstrucaoDialog;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var GrauInstrucaoGrid = /** @class */ (function (_super) {
            __extends(GrauInstrucaoGrid, _super);
            function GrauInstrucaoGrid(container) {
                return _super.call(this, container) || this;
            }
            GrauInstrucaoGrid.prototype.getColumnsKey = function () { return 'Auxiliar.GrauInstrucao'; };
            GrauInstrucaoGrid.prototype.getDialogType = function () { return Auxiliar.GrauInstrucaoDialog; };
            GrauInstrucaoGrid.prototype.getIdProperty = function () { return Auxiliar.GrauInstrucaoRow.idProperty; };
            GrauInstrucaoGrid.prototype.getLocalTextPrefix = function () { return Auxiliar.GrauInstrucaoRow.localTextPrefix; };
            GrauInstrucaoGrid.prototype.getService = function () { return Auxiliar.GrauInstrucaoService.baseUrl; };
            GrauInstrucaoGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], GrauInstrucaoGrid);
            return GrauInstrucaoGrid;
        }(Serenity.EntityGrid));
        Auxiliar.GrauInstrucaoGrid = GrauInstrucaoGrid;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var OrgaoEmissorDialog = /** @class */ (function (_super) {
            __extends(OrgaoEmissorDialog, _super);
            function OrgaoEmissorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Auxiliar.OrgaoEmissorForm(_this.idPrefix);
                return _this;
            }
            OrgaoEmissorDialog.prototype.getFormKey = function () { return Auxiliar.OrgaoEmissorForm.formKey; };
            OrgaoEmissorDialog.prototype.getIdProperty = function () { return Auxiliar.OrgaoEmissorRow.idProperty; };
            OrgaoEmissorDialog.prototype.getLocalTextPrefix = function () { return Auxiliar.OrgaoEmissorRow.localTextPrefix; };
            OrgaoEmissorDialog.prototype.getNameProperty = function () { return Auxiliar.OrgaoEmissorRow.nameProperty; };
            OrgaoEmissorDialog.prototype.getService = function () { return Auxiliar.OrgaoEmissorService.baseUrl; };
            OrgaoEmissorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrgaoEmissorDialog);
            return OrgaoEmissorDialog;
        }(Serenity.EntityDialog));
        Auxiliar.OrgaoEmissorDialog = OrgaoEmissorDialog;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var OrgaoEmissorGrid = /** @class */ (function (_super) {
            __extends(OrgaoEmissorGrid, _super);
            function OrgaoEmissorGrid(container) {
                return _super.call(this, container) || this;
            }
            OrgaoEmissorGrid.prototype.getColumnsKey = function () { return 'Auxiliar.OrgaoEmissor'; };
            OrgaoEmissorGrid.prototype.getDialogType = function () { return Auxiliar.OrgaoEmissorDialog; };
            OrgaoEmissorGrid.prototype.getIdProperty = function () { return Auxiliar.OrgaoEmissorRow.idProperty; };
            OrgaoEmissorGrid.prototype.getLocalTextPrefix = function () { return Auxiliar.OrgaoEmissorRow.localTextPrefix; };
            OrgaoEmissorGrid.prototype.getService = function () { return Auxiliar.OrgaoEmissorService.baseUrl; };
            OrgaoEmissorGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrgaoEmissorGrid);
            return OrgaoEmissorGrid;
        }(Serenity.EntityGrid));
        Auxiliar.OrgaoEmissorGrid = OrgaoEmissorGrid;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoEnderecoDialog = /** @class */ (function (_super) {
            __extends(TipoEnderecoDialog, _super);
            function TipoEnderecoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Auxiliar.TipoEnderecoForm(_this.idPrefix);
                return _this;
            }
            TipoEnderecoDialog.prototype.getFormKey = function () { return Auxiliar.TipoEnderecoForm.formKey; };
            TipoEnderecoDialog.prototype.getIdProperty = function () { return Auxiliar.TipoEnderecoRow.idProperty; };
            TipoEnderecoDialog.prototype.getLocalTextPrefix = function () { return Auxiliar.TipoEnderecoRow.localTextPrefix; };
            TipoEnderecoDialog.prototype.getNameProperty = function () { return Auxiliar.TipoEnderecoRow.nameProperty; };
            TipoEnderecoDialog.prototype.getService = function () { return Auxiliar.TipoEnderecoService.baseUrl; };
            TipoEnderecoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoEnderecoDialog);
            return TipoEnderecoDialog;
        }(Serenity.EntityDialog));
        Auxiliar.TipoEnderecoDialog = TipoEnderecoDialog;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoEnderecoGrid = /** @class */ (function (_super) {
            __extends(TipoEnderecoGrid, _super);
            function TipoEnderecoGrid(container) {
                return _super.call(this, container) || this;
            }
            TipoEnderecoGrid.prototype.getColumnsKey = function () { return 'Auxiliar.TipoEndereco'; };
            TipoEnderecoGrid.prototype.getDialogType = function () { return Auxiliar.TipoEnderecoDialog; };
            TipoEnderecoGrid.prototype.getIdProperty = function () { return Auxiliar.TipoEnderecoRow.idProperty; };
            TipoEnderecoGrid.prototype.getLocalTextPrefix = function () { return Auxiliar.TipoEnderecoRow.localTextPrefix; };
            TipoEnderecoGrid.prototype.getService = function () { return Auxiliar.TipoEnderecoService.baseUrl; };
            TipoEnderecoGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], TipoEnderecoGrid);
            return TipoEnderecoGrid;
        }(Serenity.EntityGrid));
        Auxiliar.TipoEnderecoGrid = TipoEnderecoGrid;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoTelefoneDialog = /** @class */ (function (_super) {
            __extends(TipoTelefoneDialog, _super);
            function TipoTelefoneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Auxiliar.TipoTelefoneForm(_this.idPrefix);
                return _this;
            }
            TipoTelefoneDialog.prototype.getFormKey = function () { return Auxiliar.TipoTelefoneForm.formKey; };
            TipoTelefoneDialog.prototype.getIdProperty = function () { return Auxiliar.TipoTelefoneRow.idProperty; };
            TipoTelefoneDialog.prototype.getLocalTextPrefix = function () { return Auxiliar.TipoTelefoneRow.localTextPrefix; };
            TipoTelefoneDialog.prototype.getNameProperty = function () { return Auxiliar.TipoTelefoneRow.nameProperty; };
            TipoTelefoneDialog.prototype.getService = function () { return Auxiliar.TipoTelefoneService.baseUrl; };
            TipoTelefoneDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoTelefoneDialog);
            return TipoTelefoneDialog;
        }(Serenity.EntityDialog));
        Auxiliar.TipoTelefoneDialog = TipoTelefoneDialog;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Auxiliar;
    (function (Auxiliar) {
        var TipoTelefoneGrid = /** @class */ (function (_super) {
            __extends(TipoTelefoneGrid, _super);
            function TipoTelefoneGrid(container) {
                return _super.call(this, container) || this;
            }
            TipoTelefoneGrid.prototype.getColumnsKey = function () { return 'Auxiliar.TipoTelefone'; };
            TipoTelefoneGrid.prototype.getDialogType = function () { return Auxiliar.TipoTelefoneDialog; };
            TipoTelefoneGrid.prototype.getIdProperty = function () { return Auxiliar.TipoTelefoneRow.idProperty; };
            TipoTelefoneGrid.prototype.getLocalTextPrefix = function () { return Auxiliar.TipoTelefoneRow.localTextPrefix; };
            TipoTelefoneGrid.prototype.getService = function () { return Auxiliar.TipoTelefoneService.baseUrl; };
            TipoTelefoneGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], TipoTelefoneGrid);
            return TipoTelefoneGrid;
        }(Serenity.EntityGrid));
        Auxiliar.TipoTelefoneGrid = TipoTelefoneGrid;
    })(Auxiliar = GoExpressTMS.Auxiliar || (GoExpressTMS.Auxiliar = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var BairroDialog = /** @class */ (function (_super) {
            __extends(BairroDialog, _super);
            function BairroDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.BairroForm(_this.idPrefix);
                return _this;
            }
            BairroDialog.prototype.getFormKey = function () { return CadastroBasico.BairroForm.formKey; };
            BairroDialog.prototype.getIdProperty = function () { return CadastroBasico.BairroRow.idProperty; };
            BairroDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.BairroRow.localTextPrefix; };
            BairroDialog.prototype.getNameProperty = function () { return CadastroBasico.BairroRow.nameProperty; };
            BairroDialog.prototype.getService = function () { return CadastroBasico.BairroService.baseUrl; };
            BairroDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BairroDialog);
            return BairroDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.BairroDialog = BairroDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var BairroGrid = /** @class */ (function (_super) {
            __extends(BairroGrid, _super);
            function BairroGrid(container) {
                return _super.call(this, container) || this;
            }
            BairroGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Bairro'; };
            BairroGrid.prototype.getDialogType = function () { return CadastroBasico.BairroDialog; };
            BairroGrid.prototype.getIdProperty = function () { return CadastroBasico.BairroRow.idProperty; };
            BairroGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.BairroRow.localTextPrefix; };
            BairroGrid.prototype.getService = function () { return CadastroBasico.BairroService.baseUrl; };
            BairroGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BairroGrid);
            return BairroGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.BairroGrid = BairroGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CepDialog = /** @class */ (function (_super) {
            __extends(CepDialog, _super);
            function CepDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.CepForm(_this.idPrefix);
                return _this;
            }
            CepDialog.prototype.getFormKey = function () { return CadastroBasico.CepForm.formKey; };
            CepDialog.prototype.getIdProperty = function () { return CadastroBasico.CepRow.idProperty; };
            CepDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.CepRow.localTextPrefix; };
            CepDialog.prototype.getNameProperty = function () { return CadastroBasico.CepRow.nameProperty; };
            CepDialog.prototype.getService = function () { return CadastroBasico.CepService.baseUrl; };
            CepDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CepDialog);
            return CepDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.CepDialog = CepDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CepGrid = /** @class */ (function (_super) {
            __extends(CepGrid, _super);
            function CepGrid(container) {
                return _super.call(this, container) || this;
            }
            CepGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Cep'; };
            CepGrid.prototype.getDialogType = function () { return CadastroBasico.CepDialog; };
            CepGrid.prototype.getIdProperty = function () { return CadastroBasico.CepRow.idProperty; };
            CepGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.CepRow.localTextPrefix; };
            CepGrid.prototype.getService = function () { return CadastroBasico.CepService.baseUrl; };
            CepGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CepGrid);
            return CepGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.CepGrid = CepGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CidadeDialog = /** @class */ (function (_super) {
            __extends(CidadeDialog, _super);
            function CidadeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.CidadeForm(_this.idPrefix);
                return _this;
            }
            CidadeDialog.prototype.getFormKey = function () { return CadastroBasico.CidadeForm.formKey; };
            CidadeDialog.prototype.getIdProperty = function () { return CadastroBasico.CidadeRow.idProperty; };
            CidadeDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.CidadeRow.localTextPrefix; };
            CidadeDialog.prototype.getNameProperty = function () { return CadastroBasico.CidadeRow.nameProperty; };
            CidadeDialog.prototype.getService = function () { return CadastroBasico.CidadeService.baseUrl; };
            CidadeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CidadeDialog);
            return CidadeDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.CidadeDialog = CidadeDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var CidadeGrid = /** @class */ (function (_super) {
            __extends(CidadeGrid, _super);
            function CidadeGrid(container) {
                return _super.call(this, container) || this;
            }
            CidadeGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Cidade'; };
            CidadeGrid.prototype.getDialogType = function () { return CadastroBasico.CidadeDialog; };
            CidadeGrid.prototype.getIdProperty = function () { return CadastroBasico.CidadeRow.idProperty; };
            CidadeGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.CidadeRow.localTextPrefix; };
            CidadeGrid.prototype.getService = function () { return CadastroBasico.CidadeService.baseUrl; };
            CidadeGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel(),
                Serenity.Decorators.filterable()
            ], CidadeGrid);
            return CidadeGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.CidadeGrid = CidadeGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var EstadoDialog = /** @class */ (function (_super) {
            __extends(EstadoDialog, _super);
            function EstadoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.EstadoForm(_this.idPrefix);
                return _this;
            }
            EstadoDialog.prototype.getFormKey = function () { return CadastroBasico.EstadoForm.formKey; };
            EstadoDialog.prototype.getIdProperty = function () { return CadastroBasico.EstadoRow.idProperty; };
            EstadoDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.EstadoRow.localTextPrefix; };
            EstadoDialog.prototype.getNameProperty = function () { return CadastroBasico.EstadoRow.nameProperty; };
            EstadoDialog.prototype.getService = function () { return CadastroBasico.EstadoService.baseUrl; };
            EstadoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], EstadoDialog);
            return EstadoDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.EstadoDialog = EstadoDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var EstadoGrid = /** @class */ (function (_super) {
            __extends(EstadoGrid, _super);
            function EstadoGrid(container) {
                return _super.call(this, container) || this;
            }
            EstadoGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Estado'; };
            EstadoGrid.prototype.getDialogType = function () { return CadastroBasico.EstadoDialog; };
            EstadoGrid.prototype.getIdProperty = function () { return CadastroBasico.EstadoRow.idProperty; };
            EstadoGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.EstadoRow.localTextPrefix; };
            EstadoGrid.prototype.getService = function () { return CadastroBasico.EstadoService.baseUrl; };
            EstadoGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EstadoGrid);
            return EstadoGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.EstadoGrid = EstadoGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var FabricanteDialog = /** @class */ (function (_super) {
            __extends(FabricanteDialog, _super);
            function FabricanteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.FabricanteForm(_this.idPrefix);
                return _this;
            }
            FabricanteDialog.prototype.getFormKey = function () { return CadastroBasico.FabricanteForm.formKey; };
            FabricanteDialog.prototype.getIdProperty = function () { return CadastroBasico.FabricanteRow.idProperty; };
            FabricanteDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.FabricanteRow.localTextPrefix; };
            FabricanteDialog.prototype.getNameProperty = function () { return CadastroBasico.FabricanteRow.nameProperty; };
            FabricanteDialog.prototype.getService = function () { return CadastroBasico.FabricanteService.baseUrl; };
            FabricanteDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], FabricanteDialog);
            return FabricanteDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.FabricanteDialog = FabricanteDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var FabricanteGrid = /** @class */ (function (_super) {
            __extends(FabricanteGrid, _super);
            function FabricanteGrid(container) {
                return _super.call(this, container) || this;
            }
            FabricanteGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Fabricante'; };
            FabricanteGrid.prototype.getDialogType = function () { return CadastroBasico.FabricanteDialog; };
            FabricanteGrid.prototype.getIdProperty = function () { return CadastroBasico.FabricanteRow.idProperty; };
            FabricanteGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.FabricanteRow.localTextPrefix; };
            FabricanteGrid.prototype.getService = function () { return CadastroBasico.FabricanteService.baseUrl; };
            FabricanteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FabricanteGrid);
            return FabricanteGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.FabricanteGrid = FabricanteGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var ModeloDialog = /** @class */ (function (_super) {
            __extends(ModeloDialog, _super);
            function ModeloDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.ModeloForm(_this.idPrefix);
                return _this;
            }
            ModeloDialog.prototype.getFormKey = function () { return CadastroBasico.ModeloForm.formKey; };
            ModeloDialog.prototype.getIdProperty = function () { return CadastroBasico.ModeloRow.idProperty; };
            ModeloDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.ModeloRow.localTextPrefix; };
            ModeloDialog.prototype.getNameProperty = function () { return CadastroBasico.ModeloRow.nameProperty; };
            ModeloDialog.prototype.getService = function () { return CadastroBasico.ModeloService.baseUrl; };
            ModeloDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ModeloDialog);
            return ModeloDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.ModeloDialog = ModeloDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var ModeloGrid = /** @class */ (function (_super) {
            __extends(ModeloGrid, _super);
            function ModeloGrid(container) {
                return _super.call(this, container) || this;
            }
            ModeloGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Modelo'; };
            ModeloGrid.prototype.getDialogType = function () { return CadastroBasico.ModeloDialog; };
            ModeloGrid.prototype.getIdProperty = function () { return CadastroBasico.ModeloRow.idProperty; };
            ModeloGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.ModeloRow.localTextPrefix; };
            ModeloGrid.prototype.getService = function () { return CadastroBasico.ModeloService.baseUrl; };
            ModeloGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ModeloGrid);
            return ModeloGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.ModeloGrid = ModeloGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var PaisDialog = /** @class */ (function (_super) {
            __extends(PaisDialog, _super);
            function PaisDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.PaisForm(_this.idPrefix);
                return _this;
            }
            PaisDialog.prototype.getFormKey = function () { return CadastroBasico.PaisForm.formKey; };
            PaisDialog.prototype.getIdProperty = function () { return CadastroBasico.PaisRow.idProperty; };
            PaisDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.PaisRow.localTextPrefix; };
            PaisDialog.prototype.getNameProperty = function () { return CadastroBasico.PaisRow.nameProperty; };
            PaisDialog.prototype.getService = function () { return CadastroBasico.PaisService.baseUrl; };
            PaisDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PaisDialog);
            return PaisDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.PaisDialog = PaisDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var PaisGrid = /** @class */ (function (_super) {
            __extends(PaisGrid, _super);
            function PaisGrid(container) {
                return _super.call(this, container) || this;
            }
            PaisGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Pais'; };
            PaisGrid.prototype.getDialogType = function () { return CadastroBasico.PaisDialog; };
            PaisGrid.prototype.getIdProperty = function () { return CadastroBasico.PaisRow.idProperty; };
            PaisGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.PaisRow.localTextPrefix; };
            PaisGrid.prototype.getService = function () { return CadastroBasico.PaisService.baseUrl; };
            PaisGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel(),
                Serenity.Decorators.filterable()
            ], PaisGrid);
            return PaisGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.PaisGrid = PaisGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ClienteDialog = /** @class */ (function (_super) {
            __extends(Pessoa_ClienteDialog, _super);
            function Pessoa_ClienteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.Pessoa_ClienteForm(_this.idPrefix);
                return _this;
            }
            Pessoa_ClienteDialog.prototype.getFormKey = function () { return CadastroBasico.Pessoa_ClienteForm.formKey; };
            Pessoa_ClienteDialog.prototype.getIdProperty = function () { return CadastroBasico.Pessoa_ClienteRow.idProperty; };
            Pessoa_ClienteDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.Pessoa_ClienteRow.localTextPrefix; };
            Pessoa_ClienteDialog.prototype.getNameProperty = function () { return CadastroBasico.Pessoa_ClienteRow.nameProperty; };
            Pessoa_ClienteDialog.prototype.getService = function () { return CadastroBasico.Pessoa_ClienteService.baseUrl; };
            Pessoa_ClienteDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], Pessoa_ClienteDialog);
            return Pessoa_ClienteDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.Pessoa_ClienteDialog = Pessoa_ClienteDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ClienteGrid = /** @class */ (function (_super) {
            __extends(Pessoa_ClienteGrid, _super);
            function Pessoa_ClienteGrid(container) {
                return _super.call(this, container) || this;
            }
            Pessoa_ClienteGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Pessoa_Cliente'; };
            Pessoa_ClienteGrid.prototype.getDialogType = function () { return CadastroBasico.Pessoa_ClienteDialog; };
            Pessoa_ClienteGrid.prototype.getIdProperty = function () { return CadastroBasico.Pessoa_ClienteRow.idProperty; };
            Pessoa_ClienteGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.Pessoa_ClienteRow.localTextPrefix; };
            Pessoa_ClienteGrid.prototype.getService = function () { return CadastroBasico.Pessoa_ClienteService.baseUrl; };
            Pessoa_ClienteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], Pessoa_ClienteGrid);
            return Pessoa_ClienteGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.Pessoa_ClienteGrid = Pessoa_ClienteGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ColaboradorDialog = /** @class */ (function (_super) {
            __extends(Pessoa_ColaboradorDialog, _super);
            function Pessoa_ColaboradorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.Pessoa_ColaboradorForm(_this.idPrefix);
                return _this;
            }
            Pessoa_ColaboradorDialog.prototype.getFormKey = function () { return CadastroBasico.Pessoa_ColaboradorForm.formKey; };
            Pessoa_ColaboradorDialog.prototype.getIdProperty = function () { return CadastroBasico.Pessoa_ColaboradorRow.idProperty; };
            Pessoa_ColaboradorDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.Pessoa_ColaboradorRow.localTextPrefix; };
            Pessoa_ColaboradorDialog.prototype.getNameProperty = function () { return CadastroBasico.Pessoa_ColaboradorRow.nameProperty; };
            Pessoa_ColaboradorDialog.prototype.getService = function () { return CadastroBasico.Pessoa_ColaboradorService.baseUrl; };
            Pessoa_ColaboradorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], Pessoa_ColaboradorDialog);
            return Pessoa_ColaboradorDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.Pessoa_ColaboradorDialog = Pessoa_ColaboradorDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_ColaboradorGrid = /** @class */ (function (_super) {
            __extends(Pessoa_ColaboradorGrid, _super);
            function Pessoa_ColaboradorGrid(container) {
                return _super.call(this, container) || this;
            }
            Pessoa_ColaboradorGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Pessoa_Colaborador'; };
            Pessoa_ColaboradorGrid.prototype.getDialogType = function () { return CadastroBasico.Pessoa_ColaboradorDialog; };
            Pessoa_ColaboradorGrid.prototype.getIdProperty = function () { return CadastroBasico.Pessoa_ColaboradorRow.idProperty; };
            Pessoa_ColaboradorGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.Pessoa_ColaboradorRow.localTextPrefix; };
            Pessoa_ColaboradorGrid.prototype.getService = function () { return CadastroBasico.Pessoa_ColaboradorService.baseUrl; };
            Pessoa_ColaboradorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], Pessoa_ColaboradorGrid);
            return Pessoa_ColaboradorGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.Pessoa_ColaboradorGrid = Pessoa_ColaboradorGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_MotoristaDialog = /** @class */ (function (_super) {
            __extends(Pessoa_MotoristaDialog, _super);
            function Pessoa_MotoristaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CadastroBasico.Pessoa_MotoristaForm(_this.idPrefix);
                return _this;
            }
            Pessoa_MotoristaDialog.prototype.getFormKey = function () { return CadastroBasico.Pessoa_MotoristaForm.formKey; };
            Pessoa_MotoristaDialog.prototype.getIdProperty = function () { return CadastroBasico.Pessoa_MotoristaRow.idProperty; };
            Pessoa_MotoristaDialog.prototype.getLocalTextPrefix = function () { return CadastroBasico.Pessoa_MotoristaRow.localTextPrefix; };
            Pessoa_MotoristaDialog.prototype.getNameProperty = function () { return CadastroBasico.Pessoa_MotoristaRow.nameProperty; };
            Pessoa_MotoristaDialog.prototype.getService = function () { return CadastroBasico.Pessoa_MotoristaService.baseUrl; };
            Pessoa_MotoristaDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], Pessoa_MotoristaDialog);
            return Pessoa_MotoristaDialog;
        }(Serenity.EntityDialog));
        CadastroBasico.Pessoa_MotoristaDialog = Pessoa_MotoristaDialog;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var CadastroBasico;
    (function (CadastroBasico) {
        var Pessoa_MotoristaGrid = /** @class */ (function (_super) {
            __extends(Pessoa_MotoristaGrid, _super);
            function Pessoa_MotoristaGrid(container) {
                return _super.call(this, container) || this;
            }
            Pessoa_MotoristaGrid.prototype.getColumnsKey = function () { return 'CadastroBasico.Pessoa_Motorista'; };
            Pessoa_MotoristaGrid.prototype.getDialogType = function () { return CadastroBasico.Pessoa_MotoristaDialog; };
            Pessoa_MotoristaGrid.prototype.getIdProperty = function () { return CadastroBasico.Pessoa_MotoristaRow.idProperty; };
            Pessoa_MotoristaGrid.prototype.getLocalTextPrefix = function () { return CadastroBasico.Pessoa_MotoristaRow.localTextPrefix; };
            Pessoa_MotoristaGrid.prototype.getService = function () { return CadastroBasico.Pessoa_MotoristaService.baseUrl; };
            Pessoa_MotoristaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], Pessoa_MotoristaGrid);
            return Pessoa_MotoristaGrid;
        }(Serenity.EntityGrid));
        CadastroBasico.Pessoa_MotoristaGrid = Pessoa_MotoristaGrid;
    })(CadastroBasico = GoExpressTMS.CadastroBasico || (GoExpressTMS.CadastroBasico = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = GoExpressTMS.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = GoExpressTMS.LanguageList || (GoExpressTMS.LanguageList = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var GoExpressTMS;
(function (GoExpressTMS) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('GoExpressTMS');
        Serenity.EntityDialog.defaultLanguageList = GoExpressTMS.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = GoExpressTMS.ScriptInitialization || (GoExpressTMS.ScriptInitialization = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    GoExpressTMS.BasicProgressDialog = BasicProgressDialog;
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new GoExpressTMS.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = GoExpressTMS.DialogUtils || (GoExpressTMS.DialogUtils = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    GoExpressTMS.StaticTextBlock = StaticTextBlock;
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var MonthEditor = /** @class */ (function (_super) {
        __extends(MonthEditor, _super);
        function MonthEditor(container) {
            var _this = _super.call(this, container, null) || this;
            _this.addOption("1", "Janeiro");
            _this.addOption("2", "Fevereiro");
            _this.addOption("3", "Março");
            _this.addOption("4", "Abril");
            _this.addOption("5", "Maio");
            _this.addOption("6", "junho");
            _this.addOption("7", "Julho");
            _this.addOption("8", "Agosto");
            _this.addOption("9", "Setembro");
            _this.addOption("10", "Outubro");
            _this.addOption("11", "Novembro");
            _this.addOption("12", "Dezembro");
            return _this;
        }
        MonthEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], MonthEditor);
        return MonthEditor;
    }(Serenity.Select2Editor));
    GoExpressTMS.MonthEditor = MonthEditor;
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var PhoneEditor = /** @class */ (function (_super) {
        __extends(PhoneEditor, _super);
        function PhoneEditor(input) {
            var _this = _super.call(this, input) || this;
            _this.DDD = true;
            _this.addValidationRule(_this.uniqueName, function (e) {
                var value = Q.trimToNull(_this.get_value());
                if (value == null) {
                    return null;
                }
                return PhoneEditor_1.validate(value, _this.DDD, _this.multiple);
            });
            input.bind('change', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e)) {
                    return;
                }
                _this.formatValue();
            });
            input.bind('blur', function (e) {
                if (_this.element.hasClass('valid')) {
                    _this.formatValue();
                }
            });
            return _this;
        }
        PhoneEditor_1 = PhoneEditor;
        PhoneEditor.prototype.formatValue = function () {
            this.element.val(this.getFormattedValue());
        };
        PhoneEditor.prototype.getFormattedValue = function () {
            var value = this.element.val();
            if (this.multiple) {
                return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone(value, this.DDD));
            }
            return PhoneEditor_1.formatPhone(value, this.DDD);
        };
        PhoneEditor.prototype.get_value = function () {
            return this.getFormattedValue();
        };
        PhoneEditor.prototype.set_value = function (value) {
            this.element.val(value);
        };
        PhoneEditor.validate = function (phone, isDDD, isMultiple) {
            var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, isDDD, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone, isDDD));
            if (valid) {
                return null;
            }
            return Q.text((isMultiple ? 'Validation.PhoneEditorMultiple' : 'Validation.PhoneEditor'));
        };
        PhoneEditor.isValidPhone = function (phone, isDDD) {
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
            }
            else {
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
        };
        PhoneEditor.formatPhone = function (phone, DDD) {
            if (!PhoneEditor_1.isValidPhone(phone, DDD)) {
                return phone;
            }
            phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
            if (Q.startsWith(phone, '0')) {
                phone = phone.substring(1);
            }
            if (DDD) {
                if (phone.length == 10) {
                    phone = '(' + phone.substr(0, 2) + ') ' + phone.substr(2, 4) + '-' + phone.substr(6, 4);
                }
                else if (phone.length == 11) {
                    phone = '(' + phone.substr(0, 2) + ') ' + phone.substr(2, 5) + '-' + phone.substr(7, 4);
                }
            }
            else {
                if (phone.length == 8) {
                    phone = phone.substr(0, 4) + '-' + phone.substr(4, 4);
                }
                else if (phone.length == 9) {
                    phone = phone.substr(0, 5) + '-' + phone.substr(5, 4);
                }
            }
            return phone;
        };
        PhoneEditor.formatMulti = function (phone, format) {
            var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
            var result = '';
            for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                var x = phones_1[_i];
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
        };
        PhoneEditor.isValidMulti = function (phone, isDDD, check) {
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
        };
        var PhoneEditor_1;
        __decorate([
            Serenity.Decorators.option()
        ], PhoneEditor.prototype, "multiple", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], PhoneEditor.prototype, "DDD", void 0);
        PhoneEditor = PhoneEditor_1 = __decorate([
            Serenity.Decorators.registerEditor()
        ], PhoneEditor);
        return PhoneEditor;
    }(Serenity.StringEditor));
    GoExpressTMS.PhoneEditor = PhoneEditor;
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var SexoEditor = /** @class */ (function (_super) {
        __extends(SexoEditor, _super);
        function SexoEditor(container) {
            var _this = _super.call(this, container, null) || this;
            _this.addOption("F", "Feminino");
            _this.addOption("M", "Masculino");
            return _this;
        }
        SexoEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], SexoEditor);
        return SexoEditor;
    }(Serenity.Select2Editor));
    GoExpressTMS.SexoEditor = SexoEditor;
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var TipoPessoaEditor = /** @class */ (function (_super) {
        __extends(TipoPessoaEditor, _super);
        function TipoPessoaEditor(container) {
            var _this = _super.call(this, container, null) || this;
            _this.addOption("F", "Pessoa Física");
            _this.addOption("J", "Pessoa Jurídica");
            return _this;
        }
        TipoPessoaEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], TipoPessoaEditor);
        return TipoPessoaEditor;
    }(Serenity.Select2Editor));
    GoExpressTMS.TipoPessoaEditor = TipoPessoaEditor;
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = GoExpressTMS.Common || (GoExpressTMS.Common = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
var GoExpressTMS;
(function (GoExpressTMS) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = GoExpressTMS.Membership || (GoExpressTMS.Membership = {}));
})(GoExpressTMS || (GoExpressTMS = {}));
//# sourceMappingURL=GoExpressTMS.Web.js.map