/**
 * 
 * @param {array} array 
 */
const bubbleSort = function (array){
    if(array.length === 0){
        return [];
    }
    let temp;
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < array.length-1; i++){
            if(array[i] > array[i+1]){
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return array;
}

module.exports = bubbleSort;
