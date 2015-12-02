$(function () {
    //####### Buttons
    $('button,.button,#sampleButton').button();

    // Buttonset
    $('#radioset').buttonset();
    $("#format").buttonset();

    //####### Toolbar
    $("#play, #shuffle").button();
    $("#repeat").buttonset();

    //####### Accordion
    $("#menu-collapse").accordion({
        header: "h3"
    });

    // Dialog Link
    $('#dialog_link').click(function () {
        $('#dialog_simple').dialog('open');
        return false;
    });

    // Modal Link
    $('#modal_link').click(function () {
        $('#dialog-message').dialog('open');
        return false;
    });
    //hover states on the static widgets
    $('#dialog_link, #modal_link, ul#icons li').hover(
        function () {
            $(this).addClass('ui-state-hover');
        }, function () {
            $(this).removeClass('ui-state-hover');
        }
    );

    // Dialog Simple
    $('#dialog_simple').dialog({
        autoOpen: false,
        width: 600,
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    //####### Dialogs
    $("#dialog-message").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });

    // Remove focus from buttons
    $('.ui-dialog :button').blur();

    //####### Tabs
    $('#tabs2, #tabs, #tabs3').tabs();

    // Dynamic tabs
    var tabTitle = $( "#tab_title" ),
        tabContent = $( "#tab_content" ),
        tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
        tabCounter = 2;

    var tabs = $( "#tabs2" ).tabs();

    // modal dialog init: custom buttons and a "close" callback reseting the form inside
    var dialog1 = $( "#dialog1" ).dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Add: function() {
                addTab();
                $( this ).dialog( "close" );
            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        },
        close: function() {
            form1[ 0 ].reset();
        }
    });
	 // modal dialog init: custom buttons and a "close" callback reseting the form inside
    var dialog2 = $( "#dialog2" ).dialog({
        autoOpen: false,
        modal: true,		
        buttons: {
            Edit: function() {
				editTab();
                $( this ).dialog( "close" );
            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        },
        close: function() {
            form2[ 0 ].reset();
        }
    });

    // addTab form: calls addTab function on submit and closes the dialog
    var form1 = dialog1.find( "form" ).submit(function( event ) {
        addTab();
        dialog1.dialog( "close" );
        event.preventDefault();
    });
	var form2 = dialog2.find( "form" ).submit(function( event ) {
        editTab();
        dialog2.dialog( "close" );
        event.preventDefault();
    });


    // actual addTab function: adds new tab using the input from the form above
    function addTab() {
		var name = $('#name').val();
		var age = $('#age').val();
		var telephone = $('#telephone').val();
		//console.dir(name+'---'+age+'---'+telephone);
		var table = $('#datagrid');
		var data = '<tr><td align="center"><input type="radio" name="tab_cen"></td><td align="center">'+name+'</td><td align="center">'+age+'</td><td align="center">'+telephone+'</td></tr>'
		table.append(data);
    }
	
	function editTab() {
		var table = $('#datagrid');	
        var name = $('#tab_title').val();
		var age = $('#tab_title2').val();
		var telephone = $('#tab_title3').val();	
        $('input[type="radio"]:checked').parent().nextAll().eq(0).html(name);	
        $('input[type="radio"]:checked').parent().nextAll().eq(1).html(age);
        $('input[type="radio"]:checked').parent().nextAll().eq(2).html(telephone);		
    }
	function getData(){
		var name = $('input[type="radio"]:checked').parent().nextAll().eq(0).html();
		var age = $('input[type="radio"]:checked').parent().nextAll().eq(1).html();
		var tel = $('input[type="radio"]:checked').parent().nextAll().eq(2).html();
        $('#tab_title').val(name);
        $('#tab_title2').val(age);	
        $('#tab_title3').val(tel);
	}

    // addTab button: just opens the dialog
    $( "#add_tab1" )
        .button()
        .click(function() {
            dialog1.dialog( "open" );
        });
	$( "#add_tab2" )
        .button()
        .click(function() {
			if($('input[type="radio"]:checked').length!=0){
			   getData();
			   dialog2.dialog( "open" );
			}else{
			   alert('请选择其中一项！');
			}
        });

    // close icon: removing the tab on click
    $( "#tabs2" ).on( "click",'span.ui-icon-close', function() {

        var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
    });

    //Combination examples (tabs) and open dialog
    $('#sampleButton').on('click', function(event){
        event.preventDefault();
        $('#dialog_simple').dialog({
            autoOpen: true,
            modal: true,
            width: 600,
            buttons: {
                "Save": function () {
                    $(this).dialog("close");
                },
                "Cancel": function () {
                    $(this).dialog("close");
                }
            }
        });
    });

    //####### Datepicker
    $('#datepicker').datepicker({
        inline: true
    });

    //####### Slider

    // Horizontal slider
    $('#h-slider').slider({
        range: true,
        values: [17, 67]
    });

    // Vertical slider
    $("#v-slider").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#v-slider").slider("value"));

    // Autocomplete
    var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

    $("#tags").autocomplete({
        source: availableTags
    });

    //####### Menu
    $("#menu").menu();

    //####### Spinner

    var spinner = $( "#spinner" ).spinner();

    $( "#disable" ).click(function() {
        if ( spinner.spinner( "option", "disabled" ) ) {
            spinner.spinner( "enable" );
        } else {
            spinner.spinner( "disable" );
        }
    });
    $( "#destroy" ).click(function() {
        if ( spinner.data( "ui-spinner" ) ) {
            spinner.spinner( "destroy" );
        } else {
            spinner.spinner();
        }
    });
    $( "#getvalue" ).click(function() {
        alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).click(function() {
        spinner.spinner( "value", 5 );
    });

    //####### Tooltip

    $( "#tooltip" ).tooltip();

    // File input (using http://filamentgroup.com/lab/jquery_custom_file_input_book_designing_with_progressive_enhancement/)
    /*
	$('#file').customFileInput({
        button_position : 'right'
    });
*/
    //####### Wijmo

    //$("#menu1").wijmenu({ trigger: ".wijmo-wijmenu-item", triggerEvent: "click" });

    // Select a Date Range with datepicker
    $( "#rangeBa" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function( selectedDate ) {
            $( "#rangeBb" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#rangeBb" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function( selectedDate ) {
            $( "#rangeBa" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});