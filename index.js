function processMatrix(e) {
            
           
    // let matrixInput1 = [];
    // let matrixInput2 = [];
    // let resultMatrix = [];

for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            

            // // null check in nested array
            // if (!matrixInput1[i]) matrixInput1[i] = [];
            // if (!matrixInput2[i]) matrixInput2[i] = [];
            // if (!resultMatrix[i]) resultMatrix[i] = [];

            //  matrixInput1[i][j] = document.querySelector(`#m1${i}${j}`).value;
            //  matrixInput2[i][j] = document.querySelector(`#m2${i}${j}`).value;
            //  resultMatrix[i][j] = Number(document.querySelector(`#m1${i}${j}`).value) + Number(document.querySelector(`#m2${i}${j}`).value);

            // console.log(i, j);
            // console.log(`#m1${i}${j}`);



            if (e.submitter.innerText.toLowerCase() === "sum")
                document.querySelector(`#r${i}${j}`).value = Number(document.querySelector(`#m1${i}${j}`).value) + Number(document.querySelector(`#m2${i}${j}`).value)
            else
                document.querySelector(`#r${i}${j}`).value = Number(document.querySelector(`#m1${i}${j}`).value) - Number(document.querySelector(`#m2${i}${j}`).value)

        }
    }

        }function processMatrix(e) {
            
           
            // let matrixInput1 = [];
            // let matrixInput2 = [];
            // let resultMatrix = [];
      
        for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {

                    

                    // // null check in nested array
                    // if (!matrixInput1[i]) matrixInput1[i] = [];
                    // if (!matrixInput2[i]) matrixInput2[i] = [];
                    // if (!resultMatrix[i]) resultMatrix[i] = [];

                    //  matrixInput1[i][j] = document.querySelector(`#m1${i}${j}`).value;
                    //  matrixInput2[i][j] = document.querySelector(`#m2${i}${j}`).value;
                    //  resultMatrix[i][j] = Number(document.querySelector(`#m1${i}${j}`).value) + Number(document.querySelector(`#m2${i}${j}`).value);

                    // console.log(i, j);
                    // console.log(`#m1${i}${j}`);



                    if (e.submitter.innerText.toLowerCase() === "sum")
                        document.querySelector(`#r${i}${j}`).value = Number(document.querySelector(`#m1${i}${j}`).value) + Number(document.querySelector(`#m2${i}${j}`).value)
                    else
                        document.querySelector(`#r${i}${j}`).value = Number(document.querySelector(`#m1${i}${j}`).value) - Number(document.querySelector(`#m2${i}${j}`).value)

                }
            }

                }