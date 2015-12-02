//jstree start
$(function(){
	$('#ajax1').jstree({
		'core' : {
			'data' : {
				url : "../../../resources/json/list.json",
				dataType : "json"
			}

		},
		"types" : {
			"#" : {
				"max_children" : 1,
				"max_depth" : 4,
				"valid_children" : ["root"]
			},
			"root" : {
				"icon" : "/static/3.1.1/assets/images/tree_icon.png",
				"valid_children" : ["default"]
			},
			"default" : {
				"valid_children" : ["default","file"]
			},
			"file" : {
				"icon" : "glyphicon glyphicon-file",
				"valid_children" : []
			}
		},
		"plugins" : ["themes","html_data","contextmenu" ],
		"contextmenu":{
			"items":{
				"create":null,
				"rename":null,
				"remove":null,
				"ccp":null
			}
		}

	});

});