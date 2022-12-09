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

/**
 * EyeDropper API: @see https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper
 */

import { TextareaControl, Button } from '@wordpress/components';
import samplecolor from './samplecolor';

export default function Edit() {

	return (
		<p { ...useBlockProps() }>		
			{/* Eyedropper button */}
			<Button 
				id="eyedropper-btn"
				variant="primary"
				onClick={samplecolor}>
					Click me!
			</Button>

			<span id="result">
				{/* Result shoes up here */}
			</span>
		</p>
	);
}
