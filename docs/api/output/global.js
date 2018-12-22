Ext.data.JsonP.global({"tagname":"class","name":"global","alternateClassNames":[],"members":[{"name":"alphaCharsStr","tagname":"property","owner":"global","id":"property-alphaCharsStr","meta":{}},{"name":"alphaNumericCharsStr","tagname":"property","owner":"global","id":"property-alphaNumericCharsStr","meta":{}},{"name":"decimalNumbersStr","tagname":"property","owner":"global","id":"property-decimalNumbersStr","meta":{"private":true}},{"name":"domainNameRegex","tagname":"property","owner":"global","id":"property-domainNameRegex","meta":{}},{"name":"htmlCharacterEntitiesRegex","tagname":"property","owner":"global","id":"property-htmlCharacterEntitiesRegex","meta":{"private":true}},{"name":"htmlRegex","tagname":"property","owner":"global","id":"property-htmlRegex","meta":{"private":true}},{"name":"defaults","tagname":"method","owner":"global","id":"method-defaults","meta":{}},{"name":"ellipsis","tagname":"method","owner":"global","id":"method-ellipsis","meta":{}},{"name":"getDomainNameStr","tagname":"method","owner":"global","id":"method-getDomainNameStr","meta":{}},{"name":"indexOf","tagname":"method","owner":"global","id":"method-indexOf","meta":{}},{"name":"remove","tagname":"method","owner":"global","id":"method-remove","meta":{}},{"name":"splitAndCapture","tagname":"method","owner":"global","id":"method-splitAndCapture","meta":{}},{"name":"truncateEnd","tagname":"method","owner":"global","id":"method-truncateEnd","meta":{}},{"name":"truncateMiddle","tagname":"method","owner":"global","id":"method-truncateMiddle","meta":{}},{"name":"truncateSmart","tagname":"method","owner":"global","id":"method-truncateSmart","meta":{}}],"aliases":{},"files":[{"filename":"","href":""}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Global variables and functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-alphaCharsStr' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-alphaCharsStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-alphaCharsStr' class='name expandable'>alphaCharsStr</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\nalphabetic (\"letter\") chars in the unicode charac...</div><div class='long'><p>The string form of a regular expression that would match all of the\nalphabetic (\"letter\") chars in the unicode character set when placed in a\nRegExp character class (<code>[]</code>). This includes all international alphabetic\ncharacters.</p>\n\n<p>These would be the characters matched by unicode regex engines <code>\\p{L}</code>\nescape (\"all letters\").</p>\n\n<p>Taken from the XRegExp library: http://xregexp.com/\nSpecifically: http://xregexp.com/v/3.0.0/unicode-categories.js</p>\n<p>Defaults to: <code>&#39;A-Za-z\\\\xAA\\\\xB5\\\\xBA\\\\xC0-\\\\xD6\\\\xD8-\\\\xF6\\\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B4\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6E5\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AD\\uA7B0-\\uA7B7\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC&#39;</code></p></div></div></div><div id='property-alphaNumericCharsStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-alphaNumericCharsStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-alphaNumericCharsStr' class='name expandable'>alphaNumericCharsStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\nletters and decimal number chars in the unicode c...</div><div class='long'><p>The string form of a regular expression that would match all of the\nletters and decimal number chars in the unicode character set when placed\nin a RegExp character class (<code>[]</code>).</p>\n\n<p>These would be the characters matched by unicode regex engines <code>[\\p{L}\\p{Nd}]</code>\nescape (\"all letters and decimal numbers\")</p>\n</div></div></div><div id='property-decimalNumbersStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-decimalNumbersStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-decimalNumbersStr' class='name expandable'>decimalNumbersStr</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\ndecimal number chars in the unicode character set...</div><div class='long'><p>The string form of a regular expression that would match all of the\ndecimal number chars in the unicode character set when placed in a RegExp\ncharacter class (<code>[]</code>).</p>\n\n<p>These would be the characters matched by unicode regex engines <code>\\p{Nd}</code>\nescape (\"all decimal numbers\")</p>\n\n<p>Taken from the XRegExp library: http://xregexp.com/\nSpecifically: http://xregexp.com/v/3.0.0/unicode-categories.js</p>\n<p>Defaults to: <code>&#39;0-9\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19&#39;</code></p></div></div></div><div id='property-domainNameRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-domainNameRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-domainNameRegex' class='name expandable'>domainNameRegex</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A regular expression to match domain names of a URL or email address. ...</div><div class='long'><p>A regular expression to match domain names of a URL or email address.\nEx: 'google', 'yahoo', 'some-other-company', etc.</p>\n</div></div></div><div id='property-htmlCharacterEntitiesRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/html-parser.html#global-property-htmlCharacterEntitiesRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-htmlCharacterEntitiesRegex' class='name expandable'>htmlCharacterEntitiesRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression that matches common HTML character entities. ...</div><div class='long'><p>The regular expression that matches common HTML character entities.</p>\n\n<p>Ignoring &amp; as it could be part of a query string -- handling it separately.</p>\n<p>Defaults to: <code>/(&amp;nbsp;|&amp;#160;|&amp;lt;|&amp;#60;|&amp;gt;|&amp;#62;|&amp;quot;|&amp;#34;|&amp;#39;)/gi</code></p></div></div></div><div id='property-htmlRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/html-parser.html#global-property-htmlRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-htmlRegex' class='name expandable'>htmlRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression used to pull out HTML tags from a string. ...</div><div class='long'><p>The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and\nattribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.</p>\n\n<p>Capturing groups:</p>\n\n<ol>\n<li>The \"!DOCTYPE\" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.</li>\n<li>If it is an end tag, this group will have the '/'.</li>\n<li>If it is a comment tag, this group will hold the comment text (i.e.\nthe text inside the <code>&amp;lt;!--</code> and <code>--&amp;gt;</code>.</li>\n<li>The tag name for a tag without attributes (other than the &lt;!DOCTYPE&gt; tag)</li>\n<li>The tag name for a tag with attributes (other than the &lt;!DOCTYPE&gt; tag)</li>\n</ol>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-defaults' class='name expandable'>defaults</a>( <span class='pre'>dest, src</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Assigns (shallow copies) the properties of src onto dest, if the\ncorresponding property on dest === undefined. ...</div><div class='long'><p>Assigns (shallow copies) the properties of <code>src</code> onto <code>dest</code>, if the\ncorresponding property on <code>dest</code> === <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dest</span> : Object<div class='sub-desc'><p>The destination object.</p>\n</div></li><li><span class='pre'>src</span> : Object<div class='sub-desc'><p>The source object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The destination object (<code>dest</code>)</p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>str, truncateLen, [ellipsisChars]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Truncates the str at len - ellipsisChars.length, and adds the ellipsisChars to the\nend of the string (by default, two...</div><div class='long'><p>Truncates the <code>str</code> at <code>len - ellipsisChars.length</code>, and adds the <code>ellipsisChars</code> to the\nend of the string (by default, two periods: '..'). If the <code>str</code> length does not exceed\n<code>len</code>, the string will be returned unchanged.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The string to truncate and add an ellipsis to.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The length to truncate the string at.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String (optional)<div class='sub-desc'><p>The ellipsis character(s) to add to the end of <code>str</code>\n  when truncated. Defaults to '...'</p>\n<p>Defaults to: <code>...</code></p></div></li></ul></div></div></div><div id='method-getDomainNameStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-method-getDomainNameStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-getDomainNameStr' class='name expandable'>getDomainNameStr</a>( <span class='pre'>group</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>A function to match domain names of a URL or email address. ...</div><div class='long'><p>A function to match domain names of a URL or email address.\nEx: 'google', 'yahoo', 'some-other-company', etc.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>group</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-indexOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-indexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-indexOf' class='name expandable'>indexOf</a>( <span class='pre'>arr, element</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Supports Array.prototype.indexOf() functionality for old IE (IE8 and below). ...</div><div class='long'><p>Supports <code>Array.prototype.indexOf()</code> functionality for old IE (IE8 and below).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : Array<div class='sub-desc'><p>The array to find an element of.</p>\n</div></li><li><span class='pre'>element</span> : *<div class='sub-desc'><p>The element to find in the array, and return the index of.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index of the <code>element</code>, or -1 if it was not found.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-remove' class='name expandable'>remove</a>( <span class='pre'>arr, fn</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes array elements based on a filtering function. ...</div><div class='long'><p>Removes array elements based on a filtering function. Mutates the input\narray.</p>\n\n<p>Using this instead of the ES5 Array.prototype.filter() function, to allow\nAutolinker compatibility with IE8, and also to prevent creating many new\narrays in memory for filtering.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : Array<div class='sub-desc'><p>The array to remove elements from. This array is\n  mutated.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>A function which should return <code>true</code> to\n  remove an element.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>The mutated input <code>arr</code>.</p>\n</div></li></ul></div></div></div><div id='method-splitAndCapture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-splitAndCapture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-splitAndCapture' class='name expandable'>splitAndCapture</a>( <span class='pre'>str, splitRegex</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Performs the functionality of what modern browsers do when String.prototype.split() is called\nwith a regular expressi...</div><div class='long'><p>Performs the functionality of what modern browsers do when <code>String.prototype.split()</code> is called\nwith a regular expression that contains capturing parenthesis.</p>\n\n<p>For example:</p>\n\n<pre><code>// Modern browsers:\n\"a,b,c\".split( /(,)/ );  // --&gt; [ 'a', ',', 'b', ',', 'c' ]\n\n// Old IE (including IE8):\n\"a,b,c\".split( /(,)/ );  // --&gt; [ 'a', 'b', 'c' ]\n</code></pre>\n\n<p>This method emulates the functionality of modern browsers for the old IE case.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The string to split.</p>\n</div></li><li><span class='pre'>splitRegex</span> : RegExp<div class='sub-desc'><p>The regular expression to split the input <code>str</code> on. The splitting\n  character(s) will be spliced into the array, as in the \"modern browsers\" example in the\n  description of this method.\n  Note #1: the supplied regular expression <strong>must</strong> have the 'g' flag specified.\n  Note #2: for simplicity's sake, the regular expression does not need\n  to contain capturing parenthesis - it will be assumed that any match has them.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>The split array of strings, with the splitting character(s) included.</p>\n</div></li></ul></div></div></div><div id='method-truncateEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/truncate-end.html#global-method-truncateEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-truncateEnd' class='name expandable'>truncateEnd</a>( <span class='pre'>anchorText, truncateLen, ellipsisChars</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A truncation feature where the ellipsis will be placed at the end of the URL. ...</div><div class='long'><p>A truncation feature where the ellipsis will be placed at the end of the URL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchorText</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The maximum length of the truncated output URL string.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String<div class='sub-desc'><p>The characters to place within the url, e.g. \"..\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated URL.</p>\n</div></li></ul></div></div></div><div id='method-truncateMiddle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/truncate-middle.html#global-method-truncateMiddle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-truncateMiddle' class='name expandable'>truncateMiddle</a>( <span class='pre'>url, truncateLen, ellipsisChars</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Date: 2015-10-05\nAuthor: Kasper Søfren &#x73;&#x6f;&#101;&#x66;&#114;&#105;&#116;&#x7a;&#x40;&#103;&#x6d;&#x61;&#105;...</div><div class='long'><p>Date: 2015-10-05\nAuthor: Kasper Søfren <a href=\"&#x6d;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#x6f;&#x65;&#x66;&#x72;&#x69;&#x74;&#x7a;&#x40;&#x67;&#109;&#97;&#x69;&#108;&#46;&#99;&#x6f;&#109;\">&#x73;&#x6f;&#101;&#x66;&#114;&#105;&#116;&#x7a;&#x40;&#103;&#x6d;&#x61;&#105;&#x6c;&#x2e;&#99;&#111;&#109;</a> (https://github.com/kafoso)</p>\n\n<p>A truncation feature, where the ellipsis will be placed in the dead-center of the URL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>A URL.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The maximum length of the truncated output URL string.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String<div class='sub-desc'><p>The characters to place within the url, e.g. \"..\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated URL.</p>\n</div></li></ul></div></div></div><div id='method-truncateSmart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/truncate-smart.html#global-method-truncateSmart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-truncateSmart' class='name expandable'>truncateSmart</a>( <span class='pre'>url, truncateLen, ellipsisChars</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Date: 2015-10-05\nAuthor: Kasper Søfren &#x73;&#x6f;&#x65;&#x66;&#114;&#x69;&#116;&#x7a;&#x40;&#x67;&#109;&#x61;&#x69;...</div><div class='long'><p>Date: 2015-10-05\nAuthor: Kasper Søfren <a href=\"&#x6d;&#x61;&#105;&#x6c;&#x74;&#111;&#x3a;&#115;&#111;&#101;&#x66;&#x72;&#105;&#116;&#x7a;&#x40;&#x67;&#x6d;&#x61;&#105;&#108;&#46;&#99;&#111;&#109;\">&#x73;&#x6f;&#x65;&#x66;&#114;&#x69;&#116;&#x7a;&#x40;&#x67;&#109;&#x61;&#x69;&#x6c;&#46;&#x63;&#111;&#x6d;</a> (https://github.com/kafoso)</p>\n\n<p>A truncation feature, where the ellipsis will be placed at a section within\nthe URL making it still somewhat human readable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>A URL.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The maximum length of the truncated output URL string.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String<div class='sub-desc'><p>The characters to place within the url, e.g. \"...\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated URL.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});