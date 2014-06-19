#jQuery Selectopoly

Selectopoly is a jQuery plugin that replaces a multiple value select field with several single value select fields that can be added and removed as required. This allows easier selection of values, with improved visibility of selected values.

##Requirements

* [jQuery](http://jquery.com)

##Installation

Copy the Selectopoly file (either the uncompressed or the minified one) to your resources directory and then simply link to the file in your HTML document.

```html
<script src="jquery-selectopoly.js" type="text/javascript"></script>
```

To get up and running quickly, you can set Selectopoly to automatically match all `select` elements with the `multiple` attribute within the document by adding "?auto" to the end of the `script` element's `src` attribute.

```html
<script src="jquery-selectopoly.js?auto" type="text/javascript"></script>
```

##Using Selectopoly

To run Selectopoly, simply run the function on any multi-value `select` elements matched with jQuery, like so:

```javascript
$('select[multiple]').selectopoly();
```

Remember that if you want to retrieve all of the selected values, the `name` attribute must include square brackets, e.g. "field_name[]". If these are not present, the browser will only return the first selected value.

##Released under the BSD License

Copyright © 2014 Daniel Farrelly

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

*	Redistributions of source code must retain the above copyright notice, this list
	of conditions and the following disclaimer.
*	Redistributions in binary form must reproduce the above copyright notice, this
	list of conditions and the following disclaimer in the documentation and/or
	other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.