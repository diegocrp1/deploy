let regexImage = /\.(jpg|jpeg|gif|png|bmp|webp|svg)$/i;
const regex = /^[^\d]+$/;


 export const validate=(inputs)=>{
    const errors={}
    if (!regex.test(inputs.name)) {
      errors.name = "No se permite números";
    }
    if(inputs.name.length>10){
      errors.name="Numero de caracteres invalido"
    }
    if(!inputs.name.length){
      errors.name="No puede estar vacio"
    }
    if(!regexImage.test(inputs.image)){
      errors.image="Imagen incorrecta"
    }
    if(inputs.life<10){
      errors.life="La vida tiene que superar los 10"
    }
    if(inputs.attack<10){
      errors.attack="El ataque tiene que ser mayor"
    }
    if(inputs.defense<10){
      errors.defense="la defensa tiene que ser mayor"
    }
    return errors
  }

 export const validateTypes=(array)=>{
    let errors={}
    if(!array.length){
      errors.error1="Selecciona un Tipo"
    }
    if(array.length>2){
      errors.error2="No puedes seleccionar mas de dos"
    }
    return errors;
  }

  