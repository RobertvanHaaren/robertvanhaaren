const navHelper = {

	init(){
		this.initToggleBtns('data-project-open', 'add');
		this.initToggleBtns('data-project-close', 'remove');
	},

	initToggleBtns(attrName, classMethod){
		const els = document.querySelectorAll(`[${attrName}]`);

		[...els].forEach((el) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				document.body.classList[classMethod]('page-project-open');
			}, false);
		});
	}

};

navHelper.init();