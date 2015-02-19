(function(window, document){
  
  window.urlServer = 'http://104.236.68.188/server/admin/API/';
	window.AjaxGet = function AjaxGet(url,data, callback){
        $.ajax({
        type: "GET",
        data: data,
        url: url,
        beforeSend: function() {
           spinnerplugin.show({
              overlay: false,    // defaults to true
              timeout: 30,       // defaults to 0 (no timeout)
              fullscreen: true,  // defaults to false
          });
        },
        complete:function() {
           callback(null, data);
           spinnerplugin.hide();
        }
        });
    }

    window.AjaxPost = function AjaxPost(url, data, callback){
        $.ajax({
        type: "POST",
        url: url,
        data: data,
        beforeSend: function() {
           $('gif-load').css('display', 'block');
        },
        complete:function() {
           $('gif-load').css('display', 'none');
           callback(null, data);
        }
        });
    }

    window.addArray = function addArray(array, obj){
        if(array.length == 0){
          array[0] = obj;
        }else{
          array.push(obj);
        }
        return array;
    }

    window.msgAlert = function msgAlert(message){
    	var itens = "<div class='alert alert-danger' role='alert'>";
          itens += "<p class='alert-link text-center'>"+message+"</p>";
          itens += "</div>";

        return itens;
    }

    window.changeFormat = function changeFormat(value){
      if(typeof value === 'string'){
        value = parseFloat(value.replace(',','.')); 
      }
      return value;
      
    }

    window.formatValue = function formatValue(value){

        value = value.split('$')[1].split('');

        var aux="";
        for(var i = 1; i <= value.length-1;i++){
            aux += value[i];
        }
        
        return aux;
      }

    window.formatArray = function formatArray(array){

        array = array.split("  ");
        
        array = array[array.length-1];
        array = JSON.parse(array);
        return array;
    }

    window.formatData = function formatData(data){
        if(data != null){
          data = data.split(" ")[0];
          data = data.split("-");
          dia = data[2];
          mes = data[1];
          ano = data[0];
          data = dia+'/'+mes+'/'+ano;
        }else{
          data = "Não contém";
        }

        return data;
    }
    window.QueryStringToHash = function QueryStringToHash(query) {
      var query_string = {};
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        pair[0] = decodeURIComponent(pair[0]);
        pair[1] = decodeURIComponent(pair[1]);
          // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = pair[1];
          // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]], pair[1] ];
          query_string[pair[0]] = arr;
          // If third or later entry with this name
        } else {
          query_string[pair[0]].push(pair[1]);
        }
      } 
      return query_string;
    };

})(window);