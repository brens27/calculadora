$(document).ready(function(){
	list();
});
 
function Item(number){
	self = this;
	self.number = number;
	self.element = $('<li>' + self.number + '</li>').
	draggable({helper: "clone",
		drag: function(event, ui) {
			//console.log("cayo drag");
			//console.log(this);
			$("#cardSlots").droppable({					
				drop: function(event, ui) {	
					// console.log(event);			
					var itemHTML = ui.draggable.clone();
					 console.log(itemHTML);
					$('#cardSlots #cards_slots').append(itemHTML);
					var itemObj = parseInt(itemHTML.text());
					var sumObj = parseInt($('#total_sum').text());
					var sumitem = sumObj + itemObj;

					console.log(itemObj);
					$('#total_sum').text(sumitem) 
				}
			})
		}
	})
}

var list = function() {
	//console.log('entre');
	for(i = 0; i < 10; i++) {
		var listItem = new Item(i);
		$('#cardPile .cards_pile').append(listItem.element);
		// console.log(listItem.element);
		// console.log(listItem);
	};
}
