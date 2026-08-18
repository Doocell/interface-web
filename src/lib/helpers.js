export function handleError(error){

if(!error) return null;

console.error(
"INTERFACE ERROR:",
error.message
);

return error.message;

}