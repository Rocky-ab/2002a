
export const validtae_password = /^(?=.*\d)(?=.*[a-zA-Z]).{6,15}$/;
// 验证邮箱
const reg_email = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-z]{2,4})$/;

export function validtae_email(value){
    return reg_email.test(value)
}