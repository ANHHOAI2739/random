(() => {
    const $ = document.querySelector.bind(document);

    let timeRotate = 7000; // 7 seconds
    let currentRotate = 0;
    let isRotating = false;
    const wheel = $('.wheel');
    const btnWheel = $('.btn--wheel');
    const showMsg = $('.msg');

    // List of gifts
    const listGift = [
        { text: '0', percent: 0 / 100 },
        { text: '1', percent: 0 / 100 },
        { text: '2', percent: 0 / 100 },
        { text: '3', percent: 0 / 100 },
        { text: '4', percent: 0 / 100 },
        { text: '5', percent: 0 / 100 },
        { text: '6', percent: 0 / 100 },
        { text: '7', percent: 0 / 100 },
        { text: '8', percent: 0 / 100 },
        { text: '9', percent: 33 / 100 },
        { text: '10', percent: 33 / 100 },
        { text: '11', percent: 0 / 100 },
        { text: '12', percent: 0 / 100 },
        { text: '13', percent: 0 / 100 },
        { text: '14', percent: 0 / 100 },
        { text: '15', percent: 0 / 100 },
        { text: '16', percent: 0 / 100 },
        { text: '17', percent: 0 / 100 },
        { text: '18', percent: 0 / 100 },
        { text: '19', percent: 0 / 100 },
        { text: '20', percent: 0 / 100 },
        { text: '21', percent: 0 / 100 },
        { text: '22', percent: 0 / 100 },
        { text: '23', percent: 0 / 100 },
        { text: '24', percent: 0 / 100 },
        { text: '25', percent: 0 / 100 },
        { text: '26', percent: 0 / 100 },
        { text: '27', percent: 0 / 100 },
        { text: '28', percent: 0 / 100 },
        { text: '29', percent: 33 / 100 },
        { text: '30', percent: 0 / 100 },
        { text: '31', percent: 0 / 100 },
        { text: '32', percent: 0 / 100 },
        { text: '33', percent: 33 / 100 },
        { text: '34', percent: 0 / 100 },
        { text: '35', percent: 0 / 100 },
    ];

    // Number of gifts
    const size = listGift.length;

    // Angle for each gift
    const rotate = 360 / size;

    // Skew angle to align text
    const skewY = 90 - rotate;

    listGift.map((item, index) => {
        // Create list item
        const elm = document.createElement('li');

        // Rotate and skew list item
        elm.style.transform = `rotate(${rotate * index}deg) skewY(-${skewY}deg)`;

        // Add text and alternate background colors
        elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${rotate / 2}deg);" class="text ${index % 2 == 0 ? 'text-1' : 'text-2'}">
            <b>${item.text}</b>
        </p>`;

        // Append to wheel
        wheel.appendChild(elm);
    });

    // Predefined results
    const predefinedResults = [29, 9, 10];
    let resultIndex = 0;

    // Start function
    const start = () => {
        showMsg.innerHTML = '';
        isRotating = true;

        // Get the next predefined result
        const result = predefinedResults[resultIndex];
        const gift = listGift[result];

        // Update the index for the next spin
        resultIndex = (resultIndex + 1) % predefinedResults.length;

        // Calculate current rotation
        currentRotate += 360 * 10;

        // Rotate the wheel
        rotateWheel(currentRotate, result);

        // Show the gift
        showGift(gift);
    };

    // Rotate wheel function
    const rotateWheel = (currentRotate, index) => {
        wheel.style.transform = `rotate(${
            currentRotate - index * rotate - rotate / 2
        }deg)`;
    };

    // Show gift function
    const showGift = gift => {
        let timer = setTimeout(() => {
            isRotating = false;
            showMsg.innerHTML = `Chúc mừng số "${gift.text}"`;
            clearTimeout(timer);
        }, timeRotate);
    };

    // Button click event
    btnWheel.addEventListener('click', () => {
        if (!isRotating) start();
    });
})();
