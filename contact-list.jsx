"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "bh-mj-contact-list",
			"path": "bh-mj-contact-list/contact-list.jsx",
			"file": "contact-list.jsx",
			"module": "contact-list",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-contact-list.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Contact List Component.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"doubt": "doubt",
			"falzy": "falzy",
			"Component": "react.Component",
			"Issue": "bh-mj-issue",
			"MJMLElement": "mjml-core",
			"parseon": "parseon",
			"Prompt": "bh-mj-prompt",
			"React": "react",
			"Section": "mjml-section",
			"SmallDetail": "bh-mj-small-detail",
			"sxty4": "sxty4",
			"wichevr": "wichevr"
		}
	@end-include
*/

import React, { Component } from "react";

import { MJMLElement } from "mjml-core";

import Section from "mjml-section";

import Issue from "bh-mj-issue";
import Prompt from "bh-mj-prompt";
import SmallDetail from "bh-mj-small-detail";

import arid from "arid";
import doubt from "doubt";
import falzy from "falzy";
import parseon from "parseon";
import sxty4 from "sxty4";
import wichevr from "wichevr";

const tagName = "mj-contact-list";

const parentTag = [ "mj-container", "mj-wrapper" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"background-color": "white",
		"foreground-color": "black",
		"list": [ ]
	},
};

@MJMLElement
class ContactList extends Component {
	render( ){
		const { mjAttribute } = this.props;

		let { list, backgroundColor, foregroundColor } = this.props;

		list = wichevr( list, mjAttribute( "list" ) );

		if( typeof list == "string" ){
			try{
				list = parseon( sxty4( list ).decode( ) );

			}catch( error ){
				return ( <Issue error={ error }></Issue> );
			}
		}

		if( !doubt( list, ARRAY ) || arid( list ) ){
			return ( <Prompt
						message="Sorry, there's no contact list to be shown"
						background-color="#227ee5"
						foreground-color="white"
						side-color="#1758a0"
					>
					</Prompt> );
		}

		backgroundColor = wichevr( backgroundColor, mjAttribute( "background-color" ) );

		foregroundColor = wichevr( foregroundColor, mjAttribute( "foreground-color" ) );

		let width = `${ Math.round( ( 100 / list.length ) / 10 ) * 10 }%`

		return ( <Section
					{ ...this.props }
				>
					{
						list.map( ( contact, index ) => {
							return ( <SmallDetail
										key={ index }
										title={ contact.title }
										label={ contact.label }
										value={ contact.value }
										width={ width }
										align="center"
										reverse="true"
										padding="10px 0px 0px 0px"
										background-color={ backgroundColor }
										foreground-color={ foregroundColor }
									>
									</SmallDetail> );
						} )
					}
				</Section>);
	}
}

ContactList.tagName = tagName;
ContactList.parentTag = parentTag;
ContactList.endingTag = endingTag;
ContactList.defaultMJMLDefinition = defaultMJMLDefinition;

export default ContactList;
