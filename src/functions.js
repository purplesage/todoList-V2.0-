const tabChangingFunction = (UlListClass, targetDiv) => {  //?this will be useful for the 'todo' project

    /* rootElement.rootDiv.appendChild(contentCapsule()[0]); */ // home. default content on page load
    const TabItems = document.querySelector(UlListClass).getElementsByTagName('li');

    for (let i = 0; i < TabItems.length; i++) {

        TabItems[i].addEventListener('click', () => {
            
            let content = document.getElementById('content');
                targetDiv.removeChild(content);
                targetDiv.appendChild(contentCapsule()[i]);
                content = document.getElementById('content');//this line might not be necesary
        });
    }
};

export {tabChangingFunction};