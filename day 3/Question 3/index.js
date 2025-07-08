    let field = document.getElementById("Answer");
    field.readOnly = true;
    const allowed = /^[0-9+\-*/ ]*$/;
    function EnterNumber(value){
        if(!allowed.test(value)){
            return;
        }else{
        field.value += value;
        }
    }

    function EnterOperator(value){
        if(!allowed.test(value)){
            return;
        }else{
            const lastChar = field.value[field.value.length - 1];
            if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                return;
            }else{
            field.value += value;
            return;
            }
        }
    }

    function EnterClear(){
        if(field.value.length === 0){
            return;
        }else{
            field.value = field.value.slice(0, -1);
        }
    }

    function EnterEqual(){
        if(field.value.length === 0){
            return;
        }else{
            field.value = eval(field.value);
            if(isNaN(field.value)){
                field.value = "Error";
            }
        }
    }