Feature('busqueda');

Scenario('test something', ({ I }) => {

	//I.amOnPage('http://zero.webappsecurity.com')
	//I.fillField("//input[@id='searchTerm']" , 'Global Hitss')
	//I.pressKey('Enter')
	//I.saveScreenshot('main-window.png')
	// I.amOnPage('https://github.com');
	// I.click('Sign in', '//html/body/div[1]/header');
	// I.see('Sign in to GitHub', 'h1');
	// I.fillField('Username or email address', 'something@totest.com');
	// I.fillField('Password', '123456');
	// I.click('Sign in');
	// I.see('Incorrect username or password.', '.flash-error');
	// I.saveScreenshot('main-window.png')
	I.amOnPage('https://correocmx.globalhitss.com/');
	I.see('Versión:','label');
	I.fillField('Nombre de usuario:', 'lopezedis@globalhitss.com');
	I.fillField('Contraseña:', 'L0pe#edis');
	I.click('Iniciar sesión');
	I.wait(2)
	I.see('Contacts','td');
	I.saveScreenshot('main-window.png')


});
