const shuffle = (data) => {
    let shuffledNumbers = null;

    let arr = [...data];

    let first,
        second,
        temp,
        count = arr.length;

    for (let i = 0; i < count; i++) {
        first = Math.floor(Math.random() * count);
        second = Math.floor(Math.random() * count);
        temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    shuffledNumbers = arr;

    return shuffledNumbers;
};

export default shuffle;
