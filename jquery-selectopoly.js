/**
* selectopoly
*
* Automatically generate multiple single-value select dropdowns to allow easier selection of multiple values.
* Requires jQuery.
*
* @version 1.0
* @category Form helper
* @author Daniel Farrelly <daniel@jellystyle.com>
* @link <https://github.com/jellybeansoup/jquery-selectopoly>
*/

(function( $ ){

	/**
	* The selectopoly function (an alias for $.selectopoly._init).
	* Works with a jQuery object array.
	* @var function
	*/

	$.fn.selectopoly = function() {
		// Loop through each object
		$(this).each(function(){
			// Set up the widget
			var selectopoly = {

				/**
				* The DOM elements that make up the widget
				* @var object
				*/

				_dom: {
					original: null,
					group: null,
					template: null
				},

				/**
				* Initiate the selectopoly functionality on a given DOM object.
				* @param object object The jQuery DOM object.
				* @return void
				*/

				init: function( object ) {
					var widget = this;
					// Fetch the object
					widget._dom.original = $(object);
					// Create a repeater group
					widget._dom.group = $('<span />').addClass('selectopoly').addClass('repeater-group');
					widget._dom.group.insertAfter( widget._dom.original ).append( widget._dom.original );
					// Prepare a template
					widget._dom.template = $('<span />').addClass('form-group').addClass('repeater');
					var template_field = widget._dom.original.clone().removeAttr('required multiple name id size');
					template_field.find('option[selected]').removeAttr('selected');
					if( template_field.find( 'option[value=""]' ).length <= 0 ) {
						template_field.prepend('<option value="">Select…</option>');
					}
					widget._dom.template.append( template_field );
					// Prepopulate with the existing values
					var selectedValues = widget._dom.original.val() || [];
					selectedValues.push(''); // We add a value for an extra field
					for( var i in selectedValues ) {
						// Clone and insert a new row
						var row = widget._addNewField();
						// Select the value
						row.find('select').val( selectedValues[i] );

						widget._updateRemovalButtons();
						widget._updateRequiredFlag();
					}
					// When a field changes
					widget._dom.group.on('change','select:not([multiple])',function(){
						// Update the value of the main field
						widget._updateFieldValues( widget._dom.group );
						// Don't go any further if the last dummy is blank
						if( widget._dom.group.find('select:not([multiple]):last').val() === '' ) {
							return;
						}
						// Clone and insert a new row
						widget._addNewField();

						widget._updateRemovalButtons();
						widget._updateRequiredFlag();
					});
					// When a field changes
					widget._dom.group.on('click','.repeater-remove',function(){
						// Remove this row
						$(this).parents('.form-group.repeater').first().remove();
						// Update the value of the main field
						widget._updateFieldValues();

						widget._updateRemovalButtons();
						widget._updateRequiredFlag();
					});
					// Hide the original select
					widget._dom.original.hide();
				},

				/**
				* Add a new dummy field.
				* @return The jQuery object representing the new row (span.form-group.repeater).
				*/

				_addNewField: function() {
					return this._dom.template.clone().appendTo( this._dom.group );
				},

				/**
				* Update the value of the original select with the values of the dummies.
				* @return void
				*/

				_updateFieldValues: function() {
					var values = [];
					this._dom.group.find('.form-group.repeater select').each(function(){
						values.push( $(this).val() );
					});
					this._dom.group.find('select[multiple]').val( values );
				},

				/**
				* Insert the removal buttons as required.
				* Also get rid of the "Select..." option when it's not needed.
				* @return void
				*/

				_updateRemovalButtons: function() {
					var rows = this._dom.group.find('.form-group.repeater');
					var last = rows.last();
					rows.each(function(){
						// From all but the last item
						if( ! $(this).is( last ) ) {
							// Remove the blank option
							$(this).find( 'option[value=""]' ).remove();
							// Add a removal button
							if( $(this).has('.repeater-remove').length === 0 ) {
								$(this).append('<a href="#" class="repeater-remove">Remove</a>');
							}
						}
						// If there's a removal button on the last item, get rid of it.
						else if( $(this).has('.repeater-remove').length > 0 ) {
							$(this).find('.repeater-remove').remove();
						}
					});
				},

				/**
				* Insert required flags as required.
				* Also get rid of the "Select..." option when it's not needed.
				* @return void
				*/

				_updateRequiredFlag: function() {
					var selects = this._dom.group.find('.form-group.repeater select');
					var empty = selects.filter(function(){
						return $(this).val() === "";
					});

					if( selects.length === empty.length ) {
						selects.first().attr({ required: 'required' });
					}

					else {
						selects.first().removeAttr('required');
					}
				},

				/**
				* The version number of this plugin
				* @var string
				*/

				_version: '1.0'

			};
			// Instantiate the widget
			return selectopoly.init( this );
		});
	};

})( jQuery );

/**
* Apply automatically to select elements on load.
*/

(function() {

	var $ = jQuery, s = document.getElementsByTagName('script');
	if (s[s.length - 1].src.indexOf('?auto') > -1 ) {
		$().ready(function () {
			$('select[multiple]').selectopoly();
		});
	}

})();