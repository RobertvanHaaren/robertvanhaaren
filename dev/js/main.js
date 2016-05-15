const dataOnScreenToggle = {

	init(){
		const els = this._els = document.querySelectorAll('[data-onscreen-toggle]');

		if(els.length > 0){
			this._checkEls = this._checkEls.bind(this);

			this._checkEls();
			document.addEventListener('scroll', this._checkEls, false);
		}
	},

	_checkEls(){
		[...this._els].forEach((el) => {
			//check if element is on screen
			const onScreen = this._isOnScreen(el);

			if(onScreen){
				//if element is on screen
				//add class
				const addClassName = el.getAttribute('data-onscreen-toggle');
				el.classList.add(addClassName);
			}
		});
	},

	_isOnScreen(el){
	    const win = window;

	    //adds an extra offset so the class isn't added
		//untill its completely in the viewport
	    const extraOffset = el.offsetHeight;

	    const viewport = {
	        top: win.scrollY,
	        left: win.scrollX
	    };
	    viewport.right = viewport.left + win.innerWidth;
	    viewport.bottom = viewport.top + win.innerHeight;

	    let bounds = {
	    	top: el.offsetTop + extraOffset,
	    	left: el.offsetLeft
	    };
	    bounds.right = bounds.left + el.offsetWidth;
	    bounds.bottom = bounds.top + el.offsetHeight;

	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	}

};

dataOnScreenToggle.init();