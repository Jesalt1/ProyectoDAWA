﻿using System;
using System.Collections.Generic;

namespace Proyecto.Models
{
    public partial class NumeroDocumento
    {
        public int IdNumeroDocumento { get; set; }
        public int UltimoNumero { get; set; }
        public DateTime? FechaRegistro { get; set; }
    }
}
