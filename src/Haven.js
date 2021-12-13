export class Haven {
    constructor() {
        this.open = false;
        this.initialise();
    }

    initialise() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        document.body.appendChild(container);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const havenIcon = document.createElement('img');
        havenIcon.src = 'assets/logo.svg';
        havenIcon.classList.add('icon');
        this.havenIcon = havenIcon;

        const closeIcon = document.createElement('img');
        closeIcon.src = 'assets/close.svg';
        closeIcon.classList.add('icon', 'hidden');
        this.closeIcon = closeIcon;

        this.havenContainer = document.createElement('div');
        this.havenContainer.classList.add('haven-container');

        //Create content for container

        buttonContainer.appendChild(this.havenIcon);
        buttonContainer.appendChild(this.closeIcon);

        buttonContainer.addEventListener('click', this.toggleOpen.bind(this));

        container.appendChild(buttonContainer);

        this.createStyles();
    }

    createStyles() {
        const styleTag = document.createElement('style');
        document.head.appendChild(styleTag);

        styleTag.innerHTML = `
            .icon {
                cursor: pointer;
                width: 70%;
                position: absolute;
                top: 9px;
                left: 9px;
                transition: transform .3s ease;
            }
            
            .hidden {
                transform: scale(0);
            }

            .button-container {
                background-color: #4F4F4F;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }

            .haven-container {
                display: none;
                overflow: auto;
                position: fixed;
                inset: 0px;
                z-index: 99999;
                background-color: rgba(0, 0, 0, 0.5);
                zoom: 1;
            }
        `;
    }

    toggleOpen() {

        this.open = !this.open;

        if(this.open) {
            this.havenContainer.classList.remove('hidden')
        } else {
            this.havenIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
            this.havenContainer.classList.add('hidden');
        }

    }
}