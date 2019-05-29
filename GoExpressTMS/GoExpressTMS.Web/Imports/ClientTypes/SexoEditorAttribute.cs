using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GoExpressTMS
{
    public partial class SexoEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GoExpressTMS.SexoEditor";

        public SexoEditorAttribute()
            : base(Key)
        {
        }
    }
}

