 function MinElement(arr, minPos){

        let min = minPos

        for(let i = minPos; i < arr.length; i++){

            if (arr[i] < arr[minPos]){

                minPos = i;

            }

        }

        return minPos

    }

    function Sort(arr) {

        for (let i = 0; i < arr.length; i++){

            let min = MinElement(arr, i)

            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp

        }

        return arr

    }