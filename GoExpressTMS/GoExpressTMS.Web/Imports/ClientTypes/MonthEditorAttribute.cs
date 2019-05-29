using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GoExpressTMS
{
    public partial class MonthEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GoExpressTMS.MonthEditor";

        public MonthEditorAttribute()
            : base(Key)
        {
        }
    }
}

