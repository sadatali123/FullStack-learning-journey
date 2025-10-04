const zod= require("zod");

function validate(obj){
    const schema = zod.object ({
        email: zod.string().email(),
        password: zod.string().min(5)
    })
    
    const result = schema.safeParse(obj);
    console.log(result);


}
validate({
    email: "sadsadfgmail.com",
    password: "1234567"

});