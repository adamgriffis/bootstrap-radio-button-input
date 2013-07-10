$.fn.radioInputButton = function()
{
	var $this = $(this);
	$this.find("label").hide();
	$this.find("input").hide();
	$this.append("<div class='btn-group' data-toggle='buttons-radio'>");

	$parentDiv = $this.find("div.btn-group");

	var selectedId = $this.find(":radio:checked").attr("id");

	$this.find("label").each(function(){
		$parentDiv.append('<button type="button" data-for="' + $(this).attr("for") + '" class="btn"/>');

		$newButton = $parentDiv.find("[data-for='" + $(this).attr("for") + "']");

		$newButton.append($(this).children().clone()); // copy the cotents of the label over 

		if ( $(this).attr("for") == selectedId )
		{
			$newButton.addClass("active");
		}

		$newButton.click(function()
		{
			var inputId = $(this).attr("data-for");
			$("#" + inputId).click();
		});
	});

	$parentDiv.button();

	return this;
}