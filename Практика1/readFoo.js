function Read(){

        const display = document.querySelector("#display");
        let a = document.getElementById("message").value
        let proverka = true
        let countNum = 0

        display.innerHTML = '';

        for (let i = 0; i < a.length; i++) {

            if ((a[i] < '0' || a[i] > '9') && a[i] != ' ') {

                alert("Вы ввели не числа!")

                proverka = false

                break

            }

            if (a[i] >= '0' && a[i] <= '9') {

                countNum += 1

            }

            if (i == a.length - 1) {

                if (countNum == 0) {

                    alert("Вы не ввели числа!")

                    proverka = false
                }
            }

        }

        if (proverka) {

            let v = []
            let s = ""
            let num = 0

            for (let i = 0; i < a.length; i++) {

                while (a[i] != ' ' && i < a.length) {

                    s = s + a[i]

                    i += 1

                }

                for (let ch = 0; ch < s.length; ch++) {

                    num = num * 10 + (s[ch] - '0')

                }

                v.push(num)
                num = 0
                s = ""

            }

            display.innerHTML += Sort(v);
        
        }
    }  