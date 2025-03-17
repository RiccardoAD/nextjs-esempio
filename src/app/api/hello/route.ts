//app/api/hello/toute.ts
export async function GET(request:Request) {
    console.log("Api chiamata");
    
    return Response.json({ message: "Hello world"})}