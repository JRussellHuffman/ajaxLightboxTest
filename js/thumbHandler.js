function thumbnail (ti, te, ty, num) {
	this.itemTitle = ti;
	this.itemText = te;
	this.itemType = ty;
	this.itemNumber = num;

	//small left div
	this.popThumb = function popThumb() {
		var activeDiv = "div[data-id='"+ this.itemNumber + "']";
		$(activeDiv).html(this.itemTitle);
		$(activeDiv).attr('id', this.itemTitle);
		$(activeDiv).addClass(this.itemType);
	}

	this.addImage = function addImage() {
		var activeDiv = "div[data-id='"+ this.itemNumber + "']";
		$(activeDiv).append('<img class="thumb" src="img/thumbs/'+ this.itemTitle + '.jpg">')
	}
}