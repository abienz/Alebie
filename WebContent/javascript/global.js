// JavaScript Document
var section = "";
var project = "";
var projects = $("#projects ul li");

$(document).ready(function(){
	setupSections();
	setupLinks();
	setupProjects();
});

function setupSections(){
	var sections = $(".section");
	for(var i=1;i<sections.length;i++){
		var current_section = sections[i];
		$(current_section).css("display","none");
	}
	section = sections[0];
}

function setupLinks(){
	var links = $("#nav a");
	for(var i=0;i<links.length;i++){
		var current_link = links[i];
		$(current_link).click(function(){
			var sections = $(".section");
			var current_href = getHref(this);
		
			$(section).fadeOut("slow", function(){
				$(current_href).fadeIn("slow");
			});
			section = $(current_href);
				
			return false;
		});
	}
}

function getHref(current_link){
	var href_array= $(current_link).attr('href').split("/");
	var part_num = 0;
	
	while (part_num < href_array.length) {
	 last_part = href_array[part_num];
	 part_num += 1;
	}
	
	return last_part;
}

function setupProjects(){
	for(var i=1;i<projects.length;i++){
		var current_project = projects[i];
		$(current_project).css("display","none");
	}
	project = projects[0];
	setupProjectLinks();
}

function setupProjectLinks(){
	var next = $("#projects div a")[1];
	var previous = $("#projects div a")[0];
	
	$(next).click(function(){
		$(project).fadeOut("slow", function(){
			for(var i=0;i<projects.length;i++){
				if(this===projects[i]){
						var next_project = nextProject(i);
					$(projects[next_project]).fadeIn("slow");
					project = projects[next_project];
				}
			}
		});
		return false;
	});
	
	$(previous).click(function(){
		$(project).fadeOut("slow", function(){
			for(var i=0;i<projects.length;i++){
				if(this===projects[i]){
						var previous_project = previousProject(i);
					$(projects[previous_project]).fadeIn("slow");
					project = projects[previous_project];
				}
			}
		});
		return false;
	});
}

function nextProject(index){
	if(index==projects.length-1){
		index = 0;
	} else {
		index = index + 1;
	}
	return index;
}

function previousProject(index){
	if(index==0){
		index = projects.length-1;
	} else {
		index = index - 1;
	}
	return index;
}