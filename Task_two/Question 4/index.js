 document.addEventListener("keydown", function(event) {
      if (event.key === "Alt" || event.key === "Control" || event.key === "Shift") {
        return;
      }

      let code = event.keyCode || event.which;
      let msg = "Key Code: " + code;

      if (event.altKey) msg += "\nAlt key is pressed.";
      if (event.ctrlKey) msg += "\nCtrl key is pressed.";
      if (event.shiftKey) msg += "\nShift key is pressed.";

      alert(msg);
    });