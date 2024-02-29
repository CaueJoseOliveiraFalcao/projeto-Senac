import DashboardPost from "./DashboardPost";

const posts = [
    {
        id :1,
        post_desc : 'test',
        img : "https://img.freepik.com/fotos-gratis/a-paisagem-bonita-do-sol-da-praia-com-um-barco_1112-212.jpg?w=1380",
        userName : 'teste',
        userImg :"",
    },
    {
        id :2,
        post_desc : 'test2',
        img : "https://img.freepik.com/fotos-gratis/vista-incrivel-de-uma-falesia-verde-perto-do-mar-no-arquipelago-dos-acores-portugal_181624-48407.jpg?t=st=1709217126~exp=1709220726~hmac=829dc2292dd773d9a678d1c247eacd111f4a54888d20419fd1b294d8abec614d&w=1380",
        userName : 'teste2',
        userImg :"",
    }
]
export default function DashboardFeed() {
    return (
        <div>
            {posts.map((post , id) => {
                return (
                    <DashboardPost post={post} key={id}/>
                )
            })}
        </div>
    );
}