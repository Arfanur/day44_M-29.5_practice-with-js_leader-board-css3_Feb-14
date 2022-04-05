        // 1. change section title font color with rgba
        const allSectionTitle = document.getElementsByClassName('section-title');
        for (const sectionTitle of allSectionTitle) {
            sectionTitle.style.color = 'rgba(120, 119, 123, 1)';
        }



        // 2. change Top Player background color with rgba
        const topPlayers = document.getElementById('top-players');
        topPlayers.style.backgroundColor = 'rgba(0, 200, 0, .2)';

        // const topPlayers = document.getElementsByClassName('top-players');
        // for(topPlayer of topPlayers){
        //     topPlayer.style.backgroundColor = 'rgba(0, 200, 0, .2)';
        // }



        // 3. create a new ul(unordered list) and a button with onclick function
        document.getElementById('add-list-btn').addEventListener('click', function () {
            const listItems = document.getElementById('list-items');
            const addList = document.createElement('li');
            addList.innerText = 'This is a list';
            listItems.appendChild(addList);
        });



        // (4 & 5). create a changable input field with  trigger button 
        function increaseValue() {
            const increaseButton = document.getElementById('increase-btn');
            const inputfield = document.getElementById('input-number');
            let inputNumber = inputfield.value;
            if (inputNumber < 5) {
                inputNumber = parseInt(inputNumber) + 1;
            }
            if (inputNumber == 5) {
                increaseButton.style.display = 'none';
            }
            inputfield.value = inputNumber;
        }
