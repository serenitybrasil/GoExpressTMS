using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GoExpressTMS
{
    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GoExpressTMS.PhoneEditor";

        public PhoneEditorAttribute()
            : base(Key)
        {
        }

        public Boolean DDD
        {
            get { return GetOption<Boolean>("DDD"); }
            set { SetOption("DDD", value); }
        }

        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

