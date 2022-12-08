/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { TextareaControl, Button } from '@wordpress/components';
import samplecolor from './samplecolor';

export default function Edit() {

	return (


		<p { ...useBlockProps() }>
			
			{/* <button id="sample-color">Open the eyedropper</button>  */}
			

				{/* Eyedropper button */}
				<Button 
					id="sample-color"
					variant="primary"
					onClick={samplecolor}>
						Click me!
				</Button>

				<span id="result">
					{/* Result shoes up here */}
				</span>



				{/* <TextareaControl
					label="Text"
					help="Enter some text"
					value={ text }
					onChange={ ( value ) => setText( value ) }
        		/> */}


		</p>
	);
}
