namespace GoExpressTMS
{
    public class Validacoes
    {
        public static bool ValidaCPF(string vrCPF)
        {
            if (string.IsNullOrEmpty(vrCPF))
            {
                return false;
            }

            string valor = vrCPF.Replace(".", "");
            valor = valor.Replace("-", "");

            if (valor.Length != 11)
            {
                return false;
            }

            bool igual = true;

            for (int i = 1; i < 11 && igual; i++)
            {
                if (valor[i] != valor[0])
                {
                    igual = false;
                }
            }

            if (igual || valor == "12345678909")
            {
                return false;
            }

            int[] numeros = new int[11];

            for (int i = 0; i < 11; i++)
            {
                numeros[i] = int.Parse(valor[i].ToString());
            }

            int soma = 0;

            for (int i = 0; i < 9; i++)
            {
                soma += (10 - i) * numeros[i];
            }

            int resultado = soma % 11;

            if (resultado == 1 || resultado == 0)
            {
                if (numeros[9] != 0)
                {
                    return false;
                }
            }
            else if (numeros[9] != 11 - resultado)
            {
                return false;
            }

            soma = 0;

            for (int i = 0; i < 10; i++)
            {
                soma += (11 - i) * numeros[i];
            }

            resultado = soma % 11;

            if (resultado == 1 || resultado == 0)
            {
                if (numeros[10] != 0)
                {
                    return false;
                }
            }
            else
                if (numeros[10] != 11 - resultado)
            {
                return false;
            }

            return true;
        }

        public static bool ValidaCNPJ(string vrCNPJ)
        {
            string CNPJ = vrCNPJ.Replace(".", "");
            CNPJ = CNPJ.Replace("/", "");
            CNPJ = CNPJ.Replace("-", "");
            int[] digitos, soma, resultado;
            int nrDig;
            string ftmt;
            bool[] CNPJOk;
            ftmt = "6543298765432";
            digitos = new int[14];
            soma = new int[2];
            soma[0] = 0;
            soma[1] = 0;
            resultado = new int[2];
            resultado[0] = 0;
            resultado[1] = 0;
            CNPJOk = new bool[2];
            CNPJOk[0] = false;
            CNPJOk[1] = false;
            try
            {
                for (nrDig = 0; nrDig < 14; nrDig++)
                {
                    digitos[nrDig] = int.Parse(
                        CNPJ.Substring(nrDig, 1));
                    if (nrDig <= 11)
                    {
                        soma[0] += (digitos[nrDig] *
                          int.Parse(ftmt.Substring(
                          nrDig + 1, 1)));
                    }

                    if (nrDig <= 12)
                    {
                        soma[1] += (digitos[nrDig] *
                          int.Parse(ftmt.Substring(
                          nrDig, 1)));
                    }
                }

                for (nrDig = 0; nrDig < 2; nrDig++)
                {
                    resultado[nrDig] = (soma[nrDig] % 11);
                    if ((resultado[nrDig] == 0) || (resultado[nrDig] == 1))
                    {
                        CNPJOk[nrDig] = (digitos[12 + nrDig] == 0);
                    }
                    else
                    {
                        CNPJOk[nrDig] = (digitos[12 + nrDig] == (11 - resultado[nrDig]));
                    }
                }
                return (CNPJOk[0] && CNPJOk[1]);
            }
            catch
            {
                return false;
            }
        }

        public static bool ValidarTitulo(string strTitulo)
        {
            try
            {
                int dig1;
                int dig2;
                int dig3;
                int dig4;
                int dig5;
                int dig6;
                int dig7;
                int dig8;
                int dig9;
                int dig10;
                int dig11;
                int dig12;
                int dv1;
                int dv2;
                int qDig;

                if (strTitulo.Length == 0) //Validação do preenchimento
                {
                    return false; //Caso não seja informado o Título
                }
                else
                {
                    if (strTitulo.Length < 12)
                    {
                        //Completar 12 dígitos             
                        strTitulo = "000000000000" + strTitulo;
                        strTitulo = strTitulo.Substring(strTitulo.Length - 12);
                    }
                    else if (strTitulo.Length > 12)
                    {
                        return false; //Caso tenha mais que 12 dígitos
                    }
                }

                qDig = strTitulo.Length; //Total de caracteres

                //Gravar posição dos caracteres
                dig1 = int.Parse(Mid(strTitulo, qDig - 11, 1));
                dig2 = int.Parse(Mid(strTitulo, qDig - 10, 1));
                dig3 = int.Parse(Mid(strTitulo, qDig - 9, 1));
                dig4 = int.Parse(Mid(strTitulo, qDig - 8, 1));
                dig5 = int.Parse(Mid(strTitulo, qDig - 7, 1));
                dig6 = int.Parse(Mid(strTitulo, qDig - 6, 1));
                dig7 = int.Parse(Mid(strTitulo, qDig - 5, 1));
                dig8 = int.Parse(Mid(strTitulo, qDig - 4, 1));
                dig9 = int.Parse(Mid(strTitulo, qDig - 3, 1));
                dig10 = int.Parse(Mid(strTitulo, qDig - 2, 1));
                dig11 = int.Parse(Mid(strTitulo, qDig - 1, 1));
                dig12 = int.Parse(Mid(strTitulo, qDig, 1));

                //Cálculo para o primeiro dígito validador
                dv1 = (dig1 * 2) + (dig2 * 3) + (dig3 * 4) + (dig4 * 5) + (dig5 * 6) + (dig6 * 7) + (dig7 * 8) + (dig8 * 9);
                dv1 = dv1 % 11;

                if (dv1 == 10)
                {
                    dv1 = 0; //Se o resto for igual a 10, dv1 igual a zero
                }

                //Cálculo para o segundo dígito validador
                dv2 = (dig9 * 7) + (dig10 * 8) + (dv1 * 9);
                dv2 = dv2 % 11;

                if (dv2 == 10)
                {
                    dv2 = 0; //Se o resto for igual a 10, dv1 igual a zero
                }

                //Validação dos dígitos validadores, após o cálculo realizado
                if (dig11 == dv1 && dig12 == dv2)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }
        }

        //Função Auxiliar
        public static string Mid(string texto, int inicio, int tamanho)
        {
            string strMid = texto.Substring(inicio - 1, (inicio + (tamanho - 1)) - (inicio - 1));
            return strMid;
        }

    }
}