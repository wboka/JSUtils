var formatJSON = {
	about: function() {
	    alert("formatJSON (Version 1.0.0)\n\nAuthor: Wayne Boka\nLast Update: 01/15/2015");
	},
	repeat: function(s, count) {
		return new Array(count + 1).join(s);
	},	
	format: function(json) {
		var i = 0,tab = "  ",newJson = "",indentLevel = 0,inString = false,currentChar = null;

		for (i = 0; i < json.length; i++) { 
			currentChar = json.charAt(i);

			switch (currentChar) {
			case '{': 
			case '[': 
				if (!inString) { 
					newJson += currentChar + "\n" + this.repeat(tab, indentLevel + 1);
					indentLevel += 1; 
				} else { 
					newJson += currentChar; 
				}
				break; 
			case '}': 
			case ']': 
				if (!inString) { 
					indentLevel -= 1; 
					newJson += "\n" + this.repeat(tab, indentLevel) + currentChar; 
				} else { 
					newJson += currentChar; 
				} 
				break; 
			case ',': 
				if (!inString) { 
					newJson += ",\n" + this.repeat(tab, indentLevel); 
				} else { 
					newJson += currentChar; 
				} 
				break; 
			case ':': 
				if (!inString) { 
					newJson += ": "; 
				} else { 
					newJson += currentChar; 
				} 
				break; 
			case ' ':
			case "\n":
			case "\t":
				if (inString) {
					newJson += currentChar;
				}
				break;
			case '"': 
				if (i > 0 && json.charAt(i - 1) !== '\\') {
					inString = !inString; 
				}
				newJson += currentChar; 
				break;
			default: 
				newJson += currentChar; 
				break;                    
			} 
		} 
		
		return newJson;
	},
	viewSource: function() {
		return this.format;
	}
};
