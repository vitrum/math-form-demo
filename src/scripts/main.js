var myDataRef = new Wilddog("https://math-form-demo.wilddogio.com/");
    $("#passInput").keypress(function (e) {
      if (e.keyCode == 13) {
        var name = $("#nameInput").val();
        var text = $("#passInput").val();
        myDataRef.push({name: name, text: text});
        console.log(text);
        $("#passInput").val("");
      }
    });
    myDataRef.on("child_added", function(snapshot) {
      var message = snapshot.val();
      displayChatMessage(message.name, message.text);
    });
    function displayChatMessage(name, text) {
      $("<div/>").text(text).prepend($("<em/>").text(name+": ")).appendTo($("#messagesDiv"));
      $("#messagesDiv")[0].scrollTop = $("#messagesDiv")[0].scrollHeight;
    };