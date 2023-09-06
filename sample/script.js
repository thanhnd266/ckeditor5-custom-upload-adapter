import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';

DecoupledEditor
	.create( document.querySelector( '.editor' ), {
		plugins: [ SimpleUploadAdapter, /* ... */ ],
        toolbar: [ /* ... */ ],
        simpleUpload: {
            uploadUrl: 'http://example.com',
            withCredentials: true,
            headers: {
                'X-CSRF-TOKEN': 'CSRF-Token',
                Authorization: 'Bearer <JSON Web Token>'
            }
        }
	} )
	.then( editor => {
		window.editor = editor;

		// Set a custom container for the toolbar.
		document.querySelector( '.document-editor__toolbar' ).appendChild( editor.ui.view.toolbar.element );
		document.querySelector( '.ck-toolbar' ).classList.add( 'ck-reset_all' );
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "wsvijxqkfd5f-78n6ytatpmn1" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
