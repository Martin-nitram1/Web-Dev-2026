function one() {
    console.log('step 1 is complete');
    setTimeout(() => {
        three();
    }, 2000); // Schedule three to run after 2 seconds
    setTimeout(() => {
        two();
    }, 4000); // Schedule two to run after 2 seconds
}

function two() {
    console.log('two');
}

function three() {
    console.log('step 2 is starting');

}

one();