import { redirect } from "next/dist/server/api-utils";


export default function ContentLayout({
children,

} : {
    children : React.ResctNode;

})   {
    conat uswr =false;
    if(!user){
        redirect ("/login")
    }
return (
    <div className="max-w-4xl mx-auto">
        <p className=" bg-indigo-700 w-full text-center ">
            dono del layaout {marketing }
        </p>
        <main> {children}    </main>
    </div>
)
}